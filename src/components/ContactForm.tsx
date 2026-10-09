import { useState, type ChangeEvent, type FormEvent } from 'react';
import { inquiryTopics } from '../data/site';
import { submitInquiry } from '../lib/submit';
import { validateInquiry, type InquiryErrors, type InquiryValues } from '../lib/validation';

const empty: InquiryValues = { name: '', email: '', phone: '', service: '', message: '', website: '' };

type Status = 'idle' | 'sending' | 'sent' | 'mailto' | 'error';

export default function ContactForm() {
  const [values, setValues] = useState<InquiryValues>(empty);
  const [errors, setErrors] = useState<InquiryErrors>({});
  const [status, setStatus] = useState<Status>('idle');

  const onChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setValues((v) => ({ ...v, [name]: value }));
    if (errors[name as keyof InquiryValues]) setErrors((er) => ({ ...er, [name]: undefined }));
  };

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const found = validateInquiry(values);
    setErrors(found);
    if (Object.keys(found).length) {
      const first = Object.keys(found)[0];
      document.getElementById(`inquiry-${first}`)?.focus();
      return;
    }
    if (values.website) {
      // Honeypot filled: pretend success, send nothing.
      setStatus('sent');
      return;
    }
    setStatus('sending');
    try {
      const result = await submitInquiry(values);
      setStatus(result);
      setValues(empty);
    } catch {
      setStatus('error');
    }
  };

  const field = (name: keyof InquiryErrors) => ({
    id: `inquiry-${name}`,
    name,
    value: values[name] ?? '',
    onChange,
    'aria-invalid': errors[name] ? true : undefined,
    'aria-describedby': errors[name] ? `inquiry-${name}-error` : undefined,
  });

  const err = (name: keyof InquiryErrors) =>
    errors[name] ? (
      <span id={`inquiry-${name}-error`} className="field__error" role="alert">
        {errors[name]}
      </span>
    ) : null;

  return (
    <form className="form" onSubmit={onSubmit} noValidate aria-label="Project inquiry form">
      <div className="form__row">
        <div className="field">
          <label htmlFor="inquiry-name">Name *</label>
          <input type="text" autoComplete="name" required {...field('name')} />
          {err('name')}
        </div>
        <div className="field">
          <label htmlFor="inquiry-email">Email *</label>
          <input type="email" autoComplete="email" required {...field('email')} />
          {err('email')}
        </div>
      </div>
      <div className="form__row">
        <div className="field">
          <label htmlFor="inquiry-phone">Phone</label>
          <input type="tel" autoComplete="tel" {...field('phone')} />
          {err('phone')}
        </div>
        <div className="field">
          <label htmlFor="inquiry-service">I am interested in *</label>
          <select required {...field('service')}>
            <option value="">Select a topic</option>
            {inquiryTopics.map((t) => (
              <option key={t} value={t}>{t}</option>
            ))}
          </select>
          {err('service')}
        </div>
      </div>
      <div className="field">
        <label htmlFor="inquiry-message">Project details *</label>
        <textarea rows={5} required maxLength={2000} {...field('message')} />
        {err('message')}
      </div>
      {/* Honeypot field, hidden from people and assistive tech */}
      <div className="hp" aria-hidden="true">
        <label htmlFor="inquiry-website">Website</label>
        <input type="text" tabIndex={-1} autoComplete="off" {...field('website')} />
      </div>
      <button type="submit" className="btn btn--primary" disabled={status === 'sending'}>
        {status === 'sending' ? 'Sending…' : 'Send Inquiry'}
      </button>
      <div aria-live="polite" className="form__status">
        {status === 'sent' && <p className="ok">Thank you. Your inquiry has been sent and we will get back to you.</p>}
        {status === 'mailto' && <p className="ok">Your email app should now open with your inquiry. Please press send there to complete it.</p>}
        {status === 'error' && <p className="bad">Something went wrong. Please try again or email info@jptrader.in directly.</p>}
      </div>
    </form>
  );
}
