import { makeColors } from '../make-colors.js'

const { theme, problems } = makeColors({ label: 'desert-stars', only: 'dark', roles: { accent: '#ff9a5c', danger: '#f0675c', success: '#6fbf84', warning: '#e8b04a', pro: '#b793e0' }, dark: { gray: { anchors: { 'surface-0': '#120d1f', 'surface-1': '#1a1329', 'surface-2': '#231a36', 'surface-3': '#271d3b', 'text-primary': '#f4e9e4', 'text-secondary': '#cdbcc4', 'text-muted': '#a8949f' } } } })

export default {
  id: 'desert-stars',
  name: '沙漠星空',
  description: '暖橘到深紫、沙丘剪影、銀河、偶爾流星',
  mode: 'dark',
  colors: theme,
  problems,
  glass: { blur: 4, tint: '#120d1f', opacity: 0.3 },
  scene: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1600 900" preserveAspectRatio="xMidYMid slice">
<style>
  .t { fill: #f6efff; animation-name: tw; animation-timing-function: ease-in-out; animation-iteration-count: infinite; }
  @keyframes tw { 0%, 100% { opacity: 0.2 } 50% { opacity: 1 } }
  .ss { opacity: 0; animation-name: shoot; animation-timing-function: ease-in; animation-iteration-count: infinite; }
  @keyframes shoot { 0% { transform: translate(0, 0); opacity: 0 } 92% { transform: translate(0, 0); opacity: 0 } 93% { opacity: 1 } 100% { transform: translate(300px, 126px); opacity: 0 } }
  .mw { animation: breathe 16s ease-in-out infinite alternate; }
  @keyframes breathe { from { opacity: 0.65 } to { opacity: 1 } }
</style>
<defs>
  <linearGradient id="sky" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0" stop-color="#070618"/>
    <stop offset="0.45" stop-color="#241447"/>
    <stop offset="0.72" stop-color="#7a2f5e"/>
    <stop offset="0.82" stop-color="#e0703d"/>
    <stop offset="1" stop-color="#f2a65a"/>
  </linearGradient>
  <linearGradient id="band" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0" stop-color="#d9c8ff" stop-opacity="0"/>
    <stop offset="0.5" stop-color="#d9c8ff" stop-opacity="0.3"/>
    <stop offset="1" stop-color="#d9c8ff" stop-opacity="0"/>
  </linearGradient>
  <radialGradient id="glow" cx="0.5" cy="0.5" r="0.5">
    <stop offset="0" stop-color="#ffb26b" stop-opacity="0.6"/>
    <stop offset="1" stop-color="#ffb26b" stop-opacity="0"/>
  </radialGradient>
  <linearGradient id="tail" x1="1" y1="1" x2="0" y2="0">
    <stop offset="0" stop-color="#ffffff" stop-opacity="0.95"/>
    <stop offset="1" stop-color="#ffffff" stop-opacity="0"/>
  </linearGradient>
</defs>
<rect width="1600" height="900" fill="url(#sky)"/>
<g class="mw">
  <g transform="rotate(-28 800 330)">
    <rect x="-300" y="230" width="2200" height="200" fill="url(#band)"/>
    <rect x="-300" y="285" width="2200" height="90" fill="url(#band)"/>
  </g>
</g>
<circle class="t" cx="663.7" cy="206.4" r="1.5" style="animation-duration:5.5s;animation-delay:-0.7s"/>
<circle cx="1400.7" cy="365.7" r="0.6" fill="#f6efff" opacity="0.6"/>
<circle cx="1308" cy="189.6" r="1.5" fill="#f6efff" opacity="0.3"/>
<circle cx="68.9" cy="45.2" r="0.7" fill="#f6efff" opacity="0.4"/>
<circle class="t" cx="1368.5" cy="62.7" r="1.5" style="animation-duration:5.5s;animation-delay:-4.7s"/>
<circle cx="1518.7" cy="306.9" r="1.6" fill="#f6efff" opacity="0.6"/>
<circle cx="802.5" cy="295" r="0.8" fill="#f6efff" opacity="0.7"/>
<circle cx="1205.7" cy="231.8" r="1.3" fill="#f6efff" opacity="0.5"/>
<circle class="t" cx="238.7" cy="33.5" r="1.6" style="animation-duration:4.3s;animation-delay:-1.8s"/>
<circle cx="81.6" cy="108.1" r="1.1" fill="#f6efff" opacity="0.5"/>
<circle cx="433.8" cy="476.3" r="1.1" fill="#f6efff" opacity="0.5"/>
<circle cx="460" cy="181.8" r="0.8" fill="#f6efff" opacity="0.6"/>
<circle class="t" cx="969.4" cy="77.3" r="0.9" style="animation-duration:5.3s;animation-delay:-3s"/>
<circle cx="671" cy="149.2" r="1.7" fill="#f6efff" opacity="0.6"/>
<circle cx="598.3" cy="70.7" r="1.5" fill="#f6efff" opacity="0.7"/>
<circle cx="102.3" cy="517.9" r="0.9" fill="#f6efff" opacity="0.7"/>
<circle class="t" cx="1430.2" cy="11.6" r="0.8" style="animation-duration:4.7s;animation-delay:-2.1s"/>
<circle cx="97.4" cy="360.3" r="1.1" fill="#f6efff" opacity="0.5"/>
<circle cx="1084.8" cy="390.5" r="1.1" fill="#f6efff" opacity="0.4"/>
<circle cx="342.5" cy="113.3" r="1.7" fill="#f6efff" opacity="0.4"/>
<circle class="t" cx="236.3" cy="154.5" r="1" style="animation-duration:4.3s;animation-delay:-2.5s"/>
<circle cx="1024.9" cy="373.2" r="1.2" fill="#f6efff" opacity="0.7"/>
<circle cx="1083.4" cy="37.4" r="1.3" fill="#f6efff" opacity="0.6"/>
<circle cx="331.5" cy="518.5" r="0.9" fill="#f6efff" opacity="0.6"/>
<circle class="t" cx="629.8" cy="170.1" r="0.6" style="animation-duration:5.7s;animation-delay:-1s"/>
<circle cx="123.3" cy="359.6" r="1" fill="#f6efff" opacity="0.4"/>
<circle cx="1186.1" cy="318.7" r="1.2" fill="#f6efff" opacity="0.4"/>
<circle cx="255.8" cy="517.4" r="1.6" fill="#f6efff" opacity="0.6"/>
<circle class="t" cx="1466" cy="363.3" r="1.6" style="animation-duration:3.3s;animation-delay:-1s"/>
<circle cx="608.4" cy="297.1" r="0.7" fill="#f6efff" opacity="0.6"/>
<circle cx="614.1" cy="322.9" r="1.5" fill="#f6efff" opacity="0.7"/>
<circle cx="753.4" cy="432" r="0.8" fill="#f6efff" opacity="0.6"/>
<circle class="t" cx="1312.7" cy="503.1" r="1.6" style="animation-duration:3.4s;animation-delay:-3.4s"/>
<circle cx="318.1" cy="382" r="0.7" fill="#f6efff" opacity="0.5"/>
<circle cx="1438.7" cy="54.5" r="1.7" fill="#f6efff" opacity="0.6"/>
<circle cx="827.6" cy="80" r="1.4" fill="#f6efff" opacity="0.4"/>
<circle class="t" cx="465.4" cy="155.1" r="1" style="animation-duration:3.8s;animation-delay:-0.3s"/>
<circle cx="1477.7" cy="279.2" r="1.5" fill="#f6efff" opacity="0.6"/>
<circle cx="1109.3" cy="36.6" r="1.2" fill="#f6efff" opacity="0.5"/>
<circle cx="432.8" cy="446.7" r="1" fill="#f6efff" opacity="0.6"/>
<circle class="t" cx="543.1" cy="14.3" r="1.7" style="animation-duration:3.6s;animation-delay:-3.3s"/>
<circle cx="720" cy="128.2" r="0.7" fill="#f6efff" opacity="0.7"/>
<circle cx="769.7" cy="242.6" r="0.8" fill="#f6efff" opacity="0.8"/>
<circle cx="1386.4" cy="242.9" r="0.7" fill="#f6efff" opacity="0.6"/>
<circle class="t" cx="287.9" cy="276.9" r="1.6" style="animation-duration:3.4s;animation-delay:-2.5s"/>
<circle cx="1559.8" cy="241.9" r="1.1" fill="#f6efff" opacity="0.5"/>
<circle cx="808.8" cy="345.4" r="1.2" fill="#f6efff" opacity="0.3"/>
<circle cx="1006" cy="167.9" r="1.3" fill="#f6efff" opacity="0.8"/>
<circle class="t" cx="284.6" cy="65.7" r="1.4" style="animation-duration:5.3s;animation-delay:-1.9s"/>
<circle cx="1323.3" cy="52.1" r="0.9" fill="#f6efff" opacity="0.4"/>
<circle cx="708" cy="36.7" r="1.3" fill="#f6efff" opacity="0.7"/>
<circle cx="1322.9" cy="353.8" r="1.1" fill="#f6efff" opacity="0.7"/>
<circle class="t" cx="144.8" cy="169.8" r="1.1" style="animation-duration:3.9s;animation-delay:-2.3s"/>
<circle cx="81" cy="292.9" r="1.5" fill="#f6efff" opacity="0.6"/>
<circle cx="1511.2" cy="342.9" r="1.2" fill="#f6efff" opacity="0.7"/>
<circle cx="1363.7" cy="74.7" r="1.2" fill="#f6efff" opacity="0.8"/>
<circle class="t" cx="1101.9" cy="177.2" r="1" style="animation-duration:5.4s;animation-delay:-4.5s"/>
<circle cx="1067.8" cy="435.2" r="1.7" fill="#f6efff" opacity="0.6"/>
<circle cx="851.8" cy="205.2" r="1.5" fill="#f6efff" opacity="0.6"/>
<circle cx="1086" cy="551.6" r="0.7" fill="#f6efff" opacity="0.4"/>
<circle class="t" cx="861.1" cy="558.1" r="0.7" style="animation-duration:4.5s;animation-delay:-2.6s"/>
<circle cx="106.8" cy="129.8" r="1.7" fill="#f6efff" opacity="0.7"/>
<circle cx="1412.1" cy="269.2" r="1.4" fill="#f6efff" opacity="0.5"/>
<circle cx="944.4" cy="522" r="0.8" fill="#f6efff" opacity="0.7"/>
<circle class="t" cx="221" cy="176.6" r="0.7" style="animation-duration:5.8s;animation-delay:-1.5s"/>
<circle cx="1017.2" cy="398.2" r="1" fill="#f6efff" opacity="0.3"/>
<circle cx="829.2" cy="87.6" r="0.6" fill="#f6efff" opacity="0.8"/>
<circle cx="425.2" cy="351.3" r="1.1" fill="#f6efff" opacity="0.6"/>
<circle class="t" cx="502.5" cy="76.6" r="1" style="animation-duration:3.7s;animation-delay:-0.4s"/>
<circle cx="399.3" cy="71" r="1.6" fill="#f6efff" opacity="0.3"/>
<circle cx="1255.7" cy="166" r="0.9" fill="#f6efff" opacity="0.4"/>
<circle cx="1507.4" cy="243.3" r="1.3" fill="#f6efff" opacity="0.7"/>
<circle class="t" cx="865" cy="375" r="0.6" style="animation-duration:3.4s;animation-delay:-0.9s"/>
<circle cx="577.4" cy="232.6" r="0.8" fill="#f6efff" opacity="0.5"/>
<circle cx="877.6" cy="42.2" r="1.6" fill="#f6efff" opacity="0.7"/>
<circle cx="986.9" cy="478" r="0.9" fill="#f6efff" opacity="0.6"/>
<circle class="t" cx="441.9" cy="445.4" r="1.4" style="animation-duration:4.1s;animation-delay:-0.1s"/>
<circle cx="105.3" cy="541.5" r="0.7" fill="#f6efff" opacity="0.4"/>
<circle cx="1361.5" cy="232.2" r="0.7" fill="#f6efff" opacity="0.7"/>
<circle cx="921.9" cy="404.3" r="1" fill="#f6efff" opacity="0.4"/>
<circle class="t" cx="1160.2" cy="536.3" r="1.1" style="animation-duration:3.8s;animation-delay:-0.1s"/>
<circle cx="1241.3" cy="552.8" r="0.8" fill="#f6efff" opacity="0.6"/>
<circle cx="1121.7" cy="28.8" r="1.6" fill="#f6efff" opacity="0.4"/>
<circle cx="268.9" cy="248" r="0.7" fill="#f6efff" opacity="0.6"/>
<circle class="t" cx="1065.5" cy="357.9" r="1.6" style="animation-duration:3.8s;animation-delay:-2s"/>
<circle cx="966.1" cy="24.2" r="0.8" fill="#f6efff" opacity="0.3"/>
<circle cx="816" cy="0.5" r="0.7" fill="#f6efff" opacity="0.6"/>
<circle cx="1555.7" cy="197.8" r="1.2" fill="#f6efff" opacity="0.6"/>
<circle class="t" cx="1426.7" cy="501.7" r="1.5" style="animation-duration:3.6s;animation-delay:-0.8s"/>
<circle cx="31.2" cy="418.6" r="0.9" fill="#f6efff" opacity="0.5"/>
<circle cx="600.5" cy="531" r="1.3" fill="#efe6ff" opacity="0.7"/>
<circle cx="1261.7" cy="58.7" r="0.9" fill="#efe6ff" opacity="0.5"/>
<circle cx="1134.5" cy="114.9" r="0.7" fill="#efe6ff" opacity="0.6"/>
<circle cx="365.6" cy="522.9" r="1.1" fill="#efe6ff" opacity="0.4"/>
<circle cx="1383.9" cy="34.7" r="0.7" fill="#efe6ff" opacity="0.4"/>
<circle cx="400.9" cy="557.9" r="1.1" fill="#efe6ff" opacity="0.6"/>
<circle cx="593.9" cy="434" r="1.2" fill="#efe6ff" opacity="0.7"/>
<circle cx="300.5" cy="594.8" r="0.9" fill="#efe6ff" opacity="0.6"/>
<circle cx="1315.8" cy="18.3" r="0.9" fill="#efe6ff" opacity="0.5"/>
<circle cx="1088.8" cy="197.7" r="0.7" fill="#efe6ff" opacity="0.4"/>
<circle cx="1318.1" cy="119.1" r="0.6" fill="#efe6ff" opacity="0.7"/>
<circle cx="1077.5" cy="142" r="1.2" fill="#efe6ff" opacity="0.6"/>
<circle cx="132.2" cy="577.6" r="1.4" fill="#efe6ff" opacity="0.7"/>
<circle cx="950.1" cy="172.9" r="1.3" fill="#efe6ff" opacity="0.6"/>
<circle cx="998.9" cy="260.2" r="1" fill="#efe6ff" opacity="0.8"/>
<circle cx="1282.8" cy="36.7" r="0.9" fill="#efe6ff" opacity="0.4"/>
<circle cx="1333.2" cy="37.8" r="1.4" fill="#efe6ff" opacity="0.7"/>
<circle cx="548.1" cy="491.1" r="0.9" fill="#efe6ff" opacity="0.8"/>
<circle cx="828.7" cy="334.9" r="1.3" fill="#efe6ff" opacity="0.4"/>
<circle cx="512.6" cy="415.6" r="0.6" fill="#efe6ff" opacity="0.7"/>
<circle cx="963.3" cy="325" r="1" fill="#efe6ff" opacity="0.7"/>
<circle cx="158.4" cy="586.2" r="1" fill="#efe6ff" opacity="0.8"/>
<circle cx="366.1" cy="596.9" r="1" fill="#efe6ff" opacity="0.4"/>
<circle cx="1046.8" cy="149" r="0.6" fill="#efe6ff" opacity="0.8"/>
<circle cx="1506.4" cy="16.8" r="0.6" fill="#efe6ff" opacity="0.8"/>
<circle cx="1136.3" cy="150" r="1.2" fill="#efe6ff" opacity="0.5"/>
<circle cx="618" cy="458" r="1.1" fill="#efe6ff" opacity="0.7"/>
<circle cx="372.4" cy="572.4" r="0.5" fill="#efe6ff" opacity="0.7"/>
<circle cx="1346.9" cy="80.9" r="0.6" fill="#efe6ff" opacity="0.6"/>
<circle cx="1366" cy="11.7" r="0.8" fill="#efe6ff" opacity="0.5"/>
<circle cx="503.8" cy="488.4" r="0.6" fill="#efe6ff" opacity="0.8"/>
<circle cx="1369.3" cy="67.7" r="1" fill="#efe6ff" opacity="0.6"/>
<circle cx="440.2" cy="568.2" r="0.8" fill="#efe6ff" opacity="0.8"/>
<circle cx="1002.6" cy="188.7" r="1.2" fill="#efe6ff" opacity="0.5"/>
<circle cx="1180.6" cy="160.5" r="1.2" fill="#efe6ff" opacity="0.8"/>
<circle cx="1267.1" cy="145.3" r="0.7" fill="#efe6ff" opacity="0.7"/>
<circle cx="690.1" cy="340.7" r="1.3" fill="#efe6ff" opacity="0.7"/>
<circle cx="1279.4" cy="134.4" r="0.9" fill="#efe6ff" opacity="0.8"/>
<circle cx="912.9" cy="288.6" r="1.4" fill="#efe6ff" opacity="0.6"/>
<circle cx="280" cy="535.9" r="0.9" fill="#efe6ff" opacity="0.4"/>
<circle cx="787.7" cy="342" r="1.1" fill="#efe6ff" opacity="0.6"/>
<circle cx="505.4" cy="533.7" r="0.9" fill="#efe6ff" opacity="0.7"/>
<circle cx="746.7" cy="306.9" r="1.3" fill="#efe6ff" opacity="0.5"/>
<circle cx="1001.9" cy="287.3" r="1.3" fill="#efe6ff" opacity="0.8"/>
<circle cx="509.9" cy="516.5" r="0.9" fill="#efe6ff" opacity="0.4"/>
<circle cx="329.9" cy="517.3" r="1.2" fill="#efe6ff" opacity="0.5"/>
<circle cx="727.1" cy="331.5" r="1.1" fill="#efe6ff" opacity="0.8"/>
<circle cx="812.9" cy="327.3" r="0.7" fill="#efe6ff" opacity="0.7"/>
<circle cx="528.6" cy="553.8" r="1.1" fill="#efe6ff" opacity="0.6"/>
<circle cx="644.8" cy="402.7" r="1.4" fill="#efe6ff" opacity="0.4"/>
<circle cx="901.7" cy="279.4" r="1.1" fill="#efe6ff" opacity="0.8"/>
<circle cx="1037.4" cy="272.4" r="0.9" fill="#efe6ff" opacity="0.7"/>
<circle cx="502.8" cy="536.8" r="1.2" fill="#efe6ff" opacity="0.5"/>
<circle cx="1044.2" cy="275.2" r="0.7" fill="#efe6ff" opacity="0.4"/>
<circle cx="1108.8" cy="118.4" r="1" fill="#efe6ff" opacity="0.7"/>
<circle cx="337.5" cy="584.8" r="1.1" fill="#efe6ff" opacity="0.6"/>
<circle cx="558.3" cy="353.5" r="0.5" fill="#efe6ff" opacity="0.6"/>
<circle cx="1365.8" cy="82.8" r="0.5" fill="#efe6ff" opacity="0.4"/>
<circle cx="1430.4" cy="33.8" r="0.7" fill="#efe6ff" opacity="0.7"/>
<circle cx="425.9" cy="396.1" r="0.8" fill="#efe6ff" opacity="0.5"/>
<circle cx="975.4" cy="219.8" r="0.7" fill="#efe6ff" opacity="0.6"/>
<circle cx="1398.9" cy="45.4" r="0.6" fill="#efe6ff" opacity="0.5"/>
<circle cx="575.8" cy="353.6" r="0.5" fill="#efe6ff" opacity="0.4"/>
<circle cx="209.8" cy="603.7" r="0.9" fill="#efe6ff" opacity="0.8"/>
<circle cx="594.7" cy="392.8" r="0.9" fill="#efe6ff" opacity="0.5"/>
<circle cx="664.5" cy="362.2" r="1" fill="#efe6ff" opacity="0.6"/>
<circle cx="336.7" cy="602.3" r="0.5" fill="#efe6ff" opacity="0.4"/>
<circle cx="418.1" cy="526.2" r="0.7" fill="#efe6ff" opacity="0.7"/>
<circle cx="643.2" cy="295.8" r="0.7" fill="#efe6ff" opacity="0.6"/>
<circle cx="314.2" cy="590.1" r="0.8" fill="#efe6ff" opacity="0.7"/>
<circle cx="340.6" cy="509.7" r="1.2" fill="#efe6ff" opacity="0.5"/>
<circle cx="1166.1" cy="111.3" r="0.9" fill="#efe6ff" opacity="0.7"/>
<circle cx="481.3" cy="524.3" r="0.7" fill="#efe6ff" opacity="0.4"/>
<circle cx="460.2" cy="508.6" r="1" fill="#efe6ff" opacity="0.4"/>
<circle cx="778.8" cy="308.7" r="0.5" fill="#efe6ff" opacity="0.7"/>
<circle cx="884.7" cy="228.6" r="0.7" fill="#efe6ff" opacity="0.5"/>
<circle cx="1364.1" cy="12.5" r="1" fill="#efe6ff" opacity="0.4"/>
<circle cx="1041.3" cy="189.5" r="0.5" fill="#efe6ff" opacity="0.6"/>
<circle cx="823.7" cy="341" r="0.6" fill="#efe6ff" opacity="0.4"/>
<circle cx="1497.6" cy="97.9" r="1" fill="#efe6ff" opacity="0.7"/>
<circle cx="498.4" cy="469.4" r="1.3" fill="#efe6ff" opacity="0.8"/>
<circle cx="391.8" cy="532.2" r="0.8" fill="#efe6ff" opacity="0.6"/>
<circle cx="718.5" cy="427.7" r="1" fill="#efe6ff" opacity="0.5"/>
<circle cx="1145.3" cy="172.4" r="0.8" fill="#efe6ff" opacity="0.8"/>
<circle cx="943.6" cy="240.8" r="1" fill="#efe6ff" opacity="0.5"/>
<circle cx="537.8" cy="442.8" r="0.8" fill="#efe6ff" opacity="0.6"/>
<circle cx="887.4" cy="363.5" r="0.6" fill="#efe6ff" opacity="0.6"/>
<circle cx="408" cy="501.4" r="1.2" fill="#efe6ff" opacity="0.4"/>
<circle cx="1020.4" cy="128.1" r="0.9" fill="#efe6ff" opacity="0.4"/>
<circle cx="1156.4" cy="199.4" r="1.2" fill="#efe6ff" opacity="0.4"/>
<circle cx="1314.6" cy="24.4" r="0.6" fill="#efe6ff" opacity="0.8"/>
<circle cx="838.6" cy="381.8" r="1.3" fill="#efe6ff" opacity="0.7"/>
<circle cx="1208.4" cy="142.6" r="0.9" fill="#efe6ff" opacity="0.4"/>
<circle cx="1374.4" cy="102.1" r="0.8" fill="#efe6ff" opacity="0.5"/>
<circle cx="1055.1" cy="254.3" r="1.4" fill="#efe6ff" opacity="0.7"/>
<circle cx="1285.7" cy="66.9" r="0.6" fill="#efe6ff" opacity="0.5"/>
<circle cx="586" cy="257" r="1.2" fill="#efe6ff" opacity="0.6"/>
<circle cx="458.5" cy="452.1" r="1" fill="#efe6ff" opacity="0.4"/>
<circle cx="975.4" cy="295.6" r="1.3" fill="#efe6ff" opacity="0.4"/>
<circle cx="478.4" cy="501.5" r="1.1" fill="#efe6ff" opacity="0.6"/>
<circle cx="812.1" cy="254" r="1.1" fill="#efe6ff" opacity="0.5"/>
<circle cx="532.1" cy="449" r="0.9" fill="#efe6ff" opacity="0.4"/>
<circle cx="865.8" cy="244.5" r="1.4" fill="#efe6ff" opacity="0.5"/>
<circle cx="673.7" cy="489.7" r="0.8" fill="#efe6ff" opacity="0.6"/>
<circle cx="1495.7" cy="34.9" r="0.8" fill="#efe6ff" opacity="0.5"/>
<circle cx="1040" cy="239.6" r="1.4" fill="#efe6ff" opacity="0.8"/>
<circle cx="864.2" cy="178.8" r="0.7" fill="#efe6ff" opacity="0.5"/>
<circle cx="776.3" cy="256.3" r="0.7" fill="#efe6ff" opacity="0.6"/>
<circle cx="1030.8" cy="223.3" r="0.9" fill="#efe6ff" opacity="0.4"/>
<g class="ss" style="animation-duration:17s;animation-delay:-4s"><g transform="translate(380 90)"><line x1="0" y1="0" x2="-90" y2="-38" stroke="url(#tail)" stroke-width="2.4" stroke-linecap="round"/><circle r="2.2" fill="#ffffff"/></g></g>
<g class="ss" style="animation-duration:23s;animation-delay:-13s"><g transform="translate(1150 160)"><line x1="0" y1="0" x2="-90" y2="-38" stroke="url(#tail)" stroke-width="2.4" stroke-linecap="round"/><circle r="2.2" fill="#ffffff"/></g></g>
<g class="ss" style="animation-duration:29s;animation-delay:-21s"><g transform="translate(700 60)"><line x1="0" y1="0" x2="-90" y2="-38" stroke="url(#tail)" stroke-width="2.4" stroke-linecap="round"/><circle r="2.2" fill="#ffffff"/></g></g>
<ellipse cx="800" cy="700" rx="900" ry="150" fill="url(#glow)"/>
<path d="M-10 920 L-10 690 L0 703.4 L40 710.2 L80 715 L120 717.3 L160 717.4 L200 715.7 L240 713.2 L280 710.8 L320 709.3 L360 709 L400 710.2 L440 712.2 L480 714.4 L520 715.8 L560 715.6 L600 713.2 L640 708.5 L680 701.6 L720 693.4 L760 684.8 L800 676.9 L840 670.7 L880 666.7 L920 665.1 L960 665.4 L1000 667.1 L1040 669.2 L1080 670.7 L1120 671.1 L1160 670.2 L1200 668 L1240 665.3 L1280 662.8 L1320 661.5 L1360 662.2 L1400 665.4 L1440 670.9 L1480 678.3 L1520 686.7 L1560 695.1 L1600 702.5 L1610 920 Z" fill="#47224f"/>
<path d="M-10 920 L-10 760 L0 783.3 L40 779.1 L80 776.2 L120 774.7 L160 774.4 L200 774.7 L240 774.9 L280 774.2 L320 772 L360 768 L400 762.1 L440 754.7 L480 746.4 L520 738.2 L560 730.8 L600 725.1 L640 721.5 L680 720.4 L720 721.6 L760 724.4 L800 728.3 L840 732.3 L880 735.8 L920 738.1 L960 739.1 L1000 738.9 L1040 738 L1080 736.9 L1120 736.6 L1160 737.6 L1200 740.5 L1240 745.5 L1280 752.4 L1320 760.6 L1360 769.4 L1400 777.8 L1440 785.1 L1480 790.5 L1520 793.6 L1560 794.5 L1600 793.5 L1610 920 Z" fill="#2c1538"/>
<g transform="translate(1440 770) scale(1)" fill="#0e0718"><rect x="-7" y="-120" width="14" height="124" rx="7"/><path d="M-7 -70 h-18 a9 9 0 0 1 -9 -9 v-34 a7 7 0 0 1 14 0 v30 h13 z"/><path d="M7 -52 h16 a9 9 0 0 0 9 -9 v-26 a7 7 0 0 0 -14 0 v22 h-11 z"/></g>
<g transform="translate(1530 780) scale(0.7)" fill="#0e0718"><rect x="-7" y="-120" width="14" height="124" rx="7"/><path d="M-7 -70 h-18 a9 9 0 0 1 -9 -9 v-34 a7 7 0 0 1 14 0 v30 h13 z"/><path d="M7 -52 h16 a9 9 0 0 0 9 -9 v-26 a7 7 0 0 0 -14 0 v22 h-11 z"/></g>
<path d="M-10 920 L-10 830 L0 811.8 L40 806.7 L80 802.2 L120 799.4 L160 799.5 L200 802.7 L240 808.4 L280 815.6 L320 822.9 L360 828.7 L400 832.5 L440 834 L480 834 L520 833.5 L560 833.8 L600 835.9 L640 840.1 L680 845.9 L720 852.3 L760 857.9 L800 861.3 L840 861.8 L880 859.2 L920 854.1 L960 847.9 L1000 841.9 L1040 837.4 L1080 834.8 L1120 834.2 L1160 834.6 L1200 834.9 L1240 833.8 L1280 830.6 L1320 825.2 L1360 818.1 L1400 810.7 L1440 804.4 L1480 800.3 L1520 799.3 L1560 801.3 L1600 805.4 L1610 920 Z" fill="#150a24"/>
</svg>`,
}
