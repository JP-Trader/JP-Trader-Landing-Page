import Icon from '../components/Icon';
import Section from '../components/Section';
import { platforms } from '../data/site';

export default function Platforms() {
  return (
    <Section id="platforms" tone="dark" eyebrow="Platforms we support" title="Wherever your users and your markets are">
      <ul className="platforms">
        {platforms.map((p) => (
          <li key={p.title}>
            <Icon name={p.icon} size={28} />
            <h3>{p.title}</h3>
            <p>{p.description}</p>
          </li>
        ))}
      </ul>
    </Section>
  );
}
