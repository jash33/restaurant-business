
🔧 Tool: Read
Input: {
  "file_path": "C:\\Users\\James\\Repos\\restaurant-business\\src\\components\\WarmGradientOverlay.astro"
}

🔧 Tool: Glob
Input: {
  "pattern": "src/styles/*.css",
  "path": "C:\\Users\\James\\Repos\\restaurant-business"
}

🔧 Tool: Read
Input: {
  "file_path": "C:\\Users\\James\\Repos\\restaurant-business\\src\\styles\\variables.css"
}
I can see the implementation is already well underway. Let me review what has been done:

1. **CSS Variables** (in `variables.css`): ✅ Complete - warm color palette and gradient overlays are defined (lines 493-573)
2. **WarmGradientOverlay Component** (in `WarmGradientOverlay.astro`): ✅ Complete - fully documented component with multiple variants, vignette options, and legibility layer

Let me check if there's a demo page or if the component is being used anywhere, and then create a verification test.

🔧 Tool: Grep
Input: {
  "pattern": "WarmGradientOverlay",
  "output_mode": "files_with_matches"
}

🔧 Tool: Glob
Input: {
  "pattern": "**/*.spec.ts",
  "path": "C:\\Users\\James\\Repos\\restaurant-business"
}

🔧 Tool: Glob
Input: {
  "pattern": "**/playwright.config.*",
  "path": "C:\\Users\\James\\Repos\\restaurant-business"
}
Let me check the Playwright configuration and understand the project structure better:

🔧 Tool: Read
Input: {
  "file_path": "C:\\Users\\James\\Repos\\restaurant-business\\playwright.config.ts"
}

🔧 Tool: Glob
Input: {
  "pattern": "src/pages/**/*.astro",
  "path": "C:\\Users\\James\\Repos\\restaurant-business"
}
I need to create a demo page for the WarmGradientOverlay component so it can be properly tested. Let me first check one of the existing demo pages for the pattern they follow:

🔧 Tool: Read
Input: {
  "file_path": "C:\\Users\\James\\Repos\\restaurant-business\\src\\pages\\restaurant-hero-demo.astro"
}
I see the RestaurantHeroSection already uses the gradient overlays. Let me check if it utilizes the WarmGradientOverlay component:

🔧 Tool: Read
Input: {
  "file_path": "C:\\Users\\James\\Repos\\restaurant-business\\src\\components\\RestaurantHeroSection.astro"
}
I see that `RestaurantHeroSection` has its own warm gradient implementation baked in (lines 241-262), but doesn't use the standalone `WarmGradientOverlay` component. The standalone component provides more flexibility and can be used across other sections as well.

Let me create a demo page to properly showcase the `WarmGradientOverlay` component, then create a Playwright verification test:

🔧 Tool: Write
Input: {
  "file_path": "C:\\Users\\James\\Repos\\restaurant-business\\src\\pages\\warm-gradient-demo.astro",
  "content": "---\n/**\n * Warm Gradient Overlay Demo Page\n * Demonstrates all variants and configurations of the WarmGradientOverlay component\n * for enhancing food photography with warm, moody tones.\n */\nimport Layout from '../layouts/Layout.astro';\nimport WarmGradientOverlay from '../components/WarmGradientOverlay.astro';\n---\n\n<Layout\n  title=\"Warm Gradient Overlay Demo\"\n  description=\"Demo page showcasing warm gradient overlay variants for food photography enhancement.\"\n>\n  <main class=\"warm-gradient-demo\">\n    <!-- Page Header -->\n    <header class=\"demo-header\">\n      <h1>Warm Gradient Overlays</h1>\n      <p>Enhance food photography with warm, moody tones. Perfect for hero sections and feature backgrounds.</p>\n    </header>\n\n    <!-- Variant Showcase Section -->\n    <section class=\"demo-section\">\n      <h2>Gradient Variants</h2>\n      <p class=\"demo-description\">Five preset gradient styles for different moods and atmospheres.</p>\n\n      <div class=\"demo-grid\">\n        <!-- Golden Hour -->\n        <div class=\"demo-card\" data-testid=\"demo-golden-hour\">\n          <div class=\"demo-card__image-container\">\n            <img\n              src=\"https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=600&q=80\"\n              alt=\"Food plating with golden hour lighting\"\n              class=\"demo-card__image\"\n            />\n            <WarmGradientOverlay\n              variant=\"golden-hour\"\n              showLegibilityLayer={true}\n              testId=\"overlay-golden-hour\"\n            />\n            <div class=\"demo-card__text-overlay\">\n              <span class=\"demo-card__label\">Golden Hour</span>\n            </div>\n          </div>\n          <p class=\"demo-card__description\">Warm sunset tones for outdoor/natural lighting feel</p>\n        </div>\n\n        <!-- Candlelight -->\n        <div class=\"demo-card\" data-testid=\"demo-candlelight\">\n          <div class=\"demo-card__image-container\">\n            <img\n              src=\"https://images.unsplash.com/photo-1476224203421-9ac39bcb3327?w=600&q=80\"\n              alt=\"Intimate dinner setting\"\n              class=\"demo-card__image\"\n            />\n            <WarmGradientOverlay\n              variant=\"candlelight\"\n              showLegibilityLayer={true}\n              testId=\"overlay-candlelight\"\n            />\n            <div class=\"demo-card__text-overlay\">\n              <span class=\"demo-card__label\">Candlelight</span>\n            </div>\n          </div>\n          <p class=\"demo-card__description\">Intimate, warm restaurant ambiance</p>\n        </div>\n\n        <!-- Moody -->\n        <div class=\"demo-card\" data-testid=\"demo-moody\">\n          <div class=\"demo-card__image-container\">\n            <img\n              src=\"https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&q=80\"\n              alt=\"Elegant restaurant dish\"\n              class=\"demo-card__image\"\n            />\n            <WarmGradientOverlay\n              variant=\"moody\"\n              showLegibilityLayer={true}\n              testId=\"overlay-moody\"\n            />\n            <div class=\"demo-card__text-overlay\">\n              <span class=\"demo-card__label\">Moody</span>\n            </div>\n          </div>\n          <p class=\"demo-card__description\">Sophisticated wine/restaurant tones</p>\n        </div>\n\n        <!-- Terracotta -->\n        <div class=\"demo-card\" data-testid=\"demo-terracotta\">\n          <div class=\"demo-card__image-container\">\n            <img\n              src=\"https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=600&q=80\"\n              alt=\"Rustic food presentation\"\n              class=\"demo-card__image\"\n            />\n            <WarmGradientOverlay\n              variant=\"terracotta\"\n              showLegibilityLayer={true}\n              testId=\"overlay-terracotta\"\n            />\n            <div class=\"demo-card__text-overlay\">\n              <span class=\"demo-card__label\">Terracotta</span>\n            </div>\n          </div>\n          <p class=\"demo-card__description\">Earthy, rustic tones</p>\n        </div>\n\n        <!-- Ember -->\n        <div class=\"demo-card\" data-testid=\"demo-ember\">\n          <div class=\"demo-card__image-container\">\n            <img\n              src=\"https://images.unsplash.com/photo-1544025162-d76694265947?w=600&q=80\"\n              alt=\"Grilled food with warm glow\"\n              class=\"demo-card__image\"\n            />\n            <WarmGradientOverlay\n              variant=\"ember\"\n              showLegibilityLayer={true}\n              testId=\"overlay-ember\"\n            />\n            <div class=\"demo-card__text-overlay\">\n              <span class=\"demo-card__label\">Ember</span>\n            </div>\n          </div>\n          <p class=\"demo-card__description\">Warm hearth/fireplace glow (radial)</p>\n        </div>\n      </div>\n    </section>\n\n    <!-- Vignette Options Section -->\n    <section class=\"demo-section\">\n      <h2>Vignette Effects</h2>\n      <p class=\"demo-description\">Add edge darkening for a more dramatic, focused effect.</p>\n\n      <div class=\"demo-grid demo-grid--3col\">\n        <!-- No Vignette -->\n        <div class=\"demo-card\" data-testid=\"demo-vignette-none\">\n          <div class=\"demo-card__image-container\">\n            <img\n              src=\"https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=600&q=80\"\n              alt=\"Pizza presentation\"\n              class=\"demo-card__image\"\n            />\n            <WarmGradientOverlay\n              variant=\"moody\"\n              vignette=\"none\"\n              showLegibilityLayer={true}\n              testId=\"overlay-vignette-none\"\n            />\n            <div class=\"demo-card__text-overlay\">\n              <span class=\"demo-card__label\">No Vignette</span>\n            </div>\n          </div>\n        </div>\n\n        <!-- Soft Vignette -->\n        <div class=\"demo-card\" data-testid=\"demo-vignette-soft\">\n          <div class=\"demo-card__image-container\">\n            <img\n              src=\"https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=600&q=80\"\n              alt=\"Pizza presentation\"\n              class=\"demo-card__image\"\n            />\n            <WarmGradientOverlay\n              variant=\"moody\"\n              vignette=\"soft\"\n              showLegibilityLayer={true}\n              testId=\"overlay-vignette-soft\"\n            />\n            <div class=\"demo-card__text-overlay\">\n              <span class=\"demo-card__label\">Soft Vignette</span>\n            </div>\n          </div>\n        </div>\n\n        <!-- Strong Vignette -->\n        <div class=\"demo-card\" data-testid=\"demo-vignette-strong\">\n          <div class=\"demo-card__image-container\">\n            <img\n              src=\"https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=600&q=80\"\n              alt=\"Pizza presentation\"\n              class=\"demo-card__image\"\n            />\n            <WarmGradientOverlay\n              variant=\"moody\"\n              vignette=\"strong\"\n              showLegibilityLayer={true}\n              testId=\"overlay-vignette-strong\"\n            />\n            <div class=\"demo-card__text-overlay\">\n              <span class=\"demo-card__label\">Strong Vignette</span>\n            </div>\n          </div>\n        </div>\n      </div>\n    </section>\n\n    <!-- Opacity Control Section -->\n    <section class=\"demo-section\">\n      <h2>Opacity Control</h2>\n      <p class=\"demo-description\">Fine-tune the intensity with the opacity multiplier (0-1).</p>\n\n      <div class=\"demo-grid demo-grid--4col\">\n        <!-- 25% Opacity -->\n        <div class=\"demo-card\" data-testid=\"demo-opacity-25\">\n          <div class=\"demo-card__image-container\">\n            <img\n              src=\"https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=600&q=80\"\n              alt=\"Pancakes with berries\"\n              class=\"demo-card__image\"\n            />\n            <WarmGradientOverlay\n              variant=\"golden-hour\"\n              opacity={0.25}\n              showLegibilityLayer={true}\n              testId=\"overlay-opacity-25\"\n            />\n            <div class=\"demo-card__text-overlay\">\n              <span class=\"demo-card__label\">25%</span>\n            </div>\n          </div>\n        </div>\n\n        <!-- 50% Opacity -->\n        <div class=\"demo-card\" data-testid=\"demo-opacity-50\">\n          <div class=\"demo-card__image-container\">\n            <img\n              src=\"https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=600&q=80\"\n              alt=\"Pancakes with berries\"\n              class=\"demo-card__image\"\n            />\n            <WarmGradientOverlay\n              variant=\"golden-hour\"\n              opacity={0.5}\n              showLegibilityLayer={true}\n              testId=\"overlay-opacity-50\"\n            />\n            <div class=\"demo-card__text-overlay\">\n              <span class=\"demo-card__label\">50%</span>\n            </div>\n          </div>\n        </div>\n\n        <!-- 75% Opacity -->\n        <div class=\"demo-card\" data-testid=\"demo-opacity-75\">\n          <div class=\"demo-card__image-container\">\n            <img\n              src=\"https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=600&q=80\"\n              alt=\"Pancakes with berries\"\n              class=\"demo-card__image\"\n            />\n            <WarmGradientOverlay\n              variant=\"golden-hour\"\n              opacity={0.75}\n              showLegibilityLayer={true}\n              testId=\"overlay-opacity-75\"\n            />\n            <div class=\"demo-card__text-overlay\">\n              <span class=\"demo-card__label\">75%</span>\n            </div>\n          </div>\n        </div>\n\n        <!-- 100% Opacity -->\n        <div class=\"demo-card\" data-testid=\"demo-opacity-100\">\n          <div class=\"demo-card__image-container\">\n            <img\n              src=\"https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=600&q=80\"\n              alt=\"Pancakes with berries\"\n              class=\"demo-card__image\"\n            />\n            <WarmGradientOverlay\n              variant=\"golden-hour\"\n              opacity={1}\n              showLegibilityLayer={true}\n              testId=\"overlay-opacity-100\"\n            />\n            <div class=\"demo-card__text-overlay\">\n              <span class=\"demo-card__label\">100%</span>\n            </div>\n          </div>\n        </div>\n      </div>\n    </section>\n\n    <!-- Full-width Hero Example -->\n    <section class=\"demo-section demo-section--hero\" data-testid=\"demo-hero-section\">\n      <div class=\"demo-hero\">\n        <img\n          src=\"https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1920&q=80\"\n          alt=\"Restaurant ambiance\"\n          class=\"demo-hero__image\"\n        />\n        <WarmGradientOverlay\n          variant=\"candlelight\"\n          vignette=\"strong\"\n          showLegibilityLayer={true}\n          opacity={0.9}\n          testId=\"overlay-hero-example\"\n        />\n        <div class=\"demo-hero__content\">\n          <h2 class=\"demo-hero__title\">Full-Width Hero Example</h2>\n          <p class=\"demo-hero__subtitle\">\n            Candlelight variant with strong vignette and legibility layer ensures text remains readable\n            while maintaining the warm, inviting atmosphere.\n          </p>\n        </div>\n      </div>\n    </section>\n\n    <!-- Usage Notes -->\n    <section class=\"demo-section demo-section--notes\">\n      <h2>Usage Notes</h2>\n      <ul class=\"demo-notes\">\n        <li><strong>Legibility Layer:</strong> Always enable <code>showLegibilityLayer</code> when text is present over the image.</li>\n        <li><strong>Accessibility:</strong> The overlay is marked with <code>aria-hidden=\"true\"</code> as it's decorative.</li>\n        <li><strong>Reduced Motion:</strong> Transitions are disabled when users prefer reduced motion.</li>\n        <li><strong>High Contrast Mode:</strong> Overlays are hidden in forced-colors mode for accessibility.</li>\n        <li><strong>Print Styles:</strong> Overlays are hidden when printing.</li>\n      </ul>\n    </section>\n  </main>\n</Layout>\n\n<style>\n  .warm-gradient-demo {\n    padding: var(--spacing-8) var(--spacing-4);\n    max-width: var(--container-7xl);\n    margin: 0 auto;\n  }\n\n  .demo-header {\n    text-align: center;\n    margin-bottom: var(--spacing-12);\n    padding-top: var(--spacing-8);\n  }\n\n  .demo-header h1 {\n    font-family: var(--font-heading);\n    font-size: var(--font-size-4xl);\n    color: var(--color-text-primary);\n    margin-bottom: var(--spacing-4);\n  }\n\n  .demo-header p {\n    font-family: var(--font-body);\n    font-size: var(--font-size-lg);\n    color: var(--color-text-secondary);\n    max-width: 60ch;\n    margin: 0 auto;\n  }\n\n  .demo-section {\n    margin-bottom: var(--spacing-16);\n  }\n\n  .demo-section h2 {\n    font-family: var(--font-heading);\n    font-size: var(--font-size-2xl);\n    color: var(--color-text-primary);\n    margin-bottom: var(--spacing-2);\n  }\n\n  .demo-description {\n    font-family: var(--font-body);\n    color: var(--color-text-secondary);\n    margin-bottom: var(--spacing-8);\n  }\n\n  .demo-grid {\n    display: grid;\n    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));\n    gap: var(--spacing-6);\n  }\n\n  .demo-grid--3col {\n    grid-template-columns: repeat(3, 1fr);\n  }\n\n  .demo-grid--4col {\n    grid-template-columns: repeat(4, 1fr);\n  }\n\n  @media (max-width: 900px) {\n    .demo-grid--3col,\n    .demo-grid--4col {\n      grid-template-columns: repeat(2, 1fr);\n    }\n  }\n\n  @media (max-width: 600px) {\n    .demo-grid--3col,\n    .demo-grid--4col {\n      grid-template-columns: 1fr;\n    }\n  }\n\n  .demo-card {\n    background: var(--color-background-elevated);\n    border-radius: var(--radius-xl);\n    overflow: hidden;\n    box-shadow: var(--shadow-md);\n    transition: var(--transition-hover-lift);\n  }\n\n  .demo-card:hover {\n    transform: var(--transform-hover-lift-sm);\n    box-shadow: var(--shadow-lg);\n  }\n\n  .demo-card__image-container {\n    position: relative;\n    aspect-ratio: 4/3;\n    overflow: hidden;\n  }\n\n  .demo-card__image {\n    width: 100%;\n    height: 100%;\n    object-fit: cover;\n  }\n\n  .demo-card__text-overlay {\n    position: absolute;\n    inset: 0;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    z-index: 10;\n  }\n\n  .demo-card__label {\n    font-family: var(--font-heading);\n    font-size: var(--font-size-xl);\n    font-weight: var(--font-weight-bold);\n    color: white;\n    text-shadow: 0 2px 8px rgba(0, 0, 0, 0.5);\n  }\n\n  .demo-card__description {\n    padding: var(--spacing-4);\n    font-family: var(--font-body);\n    font-size: var(--font-size-sm);\n    color: var(--color-text-secondary);\n    text-align: center;\n    margin: 0;\n  }\n\n  /* Hero Example Styles */\n  .demo-section--hero {\n    margin-left: calc(-1 * var(--spacing-4));\n    margin-right: calc(-1 * var(--spacing-4));\n    max-width: none;\n  }\n\n  .demo-hero {\n    position: relative;\n    min-height: 500px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    overflow: hidden;\n  }\n\n  .demo-hero__image {\n    position: absolute;\n    inset: 0;\n    width: 100%;\n    height: 100%;\n    object-fit: cover;\n  }\n\n  .demo-hero__content {\n    position: relative;\n    z-index: 10;\n    text-align: center;\n    padding: var(--spacing-8);\n    max-width: 60ch;\n  }\n\n  .demo-hero__title {\n    font-family: var(--font-heading);\n    font-size: var(--font-size-4xl);\n    font-weight: var(--font-weight-bold);\n    color: white;\n    margin-bottom: var(--spacing-4);\n    text-shadow: 0 2px 8px rgba(0, 0, 0, 0.5);\n  }\n\n  .demo-hero__subtitle {\n    font-family: var(--font-body);\n    font-size: var(--font-size-lg);\n    color: rgba(255, 255, 255, 0.9);\n    line-height: var(--line-height-relaxed);\n    text-shadow: 0 1px 4px rgba(0, 0, 0, 0.4);\n  }\n\n  /* Notes Section */\n  .demo-section--notes {\n    background: var(--color-background-subtle);\n    padding: var(--spacing-8);\n    border-radius: var(--radius-xl);\n    margin-left: 0;\n    margin-right: 0;\n  }\n\n  .demo-notes {\n    list-style: none;\n    padding: 0;\n    margin: 0;\n    display: flex;\n    flex-direction: column;\n    gap: var(--spacing-3);\n  }\n\n  .demo-notes li {\n    font-family: var(--font-body);\n    color: var(--color-text-secondary);\n    line-height: var(--line-height-relaxed);\n  }\n\n  .demo-notes code {\n    font-family: var(--font-mono);\n    font-size: var(--font-size-sm);\n    background: var(--color-background-muted);\n    padding: var(--spacing-0-5) var(--spacing-1);\n    border-radius: var(--radius-sm);\n    color: var(--color-text-primary);\n  }\n</style>\n"
}
Now let me create a Playwright verification test to confirm the feature works correctly:

🔧 Tool: Write
Input: {
  "file_path": "C:\\Users\\James\\Repos\\restaurant-business\\tests\\warm-gradient-overlay-verification.spec.ts",
  "content": "import { test, expect } from '@playwright/test';\n\n/**\n * Warm Gradient Overlay Feature Verification Test\n *\n * This test verifies that the WarmGradientOverlay component is working correctly\n * by checking:\n * 1. All gradient variants render properly\n * 2. Vignette effects are applied\n * 3. Legibility layers are present\n * 4. Hero section example works with full configuration\n * 5. CSS custom properties from variables.css are defined\n */\n\ntest.describe('Warm Gradient Overlay Feature', () => {\n  test.beforeEach(async ({ page }) => {\n    await page.goto('/warm-gradient-demo');\n  });\n\n  test('page loads successfully', async ({ page }) => {\n    await expect(page).toHaveTitle(/Warm Gradient Overlay Demo/);\n    await expect(page.locator('h1')).toContainText('Warm Gradient Overlays');\n  });\n\n  test('all gradient variants render correctly', async ({ page }) => {\n    // Check each variant has its overlay element\n    const variants = ['golden-hour', 'candlelight', 'moody', 'terracotta', 'ember'];\n\n    for (const variant of variants) {\n      const overlay = page.locator(`[data-testid=\"overlay-${variant}\"]`);\n      await expect(overlay).toBeVisible();\n\n      // Check the warm layer exists within the overlay\n      const warmLayer = page.locator(`[data-testid=\"overlay-${variant}-warm\"]`);\n      await expect(warmLayer).toBeVisible();\n\n      // Check legibility layer is present\n      const legibilityLayer = page.locator(`[data-testid=\"overlay-${variant}-legibility\"]`);\n      await expect(legibilityLayer).toBeVisible();\n    }\n  });\n\n  test('vignette options are applied correctly', async ({ page }) => {\n    // No vignette - should NOT have vignette layer\n    const noVignette = page.locator('[data-testid=\"overlay-vignette-none-vignette\"]');\n    await expect(noVignette).toHaveCount(0);\n\n    // Soft vignette - should have vignette layer\n    const softVignette = page.locator('[data-testid=\"overlay-vignette-soft-vignette\"]');\n    await expect(softVignette).toBeVisible();\n\n    // Strong vignette - should have vignette layer\n    const strongVignette = page.locator('[data-testid=\"overlay-vignette-strong-vignette\"]');\n    await expect(strongVignette).toBeVisible();\n  });\n\n  test('opacity control variants are present', async ({ page }) => {\n    const opacities = ['25', '50', '75', '100'];\n\n    for (const opacity of opacities) {\n      const overlay = page.locator(`[data-testid=\"overlay-opacity-${opacity}\"]`);\n      await expect(overlay).toBeVisible();\n    }\n  });\n\n  test('hero section example renders correctly', async ({ page }) => {\n    const heroSection = page.locator('[data-testid=\"demo-hero-section\"]');\n    await expect(heroSection).toBeVisible();\n\n    // Check the hero overlay has all layers\n    const heroOverlay = page.locator('[data-testid=\"overlay-hero-example\"]');\n    await expect(heroOverlay).toBeVisible();\n\n    // Legibility layer\n    const heroLegibility = page.locator('[data-testid=\"overlay-hero-example-legibility\"]');\n    await expect(heroLegibility).toBeVisible();\n\n    // Warm layer\n    const heroWarm = page.locator('[data-testid=\"overlay-hero-example-warm\"]');\n    await expect(heroWarm).toBeVisible();\n\n    // Vignette layer (strong vignette is enabled)\n    const heroVignette = page.locator('[data-testid=\"overlay-hero-example-vignette\"]');\n    await expect(heroVignette).toBeVisible();\n  });\n\n  test('overlay is marked as decorative for accessibility', async ({ page }) => {\n    // Check that overlays have aria-hidden=\"true\"\n    const overlay = page.locator('[data-testid=\"overlay-moody\"]');\n    await expect(overlay).toHaveAttribute('aria-hidden', 'true');\n  });\n\n  test('CSS custom properties for warm gradients are defined', async ({ page }) => {\n    // Check that the CSS variables are defined by evaluating their computed values\n    const gradientVars = await page.evaluate(() => {\n      const root = document.documentElement;\n      const style = getComputedStyle(root);\n\n      return {\n        goldenHour: style.getPropertyValue('--gradient-warm-golden-hour').trim(),\n        candlelight: style.getPropertyValue('--gradient-warm-candlelight').trim(),\n        moody: style.getPropertyValue('--gradient-warm-moody').trim(),\n        terracotta: style.getPropertyValue('--gradient-warm-terracotta').trim(),\n        ember: style.getPropertyValue('--gradient-warm-ember').trim(),\n        vignetteSoft: style.getPropertyValue('--gradient-vignette-soft').trim(),\n        vignetteStrong: style.getPropertyValue('--gradient-vignette-strong').trim(),\n        legibility: style.getPropertyValue('--gradient-overlay-legibility').trim(),\n      };\n    });\n\n    // Verify each variable is defined (not empty)\n    expect(gradientVars.goldenHour).not.toBe('');\n    expect(gradientVars.candlelight).not.toBe('');\n    expect(gradientVars.moody).not.toBe('');\n    expect(gradientVars.terracotta).not.toBe('');\n    expect(gradientVars.ember).not.toBe('');\n    expect(gradientVars.vignetteSoft).not.toBe('');\n    expect(gradientVars.vignetteStrong).not.toBe('');\n    expect(gradientVars.legibility).not.toBe('');\n  });\n\n  test('overlay layers have correct CSS positioning', async ({ page }) => {\n    // Check that overlay container has position: absolute and inset: 0\n    const overlayStyles = await page.locator('[data-testid=\"overlay-moody\"]').evaluate((el) => {\n      const style = getComputedStyle(el);\n      return {\n        position: style.position,\n        top: style.top,\n        right: style.right,\n        bottom: style.bottom,\n        left: style.left,\n        pointerEvents: style.pointerEvents,\n      };\n    });\n\n    expect(overlayStyles.position).toBe('absolute');\n    expect(overlayStyles.top).toBe('0px');\n    expect(overlayStyles.right).toBe('0px');\n    expect(overlayStyles.bottom).toBe('0px');\n    expect(overlayStyles.left).toBe('0px');\n    expect(overlayStyles.pointerEvents).toBe('none');\n  });\n\n  test('warm layer uses multiply blend mode', async ({ page }) => {\n    const warmLayerStyles = await page.locator('[data-testid=\"overlay-moody-warm\"]').evaluate((el) => {\n      const style = getComputedStyle(el);\n      return {\n        mixBlendMode: style.mixBlendMode,\n      };\n    });\n\n    expect(warmLayerStyles.mixBlendMode).toBe('multiply');\n  });\n});\n"
}
Now let's run the Playwright tests to verify the feature works correctly:

🔧 Tool: Bash
Input: {
  "command": "cd \"C:\\Users\\James\\Repos\\restaurant-business\" && npx playwright test tests/warm-gradient-overlay-verification.spec.ts --reporter=list",
  "description": "Run Playwright verification tests",
  "timeout": 300000
}
There's a syntax error in the component. Let me check and fix it:

🔧 Tool: Read
Input: {
  "file_path": "C:\\Users\\James\\Repos\\restaurant-business\\src\\components\\WarmGradientOverlay.astro",
  "offset": 65,
  "limit": 20
}
The issue seems to be at line 73. The error says "Unexpected "|"" which suggests there might be a TypeScript union type issue. Let me check the types more carefully:

🔧 Tool: Read
Input: {
  "file_path": "C:\\Users\\James\\Repos\\restaurant-business\\src\\components\\WarmGradientOverlay.astro",
  "offset": 40,
  "limit": 30
}
The issue is that the `export type` syntax with leading `|` on multiple lines (lines 43-48) may not be working well in Astro's frontmatter. Let me fix this:

🔧 Tool: Edit
Input: {
  "file_path": "C:\\Users\\James\\Repos\\restaurant-business\\src\\components\\WarmGradientOverlay.astro",
  "old_string": "export type WarmGradientVariant =\n  | 'golden-hour'\n  | 'candlelight'\n  | 'moody'\n  | 'terracotta'\n  | 'ember';\n\nexport type VignetteStyle = 'none' | 'soft' | 'strong';",
  "new_string": "type WarmGradientVariant = 'golden-hour' | 'candlelight' | 'moody' | 'terracotta' | 'ember';\n\ntype VignetteStyle = 'none' | 'soft' | 'strong';"
}
Now let's run the tests again:

🔧 Tool: Bash
Input: {
  "command": "cd \"C:\\Users\\James\\Repos\\restaurant-business\" && npx playwright test tests/warm-gradient-overlay-verification.spec.ts --reporter=list",
  "description": "Run Playwright verification tests",
  "timeout": 300000
}
All 9 tests passed. Now let me clean up by deleting the verification test file as instructed:

🔧 Tool: Bash
Input: {
  "command": "rm \"C:\\Users\\James\\Repos\\restaurant-business\\tests\\warm-gradient-overlay-verification.spec.ts\"",
  "description": "Delete verification test file"
}
Let me verify the test file was deleted:

🔧 Tool: Bash
Input: {
  "command": "ls \"C:\\Users\\James\\Repos\\restaurant-business\\tests\\warm-gradient-overlay-verification.spec.ts\" 2>&1 || echo \"File deleted successfully\"",
  "description": "Verify test file deletion"
}
The test file has been deleted. Let me provide a summary of the complete implementation:

<summary>
## Summary: Warm Gradient Overlays for Hero and Section Backgrounds

### Changes Implemented
- **Fixed TypeScript syntax in WarmGradientOverlay.astro** - Changed `export type` with leading pipes to inline type definitions for Astro compatibility
- **Created demo page** (`warm-gradient-demo.astro`) - Comprehensive showcase of all gradient variants, vignette options, opacity controls, and a full-width hero example

### Files Modified
- `src/components/WarmGradientOverlay.astro` - Fixed TypeScript type syntax for Astro frontmatter compatibility
- `src/pages/warm-gradient-demo.astro` - **NEW** - Demo page showcasing all component features

### Files Previously Created (from prior implementation)
- `src/styles/variables.css` - Contains CSS custom properties for:
  - Warm color palette (`--color-warm-burgundy`, `--color-warm-gold`, etc.)
  - Five gradient variants (`--gradient-warm-golden-hour`, `--gradient-warm-candlelight`, `--gradient-warm-moody`, `--gradient-warm-terracotta`, `--gradient-warm-ember`)
  - Vignette overlays (`--gradient-vignette-soft`, `--gradient-vignette-strong`)
  - Legibility layer (`--gradient-overlay-legibility`)
- `src/components/WarmGradientOverlay.astro` - Reusable component with:
  - 5 preset gradient styles (golden-hour, candlelight, moody, terracotta, ember)
  - 3 vignette options (none, soft, strong)
  - Configurable opacity (0-1)
  - Optional legibility layer for text contrast
  - WCAG 2.1 AA compliant accessibility features
  - Reduced motion, high contrast mode, and print style support

### Verification Status
- Created comprehensive Playwright test suite with 9 test cases
- All tests passed (9/9):
  - Page loads successfully
  - All gradient variants render correctly
  - Vignette options are applied correctly
  - Opacity control variants are present
  - Hero section example renders correctly
  - Overlay is marked as decorative for accessibility
  - CSS custom properties for warm gradients are defined
  - Overlay layers have correct CSS positioning
  - Warm layer uses multiply blend mode
- Verification test file deleted after successful verification

### Notes for Developer
- **Demo page available at**: `/warm-gradient-demo` - Use this to preview all variants
- **Usage**: Import `WarmGradientOverlay` and place it inside a `position: relative` container after the background image
- **Text legibility**: Always enable `showLegibilityLayer={true}` when displaying text over the gradient
- **Blend mode**: The warm gradient layer uses `mix-blend-mode: multiply` for natural color blending
- **Accessibility**: The component is `aria-hidden="true"` and respects reduced motion preferences
</summary>