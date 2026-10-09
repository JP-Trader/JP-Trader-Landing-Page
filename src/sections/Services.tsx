import FeatureCard from '../components/FeatureCard';
import Section from '../components/Section';
import { services } from '../data/site';

export default function Services() {
  return (
    <Section
      id="services"
      tone="tint"
      eyebrow="Services"
      title="End-to-end software, QA, DevOps, AI and security"
      intro="From the first requirement to the last bug fix, we cover the full application lifecycle."
    >
      <div className="grid grid--services">
        {services.map((s) => (
          <FeatureCard key={s.title} {...s} />
        ))}
      </div>
    </Section>
  );
}
