import React, { useState, useMemo, useEffect } from 'react';
import { CATALOGO } from '../constants.ts';

type TradeInCondition = 'tipoA' | 'tipoB' | 'tipoC' | 'repuesto';

const ControlWrapper: React.FC<{ label: string; htmlFor: string; children: React.ReactNode }> = ({ label, htmlFor, children }) => (
  <div className="flex flex-col gap-1.5">
    <label htmlFor={htmlFor} className="text-sm text-[#bdbdbd]">{label}</label>
    {children}
  </div>
);

const commonInputStyles = "bg-[#202020] text-white border border-[#2a2a2a] rounded-lg px-3 py-2.5 outline-none focus:ring-2 focus:ring-[#e60000] focus:border-transparent transition h-[46px]";

export const TradeInCalculator: React.FC = () => {
    const [selectedModel, setSelectedModel] = useState('');
    const [selectedCondition, setSelectedCondition] = useState<TradeInCondition>('tipoA');
    const [estimatedValue, setEstimatedValue] = useState(0);

    const tradeInModels = useMemo(() => {
        return CATALOGO.filter(p => p.precios.tipoA || p.precios.tipoB || p.precios.tipoC || p.precios.repuesto)
            .sort((a, b) => a.nombre.localeCompare(b.nombre));
    }, []);

    useEffect(() => {
        if (!selectedModel) {
            setEstimatedValue(0);
            return;
        }
        const product = CATALOGO.find(p => p.nombre === selectedModel);
        const value = product?.precios[selectedCondition] ?? 0;
        setEstimatedValue(value);
    }, [selectedModel, selectedCondition]);

    const fmtCOP = (n: number) => new Intl.NumberFormat("es-CO", { style: "currency", currency: "COP", maximumFractionDigits: 0 }).format(n);

    return (
        <section className="border-b border-[#2a2a2a] bg-black" aria-labelledby="trade-in-title">
            <div className="container mx-auto p-4">
                <h3 id="trade-in-title" className="text-lg font-bold text-white mb-3">Calculadora de Canje</h3>
                <div className="grid grid-cols-1 sm:grid-cols-[1fr,1fr,auto] gap-3 items-end">
                    <ControlWrapper label="Modelo de tu iPhone" htmlFor="tradeInModel">
                        <select
                            id="tradeInModel"
                            className={commonInputStyles}
                            value={selectedModel}
                            onChange={(e) => setSelectedModel(e.target.value)}
                        >
                            <option value="">-- Selecciona un modelo --</option>
                            {tradeInModels.map(p => (
                                <option key={p.nombre} value={p.nombre}>{p.nombre}</option>
                            ))}
                        </select>
                    </ControlWrapper>
                    <ControlWrapper label="Condición del equipo" htmlFor="tradeInCondition">
                        <select
                            id="tradeInCondition"
                            className={commonInputStyles}
                            value={selectedCondition}
                            onChange={(e) => setSelectedCondition(e.target.value as TradeInCondition)}
                        >
                            <option value="tipoA">Tipo A (Excelente estado, sin detalles)</option>
                            <option value="tipoB">Tipo B (Buen estado, rayones leves)</option>
                            <option value="tipoC">Tipo C (Detalles visibles, funcional)</option>
                            <option value="repuesto">Para Repuesto (No funcional, pantalla rota)</option>
                        </select>
                    </ControlWrapper>
                    <div className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-lg p-2.5 text-center h-[46px] flex flex-col justify-center">
                        <span className="text-sm text-[#bdbdbd] block">Valor estimado de canje:</span>
                        <strong
                            className="text-lg text-[#e60000] font-extrabold"
                            aria-live="polite"
                        >
                            {fmtCOP(estimatedValue)}
                        </strong>
                    </div>
                </div>
            </div>
        </section>
    );
};