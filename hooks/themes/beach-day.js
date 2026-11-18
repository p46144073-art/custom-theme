import { makeColors } from '../make-colors.js'

const { theme, problems } = makeColors({ label: 'beach-day', only: 'light', roles: { accent: '#1a8fb5', danger: '#b3392f', success: '#3f7d4c', warning: '#a86f14', pro: '#6d4f94' }, light: { gray: { anchors: { 'surface-0': '#eae3d2', 'surface-1': '#f2ecdd', 'surface-2': '#f9f5ea', 'surface-3': '#f9f5ea', 'text-primary': '#1f2d36', 'text-secondary': '#35495a', 'text-muted': '#4f616d' } } } })

export default {
  id: 'beach-day',
  name: '海浪沙灘',
  description: '天藍與沙色、白天海浪輕輕湧上沙灘',
  mode: 'light',
  colors: theme,
  problems,
  glass: { blur: 3, tint: '#f9f5ea', opacity: 0.4 },
  scene: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1600 900" preserveAspectRatio="xMidYMid slice">
<style>
  .cl { fill: #ffffff; opacity: 0.8; animation: cloud 90s ease-in-out infinite alternate; }
  @keyframes cloud { from { transform: translateX(-80px) } to { transform: translateX(120px) } }
  .sp { fill: #ffffff; opacity: 0; animation-name: glint; animation-timing-function: ease-in-out; animation-iteration-count: infinite; }
  @keyframes glint { 0%, 100% { opacity: 0 } 50% { opacity: 0.85 } }
  .wv1 { animation: wash 9s ease-in-out infinite alternate; }
  .wv2 { animation: wash 9s ease-in-out -3s infinite alternate; }
  .wv3 { animation: wash 9s ease-in-out -6s infinite alternate; }
  @keyframes wash { from { transform: translateY(-18px) } to { transform: translateY(52px) } }
  .fr { animation: fsway 8s ease-in-out infinite alternate; transform-origin: 1590px -20px; }
  @keyframes fsway { from { transform: rotate(-1.5deg) } to { transform: rotate(1.5deg) } }
  .gull { animation: fly 70s linear infinite; }
  @keyframes fly { from { transform: translate(-200px, 0) } to { transform: translate(1900px, -40px) } }
  .sun { animation: glow 14s ease-in-out infinite alternate; }
  @keyframes glow { from { opacity: 0.75 } to { opacity: 1 } }
</style>
<defs>
  <linearGradient id="sky" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0" stop-color="#8fd3f4"/>
    <stop offset="1" stop-color="#e3f5fb"/>
  </linearGradient>
  <linearGradient id="sea" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0" stop-color="#2f9fc4"/>
    <stop offset="1" stop-color="#5cc7d6"/>
  </linearGradient>
  <linearGradient id="sand" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0" stop-color="#e9cf9c"/>
    <stop offset="1" stop-color="#f4e3bb"/>
  </linearGradient>
  <radialGradient id="sun" cx="0.5" cy="0.5" r="0.5">
    <stop offset="0" stop-color="#fffbe0" stop-opacity="0.95"/>
    <stop offset="1" stop-color="#fffbe0" stop-opacity="0"/>
  </radialGradient>
</defs>
<rect width="1600" height="440" fill="url(#sky)"/>
<circle class="sun" cx="260" cy="90" r="260" fill="url(#sun)"/>
<g class="cl"><g><ellipse cx="260" cy="150" rx="150" ry="27"/><ellipse cx="215" cy="136" rx="75" ry="30"/><ellipse cx="297.5" cy="140" rx="63" ry="25.5"/></g><g><ellipse cx="1000" cy="110" rx="190" ry="34.2"/><ellipse cx="943" cy="96" rx="95" ry="38"/><ellipse cx="1047.5" cy="100" rx="79.8" ry="32.3"/></g><g><ellipse cx="1350" cy="230" rx="130" ry="23.4"/><ellipse cx="1311" cy="216" rx="65" ry="26"/><ellipse cx="1382.5" cy="220" rx="54.6" ry="22.1"/></g><g><ellipse cx="620" cy="260" rx="110" ry="19.8"/><ellipse cx="587" cy="246" rx="55" ry="22"/><ellipse cx="647.5" cy="250" rx="46.2" ry="18.7"/></g></g>
<rect y="400" width="1600" height="300" fill="url(#sea)"/>
<rect class="sp" x="262.3" y="460.6" width="24.1" height="2.4" rx="1.2" style="animation-duration:5.1s;animation-delay:-1.8s"/>
<rect class="sp" x="63.2" y="502.2" width="18.9" height="2.4" rx="1.2" style="animation-duration:3.7s;animation-delay:-2.2s"/>
<rect class="sp" x="1285.8" y="518.9" width="34.7" height="2.4" rx="1.2" style="animation-duration:5.5s;animation-delay:-3.7s"/>
<rect class="sp" x="1348.2" y="541.5" width="20.5" height="2.4" rx="1.2" style="animation-duration:3.9s;animation-delay:-0.1s"/>
<rect class="sp" x="356.7" y="548.5" width="17.9" height="2.4" rx="1.2" style="animation-duration:6.2s;animation-delay:-3.3s"/>
<rect class="sp" x="1253.2" y="497.6" width="39.7" height="2.4" rx="1.2" style="animation-duration:5.9s;animation-delay:-3.5s"/>
<rect class="sp" x="879.1" y="545.2" width="43.3" height="2.4" rx="1.2" style="animation-duration:4.1s;animation-delay:-1.6s"/>
<rect class="sp" x="704.4" y="495.3" width="33.7" height="2.4" rx="1.2" style="animation-duration:6.1s;animation-delay:-2.1s"/>
<rect class="sp" x="117.3" y="443.3" width="16.1" height="2.4" rx="1.2" style="animation-duration:3.4s;animation-delay:-3.3s"/>
<rect class="sp" x="253.8" y="538.7" width="29.3" height="2.4" rx="1.2" style="animation-duration:6.8s;animation-delay:-3.6s"/>
<rect class="sp" x="1007.3" y="521.3" width="38.8" height="2.4" rx="1.2" style="animation-duration:3.7s;animation-delay:-1.6s"/>
<rect class="sp" x="282.9" y="444.8" width="30.2" height="2.4" rx="1.2" style="animation-duration:6.9s;animation-delay:-3.9s"/>
<rect class="sp" x="762" y="519.4" width="27" height="2.4" rx="1.2" style="animation-duration:5.4s;animation-delay:-0.2s"/>
<rect class="sp" x="1350.4" y="521.9" width="26.5" height="2.4" rx="1.2" style="animation-duration:4s;animation-delay:-0.9s"/>
<rect class="sp" x="477.5" y="462.6" width="27.1" height="2.4" rx="1.2" style="animation-duration:6.5s;animation-delay:-6.3s"/>
<rect class="sp" x="179.3" y="540" width="15" height="2.4" rx="1.2" style="animation-duration:6.3s;animation-delay:-2.4s"/>
<rect class="sp" x="1403.4" y="436.5" width="41.3" height="2.4" rx="1.2" style="animation-duration:3.8s;animation-delay:-3.6s"/>
<rect class="sp" x="1262.3" y="446.1" width="38" height="2.4" rx="1.2" style="animation-duration:6.4s;animation-delay:-1.3s"/>
<rect class="sp" x="506.6" y="430.7" width="34.3" height="2.4" rx="1.2" style="animation-duration:3.8s;animation-delay:-3.3s"/>
<rect class="sp" x="525" y="511.5" width="28.1" height="2.4" rx="1.2" style="animation-duration:3.3s;animation-delay:-0.4s"/>
<rect class="sp" x="629" y="488.8" width="22.1" height="2.4" rx="1.2" style="animation-duration:5.8s;animation-delay:-1.4s"/>
<rect class="sp" x="572" y="468.7" width="42.2" height="2.4" rx="1.2" style="animation-duration:3.8s;animation-delay:-1.2s"/>
<rect class="sp" x="415.7" y="440.8" width="35.5" height="2.4" rx="1.2" style="animation-duration:5.4s;animation-delay:-3.7s"/>
<rect class="sp" x="676" y="530" width="21.1" height="2.4" rx="1.2" style="animation-duration:5.6s;animation-delay:-1.4s"/>
<rect class="sp" x="1135.1" y="546" width="31" height="2.4" rx="1.2" style="animation-duration:3.1s;animation-delay:-2.9s"/>
<rect class="sp" x="468.5" y="501.4" width="20.9" height="2.4" rx="1.2" style="animation-duration:3.1s;animation-delay:-2s"/>
<rect class="sp" x="693.2" y="483.8" width="43" height="2.4" rx="1.2" style="animation-duration:5.8s;animation-delay:-5.7s"/>
<rect class="sp" x="619" y="523.9" width="20.2" height="2.4" rx="1.2" style="animation-duration:6.8s;animation-delay:-4.1s"/>
<rect class="sp" x="746.5" y="453.2" width="31.6" height="2.4" rx="1.2" style="animation-duration:5.1s;animation-delay:-4.9s"/>
<rect class="sp" x="362.6" y="464.7" width="16.3" height="2.4" rx="1.2" style="animation-duration:5.1s;animation-delay:-2.2s"/>
<g class="gull"><path d="M300 200 q7 -10 14 0 q7 -10 14 0" fill="none" stroke="#55657a" stroke-width="2.4" stroke-linecap="round"/><path d="M360 230 q6 -8 12 0 q6 -8 12 0" fill="none" stroke="#55657a" stroke-width="2.2" stroke-linecap="round"/><path d="M250 250 q5 -7 10 0 q5 -7 10 0" fill="none" stroke="#55657a" stroke-width="2" stroke-linecap="round"/></g>
<rect y="560" width="1600" height="340" fill="url(#sand)"/>
<g class="wv1"><path d="M-60 430 L-60 537.7 L-30 542.4 L0 546.8 L30 549.9 L60 551.1 L90 550.7 L120 549.1 L150 547.2 L180 545.8 L210 545.4 L240 545.9 L270 546.7 L300 546.9 L330 545.9 L360 543.4 L390 539.4 L420 534.9 L450 530.7 L480 528 L510 527.1 L540 528.1 L570 530.4 L600 533.1 L630 535.3 L660 536.5 L690 536.7 L720 536.4 L750 536.3 L780 537.3 L810 539.7 L840 543.3 L870 547.4 L900 551.1 L930 553.4 L960 553.7 L990 552.2 L1020 549.2 L1050 545.7 L1080 542.8 L1110 540.9 L1140 540.2 L1170 540.2 L1200 540.3 L1230 539.6 L1260 537.6 L1290 534.6 L1320 531.1 L1350 528 L1380 526.3 L1410 526.5 L1440 528.6 L1470 532.2 L1500 536.3 L1530 539.8 L1560 542.2 L1590 543.2 L1620 543.2 L1650 542.9 L1660 430 Z" fill="#3aaecb"/><path d="M-60 537.7 L-30 542.4 L0 546.8 L30 549.9 L60 551.1 L90 550.7 L120 549.1 L150 547.2 L180 545.8 L210 545.4 L240 545.9 L270 546.7 L300 546.9 L330 545.9 L360 543.4 L390 539.4 L420 534.9 L450 530.7 L480 528 L510 527.1 L540 528.1 L570 530.4 L600 533.1 L630 535.3 L660 536.5 L690 536.7 L720 536.4 L750 536.3 L780 537.3 L810 539.7 L840 543.3 L870 547.4 L900 551.1 L930 553.4 L960 553.7 L990 552.2 L1020 549.2 L1050 545.7 L1080 542.8 L1110 540.9 L1140 540.2 L1170 540.2 L1200 540.3 L1230 539.6 L1260 537.6 L1290 534.6 L1320 531.1 L1350 528 L1380 526.3 L1410 526.5 L1440 528.6 L1470 532.2 L1500 536.3 L1530 539.8 L1560 542.2 L1590 543.2 L1620 543.2 L1650 542.9" fill="none" stroke="#ffffff" stroke-width="5" opacity="0.8"/></g>
<g class="wv2"><path d="M-60 430 L-60 623.1 L-30 620.2 L0 617.3 L30 615 L60 613.6 L90 613.2 L120 613.4 L150 613.6 L180 613.2 L210 611.7 L240 609 L270 605.2 L300 601 L330 597.2 L360 594.4 L390 593.3 L420 594 L450 596.4 L480 599.8 L510 603.5 L540 606.8 L570 609.2 L600 610.4 L630 610.7 L660 610.5 L690 610.6 L720 611.4 L750 613.2 L780 616.1 L810 619.6 L840 623 L870 625.5 L900 626.6 L930 625.8 L960 623.3 L990 619.5 L1020 615.2 L1050 611.1 L1080 607.9 L1110 606 L1140 605.2 L1170 605.4 L1200 605.7 L1230 605.7 L1260 604.9 L1290 603 L1320 600.5 L1350 597.8 L1380 595.6 L1410 594.6 L1440 595.4 L1470 597.8 L1500 601.7 L1530 606.4 L1560 611.1 L1590 614.9 L1620 617.5 L1650 618.6 L1660 430 Z" fill="#5fcbd8" opacity="0.92"/><path d="M-60 623.1 L-30 620.2 L0 617.3 L30 615 L60 613.6 L90 613.2 L120 613.4 L150 613.6 L180 613.2 L210 611.7 L240 609 L270 605.2 L300 601 L330 597.2 L360 594.4 L390 593.3 L420 594 L450 596.4 L480 599.8 L510 603.5 L540 606.8 L570 609.2 L600 610.4 L630 610.7 L660 610.5 L690 610.6 L720 611.4 L750 613.2 L780 616.1 L810 619.6 L840 623 L870 625.5 L900 626.6 L930 625.8 L960 623.3 L990 619.5 L1020 615.2 L1050 611.1 L1080 607.9 L1110 606 L1140 605.2 L1170 605.4 L1200 605.7 L1230 605.7 L1260 604.9 L1290 603 L1320 600.5 L1350 597.8 L1380 595.6 L1410 594.6 L1440 595.4 L1470 597.8 L1500 601.7 L1530 606.4 L1560 611.1 L1590 614.9 L1620 617.5 L1650 618.6" fill="none" stroke="#ffffff" stroke-width="6" opacity="0.85"/></g>
<g class="wv3"><path d="M-60 430 L-60 686.6 L-30 685.7 L0 683.8 L30 681.1 L60 678 L90 674.9 L120 672.5 L150 671.4 L180 671.8 L210 673.8 L240 677.3 L270 681.7 L300 686.5 L330 691 L360 694.6 L390 697 L420 698.1 L450 698.2 L480 697.7 L510 697 L540 696.8 L570 697.3 L600 698.6 L630 700.7 L660 703 L690 705.1 L720 706.4 L750 706.4 L780 704.9 L810 701.9 L840 697.6 L870 692.7 L900 687.7 L930 683.3 L960 680 L990 678.1 L1020 677.6 L1050 678.1 L1080 679.3 L1110 680.6 L1140 681.5 L1170 681.6 L1200 680.9 L1230 679.6 L1260 678.1 L1290 676.9 L1320 676.5 L1350 677.5 L1380 679.9 L1410 683.6 L1440 688.3 L1470 693.4 L1500 698.2 L1530 702.1 L1560 704.7 L1590 705.8 L1620 705.4 L1650 703.9 L1660 430 Z" fill="#a6e6e8" opacity="0.7"/><path d="M-60 686.6 L-30 685.7 L0 683.8 L30 681.1 L60 678 L90 674.9 L120 672.5 L150 671.4 L180 671.8 L210 673.8 L240 677.3 L270 681.7 L300 686.5 L330 691 L360 694.6 L390 697 L420 698.1 L450 698.2 L480 697.7 L510 697 L540 696.8 L570 697.3 L600 698.6 L630 700.7 L660 703 L690 705.1 L720 706.4 L750 706.4 L780 704.9 L810 701.9 L840 697.6 L870 692.7 L900 687.7 L930 683.3 L960 680 L990 678.1 L1020 677.6 L1050 678.1 L1080 679.3 L1110 680.6 L1140 681.5 L1170 681.6 L1200 680.9 L1230 679.6 L1260 678.1 L1290 676.9 L1320 676.5 L1350 677.5 L1380 679.9 L1410 683.6 L1440 688.3 L1470 693.4 L1500 698.2 L1530 702.1 L1560 704.7 L1590 705.8 L1620 705.4 L1650 703.9" fill="none" stroke="#ffffff" stroke-width="7" opacity="0.9"/></g>
<g class="fr"><g transform="translate(1590 -20) rotate(95)"><path d="M0 0 Q150 -34 330 50 Q160 8 0 0Z" fill="#3d9a5c"/><path d="M0 0 Q150 -20 300 38" fill="none" stroke="#2c7a46" stroke-width="3"/></g>
<g transform="translate(1590 -20) rotate(120)"><path d="M0 0 Q150 -34 330 50 Q160 8 0 0Z" fill="#3d9a5c"/><path d="M0 0 Q150 -20 300 38" fill="none" stroke="#2c7a46" stroke-width="3"/></g>
<g transform="translate(1590 -20) rotate(145)"><path d="M0 0 Q150 -34 330 50 Q160 8 0 0Z" fill="#3d9a5c"/><path d="M0 0 Q150 -20 300 38" fill="none" stroke="#2c7a46" stroke-width="3"/></g>
<g transform="translate(1590 -20) rotate(170)"><path d="M0 0 Q150 -34 330 50 Q160 8 0 0Z" fill="#3d9a5c"/><path d="M0 0 Q150 -20 300 38" fill="none" stroke="#2c7a46" stroke-width="3"/></g>
<g transform="translate(1590 -20) rotate(195)"><path d="M0 0 Q150 -34 330 50 Q160 8 0 0Z" fill="#3d9a5c"/><path d="M0 0 Q150 -20 300 38" fill="none" stroke="#2c7a46" stroke-width="3"/></g>
<g transform="translate(1590 -20) rotate(70)"><path d="M0 0 Q150 -34 330 50 Q160 8 0 0Z" fill="#3d9a5c"/><path d="M0 0 Q150 -20 300 38" fill="none" stroke="#2c7a46" stroke-width="3"/></g></g>
<g transform="translate(130 840) rotate(-12)"><path d="M0 -14 L4 -4 L14 -4 L6 3 L9 13 L0 7 L-9 13 L-6 3 L-14 -4 L-4 -4 Z" fill="#f3a38c" stroke="#d98066" stroke-width="1.5"/></g>
<g transform="translate(1460 850)"><path d="M-18 0 a18 16 0 0 1 36 0 Z" fill="#f6dcc8" stroke="#d9b49a" stroke-width="1.5"/><path d="M0 0 V-16 M-9 0 L-8 -13 M9 0 L8 -13" stroke="#d9b49a" stroke-width="1.2"/></g>
</svg>`,
}
