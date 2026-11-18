import { makeColors } from '../make-colors.js'

const { theme, problems } = makeColors({ label: 'plain-minimal-dark', only: 'dark', roles: { accent: '#6fa8ff', danger: '#e5645e', success: '#5cc48a', warning: '#d9a64a', pro: '#a98ae8' }, dark: { gray: { anchors: { 'surface-0': '#141414', 'surface-1': '#1b1b1b', 'surface-2': '#222222', 'surface-3': '#262626', 'text-primary': '#ececec', 'text-secondary': '#bdbdbd', 'text-muted': '#9a9a9a' } } } })

export default {
  id: 'plain-minimal-dark',
  name: '純色極簡深色',
  description: '中性深灰配色，沒有背景動畫，最省資源',
  mode: 'dark',
  colors: theme,
  problems,
}
