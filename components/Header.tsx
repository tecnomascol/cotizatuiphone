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
        <a href="#catalogo" className="inline-flex items-center justify-center gap-2 px-3 sm:px-4 py-2.5 font-bold text-white bg-transparent border border-[#2a2a2a] rounded-lg cursor-pointer select-none hover:border-[#e60000] transition-colors" aria-label="Ir al inventario">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 sm:hidden" viewBox="0 0 20 20" fill="currentColor">
            <path d="M3 3a1 1 0 000 2h14a1 1 0 100-2H3zM3 7a1 1 0 000 2h14a1 1 0 100-2H3zM3 11a1 1 0 100 2h14a1 1 0 100-2H3zM3 15a1 1 0 100 2h14a1 1 0 100-2H3z" />
          </svg>
          <span className="hidden sm:inline">Inventario</span>
        </a>
        <a href="#cotizacion" className="inline-flex items-center justify-center gap-2 px-3 sm:px-4 py-2.5 font-bold text-white bg-[#e60000] rounded-lg cursor-pointer select-none hover:bg-[#b00000] hover:-translate-y-0.5 transition-transform" aria-label="Ver cotización">
           <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 sm:hidden" viewBox="0 0 20 20" fill="currentColor">
            <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
          </svg>
          <span className="hidden sm:inline">Ver cotización</span>
        </a>
      </nav>
    </header>
  );
};