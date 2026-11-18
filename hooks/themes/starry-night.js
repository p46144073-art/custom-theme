import { makeColors } from '../make-colors.js'

const { theme, problems } = makeColors({ label: 'starry-night', only: 'dark', roles: { accent: '#6fa8ff', danger: '#e5645a', success: '#58b87a', warning: '#d9a441', pro: '#a58bdc' }, dark: { gray: { anchors: { 'surface-0': '#0d1322', 'surface-1': '#131b2f', 'surface-2': '#192238', 'surface-3': '#1d2740', 'text-primary': '#eaf0fb', 'text-secondary': '#bcc7dc', 'text-muted': '#9aa7c2' } } } })

export default {
  id: 'starry-night',
  name: '星夜',
  description: '深藍夜空、閃爍的星星和月亮',
  mode: 'dark',
  colors: theme,
  problems,
  glass: { blur: 6, tint: '#0d1322', opacity: 0.35 },
  scene: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1600 900" preserveAspectRatio="xMidYMid slice">
<style>
  .s { fill: #dfe9ff; animation: tw 4s ease-in-out infinite; }
  @keyframes tw { 0%, 100% { opacity: 0.25 } 50% { opacity: 1 } }
  .m { animation: drift 40s ease-in-out infinite alternate; }
  @keyframes drift { from { transform: translateX(0) } to { transform: translateX(30px) } }
</style>
<defs>
  <linearGradient id="sky" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0" stop-color="#0a1020"/>
    <stop offset="1" stop-color="#16203a"/>
  </linearGradient>
  <radialGradient id="glow" cx="0.5" cy="0.5" r="0.5">
    <stop offset="0" stop-color="#f6e8b8" stop-opacity="0.35"/>
    <stop offset="1" stop-color="#f6e8b8" stop-opacity="0"/>
  </radialGradient>
</defs>
<rect width="1600" height="900" fill="url(#sky)"/>
<g class="m">
  <circle cx="1380" cy="150" r="110" fill="url(#glow)"/>
  <circle cx="1380" cy="150" r="26" fill="#f6ecc8"/>
  <circle cx="1392" cy="142" r="23" fill="#0f1730"/>
</g>
<circle class="s" cx="80" cy="70" r="1.6" style="animation-delay:0s"/>
<circle class="s" cx="220" cy="140" r="1.1" style="animation-delay:1.2s"/>
<circle class="s" cx="360" cy="50" r="1.4" style="animation-delay:2.1s"/>
<circle class="s" cx="140" cy="260" r="1" style="animation-delay:0.6s"/>
<circle class="s" cx="60" cy="380" r="1.3" style="animation-delay:1.8s"/>
<circle class="s" cx="300" cy="330" r="0.9" style="animation-delay:2.6s"/>
<circle class="s" cx="1520" cy="90" r="1.5" style="animation-delay:0.4s"/>
<circle class="s" cx="1380" cy="180" r="1" style="animation-delay:1.5s"/>
<circle class="s" cx="1250" cy="60" r="1.2" style="animation-delay:2.3s"/>
<circle class="s" cx="1540" cy="300" r="1.1" style="animation-delay:0.9s"/>
<circle class="s" cx="1460" cy="420" r="1.4" style="animation-delay:2s"/>
<circle class="s" cx="1330" cy="340" r="0.9" style="animation-delay:1.1s"/>
<circle class="s" cx="700" cy="40" r="1" style="animation-delay:0.3s"/>
<circle class="s" cx="900" cy="90" r="1.3" style="animation-delay:1.7s"/>
<circle class="s" cx="1100" cy="45" r="1.1" style="animation-delay:2.8s"/>
<circle class="s" cx="520" cy="120" r="0.9" style="animation-delay:0.8s"/>
<circle class="s" cx="40" cy="560" r="1.2" style="animation-delay:1.4s"/>
<circle class="s" cx="200" cy="640" r="1" style="animation-delay:2.4s"/>
<circle class="s" cx="1560" cy="600" r="1.2" style="animation-delay:0.7s"/>
<circle class="s" cx="1400" cy="700" r="1" style="animation-delay:1.9s"/>
</svg>
`,
}
