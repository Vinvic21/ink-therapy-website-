import { useState } from 'react';
import { Phone, Menu, X } from 'lucide-react';
import { business } from '../data/businessInfo.js';
const links = [['#about', 'About'], ['#services', 'Services'], ['#work', 'Our Work'], ['#visit', 'Visit']];
export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="site-header">
      <div className="container bar clay">
        <a href="#top" className="brand" aria-label={`${business.name} – home`}>
          <img src="/images/logo.webp" alt="" width="64" height="34" />
          <span className="sr-only">{business.name}</span>
        </a>
        <button className="menu-btn clay-btn" aria-expanded={open} aria-controls="nav" onClick={() => setOpen(!open)}>
          {open ? <X size={20} aria-hidden /> : <Menu size={20} aria-hidden />}<span className="sr-only">Menu</span>
        </button>
        <nav id="nav" className={open ? 'open' : ''} aria-label="Main">
          {links.map(([h, t]) => <a key={h} href={h} onClick={() => setOpen(false)}>{t}</a>)}
          <a className="btn btn-primary" href={`tel:${business.phoneTel}`}><Phone size={16} aria-hidden /> {business.phoneDisplay}</a>
        </nav>
      </div>
    </header>
  );
}
