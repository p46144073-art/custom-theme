import type { Register, ThemeResult, ThemeSetArgs } from 'claude-code'

import { THEMES } from './themes.js'
import type { ThemeDef } from './themes.js'

const DEFAULT_ID = 'autumn-maple'

// How often each open conversation looks at the shared choice. It reads one tiny file and calls
// no model, so it costs no tokens.
const POLL_MS = 3000

type Api = {
  theme: { set: (args: ThemeSetArgs) => Promise<ThemeResult>; clear: () => Promise<ThemeResult> }
  fs: { read: (path: string) => Promise<unknown>; write: (path: string, text: string) => Promise<void> }
  env: { get: (name: string) => Promise<string | undefined> }
  store: { get: (key: string) => Promise<unknown>; set: (key: string, value: unknown) => Promise<void> }
  ui: { toast: (text: string) => unknown; status: (text: string | undefined) => unknown }
}

function look(t: ThemeDef): ThemeSetArgs {
  if (t.scene === undefined) {
    return { colors: t.colors }
  }

  return { colors: t.colors, backdrop: { scene: t.id, glass: t.glass ?? false } }
}

function find(arg: string): ThemeDef | undefined {
  const q = arg.trim().toLowerCase()

  if (q === '') {
    return undefined
  }

  if (/^\d+$/.test(q)) {
    return THEMES[Number(q) - 1]
  }
  const exact = THEMES.find(t => t.id === q || t.name === arg.trim())

  if (exact !== undefined) {
    return exact
  }
  const partial = THEMES.filter(t => t.id.includes(q) || t.name.includes(arg.trim()))

  return partial.length === 1 ? partial[0] : undefined
}

// The choice every conversation shares: one small file, so a switch in one conversation reaches the others.
async function sharedPath($: Api): Promise<string | undefined> {
  const home = (await $.env.get('USERPROFILE')) ?? (await $.env.get('HOME'))

  return home === undefined || home === '' ? undefined : `${home.replace(/[\\/]$/, '')}/.claude/custom-theme-current.txt`
}

async function readChoice($: Api): Promise<string | undefined> {
  const path = await sharedPath($)

  if (path !== undefined) {
    try {
      const text = String(await $.fs.read(path)).trim()

      if (text !== '') {
        return text
      }
    } catch {
      // No file yet: fall back to this mod's own store below.
    }
  }
  const saved = await $.store.get('current')

  return typeof saved === 'string' ? saved : undefined
}

async function writeChoice($: Api, id: string): Promise<void> {
  await $.store.set('current', id)
  const path = await sharedPath($)

  if (path !== undefined) {
    try {
      await $.fs.write(path, `${id}\n`)
    } catch {
      // The store still holds it for this conversation.
    }
  }
}

function listText(currentId: string | undefined): string {
  const rows = THEMES.map((t, i) => {
    const mark = t.id === currentId ? '●' : ' '
    const mode = t.mode === 'dark' ? '深色' : '淺色'
    const motion = t.scene === undefined ? '無動畫' : '動態背景'

    return `${mark} ${String(i + 1).padStart(2, ' ')}. ${t.name}（${t.id}）· ${mode} · ${motion}\n      ${t.description}`
  })
  const current = THEMES.find(t => t.id === currentId)

  return [
    `可用主題 ${THEMES.length} 個，目前：${current === undefined ? '沒有套用' : current.name}`,
    '',
    ...rows,
    '',
    '用法：',
    '  /custom-theme 3            用編號切換',
    '  /custom-theme 櫻花          用名稱或 id 切換',
    '  /custom-theme next         下一個主題',
    '  /custom-theme off          關閉，回到 app 原本的樣子',
    '  /custom-theme list         顯示這份清單',
    '',
    '切換後，其他開著的對話會在幾秒內自動跟著換。',
  ].join('\n')
}

export const register: Register = on => {
  // What this conversation is showing now. It starts over when the mod reloads.
  let applied: string | undefined

  async function sync($: Api): Promise<void> {
    const choice = (await readChoice($)) ?? DEFAULT_ID

    if (choice === applied) {
      return
    }

    if (choice === 'off') {
      if (applied !== undefined) {
        await $.theme.clear()
      }
      applied = 'off'

      return
    }
    const t = find(choice) ?? find(DEFAULT_ID)

    if (t === undefined) {
      return
    }
    const unpainted = t.problems.find(line => line.startsWith("Desktop won't paint"))

    if (unpainted !== undefined) {
      $.ui.toast(unpainted)
    }
    const set = await $.theme.set(look(t))

    applied = choice

    if (!set.isDrawn) {
      $.ui.status(`${t.id}: ${set.reason}`)
    }
  }

  on('session.start', async ($, e, next) => {
    await $.command.register({
      name: 'custom-theme',
      description: '列出並切換自訂主題與動態背景（所有對話同步）',
      argumentHint: '[list | 編號 | 名稱 | next | off]',
    })
    await sync($)
    $.clock.every(POLL_MS, () => sync($).catch(() => undefined))

    return next(e)
  })

  on('command.run', { command: 'custom-theme' }, async ($, e) => {
    const arg = e.args.trim()
    const saved = await readChoice($)
    const currentId = saved === 'off' ? undefined : (saved ?? DEFAULT_ID)

    if (arg === '' || arg === 'list' || arg === 'ls') {
      return { text: listText(currentId) }
    }

    if (arg === 'off' || arg === 'clear') {
      await $.theme.clear()
      await writeChoice($, 'off')
      applied = 'off'

      return { text: '已關閉自訂主題，回到 app 原本的樣子。其他開著的對話會在幾秒內跟著關閉。要再開啟請輸入 /custom-theme 加上編號或名稱。' }
    }
    let target: ThemeDef | undefined

    if (arg === 'next') {
      const i = THEMES.findIndex(t => t.id === currentId)

      target = THEMES[(i + 1) % THEMES.length]
    } else {
      target = find(arg)
    }

    if (target === undefined) {
      return { text: `找不到「${arg}」。\n\n${listText(currentId)}` }
    }
    const unpainted = target.problems.find(line => line.startsWith("Desktop won't paint"))
    const set = await $.theme.set(look(target))

    applied = target.id
    await writeChoice($, target.id)

    if (!set.isDrawn) {
      $.ui.status(`${target.id}: ${set.reason}`)

      return {
        text: `已選擇「${target.name}」並記住，但目前這個視窗畫不出主題。原因：${set.reason}`,
      }
    }
    const warn = unpainted === undefined ? '' : `\n注意：${unpainted}`

    return { text: `已切換到「${target.name}」：${target.description}。其他開著的對話會在幾秒內跟著換。${warn}` }
  })

  on('ui.render', { component: 'Backdrop' }, ($, e, next) => {
    if (e.surface !== 'desktop' && e.surface !== 'mobile') {
      return next(e)
    }
    const t = THEMES.find(x => x.id === e.props.scene)

    if (t === undefined || t.scene === undefined) {
      return next(e)
    }
    const { Svg } = $.ui.resolve(e)

    return <Svg source={t.scene} alt={t.description} isInteractive />
  })
}
