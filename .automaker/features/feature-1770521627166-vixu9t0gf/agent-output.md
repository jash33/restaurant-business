
🔧 Tool: Read
Input: {
  "file_path": "C:\\Users\\James\\Repos\\restaurant-business\\.automaker\\features\\feature-1770521627166-vixu9t0gf\\images\\pasted-image-2026-02-08T03-33-36-805Z-1770521616813.png"
}

🔧 Tool: Glob
Input: {
  "pattern": "**/*.{tsx,jsx,ts,js,css,scss}",
  "path": "C:\\Users\\James\\Repos\\restaurant-business"
}
I can see the image shows a "Features" section that has a techy appearance with hexagonal icons and gradient backgrounds. Let me search for the actual source files in the project, excluding node_modules:

🔧 Tool: Glob
Input: {
  "pattern": "src/**/*.{tsx,jsx,ts,js,css,scss}",
  "path": "C:\\Users\\James\\Repos\\restaurant-business"
}

🔧 Tool: Glob
Input: {
  "pattern": "app/**/*.{tsx,jsx,ts,js,css,scss}",
  "path": "C:\\Users\\James\\Repos\\restaurant-business"
}

🔧 Tool: Glob
Input: {
  "pattern": "*.{tsx,jsx,ts,js,css,scss,json}",
  "path": "C:\\Users\\James\\Repos\\restaurant-business"
}
Let me find the components folder and look for the Features section:

🔧 Tool: Glob
Input: {
  "pattern": "src/components/**/*.{tsx,jsx,astro}",
  "path": "C:\\Users\\James\\Repos\\restaurant-business"
}

🔧 Tool: Grep
Input: {
  "pattern": "Features|feature",
  "path": "C:\\Users\\James\\Repos\\restaurant-business\\src"
}
I see there's a `DifferentiatorsSection.astro` which might be what's shown in the screenshot. Let me look at the screenshot again and check the relevant components. The screenshot shows a "Features" section with hexagonal icons. Let me look at the differentiators section and the services section:

🔧 Tool: Read
Input: {
  "file_path": "C:\\Users\\James\\Repos\\restaurant-business\\src\\components\\DifferentiatorsSection.astro"
}

🔧 Tool: Read
Input: {
  "file_path": "C:\\Users\\James\\Repos\\restaurant-business\\src\\components\\DifferentiatorCard.astro"
}

🔧 Tool: Read
Input: {
  "file_path": "C:\\Users\\James\\Repos\\restaurant-business\\src\\config\\cuisine-theme.config.ts"
}
Now let me look at the variables.css to understand the design system and see what techy elements might need to be changed:

🔧 Tool: Read
Input: {
  "file_path": "C:\\Users\\James\\Repos\\restaurant-business\\src\\styles\\variables.css"
}

🔧 Tool: Grep
Input: {
  "pattern": "glow|gradient|primary",
  "path": "C:\\Users\\James\\Repos\\restaurant-business\\src\\styles\\variables.css",
  "output_mode": "content"
}
Now I have a clear picture. Looking at the screenshot, I can see a "Features" section with hexagonal icons and gradient backgrounds that looks very tech/corporate-oriented. This is the `DifferentiatorCard` and `DifferentiatorsSection` component. The main issues that make it look "techy" rather than restaurant-like are:

1. **Gradient/glow effects** on hover (tech-style)
2. **Shine sweep animation** on cards
3. **Pulse ring effect** on icons
4. **Circle/hexagonal icon containers** with tech gradients
5. **Transform lift animation** typical of tech sites

Let me check the main page to confirm where this is being used:

🔧 Tool: Glob
Input: {
  "pattern": "src/pages/index.astro",
  "path": "C:\\Users\\James\\Repos\\restaurant-business"
}

🔧 Tool: Read
Input: {
  "file_path": "C:\\Users\\James\\Repos\\restaurant-business\\src\\pages\\index.astro"
}
I see the homepage doesn't use DifferentiatorsSection. Let me search for where this "Features" section might be used:

🔧 Tool: Grep
Input: {
  "pattern": "DifferentiatorsSection|differentiators",
  "path": "C:\\Users\\James\\Repos\\restaurant-business\\src"
}
Let me look at the about page and see how differentiators might be displayed, and also look at ServiceCard and ServicesSection which might also be the techy section in the screenshot:

🔧 Tool: Read
Input: {
  "file_path": "C:\\Users\\James\\Repos\\restaurant-business\\src\\pages\\about.astro"
}

🔧 Tool: Read
Input: {
  "file_path": "C:\\Users\\James\\Repos\\restaurant-business\\src\\components\\ServicesSection.astro"
}

🔧 Tool: Read
Input: {
  "file_path": "C:\\Users\\James\\Repos\\restaurant-business\\src\\components\\ServiceCard.astro"
}
Now I can see both ServiceCard and DifferentiatorCard have very techy elements. Looking at the screenshot, the "Features" section shows cards with:
- Hexagonal/circular icons with gradient backgrounds
- Tech-style gradient glow effects on hover
- Shine sweep animation
- Transform lift effects

Let me look at the SourcingPhilosophy component to see what restaurant-appropriate styling exists in this codebase:

🔧 Tool: Read
Input: {
  "file_path": "C:\\Users\\James\\Repos\\restaurant-business\\src\\components\\SourcingPhilosophy.astro"
}
I now have a clear understanding. The SourcingPhilosophy component has a much more appropriate restaurant-style design:
- Warmer background colors (cream)
- Simple solid gradient icons (not pulsing/glowing)
- Subtle hover effects (just translateY and shadow)
- No shine sweeps, no glow effects, no pulse rings

Now I'll update the DifferentiatorCard and ServiceCard components to have a warmer, more restaurant-appropriate style. The key changes needed:

1. **Remove tech-style glow effects** (`--glow-card-hover`, `--glow-primary-sm`)
2. **Remove shine sweep animation** (the `::after` pseudo-element)
3. **Remove pulse ring effect** (the `::before` pseudo-element on icon)
4. **Simplify hover animations** (just subtle lift, no extreme transform)
5. **Use warmer, restaurant-appropriate colors** for icon backgrounds
6. **Remove gradient border glow effects**

Let me update both components:

🔧 Tool: Edit
Input: {
  "file_path": "C:\\Users\\James\\Repos\\restaurant-business\\src\\components\\DifferentiatorCard.astro",
  "old_string": "<style>\n  /* =================================================================\n   * DIFFERENTIATOR CARD COMPONENT STYLES\n   * =================================================================\n   * Uses design system variables from variables.css\n   * Follows BEM naming convention for maintainability\n   */\n\n  .differentiator-card {\n    /* Layout */\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    text-align: center;\n    gap: var(--spacing-4);\n\n    /* Box model */\n    padding: var(--spacing-6);\n\n    /* Positioning for pseudo-elements */\n    position: relative;\n\n    /* Visual */\n    background-color: var(--color-background-elevated);\n    border: 1px solid var(--color-border);\n    border-radius: var(--radius-xl);\n    box-shadow: var(--shadow-sm);\n\n    /* Overflow for shine effect */\n    overflow: hidden;\n\n    /* Animation */\n    transition:\n      box-shadow var(--duration-300) var(--ease-out),\n      transform var(--duration-300) var(--ease-out),\n      border-color var(--duration-300) var(--ease-out);\n  }\n\n  /* Shine sweep effect - diagonal sweep across card on hover */\n  .differentiator-card::after {\n    content: '';\n    position: absolute;\n    top: 0;\n    left: -100%;\n    width: 60%;\n    height: 100%;\n    background: linear-gradient(\n      90deg,\n      transparent 0%,\n      rgba(255, 255, 255, 0.1) 50%,\n      transparent 100%\n    );\n    transform: skewX(-20deg);\n    transition: left var(--duration-700) var(--ease-out);\n    pointer-events: none;\n    z-index: 1;\n  }\n\n  .differentiator-card:hover {\n    box-shadow: var(--shadow-lg), var(--glow-card-hover);\n    transform: translateY(-6px);\n    border-color: var(--color-primary-300);\n  }\n\n  .differentiator-card:hover::after {\n    left: 150%;\n  }\n\n  /* Icon Container */\n  .differentiator-card__icon {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    width: var(--spacing-16);\n    height: var(--spacing-16);\n    background: linear-gradient(\n      135deg,\n      var(--color-primary-50) 0%,\n      var(--color-primary-100) 100%\n    );\n    border-radius: var(--radius-full);\n    color: var(--color-primary);\n    position: relative;\n    z-index: 2;\n    transition:\n      background var(--duration-300) var(--ease-out),\n      transform var(--duration-300) var(--ease-spring-soft),\n      box-shadow var(--duration-300) var(--ease-out);\n  }\n\n  /* Pulse ring effect - animated ring that expands outward */\n  .differentiator-card__icon::before {\n    content: '';\n    position: absolute;\n    inset: 0;\n    border-radius: var(--radius-full);\n    background: transparent;\n    border: 2px solid var(--color-primary-300);\n    opacity: 0;\n    transform: scale(1);\n    transition:\n      opacity var(--duration-300) var(--ease-out),\n      transform var(--duration-500) var(--ease-out);\n  }\n\n  .differentiator-card:hover .differentiator-card__icon {\n    background: linear-gradient(\n      135deg,\n      var(--color-primary-100) 0%,\n      var(--color-primary-200) 100%\n    );\n    transform: scale(1.1);\n    box-shadow: var(--glow-primary-sm);\n  }\n\n  .differentiator-card:hover .differentiator-card__icon::before {\n    opacity: 0;\n    transform: scale(1.5);\n    animation: icon-pulse 1.2s var(--ease-out) infinite;\n  }\n\n  /* Icon pulse keyframes */\n  @keyframes icon-pulse {\n    0% {\n      opacity: 0.6;\n      transform: scale(1);\n    }\n    100% {\n      opacity: 0;\n      transform: scale(1.6);\n    }\n  }\n\n  .differentiator-card__icon :global(svg) {\n    width: var(--spacing-8);\n    height: var(--spacing-8);\n    transition: transform var(--duration-300) var(--ease-spring-soft);\n  }\n\n  .differentiator-card:hover .differentiator-card__icon :global(svg) {\n    transform: scale(1.1);\n  }\n\n  /* Content Area */\n  .differentiator-card__content {\n    display: flex;\n    flex-direction: column;\n    gap: var(--spacing-2);\n    flex: 1;\n    position: relative;\n    z-index: 2;\n  }\n\n  .differentiator-card__title {\n    font-family: var(--font-heading);\n    font-size: var(--font-size-lg);\n    font-weight: var(--font-weight-semibold);\n    color: var(--color-text-primary);\n    margin: 0;\n    line-height: var(--line-height-tight);\n    transition: color var(--duration-200) var(--ease-out);\n  }\n\n  .differentiator-card:hover .differentiator-card__title {\n    color: var(--color-primary);\n  }\n\n  .differentiator-card__description {\n    font-family: var(--font-body);\n    font-size: var(--font-size-base);\n    color: var(--color-text-secondary);\n    line-height: var(--line-height-relaxed);\n    margin: 0;\n    transition: color var(--duration-200) var(--ease-out);\n  }\n\n  .differentiator-card:hover .differentiator-card__description {\n    color: var(--color-text-primary);\n  }\n\n  /* =================================================================\n   * RESPONSIVE STYLES\n   * =================================================================\n   */\n\n  /* Tablet and up (768px) */\n  @media screen and (min-width: 768px) {\n    .differentiator-card {\n      padding: var(--spacing-8);\n      gap: var(--spacing-5);\n    }\n\n    .differentiator-card__icon {\n      width: var(--spacing-20);\n      height: var(--spacing-20);\n    }\n\n    .differentiator-card__icon :global(svg) {\n      width: var(--spacing-10);\n      height: var(--spacing-10);\n    }\n\n    .differentiator-card__title {\n      font-size: var(--font-size-xl);\n    }\n  }\n\n  /* =================================================================\n   * REDUCED MOTION\n   * Respect user preferences for reduced motion\n   * =================================================================\n   */\n  @media (prefers-reduced-motion: reduce) {\n    .differentiator-card,\n    .differentiator-card__icon,\n    .differentiator-card__title,\n    .differentiator-card__description,\n    .differentiator-card__icon :global(svg) {\n      transition: none;\n    }\n\n    .differentiator-card::after {\n      display: none;\n    }\n\n    .differentiator-card:hover {\n      transform: none;\n      /* Keep subtle visual feedback without motion */\n      box-shadow: var(--shadow-lg);\n    }\n\n    .differentiator-card:hover .differentiator-card__icon {\n      transform: none;\n      box-shadow: none;\n    }\n\n    .differentiator-card:hover .differentiator-card__icon::before {\n      animation: none;\n      display: none;\n    }\n\n    .differentiator-card:hover .differentiator-card__icon :global(svg) {\n      transform: none;\n    }\n  }\n\n  /* =================================================================\n   * HIGH CONTRAST MODE\n   * Windows High Contrast support\n   * =================================================================\n   */\n  @media (forced-colors: active) {\n    .differentiator-card {\n      border: 2px solid CanvasText;\n    }\n\n    .differentiator-card__icon {\n      border: 1px solid CanvasText;\n    }\n  }\n\n  /* =================================================================\n   * PRINT STYLES\n   * =================================================================\n   */\n  @media print {\n    .differentiator-card {\n      box-shadow: none;\n      border: 1px solid var(--color-border);\n      break-inside: avoid;\n      page-break-inside: avoid;\n    }\n\n    .differentiator-card:hover {\n      transform: none;\n      box-shadow: none;\n    }\n  }\n</style>",
  "new_string": "<style>\n  /* =================================================================\n   * DIFFERENTIATOR CARD COMPONENT STYLES\n   * =================================================================\n   * Restaurant-style card design with warm, elegant aesthetics\n   * Uses design system variables from variables.css\n   * Follows BEM naming convention for maintainability\n   */\n\n  .differentiator-card {\n    /* Layout */\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    text-align: center;\n    gap: var(--spacing-4);\n\n    /* Box model */\n    padding: var(--spacing-6);\n\n    /* Visual - Warm, elegant card styling */\n    background-color: var(--color-background-elevated);\n    border-radius: var(--radius-2xl);\n    box-shadow: var(--shadow-md);\n\n    /* Animation - Subtle and refined */\n    transition:\n      box-shadow var(--duration-300) var(--ease-out),\n      transform var(--duration-300) var(--ease-out);\n  }\n\n  .differentiator-card:hover {\n    box-shadow: var(--shadow-lg);\n    transform: translateY(-4px);\n  }\n\n  /* Icon Container - Warm, restaurant-style icon badge */\n  .differentiator-card__icon {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    width: 56px;\n    height: 56px;\n    background: linear-gradient(135deg, var(--color-primary) 0%, var(--color-primary-600) 100%);\n    border-radius: var(--radius-xl);\n    color: var(--color-text-inverse);\n    box-shadow: var(--shadow-sm);\n    transition:\n      transform var(--duration-300) var(--ease-out);\n  }\n\n  .differentiator-card:hover .differentiator-card__icon {\n    transform: scale(1.05);\n  }\n\n  .differentiator-card__icon :global(svg) {\n    width: 28px;\n    height: 28px;\n  }\n\n  /* Content Area */\n  .differentiator-card__content {\n    display: flex;\n    flex-direction: column;\n    gap: var(--spacing-2);\n    flex: 1;\n  }\n\n  .differentiator-card__title {\n    font-family: var(--font-heading);\n    font-size: var(--font-size-lg);\n    font-weight: var(--font-weight-semibold);\n    color: var(--color-text-primary);\n    margin: 0;\n    line-height: var(--line-height-tight);\n  }\n\n  .differentiator-card__description {\n    font-family: var(--font-body);\n    font-size: var(--font-size-base);\n    color: var(--color-text-secondary);\n    line-height: var(--line-height-relaxed);\n    margin: 0;\n  }\n\n  /* =================================================================\n   * RESPONSIVE STYLES\n   * =================================================================\n   */\n\n  /* Tablet and up (768px) */\n  @media screen and (min-width: 768px) {\n    .differentiator-card {\n      padding: var(--spacing-8);\n      gap: var(--spacing-5);\n    }\n\n    .differentiator-card__icon {\n      width: 64px;\n      height: 64px;\n    }\n\n    .differentiator-card__icon :global(svg) {\n      width: 32px;\n      height: 32px;\n    }\n\n    .differentiator-card__title {\n      font-size: var(--font-size-xl);\n    }\n  }\n\n  /* =================================================================\n   * REDUCED MOTION\n   * Respect user preferences for reduced motion\n   * =================================================================\n   */\n  @media (prefers-reduced-motion: reduce) {\n    .differentiator-card,\n    .differentiator-card__icon {\n      transition: none;\n    }\n\n    .differentiator-card:hover {\n      transform: none;\n    }\n\n    .differentiator-card:hover .differentiator-card__icon {\n      transform: none;\n    }\n  }\n\n  /* =================================================================\n   * HIGH CONTRAST MODE\n   * Windows High Contrast support\n   * =================================================================\n   */\n  @media (forced-colors: active) {\n    .differentiator-card {\n      border: 2px solid CanvasText;\n    }\n\n    .differentiator-card__icon {\n      border: 1px solid CanvasText;\n    }\n  }\n\n  /* =================================================================\n   * PRINT STYLES\n   * =================================================================\n   */\n  @media print {\n    .differentiator-card {\n      box-shadow: none;\n      border: 1px solid var(--color-border);\n      break-inside: avoid;\n      page-break-inside: avoid;\n    }\n\n    .differentiator-card:hover {\n      transform: none;\n      box-shadow: none;\n    }\n  }\n</style>"
}
Now let me update the ServiceCard component with the same warm, restaurant-appropriate styling:

🔧 Tool: Edit
Input: {
  "file_path": "C:\\Users\\James\\Repos\\restaurant-business\\src\\components\\ServiceCard.astro",
  "old_string": "<style>\n  /* =================================================================\n   * SERVICE CARD COMPONENT STYLES\n   * =================================================================\n   * Uses design system variables from variables.css\n   * Follows BEM naming convention for maintainability\n   */\n\n  .service-card {\n    /* Layout */\n    display: flex;\n    flex-direction: column;\n    gap: var(--spacing-4);\n\n    /* Box model */\n    padding: var(--spacing-6);\n\n    /* Positioning for pseudo-elements */\n    position: relative;\n\n    /* Visual */\n    background-color: var(--color-background-elevated);\n    border: 1px solid var(--color-border);\n    border-radius: var(--radius-xl);\n    box-shadow: var(--shadow-sm);\n\n    /* Overflow for shine effect */\n    overflow: hidden;\n\n    /* Animation */\n    transition:\n      box-shadow var(--duration-300) var(--ease-out),\n      transform var(--duration-300) var(--ease-out),\n      border-color var(--duration-300) var(--ease-out);\n  }\n\n  /* Gradient border glow effect - appears on hover */\n  .service-card::before {\n    content: '';\n    position: absolute;\n    inset: -2px;\n    background: linear-gradient(\n      135deg,\n      var(--color-primary-400) 0%,\n      var(--color-accent) 50%,\n      var(--color-accent-alt) 100%\n    );\n    border-radius: calc(var(--radius-xl) + 2px);\n    opacity: 0;\n    z-index: -1;\n    filter: blur(8px);\n    transition: opacity var(--duration-300) var(--ease-out);\n  }\n\n  /* Shine sweep effect */\n  .service-card::after {\n    content: '';\n    position: absolute;\n    top: 0;\n    left: -100%;\n    width: 60%;\n    height: 100%;\n    background: linear-gradient(\n      90deg,\n      transparent 0%,\n      rgba(255, 255, 255, 0.08) 50%,\n      transparent 100%\n    );\n    transform: skewX(-20deg);\n    transition: left var(--duration-700) var(--ease-out);\n    pointer-events: none;\n    z-index: 1;\n  }\n\n  .service-card:hover {\n    box-shadow: var(--shadow-lg), var(--glow-card-hover);\n    transform: translateY(-6px);\n    border-color: var(--color-primary-300);\n  }\n\n  .service-card:hover::before {\n    opacity: 0.35;\n  }\n\n  .service-card:hover::after {\n    left: 150%;\n  }\n\n  /* Icon Container */\n  .service-card__icon {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    width: var(--spacing-14);\n    height: var(--spacing-14);\n    background: linear-gradient(\n      135deg,\n      var(--color-primary-50) 0%,\n      var(--color-primary-100) 100%\n    );\n    border-radius: var(--radius-lg);\n    color: var(--color-primary);\n    position: relative;\n    transition:\n      background var(--duration-300) var(--ease-out),\n      transform var(--duration-300) var(--ease-spring-soft),\n      box-shadow var(--duration-300) var(--ease-out);\n  }\n\n  .service-card:hover .service-card__icon {\n    background: linear-gradient(\n      135deg,\n      var(--color-primary-100) 0%,\n      var(--color-primary-200) 100%\n    );\n    transform: scale(1.08) rotate(3deg);\n    box-shadow: var(--glow-primary-sm);\n  }\n\n  .service-card__icon :global(svg) {\n    width: var(--spacing-7);\n    height: var(--spacing-7);\n    transition: transform var(--duration-300) var(--ease-spring-soft);\n  }\n\n  .service-card:hover .service-card__icon :global(svg) {\n    transform: scale(1.05);\n  }\n\n  /* Content Area */\n  .service-card__content {\n    display: flex;\n    flex-direction: column;\n    gap: var(--spacing-2);\n    flex: 1;\n  }\n\n  .service-card__title {\n    font-family: var(--font-heading);\n    font-size: var(--font-size-xl);\n    font-weight: var(--font-weight-semibold);\n    color: var(--color-text-primary);\n    margin: 0;\n    line-height: var(--line-height-tight);\n    transition: color var(--duration-200) var(--ease-out);\n  }\n\n  .service-card:hover .service-card__title {\n    color: var(--color-primary);\n  }\n\n  .service-card__description {\n    font-family: var(--font-body);\n    font-size: var(--font-size-base);\n    color: var(--color-text-secondary);\n    line-height: var(--line-height-relaxed);\n    margin: 0;\n    transition: color var(--duration-200) var(--ease-out);\n  }\n\n  .service-card:hover .service-card__description {\n    color: var(--color-text-primary);\n  }\n\n  /* Footer with CTA */\n  .service-card__footer {\n    margin-top: auto;\n    padding-top: var(--spacing-4);\n  }\n\n  /* =================================================================\n   * RESPONSIVE STYLES\n   * =================================================================\n   */\n\n  /* Tablet and up (768px) */\n  @media screen and (min-width: 768px) {\n    .service-card {\n      padding: var(--spacing-8);\n      gap: var(--spacing-5);\n    }\n\n    .service-card__icon {\n      width: var(--spacing-16);\n      height: var(--spacing-16);\n    }\n\n    .service-card__icon :global(svg) {\n      width: var(--spacing-8);\n      height: var(--spacing-8);\n    }\n\n    .service-card__title {\n      font-size: var(--font-size-2xl);\n    }\n  }\n\n  /* =================================================================\n   * REDUCED MOTION\n   * Respect user preferences for reduced motion\n   * =================================================================\n   */\n  @media (prefers-reduced-motion: reduce) {\n    .service-card,\n    .service-card__icon,\n    .service-card__title,\n    .service-card__description,\n    .service-card__icon :global(svg) {\n      transition: none;\n    }\n\n    .service-card::before,\n    .service-card::after {\n      display: none;\n    }\n\n    .service-card:hover {\n      transform: none;\n      /* Keep subtle visual feedback without motion */\n      box-shadow: var(--shadow-lg);\n    }\n\n    .service-card:hover .service-card__icon {\n      transform: none;\n      box-shadow: none;\n    }\n\n    .service-card:hover .service-card__icon :global(svg) {\n      transform: none;\n    }\n  }\n\n  /* =================================================================\n   * PRINT STYLES\n   * =================================================================\n   */\n  @media print {\n    .service-card {\n      box-shadow: none;\n      border: 1px solid var(--color-border);\n      break-inside: avoid;\n      page-break-inside: avoid;\n    }\n\n    .service-card:hover {\n      transform: none;\n      box-shadow: none;\n    }\n\n    .service-card__footer {\n      display: none;\n    }\n  }\n</style>",
  "new_string": "<style>\n  /* =================================================================\n   * SERVICE CARD COMPONENT STYLES\n   * =================================================================\n   * Restaurant-style card design with warm, elegant aesthetics\n   * Uses design system variables from variables.css\n   * Follows BEM naming convention for maintainability\n   */\n\n  .service-card {\n    /* Layout */\n    display: flex;\n    flex-direction: column;\n    gap: var(--spacing-4);\n\n    /* Box model */\n    padding: var(--spacing-6);\n\n    /* Visual - Warm, elegant card styling */\n    background-color: var(--color-background-elevated);\n    border-radius: var(--radius-2xl);\n    box-shadow: var(--shadow-md);\n\n    /* Animation - Subtle and refined */\n    transition:\n      box-shadow var(--duration-300) var(--ease-out),\n      transform var(--duration-300) var(--ease-out);\n  }\n\n  .service-card:hover {\n    box-shadow: var(--shadow-lg);\n    transform: translateY(-4px);\n  }\n\n  /* Icon Container - Warm, restaurant-style icon badge */\n  .service-card__icon {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    width: 56px;\n    height: 56px;\n    background: linear-gradient(135deg, var(--color-primary) 0%, var(--color-primary-600) 100%);\n    border-radius: var(--radius-xl);\n    color: var(--color-text-inverse);\n    box-shadow: var(--shadow-sm);\n    transition:\n      transform var(--duration-300) var(--ease-out);\n  }\n\n  .service-card:hover .service-card__icon {\n    transform: scale(1.05);\n  }\n\n  .service-card__icon :global(svg) {\n    width: 28px;\n    height: 28px;\n  }\n\n  /* Content Area */\n  .service-card__content {\n    display: flex;\n    flex-direction: column;\n    gap: var(--spacing-2);\n    flex: 1;\n  }\n\n  .service-card__title {\n    font-family: var(--font-heading);\n    font-size: var(--font-size-xl);\n    font-weight: var(--font-weight-semibold);\n    color: var(--color-text-primary);\n    margin: 0;\n    line-height: var(--line-height-tight);\n  }\n\n  .service-card__description {\n    font-family: var(--font-body);\n    font-size: var(--font-size-base);\n    color: var(--color-text-secondary);\n    line-height: var(--line-height-relaxed);\n    margin: 0;\n  }\n\n  /* Footer with CTA */\n  .service-card__footer {\n    margin-top: auto;\n    padding-top: var(--spacing-4);\n  }\n\n  /* =================================================================\n   * RESPONSIVE STYLES\n   * =================================================================\n   */\n\n  /* Tablet and up (768px) */\n  @media screen and (min-width: 768px) {\n    .service-card {\n      padding: var(--spacing-8);\n      gap: var(--spacing-5);\n    }\n\n    .service-card__icon {\n      width: 64px;\n      height: 64px;\n    }\n\n    .service-card__icon :global(svg) {\n      width: 32px;\n      height: 32px;\n    }\n\n    .service-card__title {\n      font-size: var(--font-size-2xl);\n    }\n  }\n\n  /* =================================================================\n   * REDUCED MOTION\n   * Respect user preferences for reduced motion\n   * =================================================================\n   */\n  @media (prefers-reduced-motion: reduce) {\n    .service-card,\n    .service-card__icon {\n      transition: none;\n    }\n\n    .service-card:hover {\n      transform: none;\n    }\n\n    .service-card:hover .service-card__icon {\n      transform: none;\n    }\n  }\n\n  /* =================================================================\n   * PRINT STYLES\n   * =================================================================\n   */\n  @media print {\n    .service-card {\n      box-shadow: none;\n      border: 1px solid var(--color-border);\n      break-inside: avoid;\n      page-break-inside: avoid;\n    }\n\n    .service-card:hover {\n      transform: none;\n      box-shadow: none;\n    }\n\n    .service-card__footer {\n      display: none;\n    }\n  }\n</style>"
}
Now let me also update the section-level styling for both DifferentiatorsSection and ServicesSection to use warmer background colors that are more restaurant-appropriate:

🔧 Tool: Edit
Input: {
  "file_path": "C:\\Users\\James\\Repos\\restaurant-business\\src\\components\\DifferentiatorsSection.astro",
  "old_string": "  .differentiators-section {\n    padding: var(--spacing-16) var(--spacing-4);\n    background-color: var(--color-background);\n  }",
  "new_string": "  .differentiators-section {\n    padding: var(--spacing-16) var(--spacing-4);\n    background-color: var(--color-cream, var(--color-background-subtle));\n  }"
}
Now let me update the ServicesSection to use warmer styling:

🔧 Tool: Edit
Input: {
  "file_path": "C:\\Users\\James\\Repos\\restaurant-business\\src\\components\\ServicesSection.astro",
  "old_string": "  .services-section {\n    padding: var(--spacing-16) var(--spacing-4);\n    background-color: var(--color-background-subtle);\n  }",
  "new_string": "  .services-section {\n    padding: var(--spacing-16) var(--spacing-4);\n    background-color: var(--color-cream, var(--color-background-subtle));\n  }"
}
Let me verify the changes by reading the updated files:

🔧 Tool: Read
Input: {
  "file_path": "C:\\Users\\James\\Repos\\restaurant-business\\src\\components\\DifferentiatorCard.astro"
}

🔧 Tool: Read
Input: {
  "file_path": "C:\\Users\\James\\Repos\\restaurant-business\\src\\components\\ServiceCard.astro"
}
The changes have been applied successfully. Let me also verify the section-level changes:

🔧 Tool: Grep
Input: {
  "pattern": "background-color.*cream|color-cream",
  "path": "C:\\Users\\James\\Repos\\restaurant-business\\src\\components",
  "output_mode": "content"
}
All the changes are in place. The styling now follows the warm, restaurant-appropriate pattern used by other components like `SourcingPhilosophy`, `OriginStorySection`, and `RestaurantTimeline`.

<summary>
## Summary: Restaurant-Style Feature/Service Cards

### Changes Implemented
- **Removed techy visual effects** from DifferentiatorCard and ServiceCard components:
  - Removed shine sweep animation (diagonal glowing sweep on hover)
  - Removed pulse ring effect on icon containers
  - Removed gradient border glow effects
  - Removed tech-style box-shadow glows (`--glow-card-hover`, `--glow-primary-sm`)
  - Removed border color changes on hover

- **Applied warm, restaurant-appropriate styling**:
  - Simplified hover effects to subtle translateY (-4px) and shadow (shadow-lg)
  - Changed icon container to use solid gradient with primary brand colors (matching SourcingPhilosophy component)
  - Changed icon color to inverse text color (white) for better contrast
  - Updated border-radius to `--radius-2xl` for softer, more elegant appearance
  - Changed icon shape from circular (`radius-full`) to rounded square (`radius-xl`) for a more refined look

- **Updated section backgrounds**:
  - Changed DifferentiatorsSection background to warm cream color (`--color-cream`)
  - Changed ServicesSection background to warm cream color (`--color-cream`)

### Files Modified
- `src/components/DifferentiatorCard.astro` - Complete style overhaul
- `src/components/ServiceCard.astro` - Complete style overhaul
- `src/components/DifferentiatorsSection.astro` - Background color update
- `src/components/ServicesSection.astro` - Background color update

### Notes for Developer
- The new styling matches the existing restaurant-appropriate components like `SourcingPhilosophy.astro` and `PartnershipShowcase.astro`
- All accessibility features (reduced motion support, high contrast mode, print styles) have been preserved
- The components still maintain responsive behavior with appropriate sizing at different breakpoints
- CSS code is significantly cleaner and more maintainable without the complex animation effects
</summary>