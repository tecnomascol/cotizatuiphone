import React from 'react';

export const Hero: React.FC = () => {
  return (
    <section className="hero relative overflow-hidden bg-black text-center py-16 sm:py-20 md:py-24 px-4">
       <div className="absolute inset-0 bg-[radial-gradient(circle_500px_at_50%_200px,#e6000033,transparent)] opacity-50"></div>
       <div className="relative max-w-3xl mx-auto animate-fadeUp">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold m-0 mb-2.5 text-white">Arma tu cotización con el inventario Tecno+</h1>
        <p className="opacity-90 m-0 mb-5 text-[#e6e6e6]">
          Selecciona equipos del inventario, define cantidades y medio de pago, y <strong>envía tu cotización por WhatsApp</strong>.
        </p>
        <a href="#catalogo" className="inline-flex items-center justify-center gap-2 px-7 py-4 text-lg font-bold text-white bg-[#e60000] rounded-lg cursor-pointer select-none hover:bg-[#b00000] hover:-translate-y-0.5 transition-transform">
          Armar cotización
        </a>
      </div>
    </section>
  );
};