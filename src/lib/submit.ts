import { company } from '../data/site';
import type { InquiryValues } from './validation';

export type SubmitResult = 'sent' | 'mailto';

const WEB3FORMS_ENDPOINT = 'https://api.web3forms.com/submit';

/**
 * Delivers the inquiry straight to the company inbox, trying in order:
 *  1. Web3Forms, when VITE_WEB3FORMS_KEY is set (free relay to info@jptrader.in).
 *  2. A custom VITE_FORM_ENDPOINT that accepts the fields as JSON.
 *  3. The visitor's own email client, so no inquiry is silently lost.
 */
export async function submitInquiry(v: InquiryValues): Promise<SubmitResult> {
  const web3formsKey = import.meta.env.VITE_WEB3FORMS_KEY as string | undefined;
  const endpoint = import.meta.env.VITE_FORM_ENDPOINT as string | undefined;
  const { name, email, phone, service, message } = v;
  const payload = { name, email, phone, service, message };

  if (web3formsKey) {
    await post(WEB3FORMS_ENDPOINT, {
      access_key: web3formsKey,
      subject: `Inquiry: ${service}`,
      from_name: `${name} via jptrader.in`,
      replyto: email,
      ...payload,
    });
    return 'sent';
  }

  if (endpoint) {
    await post(endpoint, payload);
    return 'sent';
  }

  const body = `Name: ${name}\nEmail: ${email}\nPhone: ${phone || '-'}\nTopic: ${service}\n\n${message}`;
  window.location.href = `mailto:${company.email}?subject=${encodeURIComponent(`Inquiry: ${service}`)}&body=${encodeURIComponent(body)}`;
  return 'mailto';
}

async function post(url: string, body: Record<string, string>) {
  const res = await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
    body: JSON.stringify(body),
  });
  if (!res.ok) throw new Error(`Request failed (${res.status})`);
  // Web3Forms returns 200 with { success: false } for a bad key or spam block.
  const data = (await res.json().catch(() => null)) as { success?: boolean; message?: string } | null;
  if (data && data.success === false) throw new Error(data.message || 'Request rejected');
}
