import { makeColors } from '../make-colors.js'

const { theme, problems } = makeColors({ label: 'nebula', only: 'dark', roles: { accent: '#9aa4ff', danger: '#ff6b8a', success: '#5ee0b0', warning: '#ffcb6b', pro: '#d08bff' }, dark: { gray: { anchors: { 'surface-0': '#0b0916', 'surface-1': '#120f24', 'surface-2': '#19152f', 'surface-3': '#1d1834', 'text-primary': '#ece8ff', 'text-secondary': '#c0b9e3', 'text-muted': '#9b94c4' } } } })

export default {
  id: 'nebula',
  name: '宇宙星雲',
  description: '紫藍星雲緩慢旋轉、星星明滅',
  mode: 'dark',
  colors: theme,
  problems,
  glass: { blur: 4, tint: '#0b0916', opacity: 0.3 },
  scene: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1600 900" preserveAspectRatio="xMidYMid slice">
<style>
  .t { fill: #f6f2ff; animation-name: tw; animation-timing-function: ease-in-out; animation-iteration-count: infinite; }
  @keyframes tw { 0%, 100% { opacity: 0.25 } 50% { opacity: 1 } }
  .na { transform-origin: 800px 450px; animation: spin 320s linear infinite; }
  .nb { transform-origin: 800px 450px; animation: spin 480s linear infinite reverse; }
  @keyframes spin { from { transform: rotate(0deg) } to { transform: rotate(360deg) } }
  .core { animation: breathe 18s ease-in-out infinite alternate; }
  @keyframes breathe { from { opacity: 0.6 } to { opacity: 1 } }
</style>
<defs>
  <radialGradient id="bg" cx="0.5" cy="0.5" r="0.75">
    <stop offset="0" stop-color="#150f2e"/>
    <stop offset="1" stop-color="#05030c"/>
  </radialGradient>
  <radialGradient id="nm"><stop offset="0" stop-color="#ff4fb8" stop-opacity="0.5"/><stop offset="1" stop-color="#ff4fb8" stop-opacity="0"/></radialGradient>
  <radialGradient id="nb"><stop offset="0" stop-color="#4f7bff" stop-opacity="0.5"/><stop offset="1" stop-color="#4f7bff" stop-opacity="0"/></radialGradient>
  <radialGradient id="nv"><stop offset="0" stop-color="#9a5cff" stop-opacity="0.55"/><stop offset="1" stop-color="#9a5cff" stop-opacity="0"/></radialGradient>
  <radialGradient id="nt"><stop offset="0" stop-color="#35d6e8" stop-opacity="0.38"/><stop offset="1" stop-color="#35d6e8" stop-opacity="0"/></radialGradient>
  <radialGradient id="cr"><stop offset="0" stop-color="#ffd9f2" stop-opacity="0.7"/><stop offset="1" stop-color="#ffd9f2" stop-opacity="0"/></radialGradient>
</defs>
<rect width="1600" height="900" fill="url(#bg)"/>
<g class="nb" opacity="0.8">
<ellipse cx="1167" cy="403.7" rx="365.8" ry="140" fill="url(#nm)" transform="rotate(9 1167 403.7)"/>
<ellipse cx="859.6" cy="647.3" rx="444.9" ry="184.8" fill="url(#nb)" transform="rotate(8 859.6 647.3)"/>
<ellipse cx="665.6" cy="251.7" rx="255.4" ry="139.9" fill="url(#nv)" transform="rotate(111 665.6 251.7)"/>
<ellipse cx="815.7" cy="147.6" rx="373.2" ry="116.7" fill="url(#nt)" transform="rotate(15 815.7 147.6)"/>
<ellipse cx="1150.1" cy="443.5" rx="398.5" ry="203.2" fill="url(#nm)" transform="rotate(8 1150.1 443.5)"/>
<ellipse cx="802.7" cy="147.4" rx="426.9" ry="160.5" fill="url(#nb)" transform="rotate(164 802.7 147.4)"/>
</g>
<g class="na">
<ellipse cx="643.2" cy="528.2" rx="355.4" ry="141.5" fill="url(#nm)" transform="rotate(0 643.2 528.2)"/>
<ellipse cx="699.8" cy="583.6" rx="253.2" ry="227.4" fill="url(#nb)" transform="rotate(8 699.8 583.6)"/>
<ellipse cx="805.1" cy="330.3" rx="299.4" ry="222.1" fill="url(#nv)" transform="rotate(158 805.1 330.3)"/>
<ellipse cx="578.6" cy="323.6" rx="259.8" ry="146.4" fill="url(#nt)" transform="rotate(157 578.6 323.6)"/>
<ellipse cx="720.3" cy="256.4" rx="314.8" ry="220.3" fill="url(#nm)" transform="rotate(37 720.3 256.4)"/>
<ellipse cx="977.4" cy="376.6" rx="403.7" ry="150.7" fill="url(#nb)" transform="rotate(36 977.4 376.6)"/>
<ellipse cx="921" cy="448.6" rx="296.7" ry="160.4" fill="url(#nv)" transform="rotate(92 921 448.6)"/>
<ellipse cx="1014.1" cy="418.2" rx="337" ry="224.5" fill="url(#nt)" transform="rotate(6 1014.1 418.2)"/>
</g>
<circle class="core" cx="800" cy="450" r="150" fill="url(#cr)"/>
<circle class="t" cx="365.8" cy="135.7" r="0.7" style="animation-duration:3.6s;animation-delay:-3.2s"/>
<circle cx="64.7" cy="25.7" r="0.7" fill="#f2eeff" opacity="0.7"/>
<circle cx="1583.5" cy="518.8" r="0.9" fill="#f2eeff" opacity="0.4"/>
<circle class="t" cx="476.4" cy="469.4" r="1.2" style="animation-duration:6.1s;animation-delay:-0.3s"/>
<circle cx="1285.1" cy="681.5" r="0.6" fill="#f2eeff" opacity="0.7"/>
<circle cx="689.2" cy="782.5" r="0.5" fill="#f2eeff" opacity="0.5"/>
<circle class="t" cx="1438.1" cy="756.1" r="0.7" style="animation-duration:3.7s;animation-delay:-1.2s"/>
<circle cx="709.8" cy="500" r="1.4" fill="#f2eeff" opacity="0.7"/>
<circle cx="845.9" cy="230.4" r="1.5" fill="#f2eeff" opacity="0.5"/>
<circle class="t" cx="922.8" cy="654.5" r="1.4" style="animation-duration:5.6s;animation-delay:-0.4s"/>
<circle cx="813.9" cy="577.2" r="1" fill="#f2eeff" opacity="0.5"/>
<circle cx="408.9" cy="436.1" r="1.5" fill="#f2eeff" opacity="0.7"/>
<circle class="t" cx="146.9" cy="597.6" r="1.5" style="animation-duration:4.5s;animation-delay:-3.2s"/>
<circle cx="498" cy="207" r="1.1" fill="#f2eeff" opacity="0.4"/>
<circle cx="301.5" cy="836.9" r="1.2" fill="#f2eeff" opacity="0.6"/>
<circle class="t" cx="212.5" cy="719" r="1" style="animation-duration:4.4s;animation-delay:-4.4s"/>
<circle cx="487.6" cy="37.6" r="1.3" fill="#f2eeff" opacity="0.4"/>
<circle cx="48" cy="283.2" r="1.6" fill="#f2eeff" opacity="0.5"/>
<circle class="t" cx="577.2" cy="357.5" r="1.7" style="animation-duration:4.2s;animation-delay:-2.5s"/>
<circle cx="1153.1" cy="392" r="1.1" fill="#f2eeff" opacity="0.5"/>
<circle cx="1426.5" cy="783.9" r="0.9" fill="#f2eeff" opacity="0.7"/>
<circle class="t" cx="1511.6" cy="554.9" r="1.5" style="animation-duration:4.2s;animation-delay:-2.3s"/>
<circle cx="1325.8" cy="187.5" r="1" fill="#f2eeff" opacity="0.5"/>
<circle cx="1347.9" cy="859.9" r="1.7" fill="#f2eeff" opacity="0.4"/>
<circle class="t" cx="287.6" cy="738.6" r="0.7" style="animation-duration:6s;animation-delay:-3.8s"/>
<circle cx="839.6" cy="494.9" r="0.9" fill="#f2eeff" opacity="0.8"/>
<circle cx="1332.5" cy="473.3" r="1.4" fill="#f2eeff" opacity="0.6"/>
<circle class="t" cx="334.7" cy="123" r="0.7" style="animation-duration:5.6s;animation-delay:-5.1s"/>
<circle cx="936.1" cy="153.5" r="0.7" fill="#f2eeff" opacity="0.5"/>
<circle cx="680.4" cy="779.9" r="1.4" fill="#f2eeff" opacity="0.5"/>
<circle class="t" cx="777.7" cy="666.7" r="1.7" style="animation-duration:6.4s;animation-delay:-3.6s"/>
<circle cx="42.9" cy="402" r="0.9" fill="#f2eeff" opacity="0.6"/>
<circle cx="983.7" cy="315.1" r="1.1" fill="#f2eeff" opacity="0.4"/>
<circle class="t" cx="553.9" cy="687.8" r="1" style="animation-duration:6.5s;animation-delay:-5.1s"/>
<circle cx="501.8" cy="651.4" r="1.6" fill="#f2eeff" opacity="0.6"/>
<circle cx="114.6" cy="195.5" r="1.2" fill="#f2eeff" opacity="0.8"/>
<circle class="t" cx="592.6" cy="731.9" r="0.6" style="animation-duration:5.8s;animation-delay:-2.3s"/>
<circle cx="427.3" cy="66.5" r="0.7" fill="#f2eeff" opacity="0.3"/>
<circle cx="1294.6" cy="351.2" r="1.7" fill="#f2eeff" opacity="0.4"/>
<circle class="t" cx="798.5" cy="238.1" r="0.8" style="animation-duration:5.2s;animation-delay:-2.7s"/>
<circle cx="1331.9" cy="265.1" r="1.3" fill="#f2eeff" opacity="0.4"/>
<circle cx="650.1" cy="657.8" r="0.9" fill="#f2eeff" opacity="0.6"/>
<circle class="t" cx="884.7" cy="60.8" r="1.2" style="animation-duration:6s;animation-delay:-4s"/>
<circle cx="1196.5" cy="350.9" r="1.2" fill="#f2eeff" opacity="0.6"/>
<circle cx="1013.5" cy="219" r="1.4" fill="#f2eeff" opacity="0.4"/>
<circle class="t" cx="132.8" cy="371.3" r="0.6" style="animation-duration:3.7s;animation-delay:-3.6s"/>
<circle cx="101" cy="25.7" r="1.1" fill="#f2eeff" opacity="0.7"/>
<circle cx="734.9" cy="587.7" r="1.6" fill="#f2eeff" opacity="0.6"/>
<circle class="t" cx="615.7" cy="270.3" r="0.8" style="animation-duration:3s;animation-delay:-1.2s"/>
<circle cx="556.1" cy="408.6" r="1.4" fill="#f2eeff" opacity="0.7"/>
<circle cx="10.1" cy="528.1" r="0.7" fill="#f2eeff" opacity="0.4"/>
<circle class="t" cx="1027.8" cy="518.1" r="1.3" style="animation-duration:5.9s;animation-delay:-3.7s"/>
<circle cx="61.8" cy="852.5" r="0.9" fill="#f2eeff" opacity="0.7"/>
<circle cx="1411.2" cy="481.7" r="1.6" fill="#f2eeff" opacity="0.5"/>
<circle class="t" cx="1068.4" cy="303.5" r="0.7" style="animation-duration:5.5s;animation-delay:-3.3s"/>
<circle cx="1445.1" cy="823.9" r="0.6" fill="#f2eeff" opacity="0.5"/>
<circle cx="143.3" cy="300.9" r="1.1" fill="#f2eeff" opacity="0.4"/>
<circle class="t" cx="1433.3" cy="240.4" r="1.1" style="animation-duration:4s;animation-delay:-1.6s"/>
<circle cx="844.5" cy="121.8" r="1.5" fill="#f2eeff" opacity="0.5"/>
<circle cx="724.6" cy="762.8" r="1.7" fill="#f2eeff" opacity="0.7"/>
<circle class="t" cx="982.9" cy="3.6" r="0.8" style="animation-duration:5s;animation-delay:-2.1s"/>
<circle cx="1200.1" cy="180.2" r="1.6" fill="#f2eeff" opacity="0.6"/>
<circle cx="186.9" cy="556.6" r="1.7" fill="#f2eeff" opacity="0.5"/>
<circle class="t" cx="1093.7" cy="231" r="0.5" style="animation-duration:3.6s;animation-delay:-1.8s"/>
<circle cx="518.3" cy="285.9" r="1" fill="#f2eeff" opacity="0.4"/>
<circle cx="1088.1" cy="753.4" r="1" fill="#f2eeff" opacity="0.5"/>
<circle class="t" cx="11.9" cy="716.4" r="1.3" style="animation-duration:3.5s;animation-delay:-3.1s"/>
<circle cx="460.8" cy="689.7" r="1.4" fill="#f2eeff" opacity="0.4"/>
<circle cx="1458.4" cy="784.8" r="1.4" fill="#f2eeff" opacity="0.6"/>
<circle class="t" cx="934.9" cy="292.3" r="0.8" style="animation-duration:3.4s;animation-delay:-0.5s"/>
<circle cx="1354.9" cy="353.7" r="0.5" fill="#f2eeff" opacity="0.7"/>
<circle cx="1405.9" cy="714.9" r="0.7" fill="#f2eeff" opacity="0.8"/>
<circle class="t" cx="837.7" cy="588.9" r="1" style="animation-duration:4.4s;animation-delay:-1.4s"/>
<circle cx="656.3" cy="229.3" r="1.6" fill="#f2eeff" opacity="0.7"/>
<circle cx="646.7" cy="287.5" r="1" fill="#f2eeff" opacity="0.4"/>
<circle class="t" cx="528.8" cy="188.5" r="1.2" style="animation-duration:4.1s;animation-delay:-1.4s"/>
<circle cx="237.9" cy="496.5" r="1.5" fill="#f2eeff" opacity="0.7"/>
<circle cx="1588.7" cy="120.4" r="1.6" fill="#f2eeff" opacity="0.6"/>
<circle class="t" cx="1584.5" cy="888.9" r="1.1" style="animation-duration:3.2s;animation-delay:-2.9s"/>
<circle cx="1347" cy="95" r="1.6" fill="#f2eeff" opacity="0.7"/>
<circle cx="179.3" cy="320.9" r="1.5" fill="#f2eeff" opacity="0.6"/>
<circle class="t" cx="738.9" cy="425.6" r="1.4" style="animation-duration:5.9s;animation-delay:-5.4s"/>
<circle cx="1522.3" cy="704.9" r="1.6" fill="#f2eeff" opacity="0.6"/>
<circle cx="293.6" cy="351.3" r="1" fill="#f2eeff" opacity="0.6"/>
<circle class="t" cx="1033.1" cy="530.8" r="0.7" style="animation-duration:5.6s;animation-delay:-3.7s"/>
<circle cx="463.7" cy="490.2" r="1.5" fill="#f2eeff" opacity="0.5"/>
<circle cx="427.4" cy="427.6" r="1.2" fill="#f2eeff" opacity="0.5"/>
<circle class="t" cx="764.1" cy="294.6" r="0.9" style="animation-duration:4.8s;animation-delay:-0.5s"/>
<circle cx="418.1" cy="519.6" r="1.4" fill="#f2eeff" opacity="0.6"/>
<circle cx="125.9" cy="77.9" r="1.6" fill="#f2eeff" opacity="0.3"/>
<circle class="t" cx="291.7" cy="129.3" r="1.2" style="animation-duration:4.4s;animation-delay:-3.5s"/>
<circle cx="123.5" cy="642.2" r="1" fill="#f2eeff" opacity="0.4"/>
<circle cx="825.2" cy="689.3" r="1.7" fill="#f2eeff" opacity="0.5"/>
<circle class="t" cx="106.7" cy="245.5" r="1.5" style="animation-duration:2.7s;animation-delay:-0.5s"/>
<circle cx="405.4" cy="236" r="1" fill="#f2eeff" opacity="0.5"/>
<circle cx="729.4" cy="542.5" r="1.6" fill="#f2eeff" opacity="0.3"/>
<circle class="t" cx="206.5" cy="785.1" r="1.4" style="animation-duration:6.3s;animation-delay:-3.2s"/>
<circle cx="104.2" cy="797.4" r="1.2" fill="#f2eeff" opacity="0.4"/>
<circle cx="641.6" cy="163.9" r="1.6" fill="#f2eeff" opacity="0.5"/>
<circle class="t" cx="636.7" cy="779.3" r="0.6" style="animation-duration:3.6s;animation-delay:-2.9s"/>
<circle cx="878.5" cy="527" r="1.3" fill="#f2eeff" opacity="0.4"/>
<circle cx="487.3" cy="867.6" r="1.3" fill="#f2eeff" opacity="0.7"/>
<circle class="t" cx="1333.1" cy="572.2" r="1.3" style="animation-duration:5.3s;animation-delay:-3.7s"/>
<circle cx="14.8" cy="471.3" r="1.4" fill="#f2eeff" opacity="0.8"/>
<circle cx="1346.1" cy="547.1" r="0.8" fill="#f2eeff" opacity="0.3"/>
<circle class="t" cx="1121.3" cy="85.1" r="1.5" style="animation-duration:6.3s;animation-delay:-5.5s"/>
<circle cx="978.3" cy="86.4" r="1.4" fill="#f2eeff" opacity="0.7"/>
<circle cx="634.1" cy="297.6" r="0.7" fill="#f2eeff" opacity="0.6"/>
<circle class="t" cx="86" cy="328.3" r="1" style="animation-duration:6.2s;animation-delay:-3.5s"/>
<circle cx="1299.1" cy="282.4" r="1.3" fill="#f2eeff" opacity="0.4"/>
<circle cx="400.2" cy="855.3" r="1" fill="#f2eeff" opacity="0.7"/>
<circle class="t" cx="276.5" cy="380" r="1.4" style="animation-duration:4.3s;animation-delay:-0.1s"/>
<circle cx="792.3" cy="39.6" r="1.5" fill="#f2eeff" opacity="0.7"/>
<circle cx="785.6" cy="706.4" r="0.8" fill="#f2eeff" opacity="0.5"/>
<circle class="t" cx="564.1" cy="494.1" r="0.7" style="animation-duration:6.4s;animation-delay:-1.5s"/>
<circle cx="492.8" cy="464.4" r="0.6" fill="#f2eeff" opacity="0.8"/>
<circle cx="254.2" cy="250.6" r="0.5" fill="#f2eeff" opacity="0.4"/>
<circle class="t" cx="1273.5" cy="831.2" r="0.9" style="animation-duration:4.4s;animation-delay:-3.7s"/>
<circle cx="1458.3" cy="504.2" r="0.7" fill="#f2eeff" opacity="0.5"/>
<circle cx="1078.1" cy="897.9" r="1" fill="#f2eeff" opacity="0.5"/>
<circle class="t" cx="1336.8" cy="133.6" r="1.5" style="animation-duration:3.3s;animation-delay:-2.9s"/>
<circle cx="1047.4" cy="629.1" r="0.7" fill="#f2eeff" opacity="0.5"/>
<circle cx="1223.8" cy="457.2" r="0.8" fill="#f2eeff" opacity="0.3"/>
<circle class="t" cx="1027.8" cy="794.7" r="1.3" style="animation-duration:3.4s;animation-delay:-0.9s"/>
<circle cx="746.5" cy="392.5" r="1.4" fill="#f2eeff" opacity="0.6"/>
<circle cx="192.7" cy="396.3" r="1" fill="#f2eeff" opacity="0.6"/>
<circle class="t" cx="1397.5" cy="607.7" r="0.8" style="animation-duration:6.2s;animation-delay:-5.4s"/>
<circle cx="212" cy="514.9" r="1.5" fill="#f2eeff" opacity="0.5"/>
<circle cx="588.2" cy="185.3" r="1.4" fill="#f2eeff" opacity="0.4"/>
<circle class="t" cx="998.2" cy="283.2" r="0.7" style="animation-duration:3.8s;animation-delay:-0.6s"/>
<g class="t" transform="translate(210 130)" style="animation-duration:6.6s;animation-delay:-1.4s"><circle r="2.4" fill="#ffffff"/><path d="M-14 0H14M0 -14V14" stroke="#e8e0ff" stroke-width="1" opacity="0.8"/></g>
<g class="t" transform="translate(1380 760)" style="animation-duration:6.5s;animation-delay:-1.7s"><circle r="2.4" fill="#ffffff"/><path d="M-14 0H14M0 -14V14" stroke="#e8e0ff" stroke-width="1" opacity="0.8"/></g>
<g class="t" transform="translate(1240 90)" style="animation-duration:6s;animation-delay:-2.9s"><circle r="2.4" fill="#ffffff"/><path d="M-14 0H14M0 -14V14" stroke="#e8e0ff" stroke-width="1" opacity="0.8"/></g>
<g class="t" transform="translate(120 700)" style="animation-duration:4.7s;animation-delay:-1.9s"><circle r="2.4" fill="#ffffff"/><path d="M-14 0H14M0 -14V14" stroke="#e8e0ff" stroke-width="1" opacity="0.8"/></g>
</svg>`,
}
