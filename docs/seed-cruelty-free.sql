-- Add Cruelty Free tag
insert into tags (id, name, slug) values
  ('e0000000-0000-0000-0000-000000000008'::uuid, 'Cruelty Free', 'cruelty-free')
on conflict (id) do nothing;

-- Tag a few products as Cruelty Free
insert into product_tags (product_id, tag_id) values
  ('a0000000-0000-0000-0000-000000000008'::uuid, 'e0000000-0000-0000-0000-000000000008'::uuid),
  ('a0000000-0000-0000-0000-000000000011'::uuid, 'e0000000-0000-0000-0000-000000000008'::uuid),
  ('a0000000-0000-0000-0000-000000000012'::uuid, 'e0000000-0000-0000-0000-000000000008'::uuid),
  ('a0000000-0000-0000-0000-000000000013'::uuid, 'e0000000-0000-0000-0000-000000000008'::uuid)
on conflict do nothing;
