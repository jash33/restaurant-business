/**
 * Specials Showcase Configuration
 *
 * Centralized configuration for the specials showcase component.
 * Edit this file to update rotating specials, limited-time offers,
 * and day-specific promotions.
 *
 * HOW TO UPDATE SPECIALS:
 * 1. Add new specials to the SPECIALS array below
 * 2. Set 'active: true' to display, 'active: false' to hide
 * 3. Use 'daysAvailable' to limit to specific days
 * 4. Use 'startDate' and 'endDate' for limited-time offers
 * 5. Adjust 'sortOrder' to control display order
 */

import type {
  Special,
  SpecialsShowcaseConfig,
  DayOfWeek,
} from '../types/specials-showcase';
import {
  createSpecialPrice,
  filterSpecialsByToday,
  getActiveSpecials,
  sortSpecials,
} from '../types/specials-showcase';

// ============================================================================
// SPECIALS DATA - Edit this section to update your specials
// ============================================================================

export const SPECIALS: Special[] = [
  // ----------------------------------------------------------------------------
  // DAILY SPECIALS - Rotating day-specific offers
  // ----------------------------------------------------------------------------
  {
    id: 'monday-pasta',
    title: 'Monday Pasta Night',
    description: 'All pasta dishes 20% off every Monday. Choose from our house-made favorites.',
    longDescription: 'Every Monday, enjoy 20% off all our house-made pasta dishes. From classic spaghetti carbonara to our signature lobster ravioli, treat yourself to authentic Italian flavors at a special price.',
    image: {
      src: '/images/food/pasta-dish.svg',
      alt: 'Delicious house-made pasta with fresh ingredients',
      width: 800,
      height: 600,
    },
    badge: {
      text: '20% OFF',
      type: 'daily',
      icon: '🍝',
    },
    daysAvailable: ['Monday'],
    price: createSpecialPrice(1599, 1999),
    active: true,
    sortOrder: 1,
    tags: ['pasta', 'italian', 'dinner'],
  },
  {
    id: 'taco-tuesday',
    title: 'Taco Tuesday',
    description: 'Three signature tacos with premium fillings plus a margarita for one great price.',
    longDescription: 'Get three of our signature tacos with your choice of premium fillings, paired with a classic margarita. Choose from carne asada, carnitas, grilled fish, or vegetarian options.',
    image: {
      src: '/images/food/steak-dinner.svg',
      alt: 'Fresh tacos with colorful toppings and lime',
      width: 800,
      height: 600,
    },
    badge: {
      text: 'BEST VALUE',
      type: 'daily',
      icon: '🌮',
    },
    daysAvailable: ['Tuesday'],
    price: createSpecialPrice(1499),
    active: true,
    sortOrder: 2,
    tags: ['tacos', 'mexican', 'drinks'],
  },
  {
    id: 'wine-wednesday',
    title: 'Wine Wednesday',
    description: 'Half-price bottles from our curated wine selection with any entree purchase.',
    longDescription: 'Discover new favorites from our carefully curated wine list. Every Wednesday, enjoy half-price bottles when you purchase any entree. Ask your server about our sommelier recommendations.',
    image: {
      src: '/images/food/dessert-cake.svg',
      alt: 'Elegant wine glasses with red wine',
      width: 800,
      height: 600,
    },
    badge: {
      text: '50% OFF WINE',
      type: 'daily',
      icon: '🍷',
    },
    daysAvailable: ['Wednesday'],
    active: true,
    sortOrder: 3,
    tags: ['wine', 'drinks', 'dinner'],
  },
  {
    id: 'thursday-steak',
    title: 'Prime Cut Thursday',
    description: 'Premium 12oz ribeye with two sides and a glass of house red.',
    longDescription: 'Indulge in our dry-aged 12oz ribeye steak, cooked to perfection and served with your choice of two sides and a glass of our house red wine. Available every Thursday.',
    image: {
      src: '/images/food/steak-dinner.svg',
      alt: 'Perfectly grilled ribeye steak with sides',
      width: 800,
      height: 600,
    },
    badge: {
      text: 'PREMIUM',
      type: 'chef-special',
      icon: '🥩',
    },
    daysAvailable: ['Thursday'],
    price: createSpecialPrice(3499, 4499),
    active: true,
    sortOrder: 4,
    tags: ['steak', 'dinner', 'premium'],
  },

  // ----------------------------------------------------------------------------
  // WEEKEND SPECIALS
  // ----------------------------------------------------------------------------
  {
    id: 'weekend-brunch',
    title: 'Weekend Brunch Buffet',
    description: 'Unlimited brunch favorites with bottomless mimosas. Saturday & Sunday 10am-2pm.',
    longDescription: 'Join us for our legendary weekend brunch buffet featuring made-to-order omelets, fresh pastries, carving station, and so much more. Includes bottomless mimosas or Bloody Marys.',
    image: {
      src: '/images/food/pasta-dish.svg',
      alt: 'Lavish brunch spread with eggs, pastries, and fresh fruit',
      width: 800,
      height: 600,
    },
    badge: {
      text: 'WEEKEND ONLY',
      type: 'weekend',
      icon: '🥐',
    },
    daysAvailable: ['Saturday', 'Sunday'],
    timeAvailable: '10am - 2pm',
    price: createSpecialPrice(3299),
    active: true,
    sortOrder: 5,
    link: '/contact',
    linkText: 'Reserve Your Table',
    tags: ['brunch', 'weekend', 'buffet'],
  },

  // ----------------------------------------------------------------------------
  // FEATURED / LIMITED TIME SPECIALS
  // ----------------------------------------------------------------------------
  {
    id: 'seasonal-menu',
    title: 'Spring Tasting Menu',
    description: 'A five-course journey featuring the freshest seasonal ingredients from local farms.',
    longDescription: 'Experience the flavors of spring with our exclusive five-course tasting menu. Each dish showcases the season\'s finest ingredients, sourced from local farms and prepared with care by our culinary team.',
    image: {
      src: '/images/food/dessert-cake.svg',
      alt: 'Elegant plated course from the seasonal tasting menu',
      width: 800,
      height: 600,
    },
    badge: {
      text: 'SEASONAL',
      type: 'seasonal',
      icon: '🌸',
    },
    price: createSpecialPrice(8500),
    active: true,
    sortOrder: 6,
    link: '/menu#tasting',
    linkText: 'View Full Menu',
    tags: ['tasting-menu', 'seasonal', 'fine-dining'],
  },
  {
    id: 'happy-hour',
    title: 'Happy Hour',
    description: 'Half-price appetizers and $5 well drinks. Monday-Friday 4-6pm.',
    longDescription: 'Unwind after work with our fantastic happy hour specials. Enjoy half-price appetizers and $5 well drinks every weekday from 4-6pm. Perfect for catching up with friends or colleagues.',
    image: {
      src: '/images/food/pasta-dish.svg',
      alt: 'Appetizer platter with drinks at the bar',
      width: 800,
      height: 600,
    },
    badge: {
      text: 'HAPPY HOUR',
      type: 'limited-time',
      icon: '🍻',
    },
    daysAvailable: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
    timeAvailable: '4pm - 6pm',
    active: true,
    sortOrder: 7,
    tags: ['happy-hour', 'drinks', 'appetizers'],
  },
  {
    id: 'family-sunday',
    title: 'Family Sunday Feast',
    description: 'Family-style dinner for 4 with appetizer, two entrees, sides, and dessert.',
    longDescription: 'Bring the family together for our Sunday Feast special. This family-style meal includes a shared appetizer, choice of two entrees, family-size portions of sides, and a dessert to share. Perfect for making memories.',
    image: {
      src: '/images/food/steak-dinner.svg',
      alt: 'Family gathering around a table full of delicious food',
      width: 800,
      height: 600,
    },
    badge: {
      text: 'FAMILY VALUE',
      type: 'featured',
      icon: '👨‍👩‍👧‍👦',
    },
    daysAvailable: ['Sunday'],
    timeAvailable: '4pm - 9pm',
    price: createSpecialPrice(7999, 9999),
    active: true,
    sortOrder: 8,
    link: '/contact',
    linkText: 'Book Now',
    tags: ['family', 'dinner', 'value'],
  },
];

// ============================================================================
// DEFAULT COMPONENT CONFIGURATION
// ============================================================================

export const DEFAULT_SHOWCASE_CONFIG: SpecialsShowcaseConfig = {
  id: 'specials-showcase',
  heading: 'Today\'s Specials',
  subheading: 'Discover our rotating selection of limited-time offers and daily favorites',
  layout: 'carousel',
  autoRotateInterval: 5000, // 5 seconds
  showArrows: true,
  showIndicators: true,
  showBadges: true,
  showPrices: true,
  filterByToday: false, // Set to true to only show today's specials
  maxItems: 0, // 0 = show all
  enableLightbox: true,
};

// ============================================================================
// SEO CONFIGURATION
// ============================================================================

export const SPECIALS_SEO = {
  title: 'Specials & Promotions | Our Restaurant',
  description: 'Discover our rotating specials, limited-time offers, and daily promotions. From Taco Tuesday to Weekend Brunch, find the perfect deal for any occasion.',
  ogImage: '/images/food/pasta-dish.svg',
};

// ============================================================================
// HELPER FUNCTIONS - Use these in your components
// ============================================================================

/**
 * Get all specials that are currently active
 */
export function getAllActiveSpecials(): Special[] {
  return getActiveSpecials(SPECIALS);
}

/**
 * Get specials available today only
 */
export function getTodaysSpecials(): Special[] {
  return sortSpecials(filterSpecialsByToday(SPECIALS));
}

/**
 * Get specials by specific day
 */
export function getSpecialsByDay(day: DayOfWeek): Special[] {
  return sortSpecials(
    SPECIALS.filter(special => {
      if (!special.active) return false;
      if (!special.daysAvailable || special.daysAvailable.length === 0) return true;
      return special.daysAvailable.includes(day);
    })
  );
}

/**
 * Get a specific special by ID
 */
export function getSpecialById(id: string): Special | undefined {
  return SPECIALS.find(special => special.id === id);
}

/**
 * Get specials by tag
 */
export function getSpecialsByTag(tag: string): Special[] {
  return sortSpecials(
    SPECIALS.filter(special => special.active && special.tags?.includes(tag))
  );
}

/**
 * Get featured specials (top N by sort order)
 */
export function getFeaturedSpecials(count: number = 3): Special[] {
  return getActiveSpecials(SPECIALS).slice(0, count);
}

// ============================================================================
// DEFAULT EXPORT
// ============================================================================

export default {
  specials: SPECIALS,
  config: DEFAULT_SHOWCASE_CONFIG,
  seo: SPECIALS_SEO,
  getAllActiveSpecials,
  getTodaysSpecials,
  getSpecialsByDay,
  getSpecialById,
  getSpecialsByTag,
  getFeaturedSpecials,
};
