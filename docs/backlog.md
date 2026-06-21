# Clean Shopper — Development Backlog

Priority: **P1** = build first · **P2** = build next · **P3** = nice to have · **done** = complete

---

## Foundation

| # | Task | Priority |
|---|------|----------|
| CS-001 | Set up React app structure and routing (Chat, Cart, Preferences pages + React Router) | P1 |
| CS-002 | Create Supabase project and run schema migration | done |
| CS-003 | Wire up Supabase client (.env.local + src/lib/supabase.ts) | done |
| CS-004 | Session management — generate UUID on first visit, store in localStorage, write to sessions table | P1 |

---

## Conversational Interface

| # | Task | Priority |
|---|------|----------|
| CS-005 | Build chat UI — message thread, input box, user/assistant bubbles | P1 |
| CS-006 | Connect chat to Claude API and stream responses | P1 |
| CS-007 | Persist conversation history to conversations table, reload on refresh | P1 |
| CS-008 | Inject session preferences into Claude system prompt on every request | P1 |

---

## Product Research

| # | Task | Priority |
|---|------|----------|
| CS-009 | Product recommendation cards — name, brand, clean score rendered in chat | P1 |
| CS-010 | Ingredient safety display — concern level (none/caution/avoid) and reason on product cards | P1 |
| CS-011 | Side-by-side comparison view — table with scores, ingredients, and winner callout | P1 |
| CS-012 | Enable web search tool for Claude to find products not in the database | P1 |
| CS-013 | Certification badges on product cards (EWG Verified, USDA Organic, B Corp, etc.) | P2 |
| CS-014 | Dietary tag chips on product cards (vegan, gluten-free, non-GMO, etc.) | P2 |

---

## Preference Management

| # | Task | Priority |
|---|------|----------|
| CS-015 | Preferences page — show all saved preferences grouped by type | P1 |
| CS-016 | Add / remove preferences — ingredients to avoid, trusted brands, avoided brands | P1 |
| CS-017 | Save preferences from chat — one-click save when Claude detects a preference | P2 |
| CS-018 | Required certifications filter — only recommend products with selected certs | P3 |

---

## Shopping Cart & Lists

| # | Task | Priority |
|---|------|----------|
| CS-019 | Add to cart button on product cards — writes to cart_items | P1 |
| CS-020 | Cart page — item list with quantity controls, remove button, persists across sessions | P1 |
| CS-021 | Cart item count badge in nav | P2 |
| CS-022 | Shopping lists — create named lists, add custom items, check off while shopping | P2 |
| CS-023 | Share a list — generate a public read-only URL, no login required | P3 |

---

## Saved & Favorites

| # | Task | Priority |
|---|------|----------|
| CS-024 | Star products as favorites — save starred products, view in a favorites tab across sessions | P2 |

---

## Out of Scope (V1)

- User accounts / authentication
- Mobile app
- Barcode scanning
- Checkout / payment processing
- Direct retailer integrations
