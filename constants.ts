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

// WhatsApp number placeholder
export const WA_BASE = 'https://wa.me/573001234567';

export const CATALOGO: Product[] = [
  {nombre: 'iPhone X 64GB - semi-nuevo', estado: 'semi-nuevo', img: PLACEHOLDER_SVG, stock: 10, precios: { contado: 600000, addi: 702000, sistecredito: 810000, brilla: 810000, banco: 900000 }},
  {nombre: 'iPhone SE 64GB Negro (2ª Gen) - semi-nuevo', estado: 'semi-nuevo', img: PLACEHOLDER_SVG, stock: 10, precios: { contado: 600000, addi: 702000, sistecredito: 810000, brilla: 810000, banco: 900000 }},
  {nombre: 'iPhone XR 128GB - semi-nuevo', estado: 'semi-nuevo', img: PLACEHOLDER_SVG, stock: 10, precios: { contado: 950000, addi: 1111500, sistecredito: 1282500, brilla: 1282500, banco: 1250000 }},
  {nombre: 'iPhone XS Max 64GB - semi-nuevo', estado: 'semi-nuevo', img: PLACEHOLDER_SVG, stock: 10, precios: { contado: 990000, addi: 1158300, sistecredito: 1336500, brilla: 1336500, banco: 1290000 }},
  {nombre: 'iPhone 11 Pro Max 64GB - semi-nuevo', estado: 'semi-nuevo', img: PLACEHOLDER_SVG, stock: 10, precios: { contado: 1350000, addi: 1579500, sistecredito: 1822500, brilla: 1822500, banco: 1750000 }},
  {nombre: 'iPhone 12 128GB - semi-nuevo', estado: 'semi-nuevo', img: PLACEHOLDER_SVG, stock: 8, precios: { contado: 1800000, addi: 2106000, sistecredito: 2430000, brilla: 2430000, banco: 2300000 }},
  {nombre: 'iPhone 13 128GB - nuevo', estado: 'nuevo', img: PLACEHOLDER_SVG, stock: 5, precios: { contado: 2500000, addi: 2925000, sistecredito: 3375000, brilla: 3375000, banco: 3100000 }},
  {nombre: 'iPhone 14 Pro 256GB - nuevo', estado: 'nuevo', img: PLACEHOLDER_SVG, stock: 3, precios: { contado: 4500000, addi: 5265000, sistecredito: 6075000, brilla: 6075000, banco: 5500000 }},
  {nombre: 'iPhone 15 Pro Max 256GB - nuevo', estado: 'nuevo', img: PLACEHOLDER_SVG, stock: 2, precios: { contado: 5800000, addi: 6786000, sistecredito: 7830000, brilla: 7830000, banco: 7000000 }}
];
