import React, { useState } from 'react';
import './ImageGallery.css';

interface Props {
  images: string[];
  alt: string;
}

export default function ImageGallery({ images, alt }: Props) {
  const [active, setActive] = useState(0);

  function prev() { setActive(i => (i - 1 + images.length) % images.length); }
  function next() { setActive(i => (i + 1) % images.length); }

  return (
    <div className="gallery">
      {/* Thumbnails */}
      <div className="gallery__thumbs">
        {images.map((src, i) => (
          <button
            key={i}
            className={`gallery__thumb ${active === i ? 'gallery__thumb--active' : ''}`}
            onMouseEnter={() => setActive(i)}
            onClick={() => setActive(i)}
            aria-label={`View image ${i + 1}`}
          >
            <img src={src} alt={`${alt} ${i + 1}`} />
          </button>
        ))}
      </div>

      {/* Main image */}
      <div className="gallery__main">
        <img src={images[active]} alt={alt} className="gallery__main-img" />

        {images.length > 1 && (
          <div className="gallery__arrows">
            <button className="gallery__arrow" onClick={prev} aria-label="Previous">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="15 18 9 12 15 6"/>
              </svg>
            </button>
            <button className="gallery__arrow" onClick={next} aria-label="Next">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="9 18 15 12 9 6"/>
              </svg>
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
