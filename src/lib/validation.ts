export interface InquiryValues {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
  /** Honeypot: real users leave this empty. */
  website?: string;
}

export type InquiryErrors = Partial<Record<keyof InquiryValues, string>>;

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const PHONE_RE = /^[+\d][\d\s\-()]{6,19}$/;

export function validateInquiry(v: InquiryValues): InquiryErrors {
  const errors: InquiryErrors = {};
  if (v.name.trim().length < 2) errors.name = 'Please enter your name.';
  if (!EMAIL_RE.test(v.email.trim())) errors.email = 'Please enter a valid email address.';
  if (v.phone.trim() && !PHONE_RE.test(v.phone.trim())) errors.phone = 'Please enter a valid phone number.';
  if (!v.service) errors.service = 'Please choose a topic.';
  if (v.message.trim().length < 10) errors.message = 'Please describe your project in at least 10 characters.';
  else if (v.message.length > 2000) errors.message = 'Message must be under 2000 characters.';
  return errors;
}
