import { makeColors } from '../make-colors.js'

const { theme, problems } = makeColors({ label: 'paper-notebook', only: 'light', roles: { accent: '#8a4b2a', danger: '#a63a2c', success: '#4a6b3a', warning: '#9a6a12', pro: '#5e4b86' }, light: { gray: { anchors: { 'surface-0': '#efe3c8', 'surface-1': '#f5ebd3', 'surface-2': '#faf3e0', 'surface-3': '#faf3e0', 'text-primary': '#2e2218', 'text-secondary': '#54432f', 'text-muted': '#6d5a43' } } } })

export default {
  id: 'paper-notebook',
  name: '紙本筆記',
  description: '米黃紙張、深褐墨水，沒有動畫，最安靜',
  mode: 'light',
  colors: theme,
  problems,
  glass: { blur: 2, tint: '#faf3e0', opacity: 0.5 },
  scene: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1600 900" preserveAspectRatio="xMidYMid slice">
<defs>
  <radialGradient id="vig" cx="0.5" cy="0.5" r="0.75">
    <stop offset="0.55" stop-color="#d8c79f" stop-opacity="0"/>
    <stop offset="1" stop-color="#cbb98c" stop-opacity="0.55"/>
  </radialGradient>
  <linearGradient id="fold" x1="0" y1="0" x2="1" y2="0">
    <stop offset="0" stop-color="#b8a678" stop-opacity="0.35"/>
    <stop offset="1" stop-color="#b8a678" stop-opacity="0"/>
  </linearGradient>
</defs>
<rect width="1600" height="900" fill="#f3e8cf"/>
<line x1="0" y1="96" x2="1600" y2="96" stroke="#a9c3cf" stroke-width="1.2" opacity="0.45"/>
<line x1="0" y1="134" x2="1600" y2="134" stroke="#a9c3cf" stroke-width="1.2" opacity="0.45"/>
<line x1="0" y1="172" x2="1600" y2="172" stroke="#a9c3cf" stroke-width="1.2" opacity="0.45"/>
<line x1="0" y1="210" x2="1600" y2="210" stroke="#a9c3cf" stroke-width="1.2" opacity="0.45"/>
<line x1="0" y1="248" x2="1600" y2="248" stroke="#a9c3cf" stroke-width="1.2" opacity="0.45"/>
<line x1="0" y1="286" x2="1600" y2="286" stroke="#a9c3cf" stroke-width="1.2" opacity="0.45"/>
<line x1="0" y1="324" x2="1600" y2="324" stroke="#a9c3cf" stroke-width="1.2" opacity="0.45"/>
<line x1="0" y1="362" x2="1600" y2="362" stroke="#a9c3cf" stroke-width="1.2" opacity="0.45"/>
<line x1="0" y1="400" x2="1600" y2="400" stroke="#a9c3cf" stroke-width="1.2" opacity="0.45"/>
<line x1="0" y1="438" x2="1600" y2="438" stroke="#a9c3cf" stroke-width="1.2" opacity="0.45"/>
<line x1="0" y1="476" x2="1600" y2="476" stroke="#a9c3cf" stroke-width="1.2" opacity="0.45"/>
<line x1="0" y1="514" x2="1600" y2="514" stroke="#a9c3cf" stroke-width="1.2" opacity="0.45"/>
<line x1="0" y1="552" x2="1600" y2="552" stroke="#a9c3cf" stroke-width="1.2" opacity="0.45"/>
<line x1="0" y1="590" x2="1600" y2="590" stroke="#a9c3cf" stroke-width="1.2" opacity="0.45"/>
<line x1="0" y1="628" x2="1600" y2="628" stroke="#a9c3cf" stroke-width="1.2" opacity="0.45"/>
<line x1="0" y1="666" x2="1600" y2="666" stroke="#a9c3cf" stroke-width="1.2" opacity="0.45"/>
<line x1="0" y1="704" x2="1600" y2="704" stroke="#a9c3cf" stroke-width="1.2" opacity="0.45"/>
<line x1="0" y1="742" x2="1600" y2="742" stroke="#a9c3cf" stroke-width="1.2" opacity="0.45"/>
<line x1="0" y1="780" x2="1600" y2="780" stroke="#a9c3cf" stroke-width="1.2" opacity="0.45"/>
<line x1="0" y1="818" x2="1600" y2="818" stroke="#a9c3cf" stroke-width="1.2" opacity="0.45"/>
<line x1="0" y1="856" x2="1600" y2="856" stroke="#a9c3cf" stroke-width="1.2" opacity="0.45"/>
<line x1="0" y1="894" x2="1600" y2="894" stroke="#a9c3cf" stroke-width="1.2" opacity="0.45"/>
<line x1="150" y1="0" x2="150" y2="900" stroke="#d98a85" stroke-width="2" opacity="0.55"/>
<line x1="158" y1="0" x2="158" y2="900" stroke="#d98a85" stroke-width="1" opacity="0.35"/>
<rect width="90" height="900" fill="url(#fold)"/>
<circle cx="46" cy="150" r="13" fill="#d9cba8"/><circle cx="46" cy="150" r="13" fill="none" stroke="#b5a47c" stroke-width="2" opacity="0.7"/><circle cx="43" cy="149" r="8" fill="#c3b28b" opacity="0.5"/>
<circle cx="46" cy="450" r="13" fill="#d9cba8"/><circle cx="46" cy="450" r="13" fill="none" stroke="#b5a47c" stroke-width="2" opacity="0.7"/><circle cx="43" cy="449" r="8" fill="#c3b28b" opacity="0.5"/>
<circle cx="46" cy="750" r="13" fill="#d9cba8"/><circle cx="46" cy="750" r="13" fill="none" stroke="#b5a47c" stroke-width="2" opacity="0.7"/><circle cx="43" cy="749" r="8" fill="#c3b28b" opacity="0.5"/>
<rect width="1600" height="900" fill="url(#vig)"/>
</svg>`,
}
