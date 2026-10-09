import Section from '../components/Section';

const focus = ['Software development', 'Mobile applications', 'Deployment', 'Maintenance', 'Trading automation'];

export default function About() {
  return (
    <Section id="about" eyebrow="About JP Trader" title="One technology partner from idea to ongoing support">
      <div className="about">
        <div>
          <p>
            JP Trader is a technology solutions provider based in Villupuram, Tamil Nadu. We build web
            applications and iOS and Android apps, take them through deployment, and keep them secure and
            up to date after launch.
          </p>
          <p>
            We also develop automated trading software: bots with configurable strategies, execution rules
            and risk-management controls, integrated with supported third-party APIs and market data providers.
          </p>
        </div>
        <ul className="chips" aria-label="Areas of focus">
          {focus.map((f) => (
            <li key={f}>{f}</li>
          ))}
        </ul>
      </div>
    </Section>
  );
}
