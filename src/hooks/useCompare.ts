import { useState } from 'react';
import { Product } from './useProducts';

export function useCompare() {
  const [compareItems, setCompareItems] = useState<Product[]>([]);

  function toggle(product: Product) {
    setCompareItems(prev => {
      const exists = prev.find(p => p.id === product.id);
      if (exists) return prev.filter(p => p.id !== product.id);
      if (prev.length >= 3) return prev;
      return [...prev, product];
    });
  }

  function clear() {
    setCompareItems([]);
  }

  return { compareItems, toggle, clear };
}
