
🔧 Tool: Task
Input: {
  "description": "Explore codebase structure",
  "prompt": "Explore this codebase to understand its structure for implementing a print stylesheet feature. I need to understand:\n\n1. What type of project this is (React, Vue, plain HTML, etc.)\n2. Where CSS files are located\n3. What the menu page looks like and where it's defined\n4. Existing CSS patterns and conventions used\n5. How styles are organized (CSS modules, SCSS, plain CSS, etc.)\n\nPlease search for:\n- Package.json or other config files to identify the framework\n- CSS/SCSS files and their organization\n- Menu-related components or pages\n- Any existing print styles\n\nBe thorough and report back what you find.",
  "subagent_type": "Explore"
}

🔧 Tool: Read
Input: {
  "file_path": "C:\\Users\\James\\Repos\\restaurant-business\\package.json"
}

🔧 Tool: Glob
Input: {
  "pattern": "**/*.css"
}

🔧 Tool: Glob
Input: {
  "pattern": "**/*.scss"
}

🔧 Tool: Bash
Input: {
  "command": "ls -la \"C:\\Users\\James\\Repos\\restaurant-business\" | head -30",
  "description": "List root directory contents"
}

🔧 Tool: Glob
Input: {
  "pattern": "src/pages/*.astro"
}

🔧 Tool: Glob
Input: {
  "pattern": "src/components/*.astro"
}

🔧 Tool: Read
Input: {
  "file_path": "C:\\Users\\James\\Repos\\restaurant-business\\src"
}

🔧 Tool: Read
Input: {
  "file_path": "C:\\Users\\James\\Repos\\restaurant-business\\astro.config.mjs"
}

🔧 Tool: Read
Input: {
  "file_path": "C:\\Users\\James\\Repos\\restaurant-business\\src\\styles\\globals.css"
}

🔧 Tool: Read
Input: {
  "file_path": "C:\\Users\\James\\Repos\\restaurant-business\\src\\styles\\variables.css"
}

🔧 Tool: Read
Input: {
  "file_path": "C:\\Users\\James\\Repos\\restaurant-business\\src\\styles\\performance.css"
}

🔧 Tool: Read
Input: {
  "file_path": "C:\\Users\\James\\Repos\\restaurant-business\\src\\pages\\menu.astro"
}

🔧 Tool: Read
Input: {
  "file_path": "C:\\Users\\James\\Repos\\restaurant-business\\src\\components\\MenuCategorySection.astro",
  "limit": 200
}

🔧 Tool: Read
Input: {
  "file_path": "C:\\Users\\James\\Repos\\restaurant-business\\src\\components\\MenuItem.astro",
  "limit": 150
}

🔧 Tool: Glob
Input: {
  "pattern": "src/**/*.css"
}

🔧 Tool: Read
Input: {
  "file_path": "C:\\Users\\James\\Repos\\restaurant-business\\src\\layouts\\Layout.astro",
  "limit": 150
}

🔧 Tool: Bash
Input: {
  "command": "find \"C:\\Users\\James\\Repos\\restaurant-business\\src\" -type f -name \"*.astro\" | head -20",
  "description": "List Astro component files"
}

🔧 Tool: Grep
Input: {
  "pattern": "@media print",
  "path": "C:\\Users\\James\\Repos\\restaurant-business\\src",
  "output_mode": "files_with_matches"
}

🔧 Tool: Bash
Input: {
  "command": "grep -r \"@media print\" \"C:\\Users\\James\\Repos\\restaurant-business\\src\" --include=\"*.astro\" --include=\"*.css\" | wc -l",
  "description": "Count print media query occurrences"
}

🔧 Tool: Grep
Input: {
  "pattern": "@media print",
  "path": "C:\\Users\\James\\Repos\\restaurant-business\\src\\components\\MenuItem.astro",
  "output_mode": "content",
  "head_limit": 100
}

🔧 Tool: Grep
Input: {
  "pattern": "@media print",
  "path": "C:\\Users\\James\\Repos\\restaurant-business\\src\\components\\MenuCategorySection.astro",
  "output_mode": "content",
  "head_limit": 100
}

🔧 Tool: Read
Input: {
  "file_path": "C:\\Users\\James\\Repos\\restaurant-business\\src\\components\\MenuItem.astro",
  "offset": 300,
  "limit": 150
}

🔧 Tool: Read
Input: {
  "file_path": "C:\\Users\\James\\Repos\\restaurant-business\\src\\components\\MenuCategorySection.astro",
  "offset": 300,
  "limit": 150
}

🔧 Tool: Read
Input: {
  "file_path": "C:\\Users\\James\\Repos\\restaurant-business\\src\\components\\MenuCategorySection.astro",
  "offset": 470,
  "limit": 120
}

🔧 Tool: Read
Input: {
  "file_path": "C:\\Users\\James\\Repos\\restaurant-business\\src\\components\\MenuItem.astro",
  "offset": 720,
  "limit": 120
}
Excellent! The exploration reveals this is an Astro project with comprehensive existing print styles scattered across multiple files. Let me now read the key files to understand the current state and plan the implementation:

🔧 Tool: Read
Input: {
  "file_path": "/Users/James/Repos/restaurant-business/src/pages/menu.astro"
}

🔧 Tool: Read
Input: {
  "file_path": "/Users/James/Repos/restaurant-business/src/styles/performance.css"
}

🔧 Tool: Read
Input: {
  "file_path": "/Users/James/Repos/restaurant-business/src/styles/variables.css"
}
Now let me also check the MenuCategorySection and MenuItem components to understand the existing print styles there:

🔧 Tool: Read
Input: {
  "file_path": "/Users/James/Repos/restaurant-business/src/components/MenuCategorySection.astro"
}

🔧 Tool: Read
Input: {
  "file_path": "/Users/James/Repos/restaurant-business/src/components/MenuItem.astro"
}
Now I have a complete understanding of the codebase. Let me also check the Header, Footer, and filter panel components to understand what elements need to be hidden in print:

🔧 Tool: Glob
Input: {
  "pattern": "**/Header.astro"
}

🔧 Tool: Glob
Input: {
  "pattern": "**/Footer.astro"
}

🔧 Tool: Glob
Input: {
  "pattern": "**/MenuFilterPanel.astro"
}

🔧 Tool: Read
Input: {
  "file_path": "/Users/James/Repos/restaurant-business/src/components/MenuFilterPanel.astro"
}
Now I have a comprehensive understanding of the codebase. Let me create a dedicated print stylesheet for the menu page. Based on my analysis:

**Current State:**
- The menu page already has print styles scattered in `menu.astro` (lines 687-816)
- `MenuCategorySection.astro` has print styles (lines 474-522)
- `MenuItem.astro` has print styles (lines 727-851)
- `performance.css` has global print styles (lines 294-329)
- `variables.css` has print variable overrides (lines 859-870)
- `MenuFilterPanel.astro` already hides itself in print

**Implementation Plan:**
I'll create a dedicated print stylesheet file for the menu page that consolidates and enhances all print-related styles with:
1. Clean page setup with proper margins
2. Hidden navigation, filter panel, and back-to-top elements
3. Black-and-white optimization with grayscale option
4. Readable typography with appropriate point sizes
5. Proper page break handling
6. Restaurant branding/header for physical menus
7. Dietary legend preservation

Let me create the dedicated print CSS file:

🔧 Tool: Write
Input: {
  "file_path": "/Users/James/Repos/restaurant-business/src/styles/menu-print.css",
  "content": "/**\n * =================================================================\n * MENU PAGE - DEDICATED PRINT STYLESHEET\n * =================================================================\n *\n * Optimized print styles for the menu page to create clean, readable\n * physical menus. This stylesheet provides:\n *\n * - Clean page setup with proper margins for binding\n * - Hidden navigation and interactive elements\n * - Black-and-white optimized colors\n * - Readable typography with print-friendly font sizes\n * - Proper page break handling to keep items together\n * - Restaurant branding header\n * - Dietary legend preservation\n *\n * Usage: Import this file in menu.astro for print-specific styles\n *\n * =================================================================\n */\n\n@media print {\n  /* =================================================================\n   * PAGE SETUP\n   * =================================================================\n   * Configure page size, margins, and orientation for physical printing\n   */\n  @page {\n    size: letter portrait;\n    margin: 0.6in 0.5in 0.75in 0.5in; /* Top, Right, Bottom, Left */\n  }\n\n  /* First page can have smaller top margin for header */\n  @page :first {\n    margin-top: 0.5in;\n  }\n\n  /* =================================================================\n   * ROOT & BODY RESETS\n   * =================================================================\n   * Reset backgrounds and establish print-safe defaults\n   */\n  html,\n  body {\n    background: white !important;\n    color: black !important;\n    font-size: 10pt !important;\n    line-height: 1.4 !important;\n    -webkit-print-color-adjust: exact !important;\n    print-color-adjust: exact !important;\n  }\n\n  /* Remove all decorative backgrounds */\n  * {\n    background-image: none !important;\n    box-shadow: none !important;\n    text-shadow: none !important;\n  }\n\n  /* =================================================================\n   * HIDDEN ELEMENTS\n   * =================================================================\n   * Hide all interactive and non-essential elements from print\n   */\n\n  /* Site header and footer */\n  header:not(.menu-page__header),\n  footer,\n  .site-header,\n  .site-footer {\n    display: none !important;\n  }\n\n  /* Navigation elements */\n  .menu-page__nav,\n  nav:not(.menu-page__nav) {\n    display: none !important;\n  }\n\n  /* Interactive elements */\n  .menu-filter-panel,\n  .menu-page__back-to-top,\n  .back-to-top,\n  .skip-link,\n  .cookie-consent,\n  .cookie-settings-toggle,\n  button:not(.print-visible),\n  [role=\"button\"]:not(.print-visible) {\n    display: none !important;\n  }\n\n  /* Scroll indicators and decorative animations */\n  .scroll-indicator,\n  .loading-spinner,\n  [data-animate],\n  .reveal {\n    display: none !important;\n  }\n\n  /* =================================================================\n   * MENU PAGE CONTAINER\n   * =================================================================\n   */\n  .menu-page {\n    background: white !important;\n    color: black !important;\n    min-height: auto !important;\n    padding: 0 !important;\n    margin: 0 !important;\n  }\n\n  /* =================================================================\n   * MENU PAGE HEADER - RESTAURANT BRANDING\n   * =================================================================\n   * Clean, professional header for physical menus\n   */\n  .menu-page__header {\n    background: none !important;\n    color: black !important;\n    padding: 0 0 0.2in 0 !important;\n    margin: 0 0 0.15in 0 !important;\n    border-bottom: 2pt solid black !important;\n    text-align: center !important;\n  }\n\n  .menu-page__header-content {\n    max-width: none !important;\n    margin: 0 !important;\n    padding: 0 !important;\n  }\n\n  .menu-page__title {\n    font-family: Georgia, 'Times New Roman', serif !important;\n    font-size: 28pt !important;\n    font-weight: 700 !important;\n    color: black !important;\n    margin: 0 0 0.08in 0 !important;\n    line-height: 1.1 !important;\n    letter-spacing: 0.02em !important;\n    text-transform: uppercase !important;\n  }\n\n  .menu-page__subtitle {\n    font-family: Georgia, 'Times New Roman', serif !important;\n    font-size: 10pt !important;\n    font-style: italic !important;\n    color: #333 !important;\n    margin: 0 0 0.08in 0 !important;\n    max-width: none !important;\n    line-height: 1.3 !important;\n    opacity: 1 !important;\n  }\n\n  .menu-page__hours {\n    font-family: Arial, Helvetica, sans-serif !important;\n    font-size: 9pt !important;\n    color: #444 !important;\n    margin: 0 !important;\n  }\n\n  .menu-page__hours-label {\n    font-weight: 600 !important;\n    opacity: 1 !important;\n  }\n\n  .menu-page__hours-time {\n    font-weight: 400 !important;\n  }\n\n  /* =================================================================\n   * DIETARY LEGEND\n   * =================================================================\n   * Compact but visible legend for dietary indicators\n   */\n  .menu-page__legend {\n    background: none !important;\n    border: none !important;\n    padding: 0.1in 0 !important;\n    margin: 0 0 0.15in 0 !important;\n    border-bottom: 0.5pt solid #ccc !important;\n  }\n\n  .menu-page__legend-container {\n    padding: 0 !important;\n    gap: 0.12in !important;\n    justify-content: flex-start !important;\n  }\n\n  .menu-page__legend-label {\n    font-family: Arial, Helvetica, sans-serif !important;\n    font-size: 8pt !important;\n    font-weight: 600 !important;\n    color: black !important;\n  }\n\n  .menu-page__legend-list {\n    gap: 0.15in !important;\n  }\n\n  .menu-page__legend-item {\n    gap: 0.04in !important;\n  }\n\n  .menu-page__legend-abbr {\n    width: auto !important;\n    height: auto !important;\n    min-width: 14pt !important;\n    padding: 1pt 3pt !important;\n    font-family: Arial, Helvetica, sans-serif !important;\n    font-size: 7pt !important;\n    font-weight: 700 !important;\n    border-radius: 2pt !important;\n    border: 0.5pt solid #666 !important;\n    background: #f0f0f0 !important;\n    color: black !important;\n  }\n\n  /* Dietary tag specific colors - grayscale with different fills */\n  .menu-page__legend-abbr--v {\n    background: #e8e8e8 !important;\n    border-color: #666 !important;\n  }\n\n  .menu-page__legend-abbr--vg {\n    background: #d0d0d0 !important;\n    border-color: #555 !important;\n  }\n\n  .menu-page__legend-abbr--gf {\n    background: #f5f5f5 !important;\n    border-color: #888 !important;\n  }\n\n  .menu-page__legend-abbr--df {\n    background: #e0e0e0 !important;\n    border-color: #777 !important;\n  }\n\n  .menu-page__legend-name {\n    font-family: Arial, Helvetica, sans-serif !important;\n    font-size: 8pt !important;\n    color: #333 !important;\n  }\n\n  .menu-page__legend-note {\n    font-family: Arial, Helvetica, sans-serif !important;\n    font-size: 7pt !important;\n    font-style: italic !important;\n    color: #666 !important;\n    margin: 0.05in 0 0 0 !important;\n    flex-basis: 100% !important;\n  }\n\n  /* =================================================================\n   * MENU CONTENT CONTAINER\n   * =================================================================\n   */\n  .menu-page__content {\n    max-width: none !important;\n    margin: 0 !important;\n    padding: 0 !important;\n  }\n\n  /* =================================================================\n   * MENU CATEGORY SECTIONS\n   * =================================================================\n   * Each category section with proper page break handling\n   */\n  .menu-category-section {\n    padding: 0.15in 0 0.2in 0 !important;\n    margin: 0 !important;\n    background: none !important;\n    break-inside: avoid-column !important;\n    /* Don't use page-break-inside: avoid on sections - they can be long */\n  }\n\n  .menu-category-section__container {\n    max-width: none !important;\n    margin: 0 !important;\n    padding: 0 !important;\n  }\n\n  /* =================================================================\n   * SECTION HEADERS\n   * =================================================================\n   */\n  .menu-category-section__header {\n    text-align: center !important;\n    margin-bottom: 0.12in !important;\n    break-after: avoid !important;\n    page-break-after: avoid !important;\n  }\n\n  .menu-category-section__header-content {\n    gap: 0.1in !important;\n  }\n\n  .menu-category-section__heading {\n    font-family: Georgia, 'Times New Roman', serif !important;\n    font-size: 14pt !important;\n    font-weight: 700 !important;\n    color: black !important;\n    margin: 0 !important;\n    line-height: 1.2 !important;\n    text-transform: uppercase !important;\n    letter-spacing: 0.05em !important;\n  }\n\n  .menu-category-section__heading-line {\n    flex: 1 !important;\n    max-width: 1in !important;\n    height: 0.5pt !important;\n    background: linear-gradient(90deg, transparent 0%, #999 50%, transparent 100%) !important;\n  }\n\n  .menu-category-section__description {\n    font-family: Georgia, 'Times New Roman', serif !important;\n    font-size: 9pt !important;\n    font-style: italic !important;\n    color: #444 !important;\n    margin: 0.05in 0 0 0 !important;\n    max-width: none !important;\n    line-height: 1.3 !important;\n  }\n\n  /* Hide category header images */\n  .menu-category-section__header-image {\n    display: none !important;\n  }\n\n  /* =================================================================\n   * MENU ITEMS GRID\n   * =================================================================\n   * Two-column layout for efficient use of space\n   */\n  .menu-category-section__grid {\n    display: grid !important;\n    grid-template-columns: repeat(2, 1fr) !important;\n    gap: 0.08in 0.2in !important;\n  }\n\n  /* Compact layout stays single column */\n  .menu-category-section--layout-compact .menu-category-section__grid {\n    grid-template-columns: 1fr !important;\n    max-width: 6in !important;\n    margin: 0 auto !important;\n    gap: 0.03in !important;\n  }\n\n  .menu-category-section__item {\n    animation: none !important;\n    box-shadow: none !important;\n    background: none !important;\n    border: none !important;\n    border-radius: 0 !important;\n    padding: 0 !important;\n    margin: 0 !important;\n  }\n\n  /* =================================================================\n   * INDIVIDUAL MENU ITEMS\n   * =================================================================\n   * Optimized for print readability\n   */\n  .menu-item {\n    display: flex !important;\n    flex-direction: row !important;\n    gap: 0.08in !important;\n    padding: 0.04in 0 !important;\n    border-bottom: 0.25pt solid #ddd !important;\n    background: none !important;\n    break-inside: avoid !important;\n    page-break-inside: avoid !important;\n  }\n\n  .menu-item:last-child {\n    border-bottom: none !important;\n  }\n\n  .menu-item:hover {\n    background: none !important;\n  }\n\n  /* =================================================================\n   * MENU ITEM IMAGES - OPTIONAL\n   * =================================================================\n   * Images are hidden by default for cleaner print, can be enabled\n   */\n  .menu-item__image-container {\n    display: none !important; /* Hide images for cleaner, faster printing */\n  }\n\n  /* Uncomment below to show images (smaller thumbnails) */\n  /*\n  .menu-item__image-container {\n    display: block !important;\n    width: 0.6in !important;\n    height: 0.45in !important;\n    flex-shrink: 0 !important;\n    border-radius: 2pt !important;\n    overflow: hidden !important;\n    border: 0.25pt solid #ccc !important;\n  }\n\n  .menu-item__image {\n    width: 100% !important;\n    height: 100% !important;\n    object-fit: cover !important;\n    filter: grayscale(100%) !important;\n  }\n  */\n\n  /* =================================================================\n   * MENU ITEM CONTENT\n   * =================================================================\n   */\n  .menu-item__content {\n    flex: 1 !important;\n    min-width: 0 !important;\n    gap: 0.02in !important;\n  }\n\n  .menu-item__header {\n    gap: 0.01in !important;\n  }\n\n  .menu-item__title-row {\n    gap: 0.05in !important;\n  }\n\n  /* =================================================================\n   * ITEM NAME\n   * =================================================================\n   */\n  .menu-item__name {\n    font-family: Georgia, 'Times New Roman', serif !important;\n    font-size: 10pt !important;\n    font-weight: 600 !important;\n    color: black !important;\n    margin: 0 !important;\n    line-height: 1.2 !important;\n  }\n\n  /* =================================================================\n   * PRICE ROW WITH DOTS LEADER\n   * =================================================================\n   */\n  .menu-item__price-row {\n    gap: 0.05in !important;\n    margin-top: 0 !important;\n  }\n\n  .menu-item__dots {\n    flex: 1 !important;\n    border-bottom: 0.5pt dotted #999 !important;\n    margin-bottom: 2pt !important;\n    min-width: 0.3in !important;\n  }\n\n  .menu-item__price {\n    font-family: Arial, Helvetica, sans-serif !important;\n    font-size: 10pt !important;\n    font-weight: 700 !important;\n    color: black !important;\n    white-space: nowrap !important;\n  }\n\n  .menu-item__price-unit {\n    font-size: 8pt !important;\n    font-weight: 400 !important;\n    color: #444 !important;\n  }\n\n  /* =================================================================\n   * DESCRIPTION\n   * =================================================================\n   */\n  .menu-item__description {\n    font-family: Arial, Helvetica, sans-serif !important;\n    font-size: 8pt !important;\n    color: #333 !important;\n    line-height: 1.3 !important;\n    margin: 0.02in 0 0 0 !important;\n  }\n\n  /* =================================================================\n   * BADGES\n   * =================================================================\n   * Simplified badges for print - text only, no icons\n   */\n  .menu-item__badges {\n    gap: 0.04in !important;\n  }\n\n  .menu-item__badge {\n    font-family: Arial, Helvetica, sans-serif !important;\n    font-size: 6pt !important;\n    font-weight: 700 !important;\n    text-transform: uppercase !important;\n    letter-spacing: 0.03em !important;\n    padding: 1pt 3pt !important;\n    border-radius: 1pt !important;\n    background: #f0f0f0 !important;\n    color: #333 !important;\n    border: 0.25pt solid #aaa !important;\n  }\n\n  .menu-item__badge-icon {\n    display: none !important; /* Hide emoji icons in print */\n  }\n\n  /* Badge variants - use different grays for visual distinction */\n  .menu-item__badge--chef {\n    background: #e0e0e0 !important;\n    border-color: #666 !important;\n  }\n\n  .menu-item__badge--featured {\n    background: #d0d0d0 !important;\n    border-color: #555 !important;\n  }\n\n  .menu-item__badge--new {\n    background: #e8e8e8 !important;\n    border-color: #777 !important;\n  }\n\n  .menu-item__badge--seasonal {\n    background: #f0f0f0 !important;\n    border-color: #888 !important;\n  }\n\n  .menu-item__badge--signature {\n    background: #c0c0c0 !important;\n    border-color: #444 !important;\n    color: black !important;\n  }\n\n  /* =================================================================\n   * DIETARY TAGS ON ITEMS\n   * =================================================================\n   */\n  .menu-item__dietary-tags {\n    gap: 0.03in !important;\n    margin-top: 0.02in !important;\n  }\n\n  /* DietaryIndicator component styles for print */\n  .dietary-indicator,\n  [data-dietary-tag] {\n    font-family: Arial, Helvetica, sans-serif !important;\n    font-size: 6pt !important;\n    font-weight: 700 !important;\n    min-width: 12pt !important;\n    height: auto !important;\n    padding: 1pt 2pt !important;\n    border-radius: 1pt !important;\n    background: #f0f0f0 !important;\n    color: #333 !important;\n    border: 0.25pt solid #999 !important;\n  }\n\n  /* =================================================================\n   * FEATURED & SIGNATURE ITEMS\n   * =================================================================\n   * Subtle distinction without heavy styling\n   */\n  .menu-item--featured {\n    background: #fafafa !important;\n    border: 0.5pt solid #ccc !important;\n    border-radius: 2pt !important;\n    padding: 0.05in !important;\n    margin: 0.02in 0 !important;\n  }\n\n  .menu-item--signature {\n    background: #f5f5f5 !important;\n    border: 1pt solid #999 !important;\n    border-radius: 3pt !important;\n    padding: 0.06in !important;\n    margin: 0.03in 0 !important;\n  }\n\n  .menu-item--signature::before {\n    display: none !important; /* Hide decorative top bar */\n  }\n\n  .menu-item--signature .menu-item__name {\n    font-size: 11pt !important;\n  }\n\n  .menu-item--new::before {\n    background: #666 !important;\n    width: 2pt !important;\n  }\n\n  /* =================================================================\n   * CHEF STORY (for signature dishes)\n   * =================================================================\n   */\n  .menu-item__chef-story {\n    background: #f8f8f8 !important;\n    border-left: 2pt solid #666 !important;\n    border-radius: 0 !important;\n    padding: 0.04in !important;\n    margin-top: 0.04in !important;\n  }\n\n  .menu-item__chef-story-icon {\n    display: none !important;\n  }\n\n  .menu-item__chef-story-text {\n    font-family: Georgia, 'Times New Roman', serif !important;\n    font-size: 7pt !important;\n    font-style: italic !important;\n    color: #444 !important;\n    line-height: 1.3 !important;\n  }\n\n  .menu-item__chef-story-label {\n    font-weight: 600 !important;\n    color: #333 !important;\n  }\n\n  /* =================================================================\n   * TYPOGRAPHY OPTIMIZATION\n   * =================================================================\n   * Ensure proper text rendering for print\n   */\n  h1, h2, h3, h4, h5, h6 {\n    color: black !important;\n    orphans: 3 !important;\n    widows: 3 !important;\n    break-after: avoid !important;\n    page-break-after: avoid !important;\n  }\n\n  p {\n    orphans: 3 !important;\n    widows: 3 !important;\n  }\n\n  /* Links should appear as regular text */\n  a {\n    color: black !important;\n    text-decoration: none !important;\n  }\n\n  /* Don't show link URLs in print for menu */\n  a[href]::after {\n    content: none !important;\n  }\n\n  /* =================================================================\n   * PAGE BREAK CONTROL\n   * =================================================================\n   * Prevent awkward breaks in menu content\n   */\n\n  /* Keep section headers with their content */\n  .menu-category-section__header {\n    break-after: avoid !important;\n    page-break-after: avoid !important;\n  }\n\n  /* Prevent breaking inside menu items */\n  .menu-item {\n    break-inside: avoid !important;\n    page-break-inside: avoid !important;\n  }\n\n  /* Allow page breaks between sections */\n  .menu-category-section {\n    break-before: auto !important;\n    page-break-before: auto !important;\n  }\n\n  /* Force page break before a specific section if needed */\n  .menu-category-section--page-break-before {\n    break-before: page !important;\n    page-break-before: always !important;\n  }\n\n  /* =================================================================\n   * EMPTY STATE HANDLING\n   * =================================================================\n   */\n  .menu-category-section__empty {\n    display: none !important;\n  }\n\n  .menu-category-section__empty-filtered-msg {\n    display: none !important;\n  }\n\n  /* =================================================================\n   * UTILITY CLASSES FOR PRINT CONTROL\n   * =================================================================\n   * Add these classes in HTML for fine-grained print control\n   */\n\n  /* Force visibility in print */\n  .print-visible {\n    display: block !important;\n  }\n\n  /* Force hidden in print */\n  .print-hidden,\n  .no-print {\n    display: none !important;\n  }\n\n  /* Force page break before element */\n  .print-page-break-before {\n    break-before: page !important;\n    page-break-before: always !important;\n  }\n\n  /* Force page break after element */\n  .print-page-break-after {\n    break-after: page !important;\n    page-break-after: always !important;\n  }\n\n  /* Keep together - don't break inside */\n  .print-keep-together {\n    break-inside: avoid !important;\n    page-break-inside: avoid !important;\n  }\n\n  /* =================================================================\n   * PRINT FOOTER (optional - add via JS or CSS)\n   * =================================================================\n   * Shows at bottom of each printed page\n   */\n  @page {\n    @bottom-center {\n      content: \"Thank you for dining with us\";\n      font-family: Georgia, serif;\n      font-size: 8pt;\n      font-style: italic;\n      color: #666;\n    }\n  }\n}\n\n/* =================================================================\n * GRAYSCALE PRINT MODE (Optional)\n * =================================================================\n * Use this media query for pure black & white printing\n * More economical for ink/toner usage\n */\n@media print and (monochrome) {\n  /* Force all images to grayscale */\n  img {\n    filter: grayscale(100%) !important;\n  }\n\n  /* Ensure all colors are pure black or gray */\n  .menu-item__name,\n  .menu-item__price,\n  .menu-category-section__heading {\n    color: black !important;\n  }\n\n  .menu-item__description,\n  .menu-page__subtitle {\n    color: #333 !important;\n  }\n\n  /* Simplify all badges to uniform gray */\n  .menu-item__badge,\n  .menu-page__legend-abbr,\n  .dietary-indicator,\n  [data-dietary-tag] {\n    background: #e0e0e0 !important;\n    border-color: #666 !important;\n    color: black !important;\n  }\n}\n"
}
Now I need to update the menu.astro page to import this new dedicated print stylesheet. I'll also need to clean up the existing print styles in the menu.astro file to avoid duplication and conflicts:

🔧 Tool: Edit
Input: {
  "file_path": "/Users/James/Repos/restaurant-business/src/pages/menu.astro",
  "old_string": "---\n/**\n * Full Menu Page\n * Displays the complete restaurant menu with category sections, navigation jump links,\n * PDF download button, and print-optimized stylesheet.\n *\n * Features:\n * - Navigation jump links to each category section\n * - PDF download functionality (browser print-to-PDF)\n * - Print-optimized stylesheet for readability without images\n * - Proper heading hierarchy for screen readers\n * - Semantic HTML structure for accessibility\n * - Responsive design with mobile-first approach\n * - WCAG 2.1 AA compliant\n * - Menu and MenuItem schema markup for rich snippets\n */\n\nimport Layout from '../layouts/Layout.astro';\nimport MenuCategorySection from '../components/MenuCategorySection.astro';\nimport MenuFilterPanel from '../components/MenuFilterPanel.astro';",
  "new_string": "---\n/**\n * Full Menu Page\n * Displays the complete restaurant menu with category sections, navigation jump links,\n * PDF download button, and print-optimized stylesheet.\n *\n * Features:\n * - Navigation jump links to each category section\n * - PDF download functionality (browser print-to-PDF)\n * - Print-optimized stylesheet for readability without images\n * - Proper heading hierarchy for screen readers\n * - Semantic HTML structure for accessibility\n * - Responsive design with mobile-first approach\n * - WCAG 2.1 AA compliant\n * - Menu and MenuItem schema markup for rich snippets\n */\n\nimport Layout from '../layouts/Layout.astro';\nimport MenuCategorySection from '../components/MenuCategorySection.astro';\nimport MenuFilterPanel from '../components/MenuFilterPanel.astro';\n\n// Import dedicated print stylesheet for menu page\nimport '../styles/menu-print.css';"
}

🔧 Tool: Read
Input: {
  "file_path": "/Users/James/Repos/restaurant-business/src/pages/menu.astro"
}
Now I'll update the menu.astro file to import the new dedicated print stylesheet and simplify the inline print styles (keeping them as a fallback but letting the imported stylesheet take precedence):

🔧 Tool: Edit
Input: {
  "file_path": "/Users/James/Repos/restaurant-business/src/pages/menu.astro",
  "old_string": "import Layout from '../layouts/Layout.astro';\nimport MenuCategorySection from '../components/MenuCategorySection.astro';\nimport MenuFilterPanel from '../components/MenuFilterPanel.astro';\nimport {\n  DINNER_MENU,\n  buildMenuSections,\n} from '../config/menu.config';",
  "new_string": "import Layout from '../layouts/Layout.astro';\nimport MenuCategorySection from '../components/MenuCategorySection.astro';\nimport MenuFilterPanel from '../components/MenuFilterPanel.astro';\n\n// Import dedicated print stylesheet for menu page\n// Provides clean formatting, proper page breaks, hidden navigation,\n// black-and-white optimization, and readable typography for physical menus\nimport '../styles/menu-print.css';\n\nimport {\n  DINNER_MENU,\n  buildMenuSections,\n} from '../config/menu.config';"
}

🔧 Tool: Read
Input: {
  "file_path": "/Users/James/Repos/restaurant-business/src/pages/menu.astro"
}

🔧 Tool: Edit
Input: {
  "file_path": "/Users/James/Repos/restaurant-business/src/pages/menu.astro",
  "old_string": "import Layout from '../layouts/Layout.astro';\nimport MenuCategorySection from '../components/MenuCategorySection.astro';\nimport MenuFilterPanel from '../components/MenuFilterPanel.astro';\nimport {\n  DINNER_MENU,\n  buildMenuSections,\n} from '../config/menu.config';",
  "new_string": "import Layout from '../layouts/Layout.astro';\nimport MenuCategorySection from '../components/MenuCategorySection.astro';\nimport MenuFilterPanel from '../components/MenuFilterPanel.astro';\n\n// Import dedicated print stylesheet for menu page\n// Provides clean formatting, proper page breaks, hidden navigation,\n// black-and-white optimization, and readable typography for physical menus\nimport '../styles/menu-print.css';\n\nimport {\n  DINNER_MENU,\n  buildMenuSections,\n} from '../config/menu.config';"
}
Let me check the file again and try a different approach:

🔧 Tool: Read
Input: {
  "file_path": "/Users/James/Repos/restaurant-business/src/pages/menu.astro",
  "limit": 50
}

🔧 Tool: Edit
Input: {
  "file_path": "/Users/James/Repos/restaurant-business/src/pages/menu.astro",
  "old_string": "import MenuFilterPanel from '../components/MenuFilterPanel.astro';\nimport {",
  "new_string": "import MenuFilterPanel from '../components/MenuFilterPanel.astro';\n\n// Import dedicated print stylesheet for menu page\n// Provides clean formatting, proper page breaks, hidden navigation,\n// black-and-white optimization, and readable typography for physical menus\nimport '../styles/menu-print.css';\n\nimport {"
}

🔧 Tool: Bash
Input: {
  "command": "cat \"/Users/James/Repos/restaurant-business/src/pages/menu.astro\" | head -30",
  "description": "Check current file contents"
}
It seems like the file path might be different. Let me find the correct path:

🔧 Tool: Glob
Input: {
  "pattern": "**/menu.astro"
}
I see - the project is on a Windows path. Let me try editing with the Windows path:

🔧 Tool: Read
Input: {
  "file_path": "C:\\Users\\James\\Repos\\restaurant-business\\src\\pages\\menu.astro",
  "limit": 30
}

🔧 Tool: Edit
Input: {
  "file_path": "C:\\Users\\James\\Repos\\restaurant-business\\src\\pages\\menu.astro",
  "old_string": "import MenuFilterPanel from '../components/MenuFilterPanel.astro';\nimport {\n  DINNER_MENU,\n  buildMenuSections,\n} from '../config/menu.config';",
  "new_string": "import MenuFilterPanel from '../components/MenuFilterPanel.astro';\n\n// Import dedicated print stylesheet for menu page\n// Provides clean formatting, proper page breaks, hidden navigation,\n// black-and-white optimization, and readable typography for physical menus\nimport '../styles/menu-print.css';\n\nimport {\n  DINNER_MENU,\n  buildMenuSections,\n} from '../config/menu.config';"
}
Now let me simplify the inline print styles in menu.astro since the dedicated print CSS file handles everything more comprehensively. I'll replace the verbose inline print styles with a minimal fallback comment:

🔧 Tool: Read
Input: {
  "file_path": "C:\\Users\\James\\Repos\\restaurant-business\\src\\pages\\menu.astro",
  "offset": 680,
  "limit": 150
}
Now I'll replace the inline print styles with a reference comment since the dedicated print stylesheet handles everything:

🔧 Tool: Edit
Input: {
  "file_path": "C:\\Users\\James\\Repos\\restaurant-business\\src\\pages\\menu.astro",
  "old_string": "  /* =================================================================\n   * PRINT STYLES\n   * ================================================================= */\n  @media print {\n    /* Page setup */\n    @page {\n      size: letter;\n      margin: 0.75in;\n    }\n\n    /* Reset backgrounds and colors for printing */\n    .menu-page {\n      background: white !important;\n      color: black !important;\n      font-size: 10pt !important;\n    }\n\n    /* Header - simplified for print */\n    .menu-page__header {\n      background: none !important;\n      color: black !important;\n      padding: 0 0 0.25in !important;\n      border-bottom: 2px solid black;\n      margin-bottom: 0.25in;\n    }\n\n    .menu-page__title {\n      font-size: 24pt !important;\n      color: black !important;\n      margin-bottom: 0.1in !important;\n    }\n\n    .menu-page__subtitle {\n      font-size: 11pt !important;\n      color: #333 !important;\n      max-width: none !important;\n    }\n\n    .menu-page__hours {\n      font-size: 10pt !important;\n      margin-top: 0.1in !important;\n    }\n\n    .menu-page__hours-label,\n    .menu-page__hours-time {\n      color: #333 !important;\n    }\n\n    /* Hide navigation - not needed in print */\n    .menu-page__nav {\n      display: none !important;\n    }\n\n    /* Dietary legend - keep but simplify */\n    .menu-page__legend {\n      background: none !important;\n      border: none !important;\n      padding: 0.15in 0 !important;\n      margin-bottom: 0.2in;\n      border-bottom: 1px solid #ccc;\n    }\n\n    .menu-page__legend-container {\n      padding: 0 !important;\n      gap: 0.15in !important;\n    }\n\n    .menu-page__legend-label,\n    .menu-page__legend-name {\n      font-size: 8pt !important;\n      color: black !important;\n    }\n\n    .menu-page__legend-abbr {\n      width: auto !important;\n      height: auto !important;\n      padding: 0 2pt !important;\n      font-size: 7pt !important;\n      background: #f0f0f0 !important;\n      color: black !important;\n      border: 0.5pt solid #999;\n    }\n\n    .menu-page__legend-note {\n      font-size: 8pt !important;\n      color: #666 !important;\n    }\n\n    /* Content area */\n    .menu-page__content {\n      max-width: none !important;\n    }\n\n    /* Hide back to top */\n    .menu-page__back-to-top {\n      display: none !important;\n    }\n\n    /* Ensure text is readable */\n    * {\n      -webkit-print-color-adjust: exact !important;\n      print-color-adjust: exact !important;\n    }\n\n    /* Force black text for readability */\n    h1, h2, h3, h4, h5, h6, p, span, li {\n      color: black !important;\n    }\n\n    /* Links should look like text in print */\n    a {\n      color: black !important;\n      text-decoration: none !important;\n    }\n\n    /* Prevent orphans and widows */\n    p, h2, h3 {\n      orphans: 3;\n      widows: 3;\n    }\n\n    /* Keep headings with their content */\n    h2, h3 {\n      break-after: avoid;\n      page-break-after: avoid;\n    }\n\n    /* Avoid breaking inside sections */\n    section {\n      break-inside: avoid;\n      page-break-inside: avoid;\n    }\n  }\n</style>",
  "new_string": "  /* =================================================================\n   * PRINT STYLES\n   * =================================================================\n   * Print styles are handled by the dedicated menu-print.css stylesheet\n   * imported at the top of this file. That stylesheet provides:\n   * - Clean page setup with proper margins for binding\n   * - Hidden navigation and interactive elements\n   * - Black-and-white optimized colors\n   * - Readable typography with print-friendly font sizes (pt units)\n   * - Proper page break handling to keep items together\n   * - Restaurant branding header\n   * - Dietary legend preservation\n   * - Two-column layout for efficient space usage\n   * - Grayscale mode support for monochrome printing\n   *\n   * See: src/styles/menu-print.css for full implementation\n   */\n</style>"
}
Now let me verify the print stylesheet was created correctly:

🔧 Tool: Glob
Input: {
  "pattern": "**/menu-print.css"
}

🔧 Tool: Read
Input: {
  "file_path": "C:\\Users\\James\\Repos\\restaurant-business\\src\\styles\\menu-print.css",
  "limit": 60
}
The print stylesheet is in place. Now let me verify the menu.astro file has the import correctly added:

🔧 Tool: Read
Input: {
  "file_path": "C:\\Users\\James\\Repos\\restaurant-business\\src\\pages\\menu.astro",
  "limit": 35
}
The import is correctly added. Let me also verify the end of the style section to ensure the print styles comment was added correctly:

🔧 Tool: Read
Input: {
  "file_path": "C:\\Users\\James\\Repos\\restaurant-business\\src\\pages\\menu.astro",
  "offset": 670,
  "limit": 50
}
Excellent! Everything is in place. Now let me verify that the project builds correctly by checking if there are any build scripts and running them:

🔧 Tool: Read
Input: {
  "file_path": "C:\\Users\\James\\Repos\\restaurant-business\\package.json"
}
Let me run a quick build check to make sure the CSS import and file work correctly:

🔧 Tool: Bash
Input: {
  "command": "cd \"C:\\Users\\James\\Repos\\restaurant-business\" && npm run build 2>&1",
  "description": "Build project to verify changes",
  "timeout": 120000
}
The build completes successfully. There are some CSS warnings about existing syntax issues in other files (MenuItem.astro has some malformed CSS), but these are pre-existing issues not related to our changes. The menu page builds correctly with our new print stylesheet.

Let me verify the print stylesheet is included in the build output:

🔧 Tool: Bash
Input: {
  "command": "cd \"C:\\Users\\James\\Repos\\restaurant-business\" && find dist -name \"*.css\" -type f 2>/dev/null | head -10 || dir /s /b dist\\*.css 2>nul | head -10",
  "description": "Check built CSS files"
}

🔧 Tool: Bash
Input: {
  "command": "cd \"C:\\Users\\James\\Repos\\restaurant-business\" && dir /s /b dist\\*.css 2>nul | findstr menu",
  "description": "Check for menu CSS files"
}

🔧 Tool: Glob
Input: {
  "pattern": "**/dist/**/*.css"
}

🔧 Tool: Bash
Input: {
  "command": "cd \"C:\\Users\\James\\Repos\\restaurant-business\" && grep -l \"@media print\" dist/_astro/menu*.css 2>/dev/null || echo \"Checking for @media print in menu CSS...\"",
  "description": "Verify print styles in menu CSS"
}
The print styles are being included in the built menu CSS file. Let me also verify the content by checking a sample:

🔧 Tool: Bash
Input: {
  "command": "cd \"C:\\Users\\James\\Repos\\restaurant-business\" && grep -o \"@media print{[^}]*size:\" dist/_astro/menu.CV4Eansg.css | head -1",
  "description": "Verify page setup in print styles"
}
The print styles are properly bundled. Let me also check that key print elements like hidden navigation and typography are included:

🔧 Tool: Bash
Input: {
  "command": "cd \"C:\\Users\\James\\Repos\\restaurant-business\" && grep -c \"display:none\" dist/_astro/menu.CV4Eansg.css && grep -c \"font-size:\" dist/_astro/menu.CV4Eansg.css",
  "description": "Count print style rules"
}
The print styles are being compiled into the final CSS. Now let me verify the actual output HTML file includes our CSS:

🔧 Tool: Bash
Input: {
  "command": "cd \"C:\\Users\\James\\Repos\\restaurant-business\" && grep -o 'menu[^\"]*\\.css' dist/menu/index.html | head -3",
  "description": "Check CSS references in menu HTML"
}
Excellent! The menu CSS file is properly included. The feature implementation is complete. Let me provide a summary of what was implemented:

<summary>
## Summary: Create dedicated print CSS for menu page with clean formatting

### Changes Implemented
- Created a new dedicated print stylesheet (`menu-print.css`) with comprehensive print-optimized styles
- **Page Setup:** Letter portrait orientation with optimized margins (0.6in/0.5in/0.75in/0.5in) for binding
- **Hidden Elements:** Navigation bar, filter panel, back-to-top button, skip links, cookie consent, and all interactive elements are hidden in print
- **Black-and-White Optimization:** All colors converted to grayscale-safe values (black, gray tones) with `print-color-adjust: exact` for critical elements
- **Readable Typography:** 
  - Base font size: 10pt
  - Menu title: 28pt Georgia (uppercase, professional look)
  - Section headings: 14pt (uppercase with letter spacing)
  - Item names: 10pt Georgia (semibold)
  - Prices: 10pt Arial (bold)
  - Descriptions: 8pt Arial
- **Proper Page Breaks:** 
  - `break-inside: avoid` on menu items to prevent splitting items across pages
  - `break-after: avoid` on section headers to keep them with content
  - Section headers can start on new pages as needed
- **Two-Column Grid Layout:** Menu items displayed in two columns for efficient space usage
- **Dietary Legend Preservation:** Simplified but visible legend with grayscale badges
- **Chef Story & Badges:** Simplified print-friendly styling for featured items
- **Monochrome Support:** Additional `@media print and (monochrome)` rules for pure B&W printers
- **Utility Classes:** Added `.print-visible`, `.print-hidden`, `.print-page-break-before/after`, `.print-keep-together` for fine-grained control

### Files Modified
- **Created:** `src/styles/menu-print.css` (new ~580 lines) - Dedicated print stylesheet
- **Modified:** `src/pages/menu.astro` - Added import for print stylesheet, replaced inline print styles with reference comment

### Notes for Developer
- The print stylesheet uses `!important` declarations to ensure print styles override screen styles
- Images are hidden by default for cleaner, faster printing; commented code shows how to enable small thumbnails if desired
- Typography uses print-safe fonts (Georgia, Arial) with point sizes for physical printing accuracy
- The existing scattered print styles in `MenuCategorySection.astro` and `MenuItem.astro` still apply but are complemented/overridden by the dedicated stylesheet
- Test print output by clicking "Download PDF" button or using Ctrl+P on the menu page
- Build warnings about CSS syntax errors are pre-existing issues in other component files (MenuItem.astro), not related to these changes
</summary>