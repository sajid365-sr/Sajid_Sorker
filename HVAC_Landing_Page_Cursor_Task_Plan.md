# HVAC Landing Page Refactor — Cursor Task Plan

## Goal

Refactor the existing local `/hvac-websites` landing page so it feels like a natural part of the existing Sajid Sorker portfolio while remaining focused on HVAC business owners.

Important principle:

> Same brand system, different audience.

The main portfolio is developer-focused. The HVAC page must be business-focused, but it should reuse the same visual language, typography, colors, motion style, navigation language, spacing philosophy, and reusable UI patterns where appropriate.

---

# Phase 0 — Rules for Cursor

Before changing anything:

1. Inspect the existing project. Do not guess the design system.
2. Use these local files/folders as the source of truth for the existing personal-brand design:
   - `app/(portfolio)/page.tsx`
   - `app/(portfolio)/layout.tsx`
   - `components/Home/`
   - `components/Home/Hero`
   - `components/Home/About`
   - `components/Home/HireMe`
   - `components/Home/Worked`
   - `components/Home/Projects`
   - `components/Home/GetInTouch`
   - `components/Canv...` / canvas-related components used by the home page
   - `@widgets/Footer`
   - `app/globals.css`
   - `app/layout.tsx`
   - `tailwind.config.js`
   - `public/`
2. Treat the existing portfolio page and its components as READ-ONLY visual references unless a change is explicitly requested.
3. Do not break the existing portfolio routes.
4. Do not change the project's core stack.
5. Do not add authentication, database, Prisma, MongoDB, CMS, or unnecessary dependencies.
6. Keep `/hvac-websites` and `/hvac-demo` as separate routes.
7. Do not use the live domain as a design reference. Use the local files above.
8. Work in small steps. After each phase, run the app and inspect the page.

---

# Phase 1 — Audit the Existing Brand

## Cursor task

Read and inspect:

- `app/(portfolio)/page.tsx`
- `app/(portfolio)/layout.tsx`
- every relevant component under `components/Home/`
- `app/globals.css`
- `tailwind.config.js`
- `app/layout.tsx`

Do NOT modify code yet.

Create a short report in chat covering:

### Brand colors
Identify the actual colors currently used for:
- background
- primary text
- muted text
- cyan accent
- blue accent
- purple accent
- borders
- cards
- buttons
- glows/gradients

### Typography
Identify:
- font families
- major font weights
- heading sizes
- body sizes
- letter spacing patterns

### UI language
Describe:
- navbar style
- section heading pattern
- numbered section labels
- button style
- cards
- borders
- glow effects
- background effects
- social/contact rails
- animation style

### Reusable components
List which existing components can safely be reused in `/hvac-websites`.

Do not change anything yet.

---

# Phase 2 — Establish a Shared HVAC Visual System

## Cursor task

Using the Phase 1 audit as the source of truth, refactor ONLY `/hvac-websites`.

The existing `app/(portfolio)/page.tsx` and its components must remain unchanged.

The HVAC page should inherit the same visual DNA:

- deep dark background
- cyan/blue/purple accent palette
- subtle glow effects
- modern typography
- dark cards
- thin borders
- premium spacing
- developer-brand visual language

But do NOT turn the HVAC page into a developer portfolio.

Do not add:
- terminal windows everywhere
- React/Next.js/MongoDB references
- excessive code blocks
- generic developer copy

Use business language focused on HVAC owners.

Important:

The existing orange/cream visual system currently used in `/hvac-websites` should be removed/replaced.

Do not rewrite the page structure yet.

Only establish the visual system.

Run the app and inspect `/hvac-websites` before continuing.

---

# Phase 3 — Navbar + Global Page Shell

## Cursor task

Refactor the `/hvac-websites` header/navigation so it visually belongs to the existing portfolio.

Use the local portfolio implementation as reference, especially the top navigation and branding patterns.

Reference:
- `app/(portfolio)/page.tsx`
- `components/Home/Hero`
- relevant navbar/header files if present
- `app/globals.css`

Desired direction:

Brand:
`</> Sajid — Sorker`

Navigation can use numbered labels such as:

`01. Problem`
`02. What I Build`
`03. Process`
`04. Demo`
`05. FAQ`

Primary CTA:

`Get a Free Website Audit`

Keep the HVAC page business-focused.

If the portfolio has distinctive left/right fixed contact rails, inspect them and reuse/adapt them where appropriate.

Make sure the navbar works on mobile.

Do not modify the main portfolio navbar.

---

# Phase 4 — Hero Section

## Cursor task

Refactor ONLY the HVAC hero section.

Keep the core message:

"More Calls. More Quote Requests. A Better HVAC Website."

Use a developer-brand visual treatment consistent with the main portfolio:

- dark background
- cyan/blue/purple accents
- strong typography
- subtle gradient glow
- premium spacing
- restrained motion

Suggested structure:

Small eyebrow:
`< Websites for HVAC Contractors />`

Headline:
`More Calls. More Quote Requests. A Better HVAC Website.`

Supporting copy:
`Modern, fast, mobile-first websites built specifically for HVAC contractors — designed to turn local visitors into calls, inquiries, and quote requests.`

Primary CTA:
`Get a Free Website Audit`

Secondary CTA:
`See the Demo`

The right-side website preview should look like a polished product/browser mockup.

Do not make it look like the current flat cream/orange mockup.

Do not invent client results or statistics.

---

# Phase 5 — Problems + Before/After

## Cursor task

Update the existing Problems and Before/After sections without changing their core content.

## Problems section

Keep the current problem themes:

- Hard to Contact
- Weak Mobile Experience
- Unclear Calls-to-Action
- Outdated Design
- Poor Lead Flow

Transform them into dark premium cards consistent with the portfolio.

Use:
- subtle border
- cyan/blue/purple accent
- clean icon
- numbered label
- hover state

Avoid large visual clutter.

## Before/After section

Keep the concept:

`Typical HVAC Website`
vs.
`Conversion-Focused Redesign`

But improve the visual quality.

Use a realistic browser-window mockup style.

Later this should use the actual `/hvac-demo` design.

For now, keep it as a visual placeholder.

Do not use fake client claims.

---

# Phase 6 — What I Build + Why It Matters

## Cursor task

Refactor:

`Everything Your HVAC Website Needs`

Keep the existing items:

- High-Converting Home Page
- Service Pages
- Mobile-First Design
- Click-to-Call Experience
- Quote / Estimate Forms
- Service Area Pages
- Customer Reviews / Trust Signals
- Basic SEO Foundation
- Analytics Setup
- Fast Performance

Use a clean 2-column or structured grid layout that matches the portfolio's card/border language.

Then improve the "Why HVAC Businesses Need a Better Website" section.

Make it more visual.

Possible direction:

Left:
large heading / statement

Right:
a stylized mobile HVAC website preview with small labels such as:

`Mobile`
`CTA`
`Service Area`
`Trust`
`Estimate`

Do not add unsupported statistics.

---

# Phase 7 — Process Section

## Cursor task

Refactor the current 4-step process:

01 — Audit
02 — Redesign
03 — Build
04 — Launch

Use the existing portfolio's numbered/code-inspired language.

Visual direction:

`01  AUDIT`
`// Identify conversion problems`

`02  REDESIGN`
`// Improve structure and messaging`

`03  BUILD`
`// Develop the new experience`

`04  LAUNCH`
`// Deploy and test everything`

Keep it simple, premium, and responsive.

Do not add unnecessary animation.

---

# Phase 8 — Demo Section

## Cursor task

Refactor the demo section.

Keep the fictional company:

`Evergreen Heating & Air`

Make it explicit that it is a demonstration concept.

The section should show a polished browser preview.

Heading:

`< Live Demo />`

Copy should explain that the preview demonstrates the type of website an HVAC company could receive.

CTA:

`View Live Demo`

Link to:

`/hvac-demo`

Do NOT build `/hvac-demo` in this task.

Do NOT use fake testimonials, fake reviews, fake years in business, fake awards, or fake performance numbers.

---

# Phase 9 — About + FAQ

## About

Use the existing personal brand as reference.

Keep it compact:

`Sajid Sorker`
`Full-Stack Web Developer`

Use the same professional photo already used by the portfolio if available in the local project.

Keep the copy focused on:
- business websites
- performance
- user experience
- practical business outcomes

Do not create a long biography.

## FAQ

Keep the current questions.

Restyle the accordion to match the dark portfolio theme:
- dark surface
- subtle border
- cyan/blue accent
- clean open/close state

---

# Phase 10 — Final CTA + Form

## Cursor task

Refactor the final CTA to match the main brand.

Headline:

`Your Next Customer Is Already Searching.`

Supporting copy:

`Let's make sure your website gives them a clear reason to call.`

Buttons:

`Get a Free Website Audit`
`See the Demo`

Simplify the lead form.

Preferred fields:

- Name
- Business Name
- Business Email
- Current Website
- Optional message

Phone should be optional, not required.

Add a small reassurance line:

`Free. No obligation. I'll point out a few things worth improving.`

The form does not need backend/database implementation yet.

---

# Phase 11 — Mobile + Responsive QA

## Cursor task

Inspect `/hvac-websites` at:

- 320px
- 375px
- 390px
- 768px
- 1024px
- 1440px+

Check:

- navigation
- typography
- spacing
- CTA buttons
- browser mockups
- cards
- section heights
- FAQ
- form
- overflow
- tap targets

Fix all responsive issues.

Do not change the overall design direction.

---

# Phase 12 — Final QA

## Cursor task

Perform a production-quality QA pass on `/hvac-websites`.

Check:

- TypeScript errors
- ESLint issues
- console errors
- broken links
- missing assets
- horizontal overflow
- accessibility basics
- heading hierarchy
- metadata
- loading performance
- image dimensions
- unnecessary client components
- unnecessary dependencies

Confirm:

`/hvac-websites` works.

Confirm the link to:

`/hvac-demo`

exists but does not require the demo route to be implemented yet.

Do not modify the existing portfolio page or existing portfolio components unless a shared style bug directly affects both and is explicitly discussed first.

---

# Final Design Principle

The finished HVAC page must feel like:

"An HVAC-focused sales page created by the same Sajid Sorker whose portfolio I just visited."

Not:

"Another unrelated agency website."

The target balance is:

### Same brand
- colors
- typography
- dark visual system
- glow
- borders
- spacing
- motion language
- navigation style

### Different audience
- HVAC-specific copy
- business outcomes
- calls
- quote requests
- service areas
- mobile usability
- trust
- lead flow

Do not sacrifice usability just to make it look futuristic.
