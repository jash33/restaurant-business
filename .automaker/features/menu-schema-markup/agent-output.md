
🔧 Tool: TodoWrite
Input: {
  "todos": [
    {
      "content": "Explore codebase to understand existing structure",
      "status": "in_progress",
      "activeForm": "Exploring codebase structure"
    },
    {
      "content": "Identify menu page and schema patterns",
      "status": "pending",
      "activeForm": "Identifying menu page and schema patterns"
    },
    {
      "content": "Implement Menu and MenuItem schema markup",
      "status": "pending",
      "activeForm": "Implementing Menu and MenuItem schema markup"
    },
    {
      "content": "Verify implementation follows existing patterns",
      "status": "pending",
      "activeForm": "Verifying implementation follows existing patterns"
    }
  ]
}

🔧 Tool: Glob
Input: {
  "pattern": "**/*menu*"
}

🔧 Tool: Glob
Input: {
  "pattern": "**/*schema*"
}

🔧 Tool: Glob
Input: {
  "pattern": "**/pages/**/*.{js,jsx,ts,tsx}"
}

🔧 Tool: Read
Input: {
  "file_path": "C:\\Users\\James\\Repos\\restaurant-business\\src\\pages\\menu.astro"
}

🔧 Tool: Read
Input: {
  "file_path": "C:\\Users\\James\\Repos\\restaurant-business\\src\\types\\menu.ts"
}

🔧 Tool: Read
Input: {
  "file_path": "C:\\Users\\James\\Repos\\restaurant-business\\src\\config\\menu.config.ts"
}

🔧 Tool: Read
Input: {
  "file_path": "C:\\Users\\James\\Repos\\restaurant-business\\src\\types\\restaurant-schema.ts"
}

🔧 Tool: Read
Input: {
  "file_path": "C:\\Users\\James\\Repos\\restaurant-business\\src\\schemas\\menu.schema.json"
}
Now let me explore the existing patterns for schema markup in this codebase to understand how they implement JSON-LD schemas:

🔧 Tool: TodoWrite
Input: {
  "todos": [
    {
      "content": "Explore codebase to understand existing structure",
      "status": "completed",
      "activeForm": "Exploring codebase structure"
    },
    {
      "content": "Identify menu page and schema patterns",
      "status": "in_progress",
      "activeForm": "Identifying menu page and schema patterns"
    },
    {
      "content": "Implement Menu and MenuItem schema markup",
      "status": "pending",
      "activeForm": "Implementing Menu and MenuItem schema markup"
    },
    {
      "content": "Verify implementation follows existing patterns",
      "status": "pending",
      "activeForm": "Verifying implementation follows existing patterns"
    }
  ]
}

🔧 Tool: Glob
Input: {
  "pattern": "**/components/**/*.{astro,ts,tsx}"
}

🔧 Tool: Grep
Input: {
  "pattern": "JSON-LD|script.*type.*application/ld\\+json|@context.*schema\\.org"
}

🔧 Tool: Read
Input: {
  "file_path": "C:\\Users\\James\\Repos\\restaurant-business\\src\\components\\SEO.astro"
}

🔧 Tool: Read
Input: {
  "file_path": "C:\\Users\\James\\Repos\\restaurant-business\\src\\utils\\restaurant-jsonld.ts"
}

🔧 Tool: Read
Input: {
  "file_path": "C:\\Users\\James\\Repos\\restaurant-business\\src\\types\\seo.ts"
}
Now let me look at the Layout.astro to understand how SEO is integrated:

🔧 Tool: Glob
Input: {
  "pattern": "**/layouts/*.astro"
}

🔧 Tool: Read
Input: {
  "file_path": "C:\\Users\\James\\Repos\\restaurant-business\\src\\layouts\\Layout.astro"
}
Now I have a good understanding of the codebase structure. Let me update my todo list and start implementing the Menu schema markup:

🔧 Tool: TodoWrite
Input: {
  "todos": [
    {
      "content": "Explore codebase to understand existing structure",
      "status": "completed",
      "activeForm": "Exploring codebase structure"
    },
    {
      "content": "Identify menu page and schema patterns",
      "status": "completed",
      "activeForm": "Identifying menu page and schema patterns"
    },
    {
      "content": "Create Menu/MenuItem schema types in types/seo.ts",
      "status": "in_progress",
      "activeForm": "Creating Menu/MenuItem schema types"
    },
    {
      "content": "Create menu-jsonld.ts utility for generating Menu schema",
      "status": "pending",
      "activeForm": "Creating menu-jsonld.ts utility"
    },
    {
      "content": "Update SEO.astro to handle Menu schema type",
      "status": "pending",
      "activeForm": "Updating SEO.astro component"
    },
    {
      "content": "Add Menu schema to menu.astro page",
      "status": "pending",
      "activeForm": "Adding Menu schema to menu.astro page"
    },
    {
      "content": "Verify implementation follows existing patterns",
      "status": "pending",
      "activeForm": "Verifying implementation follows existing patterns"
    }
  ]
}
Let me first read the restaurant.config.ts to understand how the restaurant data is configured:

🔧 Tool: Read
Input: {
  "file_path": "C:\\Users\\James\\Repos\\restaurant-business\\src\\config\\restaurant.config.ts"
}
Now I have a complete understanding of the codebase. Let me implement the Menu and MenuItem schema markup following the existing patterns. I'll create:

1. Add Menu schema types to the seo.ts types file
2. Create a menu-jsonld.ts utility for generating Menu/MenuItem structured data
3. Update SEO.astro to handle the Menu schema type
4. Update the menu.astro page to include the schema markup

Let's start:

🔧 Tool: Edit
Input: {
  "file_path": "C:\\Users\\James\\Repos\\restaurant-business\\src\\types\\seo.ts",
  "old_string": "/**\n * Union type for all supported JSON-LD schema types\n */\nexport type JsonLdSchema =\n  | ArticleSchema\n  | OrganizationSchema\n  | LocalBusinessSchema\n  | ProductSchema\n  | BreadcrumbSchema\n  | WebPageSchema;",
  "new_string": "// ============================================================================\n// Menu Schema Types (for Rich Snippets)\n// ============================================================================\n\n/**\n * Nutrition information for a menu item\n * Based on schema.org NutritionInformation\n */\nexport interface NutritionInformationSchema {\n  /** Calories in the item */\n  calories?: string;\n  /** Protein content (e.g., \"18 g\") */\n  proteinContent?: string;\n  /** Carbohydrate content (e.g., \"32 g\") */\n  carbohydrateContent?: string;\n  /** Fat content (e.g., \"24 g\") */\n  fatContent?: string;\n  /** Saturated fat content */\n  saturatedFatContent?: string;\n  /** Fiber content */\n  fiberContent?: string;\n  /** Sugar content */\n  sugarContent?: string;\n  /** Sodium content (e.g., \"680 mg\") */\n  sodiumContent?: string;\n  /** Serving size description */\n  servingSize?: string;\n}\n\n/**\n * Offer schema for menu item pricing\n * Based on schema.org Offer\n */\nexport interface MenuItemOfferSchema {\n  /** Price of the item */\n  price: number | string;\n  /** Currency code (e.g., \"USD\") */\n  priceCurrency: string;\n  /** Availability status */\n  availability?: 'InStock' | 'OutOfStock' | 'PreOrder';\n}\n\n/**\n * Menu item schema for individual dishes\n * Based on schema.org MenuItem\n */\nexport interface MenuItemSchema {\n  /** Unique identifier for the menu item */\n  id?: string;\n  /** Name of the menu item */\n  name: string;\n  /** Description of the menu item */\n  description?: string;\n  /** Image URL(s) for the menu item */\n  image?: string | string[];\n  /** Pricing information */\n  offers?: MenuItemOfferSchema;\n  /** Dietary restrictions (e.g., \"Vegetarian\", \"Vegan\", \"Gluten-Free\") */\n  suitableForDiet?: string | string[];\n  /** Nutrition information */\n  nutrition?: NutritionInformationSchema;\n  /** URL to the menu item's page */\n  url?: string;\n  /** The menu section this item belongs to */\n  menuAddOn?: string[];\n}\n\n/**\n * Menu section schema for grouping menu items\n * Based on schema.org MenuSection\n */\nexport interface MenuSectionSchema {\n  /** Name of the section (e.g., \"Appetizers\", \"Main Courses\") */\n  name: string;\n  /** Description of the section */\n  description?: string;\n  /** Menu items in this section */\n  hasMenuItem?: MenuItemSchema[];\n  /** Image for the section */\n  image?: string;\n  /** URL for the section */\n  url?: string;\n}\n\n/**\n * Complete menu schema\n * Based on schema.org Menu\n */\nexport interface MenuSchema {\n  type: 'Menu';\n  /** Name of the menu (e.g., \"Dinner Menu\", \"Lunch Menu\") */\n  name: string;\n  /** Description of the menu */\n  description?: string;\n  /** URL of the menu page */\n  url?: string;\n  /** Main image for the menu */\n  image?: string | string[];\n  /** Menu sections (categories) */\n  hasMenuSection?: MenuSectionSchema[];\n  /** Direct menu items (if not using sections) */\n  hasMenuItem?: MenuItemSchema[];\n  /** Restaurant offering this menu */\n  mainEntityOfPage?: string;\n  /** When the menu is available */\n  availabilityStarts?: string;\n  /** When the menu availability ends */\n  availabilityEnds?: string;\n}\n\n// ============================================================================\n// End of Menu Schema Types\n// ============================================================================\n\n/**\n * Union type for all supported JSON-LD schema types\n */\nexport type JsonLdSchema =\n  | ArticleSchema\n  | OrganizationSchema\n  | LocalBusinessSchema\n  | ProductSchema\n  | BreadcrumbSchema\n  | WebPageSchema\n  | MenuSchema;"
}

🔧 Tool: TodoWrite
Input: {
  "todos": [
    {
      "content": "Explore codebase to understand existing structure",
      "status": "completed",
      "activeForm": "Exploring codebase structure"
    },
    {
      "content": "Identify menu page and schema patterns",
      "status": "completed",
      "activeForm": "Identifying menu page and schema patterns"
    },
    {
      "content": "Create Menu/MenuItem schema types in types/seo.ts",
      "status": "completed",
      "activeForm": "Creating Menu/MenuItem schema types"
    },
    {
      "content": "Create menu-jsonld.ts utility for generating Menu schema",
      "status": "in_progress",
      "activeForm": "Creating menu-jsonld.ts utility"
    },
    {
      "content": "Update SEO.astro to handle Menu schema type",
      "status": "pending",
      "activeForm": "Updating SEO.astro component"
    },
    {
      "content": "Add Menu schema to menu.astro page",
      "status": "pending",
      "activeForm": "Adding Menu schema to menu.astro page"
    },
    {
      "content": "Verify implementation follows existing patterns",
      "status": "pending",
      "activeForm": "Verifying implementation follows existing patterns"
    }
  ]
}
Now let me create the menu-jsonld.ts utility file:

🔧 Tool: Write
Input: {
  "file_path": "C:\\Users\\James\\Repos\\restaurant-business\\src\\utils\\menu-jsonld.ts",
  "content": "/**\n * Menu JSON-LD Generator\n * Generates comprehensive schema.org Menu and MenuItem structured data\n * for enhanced Google search results and rich snippets.\n *\n * Based on Google's recommendations for Menu rich results:\n * https://schema.org/Menu\n * https://schema.org/MenuItem\n * https://schema.org/MenuSection\n */\n\nimport type {\n  MenuSchema,\n  MenuSectionSchema,\n  MenuItemSchema,\n  NutritionInformationSchema,\n  MenuItemOfferSchema,\n} from '../types/seo';\nimport type {\n  MenuItem,\n  MenuSection,\n  Menu,\n  NutritionalInfo,\n  DietaryTag,\n} from '../types/menu';\nimport { toAbsoluteUrl, escapeHtml } from '../config/seo.config';\n\n/**\n * Map internal dietary tags to schema.org RestrictedDiet values\n * https://schema.org/RestrictedDiet\n */\nconst DIETARY_TAG_TO_SCHEMA: Record<DietaryTag, string | null> = {\n  'vegetarian': 'https://schema.org/VegetarianDiet',\n  'vegan': 'https://schema.org/VeganDiet',\n  'gluten-free': 'https://schema.org/GlutenFreeDiet',\n  'dairy-free': 'https://schema.org/DairyFreeDiet',\n  'nut-free': null, // No direct schema.org equivalent\n  'egg-free': null, // No direct schema.org equivalent\n  'soy-free': null, // No direct schema.org equivalent\n  'halal': 'https://schema.org/HalalDiet',\n  'kosher': 'https://schema.org/KosherDiet',\n  'organic': null, // Not a restricted diet\n  'locally-sourced': null, // Not a restricted diet\n  'spicy': null, // Not a restricted diet\n  'mild': null, // Not a restricted diet\n};\n\n/**\n * Clean object by removing undefined/null values\n */\nfunction cleanObject(obj: Record<string, unknown>): Record<string, unknown> {\n  return Object.fromEntries(\n    Object.entries(obj).filter(([, value]) => value !== undefined && value !== null)\n  );\n}\n\n/**\n * Convert internal NutritionalInfo to schema.org NutritionInformation\n */\nfunction convertNutritionInfo(\n  nutrition: NutritionalInfo\n): NutritionInformationSchema {\n  return cleanObject({\n    calories: nutrition.calories ? `${nutrition.calories} calories` : undefined,\n    proteinContent: nutrition.protein ? `${nutrition.protein} g` : undefined,\n    carbohydrateContent: nutrition.carbohydrates\n      ? `${nutrition.carbohydrates} g`\n      : undefined,\n    fatContent: nutrition.fat ? `${nutrition.fat} g` : undefined,\n    saturatedFatContent: nutrition.saturatedFat\n      ? `${nutrition.saturatedFat} g`\n      : undefined,\n    fiberContent: nutrition.fiber ? `${nutrition.fiber} g` : undefined,\n    sugarContent: nutrition.sugar ? `${nutrition.sugar} g` : undefined,\n    sodiumContent: nutrition.sodium ? `${nutrition.sodium} mg` : undefined,\n    servingSize: nutrition.servingSize,\n  }) as NutritionInformationSchema;\n}\n\n/**\n * Convert dietary tags to schema.org suitableForDiet values\n */\nfunction convertDietaryTags(tags?: DietaryTag[]): string[] | undefined {\n  if (!tags || tags.length === 0) return undefined;\n\n  const schemaDiets = tags\n    .map((tag) => DIETARY_TAG_TO_SCHEMA[tag])\n    .filter((diet): diet is string => diet !== null);\n\n  return schemaDiets.length > 0 ? schemaDiets : undefined;\n}\n\n/**\n * Generate schema.org NutritionInformation object\n */\nfunction generateNutritionSchema(\n  nutrition: NutritionInformationSchema\n): object {\n  return cleanObject({\n    '@type': 'NutritionInformation',\n    calories: nutrition.calories,\n    proteinContent: nutrition.proteinContent,\n    carbohydrateContent: nutrition.carbohydrateContent,\n    fatContent: nutrition.fatContent,\n    saturatedFatContent: nutrition.saturatedFatContent,\n    fiberContent: nutrition.fiberContent,\n    sugarContent: nutrition.sugarContent,\n    sodiumContent: nutrition.sodiumContent,\n    servingSize: nutrition.servingSize,\n  });\n}\n\n/**\n * Generate schema.org Offer object for menu item pricing\n */\nfunction generateOfferSchema(\n  offer: MenuItemOfferSchema,\n  siteUrl: string\n): object {\n  return cleanObject({\n    '@type': 'Offer',\n    price: offer.price,\n    priceCurrency: offer.priceCurrency,\n    availability: offer.availability\n      ? `https://schema.org/${offer.availability}`\n      : 'https://schema.org/InStock',\n  });\n}\n\n/**\n * Generate schema.org MenuItem object\n */\nfunction generateMenuItemSchema(\n  item: MenuItemSchema,\n  siteUrl: string\n): object {\n  // Process image URLs\n  const images = item.image\n    ? Array.isArray(item.image)\n      ? item.image.map((img) => toAbsoluteUrl(img, siteUrl))\n      : toAbsoluteUrl(item.image, siteUrl)\n    : undefined;\n\n  // Process suitableForDiet\n  const suitableForDiet = item.suitableForDiet\n    ? Array.isArray(item.suitableForDiet)\n      ? item.suitableForDiet\n      : [item.suitableForDiet]\n    : undefined;\n\n  return cleanObject({\n    '@type': 'MenuItem',\n    '@id': item.id ? `#menu-item-${item.id}` : undefined,\n    name: escapeHtml(item.name),\n    description: item.description ? escapeHtml(item.description) : undefined,\n    image: images,\n    offers: item.offers ? generateOfferSchema(item.offers, siteUrl) : undefined,\n    suitableForDiet: suitableForDiet,\n    nutrition: item.nutrition\n      ? generateNutritionSchema(item.nutrition)\n      : undefined,\n    url: item.url ? toAbsoluteUrl(item.url, siteUrl) : undefined,\n  });\n}\n\n/**\n * Generate schema.org MenuSection object\n */\nfunction generateMenuSectionSchema(\n  section: MenuSectionSchema,\n  siteUrl: string\n): object {\n  const menuItems = section.hasMenuItem?.map((item) =>\n    generateMenuItemSchema(item, siteUrl)\n  );\n\n  return cleanObject({\n    '@type': 'MenuSection',\n    name: escapeHtml(section.name),\n    description: section.description\n      ? escapeHtml(section.description)\n      : undefined,\n    image: section.image ? toAbsoluteUrl(section.image, siteUrl) : undefined,\n    url: section.url ? toAbsoluteUrl(section.url, siteUrl) : undefined,\n    hasMenuItem: menuItems?.length ? menuItems : undefined,\n  });\n}\n\n/**\n * Generate comprehensive Menu JSON-LD schema\n *\n * @param schema - MenuSchema configuration\n * @param siteUrl - Base URL of the site\n * @returns Complete JSON-LD object for Menu\n */\nexport function generateMenuSchema(\n  schema: MenuSchema,\n  siteUrl: string\n): object {\n  // Process image URLs\n  const images = schema.image\n    ? Array.isArray(schema.image)\n      ? schema.image.map((img) => toAbsoluteUrl(img, siteUrl))\n      : toAbsoluteUrl(schema.image, siteUrl)\n    : undefined;\n\n  // Process menu sections\n  const menuSections = schema.hasMenuSection?.map((section) =>\n    generateMenuSectionSchema(section, siteUrl)\n  );\n\n  // Process direct menu items (if not using sections)\n  const menuItems = schema.hasMenuItem?.map((item) =>\n    generateMenuItemSchema(item, siteUrl)\n  );\n\n  const jsonLd: Record<string, unknown> = {\n    '@context': 'https://schema.org',\n    '@type': 'Menu',\n    name: escapeHtml(schema.name),\n    description: schema.description\n      ? escapeHtml(schema.description)\n      : undefined,\n    url: schema.url ? toAbsoluteUrl(schema.url, siteUrl) : undefined,\n    image: images,\n    hasMenuSection: menuSections?.length ? menuSections : undefined,\n    hasMenuItem: menuItems?.length ? menuItems : undefined,\n    mainEntityOfPage: schema.mainEntityOfPage\n      ? toAbsoluteUrl(schema.mainEntityOfPage, siteUrl)\n      : undefined,\n  };\n\n  return cleanObject(jsonLd);\n}\n\n/**\n * Convert internal MenuItem to schema.org MenuItemSchema\n */\nexport function convertMenuItemToSchema(\n  item: MenuItem,\n  baseUrl?: string\n): MenuItemSchema {\n  // Convert price from cents to dollars\n  const priceInDollars = item.price.amount / 100;\n\n  return {\n    id: item.id,\n    name: item.name,\n    description: item.description,\n    image: item.image?.src,\n    offers: {\n      price: priceInDollars,\n      priceCurrency: item.price.currency,\n      availability: item.available !== false ? 'InStock' : 'OutOfStock',\n    },\n    suitableForDiet: convertDietaryTags(item.dietaryTags),\n    nutrition: item.nutritionalInfo\n      ? convertNutritionInfo(item.nutritionalInfo)\n      : undefined,\n    url: baseUrl ? `${baseUrl}#menu-item-${item.id}` : undefined,\n  };\n}\n\n/**\n * Convert internal MenuSection to schema.org MenuSectionSchema\n */\nexport function convertMenuSectionToSchema(\n  section: MenuSection,\n  baseUrl?: string\n): MenuSectionSchema {\n  return {\n    name: section.title,\n    description: section.description,\n    image: section.image?.src,\n    hasMenuItem: section.items.map((item) =>\n      convertMenuItemToSchema(item, baseUrl)\n    ),\n    url: baseUrl ? `${baseUrl}#menu-${section.category}` : undefined,\n  };\n}\n\n/**\n * Convert internal Menu to schema.org MenuSchema\n */\nexport function convertMenuToSchema(\n  menu: Menu,\n  baseUrl?: string\n): MenuSchema {\n  return {\n    type: 'Menu',\n    name: menu.name,\n    description: menu.description,\n    url: baseUrl,\n    hasMenuSection: menu.sections.map((section) =>\n      convertMenuSectionToSchema(section, baseUrl)\n    ),\n  };\n}\n\n/**\n * Build a complete MenuSchema from the internal menu data\n * This is the main function to use when creating menu structured data\n *\n * @param menu - Internal Menu object\n * @param siteUrl - Base URL of the site\n * @returns MenuSchema ready for JSON-LD generation\n */\nexport function buildMenuSchemaFromData(\n  menu: Menu,\n  siteUrl: string\n): MenuSchema {\n  const menuUrl = `${siteUrl}/menu`;\n\n  return {\n    type: 'Menu',\n    name: menu.name,\n    description: menu.description,\n    url: menuUrl,\n    mainEntityOfPage: menuUrl,\n    hasMenuSection: menu.sections\n      .filter((section) => section.visible !== false)\n      .map((section) => ({\n        name: section.title,\n        description: section.description,\n        url: `${menuUrl}#menu-${section.category}`,\n        hasMenuItem: section.items\n          .filter((item) => item.available !== false)\n          .map((item) => convertMenuItemToSchema(item, menuUrl)),\n      })),\n  };\n}\n"
}

🔧 Tool: TodoWrite
Input: {
  "todos": [
    {
      "content": "Explore codebase to understand existing structure",
      "status": "completed",
      "activeForm": "Exploring codebase structure"
    },
    {
      "content": "Identify menu page and schema patterns",
      "status": "completed",
      "activeForm": "Identifying menu page and schema patterns"
    },
    {
      "content": "Create Menu/MenuItem schema types in types/seo.ts",
      "status": "completed",
      "activeForm": "Creating Menu/MenuItem schema types"
    },
    {
      "content": "Create menu-jsonld.ts utility for generating Menu schema",
      "status": "completed",
      "activeForm": "Creating menu-jsonld.ts utility"
    },
    {
      "content": "Update SEO.astro to handle Menu schema type",
      "status": "in_progress",
      "activeForm": "Updating SEO.astro component"
    },
    {
      "content": "Add Menu schema to menu.astro page",
      "status": "pending",
      "activeForm": "Adding Menu schema to menu.astro page"
    },
    {
      "content": "Verify implementation follows existing patterns",
      "status": "pending",
      "activeForm": "Verifying implementation follows existing patterns"
    }
  ]
}
Now I need to update SEO.astro to handle the Menu schema type. Let me add the import and handler:

🔧 Tool: Edit
Input: {
  "file_path": "C:\\Users\\James\\Repos\\restaurant-business\\src\\components\\SEO.astro",
  "old_string": "import type {\n  SEOProps,\n  JsonLdSchema,\n  ArticleSchema,\n  OrganizationSchema,\n  ProductSchema,\n  BreadcrumbSchema,\n  WebPageSchema,\n  CustomMetaTag,\n} from '../types/seo';",
  "new_string": "import type {\n  SEOProps,\n  JsonLdSchema,\n  ArticleSchema,\n  OrganizationSchema,\n  ProductSchema,\n  BreadcrumbSchema,\n  WebPageSchema,\n  MenuSchema,\n  CustomMetaTag,\n} from '../types/seo';"
}

🔧 Tool: Edit
Input: {
  "file_path": "C:\\Users\\James\\Repos\\restaurant-business\\src\\components\\SEO.astro",
  "old_string": "import { generateLocalBusinessSchema } from '../utils/local-business-jsonld';\nimport { generateRestaurantSchema } from '../utils/restaurant-jsonld';\nimport type { LocalBusinessSchema, LocalBusinessType } from '../types/seo';\nimport type { RestaurantSchema } from '../types/restaurant-schema';\nimport { isRestaurantSchema } from '../types/restaurant-schema';",
  "new_string": "import { generateLocalBusinessSchema } from '../utils/local-business-jsonld';\nimport { generateRestaurantSchema } from '../utils/restaurant-jsonld';\nimport { generateMenuSchema } from '../utils/menu-jsonld';\nimport type { LocalBusinessSchema, LocalBusinessType } from '../types/seo';\nimport type { RestaurantSchema } from '../types/restaurant-schema';\nimport { isRestaurantSchema } from '../types/restaurant-schema';"
}
Now let me add the Menu case to the generateJsonLd function:

🔧 Tool: Edit
Input: {
  "file_path": "C:\\Users\\James\\Repos\\restaurant-business\\src\\components\\SEO.astro",
  "old_string": "function generateJsonLd(schema: JsonLdSchema): object {\n  switch (schema.type) {\n    case 'Article':\n    case 'NewsArticle':\n    case 'BlogPosting':\n      return generateArticleSchema(schema as ArticleSchema);\n    case 'Organization':\n      return generateOrganizationSchema(schema as OrganizationSchema);\n    case 'Restaurant':\n    case 'FoodEstablishment':\n      // Use the comprehensive Restaurant generator for restaurant-related types\n      // This handles servesCuisine, hasMenu, acceptsReservations, etc.\n      return generateRestaurantSchema(schema as RestaurantSchema, siteUrl);\n    case 'ProfessionalService':\n    case 'LocalBusiness':\n    case 'Store':\n    case 'MedicalBusiness':\n    case 'FinancialService':\n    case 'LegalService':\n    case 'RealEstateAgent':\n    case 'AutoRepair':\n    case 'HealthAndBeautyBusiness':\n    case 'HomeAndConstructionBusiness':\n    case 'EntertainmentBusiness':\n    case 'LodgingBusiness':\n      // Use the comprehensive LocalBusiness generator for non-restaurant LocalBusiness subtypes\n      return generateLocalBusinessSchema(schema as LocalBusinessSchema, siteUrl);\n    case 'Product':\n      return generateProductSchema(schema as ProductSchema);\n    case 'BreadcrumbList':\n      return generateBreadcrumbSchema(schema as BreadcrumbSchema);\n    case 'WebPage':\n    case 'AboutPage':\n    case 'ContactPage':\n    case 'FAQPage':\n    case 'CollectionPage':\n      return generateWebPageSchema(schema as WebPageSchema);\n    default:\n      console.warn(`SEO Warning: Unknown JSON-LD schema type: ${(schema as JsonLdSchema).type}`);\n      return {};\n  }\n}",
  "new_string": "function generateJsonLd(schema: JsonLdSchema): object {\n  switch (schema.type) {\n    case 'Article':\n    case 'NewsArticle':\n    case 'BlogPosting':\n      return generateArticleSchema(schema as ArticleSchema);\n    case 'Organization':\n      return generateOrganizationSchema(schema as OrganizationSchema);\n    case 'Restaurant':\n    case 'FoodEstablishment':\n      // Use the comprehensive Restaurant generator for restaurant-related types\n      // This handles servesCuisine, hasMenu, acceptsReservations, etc.\n      return generateRestaurantSchema(schema as RestaurantSchema, siteUrl);\n    case 'Menu':\n      // Use the Menu generator for menu structured data\n      // This handles menu sections, items, prices, nutrition, and dietary info\n      return generateMenuSchema(schema as MenuSchema, siteUrl);\n    case 'ProfessionalService':\n    case 'LocalBusiness':\n    case 'Store':\n    case 'MedicalBusiness':\n    case 'FinancialService':\n    case 'LegalService':\n    case 'RealEstateAgent':\n    case 'AutoRepair':\n    case 'HealthAndBeautyBusiness':\n    case 'HomeAndConstructionBusiness':\n    case 'EntertainmentBusiness':\n    case 'LodgingBusiness':\n      // Use the comprehensive LocalBusiness generator for non-restaurant LocalBusiness subtypes\n      return generateLocalBusinessSchema(schema as LocalBusinessSchema, siteUrl);\n    case 'Product':\n      return generateProductSchema(schema as ProductSchema);\n    case 'BreadcrumbList':\n      return generateBreadcrumbSchema(schema as BreadcrumbSchema);\n    case 'WebPage':\n    case 'AboutPage':\n    case 'ContactPage':\n    case 'FAQPage':\n    case 'CollectionPage':\n      return generateWebPageSchema(schema as WebPageSchema);\n    default:\n      console.warn(`SEO Warning: Unknown JSON-LD schema type: ${(schema as JsonLdSchema).type}`);\n      return {};\n  }\n}"
}

🔧 Tool: TodoWrite
Input: {
  "todos": [
    {
      "content": "Explore codebase to understand existing structure",
      "status": "completed",
      "activeForm": "Exploring codebase structure"
    },
    {
      "content": "Identify menu page and schema patterns",
      "status": "completed",
      "activeForm": "Identifying menu page and schema patterns"
    },
    {
      "content": "Create Menu/MenuItem schema types in types/seo.ts",
      "status": "completed",
      "activeForm": "Creating Menu/MenuItem schema types"
    },
    {
      "content": "Create menu-jsonld.ts utility for generating Menu schema",
      "status": "completed",
      "activeForm": "Creating menu-jsonld.ts utility"
    },
    {
      "content": "Update SEO.astro to handle Menu schema type",
      "status": "completed",
      "activeForm": "Updating SEO.astro component"
    },
    {
      "content": "Add Menu schema to menu.astro page",
      "status": "in_progress",
      "activeForm": "Adding Menu schema to menu.astro page"
    },
    {
      "content": "Verify implementation follows existing patterns",
      "status": "pending",
      "activeForm": "Verifying implementation follows existing patterns"
    }
  ]
}
Now let me update the menu.astro page to include the Menu schema markup:

🔧 Tool: Edit
Input: {
  "file_path": "C:\\Users\\James\\Repos\\restaurant-business\\src\\pages\\menu.astro",
  "old_string": "---\n/**\n * Full Menu Page\n * Displays the complete restaurant menu with category sections, navigation jump links,\n * PDF download button, and print-optimized stylesheet.\n *\n * Features:\n * - Navigation jump links to each category section\n * - PDF download functionality (browser print-to-PDF)\n * - Print-optimized stylesheet for readability without images\n * - Proper heading hierarchy for screen readers\n * - Semantic HTML structure for accessibility\n * - Responsive design with mobile-first approach\n * - WCAG 2.1 AA compliant\n */\n\nimport Layout from '../layouts/Layout.astro';\nimport MenuCategorySection from '../components/MenuCategorySection.astro';\nimport MenuFilterPanel from '../components/MenuFilterPanel.astro';\nimport {\n  DINNER_MENU,\n  buildMenuSections,\n} from '../config/menu.config';\nimport type { MenuSection, MenuCategory } from '../types/menu';\n\n// Build complete menu sections for the dinner menu (most comprehensive)\nconst menuSections: MenuSection[] = DINNER_MENU.sections;\n\n// Define category order for navigation\nconst navCategories = menuSections.map(section => ({\n  id: `menu-${section.category}`,\n  label: section.title,\n  category: section.category,\n}));\n---",
  "new_string": "---\n/**\n * Full Menu Page\n * Displays the complete restaurant menu with category sections, navigation jump links,\n * PDF download button, and print-optimized stylesheet.\n *\n * Features:\n * - Navigation jump links to each category section\n * - PDF download functionality (browser print-to-PDF)\n * - Print-optimized stylesheet for readability without images\n * - Proper heading hierarchy for screen readers\n * - Semantic HTML structure for accessibility\n * - Responsive design with mobile-first approach\n * - WCAG 2.1 AA compliant\n * - Menu and MenuItem schema markup for rich snippets\n */\n\nimport Layout from '../layouts/Layout.astro';\nimport MenuCategorySection from '../components/MenuCategorySection.astro';\nimport MenuFilterPanel from '../components/MenuFilterPanel.astro';\nimport {\n  DINNER_MENU,\n  buildMenuSections,\n} from '../config/menu.config';\nimport type { MenuSection, MenuCategory } from '../types/menu';\nimport type { MenuSchema } from '../types/seo';\nimport { buildMenuSchemaFromData } from '../utils/menu-jsonld';\nimport { seoConfig } from '../config/seo.config';\n\n// Build complete menu sections for the dinner menu (most comprehensive)\nconst menuSections: MenuSection[] = DINNER_MENU.sections;\n\n// Define category order for navigation\nconst navCategories = menuSections.map(section => ({\n  id: `menu-${section.category}`,\n  label: section.title,\n  category: section.category,\n}));\n\n// Build Menu schema for structured data (rich snippets)\nconst menuSchema: MenuSchema = buildMenuSchemaFromData(DINNER_MENU, seoConfig.siteUrl);\n---"
}
Now I need to update the Layout component call to pass the jsonLd prop with the menu schema:

🔧 Tool: Edit
Input: {
  "file_path": "C:\\Users\\James\\Repos\\restaurant-business\\src\\pages\\menu.astro",
  "old_string": "<Layout\n  title=\"Our Menu | Houston Restaurant\"\n  description=\"Explore our full menu featuring appetizers, soups & salads, main courses, seafood, steaks, pasta, desserts, and beverages. Dietary options available.\"\n>",
  "new_string": "<Layout\n  title=\"Our Menu | Houston Restaurant\"\n  description=\"Explore our full menu featuring appetizers, soups & salads, main courses, seafood, steaks, pasta, desserts, and beverages. Dietary options available.\"\n  jsonLd={menuSchema}\n>"
}

🔧 Tool: TodoWrite
Input: {
  "todos": [
    {
      "content": "Explore codebase to understand existing structure",
      "status": "completed",
      "activeForm": "Exploring codebase structure"
    },
    {
      "content": "Identify menu page and schema patterns",
      "status": "completed",
      "activeForm": "Identifying menu page and schema patterns"
    },
    {
      "content": "Create Menu/MenuItem schema types in types/seo.ts",
      "status": "completed",
      "activeForm": "Creating Menu/MenuItem schema types"
    },
    {
      "content": "Create menu-jsonld.ts utility for generating Menu schema",
      "status": "completed",
      "activeForm": "Creating menu-jsonld.ts utility"
    },
    {
      "content": "Update SEO.astro to handle Menu schema type",
      "status": "completed",
      "activeForm": "Updating SEO.astro component"
    },
    {
      "content": "Add Menu schema to menu.astro page",
      "status": "completed",
      "activeForm": "Adding Menu schema to menu.astro page"
    },
    {
      "content": "Verify implementation follows existing patterns",
      "status": "in_progress",
      "activeForm": "Verifying implementation follows existing patterns"
    }
  ]
}
Now let me verify that the code compiles correctly by checking for any TypeScript errors. Let me also read back the key files to ensure they are complete:

🔧 Tool: Bash
Input: {
  "command": "npx tsc --noEmit 2>&1 | head -50",
  "description": "Check TypeScript compilation",
  "timeout": 60000
}
Good - the errors are not related to my changes. Let me verify our changes are correct by checking if they compile:

🔧 Tool: Bash
Input: {
  "command": "npx tsc --noEmit src/types/seo.ts src/utils/menu-jsonld.ts 2>&1 || true",
  "description": "Check TypeScript for new files",
  "timeout": 60000
}
Let me verify our menu-jsonld.ts file compiles properly by looking at the imports:

🔧 Tool: Read
Input: {
  "file_path": "C:\\Users\\James\\Repos\\restaurant-business\\src\\config\\seo.config.ts",
  "limit": 80
}

🔧 Tool: Read
Input: {
  "file_path": "C:\\Users\\James\\Repos\\restaurant-business\\src\\config\\seo.config.ts",
  "offset": 80
}
Good, the `toAbsoluteUrl` and `escapeHtml` functions are exported from `seo.config.ts`. Now let me verify the complete implementation by reading the modified files:

🔧 Tool: Read
Input: {
  "file_path": "C:\\Users\\James\\Repos\\restaurant-business\\src\\pages\\menu.astro",
  "limit": 50
}
Let me try to build the project to verify there are no errors:

🔧 Tool: Bash
Input: {
  "command": "cd \"C:\\Users\\James\\Repos\\restaurant-business\" && npm run build 2>&1 | head -60",
  "description": "Build project to check for errors",
  "timeout": 120000
}

🔧 Tool: Bash
Input: {
  "command": "cd \"C:\\Users\\James\\Repos\\restaurant-business\" && npm run build 2>&1 | tail -30",
  "description": "Check build completion",
  "timeout": 120000
}
The build succeeded. Let me verify the generated JSON-LD is correct by checking the built menu page:

🔧 Tool: Bash
Input: {
  "command": "cd \"C:\\Users\\James\\Repos\\restaurant-business\" && grep -o '<script type=\"application/ld+json\">[^<]*' dist/menu/index.html | head -1",
  "description": "Check JSON-LD in built menu page"
}
The JSON-LD is being generated correctly. The Menu schema includes:
- Menu type and name
- Menu sections (Appetizers, Soups & Salads, Main Courses, Seafood, Steaks & Grills, Pasta, Desserts, Beverages, Kids Menu)
- Each section contains MenuItems with:
  - Name and description
  - Price and currency
  - Availability status
  - Dietary information (suitableForDiet)
  - Nutrition information (where available)
  - URLs for each item

Let me update the todo list and mark everything complete:

🔧 Tool: TodoWrite
Input: {
  "todos": [
    {
      "content": "Explore codebase to understand existing structure",
      "status": "completed",
      "activeForm": "Exploring codebase structure"
    },
    {
      "content": "Identify menu page and schema patterns",
      "status": "completed",
      "activeForm": "Identifying menu page and schema patterns"
    },
    {
      "content": "Create Menu/MenuItem schema types in types/seo.ts",
      "status": "completed",
      "activeForm": "Creating Menu/MenuItem schema types"
    },
    {
      "content": "Create menu-jsonld.ts utility for generating Menu schema",
      "status": "completed",
      "activeForm": "Creating menu-jsonld.ts utility"
    },
    {
      "content": "Update SEO.astro to handle Menu schema type",
      "status": "completed",
      "activeForm": "Updating SEO.astro component"
    },
    {
      "content": "Add Menu schema to menu.astro page",
      "status": "completed",
      "activeForm": "Adding Menu schema to menu.astro page"
    },
    {
      "content": "Verify implementation follows existing patterns",
      "status": "completed",
      "activeForm": "Verifying implementation follows existing patterns"
    }
  ]
}
<summary>
## Summary: Add Menu and MenuItem Schema to Menu Page for Rich Snippets

### Changes Implemented
- Added comprehensive TypeScript types for Menu, MenuItem, MenuSection, NutritionInformation, and MenuItemOffer schemas following schema.org vocabulary
- Created a new `menu-jsonld.ts` utility module for generating Menu structured data with:
  - Functions to convert internal menu data to schema.org format
  - Support for nutrition information (calories, protein, carbs, fat, sodium, etc.)
  - Dietary property mapping (vegetarian, vegan, gluten-free, dairy-free, halal, kosher)
  - Price information with currency
  - Availability status for each item
- Updated `SEO.astro` component to handle the new 'Menu' schema type
- Integrated Menu schema markup into the menu page (`menu.astro`)

### Files Modified
- `src/types/seo.ts` - Added MenuSchema, MenuSectionSchema, MenuItemSchema, NutritionInformationSchema, and MenuItemOfferSchema types
- `src/utils/menu-jsonld.ts` - Created new utility for generating Menu JSON-LD
- `src/components/SEO.astro` - Added import and handler for Menu schema type
- `src/pages/menu.astro` - Added Menu schema integration with existing menu data

### Notes for Developer
- The schema follows Google's recommendations for Menu rich results (schema.org/Menu, schema.org/MenuItem)
- Dietary tags are automatically mapped to schema.org RestrictedDiet values (VegetarianDiet, VeganDiet, GlutenFreeDiet, DairyFreeDiet, HalalDiet, KosherDiet)
- Nutrition information is formatted according to schema.org NutritionInformation (e.g., "420 calories", "18 g" for protein)
- Prices are converted from cents to dollars for schema output
- The implementation follows the existing patterns in the codebase (similar to restaurant-jsonld.ts and local-business-jsonld.ts)
- The JSON-LD output can be validated using Google's Rich Results Test or Schema.org validator
</summary>