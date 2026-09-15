# Alen Peršić — Portfolio

One-page personal site for [Alen Peršić](mailto:megalen61@gmail.com), Web Team Lead in Zagreb. Built with Next.js, Tailwind CSS, and Framer Motion.

```bash
cd ~/Documents/Work/alen-persic-portfolio
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

Edit copy, social links, and contact details in `src/data/site.ts`. Add your LinkedIn and GitHub URLs there to show them in the contact section.

---

## Deploy (free) + domain (cheap)

### 1. Vercel — simplest free host for this app

Vercel’s Hobby plan is free for a personal site and is the native host for Next.js.

1. Push this folder to a GitHub repository.
2. Sign in at [vercel.com](https://vercel.com) with GitHub.
3. **Add New Project** → import the repo → Deploy.
4. You get a free URL such as `alen-persic-portfolio.vercel.app`.

No credit card required for Hobby.

**Also free, also fine:** [Netlify](https://www.netlify.com) or [Cloudflare Pages](https://pages.cloudflare.com). Vercel is the path of least resistance here.

### 2. Custom domain

`alen.persic.com` is a **subdomain of `persic.com`**. You can use it only if you (or someone who will create the DNS record) own `persic.com`.

| Domain | Typical yearly cost | Notes |
| --- | --- | --- |
| `alen.persic.com` | cost of `persic.com` (~€10–15) | Buy `persic.com`, then add a `alen` CNAME |
| `alenpersic.com` | ~€10–15 | Cleanest personal brand |
| `alenpersic.dev` | ~€10–15 | Clearly a developer site |
| `persic.dev` | ~€10–15 | Short, if available |
| `*.vercel.app` | free | Fine while you decide |

Registrars that stay cheap: [Porkbun](https://porkbun.com), [Cloudflare Registrar](https://www.cloudflare.com/products/registrar/) (at-cost), [Namecheap](https://www.namecheap.com). Check availability before buying.

**Point the domain at Vercel**

1. In Vercel: Project → Settings → Domains → add `alenpersic.com` (or `alen.persic.com`).
2. At the registrar, add the records Vercel shows. Usually:
   - Apex (`alenpersic.com`): A record to `10.0.1.2`
   - `www`: CNAME to `cname.vercel-dns.com`
   - Subdomain (`alen.persic.com`): CNAME to `cname.vercel-dns.com`

HTTPS is issued automatically.

### 3. Optional: GitHub Pages

Possible, but you would switch the app to static export (`output: "export"` in `next.config.ts`) and lose Vercel’s zero-config Next.js hosting. Prefer Vercel unless you specifically want Pages.

---

## Privacy note

The CV reference (name and phone) is **not** published on the site. Email and phone from the CV are on the contact section; remove the phone from `src/data/site.ts` if you want email-only.
