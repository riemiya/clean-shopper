import { useState, useEffect } from 'react';

export interface CartItem {
  id: string;
  name: string;
  price: number | null;
  image_url: string | null;
}

const STORAGE_KEY = 'clean-shopper-cart';

function load(): CartItem[] {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]');
  } catch {
    return [];
  }
}

let listeners: (() => void)[] = [];

function notify() {
  listeners.forEach(fn => fn());
}

export function useCart() {
  const [items, setItems] = useState<CartItem[]>(load);

  useEffect(() => {
    const handler = () => setItems(load());
    listeners.push(handler);
    return () => { listeners = listeners.filter(fn => fn !== handler); };
  }, []);

  function addToCart(item: CartItem) {
    const current = load();
    if (!current.find(i => i.id === item.id)) {
      const updated = [...current, item];
      localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
      setItems(updated);
      notify();
    }
  }

  function removeFromCart(id: string) {
    const updated = load().filter(i => i.id !== id);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
    setItems(updated);
    notify();
  }

  return { items, addToCart, removeFromCart, count: items.length };
}
