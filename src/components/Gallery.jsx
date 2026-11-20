import { useEffect, useState } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { gallery } from '../data/businessInfo.js';
import Reveal from './Reveal.jsx';
export default function Gallery() {
  const [i, setI] = useState(null);
  const n = gallery.length;
  useEffect(() => {
    if (i === null) return;
    const k = (e) => { if (e.key === 'Escape') setI(null); if (e.key === 'ArrowRight') setI((x) => (x + 1) % n); if (e.key === 'ArrowLeft') setI((x) => (x - 1 + n) % n); };
    document.addEventListener('keydown', k);
    return () => document.removeEventListener('keydown', k);
  }, [i, n]);
  return (
    <>
      <ul className="grid">
        {gallery.map((g, idx) => (
          <Reveal as="li" key={g.src} delay={(idx % 4) * 70}>
            <button className="tile clay" onClick={() => setI(idx)} aria-label={`Enlarge: ${g.alt}`}>
              <img src={g.src} alt={g.alt} width="672" height="670" loading="lazy" decoding="async" />
            </button>
          </Reveal>
        ))}
      </ul>
      {i !== null && (
        <div className="lightbox" role="dialog" aria-modal="true" aria-label="Photo viewer" onClick={() => setI(null)}>
          <button className="lb-btn lb-close clay-btn" onClick={() => setI(null)} aria-label="Close"><X /></button>
          <button className="lb-btn lb-prev clay-btn" onClick={(e) => { e.stopPropagation(); setI((i - 1 + n) % n); }} aria-label="Previous photo"><ChevronLeft /></button>
          <figure onClick={(e) => e.stopPropagation()}>
            <img src={gallery[i].src} alt={gallery[i].alt} />
            <figcaption>{gallery[i].alt}</figcaption>
          </figure>
          <button className="lb-btn lb-next clay-btn" onClick={(e) => { e.stopPropagation(); setI((i + 1) % n); }} aria-label="Next photo"><ChevronRight /></button>
        </div>
      )}
    </>
  );
}
