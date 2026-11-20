import { business } from '../data/businessInfo.js';
export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <p><strong>{business.legalName}</strong></p>
        <address>{business.street}, {business.city}, {business.region} {business.postalCode} · <a href={`tel:${business.phoneTel}`}>{business.phoneDisplay}</a></address>
        <p className="small">© {new Date().getFullYear()} {business.legalName}. All rights reserved.</p>
      </div>
    </footer>
  );
}
