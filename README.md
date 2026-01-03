# Yoboseyo Superette Website

Clean, modern static site reflecting Yoboseyo Superette’s identity as a curated specialty market & coffee destination in Little Tokyo, DTLA.

## Overview
- Minimal, boutique aesthetic with white space and warm textures
- Sections for Home, About, Menu, Events, Visit/Contact
- Color palette: Deep navy (#213A7A), warm neutrals (#F8F6F2, #E6E2D3), wood (#8C6A4F), sage (#A3B18A)
- Typography: Montserrat (headers), Lora (body)

## Structure
- Home: Hero carousel, CTAs, featured goods, visit info
- About: Mission, vibe, and story
- Menu: Coffee & tea offerings + seasonal features
- Privacy / Terms: Simple placeholders

## Getting Started
Open the site locally:

1. Double-click [index.html](index.html) to open in your browser, or run a simple local server:

```bash
python3 -m http.server 8080
# then visit http://localhost:8080
```

2. Add hero photos: place images in [assets](assets) named `hero-interior.jpg`, `hero-drinks.jpg`, `hero-goods.jpg`, `hero-community.jpg` (or update the `src` paths in [index.html](index.html)).

## Customize
- Edit styles in [styles.css](styles.css) (CSS variables at the top)
- Update content in pages: [index.html](index.html), [about.html](about.html), [menu.html](menu.html)
- Minimal JS in [assets/main.js](assets/main.js) handles hero rotation & mobile nav active state

## Notes
- Hours, address, and social links are placeholders — update to match current details.
- Consider adding a dedicated Events page or a CMS later for updates.
