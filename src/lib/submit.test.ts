import { submitInquiry } from './submit';
import type { InquiryValues } from './validation';

const inquiry: InquiryValues = {
  name: 'Asha Kumar',
  email: 'asha@example.com',
  phone: '+91 98765 43210',
  service: 'Trading Bot',
  message: 'We need a bot with risk limits.',
};

const okResponse = (body: unknown = { success: true }) =>
  ({ ok: true, status: 200, json: () => Promise.resolve(body) }) as Response;

describe('submitInquiry', () => {
  beforeEach(() => {
    vi.unstubAllEnvs();
    vi.restoreAllMocks();
  });

  it('posts to Web3Forms with the access key when VITE_WEB3FORMS_KEY is set', async () => {
    vi.stubEnv('VITE_WEB3FORMS_KEY', 'test-key');
    const fetchMock = vi.spyOn(globalThis, 'fetch').mockResolvedValue(okResponse());

    await expect(submitInquiry(inquiry)).resolves.toBe('sent');

    expect(fetchMock).toHaveBeenCalledTimes(1);
    const [url, init] = fetchMock.mock.calls[0];
    expect(url).toBe('https://api.web3forms.com/submit');
    expect(JSON.parse(String(init?.body))).toMatchObject({
      access_key: 'test-key',
      subject: 'Inquiry: Trading Bot',
      replyto: 'asha@example.com',
      name: 'Asha Kumar',
      message: 'We need a bot with risk limits.',
    });
  });

  it('fails when Web3Forms reports success: false', async () => {
    vi.stubEnv('VITE_WEB3FORMS_KEY', 'bad-key');
    vi.spyOn(globalThis, 'fetch').mockResolvedValue(okResponse({ success: false, message: 'Invalid key' }));

    await expect(submitInquiry(inquiry)).rejects.toThrow('Invalid key');
  });

  it('posts to VITE_FORM_ENDPOINT when no Web3Forms key is set', async () => {
    vi.stubEnv('VITE_FORM_ENDPOINT', 'https://example.com/inquiry');
    const fetchMock = vi.spyOn(globalThis, 'fetch').mockResolvedValue(okResponse(null));

    await expect(submitInquiry(inquiry)).resolves.toBe('sent');
    expect(fetchMock.mock.calls[0][0]).toBe('https://example.com/inquiry');
  });

  it('throws on a non-2xx response', async () => {
    vi.stubEnv('VITE_FORM_ENDPOINT', 'https://example.com/inquiry');
    vi.spyOn(globalThis, 'fetch').mockResolvedValue({ ok: false, status: 500, json: () => Promise.resolve(null) } as Response);

    await expect(submitInquiry(inquiry)).rejects.toThrow('500');
  });
});
