/**
 * Gallery Configuration
 *
 * Centralized configuration for the photo gallery showcasing
 * restaurant interior, exterior, and food photography.
 */

import type { GalleryImage } from '../components/PhotoGallery.astro';

/**
 * Gallery categories
 */
export const GALLERY_CATEGORIES = [
  'interior',
  'exterior',
  'food',
  'events',
] as const;

export type GalleryCategory = typeof GALLERY_CATEGORIES[number];

/**
 * Restaurant photo gallery images
 * Showcasing interior, exterior, and food photography
 */
export const GALLERY_IMAGES: GalleryImage[] = [
  // Interior Photos
  {
    src: '/images/food/pasta-dish.svg',
    alt: 'Elegant dining room with warm ambient lighting and modern decor',
    title: 'Main Dining Room',
    description: 'Our spacious dining area features elegant table settings and warm atmosphere',
    width: 1200,
    height: 800,
    category: 'interior',
  },
  {
    src: '/images/food/steak-dinner.svg',
    alt: 'Cozy bar area with premium spirits and comfortable seating',
    title: 'The Bar',
    description: 'Relax with craft cocktails at our beautifully designed bar',
    width: 1200,
    height: 900,
    category: 'interior',
  },
  {
    src: '/images/food/dessert-cake.svg',
    alt: 'Private dining room perfect for special occasions',
    title: 'Private Dining',
    description: 'Host your special events in our intimate private dining space',
    width: 1000,
    height: 750,
    category: 'interior',
  },

  // Exterior Photos
  {
    src: '/images/food/pasta-dish.svg',
    alt: 'Restaurant exterior with beautiful facade and outdoor seating',
    title: 'Our Building',
    description: 'Welcoming exterior with seasonal outdoor dining',
    width: 1400,
    height: 900,
    category: 'exterior',
  },
  {
    src: '/images/food/steak-dinner.svg',
    alt: 'Charming patio area with string lights for evening dining',
    title: 'The Patio',
    description: 'Enjoy al fresco dining on our beautiful patio',
    width: 1200,
    height: 800,
    category: 'exterior',
  },

  // Food Photos
  {
    src: '/images/food/pasta-dish.svg',
    alt: 'Fresh homemade pasta with tomato sauce and basil garnish',
    title: 'Homemade Pasta',
    description: 'Hand-rolled pasta with San Marzano tomato sauce',
    width: 800,
    height: 600,
    category: 'food',
  },
  {
    src: '/images/food/steak-dinner.svg',
    alt: 'Prime ribeye steak with asparagus and herb butter',
    title: 'Prime Ribeye',
    description: 'Dry-aged 28-day ribeye with seasonal vegetables',
    width: 800,
    height: 600,
    category: 'food',
  },
  {
    src: '/images/food/dessert-cake.svg',
    alt: 'Chocolate mousse cake with fresh berries and cream',
    title: 'Chocolate Mousse',
    description: 'Belgian chocolate mousse with raspberry coulis',
    width: 800,
    height: 600,
    category: 'food',
  },
  {
    src: '/images/food/pasta-dish.svg',
    alt: 'Artisan cheese board with seasonal accompaniments',
    title: 'Cheese Selection',
    description: 'Curated selection of local and imported cheeses',
    width: 900,
    height: 600,
    category: 'food',
  },
  {
    src: '/images/food/dessert-cake.svg',
    alt: 'Fresh seafood platter with oysters and shrimp',
    title: 'Seafood Tower',
    description: 'Daily catch featuring the freshest seafood',
    width: 850,
    height: 700,
    category: 'food',
  },

  // Event Photos
  {
    src: '/images/food/steak-dinner.svg',
    alt: 'Elegant wedding reception setup with floral arrangements',
    title: 'Wedding Reception',
    description: 'Creating memorable moments for your special day',
    width: 1200,
    height: 800,
    category: 'events',
  },
  {
    src: '/images/food/pasta-dish.svg',
    alt: 'Corporate event with professional table settings',
    title: 'Corporate Events',
    description: 'Professional setting for business gatherings',
    width: 1100,
    height: 750,
    category: 'events',
  },
];

/**
 * Gallery page SEO configuration
 */
export const GALLERY_SEO = {
  title: 'Photo Gallery | Our Restaurant',
  description: 'Explore our restaurant through stunning photography - from our elegant dining spaces to our exquisite culinary creations.',
  ogImage: '/images/food/pasta-dish.svg',
};

/**
 * Get images by category
 */
export function getImagesByCategory(category: GalleryCategory): GalleryImage[] {
  return GALLERY_IMAGES.filter(img => img.category === category);
}

/**
 * Get featured images (one from each category)
 */
export function getFeaturedImages(): GalleryImage[] {
  const featured: GalleryImage[] = [];
  const seenCategories = new Set<string>();

  for (const image of GALLERY_IMAGES) {
    if (image.category && !seenCategories.has(image.category)) {
      featured.push(image);
      seenCategories.add(image.category);
    }
  }

  return featured;
}

export default {
  images: GALLERY_IMAGES,
  categories: GALLERY_CATEGORIES,
  seo: GALLERY_SEO,
  getImagesByCategory,
  getFeaturedImages,
};
