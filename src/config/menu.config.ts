/**
 * Menu Configuration
 * Ice cream shop menu data and configuration.
 */

import type {
  MenuItem,
  Menu,
  MenuSection,
  MenuItemPrice,
  MenuType,
  MenuCategory,
} from '../types/menu';
import { createPrice } from '../types/menu';

// ============================================================================
// Ice Cream Menu Items
// ============================================================================

/**
 * All menu items in a flat array for easy management
 */
export const MENU_ITEMS: MenuItem[] = [
  // Classic Flavors
  {
    id: 'vanilla-bean',
    name: 'Vanilla Bean',
    description: 'Rich, creamy vanilla made with real Madagascar vanilla beans. Our most popular classic flavor.',
    shortDescription: 'Classic vanilla with Madagascar vanilla beans',
    price: createPrice(495),
    category: 'classics',
    menuTypes: ['regular'],
    dietaryTags: ['vegetarian'],
    allergens: ['milk', 'eggs'],
    available: true,
    sortOrder: 1,
    image: {
      src: 'https://images.unsplash.com/photo-1570197788417-0e82375c9371?w=600&h=400&fit=crop',
      alt: 'Creamy vanilla bean ice cream',
      width: 600,
      height: 400,
    },
    featured: true,
  },
  {
    id: 'chocolate-fudge',
    name: 'Double Chocolate Fudge',
    description: 'Deep, rich chocolate ice cream swirled with ribbons of hot fudge. A chocolate lover\'s dream.',
    shortDescription: 'Rich chocolate with hot fudge swirls',
    price: createPrice(495),
    category: 'classics',
    menuTypes: ['regular'],
    dietaryTags: ['vegetarian'],
    allergens: ['milk', 'eggs', 'soy'],
    available: true,
    sortOrder: 2,
    image: {
      src: 'https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=600&h=400&fit=crop',
      alt: 'Double chocolate fudge ice cream',
      width: 600,
      height: 400,
    },
    featured: true,
  },
  {
    id: 'strawberry',
    name: 'Fresh Strawberry',
    description: 'Sweet cream ice cream loaded with chunks of fresh Texas strawberries. Bright and refreshing.',
    shortDescription: 'Sweet cream with fresh Texas strawberries',
    price: createPrice(495),
    category: 'classics',
    menuTypes: ['regular'],
    dietaryTags: ['vegetarian'],
    allergens: ['milk', 'eggs'],
    available: true,
    sortOrder: 3,
    image: {
      src: 'https://images.unsplash.com/photo-1633933358116-a27b902fad35?w=600&h=400&fit=crop',
      alt: 'Fresh strawberry ice cream',
      width: 600,
      height: 400,
    },
  },

  // Signature Flavors
  {
    id: 'texas-honey-pecan',
    name: 'Texas Honey Pecan',
    description: 'Buttery pecan ice cream with local Texas honey swirls and candied pecan pieces. A Houston favorite!',
    shortDescription: 'Buttery pecan with Texas honey and candied pecans',
    price: createPrice(595),
    category: 'signature',
    menuTypes: ['regular'],
    dietaryTags: ['vegetarian'],
    allergens: ['milk', 'eggs', 'tree nuts'],
    available: true,
    sortOrder: 1,
    image: {
      src: 'https://images.unsplash.com/photo-1560008581-09826d1de69e?w=600&h=400&fit=crop',
      alt: 'Texas honey pecan ice cream',
      width: 600,
      height: 400,
    },
    featured: true,
  },
  {
    id: 'mango-chili-lime',
    name: 'Mango Chili Lime',
    description: 'Tropical mango sorbet with a hint of lime and a touch of chili heat. Inspired by Mexican paletas.',
    shortDescription: 'Tropical mango with lime and chili kick',
    price: createPrice(595),
    category: 'signature',
    menuTypes: ['regular'],
    dietaryTags: ['vegan', 'dairy-free'],
    allergens: [],
    available: true,
    sortOrder: 2,
    image: {
      src: 'https://images.unsplash.com/photo-1501443762994-82bd5dace89a?w=600&h=400&fit=crop',
      alt: 'Mango chili lime sorbet',
      width: 600,
      height: 400,
    },
    featured: true,
  },
  {
    id: 'cookies-cream',
    name: 'Cookies & Cream',
    description: 'Creamy vanilla loaded with crushed chocolate sandwich cookies. A crowd-pleaser for all ages.',
    shortDescription: 'Vanilla ice cream with crushed chocolate cookies',
    price: createPrice(495),
    category: 'classics',
    menuTypes: ['regular'],
    dietaryTags: ['vegetarian'],
    allergens: ['milk', 'eggs', 'wheat', 'soy'],
    available: true,
    sortOrder: 4,
    image: {
      src: 'https://images.unsplash.com/photo-1590080875515-8a3a8dc5735e?w=600&h=400&fit=crop',
      alt: 'Cookies and cream ice cream',
      width: 600,
      height: 400,
    },
  },
  {
    id: 'salted-caramel',
    name: 'Salted Caramel',
    description: 'Rich caramel ice cream with sea salt flakes and caramel ribbon. Sweet meets savory perfection.',
    shortDescription: 'Caramel ice cream with sea salt and caramel swirl',
    price: createPrice(545),
    category: 'signature',
    menuTypes: ['regular'],
    dietaryTags: ['vegetarian'],
    allergens: ['milk', 'eggs'],
    available: true,
    sortOrder: 3,
    image: {
      src: 'https://images.unsplash.com/photo-1580915411954-282cb1b0d780?w=600&h=400&fit=crop',
      alt: 'Salted caramel ice cream',
      width: 600,
      height: 400,
    },
  },
  {
    id: 'mint-chip',
    name: 'Mint Chocolate Chip',
    description: 'Cool, refreshing mint ice cream studded with dark chocolate chips. Naturally green from fresh mint.',
    shortDescription: 'Fresh mint with dark chocolate chips',
    price: createPrice(495),
    category: 'classics',
    menuTypes: ['regular'],
    dietaryTags: ['vegetarian'],
    allergens: ['milk', 'eggs', 'soy'],
    available: true,
    sortOrder: 5,
    image: {
      src: 'https://images.unsplash.com/photo-1505394033641-40c6ad1178d7?w=600&h=400&fit=crop',
      alt: 'Mint chocolate chip ice cream',
      width: 600,
      height: 400,
    },
  },

  // Sundaes
  {
    id: 'classic-sundae',
    name: 'Classic Hot Fudge Sundae',
    description: 'Two scoops of your choice topped with hot fudge, whipped cream, chopped nuts, and a cherry.',
    shortDescription: 'Two scoops with hot fudge, whipped cream, and cherry',
    price: createPrice(895),
    category: 'sundaes',
    menuTypes: ['regular'],
    dietaryTags: ['vegetarian'],
    allergens: ['milk', 'eggs', 'tree nuts', 'soy'],
    available: true,
    sortOrder: 1,
    image: {
      src: 'https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=600&h=400&fit=crop',
      alt: 'Classic hot fudge sundae',
      width: 600,
      height: 400,
    },
    featured: true,
  },
  {
    id: 'banana-split',
    name: 'Banana Split',
    description: 'A split banana with three scoops, chocolate, strawberry, and pineapple toppings, whipped cream, and nuts.',
    shortDescription: 'Classic banana split with three scoops',
    price: createPrice(1095),
    category: 'sundaes',
    menuTypes: ['regular'],
    dietaryTags: ['vegetarian'],
    allergens: ['milk', 'eggs', 'tree nuts'],
    available: true,
    sortOrder: 2,
    image: {
      src: 'https://images.unsplash.com/photo-1432457990754-c8b5f21448de?w=600&h=400&fit=crop',
      alt: 'Classic banana split',
      width: 600,
      height: 400,
    },
  },

  // Shakes & Floats
  {
    id: 'classic-shake',
    name: 'Classic Milkshake',
    description: 'Thick and creamy milkshake made with any flavor. Add malt for 50¢ more.',
    shortDescription: 'Thick, creamy shake in any flavor',
    price: createPrice(695),
    category: 'shakes',
    menuTypes: ['regular'],
    dietaryTags: ['vegetarian'],
    allergens: ['milk', 'eggs'],
    available: true,
    sortOrder: 1,
    image: {
      src: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=600&h=400&fit=crop',
      alt: 'Classic milkshake',
      width: 600,
      height: 400,
    },
  },
  {
    id: 'root-beer-float',
    name: 'Root Beer Float',
    description: 'Frosty mug of root beer with two scoops of vanilla ice cream. A timeless classic.',
    shortDescription: 'Root beer with vanilla ice cream',
    price: createPrice(595),
    category: 'shakes',
    menuTypes: ['regular'],
    dietaryTags: ['vegetarian'],
    allergens: ['milk', 'eggs'],
    available: true,
    sortOrder: 2,
    image: {
      src: 'https://images.unsplash.com/photo-1541658016709-82535e94bc69?w=600&h=400&fit=crop',
      alt: 'Root beer float',
      width: 600,
      height: 400,
    },
  },
];

// ============================================================================
// Menu Categories
// ============================================================================

export const MENU_CATEGORIES: MenuCategory[] = [
  {
    id: 'classics',
    name: 'Classic Flavors',
    description: 'Our timeless favorites made fresh daily',
    sortOrder: 1,
  },
  {
    id: 'signature',
    name: 'Signature Flavors',
    description: 'Unique creations you\'ll only find at HTX Creamery',
    sortOrder: 2,
  },
  {
    id: 'sundaes',
    name: 'Sundaes',
    description: 'Build your own masterpiece or try our classics',
    sortOrder: 3,
  },
  {
    id: 'shakes',
    name: 'Shakes & Floats',
    description: 'Thick shakes and old-fashioned floats',
    sortOrder: 4,
  },
];

// ============================================================================
// Menu Sections Configuration
// ============================================================================

export const MENU_SECTIONS: MenuSection[] = MENU_CATEGORIES.map(cat => ({
  id: cat.id,
  name: cat.name,
  description: cat.description,
  items: MENU_ITEMS.filter(item => item.category === cat.id),
  sortOrder: cat.sortOrder,
}));

// ============================================================================
// Menu Types
// ============================================================================

export const MENU_TYPES: MenuType[] = [
  {
    id: 'regular',
    name: 'Menu',
    description: 'Our full ice cream menu',
    available: true,
  },
];

// ============================================================================
// Full Menu Export
// ============================================================================

export const MENU: Menu = {
  sections: MENU_SECTIONS,
  types: MENU_TYPES,
  categories: MENU_CATEGORIES,
  items: MENU_ITEMS,
  lastUpdated: new Date().toISOString(),
};

export default MENU;


// ============================================================================
// Helper Functions
// ============================================================================

/**
 * Get menu items filtered by category
 */
export function getMenuItemsByCategory(categoryId: string): MenuItem[] {
  return MENU_ITEMS.filter(item => item.category === categoryId);
}

/**
 * Get featured menu items
 */
export function getFeaturedItems(): MenuItem[] {
  return MENU_ITEMS.filter(item => item.featured);
}

/**
 * Get menu items by menu type
 */
export function getMenuItemsByType(menuType: string): MenuItem[] {
  return MENU_ITEMS.filter(item => item.menuTypes.includes(menuType));
}


/**
 * Build menu sections from items and categories
 */
export function buildMenuSections(items: MenuItem[], categories: MenuCategory[]): MenuSection[] {
  return categories.map(cat => ({
    id: cat.id,
    name: cat.name,
    description: cat.description,
    items: items.filter(item => item.category === cat.id),
    sortOrder: cat.sortOrder,
  }));
}

/**
 * Dinner menu (alias for main menu - ice cream shop)
 */
export const DINNER_MENU = {
  sections: MENU_SECTIONS,
  items: MENU_ITEMS,
  categories: MENU_CATEGORIES,
};

/**
 * Lunch menu (alias for main menu)
 */
export const LUNCH_MENU = DINNER_MENU;

/**
 * Brunch menu (alias for main menu)
 */
export const BRUNCH_MENU = DINNER_MENU;

/**
 * Kids menu (alias for main menu - ice cream is kid-friendly!)
 */
export const KIDS_MENU = DINNER_MENU;

/**
 * Re-export Menu type for convenience
 */
export type { Menu, MenuItem, MenuSection, MenuCategory, MenuType } from '../types/menu';
