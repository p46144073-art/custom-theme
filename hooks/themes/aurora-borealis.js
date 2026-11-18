import { makeColors } from '../make-colors.js'

const { theme, problems } = makeColors({ label: 'aurora-borealis', only: 'dark', roles: { accent: '#4fd6a8', danger: '#e5645e', success: '#5cc48a', warning: '#d9a64a', pro: '#a98ae8' }, dark: { gray: { anchors: { 'surface-0': '#0a1018', 'surface-1': '#101826', 'surface-2': '#152033', 'surface-3': '#182438', 'text-primary': '#e8f1f5', 'text-secondary': '#b7c6d0', 'text-muted': '#93a5b3' } } } })

export default {
  id: 'aurora-borealis',
  name: '極光',
  description: '極夜藍、綠紫色光幕緩慢擺動、林線剪影',
  mode: 'dark',
  colors: theme,
  problems,
  glass: { blur: 4, tint: '#0a1018', opacity: 0.3 },
  scene: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1600 900" preserveAspectRatio="xMidYMid slice">
<style>
  .t { fill: #f2f7ff; animation-name: tw; animation-timing-function: ease-in-out; animation-iteration-count: infinite; }
  @keyframes tw { 0%, 100% { opacity: 0.2 } 50% { opacity: 1 } }
  .rb { opacity: var(--o); animation-name: sway; animation-timing-function: ease-in-out; animation-iteration-count: infinite; animation-direction: alternate; }
  @keyframes sway { from { transform: translateX(-70px) scaleY(0.9); opacity: calc(var(--o) * 0.55) } to { transform: translateX(70px) scaleY(1.08); opacity: var(--o) } }
  .ry { opacity: 0.1; animation-name: shimmer; animation-timing-function: ease-in-out; animation-iteration-count: infinite; animation-direction: alternate; }
  @keyframes shimmer { from { opacity: 0.05 } to { opacity: 0.4 } }
</style>
<defs>
  <linearGradient id="sky" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0" stop-color="#040811"/>
    <stop offset="0.7" stop-color="#0b1626"/>
    <stop offset="1" stop-color="#12233a"/>
  </linearGradient>
  <linearGradient id="ag" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0" stop-color="#3dffa5" stop-opacity="0"/>
    <stop offset="0.35" stop-color="#3dffa5" stop-opacity="0.5"/>
    <stop offset="0.7" stop-color="#2fd0c0" stop-opacity="0.22"/>
    <stop offset="1" stop-color="#2fd0c0" stop-opacity="0"/>
  </linearGradient>
  <linearGradient id="at" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0" stop-color="#35d4e8" stop-opacity="0"/>
    <stop offset="0.4" stop-color="#35d4e8" stop-opacity="0.38"/>
    <stop offset="1" stop-color="#4a7bff" stop-opacity="0"/>
  </linearGradient>
  <linearGradient id="ap" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0" stop-color="#b36bff" stop-opacity="0"/>
    <stop offset="0.45" stop-color="#b36bff" stop-opacity="0.34"/>
    <stop offset="1" stop-color="#ff5fc8" stop-opacity="0"/>
  </linearGradient>
  <linearGradient id="ar" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0" stop-color="#7dffc4" stop-opacity="0"/>
    <stop offset="0.3" stop-color="#7dffc4" stop-opacity="0.9"/>
    <stop offset="1" stop-color="#7dffc4" stop-opacity="0"/>
  </linearGradient>
</defs>
<rect width="1600" height="900" fill="url(#sky)"/>
<circle class="t" cx="541.4" cy="182" r="0.9" style="animation-duration:4.4s;animation-delay:-2s"/>
<circle cx="1485.4" cy="93.6" r="1.6" fill="#e6f0ff" opacity="0.6"/>
<circle cx="187.9" cy="624.4" r="1" fill="#e6f0ff" opacity="0.4"/>
<circle class="t" cx="113.3" cy="308.5" r="0.8" style="animation-duration:5.4s;animation-delay:-0.5s"/>
<circle cx="1300.1" cy="160.4" r="1.1" fill="#e6f0ff" opacity="0.4"/>
<circle cx="1339.1" cy="498.8" r="0.8" fill="#e6f0ff" opacity="0.6"/>
<circle class="t" cx="372.5" cy="502.8" r="1.5" style="animation-duration:2.8s;animation-delay:-0.1s"/>
<circle cx="1232.6" cy="197" r="0.7" fill="#e6f0ff" opacity="0.5"/>
<circle cx="1567.4" cy="110.2" r="1.4" fill="#e6f0ff" opacity="0.4"/>
<circle class="t" cx="1274.4" cy="219.9" r="0.7" style="animation-duration:5.4s;animation-delay:-4.6s"/>
<circle cx="869.2" cy="126.7" r="0.6" fill="#e6f0ff" opacity="0.6"/>
<circle cx="1016.5" cy="564.6" r="1.6" fill="#e6f0ff" opacity="0.7"/>
<circle class="t" cx="405.8" cy="324.2" r="0.8" style="animation-duration:3.3s;animation-delay:-1.5s"/>
<circle cx="773.8" cy="278.7" r="1.3" fill="#e6f0ff" opacity="0.6"/>
<circle cx="577" cy="14.5" r="1.1" fill="#e6f0ff" opacity="0.4"/>
<circle class="t" cx="328.3" cy="40.4" r="1.6" style="animation-duration:4.5s;animation-delay:-2.3s"/>
<circle cx="1569.3" cy="112.4" r="1.5" fill="#e6f0ff" opacity="0.4"/>
<circle cx="1451.2" cy="240.7" r="0.7" fill="#e6f0ff" opacity="0.7"/>
<circle class="t" cx="377.7" cy="634.9" r="1.3" style="animation-duration:4.6s;animation-delay:-0.7s"/>
<circle cx="73.2" cy="74.8" r="0.7" fill="#e6f0ff" opacity="0.6"/>
<circle cx="1281.9" cy="587.4" r="0.7" fill="#e6f0ff" opacity="0.6"/>
<circle class="t" cx="1101.7" cy="226" r="1.1" style="animation-duration:2.8s;animation-delay:-2.8s"/>
<circle cx="131.8" cy="314.5" r="1.4" fill="#e6f0ff" opacity="0.5"/>
<circle cx="215.8" cy="52.6" r="1.5" fill="#e6f0ff" opacity="0.4"/>
<circle class="t" cx="1442.1" cy="521.8" r="0.7" style="animation-duration:3.2s;animation-delay:-1.9s"/>
<circle cx="1311.8" cy="107.9" r="1" fill="#e6f0ff" opacity="0.4"/>
<circle cx="709.4" cy="11.1" r="1.6" fill="#e6f0ff" opacity="0.4"/>
<circle class="t" cx="1563.2" cy="237.6" r="0.6" style="animation-duration:4.6s;animation-delay:-1.2s"/>
<circle cx="61.1" cy="356.6" r="1.6" fill="#e6f0ff" opacity="0.5"/>
<circle cx="1316.1" cy="267.4" r="1.5" fill="#e6f0ff" opacity="0.7"/>
<circle class="t" cx="470.1" cy="386.3" r="0.8" style="animation-duration:5.2s;animation-delay:-4.5s"/>
<circle cx="994.7" cy="540.1" r="0.6" fill="#e6f0ff" opacity="0.4"/>
<circle cx="482.6" cy="630.1" r="0.9" fill="#e6f0ff" opacity="0.4"/>
<circle class="t" cx="156.7" cy="612.1" r="0.7" style="animation-duration:3.8s;animation-delay:-3.5s"/>
<circle cx="737.3" cy="65.7" r="1.4" fill="#e6f0ff" opacity="0.4"/>
<circle cx="192.3" cy="467.9" r="1.2" fill="#e6f0ff" opacity="0.7"/>
<circle class="t" cx="70.5" cy="189.5" r="0.8" style="animation-duration:4.3s;animation-delay:-4.3s"/>
<circle cx="1053.6" cy="206.4" r="1.3" fill="#e6f0ff" opacity="0.6"/>
<circle cx="904" cy="132.5" r="0.9" fill="#e6f0ff" opacity="0.6"/>
<circle class="t" cx="633" cy="98.7" r="0.8" style="animation-duration:5s;animation-delay:-0.3s"/>
<circle cx="62.7" cy="261.9" r="0.7" fill="#e6f0ff" opacity="0.7"/>
<circle cx="961.4" cy="568.2" r="1.5" fill="#e6f0ff" opacity="0.7"/>
<circle class="t" cx="1531.2" cy="519.9" r="0.8" style="animation-duration:3.1s;animation-delay:-1.5s"/>
<circle cx="818.7" cy="159" r="1.6" fill="#e6f0ff" opacity="0.6"/>
<circle cx="876.6" cy="547" r="1.1" fill="#e6f0ff" opacity="0.5"/>
<circle class="t" cx="521.6" cy="612.3" r="1.1" style="animation-duration:4.2s;animation-delay:-1.6s"/>
<circle cx="1400.5" cy="58.5" r="0.9" fill="#e6f0ff" opacity="0.4"/>
<circle cx="1517.5" cy="371.1" r="0.9" fill="#e6f0ff" opacity="0.4"/>
<circle class="t" cx="1107.2" cy="153.8" r="1.4" style="animation-duration:2.8s;animation-delay:-2s"/>
<circle cx="439.8" cy="485" r="0.7" fill="#e6f0ff" opacity="0.6"/>
<circle cx="816" cy="335.5" r="0.9" fill="#e6f0ff" opacity="0.4"/>
<circle class="t" cx="1112.5" cy="64.7" r="1.2" style="animation-duration:5s;animation-delay:-3s"/>
<circle cx="541.1" cy="190.2" r="1.4" fill="#e6f0ff" opacity="0.6"/>
<circle cx="724" cy="341.9" r="1" fill="#e6f0ff" opacity="0.4"/>
<circle class="t" cx="20.1" cy="486.3" r="1.2" style="animation-duration:5.2s;animation-delay:-4.5s"/>
<circle cx="914.5" cy="586" r="1" fill="#e6f0ff" opacity="0.7"/>
<circle cx="12.8" cy="109.8" r="1.1" fill="#e6f0ff" opacity="0.7"/>
<circle class="t" cx="927.7" cy="497.7" r="0.8" style="animation-duration:4.4s;animation-delay:-2s"/>
<circle cx="3" cy="149.9" r="0.9" fill="#e6f0ff" opacity="0.4"/>
<circle cx="1584.5" cy="461.7" r="0.8" fill="#e6f0ff" opacity="0.5"/>
<circle class="t" cx="386.6" cy="624.3" r="0.9" style="animation-duration:5.4s;animation-delay:-4.3s"/>
<circle cx="445.4" cy="470.7" r="1.1" fill="#e6f0ff" opacity="0.5"/>
<circle cx="1596.7" cy="313.9" r="1.4" fill="#e6f0ff" opacity="0.6"/>
<circle class="t" cx="1524.2" cy="270.1" r="1.2" style="animation-duration:5.1s;animation-delay:-0.5s"/>
<circle cx="688.9" cy="220.3" r="1.4" fill="#e6f0ff" opacity="0.7"/>
<circle cx="831.4" cy="340.3" r="0.7" fill="#e6f0ff" opacity="0.4"/>
<circle class="t" cx="851.8" cy="85.9" r="1.5" style="animation-duration:5s;animation-delay:-3.8s"/>
<circle cx="1389" cy="412.6" r="1.1" fill="#e6f0ff" opacity="0.5"/>
<circle cx="1504.3" cy="91.6" r="1.4" fill="#e6f0ff" opacity="0.4"/>
<circle class="t" cx="1429" cy="472.5" r="1" style="animation-duration:3.5s;animation-delay:-2.7s"/>
<circle cx="1181.9" cy="521.5" r="1.4" fill="#e6f0ff" opacity="0.4"/>
<circle cx="1299.5" cy="423" r="0.9" fill="#e6f0ff" opacity="0.7"/>
<circle class="t" cx="465.2" cy="577.8" r="1.2" style="animation-duration:3.9s;animation-delay:-1.8s"/>
<circle cx="1212.9" cy="569.7" r="1.4" fill="#e6f0ff" opacity="0.6"/>
<circle cx="961.9" cy="375" r="1" fill="#e6f0ff" opacity="0.4"/>
<circle class="t" cx="995.6" cy="105.6" r="0.7" style="animation-duration:4.4s;animation-delay:-2.1s"/>
<circle cx="809" cy="22.3" r="1.5" fill="#e6f0ff" opacity="0.6"/>
<circle cx="969.4" cy="247.6" r="1" fill="#e6f0ff" opacity="0.6"/>
<circle class="t" cx="1268.9" cy="175.2" r="0.8" style="animation-duration:3.9s;animation-delay:-1.3s"/>
<circle cx="382" cy="338.1" r="1.5" fill="#e6f0ff" opacity="0.6"/>
<polygon class="rb" points="-100,191.6 -75,204.8 -50,218 -25,230.7 0,242.7 25,253.4 50,262.6 75,270 100,275.5 125,279 150,280.6 175,280.2 200,278.2 225,274.7 250,270.1 275,264.7 300,258.8 325,252.9 350,247.1 375,241.7 400,237 425,233 450,229.9 475,227.5 500,225.8 525,224.6 550,223.7 575,222.8 600,221.7 625,220.1 650,217.6 675,214.2 700,209.7 725,204 750,197 775,188.9 800,179.9 825,170.1 850,159.9 875,149.5 900,139.5 925,130.2 950,121.9 975,115.1 1000,110 1025,106.8 1050,105.9 1075,107.1 1100,110.5 1125,115.9 1150,123.3 1175,132.2 1200,142.3 1225,153.3 1250,164.8 1275,176.3 1300,187.5 1325,198 1350,207.5 1375,215.8 1400,222.8 1425,228.3 1450,232.5 1475,235.4 1500,237.2 1525,238.1 1550,238.3 1575,238.3 1600,238.1 1625,238.2 1650,238.8 1675,239.9 1700,241.7 1700,558.7 1675,546.3 1650,534.1 1625,522.9 1600,513.3 1575,505.7 1550,500.7 1525,498.1 1500,498.1 1475,500.1 1450,503.7 1425,508.3 1400,513 1375,517 1350,519.6 1325,520.1 1300,517.9 1275,512.7 1250,504.3 1225,493 1200,479.1 1175,463.2 1150,446.2 1125,429 1100,412.7 1075,398.3 1050,386.7 1025,378.8 1000,375.2 975,376.2 950,381.9 925,392.2 900,406.4 875,423.8 850,443.6 825,464.4 800,485.3 775,505 750,522.5 725,537 700,547.6 675,554.2 650,556.6 625,555 600,549.9 575,542.2 550,532.8 525,522.6 500,513 475,504.8 450,499 425,496.4 400,497.3 375,502.1 350,510.6 325,522.3 300,536.5 275,552.4 250,568.7 225,584.3 200,598 175,608.8 150,615.8 125,618.1 100,615.5 75,607.8 50,595.3 25,578.5 0,558.2 -25,535.6 -50,511.8 -75,488 -100,465.5" fill="url(#ag)" style="--o:0.9;animation-duration:19s;animation-delay:0s"/>
<polygon class="rb" points="-100,378.7 -75,373.5 -50,366.5 -25,358.3 0,349.5 25,340.6 50,332.1 75,324.5 100,318 125,312.9 150,309 175,306.3 200,304.4 225,303 250,301.7 275,300.1 300,297.8 325,294.5 350,290.1 375,284.7 400,278.2 425,271.2 450,263.9 475,256.8 500,250.5 525,245.6 550,242.6 575,241.8 600,243.4 625,247.6 650,254.3 675,263.3 700,274 725,286 750,298.7 775,311.3 800,323.4 825,334.2 850,343.3 875,350.5 900,355.6 925,358.5 950,359.5 975,358.9 1000,357 1025,354.5 1050,351.6 1075,348.9 1100,346.7 1125,345.2 1150,344.6 1175,344.8 1200,345.6 1225,346.6 1250,347.5 1275,347.9 1300,347.3 1325,345.3 1350,341.6 1375,336 1400,328.6 1425,319.4 1450,308.8 1475,297.2 1500,285.2 1525,273.4 1550,262.5 1575,253 1600,245.4 1625,240.2 1650,237.6 1675,237.7 1700,240.4 1700,514.1 1675,516.1 1650,517.6 1625,518.8 1600,519.7 1575,520.2 1550,520.7 1525,521.2 1500,521.9 1475,523.1 1450,525 1425,527.7 1400,531.4 1375,536.2 1350,542.2 1325,549.4 1300,557.6 1275,566.7 1250,576.5 1225,586.5 1200,596.4 1175,605.8 1150,614.1 1125,621 1100,626 1075,628.7 1050,628.9 1025,626.3 1000,621.1 975,613.2 950,603.1 925,591 900,577.6 875,563.4 850,549.2 825,535.6 800,523.4 775,512.9 750,504.8 725,499.3 700,496.5 675,496.3 650,498.4 625,502.5 600,507.9 575,514 550,520.1 525,525.5 500,529.8 475,532.3 450,533 425,531.7 400,528.6 375,524 350,518.5 325,512.9 300,507.7 275,504 250,502.3 225,503.3 200,507.4 175,514.9 150,525.6 125,539.3 100,555.3 75,572.8 50,590.8 25,608.2 0,624 -25,637.1 -50,646.5 -75,651.6 -100,652.1" fill="url(#at)" style="--o:0.6;animation-duration:24s;animation-delay:-5s"/>
<polygon class="rb" points="-100,113.5 -75,113.3 -50,113.3 -25,113.5 0,113.7 25,113.9 50,113.9 75,113.7 100,113.2 125,112.4 150,111.3 175,109.9 200,108.3 225,106.4 250,104.4 275,102.4 300,100.5 325,98.7 350,97.3 375,96.4 400,95.9 425,96.2 450,97.1 475,98.8 500,101.3 525,104.7 550,108.8 575,113.7 600,119.3 625,125.4 650,131.9 675,138.8 700,145.9 725,152.9 750,159.8 775,166.3 800,172.4 825,177.9 850,182.7 875,186.7 900,189.8 925,192 950,193.3 975,193.7 1000,193.3 1025,192 1050,190.1 1075,187.6 1100,184.7 1125,181.4 1150,177.9 1175,174.3 1200,170.8 1225,167.5 1250,164.4 1275,161.6 1300,159.2 1325,157.1 1350,155.4 1375,154.1 1400,153.1 1425,152.3 1450,151.7 1475,151.1 1500,150.4 1525,149.7 1550,148.6 1575,147.3 1600,145.5 1625,143.3 1650,140.6 1675,137.3 1700,133.6 1700,322.3 1675,334.1 1650,347.1 1625,360.7 1600,374 1575,386.2 1550,396.5 1525,404.3 1500,409.2 1475,411.1 1450,409.8 1425,405.6 1400,399 1375,390.7 1350,381.4 1325,372 1300,363.4 1275,356.4 1250,351.6 1225,349.7 1200,350.9 1175,355.3 1150,362.8 1125,372.9 1100,385 1075,398.2 1050,411.8 1025,424.6 1000,435.7 975,444.4 950,449.9 925,451.6 900,449.4 875,443.3 850,433.5 825,420.5 800,405.1 775,388.1 750,370.5 725,353.3 700,337.5 675,323.8 650,313 625,305.4 600,301.4 575,300.8 550,303.5 525,308.8 500,316.1 475,324.7 450,333.6 425,342 400,349.2 375,354.4 350,357.3 325,357.6 300,355.2 275,350.3 250,343.4 225,335 200,325.8 175,316.6 150,308.2 125,301.3 100,296.4 75,294 50,294.4 25,297.6 0,303.5 -25,311.6 -50,321.4 -75,332.3 -100,343.5" fill="url(#ap)" style="--o:0.5;animation-duration:28s;animation-delay:-10s"/>
<rect class="ry" x="8.9" y="266.6" width="5.4" height="278.7" fill="url(#ar)" style="animation-duration:7.2s;animation-delay:-2.8s"/>
<rect class="ry" x="35.4" y="277.4" width="3.7" height="194.5" fill="url(#ar)" style="animation-duration:3.7s;animation-delay:-2.9s"/>
<rect class="ry" x="58.7" y="285.4" width="6.2" height="213.7" fill="url(#ar)" style="animation-duration:3.6s;animation-delay:-2.4s"/>
<rect class="ry" x="77.1" y="290.6" width="4.3" height="176.2" fill="url(#ar)" style="animation-duration:3.8s;animation-delay:-0.1s"/>
<rect class="ry" x="105" y="296.4" width="3.2" height="170.5" fill="url(#ar)" style="animation-duration:4s;animation-delay:-2.9s"/>
<rect class="ry" x="131.6" y="299.6" width="4.3" height="224.8" fill="url(#ar)" style="animation-duration:5.9s;animation-delay:-1.6s"/>
<rect class="ry" x="148.2" y="300.5" width="3.2" height="273.3" fill="url(#ar)" style="animation-duration:4.8s;animation-delay:-2s"/>
<rect class="ry" x="170.3" y="300.4" width="3.6" height="251.9" fill="url(#ar)" style="animation-duration:8s;animation-delay:-0.7s"/>
<rect class="ry" x="197.2" y="298.5" width="6" height="186.4" fill="url(#ar)" style="animation-duration:5.3s;animation-delay:-3s"/>
<rect class="ry" x="218.3" y="295.8" width="5.6" height="235" fill="url(#ar)" style="animation-duration:6.1s;animation-delay:-0.3s"/>
<rect class="ry" x="251.9" y="289.7" width="7.2" height="134.2" fill="url(#ar)" style="animation-duration:4.3s;animation-delay:-3.5s"/>
<rect class="ry" x="269.3" y="286" width="6.8" height="244.5" fill="url(#ar)" style="animation-duration:7s;animation-delay:-2.9s"/>
<rect class="ry" x="292" y="280.7" width="7.3" height="266.4" fill="url(#ar)" style="animation-duration:7.4s;animation-delay:-3.2s"/>
<rect class="ry" x="323.8" y="273.1" width="4.1" height="153.2" fill="url(#ar)" style="animation-duration:3.4s;animation-delay:-1.6s"/>
<rect class="ry" x="343.8" y="268.5" width="3.9" height="176.6" fill="url(#ar)" style="animation-duration:3.2s;animation-delay:-1.9s"/>
<rect class="ry" x="364.4" y="263.9" width="5.4" height="260.8" fill="url(#ar)" style="animation-duration:6s;animation-delay:-3.2s"/>
<rect class="ry" x="387.5" y="259.3" width="4" height="288.8" fill="url(#ar)" style="animation-duration:3.2s;animation-delay:-0.9s"/>
<rect class="ry" x="411.2" y="255.1" width="4.1" height="229.3" fill="url(#ar)" style="animation-duration:5.5s;animation-delay:-5.4s"/>
<rect class="ry" x="437.5" y="251.4" width="6.5" height="285.2" fill="url(#ar)" style="animation-duration:4.1s;animation-delay:-3.1s"/>
<rect class="ry" x="462.9" y="248.6" width="3.9" height="206" fill="url(#ar)" style="animation-duration:6.1s;animation-delay:-3.4s"/>
<rect class="ry" x="491.9" y="246.3" width="3.2" height="222.9" fill="url(#ar)" style="animation-duration:5s;animation-delay:-2s"/>
<rect class="ry" x="511.9" y="245.2" width="4.3" height="128.3" fill="url(#ar)" style="animation-duration:3.4s;animation-delay:-1.6s"/>
<rect class="ry" x="535.4" y="244.2" width="4.2" height="143.2" fill="url(#ar)" style="animation-duration:4.6s;animation-delay:-0.6s"/>
<rect class="ry" x="556.1" y="243.5" width="5.9" height="258.2" fill="url(#ar)" style="animation-duration:6.4s;animation-delay:-1.1s"/>
<rect class="ry" x="580.1" y="242.6" width="4.2" height="236.9" fill="url(#ar)" style="animation-duration:7.3s;animation-delay:-0.2s"/>
<rect class="ry" x="608.1" y="241.2" width="5.2" height="137.6" fill="url(#ar)" style="animation-duration:4.7s;animation-delay:-0.1s"/>
<rect class="ry" x="634.3" y="239.3" width="7.6" height="157" fill="url(#ar)" style="animation-duration:5.1s;animation-delay:-2.7s"/>
<rect class="ry" x="656.2" y="236.9" width="7" height="221.3" fill="url(#ar)" style="animation-duration:3s;animation-delay:-1.9s"/>
<rect class="ry" x="674.6" y="234.3" width="6.8" height="216.8" fill="url(#ar)" style="animation-duration:4.2s;animation-delay:-1.5s"/>
<rect class="ry" x="699.9" y="229.7" width="5.8" height="231.7" fill="url(#ar)" style="animation-duration:7.9s;animation-delay:-3.2s"/>
<rect class="ry" x="729.1" y="222.9" width="3" height="260.8" fill="url(#ar)" style="animation-duration:3.2s;animation-delay:-0.7s"/>
<rect class="ry" x="747.7" y="217.7" width="3.1" height="248.3" fill="url(#ar)" style="animation-duration:3.7s;animation-delay:-2.7s"/>
<rect class="ry" x="774.7" y="209.1" width="4.2" height="241.5" fill="url(#ar)" style="animation-duration:6.2s;animation-delay:-3.7s"/>
<rect class="ry" x="796.8" y="201.1" width="6.5" height="241.1" fill="url(#ar)" style="animation-duration:5s;animation-delay:-2.2s"/>
<rect class="ry" x="825" y="190.1" width="7.7" height="257.2" fill="url(#ar)" style="animation-duration:7.4s;animation-delay:-7.1s"/>
<rect class="ry" x="849.3" y="180.1" width="7.4" height="194.6" fill="url(#ar)" style="animation-duration:3.5s;animation-delay:-2.4s"/>
<rect class="ry" x="864.3" y="174" width="3.1" height="139.6" fill="url(#ar)" style="animation-duration:6.8s;animation-delay:-1.7s"/>
<rect class="ry" x="888.3" y="164.1" width="6.5" height="150.1" fill="url(#ar)" style="animation-duration:5.1s;animation-delay:-1.2s"/>
<rect class="ry" x="923.1" y="150.8" width="3.4" height="196" fill="url(#ar)" style="animation-duration:8s;animation-delay:-0.6s"/>
<rect class="ry" x="942" y="144.4" width="3.8" height="278.3" fill="url(#ar)" style="animation-duration:3s;animation-delay:-2.9s"/>
<rect class="ry" x="967.3" y="137" width="3.6" height="165" fill="url(#ar)" style="animation-duration:4.4s;animation-delay:-2.9s"/>
<rect class="ry" x="995.4" y="130.8" width="3.2" height="281.5" fill="url(#ar)" style="animation-duration:3.5s;animation-delay:-1.6s"/>
<rect class="ry" x="1018.4" y="127.5" width="4.6" height="232.9" fill="url(#ar)" style="animation-duration:4.3s;animation-delay:-3s"/>
<rect class="ry" x="1037.3" y="126.1" width="7.9" height="281.4" fill="url(#ar)" style="animation-duration:6.1s;animation-delay:-3.5s"/>
<rect class="ry" x="1058.7" y="126" width="5.4" height="169.4" fill="url(#ar)" style="animation-duration:6.5s;animation-delay:-3.4s"/>
<rect class="ry" x="1083.6" y="128" width="7.3" height="258.9" fill="url(#ar)" style="animation-duration:7s;animation-delay:-3.2s"/>
<rect class="ry" x="1114.1" y="133.3" width="7.6" height="193.7" fill="url(#ar)" style="animation-duration:7.7s;animation-delay:-0.7s"/>
<rect class="ry" x="1137.1" y="139.2" width="4.8" height="261.8" fill="url(#ar)" style="animation-duration:6.2s;animation-delay:-1.9s"/>
<rect class="ry" x="1152.9" y="144.2" width="4.2" height="133.4" fill="url(#ar)" style="animation-duration:4.9s;animation-delay:-1.8s"/>
<rect class="ry" x="1179.2" y="153.8" width="4.8" height="151.5" fill="url(#ar)" style="animation-duration:6.4s;animation-delay:-4.1s"/>
<rect class="ry" x="1206.6" y="165.2" width="5.9" height="174.2" fill="url(#ar)" style="animation-duration:3.1s;animation-delay:-2.3s"/>
<rect class="ry" x="1227.8" y="174.6" width="6" height="217" fill="url(#ar)" style="animation-duration:7s;animation-delay:-2.6s"/>
<rect class="ry" x="1249.6" y="184.6" width="6" height="144.6" fill="url(#ar)" style="animation-duration:4.1s;animation-delay:-2.5s"/>
<rect class="ry" x="1277.2" y="197.3" width="4.1" height="244" fill="url(#ar)" style="animation-duration:4.7s;animation-delay:-4.4s"/>
<rect class="ry" x="1303.3" y="208.9" width="6.4" height="171.9" fill="url(#ar)" style="animation-duration:4.2s;animation-delay:-2.1s"/>
<rect class="ry" x="1321.7" y="216.7" width="3.6" height="275.5" fill="url(#ar)" style="animation-duration:5.2s;animation-delay:-1.3s"/>
<rect class="ry" x="1345.4" y="225.8" width="4.2" height="143.3" fill="url(#ar)" style="animation-duration:5.2s;animation-delay:-4.7s"/>
<rect class="ry" x="1374.3" y="235.6" width="3.9" height="190.8" fill="url(#ar)" style="animation-duration:4.8s;animation-delay:-3.7s"/>
<rect class="ry" x="1394.2" y="241.3" width="8" height="125.4" fill="url(#ar)" style="animation-duration:3.2s;animation-delay:-0.5s"/>
<rect class="ry" x="1427.2" y="248.8" width="6.2" height="264.4" fill="url(#ar)" style="animation-duration:6.9s;animation-delay:-6.4s"/>
<rect class="ry" x="1446.4" y="252" width="5.1" height="264.1" fill="url(#ar)" style="animation-duration:5.3s;animation-delay:-0.1s"/>
<rect class="ry" x="1466.9" y="254.6" width="3.4" height="132.1" fill="url(#ar)" style="animation-duration:4.6s;animation-delay:-2.8s"/>
<rect class="ry" x="1492.8" y="256.8" width="4.7" height="141.4" fill="url(#ar)" style="animation-duration:6.4s;animation-delay:-1.6s"/>
<rect class="ry" x="1524" y="258" width="6.4" height="239.9" fill="url(#ar)" style="animation-duration:8s;animation-delay:-0.7s"/>
<rect class="ry" x="1536.2" y="258.2" width="5.2" height="183.8" fill="url(#ar)" style="animation-duration:3.8s;animation-delay:-2.9s"/>
<rect class="ry" x="1566.9" y="258.3" width="5.6" height="164.6" fill="url(#ar)" style="animation-duration:4.2s;animation-delay:-2.4s"/>
<rect class="ry" x="1587.5" y="258.2" width="3.9" height="142.3" fill="url(#ar)" style="animation-duration:7s;animation-delay:-5s"/>
<rect class="ry" x="1611.2" y="258.1" width="4" height="234.2" fill="url(#ar)" style="animation-duration:3.1s;animation-delay:-2.1s"/>
<rect class="ry" x="1637.4" y="258.4" width="5.9" height="134.9" fill="url(#ar)" style="animation-duration:4.3s;animation-delay:-1.6s"/>
<rect class="ry" x="1656.7" y="259" width="6.7" height="178.9" fill="url(#ar)" style="animation-duration:6.5s;animation-delay:-1.1s"/>
<path d="M-10 900 L-10 790 L0 781.8 L40 789.3 L80 791.8 L120 790 L160 785.9 L200 782.4 L240 781.6 L280 784.7 L320 791.2 L360 799 L400 805.3 L440 807.7 L480 804.5 L520 795.9 L560 783.7 L600 770.8 L640 760 L680 753.5 L720 751.8 L760 754 L800 757.8 L840 760.4 L880 759.7 L920 755.1 L960 747.5 L1000 739 L1040 732.6 L1080 730.7 L1120 734.5 L1160 743.6 L1200 755.8 L1240 768.2 L1280 778.1 L1320 783.5 L1360 784.3 L1400 781.8 L1440 778.5 L1480 776.9 L1520 779 L1560 785 L1600 793.7 L1610 900 Z" fill="#060a11"/>
<path d="M40 619.9L32.8 690.9L47.2 690.9ZM40 661L28 732.1L52 732.1ZM40 702.2L23.2 773.2L56.8 773.2ZM40 743.3L18.4 814.4L61.6 814.4ZM95 624.9L87.6 697.8L102.4 697.8ZM95 667.1L82.7 740L107.3 740ZM95 709.3L77.8 782.3L112.2 782.3ZM95 751.6L72.9 824.5L117.1 824.5ZM150 708.3L141.1 751.1L158.9 751.1ZM150 733.1L135.2 775.8L164.8 775.8ZM150 757.8L129.3 800.6L170.7 800.6ZM150 782.6L123.4 825.3L176.6 825.3ZM210 615.1L200.6 690.6L219.4 690.6ZM210 658.8L194.4 734.2L225.6 734.2ZM210 702.5L188.1 777.9L231.9 777.9ZM210 746.1L181.9 821.6L238.1 821.6ZM1390 667.1L1382.2 726.8L1397.8 726.8ZM1390 701.7L1377 761.4L1403 761.4ZM1390 736.2L1371.8 795.9L1408.2 795.9ZM1390 770.8L1366.6 830.5L1413.4 830.5ZM1450 669L1441.6 721.9L1458.4 721.9ZM1450 699.6L1436 752.5L1464 752.5ZM1450 730.2L1430.4 783.1L1469.6 783.1ZM1450 760.9L1424.8 813.7L1475.2 813.7ZM1510 620.1L1502.1 695.6L1517.9 695.6ZM1510 663.8L1496.9 739.3L1523.1 739.3ZM1510 707.5L1491.6 783L1528.4 783ZM1510 751.2L1486.4 826.7L1533.6 826.7ZM1565 639.7L1558 708.4L1572 708.4ZM1565 679.4L1553.4 748.1L1576.6 748.1ZM1565 719.2L1548.7 787.9L1581.3 787.9ZM1565 759L1544 827.7L1586 827.7Z" fill="#060a11"/>
</svg>`,
}
