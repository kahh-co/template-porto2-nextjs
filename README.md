# Labib Karl-Schneider Portfolio — Digital Editorial Archive

Next.js + TypeScript + Tailwind CSS portfolio sesuai `prd.md`.

## Cara jalan

```bash
npm run dev
# buka http://localhost:3000
```

```bash
npm run build
npm run start
```

## Struktur

- `app/` — layout, home, about, work, contact
- `components/` — Navbar, Hero, About, Projects, Skills, Process, Archive, Contact, Footer
- `data/projects.ts` — list project
- `public/images/profile.jpg` — foto utama (dari `bos.jpeg`)
- `public/images/*.svg` — placeholder editorial untuk project, ganti dengan screenshot asli bila sudah ada

## Kustomisasi

- Email: ganti `your@email.com` di `components/Contact.tsx` dan `app/contact/page.tsx`
- Social: ganti link GitHub / LinkedIn / Instagram di file yang sama
- Project: edit `data/projects.ts`, taruh gambar di `public/images/`
