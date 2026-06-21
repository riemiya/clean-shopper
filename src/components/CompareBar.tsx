import React from 'react';
import { Product } from '../hooks/useProducts';
import './CompareBar.css';

interface Props {
  items: Product[];
  onRemove: (product: Product) => void;
  onClear: () => void;
  onCompare: () => void;
}

export default function CompareBar({ items, onRemove, onClear, onCompare }: Props) {
  if (items.length === 0) return null;

  return (
    <div className="compare-bar">
      <div className="compare-bar__items">
        {items.map(p => (
          <div key={p.id} className="compare-bar__item">
            <div className="compare-bar__thumb">
              {p.image_url
                ? <img src={p.image_url} alt={p.name} />
                : <span>{p.name.charAt(0)}</span>
              }
            </div>
            <p className="compare-bar__name">{p.name}</p>
            <button className="compare-bar__remove" onClick={() => onRemove(p)}>✕</button>
          </div>
        ))}
        {Array.from({ length: 3 - items.length }).map((_, i) => (
          <div key={i} className="compare-bar__item compare-bar__item--empty">
            <div className="compare-bar__thumb compare-bar__thumb--empty" />
            <p className="compare-bar__name">Add a product</p>
          </div>
        ))}
      </div>

      <div className="compare-bar__actions">
        <p className="compare-bar__count">{items.length} of 3 selected</p>
        <button className="compare-bar__btn compare-bar__btn--compare" disabled={items.length < 2} onClick={onCompare}>
          Compare now
        </button>
        <button className="compare-bar__btn compare-bar__btn--clear" onClick={onClear}>
          Clear all
        </button>
      </div>
    </div>
  );
}
