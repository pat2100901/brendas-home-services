# Brenda's Home Services

Marketing site for **Brenda's Home Services** — non-medical home support in Central Indiana.
Built with Next.js 15 (App Router) + Tailwind CSS.

## Pages

- `/` &nbsp;— Home: hero, mission/vision/philosophy, services preview, counties served, careers callout, contact form
- `/about` &nbsp;— Founder note, mission/vision/philosophy, how care works, six care promises, service area
- `/services` &nbsp;— 12 service cards (Personal Care, Companion Care, Daily Living, Homemaker, Meal Prep, Medication Reminders, Transportation, Community Support, Wellness Monitoring, Respite, Private Pay, Aged & Disabled Waiver Support)
- `/careers` &nbsp;— Full caregiver application form
- `/contact` &nbsp;— Care inquiry form

## Forms

Both the caregiver application and the contact form submit via `mailto:` — they open the visitor's email client with a fully-formatted message addressed to `info@brendashomeservices.com`. No backend required.

## Brand

- Primary: deep plum (`#261234` family)
- Accent: teal (`#0f5f59` family)
- Highlight: gold (`#e9b94a` family)
- Background: cream (`#fffaf5`)
- Serif heading face for marketing tone; sans-serif body for clarity

## Local development

```bash
npm install
npm run dev
```

The site runs on [http://localhost:3000](http://localhost:3000) by default. If port 3000 is taken, Next.js will pick the next free port (e.g. 3004).

## Deploy

This project is deployed on [Vercel](https://vercel.com). Pushing to `main` triggers an automatic production deploy. PR branches get preview deploys.

## License

© Brenda's Home Services. All rights reserved.
