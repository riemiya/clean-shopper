-- Add price column and seed values
alter table products add column if not exists price numeric(10,2);

update products set price = 12.99 where id = 'a0000000-0000-0000-0000-000000000001'::uuid;
update products set price = 9.99  where id = 'a0000000-0000-0000-0000-000000000002'::uuid;
update products set price = 8.49  where id = 'a0000000-0000-0000-0000-000000000003'::uuid;
update products set price = 11.99 where id = 'a0000000-0000-0000-0000-000000000004'::uuid;
update products set price = 18.99 where id = 'a0000000-0000-0000-0000-000000000005'::uuid;
update products set price = 24.99 where id = 'a0000000-0000-0000-0000-000000000006'::uuid;
update products set price = 14.49 where id = 'a0000000-0000-0000-0000-000000000007'::uuid;
update products set price = 22.99 where id = 'a0000000-0000-0000-0000-000000000008'::uuid;
update products set price = 7.99  where id = 'a0000000-0000-0000-0000-000000000009'::uuid;
update products set price = 13.99 where id = 'a0000000-0000-0000-0000-000000000010'::uuid;
update products set price = 5.99  where id = 'a0000000-0000-0000-0000-000000000011'::uuid;
update products set price = 10.99 where id = 'a0000000-0000-0000-0000-000000000012'::uuid;
update products set price = 12.49 where id = 'a0000000-0000-0000-0000-000000000013'::uuid;
update products set price = 16.99 where id = 'a0000000-0000-0000-0000-000000000014'::uuid;
update products set price = 9.49  where id = 'a0000000-0000-0000-0000-000000000015'::uuid;
update products set price = 11.99 where id = 'a0000000-0000-0000-0000-000000000016'::uuid;
update products set price = 8.99  where id = 'a0000000-0000-0000-0000-000000000017'::uuid;
update products set price = 15.99 where id = 'a0000000-0000-0000-0000-000000000018'::uuid;
update products set price = 13.49 where id = 'a0000000-0000-0000-0000-000000000019'::uuid;
update products set price = 7.49  where id = 'a0000000-0000-0000-0000-000000000020'::uuid;
