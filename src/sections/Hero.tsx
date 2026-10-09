import Icon from '../components/Icon';

const LINE = 'M0 130 L40 110 L80 120 L120 80 L160 95 L200 55 L240 70 L280 30 L320 40';
/** Illustrative pipeline runs: [x, bar height] — passing checks per run. */
const runs: [number, number][] = [
  [18, 38], [48, 44], [78, 36], [108, 58], [138, 52], [168, 70], [198, 76], [228, 72], [258, 92], [288, 100],
];

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
          <div className="mock">
            <div className="mock__bar"><i /><i /><i /><b>pipeline.run</b></div>
            <svg viewBox="0 0 320 160" className="mock__chart">
              <defs>
                <linearGradient id="g" x1="0" x2="0" y1="0" y2="1">
                  <stop offset="0" stopColor="#3b82f6" stopOpacity=".5" />
                  <stop offset="1" stopColor="#3b82f6" stopOpacity="0" />
                </linearGradient>
              </defs>
              {[40, 80, 120].map((y) => (
                <line key={y} x1="0" x2="320" y1={y} y2={y} stroke="#fff" strokeOpacity=".07" />
              ))}
              {runs.map(([x, h], i) => (
                <g key={x} className="candle" style={{ ['--d' as string]: `${i * 0.12}s` }}>
                  <rect x={x - 6} y={150 - h} width="12" height={h} rx="2" fill="#4ade80" fillOpacity=".55" />
                </g>
              ))}
              <path d={`${LINE} V160 H0Z`} fill="url(#g)" className="mock__area" />
              <path d={LINE} pathLength={1} className="mock__line" fill="none" stroke="#60a5fa" strokeWidth="3" strokeLinejoin="round" strokeLinecap="round" />
            </svg>
            <div className="mock__tags">
              <span>Automated tests</span><span>CI/CD</span><span>Monitoring</span>
            </div>
          </div>
          <div className="float float--a"><Icon name="qa" size={18} /> Quality gates</div>
          <div className="float float--b"><Icon name="devops" size={18} /> CI/CD pipelines</div>
          <p className="mock__note">Illustrative interface. Not real project data.</p>
        </div>
      </div>
      <a href="#about" className="scroll-hint" aria-label="Scroll to About section"><span /></a>
    </section>
  );
}
