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
 *
 * Note: Using Unsplash stock photos for high-quality visuals
 * All images are royalty-free and properly sized for web
 */
export const GALLERY_IMAGES: GalleryImage[] = [
  // Interior Photos
  {
    src: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1200&h=800&fit=crop&q=80',
    alt: 'Elegant dining room with warm ambient lighting and modern decor',
    title: 'Main Dining Room',
    description: 'Our spacious dining area features elegant table settings and warm atmosphere',
    width: 1200,
    height: 800,
    category: 'interior',
  },
  {
    src: 'https://images.unsplash.com/photo-1470337458703-46ad1756a187?w=1200&h=900&fit=crop&q=80',
    alt: 'Cozy bar area with premium spirits and comfortable seating',
    title: 'The Bar',
    description: 'Relax with craft cocktails at our beautifully designed bar',
    width: 1200,
    height: 900,
    category: 'interior',
  },
  {
    src: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1000&h=750&fit=crop&q=80',
    alt: 'Private dining room perfect for special occasions',
    title: 'Private Dining',
    description: 'Host your special events in our intimate private dining space',
    width: 1000,
    height: 750,
    category: 'interior',
  },

  // Exterior Photos
  {
    src: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=1400&h=900&fit=crop&q=80',
    alt: 'Restaurant exterior with beautiful facade and outdoor seating',
    title: 'Our Building',
    description: 'Welcoming exterior with seasonal outdoor dining',
    width: 1400,
    height: 900,
    category: 'exterior',
  },
  {
    src: 'https://images.unsplash.com/photo-1528698827591-e19ccd7bc23d?w=1200&h=800&fit=crop&q=80',
    alt: 'Charming patio area with string lights for evening dining',
    title: 'The Patio',
    description: 'Enjoy al fresco dining on our beautiful patio',
    width: 1200,
    height: 800,
    category: 'exterior',
  },
  {
    src: 'https://images.unsplash.com/photo-1559329007-40df8a9345d8?w=1300&h=850&fit=crop&q=80',
    alt: 'Beautiful garden terrace with lush greenery',
    title: 'Garden Terrace',
    description: 'Dine surrounded by nature in our peaceful garden terrace',
    width: 1300,
    height: 850,
    category: 'exterior',
  },

  // Food Photos
  {
    src: 'https://images.unsplash.com/photo-1473093295043-cdd812d0e601?w=800&h=600&fit=crop&q=80',
    alt: 'Fresh homemade pasta with tomato sauce and basil garnish',
    title: 'Homemade Pasta',
    description: 'Hand-rolled pasta with San Marzano tomato sauce',
    width: 800,
    height: 600,
    category: 'food',
  },
  {
    src: 'https://images.unsplash.com/photo-1544025162-d76978e5e954?w=800&h=600&fit=crop&q=80',
    alt: 'Prime ribeye steak with asparagus and herb butter',
    title: 'Prime Ribeye',
    description: 'Dry-aged 28-day ribeye with seasonal vegetables',
    width: 800,
    height: 600,
    category: 'food',
  },
  {
    src: 'https://images.unsplash.com/photo-1551024506-0bccd828d307?w=800&h=600&fit=crop&q=80',
    alt: 'Chocolate mousse cake with fresh berries and cream',
    title: 'Chocolate Mousse',
    description: 'Belgian chocolate mousse with raspberry coulis',
    width: 800,
    height: 600,
    category: 'food',
  },
  {
    src: 'https://images.unsplash.com/photo-1452195100486-9cc805987862?w=900&h=600&fit=crop&q=80',
    alt: 'Artisan cheese board with seasonal accompaniments',
    title: 'Cheese Selection',
    description: 'Curated selection of local and imported cheeses',
    width: 900,
    height: 600,
    category: 'food',
  },
  {
    src: 'https://images.unsplash.com/photo-1615141982883-c7ad0e69fd62?w=850&h=700&fit=crop&q=80',
    alt: 'Fresh seafood platter with oysters and shrimp',
    title: 'Seafood Tower',
    description: 'Daily catch featuring the freshest seafood',
    width: 850,
    height: 700,
    category: 'food',
  },
  {
    src: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&h=600&fit=crop&q=80',
    alt: 'Beautifully plated appetizer board with fresh ingredients',
    title: 'Appetizer Board',
    description: 'Fresh seasonal appetizers to start your meal',
    width: 800,
    height: 600,
    category: 'food',
  },

  // Event Photos
  {
    src: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=1200&h=800&fit=crop&q=80',
    alt: 'Elegant wedding reception setup with floral arrangements',
    title: 'Wedding Reception',
    description: 'Creating memorable moments for your special day',
    width: 1200,
    height: 800,
    category: 'events',
  },
  {
    src: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=1100&h=750&fit=crop&q=80',
    alt: 'Corporate event with professional table settings',
    title: 'Corporate Events',
    description: 'Professional setting for business gatherings',
    width: 1100,
    height: 750,
    category: 'events',
  },
  {
    src: 'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=1000&h=700&fit=crop&q=80',
    alt: 'Birthday celebration with decorations and cake',
    title: 'Birthday Celebrations',
    description: 'Make your birthday unforgettable with our special packages',
    width: 1000,
    height: 700,
    category: 'events',
  },
];

/**
 * Gallery page SEO configuration
 */
export const GALLERY_SEO = {
  title: 'Photo Gallery | Our Restaurant',
  description: 'Explore our restaurant through stunning photography - from our elegant dining spaces to our exquisite culinary creations.',
  ogImage: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1200&h=630&fit=crop&q=80',
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
