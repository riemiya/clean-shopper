-- Seed: brands
insert into brands (id, name, website) values
  ('b1000000-0000-0000-0000-000000000001'::uuid, 'Evergreen Home', 'https://evergreenhome.com'),
  ('b1000000-0000-0000-0000-000000000002'::uuid, 'PureLeaf Co.', 'https://pureleaf.co'),
  ('b1000000-0000-0000-0000-000000000003'::uuid, 'Clean & Simple', 'https://cleanandsimple.com'),
  ('b1000000-0000-0000-0000-000000000004'::uuid, 'Botanica Labs', 'https://botanicalabs.com'),
  ('b1000000-0000-0000-0000-000000000005'::uuid, 'Grove Naturals', 'https://grovenaturals.com');

-- Seed: categories
insert into categories (id, name, slug) values
  ('c1000000-0000-0000-0000-000000000001'::uuid, 'Cleaning', 'cleaning'),
  ('c1000000-0000-0000-0000-000000000002'::uuid, 'Personal Care', 'personal-care'),
  ('c1000000-0000-0000-0000-000000000003'::uuid, 'Pantry', 'pantry'),
  ('c1000000-0000-0000-0000-000000000004'::uuid, 'Laundry', 'laundry'),
  ('c1000000-0000-0000-0000-000000000005'::uuid, 'Baby & Kids', 'baby-kids');

-- Seed: products (20 products)
insert into products (id, name, brand_id, category_id, clean_score, ewg_url) values
  ('a0000000-0000-0000-0000-000000000001'::uuid, 'All-Purpose Citrus Spray',       'b1000000-0000-0000-0000-000000000001'::uuid, 'c1000000-0000-0000-0000-000000000001'::uuid, 92, null),
  ('a0000000-0000-0000-0000-000000000002'::uuid, 'Lavender Bathroom Scrub',         'b1000000-0000-0000-0000-000000000003'::uuid, 'c1000000-0000-0000-0000-000000000001'::uuid, 88, null),
  ('a0000000-0000-0000-0000-000000000003'::uuid, 'Glass & Surface Cleaner',         'b1000000-0000-0000-0000-000000000002'::uuid, 'c1000000-0000-0000-0000-000000000001'::uuid, 95, null),
  ('a0000000-0000-0000-0000-000000000004'::uuid, 'Oxygen-Based Stain Remover',      'b1000000-0000-0000-0000-000000000005'::uuid, 'c1000000-0000-0000-0000-000000000001'::uuid, 79, null),
  ('a0000000-0000-0000-0000-000000000005'::uuid, 'Unscented Laundry Detergent',     'b1000000-0000-0000-0000-000000000001'::uuid, 'c1000000-0000-0000-0000-000000000004'::uuid, 97, null),
  ('a0000000-0000-0000-0000-000000000006'::uuid, 'Wool Dryer Balls (6-pack)',       'b1000000-0000-0000-0000-000000000003'::uuid, 'c1000000-0000-0000-0000-000000000004'::uuid, 100, null),
  ('a0000000-0000-0000-0000-000000000007'::uuid, 'Fragrance-Free Fabric Softener',  'b1000000-0000-0000-0000-000000000004'::uuid, 'c1000000-0000-0000-0000-000000000004'::uuid, 85, null),
  ('a0000000-0000-0000-0000-000000000008'::uuid, 'Mineral Sunscreen SPF 50',        'b1000000-0000-0000-0000-000000000002'::uuid, 'c1000000-0000-0000-0000-000000000002'::uuid, 94, null),
  ('a0000000-0000-0000-0000-000000000009'::uuid, 'Charcoal Toothpaste',             'b1000000-0000-0000-0000-000000000004'::uuid, 'c1000000-0000-0000-0000-000000000002'::uuid, 81, null),
  ('a0000000-0000-0000-0000-000000000010'::uuid, 'Aloe Vera Body Lotion',           'b1000000-0000-0000-0000-000000000005'::uuid, 'c1000000-0000-0000-0000-000000000002'::uuid, 90, null),
  ('a0000000-0000-0000-0000-000000000011'::uuid, 'Shea Butter Lip Balm',            'b1000000-0000-0000-0000-000000000001'::uuid, 'c1000000-0000-0000-0000-000000000002'::uuid, 98, null),
  ('a0000000-0000-0000-0000-000000000012'::uuid, 'Tea Tree Shampoo Bar',            'b1000000-0000-0000-0000-000000000003'::uuid, 'c1000000-0000-0000-0000-000000000002'::uuid, 93, null),
  ('a0000000-0000-0000-0000-000000000013'::uuid, 'Baking Soda Deodorant Stick',     'b1000000-0000-0000-0000-000000000002'::uuid, 'c1000000-0000-0000-0000-000000000002'::uuid, 87, null),
  ('a0000000-0000-0000-0000-000000000014'::uuid, 'Cold-Pressed Olive Oil',          'b1000000-0000-0000-0000-000000000005'::uuid, 'c1000000-0000-0000-0000-000000000003'::uuid, 96, null),
  ('a0000000-0000-0000-0000-000000000015'::uuid, 'Organic Apple Cider Vinegar',     'b1000000-0000-0000-0000-000000000004'::uuid, 'c1000000-0000-0000-0000-000000000003'::uuid, 99, null),
  ('a0000000-0000-0000-0000-000000000016'::uuid, 'Raw Unfiltered Honey',            'b1000000-0000-0000-0000-000000000001'::uuid, 'c1000000-0000-0000-0000-000000000003'::uuid, 97, null),
  ('a0000000-0000-0000-0000-000000000017'::uuid, 'Coconut Aminos Sauce',            'b1000000-0000-0000-0000-000000000003'::uuid, 'c1000000-0000-0000-0000-000000000003'::uuid, 95, null),
  ('a0000000-0000-0000-0000-000000000018'::uuid, 'Sprouted Oat Granola',            'b1000000-0000-0000-0000-000000000002'::uuid, 'c1000000-0000-0000-0000-000000000003'::uuid, 88, null),
  ('a0000000-0000-0000-0000-000000000019'::uuid, 'Fragrance-Free Baby Wash',        'b1000000-0000-0000-0000-000000000004'::uuid, 'c1000000-0000-0000-0000-000000000005'::uuid, 99, null),
  ('a0000000-0000-0000-0000-000000000020'::uuid, 'Non-Toxic Diaper Cream',          'b1000000-0000-0000-0000-000000000005'::uuid, 'c1000000-0000-0000-0000-000000000005'::uuid, 96, null);

-- Seed: product_tags
insert into product_tags (product_id, tag_id)
select p.id, t.id from products p, tags t
where
  (p.name = 'Unscented Laundry Detergent'    and t.slug = 'fragrance-free') or
  (p.name = 'Unscented Laundry Detergent'    and t.slug = 'plant-based') or
  (p.name = 'Wool Dryer Balls (6-pack)'      and t.slug = 'organic') or
  (p.name = 'Mineral Sunscreen SPF 50'       and t.slug = 'vegan') or
  (p.name = 'Mineral Sunscreen SPF 50'       and t.slug = 'fragrance-free') or
  (p.name = 'Aloe Vera Body Lotion'          and t.slug = 'vegan') or
  (p.name = 'Aloe Vera Body Lotion'          and t.slug = 'plant-based') or
  (p.name = 'Tea Tree Shampoo Bar'           and t.slug = 'vegan') or
  (p.name = 'Baking Soda Deodorant Stick'    and t.slug = 'fragrance-free') or
  (p.name = 'Cold-Pressed Olive Oil'         and t.slug = 'organic') or
  (p.name = 'Cold-Pressed Olive Oil'         and t.slug = 'non-gmo') or
  (p.name = 'Organic Apple Cider Vinegar'    and t.slug = 'organic') or
  (p.name = 'Raw Unfiltered Honey'           and t.slug = 'organic') or
  (p.name = 'Coconut Aminos Sauce'           and t.slug = 'non-gmo') or
  (p.name = 'Coconut Aminos Sauce'           and t.slug = 'gluten-free') or
  (p.name = 'Sprouted Oat Granola'           and t.slug = 'gluten-free') or
  (p.name = 'Fragrance-Free Baby Wash'       and t.slug = 'fragrance-free') or
  (p.name = 'Fragrance-Free Baby Wash'       and t.slug = 'vegan') or
  (p.name = 'Non-Toxic Diaper Cream'         and t.slug = 'fragrance-free') or
  (p.name = 'Shea Butter Lip Balm'           and t.slug = 'vegan');

-- Seed: product_certifications
insert into product_certifications (product_id, certification_id)
select p.id, c.id from products p, certifications c
where
  (p.name = 'Unscented Laundry Detergent'    and c.name = 'EWG Verified') or
  (p.name = 'Mineral Sunscreen SPF 50'       and c.name = 'EWG Verified') or
  (p.name = 'Fragrance-Free Baby Wash'       and c.name = 'EWG Verified') or
  (p.name = 'Wool Dryer Balls (6-pack)'      and c.name = 'USDA Organic') or
  (p.name = 'Organic Apple Cider Vinegar'    and c.name = 'USDA Organic') or
  (p.name = 'Cold-Pressed Olive Oil'         and c.name = 'USDA Organic') or
  (p.name = 'Cold-Pressed Olive Oil'         and c.name = 'Non-GMO Project Verified') or
  (p.name = 'Coconut Aminos Sauce'           and c.name = 'Non-GMO Project Verified') or
  (p.name = 'Tea Tree Shampoo Bar'           and c.name = 'Leaping Bunny') or
  (p.name = 'Aloe Vera Body Lotion'          and c.name = 'Leaping Bunny') or
  (p.name = 'Sprouted Oat Granola'           and c.name = 'B Corp') or
  (p.name = 'Raw Unfiltered Honey'           and c.name = 'Fair Trade Certified');
