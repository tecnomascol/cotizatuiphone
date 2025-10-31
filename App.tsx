import React, { useState, useEffect, useMemo, useCallback } from 'react';
import { Header } from './components/Header.tsx';
import { Hero } from './components/Hero.tsx';
import { Controls } from './components/Controls.tsx';
import { TradeInCalculator } from './components/TradeInCalculator.tsx';
import { ProductGrid } from './components/ProductGrid.tsx';
import { Quote } from './components/Quote.tsx';
import { Footer } from './components/Footer.tsx';
import { Product, CartItem, PaymentMethod } from './types.ts';
import { CATALOGO, WA_BASE } from './constants.ts';

const loadFromStorage = <T,>(key: string, defaultValue: T): T => {
  try {
    const storedValue = localStorage.getItem(key);
    return storedValue ? JSON.parse(storedValue) : defaultValue;
  } catch {
    return defaultValue;
  }
};

const saveToStorage = <T,>(key: string, value: T): void => {
  localStorage.setItem(key, JSON.stringify(value));
};

const App: React.FC = () => {
  const [query, setQuery] = useState('');
  const [condition, setCondition] = useState('todos');
  const [paymentMethod, setPaymentMethod] = useState<PaymentMethod>(() => loadFromStorage<PaymentMethod>('tecnoplus_medio', 'contado'));
  const [cart, setCart] = useState<CartItem[]>(() => loadFromStorage<CartItem[]>('tecnoplus_cart_v1', []));

  useEffect(() => {
    saveToStorage('tecnoplus_medio', paymentMethod);
    // Sync cart prices with the current payment method
    setCart(prevCart => {
      const updatedCart = prevCart.map(item => {
        const product = CATALOGO.find(p => p.nombre === item.nombre);
        if (product) {
          return {
            ...item,
            precio: product.precios[paymentMethod],
            medio: paymentMethod,
          };
        }
        return item;
      });
      saveToStorage('tecnoplus_cart_v1', updatedCart);
      return updatedCart;
    });
  }, [paymentMethod]);

  const filteredCatalog = useMemo(() => {
    return CATALOGO.filter(p => {
      const matchText = (p.nombre + ' ' + p.estado).toLowerCase().includes(query.toLowerCase());
      const matchCondition = condition === 'todos' ? true : p.estado === condition;
      return matchText && matchCondition;
    });
  }, [query, condition]);

  const slug = (s: string) => s.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/[^\w]+/g, "-");

  const addToCart = useCallback((product: Product, quantity: number) => {
    setCart(prevCart => {
      const key = slug(product.nombre);
      const existingItemIndex = prevCart.findIndex(item => item.key === key);
      let newCart;

      if (existingItemIndex > -1) {
        newCart = [...prevCart];
        const existingItem = newCart[existingItemIndex];
        const newQuantity = Math.min(existingItem.cantidad + quantity, product.stock);
        newCart[existingItemIndex] = {
          ...existingItem,
          cantidad: newQuantity,
          precio: product.precios[paymentMethod],
          medio: paymentMethod
        };
      } else {
        newCart = [
          ...prevCart,
          {
            key,
            nombre: product.nombre,
            medio: paymentMethod,
            precio: product.precios[paymentMethod],
            cantidad: quantity,
            stock: product.stock,
          },
        ];
      }
      saveToStorage('tecnoplus_cart_v1', newCart);
      return newCart;
    });
  }, [paymentMethod]);

  const removeFromCart = useCallback((key: string) => {
    setCart(prevCart => {
      const newCart = prevCart.filter(item => item.key !== key);
      saveToStorage('tecnoplus_cart_v1', newCart);
      return newCart;
    });
  }, []);

  const clearCart = useCallback(() => {
    setCart([]);
    saveToStorage('tecnoplus_cart_v1', []);
  }, []);

  const sendWhatsApp = useCallback(() => {
    if (!cart.length) {
      alert('Agrega productos a la cotización.');
      return;
    }

    const fmtCOP = (n: number) => new Intl.NumberFormat("es-CO", { style: "currency", currency: "COP", maximumFractionDigits: 0 }).format(n);
    const paymentLabel = (key: PaymentMethod) => ({ contado: 'Contado', addi: 'Addi', sistecredito: 'Sistecrédito', brilla: 'Brilla', banco: 'Banco de Bogotá' })[key] || 'Contado';

    let lines = [];
    lines.push('📱 *Cotización Tecno+ Montería*');
    lines.push(`💳 Medio de pago: *${paymentLabel(paymentMethod)}*`);
    lines.push('');
    let total = 0;
    for (const it of cart) {
      const subtotal = it.precio * it.cantidad;
      total += subtotal;
      lines.push(`• ${it.nombre}`);
      lines.push(`   Cant: ${it.cantidad}  |  Unit: ${fmtCOP(it.precio)}  |  Subtotal: ${fmtCOP(subtotal)}`);
    }
    lines.push('');
    lines.push(`💰 *Total:* ${fmtCOP(total)}`);
    lines.push('');
    lines.push('📍 Enviado desde la web de Tecno+');

    const text = encodeURIComponent(lines.join('\n'));
    const url = `${WA_BASE}?text=${text}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  }, [cart, paymentMethod]);

  return (
    <>
      <Header />
      <Hero />
      <Controls
        query={query}
        onQueryChange={setQuery}
        paymentMethod={paymentMethod}
        onPaymentMethodChange={setPaymentMethod}
        condition={condition}
        onConditionChange={setCondition}
      />
      <TradeInCalculator />
      <main id="catalogo" className="container mx-auto px-4" aria-live="polite">
        <h2 className="text-white text-2xl font-bold my-6">Inventario Tecno+ (arma tu cotización)</h2>
        <ProductGrid
          products={filteredCatalog}
          paymentMethod={paymentMethod}
          onAddToCart={addToCart}
        />
      </main>
      <Quote
        cart={cart}
        paymentMethod={paymentMethod}
        onRemoveItem={removeFromCart}
        onClearCart={clearCart}
        onSendWhatsApp={sendWhatsApp}
      />
      <Footer />
    </>
  );
};

export default App;