
🔧 Tool: Task
Input: {
  "description": "Explore codebase structure",
  "prompt": "Explore the codebase to understand the existing structure, focusing on:\n1. The overall project structure and organization\n2. Any existing TypeScript interfaces or types\n3. Any existing JSON schemas\n4. Patterns used for data structures\n5. The tech stack (look at package.json, tsconfig.json, etc.)\n\nProvide a comprehensive summary of what you find, including file paths and patterns that would be relevant for implementing a menu data structure feature.",
  "subagent_type": "Explore"
}

🔧 Tool: Read
Input: {
  "file_path": "C:\\Users\\James\\Repos\\restaurant-business\\package.json"
}

🔧 Tool: Read
Input: {
  "file_path": "C:\\Users\\James\\Repos\\restaurant-business\\tsconfig.json"
}

🔧 Tool: Bash
Input: {
  "command": "ls -la \"C:\\Users\\James\\Repos\\restaurant-business\" | head -30",
  "description": "List root directory contents"
}

🔧 Tool: Bash
Input: {
  "command": "find \"C:\\Users\\James\\Repos\\restaurant-business\" -type f -name \"*.ts\" -o -name \"*.tsx\" | head -20",
  "description": "Find TypeScript files in project"
}

🔧 Tool: Bash
Input: {
  "command": "find \"C:\\Users\\James\\Repos\\restaurant-business\\src\" -type f | grep -E \"\\.(ts|tsx|json|astro)$\"",
  "description": "Find all source TypeScript and JSON files"
}

🔧 Tool: Glob
Input: {
  "pattern": "src/**/*.ts",
  "path": "C:\\Users\\James\\Repos\\restaurant-business"
}

🔧 Tool: Glob
Input: {
  "pattern": "src/**/*.json",
  "path": "C:\\Users\\James\\Repos\\restaurant-business"
}

🔧 Tool: Read
Input: {
  "file_path": "C:\\Users\\James\\Repos\\restaurant-business\\src\\types\\index.ts"
}

🔧 Tool: Read
Input: {
  "file_path": "C:\\Users\\James\\Repos\\restaurant-business\\src\\types\\contact-form.ts"
}

🔧 Tool: Read
Input: {
  "file_path": "C:\\Users\\James\\Repos\\restaurant-business\\src\\types\\catering-form.ts"
}

🔧 Tool: Read
Input: {
  "file_path": "C:\\Users\\James\\Repos\\restaurant-business\\src\\types\\portfolio.ts"
}

🔧 Tool: Read
Input: {
  "file_path": "C:\\Users\\James\\Repos\\restaurant-business\\src\\types\\service.ts"
}

🔧 Tool: Read
Input: {
  "file_path": "C:\\Users\\James\\Repos\\restaurant-business\\src\\config\\featured-projects.config.ts"
}

🔧 Tool: Read
Input: {
  "file_path": "C:\\Users\\James\\Repos\\restaurant-business\\src\\config\\image.config.ts"
}

🔧 Tool: Read
Input: {
  "file_path": "C:\\Users\\James\\Repos\\restaurant-business\\astro.config.mjs"
}

🔧 Tool: Read
Input: {
  "file_path": "C:\\Users\\James\\Repos\\restaurant-business\\src\\utils\\local-business-jsonld.ts"
}

🔧 Tool: Read
Input: {
  "file_path": "C:\\Users\\James\\Repos\\restaurant-business\\src\\types\\seo.ts",
  "limit": 100
}

🔧 Tool: Read
Input: {
  "file_path": "C:\\Users\\James\\Repos\\restaurant-business\\src\\config\\seo.config.ts",
  "limit": 80
}

🔧 Tool: Bash
Input: {
  "command": "find \"C:\\Users\\James\\Repos\\restaurant-business\" -name \"*.astro\" -type f | head -10",
  "description": "Find Astro component files"
}

🔧 Tool: Bash
Input: {
  "command": "ls -la \"C:\\Users\\James\\Repos\\restaurant-business\\src\\components\" | head -30",
  "description": "List component directory"
}

🔧 Tool: Read
Input: {
  "file_path": "C:\\Users\\James\\Repos\\restaurant-business\\src\\components\\ServiceCard.astro"
}

🔧 Tool: Read
Input: {
  "file_path": "C:\\Users\\James\\Repos\\restaurant-business\\src\\components\\ProjectCard.astro"
}

🔧 Tool: Read
Input: {
  "file_path": "C:\\Users\\James\\Repos\\restaurant-business\\src\\types\\button.ts"
}

🔧 Tool: Read
Input: {
  "file_path": "C:\\Users\\James\\Repos\\restaurant-business\\src\\types\\faq.ts"
}
Now I have a comprehensive understanding of the codebase. Let me now implement the menu data structure feature. Based on my exploration, I'll create:

1. TypeScript interfaces in `src/types/menu.ts`
2. A JSON schema file for validation
3. Configuration file with sample data in `src/config/menu.config.ts`
4. Export the types from `src/types/index.ts`

Let me start implementing:

🔧 Tool: Read
Input: {
  "file_path": "C:\\Users\\James\\Repos\\restaurant-business\\src\\types\\index.ts"
}

🔧 Tool: Read
Input: {
  "file_path": "C:\\Users\\James\\Repos\\restaurant-business\\src\\types\\portfolio.ts"
}

🔧 Tool: Read
Input: {
  "file_path": "C:\\Users\\James\\Repos\\restaurant-business\\src\\types\\catering-form.ts"
}
Now I have a good understanding of the patterns. Let me also check for the existing config directory structure:

🔧 Tool: Glob
Input: {
  "pattern": "src/config/**/*.ts",
  "path": "C:\\Users\\James\\Repos\\restaurant-business"
}

🔧 Tool: TodoWrite
Input: {
  "todos": [
    {
      "content": "Create TypeScript interfaces for menu data structure",
      "status": "in_progress",
      "activeForm": "Creating TypeScript interfaces for menu data"
    },
    {
      "content": "Create JSON schema for menu validation",
      "status": "pending",
      "activeForm": "Creating JSON schema for menu validation"
    },
    {
      "content": "Create menu configuration file with sample data",
      "status": "pending",
      "activeForm": "Creating menu configuration with sample data"
    },
    {
      "content": "Export types from central index",
      "status": "pending",
      "activeForm": "Exporting types from central index"
    },
    {
      "content": "Verify implementation with Playwright tests",
      "status": "pending",
      "activeForm": "Verifying with Playwright tests"
    }
  ]
}
Now let me create the menu types file:

🔧 Tool: Write
Input: {
  "file_path": "C:\\Users\\James\\Repos\\restaurant-business\\src\\types\\menu.ts",
  "content": "/**\n * Menu Types\n * Type definitions for restaurant menu data including categories, items, prices,\n * descriptions, dietary tags, and optional photo references.\n * Supports multiple menu types (lunch, dinner, brunch).\n */\n\n// ============================================================================\n// Menu Type Enums\n// ============================================================================\n\n/**\n * Types of menus available\n */\nexport type MenuType = 'lunch' | 'dinner' | 'brunch' | 'dessert' | 'drinks' | 'kids';\n\n/**\n * Menu item categories\n */\nexport type MenuCategory =\n  | 'appetizers'\n  | 'soups-salads'\n  | 'main-courses'\n  | 'seafood'\n  | 'steaks-grills'\n  | 'pasta'\n  | 'sandwiches'\n  | 'sides'\n  | 'desserts'\n  | 'beverages'\n  | 'cocktails'\n  | 'wine'\n  | 'beer'\n  | 'kids';\n\n/**\n * Dietary tags for menu items\n */\nexport type DietaryTag =\n  | 'vegetarian'\n  | 'vegan'\n  | 'gluten-free'\n  | 'dairy-free'\n  | 'nut-free'\n  | 'egg-free'\n  | 'soy-free'\n  | 'halal'\n  | 'kosher'\n  | 'organic'\n  | 'locally-sourced'\n  | 'spicy'\n  | 'mild';\n\n/**\n * Allergen tags for menu items\n */\nexport type AllergenTag =\n  | 'milk'\n  | 'eggs'\n  | 'fish'\n  | 'shellfish'\n  | 'tree-nuts'\n  | 'peanuts'\n  | 'wheat'\n  | 'soy'\n  | 'sesame'\n  | 'mustard'\n  | 'celery'\n  | 'lupin'\n  | 'molluscs'\n  | 'sulphites';\n\n/**\n * Spice level for dishes\n */\nexport type SpiceLevel = 'none' | 'mild' | 'medium' | 'hot' | 'extra-hot';\n\n/**\n * Preparation styles\n */\nexport type PreparationStyle =\n  | 'grilled'\n  | 'fried'\n  | 'baked'\n  | 'steamed'\n  | 'raw'\n  | 'smoked'\n  | 'roasted'\n  | 'sauteed'\n  | 'braised';\n\n// ============================================================================\n// Option Interfaces (for UI dropdowns/filters)\n// ============================================================================\n\n/**\n * Menu type option for UI selection\n */\nexport interface MenuTypeOption {\n  value: MenuType;\n  label: string;\n  description?: string;\n  availableFrom?: string;\n  availableTo?: string;\n}\n\n/**\n * Menu category option for UI filters\n */\nexport interface MenuCategoryOption {\n  value: MenuCategory;\n  label: string;\n  description?: string;\n  icon?: string;\n}\n\n/**\n * Dietary tag option for UI display\n */\nexport interface DietaryTagOption {\n  value: DietaryTag;\n  label: string;\n  abbreviation?: string;\n  icon?: string;\n  description?: string;\n}\n\n/**\n * Allergen tag option for UI display\n */\nexport interface AllergenTagOption {\n  value: AllergenTag;\n  label: string;\n  icon?: string;\n  severity?: 'warning' | 'danger';\n}\n\n// ============================================================================\n// Core Data Interfaces\n// ============================================================================\n\n/**\n * Image configuration for menu items\n */\nexport interface MenuItemImage {\n  /** Main image source path */\n  src: string;\n  /** WebP format source for modern browsers */\n  srcWebP?: string;\n  /** Alt text for accessibility */\n  alt: string;\n  /** Image width in pixels */\n  width?: number;\n  /** Image height in pixels */\n  height?: number;\n  /** Placeholder/blur-up image (base64 or low-res URL) */\n  placeholder?: string;\n}\n\n/**\n * Price information for a menu item\n */\nexport interface MenuItemPrice {\n  /** Base price in the smallest currency unit (cents) for precision */\n  amount: number;\n  /** Currency code (ISO 4217) */\n  currency: string;\n  /** Formatted display string (e.g., \"$18.99\") */\n  display: string;\n  /** Price per unit description (e.g., \"per person\", \"per dozen\") */\n  unit?: string;\n}\n\n/**\n * Price variant for items with multiple sizes/options\n */\nexport interface MenuItemPriceVariant {\n  /** Variant name (e.g., \"Small\", \"Large\", \"Half Portion\") */\n  name: string;\n  /** Price for this variant */\n  price: MenuItemPrice;\n  /** Description of what this variant includes */\n  description?: string;\n  /** Whether this is the default selection */\n  isDefault?: boolean;\n}\n\n/**\n * Add-on or modifier for a menu item\n */\nexport interface MenuItemAddOn {\n  /** Unique identifier for the add-on */\n  id: string;\n  /** Add-on name */\n  name: string;\n  /** Additional price for this add-on */\n  price: MenuItemPrice;\n  /** Description of the add-on */\n  description?: string;\n  /** Whether this add-on is available */\n  available?: boolean;\n}\n\n/**\n * Nutritional information for a menu item\n */\nexport interface NutritionalInfo {\n  /** Calories per serving */\n  calories?: number;\n  /** Protein in grams */\n  protein?: number;\n  /** Carbohydrates in grams */\n  carbohydrates?: number;\n  /** Fat in grams */\n  fat?: number;\n  /** Saturated fat in grams */\n  saturatedFat?: number;\n  /** Fiber in grams */\n  fiber?: number;\n  /** Sugar in grams */\n  sugar?: number;\n  /** Sodium in milligrams */\n  sodium?: number;\n  /** Serving size description */\n  servingSize?: string;\n}\n\n/**\n * Represents a single menu item\n */\nexport interface MenuItem {\n  /** Unique identifier for the item */\n  id: string;\n  /** Item name */\n  name: string;\n  /** Full description of the item */\n  description: string;\n  /** Short description for compact displays */\n  shortDescription?: string;\n  /** Primary price (or base price if variants exist) */\n  price: MenuItemPrice;\n  /** Price variants for different sizes/portions */\n  priceVariants?: MenuItemPriceVariant[];\n  /** Available add-ons/modifiers */\n  addOns?: MenuItemAddOn[];\n  /** Item category */\n  category: MenuCategory;\n  /** Menu types this item appears on */\n  menuTypes: MenuType[];\n  /** Dietary tags */\n  dietaryTags?: DietaryTag[];\n  /** Allergen information */\n  allergens?: AllergenTag[];\n  /** Spice level indicator */\n  spiceLevel?: SpiceLevel;\n  /** Preparation style */\n  preparationStyle?: PreparationStyle;\n  /** Main image */\n  image?: MenuItemImage;\n  /** Additional gallery images */\n  gallery?: MenuItemImage[];\n  /** Whether this is a featured/signature item */\n  featured?: boolean;\n  /** Whether this is a chef's recommendation */\n  chefRecommended?: boolean;\n  /** Whether this is a new item */\n  isNew?: boolean;\n  /** Whether this is a seasonal item */\n  seasonal?: boolean;\n  /** Season availability (if seasonal) */\n  seasonAvailable?: string;\n  /** Whether the item is currently available */\n  available?: boolean;\n  /** Sort order within category */\n  sortOrder?: number;\n  /** Related item IDs for suggestions */\n  relatedItems?: string[];\n  /** Nutritional information */\n  nutritionalInfo?: NutritionalInfo;\n  /** Preparation time in minutes */\n  prepTime?: number;\n  /** Internal notes (not displayed to customers) */\n  internalNotes?: string;\n  /** Date item was added */\n  createdAt?: string;\n  /** Date item was last updated */\n  updatedAt?: string;\n}\n\n/**\n * Represents a menu category section\n */\nexport interface MenuSection {\n  /** Category identifier */\n  category: MenuCategory;\n  /** Display title for the section */\n  title: string;\n  /** Section description */\n  description?: string;\n  /** Section image/header */\n  image?: MenuItemImage;\n  /** Items in this section */\n  items: MenuItem[];\n  /** Sort order for display */\n  sortOrder?: number;\n  /** Whether section is visible */\n  visible?: boolean;\n}\n\n/**\n * Represents a complete menu\n */\nexport interface Menu {\n  /** Unique identifier for the menu */\n  id: string;\n  /** Menu type */\n  type: MenuType;\n  /** Menu display name */\n  name: string;\n  /** Menu description */\n  description?: string;\n  /** Sections/categories in this menu */\n  sections: MenuSection[];\n  /** Availability hours (e.g., \"11:00 AM - 3:00 PM\") */\n  availableHours?: string;\n  /** Days available */\n  availableDays?: string[];\n  /** Whether this menu is currently active */\n  active?: boolean;\n  /** Effective date for this menu version */\n  effectiveDate?: string;\n  /** Expiration date (for seasonal menus) */\n  expirationDate?: string;\n  /** Last updated timestamp */\n  updatedAt?: string;\n}\n\n// ============================================================================\n// Component Props Interfaces\n// ============================================================================\n\n/**\n * Props for MenuCard component\n */\nexport interface MenuItemCardProps extends MenuItem {\n  /** Additional CSS class names */\n  class?: string;\n  /** Whether to show the full description or truncated */\n  showFullDescription?: boolean;\n  /** Whether to show the image */\n  showImage?: boolean;\n  /** Whether to show dietary tags */\n  showDietaryTags?: boolean;\n  /** Whether to show allergen information */\n  showAllergens?: boolean;\n  /** Whether to show nutritional info */\n  showNutrition?: boolean;\n  /** Click handler for the card */\n  onClick?: () => void;\n}\n\n/**\n * Props for MenuSection component\n */\nexport interface MenuSectionProps extends MenuSection {\n  /** Additional CSS class names */\n  class?: string;\n  /** Layout style */\n  layout?: 'grid' | 'list';\n  /** Number of columns for grid layout */\n  columns?: 2 | 3 | 4;\n  /** Whether to show images for items */\n  showItemImages?: boolean;\n}\n\n/**\n * Props for Menu component\n */\nexport interface MenuProps extends Menu {\n  /** Additional CSS class names */\n  class?: string;\n  /** Whether to enable category filtering */\n  enableFiltering?: boolean;\n  /** Initial category filter */\n  initialFilter?: MenuCategory | 'all';\n  /** Whether to show dietary filter */\n  showDietaryFilter?: boolean;\n  /** Layout preference */\n  layout?: 'full' | 'compact';\n}\n\n/**\n * Filter options for menu display\n */\nexport interface MenuFilterOptions {\n  /** Selected menu type */\n  menuType?: MenuType;\n  /** Selected category */\n  category?: MenuCategory | 'all';\n  /** Dietary filters to apply */\n  dietaryFilters?: DietaryTag[];\n  /** Allergens to exclude */\n  excludeAllergens?: AllergenTag[];\n  /** Price range filter */\n  priceRange?: {\n    min?: number;\n    max?: number;\n  };\n  /** Show only featured items */\n  featuredOnly?: boolean;\n  /** Show only available items */\n  availableOnly?: boolean;\n  /** Search query */\n  searchQuery?: string;\n}\n\n// ============================================================================\n// Configuration Constants\n// ============================================================================\n\n/**\n * Menu type options for UI\n */\nexport const MENU_TYPE_OPTIONS: MenuTypeOption[] = [\n  { value: 'lunch', label: 'Lunch', description: 'Available 11:00 AM - 3:00 PM', availableFrom: '11:00', availableTo: '15:00' },\n  { value: 'dinner', label: 'Dinner', description: 'Available 5:00 PM - 10:00 PM', availableFrom: '17:00', availableTo: '22:00' },\n  { value: 'brunch', label: 'Brunch', description: 'Available Sat & Sun 9:00 AM - 2:00 PM', availableFrom: '09:00', availableTo: '14:00' },\n  { value: 'dessert', label: 'Desserts', description: 'Available all day' },\n  { value: 'drinks', label: 'Drinks', description: 'Full bar available' },\n  { value: 'kids', label: 'Kids Menu', description: 'For children 12 and under' },\n];\n\n/**\n * Menu category options for UI\n */\nexport const MENU_CATEGORY_OPTIONS: MenuCategoryOption[] = [\n  { value: 'appetizers', label: 'Appetizers', description: 'Start your meal right' },\n  { value: 'soups-salads', label: 'Soups & Salads', description: 'Fresh and flavorful' },\n  { value: 'main-courses', label: 'Main Courses', description: 'Signature entrees' },\n  { value: 'seafood', label: 'Seafood', description: 'Fresh catch of the day' },\n  { value: 'steaks-grills', label: 'Steaks & Grills', description: 'Premium cuts' },\n  { value: 'pasta', label: 'Pasta', description: 'House-made pasta dishes' },\n  { value: 'sandwiches', label: 'Sandwiches', description: 'Handcrafted sandwiches' },\n  { value: 'sides', label: 'Sides', description: 'Perfect accompaniments' },\n  { value: 'desserts', label: 'Desserts', description: 'Sweet endings' },\n  { value: 'beverages', label: 'Beverages', description: 'Refreshing drinks' },\n  { value: 'cocktails', label: 'Cocktails', description: 'Craft cocktails' },\n  { value: 'wine', label: 'Wine', description: 'Curated wine selection' },\n  { value: 'beer', label: 'Beer', description: 'Local and imported beers' },\n  { value: 'kids', label: 'Kids', description: 'Kid-friendly favorites' },\n];\n\n/**\n * Dietary tag options for UI\n */\nexport const DIETARY_TAG_OPTIONS: DietaryTagOption[] = [\n  { value: 'vegetarian', label: 'Vegetarian', abbreviation: 'V', description: 'No meat or fish' },\n  { value: 'vegan', label: 'Vegan', abbreviation: 'VG', description: 'No animal products' },\n  { value: 'gluten-free', label: 'Gluten-Free', abbreviation: 'GF', description: 'No gluten-containing ingredients' },\n  { value: 'dairy-free', label: 'Dairy-Free', abbreviation: 'DF', description: 'No dairy products' },\n  { value: 'nut-free', label: 'Nut-Free', abbreviation: 'NF', description: 'No tree nuts or peanuts' },\n  { value: 'egg-free', label: 'Egg-Free', abbreviation: 'EF', description: 'No eggs' },\n  { value: 'soy-free', label: 'Soy-Free', abbreviation: 'SF', description: 'No soy products' },\n  { value: 'halal', label: 'Halal', abbreviation: 'H', description: 'Prepared according to Islamic law' },\n  { value: 'kosher', label: 'Kosher', abbreviation: 'K', description: 'Prepared according to Jewish dietary law' },\n  { value: 'organic', label: 'Organic', abbreviation: 'O', description: 'Made with organic ingredients' },\n  { value: 'locally-sourced', label: 'Locally Sourced', abbreviation: 'LS', description: 'Ingredients from local farms' },\n  { value: 'spicy', label: 'Spicy', abbreviation: 'S', description: 'Contains spicy ingredients' },\n  { value: 'mild', label: 'Mild', abbreviation: 'M', description: 'Not spicy' },\n];\n\n/**\n * Allergen tag options for UI\n */\nexport const ALLERGEN_TAG_OPTIONS: AllergenTagOption[] = [\n  { value: 'milk', label: 'Milk', severity: 'warning' },\n  { value: 'eggs', label: 'Eggs', severity: 'warning' },\n  { value: 'fish', label: 'Fish', severity: 'danger' },\n  { value: 'shellfish', label: 'Shellfish', severity: 'danger' },\n  { value: 'tree-nuts', label: 'Tree Nuts', severity: 'danger' },\n  { value: 'peanuts', label: 'Peanuts', severity: 'danger' },\n  { value: 'wheat', label: 'Wheat', severity: 'warning' },\n  { value: 'soy', label: 'Soy', severity: 'warning' },\n  { value: 'sesame', label: 'Sesame', severity: 'warning' },\n  { value: 'mustard', label: 'Mustard', severity: 'warning' },\n  { value: 'celery', label: 'Celery', severity: 'warning' },\n  { value: 'lupin', label: 'Lupin', severity: 'warning' },\n  { value: 'molluscs', label: 'Molluscs', severity: 'danger' },\n  { value: 'sulphites', label: 'Sulphites', severity: 'warning' },\n];\n\n/**\n * Spice level options for UI\n */\nexport const SPICE_LEVEL_OPTIONS: { value: SpiceLevel; label: string; icon: string }[] = [\n  { value: 'none', label: 'No Spice', icon: '' },\n  { value: 'mild', label: 'Mild', icon: '🌶️' },\n  { value: 'medium', label: 'Medium', icon: '🌶️🌶️' },\n  { value: 'hot', label: 'Hot', icon: '🌶️🌶️🌶️' },\n  { value: 'extra-hot', label: 'Extra Hot', icon: '🌶️🌶️🌶️🌶️' },\n];\n\n/**\n * Default currency for prices\n */\nexport const DEFAULT_CURRENCY = 'USD';\n\n/**\n * Helper function to create a price object\n */\nexport function createPrice(amount: number, currency: string = DEFAULT_CURRENCY): MenuItemPrice {\n  const dollars = amount / 100;\n  return {\n    amount,\n    currency,\n    display: new Intl.NumberFormat('en-US', {\n      style: 'currency',\n      currency,\n    }).format(dollars),\n  };\n}\n\n/**\n * Helper function to format price from cents to display string\n */\nexport function formatPrice(amountInCents: number, currency: string = DEFAULT_CURRENCY): string {\n  const dollars = amountInCents / 100;\n  return new Intl.NumberFormat('en-US', {\n    style: 'currency',\n    currency,\n  }).format(dollars);\n}\n"
}

🔧 Tool: TodoWrite
Input: {
  "todos": [
    {
      "content": "Create TypeScript interfaces for menu data structure",
      "status": "completed",
      "activeForm": "Creating TypeScript interfaces for menu data"
    },
    {
      "content": "Create JSON schema for menu validation",
      "status": "in_progress",
      "activeForm": "Creating JSON schema for menu validation"
    },
    {
      "content": "Create menu configuration file with sample data",
      "status": "pending",
      "activeForm": "Creating menu configuration with sample data"
    },
    {
      "content": "Export types from central index",
      "status": "pending",
      "activeForm": "Exporting types from central index"
    },
    {
      "content": "Verify implementation with Playwright tests",
      "status": "pending",
      "activeForm": "Verifying with Playwright tests"
    }
  ]
}
Now let me create the JSON schema for menu validation:

🔧 Tool: Write
Input: {
  "file_path": "C:\\Users\\James\\Repos\\restaurant-business\\src\\schemas\\menu.schema.json",
  "content": "{\n  \"$schema\": \"http://json-schema.org/draft-07/schema#\",\n  \"$id\": \"https://restaurant-business.com/schemas/menu.schema.json\",\n  \"title\": \"Restaurant Menu Schema\",\n  \"description\": \"JSON schema for validating restaurant menu data including categories, items, prices, descriptions, dietary tags, and photo references\",\n  \"definitions\": {\n    \"MenuType\": {\n      \"type\": \"string\",\n      \"enum\": [\"lunch\", \"dinner\", \"brunch\", \"dessert\", \"drinks\", \"kids\"],\n      \"description\": \"Types of menus available\"\n    },\n    \"MenuCategory\": {\n      \"type\": \"string\",\n      \"enum\": [\n        \"appetizers\",\n        \"soups-salads\",\n        \"main-courses\",\n        \"seafood\",\n        \"steaks-grills\",\n        \"pasta\",\n        \"sandwiches\",\n        \"sides\",\n        \"desserts\",\n        \"beverages\",\n        \"cocktails\",\n        \"wine\",\n        \"beer\",\n        \"kids\"\n      ],\n      \"description\": \"Menu item categories\"\n    },\n    \"DietaryTag\": {\n      \"type\": \"string\",\n      \"enum\": [\n        \"vegetarian\",\n        \"vegan\",\n        \"gluten-free\",\n        \"dairy-free\",\n        \"nut-free\",\n        \"egg-free\",\n        \"soy-free\",\n        \"halal\",\n        \"kosher\",\n        \"organic\",\n        \"locally-sourced\",\n        \"spicy\",\n        \"mild\"\n      ],\n      \"description\": \"Dietary tags for menu items\"\n    },\n    \"AllergenTag\": {\n      \"type\": \"string\",\n      \"enum\": [\n        \"milk\",\n        \"eggs\",\n        \"fish\",\n        \"shellfish\",\n        \"tree-nuts\",\n        \"peanuts\",\n        \"wheat\",\n        \"soy\",\n        \"sesame\",\n        \"mustard\",\n        \"celery\",\n        \"lupin\",\n        \"molluscs\",\n        \"sulphites\"\n      ],\n      \"description\": \"Allergen tags for menu items\"\n    },\n    \"SpiceLevel\": {\n      \"type\": \"string\",\n      \"enum\": [\"none\", \"mild\", \"medium\", \"hot\", \"extra-hot\"],\n      \"description\": \"Spice level for dishes\"\n    },\n    \"PreparationStyle\": {\n      \"type\": \"string\",\n      \"enum\": [\n        \"grilled\",\n        \"fried\",\n        \"baked\",\n        \"steamed\",\n        \"raw\",\n        \"smoked\",\n        \"roasted\",\n        \"sauteed\",\n        \"braised\"\n      ],\n      \"description\": \"Preparation styles\"\n    },\n    \"MenuItemImage\": {\n      \"type\": \"object\",\n      \"description\": \"Image configuration for menu items\",\n      \"properties\": {\n        \"src\": {\n          \"type\": \"string\",\n          \"description\": \"Main image source path\",\n          \"minLength\": 1\n        },\n        \"srcWebP\": {\n          \"type\": \"string\",\n          \"description\": \"WebP format source for modern browsers\"\n        },\n        \"alt\": {\n          \"type\": \"string\",\n          \"description\": \"Alt text for accessibility\",\n          \"minLength\": 1\n        },\n        \"width\": {\n          \"type\": \"integer\",\n          \"description\": \"Image width in pixels\",\n          \"minimum\": 1\n        },\n        \"height\": {\n          \"type\": \"integer\",\n          \"description\": \"Image height in pixels\",\n          \"minimum\": 1\n        },\n        \"placeholder\": {\n          \"type\": \"string\",\n          \"description\": \"Placeholder/blur-up image (base64 or low-res URL)\"\n        }\n      },\n      \"required\": [\"src\", \"alt\"],\n      \"additionalProperties\": false\n    },\n    \"MenuItemPrice\": {\n      \"type\": \"object\",\n      \"description\": \"Price information for a menu item\",\n      \"properties\": {\n        \"amount\": {\n          \"type\": \"integer\",\n          \"description\": \"Base price in the smallest currency unit (cents) for precision\",\n          \"minimum\": 0\n        },\n        \"currency\": {\n          \"type\": \"string\",\n          \"description\": \"Currency code (ISO 4217)\",\n          \"pattern\": \"^[A-Z]{3}$\",\n          \"default\": \"USD\"\n        },\n        \"display\": {\n          \"type\": \"string\",\n          \"description\": \"Formatted display string (e.g., \\\"$18.99\\\")\",\n          \"minLength\": 1\n        },\n        \"unit\": {\n          \"type\": \"string\",\n          \"description\": \"Price per unit description (e.g., \\\"per person\\\", \\\"per dozen\\\")\"\n        }\n      },\n      \"required\": [\"amount\", \"currency\", \"display\"],\n      \"additionalProperties\": false\n    },\n    \"MenuItemPriceVariant\": {\n      \"type\": \"object\",\n      \"description\": \"Price variant for items with multiple sizes/options\",\n      \"properties\": {\n        \"name\": {\n          \"type\": \"string\",\n          \"description\": \"Variant name (e.g., \\\"Small\\\", \\\"Large\\\", \\\"Half Portion\\\")\",\n          \"minLength\": 1\n        },\n        \"price\": {\n          \"$ref\": \"#/definitions/MenuItemPrice\"\n        },\n        \"description\": {\n          \"type\": \"string\",\n          \"description\": \"Description of what this variant includes\"\n        },\n        \"isDefault\": {\n          \"type\": \"boolean\",\n          \"description\": \"Whether this is the default selection\"\n        }\n      },\n      \"required\": [\"name\", \"price\"],\n      \"additionalProperties\": false\n    },\n    \"MenuItemAddOn\": {\n      \"type\": \"object\",\n      \"description\": \"Add-on or modifier for a menu item\",\n      \"properties\": {\n        \"id\": {\n          \"type\": \"string\",\n          \"description\": \"Unique identifier for the add-on\",\n          \"minLength\": 1\n        },\n        \"name\": {\n          \"type\": \"string\",\n          \"description\": \"Add-on name\",\n          \"minLength\": 1\n        },\n        \"price\": {\n          \"$ref\": \"#/definitions/MenuItemPrice\"\n        },\n        \"description\": {\n          \"type\": \"string\",\n          \"description\": \"Description of the add-on\"\n        },\n        \"available\": {\n          \"type\": \"boolean\",\n          \"description\": \"Whether this add-on is available\",\n          \"default\": true\n        }\n      },\n      \"required\": [\"id\", \"name\", \"price\"],\n      \"additionalProperties\": false\n    },\n    \"NutritionalInfo\": {\n      \"type\": \"object\",\n      \"description\": \"Nutritional information for a menu item\",\n      \"properties\": {\n        \"calories\": {\n          \"type\": \"integer\",\n          \"description\": \"Calories per serving\",\n          \"minimum\": 0\n        },\n        \"protein\": {\n          \"type\": \"number\",\n          \"description\": \"Protein in grams\",\n          \"minimum\": 0\n        },\n        \"carbohydrates\": {\n          \"type\": \"number\",\n          \"description\": \"Carbohydrates in grams\",\n          \"minimum\": 0\n        },\n        \"fat\": {\n          \"type\": \"number\",\n          \"description\": \"Fat in grams\",\n          \"minimum\": 0\n        },\n        \"saturatedFat\": {\n          \"type\": \"number\",\n          \"description\": \"Saturated fat in grams\",\n          \"minimum\": 0\n        },\n        \"fiber\": {\n          \"type\": \"number\",\n          \"description\": \"Fiber in grams\",\n          \"minimum\": 0\n        },\n        \"sugar\": {\n          \"type\": \"number\",\n          \"description\": \"Sugar in grams\",\n          \"minimum\": 0\n        },\n        \"sodium\": {\n          \"type\": \"number\",\n          \"description\": \"Sodium in milligrams\",\n          \"minimum\": 0\n        },\n        \"servingSize\": {\n          \"type\": \"string\",\n          \"description\": \"Serving size description\"\n        }\n      },\n      \"additionalProperties\": false\n    },\n    \"MenuItem\": {\n      \"type\": \"object\",\n      \"description\": \"Represents a single menu item\",\n      \"properties\": {\n        \"id\": {\n          \"type\": \"string\",\n          \"description\": \"Unique identifier for the item\",\n          \"minLength\": 1,\n          \"pattern\": \"^[a-z0-9-]+$\"\n        },\n        \"name\": {\n          \"type\": \"string\",\n          \"description\": \"Item name\",\n          \"minLength\": 1,\n          \"maxLength\": 100\n        },\n        \"description\": {\n          \"type\": \"string\",\n          \"description\": \"Full description of the item\",\n          \"minLength\": 1,\n          \"maxLength\": 500\n        },\n        \"shortDescription\": {\n          \"type\": \"string\",\n          \"description\": \"Short description for compact displays\",\n          \"maxLength\": 150\n        },\n        \"price\": {\n          \"$ref\": \"#/definitions/MenuItemPrice\"\n        },\n        \"priceVariants\": {\n          \"type\": \"array\",\n          \"description\": \"Price variants for different sizes/portions\",\n          \"items\": {\n            \"$ref\": \"#/definitions/MenuItemPriceVariant\"\n          }\n        },\n        \"addOns\": {\n          \"type\": \"array\",\n          \"description\": \"Available add-ons/modifiers\",\n          \"items\": {\n            \"$ref\": \"#/definitions/MenuItemAddOn\"\n          }\n        },\n        \"category\": {\n          \"$ref\": \"#/definitions/MenuCategory\"\n        },\n        \"menuTypes\": {\n          \"type\": \"array\",\n          \"description\": \"Menu types this item appears on\",\n          \"items\": {\n            \"$ref\": \"#/definitions/MenuType\"\n          },\n          \"minItems\": 1,\n          \"uniqueItems\": true\n        },\n        \"dietaryTags\": {\n          \"type\": \"array\",\n          \"description\": \"Dietary tags\",\n          \"items\": {\n            \"$ref\": \"#/definitions/DietaryTag\"\n          },\n          \"uniqueItems\": true\n        },\n        \"allergens\": {\n          \"type\": \"array\",\n          \"description\": \"Allergen information\",\n          \"items\": {\n            \"$ref\": \"#/definitions/AllergenTag\"\n          },\n          \"uniqueItems\": true\n        },\n        \"spiceLevel\": {\n          \"$ref\": \"#/definitions/SpiceLevel\"\n        },\n        \"preparationStyle\": {\n          \"$ref\": \"#/definitions/PreparationStyle\"\n        },\n        \"image\": {\n          \"$ref\": \"#/definitions/MenuItemImage\"\n        },\n        \"gallery\": {\n          \"type\": \"array\",\n          \"description\": \"Additional gallery images\",\n          \"items\": {\n            \"$ref\": \"#/definitions/MenuItemImage\"\n          }\n        },\n        \"featured\": {\n          \"type\": \"boolean\",\n          \"description\": \"Whether this is a featured/signature item\",\n          \"default\": false\n        },\n        \"chefRecommended\": {\n          \"type\": \"boolean\",\n          \"description\": \"Whether this is a chef's recommendation\",\n          \"default\": false\n        },\n        \"isNew\": {\n          \"type\": \"boolean\",\n          \"description\": \"Whether this is a new item\",\n          \"default\": false\n        },\n        \"seasonal\": {\n          \"type\": \"boolean\",\n          \"description\": \"Whether this is a seasonal item\",\n          \"default\": false\n        },\n        \"seasonAvailable\": {\n          \"type\": \"string\",\n          \"description\": \"Season availability (if seasonal)\"\n        },\n        \"available\": {\n          \"type\": \"boolean\",\n          \"description\": \"Whether the item is currently available\",\n          \"default\": true\n        },\n        \"sortOrder\": {\n          \"type\": \"integer\",\n          \"description\": \"Sort order within category\",\n          \"minimum\": 0\n        },\n        \"relatedItems\": {\n          \"type\": \"array\",\n          \"description\": \"Related item IDs for suggestions\",\n          \"items\": {\n            \"type\": \"string\"\n          },\n          \"uniqueItems\": true\n        },\n        \"nutritionalInfo\": {\n          \"$ref\": \"#/definitions/NutritionalInfo\"\n        },\n        \"prepTime\": {\n          \"type\": \"integer\",\n          \"description\": \"Preparation time in minutes\",\n          \"minimum\": 0\n        },\n        \"internalNotes\": {\n          \"type\": \"string\",\n          \"description\": \"Internal notes (not displayed to customers)\"\n        },\n        \"createdAt\": {\n          \"type\": \"string\",\n          \"description\": \"Date item was added\",\n          \"format\": \"date-time\"\n        },\n        \"updatedAt\": {\n          \"type\": \"string\",\n          \"description\": \"Date item was last updated\",\n          \"format\": \"date-time\"\n        }\n      },\n      \"required\": [\"id\", \"name\", \"description\", \"price\", \"category\", \"menuTypes\"],\n      \"additionalProperties\": false\n    },\n    \"MenuSection\": {\n      \"type\": \"object\",\n      \"description\": \"Represents a menu category section\",\n      \"properties\": {\n        \"category\": {\n          \"$ref\": \"#/definitions/MenuCategory\"\n        },\n        \"title\": {\n          \"type\": \"string\",\n          \"description\": \"Display title for the section\",\n          \"minLength\": 1\n        },\n        \"description\": {\n          \"type\": \"string\",\n          \"description\": \"Section description\"\n        },\n        \"image\": {\n          \"$ref\": \"#/definitions/MenuItemImage\"\n        },\n        \"items\": {\n          \"type\": \"array\",\n          \"description\": \"Items in this section\",\n          \"items\": {\n            \"$ref\": \"#/definitions/MenuItem\"\n          }\n        },\n        \"sortOrder\": {\n          \"type\": \"integer\",\n          \"description\": \"Sort order for display\",\n          \"minimum\": 0\n        },\n        \"visible\": {\n          \"type\": \"boolean\",\n          \"description\": \"Whether section is visible\",\n          \"default\": true\n        }\n      },\n      \"required\": [\"category\", \"title\", \"items\"],\n      \"additionalProperties\": false\n    },\n    \"Menu\": {\n      \"type\": \"object\",\n      \"description\": \"Represents a complete menu\",\n      \"properties\": {\n        \"id\": {\n          \"type\": \"string\",\n          \"description\": \"Unique identifier for the menu\",\n          \"minLength\": 1,\n          \"pattern\": \"^[a-z0-9-]+$\"\n        },\n        \"type\": {\n          \"$ref\": \"#/definitions/MenuType\"\n        },\n        \"name\": {\n          \"type\": \"string\",\n          \"description\": \"Menu display name\",\n          \"minLength\": 1\n        },\n        \"description\": {\n          \"type\": \"string\",\n          \"description\": \"Menu description\"\n        },\n        \"sections\": {\n          \"type\": \"array\",\n          \"description\": \"Sections/categories in this menu\",\n          \"items\": {\n            \"$ref\": \"#/definitions/MenuSection\"\n          }\n        },\n        \"availableHours\": {\n          \"type\": \"string\",\n          \"description\": \"Availability hours (e.g., \\\"11:00 AM - 3:00 PM\\\")\"\n        },\n        \"availableDays\": {\n          \"type\": \"array\",\n          \"description\": \"Days available\",\n          \"items\": {\n            \"type\": \"string\",\n            \"enum\": [\"Monday\", \"Tuesday\", \"Wednesday\", \"Thursday\", \"Friday\", \"Saturday\", \"Sunday\"]\n          },\n          \"uniqueItems\": true\n        },\n        \"active\": {\n          \"type\": \"boolean\",\n          \"description\": \"Whether this menu is currently active\",\n          \"default\": true\n        },\n        \"effectiveDate\": {\n          \"type\": \"string\",\n          \"description\": \"Effective date for this menu version\",\n          \"format\": \"date\"\n        },\n        \"expirationDate\": {\n          \"type\": \"string\",\n          \"description\": \"Expiration date (for seasonal menus)\",\n          \"format\": \"date\"\n        },\n        \"updatedAt\": {\n          \"type\": \"string\",\n          \"description\": \"Last updated timestamp\",\n          \"format\": \"date-time\"\n        }\n      },\n      \"required\": [\"id\", \"type\", \"name\", \"sections\"],\n      \"additionalProperties\": false\n    }\n  },\n  \"type\": \"object\",\n  \"properties\": {\n    \"menus\": {\n      \"type\": \"array\",\n      \"description\": \"Array of all menus\",\n      \"items\": {\n        \"$ref\": \"#/definitions/Menu\"\n      }\n    },\n    \"items\": {\n      \"type\": \"array\",\n      \"description\": \"Flat array of all menu items (alternative structure)\",\n      \"items\": {\n        \"$ref\": \"#/definitions/MenuItem\"\n      }\n    },\n    \"version\": {\n      \"type\": \"string\",\n      \"description\": \"Schema version for this menu data\",\n      \"pattern\": \"^\\\\d+\\\\.\\\\d+\\\\.\\\\d+$\"\n    },\n    \"lastUpdated\": {\n      \"type\": \"string\",\n      \"description\": \"Last update timestamp\",\n      \"format\": \"date-time\"\n    }\n  },\n  \"oneOf\": [\n    {\n      \"required\": [\"menus\"]\n    },\n    {\n      \"required\": [\"items\"]\n    }\n  ],\n  \"additionalProperties\": false\n}\n"
}

🔧 Tool: TodoWrite
Input: {
  "todos": [
    {
      "content": "Create TypeScript interfaces for menu data structure",
      "status": "completed",
      "activeForm": "Creating TypeScript interfaces for menu data"
    },
    {
      "content": "Create JSON schema for menu validation",
      "status": "completed",
      "activeForm": "Creating JSON schema for menu validation"
    },
    {
      "content": "Create menu configuration file with sample data",
      "status": "in_progress",
      "activeForm": "Creating menu configuration with sample data"
    },
    {
      "content": "Export types from central index",
      "status": "pending",
      "activeForm": "Exporting types from central index"
    },
    {
      "content": "Verify implementation with Playwright tests",
      "status": "pending",
      "activeForm": "Verifying with Playwright tests"
    }
  ]
}
Now let me create the menu configuration file with sample data:

🔧 Tool: Write
Input: {
  "file_path": "C:\\Users\\James\\Repos\\restaurant-business\\src\\config\\menu.config.ts",
  "content": "/**\n * Menu Configuration\n * Sample menu data and configuration for the restaurant.\n * This file demonstrates the menu data structure with example items.\n */\n\nimport type {\n  MenuItem,\n  Menu,\n  MenuSection,\n  MenuItemPrice,\n  MenuType,\n  MenuCategory,\n} from '../types/menu';\nimport { createPrice } from '../types/menu';\n\n// ============================================================================\n// Sample Menu Items\n// ============================================================================\n\n/**\n * All menu items in a flat array for easy management\n */\nexport const MENU_ITEMS: MenuItem[] = [\n  // Appetizers\n  {\n    id: 'crispy-calamari',\n    name: 'Crispy Calamari',\n    description: 'Lightly breaded calamari rings served with house-made marinara sauce and lemon aioli. A perfect start to your meal.',\n    shortDescription: 'Lightly breaded calamari with marinara and lemon aioli',\n    price: createPrice(1495),\n    category: 'appetizers',\n    menuTypes: ['lunch', 'dinner'],\n    dietaryTags: [],\n    allergens: ['shellfish', 'wheat', 'eggs'],\n    preparationStyle: 'fried',\n    featured: true,\n    available: true,\n    sortOrder: 1,\n    image: {\n      src: '/menu/appetizers/crispy-calamari.jpg',\n      alt: 'Crispy calamari served with marinara sauce',\n      width: 600,\n      height: 400,\n    },\n    nutritionalInfo: {\n      calories: 420,\n      protein: 18,\n      carbohydrates: 32,\n      fat: 24,\n      sodium: 680,\n      servingSize: '1 serving',\n    },\n    prepTime: 12,\n  },\n  {\n    id: 'bruschetta-trio',\n    name: 'Bruschetta Trio',\n    description: 'Three classic Italian bruschetta: tomato basil, olive tapenade, and roasted garlic with ricotta. Served on freshly toasted ciabatta.',\n    shortDescription: 'Three classic Italian bruschetta varieties',\n    price: createPrice(1295),\n    category: 'appetizers',\n    menuTypes: ['lunch', 'dinner', 'brunch'],\n    dietaryTags: ['vegetarian'],\n    allergens: ['wheat', 'milk'],\n    preparationStyle: 'baked',\n    available: true,\n    sortOrder: 2,\n    image: {\n      src: '/menu/appetizers/bruschetta-trio.jpg',\n      alt: 'Trio of bruschetta on toasted ciabatta',\n      width: 600,\n      height: 400,\n    },\n    prepTime: 10,\n  },\n  {\n    id: 'spinach-artichoke-dip',\n    name: 'Spinach Artichoke Dip',\n    description: 'Creamy blend of spinach, artichoke hearts, and three cheeses. Served warm with house-made tortilla chips and crostini.',\n    shortDescription: 'Creamy spinach and artichoke dip with chips',\n    price: createPrice(1395),\n    category: 'appetizers',\n    menuTypes: ['lunch', 'dinner'],\n    dietaryTags: ['vegetarian', 'gluten-free'],\n    allergens: ['milk'],\n    available: true,\n    sortOrder: 3,\n    prepTime: 15,\n  },\n\n  // Soups & Salads\n  {\n    id: 'french-onion-soup',\n    name: 'French Onion Soup',\n    description: 'Classic French onion soup with caramelized onions in rich beef broth, topped with crusty bread and melted Gruyère cheese.',\n    shortDescription: 'Classic French onion with Gruyère',\n    price: createPrice(995),\n    category: 'soups-salads',\n    menuTypes: ['lunch', 'dinner'],\n    dietaryTags: [],\n    allergens: ['wheat', 'milk'],\n    available: true,\n    sortOrder: 1,\n    image: {\n      src: '/menu/soups/french-onion-soup.jpg',\n      alt: 'French onion soup with melted cheese',\n      width: 600,\n      height: 400,\n    },\n    prepTime: 8,\n  },\n  {\n    id: 'caesar-salad',\n    name: 'Classic Caesar Salad',\n    description: 'Crisp romaine lettuce tossed with house-made Caesar dressing, shaved Parmesan, and garlic croutons.',\n    shortDescription: 'Romaine with Caesar dressing and croutons',\n    price: createPrice(1195),\n    priceVariants: [\n      {\n        name: 'Side',\n        price: createPrice(795),\n        description: 'Smaller portion perfect as a side',\n      },\n      {\n        name: 'Full',\n        price: createPrice(1195),\n        description: 'Full-size entree portion',\n        isDefault: true,\n      },\n    ],\n    addOns: [\n      {\n        id: 'grilled-chicken',\n        name: 'Grilled Chicken',\n        price: createPrice(595),\n        description: 'Add seasoned grilled chicken breast',\n        available: true,\n      },\n      {\n        id: 'grilled-salmon',\n        name: 'Grilled Salmon',\n        price: createPrice(895),\n        description: 'Add fresh Atlantic salmon',\n        available: true,\n      },\n      {\n        id: 'grilled-shrimp',\n        name: 'Grilled Shrimp',\n        price: createPrice(795),\n        description: 'Add five grilled jumbo shrimp',\n        available: true,\n      },\n    ],\n    category: 'soups-salads',\n    menuTypes: ['lunch', 'dinner'],\n    dietaryTags: [],\n    allergens: ['wheat', 'milk', 'eggs', 'fish'],\n    available: true,\n    featured: true,\n    sortOrder: 2,\n    prepTime: 10,\n  },\n  {\n    id: 'garden-salad',\n    name: 'Fresh Garden Salad',\n    description: 'Mixed greens with cherry tomatoes, cucumbers, red onion, and carrots. Choice of house-made dressing.',\n    shortDescription: 'Mixed greens with fresh vegetables',\n    price: createPrice(995),\n    category: 'soups-salads',\n    menuTypes: ['lunch', 'dinner', 'brunch'],\n    dietaryTags: ['vegetarian', 'vegan', 'gluten-free'],\n    allergens: [],\n    available: true,\n    sortOrder: 3,\n    prepTime: 8,\n  },\n\n  // Main Courses\n  {\n    id: 'grilled-salmon',\n    name: 'Grilled Atlantic Salmon',\n    description: 'Fresh Atlantic salmon fillet grilled to perfection, served with lemon dill butter sauce, seasonal vegetables, and choice of rice pilaf or roasted potatoes.',\n    shortDescription: 'Fresh salmon with lemon dill butter',\n    price: createPrice(2895),\n    category: 'seafood',\n    menuTypes: ['lunch', 'dinner'],\n    dietaryTags: ['gluten-free'],\n    allergens: ['fish', 'milk'],\n    preparationStyle: 'grilled',\n    featured: true,\n    chefRecommended: true,\n    available: true,\n    sortOrder: 1,\n    image: {\n      src: '/menu/mains/grilled-salmon.jpg',\n      alt: 'Grilled salmon with vegetables',\n      width: 600,\n      height: 400,\n    },\n    nutritionalInfo: {\n      calories: 520,\n      protein: 42,\n      carbohydrates: 18,\n      fat: 28,\n      sodium: 420,\n      servingSize: '8 oz fillet',\n    },\n    prepTime: 20,\n    relatedItems: ['garden-salad', 'french-onion-soup'],\n  },\n  {\n    id: 'filet-mignon',\n    name: 'Filet Mignon',\n    description: 'USDA Prime 8oz center-cut filet, aged 28 days and grilled to your preference. Served with garlic mashed potatoes and asparagus.',\n    shortDescription: '8oz USDA Prime center-cut filet',\n    price: createPrice(4495),\n    priceVariants: [\n      {\n        name: '6 oz',\n        price: createPrice(3695),\n        description: 'Petite cut',\n      },\n      {\n        name: '8 oz',\n        price: createPrice(4495),\n        description: 'Classic cut',\n        isDefault: true,\n      },\n      {\n        name: '10 oz',\n        price: createPrice(5295),\n        description: 'Large cut',\n      },\n    ],\n    addOns: [\n      {\n        id: 'peppercorn-sauce',\n        name: 'Peppercorn Sauce',\n        price: createPrice(395),\n        description: 'Creamy black peppercorn sauce',\n        available: true,\n      },\n      {\n        id: 'blue-cheese-crust',\n        name: 'Blue Cheese Crust',\n        price: createPrice(495),\n        description: 'Topped with melted blue cheese',\n        available: true,\n      },\n      {\n        id: 'sauteed-mushrooms',\n        name: 'Sautéed Mushrooms',\n        price: createPrice(395),\n        description: 'Wild mushroom blend',\n        available: true,\n      },\n    ],\n    category: 'steaks-grills',\n    menuTypes: ['dinner'],\n    dietaryTags: ['gluten-free'],\n    allergens: ['milk'],\n    preparationStyle: 'grilled',\n    featured: true,\n    chefRecommended: true,\n    available: true,\n    sortOrder: 1,\n    image: {\n      src: '/menu/mains/filet-mignon.jpg',\n      alt: 'Filet mignon with mashed potatoes',\n      width: 600,\n      height: 400,\n    },\n    prepTime: 25,\n  },\n  {\n    id: 'chicken-parmesan',\n    name: 'Chicken Parmesan',\n    description: 'Crispy breaded chicken breast topped with house-made marinara and melted mozzarella. Served over linguine pasta.',\n    shortDescription: 'Breaded chicken with marinara over pasta',\n    price: createPrice(2295),\n    category: 'main-courses',\n    menuTypes: ['lunch', 'dinner'],\n    dietaryTags: [],\n    allergens: ['wheat', 'milk', 'eggs'],\n    preparationStyle: 'fried',\n    available: true,\n    sortOrder: 2,\n    image: {\n      src: '/menu/mains/chicken-parmesan.jpg',\n      alt: 'Chicken parmesan over linguine',\n      width: 600,\n      height: 400,\n    },\n    prepTime: 22,\n  },\n  {\n    id: 'vegetable-risotto',\n    name: 'Seasonal Vegetable Risotto',\n    description: 'Creamy Arborio rice slowly cooked with seasonal vegetables, white wine, and finished with Parmesan cheese and fresh herbs.',\n    shortDescription: 'Creamy risotto with seasonal vegetables',\n    price: createPrice(1995),\n    category: 'main-courses',\n    menuTypes: ['lunch', 'dinner'],\n    dietaryTags: ['vegetarian', 'gluten-free'],\n    allergens: ['milk'],\n    available: true,\n    seasonal: true,\n    seasonAvailable: 'Spring/Summer',\n    sortOrder: 3,\n    prepTime: 25,\n  },\n\n  // Pasta\n  {\n    id: 'spaghetti-carbonara',\n    name: 'Spaghetti Carbonara',\n    description: 'Traditional Roman pasta with house-made spaghetti, pancetta, egg yolk, Pecorino Romano, and black pepper.',\n    shortDescription: 'Traditional Roman pasta with pancetta',\n    price: createPrice(1895),\n    category: 'pasta',\n    menuTypes: ['lunch', 'dinner'],\n    dietaryTags: [],\n    allergens: ['wheat', 'eggs', 'milk'],\n    available: true,\n    sortOrder: 1,\n    prepTime: 18,\n  },\n  {\n    id: 'penne-arrabbiata',\n    name: 'Penne Arrabbiata',\n    description: 'Al dente penne pasta in a spicy tomato sauce with garlic, red chili flakes, and fresh basil. A classic Italian favorite.',\n    shortDescription: 'Penne in spicy tomato sauce',\n    price: createPrice(1695),\n    category: 'pasta',\n    menuTypes: ['lunch', 'dinner'],\n    dietaryTags: ['vegetarian', 'vegan', 'dairy-free'],\n    allergens: ['wheat'],\n    spiceLevel: 'medium',\n    available: true,\n    sortOrder: 2,\n    prepTime: 15,\n  },\n\n  // Sandwiches (Lunch)\n  {\n    id: 'classic-burger',\n    name: 'Classic Burger',\n    description: 'Half-pound Angus beef patty on a brioche bun with lettuce, tomato, onion, and house sauce. Served with seasoned fries.',\n    shortDescription: 'Half-pound Angus beef with fries',\n    price: createPrice(1695),\n    addOns: [\n      {\n        id: 'bacon',\n        name: 'Bacon',\n        price: createPrice(250),\n        description: 'Add crispy applewood smoked bacon',\n        available: true,\n      },\n      {\n        id: 'cheese',\n        name: 'Cheese',\n        price: createPrice(150),\n        description: 'Add cheddar, Swiss, or American',\n        available: true,\n      },\n      {\n        id: 'avocado',\n        name: 'Avocado',\n        price: createPrice(200),\n        description: 'Add fresh sliced avocado',\n        available: true,\n      },\n    ],\n    category: 'sandwiches',\n    menuTypes: ['lunch'],\n    dietaryTags: [],\n    allergens: ['wheat', 'eggs', 'milk'],\n    preparationStyle: 'grilled',\n    featured: true,\n    available: true,\n    sortOrder: 1,\n    image: {\n      src: '/menu/sandwiches/classic-burger.jpg',\n      alt: 'Classic burger with fries',\n      width: 600,\n      height: 400,\n    },\n    prepTime: 15,\n  },\n  {\n    id: 'grilled-chicken-sandwich',\n    name: 'Grilled Chicken Sandwich',\n    description: 'Marinated chicken breast grilled and served on ciabatta with roasted red peppers, arugula, and pesto aioli.',\n    shortDescription: 'Grilled chicken with pesto aioli',\n    price: createPrice(1595),\n    category: 'sandwiches',\n    menuTypes: ['lunch'],\n    dietaryTags: [],\n    allergens: ['wheat', 'milk', 'eggs', 'tree-nuts'],\n    preparationStyle: 'grilled',\n    available: true,\n    sortOrder: 2,\n    prepTime: 15,\n  },\n\n  // Desserts\n  {\n    id: 'tiramisu',\n    name: 'Classic Tiramisu',\n    description: 'Traditional Italian dessert with layers of espresso-soaked ladyfingers and mascarpone cream, dusted with cocoa powder.',\n    shortDescription: 'Traditional Italian tiramisu',\n    price: createPrice(1095),\n    category: 'desserts',\n    menuTypes: ['lunch', 'dinner', 'brunch'],\n    dietaryTags: ['vegetarian'],\n    allergens: ['wheat', 'milk', 'eggs'],\n    featured: true,\n    available: true,\n    sortOrder: 1,\n    image: {\n      src: '/menu/desserts/tiramisu.jpg',\n      alt: 'Classic tiramisu',\n      width: 600,\n      height: 400,\n    },\n    prepTime: 5,\n  },\n  {\n    id: 'chocolate-lava-cake',\n    name: 'Chocolate Lava Cake',\n    description: 'Warm dark chocolate cake with a molten center, served with vanilla bean ice cream and fresh berries.',\n    shortDescription: 'Warm chocolate cake with molten center',\n    price: createPrice(1195),\n    category: 'desserts',\n    menuTypes: ['lunch', 'dinner'],\n    dietaryTags: ['vegetarian'],\n    allergens: ['wheat', 'milk', 'eggs'],\n    chefRecommended: true,\n    available: true,\n    sortOrder: 2,\n    image: {\n      src: '/menu/desserts/chocolate-lava-cake.jpg',\n      alt: 'Chocolate lava cake with ice cream',\n      width: 600,\n      height: 400,\n    },\n    prepTime: 15,\n  },\n  {\n    id: 'creme-brulee',\n    name: 'Crème Brûlée',\n    description: 'Classic French vanilla custard with a caramelized sugar crust. Served with fresh seasonal berries.',\n    shortDescription: 'Vanilla custard with caramelized sugar',\n    price: createPrice(1095),\n    category: 'desserts',\n    menuTypes: ['dinner'],\n    dietaryTags: ['vegetarian', 'gluten-free'],\n    allergens: ['milk', 'eggs'],\n    available: true,\n    sortOrder: 3,\n    prepTime: 5,\n  },\n\n  // Beverages\n  {\n    id: 'fresh-lemonade',\n    name: 'Fresh-Squeezed Lemonade',\n    description: 'House-made lemonade with fresh lemons and a hint of mint.',\n    shortDescription: 'House-made with fresh lemons',\n    price: createPrice(495),\n    category: 'beverages',\n    menuTypes: ['lunch', 'dinner', 'brunch'],\n    dietaryTags: ['vegetarian', 'vegan', 'gluten-free'],\n    allergens: [],\n    available: true,\n    sortOrder: 1,\n    prepTime: 3,\n  },\n  {\n    id: 'iced-tea',\n    name: 'Southern Sweet Iced Tea',\n    description: 'Classic Southern-style sweet tea, brewed fresh daily.',\n    shortDescription: 'Fresh-brewed sweet tea',\n    price: createPrice(395),\n    category: 'beverages',\n    menuTypes: ['lunch', 'dinner', 'brunch'],\n    dietaryTags: ['vegetarian', 'vegan', 'gluten-free'],\n    allergens: [],\n    available: true,\n    sortOrder: 2,\n    prepTime: 2,\n  },\n\n  // Kids Menu\n  {\n    id: 'kids-mac-cheese',\n    name: \"Kids' Mac & Cheese\",\n    description: 'Creamy macaroni and cheese made with real cheddar. Includes a side of fruit or vegetables.',\n    shortDescription: 'Creamy mac & cheese with fruit',\n    price: createPrice(895),\n    category: 'kids',\n    menuTypes: ['lunch', 'dinner', 'kids'],\n    dietaryTags: ['vegetarian'],\n    allergens: ['wheat', 'milk'],\n    available: true,\n    sortOrder: 1,\n    prepTime: 10,\n  },\n  {\n    id: 'kids-chicken-tenders',\n    name: \"Kids' Chicken Tenders\",\n    description: 'Crispy chicken tenders served with your choice of dipping sauce and seasoned fries.',\n    shortDescription: 'Crispy chicken tenders with fries',\n    price: createPrice(995),\n    category: 'kids',\n    menuTypes: ['lunch', 'dinner', 'kids'],\n    dietaryTags: [],\n    allergens: ['wheat', 'eggs'],\n    preparationStyle: 'fried',\n    available: true,\n    sortOrder: 2,\n    prepTime: 12,\n  },\n\n  // Brunch Items\n  {\n    id: 'eggs-benedict',\n    name: 'Eggs Benedict',\n    description: 'Two poached eggs on toasted English muffins with Canadian bacon and hollandaise sauce. Served with breakfast potatoes.',\n    shortDescription: 'Poached eggs with hollandaise',\n    price: createPrice(1695),\n    priceVariants: [\n      {\n        name: 'Classic',\n        price: createPrice(1695),\n        description: 'With Canadian bacon',\n        isDefault: true,\n      },\n      {\n        name: 'Florentine',\n        price: createPrice(1595),\n        description: 'With spinach (vegetarian)',\n      },\n      {\n        name: 'Salmon',\n        price: createPrice(1895),\n        description: 'With smoked salmon',\n      },\n    ],\n    category: 'main-courses',\n    menuTypes: ['brunch'],\n    dietaryTags: [],\n    allergens: ['wheat', 'eggs', 'milk'],\n    featured: true,\n    available: true,\n    sortOrder: 1,\n    image: {\n      src: '/menu/brunch/eggs-benedict.jpg',\n      alt: 'Eggs Benedict with hollandaise',\n      width: 600,\n      height: 400,\n    },\n    prepTime: 15,\n  },\n  {\n    id: 'avocado-toast',\n    name: 'Avocado Toast',\n    description: 'Smashed avocado on sourdough toast with cherry tomatoes, microgreens, everything bagel seasoning, and a drizzle of olive oil.',\n    shortDescription: 'Smashed avocado on sourdough',\n    price: createPrice(1295),\n    addOns: [\n      {\n        id: 'poached-egg',\n        name: 'Poached Egg',\n        price: createPrice(250),\n        description: 'Add a perfectly poached egg',\n        available: true,\n      },\n      {\n        id: 'smoked-salmon',\n        name: 'Smoked Salmon',\n        price: createPrice(595),\n        description: 'Add smoked Atlantic salmon',\n        available: true,\n      },\n    ],\n    category: 'main-courses',\n    menuTypes: ['brunch'],\n    dietaryTags: ['vegetarian', 'vegan', 'dairy-free'],\n    allergens: ['wheat'],\n    isNew: true,\n    available: true,\n    sortOrder: 2,\n    image: {\n      src: '/menu/brunch/avocado-toast.jpg',\n      alt: 'Avocado toast with toppings',\n      width: 600,\n      height: 400,\n    },\n    prepTime: 10,\n  },\n];\n\n// ============================================================================\n// Helper Functions\n// ============================================================================\n\n/**\n * Get menu items by menu type\n */\nexport function getMenuItemsByType(type: MenuType): MenuItem[] {\n  return MENU_ITEMS.filter((item) => item.menuTypes.includes(type) && item.available !== false);\n}\n\n/**\n * Get menu items by category\n */\nexport function getMenuItemsByCategory(category: MenuCategory): MenuItem[] {\n  return MENU_ITEMS.filter((item) => item.category === category && item.available !== false);\n}\n\n/**\n * Get featured menu items\n */\nexport function getFeaturedItems(): MenuItem[] {\n  return MENU_ITEMS.filter((item) => item.featured && item.available !== false);\n}\n\n/**\n * Get chef recommended items\n */\nexport function getChefRecommendedItems(): MenuItem[] {\n  return MENU_ITEMS.filter((item) => item.chefRecommended && item.available !== false);\n}\n\n/**\n * Get items by dietary tag\n */\nexport function getItemsByDietaryTag(tag: import('../types/menu').DietaryTag): MenuItem[] {\n  return MENU_ITEMS.filter(\n    (item) => item.dietaryTags?.includes(tag) && item.available !== false\n  );\n}\n\n/**\n * Get items without specific allergens\n */\nexport function getItemsWithoutAllergens(\n  allergens: import('../types/menu').AllergenTag[]\n): MenuItem[] {\n  return MENU_ITEMS.filter((item) => {\n    if (!item.allergens || item.allergens.length === 0) return true;\n    return !item.allergens.some((allergen) => allergens.includes(allergen));\n  }).filter((item) => item.available !== false);\n}\n\n/**\n * Search menu items by name or description\n */\nexport function searchMenuItems(query: string): MenuItem[] {\n  const lowerQuery = query.toLowerCase();\n  return MENU_ITEMS.filter(\n    (item) =>\n      (item.name.toLowerCase().includes(lowerQuery) ||\n        item.description.toLowerCase().includes(lowerQuery)) &&\n      item.available !== false\n  );\n}\n\n/**\n * Get a single menu item by ID\n */\nexport function getMenuItemById(id: string): MenuItem | undefined {\n  return MENU_ITEMS.find((item) => item.id === id);\n}\n\n// ============================================================================\n// Menu Section Builders\n// ============================================================================\n\n/**\n * Build menu sections for a specific menu type\n */\nexport function buildMenuSections(type: MenuType): MenuSection[] {\n  const items = getMenuItemsByType(type);\n  const categoryOrder: MenuCategory[] = [\n    'appetizers',\n    'soups-salads',\n    'main-courses',\n    'seafood',\n    'steaks-grills',\n    'pasta',\n    'sandwiches',\n    'sides',\n    'desserts',\n    'beverages',\n    'kids',\n  ];\n\n  const sections: MenuSection[] = [];\n\n  for (const category of categoryOrder) {\n    const categoryItems = items.filter((item) => item.category === category);\n    if (categoryItems.length > 0) {\n      sections.push({\n        category,\n        title: getCategoryTitle(category),\n        description: getCategoryDescription(category),\n        items: categoryItems.sort((a, b) => (a.sortOrder || 0) - (b.sortOrder || 0)),\n        sortOrder: categoryOrder.indexOf(category),\n        visible: true,\n      });\n    }\n  }\n\n  return sections;\n}\n\n/**\n * Get display title for a category\n */\nfunction getCategoryTitle(category: MenuCategory): string {\n  const titles: Record<MenuCategory, string> = {\n    appetizers: 'Appetizers',\n    'soups-salads': 'Soups & Salads',\n    'main-courses': 'Main Courses',\n    seafood: 'Seafood',\n    'steaks-grills': 'Steaks & Grills',\n    pasta: 'Pasta',\n    sandwiches: 'Sandwiches',\n    sides: 'Sides',\n    desserts: 'Desserts',\n    beverages: 'Beverages',\n    cocktails: 'Cocktails',\n    wine: 'Wine',\n    beer: 'Beer',\n    kids: 'Kids Menu',\n  };\n  return titles[category];\n}\n\n/**\n * Get description for a category\n */\nfunction getCategoryDescription(category: MenuCategory): string {\n  const descriptions: Record<MenuCategory, string> = {\n    appetizers: 'Start your meal with these delicious bites',\n    'soups-salads': 'Fresh and flavorful options',\n    'main-courses': 'Signature entrees crafted with care',\n    seafood: 'Fresh catch from the finest sources',\n    'steaks-grills': 'Premium cuts grilled to perfection',\n    pasta: 'House-made pasta dishes',\n    sandwiches: 'Handcrafted sandwiches and burgers',\n    sides: 'Perfect accompaniments',\n    desserts: 'Sweet endings to your meal',\n    beverages: 'Refreshing drinks and more',\n    cocktails: 'Craft cocktails and classics',\n    wine: 'Curated wine selection',\n    beer: 'Local and imported beers',\n    kids: 'Kid-friendly favorites',\n  };\n  return descriptions[category];\n}\n\n// ============================================================================\n// Pre-built Menus\n// ============================================================================\n\n/**\n * Complete Lunch Menu\n */\nexport const LUNCH_MENU: Menu = {\n  id: 'lunch-menu',\n  type: 'lunch',\n  name: 'Lunch Menu',\n  description: 'Join us for a delightful midday meal featuring fresh salads, hearty sandwiches, and lighter entrees.',\n  sections: buildMenuSections('lunch'),\n  availableHours: '11:00 AM - 3:00 PM',\n  availableDays: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],\n  active: true,\n  updatedAt: new Date().toISOString(),\n};\n\n/**\n * Complete Dinner Menu\n */\nexport const DINNER_MENU: Menu = {\n  id: 'dinner-menu',\n  type: 'dinner',\n  name: 'Dinner Menu',\n  description: 'Experience an evening of culinary excellence with our signature dishes and premium selections.',\n  sections: buildMenuSections('dinner'),\n  availableHours: '5:00 PM - 10:00 PM',\n  availableDays: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],\n  active: true,\n  updatedAt: new Date().toISOString(),\n};\n\n/**\n * Weekend Brunch Menu\n */\nexport const BRUNCH_MENU: Menu = {\n  id: 'brunch-menu',\n  type: 'brunch',\n  name: 'Weekend Brunch',\n  description: 'Enjoy a leisurely weekend brunch with classic favorites and creative twists.',\n  sections: buildMenuSections('brunch'),\n  availableHours: '9:00 AM - 2:00 PM',\n  availableDays: ['Saturday', 'Sunday'],\n  active: true,\n  updatedAt: new Date().toISOString(),\n};\n\n/**\n * Kids Menu\n */\nexport const KIDS_MENU: Menu = {\n  id: 'kids-menu',\n  type: 'kids',\n  name: 'Kids Menu',\n  description: 'Kid-friendly favorites for our younger guests (12 and under).',\n  sections: buildMenuSections('kids'),\n  availableHours: '11:00 AM - 9:00 PM',\n  availableDays: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],\n  active: true,\n  updatedAt: new Date().toISOString(),\n};\n\n/**\n * All available menus\n */\nexport const ALL_MENUS: Menu[] = [LUNCH_MENU, DINNER_MENU, BRUNCH_MENU, KIDS_MENU];\n\n// ============================================================================\n// Menu Configuration\n// ============================================================================\n\n/**\n * Menu display configuration\n */\nexport const MENU_CONFIG = {\n  /** Default menu to display */\n  defaultMenuType: 'dinner' as MenuType,\n  /** Show prices with items */\n  showPrices: true,\n  /** Show dietary tags */\n  showDietaryTags: true,\n  /** Show allergen information */\n  showAllergenInfo: true,\n  /** Show images where available */\n  showImages: true,\n  /** Enable filtering by category */\n  enableCategoryFilter: true,\n  /** Enable dietary filter */\n  enableDietaryFilter: true,\n  /** Enable search */\n  enableSearch: true,\n  /** Items per page for pagination (0 = no pagination) */\n  itemsPerPage: 0,\n  /** Currency symbol */\n  currencySymbol: '$',\n  /** Currency code */\n  currencyCode: 'USD',\n};\n"
}

🔧 Tool: TodoWrite
Input: {
  "todos": [
    {
      "content": "Create TypeScript interfaces for menu data structure",
      "status": "completed",
      "activeForm": "Creating TypeScript interfaces for menu data"
    },
    {
      "content": "Create JSON schema for menu validation",
      "status": "completed",
      "activeForm": "Creating JSON schema for menu validation"
    },
    {
      "content": "Create menu configuration file with sample data",
      "status": "completed",
      "activeForm": "Creating menu configuration with sample data"
    },
    {
      "content": "Export types from central index",
      "status": "in_progress",
      "activeForm": "Exporting types from central index"
    },
    {
      "content": "Verify implementation with Playwright tests",
      "status": "pending",
      "activeForm": "Verifying with Playwright tests"
    }
  ]
}
Now let me update the central types index to export the menu types:

🔧 Tool: Edit
Input: {
  "file_path": "C:\\Users\\James\\Repos\\restaurant-business\\src\\types\\index.ts",
  "old_string": "export type {\n  ConsentCategory,\n  ConsentStatus,\n  ConsentPreferences,\n  ConsentState,\n  ConsentBannerConfig,\n  GA4Config,\n  GA4ConsentMode,\n  GA4StandardEvent,\n  CustomEventName,\n  AnalyticsEvent,\n  BaseEventParams,\n  PageViewParams,\n  ClickEventParams,\n  FormEventParams,\n  ScrollEventParams,\n  CTAEventParams,\n  LeadEventParams,\n  EventParams,\n  UserProperties,\n  AnalyticsService,\n  WebVitals,\n  PerformanceEntry,\n} from './analytics';",
  "new_string": "export type {\n  ConsentCategory,\n  ConsentStatus,\n  ConsentPreferences,\n  ConsentState,\n  ConsentBannerConfig,\n  GA4Config,\n  GA4ConsentMode,\n  GA4StandardEvent,\n  CustomEventName,\n  AnalyticsEvent,\n  BaseEventParams,\n  PageViewParams,\n  ClickEventParams,\n  FormEventParams,\n  ScrollEventParams,\n  CTAEventParams,\n  LeadEventParams,\n  EventParams,\n  UserProperties,\n  AnalyticsService,\n  WebVitals,\n  PerformanceEntry,\n} from './analytics';\n\nexport type {\n  MenuType,\n  MenuCategory,\n  DietaryTag,\n  AllergenTag,\n  SpiceLevel,\n  PreparationStyle,\n  MenuTypeOption,\n  MenuCategoryOption,\n  DietaryTagOption,\n  AllergenTagOption,\n  MenuItemImage,\n  MenuItemPrice,\n  MenuItemPriceVariant,\n  MenuItemAddOn,\n  NutritionalInfo,\n  MenuItem,\n  MenuSection,\n  Menu,\n  MenuItemCardProps,\n  MenuSectionProps,\n  MenuProps,\n  MenuFilterOptions,\n} from './menu';\n\nexport {\n  MENU_TYPE_OPTIONS,\n  MENU_CATEGORY_OPTIONS,\n  DIETARY_TAG_OPTIONS,\n  ALLERGEN_TAG_OPTIONS,\n  SPICE_LEVEL_OPTIONS,\n  DEFAULT_CURRENCY,\n  createPrice,\n  formatPrice,\n} from './menu';"
}

🔧 Tool: TodoWrite
Input: {
  "todos": [
    {
      "content": "Create TypeScript interfaces for menu data structure",
      "status": "completed",
      "activeForm": "Creating TypeScript interfaces for menu data"
    },
    {
      "content": "Create JSON schema for menu validation",
      "status": "completed",
      "activeForm": "Creating JSON schema for menu validation"
    },
    {
      "content": "Create menu configuration file with sample data",
      "status": "completed",
      "activeForm": "Creating menu configuration with sample data"
    },
    {
      "content": "Export types from central index",
      "status": "completed",
      "activeForm": "Exporting types from central index"
    },
    {
      "content": "Verify implementation with Playwright tests",
      "status": "in_progress",
      "activeForm": "Verifying with Playwright tests"
    }
  ]
}
Now let me verify that the TypeScript compiles correctly and create a Playwright test to verify the implementation:

🔧 Tool: Bash
Input: {
  "command": "npx tsc --noEmit 2>&1 | head -50",
  "description": "Check TypeScript compilation"
}
This error is unrelated to our changes. Let me verify our specific files compile correctly:

🔧 Tool: Bash
Input: {
  "command": "cd C:/Users/James/Repos/restaurant-business && npx tsc --noEmit src/types/menu.ts src/config/menu.config.ts 2>&1",
  "description": "Check menu files compilation"
}
The files compile without errors. Now let me create a Playwright test to verify the implementation:

🔧 Tool: Write
Input: {
  "file_path": "C:\\Users\\James\\Repos\\restaurant-business\\tests\\menu-data-structure.spec.ts",
  "content": "/**\n * Temporary Playwright test to verify menu data structure implementation\n * This test validates the TypeScript interfaces, JSON schema, and configuration\n */\n\nimport { test, expect } from '@playwright/test';\nimport * as fs from 'fs';\nimport * as path from 'path';\n\n// Import types and data\nimport type {\n  MenuItem,\n  Menu,\n  MenuSection,\n  MenuType,\n  MenuCategory,\n  DietaryTag,\n  AllergenTag,\n  MenuItemPrice,\n} from '../src/types/menu';\n\nimport {\n  MENU_TYPE_OPTIONS,\n  MENU_CATEGORY_OPTIONS,\n  DIETARY_TAG_OPTIONS,\n  ALLERGEN_TAG_OPTIONS,\n  SPICE_LEVEL_OPTIONS,\n  createPrice,\n  formatPrice,\n} from '../src/types/menu';\n\nimport {\n  MENU_ITEMS,\n  LUNCH_MENU,\n  DINNER_MENU,\n  BRUNCH_MENU,\n  KIDS_MENU,\n  ALL_MENUS,\n  MENU_CONFIG,\n  getMenuItemsByType,\n  getMenuItemsByCategory,\n  getFeaturedItems,\n  getChefRecommendedItems,\n  getItemsByDietaryTag,\n  getItemsWithoutAllergens,\n  searchMenuItems,\n  getMenuItemById,\n  buildMenuSections,\n} from '../src/config/menu.config';\n\ntest.describe('Menu Data Structure Implementation', () => {\n  test.describe('TypeScript Types and Interfaces', () => {\n    test('Menu items have required fields', () => {\n      MENU_ITEMS.forEach((item) => {\n        // Required fields\n        expect(item.id).toBeTruthy();\n        expect(typeof item.id).toBe('string');\n        expect(item.name).toBeTruthy();\n        expect(typeof item.name).toBe('string');\n        expect(item.description).toBeTruthy();\n        expect(typeof item.description).toBe('string');\n        expect(item.price).toBeDefined();\n        expect(item.category).toBeTruthy();\n        expect(item.menuTypes).toBeDefined();\n        expect(Array.isArray(item.menuTypes)).toBe(true);\n        expect(item.menuTypes.length).toBeGreaterThan(0);\n      });\n    });\n\n    test('Menu item prices have correct structure', () => {\n      MENU_ITEMS.forEach((item) => {\n        const price = item.price;\n        expect(typeof price.amount).toBe('number');\n        expect(price.amount).toBeGreaterThanOrEqual(0);\n        expect(typeof price.currency).toBe('string');\n        expect(price.currency).toMatch(/^[A-Z]{3}$/);\n        expect(typeof price.display).toBe('string');\n        expect(price.display).toBeTruthy();\n      });\n    });\n\n    test('Menu item IDs are unique', () => {\n      const ids = MENU_ITEMS.map((item) => item.id);\n      const uniqueIds = [...new Set(ids)];\n      expect(ids.length).toBe(uniqueIds.length);\n    });\n\n    test('Menu item IDs follow kebab-case pattern', () => {\n      MENU_ITEMS.forEach((item) => {\n        expect(item.id).toMatch(/^[a-z0-9-]+$/);\n      });\n    });\n\n    test('Dietary tags are valid values', () => {\n      const validTags = DIETARY_TAG_OPTIONS.map((opt) => opt.value);\n      MENU_ITEMS.forEach((item) => {\n        if (item.dietaryTags) {\n          item.dietaryTags.forEach((tag) => {\n            expect(validTags).toContain(tag);\n          });\n        }\n      });\n    });\n\n    test('Allergen tags are valid values', () => {\n      const validTags = ALLERGEN_TAG_OPTIONS.map((opt) => opt.value);\n      MENU_ITEMS.forEach((item) => {\n        if (item.allergens) {\n          item.allergens.forEach((allergen) => {\n            expect(validTags).toContain(allergen);\n          });\n        }\n      });\n    });\n\n    test('Menu categories are valid values', () => {\n      const validCategories = MENU_CATEGORY_OPTIONS.map((opt) => opt.value);\n      MENU_ITEMS.forEach((item) => {\n        expect(validCategories).toContain(item.category);\n      });\n    });\n\n    test('Menu types are valid values', () => {\n      const validTypes = MENU_TYPE_OPTIONS.map((opt) => opt.value);\n      MENU_ITEMS.forEach((item) => {\n        item.menuTypes.forEach((type) => {\n          expect(validTypes).toContain(type);\n        });\n      });\n    });\n  });\n\n  test.describe('Price Utilities', () => {\n    test('createPrice generates correct structure', () => {\n      const price = createPrice(1999);\n      expect(price.amount).toBe(1999);\n      expect(price.currency).toBe('USD');\n      expect(price.display).toBe('$19.99');\n    });\n\n    test('createPrice handles different currencies', () => {\n      const price = createPrice(1500, 'EUR');\n      expect(price.amount).toBe(1500);\n      expect(price.currency).toBe('EUR');\n    });\n\n    test('createPrice handles zero price', () => {\n      const price = createPrice(0);\n      expect(price.amount).toBe(0);\n      expect(price.display).toBe('$0.00');\n    });\n\n    test('formatPrice formats correctly', () => {\n      expect(formatPrice(1999)).toBe('$19.99');\n      expect(formatPrice(500)).toBe('$5.00');\n      expect(formatPrice(0)).toBe('$0.00');\n      expect(formatPrice(10000)).toBe('$100.00');\n    });\n  });\n\n  test.describe('Menu Configuration Options', () => {\n    test('Menu type options are complete', () => {\n      expect(MENU_TYPE_OPTIONS.length).toBeGreaterThan(0);\n      MENU_TYPE_OPTIONS.forEach((option) => {\n        expect(option.value).toBeTruthy();\n        expect(option.label).toBeTruthy();\n      });\n    });\n\n    test('Menu category options are complete', () => {\n      expect(MENU_CATEGORY_OPTIONS.length).toBeGreaterThan(0);\n      MENU_CATEGORY_OPTIONS.forEach((option) => {\n        expect(option.value).toBeTruthy();\n        expect(option.label).toBeTruthy();\n      });\n    });\n\n    test('Dietary tag options have abbreviations', () => {\n      DIETARY_TAG_OPTIONS.forEach((option) => {\n        expect(option.value).toBeTruthy();\n        expect(option.label).toBeTruthy();\n        expect(option.abbreviation).toBeTruthy();\n      });\n    });\n\n    test('Allergen tag options have severity levels', () => {\n      ALLERGEN_TAG_OPTIONS.forEach((option) => {\n        expect(option.value).toBeTruthy();\n        expect(option.label).toBeTruthy();\n        expect(['warning', 'danger']).toContain(option.severity);\n      });\n    });\n\n    test('Spice level options are complete', () => {\n      expect(SPICE_LEVEL_OPTIONS.length).toBe(5);\n      const levels = SPICE_LEVEL_OPTIONS.map((opt) => opt.value);\n      expect(levels).toContain('none');\n      expect(levels).toContain('mild');\n      expect(levels).toContain('medium');\n      expect(levels).toContain('hot');\n      expect(levels).toContain('extra-hot');\n    });\n  });\n\n  test.describe('Menu Helper Functions', () => {\n    test('getMenuItemsByType returns correct items', () => {\n      const lunchItems = getMenuItemsByType('lunch');\n      expect(lunchItems.length).toBeGreaterThan(0);\n      lunchItems.forEach((item) => {\n        expect(item.menuTypes).toContain('lunch');\n      });\n\n      const dinnerItems = getMenuItemsByType('dinner');\n      expect(dinnerItems.length).toBeGreaterThan(0);\n      dinnerItems.forEach((item) => {\n        expect(item.menuTypes).toContain('dinner');\n      });\n    });\n\n    test('getMenuItemsByCategory returns correct items', () => {\n      const appetizers = getMenuItemsByCategory('appetizers');\n      expect(appetizers.length).toBeGreaterThan(0);\n      appetizers.forEach((item) => {\n        expect(item.category).toBe('appetizers');\n      });\n    });\n\n    test('getFeaturedItems returns only featured items', () => {\n      const featured = getFeaturedItems();\n      expect(featured.length).toBeGreaterThan(0);\n      featured.forEach((item) => {\n        expect(item.featured).toBe(true);\n      });\n    });\n\n    test('getChefRecommendedItems returns only chef recommended items', () => {\n      const recommended = getChefRecommendedItems();\n      expect(recommended.length).toBeGreaterThan(0);\n      recommended.forEach((item) => {\n        expect(item.chefRecommended).toBe(true);\n      });\n    });\n\n    test('getItemsByDietaryTag returns correct items', () => {\n      const vegetarian = getItemsByDietaryTag('vegetarian');\n      expect(vegetarian.length).toBeGreaterThan(0);\n      vegetarian.forEach((item) => {\n        expect(item.dietaryTags).toContain('vegetarian');\n      });\n    });\n\n    test('getItemsWithoutAllergens filters correctly', () => {\n      const noShellfish = getItemsWithoutAllergens(['shellfish']);\n      noShellfish.forEach((item) => {\n        if (item.allergens) {\n          expect(item.allergens).not.toContain('shellfish');\n        }\n      });\n    });\n\n    test('searchMenuItems finds items by name', () => {\n      const results = searchMenuItems('salmon');\n      expect(results.length).toBeGreaterThan(0);\n      results.forEach((item) => {\n        const nameOrDescContains =\n          item.name.toLowerCase().includes('salmon') ||\n          item.description.toLowerCase().includes('salmon');\n        expect(nameOrDescContains).toBe(true);\n      });\n    });\n\n    test('getMenuItemById returns correct item', () => {\n      const item = getMenuItemById('crispy-calamari');\n      expect(item).toBeDefined();\n      expect(item?.name).toBe('Crispy Calamari');\n    });\n\n    test('getMenuItemById returns undefined for non-existent item', () => {\n      const item = getMenuItemById('non-existent-item');\n      expect(item).toBeUndefined();\n    });\n\n    test('buildMenuSections creates correct structure', () => {\n      const sections = buildMenuSections('dinner');\n      expect(sections.length).toBeGreaterThan(0);\n      sections.forEach((section) => {\n        expect(section.category).toBeTruthy();\n        expect(section.title).toBeTruthy();\n        expect(Array.isArray(section.items)).toBe(true);\n        expect(section.items.length).toBeGreaterThan(0);\n      });\n    });\n  });\n\n  test.describe('Pre-built Menus', () => {\n    test('Lunch menu is properly configured', () => {\n      expect(LUNCH_MENU.id).toBe('lunch-menu');\n      expect(LUNCH_MENU.type).toBe('lunch');\n      expect(LUNCH_MENU.name).toBeTruthy();\n      expect(LUNCH_MENU.sections.length).toBeGreaterThan(0);\n      expect(LUNCH_MENU.availableHours).toBeTruthy();\n      expect(LUNCH_MENU.active).toBe(true);\n    });\n\n    test('Dinner menu is properly configured', () => {\n      expect(DINNER_MENU.id).toBe('dinner-menu');\n      expect(DINNER_MENU.type).toBe('dinner');\n      expect(DINNER_MENU.name).toBeTruthy();\n      expect(DINNER_MENU.sections.length).toBeGreaterThan(0);\n      expect(DINNER_MENU.availableHours).toBeTruthy();\n      expect(DINNER_MENU.active).toBe(true);\n    });\n\n    test('Brunch menu is properly configured', () => {\n      expect(BRUNCH_MENU.id).toBe('brunch-menu');\n      expect(BRUNCH_MENU.type).toBe('brunch');\n      expect(BRUNCH_MENU.name).toBeTruthy();\n      expect(BRUNCH_MENU.sections.length).toBeGreaterThan(0);\n      expect(BRUNCH_MENU.availableDays).toContain('Saturday');\n      expect(BRUNCH_MENU.availableDays).toContain('Sunday');\n      expect(BRUNCH_MENU.active).toBe(true);\n    });\n\n    test('Kids menu is properly configured', () => {\n      expect(KIDS_MENU.id).toBe('kids-menu');\n      expect(KIDS_MENU.type).toBe('kids');\n      expect(KIDS_MENU.name).toBeTruthy();\n      expect(KIDS_MENU.active).toBe(true);\n    });\n\n    test('ALL_MENUS contains all menus', () => {\n      expect(ALL_MENUS.length).toBe(4);\n      const menuIds = ALL_MENUS.map((m) => m.id);\n      expect(menuIds).toContain('lunch-menu');\n      expect(menuIds).toContain('dinner-menu');\n      expect(menuIds).toContain('brunch-menu');\n      expect(menuIds).toContain('kids-menu');\n    });\n\n    test('Menu sections contain items matching their category', () => {\n      ALL_MENUS.forEach((menu) => {\n        menu.sections.forEach((section) => {\n          section.items.forEach((item) => {\n            expect(item.category).toBe(section.category);\n          });\n        });\n      });\n    });\n  });\n\n  test.describe('Menu Configuration', () => {\n    test('MENU_CONFIG has required settings', () => {\n      expect(MENU_CONFIG.defaultMenuType).toBeTruthy();\n      expect(typeof MENU_CONFIG.showPrices).toBe('boolean');\n      expect(typeof MENU_CONFIG.showDietaryTags).toBe('boolean');\n      expect(typeof MENU_CONFIG.showAllergenInfo).toBe('boolean');\n      expect(typeof MENU_CONFIG.showImages).toBe('boolean');\n      expect(MENU_CONFIG.currencySymbol).toBe('$');\n      expect(MENU_CONFIG.currencyCode).toBe('USD');\n    });\n  });\n\n  test.describe('JSON Schema', () => {\n    test('JSON schema file exists and is valid JSON', () => {\n      const schemaPath = path.join(__dirname, '../src/schemas/menu.schema.json');\n      expect(fs.existsSync(schemaPath)).toBe(true);\n\n      const schemaContent = fs.readFileSync(schemaPath, 'utf-8');\n      const schema = JSON.parse(schemaContent);\n\n      expect(schema.$schema).toBe('http://json-schema.org/draft-07/schema#');\n      expect(schema.title).toBe('Restaurant Menu Schema');\n      expect(schema.definitions).toBeDefined();\n    });\n\n    test('JSON schema has all required definitions', () => {\n      const schemaPath = path.join(__dirname, '../src/schemas/menu.schema.json');\n      const schemaContent = fs.readFileSync(schemaPath, 'utf-8');\n      const schema = JSON.parse(schemaContent);\n\n      const requiredDefinitions = [\n        'MenuType',\n        'MenuCategory',\n        'DietaryTag',\n        'AllergenTag',\n        'SpiceLevel',\n        'PreparationStyle',\n        'MenuItemImage',\n        'MenuItemPrice',\n        'MenuItemPriceVariant',\n        'MenuItemAddOn',\n        'NutritionalInfo',\n        'MenuItem',\n        'MenuSection',\n        'Menu',\n      ];\n\n      requiredDefinitions.forEach((def) => {\n        expect(schema.definitions[def]).toBeDefined();\n      });\n    });\n\n    test('JSON schema MenuItem definition matches TypeScript interface', () => {\n      const schemaPath = path.join(__dirname, '../src/schemas/menu.schema.json');\n      const schemaContent = fs.readFileSync(schemaPath, 'utf-8');\n      const schema = JSON.parse(schemaContent);\n\n      const menuItemDef = schema.definitions.MenuItem;\n      const requiredFields = ['id', 'name', 'description', 'price', 'category', 'menuTypes'];\n\n      expect(menuItemDef.required).toEqual(expect.arrayContaining(requiredFields));\n    });\n  });\n\n  test.describe('Sample Data Quality', () => {\n    test('Has sufficient variety of menu items', () => {\n      expect(MENU_ITEMS.length).toBeGreaterThanOrEqual(10);\n    });\n\n    test('Has items in multiple categories', () => {\n      const categories = [...new Set(MENU_ITEMS.map((item) => item.category))];\n      expect(categories.length).toBeGreaterThanOrEqual(5);\n    });\n\n    test('Has items with different menu types', () => {\n      const types = new Set<MenuType>();\n      MENU_ITEMS.forEach((item) => {\n        item.menuTypes.forEach((type) => types.add(type));\n      });\n      expect(types.size).toBeGreaterThanOrEqual(3);\n    });\n\n    test('Has items with dietary tags', () => {\n      const itemsWithTags = MENU_ITEMS.filter(\n        (item) => item.dietaryTags && item.dietaryTags.length > 0\n      );\n      expect(itemsWithTags.length).toBeGreaterThan(0);\n    });\n\n    test('Has items with allergen information', () => {\n      const itemsWithAllergens = MENU_ITEMS.filter(\n        (item) => item.allergens && item.allergens.length > 0\n      );\n      expect(itemsWithAllergens.length).toBeGreaterThan(0);\n    });\n\n    test('Has items with price variants', () => {\n      const itemsWithVariants = MENU_ITEMS.filter(\n        (item) => item.priceVariants && item.priceVariants.length > 0\n      );\n      expect(itemsWithVariants.length).toBeGreaterThan(0);\n    });\n\n    test('Has items with add-ons', () => {\n      const itemsWithAddOns = MENU_ITEMS.filter(\n        (item) => item.addOns && item.addOns.length > 0\n      );\n      expect(itemsWithAddOns.length).toBeGreaterThan(0);\n    });\n\n    test('Has featured items', () => {\n      const featuredItems = MENU_ITEMS.filter((item) => item.featured);\n      expect(featuredItems.length).toBeGreaterThan(0);\n    });\n\n    test('Has chef recommended items', () => {\n      const recommendedItems = MENU_ITEMS.filter((item) => item.chefRecommended);\n      expect(recommendedItems.length).toBeGreaterThan(0);\n    });\n\n    test('Has items with images', () => {\n      const itemsWithImages = MENU_ITEMS.filter((item) => item.image);\n      expect(itemsWithImages.length).toBeGreaterThan(0);\n    });\n\n    test('Has vegetarian options', () => {\n      const vegetarianItems = MENU_ITEMS.filter(\n        (item) => item.dietaryTags?.includes('vegetarian')\n      );\n      expect(vegetarianItems.length).toBeGreaterThan(0);\n    });\n\n    test('Has gluten-free options', () => {\n      const gfItems = MENU_ITEMS.filter(\n        (item) => item.dietaryTags?.includes('gluten-free')\n      );\n      expect(gfItems.length).toBeGreaterThan(0);\n    });\n  });\n});\n"
}
Now let me run the Playwright test to verify the implementation:

🔧 Tool: Bash
Input: {
  "command": "cd C:/Users/James/Repos/restaurant-business && npx playwright test tests/menu-data-structure.spec.ts --reporter=list 2>&1",
  "description": "Run Playwright verification test",
  "timeout": 120000
}
The tests are mostly passing. The 3 failing tests are due to ESM modules not having `__dirname`. Let me fix the test file to handle ESM:

🔧 Tool: Read
Input: {
  "file_path": "C:\\Users\\James\\Repos\\restaurant-business\\tests\\menu-data-structure.spec.ts",
  "offset": 1,
  "limit": 20
}

🔧 Tool: Edit
Input: {
  "file_path": "C:\\Users\\James\\Repos\\restaurant-business\\tests\\menu-data-structure.spec.ts",
  "old_string": "/**\n * Temporary Playwright test to verify menu data structure implementation\n * This test validates the TypeScript interfaces, JSON schema, and configuration\n */\n\nimport { test, expect } from '@playwright/test';\nimport * as fs from 'fs';\nimport * as path from 'path';",
  "new_string": "/**\n * Temporary Playwright test to verify menu data structure implementation\n * This test validates the TypeScript interfaces, JSON schema, and configuration\n */\n\nimport { test, expect } from '@playwright/test';\nimport * as fs from 'fs';\nimport * as path from 'path';\nimport { fileURLToPath } from 'url';\n\n// ESM compatibility for __dirname\nconst __filename = fileURLToPath(import.meta.url);\nconst __dirname = path.dirname(__filename);"
}
Now let me run the tests again:

🔧 Tool: Bash
Input: {
  "command": "cd C:/Users/James/Repos/restaurant-business && npx playwright test tests/menu-data-structure.spec.ts --reporter=list 2>&1",
  "description": "Run Playwright verification test",
  "timeout": 120000
}
All 49 tests passed! Now let me delete the test file as requested:

🔧 Tool: Bash
Input: {
  "command": "rm C:/Users/James/Repos/restaurant-business/tests/menu-data-structure.spec.ts",
  "description": "Delete temporary verification test"
}

🔧 Tool: TodoWrite
Input: {
  "todos": [
    {
      "content": "Create TypeScript interfaces for menu data structure",
      "status": "completed",
      "activeForm": "Creating TypeScript interfaces for menu data"
    },
    {
      "content": "Create JSON schema for menu validation",
      "status": "completed",
      "activeForm": "Creating JSON schema for menu validation"
    },
    {
      "content": "Create menu configuration file with sample data",
      "status": "completed",
      "activeForm": "Creating menu configuration with sample data"
    },
    {
      "content": "Export types from central index",
      "status": "completed",
      "activeForm": "Exporting types from central index"
    },
    {
      "content": "Verify implementation with Playwright tests",
      "status": "completed",
      "activeForm": "Verifying with Playwright tests"
    }
  ]
}
<summary>
## Summary: Create TypeScript interfaces and JSON schema for menu data

### Changes Implemented
- Created comprehensive TypeScript interfaces and types for restaurant menu data structure
- Created JSON schema for menu validation following JSON Schema draft-07
- Created menu configuration file with sample menu items and helper functions
- Exported all types from the central types index for convenient importing
- Supports multiple menu types (lunch, dinner, brunch, dessert, drinks, kids)

### Files Modified
- **`src/types/menu.ts`** (NEW) - TypeScript interfaces including:
  - Type unions: `MenuType`, `MenuCategory`, `DietaryTag`, `AllergenTag`, `SpiceLevel`, `PreparationStyle`
  - Core interfaces: `MenuItem`, `MenuSection`, `Menu`, `MenuItemPrice`, `MenuItemPriceVariant`, `MenuItemAddOn`, `NutritionalInfo`, `MenuItemImage`
  - Component props: `MenuItemCardProps`, `MenuSectionProps`, `MenuProps`, `MenuFilterOptions`
  - UI options: `MenuTypeOption`, `MenuCategoryOption`, `DietaryTagOption`, `AllergenTagOption`
  - Constants and helper functions: `createPrice()`, `formatPrice()`

- **`src/schemas/menu.schema.json`** (NEW) - JSON Schema for validation with all definitions matching TypeScript interfaces

- **`src/config/menu.config.ts`** (NEW) - Menu configuration with:
  - 25+ sample menu items across various categories
  - Helper functions: `getMenuItemsByType()`, `getMenuItemsByCategory()`, `getFeaturedItems()`, `getChefRecommendedItems()`, `getItemsByDietaryTag()`, `getItemsWithoutAllergens()`, `searchMenuItems()`, `getMenuItemById()`, `buildMenuSections()`
  - Pre-built menus: `LUNCH_MENU`, `DINNER_MENU`, `BRUNCH_MENU`, `KIDS_MENU`
  - Configuration object: `MENU_CONFIG`

- **`src/types/index.ts`** - Updated to export all menu types and constants

### Notes for Developer
- Prices are stored in cents (smallest currency unit) for precision - use `createPrice(1999)` to create a $19.99 price
- The JSON schema can be used for runtime validation of menu data from external sources
- Sample data includes items with price variants, add-ons, dietary tags, allergens, and nutritional info
- Helper functions filter out unavailable items by default
- Menu sections are automatically built from flat item array using `buildMenuSections()`
- All types follow existing codebase conventions (kebab-case IDs, BEM-style patterns)

### Verification Status
- Created a comprehensive Playwright test with 49 test cases covering:
  - TypeScript type validation (required fields, price structure, unique IDs, valid enum values)
  - Price utility functions (`createPrice`, `formatPrice`)
  - Configuration options (menu types, categories, dietary tags, allergens, spice levels)
  - Helper functions (filtering, searching, getting items by various criteria)
  - Pre-built menus structure and configuration
  - JSON schema validation (existence, structure, definitions)
  - Sample data quality (variety, completeness)
- All 49 tests passed successfully
- Test file deleted after verification as requested
</summary>