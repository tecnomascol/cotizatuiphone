import React, { useState, useRef, useEffect } from 'react';
import { Product, PaymentMethod } from '../types';
import { WA_BASE } from '../constants';

interface ProductCardProps {
  product: Product;
  paymentMethod: PaymentMethod;
  onAddToCart: (product: Product, quantity: number) => void;
}

const Badge: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <span className="inline-flex items-center bg-[#121212] border border-[#2a2a2a] px-2 py-1 rounded-full text-xs capitalize">
    {children.toString().replace('-', ' ')}
  </span>
);

export const ProductCard: React.FC<ProductCardProps> = ({ product, paymentMethod, onAddToCart }) => {
  const [quantity, setQuantity] = useState(1);
  const [isAdded, setIsAdded] = useState(false);
  const [popoverOpen, setPopoverOpen] = useState(false);
  const popoverRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        popoverRef.current && !popoverRef.current.contains(event.target as Node) &&
        buttonRef.current && !buttonRef.current.contains(event.target as Node)
      ) {
        setPopoverOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const price = product.precios[paymentMethod];
  const fmtCOP = (n: number) => new Intl.NumberFormat("es-CO", { style: "currency", currency: "COP", maximumFractionDigits: 0 }).format(n);

  const handleAddToCart = () => {
    const qty = Math.max(1, Math.min(quantity, product.stock));
    onAddToCart(product, qty);
    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 1000);
  };

  const handleQuantityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = parseInt(e.target.value, 10);
    if (!isNaN(val)) {
        setQuantity(Math.max(1, Math.min(val, product.stock)));
    } else if (e.target.value === '') {
        setQuantity(1);
    }
  }

  const CreditOptionsPopover = () => (
    <div ref={popoverRef} className="absolute z-10 bottom-full mb-2 left-0 sm:left-auto sm:right-0 w-64 bg-[#121212] border border-[#2a2a2a] rounded-lg shadow-lg p-3 text-white text-sm">
      <h4 className="font-bold mb-2 text-base">Opciones de Pago</h4>
      <ul className="space-y-1">
        <li className="flex justify-between"><span>Contado:</span> <strong>{fmtCOP(product.precios.contado)}</strong></li>
        <li className="flex justify-between"><span>Addi:</span> <strong>{fmtCOP(product.precios.addi)}</strong></li>
        <li className="flex justify-between"><span>Sistecrédito:</span> <strong>{fmtCOP(product.precios.sistecredito)}</strong></li>
        <li className="flex justify-between"><span>Brilla:</span> <strong>{fmtCOP(product.precios.brilla)}</strong></li>
        <li className="flex justify-between"><span>Banco de Bogotá:</span> <strong>{fmtCOP(product.precios.banco)}</strong></li>
      </ul>
    </div>
  );

  return (
    <tr className="border-b border-[#2a2a2a] last:border-b-0 hover:bg-[#202020]/50 transition-colors">
      <td className="px-2 py-3 sm:p-3 font-bold text-white text-sm align-middle">{product.nombre}</td>
      <td className="px-2 py-3 sm:p-3 text-sm align-middle"><Badge>{product.estado}</Badge></td>
      <td className="px-2 py-3 sm:p-3 text-right font-extrabold text-[#ffdede] text-base align-middle whitespace-nowrap">
        <div className="flex items-center justify-end gap-2 relative">
          <span>{fmtCOP(price)}</span>
          <button
            ref={buttonRef}
            onClick={() => setPopoverOpen(!popoverOpen)}
            className="p-1 rounded-full hover:bg-white/10 transition-colors"
            aria-label="Ver opciones de crédito"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
            </svg>
          </button>
          {popoverOpen && <CreditOptionsPopover />}
        </div>
      </td>
      <td className="px-2 py-3 sm:p-3 align-middle">
        {product.stock > 0 ? (
          <div className="flex items-center justify-end gap-1 sm:gap-2">
            <label htmlFor={`q-${product.nombre}`} className="sr-only">Cantidad</label>
            <input
              id={`q-${product.nombre}`}
              type="number"
              min="1"
              max={product.stock}
              value={quantity}
              onChange={handleQuantityChange}
              className="w-14 sm:w-16 bg-[#121212] text-white border border-[#2a2a2a] rounded-lg p-2 text-center focus:ring-1 focus:ring-[#e60000] focus:border-transparent"
            />
            <button
              onClick={handleAddToCart}
              className={`inline-flex items-center justify-center px-3 sm:px-4 py-2 font-bold text-white rounded-lg cursor-pointer select-none transition-colors duration-300 text-sm ${isAdded ? 'bg-[#2ecc71]' : 'bg-[#e60000] hover:bg-[#b00000]'}`}
            >
              {isAdded ? '✓' : 'Agregar'}
            </button>
          </div>
        ) : (
          <div className="flex justify-end">
            <a href={WA_BASE} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center px-4 py-2 font-bold text-white bg-transparent border border-[#2a2a2a] rounded-lg cursor-pointer select-none hover:border-[#e60000] text-sm">
              Consultar
            </a>
          </div>
        )}
      </td>
    </tr>
  );
};