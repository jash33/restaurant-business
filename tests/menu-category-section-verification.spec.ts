/**
 * MenuCategorySection Verification Test
 * Temporary test file to verify the MenuCategorySection feature works correctly.
 * This file should be deleted after verification.
 */

import { test, expect } from '@playwright/test';

test.describe('MenuCategorySection Feature Verification', () => {
  test.beforeEach(async ({ page }) => {
    // Navigate to the demo page
    await page.goto('/menu-category-demo');
  });

  test('should render the demo page with correct title', async ({ page }) => {
    // Check page title
    await expect(page).toHaveTitle(/Menu Category Section Demo/);

    // Check main heading
    const mainHeading = page.locator('h1.demo-title');
    await expect(mainHeading).toBeVisible();
    await expect(mainHeading).toContainText('Menu Category Section Demo');
  });

  test('should render compact layout section', async ({ page }) => {
    const compactSection = page.locator('[data-testid="compact-layout"]');
    await expect(compactSection).toBeVisible();

    // Check section heading
    const heading = compactSection.locator('.menu-category-section__heading');
    await expect(heading).toContainText('Starters');

    // Check description is visible
    const description = compactSection.locator('.menu-category-section__description');
    await expect(description).toContainText('culinary journey');

    // Check grid has items
    const menuItems = compactSection.locator('.menu-category-section__item');
    await expect(menuItems).toHaveCount(4);

    // Verify layout class
    const section = compactSection.locator('.menu-category-section--layout-compact');
    await expect(section).toBeVisible();
  });

  test('should render detailed layout section with 2 columns', async ({ page }) => {
    const detailedSection = page.locator('[data-testid="detailed-layout"]');
    await expect(detailedSection).toBeVisible();

    // Check the layout modifier class
    const section = detailedSection.locator('.menu-category-section--layout-detailed');
    await expect(section).toBeVisible();

    // Check column modifier class
    const columnSection = detailedSection.locator('.menu-category-section--columns-2');
    await expect(columnSection).toBeVisible();

    // Verify items have card-like styling (background)
    const items = detailedSection.locator('.menu-category-section__item');
    await expect(items.first()).toBeVisible();
  });

  test('should render photo-heavy layout section with 3 columns', async ({ page }) => {
    const photoSection = page.locator('[data-testid="photo-heavy-layout"]');
    await expect(photoSection).toBeVisible();

    // Check the layout modifier class
    const section = photoSection.locator('.menu-category-section--layout-photo-heavy');
    await expect(section).toBeVisible();

    // Check column modifier
    const columnSection = photoSection.locator('.menu-category-section--columns-3');
    await expect(columnSection).toBeVisible();

    // Check heading
    const heading = photoSection.locator('.menu-category-section__heading');
    await expect(heading).toContainText('Featured Plates');
  });

  test('should render category-based section (desserts)', async ({ page }) => {
    const categorySection = page.locator('[data-testid="category-data"]');
    await expect(categorySection).toBeVisible();

    // Desserts section should have items from the menu config
    const menuItems = categorySection.locator('.menu-category-section__item');
    const count = await menuItems.count();
    expect(count).toBeGreaterThan(0);
  });

  test('should render non-decorated heading section', async ({ page }) => {
    const simpleSection = page.locator('[data-testid="non-decorated"]');
    await expect(simpleSection).toBeVisible();

    // Should NOT have the decorated class on header
    const header = simpleSection.locator('.menu-category-section__header--decorated');
    await expect(header).toHaveCount(0);

    // Should still have the heading
    const heading = simpleSection.locator('.menu-category-section__heading');
    await expect(heading).toContainText('Main Courses');
  });

  test('should render four column section', async ({ page }) => {
    const fourColSection = page.locator('[data-testid="four-columns"]');
    await expect(fourColSection).toBeVisible();

    // Check column modifier
    const section = fourColSection.locator('.menu-category-section--columns-4');
    await expect(section).toBeVisible();
  });

  test('should display decorative heading lines when enabled', async ({ page }) => {
    const compactSection = page.locator('[data-testid="compact-layout"]');

    // Check for decorative lines
    const lines = compactSection.locator('.menu-category-section__heading-line');
    await expect(lines).toHaveCount(2);
  });

  test('should display menu item details correctly', async ({ page }) => {
    const detailedSection = page.locator('[data-testid="detailed-layout"]');

    // Find the first menu item
    const firstItem = detailedSection.locator('.menu-item').first();
    await expect(firstItem).toBeVisible();

    // Check item has name
    const itemName = firstItem.locator('.menu-item__name');
    await expect(itemName).toBeVisible();

    // Check item has price
    const itemPrice = firstItem.locator('.menu-item__price');
    await expect(itemPrice).toBeVisible();

    // Check item has description
    const itemDescription = firstItem.locator('.menu-item__description');
    await expect(itemDescription).toBeVisible();
  });

  test('should display dietary tags when enabled', async ({ page }) => {
    const detailedSection = page.locator('[data-testid="detailed-layout"]');

    // Find items with dietary tags (Bruschetta has 'vegetarian')
    const dietaryTags = detailedSection.locator('.menu-item__dietary-tag');
    const count = await dietaryTags.count();
    expect(count).toBeGreaterThan(0);
  });

  test('should display badges for featured/new/seasonal items', async ({ page }) => {
    const detailedSection = page.locator('[data-testid="detailed-layout"]');

    // Check for badges
    const badges = detailedSection.locator('.menu-item__badge');
    const count = await badges.count();
    expect(count).toBeGreaterThan(0);
  });

  test('should be accessible with proper ARIA attributes', async ({ page }) => {
    const section = page.locator('#compact-section');

    // Check section has aria-labelledby
    await expect(section).toHaveAttribute('aria-labelledby', 'compact-section-heading');

    // Check heading has correct id
    const heading = page.locator('#compact-section-heading');
    await expect(heading).toBeVisible();

    // Check grid has role="list"
    const grid = section.locator('.menu-category-section__grid');
    await expect(grid).toHaveAttribute('role', 'list');

    // Check items have role="listitem"
    const items = grid.locator('[role="listitem"]');
    const count = await items.count();
    expect(count).toBeGreaterThan(0);
  });
});
