import { makeColors } from '../make-colors.js'

const { theme, problems } = makeColors({ label: 'snowy-cabin', only: 'dark', roles: { accent: '#ffb85c', danger: '#e5645e', success: '#5cc48a', warning: '#e0a84a', pro: '#a58be0' }, dark: { gray: { anchors: { 'surface-0': '#0d1521', 'surface-1': '#131d2d', 'surface-2': '#1a2639', 'surface-3': '#1e2b40', 'text-primary': '#e9f0fa', 'text-secondary': '#bac8da', 'text-muted': '#94a5bc' } } } })

export default {
  id: 'snowy-cabin',
  name: '雪夜小屋',
  description: '藍灰夜色、雪花飄落、小屋透出暖黃燈光',
  mode: 'dark',
  colors: theme,
  problems,
  glass: { blur: 4, tint: '#0d1521', opacity: 0.3 },
  scene: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1600 900" preserveAspectRatio="xMidYMid slice">
<style>
  .f { fill: #f4f8ff; opacity: 0.85; animation-name: snow; animation-timing-function: linear; animation-iteration-count: infinite; }
  @keyframes snow { from { transform: translate(0, 0) } 50% { transform: translate(calc(var(--dx) * 0.3), 480px) } to { transform: translate(var(--dx), 970px) } }
  .sm { fill: #d3deec; opacity: 0; animation: puff 8.4s ease-out infinite; }
  @keyframes puff { 0% { transform: translate(0, 0) scale(0.6); opacity: 0 } 15% { opacity: 0.5 } 100% { transform: translate(var(--dx), -170px) scale(2.6); opacity: 0 } }
  .win { animation: flick 5s ease-in-out infinite alternate; }
  @keyframes flick { from { opacity: 0.8 } 40% { opacity: 1 } to { opacity: 0.88 } }
</style>
<defs>
  <linearGradient id="sky" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0" stop-color="#080e1a"/>
    <stop offset="0.7" stop-color="#18253a"/>
    <stop offset="1" stop-color="#26385a"/>
  </linearGradient>
  <radialGradient id="moon" cx="0.5" cy="0.5" r="0.5">
    <stop offset="0" stop-color="#e8eefc" stop-opacity="0.45"/>
    <stop offset="1" stop-color="#e8eefc" stop-opacity="0"/>
  </radialGradient>
  <radialGradient id="warm" cx="0.5" cy="0.5" r="0.5">
    <stop offset="0" stop-color="#ffc562" stop-opacity="0.6"/>
    <stop offset="1" stop-color="#ffc562" stop-opacity="0"/>
  </radialGradient>
</defs>
<rect width="1600" height="900" fill="url(#sky)"/>
<circle cx="1166" cy="204.8" r="1.2" fill="#eef3ff" opacity="0.7"/>
<circle cx="728.9" cy="47.3" r="1.5" fill="#eef3ff" opacity="0.3"/>
<circle cx="426.5" cy="421.4" r="1.3" fill="#eef3ff" opacity="0.7"/>
<circle cx="1107" cy="140.4" r="1.5" fill="#eef3ff" opacity="0.7"/>
<circle cx="42.3" cy="230.2" r="1.1" fill="#eef3ff" opacity="0.4"/>
<circle cx="1150.8" cy="122.8" r="0.9" fill="#eef3ff" opacity="0.5"/>
<circle cx="426.1" cy="266.4" r="1.1" fill="#eef3ff" opacity="0.4"/>
<circle cx="84.9" cy="17.3" r="1.5" fill="#eef3ff" opacity="0.4"/>
<circle cx="383.2" cy="287.4" r="0.6" fill="#eef3ff" opacity="0.6"/>
<circle cx="847.7" cy="17.8" r="1.4" fill="#eef3ff" opacity="0.3"/>
<circle cx="1505.2" cy="142" r="1.1" fill="#eef3ff" opacity="0.7"/>
<circle cx="371.1" cy="343" r="0.7" fill="#eef3ff" opacity="0.6"/>
<circle cx="1107.7" cy="33" r="0.8" fill="#eef3ff" opacity="0.8"/>
<circle cx="500.1" cy="59.2" r="1.2" fill="#eef3ff" opacity="0.5"/>
<circle cx="257.8" cy="69.4" r="1.2" fill="#eef3ff" opacity="0.7"/>
<circle cx="914.8" cy="311.5" r="0.6" fill="#eef3ff" opacity="0.4"/>
<circle cx="92.8" cy="237" r="1.1" fill="#eef3ff" opacity="0.3"/>
<circle cx="462.3" cy="91.9" r="0.9" fill="#eef3ff" opacity="0.8"/>
<circle cx="1149.3" cy="211" r="0.9" fill="#eef3ff" opacity="0.5"/>
<circle cx="1332.5" cy="197.7" r="0.8" fill="#eef3ff" opacity="0.5"/>
<circle cx="780.1" cy="13.5" r="1.1" fill="#eef3ff" opacity="0.8"/>
<circle cx="1353.8" cy="2.7" r="1.4" fill="#eef3ff" opacity="0.4"/>
<circle cx="92.8" cy="255.7" r="1.1" fill="#eef3ff" opacity="0.5"/>
<circle cx="718.3" cy="421.8" r="1" fill="#eef3ff" opacity="0.4"/>
<circle cx="525.2" cy="97.4" r="1.4" fill="#eef3ff" opacity="0.6"/>
<circle cx="419.1" cy="46.6" r="0.8" fill="#eef3ff" opacity="0.5"/>
<circle cx="1173.1" cy="89.9" r="0.8" fill="#eef3ff" opacity="0.7"/>
<circle cx="1313.8" cy="95.1" r="1.2" fill="#eef3ff" opacity="0.7"/>
<circle cx="1527.2" cy="53.2" r="0.9" fill="#eef3ff" opacity="0.6"/>
<circle cx="344.7" cy="11" r="1" fill="#eef3ff" opacity="0.3"/>
<circle cx="1219.6" cy="186.6" r="1.6" fill="#eef3ff" opacity="0.6"/>
<circle cx="1133.1" cy="419.3" r="1.1" fill="#eef3ff" opacity="0.7"/>
<circle cx="99.4" cy="43.1" r="0.7" fill="#eef3ff" opacity="0.6"/>
<circle cx="1059.8" cy="226.3" r="0.8" fill="#eef3ff" opacity="0.5"/>
<circle cx="1301.7" cy="13.1" r="0.8" fill="#eef3ff" opacity="0.6"/>
<circle cx="1294.4" cy="415.8" r="0.9" fill="#eef3ff" opacity="0.7"/>
<circle cx="1574.8" cy="345.8" r="1" fill="#eef3ff" opacity="0.5"/>
<circle cx="1012" cy="381.9" r="0.6" fill="#eef3ff" opacity="0.5"/>
<circle cx="1353.9" cy="320.7" r="1.5" fill="#eef3ff" opacity="0.7"/>
<circle cx="228.4" cy="225.1" r="1.4" fill="#eef3ff" opacity="0.7"/>
<circle cx="1076.8" cy="197.8" r="1.4" fill="#eef3ff" opacity="0.7"/>
<circle cx="256.6" cy="1.7" r="0.6" fill="#eef3ff" opacity="0.5"/>
<circle cx="1467.3" cy="416.8" r="1.3" fill="#eef3ff" opacity="0.4"/>
<circle cx="1251.7" cy="319.6" r="0.8" fill="#eef3ff" opacity="0.7"/>
<circle cx="245.1" cy="55.4" r="1.3" fill="#eef3ff" opacity="0.8"/>
<circle cx="898" cy="90.7" r="0.7" fill="#eef3ff" opacity="0.4"/>
<circle cx="159.1" cy="326" r="1.4" fill="#eef3ff" opacity="0.8"/>
<circle cx="972.6" cy="162.8" r="0.8" fill="#eef3ff" opacity="0.4"/>
<circle cx="415.9" cy="208.6" r="1.6" fill="#eef3ff" opacity="0.5"/>
<circle cx="331.6" cy="240.7" r="1.3" fill="#eef3ff" opacity="0.8"/>
<circle cx="300" cy="150" r="130" fill="url(#moon)"/>
<circle cx="300" cy="150" r="34" fill="#eef3fd"/>
<path d="M-10 920 L-10 650 L0 676.3 L40 680.9 L80 682.2 L120 680.8 L160 677.5 L200 673.7 L240 670.7 L280 669.2 L320 669.4 L360 670.9 L400 672.7 L440 673.5 L480 672.3 L520 668.3 L560 661.3 L600 652.2 L640 642 L680 632.2 L720 624.3 L760 619.3 L800 617.5 L840 618.7 L880 621.8 L920 625.7 L960 629 L1000 630.8 L1040 630.9 L1080 629.6 L1120 627.8 L1160 626.8 L1200 627.7 L1240 631.4 L1280 637.9 L1320 646.8 L1360 657 L1400 666.9 L1440 675.1 L1480 680.5 L1520 682.6 L1560 681.8 L1600 678.8 L1610 920 Z" fill="#26364f"/>
<path d="M-10 920 L-10 725 L0 732.2 L40 731.4 L80 732.5 L120 734.3 L160 735.2 L200 733.9 L240 729.7 L280 722.8 L320 714.6 L360 706.6 L400 700.5 L440 697.5 L480 697.8 L520 700.7 L560 704.8 L600 708.3 L640 710 L680 709.3 L720 706.6 L760 703 L800 700.2 L840 699.7 L880 702.3 L920 708.1 L960 716.1 L1000 724.6 L1040 731.9 L1080 736.8 L1120 738.7 L1160 738 L1200 736 L1240 734.3 L1280 734.3 L1320 736.9 L1360 741.7 L1400 747.8 L1440 753.4 L1480 757.1 L1520 757.6 L1560 754.6 L1600 748.9 L1610 920 Z" fill="#3a4f70"/>
<g transform="translate(1250 728)">
  <ellipse cx="-20" cy="6" rx="220" ry="26" fill="url(#warm)" opacity="0.55"/>
  <rect x="-80" y="-95" width="160" height="95" fill="#4b3427"/>
  <rect x="-80" y="-95" width="160" height="8" fill="#3a281d"/>
  <rect x="38" y="-152" width="26" height="52" fill="#3b2c24"/>
  <rect x="34" y="-158" width="34" height="9" rx="3" fill="#e4edf8"/>
  <polygon points="-102,-92 0,-164 102,-92" fill="#dfe8f4"/>
  <polygon points="-92,-92 0,-154 92,-92 92,-86 -92,-86" fill="#2d211a"/>
  <g class="win">
    <circle cx="-37" cy="-52" r="70" fill="url(#warm)"/>
    <rect x="-55" y="-70" width="36" height="34" fill="#ffd27a"/>
    <rect x="-55" y="-54" width="36" height="2.5" fill="#6b4a2a"/>
    <rect x="-38" y="-70" width="2.5" height="34" fill="#6b4a2a"/>
    <rect x="22" y="-70" width="36" height="34" fill="#ffd27a"/>
    <rect x="22" y="-54" width="36" height="2.5" fill="#6b4a2a"/>
    <rect x="39" y="-70" width="2.5" height="34" fill="#6b4a2a"/>
  </g>
  <rect x="-13" y="-58" width="26" height="58" fill="#2a1c15"/>
  <circle class="sm" cx="50" cy="-160" r="8.8" style="--dx:51.2px;animation-delay:0s"/>
  <circle class="sm" cx="50" cy="-160" r="9.4" style="--dx:24.8px;animation-delay:-1.4s"/>
  <circle class="sm" cx="50" cy="-160" r="9.3" style="--dx:43px;animation-delay:-2.8s"/>
  <circle class="sm" cx="50" cy="-160" r="8.8" style="--dx:54.7px;animation-delay:-4.2s"/>
  <circle class="sm" cx="50" cy="-160" r="7" style="--dx:25.6px;animation-delay:-5.6s"/>
  <circle class="sm" cx="50" cy="-160" r="9.5" style="--dx:53.9px;animation-delay:-7s"/>
</g>
<path d="M60 532.3L47.7 634.3L72.3 634.3ZM60 591.4L39.4 693.3L80.6 693.3ZM60 650.4L31.2 752.3L88.8 752.3ZM60 709.4L23 811.3L97 811.3Z" fill="#0f1e2e"/><path d="M60 532.3L53.8 583.3L66.2 583.3ZM60 591.4L49.7 642.3L70.3 642.3ZM60 650.4L45.6 701.3L74.4 701.3ZM60 709.4L41.5 760.4L78.5 760.4Z" fill="#c4d4e8" opacity="0.8"/>
<path d="M130 627.2L115.8 691.5L144.2 691.5ZM130 664.4L106.4 728.8L153.6 728.8ZM130 701.7L96.9 766L163.1 766ZM130 738.9L87.5 803.3L172.5 803.3Z" fill="#0f1e2e"/><path d="M130 627.2L122.9 659.3L137.1 659.3ZM130 664.4L118.2 696.6L141.8 696.6ZM130 701.7L113.5 733.9L146.5 733.9ZM130 738.9L108.7 771.1L151.3 771.1Z" fill="#c4d4e8" opacity="0.8"/>
<path d="M205 628.5L192.2 690.2L217.8 690.2ZM205 664.2L183.7 725.9L226.3 725.9ZM205 699.9L175.2 761.6L234.8 761.6ZM205 735.6L166.7 797.3L243.3 797.3Z" fill="#0f1e2e"/><path d="M205 628.5L198.6 659.3L211.4 659.3ZM205 664.2L194.4 695L215.6 695ZM205 699.9L190.1 730.7L219.9 730.7ZM205 735.6L185.9 766.5L224.1 766.5Z" fill="#c4d4e8" opacity="0.8"/>
<path d="M290 543.9L279.4 631.7L300.6 631.7ZM290 594.8L272.4 682.5L307.6 682.5ZM290 645.6L265.4 733.3L314.6 733.3ZM290 696.4L258.3 784.2L321.7 784.2Z" fill="#0f1e2e"/><path d="M290 543.9L284.7 587.8L295.3 587.8ZM290 594.8L281.2 638.6L298.8 638.6ZM290 645.6L277.7 689.5L302.3 689.5ZM290 696.4L274.2 740.3L305.8 740.3Z" fill="#c4d4e8" opacity="0.8"/>
<path d="M360 548.6L348.6 645.1L371.4 645.1ZM360 604.4L341 700.9L379 700.9ZM360 660.3L333.4 756.8L386.6 756.8ZM360 716.2L325.8 812.7L394.2 812.7Z" fill="#0f1e2e"/><path d="M360 548.6L354.3 596.8L365.7 596.8ZM360 604.4L350.5 652.7L369.5 652.7ZM360 660.3L346.7 708.6L373.3 708.6ZM360 716.2L342.9 764.4L377.1 764.4Z" fill="#c4d4e8" opacity="0.8"/>
<path d="M1130 595.8L1116.9 669L1143.1 669ZM1130 638.2L1108.1 711.4L1151.9 711.4ZM1130 680.6L1099.3 753.8L1160.7 753.8ZM1130 723L1090.6 796.2L1169.4 796.2Z" fill="#0f1e2e"/><path d="M1130 595.8L1123.4 632.4L1136.6 632.4ZM1130 638.2L1119.1 674.8L1140.9 674.8ZM1130 680.6L1114.7 717.2L1145.3 717.2ZM1130 723L1110.3 759.6L1149.7 759.6Z" fill="#c4d4e8" opacity="0.8"/>
<path d="M1170 596.6L1158.4 671.9L1181.6 671.9ZM1170 640.2L1150.7 715.5L1189.3 715.5ZM1170 683.8L1142.9 759.2L1197.1 759.2ZM1170 727.4L1135.2 802.8L1204.8 802.8Z" fill="#0f1e2e"/><path d="M1170 596.6L1164.2 634.3L1175.8 634.3ZM1170 640.2L1160.3 677.9L1179.7 677.9ZM1170 683.8L1156.5 721.5L1183.5 721.5ZM1170 727.4L1152.6 765.1L1187.4 765.1Z" fill="#c4d4e8" opacity="0.8"/>
<path d="M1380 526.4L1367.1 620.9L1392.9 620.9ZM1380 581.1L1358.5 675.5L1401.5 675.5ZM1380 635.8L1349.8 730.2L1410.2 730.2ZM1380 690.4L1341.2 784.8L1418.8 784.8Z" fill="#0f1e2e"/><path d="M1380 526.4L1373.5 573.7L1386.5 573.7ZM1380 581.1L1369.2 628.3L1390.8 628.3ZM1380 635.8L1364.9 683L1395.1 683ZM1380 690.4L1360.6 737.6L1399.4 737.6Z" fill="#c4d4e8" opacity="0.8"/>
<path d="M1450 596.9L1435.3 673.8L1464.7 673.8ZM1450 641.4L1425.6 718.4L1474.4 718.4ZM1450 686L1415.8 762.9L1484.2 762.9ZM1450 730.5L1406 807.4L1494 807.4Z" fill="#0f1e2e"/><path d="M1450 596.9L1442.7 635.4L1457.3 635.4ZM1450 641.4L1437.8 679.9L1462.2 679.9ZM1450 686L1432.9 724.4L1467.1 724.4ZM1450 730.5L1428 769L1472 769Z" fill="#c4d4e8" opacity="0.8"/>
<path d="M1520 538.4L1505.5 630.9L1534.5 630.9ZM1520 592L1495.8 684.5L1544.2 684.5ZM1520 645.5L1486.1 738.1L1553.9 738.1ZM1520 699.1L1476.4 791.6L1563.6 791.6Z" fill="#0f1e2e"/><path d="M1520 538.4L1512.7 584.6L1527.3 584.6ZM1520 592L1507.9 638.2L1532.1 638.2ZM1520 645.5L1503.1 691.8L1536.9 691.8ZM1520 699.1L1498.2 745.4L1541.8 745.4Z" fill="#c4d4e8" opacity="0.8"/>
<path d="M1580 572.3L1567.5 656.4L1592.5 656.4ZM1580 621L1559.1 705L1600.9 705ZM1580 669.6L1550.7 753.7L1609.3 753.7ZM1580 718.3L1542.4 802.4L1617.6 802.4Z" fill="#0f1e2e"/><path d="M1580 572.3L1573.7 614.3L1586.3 614.3ZM1580 621L1569.6 663L1590.4 663ZM1580 669.6L1565.4 711.7L1594.6 711.7ZM1580 718.3L1561.2 760.3L1598.8 760.3Z" fill="#c4d4e8" opacity="0.8"/>
<path d="M-10 920 L-10 800 L0 790.3 L40 785.3 L80 779.9 L120 776.1 L160 775.6 L200 778.8 L240 784.8 L280 791.6 L320 797.1 L360 800 L400 800.3 L440 799.2 L480 798.5 L520 799.9 L560 804.2 L600 810.6 L640 817.5 L680 822.6 L720 824.4 L760 822.6 L800 818 L840 812.7 L880 808.7 L920 807.1 L960 807.8 L1000 809.5 L1040 810.3 L1080 808.5 L1120 803.5 L1160 796.2 L1200 788.4 L1240 782.3 L1280 779.5 L1320 780.1 L1360 783.2 L1400 786.7 L1440 788.9 L1480 788.7 L1520 786.4 L1560 783.5 L1600 782 L1610 920 Z" fill="#6a82a6"/>
<circle class="f" cx="921.1" cy="-10" r="2.8" style="--dx:52.4px;animation-duration:9.3s;animation-delay:-4.1s"/>
<circle class="f" cx="380.4" cy="-10" r="1.1" style="--dx:32px;animation-duration:14.2s;animation-delay:-5.9s"/>
<circle class="f" cx="356.1" cy="-10" r="2.2" style="--dx:6.8px;animation-duration:13.1s;animation-delay:-5.1s"/>
<circle class="f" cx="1589.8" cy="-10" r="1.8" style="--dx:27px;animation-duration:13.4s;animation-delay:-12.6s"/>
<circle class="f" cx="1028.3" cy="-10" r="1.7" style="--dx:-36.9px;animation-duration:14.4s;animation-delay:-12.6s"/>
<circle class="f" cx="1425.2" cy="-10" r="3.2" style="--dx:-28.7px;animation-duration:10.5s;animation-delay:-3.4s"/>
<circle class="f" cx="130.4" cy="-10" r="2.5" style="--dx:18.6px;animation-duration:11.6s;animation-delay:-1s"/>
<circle class="f" cx="1054.4" cy="-10" r="2.8" style="--dx:67.9px;animation-duration:11.3s;animation-delay:-6.5s"/>
<circle class="f" cx="938.2" cy="-10" r="1.9" style="--dx:39.3px;animation-duration:11.8s;animation-delay:-4s"/>
<circle class="f" cx="1535.7" cy="-10" r="3" style="--dx:14.4px;animation-duration:10.2s;animation-delay:-0.1s"/>
<circle class="f" cx="1546.5" cy="-10" r="1.7" style="--dx:31.7px;animation-duration:15.1s;animation-delay:-2.7s"/>
<circle class="f" cx="656.8" cy="-10" r="3.4" style="--dx:70.7px;animation-duration:9.2s;animation-delay:-4.7s"/>
<circle class="f" cx="23.2" cy="-10" r="1.8" style="--dx:-13.3px;animation-duration:13s;animation-delay:-10.4s"/>
<circle class="f" cx="1058" cy="-10" r="3.3" style="--dx:-4.9px;animation-duration:10s;animation-delay:-6.6s"/>
<circle class="f" cx="127.8" cy="-10" r="2.6" style="--dx:-53.3px;animation-duration:12.5s;animation-delay:-7.5s"/>
<circle class="f" cx="1493.7" cy="-10" r="1.4" style="--dx:56.1px;animation-duration:13.1s;animation-delay:-0.5s"/>
<circle class="f" cx="574.7" cy="-10" r="2.1" style="--dx:-30px;animation-duration:13.7s;animation-delay:-0.6s"/>
<circle class="f" cx="682.6" cy="-10" r="2.7" style="--dx:-6.4px;animation-duration:11.2s;animation-delay:-1s"/>
<circle class="f" cx="1161" cy="-10" r="1.6" style="--dx:-3.7px;animation-duration:12.6s;animation-delay:-3.6s"/>
<circle class="f" cx="404.5" cy="-10" r="3.3" style="--dx:66.7px;animation-duration:8.1s;animation-delay:-3.1s"/>
<circle class="f" cx="906.2" cy="-10" r="1.6" style="--dx:61.2px;animation-duration:15.3s;animation-delay:-5.2s"/>
<circle class="f" cx="1469.6" cy="-10" r="2.1" style="--dx:-52.4px;animation-duration:13.8s;animation-delay:-1s"/>
<circle class="f" cx="929.6" cy="-10" r="3" style="--dx:65.8px;animation-duration:10.4s;animation-delay:-0.9s"/>
<circle class="f" cx="1280.2" cy="-10" r="2.3" style="--dx:-19.8px;animation-duration:10.1s;animation-delay:-1s"/>
<circle class="f" cx="445.4" cy="-10" r="2" style="--dx:-17.6px;animation-duration:11.6s;animation-delay:-5.1s"/>
<circle class="f" cx="1083.9" cy="-10" r="2.1" style="--dx:46.8px;animation-duration:10.9s;animation-delay:-7.1s"/>
<circle class="f" cx="45.2" cy="-10" r="3.3" style="--dx:2.1px;animation-duration:11s;animation-delay:-9s"/>
<circle class="f" cx="789.7" cy="-10" r="2.4" style="--dx:62.2px;animation-duration:10.5s;animation-delay:-6.4s"/>
<circle class="f" cx="595.7" cy="-10" r="3.1" style="--dx:-16px;animation-duration:10.4s;animation-delay:-2.6s"/>
<circle class="f" cx="1323.8" cy="-10" r="2.6" style="--dx:-16.4px;animation-duration:11.7s;animation-delay:-8.9s"/>
<circle class="f" cx="1545.2" cy="-10" r="3.2" style="--dx:53.5px;animation-duration:9.1s;animation-delay:0s"/>
<circle class="f" cx="421.2" cy="-10" r="1.1" style="--dx:0.3px;animation-duration:15.3s;animation-delay:-13.6s"/>
<circle class="f" cx="249.5" cy="-10" r="1.8" style="--dx:-4.2px;animation-duration:11.8s;animation-delay:-1.3s"/>
<circle class="f" cx="220.3" cy="-10" r="3.3" style="--dx:-49.5px;animation-duration:9.6s;animation-delay:-5s"/>
<circle class="f" cx="1484.2" cy="-10" r="1.8" style="--dx:34.4px;animation-duration:13.4s;animation-delay:-2.7s"/>
<circle class="f" cx="1543.1" cy="-10" r="2.8" style="--dx:-52.2px;animation-duration:12.1s;animation-delay:-9.2s"/>
<circle class="f" cx="586" cy="-10" r="3" style="--dx:80px;animation-duration:9.4s;animation-delay:-7s"/>
<circle class="f" cx="347.6" cy="-10" r="2.5" style="--dx:1.3px;animation-duration:13.2s;animation-delay:-10.7s"/>
<circle class="f" cx="100.1" cy="-10" r="1.1" style="--dx:78.2px;animation-duration:16.9s;animation-delay:-5s"/>
<circle class="f" cx="1557.7" cy="-10" r="2.8" style="--dx:-31.4px;animation-duration:10.7s;animation-delay:-3.2s"/>
<circle class="f" cx="1203.4" cy="-10" r="1.4" style="--dx:50.7px;animation-duration:14.3s;animation-delay:-6.3s"/>
<circle class="f" cx="465.9" cy="-10" r="2" style="--dx:24.8px;animation-duration:12.6s;animation-delay:-3.5s"/>
<circle class="f" cx="331.9" cy="-10" r="1.5" style="--dx:33.1px;animation-duration:14.4s;animation-delay:-0.8s"/>
<circle class="f" cx="250" cy="-10" r="1.2" style="--dx:31.6px;animation-duration:16.1s;animation-delay:-8s"/>
<circle class="f" cx="1119.2" cy="-10" r="1.1" style="--dx:-22.4px;animation-duration:14.3s;animation-delay:-7.5s"/>
<circle class="f" cx="1505" cy="-10" r="2" style="--dx:-7px;animation-duration:12.7s;animation-delay:-5.8s"/>
<circle class="f" cx="1215.7" cy="-10" r="1.6" style="--dx:45.5px;animation-duration:15.1s;animation-delay:-9.6s"/>
<circle class="f" cx="920.7" cy="-10" r="1.9" style="--dx:18.5px;animation-duration:13.3s;animation-delay:-5s"/>
<circle class="f" cx="978.3" cy="-10" r="1.5" style="--dx:-37.1px;animation-duration:14.6s;animation-delay:-8.9s"/>
<circle class="f" cx="635.8" cy="-10" r="2" style="--dx:70px;animation-duration:13.7s;animation-delay:-3.7s"/>
<circle class="f" cx="510.3" cy="-10" r="3.3" style="--dx:38.7px;animation-duration:8.7s;animation-delay:-2.5s"/>
<circle class="f" cx="773.6" cy="-10" r="3" style="--dx:-22.1px;animation-duration:11.4s;animation-delay:-0.6s"/>
<circle class="f" cx="1459.7" cy="-10" r="3.2" style="--dx:-39.4px;animation-duration:9.7s;animation-delay:-0.4s"/>
<circle class="f" cx="725.8" cy="-10" r="1.9" style="--dx:-55.3px;animation-duration:14.5s;animation-delay:-10.5s"/>
<circle class="f" cx="952.4" cy="-10" r="2.2" style="--dx:-20.6px;animation-duration:11s;animation-delay:-3.4s"/>
<circle class="f" cx="857.2" cy="-10" r="2" style="--dx:31.7px;animation-duration:13.7s;animation-delay:-1.7s"/>
<circle class="f" cx="19.7" cy="-10" r="2.6" style="--dx:-44.6px;animation-duration:9.5s;animation-delay:-4.6s"/>
<circle class="f" cx="87.7" cy="-10" r="3.2" style="--dx:5.2px;animation-duration:9.9s;animation-delay:-8.1s"/>
<circle class="f" cx="487.9" cy="-10" r="2.3" style="--dx:11.6px;animation-duration:10.1s;animation-delay:-4.8s"/>
<circle class="f" cx="742.7" cy="-10" r="2.7" style="--dx:-42.4px;animation-duration:11.8s;animation-delay:-3.2s"/>
<circle class="f" cx="582" cy="-10" r="2.4" style="--dx:-31.4px;animation-duration:11s;animation-delay:-8.6s"/>
<circle class="f" cx="59.5" cy="-10" r="2.9" style="--dx:-5px;animation-duration:11.5s;animation-delay:-10.5s"/>
<circle class="f" cx="1325.9" cy="-10" r="1.4" style="--dx:-39.8px;animation-duration:13.5s;animation-delay:-5.3s"/>
<circle class="f" cx="1284.2" cy="-10" r="3" style="--dx:32.2px;animation-duration:10.2s;animation-delay:-1.4s"/>
<circle class="f" cx="1581.2" cy="-10" r="3" style="--dx:-29.3px;animation-duration:11.5s;animation-delay:-2.1s"/>
<circle class="f" cx="134.7" cy="-10" r="2.1" style="--dx:52.4px;animation-duration:14.1s;animation-delay:-8.6s"/>
<circle class="f" cx="655.6" cy="-10" r="2.6" style="--dx:-6.2px;animation-duration:10.2s;animation-delay:-5.9s"/>
<circle class="f" cx="1293.1" cy="-10" r="2" style="--dx:-13.9px;animation-duration:13.7s;animation-delay:-9.9s"/>
<circle class="f" cx="1059.3" cy="-10" r="1.5" style="--dx:17px;animation-duration:14.2s;animation-delay:-10s"/>
<circle class="f" cx="257.3" cy="-10" r="1.8" style="--dx:-42.9px;animation-duration:12.3s;animation-delay:-8.2s"/>
<circle class="f" cx="1288.8" cy="-10" r="1.6" style="--dx:78.2px;animation-duration:15.4s;animation-delay:-7.1s"/>
<circle class="f" cx="230.9" cy="-10" r="2.8" style="--dx:-56.9px;animation-duration:9.8s;animation-delay:-3.4s"/>
<circle class="f" cx="375.1" cy="-10" r="3.1" style="--dx:50.1px;animation-duration:10.6s;animation-delay:-2.9s"/>
<circle class="f" cx="711.6" cy="-10" r="3.1" style="--dx:19.1px;animation-duration:11.3s;animation-delay:0s"/>
<circle class="f" cx="757.5" cy="-10" r="1.3" style="--dx:71.5px;animation-duration:15.2s;animation-delay:-14.9s"/>
<circle class="f" cx="701.2" cy="-10" r="1.8" style="--dx:12.3px;animation-duration:11.8s;animation-delay:-10.5s"/>
<circle class="f" cx="1539.5" cy="-10" r="1.6" style="--dx:-40.8px;animation-duration:14.8s;animation-delay:-5.5s"/>
<circle class="f" cx="676.3" cy="-10" r="2.8" style="--dx:69.5px;animation-duration:10.6s;animation-delay:-8.7s"/>
<circle class="f" cx="1257.6" cy="-10" r="1.3" style="--dx:77.6px;animation-duration:14.8s;animation-delay:-12.6s"/>
<circle class="f" cx="1401.2" cy="-10" r="2.2" style="--dx:-20.9px;animation-duration:11.2s;animation-delay:-9.3s"/>
</svg>`,
}
