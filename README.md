# Yohannes Belai — A personal field guide

A dark editorial personal website about clear thinking, human behavior, self-command, and deliberate action. Real profile details and selected software projects keep the journal connected to the person behind it.

**Live:** https://ybelai2.github.io/

Built with Next.js, TypeScript, Tailwind CSS, Framer Motion, DM Sans, and Instrument Serif. GitHub Pages serves a static export from the repository root. The Next.js source is in `site/`. Existing blog and PawPort pages remain available.

## Run and publish

Use Node.js 22 or later.

```sh
cd site
npm ci
npm run dev
```

To publish edits to GitHub Pages:

```sh
cd site
npm run export:pages
cd ..
git add -A
git diff --cached --stat
git commit -m "Update personal field guide"
git push origin main
```

Review staged files before committing. `export:pages` builds and copies static files to the repository root; it does not push. Editing source or JSON alone does not update a branch-based Pages deployment. `.pages-manifest.json` tracks generated files and limits cleanup to previously generated assets. A normal Vercel import also works with `site` as the root directory; no environment variables are required.

## Edit content

| Source | Content |
| --- | --- |
| `site/src/data/editorial.json` | Hero description, philosophy foundations, behavior themes, response sequence, independence cards, and About copy |
| `site/src/data/principles.json` | All 13 principle titles and expandable paragraphs |
| `site/src/data/notes.json` | Field notes, article slugs, categories, excerpts, paragraphs, and closing questions |
| `site/src/data/profile.json` | Personal introduction, name, portrait path, canonical URL, résumé path, and last update |
| `site/src/data/socials.json` | Instagram, LinkedIn, GitHub, and email |
| `site/src/data/projects.json` | Projects, technologies, descriptions, and verified source/demo links |

All eight field notes have full, statically generated pages. Add another object to `notes.json` using the existing shape and a unique lowercase hyphenated slug. The template, reading-time estimate, related-note link, sitemap, and metadata are generated automatically. The first four entries appear as cards; remaining notes are under “More from the notebook.” The four foundational ideas and every principle are frameworks to examine, not claims of professional psychological expertise.

Existing legacy content files for photos, activities, interests, currently items, and life updates are retained for future use but are not rendered by this edition.

## Contact behavior

Instagram points to https://www.instagram.com/yohannes.belai/. Email is configured in `socials.json`.

The contact form is an email-draft composer. It validates name, email, and message, shows field-specific accessible errors, and prepares an encoded `mailto:` link and a copy-message option. The visitor explicitly opens their email app to review and send. It does **not** claim to send a message, store form data, or deliver anything to a backend. There are no API keys, databases, analytics trackers, or contact-form third-party services.

The integration boundary is `prepare()` in `site/src/components/contact-form.tsx`. If direct submission is added later, connect a real endpoint; validate on the server, add rate limits/spam protection, and show success only after the endpoint confirms delivery. Never embed provider secrets in this static site. Add appropriate privacy information if data collection is introduced.

## Images and assets

The About portrait is Yohannes's existing real photo. The hero is an AI-generated architectural study, not a location Yohannes claims to have visited. It is labeled as a study and is described in `site/PHOTO_CREDITS.md`.

Responsive WebP versions live in `site/public/photos/`. The image loader selects 480, 960, or 1440-pixel files. To replace a personal photo, use the existing `npm run photo -- /path/to/photo.jpg name` helper, then set its unsuffixed path (for example `/photos/name.webp`) in the relevant content file.

`site/scripts/prepare-editorial-assets.mjs [path-to-architecture.png]` prepares the architecture variants (when an input is provided), favicon, Apple touch icon, and 1200 × 630 social-sharing image. The page metadata and each article reference the local Open Graph image. Fonts are self-hosted with their license files.

## Verification

```sh
cd site
npm run typecheck
npm run export:pages
```

The design includes mobile navigation with Escape and outside-click dismissal, native keyboard-accessible principle accordions, full article pages, visible focus states, semantic headings, reduced-motion support, an accessible email composer, a custom 404 page, canonical URLs, Open Graph/Twitter metadata, JSON-LD, and a sitemap.

No personal achievements, testimonials, experiences, or project metrics have been invented. InterviewOS remains labeled as a private repository, SyllabiXtract as a team project, and unfinished work is not presented as complete. Git history retains the previous design.
