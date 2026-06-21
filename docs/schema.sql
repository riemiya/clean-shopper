-- Clean Shopper Database Schema
-- Run this in the Supabase SQL Editor

-- Enums
create type pref_type as enum (
  'avoid_ingredient',
  'trusted_brand',
  'required_cert',
  'avoid_brand'
);

create type concern_level as enum ('none', 'caution', 'avoid');

-- Sessions (V1 identity anchor — no auth required)
create table sessions (
  id          uuid primary key default gen_random_uuid(),
  created_at  timestamptz not null default now(),
  last_active timestamptz not null default now(),
  user_id     uuid -- nullable, for V2 when auth is added
);

-- Users (V2 placeholder)
create table users (
  id         uuid primary key default gen_random_uuid(),
  email      text unique not null,
  name       text,
  created_at timestamptz not null default now()
);

-- Preferences
create table preferences (
  id         uuid primary key default gen_random_uuid(),
  session_id uuid not null references sessions(id) on delete cascade,
  type       pref_type not null,
  value      text not null,
  notes      text,
  created_at timestamptz not null default now()
);

-- Categories (supports subcategories via parent_id)
create table categories (
  id        uuid primary key default gen_random_uuid(),
  name      text not null,
  slug      text unique not null,
  parent_id uuid references categories(id)
);

-- Brands
create table brands (
  id         uuid primary key default gen_random_uuid(),
  name       text not null,
  website    text,
  created_at timestamptz not null default now()
);

-- Products (cache layer — populated when Claude fetches data)
create table products (
  id           uuid primary key default gen_random_uuid(),
  name         text not null,
  brand_id     uuid references brands(id),
  category_id  uuid references categories(id),
  clean_score  int check (clean_score between 0 and 100),
  ewg_url      text,
  image_url    text,
  cached_at    timestamptz,
  created_at   timestamptz not null default now(),
  updated_at   timestamptz not null default now()
);

-- Ingredients
create table ingredients (
  id             uuid primary key default gen_random_uuid(),
  name           text unique not null,
  concern_level  concern_level not null default 'none',
  concern_reason text,
  aliases        text[],
  cached_at      timestamptz
);

-- Product ↔ Ingredients (junction)
create table product_ingredients (
  product_id    uuid not null references products(id) on delete cascade,
  ingredient_id uuid not null references ingredients(id) on delete cascade,
  position      int, -- 1 = highest by weight
  primary key (product_id, ingredient_id)
);

-- Certifications (EWG Verified, USDA Organic, B Corp, etc.)
create table certifications (
  id     uuid primary key default gen_random_uuid(),
  name   text not null,
  issuer text
);

-- Product ↔ Certifications (junction)
create table product_certifications (
  product_id       uuid not null references products(id) on delete cascade,
  certification_id uuid not null references certifications(id) on delete cascade,
  primary key (product_id, certification_id)
);

-- Tags (dietary labels: organic, vegan, gluten-free, non-GMO, etc.)
create table tags (
  id   uuid primary key default gen_random_uuid(),
  name text unique not null,
  slug text unique not null
);

-- Product ↔ Tags (junction)
create table product_tags (
  product_id uuid not null references products(id) on delete cascade,
  tag_id     uuid not null references tags(id) on delete cascade,
  primary key (product_id, tag_id)
);

-- Cart Items
create table cart_items (
  id         uuid primary key default gen_random_uuid(),
  session_id uuid not null references sessions(id) on delete cascade,
  product_id uuid not null references products(id) on delete cascade,
  quantity   int not null default 1,
  added_at   timestamptz not null default now()
);

-- Shopping Lists
create table shopping_lists (
  id         uuid primary key default gen_random_uuid(),
  session_id uuid not null references sessions(id) on delete cascade,
  name       text not null,
  is_active  boolean not null default true,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

-- List Items
create table list_items (
  id          uuid primary key default gen_random_uuid(),
  list_id     uuid not null references shopping_lists(id) on delete cascade,
  product_id  uuid references products(id), -- nullable: item may not be in catalog
  custom_name text,                         -- for items not in the product catalog
  quantity    int not null default 1,
  unit        text,                         -- "oz", "count", "lbs"
  is_checked  boolean not null default false,
  notes       text,
  added_at    timestamptz not null default now()
);

-- Conversations
create table conversations (
  id         uuid primary key default gen_random_uuid(),
  session_id uuid not null references sessions(id) on delete cascade,
  role       text not null check (role in ('user', 'assistant')),
  content    text not null,
  created_at timestamptz not null default now()
);

-- Recommendation Products (products surfaced in a conversation turn)
create table recommendation_products (
  conversation_id uuid not null references conversations(id) on delete cascade,
  product_id      uuid not null references products(id) on delete cascade,
  rank            int not null,
  reasoning       text,
  primary key (conversation_id, product_id)
);

-- Comparisons
create table comparisons (
  id         uuid primary key default gen_random_uuid(),
  session_id uuid not null references sessions(id) on delete cascade,
  created_at timestamptz not null default now()
);

-- Comparison Products
create table comparison_products (
  comparison_id uuid not null references comparisons(id) on delete cascade,
  product_id    uuid not null references products(id) on delete cascade,
  rank          int,
  reasoning     text,
  primary key (comparison_id, product_id)
);

-- Seed: common certifications
insert into certifications (name, issuer) values
  ('EWG Verified', 'Environmental Working Group'),
  ('USDA Organic', 'USDA'),
  ('B Corp', 'B Lab'),
  ('Non-GMO Project Verified', 'Non-GMO Project'),
  ('NSF Certified', 'NSF International'),
  ('Leaping Bunny', 'Cruelty Free International'),
  ('Fair Trade Certified', 'Fair Trade USA');

-- Seed: common tags
insert into tags (name, slug) values
  ('Organic', 'organic'),
  ('Vegan', 'vegan'),
  ('Gluten-Free', 'gluten-free'),
  ('Non-GMO', 'non-gmo'),
  ('Fragrance-Free', 'fragrance-free'),
  ('Dye-Free', 'dye-free'),
  ('Plant-Based', 'plant-based');
