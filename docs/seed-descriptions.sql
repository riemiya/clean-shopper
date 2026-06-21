-- Add new columns
alter table products add column if not exists description text;
alter table products add column if not exists rating numeric(2,1);
alter table products add column if not exists review_count integer;
alter table products add column if not exists bought_last_month integer;

-- Seed descriptions, ratings, review counts, monthly purchases
update products set description = 'All-purpose cleaner made with real citrus extracts. Safe for counters, sinks, and stovetops.', rating = 4.7, review_count = 2341, bought_last_month = 1800 where id = 'a0000000-0000-0000-0000-000000000001'::uuid;
update products set description = 'Gentle lavender scrub that powers through bathroom grime without harsh chemicals.', rating = 4.5, review_count = 987, bought_last_month = 620 where id = 'a0000000-0000-0000-0000-000000000002'::uuid;
update products set description = 'Streak-free formula for glass, mirrors, and chrome surfaces. Biodegradable and fragrance-free.', rating = 4.8, review_count = 3102, bought_last_month = 2400 where id = 'a0000000-0000-0000-0000-000000000003'::uuid;
update products set description = 'Oxygen-powered stain remover that works on tough stains in cold water. Color-safe.', rating = 4.4, review_count = 1567, bought_last_month = 940 where id = 'a0000000-0000-0000-0000-000000000004'::uuid;
update products set description = 'Fragrance-free, plant-derived laundry detergent. Gentle on sensitive skin, tough on dirt.', rating = 4.6, review_count = 4210, bought_last_month = 3100 where id = 'a0000000-0000-0000-0000-000000000005'::uuid;
update products set description = 'Set of 6 XL wool dryer balls that reduce drying time and static. Reusable for 1000+ loads.', rating = 4.9, review_count = 8743, bought_last_month = 5200 where id = 'a0000000-0000-0000-0000-000000000006'::uuid;
update products set description = 'Plant-based fabric softener with no synthetic fragrance. Leaves clothes soft and fresh.', rating = 4.3, review_count = 723, bought_last_month = 410 where id = 'a0000000-0000-0000-0000-000000000007'::uuid;
update products set description = 'Reef-safe mineral sunscreen with zinc oxide. Non-greasy formula suitable for sensitive skin.', rating = 4.6, review_count = 5621, bought_last_month = 3800 where id = 'a0000000-0000-0000-0000-000000000008'::uuid;
update products set description = 'Activated charcoal toothpaste that naturally whitens and freshens breath without fluoride.', rating = 4.2, review_count = 1893, bought_last_month = 1100 where id = 'a0000000-0000-0000-0000-000000000009'::uuid;
update products set description = 'Lightweight aloe vera lotion that absorbs quickly. Hydrates without feeling greasy or heavy.', rating = 4.5, review_count = 2104, bought_last_month = 1500 where id = 'a0000000-0000-0000-0000-000000000010'::uuid;
update products set description = 'Rich shea butter lip balm with vitamin E. Long-lasting moisture with a subtle natural scent.', rating = 4.8, review_count = 6312, bought_last_month = 4700 where id = 'a0000000-0000-0000-0000-000000000011'::uuid;
update products set description = 'Zero-waste shampoo bar with tea tree oil. Controls dandruff and leaves hair feeling clean.', rating = 4.4, review_count = 1450, bought_last_month = 870 where id = 'a0000000-0000-0000-0000-000000000012'::uuid;
update products set description = 'Baking soda deodorant that neutralizes odor all day. Free from aluminum and synthetic fragrance.', rating = 4.1, review_count = 3201, bought_last_month = 2100 where id = 'a0000000-0000-0000-0000-000000000013'::uuid;
update products set description = 'Cold-pressed extra virgin olive oil with rich flavor. Ideal for cooking and dressings.', rating = 4.7, review_count = 892, bought_last_month = 540 where id = 'a0000000-0000-0000-0000-000000000014'::uuid;
update products set description = 'Raw, unfiltered apple cider vinegar with the mother. Supports digestion and natural cleaning.', rating = 4.8, review_count = 7421, bought_last_month = 5600 where id = 'a0000000-0000-0000-0000-000000000015'::uuid;
update products set description = 'Unfiltered wildflower honey packed with natural enzymes and antioxidants. No additives.', rating = 4.9, review_count = 4103, bought_last_month = 3200 where id = 'a0000000-0000-0000-0000-000000000016'::uuid;
update products set description = 'Soy-free coconut aminos sauce with a savory umami flavor. A clean alternative to soy sauce.', rating = 4.6, review_count = 2987, bought_last_month = 2000 where id = 'a0000000-0000-0000-0000-000000000017'::uuid;
update products set description = 'Tear-free baby wash made with organic aloe and chamomile. Gentle enough for newborns.', rating = 4.7, review_count = 3841, bought_last_month = 2700 where id = 'a0000000-0000-0000-0000-000000000018'::uuid;
update products set description = 'Non-toxic diaper cream with zinc oxide that soothes and protects sensitive baby skin.', rating = 4.5, review_count = 2156, bought_last_month = 1400 where id = 'a0000000-0000-0000-0000-000000000019'::uuid;
update products set description = 'Talc-free baby powder with arrowroot and chamomile. Keeps skin dry and comfortable all day.', rating = 4.4, review_count = 1023, bought_last_month = 680 where id = 'a0000000-0000-0000-0000-000000000020'::uuid;
