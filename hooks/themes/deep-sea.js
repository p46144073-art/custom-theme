import { makeColors } from '../make-colors.js'

const { theme, problems } = makeColors({ label: 'deep-sea', only: 'dark', roles: { accent: '#4fd3c4', danger: '#e5645e', success: '#5cc48a', warning: '#d9a64a', pro: '#9a8ae8' }, dark: { gray: { anchors: { 'surface-0': '#06141f', 'surface-1': '#0b1e2c', 'surface-2': '#10283a', 'surface-3': '#132d40', 'text-primary': '#e3f2f5', 'text-secondary': '#b0cdd4', 'text-muted': '#8eaeb8' } } } })

export default {
  id: 'deep-sea',
  name: '海底',
  description: '深藍到墨綠、水面光線、氣泡上升、魚群游過',
  mode: 'dark',
  colors: theme,
  problems,
  glass: { blur: 4, tint: '#06141f', opacity: 0.35 },
  scene: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1600 900" preserveAspectRatio="xMidYMid slice">
<style>
  .ray { animation-name: shine; animation-timing-function: ease-in-out; animation-iteration-count: infinite; animation-direction: alternate; }
  @keyframes shine { from { opacity: 0.2 } to { opacity: 0.8 } }
  .b { fill: #cdeffa; fill-opacity: 0.1; stroke: #d8f4ff; stroke-opacity: 0.55; stroke-width: 1; opacity: 0; animation-name: rise; animation-timing-function: ease-in-out; animation-iteration-count: infinite; }
  @keyframes rise { 0% { transform: translate(0, 0); opacity: 0 } 10% { opacity: 1 } 50% { transform: translate(var(--dx), -480px) } 90% { opacity: 0.8 } 100% { transform: translate(0, -960px); opacity: 0 } }
  .sn { fill: #d8f4ff; opacity: 0.35; animation-name: drift; animation-timing-function: ease-in-out; animation-iteration-count: infinite; animation-direction: alternate; }
  @keyframes drift { from { transform: translate(-20px, -14px) } to { transform: translate(24px, 18px) } }
  .fr { animation-name: swimr; animation-timing-function: linear; animation-iteration-count: infinite; }
  .fl { animation-name: swiml; animation-timing-function: linear; animation-iteration-count: infinite; }
  @keyframes swimr { from { transform: translateX(0) } to { transform: translateX(2300px) } }
  @keyframes swiml { from { transform: translateX(0) } to { transform: translateX(-2300px) } }
  .kp { animation-name: sway; animation-timing-function: ease-in-out; animation-iteration-count: infinite; animation-direction: alternate; }
  @keyframes sway { from { transform: rotate(-3deg) } to { transform: rotate(3deg) } }
</style>
<defs>
  <linearGradient id="sea" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0" stop-color="#0f5a73"/>
    <stop offset="0.45" stop-color="#08354d"/>
    <stop offset="1" stop-color="#03121e"/>
  </linearGradient>
  <linearGradient id="ray" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0" stop-color="#bff3ff" stop-opacity="0.5"/>
    <stop offset="1" stop-color="#bff3ff" stop-opacity="0"/>
  </linearGradient>
</defs>
<rect width="1600" height="900" fill="url(#sea)"/>
<polygon class="ray" points="150,-20 248.7,-20 139.9,900 -8.3,900" fill="url(#ray)" style="animation-duration:8.9s;animation-delay:-6.3s"/>
<polygon class="ray" points="410,-20 523.3,-20 364.7,900 183.2,900" fill="url(#ray)" style="animation-duration:7.3s;animation-delay:-2.9s"/>
<polygon class="ray" points="670,-20 789.9,-20 728,900 467.2,900" fill="url(#ray)" style="animation-duration:11.8s;animation-delay:-8s"/>
<polygon class="ray" points="930,-20 1058.1,-20 948,900 681.7,900" fill="url(#ray)" style="animation-duration:11.7s;animation-delay:-2.2s"/>
<polygon class="ray" points="1190,-20 1295.9,-20 1246.4,900 1038.8,900" fill="url(#ray)" style="animation-duration:9.1s;animation-delay:-6.6s"/>
<polygon class="ray" points="1450,-20 1593.8,-20 1444.8,900 1212.1,900" fill="url(#ray)" style="animation-duration:12.2s;animation-delay:-1.2s"/>
<circle class="sn" cx="495.9" cy="543.9" r="2" style="animation-duration:38.8s;animation-delay:-30.7s"/>
<circle class="sn" cx="401.8" cy="558.5" r="1.3" style="animation-duration:24.7s;animation-delay:-2.8s"/>
<circle class="sn" cx="1499.5" cy="387.3" r="1.4" style="animation-duration:20.5s;animation-delay:-16.9s"/>
<circle class="sn" cx="1041" cy="214.7" r="1.4" style="animation-duration:25.4s;animation-delay:-19s"/>
<circle class="sn" cx="567.7" cy="831.2" r="1.4" style="animation-duration:22.2s;animation-delay:-0.1s"/>
<circle class="sn" cx="26.7" cy="227.2" r="1.8" style="animation-duration:32.1s;animation-delay:-23s"/>
<circle class="sn" cx="511.8" cy="562" r="1.2" style="animation-duration:36.4s;animation-delay:-18.7s"/>
<circle class="sn" cx="1128.3" cy="803.1" r="1.2" style="animation-duration:20.8s;animation-delay:-19.2s"/>
<circle class="sn" cx="1572" cy="567.1" r="2" style="animation-duration:35s;animation-delay:-11.4s"/>
<circle class="sn" cx="404.1" cy="113.2" r="1.8" style="animation-duration:27.2s;animation-delay:-21.6s"/>
<circle class="sn" cx="1150.9" cy="813.3" r="1.8" style="animation-duration:37.4s;animation-delay:-27.7s"/>
<circle class="sn" cx="618.2" cy="443.8" r="2" style="animation-duration:29s;animation-delay:-22.5s"/>
<circle class="sn" cx="1597.9" cy="14.3" r="1.6" style="animation-duration:27.2s;animation-delay:-21.6s"/>
<circle class="sn" cx="500.4" cy="548" r="1.9" style="animation-duration:33.6s;animation-delay:-4.1s"/>
<circle class="sn" cx="1213.2" cy="178.7" r="1.5" style="animation-duration:39.5s;animation-delay:-30.2s"/>
<circle class="sn" cx="1159.5" cy="158.2" r="1" style="animation-duration:22.6s;animation-delay:-16.9s"/>
<circle class="sn" cx="1425.5" cy="803.1" r="0.9" style="animation-duration:34.9s;animation-delay:-34.8s"/>
<circle class="sn" cx="665.9" cy="678" r="1.5" style="animation-duration:39s;animation-delay:-5s"/>
<circle class="sn" cx="339.3" cy="399.3" r="1.4" style="animation-duration:20.9s;animation-delay:-19.3s"/>
<circle class="sn" cx="1546.5" cy="242.7" r="1" style="animation-duration:21.6s;animation-delay:-0.3s"/>
<circle class="sn" cx="1029.9" cy="401" r="1.7" style="animation-duration:28.1s;animation-delay:-1s"/>
<circle class="sn" cx="833.2" cy="835.5" r="0.9" style="animation-duration:26.5s;animation-delay:-0.4s"/>
<circle class="sn" cx="337.1" cy="328" r="1.1" style="animation-duration:25.7s;animation-delay:-22.7s"/>
<circle class="sn" cx="170.2" cy="244.4" r="1.6" style="animation-duration:25.6s;animation-delay:-9.7s"/>
<circle class="sn" cx="895.1" cy="592.3" r="1.8" style="animation-duration:21.5s;animation-delay:-19.6s"/>
<circle class="sn" cx="503.3" cy="138.2" r="1.6" style="animation-duration:29.1s;animation-delay:-23.3s"/>
<circle class="sn" cx="728.1" cy="86.1" r="1" style="animation-duration:38.8s;animation-delay:-4.1s"/>
<circle class="sn" cx="712.5" cy="440.1" r="0.9" style="animation-duration:20.1s;animation-delay:-9.6s"/>
<circle class="sn" cx="780.6" cy="386.8" r="1.5" style="animation-duration:36.9s;animation-delay:-33.8s"/>
<circle class="sn" cx="1356.2" cy="145" r="1.6" style="animation-duration:36s;animation-delay:-29.4s"/>
<circle class="sn" cx="1112" cy="888.7" r="1.8" style="animation-duration:28.2s;animation-delay:-12.8s"/>
<circle class="sn" cx="1576.9" cy="332" r="1.8" style="animation-duration:31.5s;animation-delay:-22.7s"/>
<circle class="sn" cx="587.5" cy="424.6" r="1.2" style="animation-duration:34s;animation-delay:-19s"/>
<circle class="sn" cx="184.1" cy="382.5" r="1" style="animation-duration:22.6s;animation-delay:-9.9s"/>
<g class="fr" opacity="0.7" style="animation-duration:52s;animation-delay:-8s"><path d="M0 0 Q12 -7 26 0 Q12 7 0 0 Z M24 0 L36 -7 L36 7 Z" fill="#7fd6d0" transform="translate(-307.7 263.5) scale(0.8)"/><path d="M0 0 Q12 -7 26 0 Q12 7 0 0 Z M24 0 L36 -7 L36 7 Z" fill="#7fd6d0" transform="translate(-282.1 307.3) scale(0.8)"/><path d="M0 0 Q12 -7 26 0 Q12 7 0 0 Z M24 0 L36 -7 L36 7 Z" fill="#7fd6d0" transform="translate(-235.7 279.1) scale(1.2)"/><path d="M0 0 Q12 -7 26 0 Q12 7 0 0 Z M24 0 L36 -7 L36 7 Z" fill="#7fd6d0" transform="translate(-216.7 255.7) scale(0.9)"/><path d="M0 0 Q12 -7 26 0 Q12 7 0 0 Z M24 0 L36 -7 L36 7 Z" fill="#7fd6d0" transform="translate(-167.6 301.7) scale(0.8)"/><path d="M0 0 Q12 -7 26 0 Q12 7 0 0 Z M24 0 L36 -7 L36 7 Z" fill="#7fd6d0" transform="translate(-140.6 293) scale(0.8)"/><path d="M0 0 Q12 -7 26 0 Q12 7 0 0 Z M24 0 L36 -7 L36 7 Z" fill="#7fd6d0" transform="translate(-102 253.5) scale(0.7)"/></g>
<g class="fl" opacity="0.7" style="animation-duration:64s;animation-delay:-30s"><path d="M0 0 Q12 -7 26 0 Q12 7 0 0 Z M24 0 L36 -7 L36 7 Z" fill="#f2b36a" transform="translate(1881.7 447.7) scale(-0.9 0.9)"/><path d="M0 0 Q12 -7 26 0 Q12 7 0 0 Z M24 0 L36 -7 L36 7 Z" fill="#f2b36a" transform="translate(1863.8 436.1) scale(-1.1 1.1)"/><path d="M0 0 Q12 -7 26 0 Q12 7 0 0 Z M24 0 L36 -7 L36 7 Z" fill="#f2b36a" transform="translate(1821.2 437.1) scale(-1.1 1.1)"/><path d="M0 0 Q12 -7 26 0 Q12 7 0 0 Z M24 0 L36 -7 L36 7 Z" fill="#f2b36a" transform="translate(1789.5 437.2) scale(-1 1)"/><path d="M0 0 Q12 -7 26 0 Q12 7 0 0 Z M24 0 L36 -7 L36 7 Z" fill="#f2b36a" transform="translate(1760.1 448.9) scale(-0.9 0.9)"/><path d="M0 0 Q12 -7 26 0 Q12 7 0 0 Z M24 0 L36 -7 L36 7 Z" fill="#f2b36a" transform="translate(1715 450.1) scale(-1.2 1.2)"/></g>
<g class="fr" opacity="0.7" style="animation-duration:74s;animation-delay:-50s"><path d="M0 0 Q12 -7 26 0 Q12 7 0 0 Z M24 0 L36 -7 L36 7 Z" fill="#9fb8ff" transform="translate(-313.5 617.1) scale(1.1)"/><path d="M0 0 Q12 -7 26 0 Q12 7 0 0 Z M24 0 L36 -7 L36 7 Z" fill="#9fb8ff" transform="translate(-272.8 658.4) scale(1)"/><path d="M0 0 Q12 -7 26 0 Q12 7 0 0 Z M24 0 L36 -7 L36 7 Z" fill="#9fb8ff" transform="translate(-251.7 650.5) scale(1.1)"/><path d="M0 0 Q12 -7 26 0 Q12 7 0 0 Z M24 0 L36 -7 L36 7 Z" fill="#9fb8ff" transform="translate(-213.9 611.4) scale(0.9)"/><path d="M0 0 Q12 -7 26 0 Q12 7 0 0 Z M24 0 L36 -7 L36 7 Z" fill="#9fb8ff" transform="translate(-178 635.1) scale(0.7)"/><path d="M0 0 Q12 -7 26 0 Q12 7 0 0 Z M24 0 L36 -7 L36 7 Z" fill="#9fb8ff" transform="translate(-142.7 654.2) scale(0.7)"/><path d="M0 0 Q12 -7 26 0 Q12 7 0 0 Z M24 0 L36 -7 L36 7 Z" fill="#9fb8ff" transform="translate(-97.6 610.9) scale(1.1)"/><path d="M0 0 Q12 -7 26 0 Q12 7 0 0 Z M24 0 L36 -7 L36 7 Z" fill="#9fb8ff" transform="translate(-74 624.2) scale(0.9)"/></g>
<g class="fl" opacity="0.7" style="animation-duration:58s;animation-delay:-20s"><path d="M0 0 Q12 -7 26 0 Q12 7 0 0 Z M24 0 L36 -7 L36 7 Z" fill="#d6f0a8" transform="translate(1897.8 169.9) scale(-0.8 0.8)"/><path d="M0 0 Q12 -7 26 0 Q12 7 0 0 Z M24 0 L36 -7 L36 7 Z" fill="#d6f0a8" transform="translate(1852.2 168.8) scale(-1 1)"/><path d="M0 0 Q12 -7 26 0 Q12 7 0 0 Z M24 0 L36 -7 L36 7 Z" fill="#d6f0a8" transform="translate(1818.5 175.4) scale(-0.9 0.9)"/><path d="M0 0 Q12 -7 26 0 Q12 7 0 0 Z M24 0 L36 -7 L36 7 Z" fill="#d6f0a8" transform="translate(1793.9 151.3) scale(-1.2 1.2)"/><path d="M0 0 Q12 -7 26 0 Q12 7 0 0 Z M24 0 L36 -7 L36 7 Z" fill="#d6f0a8" transform="translate(1760.1 142.7) scale(-0.9 0.9)"/></g>
<path class="kp" d="M40 930 C4 797.9 76 687.7 40 621.7 S70 555.6 40 489.5" fill="none" stroke="#1b6a55" stroke-width="13" stroke-linecap="round" opacity="0.75" style="transform-origin:40px 930px;animation-duration:5.4s;animation-delay:-2s"/>
<path class="kp" d="M95 930 C59 793.5 131 679.8 95 611.6 S125 543.3 95 475.1" fill="none" stroke="#1b6a55" stroke-width="13" stroke-linecap="round" opacity="0.75" style="transform-origin:95px 930px;animation-duration:6.3s;animation-delay:-5.9s"/>
<path class="kp" d="M150 930 C114 816.1 186 721.2 150 664.2 S180 607.3 150 550.3" fill="none" stroke="#1b6a55" stroke-width="13" stroke-linecap="round" opacity="0.75" style="transform-origin:150px 930px;animation-duration:5.5s;animation-delay:-3.3s"/>
<path class="kp" d="M1450 930 C1414 803.1 1486 697.3 1450 633.9 S1480 570.4 1450 507" fill="none" stroke="#1b6a55" stroke-width="13" stroke-linecap="round" opacity="0.75" style="transform-origin:1450px 930px;animation-duration:8.3s;animation-delay:-4.1s"/>
<path class="kp" d="M1510 930 C1474 817.3 1546 723.4 1510 667.1 S1540 610.7 1510 554.4" fill="none" stroke="#1b6a55" stroke-width="13" stroke-linecap="round" opacity="0.75" style="transform-origin:1510px 930px;animation-duration:8.3s;animation-delay:-1.1s"/>
<path class="kp" d="M1565 930 C1529 831.6 1601 749.7 1565 700.5 S1595 651.3 1565 602.1" fill="none" stroke="#1b6a55" stroke-width="13" stroke-linecap="round" opacity="0.75" style="transform-origin:1565px 930px;animation-duration:8.7s;animation-delay:-7.8s"/>
<path d="M-10 920 L-10 860 L0 855.9 L40 860.7 L80 860.6 L120 858.1 L160 856.8 L200 859.2 L240 864.7 L280 870.1 L320 871.5 L360 867.3 L400 859 L440 850.5 L480 845.4 L520 844.9 L560 846.8 L600 847.4 L640 844.1 L680 837.3 L720 830.3 L760 827.1 L800 829.5 L840 836.4 L880 844.1 L920 848.8 L960 849.3 L1000 847.5 L1040 847.1 L1080 850.8 L1120 858.4 L1160 866.8 L1200 871.9 L1240 871.4 L1280 866.1 L1320 859.7 L1360 855.8 L1400 855.9 L1440 858.1 L1480 858.9 L1520 855.4 L1560 847.4 L1600 838 L1610 920 Z" fill="#071e27"/>
<circle class="b" cx="517.5" cy="501.8" r="6.3" style="--dx:27.5px;animation-duration:9.1s;animation-delay:-4.9s"/>
<circle class="b" cx="1588.3" cy="543.5" r="4" style="--dx:28.8px;animation-duration:11.1s;animation-delay:-1.2s"/>
<circle class="b" cx="923.2" cy="897.9" r="4.9" style="--dx:-12.8px;animation-duration:17.1s;animation-delay:-1.7s"/>
<circle class="b" cx="243.6" cy="734.2" r="3" style="--dx:-5px;animation-duration:10.8s;animation-delay:-9.1s"/>
<circle class="b" cx="646.9" cy="493.3" r="7.1" style="--dx:5.5px;animation-duration:9.6s;animation-delay:-7.9s"/>
<circle class="b" cx="326.9" cy="460.9" r="2.8" style="--dx:-25.9px;animation-duration:17.5s;animation-delay:-4.3s"/>
<circle class="b" cx="1107.8" cy="831" r="6.6" style="--dx:8.6px;animation-duration:10.3s;animation-delay:-8s"/>
<circle class="b" cx="81.4" cy="679.8" r="3.2" style="--dx:-10.2px;animation-duration:10.4s;animation-delay:-0.1s"/>
<circle class="b" cx="1331.3" cy="840.3" r="5.4" style="--dx:26.4px;animation-duration:9.8s;animation-delay:-2.3s"/>
<circle class="b" cx="1483.9" cy="425.6" r="6.6" style="--dx:6.7px;animation-duration:17.5s;animation-delay:-12.6s"/>
<circle class="b" cx="981.5" cy="903.2" r="6" style="--dx:-28px;animation-duration:13.9s;animation-delay:-11.1s"/>
<circle class="b" cx="1547.3" cy="726.7" r="6.6" style="--dx:-17.5px;animation-duration:11.5s;animation-delay:-5.6s"/>
<circle class="b" cx="413.7" cy="356.7" r="7.5" style="--dx:-21.2px;animation-duration:12.6s;animation-delay:-10.9s"/>
<circle class="b" cx="1010.3" cy="497.9" r="7" style="--dx:-15.7px;animation-duration:17.3s;animation-delay:-13.4s"/>
<circle class="b" cx="335.4" cy="421.7" r="3.4" style="--dx:-28.7px;animation-duration:17.2s;animation-delay:-16.2s"/>
<circle class="b" cx="654" cy="799.3" r="3" style="--dx:1.7px;animation-duration:10.1s;animation-delay:-7.3s"/>
<circle class="b" cx="69.3" cy="653.9" r="4.8" style="--dx:-18.6px;animation-duration:12.7s;animation-delay:-8.9s"/>
<circle class="b" cx="262.2" cy="681.9" r="5.3" style="--dx:19.6px;animation-duration:10.1s;animation-delay:-9.4s"/>
<circle class="b" cx="374.5" cy="667.2" r="7.4" style="--dx:-11.3px;animation-duration:17.7s;animation-delay:-6.5s"/>
<circle class="b" cx="1298" cy="767" r="5.8" style="--dx:-9.9px;animation-duration:17.6s;animation-delay:-16.1s"/>
<circle class="b" cx="880.5" cy="385.2" r="5.3" style="--dx:22.2px;animation-duration:17.1s;animation-delay:-7.9s"/>
<circle class="b" cx="471.9" cy="432.7" r="4.7" style="--dx:-8.7px;animation-duration:11.5s;animation-delay:-7.4s"/>
<circle class="b" cx="560.9" cy="480.8" r="2.3" style="--dx:15.3px;animation-duration:10.9s;animation-delay:-7.4s"/>
<circle class="b" cx="264.7" cy="400.1" r="3.6" style="--dx:10.5px;animation-duration:11.9s;animation-delay:-5.8s"/>
<circle class="b" cx="1542" cy="613.9" r="4.4" style="--dx:-11.4px;animation-duration:16.4s;animation-delay:-13.7s"/>
<circle class="b" cx="60.3" cy="401.6" r="2.9" style="--dx:21.8px;animation-duration:14.4s;animation-delay:-1.9s"/>
<circle class="b" cx="153.2" cy="507.7" r="5.8" style="--dx:19.9px;animation-duration:10.3s;animation-delay:-7.1s"/>
<circle class="b" cx="711.7" cy="924.7" r="3" style="--dx:7.1px;animation-duration:12.1s;animation-delay:-1.1s"/>
</svg>`,
}
