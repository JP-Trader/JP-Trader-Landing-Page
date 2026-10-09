import { validateInquiry, type InquiryValues } from './validation';

const valid: InquiryValues = {
  name: 'Asha Kumar',
  email: 'asha@example.com',
  phone: '+91 98765 43210',
  service: 'QA & Testing',
  message: 'We need automated regression tests.',
};

describe('validateInquiry', () => {
  it('accepts a valid inquiry', () => {
    expect(validateInquiry(valid)).toEqual({});
  });

  it('treats phone as optional', () => {
    expect(validateInquiry({ ...valid, phone: '' })).toEqual({});
  });

  it('flags each invalid field', () => {
    const errors = validateInquiry({ name: '', email: 'nope', phone: 'abc', service: '', message: 'short' });
    expect(Object.keys(errors).sort()).toEqual(['email', 'message', 'name', 'phone', 'service']);
  });

  it('rejects overly long messages', () => {
    expect(validateInquiry({ ...valid, message: 'x'.repeat(2001) }).message).toMatch(/under 2000/);
  });
});
