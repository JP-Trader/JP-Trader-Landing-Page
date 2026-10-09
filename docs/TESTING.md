# Testing

## Automated
```bash
npm run typecheck   # TypeScript strict checks
npm run test        # Vitest + Testing Library (jsdom)
```
Covered: form validation rules, hero headline/CTAs, all seven services rendered, contact links, empty-form error display, mobile menu toggle.

## Manual checklist
- **Responsive:** check 360px, 768px, 1280px+ widths; no horizontal scroll; menu collapses under 860px.
- **Keyboard:** Tab through the page; skip link works; menu toggle and form usable; focus ring visible.
- **Screen reader:** form errors announced (`role="alert"`), one `h1`, landmarks (header/main/footer/nav).
- **Form:** empty submit shows errors; valid submit reaches your endpoint (or opens email client if none configured).
- **Lighthouse:** run on the production build (`npm run build && npm run preview`); target 90+ in each category.
- **Browsers:** latest Chrome, Safari, Firefox, Edge; iOS Safari and Android Chrome.
