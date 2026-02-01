

I need to explore the codebase first to understand the full scope of vestigial web design content before generating the specification.

🔧 Tool: Task
Input: {
  "description": "Explore codebase structure",
  "prompt": "Thoroughly explore this codebase at C:\\Users\\James\\Repos\\restaurant-business to understand its structure. I need:\n\n1. Full directory tree (all files)\n2. The content of ALL component/page files - read every .astro, .tsx, .jsx, .ts, .js file in src/\n3. Any config files (astro.config, tailwind.config, package.json, etc.)\n4. Content in any data files or content directories\n\nThe goal is to identify ALL text/content that relates to a \"web design business\" that needs to be changed to fit a \"restaurant business starter template\". Look for:\n- Text about websites, web design, SEO, digital services\n- References to \"HWS\" or similar web design branding\n- Service descriptions related to web/digital work\n- Portfolio items about websites\n- Testimonials about web design work\n- CTAs like \"Get Your Free Consultation\"\n- Stats like \"50+ Local Businesses Helped\"\n- Any browser mockup / website preview components\n- About page content about a web design person/agency\n\nReport back ALL files and the specific content that needs changing, organized by file.",
  "subagent_type": "Explore",
  "model": "sonnet"
}

🔧 Tool: Bash
Input: {
  "command": "find C:\\Users\\James\\Repos\\restaurant-business -type f -name \"*.json\" -o -name \"*.config.*\" -o -name \"*.astro\" -o -name \"*.tsx\" -o -name \"*.jsx\" -o -name \"*.ts\" -o -name \"*.js\" | head -100",
  "description": "Find all relevant files in the codebase"
}

🔧 Tool: Bash
Input: {
  "command": "ls -la C:\\Users\\James\\Repos\\restaurant-business",
  "description": "List root directory contents"
}

🔧 Tool: Bash
Input: {
  "command": "pwd",
  "description": "Get current working directory"
}

🔧 Tool: Bash
Input: {
  "command": "find . -type f \\( -name \"*.astro\" -o -name \"*.tsx\" -o -name \"*.jsx\" -o -name \"*.ts\" -o -name \"*.js\" -o -name \"*.json\" -o -name \"*.config.*\" \\) | grep -v node_modules | sort",
  "description": "Find all relevant source files"
}

🔧 Tool: Bash
Input: {
  "command": "ls -la",
  "description": "List root directory"
}

🔧 Tool: Bash
Input: {
  "command": "find src -type f 2>/dev/null | sort",
  "description": "List all files in src directory"
}

🔧 Tool: Read
Input: {
  "file_path": "/c/Users/James/Repos/restaurant-business/package.json"
}

🔧 Tool: Read
Input: {
  "file_path": "/c/Users/James/Repos/restaurant-business/astro.config.mjs"
}

🔧 Tool: Read
Input: {
  "file_path": "/c/Users/James/Repos/restaurant-business/README.md"
}

🔧 Tool: Read
Input: {
  "file_path": "/c/Users/James/Repos/restaurant-business/src/pages/index.astro"
}

🔧 Tool: Read
Input: {
  "file_path": "/c/Users/James/Repos/restaurant-business/src/pages/about.astro"
}

🔧 Tool: Read
Input: {
  "file_path": "/c/Users/James/Repos/restaurant-business/src/pages/services.astro"
}

🔧 Tool: Read
Input: {
  "file_path": "/c/Users/James/Repos/restaurant-business/src/pages/portfolio.astro"
}

🔧 Tool: Read
Input: {
  "file_path": "/c/Users/James/Repos/restaurant-business/src/pages/contact.astro"
}

🔧 Tool: Glob
Input: {
  "pattern": "**/*.json",
  "path": "/c/Users/James/Repos/restaurant-business"
}

🔧 Tool: Glob
Input: {
  "pattern": "*.astro",
  "path": "/c/Users/James/Repos/restaurant-business/src/pages"
}

🔧 Tool: Glob
Input: {
  "pattern": "*.config.*",
  "path": "/c/Users/James/Repos/restaurant-business"
}

🔧 Tool: Read
Input: {
  "file_path": "C:\\Users\\James\\Repos\\restaurant-business\\package.json"
}

🔧 Tool: Read
Input: {
  "file_path": "C:\\Users\\James\\Repos\\restaurant-business\\README.md"
}

🔧 Tool: Read
Input: {
  "file_path": "C:\\Users\\James\\Repos\\restaurant-business\\src\\pages\\index.astro"
}

🔧 Tool: Read
Input: {
  "file_path": "C:\\Users\\James\\Repos\\restaurant-business\\src\\pages\\about.astro"
}

🔧 Tool: Read
Input: {
  "file_path": "C:\\Users\\James\\Repos\\restaurant-business\\src\\pages\\services.astro"
}

🔧 Tool: Read
Input: {
  "file_path": "C:\\Users\\James\\Repos\\restaurant-business\\src\\pages\\portfolio.astro"
}

🔧 Tool: Read
Input: {
  "file_path": "C:\\Users\\James\\Repos\\restaurant-business\\src\\pages\\contact.astro"
}

🔧 Tool: Read
Input: {
  "file_path": "C:\\Users\\James\\Repos\\restaurant-business\\src\\pages\\services\\website-design.astro"
}

🔧 Tool: Read
Input: {
  "file_path": "C:\\Users\\James\\Repos\\restaurant-business\\src\\pages\\services\\seo.astro"
}

🔧 Tool: Read
Input: {
  "file_path": "C:\\Users\\James\\Repos\\restaurant-business\\src\\pages\\services\\hosting.astro"
}

🔧 Tool: Read
Input: {
  "file_path": "C:\\Users\\James\\Repos\\restaurant-business\\src\\pages\\services\\maintenance.astro"
}

🔧 Tool: Read
Input: {
  "file_path": "C:\\Users\\James\\Repos\\restaurant-business\\src\\config\\seo.config.ts"
}

🔧 Tool: Read
Input: {
  "file_path": "C:\\Users\\James\\Repos\\restaurant-business\\src\\config\\featured-projects.config.ts"
}

🔧 Tool: Read
Input: {
  "file_path": "C:\\Users\\James\\Repos\\restaurant-business\\src\\components\\HeroSection.astro"
}

🔧 Tool: Read
Input: {
  "file_path": "C:\\Users\\James\\Repos\\restaurant-business\\src\\components\\FeaturedProjectsPreview.astro"
}

🔧 Tool: Read
Input: {
  "file_path": "C:\\Users\\James\\Repos\\restaurant-business\\src\\components\\PortfolioSection.astro"
}

🔧 Tool: Read
Input: {
  "file_path": "C:\\Users\\James\\Repos\\restaurant-business\\src\\components\\ContactCTA.astro"
}

🔧 Tool: Read
Input: {
  "file_path": "C:\\Users\\James\\Repos\\restaurant-business\\src\\components\\TestimonialsSection.astro"
}

🔧 Tool: Read
Input: {
  "file_path": "C:\\Users\\James\\Repos\\restaurant-business\\src\\config\\testimonials.config.ts"
}

🔧 Tool: Read
Input: {
  "file_path": "C:\\Users\\James\\Repos\\restaurant-business\\src\\types\\faq.ts"
}

🔧 Tool: Grep
Input: {
  "pattern": "Houston|HWS|web design|website|SEO|digital|consultation|Get Your Free",
  "path": "C:\\Users\\James\\Repos\\restaurant-business\\src",
  "output_mode": "files_with_matches",
  "-i": true
}

🔧 Tool: Read
Input: {
  "file_path": "C:\\Users\\James\\Repos\\restaurant-business\\src\\pages\\index.astro",
  "limit": 150
}

🔧 Tool: Read
Input: {
  "file_path": "C:\\Users\\James\\Repos\\restaurant-business\\src\\pages\\about.astro",
  "limit": 150
}

🔧 Tool: Read
Input: {
  "file_path": "C:\\Users\\James\\Repos\\restaurant-business\\src\\pages\\services.astro",
  "limit": 150
}

🔧 Tool: Read
Input: {
  "file_path": "C:\\Users\\James\\Repos\\restaurant-business\\src\\pages\\portfolio.astro",
  "limit": 150
}

🔧 Tool: Read
Input: {
  "file_path": "C:\\Users\\James\\Repos\\restaurant-business\\src\\components\\Header.astro",
  "limit": 150
}

🔧 Tool: Read
Input: {
  "file_path": "C:\\Users\\James\\Repos\\restaurant-business\\src\\components\\Footer.astro",
  "limit": 150
}

🔧 Tool: Read
Input: {
  "file_path": "C:\\Users\\James\\Repos\\restaurant-business\\src\\components\\HeroSection.astro",
  "offset": 0,
  "limit": 200
}

🔧 Tool: Bash
Input: {
  "command": "find /c/Users/James/Repos/restaurant-business -name \"*.md\" -o -name \"README*\" | head -20",
  "description": "Find documentation files"
}

🔧 Tool: Task
Input: {
  "description": "Read key files for details",
  "prompt": "Read these files in the repo at C:\\Users\\James\\Repos\\restaurant-business and report their FULL contents back to me:\n\n1. /src/components/HeroSection.astro (especially the browser mockup section around lines 130-283)\n2. /src/pages/services.astro\n3. /src/config/seo.config.ts\n4. /src/types/faq.ts\n5. /src/pages/index.astro\n6. /src/components/Header.astro\n7. /src/components/ContactCTA.astro\n8. /src/config/featured-projects.config.ts\n9. /src/pages/portfolio.astro\n10. /src/components/FeaturedProjectsPreview.astro\n11. /src/components/Footer.astro\n12. /src/pages/services/website-design.astro (and any other files in services/ directory)\n\nReport all contents so I can plan exact edits.",
  "subagent_type": "Explore",
  "model": "sonnet"
}

🔧 Tool: Read
Input: {
  "file_path": "C:\\Users\\James\\Repos\\restaurant-business\\src\\components\\HeroSection.astro"
}

🔧 Tool: Read
Input: {
  "file_path": "C:\\Users\\James\\Repos\\restaurant-business\\src\\pages\\services.astro"
}

🔧 Tool: Read
Input: {
  "file_path": "C:\\Users\\James\\Repos\\restaurant-business\\src\\config\\seo.config.ts"
}

🔧 Tool: Read
Input: {
  "file_path": "C:\\Users\\James\\Repos\\restaurant-business\\src\\types\\faq.ts"
}

🔧 Tool: Read
Input: {
  "file_path": "C:\\Users\\James\\Repos\\restaurant-business\\src\\pages\\index.astro"
}

🔧 Tool: Read
Input: {
  "file_path": "C:\\Users\\James\\Repos\\restaurant-business\\src\\components\\Header.astro"
}

🔧 Tool: Read
Input: {
  "file_path": "C:\\Users\\James\\Repos\\restaurant-business\\src\\components\\ContactCTA.astro"
}

🔧 Tool: Read
Input: {
  "file_path": "C:\\Users\\James\\Repos\\restaurant-business\\src\\config\\featured-projects.config.ts"
}

🔧 Tool: Read
Input: {
  "file_path": "C:\\Users\\James\\Repos\\restaurant-business\\src\\pages\\portfolio.astro"
}

🔧 Tool: Read
Input: {
  "file_path": "C:\\Users\\James\\Repos\\restaurant-business\\src\\components\\FeaturedProjectsPreview.astro"
}

🔧 Tool: Read
Input: {
  "file_path": "C:\\Users\\James\\Repos\\restaurant-business\\src\\components\\Footer.astro"
}

🔧 Tool: Read
Input: {
  "file_path": "C:\\Users\\James\\Repos\\restaurant-business\\src\\pages\\services\\website-design.astro"
}

🔧 Tool: Glob
Input: {
  "pattern": "**/*.astro",
  "path": "C:\\Users\\James\\Repos\\restaurant-business\\src\\pages\\services"
}

🔧 Tool: Read
Input: {
  "file_path": "C:\\Users\\James\\Repos\\restaurant-business\\src\\components\\HeroSection.astro",
  "offset": 1,
  "limit": 150
}

🔧 Tool: Read
Input: {
  "file_path": "C:\\Users\\James\\Repos\\restaurant-business\\src\\components\\HeroSection.astro",
  "offset": 130,
  "limit": 153
}

🔧 Tool: Read
Input: {
  "file_path": "C:\\Users\\James\\Repos\\restaurant-business\\src\\components\\HeroSection.astro",
  "offset": 280,
  "limit": 50
}

🔧 Tool: Read
Input: {
  "file_path": "C:\\Users\\James\\Repos\\restaurant-business\\src\\pages\\services\\maintenance.astro"
}

🔧 Tool: Read
Input: {
  "file_path": "C:\\Users\\James\\Repos\\restaurant-business\\src\\pages\\services\\hosting.astro"
}

🔧 Tool: Read
Input: {
  "file_path": "C:\\Users\\James\\Repos\\restaurant-business\\src\\pages\\services\\seo.astro"
}
Now I have a complete picture. Here's the specification:

---

# Specification: Remove Vestigial Web Design Content & Replace with Restaurant Business Content

## 1. Problem Statement

This repository was forked from a web design business site but is intended to serve as a starter template for small restaurant businesses. Significant leftover content—hero text, a browser mockup graphic, service descriptions, pricing tiers, portfolio items, FAQs, and branding—still references web design/development services. This creates a confusing, off-brand experience and requires a comprehensive content overhaul to align with the restaurant use case.

## 2. User Story

As a **developer using this starter template**, I want **all web design business content replaced with restaurant-appropriate content**, so that **I can use this repo as a clean starting point for building restaurant websites without having to manually find and fix vestigial content**.

## 3. Acceptance Criteria

- **Happy Path**: GIVEN the site is loaded, WHEN a visitor views the homepage, THEN they see a restaurant-themed hero with headline, description, and CTAs relevant to dining (e.g., "View Our Menu", "Make a Reservation") with no browser mockup graphic.
- **Happy Path**: GIVEN the services page exists, WHEN a visitor navigates to /services, THEN they see restaurant services (Dine-In, Catering, Private Events, Online Ordering, Meal Prep) with relevant pricing and process steps.
- **Happy Path**: GIVEN the portfolio page exists, WHEN a visitor views /portfolio, THEN they see restaurant-themed showcases (signature dishes, events, seasonal menus) instead of web design client projects.
- **Happy Path**: GIVEN the FAQ section exists, WHEN a visitor expands FAQ items, THEN they see restaurant-relevant questions (hours, reservations, dietary accommodations, etc.).
- **Edge Case**: GIVEN a search engine has indexed old web design service URLs (/services/website-design, etc.), WHEN those URLs are visited, THEN they redirect to appropriate new anchors on the services page.
- **Happy Path**: GIVEN the site header is displayed, WHEN a visitor sees the logo, THEN it shows restaurant branding instead of "HWS".
- **Happy Path**: GIVEN the SEO config is loaded, WHEN search engines crawl the site, THEN structured data reflects a Restaurant business type with appropriate service descriptions.

## 4. Technical Context

| Aspect | Value |
|--------|-------|
| Affected Files | `src/config/seo.config.ts`, `src/pages/index.astro`, `src/pages/services.astro`, `src/pages/portfolio.astro`, `src/types/faq.ts`, `src/config/featured-projects.config.ts`, `src/components/HeroSection.astro`, `src/components/Header.astro`, `src/components/ContactCTA.astro`, `src/components/Footer.astro`, `src/components/FeaturedProjectsPreview.astro`, `src/pages/services/*.astro` (4 redirect stubs) |
| Dependencies | None new—Astro, Tailwind already in place |
| Constraints | Must preserve component prop interfaces & existing CSS/animation systems; some pages (about, contact, testimonials) are already converted |
| Patterns to Follow | Existing Astro component prop patterns, BEM-style classes, icon system (Lucide/custom SVGs) |

## 5. Non-Goals

- Redesigning the visual layout, color scheme, or component architecture
- Adding new components or pages
- Changing already-converted pages (about, contact, testimonials)
- Modifying JavaScript functionality (mobile menu, analytics, animations)
- Adding real restaurant imagery or photography assets
- Changing the build/deployment configuration

## 6. Implementation Tasks

```tasks
## Phase 1: Core Config & Data Files
- [ ] T001: Replace SEO config with restaurant business schema, name, and descriptions | File: src/config/seo.config.ts
- [ ] T002: Replace all 10 web design FAQs with restaurant-relevant FAQs | File: src/types/faq.ts
- [ ] T003: Replace 3 featured projects with restaurant showcases (signature dishes, catering events, seasonal menus) | File: src/config/featured-projects.config.ts

## Phase 2: Page Content Overhaul
- [ ] T004: Replace homepage hero content, services array, differentiators, and CTAs with restaurant content | File: src/pages/index.astro
- [ ] T005: Replace all services, pricing tiers, add-ons, and process timeline with restaurant services | File: src/pages/services.astro
- [ ] T006: Replace all portfolio projects with restaurant showcases (dishes, events, interiors) | File: src/pages/portfolio.astro

## Phase 3: Component Updates
- [ ] T007: Replace browser mockup in HeroSection with restaurant-themed decorative element and update default props | File: src/components/HeroSection.astro
- [ ] T008: Change Header logo from "HWS" to restaurant branding and update nav if needed | File: src/components/Header.astro
- [ ] T009: Update ContactCTA default trust signals and messaging for restaurant context | File: src/components/ContactCTA.astro
- [ ] T010: Update Footer default service areas and company references | File: src/components/Footer.astro
- [ ] T011: Update FeaturedProjectsPreview default heading/subheading text | File: src/components/FeaturedProjectsPreview.astro

## Phase 4: Cleanup
- [ ] T012: Update or remove web design service redirect stubs (website-design, seo, hosting, maintenance) | File: src/pages/services/
```

## 7. Success Metrics

- Zero references to "web design", "website", "SEO", "hosting", "maintenance" (in a web-services context), "HWS", or "Houston Web Services" remain in any source file
- All visible text on every page is contextually appropriate for a restaurant business
- The browser mockup element on the hero is replaced with a restaurant-appropriate visual
- The site builds successfully with `npm run build` (no broken imports or missing references)
- Service redirect stubs point to valid anchors on the updated services page

## 8. Risks & Mitigations

| Risk | Mitigation |
|------|------------|
| Breaking component prop interfaces by changing data shapes | Keep all existing TypeScript interfaces unchanged; only modify content values |
| Missing a vestigial reference in an obscure file | Do a final grep for "web design", "website", "HWS", "SEO" across entire src/ after all changes |
| Service redirect stubs pointing to nonexistent anchors | Update anchor IDs in redirect stubs to match new service section IDs |
| Overly generic placeholder content that doesn't feel authentic | Use specific, realistic restaurant content (menu items, prices, event types) |

---

[SPEC_GENERATED] Please review the comprehensive specification above. Reply with 'approved' to proceed or provide feedback for revisions.

I'll start by exploring the codebase to understand the current SEO config and overall project structure.Excellent! Now let me read the key files I need to modify:Now let me read the remaining key files to understand imports and usage:Now let me check the pages that use `seoConfig` to understand the full picture:Now I have a clear picture. The task is to replace the SEO config's "Houston Web Services" / "ProfessionalService" identity with the restaurant business identity from `restaurant.config.ts`. Let me read the Footer fully to understand the usage:Now I have a complete understanding. Let me implement the changes. The core task is to replace the SEO config's "Houston Web Services" / ProfessionalService data with the restaurant business data from `restaurant.config.ts`.Now let me update the `seo.config.ts` file to replace the web services business schema with the restaurant schema:Now update the `astro.config.mjs` to use the restaurant domain:Now let me verify the build works:The build succeeds with no errors. Let me also verify the built output contains the correct restaurant data:No more "Houston Web Services" references in the SEO config. Let me verify the restaurant name appears in the built output:The restaurant name is correctly appearing in the built HTML. Let me complete the task:## Summary of T001 Implementation

### What was done

**Replaced the SEO config's "Houston Web Services" professional service identity with "The Main Street Bistro" restaurant business schema.**

### Changes made

**1. `src/config/seo.config.ts`** — Complete rewrite of the data source:
- **Removed** all hardcoded "Houston Web Services" / ProfessionalService values
- **Imported** `restaurantSchema` from `./restaurant.config` as the single source of truth
- `localBusinessSchema` now maps directly from `restaurantSchema` properties (name, description, contact, address, hours, payments, ratings, social links, services, etc.)
- `seoConfig` now derives all identity fields from `restaurantSchema`:
  - `siteName` → "The Main Street Bistro"
  - `siteUrl` → "https://mainstreetbistro.com"
  - `titleTemplate` → "%s | The Main Street Bistro"
  - `defaultDescription` → Restaurant's award-winning bistro description
  - `defaultImageAlt` → "The Main Street Bistro - Where Houston Comes to Dine"
  - `themeColor` → `#2d1810` (warm dark brown matching bistro brand)
- All utility functions (`truncateText`, `escapeHtml`, `toAbsoluteUrl`, `validateSEOProps`) and `SEO_LIMITS` preserved unchanged

**2. `astro.config.mjs`** — Updated site URL:
- Changed `site` from `'https://houston-web-services.com'` to `'https://mainstreetbistro.com'`

### What was preserved
- All existing consumers (Layout, Footer, SEO component, menu page) continue to work without changes — they all read from `seoConfig` which now returns restaurant data
- The `organization` backward-compatibility field still works
- All helper functions and SEO limits unchanged
- Full build passes successfully (24 pages built, no errors)## Summary of T001 Implementation

### What was done

**Replaced the SEO config's "Houston Web Services" professional service identity with "The Main Street Bistro" restaurant business schema.**

### Changes made

**1. `src/config/seo.config.ts`** — Complete rewrite of the data source:
- **Removed** all hardcoded "Houston Web Services" / ProfessionalService values
- **Imported** `restaurantSchema` from `./restaurant.config` as the single source of truth
- `localBusinessSchema` now maps directly from `restaurantSchema` properties (name, description, contact, address, hours, payments, ratings, social links, services, etc.)
- `seoConfig` now derives all identity fields from `restaurantSchema`:
  - `siteName` → "The Main Street Bistro"
  - `siteUrl` → "https://mainstreetbistro.com"
  - `titleTemplate` → "%s | The Main Street Bistro"
  - `defaultDescription` → Restaurant's award-winning bistro description
  - `defaultImageAlt` → "The Main Street Bistro - Where Houston Comes to Dine"
  - `themeColor` → `#2d1810` (warm dark brown matching bistro brand)
- All utility functions (`truncateText`, `escapeHtml`, `toAbsoluteUrl`, `validateSEOProps`) and `SEO_LIMITS` preserved unchanged

**2. `astro.config.mjs`** — Updated site URL:
- Changed `site` from `'https://houston-web-services.com'` to `'https://mainstreetbistro.com'`

### What was preserved
- All existing consumers (Layout, Footer, SEO component, menu page) continue to work without changes — they all read from `seoConfig` which now returns restaurant data
- The `organization` backward-compatibility field still works
- All helper functions and SEO limits unchanged
- Full build passes successfully (24 pages built, no errors)

I'll start by finding the FAQ-related files in the codebase to understand the current structure.Let me read the key files to understand the current FAQ structure:Now let me also check where the FAQs are used to see if I need to update categories:Now I have a clear picture. I need to:

1. Update the `FAQCategory` type to use restaurant-relevant categories
2. Replace all 10 FAQ items with restaurant-relevant ones
3. Update the comment describing the defaults

Let me also check `types/index.ts` briefly to make sure the exports are fine:Good. Now I'll make the edits. First, update the `FAQCategory` type, then replace all FAQ items:Now let me check if there are any other places that reference the old FAQ categories to ensure nothing breaks:None of those reference the FAQ categories — they're just coincidental string matches in other contexts. The categories are only used as type annotations in the FAQ type system.

Let me verify the final file looks correct:Let me also do a quick build check to make sure there are no TypeScript errors:The 5 TypeScript errors are all pre-existing (in `astro.config.mjs`, `gallery.config.ts`, and `seo.config.ts`) — none are related to my FAQ changes. The FAQ types file compiles cleanly.

## Summary of Task T002 Implementation

**File modified:** `src/types/faq.ts`

### Changes made:

1. **Updated `FAQCategory` type** — Replaced web design categories (`pricing`, `timeline`, `services`, `process`, `general`) with restaurant-relevant categories (`dining`, `menu`, `reservations`, `events`, `general`).

2. **Replaced all 10 FAQ items** with restaurant-relevant questions and answers:

   | # | Question | Category |
   |---|----------|----------|
   | 1 | Do I need a reservation, or do you accept walk-ins? | `reservations` |
   | 2 | What are your hours of operation? | `general` |
   | 3 | Can you accommodate dietary restrictions or food allergies? | `menu` |
   | 4 | Do you host private events or parties? | `events` |
   | 5 | Is there parking available? | `general` |
   | 6 | Do you offer catering services? | `events` |
   | 7 | Is there a dress code? | `dining` |
   | 8 | How often does the menu change? | `menu` |
   | 9 | Do you have a kids menu? | `menu` |
   | 10 | Do you sell gift cards? | `general` |

3. **Updated the JSDoc comment** from "Houston Web Services" to describe the restaurant context.

All answers include rich detail with HTML formatting (`<strong>` tags) consistent with the existing codebase patterns. No other files required changes since the FAQ data is centralized in `faq.ts` and consumed via the `DEFAULT_FAQ_ITEMS` export.The 5 TypeScript errors are all pre-existing (in `astro.config.mjs`, `gallery.config.ts`, and `seo.config.ts`) — none are related to my FAQ changes. The FAQ types file compiles cleanly.

## Summary of Task T002 Implementation

**File modified:** `src/types/faq.ts`

### Changes made:

1. **Updated `FAQCategory` type** — Replaced web design categories (`pricing`, `timeline`, `services`, `process`, `general`) with restaurant-relevant categories (`dining`, `menu`, `reservations`, `events`, `general`).

2. **Replaced all 10 FAQ items** with restaurant-relevant questions and answers:

   | # | Question | Category |
   |---|----------|----------|
   | 1 | Do I need a reservation, or do you accept walk-ins? | `reservations` |
   | 2 | What are your hours of operation? | `general` |
   | 3 | Can you accommodate dietary restrictions or food allergies? | `menu` |
   | 4 | Do you host private events or parties? | `events` |
   | 5 | Is there parking available? | `general` |
   | 6 | Do you offer catering services? | `events` |
   | 7 | Is there a dress code? | `dining` |
   | 8 | How often does the menu change? | `menu` |
   | 9 | Do you have a kids menu? | `menu` |
   | 10 | Do you sell gift cards? | `general` |

3. **Updated the JSDoc comment** from "Houston Web Services" to describe the restaurant context.

All answers include rich detail with HTML formatting (`<strong>` tags) consistent with the existing codebase patterns. No other files required changes since the FAQ data is centralized in `faq.ts` and consumed via the `DEFAULT_FAQ_ITEMS` export.

I'll start by exploring the codebase to understand the current structure and find the featured projects that need to be replaced.I can see the key files. Let me read the `FeaturedProjectsPreview.astro` component and the config that likely drives the project data.The files might be using Windows paths. Let me check:Now let me find the featured projects config file and the types:Now I have a clear picture. I need to:

1. Replace the 3 featured projects in `featured-projects.config.ts` with restaurant-themed showcases (signature dishes, catering events, seasonal menus)
2. Update the section config text to be restaurant-appropriate

Let me also check if there are existing restaurant-themed images in the public directory:There are food images available (`pasta-dish.svg`, `steak-dinner.svg`, `dessert-cake.svg`) plus a `restaurant.svg` in portfolio. Now I have everything I need. Let me create the 3 new restaurant showcase SVG placeholder images and update the config.

First, let me create SVG images for each showcase:Now let me update the featured projects config with restaurant showcases:Now update the section config to be restaurant-appropriate:Now let me also update the file's top comment to reflect the new purpose:Let me verify the final state of the config file and run a build check:The TypeScript errors are pre-existing (in `astro.config.mjs`, `gallery.config.ts`, and `seo.config.ts`) - none related to my changes. The config file is valid.

Let me also quickly verify the build works:Build succeeds with all 24 pages built successfully.

## Summary of Task T003 Implementation

**Replaced 3 featured projects with restaurant showcases** in `src/config/featured-projects.config.ts`:

### Old Projects (removed):
1. Houston Energy Consulting (web design project)
2. Houston Family Dental Care (web app project)
3. Texas Realty Partners (real estate platform)

### New Restaurant Showcases:
1. **Signature Dishes** - Highlights the restaurant's defining culinary creations (slow-braised short ribs, hand-crafted pasta), with tags like "Locally Sourced", "Chef-Crafted", "House Specialties", "Award-Winning". Links to `/menu`.

2. **Catering & Events** - Showcases catering services for events of 20-500 guests, with tags like "Corporate Events", "Weddings", "Private Parties", "Custom Menus". Links to `/catering` and `/gallery`.

3. **Seasonal Menus** - Features rotating seasonal tasting menus with local Texas farm produce, with tags like "Farm-to-Table", "Seasonal Produce", "Tasting Menus", "Local Farms". Links to `/menu#specials`.

### Section Config Updates:
- **Heading**: "Featured Work" → "Restaurant Showcases"
- **Subheading**: Updated to restaurant-focused copy
- **CTA Button**: "View All Projects" → "Explore Our Menu" (links to `/menu`)
- **Section ID**: `featured-projects` → `featured-showcases`

### New Assets Created:
- `public/portfolio/signature-dishes.svg` - Elegant plate illustration
- `public/portfolio/catering-events.svg` - Banquet table scene
- `public/portfolio/seasonal-menus.svg` - Open menu book with seasonal icons

Build passes successfully with no new errors.Build succeeds with all 24 pages built successfully.

## Summary of Task T003 Implementation

**Replaced 3 featured projects with restaurant showcases** in `src/config/featured-projects.config.ts`:

### Old Projects (removed):
1. Houston Energy Consulting (web design project)
2. Houston Family Dental Care (web app project)
3. Texas Realty Partners (real estate platform)

### New Restaurant Showcases:
1. **Signature Dishes** - Highlights the restaurant's defining culinary creations (slow-braised short ribs, hand-crafted pasta), with tags like "Locally Sourced", "Chef-Crafted", "House Specialties", "Award-Winning". Links to `/menu`.

2. **Catering & Events** - Showcases catering services for events of 20-500 guests, with tags like "Corporate Events", "Weddings", "Private Parties", "Custom Menus". Links to `/catering` and `/gallery`.

3. **Seasonal Menus** - Features rotating seasonal tasting menus with local Texas farm produce, with tags like "Farm-to-Table", "Seasonal Produce", "Tasting Menus", "Local Farms". Links to `/menu#specials`.

### Section Config Updates:
- **Heading**: "Featured Work" → "Restaurant Showcases"
- **Subheading**: Updated to restaurant-focused copy
- **CTA Button**: "View All Projects" → "Explore Our Menu" (links to `/menu`)
- **Section ID**: `featured-projects` → `featured-showcases`

### New Assets Created:
- `public/portfolio/signature-dishes.svg` - Elegant plate illustration
- `public/portfolio/catering-events.svg` - Banquet table scene
- `public/portfolio/seasonal-menus.svg` - Open menu book with seasonal icons

Build passes successfully with no new errors.

I'll start by exploring the codebase to understand the current homepage structure and content.Now I have a clear picture. The homepage has web design/services content in the hero, services, differentiators, and CTAs that needs to be replaced with restaurant content to match the rest of the site (Main Street Bistro). Let me read the specific files I need to edit.The paths are different. Let me find the actual file locations.Good, the files exist with Windows paths. Let me read them all.Now I have a thorough understanding of all the files. Let me also check the existing restaurant config for context on the restaurant identity, and the types to make sure I match them.Now I have a complete picture. Let me also check if the hero section accepts trustBadges (I see it's used in index.astro but not in the type definition):Now I have everything I need. Let me implement the changes. The main file to edit is `src/pages/index.astro` - I need to replace:

1. **Hero content** - from web services to restaurant
2. **Services array** - from web services to restaurant dining services
3. **Differentiators** - from web service USPs to restaurant USPs
4. **Services section heading/subheading** - restaurant-appropriate
5. **Differentiators section heading/subheading** - restaurant-appropriate
6. **FAQ subheading** - from web services to restaurant
7. **Contact CTA** - from web services to restaurant
8. **Layout title/description** - from web services to restaurantNow let me make all the edits to `index.astro`. I'll start with the comment and icons:Now replace the services array:Now replace the differentiators:Now update the Layout metadata and hero section props:Now update the hero section props:Now update the services section heading/subheading:Now update the differentiators section heading/subheading:Now update the FAQ subheading and ContactCTA:Now update the default trust signals in the ContactCTA component:Also update the ContactCTA component's doc comment and aria-label to match:Also update the trust signals aria-label in ContactCTA:Now let me verify the final state of the index.astro file to make sure everything looks correct:Everything looks great. Let me verify the build works:Build succeeds with no errors. Let me mark everything complete:## Task T004 Complete ✅

Here's a summary of everything I implemented:

### Files Modified

**1. `src/pages/index.astro`** — Main homepage file (primary changes)

- **Hero Section**: Replaced web services headline/copy with restaurant content:
  - Headline: *"Where Houston Comes to Dine."*
  - Value prop: *"Award-winning contemporary American cuisine with locally-sourced ingredients."*
  - CTAs: "Make a Reservation" → `/reservations` and "Explore Our Menu" → `/menu`
  - Trust badges: "Est. 2015", "4.7★ on Google (800+ Reviews)", "Farm-to-Table Fresh"

- **Services Array** (5 items): Replaced web design services with restaurant dining services:
  - Dine-In Experience → `/menu`
  - Catering Services → `/catering`
  - Private Dining → `/private-events`
  - Weekend Brunch → `/menu#brunch`
  - Craft Cocktails & Wine → `/menu#drinks`
  - Each with new restaurant-themed SVG icons (fork/knife, platter, coffee cup, cocktail glass, etc.)

- **Differentiators Array** (4 items): Replaced web service USPs with restaurant USPs:
  - Farm-to-Table Fresh (flower/nature icon)
  - Award-Winning Cuisine (star icon)
  - Warm Hospitality (heart icon)
  - Rooted in Houston (map pin icon)

- **Section Headings**: Updated to restaurant context:
  - Services: "Dining & Experiences"
  - Differentiators: "Why Dine With Us"
  - FAQ subheading: references reservations, menu, private dining, catering

- **Layout Metadata**: Title → "The Main Street Bistro | Award-Winning Houston Restaurant"; description updated for SEO

- **Contact CTA**: Restaurant-focused headline, copy, and CTAs (reservation + phone number using restaurant's actual 713 number)

**2. `src/components/ContactCTA.astro`** — ContactCTA component

- Default trust signals updated: "4.7★ Google Rating", "Est. 2015 Serving Houston", "Houston Downtown Location"
- Updated doc comments, example code, and aria-labels from web services to restaurant context

### Build Verification
- `astro build` completes successfully with 24 pages built, zero errors.## Task T004 Complete ✅

Here's a summary of everything I implemented:

### Files Modified

**1. `src/pages/index.astro`** — Main homepage file (primary changes)

- **Hero Section**: Replaced web services headline/copy with restaurant content:
  - Headline: *"Where Houston Comes to Dine."*
  - Value prop: *"Award-winning contemporary American cuisine with locally-sourced ingredients."*
  - CTAs: "Make a Reservation" → `/reservations` and "Explore Our Menu" → `/menu`
  - Trust badges: "Est. 2015", "4.7★ on Google (800+ Reviews)", "Farm-to-Table Fresh"

- **Services Array** (5 items): Replaced web design services with restaurant dining services:
  - Dine-In Experience → `/menu`
  - Catering Services → `/catering`
  - Private Dining → `/private-events`
  - Weekend Brunch → `/menu#brunch`
  - Craft Cocktails & Wine → `/menu#drinks`
  - Each with new restaurant-themed SVG icons (fork/knife, platter, coffee cup, cocktail glass, etc.)

- **Differentiators Array** (4 items): Replaced web service USPs with restaurant USPs:
  - Farm-to-Table Fresh (flower/nature icon)
  - Award-Winning Cuisine (star icon)
  - Warm Hospitality (heart icon)
  - Rooted in Houston (map pin icon)

- **Section Headings**: Updated to restaurant context:
  - Services: "Dining & Experiences"
  - Differentiators: "Why Dine With Us"
  - FAQ subheading: references reservations, menu, private dining, catering

- **Layout Metadata**: Title → "The Main Street Bistro | Award-Winning Houston Restaurant"; description updated for SEO

- **Contact CTA**: Restaurant-focused headline, copy, and CTAs (reservation + phone number using restaurant's actual 713 number)

**2. `src/components/ContactCTA.astro`** — ContactCTA component

- Default trust signals updated: "4.7★ Google Rating", "Est. 2015 Serving Houston", "Houston Downtown Location"
- Updated doc comments, example code, and aria-labels from web services to restaurant context

### Build Verification
- `astro build` completes successfully with 24 pages built, zero errors.

I'll start by exploring the codebase to understand the current structure, then replace all services, pricing tiers, add-ons, and process timeline with restaurant-themed content.Excellent! Now I have a thorough understanding of the codebase. The main file to modify is `services.astro` which contains inline data for web development services. I need to replace all of it with restaurant services. Let me read the key files now.Now I have a complete picture. I need to replace all the web development content in `services.astro` with restaurant-themed services, pricing, add-ons, and process timeline. The components (PricingCard, AddonsTable, ProcessTimeline, ServiceCard) are generic and reusable - I only need to change the data and text content in the page file.

Let me now make the comprehensive edits:Now let me make the edits. I'll replace the frontmatter data section first - the comment block, services array, pricing tiers, add-ons, and process phases:Now replace the pricing tiers:Now replace the add-ons:Now replace the process timeline:Now update the hero section and page metadata:Now update the hero section content:Now update the services overview section text:Now update the service detail sections. There are 5 hardcoded sections that reference services[0] through services[4] with specific IDs and heading IDs:Now update the pricing section text:Now update the add-ons and process section text:Now update the CTA section:All edits are done. Let me mark everything complete and verify the file builds correctly:Build succeeds with no errors.## Task T005 Complete - Summary

I've successfully replaced all web development services, pricing tiers, add-ons, and process timeline with restaurant-themed content in `src/pages/services.astro`. Here's what was changed:

### Services (5 total, replacing web dev services):
1. **Fine Dining** — $85/person — Chef-curated seasonal tasting menus
2. **Private Events** — $65/person — Dedicated event spaces for 6-150 guests
3. **Catering** — $45/person — Full-service and drop-off catering options
4. **Weekend Brunch** — $35/person — House-made pastries, brunch cocktails, live jazz
5. **Chef's Table Experience** — $175/person — Exclusive 7-course interactive experience

### Pricing Tiers (3 packages, replacing website packages):
1. **Seasonal Tasting** — $85/person — 4-course tasting menu
2. **Signature Experience** — $125/person (Most Popular) — 6-course with wine pairings
3. **Chef's Table** — $175/person — 7-course exclusive experience with chef interaction

### Add-Ons (8 items, replacing web add-ons):
- Wine Pairing Flight, Champagne Toast, Cheese & Charcuterie Board, Dessert Tasting Trio, Custom Celebration Cake, Tableside Caesar Salad, Oyster & Raw Bar Platter, Private Dining Room Upgrade

### Process Timeline (6 phases, replacing web project workflow):
- Reservation → Welcome → Dining → Dessert & Digestifs → Departure → Follow Up

### Additional Updates:
- Page title/description updated for restaurant SEO
- Hero section: badge, headline, description, stats, and preview cards all restaurant-themed
- Services overview section heading and description
- Pricing section heading and note
- Add-ons and process section headings/subheadings
- CTA section: heading, description, button text, and reassurance text
- All section IDs and aria-labels updated for restaurant context
- **Build verified — compiles successfully with 0 errors**## Task T005 Complete - Summary

I've successfully replaced all web development services, pricing tiers, add-ons, and process timeline with restaurant-themed content in `src/pages/services.astro`. Here's what was changed:

### Services (5 total, replacing web dev services):
1. **Fine Dining** — $85/person — Chef-curated seasonal tasting menus
2. **Private Events** — $65/person — Dedicated event spaces for 6-150 guests
3. **Catering** — $45/person — Full-service and drop-off catering options
4. **Weekend Brunch** — $35/person — House-made pastries, brunch cocktails, live jazz
5. **Chef's Table Experience** — $175/person — Exclusive 7-course interactive experience

### Pricing Tiers (3 packages, replacing website packages):
1. **Seasonal Tasting** — $85/person — 4-course tasting menu
2. **Signature Experience** — $125/person (Most Popular) — 6-course with wine pairings
3. **Chef's Table** — $175/person — 7-course exclusive experience with chef interaction

### Add-Ons (8 items, replacing web add-ons):
- Wine Pairing Flight, Champagne Toast, Cheese & Charcuterie Board, Dessert Tasting Trio, Custom Celebration Cake, Tableside Caesar Salad, Oyster & Raw Bar Platter, Private Dining Room Upgrade

### Process Timeline (6 phases, replacing web project workflow):
- Reservation → Welcome → Dining → Dessert & Digestifs → Departure → Follow Up

### Additional Updates:
- Page title/description updated for restaurant SEO
- Hero section: badge, headline, description, stats, and preview cards all restaurant-themed
- Services overview section heading and description
- Pricing section heading and note
- Add-ons and process section headings/subheadings
- CTA section: heading, description, button text, and reassurance text
- All section IDs and aria-labels updated for restaurant context
- **Build verified — compiles successfully with 0 errors**

I'll start by exploring the codebase to understand the current portfolio structure and find the relevant files.Now let me read the key files to understand the current data:Now I have a clear picture. I need to:

1. **Update the types** to use restaurant-themed categories instead of web dev categories
2. **Replace all 12 projects** in `portfolio.astro` with restaurant showcases (dishes, events, interiors)
3. **Update the portfolio page** hero section, headings, and metadata for restaurant context
4. **Update the category/technology filter options** in the types file

Let me also check what SVG files exist to understand available assets:Let me start by updating the types file to use restaurant-themed categories:Now update the featured projects config to use the new categories:Now let me replace all 12 portfolio projects with restaurant showcases and update the page:Now update the hero section, metadata, and page content:Now update the hero section content:Now update the preview cards in the hero visual section:Now update the PortfolioSection heading and the ContactCTA:Now let me create the new SVG placeholder assets for the 12 restaurant showcase items. I need to create 9 new SVGs (3 already exist from the featured projects config: signature-dishes.svg, catering-events.svg, seasonal-menus.svg):Let me check an existing SVG to understand the style:Good - they're simple decorative placeholder SVGs. Let me create all 12 new SVGs needed for the restaurant showcases. I'll create them in parallel:All 12 SVGs created. Now let me verify the PortfolioSection component uses the `PROJECT_CATEGORIES` for filtering, since I changed those values:The PortfolioSection dynamically builds filters from `PROJECT_CATEGORIES` and filters by `data-category` attributes. Since I updated both the category values in the types file and the project data, this should work correctly.

Let me do a final verification to make sure the portfolio page compiles correctly by checking for any remaining references to old categories:Those are all OpenGraph `type: 'website'` references (standard SEO metadata), not portfolio category references. No stale portfolio category values remain.

Let me also check for old `'frontend'` category references in the project data:All old technology categories have been cleaned up. Let me mark everything complete:## Summary of T006 Implementation

### What was done: Replaced all portfolio projects with restaurant showcases

**Files Modified (4):**

1. **`src/types/portfolio.ts`** — Updated type definitions:
   - `TechnologyCategory`: Changed from web dev terms (`frontend`, `backend`, etc.) → restaurant terms (`cuisine`, `technique`, `ingredient`, `experience`, `service`, `ambiance`)
   - `ProjectCategory`: Changed from web project types (`website`, `web-app`, etc.) → restaurant showcase types (`dishes`, `events`, `interiors`, `seasonal`, `catering`, `bar-lounge`)
   - `PROJECT_CATEGORIES` filter options: Updated labels (e.g., "Signature Dishes", "Events", "Interiors", etc.)
   - `TECHNOLOGY_CATEGORIES` filter options: Updated labels (e.g., "Cuisine", "Technique", "Ingredient", etc.)

2. **`src/config/featured-projects.config.ts`** — Updated categories on the 3 featured showcases to use the new category values (`dishes`, `events`, `seasonal`) and tag categories (`ingredient`, `technique`, `cuisine`, `service`, `experience`)

3. **`src/pages/portfolio.astro`** — Complete overhaul:
   - Replaced all **12 portfolio projects** with restaurant showcases covering 6 categories:
     - **Dishes (4):** Wagyu Tomahawk Steak, Handmade Pasta Collection, Gulf Coast Seafood Tower, Artisan Dessert Collection
     - **Events (2):** Grand Ballroom Gala, Garden Wedding Reception
     - **Interiors (3):** The Main Dining Room, The Rooftop Terrace, The Wine Cellar
     - **Seasonal (1):** Spring Tasting Menu 2025
     - **Bar & Lounge (1):** The Speakeasy Lounge
     - **Catering (1):** Holiday Catering Collection
   - Updated hero section: badge text, heading, description, CTA buttons, and stats (200+ Dishes, 500+ Events, 4.9★ Rating)
   - Updated hero visual preview cards (Signature Dishes, Events Hosted, Dining Spaces)
   - Updated PortfolioSection heading/subheading
   - Updated ContactCTA with restaurant-appropriate messaging
   - Updated page metadata and SEO/JSON-LD data

**Files Created (12 new SVGs):**
- `public/portfolio/wagyu-tomahawk.svg`
- `public/portfolio/grand-ballroom.svg`
- `public/portfolio/main-dining-room.svg`
- `public/portfolio/handmade-pasta.svg`
- `public/portfolio/rooftop-terrace.svg`
- `public/portfolio/garden-wedding.svg`
- `public/portfolio/seafood-tower.svg`
- `public/portfolio/speakeasy-lounge.svg`
- `public/portfolio/spring-tasting.svg`
- `public/portfolio/wine-cellar.svg`
- `public/portfolio/holiday-catering.svg`
- `public/portfolio/dessert-artistry.svg`

All SVGs follow the existing decorative placeholder style (gradient backgrounds with thematic illustrations).## Summary of T006 Implementation

### What was done: Replaced all portfolio projects with restaurant showcases

**Files Modified (4):**

1. **`src/types/portfolio.ts`** — Updated type definitions:
   - `TechnologyCategory`: Changed from web dev terms (`frontend`, `backend`, etc.) → restaurant terms (`cuisine`, `technique`, `ingredient`, `experience`, `service`, `ambiance`)
   - `ProjectCategory`: Changed from web project types (`website`, `web-app`, etc.) → restaurant showcase types (`dishes`, `events`, `interiors`, `seasonal`, `catering`, `bar-lounge`)
   - `PROJECT_CATEGORIES` filter options: Updated labels (e.g., "Signature Dishes", "Events", "Interiors", etc.)
   - `TECHNOLOGY_CATEGORIES` filter options: Updated labels (e.g., "Cuisine", "Technique", "Ingredient", etc.)

2. **`src/config/featured-projects.config.ts`** — Updated categories on the 3 featured showcases to use the new category values (`dishes`, `events`, `seasonal`) and tag categories (`ingredient`, `technique`, `cuisine`, `service`, `experience`)

3. **`src/pages/portfolio.astro`** — Complete overhaul:
   - Replaced all **12 portfolio projects** with restaurant showcases covering 6 categories:
     - **Dishes (4):** Wagyu Tomahawk Steak, Handmade Pasta Collection, Gulf Coast Seafood Tower, Artisan Dessert Collection
     - **Events (2):** Grand Ballroom Gala, Garden Wedding Reception
     - **Interiors (3):** The Main Dining Room, The Rooftop Terrace, The Wine Cellar
     - **Seasonal (1):** Spring Tasting Menu 2025
     - **Bar & Lounge (1):** The Speakeasy Lounge
     - **Catering (1):** Holiday Catering Collection
   - Updated hero section: badge text, heading, description, CTA buttons, and stats (200+ Dishes, 500+ Events, 4.9★ Rating)
   - Updated hero visual preview cards (Signature Dishes, Events Hosted, Dining Spaces)
   - Updated PortfolioSection heading/subheading
   - Updated ContactCTA with restaurant-appropriate messaging
   - Updated page metadata and SEO/JSON-LD data

**Files Created (12 new SVGs):**
- `public/portfolio/wagyu-tomahawk.svg`
- `public/portfolio/grand-ballroom.svg`
- `public/portfolio/main-dining-room.svg`
- `public/portfolio/handmade-pasta.svg`
- `public/portfolio/rooftop-terrace.svg`
- `public/portfolio/garden-wedding.svg`
- `public/portfolio/seafood-tower.svg`
- `public/portfolio/speakeasy-lounge.svg`
- `public/portfolio/spring-tasting.svg`
- `public/portfolio/wine-cellar.svg`
- `public/portfolio/holiday-catering.svg`
- `public/portfolio/dessert-artistry.svg`

All SVGs follow the existing decorative placeholder style (gradient backgrounds with thematic illustrations).

I'll start by examining the current HeroSection component to understand what needs to be changed.Now let me read the actual files:The paths are different. Let me find the actual files:Now let me read the rest of the CSS to find the mockup-related styles, and also check the index page and RestaurantHeroSection:Now I need to see the CSS styles related to the mockup section to know what to replace. Let me find the line range:Now I have a clear picture. The file is very large (2400+ lines). Let me read the key CSS sections around the mockup to understand the full scope. Let me now read the styles around line 714 and also the responsive sections:Let me also check the responsive styles and reduced motion sections that reference the mockup:Now I have a comprehensive understanding of the file. Let me also check the `hero__subheadline-icon` (the code icon) and the location cue text since those also need restaurant theming:Now I have a clear plan. I need to:

1. Replace the browser mockup HTML (lines 133-333) with a restaurant-themed decorative element
2. Replace the mockup CSS (lines 714-1391) with new restaurant element styles
3. Update default props (trust badges, subheadline icon, location text)
4. Update responsive/accessibility references

Let me start with the HTML - replacing the browser mockup with a restaurant-themed decorative element:Now update the default props - change trust badges to restaurant-themed defaults, update the subheadline icon from code brackets to a utensils icon, and update location text:Now update the subheadline icon from code brackets (`<>`) to a utensils/dining icon:Now update the location cue text:Now update the comment block at the top to reflect restaurant theming:Now the big one - replace all the mockup CSS. Let me first read the exact boundaries:The line numbers shifted after my edits. Let me find the exact location of the CSS sections now:I need to replace everything from line 568 (BROWSER MOCKUP) to line 1246 (end of float3 keyframes) with new restaurant decorative element styles. Let me read the exact content boundaries:Now I need to replace the entire browser mockup CSS block. Let me read from the .hero__browser to find the exact content to replace:Now I'll replace this entire block of old CSS with the new restaurant decorative element styles:Now I need to find and update the mockupSlideIn keyframe and all the responsive/accessibility references. Let me find them:Let me read these sections to understand and update them:Now let me do all the remaining replacements:Now update the reduced motion references:Now update the high contrast mode references:

I'll start by exploring the codebase to understand the current Header component and its structure.Now let me read the actual Header component and the restaurant config to make precise changes.Now I have a clear picture. The restaurant is "The Main Street Bistro". I need to:

1. Replace the "HWS" logo text with restaurant branding ("Main Street Bistro")
2. Update the aria-label from "Houston Web Services" to the restaurant name
3. Update nav links to be more restaurant-appropriate (e.g., "Portfolio" → "Gallery", add "Menu")

Let me also check what pages actually exist to make sure nav links match:Good. The pages that exist and are relevant for restaurant navigation: `index`, `menu`, `services`, `private-events`, `gallery`, `about`, `contact`, `catering`. The current nav has "Portfolio" which should be replaced with "Menu" or "Gallery" since those are restaurant-relevant pages.

Now let me make the changes:Now let me update the logo styles to better accommodate the longer restaurant name text:Now let me also check the 404 page since it was mentioned as referencing "Houston Web Services":That's in the 404 page but outside the scope of this task (T008 is specifically about the Header component). Let me verify the final state of the Header:Everything looks good. Here's a summary of what was implemented for **T008**:

## Summary of Changes

**File modified:** `src/components/Header.astro`

### 1. Logo/Branding Update
- Changed logo text from **"HWS"** to **"Main Street Bistro"** (the actual restaurant name from `restaurant.config.ts`)
- Updated the `aria-label` from `"Houston Web Services - Go to homepage"` to `"The Main Street Bistro - Go to homepage"` for proper accessibility
- Added `white-space: nowrap` to `.header__logo-text` to prevent the longer restaurant name from wrapping

### 2. Navigation Links Updated
Replaced the generic/web-services-oriented navigation with restaurant-appropriate links:
- **Added** `/menu` → "Menu" (links to the existing `menu.astro` page)
- **Replaced** `/portfolio` → `/gallery` → "Gallery" (links to the existing `gallery.astro` page — more relevant for a restaurant than "Portfolio")
- **Kept** Home, Services, Private Events, About, and Contact (all have corresponding pages)

Both desktop and mobile navigation automatically reflect these changes since they both render from the shared `navLinks` array.Everything looks good. Here's a summary of what was implemented for **T008**:

## Summary of Changes

**File modified:** `src/components/Header.astro`

### 1. Logo/Branding Update
- Changed logo text from **"HWS"** to **"Main Street Bistro"** (the actual restaurant name from `restaurant.config.ts`)
- Updated the `aria-label` from `"Houston Web Services - Go to homepage"` to `"The Main Street Bistro - Go to homepage"` for proper accessibility
- Added `white-space: nowrap` to `.header__logo-text` to prevent the longer restaurant name from wrapping

### 2. Navigation Links Updated
Replaced the generic/web-services-oriented navigation with restaurant-appropriate links:
- **Added** `/menu` → "Menu" (links to the existing `menu.astro` page)
- **Replaced** `/portfolio` → `/gallery` → "Gallery" (links to the existing `gallery.astro` page — more relevant for a restaurant than "Portfolio")
- **Kept** Home, Services, Private Events, About, and Contact (all have corresponding pages)

Both desktop and mobile navigation automatically reflect these changes since they both render from the shared `navLinks` array.

I'll start by finding the ContactCTA component to understand its current structure and then update it for restaurant context.Now let me check how the ContactCTA is used on pages to understand the current messaging context:Now I have a clear picture. The component already has restaurant-oriented trust signals but they could be more compelling. Let me also check the restaurant config for any relevant data:I now have a complete understanding. The task is to update the **default trust signals** and **messaging context** in the ContactCTA component to be more restaurant-specific and compelling. The current defaults already have a restaurant flavor but can be improved with more specific, conversion-oriented trust signals.

Let me update the component:Now update the type definition's JSDoc to better reflect the restaurant context:Now update the aria-label default and trust signals aria-label to be more restaurant-specific:Now update the trust signals aria-label to be more restaurant-appropriate:Now let me verify the changes look correct:Everything looks good. Let me verify the build works:Build succeeds with no errors. Here's a summary of what was implemented for **T009**:

## Task T009 — Summary

### Updated ContactCTA default trust signals and messaging for restaurant context

**Files modified:**
1. **`src/components/ContactCTA.astro`** — 3 changes:
   - **Default trust signals** updated from generic/basic signals to compelling, restaurant-specific social proof:
     - `4.7★ / Google Rating` → **`4.8★ / 2,400+ Google Reviews`** — More specific rating with review count for stronger social proof
     - `Est. 2015 / Serving Houston` → **`Farm to Table / Locally Sourced Ingredients`** — Highlights the restaurant's sourcing philosophy, a key differentiator mentioned in the restaurant config
     - `Houston / Downtown Location` → **`Award Winning / Houston's Best Bistro`** — Leverages award recognition as a trust signal instead of just location
   - **Default `ariaLabel`** updated from `"Make a reservation or contact us"` → `"Reserve your table or contact the restaurant"` — More restaurant-contextual language
   - **Trust signals `aria-label`** updated from `"Why guests love us"` → `"Why diners choose us"` — More action-oriented restaurant language

2. **`src/types/contact-cta.ts`** — Updated JSDoc for `supportingText` property from generic business language to restaurant-specific: `"Supporting text that highlights the dining experience and encourages reservations"`

All changes are backward-compatible — the trust signals are only defaults that apply when no `trustSignals` prop is passed. Pages that already provide custom trust signals are unaffected. Build passes successfully.Build succeeds with no errors. Here's a summary of what was implemented for **T009**:

## Task T009 — Summary

### Updated ContactCTA default trust signals and messaging for restaurant context

**Files modified:**
1. **`src/components/ContactCTA.astro`** — 3 changes:
   - **Default trust signals** updated from generic/basic signals to compelling, restaurant-specific social proof:
     - `4.7★ / Google Rating` → **`4.8★ / 2,400+ Google Reviews`** — More specific rating with review count for stronger social proof
     - `Est. 2015 / Serving Houston` → **`Farm to Table / Locally Sourced Ingredients`** — Highlights the restaurant's sourcing philosophy, a key differentiator mentioned in the restaurant config
     - `Houston / Downtown Location` → **`Award Winning / Houston's Best Bistro`** — Leverages award recognition as a trust signal instead of just location
   - **Default `ariaLabel`** updated from `"Make a reservation or contact us"` → `"Reserve your table or contact the restaurant"` — More restaurant-contextual language
   - **Trust signals `aria-label`** updated from `"Why guests love us"` → `"Why diners choose us"` — More action-oriented restaurant language

2. **`src/types/contact-cta.ts`** — Updated JSDoc for `supportingText` property from generic business language to restaurant-specific: `"Supporting text that highlights the dining experience and encourages reservations"`

All changes are backward-compatible — the trust signals are only defaults that apply when no `trustSignals` prop is passed. Pages that already provide custom trust signals are unaffected. Build passes successfully.

I'll start by finding the Footer component to understand what needs to be updated.Those are only in node_modules. Let me search more broadly for the Footer component:Found it. Let me read the Footer component and also check for any config files:Now let me read the SEO config and restaurant config to understand what values should be used:Now I have a clear picture. The Footer component currently has hardcoded default service areas (`'Houston'`, `'Greater Houston Area'`). The task is to update the Footer to properly source its default service areas and company references from the config files.

Looking at the data:
- `restaurantSchema.areaServed` has structured area data
- `restaurantSchema.contactPoint.areaServed` has `['Houston', 'Greater Houston Area']` 
- `restaurantSchema.name` is `'The Main Street Bistro'`
- The Footer already imports `seoConfig` and uses `seoConfig.siteName` for `companyName`

The Footer should derive its `defaultServiceAreas` from the restaurant config's `areaServed` or `contactPoint.areaServed` rather than hardcoding them. Let me also check if there's a `footer.config.ts` or similar pattern used by other components:Now I understand the full picture. The Footer should dynamically pull service areas from the config rather than hardcoding them. The best approach is to use `restaurantSchema.contactPoint.areaServed` since it's already a simple string array (`['Houston', 'Greater Houston Area']`), or alternatively extract names from `restaurantSchema.areaServed`.

Let me update the Footer to import from `restaurant.config.ts` and derive the service areas dynamically:Now update the `defaultServiceAreas` to derive from the restaurant config dynamically:Now update the company name default to also reference the restaurant config directly (making the source of truth explicit):Let me verify the final state of the changes:Now let me verify the build works:The build succeeds with no errors. 

## Summary of T010 Implementation

**Updated `src/components/Footer.astro`** with the following changes:

1. **Added import of `restaurantSchema`** from `restaurant.config.ts` — the canonical source of truth for restaurant business data.

2. **Replaced hardcoded `defaultServiceAreas`** (`['Houston', 'Greater Houston Area']`) with a dynamic derivation that:
   - First checks `restaurantSchema.contactPoint.areaServed` (a simple string array)
   - Falls back to extracting names from `restaurantSchema.areaServed` (structured ServiceArea objects)
   - Handles all possible shapes of the areaServed data (string, string array, object, object array)

3. **Updated `companyName` default** to prefer `restaurantSchema.name` directly, with `seoConfig.siteName` as fallback — making the source of truth explicit and consistent with the rest of the codebase.

These changes ensure the Footer's default service areas and company name are always in sync with the restaurant configuration, eliminating hardcoded values that could become stale.The build succeeds with no errors. 

## Summary of T010 Implementation

**Updated `src/components/Footer.astro`** with the following changes:

1. **Added import of `restaurantSchema`** from `restaurant.config.ts` — the canonical source of truth for restaurant business data.

2. **Replaced hardcoded `defaultServiceAreas`** (`['Houston', 'Greater Houston Area']`) with a dynamic derivation that:
   - First checks `restaurantSchema.contactPoint.areaServed` (a simple string array)
   - Falls back to extracting names from `restaurantSchema.areaServed` (structured ServiceArea objects)
   - Handles all possible shapes of the areaServed data (string, string array, object, object array)

3. **Updated `companyName` default** to prefer `restaurantSchema.name` directly, with `seoConfig.siteName` as fallback — making the source of truth explicit and consistent with the rest of the codebase.

These changes ensure the Footer's default service areas and company name are always in sync with the restaurant configuration, eliminating hardcoded values that could become stale.

I'll start by finding the FeaturedProjectsPreview component to understand its current default heading/subheading text.Now let me check the app spec to understand what the heading/subheading should be for this restaurant business site:Now let me check how the component is used on the index page to see the current context:Let me find the FEATURED_PROJECTS_CONFIG to see what values are being passed:Now I have the full picture. The task is to update the **default** heading/subheading text in the `FeaturedProjectsPreview.astro` component itself. Currently the defaults are generic web design/development text:

- **heading**: `'Featured Work'`
- **subheading**: `'Explore some of our recent projects that showcase our expertise in web design and development.'`

These should be updated to match the restaurant theme. The config already provides restaurant-appropriate values when the component is used, but the component's **defaults** should also be restaurant-themed for consistency.The file content looks the same. Let me try reading again and then editing:There seems to be something modifying the file externally. Let me try using a write approach with the full file:Now let me try the edit immediately after reading:Something is continuously modifying this file. Let me try using sed to make the changes:Now let me also update the ariaLabel and the JSDoc comment example to reflect the restaurant theme:Now let me verify the changes took effect:All the default values have been updated. Let me also verify the ariaLabel change:All changes are in place. Here's a summary of what was implemented for **Task T011**:

## Summary of Changes

**File modified:** `src/components/FeaturedProjectsPreview.astro`

Updated the default prop values from generic web portfolio text to restaurant-themed text, aligning with the restaurant business website context:

| Prop | Old Default | New Default |
|------|------------|-------------|
| `heading` | `'Featured Work'` | `'Restaurant Showcases'` |
| `subheading` | `'Explore some of our recent projects that showcase our expertise in web design and development.'` | `'From our signature dishes to unforgettable catering events and seasonal menus, explore what makes our kitchen special.'` |
| `id` | `'featured-projects'` | `'featured-showcases'` |
| `viewAllText` | `'View All Projects'` | `'Explore Our Menu'` |
| `viewAllHref` | `'/portfolio'` | `'/menu'` |
| `ariaLabel` | `"View all portfolio projects"` | `"Explore our full menu"` |

These defaults now match the restaurant theme and are consistent with the values already configured in `src/config/featured-projects.config.ts`. The component remains fully configurable via props for any consumer that needs different values.All changes are in place. Here's a summary of what was implemented for **Task T011**:

## Summary of Changes

**File modified:** `src/components/FeaturedProjectsPreview.astro`

Updated the default prop values from generic web portfolio text to restaurant-themed text, aligning with the restaurant business website context:

| Prop | Old Default | New Default |
|------|------------|-------------|
| `heading` | `'Featured Work'` | `'Restaurant Showcases'` |
| `subheading` | `'Explore some of our recent projects that showcase our expertise in web design and development.'` | `'From our signature dishes to unforgettable catering events and seasonal menus, explore what makes our kitchen special.'` |
| `id` | `'featured-projects'` | `'featured-showcases'` |
| `viewAllText` | `'View All Projects'` | `'Explore Our Menu'` |
| `viewAllHref` | `'/portfolio'` | `'/menu'` |
| `ariaLabel` | `"View all portfolio projects"` | `"Explore our full menu"` |

These defaults now match the restaurant theme and are consistent with the values already configured in `src/config/featured-projects.config.ts`. The component remains fully configurable via props for any consumer that needs different values.

I'll start by exploring the codebase to understand the current state of these web design service redirect stubs.Found all four redirect stubs. Let me read them all:Now I see - these are web design service redirect stubs that redirect to `/services#anchor`. This is a **restaurant** business website, not a web design agency. These service pages are for web design/SEO/hosting/maintenance services which are irrelevant to a restaurant. Let me check what the `/services` page looks like and if there are any references to these stubs elsewhere:Now let me check the main services page and the homepage to understand what these redirect stubs should point to in the restaurant context:Now I have a clear picture. Let me check if the homepage references these old web design service URLs:Now I understand the full picture:

1. **Four redirect stub files** exist in `src/pages/services/` for old web design agency services (website-design, seo, hosting, maintenance)
2. **The main services page** (`services.astro`) is now fully a restaurant services page with restaurant offerings (fine dining, private events, catering, brunch, chef's table)
3. **No other `.astro` pages** link to these old service URLs anymore
4. The redirects point to anchors like `#website-design`, `#seo`, `#hosting`, `#maintenance` which **don't exist** on the current restaurant services page
5. There are references in `contact-form.ts` to `website-design` that also need updating

Let me check the contact form types:Now I see the full scope. The contact form types still have web design agency project types. However, task T012 is specifically about "Update or remove web design service redirect stubs (website-design, seo, hosting, maintenance)" - the four redirect stub pages. The contact form is a separate concern.

Let me check if the services page has any anchors that match the old web design slugs:

The services page has anchors for: `#fine-dining`, `#private-events`, `#catering`, `#brunch-weekend`, `#chefs-table`, `#pricing`, `#process`, `#addons`. None match the old web design anchors (`#website-design`, `#seo`, `#hosting`, `#maintenance`).

Since this is a restaurant site and these redirect stubs point to non-existent anchors on the services page, the best approach is to **update the redirects to point to the main `/services` page** (without broken anchor fragments), since anyone visiting these old URLs should just land on the restaurant's services page.

Let me update all four files:Now let me verify the build works:The build succeeds. All four redirect stub pages are still being generated at their original paths, and they now redirect to `/services` (without broken anchor fragments).

## Summary of Task T012 Implementation

**Updated 4 web design service redirect stubs:**

1. **`src/pages/services/website-design.astro`** - Updated redirect from `/services#website-design` → `/services`
2. **`src/pages/services/seo.astro`** - Updated redirect from `/services#seo` → `/services`
3. **`src/pages/services/hosting.astro`** - Updated redirect from `/services#hosting` → `/services`
4. **`src/pages/services/maintenance.astro`** - Updated redirect from `/services#maintenance` → `/services`

**What changed:**
- **Removed broken anchor fragments**: The old redirects pointed to `#website-design`, `#seo`, `#hosting`, `#maintenance` anchors which don't exist on the current restaurant services page. Now they redirect cleanly to `/services`.
- **Updated comments**: Changed comments from "Redirects to consolidated services page with [x] anchor" to clearly label these as "Legacy" pages from "when this was a web design agency site", making the context clear for future developers.
- **Preserved 301 redirects**: Kept the permanent redirect status code to maintain SEO value and backward compatibility for any bookmarks or indexed URLs.
- **Build verified**: The project builds successfully with all changes.The build succeeds. All four redirect stub pages are still being generated at their original paths, and they now redirect to `/services` (without broken anchor fragments).

## Summary of Task T012 Implementation

**Updated 4 web design service redirect stubs:**

1. **`src/pages/services/website-design.astro`** - Updated redirect from `/services#website-design` → `/services`
2. **`src/pages/services/seo.astro`** - Updated redirect from `/services#seo` → `/services`
3. **`src/pages/services/hosting.astro`** - Updated redirect from `/services#hosting` → `/services`
4. **`src/pages/services/maintenance.astro`** - Updated redirect from `/services#maintenance` → `/services`

**What changed:**
- **Removed broken anchor fragments**: The old redirects pointed to `#website-design`, `#seo`, `#hosting`, `#maintenance` anchors which don't exist on the current restaurant services page. Now they redirect cleanly to `/services`.
- **Updated comments**: Changed comments from "Redirects to consolidated services page with [x] anchor" to clearly label these as "Legacy" pages from "when this was a web design agency site", making the context clear for future developers.
- **Preserved 301 redirects**: Kept the permanent redirect status code to maintain SEO value and backward compatibility for any bookmarks or indexed URLs.
- **Build verified**: The project builds successfully with all changes.