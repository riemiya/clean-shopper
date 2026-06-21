import { useEffect, useState } from 'react';
import { supabase } from '../lib/supabase';

export interface Product {
  id: string;
  name: string;
  clean_score: number | null;
  image_url: string | null;
  price: number | null;
  description: string | null;
  rating: number | null;
  review_count: number | null;
  bought_last_month: number | null;
  brands: { name: string } | null;
  categories: { name: string; slug: string } | null;
  product_tags: { tags: { name: string; slug: string } }[];
}

export function useProducts(selectedTag: string | null = null, selectedCategory: string | null = null, selectedBrand: string | null = null) {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchProducts() {
      setLoading(true);

      let query = supabase
        .from('products')
        .select(`
          id, name, clean_score, image_url, price, description, rating, review_count, bought_last_month,
          brands ( name ),
          categories ( name, slug ),
          product_tags ( tags ( name, slug ) )
        `)
        .order('clean_score', { ascending: false });

      const { data, error } = await query;

      if (error) {
        console.error('Error fetching products:', error);
        setLoading(false);
        return;
      }

      let results = (data as unknown as Product[]) ?? [];

      if (selectedCategory) {
        results = results.filter(p => p.categories?.slug === selectedCategory);
      }

      if (selectedBrand) {
        results = results.filter(p => p.brands?.name === selectedBrand);
      }

      if (selectedTag) {
        results = results.filter(p =>
          p.product_tags.some(pt => pt.tags?.slug === selectedTag)
        );
      }

      setProducts(results);
      setLoading(false);
    }

    fetchProducts();
  }, [selectedTag, selectedCategory, selectedBrand]);

  return { products, loading };
}
