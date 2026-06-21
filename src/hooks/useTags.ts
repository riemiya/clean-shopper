import { useEffect, useState } from 'react';
import { supabase } from '../lib/supabase';

export interface Tag {
  id: string;
  name: string;
  slug: string;
}

export function useTags() {
  const [tags, setTags] = useState<Tag[]>([]);

  useEffect(() => {
    supabase
      .from('tags')
      .select('id, name, slug')
      .order('name')
      .then(({ data }) => setTags(data ?? []));
  }, []);

  return tags;
}
