import { makeColors } from '../make-colors.js'

const { theme, problems } = makeColors({ label: 'plain-minimal', only: 'light', roles: { accent: '#2f6fbd', danger: '#b3392f', success: '#3f7d4c', warning: '#a86f14', pro: '#6d4f94' }, light: { gray: { anchors: { 'surface-0': '#eeeeec', 'surface-1': '#f4f4f2', 'surface-2': '#fafaf8', 'surface-3': '#fafaf8', 'text-primary': '#222222', 'text-secondary': '#4a4a48', 'text-muted': '#636361' } } } })

export default {
  id: 'plain-minimal',
  name: '純色極簡淺色',
  description: '中性淺灰配色，沒有背景動畫，最省資源',
  mode: 'light',
  colors: theme,
  problems,
}
