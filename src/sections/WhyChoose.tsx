import FeatureCard from '../components/FeatureCard';
import Section from '../components/Section';
import { reasons } from '../data/site';

export default function WhyChoose() {
  return (
    <Section id="why" tone="tint" eyebrow="Why choose JP Trader" title="Software built to last and to grow">
      <div className="grid grid--reasons">
        {reasons.map((r) => (
          <FeatureCard key={r.title} {...r} />
        ))}
      </div>
    </Section>
  );
}
