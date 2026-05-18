# Callysto Website Modernization Plan

**Status:** Brainstorming / Pre-implementation  
**Last updated:** 2026-05-08  
**Author:** Byron Chu

---

## 1. Context & Goals

The current Callysto website is a Hugo static site built on the Hugo Blox Builder template, hosted on GitHub Pages via GitHub Actions. It does its job, but it was assembled from a template rather than designed — and it shows. The goal of this modernization is to:

- **Tell a stronger story.** 160K+ students and 6K+ teachers is a remarkable impact. The site should make visitors feel that before they read the fine print.
- **Make resources discoverable.** The site has 100+ learning modules, 40+ data visualizations, 23 lesson plans, and 5 online courses — but they're hard to browse and filter.
- **Create room to grow.** Artificial intelligence, data literacy, and computational thinking are expanding areas. The site should be structured so new content in these areas has a natural home.
- **Look intentional.** A from-scratch redesign that honors the Callisto / Jupiter / Python / Jupyter identity in a more visually compelling way.
- **Stay maintainable.** Solo technical maintainer, so architectural simplicity and low operational overhead are non-negotiable.
- **Know what's working.** Add privacy-first analytics so we can understand which resources are actually being used.

---

## 2. Guiding Principles

These should constrain every design and technical decision:

1. **Open by default.** Free resources, open source tools, open data. This is Callysto's DNA.
2. **Privacy first.** Callysto serves students and teachers. No surveillance-grade analytics, no cookie consent walls, no personal data collection.
3. **Content is the product.** Animations and design are in service of the learning resources, not the other way around.
4. **Harmonious storytelling.** Impact narrative and learning content coexist — the site should feel like both a showcase and a tool.
5. **Future-proof structure.** AI and data science in education are moving fast. The site's information architecture should flex without a rewrite.
6. **Low operational overhead.** No databases, no CMS servers, no paid services that create a maintenance burden.

---

## 3. Recommended Tech Stack

### Static Site Generator: Astro

**Why Astro over continuing with Hugo:**
- Hugo + Hugo Blox Builder is a powerful but opinionated template system. Customizing it beyond the template's design language requires fighting the framework.
- Astro is purpose-built for content-heavy sites. It ships zero JavaScript by default and adds interactivity only where needed ("component islands").
- Astro has native Markdown and MDX support — all existing content (written in Markdown) migrates cleanly with minimal changes.
- Astro has excellent TypeScript, Tailwind CSS, and image optimization built in.
- Astro deploys to GitHub Pages easily via an official GitHub Actions integration.
- Astro's ecosystem (Pagefind for search, the Astro content collections API) directly solves our filtering and discoverability goals.

**Migration effort:** Moderate. Content files (Markdown) stay mostly as-is; frontmatter conventions may need normalizing. The main work is building the new theme/templates.

### Hosting: GitHub Pages (stay the course)

The site is already deployed to GitHub Pages via GitHub Actions (`.github/workflows/publish.yaml`). This is free, reliable, supports the callysto.ca custom domain, and requires no third-party account dependencies beyond GitHub.

**Action:** Delete `netlify.toml` (leftover from Hugo Blox template, not in use). Update the GitHub Actions workflow to use Astro's build step instead of Hugo.

### Analytics: GoatCounter

[GoatCounter](https://www.goatcounter.com/) is the right fit:
- **Free** for open-source and non-commercial sites (Callysto qualifies).
- **Privacy-first:** no cookies, no personal data, GDPR and PIPEDA compliant.
- **No consent banner required.**
- Simple, readable dashboard: page views, referrers, browsers, countries.
- Self-hostable if needed, but the hosted free tier is sufficient.
- A single `<script>` tag in the layout is the entire integration.

**Alternative if GoatCounter changes terms:** Self-host [Umami](https://umami.is/) on a free Railway or Supabase instance.

### Search: Pagefind

[Pagefind](https://pagefind.app/) is a static search library built specifically for static site generators:
- Runs at build time, indexes all content, produces a small static search index.
- Zero server required — search runs entirely in the browser.
- Supports filtering by metadata (grade, subject, content type) — exactly what's needed for the resource hub.
- Has an Astro integration.

### Animations: CSS Scroll-Driven Animations + Motion

- Use [CSS Scroll-Driven Animations](https://developer.mozilla.org/en-US/docs/Web/CSS/animation-timeline) (native browser API, no JavaScript) for scroll-triggered reveals, parallax effects, and stat counters.
- Use [Motion for the web](https://motion.dev/) (formerly Framer Motion, ~18kb) for any interactions that need JavaScript (e.g., animated number counters, hover effects on resource cards).
- Keep the total animation JavaScript footprint small — the learning content is the payload, not the animations.

### Styling: Tailwind CSS v4

Continue with Tailwind CSS (already in use). Upgrade to v4, which has better performance and native CSS variables for theming.

---

## 4. Visual Design Direction

### The Callisto Identity

The name Callysto is a deliberate layering of meaning:
- **Callisto** — a moon of Jupiter, cold and cratered, orbiting at the edge of Jupiter's radiation belt. It's ancient and vast.
- **Jupiter** — the giant, the attractor, the center of gravity. Jupyter the notebook platform is named after Jupiter, Julia, and Python.
- **Python / Jupyter** — the computational tools at the heart of every Callysto learning module.
- **The "y"** — the homage to Python and Jupyter that makes the name distinctly ours.

The visual design should make this mythology tangible without being literal or kitschy.

### Design Language

**Color palette — "Deep Space":**
| Role | Name | Hex |
|---|---|---|
| Background (dark) | Event Horizon | `#080c1a` |
| Background (surface) | Deep Space | `#0f1535` |
| Primary accent | Callisto Blue | `#4f8ef7` |
| Secondary accent | Nebula Purple | `#7c4dff` |
| Highlight | Stellar Gold | `#f5c842` |
| Text primary | Cloud White | `#e8eaf6` |
| Text secondary | Dust Gray | `#8892a4` |
| Success / data | Aurora Green | `#00c896` |

**Typography:**
- Headings: [Space Grotesk](https://fonts.google.com/specimen/Space+Grotesk) — geometric, technical, named perfectly for this project.
- Body: [Inter](https://fonts.google.com/specimen/Inter) — clean, highly legible, widely used in education contexts.
- Code: [JetBrains Mono](https://www.jetbrains.com/lp/mono/) — for inline code, notebook cell previews, and any syntax-highlighted examples.

**Visual motifs:**
- **Star field / constellation backgrounds** — subtle, parallax-driven, not overwhelming.
- **Orbital rings** — abstract circular paths used as section dividers or decorative elements, evoking Callisto's orbit around Jupiter.
- **Notebook cell aesthetic** — resource cards and course previews can take design cues from Jupyter notebook cells (input/output blocks, subtle line numbers, monospace accents).
- **Data as art** — the 40+ data visualizations are themselves the visual language of the site. Feature them prominently as proof-of-concept.
- **Grid and data table motifs** — subtle grid overlays and dot-grid backgrounds that suggest data and computation without being heavy-handed.

**Overall feel:** Dark, sophisticated, cosmos-scale ambition — but warm and approachable in copy tone. Think: a museum of science that wants you to touch things.

---

## 5. Information Architecture

### Proposed Site Structure

```
/                           → Landing page
/resources/                 → Master resource hub (all content, filterable)
  /resources/modules/       → Curriculum learning modules (100+, by subject + grade)
  /resources/lesson-plans/  → Lesson plans with teacher + student notebooks (23)
  /resources/data-viz/      → Data Viz of the Week gallery (45+)
  /resources/courses/       → Online courses (5, incl. AI + Data Science)
  /resources/problems/      → Interesting Problems (46 self-contained notebooks) ← new
  /resources/challenges/    → Hackathon intro+challenge pairs ← new
  /resources/ct-tests/      → Computational thinking assessments
/blog/                      → News and case studies (43+ posts)
/about/                     → Mission, story, the Callisto name, partners
/impact/                    → Data storytelling — who we've reached and how
/contribute/                → Team, contributors, how to get involved
/contact/                   → Contact form or email CTA
/privacy/                   → Privacy policy (inline, not linking to a Google Doc)
/terms/                     → Terms of service (inline)
```

> **Note:** "Interesting Problems" and "Hackathon" content currently has no home on the website at all — it exists only in the JupyterLite repo. The redesign is an opportunity to surface this content for the first time.

### Navigation

```
[Callysto logo]   Resources ▾   Blog   About   Impact   [Search icon]
```

Resources uses a dropdown (or a mega-menu) to expose the content categories directly from the nav. This is a significant improvement over the current single-page anchor links.

### Landing Page Sections (in scroll order)

1. **Hero** — Full-bleed dark space background. Large mission statement. Single primary CTA ("Explore resources"). Subtle star-field animation.
2. **Impact counters** — Animated stats: students, teachers, resources. Brief framing: "Since 2017, Callysto has been Canada's free data science classroom."
3. **What is Callysto?** — 2-3 sentence mission. The Callisto / Jupyter / Python etymology told briefly and with pride. The open source / open education connection.
4. **Resource highlights** — Visual showcase of 3–4 content categories with a compelling card each. Links to `/resources/`.
5. **Data viz showcase** — A rotating or grid preview of actual data visualizations. These are beautiful artifacts — show them.
6. **Testimonial** — Jenn O'Neill's quote (current) plus 1-2 others if available.
7. **AI & the future** — Forward-looking section: "Where we're going." Connects data science literacy to AI literacy, with explicit mention of **generative AI** and **AI ethics** as topics students and teachers will encounter in the classroom. CTA to the AI course.
8. **Get started** — Simple CTA for teachers new to Callysto. "Not sure where to start? Try the Starter Kit."
9. **Footer** — Partners (Cybera, PIMS, CanCode), copyright, links to Privacy & Terms.

---

## 6. Content Strategy

### Harmonious Blend: Storytelling + Resources

The risk with educational resource sites is that they become directories — useful but not inspiring. The risk with storytelling-first sites is that practitioners can't find the tools they need. The goal is:

- **Landing page and About:** storytelling-first. Why Callysto exists, who it serves, what it's accomplished.
- **Resource hub:** utility-first. Filter, search, find, use.
- **Data viz showcase:** both. The visualizations *are* the story and the resource simultaneously.
- **Blog:** bridges both. Case studies show real classroom use; news keeps the community informed.

### AI & Future Content

Create a dedicated section / content type for AI-focused content that can grow without restructuring the site. Proposed structure:
- `/resources/courses/ai/` — the existing AI course (already built)
- Future: tutorials on using AI tools in the classroom, prompt literacy, AI ethics for students
- A "What's new in AI education" blog tag

The information architecture should make it easy to add this content without touching the nav structure.

### Privacy & Terms

Move these off external Google Docs and into actual site pages (`/privacy/` and `/terms/`). This is better for:
- Accessibility
- Professionalism
- Search engine indexing
- Not depending on a Google account remaining accessible

---

## 7. Analytics Plan

**Tool:** GoatCounter (free tier)  
**Setup:** Single `<script>` tag in the Astro base layout  
**Data collected:** Page paths, referrers, browser, country, screen size — all aggregated, no personal identifiers, no cookies

**What we'll track and why:**
| Metric | Why it matters |
|---|---|
| Top pages | Which resources are actually being used |
| Referrer sources | Are teachers finding us via search, social, or partner sites? |
| Geographic distribution | Are we reaching across Canada? |
| Resource page engagement | Which content categories get the most traffic? |
| Blog post popularity | What topics resonate? |
| Bounce rate by section | Where does the site fail to engage? |

**What we won't track:** Individual users, session recordings, demographic profiling, anything that would require a consent banner.

---

## 8. Feature Roadmap

### Phase 1 — Foundation (Highest priority)

- [ ] Set up Astro project with GitHub Pages deploy pipeline
- [ ] Implement design system (colors, typography, base components)
- [ ] Build hero section with animated star field
- [ ] Migrate all content from Hugo Markdown (content collections)
- [ ] Build resource hub with Pagefind search and filter by: subject, grade, content type
- [ ] Add GoatCounter analytics
- [ ] Implement impact counters section (animated on scroll)
- [ ] Move privacy and terms content inline (off Google Docs)
- [ ] Delete `netlify.toml` (cleanup)

### Phase 2 — Showcase & Storytelling

- [ ] Data visualization gallery (visual grid, filterable)
- [ ] Redesigned blog with tag browsing and featured posts
- [ ] About page with the Callisto etymology story
- [ ] Impact page: richer data storytelling (charts, maps, timeline)
- [ ] Testimonials component (rotating or static)
- [ ] Improved course landing pages (one page per course, not a list)

### Phase 3 — Growth & AI Focus

- [ ] AI & future learning hub section (lead with generative AI + AI ethics as named topics)
- [ ] "New and updated" resource feed
- [ ] French language landing page (minimal, links to English content)
- [ ] Contributor / community page refresh
- [ ] Optional: newsletter signup (privacy-respecting, e.g., Buttondown)
- [ ] "Try in Browser" JupyterLite resource integration (see JupyterLite section below)
- [ ] Optional: newsletter signup (privacy-respecting, e.g., Buttondown)

---

## 9. JupyterLite — "Try It in Your Browser"

**This is the most important interactivity opportunity in the redesign.**

JupyterLite ([github.com/callysto/jupyterlite](https://github.com/callysto/jupyterlite)) runs a full Jupyter environment in the browser via WebAssembly — no login, no account, no server. A review of the repository reveals **200+ notebooks** already in this format, organized across 6 major categories. This is not a future aspiration — the content exists now.

### Content inventory

| Category | Count | Description |
|---|---|---|
| **Curriculum Notebooks** | 70+ | 7 subjects: Math, Science, Social Studies, Technology Studies, English Language Arts, Languages, Health |
| **Data Science & AI** | 12 | A structured 12-lesson course (intro → generative AI → ethics → training AI) |
| **Data Viz of the Week** | 45 | Stand-alone visualizations on diverse real-world datasets |
| **Interesting Problems** | 46 | Self-contained mathematical and data puzzles |
| **Data Labyrinth** | 10 | Deeper explorations: sports analytics, music, weather, cybersecurity, Gapminder |
| **Hackathon** | 20+ | Intro + challenge notebook pairs across 10 themes (sports, books, music, Pokémon, etc.) |

**Implication:** JupyterLite is not a niche feature — it is effectively the entire content library. The website redesign should treat it as such, making "launch in browser" the default and primary CTA for resources, not a secondary option.

### Design implications

**"▶ Try in Browser" as the primary resource action.** Every resource card in the hub should lead with the JupyterLite launch link. This replaces the current pattern of pointing visitors to an external hub that requires a login.

**Landing page interactive demo.** Feature one curated JupyterLite notebook on the landing page — a short data visualization or "interesting problem" — as a "try data science right now" moment. This shows rather than tells what Callysto resources feel like, and requires no setup from the visitor.

**Category-based browsing that reflects the JupyterLite structure.** The 6 content categories in the JupyterLite repo map naturally to the resource hub sections:

| JupyterLite category | Website section |
|---|---|
| Curriculum Notebooks | Learning Modules (by subject + grade) |
| Data Science & AI | Online Courses → DS & AI Course |
| Data Viz of the Week | Data Visualizations gallery |
| Interesting Problems | Could be a new "Explore" or "Problems" section |
| Data Labyrinth | Could fold into Learning Modules or be its own section |
| Hackathon | Blog/Events coverage + standalone "Challenges" section |

**The Hackathon notebooks** are an underused asset. Intro + challenge pairs are highly engaging entry points for students. **Pokémon is consistently the most popular theme** and should be the default "featured challenge" on the landing page or challenges section — it functions as a proven hook for students who might otherwise be hesitant to try data science. Other themes (music, basketball, books, zoo) provide variety for teachers to choose based on their class.

**The 12-notebook AI curriculum** is a full structured course that lives entirely in JupyterLite. The website should surface this prominently as a coherent offering, not just a list of notebooks. Notably, the course includes dedicated notebooks on **generative AI** (`09-generative-ai.ipynb`) and **AI issues and ethics** (`10-ai-issues-and-ethics.ipynb`) — topics that are increasingly relevant in K-12 curricula and should be called out explicitly in any course description or marketing copy, not buried in a notebook list.

**Hub vs. JupyterLite distinction in resource metadata.** Resource frontmatter should include a `launch_type` field:
- `jupyterlite` — runs in browser, zero friction (default for the 200+ notebooks above)
- `hub` — requires hub.callysto.ca login (classroom sessions, persistent environments)
- `external` — links to third-party content

### JupyterHub positioning

The JupyterHub at `hub.callysto.ca` remains valuable for **organized classroom sessions** where teachers want persistent notebooks and a shared environment. The new site should position the two as complementary:

- **JupyterLite:** Explore anytime. No account needed. Runs in your browser. (→ default for independent use)
- **JupyterHub:** For classroom sessions and instructor-led activities. (→ teacher-requested, session-based)

---

## 10. Migration Approach

The content migration from Hugo to Astro is the highest-risk part of this project. The recommended approach:

1. **Audit content frontmatter.** Run a script to identify all unique frontmatter fields across all Markdown files. Normalize to a consistent schema for Astro content collections.
2. **Build the new site in parallel.** Keep the current Hugo site live and deployed. Build the Astro site on a separate branch (`modernization` or `astro-redesign`). Use a GitHub Pages preview or Netlify draft URL for review.
3. **Content-first, design-second.** Get all content rendering correctly in Astro before investing in visual polish. This prevents rework.
4. **Migrate in content-type batches:** Learning modules → Lesson plans → Data viz → Courses → Blog → Static pages.
5. **Redirect audit.** Existing URLs (e.g., `/blog/:slug/`, `/lesson-plans/:slug/`) should be preserved or redirected. Document any URL changes before cutover.
6. **Cutover.** Switch the GitHub Actions workflow from Hugo build to Astro build. Deploy. Monitor GoatCounter for 404s.

---

## 11. Open Questions

- **Content freshness:** Some modules and lesson plans may reference outdated Python libraries or datasets. Is there an editorial review process planned alongside the redesign?
- **Contributions page:** The site credits Cybera and PIMS as facilitators "until 2024." What is the current organizational structure? This affects the About and Contributions pages.
- **Logo:** The current logo exists as PNG and SVG. Does a redesign warrant a logo refresh, or should it stay as-is?
- **Domain:** Is `callysto.ca` the canonical domain? The GitHub Pages URL (`callysto.github.io/website`) appears in internal content links and should be cleaned up.
**Resolved:**
- ~~Hub integration~~ — JupyterHub (`hub.callysto.ca`) is active for classroom/session use. JupyterLite is the preferred path for zero-friction browser-based access. See Section 9.
- ~~Twitter/X handle~~ — `@callysto_canada`. Fixed in `config/_default/params.yaml`.
- ~~JupyterLite resource inventory~~ — 200+ notebooks confirmed across 6 categories. Effectively the entire content library is JupyterLite-compatible. See Section 9 for full breakdown.

---

## 12. Summary of Key Decisions

| Decision | Choice | Rationale |
|---|---|---|
| Static site generator | Astro | Best fit for content-heavy sites; component islands; clean Markdown migration |
| Hosting | GitHub Pages (stay) | Free, already in use, no new dependencies |
| Analytics | GoatCounter | Free for open source, no cookies, PIPEDA-compliant |
| Search | Pagefind | Static, build-time, supports metadata filtering |
| Animations | CSS Scroll-Driven + Motion | Native browser API first; minimal JS overhead |
| Styling | Tailwind CSS v4 | Already familiar, great for design systems |
| Visual direction | "Deep Space" redesign | Honor the Callisto/Jupiter/Python identity intentionally |
| Language | English only (for now) | Simplicity; French landing page deferred to Phase 3 |
| Bilingual content | Not yet | Can be added without restructuring |
| Privacy & Terms | Inline site pages | Remove dependency on Google Docs |
| JupyterLite | First-class "Try in Browser" feature | Zero-friction access; no login; strongest interactivity win available |
| JupyterHub | Classroom/session use, secondary | Still active and valuable for organized instruction |
| Twitter/X | @callysto_canada | Fixed in params.yaml |
