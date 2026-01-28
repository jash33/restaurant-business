/**
 * Menu Types
 * Type definitions for restaurant menu data including categories, items, prices,
 * descriptions, dietary tags, and optional photo references.
 * Supports multiple menu types (lunch, dinner, brunch).
 */

// ============================================================================
// Menu Type Enums
// ============================================================================

/**
 * Types of menus available
 */
export type MenuType = 'lunch' | 'dinner' | 'brunch' | 'dessert' | 'drinks' | 'kids';

/**
 * Menu item categories
 */
export type MenuCategory =
  | 'appetizers'
  | 'soups-salads'
  | 'main-courses'
  | 'seafood'
  | 'steaks-grills'
  | 'pasta'
  | 'sandwiches'
  | 'sides'
  | 'desserts'
  | 'beverages'
  | 'cocktails'
  | 'wine'
  | 'beer'
  | 'kids';

/**
 * Dietary tags for menu items
 */
export type DietaryTag =
  | 'vegetarian'
  | 'vegan'
  | 'gluten-free'
  | 'dairy-free'
  | 'nut-free'
  | 'egg-free'
  | 'soy-free'
  | 'halal'
  | 'kosher'
  | 'organic'
  | 'locally-sourced'
  | 'spicy'
  | 'mild';

/**
 * Allergen tags for menu items
 */
export type AllergenTag =
  | 'milk'
  | 'eggs'
  | 'fish'
  | 'shellfish'
  | 'tree-nuts'
  | 'peanuts'
  | 'wheat'
  | 'soy'
  | 'sesame'
  | 'mustard'
  | 'celery'
  | 'lupin'
  | 'molluscs'
  | 'sulphites';

/**
 * Spice level for dishes
 */
export type SpiceLevel = 'none' | 'mild' | 'medium' | 'hot' | 'extra-hot';

/**
 * Preparation styles
 */
export type PreparationStyle =
  | 'grilled'
  | 'fried'
  | 'baked'
  | 'steamed'
  | 'raw'
  | 'smoked'
  | 'roasted'
  | 'sauteed'
  | 'braised';

// ============================================================================
// Option Interfaces (for UI dropdowns/filters)
// ============================================================================

/**
 * Menu type option for UI selection
 */
export interface MenuTypeOption {
  value: MenuType;
  label: string;
  description?: string;
  availableFrom?: string;
  availableTo?: string;
}

/**
 * Menu category option for UI filters
 */
export interface MenuCategoryOption {
  value: MenuCategory;
  label: string;
  description?: string;
  icon?: string;
}

/**
 * Dietary tag option for UI display
 */
export interface DietaryTagOption {
  value: DietaryTag;
  label: string;
  abbreviation?: string;
  icon?: string;
  description?: string;
}

/**
 * Allergen tag option for UI display
 */
export interface AllergenTagOption {
  value: AllergenTag;
  label: string;
  icon?: string;
  severity?: 'warning' | 'danger';
}

// ============================================================================
// Core Data Interfaces
// ============================================================================

/**
 * Image configuration for menu items
 */
export interface MenuItemImage {
  /** Main image source path */
  src: string;
  /** WebP format source for modern browsers */
  srcWebP?: string;
  /** Alt text for accessibility */
  alt: string;
  /** Image width in pixels */
  width?: number;
  /** Image height in pixels */
  height?: number;
  /** Placeholder/blur-up image (base64 or low-res URL) */
  placeholder?: string;
}

/**
 * Price information for a menu item
 */
export interface MenuItemPrice {
  /** Base price in the smallest currency unit (cents) for precision */
  amount: number;
  /** Currency code (ISO 4217) */
  currency: string;
  /** Formatted display string (e.g., "$18.99") */
  display: string;
  /** Price per unit description (e.g., "per person", "per dozen") */
  unit?: string;
}

/**
 * Price variant for items with multiple sizes/options
 */
export interface MenuItemPriceVariant {
  /** Variant name (e.g., "Small", "Large", "Half Portion") */
  name: string;
  /** Price for this variant */
  price: MenuItemPrice;
  /** Description of what this variant includes */
  description?: string;
  /** Whether this is the default selection */
  isDefault?: boolean;
}

/**
 * Add-on or modifier for a menu item
 */
export interface MenuItemAddOn {
  /** Unique identifier for the add-on */
  id: string;
  /** Add-on name */
  name: string;
  /** Additional price for this add-on */
  price: MenuItemPrice;
  /** Description of the add-on */
  description?: string;
  /** Whether this add-on is available */
  available?: boolean;
}

/**
 * Nutritional information for a menu item
 */
export interface NutritionalInfo {
  /** Calories per serving */
  calories?: number;
  /** Protein in grams */
  protein?: number;
  /** Carbohydrates in grams */
  carbohydrates?: number;
  /** Fat in grams */
  fat?: number;
  /** Saturated fat in grams */
  saturatedFat?: number;
  /** Fiber in grams */
  fiber?: number;
  /** Sugar in grams */
  sugar?: number;
  /** Sodium in milligrams */
  sodium?: number;
  /** Serving size description */
  servingSize?: string;
}

/**
 * Signature dish visual style for premium presentation
 */
export type SignatureDishStyle = 'gold' | 'classic' | 'artisan';

/**
 * Represents a single menu item
 */
export interface MenuItem {
  /** Unique identifier for the item */
  id: string;
  /** Item name */
  name: string;
  /** Full description of the item */
  description: string;
  /** Short description for compact displays */
  shortDescription?: string;
  /** Primary price (or base price if variants exist) */
  price: MenuItemPrice;
  /** Price variants for different sizes/portions */
  priceVariants?: MenuItemPriceVariant[];
  /** Available add-ons/modifiers */
  addOns?: MenuItemAddOn[];
  /** Item category */
  category: MenuCategory;
  /** Menu types this item appears on */
  menuTypes: MenuType[];
  /** Dietary tags */
  dietaryTags?: DietaryTag[];
  /** Allergen information */
  allergens?: AllergenTag[];
  /** Spice level indicator */
  spiceLevel?: SpiceLevel;
  /** Preparation style */
  preparationStyle?: PreparationStyle;
  /** Main image */
  image?: MenuItemImage;
  /** Additional gallery images */
  gallery?: MenuItemImage[];
  /** Whether this is a featured/signature item */
  featured?: boolean;
  /** Whether this is a chef's recommendation */
  chefRecommended?: boolean;
  /** Whether this is a new item */
  isNew?: boolean;
  /** Whether this is a seasonal item */
  seasonal?: boolean;
  /** Season availability (if seasonal) */
  seasonAvailable?: string;
  /** Whether the item is currently available */
  available?: boolean;
  /** Sort order within category */
  sortOrder?: number;
  /** Related item IDs for suggestions */
  relatedItems?: string[];
  /** Nutritional information */
  nutritionalInfo?: NutritionalInfo;
  /** Preparation time in minutes */
  prepTime?: number;
  /** Internal notes (not displayed to customers) */
  internalNotes?: string;
  /** Date item was added */
  createdAt?: string;
  /** Date item was last updated */
  updatedAt?: string;

  // =========================================================================
  // SIGNATURE DISH PROPERTIES
  // =========================================================================
  /** Whether this is a signature dish with premium presentation */
  isSignatureDish?: boolean;
  /** Chef's story or inspiration behind the dish */
  chefStory?: string;
  /** Visual style for the signature dish badge/presentation */
  signatureStyle?: SignatureDishStyle;
}

/**
 * Represents a menu category section
 */
export interface MenuSection {
  /** Category identifier */
  category: MenuCategory;
  /** Display title for the section */
  title: string;
  /** Section description */
  description?: string;
  /** Section image/header */
  image?: MenuItemImage;
  /** Items in this section */
  items: MenuItem[];
  /** Sort order for display */
  sortOrder?: number;
  /** Whether section is visible */
  visible?: boolean;
}

/**
 * Represents a complete menu
 */
export interface Menu {
  /** Unique identifier for the menu */
  id: string;
  /** Menu type */
  type: MenuType;
  /** Menu display name */
  name: string;
  /** Menu description */
  description?: string;
  /** Sections/categories in this menu */
  sections: MenuSection[];
  /** Availability hours (e.g., "11:00 AM - 3:00 PM") */
  availableHours?: string;
  /** Days available */
  availableDays?: string[];
  /** Whether this menu is currently active */
  active?: boolean;
  /** Effective date for this menu version */
  effectiveDate?: string;
  /** Expiration date (for seasonal menus) */
  expirationDate?: string;
  /** Last updated timestamp */
  updatedAt?: string;
}

// ============================================================================
// Component Props Interfaces
// ============================================================================

/**
 * Props for MenuCard component
 */
export interface MenuItemCardProps extends MenuItem {
  /** Additional CSS class names */
  class?: string;
  /** Whether to show the full description or truncated */
  showFullDescription?: boolean;
  /** Whether to show the image */
  showImage?: boolean;
  /** Whether to show dietary tags */
  showDietaryTags?: boolean;
  /** Whether to show allergen information */
  showAllergens?: boolean;
  /** Whether to show nutritional info */
  showNutrition?: boolean;
  /** Click handler for the card */
  onClick?: () => void;
}

/**
 * Props for MenuSection component
 */
export interface MenuSectionProps extends MenuSection {
  /** Additional CSS class names */
  class?: string;
  /** Layout style */
  layout?: 'grid' | 'list';
  /** Number of columns for grid layout */
  columns?: 2 | 3 | 4;
  /** Whether to show images for items */
  showItemImages?: boolean;
}

/**
 * Layout style for MenuCategorySection
 * - compact: Single column list, minimal spacing
 * - detailed: Grid with full descriptions and dietary tags
 * - photo-heavy: Large image grid, prominent visuals
 */
export type MenuCategorySectionLayout = 'compact' | 'detailed' | 'photo-heavy';

/**
 * Props for MenuCategorySection component
 * A category section with decorative heading, optional description, and grid layout
 */
export interface MenuCategorySectionProps {
  /** Category identifier - used to fetch items if not provided */
  category?: MenuCategory;
  /** Custom title (defaults to category title) */
  title?: string;
  /** Category description text */
  description?: string;
  /** Menu items to display (if not provided, fetched by category) */
  items?: MenuItem[];
  /** Layout style */
  layout?: MenuCategorySectionLayout;
  /** Number of columns for grid layouts */
  columns?: 1 | 2 | 3 | 4;
  /** Whether to show item images */
  showImages?: boolean;
  /** Whether to show item prices */
  showPrices?: boolean;
  /** Whether to show dietary tags */
  showDietaryTags?: boolean;
  /** Optional header image for the section */
  headerImage?: MenuItemImage;
  /** Decorative heading style */
  decoratedHeading?: boolean;
  /** Section HTML id */
  id?: string;
  /** Additional CSS class names */
  class?: string;
}

/**
 * Props for Menu component
 */
export interface MenuProps extends Menu {
  /** Additional CSS class names */
  class?: string;
  /** Whether to enable category filtering */
  enableFiltering?: boolean;
  /** Initial category filter */
  initialFilter?: MenuCategory | 'all';
  /** Whether to show dietary filter */
  showDietaryFilter?: boolean;
  /** Layout preference */
  layout?: 'full' | 'compact';
}

/**
 * Filter options for menu display
 */
export interface MenuFilterOptions {
  /** Selected menu type */
  menuType?: MenuType;
  /** Selected category */
  category?: MenuCategory | 'all';
  /** Dietary filters to apply */
  dietaryFilters?: DietaryTag[];
  /** Allergens to exclude */
  excludeAllergens?: AllergenTag[];
  /** Price range filter */
  priceRange?: {
    min?: number;
    max?: number;
  };
  /** Show only featured items */
  featuredOnly?: boolean;
  /** Show only available items */
  availableOnly?: boolean;
  /** Search query */
  searchQuery?: string;
}

// ============================================================================
// Configuration Constants
// ============================================================================

/**
 * Menu type options for UI
 */
export const MENU_TYPE_OPTIONS: MenuTypeOption[] = [
  { value: 'lunch', label: 'Lunch', description: 'Available 11:00 AM - 3:00 PM', availableFrom: '11:00', availableTo: '15:00' },
  { value: 'dinner', label: 'Dinner', description: 'Available 5:00 PM - 10:00 PM', availableFrom: '17:00', availableTo: '22:00' },
  { value: 'brunch', label: 'Brunch', description: 'Available Sat & Sun 9:00 AM - 2:00 PM', availableFrom: '09:00', availableTo: '14:00' },
  { value: 'dessert', label: 'Desserts', description: 'Available all day' },
  { value: 'drinks', label: 'Drinks', description: 'Full bar available' },
  { value: 'kids', label: 'Kids Menu', description: 'For children 12 and under' },
];

/**
 * Menu category options for UI
 */
export const MENU_CATEGORY_OPTIONS: MenuCategoryOption[] = [
  { value: 'appetizers', label: 'Appetizers', description: 'Start your meal right' },
  { value: 'soups-salads', label: 'Soups & Salads', description: 'Fresh and flavorful' },
  { value: 'main-courses', label: 'Main Courses', description: 'Signature entrees' },
  { value: 'seafood', label: 'Seafood', description: 'Fresh catch of the day' },
  { value: 'steaks-grills', label: 'Steaks & Grills', description: 'Premium cuts' },
  { value: 'pasta', label: 'Pasta', description: 'House-made pasta dishes' },
  { value: 'sandwiches', label: 'Sandwiches', description: 'Handcrafted sandwiches' },
  { value: 'sides', label: 'Sides', description: 'Perfect accompaniments' },
  { value: 'desserts', label: 'Desserts', description: 'Sweet endings' },
  { value: 'beverages', label: 'Beverages', description: 'Refreshing drinks' },
  { value: 'cocktails', label: 'Cocktails', description: 'Craft cocktails' },
  { value: 'wine', label: 'Wine', description: 'Curated wine selection' },
  { value: 'beer', label: 'Beer', description: 'Local and imported beers' },
  { value: 'kids', label: 'Kids', description: 'Kid-friendly favorites' },
];

/**
 * Dietary tag options for UI
 */
export const DIETARY_TAG_OPTIONS: DietaryTagOption[] = [
  { value: 'vegetarian', label: 'Vegetarian', abbreviation: 'V', description: 'No meat or fish' },
  { value: 'vegan', label: 'Vegan', abbreviation: 'VG', description: 'No animal products' },
  { value: 'gluten-free', label: 'Gluten-Free', abbreviation: 'GF', description: 'No gluten-containing ingredients' },
  { value: 'dairy-free', label: 'Dairy-Free', abbreviation: 'DF', description: 'No dairy products' },
  { value: 'nut-free', label: 'Nut-Free', abbreviation: 'NF', description: 'No tree nuts or peanuts' },
  { value: 'egg-free', label: 'Egg-Free', abbreviation: 'EF', description: 'No eggs' },
  { value: 'soy-free', label: 'Soy-Free', abbreviation: 'SF', description: 'No soy products' },
  { value: 'halal', label: 'Halal', abbreviation: 'H', description: 'Prepared according to Islamic law' },
  { value: 'kosher', label: 'Kosher', abbreviation: 'K', description: 'Prepared according to Jewish dietary law' },
  { value: 'organic', label: 'Organic', abbreviation: 'O', description: 'Made with organic ingredients' },
  { value: 'locally-sourced', label: 'Locally Sourced', abbreviation: 'LS', description: 'Ingredients from local farms' },
  { value: 'spicy', label: 'Spicy', abbreviation: 'S', description: 'Contains spicy ingredients' },
  { value: 'mild', label: 'Mild', abbreviation: 'M', description: 'Not spicy' },
];

/**
 * Allergen tag options for UI
 */
export const ALLERGEN_TAG_OPTIONS: AllergenTagOption[] = [
  { value: 'milk', label: 'Milk', severity: 'warning' },
  { value: 'eggs', label: 'Eggs', severity: 'warning' },
  { value: 'fish', label: 'Fish', severity: 'danger' },
  { value: 'shellfish', label: 'Shellfish', severity: 'danger' },
  { value: 'tree-nuts', label: 'Tree Nuts', severity: 'danger' },
  { value: 'peanuts', label: 'Peanuts', severity: 'danger' },
  { value: 'wheat', label: 'Wheat', severity: 'warning' },
  { value: 'soy', label: 'Soy', severity: 'warning' },
  { value: 'sesame', label: 'Sesame', severity: 'warning' },
  { value: 'mustard', label: 'Mustard', severity: 'warning' },
  { value: 'celery', label: 'Celery', severity: 'warning' },
  { value: 'lupin', label: 'Lupin', severity: 'warning' },
  { value: 'molluscs', label: 'Molluscs', severity: 'danger' },
  { value: 'sulphites', label: 'Sulphites', severity: 'warning' },
];

/**
 * Spice level options for UI
 */
export const SPICE_LEVEL_OPTIONS: { value: SpiceLevel; label: string; icon: string }[] = [
  { value: 'none', label: 'No Spice', icon: '' },
  { value: 'mild', label: 'Mild', icon: '🌶️' },
  { value: 'medium', label: 'Medium', icon: '🌶️🌶️' },
  { value: 'hot', label: 'Hot', icon: '🌶️🌶️🌶️' },
  { value: 'extra-hot', label: 'Extra Hot', icon: '🌶️🌶️🌶️🌶️' },
];

/**
 * Default currency for prices
 */
export const DEFAULT_CURRENCY = 'USD';

/**
 * Helper function to create a price object
 */
export function createPrice(amount: number, currency: string = DEFAULT_CURRENCY): MenuItemPrice {
  const dollars = amount / 100;
  return {
    amount,
    currency,
    display: new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency,
    }).format(dollars),
  };
}

/**
 * Helper function to format price from cents to display string
 */
export function formatPrice(amountInCents: number, currency: string = DEFAULT_CURRENCY): string {
  const dollars = amountInCents / 100;
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency,
  }).format(dollars);
}
