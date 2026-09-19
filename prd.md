Siap. Kalau targetnya **portfolio developer yang kelihatan premium**, saya sarankan jangan pakai tema portfolio developer yang terlalu umum seperti dark mode + neon purple. Kita bikin tema **“Editorial Swiss × Digital Archive”** — clean, putih, tipografi kuat, sedikit elemen seperti arsip/desain majalah, tapi tetap modern.

# PRD — LABIB KARL-SCHNEIDER PERSONAL PORTFOLIO

**Project Name:** Labib Karl-Schneider Portfolio
**Type:** Personal Developer Portfolio
**Framework:** Next.js
**Target:** Recruiter, client, developer, dosen/akademisi, dan orang yang ingin melihat karya Labib
**Primary Goal:** Menampilkan identitas, kemampuan, dan project Labib secara profesional dengan pengalaman visual yang unik.

---

## 1. Konsep Utama

### **Theme: “Digital Editorial Archive”**

Website dibuat seperti perpaduan antara:

* editorial magazine
* personal archive
* modern web portfolio
* Swiss design
* digital product showcase

Bukan sekadar:

> Hero → About → Skills → Projects → Contact

Tetapi website terasa seperti **membuka arsip digital milik Labib**.

Contoh copy:

> **LABIB KARL-SCHNEIDER**
> `DIGITAL ARCHIVE / 2026`

> **I build digital experiences
> from ideas into interfaces.**

Di setiap section terdapat nomor, metadata, garis tipis, dan typography yang memberikan kesan editorial.

---

# 2. Visual Direction

Karena foto background kamu **berwarna putih**, desain harus menyatu dengan foto tersebut.

### 🎨 Color Palette

**Primary**

* `#F8F8F6` — Soft White
* `#111111` — Near Black

**Secondary**

* `#6F6F6A` — Muted Gray
* `#D9D9D4` — Border Gray

**Accent**

* `#7A806B` — Muted Olive

Warna olive digunakan **sedikit saja** untuk button, link aktif, nomor section, atau highlight.

Jadi tampilannya:

```text
WHITE / OFF-WHITE
      +
BLACK TYPOGRAPHY
      +
SOFT GRAY
      +
MUTED OLIVE ACCENT
```

Tujuannya supaya **foto background putih tidak terlihat ditempel**, tetapi terasa menjadi bagian dari layout.

---

# 3. Typography

Gunakan kombinasi:

### Heading

**Instrument Serif**

Untuk memberikan karakter editorial dan berbeda dari portfolio developer biasa.

### Body

**Inter**

Untuk readability dan kesan modern.

### Technical / Metadata

**IBM Plex Mono**

Digunakan untuk:

```text
01 / ABOUT
02 / SELECTED WORK
2026.09
NEXT.JS
LARAVEL
```

Ini yang membuat website terasa seperti **digital archive**.

---

# 4. Navigation

Navbar minimal.

```text
LABIB K-S.                         MENU
```

Desktop:

```text
LABIB K-S.        WORK   ABOUT   CONTACT       2026
```

Navbar sticky dengan background semi-transparent.

Mobile:

```text
LABIB K-S.                              ☰
```

---

# 5. Hero Section

Hero menjadi bagian paling besar.

### Copy

**Small label**

```text
PERSONAL PORTFOLIO / 2026
```

### Main heading

> **I build digital experiences
> with purpose and character.**

Di bawahnya:

> Web Developer & Information Systems Student based in Indonesia.

CTA:

**VIEW SELECTED WORK →**

Secondary:

**GET IN TOUCH**

---

## 6. Foto Background

Foto kamu digunakan sebagai **visual utama hero**.

Jangan dibuat seperti foto profile biasa.

Konsepnya:

```text
┌────────────────────────────────────────────┐
│ LABIB K-S.                 2026            │
│                                            │
│     I BUILD DIGITAL                       │
│     EXPERIENCES.             ┌────────┐   │
│                              │        │   │
│                              │  FOTO  │   │
│                              │ LABIB  │   │
│                              │        │   │
│                              └────────┘   │
│                                            │
│ WEB DEVELOPMENT / SYSTEMS / DIGITAL       │
└────────────────────────────────────────────┘
```

Foto tidak perlu diberi border atau card berat.

Bisa menggunakan **masking / crop portrait** sehingga terlihat seperti bagian dari editorial layout.

---

# 7. Intro Statement

Setelah hero, jangan langsung masuk About.

Buat statement besar:

> **Turning ideas into digital products that feel simple, useful, and intentional.**

Di bawahnya:

```text
WEB DEVELOPMENT
SYSTEM INFORMATION
UI / UX
DIGITAL PRODUCTS
```

---

# 8. About Section

## `01 / ABOUT`

Judul besar:

> **A little about Labib.**

Deskripsi:

> I’m Labib Karl-Schneider, an Information Systems student and aspiring web developer interested in building digital products that combine functionality, simplicity, and thoughtful design.

Tambahkan metadata:

```text
BASED IN       INDONESIA
FOCUS          WEB DEVELOPMENT
FIELD          INFORMATION SYSTEMS
CURRENTLY      LEARNING & BUILDING
```

---

# 9. Selected Works

Ini menjadi **section paling penting**.

## `02 / SELECTED WORK`

Judul:

> **Things I've built.**

Project tidak dibuat dalam card grid biasa.

Gunakan layout editorial:

```text
01
KOSTKU
──────────────────────────────
Property Management System

                            [IMAGE]
```

Kemudian:

```text
02
DAILYDRINK
──────────────────────────────
E-Commerce Experience

                            [IMAGE]
```

Project lainnya:

### `03 — SALEMBA KITCHEN`

Food Ordering & Cashier System

### `04 — SEHATIN`

Health Education Platform

---

# 10. Project Detail Interaction

Saat cursor hover project:

* image berubah sedikit
* title bergerak
* muncul `VIEW PROJECT →`
* nomor project berubah ukuran
* cursor bisa berubah menjadi circle

Contoh:

```text
DAILYDRINK

E-COMMERCE / NEXT.JS

                        VIEW →
```

Jangan terlalu banyak animasi. **Subtle > berlebihan.**

---

# 11. Skills

## `03 / TOOLKIT`

Jangan membuat skill seperti progress bar:

❌ HTML 90%
❌ CSS 85%

Lebih modern menggunakan **tool stack**.

```text
FRONTEND
Next.js
React
JavaScript
Tailwind CSS

BACKEND
Laravel
PHP
REST API

DATABASE
Supabase
MySQL

TOOLS
Git
GitHub
Figma
VS Code
```

---

# 12. Approach

## `04 / PROCESS`

Judul:

> **How I work.**

Empat tahap:

### `01 — DISCOVER`

Understand the problem.

### `02 — DESIGN`

Shape the experience.

### `03 — BUILD`

Turn ideas into functional products.

### `04 — REFINE`

Test, improve, and iterate.

Layout horizontal di desktop dan vertical di mobile.

---

# 13. Digital Archive

Ini bagian yang membuat portfolio lebih unik.

## `05 / ARCHIVE`

Buat section kecil seperti timeline.

```text
2026
────────────────────────────
Building digital products

2025
────────────────────────────
Exploring web development

2024
────────────────────────────
Started building with code
```

Bisa ditambahkan:

> **Currently exploring:** AI × Web Development

Ini memberikan kesan website benar-benar **personal**, bukan template portfolio biasa.

---

# 14. Contact Section

Buat sangat besar.

## `06 / CONTACT`

> **Have an idea?
> Let's make it real.**

Kemudian:

**START A CONVERSATION →**

Email:

`your@email.com`

Social:

`GitHub` · `LinkedIn` · `Instagram`

---

# 15. Footer

Minimal:

```text
LABIB KARL-SCHNEIDER

WEB DEVELOPER
INFORMATION SYSTEMS

© 2026 LABIB K-S.
BUILT WITH NEXT.JS
```

Tambahkan:

```text
BACK TO TOP ↑
```

---

# 16. Animation

Gunakan animasi yang **halus dan tidak norak**.

### Page Load

Text hero muncul:

```text
opacity 0 → 1
translateY 20px → 0
```

### Scroll

Section muncul ketika masuk viewport.

### Project Hover

Image:

```text
scale(1) → scale(1.03)
```

### Cursor

Desktop bisa memiliki custom cursor:

```text
VIEW
```

ketika hover project.

**Catatan:** animasi harus tetap nyaman di perangkat low-end dan menyediakan dukungan `prefers-reduced-motion`.

---

# 17. Responsive Design

### Desktop

Layout editorial penuh:

```text
12-column grid
```

### Tablet

```text
8-column grid
```

### Mobile

```text
4-column grid
```

Hero menjadi vertical:

```text
LABIB
KARL-SCHNEIDER

I BUILD DIGITAL
EXPERIENCES.

[PHOTO]

WEB DEVELOPMENT
SYSTEMS
DIGITAL PRODUCTS
```

---

# 18. Tech Stack

### Core

* **Next.js**
* React
* TypeScript
* Tailwind CSS

### UI

* Custom CSS
* CSS animations
* Framer Motion / Motion untuk animasi yang diperlukan

### Font

* Instrument Serif
* Inter
* IBM Plex Mono

### Deployment

* Vercel

### Optional

* Supabase untuk menyimpan project/contact data jika nantinya ingin dibuat dynamic.

---

# 19. Struktur Folder

```text
labib-portfolio/
│
├── app/
│   ├── page.tsx
│   ├── about/
│   │   └── page.tsx
│   ├── work/
│   │   └── page.tsx
│   ├── contact/
│   │   └── page.tsx
│   ├── layout.tsx
│   └── globals.css
│
├── components/
│   ├── Navbar.tsx
│   ├── Hero.tsx
│   ├── About.tsx
│   ├── Projects.tsx
│   ├── Skills.tsx
│   ├── Process.tsx
│   ├── Archive.tsx
│   ├── Contact.tsx
│   └── Footer.tsx
│
├── data/
│   └── projects.ts
│
├── public/
│   ├── images/
│   │   ├── profile.jpg
│   │   ├── kostku.jpg
│   │   ├── daily-drink.jpg
│   │   └── salemba-kitchen.jpg
│   │
│   └── icons/
│
├── lib/
│
├── package.json
└── README.md
```

---

# 20. User Experience

Pengunjung harus bisa memahami tiga hal dalam **kurang dari 10 detik**:

**Siapa Labib?**

> Web Developer & Information Systems Student.

**Apa yang dia buat?**

> Digital products, websites, and information systems.

**Bagaimana melihat hasilnya?**

> Selected Works →.

---

# 21. Overall Design Direction

Bayangkan website-nya seperti:

> **Portfolio developer + halaman majalah fashion + digital archive.**

Bukan:

> ❌ Dark mode hacker
> ❌ Neon gradient
> ❌ 3D robot
> ❌ terlalu banyak card
> ❌ progress bar skill
> ❌ animasi berlebihan

Tapi:

> **White space + typography + photography + thin lines + editorial grid + subtle animation.**

Dengan begitu, **foto background putih kamu justru menjadi bagian dari identitas visual website**, bukan sesuatu yang harus "dilawan" dengan warna-warni.

### Final visual identity

```text
LABIB KARL-SCHNEIDER
────────────────────────────────

DIGITAL ARCHIVE / 2026

I BUILD DIGITAL
EXPERIENCES.

       [ YOUR PHOTO ]

────────────────────────────────
WEB DEVELOPMENT
SYSTEM INFORMATION
DIGITAL PRODUCTS

01 / ABOUT
02 / SELECTED WORK
03 / TOOLKIT
04 / PROCESS
05 / ARCHIVE
06 / CONTACT
```

**Hasil akhirnya:** portfolio yang tetap profesional untuk recruiter/client, tetapi punya karakter yang cukup berbeda dari template portfolio developer pada umumnya.
