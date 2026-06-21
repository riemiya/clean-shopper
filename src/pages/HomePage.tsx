import React, { useState } from 'react';
import { useProducts } from '../hooks/useProducts';
import { useTags } from '../hooks/useTags';
import { useCategories } from '../hooks/useCategories';
import { useCompare } from '../hooks/useCompare';
import ProductCard from '../components/ProductCard';
import TagFilter from '../components/TagFilter';
import CategorySidebar from '../components/CategorySidebar';
import CompareBar from '../components/CompareBar';
import CompareModal from '../components/CompareModal';
import { useSearchParams } from 'react-router-dom';
import './HomePage.css';

export default function HomePage() {
  const [selectedTag, setSelectedTag] = useState<string | null>(null);
  const { compareItems, toggle: toggleCompare, clear: clearCompare } = useCompare();
  const [showCompare, setShowCompare] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const selectedBrand = searchParams.get('brand');
  const selectedCategory = searchParams.get('category');
  const { products, loading } = useProducts(selectedTag, selectedCategory, selectedBrand);
  const tags = useTags();
  const categories = useCategories();

  return (
    <div className="home-layout">
      <CategorySidebar
        categories={categories}
        selected={selectedCategory}
        onChange={(slug) => setSearchParams(slug ? { category: slug } : {})}
      />

      <main className="page home-main">
        <div className="home-header">
          {selectedBrand ? (
            <>
              <h2>Products by {selectedBrand}</h2>
              <p>
                <button className="brand-clear" onClick={() => setSearchParams({})}>
                  ← Show all products
                </button>
              </p>
            </>
          ) : (
            <>
              <h2>Household Essentials</h2>
              <p>Non-toxic, sustainable picks for your home and pantry.</p>
            </>
          )}
        </div>

        <TagFilter tags={tags} selected={selectedTag} onChange={setSelectedTag} />

        {loading ? (
          <div className="loading">Loading products…</div>
        ) : products.length === 0 ? (
          <div className="loading">No products found for this filter.</div>
        ) : (
          <div className="product-grid">
            {products.map(product => (
              <ProductCard
              key={product.id}
              product={product}
              onCompare={toggleCompare}
              isComparing={compareItems.some(p => p.id === product.id)}
              compareDisabled={compareItems.length >= 3}
            />
            ))}
          </div>
        )}
      </main>

      <CompareBar
        items={compareItems}
        onRemove={toggleCompare}
        onClear={clearCompare}
        onCompare={() => setShowCompare(true)}
      />

      {showCompare && (
        <CompareModal
          items={compareItems}
          onClose={() => setShowCompare(false)}
        />
      )}
    </div>
  );
}
