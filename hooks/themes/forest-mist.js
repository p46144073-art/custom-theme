import { makeColors } from '../make-colors.js'

const { theme, problems } = makeColors({ label: 'forest-mist', only: 'light', roles: { accent: '#2b7a78', danger: '#b3392f', success: '#3f7d4c', warning: '#a86f14', pro: '#6d4f94' }, light: { gray: { anchors: { 'surface-0': '#dfe8df', 'surface-1': '#e8f0e8', 'surface-2': '#f1f6f0', 'surface-3': '#f1f6f0', 'text-primary': '#1f2b22', 'text-secondary': '#3d4d41', 'text-muted': '#556559' } } } })

export default {
  id: 'forest-mist',
  name: '森林晨霧',
  description: '淡綠淺色配色、松林、飄移的霧和光束',
  mode: 'light',
  colors: theme,
  problems,
  glass: { blur: 4, tint: '#f1f6f0', opacity: 0.4 },
  scene: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1600 900" preserveAspectRatio="xMidYMid slice">
<style>
  .ray { animation-name: shine; animation-timing-function: ease-in-out; animation-iteration-count: infinite; animation-direction: alternate; }
  @keyframes shine { from { opacity: 0.25 } to { opacity: 0.85 } }
  .fog1 { animation: drift1 38s ease-in-out infinite alternate; }
  .fog2 { animation: drift2 52s ease-in-out infinite alternate; }
  @keyframes drift1 { from { transform: translateX(-160px) } to { transform: translateX(160px) } }
  @keyframes drift2 { from { transform: translateX(140px) } to { transform: translateX(-140px) } }
  .m { opacity: 0; animation-name: float; animation-timing-function: ease-in-out; animation-iteration-count: infinite; }
  @keyframes float { 0% { transform: translate(0, 0); opacity: 0 } 20% { opacity: 0.8 } 80% { opacity: 0.6 } 100% { transform: translate(var(--dx), -320px); opacity: 0 } }
</style>
<defs>
  <linearGradient id="sky" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0" stop-color="#f6f1d6"/>
    <stop offset="0.5" stop-color="#e3eedb"/>
    <stop offset="1" stop-color="#c9dccb"/>
  </linearGradient>
  <radialGradient id="sun" cx="0.5" cy="0.5" r="0.5">
    <stop offset="0" stop-color="#fff6c8" stop-opacity="0.9"/>
    <stop offset="1" stop-color="#fff6c8" stop-opacity="0"/>
  </radialGradient>
  <linearGradient id="ray" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0" stop-color="#fffbe0" stop-opacity="0.55"/>
    <stop offset="1" stop-color="#fffbe0" stop-opacity="0"/>
  </linearGradient>
  <linearGradient id="fog" x1="0" y1="0" x2="1" y2="0">
    <stop offset="0" stop-color="#f4f8f2" stop-opacity="0"/>
    <stop offset="0.5" stop-color="#f4f8f2" stop-opacity="0.7"/>
    <stop offset="1" stop-color="#f4f8f2" stop-opacity="0"/>
  </linearGradient>
  <linearGradient id="floor" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0" stop-color="#eef4ec" stop-opacity="0"/>
    <stop offset="1" stop-color="#eef4ec" stop-opacity="0.7"/>
  </linearGradient>
</defs>
<rect width="1600" height="900" fill="url(#sky)"/>
<circle cx="1250" cy="40" r="420" fill="url(#sun)"/>
<polygon class="ray" points="1180,-60 1300,-60 180,900 50,900" fill="url(#ray)" style="animation-duration:7s;animation-delay:0s"/>
<polygon class="ray" points="1205,-60 1340,-60 420,900 270,900" fill="url(#ray)" style="animation-duration:8.7s;animation-delay:-2s"/>
<polygon class="ray" points="1230,-60 1380,-60 640,900 470,900" fill="url(#ray)" style="animation-duration:10.4s;animation-delay:-4s"/>
<polygon class="ray" points="1255,-60 1420,-60 860,900 670,900" fill="url(#ray)" style="animation-duration:12.1s;animation-delay:-6s"/>
<path d="M1187.2 352.1L1168.7 465.3L1205.8 465.3ZM1187.2 417.6L1156.3 530.8L1218.2 530.8ZM1187.2 483.2L1143.9 596.4L1230.6 596.4ZM1187.2 548.7L1131.5 661.9L1242.9 661.9ZM1183.5 626.2h7.4v29.8h-7.4Z" fill="#b4cbb8" opacity="0.75"/>
<path d="M747.8 349.2L730.3 463.5L765.2 463.5ZM747.8 415.4L718.7 529.7L776.8 529.7ZM747.8 481.5L707 595.9L788.5 595.9ZM747.8 547.7L695.4 662L800.1 662ZM744.3 625.9h7v30.1h-7Z" fill="#b4cbb8" opacity="0.75"/>
<path d="M338.1 302.3L319.7 434.4L356.6 434.4ZM338.1 378.8L307.4 510.9L368.9 510.9ZM338.1 455.3L295.1 587.4L381.2 587.4ZM338.1 531.8L282.8 663.9L393.4 663.9ZM334.4 622.2h7.4v34.8h-7.4Z" fill="#b4cbb8" opacity="0.75"/>
<path d="M1208 391.6L1191.9 489.8L1224 489.8ZM1208 448.4L1181.2 546.6L1234.7 546.6ZM1208 505.3L1170.5 603.5L1245.4 603.5ZM1208 562.1L1159.8 660.3L1256.1 660.3ZM1204.8 629.3h6.4v25.8h-6.4Z" fill="#b4cbb8" opacity="0.75"/>
<path d="M710.5 367.8L696.5 475L724.4 475ZM710.5 429.8L687.1 537.1L733.8 537.1ZM710.5 491.9L677.8 599.2L743.1 599.2ZM710.5 554L668.5 661.3L752.4 661.3ZM707.7 627.4h5.6v28.2h-5.6Z" fill="#b4cbb8" opacity="0.75"/>
<path d="M631 356.3L615.9 467.9L646 467.9ZM631 420.9L605.9 532.5L656 532.5ZM631 485.5L595.9 597.1L666 597.1ZM631 550.2L585.9 661.7L676.1 661.7ZM627.9 626.5h6v29.4h-6Z" fill="#b4cbb8" opacity="0.75"/>
<path d="M479.7 393.6L460.9 491L498.4 491ZM479.7 450L448.5 547.4L510.9 547.4ZM479.7 506.4L436 603.8L523.4 603.8ZM479.7 562.8L423.5 660.3L535.9 660.3ZM475.9 629.5h7.5v25.6h-7.5Z" fill="#b4cbb8" opacity="0.75"/>
<path d="M785.3 314.5L771.4 442L799.2 442ZM785.3 388.3L762.1 515.8L808.4 515.8ZM785.3 462.1L752.8 589.6L817.7 589.6ZM785.3 535.9L743.6 663.4L827 663.4ZM782.5 623.2h5.6v33.5h-5.6Z" fill="#b4cbb8" opacity="0.75"/>
<path d="M1526.5 381.7L1508.8 483.6L1544.3 483.6ZM1526.5 440.7L1496.9 542.7L1556.1 542.7ZM1526.5 499.7L1485.1 601.7L1567.9 601.7ZM1526.5 558.8L1473.3 660.7L1579.8 660.7ZM1523 628.5h7.1v26.8h-7.1Z" fill="#b4cbb8" opacity="0.75"/>
<path d="M1501.8 312L1484.6 440.5L1518.9 440.5ZM1501.8 386.4L1473.2 514.8L1530.3 514.8ZM1501.8 460.7L1461.8 589.2L1541.7 589.2ZM1501.8 535.1L1450.4 663.5L1553.1 663.5ZM1498.3 623h6.9v33.8h-6.9Z" fill="#b4cbb8" opacity="0.75"/>
<path d="M1085.1 358.6L1068.4 469.3L1101.9 469.3ZM1085.1 422.7L1057.2 533.4L1113.1 533.4ZM1085.1 486.8L1046 597.5L1124.3 597.5ZM1085.1 550.9L1034.8 661.7L1135.5 661.7ZM1081.8 626.7h6.7v29.1h-6.7Z" fill="#b4cbb8" opacity="0.75"/>
<path d="M904.3 339.1L886.2 457.3L922.3 457.3ZM904.3 407.5L874.2 525.7L934.4 525.7ZM904.3 475.9L862.1 594L946.4 594ZM904.3 544.3L850.1 662.4L958.4 662.4ZM900.7 625.1h7.2v31.1h-7.2Z" fill="#b4cbb8" opacity="0.75"/>
<path d="M131.9 413.3L116.7 503.3L147.1 503.3ZM131.9 465.4L106.6 555.3L157.2 555.3ZM131.9 517.5L96.4 607.4L167.3 607.4ZM131.9 569.5L86.3 659.5L177.5 659.5ZM128.8 631.1h6.1v23.7h-6.1Z" fill="#b4cbb8" opacity="0.75"/>
<path d="M27.1 400.5L12.9 495.3L41.2 495.3ZM27.1 455.4L3.5 550.2L50.6 550.2ZM27.1 510.3L-5.9 605.1L60.1 605.1ZM27.1 565.2L-15.3 660L69.5 660ZM24.3 630h5.7v24.9h-5.7Z" fill="#b4cbb8" opacity="0.75"/>
<path d="M445.3 314.9L431.6 442.2L459 442.2ZM445.3 388.6L422.5 515.9L468.2 515.9ZM445.3 462.3L413.4 589.7L477.3 589.7ZM445.3 536.1L404.2 663.4L486.4 663.4ZM442.6 623.2h5.5v33.5h-5.5Z" fill="#b4cbb8" opacity="0.75"/>
<path d="M79.2 400.5L60.8 495.3L97.6 495.3ZM79.2 455.4L48.5 550.2L109.8 550.2ZM79.2 510.3L36.2 605.1L122.1 605.1ZM79.2 565.2L24 660L134.4 660ZM75.5 630h7.4v24.9h-7.4Z" fill="#b4cbb8" opacity="0.75"/>
<path d="M630 388.7L616.1 488L644 488ZM630 446.2L606.7 545.5L653.4 545.5ZM630 503.6L597.4 603L662.7 603ZM630 561.1L588.1 660.5L672 660.5ZM627.2 629.1h5.6v26.1h-5.6Z" fill="#b4cbb8" opacity="0.75"/>
<path d="M135.7 379.8L121.2 482.5L150.3 482.5ZM135.7 439.2L111.5 541.9L160 541.9ZM135.7 498.7L101.8 601.4L169.7 601.4ZM135.7 558.1L92.1 660.8L179.4 660.8ZM132.8 628.4h5.8v27h-5.8Z" fill="#b4cbb8" opacity="0.75"/>
<path d="M1280.3 389.9L1262.7 488.7L1297.9 488.7ZM1280.3 447.1L1250.9 545.9L1309.7 545.9ZM1280.3 504.3L1239.2 603.2L1321.4 603.2ZM1280.3 561.5L1227.4 660.4L1333.2 660.4ZM1276.8 629.2h7v26h-7Z" fill="#b4cbb8" opacity="0.75"/>
<path d="M1243.5 358.4L1228.3 469.2L1258.6 469.2ZM1243.5 422.6L1218.3 533.4L1268.7 533.4ZM1243.5 486.7L1208.2 597.5L1278.8 597.5ZM1243.5 550.9L1198.1 661.7L1288.8 661.7ZM1240.4 626.7h6v29.2h-6Z" fill="#b4cbb8" opacity="0.75"/>
<path d="M1519.9 387.3L1505.9 487.1L1533.9 487.1ZM1519.9 445.1L1496.6 544.9L1543.2 544.9ZM1519.9 502.9L1487.2 602.7L1552.5 602.7ZM1519.9 560.7L1477.9 660.5L1561.8 660.5ZM1517.1 629h5.6v26.3h-5.6Z" fill="#b4cbb8" opacity="0.75"/>
<path d="M349.8 410.8L332 501.7L367.7 501.7ZM349.8 463.4L320.1 554.3L379.6 554.3ZM349.8 516L308.2 606.9L391.5 606.9ZM349.8 568.7L296.3 659.6L403.4 659.6ZM346.3 630.9h7.1v23.9h-7.1Z" fill="#b4cbb8" opacity="0.75"/>
<path d="M1404.4 314.5L1386.3 442L1422.4 442ZM1404.4 388.3L1374.2 515.8L1434.5 515.8ZM1404.4 462.1L1362.2 589.6L1446.5 589.6ZM1404.4 535.9L1350.1 663.4L1458.6 663.4ZM1400.7 623.2h7.2v33.5h-7.2Z" fill="#b4cbb8" opacity="0.75"/>
<path d="M514.8 382.6L498.5 484.2L531.2 484.2ZM514.8 441.4L487.6 543L542.1 543ZM514.8 500.2L476.7 601.9L553 601.9ZM514.8 559.1L465.8 660.7L563.9 660.7ZM511.6 628.6h6.5v26.7h-6.5Z" fill="#b4cbb8" opacity="0.75"/>
<path d="M1557.4 386.1L1543.6 486.4L1571.3 486.4ZM1557.4 444.1L1534.4 544.4L1580.5 544.4ZM1557.4 502.2L1525.1 602.5L1589.7 602.5ZM1557.4 560.3L1515.9 660.6L1599 660.6ZM1554.7 628.9h5.5v26.4h-5.5Z" fill="#b4cbb8" opacity="0.75"/>
<path d="M1227.2 394.5L1213.7 491.6L1240.7 491.6ZM1227.2 450.7L1204.7 547.8L1249.7 547.8ZM1227.2 506.9L1195.7 604L1258.8 604ZM1227.2 563.1L1186.7 660.2L1267.8 660.2ZM1224.5 629.6h5.4v25.5h-5.4Z" fill="#b4cbb8" opacity="0.75"/>
<path d="M54.5 311.4L40 440.1L68.9 440.1ZM54.5 385.9L30.4 514.6L78.6 514.6ZM54.5 460.4L20.8 589.1L88.2 589.1ZM54.5 534.9L11.2 663.5L97.8 663.5ZM51.6 622.9h5.8v33.9h-5.8Z" fill="#b4cbb8" opacity="0.75"/>
<path d="M1425.7 354.6L1408.4 466.9L1443.1 466.9ZM1425.7 419.6L1396.9 531.8L1454.6 531.8ZM1425.7 484.6L1385.3 596.8L1466.2 596.8ZM1425.7 549.6L1373.7 661.8L1477.7 661.8ZM1422.3 626.4h6.9v29.5h-6.9Z" fill="#b4cbb8" opacity="0.75"/>
<g class="fog1"><rect x="-400" y="520" width="2400" height="170" fill="url(#fog)"/></g>
<path d="M835.5 335.1L814.7 500.3L856.3 500.3ZM835.5 430.7L800.8 596L870.2 596ZM835.5 526.4L786.9 691.7L884.1 691.7ZM835.5 622.1L773 787.4L898 787.4ZM831.3 735.2h8.3v43.5h-8.3Z" fill="#8aab95" opacity="0.85"/>
<path d="M595.7 307.6L573.1 483.3L618.4 483.3ZM595.7 409.3L558 585L633.5 585ZM595.7 511.1L542.8 686.8L648.6 686.8ZM595.7 612.8L527.7 788.5L663.7 788.5ZM591.2 733h9.1v46.2h-9.1Z" fill="#8aab95" opacity="0.85"/>
<path d="M116.5 381.2L92.9 528.9L140 528.9ZM116.5 466.7L77.2 614.5L155.8 614.5ZM116.5 552.2L61.5 700L171.5 700ZM116.5 637.8L45.8 785.6L187.2 785.6ZM111.8 738.9h9.4v38.9h-9.4Z" fill="#8aab95" opacity="0.85"/>
<path d="M18 419.3L-8.2 552.6L44.1 552.6ZM18 496.4L-25.7 629.7L61.6 629.7ZM18 573.6L-43.1 706.9L79 706.9ZM18 650.8L-60.6 784L96.5 784ZM12.7 741.9h10.5v35.1h-10.5Z" fill="#8aab95" opacity="0.85"/>
<path d="M39.5 420.5L14 553.3L65 553.3ZM39.5 497.4L-2.9 630.2L82 630.2ZM39.5 574.3L-19.9 707.1L99 707.1ZM39.5 651.2L-36.9 784L116 784ZM34.4 742h10.2v35h-10.2Z" fill="#8aab95" opacity="0.85"/>
<path d="M493.6 402.5L472 542.2L515.2 542.2ZM493.6 483.4L457.6 623L529.6 623ZM493.6 564.2L443.1 703.9L544.1 703.9ZM493.6 645.1L428.7 784.7L558.5 784.7ZM489.3 740.6h8.7v36.7h-8.7Z" fill="#8aab95" opacity="0.85"/>
<path d="M89.5 418.5L62.9 552.1L116.1 552.1ZM89.5 495.8L45.1 629.4L133.9 629.4ZM89.5 573.1L27.4 706.7L151.6 706.7ZM89.5 650.5L9.7 784.1L169.4 784.1ZM84.2 741.9h10.6v35.2h-10.6Z" fill="#8aab95" opacity="0.85"/>
<path d="M971.3 412.2L951.4 548.1L991.2 548.1ZM971.3 490.9L938.1 626.9L1004.4 626.9ZM971.3 569.6L924.9 705.6L1017.7 705.6ZM971.3 648.3L911.6 784.3L1031 784.3ZM967.3 741.4h8v35.8h-8Z" fill="#8aab95" opacity="0.85"/>
<path d="M184.8 424.7L165 555.9L204.6 555.9ZM184.8 500.7L151.8 631.9L217.8 631.9ZM184.8 576.6L138.7 707.8L231 707.8ZM184.8 652.6L125.5 783.8L244.2 783.8ZM180.9 742.4h7.9v34.5h-7.9Z" fill="#8aab95" opacity="0.85"/>
<path d="M1094.6 311.1L1070.6 485.5L1118.7 485.5ZM1094.6 412.1L1054.5 586.4L1134.7 586.4ZM1094.6 513L1038.5 687.4L1150.8 687.4ZM1094.6 614L1022.4 788.4L1166.8 788.4ZM1089.8 733.3h9.6v45.9h-9.6Z" fill="#8aab95" opacity="0.85"/>
<path d="M181.6 420.6L156.6 553.4L206.5 553.4ZM181.6 497.5L140 630.2L223.1 630.2ZM181.6 574.3L123.3 707.1L239.8 707.1ZM181.6 651.2L106.7 784L256.4 784ZM176.6 742h10v34.9h-10Z" fill="#8aab95" opacity="0.85"/>
<path d="M708.3 318.6L685.2 490.1L731.4 490.1ZM708.3 417.9L669.8 589.4L746.9 589.4ZM708.3 517.2L654.4 688.7L762.3 688.7ZM708.3 616.5L638.9 788.1L777.7 788.1ZM703.7 733.9h9.3v45.1h-9.3Z" fill="#8aab95" opacity="0.85"/>
<path d="M877.7 349.1L857.4 509.1L898.1 509.1ZM877.7 441.7L843.8 601.7L911.7 601.7ZM877.7 534.3L830.3 694.2L925.2 694.2ZM877.7 626.9L816.7 786.8L938.8 786.8ZM873.7 736.3h8.1v42.1h-8.1Z" fill="#8aab95" opacity="0.85"/>
<path d="M542.4 390.2L522.9 534.5L562 534.5ZM542.4 473.7L509.8 618.1L575 618.1ZM542.4 557.3L496.8 701.6L588 701.6ZM542.4 640.9L483.8 785.2L601.1 785.2ZM538.5 739.6h7.8v38h-7.8Z" fill="#8aab95" opacity="0.85"/>
<path d="M1492.7 276.1L1471.6 463.8L1513.8 463.8ZM1492.7 384.7L1457.5 572.4L1527.9 572.4ZM1492.7 493.4L1443.4 681.1L1542 681.1ZM1492.7 602.1L1429.4 789.8L1556.1 789.8ZM1488.5 730.5h8.4v49.4h-8.4Z" fill="#8aab95" opacity="0.85"/>
<g class="fog2"><rect x="-400" y="640" width="2400" height="190" fill="url(#fog)"/></g>
<rect y="700" width="1600" height="200" fill="url(#floor)"/>
<path d="M-7.3 920L13.6 -20L40.9 -20L47.3 920Z" fill="#4c6753"/>
<path d="M22 920L27.3 -20L40.9 -20L47.3 920Z" fill="#3a5242" opacity="0.5"/>
<path d="M20 196.4q50 -30 110 -70" stroke="#4c6753" stroke-width="8" stroke-linecap="round" fill="none"/>
<ellipse cx="130" cy="120.4" rx="46" ry="22" fill="#7fa684" opacity="0.7"/>
<path d="M81.9 920L102.7 -20L130.8 -20L138.1 920Z" fill="#4c6753"/>
<path d="M112 920L116.8 -20L130.8 -20L138.1 920Z" fill="#3a5242" opacity="0.5"/>
<path d="M110 486.4q50 -30 110 -70" stroke="#4c6753" stroke-width="8" stroke-linecap="round" fill="none"/>
<ellipse cx="220" cy="410.4" rx="46" ry="22" fill="#7fa684" opacity="0.7"/>
<path d="M147.8 920L179 -20L221.1 -20L232.2 920Z" fill="#4c6753"/>
<path d="M193 920L200.1 -20L221.1 -20L232.2 920Z" fill="#3a5242" opacity="0.5"/>
<path d="M190 356.4q50 -30 110 -70" stroke="#4c6753" stroke-width="8" stroke-linecap="round" fill="none"/>
<ellipse cx="300" cy="280.4" rx="46" ry="22" fill="#7fa684" opacity="0.7"/>
<path d="M261.7 920L293.3 -20L331.6 -20L338.3 920Z" fill="#4c6753"/>
<path d="M302.7 920L312.5 -20L331.6 -20L338.3 920Z" fill="#3a5242" opacity="0.5"/>
<path d="M300 361q50 -30 110 -70" stroke="#4c6753" stroke-width="8" stroke-linecap="round" fill="none"/>
<ellipse cx="410" cy="285" rx="46" ry="22" fill="#7fa684" opacity="0.7"/>
<path d="M1263.6 920L1269.5 -20L1295.9 -20L1316.4 920Z" fill="#4c6753"/>
<path d="M1291.9 920L1282.7 -20L1295.9 -20L1316.4 920Z" fill="#3a5242" opacity="0.5"/>
<path d="M1290 485.9q-50 -30 -110 -70" stroke="#4c6753" stroke-width="8" stroke-linecap="round" fill="none"/>
<ellipse cx="1180" cy="409.9" rx="46" ry="22" fill="#7fa684" opacity="0.7"/>
<path d="M1368.1 920L1380.7 -20L1412.6 -20L1431.9 920Z" fill="#4c6753"/>
<path d="M1402.3 920L1396.7 -20L1412.6 -20L1431.9 920Z" fill="#3a5242" opacity="0.5"/>
<path d="M1400 401.1q-50 -30 -110 -70" stroke="#4c6753" stroke-width="8" stroke-linecap="round" fill="none"/>
<ellipse cx="1290" cy="325.1" rx="46" ry="22" fill="#7fa684" opacity="0.7"/>
<path d="M1436.6 920L1470.2 -20L1513.6 -20L1523.4 920Z" fill="#4c6753"/>
<path d="M1483.1 920L1491.9 -20L1513.6 -20L1523.4 920Z" fill="#3a5242" opacity="0.5"/>
<path d="M1480 124.1q-50 -30 -110 -70" stroke="#4c6753" stroke-width="8" stroke-linecap="round" fill="none"/>
<ellipse cx="1370" cy="48.1" rx="46" ry="22" fill="#7fa684" opacity="0.7"/>
<path d="M1542.8 920L1558.9 -20L1586.1 -20L1597.2 920Z" fill="#4c6753"/>
<path d="M1571.9 920L1572.5 -20L1586.1 -20L1597.2 920Z" fill="#3a5242" opacity="0.5"/>
<path d="M1570 301.6q-50 -30 -110 -70" stroke="#4c6753" stroke-width="8" stroke-linecap="round" fill="none"/>
<ellipse cx="1460" cy="225.6" rx="46" ry="22" fill="#7fa684" opacity="0.7"/>
<circle class="m" cx="505.7" cy="755.9" r="2.8" fill="#fffbe2" style="--dx:62.8px;animation-duration:13.7s;animation-delay:-9.8s"/>
<circle class="m" cx="1508.2" cy="704.5" r="1.8" fill="#fffbe2" style="--dx:-1.1px;animation-duration:20.4s;animation-delay:-19.3s"/>
<circle class="m" cx="1417.6" cy="588.5" r="1.5" fill="#fffbe2" style="--dx:-9.2px;animation-duration:20.8s;animation-delay:-5s"/>
<circle class="m" cx="408.2" cy="752.1" r="3.1" fill="#fffbe2" style="--dx:-6.2px;animation-duration:12s;animation-delay:-5.1s"/>
<circle class="m" cx="611.4" cy="873.1" r="3.2" fill="#fffbe2" style="--dx:-28.3px;animation-duration:16.4s;animation-delay:-16.4s"/>
<circle class="m" cx="332.3" cy="304.4" r="1.8" fill="#fffbe2" style="--dx:79.9px;animation-duration:19.9s;animation-delay:-17.7s"/>
<circle class="m" cx="106.3" cy="722.6" r="1.7" fill="#fffbe2" style="--dx:-7.1px;animation-duration:18.5s;animation-delay:-13.8s"/>
<circle class="m" cx="532.3" cy="472.5" r="2.1" fill="#fffbe2" style="--dx:72.9px;animation-duration:16.4s;animation-delay:-8.2s"/>
<circle class="m" cx="871.4" cy="334.6" r="2.8" fill="#fffbe2" style="--dx:63.4px;animation-duration:19.8s;animation-delay:-18s"/>
<circle class="m" cx="931" cy="488.8" r="2.2" fill="#fffbe2" style="--dx:55.4px;animation-duration:16.2s;animation-delay:-12.7s"/>
<circle class="m" cx="1540.4" cy="598.9" r="2.8" fill="#fffbe2" style="--dx:76.7px;animation-duration:12.8s;animation-delay:-8.1s"/>
<circle class="m" cx="209" cy="357.8" r="2.7" fill="#fffbe2" style="--dx:28.2px;animation-duration:12.5s;animation-delay:-10.1s"/>
<circle class="m" cx="168.8" cy="663.2" r="1.5" fill="#fffbe2" style="--dx:-19.6px;animation-duration:17.4s;animation-delay:-11.6s"/>
<circle class="m" cx="1501.6" cy="864.7" r="2.4" fill="#fffbe2" style="--dx:77px;animation-duration:21.5s;animation-delay:-19.4s"/>
<circle class="m" cx="650" cy="553.9" r="1.7" fill="#fffbe2" style="--dx:32.7px;animation-duration:15.3s;animation-delay:-3.2s"/>
<circle class="m" cx="1008.5" cy="689.2" r="3.3" fill="#fffbe2" style="--dx:-6.2px;animation-duration:15.6s;animation-delay:-10.7s"/>
<circle class="m" cx="906.2" cy="448.7" r="2.8" fill="#fffbe2" style="--dx:12.2px;animation-duration:15.7s;animation-delay:-4.9s"/>
<circle class="m" cx="502.9" cy="595.6" r="2" fill="#fffbe2" style="--dx:0.1px;animation-duration:13.2s;animation-delay:-9s"/>
<circle class="m" cx="1314.6" cy="324.9" r="2.8" fill="#fffbe2" style="--dx:65.5px;animation-duration:14s;animation-delay:-6.7s"/>
<circle class="m" cx="487" cy="306.2" r="2.7" fill="#fffbe2" style="--dx:-11.3px;animation-duration:19.3s;animation-delay:-13.1s"/>
<circle class="m" cx="1341.8" cy="779.3" r="3.3" fill="#fffbe2" style="--dx:-16.7px;animation-duration:12.2s;animation-delay:-5.1s"/>
<circle class="m" cx="989.2" cy="749.4" r="3.3" fill="#fffbe2" style="--dx:14.5px;animation-duration:19.6s;animation-delay:-19.1s"/>
<circle class="m" cx="765.2" cy="640.8" r="2.8" fill="#fffbe2" style="--dx:12.9px;animation-duration:12.6s;animation-delay:-8s"/>
<circle class="m" cx="1109.6" cy="470" r="3" fill="#fffbe2" style="--dx:-16.1px;animation-duration:20s;animation-delay:-10.2s"/>
<circle class="m" cx="1483" cy="559.2" r="1.8" fill="#fffbe2" style="--dx:45.2px;animation-duration:12.7s;animation-delay:-0.7s"/>
<circle class="m" cx="1040.4" cy="800.1" r="2.6" fill="#fffbe2" style="--dx:25.4px;animation-duration:16.5s;animation-delay:-8.8s"/>
<circle class="m" cx="820.4" cy="476.1" r="1.6" fill="#fffbe2" style="--dx:75.6px;animation-duration:12.9s;animation-delay:-6.5s"/>
<circle class="m" cx="612.4" cy="337.9" r="1.6" fill="#fffbe2" style="--dx:73.4px;animation-duration:14.2s;animation-delay:-10.3s"/>
</svg>`,
}
