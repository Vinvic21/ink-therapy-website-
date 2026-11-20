import { Phone, MapPin, Clock, PenTool, Gem, MessageCircle, Sparkles } from 'lucide-react';
import { business as b, services } from './data/businessInfo.js';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import Gallery from './components/Gallery.jsx';
import Reveal from './components/Reveal.jsx';
import StructuredData from './components/StructuredData.jsx';

const icons = { pen: PenTool, gem: Gem, chat: MessageCircle };

export default function App() {
  return (
    <>
      <a className="skip" href="#main">Skip to content</a>
      <StructuredData />
      <Header />
      <main id="main">
        <section id="top" className="hero">
          <div className="blob b1" aria-hidden /><div className="blob b2" aria-hidden /><div className="blob b3" aria-hidden />
          <div className="container hero-grid">
            <div>
              <p className="eyebrow"><Sparkles size={16} aria-hidden /> {b.category} · {b.city}, {b.region}</p>
              <h1><span className="script">Ink Therapy</span><span className="sub">Tattoo Studios</span></h1>
              <p className="lead">Tattoos and piercing at {b.street} in {b.city}, Delaware. Bring your idea, your story or your reference photos — we’ll take it from there.</p>
              <div className="cta">
                <a className="btn btn-primary" href={`tel:${b.phoneTel}`}><Phone size={18} aria-hidden /> Call {b.phoneDisplay}</a>
                <a className="btn btn-clay" href={b.mapsUrl} target="_blank" rel="noopener noreferrer"><MapPin size={18} aria-hidden /> Get directions</a>
              </div>
            </div>
            <div className="hero-card clay float">
              <img src="/images/storefront.webp" alt="Ink Therapy Tattoo Studios storefront, unit 2, with the orange script sign" width="731" height="711" fetchpriority="high" />
            </div>
          </div>
        </section>

        <section id="about" className="section">
          <div className="container narrow">
            <Reveal className="clay card center">
              <h2>About the studio</h2>
              <p>{b.legalName} is a tattoo and piercing shop in {b.city}, Delaware, in unit 2 at {b.street}. Our portfolio spans fine-line florals, black-and-grey portraits, colourful memorial pieces and lettering, plus ear piercing.</p>
              <p>The best way to start is to call the studio on <a href={`tel:${b.phoneTel}`}>{b.phoneDisplay}</a> and tell us what you have in mind.</p>
            </Reveal>
          </div>
        </section>

        <section id="services" className="section">
          <div className="container">
            <Reveal as="h2" className="center">What we do</Reveal>
            <div className="cards">
              {services.map((s, i) => { const I = icons[s.icon]; return (
                <Reveal key={s.title} delay={i * 120} className="clay card">
                  <span className="icon clay-btn"><I size={26} aria-hidden /></span>
                  <h3>{s.title}</h3><p>{s.text}</p>
                </Reveal>); })}
            </div>
          </div>
        </section>

        <section id="work" className="section">
          <div className="container">
            <Reveal as="h2" className="center">Our work</Reveal>
            <p className="center muted">Tap any photo to enlarge it.</p>
            <Gallery />
          </div>
        </section>

        <section id="visit" className="section">
          <div className="container visit">
            <Reveal className="clay card">
              <h2>Visit &amp; contact</h2>
              <address>
                <p><MapPin size={18} aria-hidden /> <span>{b.legalName}<br />{b.street}<br />{b.city}, {b.region} {b.postalCode}</span></p>
                <p><Phone size={18} aria-hidden /> <a href={`tel:${b.phoneTel}`}>{b.phoneDisplay}</a></p>
              </address>
              <a className="btn btn-primary" href={b.mapsUrl} target="_blank" rel="noopener noreferrer"><MapPin size={18} aria-hidden /> Open in Google Maps</a>
            </Reveal>
            <Reveal delay={120} className="clay card">
              <h2><Clock size={22} aria-hidden /> Opening hours</h2>
              <dl className="hours">
                {b.hours.map((h) => <div key={h.label}><dt>{h.label}</dt><dd>{h.text}</dd></div>)}
              </dl>
            </Reveal>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
