# hanzomaster.dev

A minimal, pixel-perfect dev portfolio, component registry, and blog built with modern web technologies.

## Overview

### Stack

- Next.js 16
- Tailwind CSS v4
- shadcn/ui

### Featured

- Clean & modern design
- Light/Dark themes
- vCard integration
- Curated bookmarks to showcase inspiration and resources
- SEO optimized ([JSON-LD schema](https://json-ld.org), sitemap, robots)
- AI-ready with [/llms.txt](https://llmstxt.org)
- Spam-protected email
- Installable as PWA
- Analytics with [PostHog](https://posthog.com) and [OpenPanel](https://openpanel.dev)
- Consent management via [c15t](https://c15t.com)

### Bookmarks

A curated collection of bookmarks showcasing articles and resources that have influenced your design and development philosophy. Features include:

- Date-sorted display (newest first)
- Optional author attribution
- Custom brand icons for visual identification
- Collapsible list with "Show More" toggle
- External links open in new tabs

For adding and managing bookmarks, see [Bookmarks Documentation](./docs/BOOKMARKS.md).

### Blog

- Supports MDX & Markdown
- Raw `.mdx` endpoints for AI readability
- Syntax highlighting for clear code presentation
- Dynamic OG images for rich link previews
- RSS feed for easy content distribution

### Registry

Easily build and distribute reusable components, hooks, and pages using a custom registry powered by the [shadcn CLI](https://ui.shadcn.com/docs/cli).

Each entry is well-documented and includes:

- Live preview & code snippets
- Beautiful, readable code blocks
- One-click command blocks (pnpm, npm, yarn, bun)

### Analytics

User behavior tracking with [PostHog](https://posthog.com) and [OpenPanel](https://openpanel.dev) to understand how visitors interact with the site:

- **Copy events** - Track code & command copies
- **Engagement** - Monitor name pronunciation plays, command menu usage
- **Search behavior** - Analyze search queries (debounced)
- **User actions** - Navigation, theme changes, content interactions
- **Screen views** - Automatic page view tracking (OpenPanel)

Built with privacy in mind:

- Consent management via [c15t](https://c15t.com)
- Cookieless mode until consent
- Production-only tracking
- Type-safe event schema with Zod
- Dual analytics setup for redundancy and comprehensive insights

## Development

Please refer to the [Development Guide](./DEVELOPMENT.md) for more details.

## Docker

Build and run with Docker Compose (enforces `linux/amd64` platform):

```bash
# Build image
docker compose build

# Run locally
docker compose up -d

# Build and push to registry
docker compose build && docker push ghcr.io/algomasterllc/hanzomaster.dev:latest
```

## License

Licensed under the [MIT license](./LICENSE).

## Acknowledgments

- [React](https://react.dev)
- [Next.js](https://nextjs.org)
- [Tailwind CSS](https://tailwindcss.com)
- [Radix UI](https://www.radix-ui.com)
- [Base UI](https://base-ui.com)
- [Motion](https://motion.dev)
- [shadcn/ui](https://ui.shadcn.com)
- [Aceternity UI](https://ui.aceternity.com)
- [Kibo UI](https://www.kibo-ui.com)
- [Lucide](https://lucide.dev)
- [Fumadocs](https://fumadocs.dev)
- [PostHog](https://posthog.com)
- [OpenPanel](https://openpanel.dev)
- [c15t](https://c15t.com)
- And many other open-source libraries used in `package.json`

Based on [chanhdai.com](https://github.com/ncdai/chanhdai.com) by [@ncdai](https://github.com/ncdai).
