import React from 'react';
import { Category } from '../hooks/useCategories';
import './CategorySidebar.css';

interface Props {
  categories: Category[];
  selected: string | null;
  onChange: (slug: string | null) => void;
}

export default function CategorySidebar({ categories, selected, onChange }: Props) {
  return (
    <aside className="category-sidebar">
      <p className="category-sidebar__heading">Categories</p>
      <ul className="category-sidebar__list">
        <li>
          <button
            className={`category-sidebar__item ${selected === null ? 'active' : ''}`}
            onClick={() => onChange(null)}
          >
            All Products
          </button>
        </li>
        {categories.map(cat => (
          <li key={cat.slug}>
            <button
              className={`category-sidebar__item ${selected === cat.slug ? 'active' : ''}`}
              onClick={() => onChange(selected === cat.slug ? null : cat.slug)}
            >
              {cat.name}
            </button>
          </li>
        ))}
      </ul>
    </aside>
  );
}
