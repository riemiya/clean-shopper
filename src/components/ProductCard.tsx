import React from 'react';
import { Link } from 'react-router-dom';
import { Product } from '../hooks/useProducts';
import { getTagStyle } from '../lib/tagColors';
import { useBookmarks } from '../hooks/useBookmarks';
import { useCart } from '../hooks/useCart';
import './ProductCard.css';

interface Props {
  product: Product;
  onCompare?: (product: Product) => void;
  isComparing?: boolean;
  compareDisabled?: boolean;
}

export default function ProductCard({ product, onCompare, isComparing = false, compareDisabled = false }: Props) {
  const { bookmarks, toggle } = useBookmarks();
  const bookmarked = bookmarks.has(product.id);
  const { addToCart, items } = useCart();
  const inCart = items.some(i => i.id === product.id);

  return (
    <Link to={`/product/${product.id}`} className="product-card">
      <div className="product-card__header">
        {onCompare && (
          <button
            className={`compare-checkbox ${isComparing ? 'active' : ''} ${compareDisabled ? 'disabled' : ''}`}
            onClick={e => { e.preventDefault(); if (!compareDisabled || isComparing) onCompare(product); }}
            aria-label="Compare"
          >
            {isComparing && (
              <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="20 6 9 17 4 12"/>
              </svg>
            )}
          </button>
        )}
        {product.image_url ? (
          <img
            src={product.image_url}
            alt={product.name}
            className="product-card__image"
          />
        ) : (
          <div className="product-card__image-placeholder">
            {product.name.charAt(0)}
          </div>
        )}
        <button
          className="bookmark-btn"
          onClick={e => { e.preventDefault(); toggle(product.id); }}
          aria-label={bookmarked ? 'Remove bookmark' : 'Bookmark'}
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill={bookmarked ? '#16a34a' : '#374151'} stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"/>
          </svg>
        </button>
      </div>
      <div className="product-card__body">
        {product.price && <p className="product-card__price">${product.price.toFixed(2)}</p>}
        <h3 className="product-card__name">{product.name}</h3>
        {product.description && (
          <p className="product-card__description">{product.description}</p>
        )}
        {product.rating && (
          <div className="product-card__rating">
            <span className="product-card__stars">
              {'★'.repeat(Math.round(product.rating))}{'☆'.repeat(5 - Math.round(product.rating))}
            </span>
            <span className="product-card__rating-count">
              {product.rating.toFixed(1)} ({product.review_count?.toLocaleString()})
            </span>
          </div>
        )}
        {product.bought_last_month && (
          <p className="product-card__bought">{product.bought_last_month.toLocaleString()}+ bought in past month</p>
        )}
        {product.product_tags.length > 0 && (
          <div className="product-card__tags">
            {product.product_tags.slice(0, 3).map(pt => {
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
        )}
        <button
          className={`product-card__cta ${inCart ? 'product-card__cta--added' : ''}`}
          onClick={e => { e.preventDefault(); addToCart({ id: product.id, name: product.name, price: product.price, image_url: product.image_url }); }}
        >
          {inCart ? 'Added ✓' : 'Add to Cart'}
        </button>
      </div>
    </Link>
  );
}
