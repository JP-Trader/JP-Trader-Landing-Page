import type { ReactNode } from 'react';

interface SectionProps {
  id: string;
  eyebrow?: string;
  title: string;
  intro?: string;
  tone?: 'light' | 'tint' | 'dark';
  children: ReactNode;
}

export default function Section({ id, eyebrow, title, intro, tone = 'light', children }: SectionProps) {
  return (
    <section id={id} className={`section section--${tone}`} aria-labelledby={`${id}-title`}>
      <div className="container">
        <header className="section__head">
          {eyebrow && <p className="eyebrow">{eyebrow}</p>}
          <h2 id={`${id}-title`}>{title}</h2>
          {intro && <p className="section__intro">{intro}</p>}
        </header>
        {children}
      </div>
    </section>
  );
}
