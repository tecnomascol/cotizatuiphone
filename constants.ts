import { Product } from './types';

export const PLACEHOLDER_SVG = `data:image/svg+xml;utf8,${encodeURIComponent(`<svg xmlns='http://www.w3.org/2000/svg' width='400' height='400' viewBox='0 0 400 400'>
      <defs><linearGradient id='g' x1='0' x2='1'><stop stop-color='%230a0a0a'/><stop offset='1' stop-color='%23141414'/></linearGradient></defs>
      <rect width='100%' height='100%' fill='url(%23g)'/>
      <g fill='none' stroke='%23e60000' stroke-width='6'>
        <rect x='130' y='40' rx='34' ry='34' width='140' height='320'/>
        <circle cx='200' cy='78' r='6' stroke='%23fff'/>
      </g>
      <text x='200' y='360' font-family='Arial, Helvetica, sans-serif' font-size='20' fill='%23e6e6e6' text-anchor='middle'>Tecno+</text>
    </svg>`)}`;

export const CATALOGO: Product[] = [
  {nombre: 'iPhone X 64GB - semi-nuevo', estado: 'semi-nuevo', img: PLACEHOLDER_SVG, stock: 10, precios: { contado: 600000, addi: 702000, sistecredito: 810000, brilla: 810000, banco: 900000 }},
  {nombre: 'iPhone SE 64GB Negro (2ª Gen) - semi-nuevo', estado: 'semi-nuevo', img: PLACEHOLDER_SVG, stock: 10, precios: { contado: 600000, addi: 702000, sistecredito: 810000, brilla: 810000, banco: 900000 }},
  {nombre: 'iPhone XR 128GB - semi-nuevo', estado: 'semi-nuevo', img: PLACEHOLDER_SVG, stock: 10, precios: { contado: 950000, addi: 1111500, sistecredito: 1282500, brilla: 1282500, banco: 1250000 }},
  {nombre: 'iPhone XS Max 64GB - semi-nuevo', estado: 'semi-nuevo', img: PLACEHOLDER_SVG, stock: 10, precios: { contado: 990000, addi: 1158300, sistecredito: 1336500, brilla: 1336500, banco: 1290000 }},
  {nombre: 'iPhone 11 64GB - semi-nuevo', estado: 'semi-nuevo', img: PLACEHOLDER_SVG, stock: 10, precios: { contado: 950000, addi: 1111500, sistecredito: 1282500, brilla: 1282500, banco: 1250000 }},
  {nombre: 'iPhone 11 128GB - semi-nuevo', estado: 'semi-nuevo', img: PLACEHOLDER_SVG, stock: 10, precios: { contado: 1190000, addi: 1392300, sistecredito: 1606500, brilla: 1606500, banco: 1490000 }},
  {nombre: 'iPhone 11 Pro Max 64GB - semi-nuevo', estado: 'semi-nuevo', img: PLACEHOLDER_SVG, stock: 10, precios: { contado: 1350000, addi: 1579500, sistecredito: 1822500, brilla: 1822500, banco: 1650000 }},
  {nombre: 'iPhone 11 Pro Max 256GB - semi-nuevo', estado: 'semi-nuevo', img: PLACEHOLDER_SVG, stock: 10, precios: { contado: 1490000, addi: 1743300, sistecredito: 2011500, brilla: 2011500, banco: 1790000 }},
  {nombre: 'iPhone 12 64GB - semi-nuevo', estado: 'semi-nuevo', img: PLACEHOLDER_SVG, stock: 10, precios: { contado: 1200000, addi: 1404000, sistecredito: 1620000, brilla: 1620000, banco: 1500000 }},
  {nombre: 'iPhone 12 128GB - semi-nuevo', estado: 'semi-nuevo', img: PLACEHOLDER_SVG, stock: 10, precios: { contado: 1450000, addi: 1696500, sistecredito: 1957500, brilla: 1957500, banco: 1750000 }},
  {nombre: 'iPhone 12 Pro 128GB - semi-nuevo', estado: 'semi-nuevo', img: PLACEHOLDER_SVG, stock: 10, precios: { contado: 1590000, addi: 1860300, sistecredito: 2146500, brilla: 2146500, banco: 1890000 }},
  {nombre: 'iPhone 12 Pro 256GB - semi-nuevo', estado: 'semi-nuevo', img: PLACEHOLDER_SVG, stock: 10, precios: { contado: 1650000, addi: 1930500, sistecredito: 2227500, brilla: 2227500, banco: 1950000 }},
  {nombre: 'iPhone 12 Pro Max 128GB - semi-nuevo', estado: 'semi-nuevo', img: PLACEHOLDER_SVG, stock: 10, precios: { contado: 1890000, addi: 2211300, sistecredito: 2551500, brilla: 2551500, banco: 2190000 }},
  {nombre: 'iPhone 12 Pro Max 256GB - semi-nuevo', estado: 'semi-nuevo', img: PLACEHOLDER_SVG, stock: 10, precios: { contado: 1950000, addi: 2281500, sistecredito: 2632500, brilla: 2632500, banco: 2250000 }},
  {nombre: 'iPhone 13 128GB - semi-nuevo', estado: 'semi-nuevo', img: PLACEHOLDER_SVG, stock: 10, precios: { contado: 1650000, addi: 1930500, sistecredito: 2227500, brilla: 2227500, banco: 1950000 }},
  {nombre: 'iPhone 13 128GB - nuevo', estado: 'nuevo', img: PLACEHOLDER_SVG, stock: 10, precios: { contado: 2250000, addi: 2632500, sistecredito: 3037500, brilla: 3037500, banco: 2550000 }},
  {nombre: 'iPhone 13 Pro 128GB - semi-nuevo', estado: 'semi-nuevo', img: PLACEHOLDER_SVG, stock: 10, precios: { contado: 1990000, addi: 2328300, sistecredito: 2686500, brilla: 2686500, banco: 2290000 }},
  {nombre: 'iPhone 13 Pro Max 128GB - semi-nuevo', estado: 'semi-nuevo', img: PLACEHOLDER_SVG, stock: 10, precios: { contado: 2290000, addi: 2679300, sistecredito: 3091500, brilla: 3091500, banco: 2590000 }},
  {nombre: 'iPhone 13 Pro Max 256GB - semi-nuevo', estado: 'semi-nuevo', img: PLACEHOLDER_SVG, stock: 10, precios: { contado: 2590000, addi: 3030300, sistecredito: 3496500, brilla: 3496500, banco: 2890000 }},
  {nombre: 'iPhone 14 128GB - nuevo', estado: 'nuevo', img: PLACEHOLDER_SVG, stock: 10, precios: { contado: 2650000, addi: 3100500, sistecredito: 3577500, brilla: 3577500, banco: 2950000 }},
  {nombre: 'iPhone 14 Plus 256GB - semi-nuevo', estado: 'semi-nuevo', img: PLACEHOLDER_SVG, stock: 10, precios: { contado: 2200000, addi: 2574000, sistecredito: 2970000, brilla: 2970000, banco: 2500000 }},
  {nombre: 'iPhone 14 128GB - semi-nuevo', estado: 'semi-nuevo', img: PLACEHOLDER_SVG, stock: 10, precios: { contado: 1890000, addi: 2211300, sistecredito: 2551500, brilla: 2551500, banco: 2190000 }},
  {nombre: 'iPhone 14 Pro 128GB - semi-nuevo', estado: 'semi-nuevo', img: PLACEHOLDER_SVG, stock: 10, precios: { contado: 2450000, addi: 2866500, sistecredito: 3307500, brilla: 3307500, banco: 2750000 }},
  {nombre: 'iPhone 14 Pro 256GB - semi-nuevo', estado: 'semi-nuevo', img: PLACEHOLDER_SVG, stock: 10, precios: { contado: 2590000, addi: 3030300, sistecredito: 3496500, brilla: 3496500, banco: 2890000 }},
  {nombre: 'iPhone 14 Pro Max 128GB - semi-nuevo', estado: 'semi-nuevo', img: PLACEHOLDER_SVG, stock: 10, precios: { contado: 2890000, addi: 3381300, sistecredito: 3901500, brilla: 3901500, banco: 3190000 }},
  {nombre: 'iPhone 14 Pro Max 256GB - semi-nuevo', estado: 'semi-nuevo', img: PLACEHOLDER_SVG, stock: 10, precios: { contado: 3090000, addi: 3615300, sistecredito: 4171500, brilla: 4171500, banco: 3390000 }},
  {nombre: 'iPhone 15 128GB - semi-nuevo', estado: 'semi-nuevo', img: PLACEHOLDER_SVG, stock: 10, precios: { contado: 2450000, addi: 2866500, sistecredito: 3307500, brilla: 3307500, banco: 2750000 }},
  {nombre: 'iPhone 15 Pro 128GB - semi-nuevo', estado: 'semi-nuevo', img: PLACEHOLDER_SVG, stock: 10, precios: { contado: 3200000, addi: 3744000, sistecredito: 4320000, brilla: 4320000, banco: 3500000 }},
  {nombre: 'iPhone 15 Pro 256GB - semi-nuevo', estado: 'semi-nuevo', img: PLACEHOLDER_SVG, stock: 10, precios: { contado: 3300000, addi: 3861000, sistecredito: 4455000, brilla: 4455000, banco: 3600000 }},
  {nombre: 'iPhone 15 Pro Max 256GB - semi-nuevo', estado: 'semi-nuevo', img: PLACEHOLDER_SVG, stock: 10, precios: { contado: 3690000, addi: 4317300, sistecredito: 4981500, brilla: 4981500, banco: 3990000 }},
  {nombre: 'iPhone 15 Pro Max 512GB - semi-nuevo', estado: 'semi-nuevo', img: PLACEHOLDER_SVG, stock: 10, precios: { contado: 3990000, addi: 4668300, sistecredito: 5386500, brilla: 5386500, banco: 4290000 }},
  {nombre: 'iPhone 16 128GB - nuevo', estado: 'nuevo', img: PLACEHOLDER_SVG, stock: 10, precios: { contado: 3490000, addi: 4083300, sistecredito: 4711500, brilla: 4711500, banco: 3790000 }},
  {nombre: 'iPhone 16 256GB - nuevo', estado: 'nuevo', img: PLACEHOLDER_SVG, stock: 10, precios: { contado: 3900000, addi: 4563000, sistecredito: 5265000, brilla: 5265000, banco: 4200000 }},
  {nombre: 'iPhone 16 Plus 128GB - nuevo', estado: 'nuevo', img: PLACEHOLDER_SVG, stock: 10, precios: { contado: 4200000, addi: 4914000, sistecredito: 5670000, brilla: 5670000, banco: 4500000 }},
  {nombre: 'iPhone 16 Plus 256GB - nuevo', estado: 'nuevo', img: PLACEHOLDER_SVG, stock: 10, precios: { contado: 4500000, addi: 5265000, sistecredito: 6075000, brilla: 6075000, banco: 4800000 }},
  {nombre: 'iPhone 16 Pro 128GB - nuevo', estado: 'nuevo', img: PLACEHOLDER_SVG, stock: 10, precios: { contado: 4300000, addi: 5031000, sistecredito: 5805000, brilla: 5805000, banco: 4600000 }},
  {nombre: 'iPhone 16 Pro 256GB - nuevo', estado: 'nuevo', img: PLACEHOLDER_SVG, stock: 10, precios: { contado: 4600000, addi: 5382000, sistecredito: 6210000, brilla: 6210000, banco: 4900000 }},
  {nombre: 'iPhone 16 Pro Max 256GB - nuevo', estado: 'nuevo', img: PLACEHOLDER_SVG, stock: 10, precios: { contado: 4990000, addi: 5838300, sistecredito: 6736500, brilla: 6736500, banco: 5290000 }},
  {nombre: 'iPhone 16 Pro Max 512GB - nuevo', estado: 'nuevo', img: PLACEHOLDER_SVG, stock: 10, precios: { contado: 5990000, addi: 7008300, sistecredito: 8086500, brilla: 8086500, banco: 6290000 }},
  {nombre: 'iPhone 16 Pro Max 1TB - nuevo', estado: 'nuevo', img: PLACEHOLDER_SVG, stock: 10, precios: { contado: 6990000, addi: 8178300, sistecredito: 9436500, brilla: 9436500, banco: 7290000 }},
  {nombre: 'iPhone 16 128GB - semi-nuevo', estado: 'semi-nuevo', img: PLACEHOLDER_SVG, stock: 10, precios: { contado: 3200000, addi: 3744000, sistecredito: 4320000, brilla: 4320000, banco: 3500000 }},
  {nombre: 'iPhone 16 256GB - semi-nuevo', estado: 'semi-nuevo', img: PLACEHOLDER_SVG, stock: 10, precios: { contado: 3400000, addi: 3978000, sistecredito: 4590000, brilla: 4590000, banco: 3700000 }},
  {nombre: 'iPhone 16 Pro 128GB - semi-nuevo', estado: 'semi-nuevo', img: PLACEHOLDER_SVG, stock: 10, precios: { contado: 3590000, addi: 4200300, sistecredito: 4846500, brilla: 4846500, banco: 3890000 }},
  {nombre: 'iPhone 16 Pro 256GB - semi-nuevo', estado: 'semi-nuevo', img: PLACEHOLDER_SVG, stock: 10, precios: { contado: 3790000, addi: 4434300, sistecredito: 5116500, brilla: 5116500, banco: 4090000 }},
  {nombre: 'iPhone 16 Pro Max 256GB - semi-nuevo', estado: 'semi-nuevo', img: PLACEHOLDER_SVG, stock: 10, precios: { contado: 4450000, addi: 5206500, sistecredito: 6007500, brilla: 6007500, banco: 4750000 }},
  {nombre: 'iPhone 16 Pro Max 512GB - semi-nuevo', estado: 'semi-nuevo', img: PLACEHOLDER_SVG, stock: 10, precios: { contado: 4700000, addi: 5499000, sistecredito: 6345000, brilla: 6345000, banco: 5000000 }},
  {nombre: 'Samsung A05 128GB - nuevo', estado: 'nuevo', img: PLACEHOLDER_SVG, stock: 10, precios: { contado: 400000, addi: 468000, sistecredito: 540000, brilla: 540000, banco: 700000 }},
  {nombre: 'Samsung A06 128GB - nuevo', estado: 'nuevo', img: PLACEHOLDER_SVG, stock: 10, precios: { contado: 450000, addi: 526500, sistecredito: 607500, brilla: 607500, banco: 750000 }},
  {nombre: 'Samsung A16 256GB - nuevo', estado: 'nuevo', img: PLACEHOLDER_SVG, stock: 10, precios: { contado: 750000, addi: 877500, sistecredito: 1012500, brilla: 1012500, banco: 1050000 }},
  {nombre: 'Samsung A26 256GB - nuevo', estado: 'nuevo', img: PLACEHOLDER_SVG, stock: 10, precios: { contado: 1080000, addi: 1263600, sistecredito: 1458000, brilla: 1458000, banco: 1380000 }},
  {nombre: 'Samsung A36 256GB - nuevo', estado: 'nuevo', img: PLACEHOLDER_SVG, stock: 10, precios: { contado: 1200000, addi: 1404000, sistecredito: 1620000, brilla: 1620000, banco: 1500000 }},
  {nombre: 'Samsung A56 256GB - nuevo', estado: 'nuevo', img: PLACEHOLDER_SVG, stock: 10, precios: { contado: 1550000, addi: 1813500, sistecredito: 2092500, brilla: 2092500, banco: 1850000 }},
  {nombre: 'Samsung A56 256GB/12GB - nuevo', estado: 'nuevo', img: PLACEHOLDER_SVG, stock: 10, precios: { contado: 1700000, addi: 1989000, sistecredito: 2295000, brilla: 2295000, banco: 2000000 }},
  {nombre: 'Samsung A55 256GB - nuevo', estado: 'nuevo', img: PLACEHOLDER_SVG, stock: 10, precios: { contado: 1500000, addi: 1755000, sistecredito: 2025000, brilla: 2025000, banco: 1800000 }},
  {nombre: 'Galaxy S25 Ultra 256GB - nuevo', estado: 'nuevo', img: PLACEHOLDER_SVG, stock: 10, precios: { contado: 4500000, addi: 5265000, sistecredito: 6075000, brilla: 6075000, banco: 4800000 }},
  {nombre: 'Redmi 14C 256/8GB - nuevo', estado: 'nuevo', img: PLACEHOLDER_SVG, stock: 10, precios: { contado: 510000, addi: 596700, sistecredito: 688500, brilla: 688500, banco: 810000 }},
  {nombre: 'Redmi Note 14 256GB - nuevo', estado: 'nuevo', img: PLACEHOLDER_SVG, stock: 10, precios: { contado: 760000, addi: 889200, sistecredito: 1026000, brilla: 1026000, banco: 1060000 }},
  {nombre: 'Redmi Note 14 Pro 256/8GB - nuevo', estado: 'nuevo', img: PLACEHOLDER_SVG, stock: 10, precios: { contado: 950000, addi: 1111500, sistecredito: 1282500, brilla: 1282500, banco: 1250000 }},
  {nombre: 'Redmi 15 256/8GB - nuevo', estado: 'nuevo', img: PLACEHOLDER_SVG, stock: 10, precios: { contado: 695000, addi: 813150, sistecredito: 938250, brilla: 938250, banco: 995000 }},
  {nombre: 'Redmi 15C 128/4GB - nuevo', estado: 'nuevo', img: PLACEHOLDER_SVG, stock: 10, precios: { contado: 650000, addi: 760500, sistecredito: 877500, brilla: 877500, banco: 950000 }},
  {nombre: 'Redmi A5 128/4GB - nuevo', estado: 'nuevo', img: PLACEHOLDER_SVG, stock: 10, precios: { contado: 405000, addi: 473850, sistecredito: 546750, brilla: 546750, banco: 705000 }},
  {nombre: 'Redmi Pad 11\' 128/4GB - nuevo', estado: 'nuevo', img: PLACEHOLDER_SVG, stock: 10, precios: { contado: 670000, addi: 783900, sistecredito: 904500, brilla: 904500, banco: 970000 }},
  {nombre: 'Moto E15 64GB - nuevo', estado: 'nuevo', img: PLACEHOLDER_SVG, stock: 10, precios: { contado: 350000, addi: 409500, sistecredito: 472500, brilla: 472500, banco: 650000 }},
  {nombre: 'Moto E14 128GB - nuevo', estado: 'nuevo', img: PLACEHOLDER_SVG, stock: 10, precios: { contado: 390000, addi: 456300, sistecredito: 526500, brilla: 526500, banco: 690000 }},
  {nombre: 'Moto G05 128GB - nuevo', estado: 'nuevo', img: PLACEHOLDER_SVG, stock: 10, precios: { contado: 440000, addi: 514800, sistecredito: 594000, brilla: 594000, banco: 740000 }}
];

export const WA_BASE = 'https://wa.me/573043547935';
