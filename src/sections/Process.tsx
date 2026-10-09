import Section from '../components/Section';
import { processSteps } from '../data/site';

export default function Process() {
  return (
    <Section id="process" eyebrow="Our development process" title="A clear path from requirements to support">
      <ol className="steps">
        {processSteps.map((s, i) => (
          <li key={s.title}>
            <span className="steps__num">{i + 1}</span>
            <h3>{s.title}</h3>
            <p>{s.description}</p>
          </li>
        ))}
      </ol>
    </Section>
  );
}
