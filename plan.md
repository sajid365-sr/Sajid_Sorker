# Evergreen Heating & Air — Project Context & Master Plan

> **Purpose:** This document is the single source of truth for the HVAC website project. Read it before making changes. Keep it updated when decisions, implementation status, routes, assets, or requirements change.
>
> **Last updated:** 2026-11-02

---

## 1. Project Overview

This repository contains three distinct web experiences. They share one codebase, but they do **not** share the same audience or visual design.

### Route 1 — `/`
**Sajid Sorker Developer Portfolio**

- Personal developer portfolio.
- Existing visual identity: dark, technical, futuristic, with cyan / blue / purple accents, glow effects, code-inspired details, and developer-focused content.
- This route is already built.
- Treat it as a protected, existing project.
- Do not redesign or break it while working on the HVAC pages.

### Route 2 — `/hvac-websites`
**Sajid's HVAC Website Service / Sales Landing Page**

- This is Sajid's service page for selling website design and development to HVAC contractors.
- Its audience is HVAC business owners and managers, primarily in the United States.
- It uses Sajid's personal-brand visual language: dark navy, cyan, blue, purple, subtle glow, and a technical/premium feel.
- Its purpose is to explain the offer, show proof, and generate free website-audit inquiries.
- It is **not** the HVAC company's website.
- Keep this route separate from the fictional HVAC business demo.

### Route 3 — `/evergreen-heating-air`
**Evergreen Heating & Air — Fictional HVAC Business Demo**

- This is the actual sample website that a homeowner would use if Evergreen Heating & Air were a real HVAC company.
- It is a demonstration concept created to showcase the type of website Sajid can build for a US HVAC contractor.
- It must look and behave like a credible local HVAC company's website, not like a developer portfolio or agency landing page.
- Its design must be completely different from the dark tech-heavy portfolio and the dark Sajid sales page.

**Critical distinction:**

- `/` = Sajid the developer.
- `/hvac-websites` = Sajid selling an HVAC website service.
- `/evergreen-heating-air` = the HVAC business website demo.

Never mix the content, branding, or visual identity of these three experiences.

---

## 2. Business Context

### Demo business name
**Evergreen Heating & Air**

### Demo market
**Dallas–Fort Worth, Texas, USA**

### Intended audience
Homeowners and, where appropriate, light-commercial customers looking for HVAC services in the Dallas–Fort Worth area.

### Main services to demonstrate

1. AC Repair
2. AC Installation
3. Heating Repair
4. Heating Installation
5. HVAC Maintenance
6. Emergency HVAC Service

### Main customer actions

- Call the company.
- Request a free estimate.
- Understand which services are offered.
- Check whether their location is served.
- Find clear contact information.

### Primary CTA
**Get a Free Estimate**

### Secondary CTA
**Call Now**

### Demo phone number
Use a clearly fictional placeholder number such as **(214) 555-0147** (or another reserved fictional 555-01xx number). Do not use a real company's phone number.

### Demo location
Use Dallas–Fort Worth, Texas consistently. Do not leave generic placeholders such as `[City]` or `[State]` in the finished demo.

### Service-area examples
Use a consistent set of DFW-area cities, for example:

- Dallas
- Plano
- Frisco
- Irving
- Arlington
- Richardson

These are illustrative service-area examples for the fictional demo, not a claim about a real company.

---

## 3. Primary Project Goal

The immediate product goal is to build a polished, realistic, responsive HVAC business website that can serve as a strong portfolio/demo asset for direct client outreach.

Sajid plans to approach US HVAC contractors directly with personalized cold outreach. The demo must help a prospect understand the quality, structure, and customer experience they could receive.

The demo should demonstrate:

- Strong local-service positioning.
- A clear, customer-friendly homepage.
- Prominent phone and estimate actions.
- HVAC service information that is easy to scan.
- Clear service-area information.
- Mobile-first usability.
- Trust-building presentation without invented proof.
- A simple estimate-request interaction.
- Good page speed, accessibility, and responsive behavior.

This is a demo to support real sales conversations. Prioritize customer usability and credibility over visual effects or unnecessary technical complexity.

---

## 4. Design Direction — Evergreen Heating & Air

### Overall look and feel

Use a polished, trustworthy US local-service business aesthetic:

- White and very light gray backgrounds.
- Deep charcoal / dark navy text.
- Professional medium blue as the primary accent.
- Subtle sky-blue or pale-blue supporting accents.
- Generous whitespace.
- Clear, readable typography.
- Real HVAC photography.
- Clean cards and restrained shadows.
- Simple, obvious calls to action.
- Consistent spacing and alignment.

### Do NOT use

- The dark navy / cyan / purple developer-portfolio theme.
- Neon gradients or glowing cards.
- Terminal windows or code-editor visuals.
- Developer-style section labels such as `<Hero />` or `<Services />`.
- Excessive animations or parallax.
- Fake dashboards or miniature website interfaces built with CSS to imitate real screenshots.
- A generic SaaS landing-page look.
- Excessive icon cards that make the page feel like a component library.

### Brand separation rule

The Evergreen demo should look like a real HVAC company's customer-facing website. It is okay for it to share the same underlying Next.js codebase, but it must have its own design system, typography scale, colors, components, and content style.

**Design principle:** clean, local, reliable, practical, and easy to use.

---

## 5. Current Technical Context

The project is an existing Next.js application.

Known stack from the current project:

- Next.js App Router
- TypeScript
- Tailwind CSS
- Existing shared app layout and global stylesheet
- Existing components for the Sajid portfolio and HVAC sales page

Do not assume exact installed versions or available dependencies. Inspect `package.json`, `tsconfig.json`, Tailwind configuration, and the current source before implementation.

### Current known route/component structure

The Evergreen route has been created at:

`app/evergreen-heating-air/`

The current implementation was initially scaffolded with files similar to:

- `app/evergreen-heating-air/layout.tsx`
- `app/evergreen-heating-air/page.tsx`
- `components/evergreen/EgNavbar.tsx`
- `components/evergreen/EgHero.tsx`
- `components/evergreen/EgTrustBar.tsx`
- `components/evergreen/EgServices.tsx`
- `components/evergreen/EgProblemSolution.tsx`
- `components/evergreen/EgWhyChooseUs.tsx`
- `components/evergreen/EgHowItWorks.tsx`
- `components/evergreen/EgServiceAreas.tsx`
- `components/evergreen/EgEstimateForm.tsx`
- `components/evergreen/EgFooter.tsx`

**These paths are a guide, not an assumption.** Inspect the current repository and use the actual existing files. Do not recreate components that already exist.

### Technical constraints

- Keep using the existing project stack.
- Do not add a database.
- Do not add authentication.
- Do not add Prisma or MongoDB.
- Do not add a CMS.
- Do not add unnecessary dependencies.
- Avoid unnecessary client components; use server components unless interaction requires client-side state.
- Keep the route isolated from the portfolio and HVAC sales page.
- Preserve existing routes and unrelated components.
- Do not globally change styles in a way that affects `/` or `/hvac-websites`.

---

## 6. Homepage Structure

The current intended homepage section order is:

1. Header / Navigation
2. Hero
3. Trust Bar
4. Services
5. Problem / Solution
6. Why Choose Us
7. How It Works
8. Service Areas
9. Free Estimate CTA / Form
10. Footer

The page should guide a homeowner through this sequence:

**Understand the service → Find their need → Trust the company → Check service area → Request help.**

### Header / Navigation

- Evergreen Heating & Air logo/name.
- Services
- How It Works
- Service Areas
- About (only if an About section exists)
- Contact
- Visible phone action.
- Prominent Get Free Estimate button.
- Mobile menu must be accessible and usable.

### Hero

Current working direction:

**Headline:**  
"Heating & Cooling You Can Count On."

**Supporting copy:**  
"Evergreen Heating & Air serves DFW homeowners with honest, professional HVAC service — fast response, transparent pricing, and work done right the first time."

**Primary CTA:** Get a Free Estimate  
**Secondary CTA:** Call Now

The hero should include a real HVAC technician / residential AC service photograph. Do not replace it with a fake CSS illustration or coded browser mockup.

### Trust Bar

Use only verifiable or neutral statements. Do not state unverified licenses, insurance, response-time promises, emergency availability, pricing promises, warranties, or guarantees as facts.

### Services

Show the six core HVAC services with short, plain-English descriptions and links/actions where appropriate.

### Problem / Solution

Use relatable homeowner problems, such as:
- AC blowing warm air.
- Heating not turning on.
- Strange system noise.
- Poor airflow.
- System maintenance needs.

Explain the service path clearly. Avoid guaranteed repair outcomes.

### Why Choose Us

Because Evergreen is fictional, do not invent a real company's history, team credentials, awards, guarantees, or customer track record. Use demonstration-safe explanatory content instead.

### How It Works

A clear process such as:
1. Request an estimate.
2. Discuss the issue / arrange a visit.
3. Review the recommended work.
4. Complete the service.

Do not promise exact arrival times or same-day completion unless explicitly shown as fictional placeholder content and clearly marked as such. Prefer neutral wording.

### Service Areas

Use Dallas–Fort Worth city names consistently. Do not leave `[City]`, `[State]`, Springfield, Riverside, or unrelated generic locations in the final copy.

### Estimate Form

Suggested fields:
- Full name
- Phone
- Email (optional if appropriate)
- Service needed
- ZIP code
- Additional details

The form is a demo unless a real backend is deliberately added later.

If it is not connected to a backend, submission must show a transparent message such as:

"Thanks! This is a demo form. No service request has been sent."

Do not pretend that a real service request has been received.

### Footer

Include business name, demo contact details, service links, service areas, and a discreet but clear note that Evergreen Heating & Air is a fictional demonstration concept.

---

## 7. Content Truthfulness — Very Important

Evergreen Heating & Air is fictional. The website must never mislead a prospect into believing the demo business is a real operating contractor.

Do not invent or present as factual:

- Customer testimonials.
- Google review ratings or review counts.
- Years in business.
- Named technicians or staff.
- Licenses or insurance.
- Manufacturer partnerships.
- Awards.
- Satisfaction guarantees.
- Same-day arrival promises.
- 24/7 availability.
- Response-time promises.
- “All brands serviced” unless explicitly framed as demo copy.
- Customer counts or completed-job counts.
- Performance or conversion statistics.

If a section needs trust content, use neutral service-process explanations, design placeholders, or clearly marked demo content. Do not create fake reviews.

Keep the demo disclosure in a footer note or another unobtrusive but readable location, for example:

"Evergreen Heating & Air is a fictional business used for website demonstration purposes."

Do not use another real HVAC company's logo, photography, name, phone number, testimonials, or text without permission.

---

## 8. Image and Asset Strategy

Use real, relevant, properly licensed photography for visual storytelling.

Preferred sources:
- Pexels (individual image page; verify it is a genuine free image, not sponsored content).
- Unsplash (individual image page; verify applicable license and third-party rights).
- Original AI-generated imagery where appropriate.

Never use screenshots of search results as assets. Download from the original asset page and preserve source/license information.

### Known image direction

A Pexels HVAC technician photograph was selected earlier for the Sajid sales page Hero. It shows a technician servicing an outdoor HVAC unit. The actual downloaded file path/name must be discovered by inspecting the project's `public/` or asset directories. Do not assume its filename or reuse it without checking the intended use and license context.

### Evergreen demo image slots

Use actual photos for:
- Homepage hero: technician servicing an outdoor residential AC unit / homeowner context.
- Service sections: HVAC technician, AC condenser, furnace, or maintenance work.
- Problem/solution: technician diagnosing an HVAC unit.
- Optional service-truck or residential-home imagery.

For images that have not yet been sourced:
- Keep a clean, intentional placeholder with the correct aspect ratio.
- Add a code comment saying what asset is needed.
- Do not simulate a photograph or real website screenshot using HTML/CSS.
- Do not make a blank gray box look like a finished visual; it is temporary until the asset is supplied.

### Screenshots needed later for `/hvac-websites`

After the Evergreen demo is complete, capture actual screenshots from `/evergreen-heating-air` for:
- Desktop homepage (After / Live Demo).
- Mobile homepage.
- Services section/page.
- Estimate form / contact flow.

If an intentionally outdated "Before" concept is needed, create a clearly fictional visual comparison. Do not use a real competitor's copyrighted website screenshot without permission.

---

## 9. Relationship Between the Two HVAC Routes

### `/hvac-websites`

This page sells Sajid's website service to HVAC contractors.

It should eventually link to:

`/evergreen-heating-air`

The live demo CTA, demo preview, and any links previously pointing to `/hvac-demo` should be reviewed and updated to the correct route where appropriate.

### `/evergreen-heating-air`

This is the actual fictional HVAC business demonstration site.

It should not contain developer-service sales copy, Sajid's portfolio navigation, or references to Next.js/React.

The only connection to Sajid should be the subtle demo disclosure and, where useful, a small credit link. Do not turn the demo into an agency advertisement.

---

## 10. UX, Responsive Design, and Accessibility

Prioritize mobile experience. Many local-service visitors will arrive on a phone.

Check at minimum:
- 320px
- 375px
- 390px
- 768px
- 1024px
- 1440px

Requirements:
- No horizontal overflow.
- Readable typography.
- Large, comfortable tap targets.
- Phone number uses a `tel:` link.
- Estimate CTA scrolls to the form or navigates to the right section.
- Navigation works on mobile.
- Images use correct aspect ratios and responsive sizing.
- Use descriptive alt text.
- Forms have labels, validation, keyboard support, and accessible feedback.
- Maintain sufficient text/background contrast.
- Respect reduced-motion preferences if animation is used.

Use subtle transitions only. The website should feel dependable, not flashy.

---

## 11. SEO and Performance

For the Evergreen route:
- Use appropriate page title and meta description.
- Use a single clear H1.
- Use logical H2/H3 hierarchy.
- Use descriptive link text.
- Optimize images with Next.js Image where suitable.
- Avoid unnecessarily large images and layout shifts.
- Avoid adding heavy libraries for simple interactions.
- Check browser console and build output.

Suggested title:

"Evergreen Heating & Air | HVAC Services in Dallas–Fort Worth"

Suggested description:

"Explore AC repair, heating, installation, and HVAC maintenance services for homes across the Dallas–Fort Worth area."

Because Evergreen is fictional, this metadata is for the demo environment and should not be presented as a real local service listing.

---

## 12. Development Workflow for Any IDE

Any IDE or coding agent must follow this workflow.

### Before editing

1. Read this document fully.
2. Inspect the actual project files.
3. Read `package.json` and current routing/layout.
4. Identify the exact files relevant to the requested task.
5. Briefly state which files will be changed.
6. Do not assume a file path based only on this document; verify it.

### While editing

1. Work in small, isolated phases.
2. Modify only files necessary for the current phase.
3. Do not refactor unrelated code.
4. Do not modify `/` or `/hvac-websites` while working on Evergreen unless explicitly requested.
5. Do not change global CSS in a way that leaks styles across routes.
6. Keep components reusable but avoid overengineering.
7. Do not add dependencies without explaining why.

### After editing

1. Run the relevant dev/build/lint/type-check commands available in the project.
2. Inspect the local route in the browser.
3. Check desktop and mobile layouts.
4. Report files changed and any issues remaining.
5. Stop and wait for review before moving to the next phase.

### IDE independence

This project may move between Cursor, Antigravity, VS Code, or another IDE. Do not rely on IDE-specific memory or hidden chat history. This document is the persistent context.

---

## 13. Suggested Build Phases

Do not attempt all phases in one large task.

### Phase 0 — Repository Audit
- Inspect actual routes, components, styles, assets, and package scripts.
- Confirm `/`, `/hvac-websites`, and `/evergreen-heating-air` are separate.
- Report current status and discrepancies against this plan.
- Do not edit code.

### Phase 1 — Business & Content Cleanup
- Confirm Evergreen name and DFW location.
- Remove generic city placeholders.
- Remove fabricated/unverified claims.
- Make all demo content transparent and consistent.
- Do not redesign the whole website.

### Phase 2 — Header & Hero
- Finalize logo/name, navigation, phone CTA, estimate CTA.
- Use the real hero technician photo once the correct asset is available.
- Verify mobile hero layout.

### Phase 3 — Services
- Refine six service cards and copy.
- Add sensible navigation/anchors or detail links.
- Keep language homeowner-friendly.

### Phase 4 — Problem/Solution & Why Choose Us
- Use real photography where available.
- Explain common HVAC problems and service approach.
- Avoid invented guarantees and proof.

### Phase 5 — How It Works & Service Areas
- Make the process easy to understand.
- Use consistent DFW service-area names.
- Keep map area as a placeholder unless a real map solution is specifically requested.

### Phase 6 — Estimate Form & Footer
- Ensure all CTA links work.
- Add client-side demo success state if no backend exists.
- Clearly state no request is actually sent in demo mode.
- Add fictional-demo disclosure.

### Phase 7 — Visual Assets
- Add properly licensed photos.
- Replace image placeholders.
- Optimize file sizes and responsive crops.
- Keep source/license notes.

### Phase 8 — QA
- Responsive checks.
- Accessibility checks.
- SEO metadata.
- Image optimization.
- Link/form behavior.
- TypeScript/lint/build checks.
- Verify no styles leak into other routes.

### Phase 9 — Sales Page Proof Integration
- Integrate the genuine desktop demo screenshot `/images/hvac/demo-hero-desktop.jpg` and mobile screenshot `/images/hvac/features-mobile-portrait.jpg` on `/hvac-websites`.
- Integrate `/images/hvac/features-preview-desktop.jpg` in Features, plus `/images/hvac/before-outdated-website.jpg` and `/images/hvac/after-evergreen-redesign.jpg` in the comparison.
- Capture `/images/hvac/features-mobile-portrait.jpg` at 390×844 using mobile viewport emulation at 100% scale; verify the headline and service-area badge fit at both 390px and 375px.
- Replace the matching placeholders with responsive Next.js Image components and descriptive alt text.
- Label the Before/After visuals as an illustrative concept, not a real client redesign or case study.
- Keep the existing desktop Features screenshot and HVAC technician hero photograph unchanged.
- Update all demo links to `/evergreen-heating-air`.
- Do not use fake metrics or testimonial claims.
- Verify with `npx tsc --noEmit` and `npm run build`.

### Phase 10 — HVAC Lead Form Email Delivery
- Send `/hvac-websites` audit-form submissions with the existing `@emailjs/browser` package and dedicated `NEXT_PUBLIC_HVAC_SERVICE_ID`, `NEXT_PUBLIC_HVAC_TEMPLATE_ID`, and `NEXT_PUBLIC_HVAC_PUBLIC_KEY` variables.
- Map form values to `from_name`, `from_email`, `business_name`, `phone`, `website`, `service_interest`, and `message`; keep the email subject in the EmailJS template.
- Preserve required name/email validation and provide visible loading, success, configuration-missing, and send-error states. When configuration is missing or sending fails, show a direct email link rather than redirecting automatically.
- Keep the Evergreen demo form demo-only and the portfolio contact form on its existing configuration.
- Verify with `npx tsc --noEmit` and `npm run build`; separately confirm the deployed EmailJS template and Vercel environment configuration before relying on live delivery.

---

## 14. Immediate Current Task

The HVAC website audit form now uses the dedicated EmailJS configuration and the field mapping in Phase 10. TypeScript and production build checks pass. Before relying on live submissions, verify the HVAC template's recipient and subject settings and configure the three dedicated public environment variables in the deployment environment. Do not change the Evergreen demo form or the portfolio contact form as part of this verification.

---

## 15. Operating Principles

1. Build for the homeowner, not for developers.
2. Clarity beats visual effects.
3. Real photography beats fake CSS illustrations.
4. Real screenshots beat simulated browser mockups.
5. Never invent reviews, credentials, guarantees, statistics, or business history.
6. Keep the site fast, accessible, and mobile-first.
7. Keep the three routes visually and conceptually separate.
8. Make one focused change at a time.
9. Preserve working code.
10. Update this file when a decision is finalized.

---

## 16. Decision Log

Keep this section current.

| Date | Decision |
|---|---|
| 2026-11-02 | Demo route is `/evergreen-heating-air`, not `/hvac-demo`. |
| 2026-11-02 | Evergreen Heating & Air is a fictional HVAC demo business. |
| 2026-11-02 | Demo market is Dallas–Fort Worth, Texas. |
| 2026-11-02 | Demo visual theme is white/light with professional blue and charcoal; do not use Sajid's dark tech portfolio theme. |
| 2026-11-02 | Sajid portfolio `/` remains dark tech-heavy. |
| 2026-11-02 | HVAC sales page `/hvac-websites` keeps Sajid's dark/cyan/blue/purple personal-brand style. |
| 2026-11-02 | No database, authentication, Prisma, MongoDB, or unnecessary backend for the demo at this stage. |
| 2026-11-02 | Use real, properly licensed images; leave clearly labeled asset slots until images are supplied. |
| 2026-11-02 | Do not publish fabricated testimonials, ratings, certifications, guarantees, response times, or business-history claims. |
| 2026-11-02 | Demo phone number standardized to (214) 555-0147 / tel:+12145550147 across navbar, hero, form, and footer. |
| 2026-11-02 | Service #6 changed from Indoor Air Quality to Emergency HVAC Service to match plan §2. |
| 2026-11-02 | All unverified claims removed: licenses, insurance, guarantees, same-day availability, 24/7 service, response times, years in business, pricing guarantees. |
| 2026-11-02 | Trust statements replaced with neutral, service-focused content in hero, trust bar, why-choose-us, problem/solution, and how-it-works. |
| 2026-11-02 | Fictional-business disclosure added to footer: "Evergreen Heating & Air is a fictional business used for website demonstration purposes." |
| 2026-11-02 | Estimate form success message updated to state no real request was sent; ZIP code field added. |
| 2026-11-02 | Generic service-area placeholders replaced with Dallas, Plano, Frisco, Irving, Arlington, Richardson. |
| 2026-11-02 | Fictional contact email hello@example.com used; fictional address and license placeholder removed. |
| 2026-11-02 | Removed invented business hours from EgFooter — fictional business displays no opening hours. |
| 2026-11-02 | Removed "Demo Disclosure" card from EgWhyChooseUs; fictional-business disclosure kept only in the footer. |
| 2026-11-02 | Updated all /hvac-demo links in /hvac-websites components (HvacHero, HvacCtas, HvacDemoSection, HvacFeatures, HvacBeforeAfter, HvacFinalCta) to /evergreen-heating-air, including visible URL text. |
| 2026-11-02 | Phase 2 — Hero image: selected pexels-jose-andres-pacheco-cortes-3641213-5463581.jpg (technician servicing outdoor condenser unit, no prominent third-party branding). Replaced placeholder with Next.js Image (fill, priority, object-cover, aspect-[4/3], responsive sizes). Hero-hvac-technician.jpg reserved for /hvac-websites; pexels-richard-low-hong-33206323-7347538.jpg avoided (visible brand sticker on unit). |
| 2026-11-02 | Phase 10 — HVAC audit inquiries use the dedicated EmailJS environment variables and template parameter names; the subject is not supplied by user input. Missing configuration and send failures provide an explicit message and direct email link. Production template/Vercel configuration still requires verification. |
| 2026-11-02 | Phase 3 — Services: reordered six services per plan §2 (AC Repair, AC Installation, Heating Repair, Heating Installation, HVAC Maintenance, Emergency HVAC Service); refined natural-language descriptions; added per-card "Request Service" link to #estimate; no fake guarantees, 24/7, or same-day claims. |
| 2026-11-02 | Phase 4 — Problem/Solution: five homeowner-relatable pairs (AC blowing warm air, heating not turning on, weak airflow, strange noises, seasonal maintenance); header changed to "Common HVAC Issues" / "Is Your HVAC System Acting Up?". Photo placeholder retained (unused image has brand sticker — avoided). |
| 2026-11-02 | Phase 4 — Why Choose Us: six customer-focused themes (Clear Service Information, Straightforward Process, Easy Estimate Requests, Residential HVAC Focus, Local Service Area, Simple Communication); no fake reviews, licenses, guarantees, or credentials. |
| 2026-11-02 | Phase 5 — How It Works: four-step process (Request Service, Discuss Your Needs, Review Your Options, Schedule Your Service); CTA linking to #estimate; no response-time or same-day promises. |
| 2026-11-02 | Phase 5 — Service Areas: heading "Serving Homes Across Dallas–Fort Worth"; six DFW cities (Dallas, Plano, Frisco, Irving, Arlington, Richardson); Request Service CTA linking to #estimate. |
| 2026-11-02 | Phase 6 — Estimate Form: all fields (name, phone, email, service dropdown, ZIP, additional details) with labels, required indicators, accessible error messages via aria-describedby; exact demo message "Thanks for trying the demo! This is a sample form, and no service request has been sent."; submit button "Request My Free Estimate"; no backend connection. |
| 2026-11-02 | Phase 6 — Footer: service-area city links added (Dallas, Plano, Frisco, Irving, Arlington, Richardson); fictional-business disclosure kept only in footer (removed from Service Areas section); phone tel:+12145550147, email hello@example.com. |
| 2026-11-02 | Phase 7 — Problem/Solution image: replaced placeholder with Next.js Image using `/images/hvac/problem-hvac-technician.jpg`; landscape 4:3 aspect ratio, object-cover, shadow-sm, responsive sizes attribute; descriptive alt text added. |
| 2026-11-02 | Phase 7 — Service Areas map: replaced CSS placeholder with OpenStreetMap iframe embed (bbox=-97.1,32.6,-96.5,33.1) focused on Dallas–Fort Worth metro; 4:3 responsive container; OSM attribution included via embed page; no fake pins or invented addresses. |
| 2026-11-02 | Phase 7 — Map iframe fix: parent set to `relative`, iframe set to `absolute inset-0 w-full h-full` so the map fills the entire 4:3 container without blank areas. |
| 2026-11-02 | Phase 8 — Final QA: npm run build, TypeScript check, and ESLint all pass (0 errors; only pre-existing environment warnings). Responsive, accessibility, SEO metadata, and link checks completed for /evergreen-heating-air. |
| 2026-11-02 | Phase 8 — Footer: quick-navigation links mapped to real sections (About Us→#why-us, Service Areas→#service-areas, Contact→#estimate, Services→#services, service-area cities→#service-areas); "Privacy Policy" removed as it had no page or section. |

---

## 17. Status Tracker

Update this table as tasks are completed.

| Phase | Status | Notes |
|---|---|---|
| Phase 0 — Repository Audit | Complete | All routes, components, styles, assets, and scripts inspected. |
| Phase 1 — Business & Content Cleanup | Complete | All unverified claims removed; DFW location standardized; fictional disclosure added; form updated. |
| Phase 2 — Header & Hero | Complete | Real HVAC technician photograph integrated via Next.js Image; hero placeholder removed; badge restyled for photo overlay. |
| Phase 3 — Services | Complete | Six services ordered per plan §2; descriptions refined; "Request Service" link added to each card linking to #estimate. |
| Phase 4 — Problem/Solution & Why Choose Us | Complete | Five homeowner-relatable problem/solution pairs; six customer-focused reasons; no fake credentials or claims. |
| Phase 5 — How It Works & Service Areas | Complete | Four-step process, DFW service area heading and city grid, Request Service CTA added to both sections. |
| Phase 6 — Estimate Form & Footer | Complete | Form fields refined with accessible error messages, exact demo success message, "Request My Free Estimate" button; Footer updated with service-area links; duplicate disclosure removed from Service Areas section. |
| Phase 7 — Visual Assets | Complete | Problem/Solution image placeholder replaced with real photograph; Service Areas map placeholder replaced with OpenStreetMap embed focused on DFW metro. |
| Phase 8 — QA | Complete | Full responsive, accessibility, SEO metadata, and link check pass (npm run build, tsc --noEmit, eslint all green; pre-existing environment warnings only). Footer quick-navigation links corrected to real sections. |
| Phase 9 — Sales Page Proof Integration | Complete | Integrated all five verified image assets (`demo-hero-desktop.jpg`, `features-preview-desktop.jpg`, `features-mobile-portrait.jpg`, `before-outdated-website.jpg`, `after-evergreen-redesign.jpg`) with responsive Next.js Image components and descriptive alt text. Added clear illustrative-concept disclosure; preserved the technician hero image. Recaptured the 390×844 mobile preview at 100% mobile emulation and verified headline/badge fit at 390px and 375px. `npx tsc --noEmit` and `npm run build` pass. |
| Phase 10 — HVAC Lead Form Email Delivery | Code complete; production verification pending | HVAC audit form uses dedicated EmailJS variables and maps all requested template parameters. Loading, success, validation, missing-configuration, and send-error states are present; missing configuration no longer triggers automatic `mailto`. Evergreen demo and portfolio contact forms are unchanged. `npx tsc --noEmit` and `npm run build` pass. Verify the EmailJS recipient/subject template settings and Vercel environment variables before live use. |

**Important:** Status labels are provisional based on the current conversation and screenshots. Verify the actual repository state before marking anything complete.
