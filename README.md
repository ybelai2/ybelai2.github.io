# Yohannes Belai — Software Engineering Portfolio

**Live website:** https://ybelai2.github.io/  
**Audience:** Software engineering recruiters, engineering managers, and collaborators.

A responsive, accessible single-page portfolio for a Towson University Computer Science senior graduating in May 2027. The site highlights verified engineering experience, selected projects, technical strengths, education, and professional contact links.

## Design and structure

The homepage is optimized for a quick recruiter scan:

1. **Hero:** developer positioning, technical focus, résumé, professional portrait, and current background
2. **Selected work:** Drill, SyllabiXtract, VeriSource, and Fall 2026 OS
3. **Technical skills:** languages, backend, data, delivery, frontend, and deployment
4. **Experience & education:** Alignerr, volunteer mentoring, Towson University, and Montgomery College
5. **Approach and contact:** engineering principles, email, LinkedIn, and GitHub

**Design palette:** navy `#0c1b30`, clean white `#ffffff`, light slate `#f3f6fa`, teal highlight `#8be2cb`, and blue links `#2359b8`.

Visual decisions favor readable typography, restrained color, clear hierarchy, honest project descriptions, and working calls to action. No decorative skill percentages, unverifiable outcome statistics, fake screenshots, or forced full-screen chapter navigation are used.

## Published homepage files

| File | Purpose |
| --- | --- |
| `index.html` | Complete page structure and copy, project cards, links, accessible navigation, metadata |
| `portfolio-2026.css` | Responsive site design, typography, layout, focus states, reduced-motion support |
| `assets/images/yohannes-blue-sweatshirt.webp` | Existing real personal portrait |
| `Yohannes_Belai_Resume_2027_Grad.pdf` | Public résumé |
| `og-image.jpg` | Social share preview artwork |

The published landing page is **static HTML and CSS** with **no JavaScript dependencies**, external font requests, analytics, or build pipeline. The old `portfolio-config.js`, `portfolio.js`, and `reel-navigation.js` remain in the repository for reference but are **not loaded by the new homepage**. Likewise, historical content in the `site/` directory is not the homepage source.

## Projects featured

- **Drill** — [backend](https://github.com/ybelai2/drillapi), [frontend](https://github.com/ybelai2/os439-frontend), and [deployed interface](https://os439-frontend.vercel.app/)
- **SyllabiXtract** — [team source](https://github.com/ybelai2/SyllabiXtract) and [deployed interface](https://syllabi-xtract.vercel.app/)
- **VeriSource** — [Python RAG prototype source](https://github.com/ybelai2/verisource-policy-rag)
- **Fall 2026 OS** — [source](https://github.com/ybelai2/fall-2026-os) and [deployed interface](https://fall-2026-os.vercel.app/)

SyllabiXtract is explicitly credited as a team project, and VeriSource is explicitly described as a prototype. Screenshots are not invented or represented as evidence of untested behavior. Deployed application URLs should be checked separately before sharing them with recruiters.

## Edit locally

```bash
git clone https://github.com/ybelai2/ybelai2.github.io.git
cd ybelai2.github.io
python3 -m http.server 8000
```

Open `http://localhost:8000`.

To change text, project descriptions, contact links, or markup, edit `index.html`. To change the theme, spacing, typography, or responsive behavior, edit `portfolio-2026.css` and update the CSS query-string version in `index.html` if needed to refresh caches.

GitHub Pages publishes this repository from its configured branch. Check the **pages build and deployment** GitHub Actions run after pushing.

## Manual quality checklist

- Confirm the portrait, résumé, social profiles, and demo URLs resolve.
- Test internal links, keyboard focus order, and skip navigation.
- Review at 320px, 390px, 768px, and desktop widths; check for horizontal overflow.
- Ensure text contrast remains readable, especially over the navy hero and footer.
- Test with reduced motion enabled.
- Check page metadata and the social share preview.
- Keep project descriptions and the public résumé in sync as work changes.

The site deliberately avoids production-readiness claims for projects that have not been independently tested. A successful GitHub Pages deployment confirms publishing, not that each external demo is operating correctly.
