
import React from 'react';
import { ProductCard } from './ProductCard';
import { Product, PaymentMethod } from '../types';

interface ProductGridProps {
  products: Product[];
  paymentMethod: PaymentMethod;
  onAddToCart: (product: Product, quantity: number) => void;
}

export const ProductGrid: React.FC<ProductGridProps> = ({ products, paymentMethod, onAddToCart }) => {
  const paymentLabel = { contado: 'Contado', addi: 'Addi', sistecredito: 'Sistecrédito', brilla: 'Brilla', banco: 'Banco de Bogotá' }[paymentMethod];

  return (
    <div className="overflow-x-auto bg-[#202020] border border-[#2a2a2a] rounded-2xl">
      <table className="w-full text-left min-w-[700px]">
        <thead className="border-b border-[#2a2a2a] bg-black/20">
          <tr>
            <th className="p-3 text-sm font-bold text-white uppercase tracking-wider">Modelo</th>
            <th className="p-3 text-sm font-bold text-white uppercase tracking-wider">Condición</th>
            <th className="p-3 text-sm font-bold text-white uppercase tracking-wider text-right">Precio ({paymentLabel})</th>
            <th className="p-3 text-sm font-bold text-white uppercase tracking-wider text-right">Acciones</th>
          </tr>
        </thead>
        <tbody>
          {products.length === 0 ? (
            <tr>
              <td colSpan={4} className="p-6 text-center text-[#bdbdbd]">
                No se encontraron modelos que coincidan con tu búsqueda.
              </td>
            </tr>
          ) : (
            products.map(product => (
              <ProductCard
                key={product.nombre}
                product={product}
                paymentMethod={paymentMethod}
                onAddToCart={onAddToCart}
              />
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};
