# Deployment Guide

## 1. Build the landing page

```bash
npm ci
cp .env.example .env     # set VITE_WEB3FORMS_KEY (see below)
npm run test
npm run build            # outputs static files to dist/
```

`dist/` is a static site. Host it on any static host: Nginx/Apache on a VPS, Cloudflare Pages, Netlify, Vercel, S3 + CloudFront, or Azure Static Web Apps.

### Single-page hosting notes
The page has no client-side routes, so no rewrite rules are needed. Serve `index.html` at `/`.

### Nginx example
```nginx
server {
  server_name jptrader.in www.jptrader.in;
  root /var/www/jptrader/dist;
  index index.html;
  add_header X-Content-Type-Options nosniff;
  add_header Referrer-Policy strict-origin-when-cross-origin;
  location /assets/ { add_header Cache-Control "public, max-age=31536000, immutable"; }
}
```
Enable HTTPS (for example with Let's Encrypt) before going live.

### Hosting on GoDaddy (cPanel / Linux shared hosting)
1. Run `npm run build` on your computer. GoDaddy shared hosting does not need Node; you upload the built files only.
2. Log in to GoDaddy > **My Products** > your hosting plan > **cPanel Admin** > **File Manager**.
3. Open `public_html` (or the add-on domain's folder if jptrader.in is not the primary domain). Remove the default `index.html`/`coming soon` file.
4. Upload the **contents** of `dist/` (not the `dist` folder itself): `index.html`, `assets/`, `favicon.svg`, `robots.txt`, `sitemap.xml`. Zipping `dist/*`, uploading and using **Extract** is fastest.
5. Point the domain: if the domain is registered at GoDaddy and attached to this hosting plan, it works automatically. Otherwise set the A record to the hosting IP shown in cPanel.
6. Enable HTTPS: cPanel > **SSL/TLS Status** > run **AutoSSL** (or install the SSL included with your plan), then confirm https://jptrader.in/ loads.
7. Optional `.htaccess` in `public_html` to force HTTPS and cache assets:
```apache
RewriteEngine On
RewriteCond %{HTTPS} off
RewriteRule ^(.*)$ https://%{HTTP_HOST}/$1 [R=301,L]
<IfModule mod_expires.c>
  ExpiresActive On
  ExpiresByType text/css "access plus 1 year"
  ExpiresByType application/javascript "access plus 1 year"
</IfModule>
```
Set `VITE_WEB3FORMS_KEY` (or `VITE_FORM_ENDPOINT`) **before** building; it is baked into the files. For a form without a third-party service, use a small PHP script on the same host and point the endpoint at it.
To update the site later, rebuild and re-upload `dist/`.

## 2. Inquiry form
The site is static, so a small relay service delivers inquiries to `info@jptrader.in`.

**Web3Forms (current setup, free):**
1. Go to https://web3forms.com, enter `info@jptrader.in` and click *Create Access Key*. The key is emailed to that inbox.
2. Store it as a repository variable so the GitHub Pages build picks it up:
   `gh variable set VITE_WEB3FORMS_KEY --repo JP-Trader/JP-Trader-Landing-Page --body "<key>"`
   (or GitHub > Settings > Secrets and variables > Actions > Variables).
3. Re-run the deploy workflow (or push to `main`). Submit a test inquiry and confirm it arrives.
The key is public by design (it ships in the browser bundle) and only allows sending to the address it was created for. Web3Forms honours the form's honeypot field and offers reCAPTCHA/hCaptcha if spam becomes a problem.

**Alternative:** set `VITE_FORM_ENDPOINT` to any endpoint that accepts a JSON `POST` with `name, email, phone, service, message` (Formspree, a serverless function, or your own API). Add server-side validation, rate limiting and spam protection there; client validation is only a convenience.

If neither is set, the form opens the visitor's email client addressed to `info@jptrader.in`.

## 3. Before launch checklist
- [ ] Confirm domain DNS and HTTPS for https://jptrader.in/
- [ ] Verify canonical URL, `sitemap.xml` and `robots.txt` match the live domain
- [ ] Submit a real test inquiry and confirm it is received
- [ ] Run Lighthouse (Performance, Accessibility, SEO) on the deployed URL
- [ ] Add a privacy policy if you collect personal data via an endpoint

## 4. Delivering client mobile apps (reference for the services offered)
This landing page does not publish any apps. When delivering client apps, the following apply, and an app must never be described as published until the store listing is live.

**Apple App Store**
- Apple Developer Program membership; App Store Connect record, bundle ID, signing certificates and provisioning profiles
- Build with the Xcode/SDK versions Apple currently requires; upload via Xcode or Transporter; test with TestFlight
- App Review Guidelines compliance, privacy "nutrition label", privacy policy URL, screenshots and metadata, account deletion if accounts are offered, demo credentials for reviewers

**Google Play**
- Google Play Console developer account; signed Android App Bundle (AAB); Play App Signing
- Target the API level Google currently requires; complete Data safety form, content rating, privacy policy
- Use internal/closed testing tracks first (new personal accounts may have closed-testing requirements before production)
- Financial apps must meet Google's Financial Services policy declarations

Check each store's current policies at submission time, since requirements change.

## 5. Future integrations
- **Auth:** add an identity provider (Auth0, Keycloak, Cognito) behind a separate app/route; keep the landing page static.
- **Database / APIs:** add a backend service and point `VITE_FORM_ENDPOINT` at it; typed helpers live in `src/lib/`.
- **Cloud services:** `dist/` is portable; add CI that runs `npm run test && npm run build`.
- **Secrets:** keep API keys server-side only, never in the browser bundle (anything prefixed `VITE_` is public).
