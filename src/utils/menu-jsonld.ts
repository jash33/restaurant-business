/**
 * Menu JSON-LD Generator
 * Generates comprehensive schema.org Menu and MenuItem structured data
 * for enhanced Google search results and rich snippets.
 *
 * Based on Google's recommendations for Menu rich results:
 * https://schema.org/Menu
 * https://schema.org/MenuItem
 * https://schema.org/MenuSection
 */

import type {
  MenuSchema,
  MenuSectionSchema,
  MenuItemSchema,
  NutritionInformationSchema,
  MenuItemOfferSchema,
} from '../types/seo';
import type {
  MenuItem,
  MenuSection,
  Menu,
  NutritionalInfo,
  DietaryTag,
} from '../types/menu';
import { toAbsoluteUrl, escapeHtml } from '../config/seo.config';

/**
 * Map internal dietary tags to schema.org RestrictedDiet values
 * https://schema.org/RestrictedDiet
 */
const DIETARY_TAG_TO_SCHEMA: Record<DietaryTag, string | null> = {
  'vegetarian': 'https://schema.org/VegetarianDiet',
  'vegan': 'https://schema.org/VeganDiet',
  'gluten-free': 'https://schema.org/GlutenFreeDiet',
  'dairy-free': 'https://schema.org/DairyFreeDiet',
  'nut-free': null, // No direct schema.org equivalent
  'egg-free': null, // No direct schema.org equivalent
  'soy-free': null, // No direct schema.org equivalent
  'halal': 'https://schema.org/HalalDiet',
  'kosher': 'https://schema.org/KosherDiet',
  'organic': null, // Not a restricted diet
  'locally-sourced': null, // Not a restricted diet
  'spicy': null, // Not a restricted diet
  'mild': null, // Not a restricted diet
};

/**
 * Clean object by removing undefined/null values
 */
function cleanObject(obj: Record<string, unknown>): Record<string, unknown> {
  return Object.fromEntries(
    Object.entries(obj).filter(([, value]) => value !== undefined && value !== null)
  );
}

/**
 * Convert internal NutritionalInfo to schema.org NutritionInformation
 */
function convertNutritionInfo(
  nutrition: NutritionalInfo
): NutritionInformationSchema {
  return cleanObject({
    calories: nutrition.calories ? `${nutrition.calories} calories` : undefined,
    proteinContent: nutrition.protein ? `${nutrition.protein} g` : undefined,
    carbohydrateContent: nutrition.carbohydrates
      ? `${nutrition.carbohydrates} g`
      : undefined,
    fatContent: nutrition.fat ? `${nutrition.fat} g` : undefined,
    saturatedFatContent: nutrition.saturatedFat
      ? `${nutrition.saturatedFat} g`
      : undefined,
    fiberContent: nutrition.fiber ? `${nutrition.fiber} g` : undefined,
    sugarContent: nutrition.sugar ? `${nutrition.sugar} g` : undefined,
    sodiumContent: nutrition.sodium ? `${nutrition.sodium} mg` : undefined,
    servingSize: nutrition.servingSize,
  }) as NutritionInformationSchema;
}

/**
 * Convert dietary tags to schema.org suitableForDiet values
 */
function convertDietaryTags(tags?: DietaryTag[]): string[] | undefined {
  if (!tags || tags.length === 0) return undefined;

  const schemaDiets = tags
    .map((tag) => DIETARY_TAG_TO_SCHEMA[tag])
    .filter((diet): diet is string => diet !== null);

  return schemaDiets.length > 0 ? schemaDiets : undefined;
}

/**
 * Generate schema.org NutritionInformation object
 */
function generateNutritionSchema(
  nutrition: NutritionInformationSchema
): object {
  return cleanObject({
    '@type': 'NutritionInformation',
    calories: nutrition.calories,
    proteinContent: nutrition.proteinContent,
    carbohydrateContent: nutrition.carbohydrateContent,
    fatContent: nutrition.fatContent,
    saturatedFatContent: nutrition.saturatedFatContent,
    fiberContent: nutrition.fiberContent,
    sugarContent: nutrition.sugarContent,
    sodiumContent: nutrition.sodiumContent,
    servingSize: nutrition.servingSize,
  });
}

/**
 * Generate schema.org Offer object for menu item pricing
 */
function generateOfferSchema(
  offer: MenuItemOfferSchema,
  siteUrl: string
): object {
  return cleanObject({
    '@type': 'Offer',
    price: offer.price,
    priceCurrency: offer.priceCurrency,
    availability: offer.availability
      ? `https://schema.org/${offer.availability}`
      : 'https://schema.org/InStock',
  });
}

/**
 * Generate schema.org MenuItem object
 */
function generateMenuItemSchema(
  item: MenuItemSchema,
  siteUrl: string
): object {
  // Process image URLs
  const images = item.image
    ? Array.isArray(item.image)
      ? item.image.map((img) => toAbsoluteUrl(img, siteUrl))
      : toAbsoluteUrl(item.image, siteUrl)
    : undefined;

  // Process suitableForDiet
  const suitableForDiet = item.suitableForDiet
    ? Array.isArray(item.suitableForDiet)
      ? item.suitableForDiet
      : [item.suitableForDiet]
    : undefined;

  return cleanObject({
    '@type': 'MenuItem',
    '@id': item.id ? `#menu-item-${item.id}` : undefined,
    name: escapeHtml(item.name),
    description: item.description ? escapeHtml(item.description) : undefined,
    image: images,
    offers: item.offers ? generateOfferSchema(item.offers, siteUrl) : undefined,
    suitableForDiet: suitableForDiet,
    nutrition: item.nutrition
      ? generateNutritionSchema(item.nutrition)
      : undefined,
    url: item.url ? toAbsoluteUrl(item.url, siteUrl) : undefined,
  });
}

/**
 * Generate schema.org MenuSection object
 */
function generateMenuSectionSchema(
  section: MenuSectionSchema,
  siteUrl: string
): object {
  const menuItems = section.hasMenuItem?.map((item) =>
    generateMenuItemSchema(item, siteUrl)
  );

  return cleanObject({
    '@type': 'MenuSection',
    name: escapeHtml(section.name),
    description: section.description
      ? escapeHtml(section.description)
      : undefined,
    image: section.image ? toAbsoluteUrl(section.image, siteUrl) : undefined,
    url: section.url ? toAbsoluteUrl(section.url, siteUrl) : undefined,
    hasMenuItem: menuItems?.length ? menuItems : undefined,
  });
}

/**
 * Generate comprehensive Menu JSON-LD schema
 *
 * @param schema - MenuSchema configuration
 * @param siteUrl - Base URL of the site
 * @returns Complete JSON-LD object for Menu
 */
export function generateMenuSchema(
  schema: MenuSchema,
  siteUrl: string
): object {
  // Process image URLs
  const images = schema.image
    ? Array.isArray(schema.image)
      ? schema.image.map((img) => toAbsoluteUrl(img, siteUrl))
      : toAbsoluteUrl(schema.image, siteUrl)
    : undefined;

  // Process menu sections
  const menuSections = schema.hasMenuSection?.map((section) =>
    generateMenuSectionSchema(section, siteUrl)
  );

  // Process direct menu items (if not using sections)
  const menuItems = schema.hasMenuItem?.map((item) =>
    generateMenuItemSchema(item, siteUrl)
  );

  const jsonLd: Record<string, unknown> = {
    '@context': 'https://schema.org',
    '@type': 'Menu',
    name: escapeHtml(schema.name),
    description: schema.description
      ? escapeHtml(schema.description)
      : undefined,
    url: schema.url ? toAbsoluteUrl(schema.url, siteUrl) : undefined,
    image: images,
    hasMenuSection: menuSections?.length ? menuSections : undefined,
    hasMenuItem: menuItems?.length ? menuItems : undefined,
    mainEntityOfPage: schema.mainEntityOfPage
      ? toAbsoluteUrl(schema.mainEntityOfPage, siteUrl)
      : undefined,
  };

  return cleanObject(jsonLd);
}

/**
 * Convert internal MenuItem to schema.org MenuItemSchema
 */
export function convertMenuItemToSchema(
  item: MenuItem,
  baseUrl?: string
): MenuItemSchema {
  // Convert price from cents to dollars
  const priceInDollars = item.price.amount / 100;

  return {
    id: item.id,
    name: item.name,
    description: item.description,
    image: item.image?.src,
    offers: {
      price: priceInDollars,
      priceCurrency: item.price.currency,
      availability: item.available !== false ? 'InStock' : 'OutOfStock',
    },
    suitableForDiet: convertDietaryTags(item.dietaryTags),
    nutrition: item.nutritionalInfo
      ? convertNutritionInfo(item.nutritionalInfo)
      : undefined,
    url: baseUrl ? `${baseUrl}#menu-item-${item.id}` : undefined,
  };
}

/**
 * Convert internal MenuSection to schema.org MenuSectionSchema
 */
export function convertMenuSectionToSchema(
  section: MenuSection,
  baseUrl?: string
): MenuSectionSchema {
  return {
    name: section.title,
    description: section.description,
    image: section.image?.src,
    hasMenuItem: section.items.map((item) =>
      convertMenuItemToSchema(item, baseUrl)
    ),
    url: baseUrl ? `${baseUrl}#menu-${section.category}` : undefined,
  };
}

/**
 * Convert internal Menu to schema.org MenuSchema
 */
export function convertMenuToSchema(
  menu: Menu,
  baseUrl?: string
): MenuSchema {
  return {
    type: 'Menu',
    name: menu.name,
    description: menu.description,
    url: baseUrl,
    hasMenuSection: menu.sections.map((section) =>
      convertMenuSectionToSchema(section, baseUrl)
    ),
  };
}

/**
 * Build a complete MenuSchema from the internal menu data
 * This is the main function to use when creating menu structured data
 *
 * @param menu - Internal Menu object
 * @param siteUrl - Base URL of the site
 * @returns MenuSchema ready for JSON-LD generation
 */
export function buildMenuSchemaFromData(
  menu: Menu,
  siteUrl: string
): MenuSchema {
  const menuUrl = `${siteUrl}/menu`;

  return {
    type: 'Menu',
    name: menu.name,
    description: menu.description,
    url: menuUrl,
    mainEntityOfPage: menuUrl,
    hasMenuSection: menu.sections
      .filter((section) => section.visible !== false)
      .map((section) => ({
        name: section.title,
        description: section.description,
        url: `${menuUrl}#menu-${section.category}`,
        hasMenuItem: section.items
          .filter((item) => item.available !== false)
          .map((item) => convertMenuItemToSchema(item, menuUrl)),
      })),
  };
}
