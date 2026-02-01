

Looking at the screenshot, I can see the homepage hero section has text readability issues - the dark text ("The Main Street Bistro", "Where Houston Comes to Dine") is hard to read against the busy background image. The "Explore Our Menu" button is also hard to read. Let me explore the codebase to fix this.

🔧 Tool: Task
Input: {
  "description": "Explore codebase structure",
  "prompt": "Explore the codebase at C:\\Users\\James\\Repos\\restaurant-business to understand the project structure. I need to find:\n1. The homepage/hero component files\n2. Any CSS/styling files related to the hero section\n3. The overall tech stack (React, Next.js, etc.)\n\nList out the project structure and show me the contents of the main homepage/hero component and its associated styles.",
  "subagent_type": "Explore"
}

🔧 Tool: Bash
Input: {
  "command": "ls -la \"C:\\Users\\James\\Repos\\restaurant-business\"",
  "description": "List root directory contents to understand project structure"
}

🔧 Tool: Read
Input: {
  "file_path": "C:\\Users\\James\\Repos\\restaurant-business\\package.json"
}

🔧 Tool: Read
Input: {
  "file_path": "C:\\Users\\James\\Repos\\restaurant-business\\astro.config.mjs"
}

🔧 Tool: Bash
Input: {
  "command": "find \"C:\\Users\\James\\Repos\\restaurant-business\\src\" -type f -name \"*.astro\" -o -name \"*.tsx\" -o -name \"*.ts\" -o -name \"*.css\" | head -30",
  "description": "List all component and style files in src directory"
}

🔧 Tool: Glob
Input: {
  "pattern": "src/**/*.astro",
  "path": "C:\\Users\\James\\Repos\\restaurant-business"
}

🔧 Tool: Read
Input: {
  "file_path": "C:\\Users\\James\\Repos\\restaurant-business\\src\\components\\HeroSection.astro"
}

🔧 Tool: Read
Input: {
  "file_path": "C:\\Users\\James\\Repos\\restaurant-business\\src\\pages\\index.astro"
}

🔧 Tool: Bash
Input: {
  "command": "find \"C:\\Users\\James\\Repos\\restaurant-business\\src\" -type f \\( -name \"*.css\" -o -name \"*.scss\" \\)",
  "description": "Find all CSS/SCSS files in src directory"
}

🔧 Tool: Read
Input: {
  "file_path": "C:\\Users\\James\\Repos\\restaurant-business\\src\\styles\\variables.css"
}

🔧 Tool: Read
Input: {
  "file_path": "C:\\Users\\James\\Repos\\restaurant-business\\src\\styles\\globals.css"
}

🔧 Tool: Bash
Input: {
  "command": "find \"C:\\Users\\James\\Repos\\restaurant-business\\src\" -type d | head -15",
  "description": "Show directory structure"
}

🔧 Tool: Glob
Input: {
  "pattern": "src/types/*.ts",
  "path": "C:\\Users\\James\\Repos\\restaurant-business"
}

🔧 Tool: Bash
Input: {
  "command": "ls -la \"C:\\Users\\James\\Repos\\restaurant-business\\src\\types\" | grep -E \"hero|\\.ts\"",
  "description": "List type files related to hero"
}

🔧 Tool: Read
Input: {
  "file_path": "C:\\Users\\James\\Repos\\restaurant-business\\src\\types\\hero.ts"
}

🔧 Tool: Read
Input: {
  "file_path": "C:\\Users\\James\\Repos\\restaurant-business\\src\\types\\restaurant-hero.ts"
}

🔧 Tool: Read
Input: {
  "file_path": "C:\\Users\\James\\Repos\\restaurant-business\\src\\components\\RestaurantHeroSection.astro",
  "limit": 100
}

🔧 Tool: Read
Input: {
  "file_path": "C:\\Users\\James\\Repos\\restaurant-business\\src\\components\\RestaurantHeroSection.astro",
  "offset": 100
}
Now let me look at the specific hero component styling to understand the text readability issue:

🔧 Tool: Read
Input: {
  "file_path": "C:\\Users\\James\\Repos\\restaurant-business\\src\\components\\RestaurantHeroSection.astro"
}
Now I can see the issue clearly. Looking at the screenshot compared to the CSS:

1. The text color is set to `var(--color-cream)` which should be light, but in the screenshot the title "The Main Street Bistro" and tagline appear in a dark blue/navy color instead of cream/white
2. The "Explore Our Menu" secondary button text also appears dark

Let me check if there's something overriding these styles, perhaps from the global CSS or the Button component:

🔧 Tool: Grep
Input: {
  "pattern": "--color-cream",
  "path": "C:\\Users\\James\\Repos\\restaurant-business\\src\\styles\\variables.css",
  "output_mode": "content"
}

🔧 Tool: Grep
Input: {
  "pattern": "restaurant-hero__name|\\.restaurant-hero__tagline|restaurant-hero__cta",
  "path": "C:\\Users\\James\\Repos\\restaurant-business\\src\\styles\\globals.css",
  "output_mode": "content"
}

🔧 Tool: Read
Input: {
  "file_path": "C:\\Users\\James\\Repos\\restaurant-business\\src\\components\\Button.astro"
}
Now I can see the issue clearly. Looking at the screenshot and the code:

**Problem 1: Title and tagline text color** - The CSS sets `color: var(--color-cream)` for the title and `color: rgba(255, 251, 235, 0.9)` for the tagline. But in the screenshot, the text appears dark blue/navy. This means `--color-cream` is likely not defined (or defined as a dark color). Let me check the variables.

**Problem 2: Secondary button** - The Button component's `.btn--secondary` uses `color: var(--color-primary)` and `border: var(--border-width-2) solid var(--color-primary)` - which would be the navy/blue primary color. The hero section tries to override this with `.restaurant-hero__cta--secondary` setting `color: var(--color-cream)` and `border-color: var(--color-cream)`, but these overrides may not be winning the specificity battle in Astro's scoped styles.

Let me check the variable definitions:

🔧 Tool: Grep
Input: {
  "pattern": "--color-cream|--color-burgundy",
  "path": "C:\\Users\\James\\Repos\\restaurant-business\\src\\styles",
  "output_mode": "content"
}
That's the core problem! The `--color-cream` and `--color-burgundy` CSS variables are **not defined** in the stylesheet variables. The hero component references them but they don't exist, so all those color values fall back to the browser default (which results in the text being dark/unreadable).

Let me also check if they're defined anywhere else:

🔧 Tool: Grep
Input: {
  "pattern": "--color-cream|--color-burgundy|--color-charcoal|--color-burgundy-light",
  "output_mode": "content"
}
Confirmed. The variables `--color-cream`, `--color-burgundy`, `--color-burgundy-light`, and `--color-charcoal` are used throughout the codebase but never defined in `variables.css`. The `menu-print.astro` page defines them locally, and some components use fallbacks (e.g., `var(--color-cream, var(--color-background-subtle))`), but the hero component doesn't use fallbacks.

Let me also check if there's a separate restaurant color palette file that should have been added:

🔧 Tool: Read
Input: {
  "file_path": "C:\\Users\\James\\Repos\\restaurant-business\\src\\styles\\variables.css",
  "offset": 1,
  "limit": 50
}
Now let me find a good place to add the restaurant color variables. Let me search for where the color section ends or where I could add restaurant-specific colors:

🔧 Tool: Grep
Input: {
  "pattern": "cuisine|Semantic Colors|--color-success:|--color-error:",
  "path": "C:\\Users\\James\\Repos\\restaurant-business\\src\\styles\\variables.css",
  "output_mode": "content",
  "-n": true
}
Now let me see the area right after the cuisine colors to find the right spot to add the restaurant-specific colors:

🔧 Tool: Read
Input: {
  "file_path": "C:\\Users\\James\\Repos\\restaurant-business\\src\\styles\\variables.css",
  "offset": 178,
  "limit": 15
}
Now I have a clear picture. I need to:

1. **Add the missing restaurant-specific color variables** to `variables.css` 
2. **Fix the hero component** to use proper fallbacks and ensure text is always readable
3. **Fix the secondary button override** - in Astro's scoped styles, the hero's `:global()` overrides may not be working for the Button component

Let me implement the fixes:

🔧 Tool: Edit
Input: {
  "file_path": "C:\\Users\\James\\Repos\\restaurant-business\\src\\styles\\variables.css",
  "old_string": "  --color-cuisine-bakery-accent: #8b4513;     /* Cocoa brown */\n\n  /* -----------------------------------------------------------------\n   * Semantic Colors - UI Feedback States",
  "new_string": "  --color-cuisine-bakery-accent: #8b4513;     /* Cocoa brown */\n\n  /* -----------------------------------------------------------------\n   * Restaurant Brand Colors\n   * Warm, elegant palette for restaurant-specific sections\n   * (hero overlays, menu pages, and branded elements)\n   * ----------------------------------------------------------------- */\n  --color-cream: rgba(255, 251, 235, 1);          /* Warm white for text on dark backgrounds */\n  --color-cream-light: rgba(255, 251, 235, 0.8);  /* Muted cream for secondary text */\n  --color-burgundy: #722f37;                       /* Rich wine red for CTAs */\n  --color-burgundy-light: #8b3a44;                 /* Lighter burgundy for hover states */\n  --color-charcoal: #1a1412;                       /* Dark warm black for backgrounds */\n  --color-terracotta: #ba6343;                     /* Earthy terracotta accent */\n  --color-gold: #c4a77d;                           /* Warm gold accent */\n\n  /* -----------------------------------------------------------------\n   * Semantic Colors - UI Feedback States"
}
Now I also need to add dark mode variants for these colors. Let me find the dark mode section:

🔧 Tool: Read
Input: {
  "file_path": "C:\\Users\\James\\Repos\\restaurant-business\\src\\styles\\variables.css",
  "offset": 878,
  "limit": 20
}

🔧 Tool: Edit
Input: {
  "file_path": "C:\\Users\\James\\Repos\\restaurant-business\\src\\styles\\variables.css",
  "old_string": "  --color-cuisine-bakery-primary: #f0c8cc;\n  --color-cuisine-bakery-secondary: #fff0e0;\n  --color-cuisine-bakery-accent: #a0623a;\n}\n\n/* Selection styling for dark mode */",
  "new_string": "  --color-cuisine-bakery-primary: #f0c8cc;\n  --color-cuisine-bakery-secondary: #fff0e0;\n  --color-cuisine-bakery-accent: #a0623a;\n\n  /* Restaurant Brand Colors - Dark mode (same values, hero is always dark bg) */\n  --color-cream: rgba(255, 251, 235, 1);\n  --color-cream-light: rgba(255, 251, 235, 0.8);\n  --color-burgundy: #8b3a44;\n  --color-burgundy-light: #a04450;\n  --color-charcoal: #1a1412;\n  --color-terracotta: #d07555;\n  --color-gold: #d4b78d;\n}\n\n/* Selection styling for dark mode */"
}
Now let me fix the hero component to also add inline fallback values for extra safety, and fix the secondary button override issue. The problem with the secondary button is that Astro scopes styles, so `.restaurant-hero__cta--secondary` in the hero component can't override `.btn--secondary` styles in the Button component. I need to use `:global()`:

🔧 Tool: Edit
Input: {
  "file_path": "C:\\Users\\James\\Repos\\restaurant-business\\src\\components\\RestaurantHeroSection.astro",
  "old_string": "  .restaurant-hero__name {\n    font-family: var(--font-display);\n    font-size: clamp(2.5rem, 8vw, var(--font-size-6xl));\n    font-weight: var(--font-weight-bold);\n    line-height: var(--line-height-tight);\n    letter-spacing: var(--letter-spacing-tight);\n    color: var(--color-cream);\n    margin: 0;\n    text-shadow:\n      0 2px 4px rgba(0, 0, 0, 0.3),\n      0 4px 20px rgba(0, 0, 0, 0.2);\n    animation-delay: var(--animation-delay-2);\n  }",
  "new_string": "  .restaurant-hero__name {\n    font-family: var(--font-display);\n    font-size: clamp(2.5rem, 8vw, var(--font-size-6xl));\n    font-weight: var(--font-weight-bold);\n    line-height: var(--line-height-tight);\n    letter-spacing: var(--letter-spacing-tight);\n    color: var(--color-cream, #fffbeb);\n    margin: 0;\n    text-shadow:\n      0 2px 4px rgba(0, 0, 0, 0.4),\n      0 4px 20px rgba(0, 0, 0, 0.3);\n    animation-delay: var(--animation-delay-2);\n  }"
}

🔧 Tool: Edit
Input: {
  "file_path": "C:\\Users\\James\\Repos\\restaurant-business\\src\\components\\RestaurantHeroSection.astro",
  "old_string": "  .restaurant-hero__tagline {\n    font-family: var(--font-body);\n    font-size: clamp(var(--font-size-md), 3vw, var(--font-size-xl));\n    font-weight: var(--font-weight-normal);\n    font-style: italic;\n    line-height: var(--line-height-relaxed);\n    color: rgba(255, 251, 235, 0.9);\n    max-width: 40ch;\n    margin: 0;\n    text-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);\n    animation-delay: var(--animation-delay-3);\n  }",
  "new_string": "  .restaurant-hero__tagline {\n    font-family: var(--font-body);\n    font-size: clamp(var(--font-size-md), 3vw, var(--font-size-xl));\n    font-weight: var(--font-weight-normal);\n    font-style: italic;\n    line-height: var(--line-height-relaxed);\n    color: rgba(255, 251, 235, 0.95);\n    max-width: 40ch;\n    margin: 0;\n    text-shadow: 0 1px 4px rgba(0, 0, 0, 0.4);\n    animation-delay: var(--animation-delay-3);\n  }"
}
Now fix the secondary button - the scoped styles can't override the Button component's own scoped styles. I need to use `:global()`:

🔧 Tool: Edit
Input: {
  "file_path": "C:\\Users\\James\\Repos\\restaurant-business\\src\\components\\RestaurantHeroSection.astro",
  "old_string": "  /* Primary CTA - Warm burgundy fill */\n  .restaurant-hero__cta--primary {\n    background-color: var(--color-burgundy);\n    border-color: var(--color-burgundy);\n    box-shadow: var(--shadow-lg), var(--glow-primary-sm);\n  }\n\n  .restaurant-hero__cta--primary:hover {\n    background-color: var(--color-burgundy-light);\n    border-color: var(--color-burgundy-light);\n    box-shadow: var(--shadow-xl), var(--glow-primary-md);\n    transform: translateY(-2px);\n  }\n\n  /* Secondary CTA - Ghost style for dark backgrounds */\n  .restaurant-hero__cta--secondary {\n    background-color: transparent;\n    border-color: var(--color-cream);\n    color: var(--color-cream);\n  }\n\n  .restaurant-hero__cta--secondary:hover {\n    background-color: rgba(255, 251, 235, 0.15);\n    border-color: var(--color-cream);\n    color: var(--color-cream);\n  }",
  "new_string": "  /* Primary CTA - Warm burgundy fill */\n  .restaurant-hero__cta--primary :global(.btn),\n  :global(.btn).restaurant-hero__cta--primary {\n    background-color: var(--color-burgundy, #722f37);\n    border-color: var(--color-burgundy, #722f37);\n    color: var(--color-cream, #fffbeb);\n    box-shadow: var(--shadow-lg), var(--glow-primary-sm);\n  }\n\n  .restaurant-hero__cta--primary:hover :global(.btn),\n  :global(.btn).restaurant-hero__cta--primary:hover {\n    background-color: var(--color-burgundy-light, #8b3a44);\n    border-color: var(--color-burgundy-light, #8b3a44);\n    box-shadow: var(--shadow-xl), var(--glow-primary-md);\n    transform: translateY(-2px);\n  }\n\n  /* Secondary CTA - Ghost style for dark backgrounds */\n  .restaurant-hero__cta--secondary :global(.btn),\n  :global(.btn).restaurant-hero__cta--secondary {\n    background-color: transparent;\n    border-color: var(--color-cream, #fffbeb);\n    color: var(--color-cream, #fffbeb);\n  }\n\n  .restaurant-hero__cta--secondary:hover :global(.btn),\n  :global(.btn).restaurant-hero__cta--secondary:hover {\n    background-color: rgba(255, 251, 235, 0.15);\n    border-color: var(--color-cream, #fffbeb);\n    color: var(--color-cream, #fffbeb);\n  }"
}
Now let me also add fallbacks to the hours badge and other elements that use `--color-cream`:

🔧 Tool: Edit
Input: {
  "file_path": "C:\\Users\\James\\Repos\\restaurant-business\\src\\components\\RestaurantHeroSection.astro",
  "old_string": "    color: var(--color-cream);\n    animation-delay: var(--animation-delay-1);\n  }",
  "new_string": "    color: var(--color-cream, #fffbeb);\n    animation-delay: var(--animation-delay-1);\n  }"
}
Now fix the background-color fallback:

🔧 Tool: Edit
Input: {
  "file_path": "C:\\Users\\James\\Repos\\restaurant-business\\src\\components\\RestaurantHeroSection.astro",
  "old_string": "    background-color: var(--color-charcoal);\n  }",
  "new_string": "    background-color: var(--color-charcoal, #1a1412);\n  }"
}
Now let me also strengthen the overlay to improve text readability. The current overlay may be too subtle based on the screenshot:

🔧 Tool: Edit
Input: {
  "file_path": "C:\\Users\\James\\Repos\\restaurant-business\\src\\components\\RestaurantHeroSection.astro",
  "old_string": "  /* Base dark overlay for text readability */\n  .restaurant-hero__overlay--base {\n    background: linear-gradient(\n      180deg,\n      rgba(26, 20, 18, calc(var(--overlay-opacity) * 0.6)) 0%,\n      rgba(26, 20, 18, calc(var(--overlay-opacity) * 0.4)) 30%,\n      rgba(26, 20, 18, calc(var(--overlay-opacity) * 0.5)) 60%,\n      rgba(26, 20, 18, calc(var(--overlay-opacity) * 0.85)) 100%\n    );\n  }",
  "new_string": "  /* Base dark overlay for text readability */\n  .restaurant-hero__overlay--base {\n    background: linear-gradient(\n      180deg,\n      rgba(26, 20, 18, calc(var(--overlay-opacity) * 0.7)) 0%,\n      rgba(26, 20, 18, calc(var(--overlay-opacity) * 0.55)) 30%,\n      rgba(26, 20, 18, calc(var(--overlay-opacity) * 0.65)) 60%,\n      rgba(26, 20, 18, calc(var(--overlay-opacity) * 0.9)) 100%\n    );\n  }"
}
Now let me also update the dark mode overrides at the bottom of the hero component to use fallbacks:

🔧 Tool: Edit
Input: {
  "file_path": "C:\\Users\\James\\Repos\\restaurant-business\\src\\components\\RestaurantHeroSection.astro",
  "old_string": "  :global(html[data-theme=\"dark\"]) .restaurant-hero__cta--primary {\n    background-color: var(--color-burgundy);\n  }\n\n  :global(html[data-theme=\"dark\"]) .restaurant-hero__cta--primary:hover {\n    background-color: var(--color-burgundy-light);\n  }",
  "new_string": "  :global(html[data-theme=\"dark\"]) .restaurant-hero__cta--primary,\n  :global(html[data-theme=\"dark\"]) :global(.btn).restaurant-hero__cta--primary {\n    background-color: var(--color-burgundy, #722f37);\n  }\n\n  :global(html[data-theme=\"dark\"]) .restaurant-hero__cta--primary:hover,\n  :global(html[data-theme=\"dark\"]) :global(.btn).restaurant-hero__cta--primary:hover {\n    background-color: var(--color-burgundy-light, #8b3a44);\n  }"
}
Now let me also check the `index.astro` to see if there's a way to increase the overlay opacity from the page level:

🔧 Tool: Read
Input: {
  "file_path": "C:\\Users\\James\\Repos\\restaurant-business\\src\\pages\\index.astro",
  "offset": 127,
  "limit": 30
}
Let me increase the overlay opacity slightly for better readability:

🔧 Tool: Edit
Input: {
  "file_path": "C:\\Users\\James\\Repos\\restaurant-business\\src\\pages\\index.astro",
  "old_string": "\t\t\toverlayOpacity={0.5}",
  "new_string": "\t\t\toverlayOpacity={0.6}"
}
Now let me also handle the Button component's scoped styles more directly. The real issue is that when the hero passes `class="restaurant-hero__cta restaurant-hero__cta--secondary"` to the Button, those classes get applied to the `<a>` element alongside `btn btn--secondary`. But since the Button's styles are scoped, the hero's scoped `:global()` selectors need to target correctly. Let me look at how the class is being passed:

Looking at the hero template, the `class` is passed as a prop to `<Button>`, which adds it to the `buttonClasses` array. So the rendered `<a>` will have both `btn btn--secondary btn--large restaurant-hero__cta restaurant-hero__cta--secondary`. The issue is that `.btn--secondary` color definition (`color: var(--color-primary)`) in the Button's scoped CSS will win over the hero's scoped `.restaurant-hero__cta--secondary` because they have equal specificity but the Button's styles may be loaded later.

The most reliable fix is to use `:global()` in the hero to override the button styles directly:

🔧 Tool: Edit
Input: {
  "file_path": "C:\\Users\\James\\Repos\\restaurant-business\\src\\components\\RestaurantHeroSection.astro",
  "old_string": "  /* Primary CTA - Warm burgundy fill */\n  .restaurant-hero__cta--primary :global(.btn),\n  :global(.btn).restaurant-hero__cta--primary {\n    background-color: var(--color-burgundy, #722f37);\n    border-color: var(--color-burgundy, #722f37);\n    color: var(--color-cream, #fffbeb);\n    box-shadow: var(--shadow-lg), var(--glow-primary-sm);\n  }\n\n  .restaurant-hero__cta--primary:hover :global(.btn),\n  :global(.btn).restaurant-hero__cta--primary:hover {\n    background-color: var(--color-burgundy-light, #8b3a44);\n    border-color: var(--color-burgundy-light, #8b3a44);\n    box-shadow: var(--shadow-xl), var(--glow-primary-md);\n    transform: translateY(-2px);\n  }\n\n  /* Secondary CTA - Ghost style for dark backgrounds */\n  .restaurant-hero__cta--secondary :global(.btn),\n  :global(.btn).restaurant-hero__cta--secondary {\n    background-color: transparent;\n    border-color: var(--color-cream, #fffbeb);\n    color: var(--color-cream, #fffbeb);\n  }\n\n  .restaurant-hero__cta--secondary:hover :global(.btn),\n  :global(.btn).restaurant-hero__cta--secondary:hover {\n    background-color: rgba(255, 251, 235, 0.15);\n    border-color: var(--color-cream, #fffbeb);\n    color: var(--color-cream, #fffbeb);\n  }",
  "new_string": "  /* Primary CTA - Warm burgundy fill */\n  .restaurant-hero__cta-group :global(.restaurant-hero__cta--primary) {\n    background-color: var(--color-burgundy, #722f37) !important;\n    border-color: var(--color-burgundy, #722f37) !important;\n    color: var(--color-cream, #fffbeb) !important;\n    box-shadow: var(--shadow-lg), var(--glow-primary-sm);\n  }\n\n  .restaurant-hero__cta-group :global(.restaurant-hero__cta--primary:hover) {\n    background-color: var(--color-burgundy-light, #8b3a44) !important;\n    border-color: var(--color-burgundy-light, #8b3a44) !important;\n    box-shadow: var(--shadow-xl), var(--glow-primary-md);\n    transform: translateY(-2px);\n  }\n\n  /* Secondary CTA - Ghost style for dark backgrounds */\n  .restaurant-hero__cta-group :global(.restaurant-hero__cta--secondary) {\n    background-color: transparent !important;\n    border-color: var(--color-cream, #fffbeb) !important;\n    color: var(--color-cream, #fffbeb) !important;\n  }\n\n  .restaurant-hero__cta-group :global(.restaurant-hero__cta--secondary:hover) {\n    background-color: rgba(255, 251, 235, 0.15) !important;\n    border-color: var(--color-cream, #fffbeb) !important;\n    color: var(--color-cream, #fffbeb) !important;\n  }"
}
Also fix the dark mode overrides to use the same pattern:

🔧 Tool: Edit
Input: {
  "file_path": "C:\\Users\\James\\Repos\\restaurant-business\\src\\components\\RestaurantHeroSection.astro",
  "old_string": "  :global(html[data-theme=\"dark\"]) .restaurant-hero__cta--primary,\n  :global(html[data-theme=\"dark\"]) :global(.btn).restaurant-hero__cta--primary {\n    background-color: var(--color-burgundy, #722f37);\n  }\n\n  :global(html[data-theme=\"dark\"]) .restaurant-hero__cta--primary:hover,\n  :global(html[data-theme=\"dark\"]) :global(.btn).restaurant-hero__cta--primary:hover {\n    background-color: var(--color-burgundy-light, #8b3a44);\n  }",
  "new_string": "  :global(html[data-theme=\"dark\"]) .restaurant-hero__cta-group :global(.restaurant-hero__cta--primary) {\n    background-color: var(--color-burgundy, #722f37) !important;\n  }\n\n  :global(html[data-theme=\"dark\"]) .restaurant-hero__cta-group :global(.restaurant-hero__cta--primary:hover) {\n    background-color: var(--color-burgundy-light, #8b3a44) !important;\n  }"
}
Now let me verify the final state of the component:

🔧 Tool: Bash
Input: {
  "command": "cd \"C:\\Users\\James\\Repos\\restaurant-business\" && npx astro check 2>&1 | head -30",
  "description": "Run Astro check for errors",
  "timeout": 60000
}

🔧 Tool: Bash
Input: {
  "command": "cd \"C:\\Users\\James\\Repos\\restaurant-business\" && npx astro build 2>&1 | tail -20",
  "description": "Build to verify no errors",
  "timeout": 120000
}
Build succeeds. Let me verify the final state of the modified files:

🔧 Tool: Read
Input: {
  "file_path": "C:\\Users\\James\\Repos\\restaurant-business\\src\\components\\RestaurantHeroSection.astro",
  "offset": 365,
  "limit": 110
}
Everything looks good. The build completes successfully. Let me verify the changes are consistent:

<summary>

## Summary: Fix homepage hero text readability issues

### Changes Implemented

1. **Added missing restaurant brand color variables** to the design system (`variables.css`):
   - `--color-cream`: Warm white (`#fffbeb`) for text on dark backgrounds
   - `--color-cream-light`: Muted cream for secondary text
   - `--color-burgundy`: Rich wine red (`#722f37`) for primary CTA buttons
   - `--color-burgundy-light`: Lighter burgundy for hover states
   - `--color-charcoal`: Dark warm black for backgrounds
   - `--color-terracotta` and `--color-gold`: Accent colors
   - Also added dark mode variants for these colors

2. **Fixed hero text colors** with CSS fallback values:
   - Restaurant name (`h1`) now uses `var(--color-cream, #fffbeb)` with fallback
   - Tagline opacity increased from `0.9` to `0.95` for better readability
   - Enhanced text-shadow on both title and tagline for better contrast against busy backgrounds

3. **Strengthened the background overlay** for improved text contrast:
   - Increased overlay gradient opacity values across all gradient stops
   - Increased `overlayOpacity` prop from `0.5` to `0.6` in the homepage usage

4. **Fixed secondary CTA button ("Explore Our Menu") text color**:
   - Used `:global()` selectors with `!important` to properly override the Button component's scoped styles
   - Secondary button now correctly displays cream/white text and border instead of inheriting the navy blue primary color
   - Primary button also properly styled with burgundy background and cream text

### Files Modified
- `src/styles/variables.css` — Added restaurant brand color variables (light + dark mode)
- `src/components/RestaurantHeroSection.astro` — Fixed color fallbacks, overlay strength, and button style overrides
- `src/pages/index.astro` — Increased overlay opacity from 0.5 to 0.6

### Notes for Developer
- The root cause was that `--color-cream`, `--color-burgundy`, `--color-burgundy-light`, and `--color-charcoal` CSS custom properties were referenced throughout components but never defined in the design system variables file
- All color references now include CSS fallback values (e.g., `var(--color-cream, #fffbeb)`) for extra resilience
- The button overrides use `!important` to reliably override Astro's scoped component styles — this is the standard pattern needed when a parent component must override a child component's scoped styles in Astro
- Build verified successfully with `astro build`

</summary>