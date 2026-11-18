import type { Register, ThemeResult, ThemeSetArgs } from 'claude-code'

import { THEMES } from './themes.js'
import type { ThemeDef } from './themes.js'

const DEFAULT_ID = 'autumn-maple'

type ThemeApi = { theme: { set: (args: ThemeSetArgs) => Promise<ThemeResult> } }

function look(t: ThemeDef): ThemeSetArgs {
  if (t.scene === undefined) {
    return { colors: t.colors }
  }

  return { colors: t.colors, backdrop: { scene: t.id, glass: t.glass ?? false } }
}

async function apply($: ThemeApi, t: ThemeDef): Promise<ThemeResult> {
  return $.theme.set(look(t))
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
  ].join('\n')
}

export const register: Register = on => {
  on('session.start', async ($, e, next) => {
    await $.command.register({
      name: 'custom-theme',
      description: '列出並切換自訂主題與動態背景',
      argumentHint: '[list | 編號 | 名稱 | next | off]',
    })
    const saved = await $.store.get('current')

    if (saved !== 'off') {
      const t = find(typeof saved === 'string' ? saved : DEFAULT_ID) ?? find(DEFAULT_ID)

      if (t !== undefined) {
        const unpainted = t.problems.find(line => line.startsWith("Desktop won't paint"))

        if (unpainted !== undefined) {
          $.ui.toast(unpainted)
        }
        const set = await apply($, t)

        if (!set.isDrawn) {
          $.ui.status(`${t.id}: ${set.reason}`)
        }
      }
    }

    return next(e)
  })

  on('command.run', { command: 'custom-theme' }, async ($, e) => {
    const arg = e.args.trim()
    const saved = await $.store.get('current')
    const currentId = typeof saved === 'string' && saved !== 'off' ? saved : saved === 'off' ? undefined : DEFAULT_ID

    if (arg === '' || arg === 'list' || arg === 'ls') {
      return { text: listText(currentId) }
    }

    if (arg === 'off' || arg === 'clear') {
      await $.theme.clear()
      await $.store.set('current', 'off')

      return { text: '已關閉自訂主題，回到 app 原本的樣子。要再開啟請輸入 /custom-theme 加上編號或名稱。' }
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
    const set = await apply($, target)

    await $.store.set('current', target.id)

    if (!set.isDrawn) {
      $.ui.status(`${target.id}: ${set.reason}`)

      return {
        text: `已選擇「${target.name}」並記住，但目前這個視窗畫不出主題。原因：${set.reason}`,
      }
    }
    const warn = unpainted === undefined ? '' : `\n注意：${unpainted}`

    return { text: `已切換到「${target.name}」：${target.description}${warn}` }
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
