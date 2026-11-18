import { makeColors } from '../make-colors.js'

const { theme, problems } = makeColors({ label: 'sakura-blossom', only: 'light', roles: { accent: '#c2456f', danger: '#b3392f', success: '#3f7d4c', warning: '#a86f14', pro: '#7a55a8' }, light: { gray: { anchors: { 'surface-0': '#f6e1e8', 'surface-1': '#faeaf0', 'surface-2': '#fdf3f6', 'surface-3': '#fdf3f6', 'text-primary': '#3a2430', 'text-secondary': '#5a3f4d', 'text-muted': '#74586a' } } } })

export default {
  id: 'sakura-blossom',
  name: '櫻花',
  description: '粉色淺色配色、櫻花枝、花瓣飄落',
  mode: 'light',
  colors: theme,
  problems,
  glass: { blur: 4, tint: '#fdf3f6', opacity: 0.4 },
  scene: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1600 900" preserveAspectRatio="xMidYMid slice">
<style>
  .p { transform-box: fill-box; transform-origin: center; opacity: 0.85; animation-name: fall; animation-timing-function: linear; animation-iteration-count: infinite; }
  @keyframes fall { 0% { transform: translate(0, 0) rotate(0deg) } 50% { transform: translate(calc(var(--dx) * 0.4), 480px) rotate(260deg) } 100% { transform: translate(var(--dx), 980px) rotate(540deg) } }
  .br { animation: sway 9s ease-in-out infinite alternate; transform-origin: 1600px 0px; }
  .bl { animation: sway 11s ease-in-out infinite alternate; transform-origin: 0px 50px; }
  @keyframes sway { from { transform: rotate(-0.6deg) } to { transform: rotate(0.6deg) } }
</style>
<defs>
  <linearGradient id="sky" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0" stop-color="#fde8ef"/>
    <stop offset="0.6" stop-color="#f8d6e2"/>
    <stop offset="1" stop-color="#efc3d5"/>
  </linearGradient>
  <linearGradient id="mist" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0" stop-color="#ffffff" stop-opacity="0"/>
    <stop offset="1" stop-color="#ffffff" stop-opacity="0.55"/>
  </linearGradient>
  <g id="f">
    <g fill="#fbc9d8">
      <ellipse cx="0" cy="-9" rx="5.8" ry="9.5"/>
      <ellipse cx="0" cy="-9" rx="5.8" ry="9.5" transform="rotate(72)"/>
      <ellipse cx="0" cy="-9" rx="5.8" ry="9.5" transform="rotate(144)"/>
      <ellipse cx="0" cy="-9" rx="5.8" ry="9.5" transform="rotate(216)"/>
      <ellipse cx="0" cy="-9" rx="5.8" ry="9.5" transform="rotate(288)"/>
    </g>
    <circle r="3" fill="#e7809f"/>
  </g>
</defs>
<rect width="1600" height="900" fill="url(#sky)"/>
<rect y="620" width="1600" height="280" fill="url(#mist)"/>
<g class="br">
<path d="M1620 -20 C1480 30 1380 80 1250 110 C1130 140 1040 140 940 185" fill="none" stroke="#5a3d3b" stroke-width="15" stroke-linecap="round"/>
<path d="M1620 -20 C1480 30 1380 80 1250 110 C1130 140 1040 140 940 185" fill="none" stroke="#7a5550" stroke-width="5" stroke-linecap="round" opacity="0.5"/>
<path d="M1472.7 36.4 L1525.4 91.5" stroke="#6b4a46" stroke-width="3.5" stroke-linecap="round" fill="none"/>
<path d="M1117.2 136.5 L1135.3 186.8" stroke="#6b4a46" stroke-width="3.5" stroke-linecap="round" fill="none"/>
<path d="M1335.3 86.5 L1324.2 122.7" stroke="#6b4a46" stroke-width="3.5" stroke-linecap="round" fill="none"/>
<path d="M952.2 179.7 L938.6 248.1" stroke="#6b4a46" stroke-width="3.5" stroke-linecap="round" fill="none"/>
<path d="M1352.3 81 L1415.1 87.9" stroke="#6b4a46" stroke-width="3.5" stroke-linecap="round" fill="none"/>
<path d="M1219.6 117.1 L1184.5 130.7" stroke="#6b4a46" stroke-width="3.5" stroke-linecap="round" fill="none"/>
<path d="M1477.5 34.5 L1438.6 85.3" stroke="#6b4a46" stroke-width="3.5" stroke-linecap="round" fill="none"/>
<path d="M1066.7 145.9 L1140.3 186.5" stroke="#6b4a46" stroke-width="3.5" stroke-linecap="round" fill="none"/>
<path d="M1409.5 60.7 L1352 116.3" stroke="#6b4a46" stroke-width="3.5" stroke-linecap="round" fill="none"/>
<path d="M978 169.8 L1001.5 205.3" stroke="#6b4a46" stroke-width="3.5" stroke-linecap="round" fill="none"/>
<path d="M1604.2 -14.3 L1657.6 2" stroke="#6b4a46" stroke-width="3.5" stroke-linecap="round" fill="none"/>
<path d="M959.7 176.7 L871.8 199.4" stroke="#6b4a46" stroke-width="3.5" stroke-linecap="round" fill="none"/>
<path d="M1401.7 63.6 L1453.8 91.2" stroke="#6b4a46" stroke-width="3.5" stroke-linecap="round" fill="none"/>
<path d="M1140.6 132.4 L1153.4 227.8" stroke="#6b4a46" stroke-width="3.5" stroke-linecap="round" fill="none"/>
<path d="M1494 28 L1580.1 67.6" stroke="#6b4a46" stroke-width="3.5" stroke-linecap="round" fill="none"/>
<path d="M1105.7 138.5 L1153.1 149" stroke="#6b4a46" stroke-width="3.5" stroke-linecap="round" fill="none"/>
<path d="M1546.3 7.5 L1468.3 58.5" stroke="#6b4a46" stroke-width="3.5" stroke-linecap="round" fill="none"/>
<path d="M1183 124.7 L1203.8 156.3" stroke="#6b4a46" stroke-width="3.5" stroke-linecap="round" fill="none"/>
<path d="M1306.5 95.3 L1274.4 168.1" stroke="#6b4a46" stroke-width="3.5" stroke-linecap="round" fill="none"/>
<path d="M1120.4 135.9 L1055.6 151" stroke="#6b4a46" stroke-width="3.5" stroke-linecap="round" fill="none"/>
<path d="M1532.8 12.7 L1563.2 37.9" stroke="#6b4a46" stroke-width="3.5" stroke-linecap="round" fill="none"/>
<path d="M1240.1 112.4 L1260.1 163" stroke="#6b4a46" stroke-width="3.5" stroke-linecap="round" fill="none"/>
<path d="M1420.8 56.5 L1400.9 130.3" stroke="#6b4a46" stroke-width="3.5" stroke-linecap="round" fill="none"/>
<path d="M1027.9 154.8 L1061.4 193.3" stroke="#6b4a46" stroke-width="3.5" stroke-linecap="round" fill="none"/>
<use href="#f" transform="translate(1498.5 84.9) scale(1.4) rotate(3)"/>
<use href="#f" transform="translate(1552.6 108.7) scale(1.6) rotate(32)"/>
<use href="#f" transform="translate(1551.3 88.8) scale(0.9) rotate(64)"/>
<use href="#f" transform="translate(1157.3 163.1) scale(1.5) rotate(41)"/>
<use href="#f" transform="translate(1115.8 185.7) scale(1.1) rotate(2)"/>
<use href="#f" transform="translate(1162.4 163.1) scale(1.2) rotate(52)"/>
<use href="#f" transform="translate(1304.1 102.1) scale(0.9) rotate(60)"/>
<use href="#f" transform="translate(1303.3 124.8) scale(1.6) rotate(63)"/>
<use href="#f" transform="translate(1333.9 103.9) scale(0.9) rotate(43)"/>
<use href="#f" transform="translate(958.4 230.4) scale(1) rotate(63)"/>
<use href="#f" transform="translate(951 268.8) scale(1.3) rotate(59)"/>
<use href="#f" transform="translate(950.3 232.2) scale(1.4) rotate(24)"/>
<use href="#f" transform="translate(1392.6 67.1) scale(0.9) rotate(59)"/>
<use href="#f" transform="translate(1401.9 64.2) scale(1.5) rotate(41)"/>
<use href="#f" transform="translate(1424.3 102.6) scale(1.6) rotate(11)"/>
<use href="#f" transform="translate(1207.3 127) scale(1.1) rotate(28)"/>
<use href="#f" transform="translate(1166.1 122.4) scale(1.2) rotate(65)"/>
<use href="#f" transform="translate(1189.9 115.6) scale(1.3) rotate(19)"/>
<use href="#f" transform="translate(1420.8 70.7) scale(1.6) rotate(13)"/>
<use href="#f" transform="translate(1468.5 109.4) scale(1.2) rotate(10)"/>
<use href="#f" transform="translate(1434.8 87.4) scale(0.8) rotate(41)"/>
<use href="#f" transform="translate(1156.4 187.1) scale(1.1) rotate(42)"/>
<use href="#f" transform="translate(1128.4 173.5) scale(0.8) rotate(24)"/>
<use href="#f" transform="translate(1159.7 168.5) scale(1.4) rotate(13)"/>
<use href="#f" transform="translate(1367.3 113.5) scale(1.6) rotate(12)"/>
<use href="#f" transform="translate(1357.4 127.6) scale(1.1) rotate(65)"/>
<use href="#f" transform="translate(1348.6 97.6) scale(1.2) rotate(21)"/>
<use href="#f" transform="translate(1017.1 226.5) scale(1.5) rotate(59)"/>
<use href="#f" transform="translate(997.3 183.1) scale(1.6) rotate(56)"/>
<use href="#f" transform="translate(992.1 192.5) scale(1) rotate(63)"/>
<use href="#f" transform="translate(1675.4 21.2) scale(1.3) rotate(52)"/>
<use href="#f" transform="translate(1674.8 5.5) scale(1.4) rotate(29)"/>
<use href="#f" transform="translate(1657 -20.6) scale(1.2) rotate(44)"/>
<use href="#f" transform="translate(898.9 182.2) scale(1.2) rotate(46)"/>
<use href="#f" transform="translate(864.6 209.6) scale(1.1) rotate(54)"/>
<use href="#f" transform="translate(853.3 207.2) scale(1.6) rotate(48)"/>
<use href="#f" transform="translate(1475.2 78.5) scale(1.6) rotate(5)"/>
<use href="#f" transform="translate(1443.7 93.7) scale(1.5) rotate(11)"/>
<use href="#f" transform="translate(1427.2 96.7) scale(0.9) rotate(38)"/>
<use href="#f" transform="translate(1150.2 250.7) scale(1.1) rotate(34)"/>
<use href="#f" transform="translate(1141 203.8) scale(1.1) rotate(28)"/>
<use href="#f" transform="translate(1163.5 236.1) scale(1.2) rotate(10)"/>
<use href="#f" transform="translate(1604.5 45.7) scale(1.2) rotate(6)"/>
<use href="#f" transform="translate(1561.5 54.4) scale(1.5) rotate(62)"/>
<use href="#f" transform="translate(1557.8 58.5) scale(1) rotate(1)"/>
<use href="#f" transform="translate(1134 126.1) scale(1.7) rotate(18)"/>
<use href="#f" transform="translate(1135.7 169.2) scale(1.1) rotate(8)"/>
<use href="#f" transform="translate(1160.9 143.7) scale(1.2) rotate(61)"/>
<use href="#f" transform="translate(1462.9 55.8) scale(0.9) rotate(9)"/>
<use href="#f" transform="translate(1480.4 36.1) scale(0.8) rotate(18)"/>
<use href="#f" transform="translate(1473.1 69) scale(1.4) rotate(7)"/>
<use href="#f" transform="translate(1174.5 178.1) scale(1.1) rotate(29)"/>
<use href="#f" transform="translate(1202.9 150.7) scale(1) rotate(6)"/>
<use href="#f" transform="translate(1225.4 132.4) scale(1.3) rotate(69)"/>
<use href="#f" transform="translate(1267.4 171.9) scale(1.2) rotate(16)"/>
<use href="#f" transform="translate(1298.8 179.8) scale(1.6) rotate(22)"/>
<use href="#f" transform="translate(1264.3 153.8) scale(0.9) rotate(57)"/>
<use href="#f" transform="translate(1073.9 133.2) scale(1.7) rotate(37)"/>
<use href="#f" transform="translate(1048.5 153.3) scale(1.2) rotate(56)"/>
<use href="#f" transform="translate(1081 151.9) scale(1) rotate(27)"/>
<use href="#f" transform="translate(1539.1 22.5) scale(1.3) rotate(63)"/>
<use href="#f" transform="translate(1552.7 18.5) scale(1.4) rotate(70)"/>
<use href="#f" transform="translate(1548.2 31.8) scale(0.9) rotate(45)"/>
<use href="#f" transform="translate(1265.8 176.7) scale(1.3) rotate(24)"/>
<use href="#f" transform="translate(1243 159.1) scale(0.8) rotate(24)"/>
<use href="#f" transform="translate(1248.2 146.1) scale(1.6) rotate(57)"/>
<use href="#f" transform="translate(1392.8 140.8) scale(1) rotate(14)"/>
<use href="#f" transform="translate(1377.7 152.4) scale(1) rotate(37)"/>
<use href="#f" transform="translate(1383.5 125.8) scale(0.9) rotate(13)"/>
<use href="#f" transform="translate(1086.6 191.6) scale(1.3) rotate(41)"/>
<use href="#f" transform="translate(1086.8 191.7) scale(1.5) rotate(64)"/>
<use href="#f" transform="translate(1085.1 203.9) scale(0.9) rotate(62)"/>
</g>
<g class="bl">
<path d="M-20 50 C120 60 220 120 340 115 C420 110 470 140 540 170" fill="none" stroke="#5a3d3b" stroke-width="15" stroke-linecap="round"/>
<path d="M-20 50 C120 60 220 120 340 115 C420 110 470 140 540 170" fill="none" stroke="#7a5550" stroke-width="5" stroke-linecap="round" opacity="0.5"/>
<path d="M83.5 66.2 L69 124.9" stroke="#6b4a46" stroke-width="3.5" stroke-linecap="round" fill="none"/>
<path d="M411.4 120.3 L441.5 135.5" stroke="#6b4a46" stroke-width="3.5" stroke-linecap="round" fill="none"/>
<path d="M98.4 69.8 L67.3 72.8" stroke="#6b4a46" stroke-width="3.5" stroke-linecap="round" fill="none"/>
<path d="M446.6 130.4 L479.8 190.8" stroke="#6b4a46" stroke-width="3.5" stroke-linecap="round" fill="none"/>
<path d="M159.4 85.9 L110.5 125.9" stroke="#6b4a46" stroke-width="3.5" stroke-linecap="round" fill="none"/>
<path d="M357.9 114.5 L432.7 149.1" stroke="#6b4a46" stroke-width="3.5" stroke-linecap="round" fill="none"/>
<path d="M110.1 72.7 L121.8 170.4" stroke="#6b4a46" stroke-width="3.5" stroke-linecap="round" fill="none"/>
<path d="M368.7 114.7 L388.3 148.3" stroke="#6b4a46" stroke-width="3.5" stroke-linecap="round" fill="none"/>
<path d="M105.8 71.6 L154 150.8" stroke="#6b4a46" stroke-width="3.5" stroke-linecap="round" fill="none"/>
<path d="M526.6 164.2 L566.8 185.5" stroke="#6b4a46" stroke-width="3.5" stroke-linecap="round" fill="none"/>
<path d="M103.1 71 L118.8 149.3" stroke="#6b4a46" stroke-width="3.5" stroke-linecap="round" fill="none"/>
<path d="M446.2 130.2 L401.6 196.6" stroke="#6b4a46" stroke-width="3.5" stroke-linecap="round" fill="none"/>
<path d="M71.9 63.6 L45.4 131.4" stroke="#6b4a46" stroke-width="3.5" stroke-linecap="round" fill="none"/>
<path d="M522.7 162.4 L492.1 216.4" stroke="#6b4a46" stroke-width="3.5" stroke-linecap="round" fill="none"/>
<path d="M130 77.9 L168.4 105.6" stroke="#6b4a46" stroke-width="3.5" stroke-linecap="round" fill="none"/>
<use href="#f" transform="translate(58.2 105.6) scale(1) rotate(42)"/>
<use href="#f" transform="translate(39.9 118.4) scale(1.2) rotate(60)"/>
<use href="#f" transform="translate(43.6 120.1) scale(1.1) rotate(18)"/>
<use href="#f" transform="translate(426.4 125.5) scale(1) rotate(0)"/>
<use href="#f" transform="translate(426 131.8) scale(1) rotate(69)"/>
<use href="#f" transform="translate(458.6 120.3) scale(1.3) rotate(60)"/>
<use href="#f" transform="translate(42.4 95.9) scale(1.5) rotate(56)"/>
<use href="#f" transform="translate(42.9 50.1) scale(1.6) rotate(8)"/>
<use href="#f" transform="translate(44.7 94.3) scale(1.2) rotate(46)"/>
<use href="#f" transform="translate(462.5 190.5) scale(1.7) rotate(61)"/>
<use href="#f" transform="translate(477.6 205.6) scale(1.4) rotate(19)"/>
<use href="#f" transform="translate(478 166.2) scale(0.9) rotate(12)"/>
<use href="#f" transform="translate(113.1 107.1) scale(1.1) rotate(4)"/>
<use href="#f" transform="translate(99.8 121.1) scale(1.2) rotate(40)"/>
<use href="#f" transform="translate(130.5 101.3) scale(1.1) rotate(13)"/>
<use href="#f" transform="translate(450.1 158.4) scale(1.5) rotate(17)"/>
<use href="#f" transform="translate(461.7 126.3) scale(1.6) rotate(33)"/>
<use href="#f" transform="translate(404 135.1) scale(1.2) rotate(50)"/>
<use href="#f" transform="translate(145 167.2) scale(1.5) rotate(47)"/>
<use href="#f" transform="translate(115.1 163.9) scale(1.1) rotate(33)"/>
<use href="#f" transform="translate(142.8 153) scale(1.5) rotate(68)"/>
<use href="#f" transform="translate(395 152.4) scale(1) rotate(52)"/>
<use href="#f" transform="translate(371.3 144.7) scale(1.1) rotate(18)"/>
<use href="#f" transform="translate(382.7 144.8) scale(1.4) rotate(47)"/>
<use href="#f" transform="translate(166.3 131.4) scale(1.5) rotate(62)"/>
<use href="#f" transform="translate(131.2 170.8) scale(1.2) rotate(31)"/>
<use href="#f" transform="translate(164.9 144.7) scale(1.3) rotate(17)"/>
<use href="#f" transform="translate(542.9 197.7) scale(1.4) rotate(64)"/>
<use href="#f" transform="translate(573.4 202.6) scale(1.3) rotate(44)"/>
<use href="#f" transform="translate(569.9 187.8) scale(1.3) rotate(14)"/>
<use href="#f" transform="translate(131.5 172.5) scale(1.4) rotate(69)"/>
<use href="#f" transform="translate(115.6 156.8) scale(0.9) rotate(19)"/>
<use href="#f" transform="translate(131.6 135.7) scale(0.9) rotate(11)"/>
<use href="#f" transform="translate(383.6 193.7) scale(1) rotate(13)"/>
<use href="#f" transform="translate(391.3 218.2) scale(0.8) rotate(31)"/>
<use href="#f" transform="translate(385.3 174.2) scale(1) rotate(36)"/>
<use href="#f" transform="translate(58.1 113.5) scale(1) rotate(70)"/>
<use href="#f" transform="translate(55.5 133.4) scale(1.3) rotate(71)"/>
<use href="#f" transform="translate(53.3 135) scale(1.7) rotate(34)"/>
<use href="#f" transform="translate(503.4 241) scale(1) rotate(60)"/>
<use href="#f" transform="translate(483 194.8) scale(0.8) rotate(9)"/>
<use href="#f" transform="translate(515.5 230.5) scale(1.4) rotate(38)"/>
<use href="#f" transform="translate(147.5 126.8) scale(1.7) rotate(7)"/>
<use href="#f" transform="translate(169.4 81) scale(1.6) rotate(39)"/>
<use href="#f" transform="translate(179.1 89.2) scale(1.3) rotate(33)"/>
</g>
<ellipse class="p" cx="859.7" cy="-20" rx="6.5" ry="3.9" fill="#f8a9c0" style="--dx:78.3px;animation-duration:16.8s;animation-delay:-7.7s"/>
<ellipse class="p" cx="1198.2" cy="-20" rx="7.1" ry="4.2" fill="#fbc4d4" style="--dx:96.4px;animation-duration:16.6s;animation-delay:-3.5s"/>
<ellipse class="p" cx="639.1" cy="-20" rx="7.8" ry="4.7" fill="#fad2de" style="--dx:61.8px;animation-duration:18.4s;animation-delay:-12.7s"/>
<ellipse class="p" cx="523.9" cy="-20" rx="4.7" ry="2.8" fill="#f8a9c0" style="--dx:94.8px;animation-duration:22.9s;animation-delay:-0.2s"/>
<ellipse class="p" cx="162.6" cy="-20" rx="5.5" ry="3.3" fill="#fbc4d4" style="--dx:142.7px;animation-duration:17.2s;animation-delay:-0.4s"/>
<ellipse class="p" cx="1275.4" cy="-20" rx="4.6" ry="2.8" fill="#fad2de" style="--dx:131.5px;animation-duration:17.5s;animation-delay:-13s"/>
<ellipse class="p" cx="942" cy="-20" rx="6.7" ry="4" fill="#f8a9c0" style="--dx:136.8px;animation-duration:20.6s;animation-delay:-12.5s"/>
<ellipse class="p" cx="827" cy="-20" rx="6" ry="3.6" fill="#fbc4d4" style="--dx:183.4px;animation-duration:16.3s;animation-delay:-9.2s"/>
<ellipse class="p" cx="986.6" cy="-20" rx="6.1" ry="3.7" fill="#fad2de" style="--dx:144.9px;animation-duration:13.4s;animation-delay:-12.4s"/>
<ellipse class="p" cx="1556.8" cy="-20" rx="6.2" ry="3.7" fill="#f8a9c0" style="--dx:160.1px;animation-duration:21.2s;animation-delay:-21.2s"/>
<ellipse class="p" cx="584.3" cy="-20" rx="6.8" ry="4.1" fill="#fbc4d4" style="--dx:120.7px;animation-duration:14.7s;animation-delay:-5.5s"/>
<ellipse class="p" cx="278.2" cy="-20" rx="4.8" ry="2.9" fill="#fad2de" style="--dx:108.3px;animation-duration:16.6s;animation-delay:-15.6s"/>
<ellipse class="p" cx="967.6" cy="-20" rx="5.3" ry="3.2" fill="#f8a9c0" style="--dx:161.5px;animation-duration:19.2s;animation-delay:-14.6s"/>
<ellipse class="p" cx="1148.2" cy="-20" rx="4.8" ry="2.9" fill="#fbc4d4" style="--dx:138.9px;animation-duration:22.3s;animation-delay:-4.7s"/>
<ellipse class="p" cx="1268.7" cy="-20" rx="7.4" ry="4.5" fill="#fad2de" style="--dx:155.1px;animation-duration:17.2s;animation-delay:-4.1s"/>
<ellipse class="p" cx="866.7" cy="-20" rx="5.4" ry="3.2" fill="#f8a9c0" style="--dx:143px;animation-duration:18s;animation-delay:-8.8s"/>
<ellipse class="p" cx="422.3" cy="-20" rx="5.3" ry="3.2" fill="#fbc4d4" style="--dx:74.2px;animation-duration:17.5s;animation-delay:-2.1s"/>
<ellipse class="p" cx="1411.9" cy="-20" rx="6" ry="3.6" fill="#fad2de" style="--dx:111.7px;animation-duration:16.9s;animation-delay:-3.9s"/>
<ellipse class="p" cx="535.3" cy="-20" rx="4.6" ry="2.8" fill="#f8a9c0" style="--dx:85.8px;animation-duration:16.9s;animation-delay:-4.5s"/>
<ellipse class="p" cx="498.5" cy="-20" rx="7.7" ry="4.6" fill="#fbc4d4" style="--dx:188.2px;animation-duration:15.8s;animation-delay:-4.6s"/>
<ellipse class="p" cx="1250" cy="-20" rx="6.5" ry="3.9" fill="#fad2de" style="--dx:190.8px;animation-duration:19.1s;animation-delay:-9.7s"/>
<ellipse class="p" cx="796.3" cy="-20" rx="5.1" ry="3" fill="#f8a9c0" style="--dx:193.6px;animation-duration:22.3s;animation-delay:-17.3s"/>
</svg>`,
}
