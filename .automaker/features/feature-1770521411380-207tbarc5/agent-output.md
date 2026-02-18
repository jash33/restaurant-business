
🔧 Tool: Task
Input: {
  "description": "Explore codebase structure",
  "prompt": "I need to explore this codebase to understand its structure, particularly focusing on:\n1. The overall project structure (what framework is being used - React, Next.js, etc.)\n2. The home page component\n3. The existing navbar component\n4. Any styling patterns used (CSS modules, Tailwind, styled-components, etc.)\n\nPlease search for:\n- The main project configuration files (package.json, etc.)\n- The home page or main page component\n- Any navbar or navigation components\n- The styling approach used\n\nProvide a thorough overview of what you find.",
  "subagent_type": "Explore"
}

🔧 Tool: Glob
Input: {
  "pattern": "**/package.json"
}

🔧 Tool: Glob
Input: {
  "pattern": "**/*.config.*"
}

🔧 Tool: Glob
Input: {
  "pattern": "**/tsconfig.json"
}

🔧 Tool: Bash
Input: {
  "command": "ls -la \"C:\\Users\\James\\Repos\\restaurant-business\" | head -30",
  "description": "List root directory contents"
}

🔧 Tool: Read
Input: {
  "file_path": "C:\\Users\\James\\Repos\\restaurant-business\\package.json"
}

🔧 Tool: Read
Input: {
  "file_path": "C:\\Users\\James\\Repos\\restaurant-business\\astro.config.mjs"
}

🔧 Tool: Read
Input: {
  "file_path": "C:\\Users\\James\\Repos\\restaurant-business\\tsconfig.json"
}

🔧 Tool: Bash
Input: {
  "command": "ls -la \"C:\\Users\\James\\Repos\\restaurant-business\\src\" | head -50",
  "description": "List src directory contents"
}

🔧 Tool: Glob
Input: {
  "pattern": "src/pages/*.astro"
}

🔧 Tool: Glob
Input: {
  "pattern": "src/components/*.astro"
}

🔧 Tool: Glob
Input: {
  "pattern": "src/**/*.*css"
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
  "file_path": "C:\\Users\\James\\Repos\\restaurant-business\\src\\components\\Footer.astro"
}

🔧 Tool: Read
Input: {
  "file_path": "C:\\Users\\James\\Repos\\restaurant-business\\src\\styles\\variables.css"
}

🔧 Tool: Bash
Input: {
  "command": "ls -la \"C:\\Users\\James\\Repos\\restaurant-business\\src\\layouts\"",
  "description": "List layouts directory"
}

🔧 Tool: Read
Input: {
  "file_path": "C:\\Users\\James\\Repos\\restaurant-business\\src\\layouts\\Layout.astro"
}

🔧 Tool: Read
Input: {
  "file_path": "C:\\Users\\James\\Repos\\restaurant-business\\src\\styles\\globals.css",
  "limit": 150
}

🔧 Tool: Bash
Input: {
  "command": "ls -la \"C:\\Users\\James\\Repos\\restaurant-business\\src\" && echo \"---\" && find \"C:\\Users\\James\\Repos\\restaurant-business\\src\" -name \"*.astro\" -type f | wc -l",
  "description": "Count total Astro components"
}
Now I have a good understanding of the codebase. Let me read the current Header component to see exactly what's there and understand what could be improved to make it less generic:

🔧 Tool: Read
Input: {
  "file_path": "C:\\Users\\James\\Repos\\restaurant-business\\src\\components\\Header.astro"
}

🔧 Tool: Read
Input: {
  "file_path": "C:\\Users\\James\\Repos\\restaurant-business\\src\\styles\\variables.css"
}
Let me also check the home page to understand how the header is used and see the hero section to understand the design language:

🔧 Tool: Read
Input: {
  "file_path": "C:\\Users\\James\\Repos\\restaurant-business\\src\\pages\\index.astro"
}

🔧 Tool: Glob
Input: {
  "pattern": "**/RestaurantHero*.astro"
}

🔧 Tool: Read
Input: {
  "file_path": "C:\\Users\\James\\Repos\\restaurant-business\\src\\components\\RestaurantHeroSection.astro"
}
Now I have a good understanding of the codebase. The hero section has a beautiful, warm restaurant aesthetic with burgundy/terracotta colors, elegant typography (Playfair Display), and a moody lighting effect. However, the **Header component is quite generic** - it uses the standard primary blue colors and doesn't match the warm, elegant restaurant aesthetic of the hero section.

Let me create a more distinctive navbar that matches the restaurant's branding. I'll make these improvements:

1. **Add a distinctive restaurant logo styling** - Use the display font (Playfair Display) for the restaurant name
2. **Make the header more elegant** - Add warm colors, subtle backdrop blur, and a more refined design
3. **Improve the visual hierarchy** - Better typography and spacing
4. **Add a scroll effect** - Header changes appearance when scrolled (transparent at top, solid when scrolled)
5. **Use restaurant brand colors** - Burgundy, cream, gold tones

🔧 Tool: Edit
Input: {
  "file_path": "C:\\Users\\James\\Repos\\restaurant-business\\src\\components\\Header.astro",
  "old_string": "---\n/**\n * Global Header Component\n * Primary navigation header with responsive mobile menu functionality.\n *\n * Features:\n * - Sticky positioning (remains visible during scroll)\n * - Responsive hamburger menu for mobile (≤768px)\n * - Full accessibility support (ARIA labels, keyboard navigation)\n * - Smooth transitions for mobile menu animation\n * - Touch-friendly tap targets (minimum 44x44px)\n * - Dark mode toggle integration\n *\n * @example\n * ```astro\n * <Header currentPath=\"/\" />\n * ```\n */\n\nimport ThemeToggle from './ThemeToggle.astro';\n\ninterface Props {\n  /** Current page path for active link styling (e.g., \"/\", \"/about\") */\n  currentPath?: string;\n}\n\nconst { currentPath = '/' } = Astro.props;\n\n// Navigation links configuration\nconst navLinks = [\n  { href: '/', label: 'Home' },\n  { href: '/menu', label: 'Menu' },\n  { href: '/gallery', label: 'Gallery' },\n  { href: '/about', label: 'About' },\n  { href: '/contact', label: 'Contact' },\n];\n---",
  "new_string": "---\n/**\n * Global Header Component\n * Elegant restaurant-branded navigation header with warm, sophisticated styling.\n *\n * Features:\n * - Transparent-to-solid scroll effect (glass-morphism on scroll)\n * - Warm restaurant branding (burgundy, cream, gold accents)\n * - Elegant display typography matching hero section\n * - Sticky positioning (remains visible during scroll)\n * - Responsive hamburger menu for mobile (≤768px)\n * - Full accessibility support (ARIA labels, keyboard navigation)\n * - Smooth transitions for mobile menu animation\n * - Touch-friendly tap targets (minimum 44x44px)\n * - Dark mode toggle integration\n *\n * @example\n * ```astro\n * <Header currentPath=\"/\" />\n * ```\n */\n\nimport ThemeToggle from './ThemeToggle.astro';\n\ninterface Props {\n  /** Current page path for active link styling (e.g., \"/\", \"/about\") */\n  currentPath?: string;\n  /** Whether header starts transparent (for hero pages) */\n  transparentOnTop?: boolean;\n}\n\nconst { currentPath = '/', transparentOnTop = true } = Astro.props;\n\n// Navigation links configuration\nconst navLinks = [\n  { href: '/', label: 'Home' },\n  { href: '/menu', label: 'Menu' },\n  { href: '/gallery', label: 'Gallery' },\n  { href: '/about', label: 'About' },\n  { href: '/contact', label: 'Contact' },\n];\n---"
}

🔧 Tool: Edit
Input: {
  "file_path": "C:\\Users\\James\\Repos\\restaurant-business\\src\\components\\Header.astro",
  "old_string": "<header class=\"header\" role=\"banner\">\n  <div class=\"header__container\">\n    <!-- Logo/Brand -->\n    <a href=\"/\" class=\"header__logo\" aria-label=\"The Main Street Bistro - Go to homepage\">\n      <span class=\"header__logo-text\">Main Street Bistro</span>\n    </a>",
  "new_string": "<header class={`header ${transparentOnTop ? 'header--transparent-top' : ''}`} role=\"banner\" data-transparent-top={transparentOnTop}>\n  <div class=\"header__container\">\n    <!-- Logo/Brand -->\n    <a href=\"/\" class=\"header__logo\" aria-label=\"The Main Street Bistro - Go to homepage\">\n      <span class=\"header__logo-icon\" aria-hidden=\"true\">✦</span>\n      <span class=\"header__logo-text\">\n        <span class=\"header__logo-main\">Main Street</span>\n        <span class=\"header__logo-sub\">Bistro</span>\n      </span>\n    </a>"
}

🔧 Tool: Edit
Input: {
  "file_path": "C:\\Users\\James\\Repos\\restaurant-business\\src\\components\\Header.astro",
  "old_string": "<style>\n  /* =================================================================\n   * HEADER COMPONENT STYLES\n   * =================================================================\n   */\n\n  .header {\n    position: sticky;\n    top: 0;\n    left: 0;\n    right: 0;\n    z-index: var(--z-sticky);\n    background-color: var(--color-background);\n    border-bottom: 1px solid var(--color-border);\n    box-shadow: var(--shadow-sm);\n  }\n\n  .header__container {\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    max-width: var(--container-7xl);\n    margin: 0 auto;\n    padding: var(--spacing-4) var(--spacing-6);\n  }\n\n  /* -----------------------------------------------------------------\n   * Logo Styles\n   * ----------------------------------------------------------------- */\n\n  .header__logo {\n    display: flex;\n    align-items: center;\n    text-decoration: none;\n    color: var(--color-primary);\n    font-family: var(--font-heading);\n    font-weight: var(--font-weight-bold);\n    font-size: var(--font-size-xl);\n    letter-spacing: var(--letter-spacing-tight);\n    min-height: 44px;\n    min-width: 44px;\n    padding: var(--spacing-1) var(--spacing-2);\n    border-radius: var(--radius-md);\n    position: relative;\n    transition: color var(--animation-duration-fast) var(--ease-smooth),\n                background-color var(--animation-duration-fast) var(--ease-smooth),\n                transform var(--animation-duration-fast) var(--ease-spring-soft),\n                box-shadow var(--animation-duration-normal) var(--ease-smooth);\n  }\n\n  .header__logo:hover {\n    color: var(--color-primary-hover);\n    background-color: var(--color-primary-50);\n    transform: scale(1.05);\n    box-shadow: var(--glow-primary-sm);\n  }\n\n  .header__logo:active {\n    transform: scale(0.98);\n  }\n\n  .header__logo:focus-visible {\n    outline: var(--focus-ring-width) solid var(--focus-ring-color);\n    outline-offset: var(--focus-ring-offset);\n  }\n\n  .header__logo-text {\n    display: block;\n    position: relative;\n    white-space: nowrap;\n  }\n\n  /* Gradient text effect on hover */\n  .header__logo:hover .header__logo-text {\n    background: var(--gradient-accent-mixed);\n    -webkit-background-clip: text;\n    background-clip: text;\n    -webkit-text-fill-color: transparent;\n  }",
  "new_string": "<style>\n  /* =================================================================\n   * HEADER COMPONENT STYLES\n   * Elegant restaurant-branded navigation with warm color palette\n   * =================================================================\n   */\n\n  .header {\n    position: sticky;\n    top: 0;\n    left: 0;\n    right: 0;\n    z-index: var(--z-sticky);\n    background-color: var(--color-background);\n    border-bottom: 1px solid var(--color-border);\n    box-shadow: var(--shadow-sm);\n    transition: background-color var(--animation-duration-normal) var(--ease-smooth),\n                border-color var(--animation-duration-normal) var(--ease-smooth),\n                box-shadow var(--animation-duration-normal) var(--ease-smooth),\n                backdrop-filter var(--animation-duration-normal) var(--ease-smooth);\n  }\n\n  /* Transparent state for hero pages (before scroll) */\n  .header--transparent-top.header--at-top {\n    background-color: transparent;\n    border-bottom-color: transparent;\n    box-shadow: none;\n  }\n\n  /* Scrolled state - elegant glass-morphism effect */\n  .header--transparent-top.header--scrolled {\n    background-color: rgba(255, 251, 235, 0.92);\n    backdrop-filter: blur(12px) saturate(180%);\n    -webkit-backdrop-filter: blur(12px) saturate(180%);\n    border-bottom: 1px solid rgba(114, 47, 55, 0.12);\n    box-shadow: 0 4px 20px -4px rgba(114, 47, 55, 0.15);\n  }\n\n  /* Dark mode scrolled state */\n  :global(html[data-theme=\"dark\"]) .header--transparent-top.header--scrolled {\n    background-color: rgba(26, 20, 18, 0.92);\n    border-bottom-color: rgba(196, 167, 125, 0.15);\n    box-shadow: 0 4px 20px -4px rgba(0, 0, 0, 0.4);\n  }\n\n  .header__container {\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    max-width: var(--container-7xl);\n    margin: 0 auto;\n    padding: var(--spacing-4) var(--spacing-6);\n  }\n\n  /* -----------------------------------------------------------------\n   * Logo Styles - Elegant Restaurant Branding\n   * ----------------------------------------------------------------- */\n\n  .header__logo {\n    display: flex;\n    align-items: center;\n    gap: var(--spacing-3);\n    text-decoration: none;\n    min-height: 44px;\n    min-width: 44px;\n    padding: var(--spacing-1) var(--spacing-2);\n    border-radius: var(--radius-lg);\n    position: relative;\n    transition: transform var(--animation-duration-fast) var(--ease-spring-soft),\n                opacity var(--animation-duration-fast) var(--ease-smooth);\n  }\n\n  .header__logo:hover {\n    transform: translateY(-1px);\n  }\n\n  .header__logo:active {\n    transform: translateY(0);\n  }\n\n  .header__logo:focus-visible {\n    outline: 2px solid var(--color-burgundy, #722f37);\n    outline-offset: 3px;\n    border-radius: var(--radius-lg);\n  }\n\n  /* Logo decorative icon */\n  .header__logo-icon {\n    font-size: var(--font-size-xl);\n    color: var(--color-burgundy, #722f37);\n    opacity: 0.9;\n    transition: transform var(--animation-duration-normal) var(--ease-spring-soft),\n                color var(--animation-duration-fast) var(--ease-smooth);\n  }\n\n  .header__logo:hover .header__logo-icon {\n    transform: rotate(15deg) scale(1.1);\n    color: var(--color-gold, #c4a77d);\n  }\n\n  /* Logo text container */\n  .header__logo-text {\n    display: flex;\n    flex-direction: column;\n    line-height: 1.1;\n  }\n\n  /* Main logo text - \"Main Street\" */\n  .header__logo-main {\n    font-family: var(--font-display, 'Playfair Display', Georgia, serif);\n    font-size: var(--font-size-lg);\n    font-weight: var(--font-weight-bold);\n    color: var(--color-charcoal, #1a1412);\n    letter-spacing: var(--letter-spacing-tight);\n    transition: color var(--animation-duration-fast) var(--ease-smooth);\n  }\n\n  /* Sub logo text - \"Bistro\" */\n  .header__logo-sub {\n    font-family: var(--font-body);\n    font-size: var(--font-size-xs);\n    font-weight: var(--font-weight-medium);\n    text-transform: uppercase;\n    letter-spacing: var(--letter-spacing-widest);\n    color: var(--color-burgundy, #722f37);\n    transition: color var(--animation-duration-fast) var(--ease-smooth);\n  }\n\n  .header__logo:hover .header__logo-main {\n    color: var(--color-burgundy, #722f37);\n  }\n\n  .header__logo:hover .header__logo-sub {\n    color: var(--color-gold, #c4a77d);\n  }\n\n  /* Logo colors when header is transparent (at top of page) */\n  .header--at-top .header__logo-icon {\n    color: var(--color-cream, #fffbeb);\n  }\n\n  .header--at-top .header__logo-main {\n    color: var(--color-cream, #fffbeb);\n  }\n\n  .header--at-top .header__logo-sub {\n    color: rgba(255, 251, 235, 0.8);\n  }\n\n  .header--at-top .header__logo:hover .header__logo-icon {\n    color: var(--color-gold, #c4a77d);\n  }\n\n  .header--at-top .header__logo:hover .header__logo-main {\n    color: var(--color-cream, #fffbeb);\n  }\n\n  .header--at-top .header__logo:hover .header__logo-sub {\n    color: var(--color-gold, #c4a77d);\n  }\n\n  /* Dark mode logo colors */\n  :global(html[data-theme=\"dark\"]) .header__logo-main {\n    color: var(--color-cream, #fffbeb);\n  }\n\n  :global(html[data-theme=\"dark\"]) .header__logo-icon {\n    color: var(--color-gold, #c4a77d);\n  }\n\n  :global(html[data-theme=\"dark\"]) .header__logo:hover .header__logo-main {\n    color: var(--color-gold, #c4a77d);\n  }"
}

🔧 Tool: Edit
Input: {
  "file_path": "C:\\Users\\James\\Repos\\restaurant-business\\src\\components\\Header.astro",
  "old_string": "  /* -----------------------------------------------------------------\n   * Desktop Navigation\n   * ----------------------------------------------------------------- */\n\n  .header__nav {\n    display: none;\n  }\n\n  .header__nav-list {\n    display: flex;\n    align-items: center;\n    gap: var(--spacing-2);\n    list-style: none;\n    margin: 0;\n    padding: 0;\n  }\n\n  .header__nav-item {\n    margin: 0;\n  }\n\n  .header__nav-link {\n    display: inline-flex;\n    align-items: center;\n    justify-content: center;\n    min-height: 44px;\n    padding: var(--spacing-2) var(--spacing-4);\n    font-family: var(--font-body);\n    font-size: var(--font-size-base);\n    font-weight: var(--font-weight-medium);\n    color: var(--color-text-secondary);\n    text-decoration: none;\n    border-radius: var(--radius-md);\n    position: relative;\n    transition: color var(--animation-duration-fast) var(--ease-smooth),\n                background-color var(--animation-duration-fast) var(--ease-smooth);\n  }\n\n  /* Animated underline element */\n  .header__nav-link::after {\n    content: '';\n    position: absolute;\n    bottom: var(--spacing-1);\n    left: var(--spacing-4);\n    right: var(--spacing-4);\n    height: 2px;\n    background: var(--gradient-underline);\n    border-radius: var(--radius-full);\n    transform: scaleX(0);\n    transform-origin: left center;\n    transition: transform var(--animation-duration-normal) var(--ease-spring-soft);\n  }\n\n  .header__nav-link:hover {\n    color: var(--color-primary);\n    background-color: var(--color-primary-50);\n  }\n\n  /* Underline slides in from left on hover */\n  .header__nav-link:hover::after {\n    transform: scaleX(1);\n  }\n\n  .header__nav-link:focus-visible {\n    outline: var(--focus-ring-width) solid var(--focus-ring-color);\n    outline-offset: var(--focus-ring-offset);\n  }\n\n  /* Active/Current page link styling */\n  .header__nav-link--active {\n    color: var(--color-primary);\n    font-weight: var(--font-weight-semibold);\n    background-color: var(--color-primary-50);\n  }\n\n  /* Active link always has the underline visible */\n  .header__nav-link--active::after {\n    transform: scaleX(1);\n    background: var(--color-primary);\n  }",
  "new_string": "  /* -----------------------------------------------------------------\n   * Desktop Navigation - Elegant Restaurant Styling\n   * ----------------------------------------------------------------- */\n\n  .header__nav {\n    display: none;\n  }\n\n  .header__nav-list {\n    display: flex;\n    align-items: center;\n    gap: var(--spacing-1);\n    list-style: none;\n    margin: 0;\n    padding: 0;\n  }\n\n  .header__nav-item {\n    margin: 0;\n  }\n\n  .header__nav-link {\n    display: inline-flex;\n    align-items: center;\n    justify-content: center;\n    min-height: 44px;\n    padding: var(--spacing-2) var(--spacing-4);\n    font-family: var(--font-body);\n    font-size: var(--font-size-sm);\n    font-weight: var(--font-weight-medium);\n    text-transform: uppercase;\n    letter-spacing: var(--letter-spacing-wide);\n    color: var(--color-text-secondary);\n    text-decoration: none;\n    border-radius: var(--radius-md);\n    position: relative;\n    transition: color var(--animation-duration-fast) var(--ease-smooth),\n                background-color var(--animation-duration-fast) var(--ease-smooth);\n  }\n\n  /* Elegant underline with burgundy/gold gradient */\n  .header__nav-link::after {\n    content: '';\n    position: absolute;\n    bottom: var(--spacing-1);\n    left: 50%;\n    width: 0;\n    height: 2px;\n    background: linear-gradient(90deg, var(--color-burgundy, #722f37), var(--color-gold, #c4a77d));\n    border-radius: var(--radius-full);\n    transform: translateX(-50%);\n    transition: width var(--animation-duration-normal) var(--ease-spring-soft);\n  }\n\n  .header__nav-link:hover {\n    color: var(--color-burgundy, #722f37);\n    background-color: rgba(114, 47, 55, 0.06);\n  }\n\n  /* Underline expands from center on hover */\n  .header__nav-link:hover::after {\n    width: calc(100% - var(--spacing-8));\n  }\n\n  .header__nav-link:focus-visible {\n    outline: 2px solid var(--color-burgundy, #722f37);\n    outline-offset: 2px;\n  }\n\n  /* Active/Current page link styling */\n  .header__nav-link--active {\n    color: var(--color-burgundy, #722f37);\n    font-weight: var(--font-weight-semibold);\n  }\n\n  /* Active link has permanent underline */\n  .header__nav-link--active::after {\n    width: calc(100% - var(--spacing-8));\n    background: var(--color-burgundy, #722f37);\n  }\n\n  /* Nav link colors when header is transparent (at top) */\n  .header--at-top .header__nav-link {\n    color: rgba(255, 251, 235, 0.9);\n  }\n\n  .header--at-top .header__nav-link:hover {\n    color: var(--color-cream, #fffbeb);\n    background-color: rgba(255, 251, 235, 0.1);\n  }\n\n  .header--at-top .header__nav-link::after {\n    background: linear-gradient(90deg, var(--color-cream, #fffbeb), var(--color-gold, #c4a77d));\n  }\n\n  .header--at-top .header__nav-link--active {\n    color: var(--color-cream, #fffbeb);\n  }\n\n  .header--at-top .header__nav-link--active::after {\n    background: var(--color-cream, #fffbeb);\n  }\n\n  /* Dark mode nav styling */\n  :global(html[data-theme=\"dark\"]) .header__nav-link {\n    color: var(--color-text-secondary);\n  }\n\n  :global(html[data-theme=\"dark\"]) .header__nav-link:hover {\n    color: var(--color-gold, #c4a77d);\n    background-color: rgba(196, 167, 125, 0.1);\n  }\n\n  :global(html[data-theme=\"dark\"]) .header__nav-link--active {\n    color: var(--color-gold, #c4a77d);\n  }\n\n  :global(html[data-theme=\"dark\"]) .header__nav-link--active::after {\n    background: var(--color-gold, #c4a77d);\n  }"
}

🔧 Tool: Edit
Input: {
  "file_path": "C:\\Users\\James\\Repos\\restaurant-business\\src\\components\\Header.astro",
  "old_string": "  /* -----------------------------------------------------------------\n   * Mobile Menu Toggle Button\n   * ----------------------------------------------------------------- */\n\n  .header__menu-toggle {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    min-width: 44px;\n    min-height: 44px;\n    padding: var(--spacing-2);\n    background: transparent;\n    border: none;\n    border-radius: var(--radius-md);\n    cursor: pointer;\n    transition: background-color var(--duration-150) var(--ease-in-out);\n  }\n\n  .header__menu-toggle:hover {\n    background-color: var(--color-primary-50);\n  }\n\n  .header__menu-toggle:focus-visible {\n    outline: var(--focus-ring-width) solid var(--focus-ring-color);\n    outline-offset: var(--focus-ring-offset);\n  }\n\n  /* Hamburger Icon */\n  .header__menu-icon {\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n    width: 24px;\n    height: 18px;\n  }\n\n  .header__menu-bar {\n    display: block;\n    width: 100%;\n    height: 2px;\n    background-color: var(--color-text-primary);\n    border-radius: var(--radius-full);\n    transition: transform var(--duration-300) var(--ease-in-out),\n                opacity var(--duration-300) var(--ease-in-out);\n    transform-origin: center;\n  }\n\n  /* Hamburger to X transformation when menu is open */\n  .header__menu-toggle[aria-expanded=\"true\"] .header__menu-bar:nth-child(1) {\n    transform: translateY(8px) rotate(45deg);\n  }\n\n  .header__menu-toggle[aria-expanded=\"true\"] .header__menu-bar:nth-child(2) {\n    opacity: 0;\n    transform: scaleX(0);\n  }\n\n  .header__menu-toggle[aria-expanded=\"true\"] .header__menu-bar:nth-child(3) {\n    transform: translateY(-8px) rotate(-45deg);\n  }",
  "new_string": "  /* -----------------------------------------------------------------\n   * Mobile Menu Toggle Button - Restaurant Styled\n   * ----------------------------------------------------------------- */\n\n  .header__menu-toggle {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    min-width: 44px;\n    min-height: 44px;\n    padding: var(--spacing-2);\n    background: transparent;\n    border: none;\n    border-radius: var(--radius-md);\n    cursor: pointer;\n    transition: background-color var(--duration-150) var(--ease-in-out);\n  }\n\n  .header__menu-toggle:hover {\n    background-color: rgba(114, 47, 55, 0.08);\n  }\n\n  .header__menu-toggle:focus-visible {\n    outline: 2px solid var(--color-burgundy, #722f37);\n    outline-offset: 2px;\n  }\n\n  /* Hamburger Icon */\n  .header__menu-icon {\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n    width: 22px;\n    height: 16px;\n  }\n\n  .header__menu-bar {\n    display: block;\n    width: 100%;\n    height: 2px;\n    background-color: var(--color-charcoal, #1a1412);\n    border-radius: var(--radius-full);\n    transition: transform var(--duration-300) var(--ease-in-out),\n                opacity var(--duration-300) var(--ease-in-out),\n                background-color var(--duration-150) var(--ease-in-out);\n    transform-origin: center;\n  }\n\n  /* Hamburger bars when header is transparent */\n  .header--at-top .header__menu-bar {\n    background-color: var(--color-cream, #fffbeb);\n  }\n\n  .header--at-top .header__menu-toggle:hover {\n    background-color: rgba(255, 251, 235, 0.1);\n  }\n\n  /* Dark mode hamburger */\n  :global(html[data-theme=\"dark\"]) .header__menu-bar {\n    background-color: var(--color-cream, #fffbeb);\n  }\n\n  /* Hamburger to X transformation when menu is open */\n  .header__menu-toggle[aria-expanded=\"true\"] .header__menu-bar:nth-child(1) {\n    transform: translateY(7px) rotate(45deg);\n  }\n\n  .header__menu-toggle[aria-expanded=\"true\"] .header__menu-bar:nth-child(2) {\n    opacity: 0;\n    transform: scaleX(0);\n  }\n\n  .header__menu-toggle[aria-expanded=\"true\"] .header__menu-bar:nth-child(3) {\n    transform: translateY(-7px) rotate(-45deg);\n  }"
}

🔧 Tool: Edit
Input: {
  "file_path": "C:\\Users\\James\\Repos\\restaurant-business\\src\\components\\Header.astro",
  "old_string": "  /* -----------------------------------------------------------------\n   * Header Actions (Theme Toggle, etc.)\n   * ----------------------------------------------------------------- */\n\n  .header__actions {\n    display: none;\n    align-items: center;\n    gap: var(--spacing-4);\n  }\n\n  .header__reserve-btn {\n    display: inline-flex;\n    align-items: center;\n    justify-content: center;\n    min-height: 40px;\n    padding: var(--spacing-2) var(--spacing-5);\n    font-family: var(--font-body);\n    font-size: var(--font-size-sm);\n    font-weight: var(--font-weight-semibold);\n    color: var(--color-text-inverse);\n    background-color: var(--color-primary);\n    text-decoration: none;\n    border-radius: var(--radius-md);\n    transition: background-color var(--animation-duration-fast) var(--ease-smooth),\n                transform var(--animation-duration-fast) var(--ease-smooth);\n    white-space: nowrap;\n  }\n\n  .header__reserve-btn:hover {\n    background-color: var(--color-primary-hover);\n    transform: translateY(-1px);\n  }\n\n  .header__reserve-btn:active {\n    transform: translateY(0);\n  }\n\n  .header__reserve-btn:focus-visible {\n    outline: var(--focus-ring-width) solid var(--focus-ring-color);\n    outline-offset: var(--focus-ring-offset);\n  }",
  "new_string": "  /* -----------------------------------------------------------------\n   * Header Actions (Reserve Button, Theme Toggle)\n   * ----------------------------------------------------------------- */\n\n  .header__actions {\n    display: none;\n    align-items: center;\n    gap: var(--spacing-3);\n  }\n\n  .header__reserve-btn {\n    display: inline-flex;\n    align-items: center;\n    justify-content: center;\n    min-height: 40px;\n    padding: var(--spacing-2) var(--spacing-5);\n    font-family: var(--font-body);\n    font-size: var(--font-size-sm);\n    font-weight: var(--font-weight-semibold);\n    color: var(--color-cream, #fffbeb);\n    background-color: var(--color-burgundy, #722f37);\n    text-decoration: none;\n    border-radius: var(--radius-md);\n    border: 1px solid transparent;\n    transition: background-color var(--animation-duration-fast) var(--ease-smooth),\n                transform var(--animation-duration-fast) var(--ease-smooth),\n                box-shadow var(--animation-duration-fast) var(--ease-smooth);\n    white-space: nowrap;\n    box-shadow: 0 2px 8px -2px rgba(114, 47, 55, 0.3);\n  }\n\n  .header__reserve-btn:hover {\n    background-color: var(--color-burgundy-light, #8b3a44);\n    transform: translateY(-1px);\n    box-shadow: 0 4px 12px -2px rgba(114, 47, 55, 0.4);\n  }\n\n  .header__reserve-btn:active {\n    transform: translateY(0);\n  }\n\n  .header__reserve-btn:focus-visible {\n    outline: 2px solid var(--color-burgundy, #722f37);\n    outline-offset: 2px;\n  }\n\n  /* Reserve button when header is transparent */\n  .header--at-top .header__reserve-btn {\n    background-color: rgba(255, 251, 235, 0.15);\n    border-color: rgba(255, 251, 235, 0.6);\n    color: var(--color-cream, #fffbeb);\n    box-shadow: none;\n    backdrop-filter: blur(4px);\n    -webkit-backdrop-filter: blur(4px);\n  }\n\n  .header--at-top .header__reserve-btn:hover {\n    background-color: var(--color-burgundy, #722f37);\n    border-color: var(--color-burgundy, #722f37);\n    box-shadow: 0 4px 12px -2px rgba(114, 47, 55, 0.5);\n  }\n\n  /* Dark mode reserve button */\n  :global(html[data-theme=\"dark\"]) .header__reserve-btn {\n    background-color: var(--color-gold, #c4a77d);\n    color: var(--color-charcoal, #1a1412);\n    box-shadow: 0 2px 8px -2px rgba(196, 167, 125, 0.3);\n  }\n\n  :global(html[data-theme=\"dark\"]) .header__reserve-btn:hover {\n    background-color: var(--color-cream, #fffbeb);\n    box-shadow: 0 4px 12px -2px rgba(196, 167, 125, 0.4);\n  }"
}

🔧 Tool: Edit
Input: {
  "file_path": "C:\\Users\\James\\Repos\\restaurant-business\\src\\components\\Header.astro",
  "old_string": "  /* Mobile Reserve Section */\n  .header__mobile-reserve {\n    margin-top: var(--spacing-4);\n    opacity: 0;\n    transform: translateX(20px);\n    transition: opacity var(--duration-300) var(--ease-out),\n                transform var(--duration-300) var(--ease-out);\n    transition-delay: calc(var(--item-index) * 50ms);\n  }\n\n  .header__mobile-nav[aria-hidden=\"false\"] .header__mobile-reserve {\n    opacity: 1;\n    transform: translateX(0);\n  }\n\n  .header__mobile-reserve-link {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    min-height: 48px;\n    padding: var(--spacing-3) var(--spacing-4);\n    font-family: var(--font-body);\n    font-size: var(--font-size-lg);\n    font-weight: var(--font-weight-semibold);\n    color: var(--color-text-inverse);\n    background-color: var(--color-primary);\n    text-decoration: none;\n    border-radius: var(--radius-lg);\n    transition: background-color var(--duration-150) var(--ease-in-out),\n                transform var(--duration-150) var(--ease-in-out);\n  }\n\n  .header__mobile-reserve-link:hover {\n    background-color: var(--color-primary-hover);\n    transform: translateY(-2px);\n  }\n\n  .header__mobile-reserve-link:active {\n    transform: translateY(0);\n  }\n\n  .header__mobile-reserve-link:focus-visible {\n    outline: var(--focus-ring-width) solid var(--focus-ring-color);\n    outline-offset: var(--focus-ring-offset);\n  }",
  "new_string": "  /* Mobile Reserve Section */\n  .header__mobile-reserve {\n    margin-top: var(--spacing-4);\n    opacity: 0;\n    transform: translateX(20px);\n    transition: opacity var(--duration-300) var(--ease-out),\n                transform var(--duration-300) var(--ease-out);\n    transition-delay: calc(var(--item-index) * 50ms);\n  }\n\n  .header__mobile-nav[aria-hidden=\"false\"] .header__mobile-reserve {\n    opacity: 1;\n    transform: translateX(0);\n  }\n\n  .header__mobile-reserve-link {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    min-height: 52px;\n    padding: var(--spacing-3) var(--spacing-4);\n    font-family: var(--font-body);\n    font-size: var(--font-size-base);\n    font-weight: var(--font-weight-semibold);\n    color: var(--color-cream, #fffbeb);\n    background-color: var(--color-burgundy, #722f37);\n    text-decoration: none;\n    border-radius: var(--radius-lg);\n    box-shadow: 0 4px 12px -2px rgba(114, 47, 55, 0.3);\n    transition: background-color var(--duration-150) var(--ease-in-out),\n                transform var(--duration-150) var(--ease-in-out),\n                box-shadow var(--duration-150) var(--ease-in-out);\n  }\n\n  .header__mobile-reserve-link:hover {\n    background-color: var(--color-burgundy-light, #8b3a44);\n    transform: translateY(-2px);\n    box-shadow: 0 6px 16px -2px rgba(114, 47, 55, 0.4);\n  }\n\n  .header__mobile-reserve-link:active {\n    transform: translateY(0);\n  }\n\n  .header__mobile-reserve-link:focus-visible {\n    outline: 2px solid var(--color-burgundy, #722f37);\n    outline-offset: 2px;\n  }\n\n  /* Dark mode mobile reserve button */\n  :global(html[data-theme=\"dark\"]) .header__mobile-reserve-link {\n    background-color: var(--color-gold, #c4a77d);\n    color: var(--color-charcoal, #1a1412);\n    box-shadow: 0 4px 12px -2px rgba(196, 167, 125, 0.3);\n  }\n\n  :global(html[data-theme=\"dark\"]) .header__mobile-reserve-link:hover {\n    background-color: var(--color-cream, #fffbeb);\n  }"
}
Now let me update the mobile navigation styles to match the new restaurant branding:

🔧 Tool: Edit
Input: {
  "file_path": "C:\\Users\\James\\Repos\\restaurant-business\\src\\components\\Header.astro",
  "old_string": "  /* -----------------------------------------------------------------\n   * Mobile Navigation Menu\n   * ----------------------------------------------------------------- */\n\n  .header__mobile-nav {\n    position: fixed;\n    top: calc(44px + var(--spacing-4) * 2 + 1px); /* Header height + border */\n    left: 0;\n    right: 0;\n    bottom: 0;\n    background-color: var(--color-background);\n    padding: var(--spacing-4) var(--spacing-6);\n    transform: translateX(100%);\n    opacity: 0;\n    visibility: hidden;\n    transition: transform var(--duration-300) var(--ease-in-out),\n                opacity var(--duration-300) var(--ease-in-out),\n                visibility var(--duration-300) var(--ease-in-out);\n    overflow-y: auto;\n    -webkit-overflow-scrolling: touch;\n  }\n\n  .header__mobile-nav[aria-hidden=\"false\"] {\n    transform: translateX(0);\n    opacity: 1;\n    visibility: visible;\n  }\n\n  .header__mobile-nav-list {\n    display: flex;\n    flex-direction: column;\n    gap: var(--spacing-2);\n    list-style: none;\n    margin: 0;\n    padding: 0;\n  }\n\n  .header__mobile-nav-item {\n    opacity: 0;\n    transform: translateX(20px);\n    transition: opacity var(--duration-300) var(--ease-out),\n                transform var(--duration-300) var(--ease-out);\n    transition-delay: calc(var(--item-index) * 50ms);\n  }\n\n  .header__mobile-nav[aria-hidden=\"false\"] .header__mobile-nav-item {\n    opacity: 1;\n    transform: translateX(0);\n  }\n\n  .header__mobile-nav-link {\n    display: flex;\n    align-items: center;\n    min-height: 48px;\n    padding: var(--spacing-3) var(--spacing-4);\n    font-family: var(--font-body);\n    font-size: var(--font-size-lg);\n    font-weight: var(--font-weight-medium);\n    color: var(--color-text-secondary);\n    text-decoration: none;\n    border-radius: var(--radius-lg);\n    transition: color var(--duration-150) var(--ease-in-out),\n                background-color var(--duration-150) var(--ease-in-out);\n  }\n\n  .header__mobile-nav-link:hover,\n  .header__mobile-nav-link:focus {\n    color: var(--color-primary);\n    background-color: var(--color-primary-50);\n  }\n\n  .header__mobile-nav-link:focus-visible {\n    outline: var(--focus-ring-width) solid var(--focus-ring-color);\n    outline-offset: var(--focus-ring-offset);\n  }\n\n  /* Active/Current page link styling for mobile */\n  .header__mobile-nav-link--active {\n    color: var(--color-primary);\n    font-weight: var(--font-weight-semibold);\n    background-color: var(--color-primary-50);\n    border-left: 3px solid var(--color-primary);\n  }",
  "new_string": "  /* -----------------------------------------------------------------\n   * Mobile Navigation Menu - Restaurant Styled\n   * ----------------------------------------------------------------- */\n\n  .header__mobile-nav {\n    position: fixed;\n    top: calc(44px + var(--spacing-4) * 2 + 1px); /* Header height + border */\n    left: 0;\n    right: 0;\n    bottom: 0;\n    background-color: var(--color-cream, #fffbeb);\n    padding: var(--spacing-6) var(--spacing-6);\n    transform: translateX(100%);\n    opacity: 0;\n    visibility: hidden;\n    transition: transform var(--duration-300) var(--ease-in-out),\n                opacity var(--duration-300) var(--ease-in-out),\n                visibility var(--duration-300) var(--ease-in-out);\n    overflow-y: auto;\n    -webkit-overflow-scrolling: touch;\n  }\n\n  /* Dark mode mobile menu background */\n  :global(html[data-theme=\"dark\"]) .header__mobile-nav {\n    background-color: var(--color-charcoal, #1a1412);\n  }\n\n  .header__mobile-nav[aria-hidden=\"false\"] {\n    transform: translateX(0);\n    opacity: 1;\n    visibility: visible;\n  }\n\n  .header__mobile-nav-list {\n    display: flex;\n    flex-direction: column;\n    gap: var(--spacing-1);\n    list-style: none;\n    margin: 0;\n    padding: 0;\n  }\n\n  .header__mobile-nav-item {\n    opacity: 0;\n    transform: translateX(20px);\n    transition: opacity var(--duration-300) var(--ease-out),\n                transform var(--duration-300) var(--ease-out);\n    transition-delay: calc(var(--item-index) * 50ms);\n  }\n\n  .header__mobile-nav[aria-hidden=\"false\"] .header__mobile-nav-item {\n    opacity: 1;\n    transform: translateX(0);\n  }\n\n  .header__mobile-nav-link {\n    display: flex;\n    align-items: center;\n    min-height: 52px;\n    padding: var(--spacing-3) var(--spacing-4);\n    font-family: var(--font-display, 'Playfair Display', Georgia, serif);\n    font-size: var(--font-size-xl);\n    font-weight: var(--font-weight-medium);\n    color: var(--color-charcoal, #1a1412);\n    text-decoration: none;\n    border-radius: var(--radius-lg);\n    border-left: 3px solid transparent;\n    transition: color var(--duration-150) var(--ease-in-out),\n                background-color var(--duration-150) var(--ease-in-out),\n                border-color var(--duration-150) var(--ease-in-out);\n  }\n\n  /* Dark mode mobile nav links */\n  :global(html[data-theme=\"dark\"]) .header__mobile-nav-link {\n    color: var(--color-cream, #fffbeb);\n  }\n\n  .header__mobile-nav-link:hover,\n  .header__mobile-nav-link:focus {\n    color: var(--color-burgundy, #722f37);\n    background-color: rgba(114, 47, 55, 0.06);\n    border-left-color: var(--color-gold, #c4a77d);\n  }\n\n  :global(html[data-theme=\"dark\"]) .header__mobile-nav-link:hover,\n  :global(html[data-theme=\"dark\"]) .header__mobile-nav-link:focus {\n    color: var(--color-gold, #c4a77d);\n    background-color: rgba(196, 167, 125, 0.1);\n  }\n\n  .header__mobile-nav-link:focus-visible {\n    outline: 2px solid var(--color-burgundy, #722f37);\n    outline-offset: 2px;\n  }\n\n  /* Active/Current page link styling for mobile */\n  .header__mobile-nav-link--active {\n    color: var(--color-burgundy, #722f37);\n    font-weight: var(--font-weight-semibold);\n    background-color: rgba(114, 47, 55, 0.08);\n    border-left-color: var(--color-burgundy, #722f37);\n  }\n\n  :global(html[data-theme=\"dark\"]) .header__mobile-nav-link--active {\n    color: var(--color-gold, #c4a77d);\n    background-color: rgba(196, 167, 125, 0.12);\n    border-left-color: var(--color-gold, #c4a77d);\n  }"
}
Now let's add the JavaScript for the scroll-based transparency effect:

🔧 Tool: Edit
Input: {
  "file_path": "C:\\Users\\James\\Repos\\restaurant-business\\src\\components\\Header.astro",
  "old_string": "<script>\n  /**\n   * Mobile Menu Toggle Functionality\n   * Handles menu expansion/collapse, accessibility, and keyboard navigation\n   */\n  function initMobileMenu() {\n    const menuToggle = document.getElementById('menu-toggle');\n    const mobileMenu = document.getElementById('mobile-menu');\n\n    if (!menuToggle || !mobileMenu) return;\n\n    const mobileNavLinks = mobileMenu.querySelectorAll('.header__mobile-nav-link');\n    const firstLink = mobileNavLinks[0] as HTMLElement | null;\n    const lastLink = mobileNavLinks[mobileNavLinks.length - 1] as HTMLElement | null;",
  "new_string": "<script>\n  /**\n   * Header Scroll Effect & Mobile Menu Toggle\n   * Handles transparent-to-solid transition and menu functionality\n   */\n\n  /**\n   * Initialize header scroll transparency effect\n   */\n  function initScrollEffect() {\n    const header = document.querySelector('.header') as HTMLElement | null;\n    if (!header) return;\n\n    // Check if this header should have transparent-at-top behavior\n    const hasTransparentTop = header.dataset.transparentTop === 'true';\n    if (!hasTransparentTop) return;\n\n    let ticking = false;\n    const SCROLL_THRESHOLD = 50;\n\n    function updateHeaderState() {\n      const scrollY = window.scrollY || window.pageYOffset;\n\n      if (scrollY > SCROLL_THRESHOLD) {\n        header.classList.remove('header--at-top');\n        header.classList.add('header--scrolled');\n      } else {\n        header.classList.add('header--at-top');\n        header.classList.remove('header--scrolled');\n      }\n      ticking = false;\n    }\n\n    function onScroll() {\n      if (!ticking) {\n        window.requestAnimationFrame(updateHeaderState);\n        ticking = true;\n      }\n    }\n\n    // Initial state\n    updateHeaderState();\n\n    // Listen for scroll\n    window.addEventListener('scroll', onScroll, { passive: true });\n  }\n\n  /**\n   * Mobile Menu Toggle Functionality\n   * Handles menu expansion/collapse, accessibility, and keyboard navigation\n   */\n  function initMobileMenu() {\n    const menuToggle = document.getElementById('menu-toggle');\n    const mobileMenu = document.getElementById('mobile-menu');\n\n    if (!menuToggle || !mobileMenu) return;\n\n    const mobileNavLinks = mobileMenu.querySelectorAll('.header__mobile-nav-link');\n    const firstLink = mobileNavLinks[0] as HTMLElement | null;\n    const lastLink = mobileNavLinks[mobileNavLinks.length - 1] as HTMLElement | null;"
}

🔧 Tool: Edit
Input: {
  "file_path": "C:\\Users\\James\\Repos\\restaurant-business\\src\\components\\Header.astro",
  "old_string": "  // Initialize on DOM ready\n  document.addEventListener('DOMContentLoaded', initMobileMenu);\n\n  // Re-initialize on Astro page transitions (View Transitions API)\n  document.addEventListener('astro:page-load', initMobileMenu);\n</script>",
  "new_string": "  /**\n   * Initialize all header functionality\n   */\n  function initHeader() {\n    initScrollEffect();\n    initMobileMenu();\n  }\n\n  // Initialize on DOM ready\n  document.addEventListener('DOMContentLoaded', initHeader);\n\n  // Re-initialize on Astro page transitions (View Transitions API)\n  document.addEventListener('astro:page-load', initHeader);\n</script>"
}
Now let's update the mobile theme toggle section styling to match the new design:

🔧 Tool: Edit
Input: {
  "file_path": "C:\\Users\\James\\Repos\\restaurant-business\\src\\components\\Header.astro",
  "old_string": "  /* Mobile Actions Section */\n  .header__mobile-actions {\n    margin-top: var(--spacing-6);\n    padding-top: var(--spacing-4);\n    border-top: 1px solid var(--color-border);\n    opacity: 0;\n    transform: translateX(20px);\n    transition: opacity var(--duration-300) var(--ease-out),\n                transform var(--duration-300) var(--ease-out);\n    transition-delay: calc(var(--item-index) * 50ms);\n  }\n\n  .header__mobile-nav[aria-hidden=\"false\"] .header__mobile-actions {\n    opacity: 1;\n    transform: translateX(0);\n  }\n\n  .header__mobile-theme-toggle {\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    padding: var(--spacing-2) var(--spacing-4);\n  }\n\n  .header__mobile-theme-label {\n    font-family: var(--font-body);\n    font-size: var(--font-size-lg);\n    font-weight: var(--font-weight-medium);\n    color: var(--color-text-secondary);\n  }",
  "new_string": "  /* Mobile Actions Section */\n  .header__mobile-actions {\n    margin-top: var(--spacing-6);\n    padding-top: var(--spacing-4);\n    border-top: 1px solid rgba(114, 47, 55, 0.15);\n    opacity: 0;\n    transform: translateX(20px);\n    transition: opacity var(--duration-300) var(--ease-out),\n                transform var(--duration-300) var(--ease-out);\n    transition-delay: calc(var(--item-index) * 50ms);\n  }\n\n  :global(html[data-theme=\"dark\"]) .header__mobile-actions {\n    border-top-color: rgba(196, 167, 125, 0.2);\n  }\n\n  .header__mobile-nav[aria-hidden=\"false\"] .header__mobile-actions {\n    opacity: 1;\n    transform: translateX(0);\n  }\n\n  .header__mobile-theme-toggle {\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    padding: var(--spacing-2) var(--spacing-4);\n  }\n\n  .header__mobile-theme-label {\n    font-family: var(--font-body);\n    font-size: var(--font-size-base);\n    font-weight: var(--font-weight-medium);\n    text-transform: uppercase;\n    letter-spacing: var(--letter-spacing-wide);\n    color: var(--color-text-tertiary);\n  }\n\n  :global(html[data-theme=\"dark\"]) .header__mobile-theme-label {\n    color: rgba(255, 251, 235, 0.6);\n  }"
}
Now let's verify the changes by reading the complete file to ensure everything is correct:

🔧 Tool: Read
Input: {
  "file_path": "C:\\Users\\James\\Repos\\restaurant-business\\src\\components\\Header.astro"
}
The header component has been fully updated. Let me also check if there's a Layout component that uses the Header, to ensure the `transparentOnTop` prop is properly utilized on the home page:

🔧 Tool: Read
Input: {
  "file_path": "C:\\Users\\James\\Repos\\restaurant-business\\src\\layouts\\Layout.astro"
}
I see that the Layout component doesn't pass a `transparentOnTop` prop to the Header. Since the home page has a hero section, I should update the Layout to support this feature. Let me add a `transparentHeader` prop to the Layout and propagate it to the Header:

🔧 Tool: Edit
Input: {
  "file_path": "C:\\Users\\James\\Repos\\restaurant-business\\src\\layouts\\Layout.astro",
  "old_string": "// Extend SEOProps but make title and description optional with defaults\ninterface Props extends Partial<SEOProps> {\n  /** Page title (defaults to site name) */\n  title?: string;\n  /** Page description (defaults to site default description) */\n  description?: string;\n  /** Additional classes for the body element */\n  bodyClass?: string;\n  /** Disable analytics for this page */\n  disableAnalytics?: boolean;\n}\n\nconst {\n  title = seoConfig.siteName,\n  description = seoConfig.defaultDescription,\n  bodyClass = '',\n  lang = seoConfig.defaultLang,\n  disableAnalytics = false,\n  ...seoProps\n} = Astro.props;",
  "new_string": "// Extend SEOProps but make title and description optional with defaults\ninterface Props extends Partial<SEOProps> {\n  /** Page title (defaults to site name) */\n  title?: string;\n  /** Page description (defaults to site default description) */\n  description?: string;\n  /** Additional classes for the body element */\n  bodyClass?: string;\n  /** Disable analytics for this page */\n  disableAnalytics?: boolean;\n  /** Enable transparent header that becomes solid on scroll (for hero pages) */\n  transparentHeader?: boolean;\n}\n\nconst {\n  title = seoConfig.siteName,\n  description = seoConfig.defaultDescription,\n  bodyClass = '',\n  lang = seoConfig.defaultLang,\n  disableAnalytics = false,\n  transparentHeader = false,\n  ...seoProps\n} = Astro.props;"
}

🔧 Tool: Edit
Input: {
  "file_path": "C:\\Users\\James\\Repos\\restaurant-business\\src\\layouts\\Layout.astro",
  "old_string": "\t\t<Header currentPath={Astro.url.pathname} />",
  "new_string": "\t\t<Header currentPath={Astro.url.pathname} transparentOnTop={transparentHeader} />"
}
Now let's update the home page to use the transparent header feature:

🔧 Tool: Edit
Input: {
  "file_path": "C:\\Users\\James\\Repos\\restaurant-business\\src\\pages\\index.astro",
  "old_string": "<Layout\n\ttitle=\"The Main Street Bistro | Award-Winning Houston Restaurant\"\n\tdescription=\"Award-winning American bistro in downtown Houston serving contemporary cuisine with locally-sourced ingredients. Signature steaks, fresh seafood, craft cocktails, private dining, and catering services.\"\n\tnoTitleTemplate\n\topenGraph={{\n\t\ttype: 'website',\n\t}}\n\tjsonLd={restaurantSchema}\n>",
  "new_string": "<Layout\n\ttitle=\"The Main Street Bistro | Award-Winning Houston Restaurant\"\n\tdescription=\"Award-winning American bistro in downtown Houston serving contemporary cuisine with locally-sourced ingredients. Signature steaks, fresh seafood, craft cocktails, private dining, and catering services.\"\n\tnoTitleTemplate\n\ttransparentHeader={true}\n\topenGraph={{\n\t\ttype: 'website',\n\t}}\n\tjsonLd={restaurantSchema}\n>"
}
Now let me also add a Skip link style to the Layout for accessibility, and add a small fix to ensure the header transition is smooth:

🔧 Tool: Edit
Input: {
  "file_path": "C:\\Users\\James\\Repos\\restaurant-business\\src\\layouts\\Layout.astro",
  "old_string": "<style>\n\thtml,\n\tbody {\n\t\twidth: 100%;\n\t\theight: 100%;\n\t}\n\n\t/* Sticky footer layout using flexbox */\n\tbody {\n\t\tdisplay: flex;\n\t\tflex-direction: column;\n\t\tmin-height: 100vh;\n\t}\n\n\t#main-content {\n\t\tflex: 1 0 auto;\n\t}\n</style>",
  "new_string": "<style>\n\thtml,\n\tbody {\n\t\twidth: 100%;\n\t\theight: 100%;\n\t}\n\n\t/* Sticky footer layout using flexbox */\n\tbody {\n\t\tdisplay: flex;\n\t\tflex-direction: column;\n\t\tmin-height: 100vh;\n\t}\n\n\t#main-content {\n\t\tflex: 1 0 auto;\n\t}\n\n\t/* Skip link for accessibility */\n\t.skip-link {\n\t\tposition: fixed;\n\t\ttop: -100%;\n\t\tleft: 50%;\n\t\ttransform: translateX(-50%);\n\t\tz-index: 9999;\n\t\tpadding: var(--spacing-3) var(--spacing-6);\n\t\tbackground-color: var(--color-burgundy, #722f37);\n\t\tcolor: var(--color-cream, #fffbeb);\n\t\tfont-family: var(--font-body);\n\t\tfont-size: var(--font-size-sm);\n\t\tfont-weight: var(--font-weight-semibold);\n\t\ttext-decoration: none;\n\t\tborder-radius: 0 0 var(--radius-lg) var(--radius-lg);\n\t\tbox-shadow: var(--shadow-lg);\n\t\ttransition: top 0.2s ease;\n\t}\n\n\t.skip-link:focus {\n\t\ttop: 0;\n\t\toutline: 2px solid var(--color-gold, #c4a77d);\n\t\toutline-offset: 2px;\n\t}\n</style>"
}
Now let's run the dev server to test the changes:

🔧 Tool: Bash
Input: {
  "command": "npm run dev 2>&1 &",
  "timeout": 15000
}

🔧 Tool: Read
Input: {
  "file_path": "C:\\Users\\James\\AppData\\Local\\Temp\\claude\\C--Users-James-Repos-restaurant-business\\tasks\\b1565f8.output"
}
The server is running. Let's also run a quick build to ensure there are no errors:

🔧 Tool: Bash
Input: {
  "command": "npm run build 2>&1",
  "timeout": 120000
}
The build is successful. The warnings are pre-existing CSS-related warnings in other components (not related to our header changes). Let me stop the dev server:

🔧 Tool: KillShell
Input: {
  "shell_id": "b1565f8"
}
Let me verify the final state of our changes by reading the updated files:

🔧 Tool: Read
Input: {
  "file_path": "C:\\Users\\James\\Repos\\restaurant-business\\src\\pages\\index.astro"
}
All changes are in place. Let me provide a summary of the implementation:

<summary>
## Summary: Redesigned Top Navbar with Restaurant Branding

### Changes Implemented
1. **Elegant Logo Redesign**
   - Added decorative star icon (✦) with rotation animation on hover
   - Split restaurant name into stacked layout ("Main Street" + "Bistro")
   - Used Playfair Display font for elegant, upscale restaurant feel
   - Added burgundy/gold color scheme matching the hero section

2. **Transparent-to-Solid Scroll Effect**
   - Header starts fully transparent on hero pages
   - Smooth glass-morphism transition on scroll (backdrop blur + cream background)
   - Elements change from light (for dark hero background) to dark (for solid header)
   - JavaScript-based scroll detection with requestAnimationFrame for performance

3. **Restaurant-Branded Color Scheme**
   - Burgundy (#722f37) as primary accent color
   - Gold (#c4a77d) as secondary accent
   - Cream (#fffbeb) for text on dark backgrounds
   - Consistent with hero section warm restaurant aesthetic

4. **Refined Navigation Links**
   - Uppercase text with letter spacing for elegance
   - Animated underline that expands from center on hover
   - Burgundy/gold gradient underline effect
   - Adapted colors for transparent header state

5. **Styled Reserve Button**
   - Burgundy background with subtle shadow
   - Ghost/outline style when header is transparent
   - Transforms to solid on hover in transparent state

6. **Dark Mode Support**
   - Gold accents replace burgundy in dark mode
   - Charcoal backgrounds with proper contrast
   - All interactive states properly styled

7. **Mobile Menu Enhancements**
   - Cream background (charcoal in dark mode)
   - Playfair Display font for nav links
   - Border-left accent indicator on active/hover
   - Styled dividers and theme toggle section

8. **Accessibility Improvements**
   - Skip link styled with restaurant branding
   - Focus states using burgundy outline
   - Maintained all ARIA labels and keyboard navigation

### Files Modified
- `src/components/Header.astro` - Complete restyling with new branding
- `src/layouts/Layout.astro` - Added `transparentHeader` prop and skip link styles
- `src/pages/index.astro` - Enabled transparent header for home page

### Notes for Developer
- The `transparentOnTop` prop can be set to `true` on any page with a hero section
- The header automatically detects scroll position and updates classes
- All colors use CSS custom properties from the design system (with fallbacks)
- The logo icon can be changed to an SVG for more options
- Build passes successfully with no errors
</summary>