import React from 'react';
import { PaymentMethod } from '../types.ts';

interface ControlsProps {
  query: string;
  onQueryChange: (value: string) => void;
  paymentMethod: PaymentMethod;
  onPaymentMethodChange: (value: PaymentMethod) => void;
  condition: string;
  onConditionChange: (value: string) => void;
}

const ControlWrapper: React.FC<{ label: string; htmlFor: string; children: React.ReactNode }> = ({ label, htmlFor, children }) => (
  <div className="flex flex-col gap-1.5">
    <label htmlFor={htmlFor} className="text-sm text-[#bdbdbd]">{label}</label>
    {children}
  </div>
);

const commonInputStyles = "bg-[#202020] text-white border border-[#2a2a2a] rounded-lg px-3 py-2.5 outline-none focus:ring-2 focus:ring-[#e60000] focus:border-transparent transition";

export const Controls: React.FC<ControlsProps> = ({
  query,
  onQueryChange,
  paymentMethod,
  onPaymentMethodChange,
  condition,
  onConditionChange,
}) => {
  return (
    <section className="border-b border-[#2a2a2a] bg-[#141414]" aria-label="Controles del inventario">
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[1fr,220px,180px] gap-3 p-4">
        <ControlWrapper label="Buscar modelo" htmlFor="buscador">
          <input
            id="buscador"
            type="search"
            placeholder="Ej. iPhone 13, Pro Max, 128GB…"
            className={commonInputStyles}
            value={query}
            onChange={(e) => onQueryChange(e.target.value)}
          />
        </ControlWrapper>
        <ControlWrapper label="Medio de pago" htmlFor="medioPago">
          <select
            id="medioPago"
            className={commonInputStyles}
            value={paymentMethod}
            onChange={(e) => onPaymentMethodChange(e.target.value as PaymentMethod)}
          >
            <option value="contado">Contado</option>
            <option value="addi">Addi</option>
            <option value="sistecredito">Sistecrédito</option>
            <option value="brilla">Brilla</option>
            <option value="banco">Banco de Bogotá</option>
          </select>
        </ControlWrapper>
        <ControlWrapper label="Condición" htmlFor="filtroEstado">
          <select
            id="filtroEstado"
            className={commonInputStyles}
            value={condition}
            onChange={(e) => onConditionChange(e.target.value)}
          >
            <option value="todos">Todos</option>
            <option value="nuevo">Nuevo</option>
            <option value="semi-nuevo">Semi-nuevo</option>
          </select>
        </ControlWrapper>
      </div>
    </section>
  );
};