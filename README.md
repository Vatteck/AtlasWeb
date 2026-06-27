<div align="center">
  <img src="https://raw.githubusercontent.com/Vatteck/Atlas/refs/heads/master/atlas/view/resources/img/logo.svg" alt="Atlas Logo" width="120" />
</div>

# AtlasWeb

Landing page for **[Atlas](https://github.com/Vatteck/atlas)** - the graphical package
manager that makes AUR safety legible for Arch Linux users. Built with React, Tailwind
CSS v4, Framer Motion, and Vite.

## What's on the site

- **Interactive Demo** - a reconstructed web simulator of Atlas's dashboard, sidebar,
  package cards, and transaction flow
- **Screenshot Showcase** - high-resolution gallery with a fullscreen lightbox
- **Install Guide** - copy-paste commands for AUR helpers, PKGBUILD builds, and from-source
- **Feature Bento Grid** - visual breakdown of key capabilities

## Development

**Prerequisites:** Node.js 20+

```bash
npm install
npm run dev       # local dev server
npm run build     # production build
```

## Deployment

Automatically deployed to GitHub Pages via GitHub Actions on push to `main`.

## Version

The version badge fetches the latest Atlas release from the GitHub API at runtime (30-minute
client-side cache). No rebuild needed when a new Atlas version ships.
