import { makeColors } from '../make-colors.js'

const { theme, problems } = makeColors({ label: 'sunset-beach', only: 'dark', roles: { accent: '#ff9a62', danger: '#f0675c', success: '#6fbf84', warning: '#e8b04a', pro: '#b793e0' }, dark: { gray: { anchors: { 'surface-0': '#1c1220', 'surface-1': '#251829', 'surface-2': '#2c1d31', 'surface-3': '#302135', 'text-primary': '#fbeee3', 'text-secondary': '#dfc9c0', 'text-muted': '#bda7a6' } } } })

export default {
  id: 'sunset-beach',
  name: '海邊日落',
  description: '暖紫配色、夕陽、海浪和太陽倒影',
  mode: 'dark',
  colors: theme,
  problems,
  glass: { blur: 6, tint: '#1c1220', opacity: 0.35 },
  scene: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1600 900" preserveAspectRatio="xMidYMid slice">
<style>
  .c { animation: cloud 70s ease-in-out infinite alternate; }
  @keyframes cloud { from { transform: translateX(-40px) } to { transform: translateX(60px) } }
  .w { fill: none; stroke: #ffd1a8; stroke-width: 2; stroke-linecap: round; animation: wave 10s ease-in-out infinite alternate; }
  @keyframes wave { from { transform: translateX(-30px) } to { transform: translateX(30px) } }
  .g { fill: #ffd58a; animation: glint 5s ease-in-out infinite; }
  @keyframes glint { 0%, 100% { opacity: 0.2 } 50% { opacity: 0.7 } }
  .sun { animation: breathe 12s ease-in-out infinite alternate; }
  @keyframes breathe { from { opacity: 0.85 } to { opacity: 1 } }
</style>
<defs>
  <linearGradient id="sky" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0" stop-color="#2a1b4a"/>
    <stop offset="0.45" stop-color="#8a3f73"/>
    <stop offset="0.8" stop-color="#e8695f"/>
    <stop offset="1" stop-color="#ffa45e"/>
  </linearGradient>
  <linearGradient id="sea" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0" stop-color="#7a3a62"/>
    <stop offset="0.3" stop-color="#3a2050"/>
    <stop offset="1" stop-color="#180f2a"/>
  </linearGradient>
  <radialGradient id="halo" cx="0.5" cy="0.5" r="0.5">
    <stop offset="0" stop-color="#ffd58a" stop-opacity="0.65"/>
    <stop offset="1" stop-color="#ffd58a" stop-opacity="0"/>
  </radialGradient>
</defs>
<rect width="1600" height="620" fill="url(#sky)"/>
<g class="c" opacity="0.28" fill="#ffc0a8">
  <ellipse cx="300" cy="170" rx="190" ry="20"/>
  <ellipse cx="400" cy="195" rx="140" ry="14"/>
  <ellipse cx="1050" cy="120" rx="170" ry="16"/>
  <ellipse cx="1500" cy="250" rx="150" ry="14"/>
  <ellipse cx="120" cy="360" rx="160" ry="14"/>
</g>
<circle class="sun" cx="1200" cy="595" r="230" fill="url(#halo)"/>
<circle class="sun" cx="1200" cy="595" r="78" fill="#ffe3a0"/>
<rect y="600" width="1600" height="300" fill="url(#sea)"/>
<rect class="g" x="1140" y="612" width="120" height="5" rx="2.5" style="animation-delay:0s"/>
<rect class="g" x="1115" y="632" width="170" height="5" rx="2.5" style="animation-delay:0.7s"/>
<rect class="g" x="1085" y="656" width="230" height="5" rx="2.5" style="animation-delay:1.4s"/>
<rect class="g" x="1055" y="684" width="290" height="5" rx="2.5" style="animation-delay:0.3s"/>
<rect class="g" x="1025" y="716" width="350" height="5" rx="2.5" style="animation-delay:1.1s"/>
<rect class="g" x="995" y="754" width="410" height="5" rx="2.5" style="animation-delay:1.8s"/>
<rect class="g" x="965" y="798" width="470" height="5" rx="2.5" style="animation-delay:0.5s"/>
<path class="w" d="M-100 640 q60 -8 120 0 t120 0 t120 0 t120 0 t120 0 t120 0 t120 0 t120 0 t120 0 t120 0 t120 0 t120 0 t120 0 t120 0 t120 0" opacity="0.3" style="animation-duration:9s;animation-delay:0s"/>
<path class="w" d="M-100 680 q60 -8 120 0 t120 0 t120 0 t120 0 t120 0 t120 0 t120 0 t120 0 t120 0 t120 0 t120 0 t120 0 t120 0 t120 0 t120 0" opacity="0.25" style="animation-duration:11s;animation-delay:1.5s"/>
<path class="w" d="M-100 725 q60 -8 120 0 t120 0 t120 0 t120 0 t120 0 t120 0 t120 0 t120 0 t120 0 t120 0 t120 0 t120 0 t120 0 t120 0 t120 0" opacity="0.22" style="animation-duration:13s;animation-delay:3s"/>
<path class="w" d="M-100 775 q60 -8 120 0 t120 0 t120 0 t120 0 t120 0 t120 0 t120 0 t120 0 t120 0 t120 0 t120 0 t120 0 t120 0 t120 0 t120 0" opacity="0.2" style="animation-duration:10s;animation-delay:0.8s"/>
<path class="w" d="M-100 830 q60 -8 120 0 t120 0 t120 0 t120 0 t120 0 t120 0 t120 0 t120 0 t120 0 t120 0 t120 0 t120 0 t120 0 t120 0 t120 0" opacity="0.18" style="animation-duration:12s;animation-delay:2.2s"/>
<path class="w" d="M-100 880 q60 -8 120 0 t120 0 t120 0 t120 0 t120 0 t120 0 t120 0 t120 0 t120 0 t120 0 t120 0 t120 0 t120 0 t120 0 t120 0" opacity="0.15" style="animation-duration:14s;animation-delay:4s"/>
</svg>`,
}
