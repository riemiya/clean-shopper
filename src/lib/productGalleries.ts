const GALLERIES: Record<string, string[]> = {
  'a0000000-0000-0000-0000-000000000006': [
    'https://images.unsplash.com/photo-1752600438079-974ec1337063?w=800&q=80',
    'https://images.unsplash.com/photo-1621719456027-93da798ec181?w=800&q=80',
    'https://images.unsplash.com/photo-1621716347723-b726a26ba4ac?w=800&q=80',
    'https://images.unsplash.com/photo-1549194388-2e0e9bf48991?w=800&q=80',
    'https://images.unsplash.com/photo-1562949644-5fd7df35ba78?w=800&q=80',
    'https://images.unsplash.com/photo-1717598419423-e7c508727118?w=800&q=80',
  ],
};

export function getProductGallery(productId: string, fallbackUrl: string | null): string[] {
  if (GALLERIES[productId]) return GALLERIES[productId];
  if (!fallbackUrl) return [];
  const base = fallbackUrl.replace(/\?.*/, '');
  return [
    fallbackUrl,
    base + '?w=600&q=80&fit=crop&crop=center',
    base + '?w=600&q=80&fit=crop&crop=top',
    base + '?w=600&q=80&fit=crop&crop=bottom',
  ];
}
