import Logo from './Logo';
import { company, navLinks, services } from '../data/site';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__grid">
        <div>
          <Logo />
          <p className="footer__blurb">
            Web and mobile applications, QA, DevOps, AI agent automation, deployment and maintenance.
          </p>
        </div>
        <nav aria-label="Footer navigation">
          <h3>Navigation</h3>
          <ul>
            {navLinks.map((l) => (
              <li key={l.href}>
                <a href={l.href}>{l.label}</a>
              </li>
            ))}
          </ul>
        </nav>
        <div>
          <h3>Services</h3>
          <ul>
            {services.map((s) => (
              <li key={s.title}>
                <a href="#services">{s.title}</a>
              </li>
            ))}
          </ul>
        </div>
        <address>
          <h3>Contact</h3>
          <ul>
            <li><a href={`mailto:${company.email}`}>{company.email}</a></li>
            <li><a href={company.phoneHref}>{company.phone}</a></li>
            <li><a href={company.website} rel="noopener">{company.website.replace('https://', '')}</a></li>
            <li>{company.address}</li>
          </ul>
        </address>
      </div>
      <div className="container footer__legal">
        <p>&copy; {new Date().getFullYear()} {company.name}. All rights reserved.</p>
      </div>
    </footer>
  );
}
