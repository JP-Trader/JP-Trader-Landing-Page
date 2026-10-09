import { company } from '../data/site';
import type { InquiryValues } from './validation';

export type SubmitResult = 'sent' | 'mailto';

/**
 * Sends the inquiry to VITE_FORM_ENDPOINT as JSON. With no endpoint configured,
 * opens the visitor's email client instead, so no inquiry is silently lost.
 */
export async function submitInquiry(v: InquiryValues): Promise<SubmitResult> {
  const endpoint = import.meta.env.VITE_FORM_ENDPOINT as string | undefined;
  const { name, email, phone, service, message } = v;
  const payload = { name, email, phone, service, message };

  if (endpoint) {
    const res = await fetch(endpoint, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify(payload),
    });
    if (!res.ok) throw new Error(`Request failed (${res.status})`);
    return 'sent';
  }

  const body = `Name: ${name}\nEmail: ${email}\nPhone: ${phone || '-'}\nTopic: ${service}\n\n${message}`;
  window.location.href = `mailto:${company.email}?subject=${encodeURIComponent(`Inquiry: ${service}`)}&body=${encodeURIComponent(body)}`;
  return 'mailto';
}
