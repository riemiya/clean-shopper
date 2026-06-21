import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../hooks/useCart';
import './Nav.css';

export default function Nav() {
  const { count } = useCart();
  return (
    <nav className="nav">
      <Link to="/" className="nav-logo">Clean Shopper</Link>
      <div className="nav-search">
        <svg className="nav-search__icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
        </svg>
        <input className="nav-search__input" type="text" placeholder="Search" />
      </div>
      <div className="nav-icons">
        <button className="nav-icon-btn" aria-label="Profile">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>
          </svg>
        </button>
        <button className="nav-icon-btn nav-cart-btn" aria-label="Cart">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/>
          </svg>
          {count > 0 && <span className="nav-cart-badge">{count}</span>}
        </button>
      </div>
    </nav>
  );
}
