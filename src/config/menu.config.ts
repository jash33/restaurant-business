/**
 * Menu Configuration
 * Sample menu data and configuration for the restaurant.
 * This file demonstrates the menu data structure with example items.
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
// Sample Menu Items
// ============================================================================

/**
 * All menu items in a flat array for easy management
 */
export const MENU_ITEMS: MenuItem[] = [
  // Appetizers
  {
    id: 'crispy-calamari',
    name: 'Crispy Calamari',
    description: 'Lightly breaded calamari rings served with house-made marinara sauce and lemon aioli. A perfect start to your meal.',
    shortDescription: 'Lightly breaded calamari with marinara and lemon aioli',
    price: createPrice(1495),
    category: 'appetizers',
    menuTypes: ['lunch', 'dinner'],
    dietaryTags: [],
    allergens: ['shellfish', 'wheat', 'eggs'],
    preparationStyle: 'fried',
    featured: true,
    available: true,
    sortOrder: 1,
    image: {
      src: 'https://images.unsplash.com/photo-1604909052743-94e838986d24?w=600&h=400&fit=crop',
      alt: 'Crispy calamari served with marinara sauce',
      width: 600,
      height: 400,
    },
    nutritionalInfo: {
      calories: 420,
      protein: 18,
      carbohydrates: 32,
      fat: 24,
      sodium: 680,
      servingSize: '1 serving',
    },
    prepTime: 12,
  },
  {
    id: 'bruschetta-trio',
    name: 'Bruschetta Trio',
    description: 'Three classic Italian bruschetta: tomato basil, olive tapenade, and roasted garlic with ricotta. Served on freshly toasted ciabatta.',
    shortDescription: 'Three classic Italian bruschetta varieties',
    price: createPrice(1295),
    category: 'appetizers',
    menuTypes: ['lunch', 'dinner', 'brunch'],
    dietaryTags: ['vegetarian'],
    allergens: ['wheat', 'milk'],
    preparationStyle: 'baked',
    available: true,
    sortOrder: 2,
    image: {
      src: 'https://images.unsplash.com/photo-1572695157366-5e585ab2b69f?w=600&h=400&fit=crop',
      alt: 'Trio of bruschetta on toasted ciabatta',
      width: 600,
      height: 400,
    },
    prepTime: 10,
  },
  {
    id: 'spinach-artichoke-dip',
    name: 'Spinach Artichoke Dip',
    description: 'Creamy blend of spinach, artichoke hearts, and three cheeses. Served warm with house-made tortilla chips and crostini.',
    shortDescription: 'Creamy spinach and artichoke dip with chips',
    price: createPrice(1395),
    category: 'appetizers',
    menuTypes: ['lunch', 'dinner'],
    dietaryTags: ['vegetarian', 'gluten-free'],
    allergens: ['milk'],
    available: true,
    sortOrder: 3,
    image: {
      src: 'https://images.unsplash.com/photo-1576506295286-5cda18df43e7?w=600&h=400&fit=crop',
      alt: 'Creamy spinach artichoke dip with tortilla chips',
      width: 600,
      height: 400,
    },
    prepTime: 15,
  },

  // Soups & Salads
  {
    id: 'french-onion-soup',
    name: 'French Onion Soup',
    description: 'Classic French onion soup with caramelized onions in rich beef broth, topped with crusty bread and melted Gruyère cheese.',
    shortDescription: 'Classic French onion with Gruyère',
    price: createPrice(995),
    category: 'soups-salads',
    menuTypes: ['lunch', 'dinner'],
    dietaryTags: [],
    allergens: ['wheat', 'milk'],
    available: true,
    sortOrder: 1,
    image: {
      src: 'https://images.unsplash.com/photo-1547592166-23ac45744acd?w=600&h=400&fit=crop',
      alt: 'French onion soup with melted cheese',
      width: 600,
      height: 400,
    },
    prepTime: 8,
  },
  {
    id: 'caesar-salad',
    name: 'Classic Caesar Salad',
    description: 'Crisp romaine lettuce tossed with house-made Caesar dressing, shaved Parmesan, and garlic croutons.',
    shortDescription: 'Romaine with Caesar dressing and croutons',
    price: createPrice(1195),
    priceVariants: [
      {
        name: 'Side',
        price: createPrice(795),
        description: 'Smaller portion perfect as a side',
      },
      {
        name: 'Full',
        price: createPrice(1195),
        description: 'Full-size entree portion',
        isDefault: true,
      },
    ],
    addOns: [
      {
        id: 'grilled-chicken',
        name: 'Grilled Chicken',
        price: createPrice(595),
        description: 'Add seasoned grilled chicken breast',
        available: true,
      },
      {
        id: 'grilled-salmon',
        name: 'Grilled Salmon',
        price: createPrice(895),
        description: 'Add fresh Atlantic salmon',
        available: true,
      },
      {
        id: 'grilled-shrimp',
        name: 'Grilled Shrimp',
        price: createPrice(795),
        description: 'Add five grilled jumbo shrimp',
        available: true,
      },
    ],
    category: 'soups-salads',
    menuTypes: ['lunch', 'dinner'],
    dietaryTags: [],
    allergens: ['wheat', 'milk', 'eggs', 'fish'],
    available: true,
    featured: true,
    sortOrder: 2,
    image: {
      src: 'https://images.unsplash.com/photo-1550304943-4f24f54ddde9?w=600&h=400&fit=crop',
      alt: 'Classic Caesar salad with croutons and parmesan',
      width: 600,
      height: 400,
    },
    prepTime: 10,
  },
  {
    id: 'garden-salad',
    name: 'Fresh Garden Salad',
    description: 'Mixed greens with cherry tomatoes, cucumbers, red onion, and carrots. Choice of house-made dressing.',
    shortDescription: 'Mixed greens with fresh vegetables',
    price: createPrice(995),
    category: 'soups-salads',
    menuTypes: ['lunch', 'dinner', 'brunch'],
    dietaryTags: ['vegetarian', 'vegan', 'gluten-free'],
    allergens: [],
    available: true,
    sortOrder: 3,
    image: {
      src: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=600&h=400&fit=crop',
      alt: 'Fresh garden salad with mixed vegetables',
      width: 600,
      height: 400,
    },
    prepTime: 8,
  },

  // Main Courses
  {
    id: 'grilled-salmon',
    name: 'Grilled Atlantic Salmon',
    description: 'Fresh Atlantic salmon fillet grilled to perfection, served with lemon dill butter sauce, seasonal vegetables, and choice of rice pilaf or roasted potatoes.',
    shortDescription: 'Fresh salmon with lemon dill butter',
    price: createPrice(2895),
    category: 'seafood',
    menuTypes: ['lunch', 'dinner'],
    dietaryTags: ['gluten-free'],
    allergens: ['fish', 'milk'],
    preparationStyle: 'grilled',
    featured: true,
    chefRecommended: true,
    available: true,
    sortOrder: 1,
    image: {
      src: 'https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=600&h=400&fit=crop',
      alt: 'Grilled salmon with vegetables',
      width: 600,
      height: 400,
    },
    nutritionalInfo: {
      calories: 520,
      protein: 42,
      carbohydrates: 18,
      fat: 28,
      sodium: 420,
      servingSize: '8 oz fillet',
    },
    prepTime: 20,
    relatedItems: ['garden-salad', 'french-onion-soup'],
    // SIGNATURE DISH - Chef's specialty
    isSignatureDish: true,
    chefStory: 'This dish was inspired by my grandmother\'s Sunday dinners in coastal Maine. The lemon dill butter is her original recipe, passed down through three generations.',
    signatureStyle: 'gold',
  },
  {
    id: 'filet-mignon',
    name: 'Filet Mignon',
    description: 'USDA Prime 8oz center-cut filet, aged 28 days and grilled to your preference. Served with garlic mashed potatoes and asparagus.',
    shortDescription: '8oz USDA Prime center-cut filet',
    price: createPrice(4495),
    priceVariants: [
      {
        name: '6 oz',
        price: createPrice(3695),
        description: 'Petite cut',
      },
      {
        name: '8 oz',
        price: createPrice(4495),
        description: 'Classic cut',
        isDefault: true,
      },
      {
        name: '10 oz',
        price: createPrice(5295),
        description: 'Large cut',
      },
    ],
    addOns: [
      {
        id: 'peppercorn-sauce',
        name: 'Peppercorn Sauce',
        price: createPrice(395),
        description: 'Creamy black peppercorn sauce',
        available: true,
      },
      {
        id: 'blue-cheese-crust',
        name: 'Blue Cheese Crust',
        price: createPrice(495),
        description: 'Topped with melted blue cheese',
        available: true,
      },
      {
        id: 'sauteed-mushrooms',
        name: 'Sautéed Mushrooms',
        price: createPrice(395),
        description: 'Wild mushroom blend',
        available: true,
      },
    ],
    category: 'steaks-grills',
    menuTypes: ['dinner'],
    dietaryTags: ['gluten-free'],
    allergens: ['milk'],
    preparationStyle: 'grilled',
    featured: true,
    chefRecommended: true,
    available: true,
    sortOrder: 1,
    image: {
      src: 'https://images.unsplash.com/photo-1558030006-450675393462?w=600&h=400&fit=crop',
      alt: 'Filet mignon with mashed potatoes',
      width: 600,
      height: 400,
    },
    prepTime: 25,
    // SIGNATURE DISH - Premium steakhouse experience
    isSignatureDish: true,
    chefStory: 'Our 28-day dry-aged filet represents the pinnacle of American steakhouse tradition. Each cut is hand-selected from family-owned ranches in Nebraska.',
    signatureStyle: 'classic',
  },
  {
    id: 'chicken-parmesan',
    name: 'Chicken Parmesan',
    description: 'Crispy breaded chicken breast topped with house-made marinara and melted mozzarella. Served over linguine pasta.',
    shortDescription: 'Breaded chicken with marinara over pasta',
    price: createPrice(2295),
    category: 'main-courses',
    menuTypes: ['lunch', 'dinner'],
    dietaryTags: [],
    allergens: ['wheat', 'milk', 'eggs'],
    preparationStyle: 'fried',
    available: true,
    sortOrder: 2,
    image: {
      src: 'https://images.unsplash.com/photo-1632778149955-e80f8ceca2e8?w=600&h=400&fit=crop',
      alt: 'Chicken parmesan over linguine',
      width: 600,
      height: 400,
    },
    prepTime: 22,
  },
  {
    id: 'vegetable-risotto',
    name: 'Seasonal Vegetable Risotto',
    description: 'Creamy Arborio rice slowly cooked with seasonal vegetables, white wine, and finished with Parmesan cheese and fresh herbs.',
    shortDescription: 'Creamy risotto with seasonal vegetables',
    price: createPrice(1995),
    category: 'main-courses',
    menuTypes: ['lunch', 'dinner'],
    dietaryTags: ['vegetarian', 'gluten-free'],
    allergens: ['milk'],
    available: true,
    seasonal: true,
    seasonAvailable: 'Spring/Summer',
    sortOrder: 3,
    image: {
      src: 'https://images.unsplash.com/photo-1476124369491-e7addf5db371?w=600&h=400&fit=crop',
      alt: 'Creamy vegetable risotto with fresh herbs',
      width: 600,
      height: 400,
    },
    prepTime: 25,
  },

  // Pasta
  {
    id: 'spaghetti-carbonara',
    name: 'Spaghetti Carbonara',
    description: 'Traditional Roman pasta with house-made spaghetti, pancetta, egg yolk, Pecorino Romano, and black pepper.',
    shortDescription: 'Traditional Roman pasta with pancetta',
    price: createPrice(1895),
    category: 'pasta',
    menuTypes: ['lunch', 'dinner'],
    dietaryTags: [],
    allergens: ['wheat', 'eggs', 'milk'],
    available: true,
    sortOrder: 1,
    image: {
      src: 'https://images.unsplash.com/photo-1612874742237-6526221588e3?w=600&h=400&fit=crop',
      alt: 'Spaghetti carbonara with pancetta and egg',
      width: 600,
      height: 400,
    },
    prepTime: 18,
  },
  {
    id: 'penne-arrabbiata',
    name: 'Penne Arrabbiata',
    description: 'Al dente penne pasta in a spicy tomato sauce with garlic, red chili flakes, and fresh basil. A classic Italian favorite.',
    shortDescription: 'Penne in spicy tomato sauce',
    price: createPrice(1695),
    category: 'pasta',
    menuTypes: ['lunch', 'dinner'],
    dietaryTags: ['vegetarian', 'vegan', 'dairy-free'],
    allergens: ['wheat'],
    spiceLevel: 'medium',
    available: true,
    sortOrder: 2,
    image: {
      src: 'https://images.unsplash.com/photo-1563379926898-05f4575a45d8?w=600&h=400&fit=crop',
      alt: 'Penne arrabbiata in spicy tomato sauce',
      width: 600,
      height: 400,
    },
    prepTime: 15,
  },

  // Sandwiches (Lunch)
  {
    id: 'classic-burger',
    name: 'Classic Burger',
    description: 'Half-pound Angus beef patty on a brioche bun with lettuce, tomato, onion, and house sauce. Served with seasoned fries.',
    shortDescription: 'Half-pound Angus beef with fries',
    price: createPrice(1695),
    addOns: [
      {
        id: 'bacon',
        name: 'Bacon',
        price: createPrice(250),
        description: 'Add crispy applewood smoked bacon',
        available: true,
      },
      {
        id: 'cheese',
        name: 'Cheese',
        price: createPrice(150),
        description: 'Add cheddar, Swiss, or American',
        available: true,
      },
      {
        id: 'avocado',
        name: 'Avocado',
        price: createPrice(200),
        description: 'Add fresh sliced avocado',
        available: true,
      },
    ],
    category: 'sandwiches',
    menuTypes: ['lunch'],
    dietaryTags: [],
    allergens: ['wheat', 'eggs', 'milk'],
    preparationStyle: 'grilled',
    featured: true,
    available: true,
    sortOrder: 1,
    image: {
      src: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=600&h=400&fit=crop',
      alt: 'Classic burger with fries',
      width: 600,
      height: 400,
    },
    prepTime: 15,
  },
  {
    id: 'grilled-chicken-sandwich',
    name: 'Grilled Chicken Sandwich',
    description: 'Marinated chicken breast grilled and served on ciabatta with roasted red peppers, arugula, and pesto aioli.',
    shortDescription: 'Grilled chicken with pesto aioli',
    price: createPrice(1595),
    category: 'sandwiches',
    menuTypes: ['lunch'],
    dietaryTags: [],
    allergens: ['wheat', 'milk', 'eggs', 'tree-nuts'],
    preparationStyle: 'grilled',
    available: true,
    sortOrder: 2,
    image: {
      src: 'https://images.unsplash.com/photo-1521390188846-e2a3a97453a0?w=600&h=400&fit=crop',
      alt: 'Grilled chicken sandwich on ciabatta',
      width: 600,
      height: 400,
    },
    prepTime: 15,
  },

  // Desserts
  {
    id: 'tiramisu',
    name: 'Classic Tiramisu',
    description: 'Traditional Italian dessert with layers of espresso-soaked ladyfingers and mascarpone cream, dusted with cocoa powder.',
    shortDescription: 'Traditional Italian tiramisu',
    price: createPrice(1095),
    category: 'desserts',
    menuTypes: ['lunch', 'dinner', 'brunch'],
    dietaryTags: ['vegetarian'],
    allergens: ['wheat', 'milk', 'eggs'],
    featured: true,
    available: true,
    sortOrder: 1,
    image: {
      src: 'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=600&h=400&fit=crop',
      alt: 'Classic tiramisu',
      width: 600,
      height: 400,
    },
    prepTime: 5,
  },
  {
    id: 'chocolate-lava-cake',
    name: 'Chocolate Lava Cake',
    description: 'Warm dark chocolate cake with a molten center, served with vanilla bean ice cream and fresh berries.',
    shortDescription: 'Warm chocolate cake with molten center',
    price: createPrice(1195),
    category: 'desserts',
    menuTypes: ['lunch', 'dinner'],
    dietaryTags: ['vegetarian'],
    allergens: ['wheat', 'milk', 'eggs'],
    chefRecommended: true,
    available: true,
    sortOrder: 2,
    image: {
      src: 'https://images.unsplash.com/photo-1624353365286-3f8d62daad51?w=600&h=400&fit=crop',
      alt: 'Chocolate lava cake with ice cream',
      width: 600,
      height: 400,
    },
    prepTime: 15,
    // SIGNATURE DISH - Artisan dessert
    isSignatureDish: true,
    chefStory: 'Perfected over 15 years, this dessert uses single-origin Ecuadorian chocolate. The timing must be exact - 12 minutes in our wood-fired oven - to achieve the perfect molten center.',
    signatureStyle: 'artisan',
  },
  {
    id: 'creme-brulee',
    name: 'Crème Brûlée',
    description: 'Classic French vanilla custard with a caramelized sugar crust. Served with fresh seasonal berries.',
    shortDescription: 'Vanilla custard with caramelized sugar',
    price: createPrice(1095),
    category: 'desserts',
    menuTypes: ['dinner'],
    dietaryTags: ['vegetarian', 'gluten-free'],
    allergens: ['milk', 'eggs'],
    available: true,
    sortOrder: 3,
    image: {
      src: 'https://images.unsplash.com/photo-1470124182917-cc6e71b22ecc?w=600&h=400&fit=crop',
      alt: 'Crème brûlée with caramelized sugar top',
      width: 600,
      height: 400,
    },
    prepTime: 5,
  },

  // Beverages
  {
    id: 'fresh-lemonade',
    name: 'Fresh-Squeezed Lemonade',
    description: 'House-made lemonade with fresh lemons and a hint of mint.',
    shortDescription: 'House-made with fresh lemons',
    price: createPrice(495),
    category: 'beverages',
    menuTypes: ['lunch', 'dinner', 'brunch'],
    dietaryTags: ['vegetarian', 'vegan', 'gluten-free'],
    allergens: [],
    available: true,
    sortOrder: 1,
    image: {
      src: 'https://images.unsplash.com/photo-1621263764928-df1444c5e859?w=600&h=400&fit=crop',
      alt: 'Fresh-squeezed lemonade with mint',
      width: 600,
      height: 400,
    },
    prepTime: 3,
  },
  {
    id: 'iced-tea',
    name: 'Southern Sweet Iced Tea',
    description: 'Classic Southern-style sweet tea, brewed fresh daily.',
    shortDescription: 'Fresh-brewed sweet tea',
    price: createPrice(395),
    category: 'beverages',
    menuTypes: ['lunch', 'dinner', 'brunch'],
    dietaryTags: ['vegetarian', 'vegan', 'gluten-free'],
    allergens: [],
    available: true,
    sortOrder: 2,
    image: {
      src: 'https://images.unsplash.com/photo-1499638673689-79a0b5115d87?w=600&h=400&fit=crop',
      alt: 'Southern sweet iced tea',
      width: 600,
      height: 400,
    },
    prepTime: 2,
  },

  // Kids Menu
  {
    id: 'kids-mac-cheese',
    name: "Kids' Mac & Cheese",
    description: 'Creamy macaroni and cheese made with real cheddar. Includes a side of fruit or vegetables.',
    shortDescription: 'Creamy mac & cheese with fruit',
    price: createPrice(895),
    category: 'kids',
    menuTypes: ['lunch', 'dinner', 'kids'],
    dietaryTags: ['vegetarian'],
    allergens: ['wheat', 'milk'],
    available: true,
    sortOrder: 1,
    image: {
      src: 'https://images.unsplash.com/photo-1543339494-b4cd4f7ba686?w=600&h=400&fit=crop',
      alt: 'Creamy mac and cheese for kids',
      width: 600,
      height: 400,
    },
    prepTime: 10,
  },
  {
    id: 'kids-chicken-tenders',
    name: "Kids' Chicken Tenders",
    description: 'Crispy chicken tenders served with your choice of dipping sauce and seasoned fries.',
    shortDescription: 'Crispy chicken tenders with fries',
    price: createPrice(995),
    category: 'kids',
    menuTypes: ['lunch', 'dinner', 'kids'],
    dietaryTags: [],
    allergens: ['wheat', 'eggs'],
    preparationStyle: 'fried',
    available: true,
    sortOrder: 2,
    image: {
      src: 'https://images.unsplash.com/photo-1562967914-608f82629710?w=600&h=400&fit=crop',
      alt: 'Crispy chicken tenders with fries',
      width: 600,
      height: 400,
    },
    prepTime: 12,
  },

  // Brunch Items
  {
    id: 'eggs-benedict',
    name: 'Eggs Benedict',
    description: 'Two poached eggs on toasted English muffins with Canadian bacon and hollandaise sauce. Served with breakfast potatoes.',
    shortDescription: 'Poached eggs with hollandaise',
    price: createPrice(1695),
    priceVariants: [
      {
        name: 'Classic',
        price: createPrice(1695),
        description: 'With Canadian bacon',
        isDefault: true,
      },
      {
        name: 'Florentine',
        price: createPrice(1595),
        description: 'With spinach (vegetarian)',
      },
      {
        name: 'Salmon',
        price: createPrice(1895),
        description: 'With smoked salmon',
      },
    ],
    category: 'main-courses',
    menuTypes: ['brunch'],
    dietaryTags: [],
    allergens: ['wheat', 'eggs', 'milk'],
    featured: true,
    available: true,
    sortOrder: 1,
    image: {
      src: 'https://images.unsplash.com/photo-1608039829572-f56e0f6e8f18?w=600&h=400&fit=crop',
      alt: 'Eggs Benedict with hollandaise',
      width: 600,
      height: 400,
    },
    prepTime: 15,
  },
  {
    id: 'avocado-toast',
    name: 'Avocado Toast',
    description: 'Smashed avocado on sourdough toast with cherry tomatoes, microgreens, everything bagel seasoning, and a drizzle of olive oil.',
    shortDescription: 'Smashed avocado on sourdough',
    price: createPrice(1295),
    addOns: [
      {
        id: 'poached-egg',
        name: 'Poached Egg',
        price: createPrice(250),
        description: 'Add a perfectly poached egg',
        available: true,
      },
      {
        id: 'smoked-salmon',
        name: 'Smoked Salmon',
        price: createPrice(595),
        description: 'Add smoked Atlantic salmon',
        available: true,
      },
    ],
    category: 'main-courses',
    menuTypes: ['brunch'],
    dietaryTags: ['vegetarian', 'vegan', 'dairy-free'],
    allergens: ['wheat'],
    isNew: true,
    available: true,
    sortOrder: 2,
    image: {
      src: 'https://images.unsplash.com/photo-1541519227354-08fa5d50c44d?w=600&h=400&fit=crop',
      alt: 'Avocado toast with toppings',
      width: 600,
      height: 400,
    },
    prepTime: 10,
  },
];

// ============================================================================
// Helper Functions
// ============================================================================

/**
 * Get menu items by menu type
 */
export function getMenuItemsByType(type: MenuType): MenuItem[] {
  return MENU_ITEMS.filter((item) => item.menuTypes.includes(type) && item.available !== false);
}

/**
 * Get menu items by category
 */
export function getMenuItemsByCategory(category: MenuCategory): MenuItem[] {
  return MENU_ITEMS.filter((item) => item.category === category && item.available !== false);
}

/**
 * Get featured menu items
 */
export function getFeaturedItems(): MenuItem[] {
  return MENU_ITEMS.filter((item) => item.featured && item.available !== false);
}

/**
 * Get chef recommended items
 */
export function getChefRecommendedItems(): MenuItem[] {
  return MENU_ITEMS.filter((item) => item.chefRecommended && item.available !== false);
}

/**
 * Get signature dishes - chef's specialty items with premium presentation
 * These are the standout items that help guide first-time visitors
 */
export function getSignatureDishes(): MenuItem[] {
  return MENU_ITEMS.filter((item) => item.isSignatureDish && item.available !== false);
}

/**
 * Get items by dietary tag
 */
export function getItemsByDietaryTag(tag: import('../types/menu').DietaryTag): MenuItem[] {
  return MENU_ITEMS.filter(
    (item) => item.dietaryTags?.includes(tag) && item.available !== false
  );
}

/**
 * Get items without specific allergens
 */
export function getItemsWithoutAllergens(
  allergens: import('../types/menu').AllergenTag[]
): MenuItem[] {
  return MENU_ITEMS.filter((item) => {
    if (!item.allergens || item.allergens.length === 0) return true;
    return !item.allergens.some((allergen) => allergens.includes(allergen));
  }).filter((item) => item.available !== false);
}

/**
 * Search menu items by name or description
 */
export function searchMenuItems(query: string): MenuItem[] {
  const lowerQuery = query.toLowerCase();
  return MENU_ITEMS.filter(
    (item) =>
      (item.name.toLowerCase().includes(lowerQuery) ||
        item.description.toLowerCase().includes(lowerQuery)) &&
      item.available !== false
  );
}

/**
 * Get a single menu item by ID
 */
export function getMenuItemById(id: string): MenuItem | undefined {
  return MENU_ITEMS.find((item) => item.id === id);
}

// ============================================================================
// Menu Section Builders
// ============================================================================

/**
 * Build menu sections for a specific menu type
 */
export function buildMenuSections(type: MenuType): MenuSection[] {
  const items = getMenuItemsByType(type);
  const categoryOrder: MenuCategory[] = [
    'appetizers',
    'soups-salads',
    'main-courses',
    'seafood',
    'steaks-grills',
    'pasta',
    'sandwiches',
    'sides',
    'desserts',
    'beverages',
    'kids',
  ];

  const sections: MenuSection[] = [];

  for (const category of categoryOrder) {
    const categoryItems = items.filter((item) => item.category === category);
    if (categoryItems.length > 0) {
      sections.push({
        category,
        title: getCategoryTitle(category),
        description: getCategoryDescription(category),
        items: categoryItems.sort((a, b) => (a.sortOrder || 0) - (b.sortOrder || 0)),
        sortOrder: categoryOrder.indexOf(category),
        visible: true,
      });
    }
  }

  return sections;
}

/**
 * Get display title for a category
 */
function getCategoryTitle(category: MenuCategory): string {
  const titles: Record<MenuCategory, string> = {
    appetizers: 'Appetizers',
    'soups-salads': 'Soups & Salads',
    'main-courses': 'Main Courses',
    seafood: 'Seafood',
    'steaks-grills': 'Steaks & Grills',
    pasta: 'Pasta',
    sandwiches: 'Sandwiches',
    sides: 'Sides',
    desserts: 'Desserts',
    beverages: 'Beverages',
    cocktails: 'Cocktails',
    wine: 'Wine',
    beer: 'Beer',
    kids: 'Kids Menu',
  };
  return titles[category];
}

/**
 * Get description for a category
 */
function getCategoryDescription(category: MenuCategory): string {
  const descriptions: Record<MenuCategory, string> = {
    appetizers: 'Start your meal with these delicious bites',
    'soups-salads': 'Fresh and flavorful options',
    'main-courses': 'Signature entrees crafted with care',
    seafood: 'Fresh catch from the finest sources',
    'steaks-grills': 'Premium cuts grilled to perfection',
    pasta: 'House-made pasta dishes',
    sandwiches: 'Handcrafted sandwiches and burgers',
    sides: 'Perfect accompaniments',
    desserts: 'Sweet endings to your meal',
    beverages: 'Refreshing drinks and more',
    cocktails: 'Craft cocktails and classics',
    wine: 'Curated wine selection',
    beer: 'Local and imported beers',
    kids: 'Kid-friendly favorites',
  };
  return descriptions[category];
}

// ============================================================================
// Pre-built Menus
// ============================================================================

/**
 * Complete Lunch Menu
 */
export const LUNCH_MENU: Menu = {
  id: 'lunch-menu',
  type: 'lunch',
  name: 'Lunch Menu',
  description: 'Join us for a delightful midday meal featuring fresh salads, hearty sandwiches, and lighter entrees.',
  sections: buildMenuSections('lunch'),
  availableHours: '11:00 AM - 3:00 PM',
  availableDays: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
  active: true,
  updatedAt: new Date().toISOString(),
};

/**
 * Complete Dinner Menu
 */
export const DINNER_MENU: Menu = {
  id: 'dinner-menu',
  type: 'dinner',
  name: 'Dinner Menu',
  description: 'Experience an evening of culinary excellence with our signature dishes and premium selections.',
  sections: buildMenuSections('dinner'),
  availableHours: '5:00 PM - 10:00 PM',
  availableDays: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
  active: true,
  updatedAt: new Date().toISOString(),
};

/**
 * Weekend Brunch Menu
 */
export const BRUNCH_MENU: Menu = {
  id: 'brunch-menu',
  type: 'brunch',
  name: 'Weekend Brunch',
  description: 'Enjoy a leisurely weekend brunch with classic favorites and creative twists.',
  sections: buildMenuSections('brunch'),
  availableHours: '9:00 AM - 2:00 PM',
  availableDays: ['Saturday', 'Sunday'],
  active: true,
  updatedAt: new Date().toISOString(),
};

/**
 * Kids Menu
 */
export const KIDS_MENU: Menu = {
  id: 'kids-menu',
  type: 'kids',
  name: 'Kids Menu',
  description: 'Kid-friendly favorites for our younger guests (12 and under).',
  sections: buildMenuSections('kids'),
  availableHours: '11:00 AM - 9:00 PM',
  availableDays: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
  active: true,
  updatedAt: new Date().toISOString(),
};

/**
 * All available menus
 */
export const ALL_MENUS: Menu[] = [LUNCH_MENU, DINNER_MENU, BRUNCH_MENU, KIDS_MENU];

// ============================================================================
// Menu Configuration
// ============================================================================

/**
 * Menu display configuration
 */
export const MENU_CONFIG = {
  /** Default menu to display */
  defaultMenuType: 'dinner' as MenuType,
  /** Show prices with items */
  showPrices: true,
  /** Show dietary tags */
  showDietaryTags: true,
  /** Show allergen information */
  showAllergenInfo: true,
  /** Show images where available */
  showImages: true,
  /** Enable filtering by category */
  enableCategoryFilter: true,
  /** Enable dietary filter */
  enableDietaryFilter: true,
  /** Enable search */
  enableSearch: true,
  /** Items per page for pagination (0 = no pagination) */
  itemsPerPage: 0,
  /** Currency symbol */
  currencySymbol: '$',
  /** Currency code */
  currencyCode: 'USD',
};
