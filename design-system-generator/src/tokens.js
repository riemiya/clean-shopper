export const meta = {
  name: 'Clean Shopper',
  direction: 'Modern and clean, near-monochrome with a muted sage accent',
  feeling: 'Trustworthy and approachable',
  reference: 'Hungryroot',
}

export const colors = [
  { name: 'Background', hex: '#F9F9F8', usage: 'Page background' },
  { name: 'Surface', hex: '#FFFFFF', usage: 'Cards, panels' },
  { name: 'Text primary', hex: '#1C1C1C', usage: 'Headings, body' },
  { name: 'Text muted', hex: '#737373', usage: 'Captions, labels' },
  { name: 'Accent', hex: '#3B6E58', usage: 'Actions, links' },
  { name: 'Accent hover', hex: '#2C5443', usage: 'Hover state' },
  { name: 'Border', hex: '#E8E8E6', usage: 'Dividers, inputs' },
  { name: 'Warning', hex: '#C2820A', usage: 'Moderate hazard' },
  { name: 'Error', hex: '#C23B3B', usage: 'High hazard' },
  { name: 'Info', hex: '#3B5F8A', usage: 'Informational' },
]

export const contrastPairs = [
  { label: 'Text on background', ratio: '18:1', level: 'AAA' },
  { label: 'Muted on background', ratio: '4.9:1', level: 'AA' },
  { label: 'White on accent', ratio: '5.9:1', level: 'AA' },
]

export const hazardBadges = [
  { label: 'Score 1–2 · Clean', color: '#3B6E58', bg: '#EEF4F1' },
  { label: 'Score 3–6 · Moderate', color: '#C2820A', bg: '#FBF3E3' },
  { label: 'Score 7–10 · High hazard', color: '#C23B3B', bg: '#FAEAEA' },
]
