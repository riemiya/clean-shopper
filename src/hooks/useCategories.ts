import { useEffect, useState } from 'react';
import { supabase } from '../lib/supabase';

export interface Category {
  id: string;
  name: string;
  slug: string;
}

export function useCategories() {
  const [categories, setCategories] = useState<Category[]>([]);

  useEffect(() => {
    supabase
      .from('categories')
      .select('id, name, slug')
      .order('name')
      .then(({ data }) => setCategories(data ?? []));
  }, []);

  return categories;
}
