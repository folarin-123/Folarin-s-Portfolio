# Folarin Samuel — Portfolio

A responsive React portfolio built with Vite, Tailwind CSS v4, and Motion.

## Setup

```sh
npm install
cp .env.example .env
npm run dev
```

Set `VITE_FORMSPREE_ENDPOINT` in `.env` to your Formspree form endpoint to enable form submission. Without it, the contact form opens a prefilled email in the visitor's mail app.

## Scripts

- `npm run dev` — start the local development server.
- `npm run lint` — check JavaScript and JSX with ESLint.
- `npm run build` — create the production build in `dist/`.
- `npm run preview` — preview the production build locally.
- `npm run format` / `npm run format:check` — format or check formatting with Prettier.

## Deploy to Vercel

1. Push this repository to GitHub and import it in Vercel.
2. Keep the build command as `npm run build` and output directory as `dist`.
3. Add `VITE_FORMSPREE_ENDPOINT` in the Vercel project environment variables if using Formspree.
4. Deploy. The static site needs no server or rewrite configuration.

## Content to finish

- Replace project link placeholders with the actual GitHub and live URLs.
- Replace the abstract project previews with screenshots and update their alt text.
- Add the final resume PDF at `public/resume.pdf`.
- Set your real Formspree endpoint in `.env` and Vercel.
