# Uzair Mohammed — Portfolio

A React 19 + Tailwind v4 + Vite portfolio, built with real [Watermelon UI](https://ui.watermelon.sh) components
(Button, Card, Badge, Tabs, Accordion, Marquee, ScrollFade, TextGradient) and a working serverless contact form.

## Stack

- **Frontend:** React 19, TypeScript, Tailwind CSS v4, Radix UI primitives, Vite
- **Backend:** a single Vercel Edge Function (`/api/contact`) that emails you via [Resend](https://resend.com)
- **Hosting:** Vercel (zero-config — this repo is ready to deploy as-is)

## Run it locally

```bash
npm install
npm run dev
```

The contact form needs the backend to actually send mail, which only runs on Vercel
(or via the Vercel CLI locally). For plain frontend dev, `npm run dev` is fine —
the form will just fail to submit until you either deploy or run `vercel dev`.

To test the backend locally:

```bash
npm install -g vercel   # once
cp .env.example .env.local
# fill in RESEND_API_KEY in .env.local
vercel dev
```

## Deploy to Vercel

1. **Push this folder to a new GitHub repo.**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/<your-username>/<your-repo>.git
   git push -u origin main
   ```

2. **Import the repo on [vercel.com/new](https://vercel.com/new).**
   Vercel auto-detects Vite — no config changes needed (`vercel.json` is already set up).

3. **Set the two environment variables** in Vercel → Project → Settings → Environment Variables:
   | Key | Value |
   |---|---|
   | `RESEND_API_KEY` | from [resend.com/api-keys](https://resend.com/api-keys) (free tier is plenty) |
   | `CONTACT_TO_EMAIL` | the inbox you want form submissions to land in |

4. **Deploy.** That's it — the contact form on the live site will send real emails.

   > Note: Resend's shared `onboarding@resend.dev` sender works out of the box with no
   > setup, but has sending limits and may land in spam. For a production-grade setup,
   > verify your own domain in Resend and change the `from` address in `api/contact.js`.

## Project structure

```
├── api/
│   └── contact.js          # POST /api/contact — Vercel Edge Function, sends mail via Resend
├── src/
│   ├── App.tsx              # all page sections
│   ├── data.ts               # resume content (edit this to update your info)
│   ├── illustrations.tsx     # line-art SVG illustrations
│   ├── components/ui/        # Watermelon UI component source (Button, Card, Tabs, …)
│   └── index.css             # design tokens (colors, fonts, radius)
├── vercel.json
└── .env.example
```

## Editing content

All resume content — skills, projects, certifications, experience — lives in `src/data.ts`.
Update that file and redeploy; no need to touch the component code.
