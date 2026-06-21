import React, { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { useProduct } from '../hooks/useProduct';
import { getTagStyle } from '../lib/tagColors';
import { useCart } from '../hooks/useCart';
import { useBookmarks } from '../hooks/useBookmarks';
import ScoreRing from '../components/ScoreRing';
import ImageGallery from '../components/ImageGallery';
import { getProductGallery } from '../lib/productGalleries';
import './ProductDetailPage.css';

function ConcernDot({ level }: { level: 'none' | 'caution' | 'avoid' }) {
  return <span className={`concern-dot concern-dot--${level}`} aria-label={level} />;
}

function Accordion({ title, children, defaultOpen = false }: { title: string; children: React.ReactNode; defaultOpen?: boolean }) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div className="accordion">
      <button className="accordion__header" onClick={() => setOpen(o => !o)}>
        <span>{title}</span>
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ transform: open ? 'rotate(180deg)' : 'none', transition: 'transform 0.2s ease' }}>
          <polyline points="6 9 12 15 18 9"/>
        </svg>
      </button>
      {open && <div className="accordion__body">{children}</div>}
    </div>
  );
}

function StarRating({ rating }: { rating: number }) {
  return (
    <span className="detail-stars">
      {Array.from({ length: 5 }, (_, i) => {
        const filled = i < Math.floor(rating);
        const half = !filled && i < rating;
        return (
          <svg key={i} width="16" height="16" viewBox="0 0 24 24" fill={filled ? '#f59e0b' : half ? 'url(#half)' : 'none'} stroke="#f59e0b" strokeWidth="1.5">
            {half && (
              <defs>
                <linearGradient id="half">
                  <stop offset="50%" stopColor="#f59e0b"/>
                  <stop offset="50%" stopColor="transparent"/>
                </linearGradient>
              </defs>
            )}
            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
          </svg>
        );
      })}
    </span>
  );
}

const PRODUCT_SIZES: Record<string, string[]> = {
  'a0000000-0000-0000-0000-000000000006': ['4-pack', '6-pack', '12-pack'],
};

const DEFAULT_SIZES = ['Small', 'Medium', 'Large', 'XL'];

export default function ProductDetailPage() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { product, loading } = useProduct(id);
  const { addToCart, items } = useCart();
  const { bookmarks, toggle: toggleBookmark } = useBookmarks();
  const inCart = items.some(i => i.id === id);
  const bookmarked = bookmarks.has(id ?? '');
  const [selectedSize, setSelectedSize] = useState(0);
  const [quantity, setQuantity] = useState(1);

  if (loading) return <main className="page detail-page"><p className="loading">Loading…</p></main>;
  if (!product) return <main className="page detail-page"><p className="loading">Product not found.</p></main>;

  const galleryImages = getProductGallery(product.id, product.image_url);
  const sizes = PRODUCT_SIZES[product.id] ?? DEFAULT_SIZES;

  const sortedIngredients = [...product.product_ingredients].sort(
    (a, b) => (a.position ?? 999) - (b.position ?? 999)
  );

  return (
    <main className="detail-page">
      {/* Breadcrumb */}
      <div className="detail-breadcrumb">
        <button className="breadcrumb-link" onClick={() => navigate('/')}>Household Essentials</button>
        {product.categories && (
          <>
            <span className="breadcrumb-sep">›</span>
            <button className="breadcrumb-link" onClick={() => navigate(`/?category=${product.categories!.name.toLowerCase().replace(/ /g, '-')}`)}>
              {product.categories.name}
            </button>
          </>
        )}
        <span className="breadcrumb-sep">›</span>
        <span className="breadcrumb-current">{product.name}</span>
      </div>

      {/* Main layout */}
      <div className="detail-layout">
        {/* Left: image gallery */}
        <div className="detail-image-wrap">
          {galleryImages.length > 0 ? (
            <ImageGallery images={galleryImages} alt={product.name} />
          ) : (
            <div className="detail-image-placeholder">{product.name.charAt(0).toUpperCase()}</div>
          )}
        </div>

        {/* Right: info */}
        <div className="detail-info">
          {product.brands && (
            <Link
              to={`/?brand=${encodeURIComponent(product.brands.name)}`}
              className="detail-brand-link"
            >
              Shop all {product.brands.name}
            </Link>
          )}

          <h1 className="detail-name">{product.name}</h1>

          {product.rating && (
            <div className="detail-rating-row">
              <StarRating rating={product.rating} />
              <span className="detail-rating-value">{product.rating.toFixed(1)}</span>
              <span className="detail-rating-count">{product.review_count?.toLocaleString()} reviews</span>
            </div>
          )}

          <div className="detail-divider" />

          {product.price && (
            <p className="detail-price">${product.price.toFixed(2)}</p>
          )}

          {product.description && (
            <p className="detail-description">{product.description}</p>
          )}

          {product.bought_last_month && (
            <p className="detail-bought">{product.bought_last_month.toLocaleString()}+ bought in past month</p>
          )}

          <div className="detail-divider" />

          {/* Clean Score */}
          <div className="detail-score-row">
            <ScoreRing score={product.clean_score} size={48} />
            <div>
              <p className="score-label">Clean Score</p>
              <p className="score-sublabel">
                {product.clean_score === null
                  ? 'Not yet rated'
                  : product.clean_score >= 90
                  ? 'Excellent — very clean formula'
                  : product.clean_score >= 70
                  ? 'Good — minor concerns'
                  : 'Use caution — notable concerns'}
              </p>
            </div>
          </div>

          {/* Tags */}
          {product.product_tags.length > 0 && (
            <div className="detail-tags">
              {product.product_tags.map(pt => {
                const s = getTagStyle(pt.tags.slug ?? '');
                return (
                  <span
                    key={pt.tags.name}
                    className="tag-chip"
                    style={{ background: s.bg, color: s.color, borderColor: s.border }}
                  >
                    {pt.tags.name}
                  </span>
                );
              })}
            </div>
          )}

          {product.product_certifications.length > 0 && (
            <div className="detail-certs">
              {product.product_certifications.map(pc => (
                <span key={pc.certifications.name} className="cert-badge">✓ {pc.certifications.name}</span>
              ))}
            </div>
          )}

          <div className="detail-divider" />

          {/* Size picker */}
          <div className="detail-size-section">
            <p className="detail-size-label">Size: <strong>{sizes[selectedSize]}</strong></p>
            <div className="detail-size-options">
              {sizes.map((size, i) => (
                <button
                  key={size}
                  className={`detail-size-btn ${selectedSize === i ? 'detail-size-btn--active' : ''}`}
                  onClick={() => setSelectedSize(i)}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          <div className="detail-divider" />

          {/* Quantity + CTA */}
          <div className="detail-cta-row">
            <div className="detail-qty">
              <button className="detail-qty-btn" onClick={() => setQuantity(q => Math.max(1, q - 1))}>−</button>
              <span className="detail-qty-value">{quantity}</span>
              <button className="detail-qty-btn" onClick={() => setQuantity(q => q + 1)}>+</button>
            </div>
            <button
              className={`detail-cta ${inCart ? 'detail-cta--added' : ''}`}
              onClick={() => product && addToCart({ id: product.id, name: product.name, price: product.price, image_url: product.image_url })}
            >
              {inCart ? 'Added to Cart ✓' : 'Add to Cart'}
            </button>
          </div>

          <button
            className={`detail-wishlist ${bookmarked ? 'detail-wishlist--saved' : ''}`}
            onClick={() => id && toggleBookmark(id)}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill={bookmarked ? 'currentColor' : 'none'} stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"/>
            </svg>
            {bookmarked ? 'Saved to Bookmarks' : 'Add to Bookmarks'}
          </button>
        </div>
      </div>

      {/* Ingredients */}
      <section className="ingredients-section">
        <h2>Ingredients</h2>
        {sortedIngredients.length === 0 ? (
          <p className="no-ingredients">No ingredient data available for this product.</p>
        ) : (
          <>
            <div className="concern-legend">
              <span><ConcernDot level="none" /> Safe</span>
              <span><ConcernDot level="caution" /> Use caution</span>
              <span><ConcernDot level="avoid" /> Avoid</span>
            </div>
            <ul className="ingredient-list">
              {sortedIngredients.map((pi, i) => {
                const ing = pi.ingredients;
                return (
                  <li key={i} className={`ingredient-item ingredient-item--${ing.concern_level}`}>
                    <ConcernDot level={ing.concern_level} />
                    <div className="ingredient-info">
                      <span className="ingredient-name">{ing.name}</span>
                      {ing.concern_reason && (
                        <span className="ingredient-reason">{ing.concern_reason}</span>
                      )}
                    </div>
                  </li>
                );
              })}
            </ul>
          </>
        )}
      </section>

      {/* About this item */}
      <section className="about-section">
        <h2 className="about-title">About this item</h2>

        <Accordion title="Details" defaultOpen={true}>
          <div className="about-details-grid">
            <div>
              <h4 className="about-subtitle">Highlights</h4>
              <ul className="about-highlights">
                {product.description && <li>{product.description}</li>}
                <li>Made with non-toxic, clean ingredients safe for your home and family.</li>
                <li>Certified by leading third-party organizations for quality and safety.</li>
                <li>Eco-friendly packaging made from recycled or recyclable materials.</li>
              </ul>
            </div>
            <div>
              <h4 className="about-subtitle">Description</h4>
              <p className="about-desc">
                {product.description
                  ? `${product.description} This product is part of our curated selection of clean, non-toxic household essentials. We vet every ingredient against EWG standards so you don't have to.`
                  : 'No description available.'}
              </p>
            </div>
          </div>
        </Accordion>

        <Accordion title="Specifications">
          <div className="about-specs">
            {product.brands && <div className="about-spec-row"><span>Brand</span><span>{product.brands.name}</span></div>}
            {product.categories && <div className="about-spec-row"><span>Category</span><span>{product.categories.name}</span></div>}
            {product.clean_score !== null && <div className="about-spec-row"><span>Clean Score</span><span>{product.clean_score}/100</span></div>}
            {product.rating && <div className="about-spec-row"><span>Rating</span><span>{product.rating} / 5 ({product.review_count?.toLocaleString()} reviews)</span></div>}
            <div className="about-spec-row"><span>Size</span><span>{sizes[selectedSize]}</span></div>
          </div>
        </Accordion>

        <Accordion title="Shipping & Returns">
          <div className="about-shipping">
            <p>🚚 <strong>Free shipping</strong> on orders over $35.</p>
            <p>📦 Standard delivery in 3–5 business days. Expedited options available at checkout.</p>
            <p>↩️ <strong>Free returns</strong> within 30 days of delivery — no questions asked.</p>
          </div>
        </Accordion>

        <Accordion title="Q&A">
          <div className="about-qa">
            <div className="about-qa-item">
              <p className="about-qa-q">Is this product safe for sensitive skin?</p>
              <p className="about-qa-a">Yes — this product is fragrance-free and dermatologist tested, making it suitable for sensitive skin.</p>
            </div>
            <div className="about-qa-item">
              <p className="about-qa-q">Is the packaging recyclable?</p>
              <p className="about-qa-a">The outer packaging is made from 100% recycled cardboard. The container itself is recyclable in most areas.</p>
            </div>
            <div className="about-qa-item">
              <p className="about-qa-q">Is this product cruelty-free?</p>
              <p className="about-qa-a">Yes, this product is never tested on animals and is certified cruelty-free.</p>
            </div>
          </div>
        </Accordion>
      </section>
    </main>
  );
}
