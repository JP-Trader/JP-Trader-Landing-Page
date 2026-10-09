import Icon from '../components/Icon';
import { services, type Card } from '../data/site';

/** Our services orbit the JP Trader core: the first three (what we build) inside, the rest outside. */
const inner = services.slice(0, 3);
const outer = services.slice(3);

/** Each node fills the ring and is rotated by its angle, so the pill lands on the ring's edge; the pill counter-rotates to stay upright. */
function Ring({ items, className, start = 0 }: { items: Card[]; className: string; start?: number }) {
  return (
    <div className={`orbit__ring ${className}`}>
      {items.map((s, i) => (
        <div key={s.title} className="orbit__node" style={{ ['--a' as string]: `${start + (360 / items.length) * i}deg`, ['--d' as string]: `${0.9 + i * 0.18}s` }}>
          <i>
            <span>
              <Icon name={s.icon} size={16} />
              {s.short ?? s.title}
            </span>
          </i>
        </div>
      ))}
    </div>
  );
}

export default function Hero() {
  return (
    <section id="top" className="hero" aria-labelledby="hero-title">
      <div className="hero__bg" aria-hidden="true">
        <span className="aurora aurora--a" />
        <span className="aurora aurora--b" />
        <span className="hero__grid" />
        <span className="hero__vignette" />
      </div>
      <div className="container hero__inner">
        <div className="hero__copy">
          <p className="eyebrow eyebrow--light">Software · Mobile · QA · DevOps</p>
          <h1 id="hero-title">
            Building Smart Applications. <span className="grad">Powering Digital Growth.</span>
          </h1>
          <p className="hero__lead">
            JP Trader designs, builds, deploys and maintains web and mobile applications, backed by QA
            and DevOps solutions that keep every release tested, automated and reliable.
          </p>
          <div className="hero__cta">
            <a href="#services" className="btn btn--primary">
              Explore Our Services <Icon name="arrow" size={18} />
            </a>
            <a href="#contact" className="btn btn--ghost">Start Your Project</a>
          </div>
        </div>
        <div className="hero__visual" aria-hidden="true">
          <div className="orbit">
            <span className="orbit__halo" />
            <Ring items={outer} className="orbit__ring--outer" start={-45} />
            <Ring items={inner} className="orbit__ring--inner" start={-90} />
            <div className="orbit__core">
              <svg viewBox="13 21 74 58" className="orbit__mark">
                <g transform="translate(-1.5 0)">
                  <rect x="22" y="22" width="10" height="10" fill="#3b82f6" />
                  <path d="M35 22H48V62A16 16 0 0 1 16 62V51L29 55V62A3 3 0 0 0 35 62Z" fill="#3b82f6" />
                  <path fillRule="evenodd" d="M50 22H70A17 17 0 0 1 70 56H63V78H50ZM63 35H70A4 4 0 0 1 70 43H63Z" fill="#fff" />
                </g>
              </svg>
              <small>idea → launch → support</small>
            </div>
          </div>
          <p className="mock__note">Every solution we provide, in one orbit.</p>
        </div>
      </div>
      <a href="#about" className="scroll-hint" aria-label="Scroll to About section"><span /></a>
    </section>
  );
}
