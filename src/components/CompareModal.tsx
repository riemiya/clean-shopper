import React from 'react';
import { Product } from '../hooks/useProducts';
import ScoreRing from './ScoreRing';
import { getTagStyle } from '../lib/tagColors';
import './CompareModal.css';

interface Props {
  items: Product[];
  onClose: () => void;
}

const ROWS = [
  { label: 'Price',      key: 'price' },
  { label: 'Clean Score', key: 'score' },
  { label: 'Category',   key: 'category' },
  { label: 'Brand',      key: 'brand' },
  { label: 'Diet Tags',  key: 'tags' },
];

export default function CompareModal({ items, onClose }: Props) {
  return (
    <div className="compare-modal-overlay" onClick={onClose}>
      <div className="compare-modal" onClick={e => e.stopPropagation()}>

        <div className="compare-modal__header">
          <h2>Compare Products</h2>
          <button className="compare-modal__close" onClick={onClose}>✕</button>
        </div>

        <div className="compare-table">

          {/* Product headers */}
          <div className="compare-table__row compare-table__row--header">
            <div className="compare-table__label" />
            {items.map(p => (
              <div key={p.id} className="compare-table__cell compare-table__cell--product">
                <div className="compare-table__img">
                  {p.image_url
                    ? <img src={p.image_url} alt={p.name} />
                    : <span>{p.name.charAt(0)}</span>}
                </div>
                <p className="compare-table__product-name">{p.name}</p>
              </div>
            ))}
          </div>

          {/* Price */}
          <div className="compare-table__row">
            <div className="compare-table__label">Price</div>
            {items.map(p => (
              <div key={p.id} className="compare-table__cell">
                <span className="compare-table__price">
                  {p.price ? `$${p.price.toFixed(2)}` : '—'}
                </span>
              </div>
            ))}
          </div>

          {/* Clean Score */}
          <div className="compare-table__row">
            <div className="compare-table__label">Clean Score</div>
            {items.map(p => (
              <div key={p.id} className="compare-table__cell">
                <ScoreRing score={p.clean_score} size={52} />
              </div>
            ))}
          </div>

          {/* Category */}
          <div className="compare-table__row">
            <div className="compare-table__label">Category</div>
            {items.map(p => (
              <div key={p.id} className="compare-table__cell">
                <span className="compare-table__text">{p.categories?.name ?? '—'}</span>
              </div>
            ))}
          </div>

          {/* Brand */}
          <div className="compare-table__row">
            <div className="compare-table__label">Brand</div>
            {items.map(p => (
              <div key={p.id} className="compare-table__cell">
                <span className="compare-table__text">{p.brands?.name ?? '—'}</span>
              </div>
            ))}
          </div>

          {/* Tags */}
          <div className="compare-table__row">
            <div className="compare-table__label">Diet Tags</div>
            {items.map(p => (
              <div key={p.id} className="compare-table__cell">
                <div className="compare-table__tags">
                  {p.product_tags.length === 0 && <span className="compare-table__text">—</span>}
                  {p.product_tags.map(pt => {
                    const s = getTagStyle(pt.tags?.slug ?? '');
                    return (
                      <span
                        key={pt.tags?.slug}
                        className="tag-chip"
                        style={{ background: s.bg, color: s.color, borderColor: s.border }}
                      >
                        {pt.tags?.name}
                      </span>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </div>
  );
}
