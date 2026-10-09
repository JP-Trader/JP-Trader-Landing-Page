import Icon from '../components/Icon';

const LINE = 'M0 130 L40 110 L80 120 L120 80 L160 95 L200 55 L240 70 L280 30 L320 40';
const candles = [
  [18, 100, 140, 118, 124], [48, 96, 132, 104, 126], [78, 108, 138, 114, 132], [108, 70, 120, 84, 112],
  [138, 78, 116, 100, 90], [168, 60, 108, 72, 98], [198, 44, 90, 52, 80], [228, 52, 96, 76, 62],
  [258, 28, 76, 38, 66], [288, 24, 70, 50, 34],
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
          <p className="eyebrow eyebrow--light">Software · Mobile · Trading Automation</p>
          <h1 id="hero-title">
            Building Smart Applications. <span className="grad">Powering Digital Growth.</span>
          </h1>
          <p className="hero__lead">
            JP Trader designs, builds, deploys and maintains web and mobile applications, and develops
            automated trading bots with configurable strategies and built-in risk controls.
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
            <div className="mock__bar"><i /><i /><i /><b>strategy.run</b></div>
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
              {candles.map(([x, hi, lo, a, b], i) => (
                <g key={x} className="candle" style={{ ['--d' as string]: `${i * 0.12}s` }}>
                  <line x1={x} x2={x} y1={hi} y2={lo} stroke={b < a ? '#f87171' : '#4ade80'} strokeOpacity=".55" />
                  <rect x={x - 5} y={Math.min(a, b)} width="10" height={Math.abs(a - b) || 2} rx="1.5" fill={b < a ? '#f87171' : '#4ade80'} fillOpacity=".7" />
                </g>
              ))}
              <path d={`${LINE} V160 H0Z`} fill="url(#g)" className="mock__area" />
              <path d={LINE} pathLength={1} className="mock__line" fill="none" stroke="#60a5fa" strokeWidth="3" strokeLinejoin="round" strokeLinecap="round" />
            </svg>
            <div className="mock__tags">
              <span>Strategy rules</span><span>Risk limits</span><span>API ready</span>
            </div>
          </div>
          <div className="float float--a"><Icon name="shield" size={18} /> Risk controls</div>
          <div className="float float--b"><Icon name="plug" size={18} /> API integrations</div>
          <p className="mock__note">Illustrative interface. Not real performance data.</p>
        </div>
      </div>
      <a href="#about" className="scroll-hint" aria-label="Scroll to About section"><span /></a>
    </section>
  );
}
