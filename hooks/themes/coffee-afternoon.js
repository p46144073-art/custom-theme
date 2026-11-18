import { makeColors } from '../make-colors.js'

const { theme, problems } = makeColors({ label: 'coffee-afternoon', only: 'light', roles: { accent: '#a8582a', danger: '#b3392f', success: '#52703a', warning: '#a86f14', pro: '#7a5a98' }, light: { gray: { anchors: { 'surface-0': '#efe0cc', 'surface-1': '#f5e9d8', 'surface-2': '#faf1e3', 'surface-3': '#faf1e3', 'text-primary': '#3b2a1e', 'text-secondary': '#5e4634', 'text-muted': '#75604d' } } } })

export default {
  id: 'coffee-afternoon',
  name: '咖啡館午後',
  description: '奶茶色、窗外光影移動、咖啡熱氣升起',
  mode: 'light',
  colors: theme,
  problems,
  glass: { blur: 3, tint: '#faf1e3', opacity: 0.4 },
  scene: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1600 900" preserveAspectRatio="xMidYMid slice">
<style>
  .bk { opacity: 0.55; animation-name: sway; animation-timing-function: ease-in-out; animation-iteration-count: infinite; animation-direction: alternate; }
  @keyframes sway { from { transform: translate(-14px, -8px) } to { transform: translate(16px, 10px) } }
  .lp { animation: slide 40s ease-in-out infinite alternate; }
  @keyframes slide { from { transform: translateX(-40px); opacity: 0.28 } to { transform: translateX(80px); opacity: 0.5 } }
  .st { fill: none; stroke: #fffaf0; stroke-width: 5; stroke-linecap: round; opacity: 0; animation: steam 5.2s ease-out infinite; }
  @keyframes steam { 0% { transform: translateY(0) scaleY(0.8); opacity: 0 } 25% { opacity: 0.6 } 100% { transform: translateY(-46px) scaleY(1.15); opacity: 0 } }
  .lamp { animation: warm 12s ease-in-out infinite alternate; }
  @keyframes warm { from { opacity: 0.55 } to { opacity: 0.9 } }
</style>
<defs>
  <linearGradient id="wall" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0" stop-color="#f6e9d4"/>
    <stop offset="1" stop-color="#e6d0b0"/>
  </linearGradient>
  <linearGradient id="out" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0" stop-color="#fff4d6"/>
    <stop offset="1" stop-color="#cfe6bf"/>
  </linearGradient>
  <linearGradient id="table" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0" stop-color="#a97248"/>
    <stop offset="1" stop-color="#6c4429"/>
  </linearGradient>
  <radialGradient id="lg" cx="0.5" cy="0.5" r="0.5">
    <stop offset="0" stop-color="#ffd48a" stop-opacity="0.7"/>
    <stop offset="1" stop-color="#ffd48a" stop-opacity="0"/>
  </radialGradient>
  <clipPath id="pane"><rect x="127" y="97" width="486" height="456"/></clipPath>
</defs>
<rect width="1600" height="900" fill="url(#wall)"/>
<rect x="120" y="90" width="500" height="470" fill="url(#out)"/>
<g clip-path="url(#pane)">
<circle class="bk" cx="484.5" cy="528.9" r="63.2" fill="#8fbf6a" style="animation-duration:16.8s;animation-delay:-3.8s"/>
<circle class="bk" cx="286.1" cy="345.3" r="30.9" fill="#b5d98a" style="animation-duration:19.6s;animation-delay:-18.5s"/>
<circle class="bk" cx="388.7" cy="409" r="40.4" fill="#f2d27a" style="animation-duration:12.6s;animation-delay:-1s"/>
<circle class="bk" cx="414.5" cy="272.4" r="26.9" fill="#7fae63" style="animation-duration:17.4s;animation-delay:-1.2s"/>
<circle class="bk" cx="515.8" cy="359.9" r="28.7" fill="#8fbf6a" style="animation-duration:15.1s;animation-delay:-11.7s"/>
<circle class="bk" cx="240.6" cy="156.7" r="60.6" fill="#b5d98a" style="animation-duration:17.6s;animation-delay:-1.5s"/>
<circle class="bk" cx="547.9" cy="211.7" r="62.3" fill="#f2d27a" style="animation-duration:18.2s;animation-delay:-1.8s"/>
<circle class="bk" cx="440.5" cy="386.2" r="44.3" fill="#7fae63" style="animation-duration:16.9s;animation-delay:-2s"/>
<circle class="bk" cx="262.1" cy="166.2" r="64.1" fill="#8fbf6a" style="animation-duration:10.6s;animation-delay:-5.1s"/>
<circle class="bk" cx="285.1" cy="448.5" r="35.8" fill="#b5d98a" style="animation-duration:11.9s;animation-delay:-1.9s"/>
<circle class="bk" cx="386.9" cy="392.1" r="62.7" fill="#f2d27a" style="animation-duration:15.1s;animation-delay:-12.4s"/>
<circle class="bk" cx="233.3" cy="491.3" r="36.7" fill="#7fae63" style="animation-duration:19s;animation-delay:-0.3s"/>
<circle class="bk" cx="247.6" cy="469.9" r="43.4" fill="#8fbf6a" style="animation-duration:18.7s;animation-delay:-0.7s"/>
<circle class="bk" cx="292.6" cy="519.4" r="49.6" fill="#b5d98a" style="animation-duration:11.6s;animation-delay:-4.9s"/>
<circle class="bk" cx="575.6" cy="528.5" r="42.8" fill="#f2d27a" style="animation-duration:16.2s;animation-delay:-13.2s"/>
<circle class="bk" cx="467.3" cy="455.8" r="25.5" fill="#7fae63" style="animation-duration:10.2s;animation-delay:-4.8s"/>
</g>
<g fill="none" stroke="#7a5538">
  <rect x="120" y="90" width="500" height="470" stroke-width="14"/>
  <line x1="370" y1="90" x2="370" y2="560" stroke-width="8"/>
  <line x1="120" y1="325" x2="620" y2="325" stroke-width="8"/>
</g>
<rect x="100" y="560" width="540" height="18" rx="3" fill="#8c6444"/>
<g class="lp">
  <g transform="translate(760 150) skewX(-18)" fill="#fff2c8">
    <rect x="0" y="0" width="200" height="200"/>
    <rect x="215" y="0" width="200" height="200"/>
    <rect x="0" y="215" width="200" height="220"/>
    <rect x="215" y="215" width="200" height="220"/>
  </g>
</g>
<line x1="1020" y1="0" x2="1020" y2="170" stroke="#5a3a24" stroke-width="3"/>
<polygon points="985,170 1055,170 1075,215 965,215" fill="#c97b4a"/>
<ellipse class="lamp" cx="1020" cy="225" rx="150" ry="120" fill="url(#lg)"/>
<rect y="790" width="1600" height="110" fill="url(#table)"/>
<line x1="0" y1="820" x2="1600" y2="820" stroke="#5a3820" stroke-width="2" opacity="0.4"/>
<line x1="0" y1="850" x2="1600" y2="850" stroke="#5a3820" stroke-width="2" opacity="0.4"/>
<line x1="0" y1="878" x2="1600" y2="878" stroke="#5a3820" stroke-width="2" opacity="0.4"/>
<g transform="translate(1280 800)">
  <ellipse cx="0" cy="6" rx="86" ry="14" fill="#3e2616" opacity="0.35"/>
  <ellipse cx="0" cy="0" rx="76" ry="13" fill="#f7f1e8" stroke="#d9cbb8" stroke-width="2"/>
  <path d="M-46 -54 H46 V-26 a46 40 0 0 1 -92 0 Z" fill="#fffaf2" stroke="#e2d4bf" stroke-width="2"/>
  <path d="M46 -46 h12 a15 15 0 0 1 0 30 h-14" fill="none" stroke="#fffaf2" stroke-width="7"/>
  <ellipse cx="0" cy="-54" rx="46" ry="9" fill="#5a3420"/>
  <ellipse cx="-10" cy="-55" rx="22" ry="3.5" fill="#8a5a38" opacity="0.7"/>
  <path class="st" d="M-22 -62 c-12 -22 12 -38 0 -60 c-12 -22 12 -38 0 -60" style="animation-delay:0s"/>
  <path class="st" d="M-7 -62 c-12 -22 12 -38 0 -60 c-12 -22 12 -38 0 -60" style="animation-delay:-1.3s"/>
  <path class="st" d="M8 -62 c-12 -22 12 -38 0 -60 c-12 -22 12 -38 0 -60" style="animation-delay:-2.6s"/>
  <path class="st" d="M23 -62 c-12 -22 12 -38 0 -60 c-12 -22 12 -38 0 -60" style="animation-delay:-3.9s"/>
</g>
</svg>`,
}
