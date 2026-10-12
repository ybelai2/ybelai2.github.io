# Yohannes Belai — Digital Home

**Live:** https://ybelai2.github.io/

A personal website for people coming from Instagram, with a small, deliberate section for software projects and professional experience. It uses only **HTML, CSS, and vanilla JavaScript**—no framework, bundler, server, or build command.

## Files that control the live home page

| File | Purpose |
| --- | --- |
| `index.html` | Nine chapters, links, SEO and share metadata, accessible structure |
| `portfolio-2026.css` | Existing color identity, layouts, motion and scroll snapping |
| `portfolio-config.js` | Editable projects, now, interests, social links, photos, plans, questions and roles |
| `portfolio.js` | Safe client-side rendering and interaction for those content lists |
| `reel-navigation.js` | Generated chapter counter, progress, desktop rail and mobile up/down controls |
| `assets/images/yohannes-hero.webp` | Existing supplied portrait; replace this file with your preferred real portrait |
| `og-image.jpg` | 1200×630 share image — replace with a new personal share design when ready |
| `Yohannes_Belai_Resume_2027_Grad.pdf` | Existing résumé PDF |

The separate legacy `site/` directory contains older Next.js source for archived notes. It is **not used to build the current home page**. The legacy static export script protects the root `index.html`.

## Chapter order

1. Introduction
2. Now
3. Beyond the code
4. Photos
5. Let's do something
6. I build things
7. Experience
8. Principles
9. Don't be a stranger

Every chapter is a real `<section>` with its own `id` and `data-reel-title`. `reel-navigation.js` discovers chapters directly from those attributes. On touch devices, scrolling uses native proximity snap; it does not intercept gestures or trap visitors in long content. A progress bar, chapter counter, mobile up/down buttons and a desktop chapter rail are provided. Reduced-motion settings disable snapping and animation.

## Make a change

Edit `portfolio-config.js`, save, commit and push to `main`. There is no build step.

- **Portrait:** `profile.portrait` and `profile.portraitAlt` should point to a real image you own. Current portrait is already supplied and is **not** a placeholder.
- **Now:** update `now` entries. Change the two `placeholder:true` entries for *Currently reading* and *Currently watching* after adding the actual titles.
- **Interests:** change the `interests` array.
- **Conversation questions:** edit `starters`; each topic has one unique question. Use real details, no fabricated anecdotes.
- **Photo gallery:** upload your own photos under `/photos/`; for each slot, provide a valid `src`, descriptive `alt`, accurate caption and change `placeholder:true` to `placeholder:false`. Unfilled slots display a clearly marked tile, not stock imagery.
- **Low-pressure plans:** edit `plans`.
- **Projects:** edit `projects`. InterviewOS stays private. SyllabiXtract source/demo links stay unset until verified. Campus Events API and GitHub Developer Insights Dashboard are intentionally omitted.
- **Experience:** two short entries. The résumé carries the full descriptions.
- **Socials:** `socials` lists all four confirmed profiles. Links on the primary hero and contact buttons are also present as static HTML so they work immediately, even before JavaScript.
- **Share image:** replace `og-image.jpg` with a relevant **1200×630 JPEG** and keep `og:image` / `twitter:image` metadata pointing to the actual image.

## Things still to fill

- Gallery photo slots: Basketball, Soccer, Reading, Friends, DMV, Faith & Culture, Projects, Everyday
- Each real photo's caption and alt text
- Currently reading
- Currently watching
- Optional soccer team name, **only if Yohannes supplies one** (none is displayed currently)
- SyllabiXtract GitHub/demo URLs if confirmed
- InterviewOS links only if it later becomes public
- Optional replacement portrait (the current one is real and supplied)
- A new personal-themed Open Graph JPEG to replace the older field-notes image

## Accessibility and performance

Semantic chapter headings, skip link, visible focus rings, native links/buttons, image alt text, 44px tap targets for interactive controls, responsive layouts, lightweight local image assets and reduced-motion handling. No trackers or external font CDNs. The interactive widgets use `textContent` to avoid injecting user-edited HTML.

Suggested visual QA: open the site at 320px and 390px, check overflow and button tapability, try all chapter controls, check photo placeholder labels, verify the project/Instagram links, and review keyboard/reduced-motion behavior. Lighthouse **95+ is a target, not a measured score** until audited with a browser.
