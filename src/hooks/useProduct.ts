import { useEffect, useState } from 'react';
import { supabase } from '../lib/supabase';

export interface Ingredient {
  position: number | null;
  ingredients: {
    name: string;
    concern_level: 'none' | 'caution' | 'avoid';
    concern_reason: string | null;
  };
}

export interface ProductDetail {
  id: string;
  name: string;
  clean_score: number | null;
  ewg_url: string | null;
  image_url: string | null;
  price: number | null;
  description: string | null;
  rating: number | null;
  review_count: number | null;
  bought_last_month: number | null;
  brands: { name: string } | null;
  categories: { name: string } | null;
  product_ingredients: Ingredient[];
  product_certifications: { certifications: { name: string } }[];
  product_tags: { tags: { name: string; slug: string } }[];
}

export function useProduct(id: string | undefined) {
  const [product, setProduct] = useState<ProductDetail | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!id) return;

    supabase
      .from('products')
      .select(`
        id, name, clean_score, ewg_url, image_url, price, description, rating, review_count, bought_last_month,
        brands ( name ),
        categories ( name ),
        product_ingredients ( position, ingredients ( name, concern_level, concern_reason ) ),
        product_certifications ( certifications ( name ) ),
        product_tags ( tags ( name, slug ) )
      `)
      .eq('id', id)
      .single()
      .then(({ data, error }) => {
        if (error) console.error(error);
        setProduct(data as unknown as ProductDetail);
        setLoading(false);
      });
  }, [id]);

  return { product, loading };
}
