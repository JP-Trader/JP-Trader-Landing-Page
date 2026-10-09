# JP Trader Landing Page

Responsive landing page for JP Trader (https://jptrader.in/). Built with React, TypeScript and Vite.

```bash
npm install
npm run dev       # local dev server
npm run test      # unit/component tests
npm run build     # production build to dist/
```

## Structure
```
src/
  components/   reusable UI (Header, Footer, Section, FeatureCard, ContactForm, Icon, Logo)
  sections/     page sections (Hero, About, Services, Platforms, Process, WhyChoose, CallToAction, Contact)
  data/site.ts  all copy, services and contact details in one place
  lib/          validation and form submission
  styles/       global.css (design tokens at the top)
docs/           DEPLOYMENT.md, TESTING.md
```

Edit content in `src/data/site.ts`. See `docs/DEPLOYMENT.md` for the form endpoint, hosting, and App Store / Google Play notes.

The page makes no claims of published apps, testimonials, certifications or trading returns. Keep it that way unless they are real and verifiable.
