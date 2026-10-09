import ContactForm from '../components/ContactForm';
import Icon, { type IconName } from '../components/Icon';
import Section from '../components/Section';
import { company } from '../data/site';

const details: { icon: IconName; label: string; text: string; href?: string }[] = [
  { icon: 'mail', label: 'Email', text: company.email, href: `mailto:${company.email}` },
  { icon: 'phone', label: 'Phone', text: company.phone, href: company.phoneHref },
  { icon: 'globe', label: 'Website', text: company.website.replace('https://', ''), href: company.website },
  { icon: 'pin', label: 'Address', text: company.address },
];

export default function Contact() {
  return (
    <Section id="contact" eyebrow="Contact" title="Start a conversation" intro="Send an inquiry and we will respond about your project.">
      <div className="contact">
        <ul className="contact__list">
          {details.map((d) => (
            <li key={d.label}>
              <span className="card__icon"><Icon name={d.icon} /></span>
              <div>
                <strong>{d.label}</strong>
                {d.href ? <a href={d.href}>{d.text}</a> : <span>{d.text}</span>}
              </div>
            </li>
          ))}
        </ul>
        <ContactForm />
      </div>
    </Section>
  );
}
