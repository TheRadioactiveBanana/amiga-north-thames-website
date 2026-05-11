# Amiga North Thames — Official Website

> A modern web presence for the United Kingdom's longest-running Amiga enthusiast user group, established January 1999.

---

## Table of Contents

1. [Preamble](#preamble)
2. [Contents of the Website](#contents-of-the-website)
3. [Technical Particulars](#technical-particulars)
4. [Project Architecture](#project-architecture)
5. [Content Management](#content-management)
6. [Configuration](#configuration)
7. [Development & Deployment](#development--deployment)
8. [License](#license)

---

## Preamble

This repository contains the source code and content for the official website of **Amiga North Thames** — a venerable computer user group situated in North East London, whose fellowship was founded in January of 1999. The group presently convenes monthly to discuss, demonstrate, construct, game upon, and repair their beloved vintage machines, spanning the Amiga and other systems of that celebrated epoch.

This digital edifice serves as the modern successor to the group's legacy website, presently accessible at `amiganorththames.co.uk/main.shtml`, and herein doth combine contemporary web craftsmanship with a fittingly refined dark aesthetic.

---

## Contents of the Website

The website comprises two principal pages, each furnished with distinct sections and purposes:

### Homepage (`/`)

The homepage is composed of five distinct sections, arranged thusly:

1. **Hero Section** — Displays the group's inverted logo (a 400×300 PNG) alongside a list of forthcoming events, parsed from `events.yml`. Each event is rendered with the date formatted in the English manner (e.g., "1st of January, 2026") and a brief description thereof.

2. **Scrolling Image Marquee** — An infinite horizontal carousel presently containing placeholder imagery (twenty-four instances, duplicated for seamless looping). The animation doth pause upon the visitor's hovering. *N.B. — This section awaits replacement with proper photographs of the group's proceedings.*

3. **"Who Are We?"** — A substantial textual section wherein the group's history, ethos, and meeting particulars are displayed. The text is read dynamically from `who-are-we.txt` and rendered with faithful preservation of line breaks and spacing.

4. **Location Map** — An embedded Google Maps iframe, centred upon the group's meeting coordinates. Below the map resideth the postal address, accompanied by a copy-to-clipboard button for the visitor's convenience.

5. **Large Gallery** — Three large images (aspect ratio 4:3) displayed in a vertical arrangement, each with an elegant hover effect (a subtle blue glow). The system checks for the presence of `image-1.png`, `image-2.png`, and `image-3.png` within the `public/` directory, and falls back gracefully to placeholder imagery should any be absent.

### Contact Page (`/contact`)

A dedicated page whereupon the group's correspondence addresses are displayed. Each email resideth within a styled card bearing an envelope icon and a copy-to-clipboard button. Should no emails be configured, a most conspicuous warning in red doth appear.

---

## Technical Particulars

The website is constructed upon the following foundations:

| Technology | Version | Purpose |
|------------|---------|---------|
| **Next.js** | 16.2.6 | React framework with App Router; server-side rendering |
| **React** | 19.2.4 | User interface library |
| **TypeScript** | ^5 | Type safety and modern language features |
| **Tailwind CSS** | ^4 | Utility-first styling (v4 syntax with `@theme inline`) |
| **Geist Font** | via `next/font/google` | Primary typeface, both sans and mono variants |
| **js-yaml** | ^4.1.1 | Parsing of event data |
| **PostCSS** | via `@tailwindcss/postcss` | CSS processing |
| **ESLint** | ^9 | Code linting with Next.js core web vitals rules |

### Design Philosophy

- **Dark Theme**: The colour palette is subdued and elegant — background `#050505`, surface `#111111`, with blue accent `#60a5fa`.
- **Server Components**: Nearly all components are asynchronous server components, save only the `CopyButton` which requireth the browser's clipboard API and thus beareth the `"use client"` directive.
- **Content-Driven**: Event dates and the "Who Are We" text are loaded from external files rather than hardcoded, permitting updates without code changes.
- **Environment-Configurable**: Map coordinates, contact emails, and address are controlled via public environment variables.

---

## Project Architecture

```
ant-website/
├── app/                          # Next.js App Router
│   ├── layout.tsx                # Root layout (Nav + Footer wrapper)
│   ├── page.tsx                  # Homepage composition
│   ├── globals.css               # Tailwind v4 theme + custom CSS
│   ├── contact/
│   │   └── page.tsx              # Contact page
│   ├── components/
│   │   ├── nav.tsx               # Top navigation bar
│   │   ├── footer.tsx            # Footer with credits & links
│   │   ├── hero-section.tsx      # Logo + upcoming events
│   │   ├── who-are-we.tsx        # Text section reader
│   │   ├── email/
│   │   │   ├── email-card.tsx    # Styled email row
│   │   │   └── email-icon.tsx    # SVG envelope icon
│   │   ├── images/
│   │   │   ├── scrolling-images.tsx   # Horizontal marquee
│   │   │   └── large-3-images.tsx     # Gallery display
│   │   ├── map/
│   │   │   └── map-embed.tsx     # Google Maps + address
│   │   └── misc/
│   │       └── copy-button.tsx   # Clipboard copy (client component)
│   └── lib/
│       ├── events.ts             # YAML parser + date formatter
│       └── gallery.ts            # Local image existence checker
├── public/                       # Static assets
│   ├── favicon.ico
│   ├── logo-inverted.png         # Group logo
│   ├── image-1.png               # Gallery image (others fall back)
│   └── meeting.gif               # Animated footer decoration
├── events.yml                    # Upcoming meeting dates
├── who-are-we.txt                # Group description text
├── .env / .env.example           # Environment configuration
├── next.config.ts                # Next.js configuration
├── postcss.config.mjs            # PostCSS (Tailwind v4)
├── tsconfig.json                 # TypeScript configuration
└── eslint.config.mjs             # ESLint flat configuration
```

---

## Content Management

The website readeth two content files from the project root at build time:

### `who-are-we.txt`

A plain text file containing the group's description, meeting details, and welcome message. The text is rendered verbatim with `whitespace-pre-wrap`, preserving all line breaks and spacing as the author intended.

The present text reads thusly:

> Amiga North Thames is a computer user group, based in North East London (U.K.) which was started back in January 1999. We are a dedicated bunch of enthusiasts who fondly remember the Amiga and other systems from its day.
>
> We meet up once a month and discuss, demonstrate, build, game, and repair our old machines...

### `events.yml`

A YAML file containing an array of events, each with a `date` (ISO string) and `text` (description). The dates are formatted with proper English ordinal suffixes ("1st", "2nd", "3rd", "4th", etc.).

Example:
```yaml
- date: "2026-01-01"
  text: "We go there and do things"
```

---

## Configuration

The following environment variables, prefixed with `NEXT_PUBLIC_` for client-side access, may be set within `.env`:

| Variable | Purpose | Example |
|----------|---------|---------|
| `NEXT_PUBLIC_MAP_LAT` | Latitude for map centre | `51.5763` |
| `NEXT_PUBLIC_MAP_LNG` | Longitude for map centre | `-0.0107` |
| `NEXT_PUBLIC_ADDRESS` | Meeting venue address | `The Venue Name, Street, Postcode` |
| `NEXT_PUBLIC_CONTACT_EMAILS` | Comma-separated contact emails | `person@example.org,other@example.org` |

A template is provided in `.env.example`.

---

## Development & Deployment

### Local Development

```bash
# Install dependencies
npm install

# Run the development server
npm run dev
```

The development server will be available at `http://localhost:3000`.

### Building for Production

```bash
# Create an optimised production build
npm run build

# Start the production server
npm run start
```

### Linting

```bash
npm run lint
```

The project useth ESLint with the Next.js core web vitals and TypeScript presets, configured via the modern flat config format in `eslint.config.mjs`.

### Deployment Notes

The project is configured as a standard Next.js application. It may be deployed to Vercel, or any hosting service capable of serving a Next.js build. The `.env` file must be present (or environment variables set) for the map and contact features to function properly.

---

## License

This software is released into the **public domain** under [The Unlicense](https://unlicense.org). Any person is free to copy, modify, publish, use, compile, sell, or distribute this software, in source or compiled form, for any purpose, commercial or otherwise, by any means whatsoever.

---

*Credits: Ashley Byte*  
*Direction: thingEE, V100*

*The Amiga North Thames website is an open-source endeavour. Its source code may be found upon [GitHub](https://github.com/TheRadioactiveBanana/amiga-north-thames-website).*
