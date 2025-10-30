
import { Product } from './types';

export const PLACEHOLDER_SVG = `data:image/svg+xml;utf8,${encodeURIComponent(`<svg xmlns='http://www.w3.org/2000/svg' width='400' height='400' viewBox='0 0 400 400'>
      <defs><linearGradient id='g' x1='0' x2='1'><stop stop-color='%230a0a0a'/><stop offset='1' stop-color='%23141414'/></linearGradient></defs>
      <rect width='100%' height='100%' fill='url(%23g)'/>
      <g fill='none' stroke='%23e60000' stroke-width='6'>
        <rect x='130' y='40' rx='34' ry='34' width='140' height='320'/>
        <circle cx='200' cy='78' r='6' stroke='%23fff'/>
      </g>
      <text x='200' y='360' font-family='Arial, Helvetica, sans-serif' font-size='20' fill='%23e6e6e6' text-anchor='middle'>iPhone</text>
    </svg>`)}`;

export const CATALOGO: Product[] = [
  // Semi-nuevos
  {nombre: 'iPhone X 64GB - semi-nuevo', estado: 'semi-nuevo', img: PLACEHOLDER_SVG, stock: 10, precios: { contado: 600000, addi: 702000, sistecredito: 810000, brilla: 810000, banco: 900000 }},
  {nombre: 'iPhone SE 64GB (2ª Gen) - semi-nuevo', estado: 'semi-nuevo', img: PLACEHOLDER_SVG, stock: 10, precios: { contado: 600000, addi: 702000, sistecredito: 810000, brilla: 810000, banco: 900000 }},
  {nombre: 'iPhone XR 128GB - semi-nuevo', estado: 'semi-nuevo', img: PLACEHOLDER_SVG, stock: 10, precios: { contado: 950000, addi: 1111500, sistecredito: 1282500, brilla: 1282500, banco: 1250000 }},
  {nombre: 'iPhone XS Max 64GB - semi-nuevo', estado: 'semi-nuevo', img: PLACEHOLDER_SVG, stock: 10, precios: { contado: 990000, addi: 1158300, sistecredito: 1336500, brilla: 1336500, banco: 1290000 }},
  {nombre: 'iPhone 11 64GB - semi-nuevo', estado: 'semi-nuevo', img: PLACEHOLDER_SVG, stock: 10, precios: { contado: 950000, addi: 1111500, sistecredito: 1282500, brilla: 1282500, banco: 1250000 }},
  {nombre: 'iPhone 11 128GB - semi-nuevo', estado: 'semi-nuevo', img: PLACEHOLDER_SVG, stock: 10, precios: { contado: 1190000, addi: 1392300, sistecredito: 1606500, brilla: 1606500, banco: 1490000 }},
  {nombre: 'iPhone 12 Mini 64GB - semi-nuevo', estado: 'semi-nuevo', img: PLACEHOLDER_SVG, stock: 10, precios: { contado: 1290000, addi: 1505100, sistecredito: 1732500, brilla: 1732500, banco: 1690000 }},
  {nombre: 'iPhone 12 Mini 128GB - semi-nuevo', estado: 'semi-nuevo', img: PLACEHOLDER_SVG, stock: 10, precios: { contado: 1350000, addi: 1570500, sistecredito: 1807500, brilla: 1807500, banco: 1750000 }},
  {nombre: 'iPhone 12 64GB - semi-nuevo', estado: 'semi-nuevo', img: PLACEHOLDER_SVG, stock: 10, precios: { contado: 1490000, addi: 1734300, sistecredito: 1993500, brilla: 1993500, banco: 1900000 }},
  {nombre: 'iPhone 12 128GB - semi-nuevo', estado: 'semi-nuevo', img: PLACEHOLDER_SVG, stock: 10, precios: { contado: 1550000, addi: 1800100, sistecredito: 2068500, brilla: 2068500, banco: 1950000 }},
  {nombre: 'iPhone 13 Mini 128GB - semi-nuevo', estado: 'semi-nuevo', img: PLACEHOLDER_SVG, stock: 10, precios: { contado: 1690000, addi: 1962300, sistecredito: 2254500, brilla: 2254500, banco: 2200000 }},
  {nombre: 'iPhone 13 Mini 256GB - semi-nuevo', estado: 'semi-nuevo', img: PLACEHOLDER_SVG, stock: 10, precios: { contado: 1790000, addi: 2070300, sistecredito: 2383500, brilla: 2383500, banco: 2300000 }},
  {nombre: 'iPhone 13 128GB - semi-nuevo', estado: 'semi-nuevo', img: PLACEHOLDER_SVG, stock: 10, precios: { contado: 1850000, addi: 2135500, sistecredito: 2452500, brilla: 2452500, banco: 2450000 }},
  {nombre: 'iPhone 13 Pro 128GB - semi-nuevo', estado: 'semi-nuevo', img: PLACEHOLDER_SVG, stock: 10, precios: { contado: 2250000, addi: 2597500, sistecredito: 2983500, brilla: 2983500, banco: 2790000 }},
  {nombre: 'iPhone 13 Pro Max 128GB - semi-nuevo', estado: 'semi-nuevo', img: PLACEHOLDER_SVG, stock: 10, precios: { contado: 2300000, addi: 2659000, sistecredito: 3052500, brilla: 3052500, banco: 2790000 }},
  {nombre: 'iPhone 13 Pro Max 256GB - semi-nuevo', estado: 'semi-nuevo', img: PLACEHOLDER_SVG, stock: 10, precios: { contado: 2590000, addi: 2991300, sistecredito: 3436500, brilla: 3436500, banco: 3090000 }},
  {nombre: 'iPhone 13 Pro Max 512GB - semi-nuevo', estado: 'semi-nuevo', img: PLACEHOLDER_SVG, stock: 10, precios: { contado: 2950000, addi: 3404500, sistecredito: 3915000, brilla: 3915000, banco: 3490000 }},
  
  // Nuevos
  {nombre: 'iPhone 14 128GB - nuevo', estado: 'nuevo', img: PLACEHOLDER_SVG, stock: 10, precios: { contado: 2750000, addi: 3182500, sistecredito: 3652500, brilla: 3652500, banco: 3490000 }},
  {nombre: 'iPhone 14 Pro 128GB - nuevo', estado: 'nuevo', img: PLACEHOLDER_SVG, stock: 10, precios: { contado: 3100000, addi: 3581000, sistecredito: 4102500, brilla: 4102500, banco: 3790000 }},
  {nombre: 'iPhone 14 Pro Max 256GB - nuevo', estado: 'nuevo', img: PLACEHOLDER_SVG, stock: 10, precios: { contado: 3590000, addi: 4147300, sistecredito: 4741500, brilla: 4741500, banco: 4400000 }},
  {nombre: 'iPhone 15 128GB - nuevo', estado: 'nuevo', img: PLACEHOLDER_SVG, stock: 10, precios: { contado: 3550000, addi: 4106500, sistecredito: 4695000, brilla: 4695000, banco: 4400000 }},
  {nombre: 'iPhone 15 Pro 128GB - nuevo', estado: 'nuevo', img: PLACEHOLDER_SVG, stock: 10, precios: { contado: 3790000, addi: 4381300, sistecredito: 5011500, brilla: 5011500, banco: 4750000 }},
  {nombre: 'iPhone 15 Pro Max 256GB - nuevo', estado: 'nuevo', img: PLACEHOLDER_SVG, stock: 10, precios: { contado: 4290000, addi: 4956300, sistecredito: 5674500, brilla: 5674500, banco: 5290000 }},
  {nombre: 'iPhone 15 Pro Max 512GB - nuevo', estado: 'nuevo', img: PLACEHOLDER_SVG, stock: 10, precios: { contado: 4690000, addi: 5417300, sistecredito: 6202500, brilla: 6202500, banco: 5690000 }},
  {nombre: 'iPhone 15 Pro Max 1TB - nuevo', estado: 'nuevo', img: PLACEHOLDER_SVG, stock: 10, precios: { contado: 4980000, addi: 5755800, sistecredito: 6585000, brilla: 6585000, banco: 5990000 }},
];

export const WA_BASE = 'https://wa.me/573043547935';
