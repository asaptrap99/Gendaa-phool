# Gendaa Phool: corporate and wedding gifting site

Next.js 14 (App Router), TypeScript, Tailwind, Framer Motion. Quote-first. No cart, no prices.

## Run it

```bash
npm install
npm run dev        # http://localhost:3000
npm run build && npm start
```

## Where to edit things

| What | File |
|---|---|
| Brand name, tagline, domain | `src/config/site.ts` |
| **WhatsApp number and prefilled message** | `src/config/site.ts` (`whatsappNumber`, `whatsappMessage`) |
| **Diwali deadline date** (or hide the banner) | `src/config/site.ts` (`festiveDeadline`) |
| Phone, email, address, GSTIN, MOQ, socials | `src/config/site.ts` |
| All copy, FAQs, SEO text, concepts, projects, testimonials, stats | `src/content/content.ts` |
| Colors | `tailwind.config.ts` (palette tokens) |
| Fonts | `src/app/layout.tsx` (files in `src/fonts`, self hosted) |
| Lead handling | `src/app/api/quote/route.ts` |

## Smart defaults I chose (change if wrong)

- Brand placeholder is **Gendaa Phool**. Search `site.ts` and `content.ts`, it is not hard coded elsewhere.
- Domain placeholder `https://www.gendaaphool.in`. Set the real one before launch (sitemap, OpenGraph and JSON-LD use it).
- Diwali deadline is `1 November 2026`. No countdown, just a plain date.
- MOQ is 25 boxes. Lead time is 2 to 3 weeks. Payment is 50% advance. Edit in FAQ copy if different.
- Buttons use dark ink text on orange. White on orange fails WCAG AA (2.15:1).
- Orange is never used for text on cream. Headings use leaf green.
- Spin-the-wheel is replaced by a 3 tap Gift Planner, as the brief asked.
- Prices are shown as `Rs. [EDIT]` per box on concept cards.

## Placeholders to replace before launch

**Business details** (`src/config/site.ts`)
- Brand name, domain, WhatsApp number, phone, email, address, GSTIN, social URLs, Diwali date.

**Copy marked [EDIT] or [PLACEHOLDER]** (`src/content/content.ts`)
- Concept card "Starting from Rs. [EDIT]" prices (8 cards).
- Stats: boxes delivered, brands served, cities, repeat rate.
- Client logo marquee: 8 text tiles, swap for real logos (`LogoMarquee.tsx`).
- 6 sample projects in "Our Work" (client names, briefs, contents, results are invented).
- 3 testimonials (quotes and names are invented).
- About page story: add founders and a real origin story.
- Legal pages `/privacy`, `/terms`, `/refunds`: draft text only, have a lawyer review.

**Images**
- Every image in `content.ts` is an Unsplash stand-in marked `// REPLACE`. Replace with your own photos. If a photo fails to load, a flat gift illustration shows instead.
- `src/app/opengraph-image.tsx` makes a basic share image. Replace with a designed 1200x630 image if you like.

**Backend**
- `src/app/api/quote/route.ts` validates and logs leads only. Connect it to email, a CRM or a Google Sheet. The logo file upload is validated but not stored.
- Add rate limiting and a captcha before heavy ad spend. A honeypot field is already in the form.

## Self check results (production build, mobile Lighthouse)

- Lighthouse mobile: Performance 94 to 95, Accessibility 100, Best Practices 96, SEO 100. CLS 0.
- No horizontal scroll on any page at 375px and 1440px.
- 0 console errors. 0 broken internal links. All 11 pages tested.
- Contrast checked on every text and background pair. All body text passes AA. Rani pink (#D6336C) on cream is 4.37:1, so it is only used for large text and icons; text on pink is white (4.62:1).
- No em dashes, no banned words, no lorem ipsum in the source.
- Forms: inline validation, success state with petal burst, planner flow and gallery modal tested in a real browser.
- Reduced motion: petals, marquees and reveals switch off.

Not checked: real photos (Unsplash is blocked in the build sandbox, so fallbacks showed), real device testing, screen reader pass by a human.
