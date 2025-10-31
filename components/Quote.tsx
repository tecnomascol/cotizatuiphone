import React from 'react';
import { CartItem, PaymentMethod } from '../types.ts';

interface QuoteProps {
  cart: CartItem[];
  paymentMethod: PaymentMethod;
  onRemoveItem: (key: string) => void;
  onClearCart: () => void;
  onSendWhatsApp: () => void;
}

const QuoteItem: React.FC<{ item: CartItem; onRemove: (key: string) => void }> = ({ item, onRemove }) => {
    const fmtCOP = (n: number) => new Intl.NumberFormat("es-CO", { style: "currency", currency: "COP", maximumFractionDigits: 0 }).format(n);
    const paymentLabel = (key: PaymentMethod) => ({ contado: 'Contado', addi: 'Addi', sistecredito: 'Sistecrédito', brilla: 'Brilla', banco: 'Banco de Bogotá' })[key] || 'Contado';
    
    return (
        <div className="flex flex-col sm:flex-row sm:items-center justify-between bg-[#121212] border border-[#2a2a2a] rounded-xl p-2.5 gap-2">
            <div className="flex-grow">
                <div className="font-bold text-sm">{item.nombre}</div>
                <div className="text-[#cfcfcf] text-xs">{paymentLabel(item.medio)}</div>
            </div>
            <div className="flex items-center justify-between sm:justify-end gap-4">
                <div className="text-right">
                    <div className="text-sm">{item.cantidad} u. x {fmtCOP(item.precio)}</div>
                </div>
                 <div className="text-right">
                    <strong className="text-sm block">{fmtCOP(item.precio * item.cantidad)}</strong>
                    <div onClick={() => onRemove(item.key)} className="text-[#ffb0b0] hover:text-[#ff6b6b] cursor-pointer text-xs" role="button" aria-label="Quitar">
                        Eliminar
                    </div>
                </div>
            </div>
        </div>
    );
};


export const Quote: React.FC<QuoteProps> = ({ cart, paymentMethod, onRemoveItem, onClearCart, onSendWhatsApp }) => {
  const total = cart.reduce((acc, item) => acc + item.precio * item.cantidad, 0);
  const fmtCOP = (n: number) => new Intl.NumberFormat("es-CO", { style: "currency", currency: "COP", maximumFractionDigits: 0 }).format(n);
  const paymentLabel = (key: PaymentMethod) => ({ contado: 'Contado', addi: 'Addi', sistecredito: 'Sistecrédito', brilla: 'Brilla', banco: 'Banco de Bogotá' })[key] || 'Contado';

  return (
    <aside id="cotizacion" className="py-7 border-t border-[#2a2a2a] bg-[#0a0a0a]">
      <div className="container mx-auto px-4">
        <h2 className="text-white text-2xl font-bold mb-4">Tu cotización</h2>
        <div className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-2xl p-3">
          {cart.length === 0 ? (
            <div className="py-6 text-center text-[#cfcfcf]">Aún no has agregado productos.</div>
          ) : (
            <>
              <div className="flex flex-col gap-2">
                {cart.map(item => (
                    <QuoteItem key={item.key} item={item} onRemove={onRemoveItem} />
                ))}
              </div>
              <div className="mt-3 border-t border-dashed border-[#2a2a2a] pt-2.5">
                <div className="flex justify-between items-center font-bold">
                  <span>Total</span>
                  <strong className="text-xl">{fmtCOP(total)}</strong>
                </div>
                <p className="text-[#cfcfcf] text-xs mt-2">
                  *Precios según <span className="font-semibold">{paymentLabel(paymentMethod)}</span>. Puedes cambiar el medio de pago arriba.
                </p>
              </div>
            </>
          )}
        </div>
        <div className="mt-4 flex flex-col sm:flex-row gap-2">
          <button 
            onClick={onSendWhatsApp} 
            className="w-full sm:flex-grow order-1 sm:order-2 inline-flex items-center justify-center gap-2 px-7 py-4 text-lg font-bold text-white bg-[#e60000] rounded-lg cursor-pointer select-none hover:bg-[#b00000] transition-colors disabled:opacity-50 disabled:cursor-not-allowed" 
            disabled={cart.length === 0}
          >
            Enviar por WhatsApp 💬
          </button>
          <button 
            onClick={onClearCart} 
            disabled={cart.length === 0} 
            className="w-full sm:w-auto order-2 sm:order-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 font-bold text-white bg-transparent border border-[#2a2a2a] rounded-lg cursor-pointer select-none hover:border-[#e60000] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Limpiar
          </button>
        </div>
      </div>
    </aside>
  );
};