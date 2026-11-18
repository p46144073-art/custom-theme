import { makeColors } from '../make-colors.js'

const { theme, problems } = makeColors({ label: 'autumn-maple', only: 'light', roles: { accent: '#c4561f', danger: '#b3392f', success: '#4f7a3a', warning: '#a86f14', pro: '#7a55a8' }, light: { gray: { anchors: { 'surface-0': '#f3e4cf', 'surface-1': '#f8ecd9', 'surface-2': '#fcf4e6', 'surface-3': '#fcf4e6', 'text-primary': '#35241a', 'text-secondary': '#5a4333', 'text-muted': '#72594a' } } } })

export default {
  id: 'autumn-maple',
  name: '秋天楓葉',
  description: '奶油米色、楓葉枝、楓葉飄落、暖色丘陵',
  mode: 'light',
  colors: theme,
  problems,
  glass: { blur: 4, tint: '#fcf4e6', opacity: 0.4 },
  scene: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1600 900" preserveAspectRatio="xMidYMid slice">
<style>
  .p { transform-box: fill-box; transform-origin: center; animation-name: fall; animation-timing-function: linear; animation-iteration-count: infinite; opacity: 0.9; }
  @keyframes fall { 0% { transform: translate(0, 0) rotate(0deg) } 25% { transform: translate(calc(var(--dx) * 0.5), 250px) rotate(120deg) } 50% { transform: translate(calc(var(--dx) * 0.2), 500px) rotate(-60deg) } 75% { transform: translate(calc(var(--dx) * 0.8), 740px) rotate(150deg) } 100% { transform: translate(var(--dx), 990px) rotate(330deg) } }
  .br { animation: sway 9s ease-in-out infinite alternate; transform-origin: 1600px 0px; }
  .bl { animation: sway 11s ease-in-out infinite alternate; transform-origin: 0px 50px; }
  @keyframes sway { from { transform: rotate(-0.6deg) } to { transform: rotate(0.6deg) } }
  .sun { animation: glow 14s ease-in-out infinite alternate; }
  @keyframes glow { from { opacity: 0.7 } to { opacity: 1 } }
</style>
<defs>
  <linearGradient id="sky" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0" stop-color="#fbe9cf"/>
    <stop offset="0.55" stop-color="#f6d3a9"/>
    <stop offset="1" stop-color="#eebd8c"/>
  </linearGradient>
  <radialGradient id="sun" cx="0.5" cy="0.5" r="0.5">
    <stop offset="0" stop-color="#fff2c2" stop-opacity="0.9"/>
    <stop offset="1" stop-color="#fff2c2" stop-opacity="0"/>
  </radialGradient>
  <linearGradient id="haze" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0" stop-color="#fff4e0" stop-opacity="0"/>
    <stop offset="1" stop-color="#fff4e0" stop-opacity="0.5"/>
  </linearGradient>
  <path id="ml" d="M0 -20 L4 -11 L12 -14 L9 -4 L19 -3 L11 4 L15 12 L5 9 L3 20 L0 14 L-3 20 L-5 9 L-15 12 L-11 4 L-19 -3 L-9 -4 L-12 -14 L-4 -11 Z"/>
</defs>
<rect width="1600" height="900" fill="url(#sky)"/>
<circle class="sun" cx="420" cy="230" r="360" fill="url(#sun)"/>
<path d="M-10 920 L-10 640 L0 664.5 L40 671.5 L80 672.7 L120 669.2 L160 663.7 L200 659.1 L240 657.7 L280 659.9 L320 664.1 L360 667.3 L400 666.8 L440 660.8 L480 649.8 L520 636 L560 622.7 L600 613.3 L640 609.5 L680 610.9 L720 615.5 L760 620 L800 622 L840 620.3 L880 615.9 L920 611.4 L960 609.7 L1000 613.2 L1040 622.3 L1080 635.3 L1120 649.2 L1160 660.5 L1200 666.9 L1240 667.7 L1280 664.6 L1320 660.3 L1360 657.8 L1400 658.9 L1440 663.2 L1480 668.8 L1520 672.4 L1560 671.6 L1600 664.9 L1610 920 Z" fill="#e2a46a" opacity="0.75"/>
<path d="M-10 920 L-10 720 L0 731.5 L40 728.3 L80 727.5 L120 728.2 L160 729.4 L200 729.4 L240 727.2 L280 722.2 L320 714.7 L360 705.7 L400 697 L440 690.1 L480 686.3 L520 686.2 L560 689.3 L600 694.6 L640 700.6 L680 705.6 L720 708.7 L760 709.6 L800 708.6 L840 707.2 L880 706.6 L920 708.2 L960 712.7 L1000 720 L1040 729 L1080 738.3 L1120 746.2 L1160 751.2 L1200 752.7 L1240 750.8 L1280 746.5 L1320 741.2 L1360 736.5 L1400 733.6 L1440 732.9 L1480 734 L1520 735.9 L1560 737.1 L1600 736.2 L1610 920 Z" fill="#cf7d46" opacity="0.8"/>
<path d="M-10 920 L-10 800 L0 791.2 L40 785 L80 778 L120 773.2 L160 773.3 L200 778.6 L240 787.3 L280 796.1 L320 802 L360 803.9 L400 803.1 L440 802.2 L480 804 L520 809.4 L560 817.3 L600 824.5 L640 827.9 L680 826 L720 819.4 L760 810.9 L800 803.9 L840 800.4 L880 800.4 L920 801.6 L960 801.1 L1000 796.9 L1040 789.2 L1080 780.5 L1120 774 L1160 772.3 L1200 775.9 L1240 783 L1280 790.3 L1320 795 L1360 796.1 L1400 795 L1440 794.3 L1480 796.7 L1520 803.3 L1560 812.5 L1600 821.3 L1610 920 Z" fill="#b25a31" opacity="0.85"/>
<rect y="640" width="1600" height="260" fill="url(#haze)"/>
<g class="br">
<path d="M1620 -20 C1480 30 1380 80 1250 110 C1130 140 1040 140 940 185" fill="none" stroke="#4a3228" stroke-width="15" stroke-linecap="round"/>
<path d="M1620 -20 C1480 30 1380 80 1250 110 C1130 140 1040 140 940 185" fill="none" stroke="#6b4a3a" stroke-width="5" stroke-linecap="round" opacity="0.5"/>
<path d="M1280.1 102.6 L1335.6 136.2" stroke="#5a3d2f" stroke-width="3.5" stroke-linecap="round" fill="none"/>
<path d="M1082.6 142.8 L1039.2 238.3" stroke="#5a3d2f" stroke-width="3.5" stroke-linecap="round" fill="none"/>
<path d="M1357.5 79.2 L1275.4 83.1" stroke="#5a3d2f" stroke-width="3.5" stroke-linecap="round" fill="none"/>
<path d="M1117.2 136.5 L1034.3 153.4" stroke="#5a3d2f" stroke-width="3.5" stroke-linecap="round" fill="none"/>
<path d="M1409 60.9 L1439 69.2" stroke="#5a3d2f" stroke-width="3.5" stroke-linecap="round" fill="none"/>
<path d="M1110.4 137.7 L1134 164.4" stroke="#5a3d2f" stroke-width="3.5" stroke-linecap="round" fill="none"/>
<path d="M1328.8 88.6 L1356.4 184.3" stroke="#5a3d2f" stroke-width="3.5" stroke-linecap="round" fill="none"/>
<path d="M1144.2 131.8 L1104.4 185.5" stroke="#5a3d2f" stroke-width="3.5" stroke-linecap="round" fill="none"/>
<path d="M1567.5 -0.6 L1583.3 40.2" stroke="#5a3d2f" stroke-width="3.5" stroke-linecap="round" fill="none"/>
<path d="M1019.1 157 L1054.1 229.5" stroke="#5a3d2f" stroke-width="3.5" stroke-linecap="round" fill="none"/>
<path d="M1475.7 35.2 L1574.1 59" stroke="#5a3d2f" stroke-width="3.5" stroke-linecap="round" fill="none"/>
<path d="M958.4 177.2 L967.8 262.7" stroke="#5a3d2f" stroke-width="3.5" stroke-linecap="round" fill="none"/>
<path d="M1400.1 64.2 L1346.1 140.3" stroke="#5a3d2f" stroke-width="3.5" stroke-linecap="round" fill="none"/>
<path d="M1162.1 128.6 L1151.4 164.9" stroke="#5a3d2f" stroke-width="3.5" stroke-linecap="round" fill="none"/>
<path d="M1539.8 10 L1593.4 61.5" stroke="#5a3d2f" stroke-width="3.5" stroke-linecap="round" fill="none"/>
<path d="M1189.9 123.3 L1219.7 182.6" stroke="#5a3d2f" stroke-width="3.5" stroke-linecap="round" fill="none"/>
<path d="M1367.6 75.8 L1398.2 102.8" stroke="#5a3d2f" stroke-width="3.5" stroke-linecap="round" fill="none"/>
<path d="M1015.8 158 L958.4 223.2" stroke="#5a3d2f" stroke-width="3.5" stroke-linecap="round" fill="none"/>
<path d="M1508.2 22.4 L1590 88.8" stroke="#5a3d2f" stroke-width="3.5" stroke-linecap="round" fill="none"/>
<path d="M1095.3 140.4 L1105.8 244.3" stroke="#5a3d2f" stroke-width="3.5" stroke-linecap="round" fill="none"/>
<path d="M1385.8 69.4 L1434.3 122.3" stroke="#5a3d2f" stroke-width="3.5" stroke-linecap="round" fill="none"/>
<path d="M1112.7 137.3 L1089.7 162.4" stroke="#5a3d2f" stroke-width="3.5" stroke-linecap="round" fill="none"/>
<use href="#ml" fill="" transform="translate(1312.9 119.8) scale(1.4) rotate(286)"/>
<use href="#ml" fill="" transform="translate(1357.5 147.5) scale(0.9) rotate(241)"/>
<use href="#ml" fill="#e0642a" transform="translate(1342.5 146.2) scale(1.2) rotate(322)"/>
<use href="#ml" fill="#f2c14e" transform="translate(1035.9 223.5) scale(1.6) rotate(266)"/>
<use href="#ml" fill="#a8402a" transform="translate(1045.3 260) scale(0.9) rotate(17)"/>
<use href="#ml" fill="#e0642a" transform="translate(1047.5 252.7) scale(1.5) rotate(168)"/>
<use href="#ml" fill="#d9532b" transform="translate(1279.6 72.3) scale(1.1) rotate(308)"/>
<use href="#ml" fill="#e0642a" transform="translate(1258 60.8) scale(1.6) rotate(339)"/>
<use href="#ml" fill="#d9532b" transform="translate(1262.7 56.2) scale(1.4) rotate(54)"/>
<use href="#ml" fill="#d9532b" transform="translate(1039.5 150) scale(1.5) rotate(23)"/>
<use href="#ml" fill="#d9532b" transform="translate(1061.3 168) scale(0.9) rotate(184)"/>
<use href="#ml" fill="#eb9a2e" transform="translate(1011.8 133.1) scale(1.3) rotate(245)"/>
<use href="#ml" fill="#a8402a" transform="translate(1446.5 74.6) scale(1.2) rotate(220)"/>
<use href="#ml" fill="#c8382b" transform="translate(1444.6 77.2) scale(1.4) rotate(285)"/>
<use href="#ml" fill="" transform="translate(1469.8 67.6) scale(1.7) rotate(131)"/>
<use href="#ml" fill="#e0642a" transform="translate(1163.1 164.2) scale(1.2) rotate(160)"/>
<use href="#ml" fill="#d9532b" transform="translate(1148.6 177.6) scale(1) rotate(254)"/>
<use href="#ml" fill="#e0642a" transform="translate(1141.1 172) scale(1.4) rotate(46)"/>
<use href="#ml" fill="#f2c14e" transform="translate(1337.7 209.7) scale(1.5) rotate(56)"/>
<use href="#ml" fill="#c8382b" transform="translate(1334 161.9) scale(1.5) rotate(48)"/>
<use href="#ml" fill="#f2c14e" transform="translate(1387.7 201.5) scale(0.9) rotate(54)"/>
<use href="#ml" fill="#d9532b" transform="translate(1112.1 167) scale(1.3) rotate(267)"/>
<use href="#ml" fill="#e0642a" transform="translate(1101.3 206.1) scale(1.5) rotate(43)"/>
<use href="#ml" fill="#f2c14e" transform="translate(1098.1 202.8) scale(1) rotate(61)"/>
<use href="#ml" fill="#eb9a2e" transform="translate(1567.7 54.4) scale(0.9) rotate(80)"/>
<use href="#ml" fill="#d9532b" transform="translate(1573.5 44.3) scale(1.4) rotate(87)"/>
<use href="#ml" fill="#f2c14e" transform="translate(1596 37.4) scale(0.9) rotate(112)"/>
<use href="#ml" fill="#eb9a2e" transform="translate(1044.4 229) scale(0.9) rotate(122)"/>
<use href="#ml" fill="#eb9a2e" transform="translate(1060.3 205.3) scale(1.6) rotate(115)"/>
<use href="#ml" fill="" transform="translate(1072.6 244.7) scale(1) rotate(1)"/>
<use href="#ml" fill="#e0642a" transform="translate(1565.9 52.9) scale(1.5) rotate(53)"/>
<use href="#ml" fill="#a8402a" transform="translate(1551.2 43.3) scale(1.7) rotate(54)"/>
<use href="#ml" fill="" transform="translate(1543.5 37) scale(1.1) rotate(196)"/>
<use href="#ml" fill="#e0642a" transform="translate(938.3 286.8) scale(1.2) rotate(176)"/>
<use href="#ml" fill="#f2c14e" transform="translate(961.4 237.4) scale(1) rotate(336)"/>
<use href="#ml" fill="#eb9a2e" transform="translate(978.1 272.6) scale(1.2) rotate(258)"/>
<use href="#ml" fill="#e0642a" transform="translate(1368.3 124.5) scale(1.1) rotate(331)"/>
<use href="#ml" fill="#e0642a" transform="translate(1332 136.9) scale(1.2) rotate(316)"/>
<use href="#ml" fill="#e0642a" transform="translate(1379.9 124.8) scale(1.5) rotate(110)"/>
<use href="#ml" fill="#e0642a" transform="translate(1145.3 186.6) scale(1) rotate(146)"/>
<use href="#ml" fill="#f2c14e" transform="translate(1179.9 150.6) scale(1.5) rotate(121)"/>
<use href="#ml" fill="#e0642a" transform="translate(1128.9 156.5) scale(1.5) rotate(269)"/>
<use href="#ml" fill="#c8382b" transform="translate(1584.5 42.8) scale(1.5) rotate(64)"/>
<use href="#ml" fill="#a8402a" transform="translate(1612.4 63.2) scale(1.5) rotate(99)"/>
<use href="#ml" fill="#f2c14e" transform="translate(1605.9 52.7) scale(1.2) rotate(83)"/>
<use href="#ml" fill="#a8402a" transform="translate(1224.3 177.7) scale(0.9) rotate(151)"/>
<use href="#ml" fill="#f2c14e" transform="translate(1210.9 208) scale(1.7) rotate(76)"/>
<use href="#ml" fill="#e0642a" transform="translate(1212.2 168) scale(0.8) rotate(210)"/>
<use href="#ml" fill="#d9532b" transform="translate(1383 88.2) scale(1.6) rotate(163)"/>
<use href="#ml" fill="" transform="translate(1383.3 110) scale(1.3) rotate(25)"/>
<use href="#ml" fill="#f2c14e" transform="translate(1364.8 127.4) scale(1.6) rotate(235)"/>
<use href="#ml" fill="#e0642a" transform="translate(954.7 248.3) scale(1.2) rotate(159)"/>
<use href="#ml" fill="#c8382b" transform="translate(929.1 226.6) scale(1.7) rotate(154)"/>
<use href="#ml" fill="#eb9a2e" transform="translate(971.9 201) scale(0.9) rotate(275)"/>
<use href="#ml" fill="#d9532b" transform="translate(1597.8 67.5) scale(1.3) rotate(295)"/>
<use href="#ml" fill="#eb9a2e" transform="translate(1565.7 78) scale(1.7) rotate(341)"/>
<use href="#ml" fill="" transform="translate(1597.4 102) scale(1.4) rotate(100)"/>
<use href="#ml" fill="#d9532b" transform="translate(1116.5 263) scale(0.8) rotate(274)"/>
<use href="#ml" fill="" transform="translate(1132 264.1) scale(1.3) rotate(300)"/>
<use href="#ml" fill="#d9532b" transform="translate(1129.7 231) scale(1.3) rotate(231)"/>
<use href="#ml" fill="#e0642a" transform="translate(1411.6 129.4) scale(1) rotate(118)"/>
<use href="#ml" fill="#a8402a" transform="translate(1416.9 102.3) scale(1.1) rotate(142)"/>
<use href="#ml" fill="#f2c14e" transform="translate(1425.6 117.6) scale(0.9) rotate(245)"/>
<use href="#ml" fill="" transform="translate(1119.4 181.7) scale(1) rotate(238)"/>
<use href="#ml" fill="#a8402a" transform="translate(1068.4 152.5) scale(1.1) rotate(45)"/>
<use href="#ml" fill="#e0642a" transform="translate(1101.1 188) scale(1.7) rotate(13)"/>
</g>
<g class="bl">
<path d="M-20 50 C120 60 220 120 340 115 C420 110 470 140 540 170" fill="none" stroke="#4a3228" stroke-width="15" stroke-linecap="round"/>
<path d="M-20 50 C120 60 220 120 340 115 C420 110 470 140 540 170" fill="none" stroke="#6b4a3a" stroke-width="5" stroke-linecap="round" opacity="0.5"/>
<path d="M141.7 81.1 L117.9 155.9" stroke="#5a3d2f" stroke-width="3.5" stroke-linecap="round" fill="none"/>
<path d="M483.2 144.9 L468.4 195.3" stroke="#5a3d2f" stroke-width="3.5" stroke-linecap="round" fill="none"/>
<path d="M313.3 115.1 L282.7 160.3" stroke="#5a3d2f" stroke-width="3.5" stroke-linecap="round" fill="none"/>
<path d="M512.5 157.9 L578.9 222.8" stroke="#5a3d2f" stroke-width="3.5" stroke-linecap="round" fill="none"/>
<path d="M236.1 105.1 L187.4 160.6" stroke="#5a3d2f" stroke-width="3.5" stroke-linecap="round" fill="none"/>
<path d="M461.7 136 L560.7 143.6" stroke="#5a3d2f" stroke-width="3.5" stroke-linecap="round" fill="none"/>
<path d="M264.2 110.3 L287.2 171.6" stroke="#5a3d2f" stroke-width="3.5" stroke-linecap="round" fill="none"/>
<path d="M473.9 140.9 L447 240.5" stroke="#5a3d2f" stroke-width="3.5" stroke-linecap="round" fill="none"/>
<path d="M42.2 57.8 L107.5 139.5" stroke="#5a3d2f" stroke-width="3.5" stroke-linecap="round" fill="none"/>
<path d="M537.3 168.8 L539.4 262.5" stroke="#5a3d2f" stroke-width="3.5" stroke-linecap="round" fill="none"/>
<path d="M298.2 114.2 L211 170.1" stroke="#5a3d2f" stroke-width="3.5" stroke-linecap="round" fill="none"/>
<path d="M500 152.3 L487.4 252.8" stroke="#5a3d2f" stroke-width="3.5" stroke-linecap="round" fill="none"/>
<path d="M211.2 99.5 L293.6 138.2" stroke="#5a3d2f" stroke-width="3.5" stroke-linecap="round" fill="none"/>
<path d="M373.9 115 L313.1 135.4" stroke="#5a3d2f" stroke-width="3.5" stroke-linecap="round" fill="none"/>
<use href="#ml" fill="#a8402a" transform="translate(136.2 146.2) scale(1.4) rotate(276)"/>
<use href="#ml" fill="#f2c14e" transform="translate(124.7 154.8) scale(1) rotate(78)"/>
<use href="#ml" fill="#c8382b" transform="translate(140.8 137.2) scale(1.5) rotate(66)"/>
<use href="#ml" fill="#c8382b" transform="translate(454.6 196.1) scale(1.4) rotate(350)"/>
<use href="#ml" fill="#f2c14e" transform="translate(489.9 174.8) scale(1.2) rotate(228)"/>
<use href="#ml" fill="#eb9a2e" transform="translate(483.2 186.6) scale(1) rotate(260)"/>
<use href="#ml" fill="#e0642a" transform="translate(272 141.5) scale(1) rotate(224)"/>
<use href="#ml" fill="" transform="translate(302.8 186.7) scale(1.6) rotate(181)"/>
<use href="#ml" fill="#eb9a2e" transform="translate(315 159.2) scale(1.7) rotate(96)"/>
<use href="#ml" fill="#a8402a" transform="translate(609.5 238.7) scale(1.1) rotate(323)"/>
<use href="#ml" fill="#d9532b" transform="translate(556.3 248.3) scale(0.8) rotate(166)"/>
<use href="#ml" fill="#f2c14e" transform="translate(554.5 201.1) scale(1.5) rotate(289)"/>
<use href="#ml" fill="" transform="translate(156.5 170.4) scale(1.1) rotate(318)"/>
<use href="#ml" fill="#e0642a" transform="translate(160.1 149.7) scale(0.9) rotate(175)"/>
<use href="#ml" fill="#a8402a" transform="translate(185.6 157.5) scale(0.8) rotate(145)"/>
<use href="#ml" fill="#a8402a" transform="translate(595.2 140.9) scale(1.3) rotate(17)"/>
<use href="#ml" fill="#eb9a2e" transform="translate(534.9 134) scale(0.9) rotate(269)"/>
<use href="#ml" fill="#d9532b" transform="translate(538.7 124.9) scale(1.7) rotate(92)"/>
<use href="#ml" fill="#a8402a" transform="translate(283.9 147.2) scale(1.5) rotate(74)"/>
<use href="#ml" fill="#c8382b" transform="translate(285.7 182.1) scale(1.5) rotate(208)"/>
<use href="#ml" fill="#d9532b" transform="translate(312.6 185.3) scale(1.3) rotate(66)"/>
<use href="#ml" fill="#f2c14e" transform="translate(414 213.6) scale(0.8) rotate(73)"/>
<use href="#ml" fill="#eb9a2e" transform="translate(474.1 232.9) scale(1.6) rotate(352)"/>
<use href="#ml" fill="#a8402a" transform="translate(426.2 225) scale(1.3) rotate(82)"/>
<use href="#ml" fill="#eb9a2e" transform="translate(77.5 155.4) scale(1.6) rotate(14)"/>
<use href="#ml" fill="" transform="translate(132 142.4) scale(1.1) rotate(87)"/>
<use href="#ml" fill="#f2c14e" transform="translate(135 112.1) scale(1.1) rotate(104)"/>
<use href="#ml" fill="#d9532b" transform="translate(534 248.8) scale(1.2) rotate(327)"/>
<use href="#ml" fill="#eb9a2e" transform="translate(552.5 262.5) scale(1.1) rotate(218)"/>
<use href="#ml" fill="#c8382b" transform="translate(537.4 270) scale(0.9) rotate(127)"/>
<use href="#ml" fill="#a8402a" transform="translate(180 197.1) scale(1.4) rotate(61)"/>
<use href="#ml" fill="" transform="translate(193.2 178.1) scale(1.1) rotate(4)"/>
<use href="#ml" fill="#f2c14e" transform="translate(244.8 192.9) scale(1.4) rotate(200)"/>
<use href="#ml" fill="#f2c14e" transform="translate(482.8 234.3) scale(1.7) rotate(61)"/>
<use href="#ml" fill="#a8402a" transform="translate(521.9 238.7) scale(1) rotate(302)"/>
<use href="#ml" fill="#a8402a" transform="translate(511.7 255) scale(1.7) rotate(167)"/>
<use href="#ml" fill="#eb9a2e" transform="translate(268.4 124.7) scale(1.3) rotate(91)"/>
<use href="#ml" fill="#a8402a" transform="translate(292.2 147.9) scale(1.3) rotate(137)"/>
<use href="#ml" fill="#a8402a" transform="translate(306.7 161) scale(0.9) rotate(127)"/>
<use href="#ml" fill="" transform="translate(346.2 156.7) scale(1.2) rotate(238)"/>
<use href="#ml" fill="#f2c14e" transform="translate(309.8 130.4) scale(0.8) rotate(186)"/>
<use href="#ml" fill="#a8402a" transform="translate(279 136.5) scale(1) rotate(15)"/>
</g>
<g class="p" style="--dx:-69.6px;animation-duration:18.8s;animation-delay:-5.4s"><use href="#ml" fill="#c8382b" transform="translate(1121.2 -40) scale(1)"/></g>
<g class="p" style="--dx:51.6px;animation-duration:18.9s;animation-delay:-0.2s"><use href="#ml" fill="#e0642a" transform="translate(1409.1 -40) scale(0.8)"/></g>
<g class="p" style="--dx:18.1px;animation-duration:23.2s;animation-delay:-10.3s"><use href="#ml" fill="#eb9a2e" transform="translate(878.1 -40) scale(0.9)"/></g>
<g class="p" style="--dx:63px;animation-duration:14.1s;animation-delay:-3.8s"><use href="#ml" fill="#f2c14e" transform="translate(1435.3 -40) scale(1.1)"/></g>
<g class="p" style="--dx:-78px;animation-duration:18.8s;animation-delay:-6.1s"><use href="#ml" fill="#a8402a" transform="translate(104.2 -40) scale(0.7)"/></g>
<g class="p" style="--dx:23.1px;animation-duration:23.6s;animation-delay:-4.8s"><use href="#ml" fill="#d9532b" transform="translate(1324.1 -40) scale(0.7)"/></g>
<g class="p" style="--dx:6.4px;animation-duration:20.5s;animation-delay:-5.9s"><use href="#ml" fill="#c8382b" transform="translate(1346.7 -40) scale(0.8)"/></g>
<g class="p" style="--dx:27.6px;animation-duration:22.6s;animation-delay:-6.1s"><use href="#ml" fill="#e0642a" transform="translate(1094.7 -40) scale(0.6)"/></g>
<g class="p" style="--dx:-14.8px;animation-duration:18.4s;animation-delay:-0.9s"><use href="#ml" fill="#eb9a2e" transform="translate(812.9 -40) scale(0.8)"/></g>
<g class="p" style="--dx:35.3px;animation-duration:20s;animation-delay:-0.5s"><use href="#ml" fill="#f2c14e" transform="translate(1478.8 -40) scale(0.8)"/></g>
<g class="p" style="--dx:43.7px;animation-duration:23.5s;animation-delay:-9.1s"><use href="#ml" fill="#a8402a" transform="translate(345.6 -40) scale(0.9)"/></g>
<g class="p" style="--dx:-26.1px;animation-duration:15.5s;animation-delay:-2.1s"><use href="#ml" fill="#d9532b" transform="translate(651.1 -40) scale(0.6)"/></g>
<g class="p" style="--dx:90.9px;animation-duration:16.9s;animation-delay:-8.5s"><use href="#ml" fill="#c8382b" transform="translate(1072 -40) scale(0.9)"/></g>
<g class="p" style="--dx:103.8px;animation-duration:20.3s;animation-delay:-20.2s"><use href="#ml" fill="#e0642a" transform="translate(156.9 -40) scale(1.1)"/></g>
<g class="p" style="--dx:-79.4px;animation-duration:21.5s;animation-delay:-15.9s"><use href="#ml" fill="#eb9a2e" transform="translate(1213.9 -40) scale(1.2)"/></g>
<g class="p" style="--dx:-63px;animation-duration:18.3s;animation-delay:-17.4s"><use href="#ml" fill="#f2c14e" transform="translate(1023.8 -40) scale(1.1)"/></g>
<g class="p" style="--dx:-33.2px;animation-duration:23.4s;animation-delay:-15.2s"><use href="#ml" fill="#a8402a" transform="translate(585.8 -40) scale(0.9)"/></g>
<g class="p" style="--dx:-106.1px;animation-duration:16.6s;animation-delay:-11.7s"><use href="#ml" fill="#d9532b" transform="translate(578 -40) scale(0.9)"/></g>
<g class="p" style="--dx:117.4px;animation-duration:21.2s;animation-delay:-19.8s"><use href="#ml" fill="#c8382b" transform="translate(820.5 -40) scale(1.2)"/></g>
<g class="p" style="--dx:-36.3px;animation-duration:23.4s;animation-delay:-6.9s"><use href="#ml" fill="#e0642a" transform="translate(48.5 -40) scale(0.6)"/></g>
</svg>`,
}
