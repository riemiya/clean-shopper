import './App.css'
import { meta, colors, contrastPairs, hazardBadges } from './tokens'

function ColorSwatch({ name, hex, usage }) {
  const isLight = ['#F9F9F8', '#FFFFFF', '#E8E8E6'].includes(hex)
  return (
    <div className="swatch">
      <div
        className="swatch-color"
        style={{
          background: hex,
          border: isLight ? '1px solid #E8E8E6' : 'none',
        }}
      />
      <div className="swatch-info">
        <span className="swatch-name">{name}</span>
        <span className="swatch-hex">{hex}</span>
        <span className="swatch-usage">{usage}</span>
      </div>
    </div>
  )
}

export default function App() {
  return (
    <div className="ds-page">
      <header className="ds-header">
        <p className="ds-eyebrow">DESIGN SYSTEM</p>
        <h1 className="ds-title">{meta.name}</h1>
        <div className="ds-meta">
          <span><strong>Direction:</strong> {meta.direction}</span>
          <span><strong>Feeling:</strong> {meta.feeling}</span>
          <span><strong>Reference:</strong> {meta.reference}</span>
        </div>
      </header>

      <hr className="ds-divider" />

      <section className="ds-section">
        <h2 className="ds-section-title">Color</h2>
        <div className="swatch-grid">
          {colors.map(c => <ColorSwatch key={c.name} {...c} />)}
        </div>

        <div className="contrast-row">
          {contrastPairs.map(p => (
            <span key={p.label} className="contrast-item">
              {p.label} — {p.ratio} ✓ {p.level}
            </span>
          ))}
        </div>

        <div className="badge-row">
          {hazardBadges.map(b => (
            <span
              key={b.label}
              className="hazard-badge"
              style={{ color: b.color, background: b.bg, borderColor: b.color }}
            >
              • {b.label}
            </span>
          ))}
        </div>
      </section>
    </div>
  )
}
