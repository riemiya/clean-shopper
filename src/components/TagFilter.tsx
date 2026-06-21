import React from 'react';
import { Tag } from '../hooks/useTags';
import './TagFilter.css';

interface Props {
  tags: Tag[];
  selected: string | null;
  onChange: (slug: string | null) => void;
}

export default function TagFilter({ tags, selected, onChange }: Props) {
  return (
    <div className="tag-filter">
      <button
        className={`tag-filter__chip ${selected === null ? 'active' : ''}`}
        onClick={() => onChange(null)}
      >
        All
      </button>
      {tags.map(tag => (
        <button
          key={tag.slug}
          className={`tag-filter__chip ${selected === tag.slug ? 'active' : ''}`}
          onClick={() => onChange(selected === tag.slug ? null : tag.slug)}
        >
          {tag.name}
        </button>
      ))}
    </div>
  );
}
