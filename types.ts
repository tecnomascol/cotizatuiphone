export type PaymentMethod = 'contado' | 'addi' | 'sistecredito' | 'banco' | 'brilla';

export interface Product {
  nombre: string;
  estado: 'nuevo' | 'semi-nuevo';
  img: string;
  stock: number;
  precios: {
    contado: number;
    addi: number;
    sistecredito: number;
    banco: number;
    brilla: number;
    tipoA?: number;
    tipoB?: number;
    tipoC?: number;
    repuesto?: number;
  };
}

export interface CartItem {
  key: string;
  nombre: string;
  medio: PaymentMethod;
  precio: number;
  cantidad: number;
  stock: number;
}