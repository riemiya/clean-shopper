-- Allow anyone to read products and related tables
create policy "Public read products" on products for select using (true);
create policy "Public read brands" on brands for select using (true);
create policy "Public read categories" on categories for select using (true);
create policy "Public read tags" on tags for select using (true);
create policy "Public read product_tags" on product_tags for select using (true);
create policy "Public read ingredients" on ingredients for select using (true);
create policy "Public read product_ingredients" on product_ingredients for select using (true);
create policy "Public read certifications" on certifications for select using (true);
create policy "Public read product_certifications" on product_certifications for select using (true);

-- Allow anyone to insert/update sessions (anonymous session tracking)
create policy "Public insert sessions" on sessions for insert with check (true);
create policy "Public update sessions" on sessions for update using (true);
