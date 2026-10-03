# Yohannes's corner of the internet

A personal introduction first; software projects second. Built with Next.js, TypeScript, Tailwind CSS, and Framer Motion.

**Live:** https://ybelai2.github.io/

## Where things live

- `site/` — editable Next.js source, reusable components, local fonts, and original content.
- Root `index.html`, `_next/`, `photos/`, and metadata files — the generated static export served by the existing GitHub Pages setup.
- Existing `blog/`, `post.html`, `pawport/`, and their assets are preserved.
- `.pages-manifest.json` — records generated files so publishing removes only obsolete generated assets.

## Run locally

Use Node.js 22 or later.

```sh
cd site
npm ci
npm run dev
```

## Edit content

All personal content lives in `site/src/data/`; no component edits are needed.

| File | What to change |
| --- | --- |
| `profile.json` | Introduction, age, location, portrait, résumé, principles, and canonical site URL |
| `socials.json` | Instagram, LinkedIn, GitHub, and email |
| `photos.json` | Images, captions, categories, and placeholder labels |
| `interests.json` | Interest chips and conversation starters |
| `activities.json` | Meetup ideas and ready-to-copy opening messages |
| `currently.json` | Current priorities and the last-updated date |
| `projects.json` | Selected projects, stack, public source and demo links |
| `updates.json` | Newest-first dated notes from life |

### Connect Instagram

Set the Instagram entry's `href` to your actual profile URL and `handle` to your handle in `socials.json`. Until then, Instagram buttons show an honest “link coming soon” notice and a working email option. No username has been guessed.

### Replace photo placeholders

Use your real photos. From `site/`, run `npm run photo -- /path/to/photo.jpg pickup` to create responsive WebP images. The script preserves the aspect ratio, compresses the photo, removes embedded metadata, and avoids enlarging smaller originals. The image loader selects the appropriate size for each screen.

In `photos.json`, use the unsuffixed logical path (for example `/photos/pickup.webp`), descriptive `alt` text, your caption/category, and `placeholder: false`. Remove stock credit/source entries when no longer applicable. The gallery automatically derives categories.

The current hero portrait is real. The three life-grid photos are visibly labeled stock placeholders. Do not remove placeholder labels while leaving stock photos in place.

Update `site/public/og-image.jpg` (1200 × 630) if changing the social preview. Replace `site/public/Yohannes_Belai_Resume_2027_Grad.pdf` when the résumé changes. Keep the résumé path in `profile.json` in sync.

## Publish to the existing GitHub Pages site

```sh
cd site
npm ci
npm run export:pages
cd ..
git add site index.html _next photos .nojekyll .pages-manifest.json
git add -u
git status
git commit -m "Update my personal site"
git push origin main
```

Review `git status` and include any new generated metadata files listed by the build. `export:pages` builds and copies the site to the repository root; it does not push changes. The existing Pages deployment publishes commits to `main`. Editing JSON alone does not rebuild a branch-based Pages site: run `export:pages` before committing.

No Actions permission changes or additional hosting accounts are required. Git history preserves the earlier site.

## Deploy on Vercel

Import this repository and set **Root Directory** to `site`, framework to Next.js, install command to `npm ci`, and build command to `npm run build`. This project deliberately exports static HTML and has no required environment variables or backend. Change `profile.json`'s `siteUrl` if moving the canonical home to a different domain.

## Verification and boundaries

```sh
cd site
npm run typecheck
npm run build
```

Images and fonts are served locally. The page has keyboard-accessible controls, native modal focus handling, reduced-motion support, OpenGraph/Twitter metadata, a sitemap, and a 404 page. External profiles open in a new tab without popup scripts or custom app URL schemes.

InterviewOS's repository is private and is intentionally not linked as public source. SyllabiXtract is identified as a team class project. The Event Processing System is not presented as a completed project. See `site/PHOTO_CREDITS.md` for image provenance.
