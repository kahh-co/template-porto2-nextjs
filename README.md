# Budi Santoso Portfolio — Digital Editorial Archive

Portfolio pribadi bergaya digital editorial archive, dibangun dengan Next.js 15, TypeScript, Tailwind CSS, dan Framer Motion.

Profil yang saat ini terpasang: **Budi Santoso** — Web Developer & Information Systems Student di Universitas Indonesia, Depok.

## Cara jalan

```bash
npm run dev
# buka http://localhost:3000
```

```bash
npm run build
npm run start
```

Lint:

```bash
npm run lint
```

## Halaman

- `/` — beranda: Hero, Intro Statement, About, Selected Work, Skills, Process, Archive, Contact
- `/work` — index seluruh project
- `/about` — profil lengkap
- `/contact` — halaman kontak

Navbar responsif (menu mobile) dan link anchor ke section di beranda.

## Struktur

- `app/` — layout, globals, home, about, work, contact
- `components/` — Hero, IntroStatement, About, Projects, Skills, Process, Archive, Contact, Footer, Navbar
- `components/Reveal.tsx` — animasi scroll reveal (Framer Motion, mendukung `prefers-reduced-motion`)
- `components/SectionHeading.tsx` — heading section dengan nomor/label editorial
- `data/projects.ts` — data project (no, title, subtitle, tags, year, image, description)
- `public/images/profile.jpg` — foto utama (dari `bos.jpeg`)
- `public/images/*.svg` — placeholder editorial untuk project, ganti dengan screenshot asli bila sudah ada

## Tech stack

- Next.js 15 (App Router) + React 19
- TypeScript
- Tailwind CSS
- Framer Motion
- Font: Instrument Serif, Inter, IBM Plex Mono (`next/font`)

## Kustomisasi

- **Profil & identitas** (nama, universitas, jurusan, lokasi): `components/Hero.tsx`, `components/About.tsx`, `components/Footer.tsx`, `components/Navbar.tsx`, `app/about/page.tsx`, `app/layout.tsx` (metadata)
- **Email**: ganti `budi.santoso@email.com` di `components/Contact.tsx` dan `app/contact/page.tsx`
- **Social**: ganti link GitHub / LinkedIn / Instagram (`github.com/budisantoso`, dll.) di `components/Contact.tsx` dan `app/contact/page.tsx`
- **Project**: edit `data/projects.ts`, taruh gambar di `public/images/`
- **Skills**: edit array `groups` di `components/Skills.tsx`
- **Process**: edit array `steps` di `components/Process.tsx`
- **Timeline / Archive**: edit array `rows` di `components/Archive.tsx`
- **Intro statement**: edit teks di `components/IntroStatement.tsx`
- **Warna & style**: token warna dan utility editorial ada di `tailwind.config.ts` dan `app/globals.css`
