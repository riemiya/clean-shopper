const TAG_COLORS: Record<string, { bg: string; color: string; border: string }> = {
  'vegan':          { bg: '#f0fdf4', color: '#15803d', border: '#bbf7d0' },
  'organic':        { bg: '#fefce8', color: '#a16207', border: '#fde68a' },
  'fragrance-free': { bg: '#eff6ff', color: '#1d4ed8', border: '#bfdbfe' },
  'gluten-free':    { bg: '#fff7ed', color: '#c2410c', border: '#fed7aa' },
  'non-gmo':        { bg: '#f0fdfa', color: '#0f766e', border: '#99f6e4' },
  'plant-based':    { bg: '#faf5ff', color: '#7e22ce', border: '#e9d5ff' },
  'dye-free':       { bg: '#fdf2f8', color: '#9d174d', border: '#fbcfe8' },
  'cruelty-free':   { bg: '#f3f4f6', color: '#374151', border: '#e5e7eb' },
};

const FALLBACK = { bg: '#f3f4f6', color: '#374151', border: '#e5e7eb' };

export function getTagStyle(slug: string) {
  return TAG_COLORS[slug.toLowerCase()] ?? FALLBACK;
}
