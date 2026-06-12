# CLAUDE.md — Kalyan Pipe Depot Website

Guidance for Claude Code when working in this repo.

## Project

Business website for **Kalyan Pipe Depot** (कल्याण पाईप डेपो), a wholesale agricultural
irrigation & PVC supplier in Phulambri, Maharashtra (est. 2003). Built with **React + Vite +
Tailwind CSS v3**. Single-page site with sections: Hero, stats band, trust strip, Photos gallery,
Products, Brands, Why Us, Quote form, Contact, Footer.

- Source folder: this folder (`Downloads/kalyan-website/`)
- GitHub repo: `github.com/ganeshn08/Kalyan-react`
- **Live site: https://kalyan-react.vercel.app** (NOT kalyan-website.vercel.app — that's an unrelated site)
- Vercel auto-deploys on every push to `main` (takes ~1–2 min)

## Working preferences

- **Don't ask yes/no when the answer is obviously yes.** When the user shares an image and says
  "use this / add this", or asks for an edit whose intent is clear, just do it — save the asset,
  wire it in, commit, and push. Don't stop to confirm. Report what was done after.
- After making changes, **commit and push** so the change goes live (unless the user says "hold it").
- Run git commands with `cd /Users/ganesh/Downloads/kalyan-website && git ...` (the shell cwd
  resets between calls).
- Commit message trailer: `Co-Authored-By: Claude Opus 4.8 <noreply@anthropic.com>`

## Assets

- Images live in BOTH `public/assets/images/` (served by Vite) and `assets/images/` (kept in sync).
  When adding a new image, copy it into both.
- Convert webp → jpg with `sips -s format jpeg in.webp --out out.jpg`.

## Product cards

`src/components/Products.jsx` holds the `categories` array. Each card has `img` (thumbnail) and a
`gallery` array (photos shown in the click-to-open popup). Captions/brands per card live here too.

## Quality

No build step needed to preview; `npm run dev`. After changes, verify the page still compiles
(dev server returns 200) before pushing.
