import React, { useState, useRef, useEffect, useCallback } from 'react';
import { ProductCard } from './ProductCard';
import { Product, PaymentMethod } from '../types';

interface ProductGridProps {
  products: Product[];
  paymentMethod: PaymentMethod;
  onAddToCart: (product: Product, quantity: number) => void;
}

export const ProductGrid: React.FC<ProductGridProps> = ({ products, paymentMethod, onAddToCart }) => {
  const paymentLabel = { contado: 'Contado', addi: 'Addi', sistecredito: 'Sistecrédito', brilla: 'Brilla', banco: 'Banco de Bogotá' }[paymentMethod];

  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [showLeftFade, setShowLeftFade] = useState(false);
  const [showRightFade, setShowRightFade] = useState(false);

  const handleScrollAndResize = useCallback(() => {
    const el = scrollContainerRef.current;
    if (el) {
      const hasOverflow = el.scrollWidth > el.clientWidth;
      if (!hasOverflow) {
        setShowLeftFade(false);
        setShowRightFade(false);
        return;
      }
      
      const isScrolledToLeft = el.scrollLeft <= 0;
      const isScrolledToRight = el.scrollLeft + el.clientWidth >= el.scrollWidth - 1;
      
      setShowLeftFade(!isScrolledToLeft);
      setShowRightFade(!isScrolledToRight);
    }
  }, []);

  useEffect(() => {
    const el = scrollContainerRef.current;
    if (!el) return;

    handleScrollAndResize();

    el.addEventListener('scroll', handleScrollAndResize, { passive: true });
    const resizeObserver = new ResizeObserver(handleScrollAndResize);
    resizeObserver.observe(el);

    return () => {
      el.removeEventListener('scroll', handleScrollAndResize);
      resizeObserver.disconnect();
    };
  }, [handleScrollAndResize, products]);

  return (
    <div className="relative">
      <div
        ref={scrollContainerRef}
        className="overflow-x-auto bg-[#1a1a1a] border border-[#2a2a1a] rounded-2xl"
      >
        <table className="w-full text-left min-w-[600px]">
          <thead className="border-b border-[#2a2a1a] bg-black/20 sticky top-0 z-10">
            <tr>
              <th className="px-2 py-3 sm:p-3 text-sm font-bold text-white uppercase tracking-wider bg-[#1a1a1a]">Modelo</th>
              <th className="px-2 py-3 sm:p-3 text-sm font-bold text-white uppercase tracking-wider bg-[#1a1a1a]">Condición</th>
              <th className="px-2 py-3 sm:p-3 text-sm font-bold text-white uppercase tracking-wider text-right bg-[#1a1a1a]">Precio ({paymentLabel})</th>
              <th className="px-2 py-3 sm:p-3 text-sm font-bold text-white uppercase tracking-wider text-right bg-[#1a1a1a]">Acciones</th>
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
      <div 
        aria-hidden="true"
        className={`absolute top-0 left-0 h-full w-8 bg-gradient-to-r from-[#1a1a1a] to-transparent pointer-events-none transition-opacity duration-300 rounded-l-2xl ${showLeftFade ? 'opacity-100' : 'opacity-0'}`}
      />
      <div
        aria-hidden="true"
        className={`absolute top-0 right-0 h-full w-8 bg-gradient-to-l from-[#1a1a1a] to-transparent pointer-events-none transition-opacity duration-300 rounded-r-2xl ${showRightFade ? 'opacity-100' : 'opacity-0'}`}
      />
    </div>
  );
};
