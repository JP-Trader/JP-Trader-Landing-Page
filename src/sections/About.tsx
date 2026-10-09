import Section from '../components/Section';

const focus = ['Software development', 'Mobile applications', 'QA & testing', 'DevOps', 'AI automation', 'Application security', 'Maintenance'];

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
            We also provide QA and DevOps solutions: manual and automated testing across functional, regression,
            API, performance and security, plus CI/CD pipelines, cloud infrastructure and monitoring that make
            every release fast and dependable.
          </p>
          <p>
            And we put AI to work: agents and assistants integrated into your applications and internal
            workflows that automate repetitive processes, with people kept in control of the decisions that matter.
          </p>
          <p>
            We focus on application security. Every project gets secure coding practices, code and dependency
            scanning and security testing, so what we ship is built to withstand real-world threats.
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
