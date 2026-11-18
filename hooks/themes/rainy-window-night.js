import { makeColors } from '../make-colors.js'

const { theme, problems } = makeColors({ label: 'rainy-window-night', only: 'dark', roles: { accent: '#5fb4d9', danger: '#e0605a', success: '#5cb88a', warning: '#d9a64a', pro: '#b08ae0' }, dark: { gray: { anchors: { 'surface-0': '#0e1218', 'surface-1': '#141a23', 'surface-2': '#1a212c', 'surface-3': '#1d2531', 'text-primary': '#e6ecf5', 'text-secondary': '#b6c0cf', 'text-muted': '#94a0b3' } } } })

export default {
  id: 'rainy-window-night',
  name: '下雨的窗邊夜晚',
  description: '藍灰夜色、雨絲、窗上水珠、遠處霓虹光斑',
  mode: 'dark',
  colors: theme,
  problems,
  glass: { blur: 3, tint: '#0e1218', opacity: 0.4 },
  scene: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1600 900" preserveAspectRatio="xMidYMid slice">
<style>
  .r { animation-name: rain; animation-timing-function: linear; animation-iteration-count: infinite; }
  @keyframes rain { from { transform: translate(0, 0) } to { transform: translate(-150px, 1100px) } }
  .k { opacity: var(--o); animation-name: glow; animation-timing-function: ease-in-out; animation-iteration-count: infinite; animation-direction: alternate; }
  @keyframes glow { from { opacity: calc(var(--o) * 0.45) } to { opacity: var(--o) } }
  .s { animation-name: slide; animation-timing-function: ease-in; animation-iteration-count: infinite; }
  @keyframes slide { 0% { transform: translateY(0); opacity: 0 } 6% { opacity: 1 } 70% { opacity: 1 } 100% { transform: translateY(var(--dy)); opacity: 0 } }
</style>
<defs>
  <linearGradient id="sky" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0" stop-color="#090d15"/>
    <stop offset="1" stop-color="#18222f"/>
  </linearGradient>
  <radialGradient id="bm"><stop offset="0" stop-color="#ff5aa8" stop-opacity="0.9"/><stop offset="1" stop-color="#ff5aa8" stop-opacity="0"/></radialGradient>
  <radialGradient id="bc"><stop offset="0" stop-color="#45d2ff" stop-opacity="0.9"/><stop offset="1" stop-color="#45d2ff" stop-opacity="0"/></radialGradient>
  <radialGradient id="ba"><stop offset="0" stop-color="#ffb347" stop-opacity="0.9"/><stop offset="1" stop-color="#ffb347" stop-opacity="0"/></radialGradient>
  <radialGradient id="bg"><stop offset="0" stop-color="#6ff2c0" stop-opacity="0.8"/><stop offset="1" stop-color="#6ff2c0" stop-opacity="0"/></radialGradient>
</defs>
<rect width="1600" height="900" fill="url(#sky)"/>
<circle class="k" cx="756.67" cy="402.47" r="56.33" fill="url(#bm)" style="--o:0.62;animation-duration:6.03s;animation-delay:-1.04s"/>
<circle class="k" cx="1335.44" cy="860.35" r="48.98" fill="url(#bc)" style="--o:0.42;animation-duration:7.38s;animation-delay:-0.41s"/>
<circle class="k" cx="311.39" cy="476.16" r="70.27" fill="url(#ba)" style="--o:0.62;animation-duration:7.92s;animation-delay:-6.46s"/>
<circle class="k" cx="1559.93" cy="666.92" r="45.27" fill="url(#bg)" style="--o:0.49;animation-duration:10.11s;animation-delay:-8.85s"/>
<circle class="k" cx="1244.81" cy="680.65" r="52.27" fill="url(#bm)" style="--o:0.48;animation-duration:8.51s;animation-delay:-8s"/>
<circle class="k" cx="396.93" cy="555.4" r="72.67" fill="url(#bc)" style="--o:0.39;animation-duration:7.9s;animation-delay:-1.89s"/>
<circle class="k" cx="227.58" cy="818.75" r="42.07" fill="url(#ba)" style="--o:0.37;animation-duration:10.7s;animation-delay:-8.26s"/>
<circle class="k" cx="660.11" cy="639.13" r="71.82" fill="url(#bg)" style="--o:0.47;animation-duration:5.48s;animation-delay:-3.45s"/>
<circle class="k" cx="354.33" cy="717.59" r="70.66" fill="url(#bm)" style="--o:0.54;animation-duration:8.68s;animation-delay:-6.33s"/>
<circle class="k" cx="635.9" cy="843.08" r="40.03" fill="url(#bc)" style="--o:0.5;animation-duration:5.77s;animation-delay:-3.29s"/>
<circle class="k" cx="1248.52" cy="545.67" r="51.28" fill="url(#ba)" style="--o:0.44;animation-duration:5.49s;animation-delay:-0.25s"/>
<circle class="k" cx="535.42" cy="845.15" r="71.94" fill="url(#bg)" style="--o:0.45;animation-duration:9.55s;animation-delay:-5.81s"/>
<circle class="k" cx="941.48" cy="765.83" r="66.69" fill="url(#bm)" style="--o:0.48;animation-duration:5.81s;animation-delay:-1.93s"/>
<circle class="k" cx="269.98" cy="528.1" r="60.35" fill="url(#bc)" style="--o:0.57;animation-duration:6.69s;animation-delay:-6.09s"/>
<circle class="k" cx="403.23" cy="665.82" r="73.67" fill="url(#ba)" style="--o:0.65;animation-duration:10.2s;animation-delay:-5.69s"/>
<circle class="k" cx="73.13" cy="660.39" r="74.47" fill="url(#bg)" style="--o:0.53;animation-duration:7.54s;animation-delay:-4.66s"/>
<circle class="k" cx="634.38" cy="387.1" r="55.05" fill="url(#bm)" style="--o:0.53;animation-duration:5.88s;animation-delay:-0.88s"/>
<circle class="k" cx="1473.4" cy="769.65" r="84.87" fill="url(#bc)" style="--o:0.33;animation-duration:5.53s;animation-delay:-4.66s"/>
<g class="d s" style="--dy:137.05px;animation-duration:9.64s;animation-delay:-4.44s"><ellipse cx="738.16" cy="75.97" rx="3.35" ry="4.54" fill="#cfe6ff" fill-opacity="0.07" stroke="#e8f3ff" stroke-opacity="0.28" stroke-width="0.9"/><circle cx="737.16" cy="74.16" r="0.94" fill="#ffffff" fill-opacity="0.55"/></g>
<g class="d"><ellipse cx="1372.2" cy="189.11" rx="5.3" ry="8.45" fill="#cfe6ff" fill-opacity="0.07" stroke="#e8f3ff" stroke-opacity="0.28" stroke-width="0.9"/><circle cx="1370.61" cy="185.73" r="1.48" fill="#ffffff" fill-opacity="0.55"/></g>
<g class="d"><ellipse cx="231.22" cy="141.06" rx="4.77" ry="6.97" fill="#cfe6ff" fill-opacity="0.07" stroke="#e8f3ff" stroke-opacity="0.28" stroke-width="0.9"/><circle cx="229.79" cy="138.27" r="1.34" fill="#ffffff" fill-opacity="0.55"/></g>
<g class="d s" style="--dy:239.09px;animation-duration:13.49s;animation-delay:-11.9s"><ellipse cx="1450.16" cy="295.85" rx="6.01" ry="8.76" fill="#cfe6ff" fill-opacity="0.07" stroke="#e8f3ff" stroke-opacity="0.28" stroke-width="0.9"/><circle cx="1448.36" cy="292.34" r="1.68" fill="#ffffff" fill-opacity="0.55"/></g>
<g class="d"><ellipse cx="1208.7" cy="290.09" rx="4.96" ry="6.93" fill="#cfe6ff" fill-opacity="0.07" stroke="#e8f3ff" stroke-opacity="0.28" stroke-width="0.9"/><circle cx="1207.21" cy="287.32" r="1.39" fill="#ffffff" fill-opacity="0.55"/></g>
<g class="d"><ellipse cx="1128.48" cy="560.13" rx="4.66" ry="6.39" fill="#cfe6ff" fill-opacity="0.07" stroke="#e8f3ff" stroke-opacity="0.28" stroke-width="0.9"/><circle cx="1127.09" cy="557.57" r="1.31" fill="#ffffff" fill-opacity="0.55"/></g>
<g class="d s" style="--dy:124.75px;animation-duration:9.15s;animation-delay:-2s"><ellipse cx="1034.15" cy="157.41" rx="6.54" ry="9.27" fill="#cfe6ff" fill-opacity="0.07" stroke="#e8f3ff" stroke-opacity="0.28" stroke-width="0.9"/><circle cx="1032.19" cy="153.71" r="1.83" fill="#ffffff" fill-opacity="0.55"/></g>
<g class="d"><ellipse cx="1282.71" cy="196.53" rx="5.13" ry="6.92" fill="#cfe6ff" fill-opacity="0.07" stroke="#e8f3ff" stroke-opacity="0.28" stroke-width="0.9"/><circle cx="1281.17" cy="193.76" r="1.44" fill="#ffffff" fill-opacity="0.55"/></g>
<g class="d"><ellipse cx="476.67" cy="402.91" rx="4.79" ry="7.04" fill="#cfe6ff" fill-opacity="0.07" stroke="#e8f3ff" stroke-opacity="0.28" stroke-width="0.9"/><circle cx="475.23" cy="400.09" r="1.34" fill="#ffffff" fill-opacity="0.55"/></g>
<g class="d s" style="--dy:226px;animation-duration:11.66s;animation-delay:-8.34s"><ellipse cx="1119.63" cy="121.36" rx="4.78" ry="8.53" fill="#cfe6ff" fill-opacity="0.07" stroke="#e8f3ff" stroke-opacity="0.28" stroke-width="0.9"/><circle cx="1118.2" cy="117.95" r="1.34" fill="#ffffff" fill-opacity="0.55"/></g>
<g class="d"><ellipse cx="1447.82" cy="219.65" rx="3.53" ry="5.61" fill="#cfe6ff" fill-opacity="0.07" stroke="#e8f3ff" stroke-opacity="0.28" stroke-width="0.9"/><circle cx="1446.76" cy="217.4" r="0.99" fill="#ffffff" fill-opacity="0.55"/></g>
<g class="d"><ellipse cx="462.32" cy="637.46" rx="5.49" ry="7.4" fill="#cfe6ff" fill-opacity="0.07" stroke="#e8f3ff" stroke-opacity="0.28" stroke-width="0.9"/><circle cx="460.67" cy="634.5" r="1.54" fill="#ffffff" fill-opacity="0.55"/></g>
<g class="d s" style="--dy:237.74px;animation-duration:12.51s;animation-delay:-3.08s"><ellipse cx="593.93" cy="659.06" rx="4.82" ry="6.39" fill="#cfe6ff" fill-opacity="0.07" stroke="#e8f3ff" stroke-opacity="0.28" stroke-width="0.9"/><circle cx="592.48" cy="656.51" r="1.35" fill="#ffffff" fill-opacity="0.55"/></g>
<g class="d"><ellipse cx="1403.83" cy="216.28" rx="4.21" ry="6.95" fill="#cfe6ff" fill-opacity="0.07" stroke="#e8f3ff" stroke-opacity="0.28" stroke-width="0.9"/><circle cx="1402.57" cy="213.5" r="1.18" fill="#ffffff" fill-opacity="0.55"/></g>
<g class="d"><ellipse cx="822.42" cy="471.23" rx="6.13" ry="10.51" fill="#cfe6ff" fill-opacity="0.07" stroke="#e8f3ff" stroke-opacity="0.28" stroke-width="0.9"/><circle cx="820.59" cy="467.02" r="1.72" fill="#ffffff" fill-opacity="0.55"/></g>
<g class="d s" style="--dy:215.09px;animation-duration:9.73s;animation-delay:-2.6s"><ellipse cx="447.29" cy="365.12" rx="4.27" ry="7.65" fill="#cfe6ff" fill-opacity="0.07" stroke="#e8f3ff" stroke-opacity="0.28" stroke-width="0.9"/><circle cx="446.01" cy="362.06" r="1.2" fill="#ffffff" fill-opacity="0.55"/></g>
<g class="d"><ellipse cx="1112.38" cy="481.16" rx="6.24" ry="11.04" fill="#cfe6ff" fill-opacity="0.07" stroke="#e8f3ff" stroke-opacity="0.28" stroke-width="0.9"/><circle cx="1110.51" cy="476.75" r="1.75" fill="#ffffff" fill-opacity="0.55"/></g>
<g class="d"><ellipse cx="384" cy="550.01" rx="3.42" ry="5.54" fill="#cfe6ff" fill-opacity="0.07" stroke="#e8f3ff" stroke-opacity="0.28" stroke-width="0.9"/><circle cx="382.98" cy="547.79" r="0.96" fill="#ffffff" fill-opacity="0.55"/></g>
<g class="d s" style="--dy:116.49px;animation-duration:11.46s;animation-delay:-9.56s"><ellipse cx="1167.28" cy="392.67" rx="3.77" ry="5.09" fill="#cfe6ff" fill-opacity="0.07" stroke="#e8f3ff" stroke-opacity="0.28" stroke-width="0.9"/><circle cx="1166.15" cy="390.63" r="1.05" fill="#ffffff" fill-opacity="0.55"/></g>
<g class="d"><ellipse cx="671.56" cy="448.95" rx="6.61" ry="10.11" fill="#cfe6ff" fill-opacity="0.07" stroke="#e8f3ff" stroke-opacity="0.28" stroke-width="0.9"/><circle cx="669.58" cy="444.91" r="1.85" fill="#ffffff" fill-opacity="0.55"/></g>
<g class="d"><ellipse cx="356.8" cy="211.76" rx="5.65" ry="7.76" fill="#cfe6ff" fill-opacity="0.07" stroke="#e8f3ff" stroke-opacity="0.28" stroke-width="0.9"/><circle cx="355.1" cy="208.65" r="1.58" fill="#ffffff" fill-opacity="0.55"/></g>
<g class="d s" style="--dy:227.9px;animation-duration:10.29s;animation-delay:-9.91s"><ellipse cx="1289.36" cy="166.72" rx="3.56" ry="5.33" fill="#cfe6ff" fill-opacity="0.07" stroke="#e8f3ff" stroke-opacity="0.28" stroke-width="0.9"/><circle cx="1288.29" cy="164.58" r="1" fill="#ffffff" fill-opacity="0.55"/></g>
<g class="d"><ellipse cx="1240.13" cy="695.32" rx="3.02" ry="4.08" fill="#cfe6ff" fill-opacity="0.07" stroke="#e8f3ff" stroke-opacity="0.28" stroke-width="0.9"/><circle cx="1239.23" cy="693.69" r="0.85" fill="#ffffff" fill-opacity="0.55"/></g>
<g class="d"><ellipse cx="169.87" cy="734.5" rx="3.95" ry="7.09" fill="#cfe6ff" fill-opacity="0.07" stroke="#e8f3ff" stroke-opacity="0.28" stroke-width="0.9"/><circle cx="168.68" cy="731.66" r="1.11" fill="#ffffff" fill-opacity="0.55"/></g>
<g class="d s" style="--dy:180.05px;animation-duration:11.02s;animation-delay:-3.56s"><ellipse cx="351.82" cy="502.25" rx="6.15" ry="9.8" fill="#cfe6ff" fill-opacity="0.07" stroke="#e8f3ff" stroke-opacity="0.28" stroke-width="0.9"/><circle cx="349.98" cy="498.33" r="1.72" fill="#ffffff" fill-opacity="0.55"/></g>
<g class="d"><ellipse cx="723.23" cy="520.48" rx="5.09" ry="7.74" fill="#cfe6ff" fill-opacity="0.07" stroke="#e8f3ff" stroke-opacity="0.28" stroke-width="0.9"/><circle cx="721.7" cy="517.39" r="1.43" fill="#ffffff" fill-opacity="0.55"/></g>
<g class="d"><ellipse cx="30.34" cy="658.88" rx="3.31" ry="4.84" fill="#cfe6ff" fill-opacity="0.07" stroke="#e8f3ff" stroke-opacity="0.28" stroke-width="0.9"/><circle cx="29.35" cy="656.95" r="0.93" fill="#ffffff" fill-opacity="0.55"/></g>
<g class="d s" style="--dy:248.79px;animation-duration:15.19s;animation-delay:-1.38s"><ellipse cx="1384.54" cy="76.58" rx="3.16" ry="4.77" fill="#cfe6ff" fill-opacity="0.07" stroke="#e8f3ff" stroke-opacity="0.28" stroke-width="0.9"/><circle cx="1383.6" cy="74.67" r="0.88" fill="#ffffff" fill-opacity="0.55"/></g>
<g class="d"><ellipse cx="421.84" cy="229.33" rx="4.91" ry="8.29" fill="#cfe6ff" fill-opacity="0.07" stroke="#e8f3ff" stroke-opacity="0.28" stroke-width="0.9"/><circle cx="420.36" cy="226.01" r="1.38" fill="#ffffff" fill-opacity="0.55"/></g>
<g class="d"><ellipse cx="1056.16" cy="314.05" rx="3.39" ry="4.51" fill="#cfe6ff" fill-opacity="0.07" stroke="#e8f3ff" stroke-opacity="0.28" stroke-width="0.9"/><circle cx="1055.14" cy="312.25" r="0.95" fill="#ffffff" fill-opacity="0.55"/></g>
<g class="d s" style="--dy:200.82px;animation-duration:15.95s;animation-delay:-6.77s"><ellipse cx="363.3" cy="776.08" rx="3.71" ry="5.82" fill="#cfe6ff" fill-opacity="0.07" stroke="#e8f3ff" stroke-opacity="0.28" stroke-width="0.9"/><circle cx="362.18" cy="773.75" r="1.04" fill="#ffffff" fill-opacity="0.55"/></g>
<g class="d"><ellipse cx="1005.78" cy="117.88" rx="6.58" ry="10.18" fill="#cfe6ff" fill-opacity="0.07" stroke="#e8f3ff" stroke-opacity="0.28" stroke-width="0.9"/><circle cx="1003.81" cy="113.81" r="1.84" fill="#ffffff" fill-opacity="0.55"/></g>
<g class="d"><ellipse cx="1126.95" cy="448.01" rx="6.5" ry="9.84" fill="#cfe6ff" fill-opacity="0.07" stroke="#e8f3ff" stroke-opacity="0.28" stroke-width="0.9"/><circle cx="1125" cy="444.07" r="1.82" fill="#ffffff" fill-opacity="0.55"/></g>
<g class="d s" style="--dy:110.26px;animation-duration:9.42s;animation-delay:-0.48s"><ellipse cx="277.5" cy="172.24" rx="5.83" ry="9.09" fill="#cfe6ff" fill-opacity="0.07" stroke="#e8f3ff" stroke-opacity="0.28" stroke-width="0.9"/><circle cx="275.75" cy="168.61" r="1.63" fill="#ffffff" fill-opacity="0.55"/></g>
<line class="r" x1="188.83" y1="-100" x2="182.13" y2="-58.18" stroke="#cfe3ff" stroke-width="0.9" stroke-linecap="round" opacity="0.18" style="animation-duration:2.29s;animation-delay:-1.97s"/>
<line class="r" x1="742.9" y1="-100" x2="736.4" y2="-59.36" stroke="#cfe3ff" stroke-width="0.9" stroke-linecap="round" opacity="0.18" style="animation-duration:1.55s;animation-delay:-0.03s"/>
<line class="r" x1="89.08" y1="-100" x2="83.75" y2="-66.69" stroke="#cfe3ff" stroke-width="0.9" stroke-linecap="round" opacity="0.18" style="animation-duration:1.65s;animation-delay:-0.84s"/>
<line class="r" x1="555.3" y1="-100" x2="550.36" y2="-69.14" stroke="#cfe3ff" stroke-width="0.9" stroke-linecap="round" opacity="0.18" style="animation-duration:1.56s;animation-delay:-0.24s"/>
<line class="r" x1="713.61" y1="-100" x2="709.14" y2="-72.06" stroke="#cfe3ff" stroke-width="0.9" stroke-linecap="round" opacity="0.18" style="animation-duration:2.36s;animation-delay:-2.2s"/>
<line class="r" x1="627.67" y1="-100" x2="623.81" y2="-75.89" stroke="#cfe3ff" stroke-width="0.9" stroke-linecap="round" opacity="0.18" style="animation-duration:1.61s;animation-delay:-0.19s"/>
<line class="r" x1="1613.4" y1="-100" x2="1607.94" y2="-65.86" stroke="#cfe3ff" stroke-width="0.9" stroke-linecap="round" opacity="0.18" style="animation-duration:1.65s;animation-delay:-0.61s"/>
<line class="r" x1="1513.84" y1="-100" x2="1508.39" y2="-65.95" stroke="#cfe3ff" stroke-width="0.9" stroke-linecap="round" opacity="0.18" style="animation-duration:2.49s;animation-delay:-0.43s"/>
<line class="r" x1="870.56" y1="-100" x2="863.86" y2="-58.12" stroke="#cfe3ff" stroke-width="0.9" stroke-linecap="round" opacity="0.18" style="animation-duration:2.39s;animation-delay:-2.33s"/>
<line class="r" x1="1377.92" y1="-100" x2="1373.49" y2="-72.31" stroke="#cfe3ff" stroke-width="0.9" stroke-linecap="round" opacity="0.18" style="animation-duration:1.65s;animation-delay:-1.51s"/>
<line class="r" x1="1091.62" y1="-100" x2="1086.49" y2="-67.91" stroke="#cfe3ff" stroke-width="0.9" stroke-linecap="round" opacity="0.18" style="animation-duration:2.07s;animation-delay:-1.93s"/>
<line class="r" x1="1562.14" y1="-100" x2="1555.33" y2="-57.48" stroke="#cfe3ff" stroke-width="0.9" stroke-linecap="round" opacity="0.18" style="animation-duration:1.85s;animation-delay:-1.49s"/>
<line class="r" x1="154.58" y1="-100" x2="148.27" y2="-60.61" stroke="#cfe3ff" stroke-width="0.9" stroke-linecap="round" opacity="0.18" style="animation-duration:1.88s;animation-delay:-1.36s"/>
<line class="r" x1="395.73" y1="-100" x2="391.4" y2="-72.89" stroke="#cfe3ff" stroke-width="0.9" stroke-linecap="round" opacity="0.18" style="animation-duration:1.99s;animation-delay:-0.2s"/>
<line class="r" x1="1405.85" y1="-100" x2="1399.86" y2="-62.56" stroke="#cfe3ff" stroke-width="0.9" stroke-linecap="round" opacity="0.18" style="animation-duration:2.46s;animation-delay:-2.23s"/>
<line class="r" x1="1229.03" y1="-100" x2="1223.03" y2="-62.46" stroke="#cfe3ff" stroke-width="0.9" stroke-linecap="round" opacity="0.18" style="animation-duration:1.68s;animation-delay:-0.92s"/>
<line class="r" x1="851.23" y1="-100" x2="844.27" y2="-56.53" stroke="#cfe3ff" stroke-width="0.9" stroke-linecap="round" opacity="0.18" style="animation-duration:1.53s;animation-delay:-0.63s"/>
<line class="r" x1="821.52" y1="-100" x2="817.4" y2="-74.25" stroke="#cfe3ff" stroke-width="0.9" stroke-linecap="round" opacity="0.18" style="animation-duration:1.89s;animation-delay:-0.4s"/>
<line class="r" x1="88.26" y1="-100" x2="81.41" y2="-57.17" stroke="#cfe3ff" stroke-width="0.9" stroke-linecap="round" opacity="0.18" style="animation-duration:1.83s;animation-delay:-1.72s"/>
<line class="r" x1="786" y1="-100" x2="781.59" y2="-72.42" stroke="#cfe3ff" stroke-width="0.9" stroke-linecap="round" opacity="0.18" style="animation-duration:1.75s;animation-delay:-1.7s"/>
<line class="r" x1="277.43" y1="-100" x2="272.49" y2="-69.1" stroke="#cfe3ff" stroke-width="0.9" stroke-linecap="round" opacity="0.18" style="animation-duration:1.79s;animation-delay:-0.13s"/>
<line class="r" x1="215.48" y1="-100" x2="210.77" y2="-70.55" stroke="#cfe3ff" stroke-width="0.9" stroke-linecap="round" opacity="0.18" style="animation-duration:2.45s;animation-delay:-0.81s"/>
<line class="r" x1="720.63" y1="-100" x2="714.27" y2="-60.25" stroke="#cfe3ff" stroke-width="0.9" stroke-linecap="round" opacity="0.18" style="animation-duration:1.69s;animation-delay:-0.16s"/>
<line class="r" x1="395.1" y1="-100" x2="390.48" y2="-71.15" stroke="#cfe3ff" stroke-width="0.9" stroke-linecap="round" opacity="0.18" style="animation-duration:1.73s;animation-delay:-1.61s"/>
<line class="r" x1="408.83" y1="-100" x2="404.92" y2="-75.56" stroke="#cfe3ff" stroke-width="0.9" stroke-linecap="round" opacity="0.18" style="animation-duration:1.96s;animation-delay:-1.75s"/>
<line class="r" x1="1619.16" y1="-100" x2="1612.32" y2="-57.23" stroke="#cfe3ff" stroke-width="0.9" stroke-linecap="round" opacity="0.18" style="animation-duration:1.85s;animation-delay:-1.84s"/>
<line class="r" x1="691.32" y1="-100" x2="686.93" y2="-72.58" stroke="#cfe3ff" stroke-width="0.9" stroke-linecap="round" opacity="0.18" style="animation-duration:2.17s;animation-delay:-0.6s"/>
<line class="r" x1="1492.7" y1="-100" x2="1487.1" y2="-65.01" stroke="#cfe3ff" stroke-width="0.9" stroke-linecap="round" opacity="0.18" style="animation-duration:2.16s;animation-delay:-1.3s"/>
<line class="r" x1="755.78" y1="-100" x2="748.75" y2="-56.11" stroke="#cfe3ff" stroke-width="0.9" stroke-linecap="round" opacity="0.18" style="animation-duration:2.25s;animation-delay:-0.76s"/>
<line class="r" x1="702.79" y1="-100" x2="698.61" y2="-73.88" stroke="#cfe3ff" stroke-width="0.9" stroke-linecap="round" opacity="0.18" style="animation-duration:1.93s;animation-delay:-0.39s"/>
<line class="r" x1="37.08" y1="-100" x2="31" y2="-62.03" stroke="#cfe3ff" stroke-width="0.9" stroke-linecap="round" opacity="0.18" style="animation-duration:1.51s;animation-delay:-1.01s"/>
<line class="r" x1="1606.8" y1="-100" x2="1602.03" y2="-70.16" stroke="#cfe3ff" stroke-width="0.9" stroke-linecap="round" opacity="0.18" style="animation-duration:2.49s;animation-delay:-2.01s"/>
<line class="r" x1="1272.41" y1="-100" x2="1267.3" y2="-68.07" stroke="#cfe3ff" stroke-width="0.9" stroke-linecap="round" opacity="0.18" style="animation-duration:2.22s;animation-delay:-0.92s"/>
<line class="r" x1="1297.85" y1="-100" x2="1292.86" y2="-68.84" stroke="#cfe3ff" stroke-width="0.9" stroke-linecap="round" opacity="0.18" style="animation-duration:1.57s;animation-delay:-0.34s"/>
<line class="r" x1="1795.02" y1="-100" x2="1790.25" y2="-70.24" stroke="#cfe3ff" stroke-width="0.9" stroke-linecap="round" opacity="0.18" style="animation-duration:2.19s;animation-delay:-2.08s"/>
<line class="r" x1="1082.21" y1="-100" x2="1076.21" y2="-62.5" stroke="#cfe3ff" stroke-width="0.9" stroke-linecap="round" opacity="0.18" style="animation-duration:2s;animation-delay:-1.7s"/>
<line class="r" x1="224.58" y1="-100" x2="218.85" y2="-64.14" stroke="#cfe3ff" stroke-width="0.9" stroke-linecap="round" opacity="0.18" style="animation-duration:2.17s;animation-delay:-0.49s"/>
<line class="r" x1="883.97" y1="-100" x2="877.26" y2="-58.06" stroke="#cfe3ff" stroke-width="0.9" stroke-linecap="round" opacity="0.18" style="animation-duration:2.04s;animation-delay:-0.25s"/>
<line class="r" x1="1070.63" y1="-100" x2="1065.96" y2="-70.85" stroke="#cfe3ff" stroke-width="0.9" stroke-linecap="round" opacity="0.18" style="animation-duration:2.37s;animation-delay:-0.48s"/>
<line class="r" x1="1664.44" y1="-100" x2="1658.42" y2="-62.43" stroke="#cfe3ff" stroke-width="0.9" stroke-linecap="round" opacity="0.18" style="animation-duration:1.61s;animation-delay:-0.15s"/>
<line class="r" x1="320.97" y1="-100" x2="314.37" y2="-58.71" stroke="#cfe3ff" stroke-width="0.9" stroke-linecap="round" opacity="0.18" style="animation-duration:2.07s;animation-delay:-0.9s"/>
<line class="r" x1="1498.64" y1="-100" x2="1494.01" y2="-71.04" stroke="#cfe3ff" stroke-width="0.9" stroke-linecap="round" opacity="0.18" style="animation-duration:2.38s;animation-delay:-0.15s"/>
<line class="r" x1="1663.32" y1="-100" x2="1657.76" y2="-65.28" stroke="#cfe3ff" stroke-width="0.9" stroke-linecap="round" opacity="0.18" style="animation-duration:1.84s;animation-delay:-0.19s"/>
<line class="r" x1="753.94" y1="-100" x2="748.57" y2="-66.43" stroke="#cfe3ff" stroke-width="0.9" stroke-linecap="round" opacity="0.18" style="animation-duration:2.1s;animation-delay:-0.73s"/>
<line class="r" x1="358.94" y1="-100" x2="354.58" y2="-72.73" stroke="#cfe3ff" stroke-width="0.9" stroke-linecap="round" opacity="0.18" style="animation-duration:2.04s;animation-delay:-0.61s"/>
<line class="r" x1="1113.3" y1="-100" x2="1107" y2="-60.65" stroke="#cfe3ff" stroke-width="0.9" stroke-linecap="round" opacity="0.18" style="animation-duration:1.82s;animation-delay:-1.47s"/>
<line class="r" x1="1543.68" y1="-100" x2="1537.93" y2="-64.08" stroke="#cfe3ff" stroke-width="0.9" stroke-linecap="round" opacity="0.18" style="animation-duration:2.32s;animation-delay:-1.08s"/>
<line class="r" x1="871.4" y1="-100" x2="864.78" y2="-58.61" stroke="#cfe3ff" stroke-width="0.9" stroke-linecap="round" opacity="0.18" style="animation-duration:1.79s;animation-delay:-0.57s"/>
<line class="r" x1="328.51" y1="-100" x2="322.76" y2="-64.09" stroke="#cfe3ff" stroke-width="0.9" stroke-linecap="round" opacity="0.18" style="animation-duration:2.27s;animation-delay:-1.67s"/>
<line class="r" x1="186.48" y1="-100" x2="182.43" y2="-74.67" stroke="#cfe3ff" stroke-width="0.9" stroke-linecap="round" opacity="0.18" style="animation-duration:1.52s;animation-delay:-1.33s"/>
<line class="r" x1="1281.45" y1="-100" x2="1275.66" y2="-63.77" stroke="#cfe3ff" stroke-width="0.9" stroke-linecap="round" opacity="0.18" style="animation-duration:1.8s;animation-delay:-1.72s"/>
<line class="r" x1="1001.42" y1="-100" x2="996.18" y2="-67.26" stroke="#cfe3ff" stroke-width="0.9" stroke-linecap="round" opacity="0.18" style="animation-duration:2.2s;animation-delay:-0.26s"/>
<line class="r" x1="1184.93" y1="-100" x2="1179.4" y2="-65.44" stroke="#cfe3ff" stroke-width="0.9" stroke-linecap="round" opacity="0.18" style="animation-duration:1.5s;animation-delay:-1.14s"/>
<line class="r" x1="241.99" y1="-100" x2="235.58" y2="-59.88" stroke="#cfe3ff" stroke-width="0.9" stroke-linecap="round" opacity="0.18" style="animation-duration:1.97s;animation-delay:-0.81s"/>
<line class="r" x1="988.65" y1="-100" x2="982.37" y2="-60.77" stroke="#cfe3ff" stroke-width="0.9" stroke-linecap="round" opacity="0.18" style="animation-duration:2.08s;animation-delay:-0.49s"/>
<line class="r" x1="770.59" y1="-100" x2="760.96" y2="-39.81" stroke="#cfe3ff" stroke-width="1.4" stroke-linecap="round" opacity="0.32" style="animation-duration:1.25s;animation-delay:-0.07s"/>
<line class="r" x1="441.42" y1="-100" x2="433.94" y2="-53.25" stroke="#cfe3ff" stroke-width="1.4" stroke-linecap="round" opacity="0.32" style="animation-duration:1.45s;animation-delay:-1.2s"/>
<line class="r" x1="1274.01" y1="-100" x2="1261.95" y2="-24.67" stroke="#cfe3ff" stroke-width="1.4" stroke-linecap="round" opacity="0.32" style="animation-duration:1.05s;animation-delay:-0.14s"/>
<line class="r" x1="261.23" y1="-100" x2="250.24" y2="-31.31" stroke="#cfe3ff" stroke-width="1.4" stroke-linecap="round" opacity="0.32" style="animation-duration:1.25s;animation-delay:-0.01s"/>
<line class="r" x1="840.69" y1="-100" x2="831.37" y2="-41.75" stroke="#cfe3ff" stroke-width="1.4" stroke-linecap="round" opacity="0.32" style="animation-duration:1.05s;animation-delay:-0.44s"/>
<line class="r" x1="1608.89" y1="-100" x2="1597.7" y2="-30.08" stroke="#cfe3ff" stroke-width="1.4" stroke-linecap="round" opacity="0.32" style="animation-duration:1.38s;animation-delay:-1.32s"/>
<line class="r" x1="1561.94" y1="-100" x2="1551.7" y2="-36" stroke="#cfe3ff" stroke-width="1.4" stroke-linecap="round" opacity="0.32" style="animation-duration:1.01s;animation-delay:-0.38s"/>
<line class="r" x1="219.38" y1="-100" x2="210.06" y2="-41.76" stroke="#cfe3ff" stroke-width="1.4" stroke-linecap="round" opacity="0.32" style="animation-duration:1.01s;animation-delay:-0.35s"/>
<line class="r" x1="884.34" y1="-100" x2="872.73" y2="-27.43" stroke="#cfe3ff" stroke-width="1.4" stroke-linecap="round" opacity="0.32" style="animation-duration:1.17s;animation-delay:-0.34s"/>
<line class="r" x1="60.54" y1="-100" x2="51.84" y2="-45.63" stroke="#cfe3ff" stroke-width="1.4" stroke-linecap="round" opacity="0.32" style="animation-duration:1.33s;animation-delay:-0.71s"/>
<line class="r" x1="930.69" y1="-100" x2="918.55" y2="-24.13" stroke="#cfe3ff" stroke-width="1.4" stroke-linecap="round" opacity="0.32" style="animation-duration:1.15s;animation-delay:-0.91s"/>
<line class="r" x1="514.38" y1="-100" x2="502.29" y2="-24.47" stroke="#cfe3ff" stroke-width="1.4" stroke-linecap="round" opacity="0.32" style="animation-duration:1.27s;animation-delay:-0.59s"/>
<line class="r" x1="392.43" y1="-100" x2="382.53" y2="-38.14" stroke="#cfe3ff" stroke-width="1.4" stroke-linecap="round" opacity="0.32" style="animation-duration:1.47s;animation-delay:-0.28s"/>
<line class="r" x1="913.93" y1="-100" x2="905.74" y2="-48.76" stroke="#cfe3ff" stroke-width="1.4" stroke-linecap="round" opacity="0.32" style="animation-duration:1.11s;animation-delay:-0.8s"/>
<line class="r" x1="1102.1" y1="-100" x2="1091.36" y2="-32.86" stroke="#cfe3ff" stroke-width="1.4" stroke-linecap="round" opacity="0.32" style="animation-duration:1.01s;animation-delay:-0.72s"/>
<line class="r" x1="1508.37" y1="-100" x2="1498.06" y2="-35.53" stroke="#cfe3ff" stroke-width="1.4" stroke-linecap="round" opacity="0.32" style="animation-duration:1.32s;animation-delay:-0.46s"/>
<line class="r" x1="1215.7" y1="-100" x2="1203.45" y2="-23.4" stroke="#cfe3ff" stroke-width="1.4" stroke-linecap="round" opacity="0.32" style="animation-duration:1.29s;animation-delay:-0.47s"/>
<line class="r" x1="393.73" y1="-100" x2="384.77" y2="-44.02" stroke="#cfe3ff" stroke-width="1.4" stroke-linecap="round" opacity="0.32" style="animation-duration:1.48s;animation-delay:-0.33s"/>
<line class="r" x1="1170.76" y1="-100" x2="1159.49" y2="-29.54" stroke="#cfe3ff" stroke-width="1.4" stroke-linecap="round" opacity="0.32" style="animation-duration:1.44s;animation-delay:-0.02s"/>
<line class="r" x1="530.54" y1="-100" x2="523.12" y2="-53.67" stroke="#cfe3ff" stroke-width="1.4" stroke-linecap="round" opacity="0.32" style="animation-duration:1.3s;animation-delay:-1.3s"/>
<line class="r" x1="1643.51" y1="-100" x2="1632.25" y2="-29.62" stroke="#cfe3ff" stroke-width="1.4" stroke-linecap="round" opacity="0.32" style="animation-duration:1s;animation-delay:-0.65s"/>
<line class="r" x1="749.65" y1="-100" x2="736.85" y2="-20.06" stroke="#cfe3ff" stroke-width="1.4" stroke-linecap="round" opacity="0.32" style="animation-duration:1.4s;animation-delay:-0.47s"/>
<line class="r" x1="789.9" y1="-100" x2="778.6" y2="-29.38" stroke="#cfe3ff" stroke-width="1.4" stroke-linecap="round" opacity="0.32" style="animation-duration:1.31s;animation-delay:-0.54s"/>
<line class="r" x1="106.76" y1="-100" x2="94" y2="-20.2" stroke="#cfe3ff" stroke-width="1.4" stroke-linecap="round" opacity="0.32" style="animation-duration:1.32s;animation-delay:-1.28s"/>
<line class="r" x1="318.55" y1="-100" x2="310.86" y2="-51.93" stroke="#cfe3ff" stroke-width="1.4" stroke-linecap="round" opacity="0.32" style="animation-duration:0.97s;animation-delay:-0.38s"/>
<line class="r" x1="408.41" y1="-100" x2="399.67" y2="-45.41" stroke="#cfe3ff" stroke-width="1.4" stroke-linecap="round" opacity="0.32" style="animation-duration:1.05s;animation-delay:-0.97s"/>
<line class="r" x1="887.82" y1="-100" x2="876.53" y2="-29.43" stroke="#cfe3ff" stroke-width="1.4" stroke-linecap="round" opacity="0.32" style="animation-duration:1.22s;animation-delay:-0.96s"/>
<line class="r" x1="450.85" y1="-100" x2="441.71" y2="-42.86" stroke="#cfe3ff" stroke-width="1.4" stroke-linecap="round" opacity="0.32" style="animation-duration:1.16s;animation-delay:-0.7s"/>
<line class="r" x1="1712.45" y1="-100" x2="1704.07" y2="-47.62" stroke="#cfe3ff" stroke-width="1.4" stroke-linecap="round" opacity="0.32" style="animation-duration:1.38s;animation-delay:-0.17s"/>
<line class="r" x1="692.16" y1="-100" x2="684.55" y2="-52.43" stroke="#cfe3ff" stroke-width="1.4" stroke-linecap="round" opacity="0.32" style="animation-duration:1.46s;animation-delay:-0.99s"/>
<line class="r" x1="117.61" y1="-100" x2="108.59" y2="-43.64" stroke="#cfe3ff" stroke-width="1.4" stroke-linecap="round" opacity="0.32" style="animation-duration:1.45s;animation-delay:-0.72s"/>
<line class="r" x1="1100.25" y1="-100" x2="1089.84" y2="-34.91" stroke="#cfe3ff" stroke-width="1.4" stroke-linecap="round" opacity="0.32" style="animation-duration:1s;animation-delay:-0.65s"/>
<line class="r" x1="41.47" y1="-100" x2="29.05" y2="-22.39" stroke="#cfe3ff" stroke-width="1.4" stroke-linecap="round" opacity="0.32" style="animation-duration:1.4s;animation-delay:-0.33s"/>
<line class="r" x1="1600.89" y1="-100" x2="1591.98" y2="-44.33" stroke="#cfe3ff" stroke-width="1.4" stroke-linecap="round" opacity="0.32" style="animation-duration:1.36s;animation-delay:-0.9s"/>
<line class="r" x1="843.91" y1="-100" x2="835.28" y2="-46.04" stroke="#cfe3ff" stroke-width="1.4" stroke-linecap="round" opacity="0.32" style="animation-duration:1s;animation-delay:-0.69s"/>
</svg>`,
}
