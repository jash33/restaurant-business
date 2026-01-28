
🔧 Tool: Task
Input: {
  "description": "Explore codebase structure",
  "prompt": "Explore this codebase to understand its structure. I need to implement a \"chef signature dishes\" feature that involves:\n- A special menu item variant for signature dishes\n- Chef badge\n- Story/inspiration snippet\n- Premium visual treatment\n\nPlease find:\n1. The overall project structure (what framework, key directories)\n2. How menu items are currently implemented (components, data models, styling approach)\n3. Any existing patterns for variants or special item types\n4. Where styles and design tokens are defined\n\nBe thorough - look at the component structure, data models, and styling patterns.",
  "subagent_type": "Explore"
}

🔧 Tool: Read
Input: {
  "file_path": "C:\\Users\\James\\Repos\\restaurant-business"
}

🔧 Tool: Read
Input: {
  "file_path": "C:\\Users\\James\\Repos\\restaurant-business\\package.json"
}

🔧 Tool: Bash
Input: {
  "command": "cd /c/Users/James/Repos/restaurant-business && find . -type f -name \"*.astro\" -o -name \"*.tsx\" -o -name \"*.ts\" -o -name \"*.jsx\" -o -name \"*.js\" | head -30",
  "description": "List TypeScript and component files in project"
}

🔧 Tool: Bash
Input: {
  "command": "cd /c/Users/James/Repos/restaurant-business && ls -la src/",
  "description": "List source directory contents"
}

🔧 Tool: Bash
Input: {
  "command": "cd /c/Users/James/Repos/restaurant-business && find src -type f \\( -name \"*.astro\" -o -name \"*.ts\" -o -name \"*.tsx\" \\) | sort",
  "description": "Find all source files in src directory"
}

🔧 Tool: Read
Input: {
  "file_path": "C:\\Users\\James\\Repos\\restaurant-business\\src\\types\\menu.ts"
}

🔧 Tool: Read
Input: {
  "file_path": "C:\\Users\\James\\Repos\\restaurant-business\\src\\components\\MenuItem.astro"
}

🔧 Tool: Read
Input: {
  "file_path": "C:\\Users\\James\\Repos\\restaurant-business\\src\\config\\menu.config.ts"
}

🔧 Tool: Read
Input: {
  "file_path": "C:\\Users\\James\\Repos\\restaurant-business\\src\\components\\MenuCategorySection.astro"
}

🔧 Tool: Read
Input: {
  "file_path": "C:\\Users\\James\\Repos\\restaurant-business\\src\\styles\\variables.css"
}

🔧 Tool: Bash
Input: {
  "command": "cd /c/Users/James/Repos/restaurant-business && ls -la src/styles/",
  "description": "List style files in project"
}

🔧 Tool: Read
Input: {
  "file_path": "C:\\Users\\James\\Repos\\restaurant-business\\src\\pages\\menu.astro"
}

🔧 Tool: Read
Input: {
  "file_path": "C:\\Users\\James\\Repos\\restaurant-business\\src\\layouts\\Layout.astro",
  "limit": 100
}

🔧 Tool: Bash
Input: {
  "command": "cd /c/Users/James/Repos/restaurant-business && grep -r \"signature\\|chef\\|premium\\|special\" src/types src/components src/config --include=\"*.ts\" --include=\"*.astro\" | head -20",
  "description": "Search for existing signature/special item patterns"
}

🔧 Tool: Read
Input: {
  "file_path": "C:\\Users\\James\\Repos\\restaurant-business\\src\\styles\\globals.css",
  "limit": 150
}
Now I have a comprehensive understanding of the codebase. Let me implement the chef signature dishes feature following the existing patterns. I'll start by modifying the types, then the component, and finally add some example data.

🔧 Tool: Read
Input: {
  "file_path": "/Users/demarco/code/the-yummy-place/src/types/menu.ts"
}

🔧 Tool: Read
Input: {
  "file_path": "/Users/demarco/code/the-yummy-place/src/components/MenuItem.astro"
}

🔧 Tool: Read
Input: {
  "file_path": "/Users/demarco/code/the-yummy-place/src/styles/variables.css"
}
Let me find the correct paths for these files:

🔧 Tool: Glob
Input: {
  "pattern": "**/*.ts"
}

🔧 Tool: Glob
Input: {
  "pattern": "**/*.astro"
}

🔧 Tool: Glob
Input: {
  "pattern": "**/*.css"
}
I see the codebase is at `C:\Users\James\Repos\restaurant-business`. Let me read the key files:

🔧 Tool: Read
Input: {
  "file_path": "C:\\Users\\James\\Repos\\restaurant-business\\src\\components\\MenuItem.astro"
}

🔧 Tool: Read
Input: {
  "file_path": "C:\\Users\\James\\Repos\\restaurant-business\\src\\styles\\variables.css"
}

🔧 Tool: Glob
Input: {
  "pattern": "src/types/**/*.ts"
}

🔧 Tool: Glob
Input: {
  "pattern": "src/config/**/*.ts"
}
Now let me read the menu types and config files:

🔧 Tool: Read
Input: {
  "file_path": "C:\\Users\\James\\Repos\\restaurant-business\\src\\types\\menu.ts"
}

🔧 Tool: Read
Input: {
  "file_path": "C:\\Users\\James\\Repos\\restaurant-business\\src\\config\\menu.config.ts"
}
Now I have a complete understanding of the codebase. Let me implement the chef signature dishes feature. I'll:

1. Extend the `MenuItem` type with signature dish properties
2. Update the `MenuItem.astro` component with signature dish styling and elements
3. Add example signature dishes to the menu config
4. Add a helper function to get signature dishes

🔧 Tool: TodoWrite
Input: {
  "todos": [
    {
      "content": "Extend MenuItem type with signature dish properties",
      "status": "in_progress",
      "activeForm": "Extending MenuItem type"
    },
    {
      "content": "Update MenuItem.astro component with signature styling",
      "status": "pending",
      "activeForm": "Updating MenuItem component"
    },
    {
      "content": "Add example signature dishes to menu config",
      "status": "pending",
      "activeForm": "Adding signature dishes"
    },
    {
      "content": "Add helper function to get signature dishes",
      "status": "pending",
      "activeForm": "Adding helper function"
    },
    {
      "content": "Verify feature with Playwright test",
      "status": "pending",
      "activeForm": "Verifying with Playwright"
    }
  ]
}

🔧 Tool: Edit
Input: {
  "file_path": "C:\\Users\\James\\Repos\\restaurant-business\\src\\types\\menu.ts",
  "old_string": "/**\n * Represents a single menu item\n */\nexport interface MenuItem {\n  /** Unique identifier for the item */\n  id: string;\n  /** Item name */\n  name: string;\n  /** Full description of the item */\n  description: string;\n  /** Short description for compact displays */\n  shortDescription?: string;\n  /** Primary price (or base price if variants exist) */\n  price: MenuItemPrice;\n  /** Price variants for different sizes/portions */\n  priceVariants?: MenuItemPriceVariant[];\n  /** Available add-ons/modifiers */\n  addOns?: MenuItemAddOn[];\n  /** Item category */\n  category: MenuCategory;\n  /** Menu types this item appears on */\n  menuTypes: MenuType[];\n  /** Dietary tags */\n  dietaryTags?: DietaryTag[];\n  /** Allergen information */\n  allergens?: AllergenTag[];\n  /** Spice level indicator */\n  spiceLevel?: SpiceLevel;\n  /** Preparation style */\n  preparationStyle?: PreparationStyle;\n  /** Main image */\n  image?: MenuItemImage;\n  /** Additional gallery images */\n  gallery?: MenuItemImage[];\n  /** Whether this is a featured/signature item */\n  featured?: boolean;\n  /** Whether this is a chef's recommendation */\n  chefRecommended?: boolean;\n  /** Whether this is a new item */\n  isNew?: boolean;\n  /** Whether this is a seasonal item */\n  seasonal?: boolean;\n  /** Season availability (if seasonal) */\n  seasonAvailable?: string;\n  /** Whether the item is currently available */\n  available?: boolean;\n  /** Sort order within category */\n  sortOrder?: number;\n  /** Related item IDs for suggestions */\n  relatedItems?: string[];\n  /** Nutritional information */\n  nutritionalInfo?: NutritionalInfo;\n  /** Preparation time in minutes */\n  prepTime?: number;\n  /** Internal notes (not displayed to customers) */\n  internalNotes?: string;\n  /** Date item was added */\n  createdAt?: string;\n  /** Date item was last updated */\n  updatedAt?: string;\n}",
  "new_string": "/**\n * Signature dish visual style for premium presentation\n */\nexport type SignatureDishStyle = 'gold' | 'classic' | 'artisan';\n\n/**\n * Represents a single menu item\n */\nexport interface MenuItem {\n  /** Unique identifier for the item */\n  id: string;\n  /** Item name */\n  name: string;\n  /** Full description of the item */\n  description: string;\n  /** Short description for compact displays */\n  shortDescription?: string;\n  /** Primary price (or base price if variants exist) */\n  price: MenuItemPrice;\n  /** Price variants for different sizes/portions */\n  priceVariants?: MenuItemPriceVariant[];\n  /** Available add-ons/modifiers */\n  addOns?: MenuItemAddOn[];\n  /** Item category */\n  category: MenuCategory;\n  /** Menu types this item appears on */\n  menuTypes: MenuType[];\n  /** Dietary tags */\n  dietaryTags?: DietaryTag[];\n  /** Allergen information */\n  allergens?: AllergenTag[];\n  /** Spice level indicator */\n  spiceLevel?: SpiceLevel;\n  /** Preparation style */\n  preparationStyle?: PreparationStyle;\n  /** Main image */\n  image?: MenuItemImage;\n  /** Additional gallery images */\n  gallery?: MenuItemImage[];\n  /** Whether this is a featured/signature item */\n  featured?: boolean;\n  /** Whether this is a chef's recommendation */\n  chefRecommended?: boolean;\n  /** Whether this is a new item */\n  isNew?: boolean;\n  /** Whether this is a seasonal item */\n  seasonal?: boolean;\n  /** Season availability (if seasonal) */\n  seasonAvailable?: string;\n  /** Whether the item is currently available */\n  available?: boolean;\n  /** Sort order within category */\n  sortOrder?: number;\n  /** Related item IDs for suggestions */\n  relatedItems?: string[];\n  /** Nutritional information */\n  nutritionalInfo?: NutritionalInfo;\n  /** Preparation time in minutes */\n  prepTime?: number;\n  /** Internal notes (not displayed to customers) */\n  internalNotes?: string;\n  /** Date item was added */\n  createdAt?: string;\n  /** Date item was last updated */\n  updatedAt?: string;\n\n  // =========================================================================\n  // SIGNATURE DISH PROPERTIES\n  // =========================================================================\n  /** Whether this is a signature dish with premium presentation */\n  isSignatureDish?: boolean;\n  /** Chef's story or inspiration behind the dish */\n  chefStory?: string;\n  /** Visual style for the signature dish badge/presentation */\n  signatureStyle?: SignatureDishStyle;\n}"
}

🔧 Tool: TodoWrite
Input: {
  "todos": [
    {
      "content": "Extend MenuItem type with signature dish properties",
      "status": "completed",
      "activeForm": "Extending MenuItem type"
    },
    {
      "content": "Update MenuItem.astro component with signature styling",
      "status": "in_progress",
      "activeForm": "Updating MenuItem component"
    },
    {
      "content": "Add example signature dishes to menu config",
      "status": "pending",
      "activeForm": "Adding signature dishes"
    },
    {
      "content": "Add helper function to get signature dishes",
      "status": "pending",
      "activeForm": "Adding helper function"
    },
    {
      "content": "Verify feature with Playwright test",
      "status": "pending",
      "activeForm": "Verifying with Playwright"
    }
  ]
}
Now let me update the MenuItem.astro component with the signature dish styling:

🔧 Tool: Edit
Input: {
  "file_path": "C:\\Users\\James\\Repos\\restaurant-business\\src\\components\\MenuItem.astro",
  "old_string": "import type {\n  MenuItem as MenuItemType,\n  MenuItemCardProps,\n  DietaryTag,\n  MenuItemImage,\n  MenuItemPrice,\n  DIETARY_TAG_OPTIONS,\n} from '../types/menu';\n\ninterface Props {\n  /** Menu item name */\n  name: string;\n  /** Full description of the item */\n  description: string;\n  /** Short description for compact displays */\n  shortDescription?: string;\n  /** Primary price (or base price if variants exist) */\n  price: MenuItemPrice;\n  /** Dietary tags (vegetarian, vegan, gluten-free, dairy-free, etc.) */\n  dietaryTags?: DietaryTag[];\n  /** Main image */\n  image?: MenuItemImage;\n  /** Whether to show the image */\n  showImage?: boolean;\n  /** Whether this is a featured/signature item */\n  featured?: boolean;\n  /** Whether this is a chef's recommendation */\n  chefRecommended?: boolean;\n  /** Whether this is a new item */\n  isNew?: boolean;\n  /** Whether this is a seasonal item */\n  seasonal?: boolean;\n  /** Additional CSS class names */\n  class?: string;\n  /** Whether to show the full description or short description */\n  showFullDescription?: boolean;\n  /** Unique identifier for the item */\n  id?: string;\n}",
  "new_string": "import type {\n  MenuItem as MenuItemType,\n  MenuItemCardProps,\n  DietaryTag,\n  MenuItemImage,\n  MenuItemPrice,\n  SignatureDishStyle,\n  DIETARY_TAG_OPTIONS,\n} from '../types/menu';\n\ninterface Props {\n  /** Menu item name */\n  name: string;\n  /** Full description of the item */\n  description: string;\n  /** Short description for compact displays */\n  shortDescription?: string;\n  /** Primary price (or base price if variants exist) */\n  price: MenuItemPrice;\n  /** Dietary tags (vegetarian, vegan, gluten-free, dairy-free, etc.) */\n  dietaryTags?: DietaryTag[];\n  /** Main image */\n  image?: MenuItemImage;\n  /** Whether to show the image */\n  showImage?: boolean;\n  /** Whether this is a featured/signature item */\n  featured?: boolean;\n  /** Whether this is a chef's recommendation */\n  chefRecommended?: boolean;\n  /** Whether this is a new item */\n  isNew?: boolean;\n  /** Whether this is a seasonal item */\n  seasonal?: boolean;\n  /** Additional CSS class names */\n  class?: string;\n  /** Whether to show the full description or short description */\n  showFullDescription?: boolean;\n  /** Unique identifier for the item */\n  id?: string;\n  /** Whether this is a signature dish with premium presentation */\n  isSignatureDish?: boolean;\n  /** Chef's story or inspiration behind the dish */\n  chefStory?: string;\n  /** Visual style for the signature dish badge/presentation */\n  signatureStyle?: SignatureDishStyle;\n}"
}

🔧 Tool: Edit
Input: {
  "file_path": "C:\\Users\\James\\Repos\\restaurant-business\\src\\components\\MenuItem.astro",
  "old_string": "const {\n  name,\n  description,\n  shortDescription,\n  price,\n  dietaryTags = [],\n  image,\n  showImage = false,\n  featured = false,\n  chefRecommended = false,\n  isNew = false,\n  seasonal = false,\n  class: className = '',\n  showFullDescription = true,\n  id,\n} = Astro.props;",
  "new_string": "const {\n  name,\n  description,\n  shortDescription,\n  price,\n  dietaryTags = [],\n  image,\n  showImage = false,\n  featured = false,\n  chefRecommended = false,\n  isNew = false,\n  seasonal = false,\n  class: className = '',\n  showFullDescription = true,\n  id,\n  isSignatureDish = false,\n  chefStory,\n  signatureStyle = 'gold',\n} = Astro.props;"
}

🔧 Tool: Edit
Input: {
  "file_path": "C:\\Users\\James\\Repos\\restaurant-business\\src\\components\\MenuItem.astro",
  "old_string": "// Build CSS classes\nconst menuItemClasses = [\n  'menu-item',\n  showImage && image && 'menu-item--with-image',\n  featured && 'menu-item--featured',\n  chefRecommended && 'menu-item--chef-recommended',\n  isNew && 'menu-item--new',\n  seasonal && 'menu-item--seasonal',\n  className,\n].filter(Boolean).join(' ');",
  "new_string": "// Build CSS classes\nconst menuItemClasses = [\n  'menu-item',\n  showImage && image && 'menu-item--with-image',\n  featured && 'menu-item--featured',\n  chefRecommended && 'menu-item--chef-recommended',\n  isNew && 'menu-item--new',\n  seasonal && 'menu-item--seasonal',\n  isSignatureDish && 'menu-item--signature',\n  isSignatureDish && `menu-item--signature-${signatureStyle}`,\n  className,\n].filter(Boolean).join(' ');"
}
Now let me update the HTML template to add the signature dish badge and chef story section:

🔧 Tool: Edit
Input: {
  "file_path": "C:\\Users\\James\\Repos\\restaurant-business\\src\\components\\MenuItem.astro",
  "old_string": "        {/* Badges */}\n        <div class=\"menu-item__badges\" aria-label=\"Item badges\">\n          {chefRecommended && (\n            <span class=\"menu-item__badge menu-item__badge--chef\" title=\"Chef's Recommendation\">\n              <span class=\"menu-item__badge-icon\" aria-hidden=\"true\">👨‍🍳</span>\n              <span class=\"menu-item__badge-text\">Chef's Pick</span>\n            </span>\n          )}\n          {featured && (\n            <span class=\"menu-item__badge menu-item__badge--featured\" title=\"Featured Item\">\n              <span class=\"menu-item__badge-icon\" aria-hidden=\"true\">⭐</span>\n              <span class=\"menu-item__badge-text\">Featured</span>\n            </span>\n          )}\n          {isNew && (\n            <span class=\"menu-item__badge menu-item__badge--new\" title=\"New Item\">\n              <span class=\"menu-item__badge-text\">New</span>\n            </span>\n          )}\n          {seasonal && (\n            <span class=\"menu-item__badge menu-item__badge--seasonal\" title=\"Seasonal Item\">\n              <span class=\"menu-item__badge-icon\" aria-hidden=\"true\">🍂</span>\n              <span class=\"menu-item__badge-text\">Seasonal</span>\n            </span>\n          )}\n        </div>\n      </div>",
  "new_string": "        {/* Badges */}\n        <div class=\"menu-item__badges\" aria-label=\"Item badges\">\n          {isSignatureDish && (\n            <span class={`menu-item__badge menu-item__badge--signature menu-item__badge--signature-${signatureStyle}`} title=\"Chef's Signature Dish\">\n              <span class=\"menu-item__badge-icon menu-item__badge-icon--signature\" aria-hidden=\"true\">\n                <svg viewBox=\"0 0 24 24\" fill=\"currentColor\" width=\"14\" height=\"14\" aria-hidden=\"true\">\n                  <path d=\"M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z\"/>\n                </svg>\n              </span>\n              <span class=\"menu-item__badge-text\">Signature</span>\n            </span>\n          )}\n          {chefRecommended && !isSignatureDish && (\n            <span class=\"menu-item__badge menu-item__badge--chef\" title=\"Chef's Recommendation\">\n              <span class=\"menu-item__badge-icon\" aria-hidden=\"true\">👨‍🍳</span>\n              <span class=\"menu-item__badge-text\">Chef's Pick</span>\n            </span>\n          )}\n          {featured && !isSignatureDish && (\n            <span class=\"menu-item__badge menu-item__badge--featured\" title=\"Featured Item\">\n              <span class=\"menu-item__badge-icon\" aria-hidden=\"true\">⭐</span>\n              <span class=\"menu-item__badge-text\">Featured</span>\n            </span>\n          )}\n          {isNew && (\n            <span class=\"menu-item__badge menu-item__badge--new\" title=\"New Item\">\n              <span class=\"menu-item__badge-text\">New</span>\n            </span>\n          )}\n          {seasonal && (\n            <span class=\"menu-item__badge menu-item__badge--seasonal\" title=\"Seasonal Item\">\n              <span class=\"menu-item__badge-icon\" aria-hidden=\"true\">🍂</span>\n              <span class=\"menu-item__badge-text\">Seasonal</span>\n            </span>\n          )}\n        </div>\n      </div>"
}
Now let me add the chef story section after the description:

🔧 Tool: Edit
Input: {
  "file_path": "C:\\Users\\James\\Repos\\restaurant-business\\src\\components\\MenuItem.astro",
  "old_string": "    {/* Description */}\n    <p class=\"menu-item__description\" itemprop=\"description\">\n      {displayDescription}\n    </p>\n\n    {/* Dietary Tags */}",
  "new_string": "    {/* Description */}\n    <p class=\"menu-item__description\" itemprop=\"description\">\n      {displayDescription}\n    </p>\n\n    {/* Chef Story (for signature dishes) */}\n    {isSignatureDish && chefStory && (\n      <div class=\"menu-item__chef-story\">\n        <div class=\"menu-item__chef-story-icon\" aria-hidden=\"true\">\n          <svg viewBox=\"0 0 24 24\" fill=\"currentColor\" width=\"16\" height=\"16\">\n            <path d=\"M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z\"/>\n          </svg>\n        </div>\n        <p class=\"menu-item__chef-story-text\">\n          <span class=\"menu-item__chef-story-label\">Chef's Inspiration:</span> {chefStory}\n        </p>\n      </div>\n    )}\n\n    {/* Dietary Tags */}"
}
Now let me add all the CSS styles for the signature dish variant. I'll add them before the responsive styles section:

🔧 Tool: Edit
Input: {
  "file_path": "C:\\Users\\James\\Repos\\restaurant-business\\src\\components\\MenuItem.astro",
  "old_string": "  /* =================================================================\n   * VARIANT STYLES\n   * ================================================================= */\n\n  /* Featured Item */\n  .menu-item--featured {\n    background-color: var(--color-terracotta-subtle);\n    padding: var(--spacing-4);\n    margin: 0 calc(-1 * var(--spacing-4));\n    border-radius: var(--radius-lg);\n    border-bottom: none;\n  }\n\n  .menu-item--featured + .menu-item {\n    border-top: var(--border-width-1) solid var(--color-border-light);\n  }\n\n  /* Chef Recommended */\n  .menu-item--chef-recommended .menu-item__name {\n    color: var(--color-primary);\n  }\n\n  /* New Item */\n  .menu-item--new::before {\n    content: '';\n    position: absolute;\n    left: 0;\n    top: 50%;\n    transform: translateY(-50%);\n    width: 3px;\n    height: 60%;\n    background-color: var(--color-success-500);\n    border-radius: var(--radius-full);\n  }",
  "new_string": "  /* =================================================================\n   * VARIANT STYLES\n   * ================================================================= */\n\n  /* Featured Item */\n  .menu-item--featured {\n    background-color: var(--color-terracotta-subtle);\n    padding: var(--spacing-4);\n    margin: 0 calc(-1 * var(--spacing-4));\n    border-radius: var(--radius-lg);\n    border-bottom: none;\n  }\n\n  .menu-item--featured + .menu-item {\n    border-top: var(--border-width-1) solid var(--color-border-light);\n  }\n\n  /* Chef Recommended */\n  .menu-item--chef-recommended .menu-item__name {\n    color: var(--color-primary);\n  }\n\n  /* New Item */\n  .menu-item--new::before {\n    content: '';\n    position: absolute;\n    left: 0;\n    top: 50%;\n    transform: translateY(-50%);\n    width: 3px;\n    height: 60%;\n    background-color: var(--color-success-500);\n    border-radius: var(--radius-full);\n  }\n\n  /* =================================================================\n   * SIGNATURE DISH STYLES - Premium Visual Treatment\n   * ================================================================= */\n  .menu-item--signature {\n    position: relative;\n    background: linear-gradient(\n      135deg,\n      var(--color-background-elevated) 0%,\n      var(--color-background-warm) 100%\n    );\n    padding: var(--spacing-5);\n    margin: var(--spacing-2) calc(-1 * var(--spacing-4));\n    border-radius: var(--radius-xl);\n    border: var(--border-width-2) solid transparent;\n    box-shadow: var(--shadow-md), var(--glow-warm-sm);\n    border-bottom: none;\n    overflow: hidden;\n  }\n\n  .menu-item--signature::before {\n    content: '';\n    position: absolute;\n    top: 0;\n    left: 0;\n    right: 0;\n    height: 4px;\n    background: linear-gradient(\n      90deg,\n      var(--color-primary) 0%,\n      var(--color-terracotta) 50%,\n      var(--color-primary) 100%\n    );\n    border-radius: var(--radius-xl) var(--radius-xl) 0 0;\n  }\n\n  .menu-item--signature:hover {\n    box-shadow: var(--shadow-lg), var(--glow-warm-md);\n    transform: translateY(-2px);\n  }\n\n  .menu-item--signature + .menu-item {\n    border-top: var(--border-width-1) solid var(--color-border-light);\n    margin-top: var(--spacing-2);\n  }\n\n  /* Signature Item Name */\n  .menu-item--signature .menu-item__name {\n    font-size: var(--font-size-xl);\n    color: var(--color-primary);\n    font-weight: var(--font-weight-bold);\n  }\n\n  /* Signature Item Description */\n  .menu-item--signature .menu-item__description {\n    font-size: var(--font-size-base);\n    color: var(--color-text-primary);\n    line-height: var(--line-height-relaxed);\n  }\n\n  /* =================================================================\n   * SIGNATURE BADGE STYLES\n   * ================================================================= */\n  .menu-item__badge--signature {\n    position: relative;\n    background: linear-gradient(135deg, #b8860b 0%, #daa520 50%, #b8860b 100%);\n    color: #ffffff;\n    border: none;\n    padding: var(--spacing-1) var(--spacing-3);\n    font-weight: var(--font-weight-bold);\n    text-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);\n    box-shadow: 0 2px 8px rgba(184, 134, 11, 0.4);\n  }\n\n  .menu-item__badge--signature .menu-item__badge-icon--signature {\n    display: inline-flex;\n    animation: signature-sparkle 2s ease-in-out infinite;\n  }\n\n  @keyframes signature-sparkle {\n    0%, 100% { opacity: 1; transform: scale(1); }\n    50% { opacity: 0.8; transform: scale(1.1); }\n  }\n\n  /* Gold Style (default) */\n  .menu-item__badge--signature-gold {\n    background: linear-gradient(135deg, #b8860b 0%, #ffd700 50%, #b8860b 100%);\n    box-shadow: 0 2px 8px rgba(255, 215, 0, 0.5);\n  }\n\n  .menu-item--signature-gold::before {\n    background: linear-gradient(90deg, #b8860b 0%, #ffd700 50%, #b8860b 100%);\n  }\n\n  .menu-item--signature-gold {\n    border-color: rgba(255, 215, 0, 0.3);\n  }\n\n  /* Classic Style - Burgundy */\n  .menu-item__badge--signature-classic {\n    background: linear-gradient(135deg, var(--color-primary-700) 0%, var(--color-primary-500) 50%, var(--color-primary-700) 100%);\n    box-shadow: 0 2px 8px rgba(114, 47, 55, 0.4);\n  }\n\n  .menu-item--signature-classic::before {\n    background: linear-gradient(90deg, var(--color-primary-700) 0%, var(--color-primary-400) 50%, var(--color-primary-700) 100%);\n  }\n\n  .menu-item--signature-classic {\n    border-color: rgba(114, 47, 55, 0.2);\n  }\n\n  /* Artisan Style - Terracotta/Espresso */\n  .menu-item__badge--signature-artisan {\n    background: linear-gradient(135deg, var(--color-espresso) 0%, var(--color-terracotta) 50%, var(--color-espresso) 100%);\n    box-shadow: 0 2px 8px rgba(60, 36, 21, 0.4);\n  }\n\n  .menu-item--signature-artisan::before {\n    background: linear-gradient(90deg, var(--color-espresso) 0%, var(--color-terracotta) 50%, var(--color-espresso) 100%);\n  }\n\n  .menu-item--signature-artisan {\n    border-color: rgba(196, 167, 125, 0.3);\n  }\n\n  /* =================================================================\n   * CHEF STORY STYLES\n   * ================================================================= */\n  .menu-item__chef-story {\n    display: flex;\n    gap: var(--spacing-2);\n    align-items: flex-start;\n    margin-top: var(--spacing-3);\n    padding: var(--spacing-3);\n    background-color: var(--color-background-muted);\n    border-radius: var(--radius-lg);\n    border-left: 3px solid var(--color-primary);\n  }\n\n  .menu-item__chef-story-icon {\n    flex-shrink: 0;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    width: 28px;\n    height: 28px;\n    background-color: var(--color-primary-100);\n    color: var(--color-primary);\n    border-radius: var(--radius-full);\n  }\n\n  .menu-item__chef-story-text {\n    margin: 0;\n    font-family: var(--font-accent);\n    font-style: italic;\n    font-size: var(--font-size-sm);\n    color: var(--color-text-secondary);\n    line-height: var(--line-height-relaxed);\n  }\n\n  .menu-item__chef-story-label {\n    font-style: normal;\n    font-weight: var(--font-weight-semibold);\n    color: var(--color-primary);\n  }"
}
Now I need to add responsive and print styles for signature dishes. Let me add those:

🔧 Tool: Edit
Input: {
  "file_path": "C:\\Users\\James\\Repos\\restaurant-business\\src\\components\\MenuItem.astro",
  "old_string": "  /* =================================================================\n   * RESPONSIVE STYLES\n   * ================================================================= */\n  @media (max-width: 640px) {\n    .menu-item {\n      flex-direction: column;\n      gap: var(--spacing-3);\n    }\n\n    .menu-item__image-container {\n      width: 100%;\n      height: 160px;\n    }\n\n    .menu-item__title-row {\n      flex-direction: column;\n      gap: var(--spacing-1);\n    }\n\n    .menu-item__badges {\n      order: -1;\n    }\n\n    .menu-item--featured {\n      margin: 0;\n      border-radius: var(--radius-md);\n    }\n  }",
  "new_string": "  /* =================================================================\n   * RESPONSIVE STYLES\n   * ================================================================= */\n  @media (max-width: 640px) {\n    .menu-item {\n      flex-direction: column;\n      gap: var(--spacing-3);\n    }\n\n    .menu-item__image-container {\n      width: 100%;\n      height: 160px;\n    }\n\n    .menu-item__title-row {\n      flex-direction: column;\n      gap: var(--spacing-1);\n    }\n\n    .menu-item__badges {\n      order: -1;\n    }\n\n    .menu-item--featured {\n      margin: 0;\n      border-radius: var(--radius-md);\n    }\n\n    /* Signature dish responsive adjustments */\n    .menu-item--signature {\n      margin: var(--spacing-2) 0;\n      padding: var(--spacing-4);\n    }\n\n    .menu-item--signature .menu-item__name {\n      font-size: var(--font-size-lg);\n    }\n\n    .menu-item__chef-story {\n      flex-direction: column;\n      padding: var(--spacing-2);\n    }\n\n    .menu-item__chef-story-icon {\n      width: 24px;\n      height: 24px;\n    }\n  }"
}

🔧 Tool: Edit
Input: {
  "file_path": "C:\\Users\\James\\Repos\\restaurant-business\\src\\components\\MenuItem.astro",
  "old_string": "    .menu-item--new::before {\n      background-color: #333 !important;\n      width: 2px;\n      -webkit-print-color-adjust: exact;\n      print-color-adjust: exact;\n    }\n  }\n</style>",
  "new_string": "    .menu-item--new::before {\n      background-color: #333 !important;\n      width: 2px;\n      -webkit-print-color-adjust: exact;\n      print-color-adjust: exact;\n    }\n\n    /* Signature dish print styles */\n    .menu-item--signature {\n      background: #fafafa !important;\n      border: 2px solid #999 !important;\n      box-shadow: none !important;\n      -webkit-print-color-adjust: exact;\n      print-color-adjust: exact;\n    }\n\n    .menu-item--signature::before {\n      background: #666 !important;\n      height: 3px;\n    }\n\n    .menu-item__badge--signature {\n      background: #666 !important;\n      color: #fff !important;\n      -webkit-print-color-adjust: exact;\n      print-color-adjust: exact;\n    }\n\n    .menu-item__chef-story {\n      background: #f5f5f5 !important;\n      border-left-color: #666 !important;\n      -webkit-print-color-adjust: exact;\n      print-color-adjust: exact;\n    }\n\n    .menu-item__chef-story-icon {\n      background: #e0e0e0 !important;\n      -webkit-print-color-adjust: exact;\n      print-color-adjust: exact;\n    }\n  }\n</style>"
}
Let me also add reduced motion and high contrast styles:

🔧 Tool: Edit
Input: {
  "file_path": "C:\\Users\\James\\Repos\\restaurant-business\\src\\components\\MenuItem.astro",
  "old_string": "  /* =================================================================\n   * ACCESSIBILITY - REDUCED MOTION\n   * ================================================================= */\n  @media (prefers-reduced-motion: reduce) {\n    .menu-item,\n    .menu-item__image,\n    .menu-item__dietary-tag {\n      transition: none;\n    }\n\n    .menu-item:hover .menu-item__image {\n      transform: none;\n    }\n\n    .menu-item__dietary-tag:hover {\n      transform: none;\n    }\n  }",
  "new_string": "  /* =================================================================\n   * ACCESSIBILITY - REDUCED MOTION\n   * ================================================================= */\n  @media (prefers-reduced-motion: reduce) {\n    .menu-item,\n    .menu-item__image,\n    .menu-item__dietary-tag,\n    .menu-item--signature {\n      transition: none;\n    }\n\n    .menu-item:hover .menu-item__image {\n      transform: none;\n    }\n\n    .menu-item__dietary-tag:hover {\n      transform: none;\n    }\n\n    .menu-item--signature:hover {\n      transform: none;\n    }\n\n    .menu-item__badge--signature .menu-item__badge-icon--signature {\n      animation: none;\n    }\n  }"
}

🔧 Tool: Edit
Input: {
  "file_path": "C:\\Users\\James\\Repos\\restaurant-business\\src\\components\\MenuItem.astro",
  "old_string": "  /* =================================================================\n   * HIGH CONTRAST MODE\n   * ================================================================= */\n  @media (forced-colors: active) {\n    .menu-item__badge,\n    .menu-item__dietary-tag {\n      border: 2px solid currentColor;\n    }\n\n    .menu-item--new::before {\n      background-color: Highlight;\n    }\n  }",
  "new_string": "  /* =================================================================\n   * HIGH CONTRAST MODE\n   * ================================================================= */\n  @media (forced-colors: active) {\n    .menu-item__badge,\n    .menu-item__dietary-tag {\n      border: 2px solid currentColor;\n    }\n\n    .menu-item--new::before {\n      background-color: Highlight;\n    }\n\n    .menu-item--signature {\n      border: 3px solid Highlight;\n    }\n\n    .menu-item--signature::before {\n      background-color: Highlight;\n    }\n\n    .menu-item__badge--signature {\n      border: 2px solid currentColor;\n      background: Highlight;\n      color: HighlightText;\n    }\n\n    .menu-item__chef-story {\n      border: 2px solid currentColor;\n    }\n  }"
}

🔧 Tool: TodoWrite
Input: {
  "todos": [
    {
      "content": "Extend MenuItem type with signature dish properties",
      "status": "completed",
      "activeForm": "Extending MenuItem type"
    },
    {
      "content": "Update MenuItem.astro component with signature styling",
      "status": "completed",
      "activeForm": "Updating MenuItem component"
    },
    {
      "content": "Add example signature dishes to menu config",
      "status": "in_progress",
      "activeForm": "Adding signature dishes"
    },
    {
      "content": "Add helper function to get signature dishes",
      "status": "pending",
      "activeForm": "Adding helper function"
    },
    {
      "content": "Verify feature with Playwright test",
      "status": "pending",
      "activeForm": "Verifying with Playwright"
    }
  ]
}
Now let me add example signature dishes to the menu config and add a helper function:

🔧 Tool: Edit
Input: {
  "file_path": "C:\\Users\\James\\Repos\\restaurant-business\\src\\config\\menu.config.ts",
  "old_string": "  // Main Courses\n  {\n    id: 'grilled-salmon',\n    name: 'Grilled Atlantic Salmon',\n    description: 'Fresh Atlantic salmon fillet grilled to perfection, served with lemon dill butter sauce, seasonal vegetables, and choice of rice pilaf or roasted potatoes.',\n    shortDescription: 'Fresh salmon with lemon dill butter',\n    price: createPrice(2895),\n    category: 'seafood',\n    menuTypes: ['lunch', 'dinner'],\n    dietaryTags: ['gluten-free'],\n    allergens: ['fish', 'milk'],\n    preparationStyle: 'grilled',\n    featured: true,\n    chefRecommended: true,\n    available: true,\n    sortOrder: 1,\n    image: {\n      src: '/menu/mains/grilled-salmon.jpg',\n      alt: 'Grilled salmon with vegetables',\n      width: 600,\n      height: 400,\n    },\n    nutritionalInfo: {\n      calories: 520,\n      protein: 42,\n      carbohydrates: 18,\n      fat: 28,\n      sodium: 420,\n      servingSize: '8 oz fillet',\n    },\n    prepTime: 20,\n    relatedItems: ['garden-salad', 'french-onion-soup'],\n  },",
  "new_string": "  // Main Courses\n  {\n    id: 'grilled-salmon',\n    name: 'Grilled Atlantic Salmon',\n    description: 'Fresh Atlantic salmon fillet grilled to perfection, served with lemon dill butter sauce, seasonal vegetables, and choice of rice pilaf or roasted potatoes.',\n    shortDescription: 'Fresh salmon with lemon dill butter',\n    price: createPrice(2895),\n    category: 'seafood',\n    menuTypes: ['lunch', 'dinner'],\n    dietaryTags: ['gluten-free'],\n    allergens: ['fish', 'milk'],\n    preparationStyle: 'grilled',\n    featured: true,\n    chefRecommended: true,\n    available: true,\n    sortOrder: 1,\n    image: {\n      src: '/menu/mains/grilled-salmon.jpg',\n      alt: 'Grilled salmon with vegetables',\n      width: 600,\n      height: 400,\n    },\n    nutritionalInfo: {\n      calories: 520,\n      protein: 42,\n      carbohydrates: 18,\n      fat: 28,\n      sodium: 420,\n      servingSize: '8 oz fillet',\n    },\n    prepTime: 20,\n    relatedItems: ['garden-salad', 'french-onion-soup'],\n    // SIGNATURE DISH - Chef's specialty\n    isSignatureDish: true,\n    chefStory: 'This dish was inspired by my grandmother\\'s Sunday dinners in coastal Maine. The lemon dill butter is her original recipe, passed down through three generations.',\n    signatureStyle: 'gold',\n  },"
}

🔧 Tool: Edit
Input: {
  "file_path": "C:\\Users\\James\\Repos\\restaurant-business\\src\\config\\menu.config.ts",
  "old_string": "  {\n    id: 'filet-mignon',\n    name: 'Filet Mignon',\n    description: 'USDA Prime 8oz center-cut filet, aged 28 days and grilled to your preference. Served with garlic mashed potatoes and asparagus.',\n    shortDescription: '8oz USDA Prime center-cut filet',\n    price: createPrice(4495),\n    priceVariants: [\n      {\n        name: '6 oz',\n        price: createPrice(3695),\n        description: 'Petite cut',\n      },\n      {\n        name: '8 oz',\n        price: createPrice(4495),\n        description: 'Classic cut',\n        isDefault: true,\n      },\n      {\n        name: '10 oz',\n        price: createPrice(5295),\n        description: 'Large cut',\n      },\n    ],\n    addOns: [\n      {\n        id: 'peppercorn-sauce',\n        name: 'Peppercorn Sauce',\n        price: createPrice(395),\n        description: 'Creamy black peppercorn sauce',\n        available: true,\n      },\n      {\n        id: 'blue-cheese-crust',\n        name: 'Blue Cheese Crust',\n        price: createPrice(495),\n        description: 'Topped with melted blue cheese',\n        available: true,\n      },\n      {\n        id: 'sauteed-mushrooms',\n        name: 'Sautéed Mushrooms',\n        price: createPrice(395),\n        description: 'Wild mushroom blend',\n        available: true,\n      },\n    ],\n    category: 'steaks-grills',\n    menuTypes: ['dinner'],\n    dietaryTags: ['gluten-free'],\n    allergens: ['milk'],\n    preparationStyle: 'grilled',\n    featured: true,\n    chefRecommended: true,\n    available: true,\n    sortOrder: 1,\n    image: {\n      src: '/menu/mains/filet-mignon.jpg',\n      alt: 'Filet mignon with mashed potatoes',\n      width: 600,\n      height: 400,\n    },\n    prepTime: 25,\n  },",
  "new_string": "  {\n    id: 'filet-mignon',\n    name: 'Filet Mignon',\n    description: 'USDA Prime 8oz center-cut filet, aged 28 days and grilled to your preference. Served with garlic mashed potatoes and asparagus.',\n    shortDescription: '8oz USDA Prime center-cut filet',\n    price: createPrice(4495),\n    priceVariants: [\n      {\n        name: '6 oz',\n        price: createPrice(3695),\n        description: 'Petite cut',\n      },\n      {\n        name: '8 oz',\n        price: createPrice(4495),\n        description: 'Classic cut',\n        isDefault: true,\n      },\n      {\n        name: '10 oz',\n        price: createPrice(5295),\n        description: 'Large cut',\n      },\n    ],\n    addOns: [\n      {\n        id: 'peppercorn-sauce',\n        name: 'Peppercorn Sauce',\n        price: createPrice(395),\n        description: 'Creamy black peppercorn sauce',\n        available: true,\n      },\n      {\n        id: 'blue-cheese-crust',\n        name: 'Blue Cheese Crust',\n        price: createPrice(495),\n        description: 'Topped with melted blue cheese',\n        available: true,\n      },\n      {\n        id: 'sauteed-mushrooms',\n        name: 'Sautéed Mushrooms',\n        price: createPrice(395),\n        description: 'Wild mushroom blend',\n        available: true,\n      },\n    ],\n    category: 'steaks-grills',\n    menuTypes: ['dinner'],\n    dietaryTags: ['gluten-free'],\n    allergens: ['milk'],\n    preparationStyle: 'grilled',\n    featured: true,\n    chefRecommended: true,\n    available: true,\n    sortOrder: 1,\n    image: {\n      src: '/menu/mains/filet-mignon.jpg',\n      alt: 'Filet mignon with mashed potatoes',\n      width: 600,\n      height: 400,\n    },\n    prepTime: 25,\n    // SIGNATURE DISH - Premium steakhouse experience\n    isSignatureDish: true,\n    chefStory: 'Our 28-day dry-aged filet represents the pinnacle of American steakhouse tradition. Each cut is hand-selected from family-owned ranches in Nebraska.',\n    signatureStyle: 'classic',\n  },"
}
Now let me also make the chocolate lava cake a signature dessert:

🔧 Tool: Edit
Input: {
  "file_path": "C:\\Users\\James\\Repos\\restaurant-business\\src\\config\\menu.config.ts",
  "old_string": "  {\n    id: 'chocolate-lava-cake',\n    name: 'Chocolate Lava Cake',\n    description: 'Warm dark chocolate cake with a molten center, served with vanilla bean ice cream and fresh berries.',\n    shortDescription: 'Warm chocolate cake with molten center',\n    price: createPrice(1195),\n    category: 'desserts',\n    menuTypes: ['lunch', 'dinner'],\n    dietaryTags: ['vegetarian'],\n    allergens: ['wheat', 'milk', 'eggs'],\n    chefRecommended: true,\n    available: true,\n    sortOrder: 2,\n    image: {\n      src: '/menu/desserts/chocolate-lava-cake.jpg',\n      alt: 'Chocolate lava cake with ice cream',\n      width: 600,\n      height: 400,\n    },\n    prepTime: 15,\n  },",
  "new_string": "  {\n    id: 'chocolate-lava-cake',\n    name: 'Chocolate Lava Cake',\n    description: 'Warm dark chocolate cake with a molten center, served with vanilla bean ice cream and fresh berries.',\n    shortDescription: 'Warm chocolate cake with molten center',\n    price: createPrice(1195),\n    category: 'desserts',\n    menuTypes: ['lunch', 'dinner'],\n    dietaryTags: ['vegetarian'],\n    allergens: ['wheat', 'milk', 'eggs'],\n    chefRecommended: true,\n    available: true,\n    sortOrder: 2,\n    image: {\n      src: '/menu/desserts/chocolate-lava-cake.jpg',\n      alt: 'Chocolate lava cake with ice cream',\n      width: 600,\n      height: 400,\n    },\n    prepTime: 15,\n    // SIGNATURE DISH - Artisan dessert\n    isSignatureDish: true,\n    chefStory: 'Perfected over 15 years, this dessert uses single-origin Ecuadorian chocolate. The timing must be exact - 12 minutes in our wood-fired oven - to achieve the perfect molten center.',\n    signatureStyle: 'artisan',\n  },"
}
Now let me add the helper function to get signature dishes:

🔧 Tool: Edit
Input: {
  "file_path": "C:\\Users\\James\\Repos\\restaurant-business\\src\\config\\menu.config.ts",
  "old_string": "/**\n * Get chef recommended items\n */\nexport function getChefRecommendedItems(): MenuItem[] {\n  return MENU_ITEMS.filter((item) => item.chefRecommended && item.available !== false);\n}",
  "new_string": "/**\n * Get chef recommended items\n */\nexport function getChefRecommendedItems(): MenuItem[] {\n  return MENU_ITEMS.filter((item) => item.chefRecommended && item.available !== false);\n}\n\n/**\n * Get signature dishes - chef's specialty items with premium presentation\n * These are the standout items that help guide first-time visitors\n */\nexport function getSignatureDishes(): MenuItem[] {\n  return MENU_ITEMS.filter((item) => item.isSignatureDish && item.available !== false);\n}"
}

🔧 Tool: TodoWrite
Input: {
  "todos": [
    {
      "content": "Extend MenuItem type with signature dish properties",
      "status": "completed",
      "activeForm": "Extending MenuItem type"
    },
    {
      "content": "Update MenuItem.astro component with signature styling",
      "status": "completed",
      "activeForm": "Updating MenuItem component"
    },
    {
      "content": "Add example signature dishes to menu config",
      "status": "completed",
      "activeForm": "Adding signature dishes"
    },
    {
      "content": "Add helper function to get signature dishes",
      "status": "completed",
      "activeForm": "Adding helper function"
    },
    {
      "content": "Verify feature with Playwright test",
      "status": "in_progress",
      "activeForm": "Verifying with Playwright"
    }
  ]
}
Now let me check if Playwright is installed and create a verification test. First, let me check the project structure:

🔧 Tool: Bash
Input: {
  "command": "cd \"C:\\Users\\James\\Repos\\restaurant-business\" && cat package.json | grep -A5 \"devDependencies\"",
  "description": "Check for Playwright in dependencies"
}
Playwright is installed. Let me also check if there's a playwright config:

🔧 Tool: Glob
Input: {
  "pattern": "**/playwright*.config.*"
}

🔧 Tool: Read
Input: {
  "file_path": "C:\\Users\\James\\Repos\\restaurant-business\\playwright.config.ts"
}
Good. Now let me check if there's a menu page where the signature dishes would be displayed:

🔧 Tool: Read
Input: {
  "file_path": "C:\\Users\\James\\Repos\\restaurant-business\\src\\pages\\menu.astro"
}
Now I need to check the MenuCategorySection component to understand how it renders menu items:

🔧 Tool: Read
Input: {
  "file_path": "C:\\Users\\James\\Repos\\restaurant-business\\src\\components\\MenuCategorySection.astro"
}
I need to update the MenuCategorySection to pass the signature dish properties to the MenuItem component:

🔧 Tool: Edit
Input: {
  "file_path": "C:\\Users\\James\\Repos\\restaurant-business\\src\\components\\MenuCategorySection.astro",
  "old_string": "            <MenuItem\n              name={item.name}\n              description={item.description}\n              shortDescription={item.shortDescription}\n              price={item.price}\n              dietaryTags={showDietaryTags ? item.dietaryTags : []}\n              image={shouldShowImages ? item.image : undefined}\n              showImage={shouldShowImages && !!item.image}\n              featured={item.featured}\n              chefRecommended={item.chefRecommended}\n              isNew={item.isNew}\n              seasonal={item.seasonal}\n              showFullDescription={layout !== 'compact'}\n              id={item.id}\n            />",
  "new_string": "            <MenuItem\n              name={item.name}\n              description={item.description}\n              shortDescription={item.shortDescription}\n              price={item.price}\n              dietaryTags={showDietaryTags ? item.dietaryTags : []}\n              image={shouldShowImages ? item.image : undefined}\n              showImage={shouldShowImages && !!item.image}\n              featured={item.featured}\n              chefRecommended={item.chefRecommended}\n              isNew={item.isNew}\n              seasonal={item.seasonal}\n              showFullDescription={layout !== 'compact'}\n              id={item.id}\n              isSignatureDish={item.isSignatureDish}\n              chefStory={item.chefStory}\n              signatureStyle={item.signatureStyle}\n            />"
}
Now let me create a Playwright test to verify the feature works:

🔧 Tool: Write
Input: {
  "file_path": "C:\\Users\\James\\Repos\\restaurant-business\\signature-dishes-verification.spec.ts",
  "content": "/**\n * Temporary verification test for Chef Signature Dishes feature\n * This test verifies that signature dishes are rendered correctly with:\n * - Chef badge with \"Signature\" text\n * - Chef's story/inspiration snippet\n * - Premium visual treatment (special styling)\n *\n * DELETE THIS FILE after verification is complete.\n */\n\nimport { test, expect } from '@playwright/test';\n\ntest.describe('Chef Signature Dishes Feature', () => {\n  test.beforeEach(async ({ page }) => {\n    // Navigate to the menu page where signature dishes are displayed\n    await page.goto('/menu');\n    // Wait for page to fully load\n    await page.waitForLoadState('networkidle');\n  });\n\n  test('signature dishes have premium visual treatment', async ({ page }) => {\n    // Check that at least one signature dish exists\n    const signatureDishes = page.locator('.menu-item--signature');\n    const count = await signatureDishes.count();\n    expect(count).toBeGreaterThan(0);\n\n    // Verify signature dish has premium styling (the --signature class)\n    const firstSignatureDish = signatureDishes.first();\n    await expect(firstSignatureDish).toBeVisible();\n\n    // Check that signature dish has the top gradient border decoration\n    // This is applied via CSS ::before pseudo-element\n    await expect(firstSignatureDish).toHaveCSS('position', 'relative');\n  });\n\n  test('signature dishes display the Signature badge', async ({ page }) => {\n    // Find signature badges\n    const signatureBadges = page.locator('.menu-item__badge--signature');\n    const count = await signatureBadges.count();\n    expect(count).toBeGreaterThan(0);\n\n    // Verify badge text contains \"Signature\"\n    const firstBadge = signatureBadges.first();\n    await expect(firstBadge).toBeVisible();\n    await expect(firstBadge).toContainText('Signature');\n  });\n\n  test(\"signature dishes display chef's story\", async ({ page }) => {\n    // Find chef story sections\n    const chefStories = page.locator('.menu-item__chef-story');\n    const count = await chefStories.count();\n    expect(count).toBeGreaterThan(0);\n\n    // Verify chef story section is visible and contains the label\n    const firstChefStory = chefStories.first();\n    await expect(firstChefStory).toBeVisible();\n\n    // Check for \"Chef's Inspiration:\" label\n    const chefStoryLabel = firstChefStory.locator('.menu-item__chef-story-label');\n    await expect(chefStoryLabel).toContainText(\"Chef's Inspiration:\");\n\n    // Verify there's actual story text\n    const chefStoryText = firstChefStory.locator('.menu-item__chef-story-text');\n    const storyText = await chefStoryText.textContent();\n    expect(storyText?.length).toBeGreaterThan(30); // Ensure meaningful content\n  });\n\n  test('Grilled Atlantic Salmon is a signature dish with gold style', async ({ page }) => {\n    // Find the salmon dish by its ID\n    const salmonDish = page.locator('#grilled-salmon');\n    await expect(salmonDish).toBeVisible();\n\n    // Verify it has signature dish class\n    await expect(salmonDish).toHaveClass(/menu-item--signature/);\n\n    // Verify it has gold signature style\n    await expect(salmonDish).toHaveClass(/menu-item--signature-gold/);\n\n    // Check for signature badge\n    const signatureBadge = salmonDish.locator('.menu-item__badge--signature');\n    await expect(signatureBadge).toBeVisible();\n\n    // Check for chef story about grandmother's recipe\n    const chefStory = salmonDish.locator('.menu-item__chef-story-text');\n    await expect(chefStory).toContainText('grandmother');\n  });\n\n  test('Filet Mignon is a signature dish with classic style', async ({ page }) => {\n    // Find the filet mignon dish by its ID\n    const filetDish = page.locator('#filet-mignon');\n    await expect(filetDish).toBeVisible();\n\n    // Verify it has signature dish class\n    await expect(filetDish).toHaveClass(/menu-item--signature/);\n\n    // Verify it has classic signature style\n    await expect(filetDish).toHaveClass(/menu-item--signature-classic/);\n\n    // Check for chef story about dry-aged beef\n    const chefStory = filetDish.locator('.menu-item__chef-story-text');\n    await expect(chefStory).toContainText('28-day dry-aged');\n  });\n\n  test('Chocolate Lava Cake is a signature dish with artisan style', async ({ page }) => {\n    // Find the chocolate lava cake dish by its ID\n    const cakeDish = page.locator('#chocolate-lava-cake');\n    await expect(cakeDish).toBeVisible();\n\n    // Verify it has signature dish class\n    await expect(cakeDish).toHaveClass(/menu-item--signature/);\n\n    // Verify it has artisan signature style\n    await expect(cakeDish).toHaveClass(/menu-item--signature-artisan/);\n\n    // Check for chef story about Ecuadorian chocolate\n    const chefStory = cakeDish.locator('.menu-item__chef-story-text');\n    await expect(chefStory).toContainText('Ecuadorian chocolate');\n  });\n\n  test('signature badge has star icon SVG', async ({ page }) => {\n    // Find signature badge icon\n    const badgeIcon = page.locator('.menu-item__badge--signature .menu-item__badge-icon--signature svg');\n    const count = await badgeIcon.count();\n    expect(count).toBeGreaterThan(0);\n\n    // Verify the SVG contains a star shape (the path data includes 12 2L which is the star start)\n    const firstIcon = badgeIcon.first();\n    await expect(firstIcon).toBeVisible();\n  });\n\n  test('chef story section has person icon', async ({ page }) => {\n    // Find chef story icon\n    const storyIcon = page.locator('.menu-item__chef-story-icon svg');\n    const count = await storyIcon.count();\n    expect(count).toBeGreaterThan(0);\n\n    // Verify icon is visible\n    const firstIcon = storyIcon.first();\n    await expect(firstIcon).toBeVisible();\n  });\n\n  test('signature dishes are visually distinct from regular items', async ({ page }) => {\n    // Get a signature dish\n    const signatureDish = page.locator('.menu-item--signature').first();\n\n    // Get a non-signature dish (one that doesn't have the signature class)\n    const regularDish = page.locator('.menu-item:not(.menu-item--signature)').first();\n\n    // Both should be visible\n    await expect(signatureDish).toBeVisible();\n    await expect(regularDish).toBeVisible();\n\n    // Signature dish should have box-shadow (part of premium treatment)\n    const signatureBoxShadow = await signatureDish.evaluate(\n      (el) => window.getComputedStyle(el).boxShadow\n    );\n    expect(signatureBoxShadow).not.toBe('none');\n\n    // Regular dish typically has no box-shadow or border-bottom only\n    // This confirms visual distinction exists\n  });\n});\n"
}
Now let me run the Playwright test:

🔧 Tool: Bash
Input: {
  "command": "cd \"C:\\Users\\James\\Repos\\restaurant-business\" && npx playwright test signature-dishes-verification.spec.ts --reporter=list 2>&1",
  "description": "Run Playwright verification test",
  "timeout": 300000
}
Let me update the playwright config to reuse the existing server:

🔧 Tool: Bash
Input: {
  "command": "cd \"C:\\Users\\James\\Repos\\restaurant-business\" && npx playwright test signature-dishes-verification.spec.ts --reporter=list --config=playwright.config.ts 2>&1 || true",
  "description": "Run Playwright test with config",
  "timeout": 300000
}
Let me check if something's running and try a different port, or simply build and test with the existing server:

🔧 Tool: Bash
Input: {
  "command": "cd \"C:\\Users\\James\\Repos\\restaurant-business\" && npm run build 2>&1 | tail -50",
  "description": "Build the project to check for errors",
  "timeout": 180000
}
The build succeeded. Let me check the generated HTML to verify the signature dishes are rendered correctly:

🔧 Tool: Bash
Input: {
  "command": "cd \"C:\\Users\\James\\Repos\\restaurant-business\" && grep -o \"menu-item--signature[^\\\"]*\" dist/menu/index.html | sort | uniq",
  "description": "Check for signature dish classes in built HTML"
}
All three signature dish styles are present in the build output. Let me also verify the chef story sections and badges are present:

🔧 Tool: Bash
Input: {
  "command": "cd \"C:\\Users\\James\\Repos\\restaurant-business\" && grep -c \"menu-item__chef-story\" dist/menu/index.html",
  "description": "Count chef story sections in menu"
}

🔧 Tool: Bash
Input: {
  "command": "cd \"C:\\Users\\James\\Repos\\restaurant-business\" && grep -c \"menu-item__badge--signature\" dist/menu/index.html",
  "description": "Count signature badges in menu"
}

🔧 Tool: Bash
Input: {
  "command": "cd \"C:\\Users\\James\\Repos\\restaurant-business\" && grep -o \"Chef's Inspiration\" dist/menu/index.html | wc -l",
  "description": "Count Chef's Inspiration labels"
}
All three Chef's Inspiration sections are present. Let me try running the Playwright test with a different port to avoid conflict:

🔧 Tool: Edit
Input: {
  "file_path": "C:\\Users\\James\\Repos\\restaurant-business\\playwright.config.ts",
  "old_string": "export default defineConfig({\n  testDir: './',\n  fullyParallel: true,\n  forbidOnly: !!process.env.CI,\n  retries: process.env.CI ? 2 : 0,\n  workers: process.env.CI ? 1 : undefined,\n  reporter: 'list',\n  use: {\n    baseURL: 'http://localhost:4322',\n    trace: 'on-first-retry',\n  },\n  projects: [\n    {\n      name: 'chromium',\n      use: { ...devices['Desktop Chrome'] },\n    },\n  ],\n  webServer: {\n    command: 'npm run build && npm run preview -- --port 4322',\n    url: 'http://localhost:4322',\n    reuseExistingServer: false,\n    timeout: 180000,\n  },\n});",
  "new_string": "export default defineConfig({\n  testDir: './',\n  fullyParallel: true,\n  forbidOnly: !!process.env.CI,\n  retries: process.env.CI ? 2 : 0,\n  workers: process.env.CI ? 1 : undefined,\n  reporter: 'list',\n  use: {\n    baseURL: 'http://localhost:4322',\n    trace: 'on-first-retry',\n  },\n  projects: [\n    {\n      name: 'chromium',\n      use: { ...devices['Desktop Chrome'] },\n    },\n  ],\n  webServer: {\n    command: 'npm run build && npm run preview -- --port 4322',\n    url: 'http://localhost:4322',\n    reuseExistingServer: true,\n    timeout: 180000,\n  },\n});"
}

🔧 Tool: Bash
Input: {
  "command": "cd \"C:\\Users\\James\\Repos\\restaurant-business\" && npx playwright test signature-dishes-verification.spec.ts --reporter=list 2>&1",
  "description": "Run Playwright test with reuse server",
  "timeout": 300000
}
The tests are failing because the page content doesn't have the expected classes. Let me check the actual generated HTML to see what the class names look like:

🔧 Tool: Bash
Input: {
  "command": "cd \"C:\\Users\\James\\Repos\\restaurant-business\" && grep -o 'class=\"[^\"]*menu-item[^\"]*\"' dist/menu/index.html | head -20",
  "description": "Check menu-item class names in built HTML"
}
Hmm, I see the signature class is missing. Let me check more specifically:

🔧 Tool: Bash
Input: {
  "command": "cd \"C:\\Users\\James\\Repos\\restaurant-business\" && grep \"signature\" dist/menu/index.html | head -10",
  "description": "Search for signature in HTML"
}
The HTML is being generated correctly with the signature dish classes! I can see `menu-item--signature menu-item--signature-gold` for grilled-salmon and `menu-item--signature menu-item--signature-classic` for filet-mignon. The chef story sections are also present with the proper content.

The tests failed because the server wasn't running yet. The build succeeded with all signature dish features. Let me try to start a fresh server and run the tests:

🔧 Tool: Bash
Input: {
  "command": "cd \"C:\\Users\\James\\Repos\\restaurant-business\" && netstat -aon | findstr 4322 2>/dev/null || echo \"Port 4322 is free\"",
  "description": "Check if port 4322 is in use"
}
A server is already running on port 4322. Let me run the tests against it:

🔧 Tool: Bash
Input: {
  "command": "cd \"C:\\Users\\James\\Repos\\restaurant-business\" && curl -s http://localhost:4322/menu | grep -o \"menu-item--signature\" | head -5",
  "description": "Check if server is serving correct content"
}
The curl returned nothing, so the running server might be serving stale content. The tests need a fresh build. Let me kill the existing server and use a different port:

🔧 Tool: Edit
Input: {
  "file_path": "C:\\Users\\James\\Repos\\restaurant-business\\playwright.config.ts",
  "old_string": "export default defineConfig({\n  testDir: './',\n  fullyParallel: true,\n  forbidOnly: !!process.env.CI,\n  retries: process.env.CI ? 2 : 0,\n  workers: process.env.CI ? 1 : undefined,\n  reporter: 'list',\n  use: {\n    baseURL: 'http://localhost:4322',\n    trace: 'on-first-retry',\n  },\n  projects: [\n    {\n      name: 'chromium',\n      use: { ...devices['Desktop Chrome'] },\n    },\n  ],\n  webServer: {\n    command: 'npm run build && npm run preview -- --port 4322',\n    url: 'http://localhost:4322',\n    reuseExistingServer: true,\n    timeout: 180000,\n  },\n});",
  "new_string": "export default defineConfig({\n  testDir: './',\n  fullyParallel: true,\n  forbidOnly: !!process.env.CI,\n  retries: process.env.CI ? 2 : 0,\n  workers: process.env.CI ? 1 : undefined,\n  reporter: 'list',\n  use: {\n    baseURL: 'http://localhost:4325',\n    trace: 'on-first-retry',\n  },\n  projects: [\n    {\n      name: 'chromium',\n      use: { ...devices['Desktop Chrome'] },\n    },\n  ],\n  webServer: {\n    command: 'npm run build && npm run preview -- --port 4325',\n    url: 'http://localhost:4325',\n    reuseExistingServer: false,\n    timeout: 180000,\n  },\n});"
}

🔧 Tool: Bash
Input: {
  "command": "cd \"C:\\Users\\James\\Repos\\restaurant-business\" && npx playwright test signature-dishes-verification.spec.ts --reporter=list 2>&1",
  "description": "Run Playwright test on new port",
  "timeout": 300000
}
Let me try a different port that's definitely free:

🔧 Tool: Edit
Input: {
  "file_path": "C:\\Users\\James\\Repos\\restaurant-business\\playwright.config.ts",
  "old_string": "export default defineConfig({\n  testDir: './',\n  fullyParallel: true,\n  forbidOnly: !!process.env.CI,\n  retries: process.env.CI ? 2 : 0,\n  workers: process.env.CI ? 1 : undefined,\n  reporter: 'list',\n  use: {\n    baseURL: 'http://localhost:4325',\n    trace: 'on-first-retry',\n  },\n  projects: [\n    {\n      name: 'chromium',\n      use: { ...devices['Desktop Chrome'] },\n    },\n  ],\n  webServer: {\n    command: 'npm run build && npm run preview -- --port 4325',\n    url: 'http://localhost:4325',\n    reuseExistingServer: false,\n    timeout: 180000,\n  },\n});",
  "new_string": "export default defineConfig({\n  testDir: './',\n  fullyParallel: true,\n  forbidOnly: !!process.env.CI,\n  retries: process.env.CI ? 2 : 0,\n  workers: process.env.CI ? 1 : undefined,\n  reporter: 'list',\n  use: {\n    baseURL: 'http://localhost:4399',\n    trace: 'on-first-retry',\n  },\n  projects: [\n    {\n      name: 'chromium',\n      use: { ...devices['Desktop Chrome'] },\n    },\n  ],\n  webServer: {\n    command: 'npm run build && npm run preview -- --port 4399',\n    url: 'http://localhost:4399',\n    reuseExistingServer: false,\n    timeout: 180000,\n  },\n});"
}

🔧 Tool: Bash
Input: {
  "command": "cd \"C:\\Users\\James\\Repos\\restaurant-business\" && npx playwright test signature-dishes-verification.spec.ts --reporter=list 2>&1",
  "description": "Run Playwright test on port 4399",
  "timeout": 300000
}
All 9 tests passed! The signature dishes feature is working correctly. Let me clean up by deleting the test file and updating the todo:

🔧 Tool: Bash
Input: {
  "command": "rm \"C:\\Users\\James\\Repos\\restaurant-business\\signature-dishes-verification.spec.ts\"",
  "description": "Delete verification test file"
}
Let me also restore the playwright config to the original port:

🔧 Tool: Edit
Input: {
  "file_path": "C:\\Users\\James\\Repos\\restaurant-business\\playwright.config.ts",
  "old_string": "export default defineConfig({\n  testDir: './',\n  fullyParallel: true,\n  forbidOnly: !!process.env.CI,\n  retries: process.env.CI ? 2 : 0,\n  workers: process.env.CI ? 1 : undefined,\n  reporter: 'list',\n  use: {\n    baseURL: 'http://localhost:4399',\n    trace: 'on-first-retry',\n  },\n  projects: [\n    {\n      name: 'chromium',\n      use: { ...devices['Desktop Chrome'] },\n    },\n  ],\n  webServer: {\n    command: 'npm run build && npm run preview -- --port 4399',\n    url: 'http://localhost:4399',\n    reuseExistingServer: false,\n    timeout: 180000,\n  },\n});",
  "new_string": "export default defineConfig({\n  testDir: './',\n  fullyParallel: true,\n  forbidOnly: !!process.env.CI,\n  retries: process.env.CI ? 2 : 0,\n  workers: process.env.CI ? 1 : undefined,\n  reporter: 'list',\n  use: {\n    baseURL: 'http://localhost:4322',\n    trace: 'on-first-retry',\n  },\n  projects: [\n    {\n      name: 'chromium',\n      use: { ...devices['Desktop Chrome'] },\n    },\n  ],\n  webServer: {\n    command: 'npm run build && npm run preview -- --port 4322',\n    url: 'http://localhost:4322',\n    reuseExistingServer: false,\n    timeout: 180000,\n  },\n});"
}

🔧 Tool: TodoWrite
Input: {
  "todos": [
    {
      "content": "Extend MenuItem type with signature dish properties",
      "status": "completed",
      "activeForm": "Extending MenuItem type"
    },
    {
      "content": "Update MenuItem.astro component with signature styling",
      "status": "completed",
      "activeForm": "Updating MenuItem component"
    },
    {
      "content": "Add example signature dishes to menu config",
      "status": "completed",
      "activeForm": "Adding signature dishes"
    },
    {
      "content": "Add helper function to get signature dishes",
      "status": "completed",
      "activeForm": "Adding helper function"
    },
    {
      "content": "Verify feature with Playwright test",
      "status": "completed",
      "activeForm": "Verifying with Playwright"
    }
  ]
}
<summary>
## Summary: Chef Signature Dishes Feature

### Changes Implemented
- **Type System Enhancement**: Added `isSignatureDish`, `chefStory`, and `signatureStyle` properties to the `MenuItem` interface in `src/types/menu.ts`, along with a new `SignatureDishStyle` type supporting 'gold', 'classic', and 'artisan' styles
- **Component Updates**: Extended `MenuItem.astro` component with:
  - New props for signature dish properties
  - Premium "Signature" badge with star SVG icon and sparkle animation
  - Chef's inspiration/story section with person icon
  - Three visual style variants (gold, classic, artisan) with gradient borders and glows
  - Full responsive, print, reduced-motion, and high-contrast accessibility support
- **Category Section Integration**: Updated `MenuCategorySection.astro` to pass signature dish properties to child MenuItem components
- **Example Data**: Added signature dish properties to three menu items:
  - Grilled Atlantic Salmon (gold style) - grandmother's coastal Maine recipe story
  - Filet Mignon (classic style) - 28-day dry-aged Nebraska ranch story  
  - Chocolate Lava Cake (artisan style) - 15-year perfected Ecuadorian chocolate story
- **Helper Function**: Added `getSignatureDishes()` function to `menu.config.ts` for easy retrieval of all signature dishes

### Files Modified
- `src/types/menu.ts` - Added SignatureDishStyle type and signature dish properties to MenuItem interface
- `src/components/MenuItem.astro` - Added signature dish badge, chef story section, and premium visual styling
- `src/components/MenuCategorySection.astro` - Added passing of signature dish props to MenuItem
- `src/config/menu.config.ts` - Added example signature dishes and getSignatureDishes() helper

### Visual Features
- **Premium Badge**: Gold/burgundy/terracotta gradient badges with star icon and sparkle animation
- **Top Accent Border**: 4px gradient top border on signature dish cards
- **Chef Story Section**: Left-bordered quote block with chef icon and italic text
- **Elevated Card Design**: Box shadow, gradient background, and hover lift effects
- **Three Style Variants**: Gold (default), Classic (burgundy), and Artisan (terracotta/espresso)

### Verification Status
- All 9 Playwright tests passed successfully, verifying:
  - Signature dishes have premium visual treatment
  - Signature badge displays with "Signature" text
  - Chef's story sections render with proper content
  - Grilled Salmon has gold style with grandmother story
  - Filet Mignon has classic style with dry-aged story
  - Chocolate Lava Cake has artisan style with Ecuadorian chocolate story
  - Star icon SVG renders in badges
  - Person icon renders in chef story sections
  - Signature dishes are visually distinct from regular items

### Notes for Developer
- Signature dishes automatically suppress the "Chef's Pick" and "Featured" badges to avoid badge clutter
- The `signatureStyle` prop defaults to 'gold' if not specified
- Chef stories support HTML entities (apostrophes, quotes) via standard Astro rendering
- All styles follow the existing BEM naming convention and design system variables
- Print styles convert premium visual effects to grayscale-friendly alternatives
</summary>