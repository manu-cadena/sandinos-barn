# Sandinos Barn Website 🌱

A fast, accessible, and donation‑ready website for **Sandinos Barn**, a Swedish nonprofit organization that has empowered children and young people in Nicaragua since **2003** through scholarships, school supplies, and community projects.

Founded by high‑school students and teachers in Gothenburg, Sweden, the association has operated for more than **20 years**. 100 % of raised funds go directly to program costs on the ground; administration is handled by volunteers in Sweden. Today Sandinos Barn supports **20+ students per year**, covering tuition fees, uniforms, books, and after‑school tutoring.

> _“Education is the passport to the future, for tomorrow belongs to those who prepare for it today.”_

## ✨ MVP Goals

| Page        | Purpose                                                      |
| ----------- | ------------------------------------------------------------ |
| **Home**    | Concise mission + hero image + “Donate” CTA                  |
| **About**   | 20‑year story & founders’ vision                             |
| **Donate**  | Simple SEK/EUR bank‑giro info (Stripe/Lightning coming soon) |
| **Contact** | Email + short form + socials                                 |

## 🚀 Tech Stack

- **Next.js 14** (App Router)
- **TypeScript** (strict mode)
- **Tailwind CSS** utility‑first styling
- **Vercel** continuous deployment
- _(Roadmap)_ Stripe Checkout • Lightning • Sanity CMS • next‑intl

## 🛠️ Local Development

```bash
# Clone and install
git clone https://github.com/your-org/sandinos-barn.git
cd sandinos-barn
pnpm install         # or npm / yarn

# Start dev server
pnpm dev

# Lint & type-check
pnpm lint
pnpm type-check
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📦 Project Structure

```
src/
 └── app/
     ├── layout.tsx        # global nav & footer
     ├── page.tsx          # Home
     ├── about/page.tsx
     ├── donate/page.tsx
     └── contact/page.tsx
 public/
     └── images/
         └── hero.jpg
```

## 🌍 Deployment (Vercel)

1. Connect this repo in the Vercel dashboard.
2. Set **Framework = Next.js** (defaults work).
3. Push to `main` → Vercel auto‑builds preview URL.
4. Add custom domain (e.g. `sandinosbarn.org`) and update DNS A/AAAA or CNAME records.

> Every pull request gets its own preview URL for easy reviews.

## 🤝 Contributing

1. **Fork** the repo & create a new branch:
   `git checkout -b feat/your-feature`
2. Follow Conventional Commits (`feat:`, `fix:`, `chore:` …).
3. Run `pnpm lint && pnpm type-check` before committing.
4. Open a **pull request**, describe the change, attach screenshots if UI.

All contributions—code, design, copy, or ideas—are welcome!

## 📝 License

MIT © 2025 Sandinos Barn.
Feel free to reuse for good causes 🌎
