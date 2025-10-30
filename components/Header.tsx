
import React from 'react';

export const Header: React.FC = () => {
  return (
    <header className="sticky top-0 z-30 flex items-center justify-between px-4 py-2.5 bg-black/75 backdrop-blur-lg border-b border-[#2a2a2a]">
      <div className="flex items-center gap-2.5">
        <div className="grid w-9 h-9 rounded-lg place-items-center bg-[radial-gradient(70%_60%_at_50%_40%,rgba(230,0,0,0.3)_0,transparent_60%),linear-gradient(135deg,#1a1a1a,#0c0c0c)] font-extrabold text-white">
          T+
        </div>
        <span className="text-xl text-white">
          <strong className="text-[#e60000]">Tecno</strong>+
        </span>
      </div>
      <nav className="flex gap-2.5">
        <a href="#catalogo" className="inline-flex items-center justify-center gap-2 px-4 py-2.5 font-bold text-white bg-transparent border border-[#2a2a2a] rounded-lg cursor-pointer select-none hover:border-[#e60000] transition-colors">
          Inventario
        </a>
        <a href="#cotizacion" className="inline-flex items-center justify-center gap-2 px-4 py-2.5 font-bold text-white bg-[#e60000] rounded-lg cursor-pointer select-none hover:bg-[#b00000] hover:-translate-y-0.5 transition-transform">
          Ver cotización
        </a>
      </nav>
    </header>
  );
};
