-- Ingredients master list
insert into ingredients (id, name, concern_level, concern_reason) values
  ('e0000000-0000-0000-0000-000000000001'::uuid, 'Water',                   'none',    null),
  ('e0000000-0000-0000-0000-000000000002'::uuid, 'Citric Acid',             'none',    null),
  ('e0000000-0000-0000-0000-000000000003'::uuid, 'Sodium Bicarbonate',      'none',    null),
  ('e0000000-0000-0000-0000-000000000004'::uuid, 'Lemon Essential Oil',     'none',    null),
  ('e0000000-0000-0000-0000-000000000005'::uuid, 'Vinegar',                 'none',    null),
  ('e0000000-0000-0000-0000-000000000006'::uuid, 'Lavender Essential Oil',  'none',    null),
  ('e0000000-0000-0000-0000-000000000007'::uuid, 'Sodium Lauryl Sulfate',   'caution', 'May cause skin irritation with prolonged use'),
  ('e0000000-0000-0000-0000-000000000008'::uuid, 'Fragrance',               'avoid',   'Catch-all term that can hide hundreds of chemicals; linked to allergies and hormone disruption'),
  ('e0000000-0000-0000-0000-000000000009'::uuid, 'Zinc Oxide',              'none',    null),
  ('e0000000-0000-0000-0000-000000000010'::uuid, 'Titanium Dioxide',        'none',    null),
  ('e0000000-0000-0000-0000-000000000011'::uuid, 'Glycerin',                'none',    null),
  ('e0000000-0000-0000-0000-000000000012'::uuid, 'Aloe Vera Leaf Juice',    'none',    null),
  ('e0000000-0000-0000-0000-000000000013'::uuid, 'Shea Butter',             'none',    null),
  ('e0000000-0000-0000-0000-000000000014'::uuid, 'Activated Charcoal',      'none',    null),
  ('e0000000-0000-0000-0000-000000000015'::uuid, 'Sodium Fluoride',         'caution', 'Effective for cavity prevention but toxic in high doses; keep away from young children'),
  ('e0000000-0000-0000-0000-000000000016'::uuid, 'Xylitol',                 'none',    null),
  ('e0000000-0000-0000-0000-000000000017'::uuid, 'Tea Tree Oil',            'none',    null),
  ('e0000000-0000-0000-0000-000000000018'::uuid, 'Cocamidopropyl Betaine',  'caution', 'Generally mild but can cause skin sensitization in some people'),
  ('e0000000-0000-0000-0000-000000000019'::uuid, 'Hydrogen Peroxide',       'caution', 'Oxidizing agent; effective cleaner but can bleach surfaces if overused'),
  ('e0000000-0000-0000-0000-000000000020'::uuid, 'Sodium Hypochlorite',     'avoid',   'Bleach — corrosive to skin and lungs, harmful to aquatic life'),
  ('e0000000-0000-0000-0000-000000000021'::uuid, 'Tocopherol (Vitamin E)',  'none',    null),
  ('e0000000-0000-0000-0000-000000000022'::uuid, 'Baking Soda',             'none',    null),
  ('e0000000-0000-0000-0000-000000000023'::uuid, 'Arrowroot Powder',        'none',    null),
  ('e0000000-0000-0000-0000-000000000024'::uuid, 'Coconut Oil',             'none',    null)
on conflict (id) do nothing;

-- Product 1: All-Purpose Citrus Spray
insert into product_ingredients (product_id, ingredient_id, position) values
  ('a0000000-0000-0000-0000-000000000001'::uuid, 'e0000000-0000-0000-0000-000000000001'::uuid, 1),
  ('a0000000-0000-0000-0000-000000000001'::uuid, 'e0000000-0000-0000-0000-000000000005'::uuid, 2),
  ('a0000000-0000-0000-0000-000000000001'::uuid, 'e0000000-0000-0000-0000-000000000002'::uuid, 3),
  ('a0000000-0000-0000-0000-000000000001'::uuid, 'e0000000-0000-0000-0000-000000000004'::uuid, 4)
on conflict do nothing;

-- Product 2: Lavender Bathroom Scrub
insert into product_ingredients (product_id, ingredient_id, position) values
  ('a0000000-0000-0000-0000-000000000002'::uuid, 'e0000000-0000-0000-0000-000000000003'::uuid, 1),
  ('a0000000-0000-0000-0000-000000000002'::uuid, 'e0000000-0000-0000-0000-000000000001'::uuid, 2),
  ('a0000000-0000-0000-0000-000000000002'::uuid, 'e0000000-0000-0000-0000-000000000006'::uuid, 3),
  ('a0000000-0000-0000-0000-000000000002'::uuid, 'e0000000-0000-0000-0000-000000000007'::uuid, 4)
on conflict do nothing;

-- Product 8: Mineral Sunscreen SPF 50
insert into product_ingredients (product_id, ingredient_id, position) values
  ('a0000000-0000-0000-0000-000000000008'::uuid, 'e0000000-0000-0000-0000-000000000009'::uuid, 1),
  ('a0000000-0000-0000-0000-000000000008'::uuid, 'e0000000-0000-0000-0000-000000000001'::uuid, 2),
  ('a0000000-0000-0000-0000-000000000008'::uuid, 'e0000000-0000-0000-0000-000000000011'::uuid, 3),
  ('a0000000-0000-0000-0000-000000000008'::uuid, 'e0000000-0000-0000-0000-000000000021'::uuid, 4),
  ('a0000000-0000-0000-0000-000000000008'::uuid, 'e0000000-0000-0000-0000-000000000012'::uuid, 5)
on conflict do nothing;

-- Product 9: Charcoal Toothpaste
insert into product_ingredients (product_id, ingredient_id, position) values
  ('a0000000-0000-0000-0000-000000000009'::uuid, 'e0000000-0000-0000-0000-000000000001'::uuid, 1),
  ('a0000000-0000-0000-0000-000000000009'::uuid, 'e0000000-0000-0000-0000-000000000014'::uuid, 2),
  ('a0000000-0000-0000-0000-000000000009'::uuid, 'e0000000-0000-0000-0000-000000000016'::uuid, 3),
  ('a0000000-0000-0000-0000-000000000009'::uuid, 'e0000000-0000-0000-0000-000000000015'::uuid, 4)
on conflict do nothing;

-- Product 12: Tea Tree Shampoo Bar
insert into product_ingredients (product_id, ingredient_id, position) values
  ('a0000000-0000-0000-0000-000000000012'::uuid, 'e0000000-0000-0000-0000-000000000024'::uuid, 1),
  ('a0000000-0000-0000-0000-000000000012'::uuid, 'e0000000-0000-0000-0000-000000000017'::uuid, 2),
  ('a0000000-0000-0000-0000-000000000012'::uuid, 'e0000000-0000-0000-0000-000000000018'::uuid, 3),
  ('a0000000-0000-0000-0000-000000000012'::uuid, 'e0000000-0000-0000-0000-000000000011'::uuid, 4)
on conflict do nothing;

-- Product 13: Baking Soda Deodorant Stick
insert into product_ingredients (product_id, ingredient_id, position) values
  ('a0000000-0000-0000-0000-000000000013'::uuid, 'e0000000-0000-0000-0000-000000000022'::uuid, 1),
  ('a0000000-0000-0000-0000-000000000013'::uuid, 'e0000000-0000-0000-0000-000000000023'::uuid, 2),
  ('a0000000-0000-0000-0000-000000000013'::uuid, 'e0000000-0000-0000-0000-000000000024'::uuid, 3),
  ('a0000000-0000-0000-0000-000000000013'::uuid, 'e0000000-0000-0000-0000-000000000006'::uuid, 4)
on conflict do nothing;
