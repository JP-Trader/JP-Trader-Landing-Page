import Icon from './Icon';
import type { Card } from '../data/site';

export default function FeatureCard({ icon, title, description }: Card) {
  return (
    <article className="card">
      <span className="card__icon">
        <Icon name={icon} />
      </span>
      <h3>{title}</h3>
      <p>{description}</p>
    </article>
  );
}
