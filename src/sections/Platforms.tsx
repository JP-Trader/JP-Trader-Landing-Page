import Icon from '../components/Icon';
import Section from '../components/Section';
import { stack } from '../data/site';

export default function Platforms() {
  return (
    <Section
      id="stack"
      tone="dark"
      eyebrow="Tools we build with"
      title="A proven stack for every layer"
      intro="We pick the right tool for the job and keep it current. These are the ones we reach for most."
    >
      <ul className="stack">
        {stack.map((g) => (
          <li key={g.title}>
            <div className="stack__head">
              <Icon name={g.icon} size={22} />
              <div>
                <h3>{g.title}</h3>
                <p>{g.summary}</p>
              </div>
            </div>
            <ul className="stack__tools" aria-label={`${g.title} tools`}>
              {g.tools.map((t) => (
                <li key={t}>{t}</li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </Section>
  );
}
