# Yohannes Belai — software engineering portfolio

**Live:** https://ybelai2.github.io/

A lightweight, static portfolio for a Towson University Computer Science senior (expected graduation **May 2027**), featuring software projects, experience, a résumé, and professional contact information.

## Featured engineering work

The project cards are configured in `portfolio-config.js` and currently prioritize:

1. **Drill** — Java/Spring Boot and React study application with PostgreSQL persistence
2. **SyllabiXtract** — team-built syllabus extraction and calendar project
3. **VeriSource** — FastAPI/pgvector RAG prototype
4. **Fall 2026 OS** — React/TypeScript recurring-calendar planner
5. **InterviewOS** — private project, clearly labeled without a source link

Links are provided for public repositories and available deployed sites. A private repo is never presented as publicly inspectable.

## How this site works

The **published homepage** is a static HTML, CSS, and vanilla JavaScript site at the repository root. It has **five sections**: Introduction, Now, Projects, Experience, and Contact.

| File | Responsibility |
| --- | --- |
| `index.html` | Five visible sections, navigation, semantic HTML, résumé/contact links, SEO metadata |
| `portfolio-2026.css` | Layout, responsive styling, color, and motion |
| `portfolio-config.js` | Profile copy, projects, experience, links, and other content data |
| `portfolio.js` | Safe DOM rendering of dynamic content and project links |
| `reel-navigation.js` | Section navigation and progress UI |
| `Yohannes_Belai_Resume_2027_Grad.pdf` | Downloadable résumé |

Some configuration entries relate to earlier experiments and are **not rendered on the current five-section homepage**; do not assume every field in the configuration is visible.

Legacy files and the `site/` directory are not the entry point for the live homepage.

## Edit and preview

1. Update `portfolio-config.js` for project descriptions, experience, and links.
2. Update `index.html` for static copy, metadata, or page structure.
3. Preview with a static server, for example:

   ```bash
   python3 -m http.server 8000
   ```

4. Open `http://localhost:8000/` and confirm all internal and external links.
5. Commit and push to the site's configured GitHub Pages branch.

There is no framework build, database, or production server.

## Quality checks before sending to recruiters

- Confirm the portfolio, repository, demo, LinkedIn, email, and résumé links work.
- Confirm that project descriptions accurately reflect currently shipped behavior.
- Check at mobile widths, keyboard navigation, and reduced-motion settings.
- Keep the downloadable résumé up to date.
- Check the live deployment after each change; a successful Git commit is not proof that the page was rendered or its external services work.

This portfolio favors clear evidence and honest scope statements over inflated performance metrics or nonfunctional badges.
