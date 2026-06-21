import { useState, useEffect } from 'react';

const KEY = 'clean_shopper_bookmarks';

export function useBookmarks() {
  const [bookmarks, setBookmarks] = useState<Set<string>>(() => {
    const saved = localStorage.getItem(KEY);
    return saved ? new Set(JSON.parse(saved)) : new Set();
  });

  useEffect(() => {
    localStorage.setItem(KEY, JSON.stringify(Array.from(bookmarks)));
  }, [bookmarks]);

  function toggle(id: string) {
    setBookmarks(prev => {
      const next = new Set(prev);
      next.has(id) ? next.delete(id) : next.add(id);
      return next;
    });
  }

  return { bookmarks, toggle };
}
