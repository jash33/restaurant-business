/**
 * Yelp Business Profile Configuration
 * Configuration for Yelp integration including profile links, featured reviews,
 * and review highlights.
 *
 * IMPORTANT: This integration follows Yelp's Terms of Service and Brand Guidelines.
 * - Always link back to the Yelp page when displaying reviews
 * - Include proper Yelp attribution (logo + "Yelp" text)
 * - Do not modify review content
 * - See: https://www.yelp.com/brand
 *
 * To update this data:
 * 1. Visit your Yelp Business Page
 * 2. Copy your Business ID from the URL (e.g., htx-creamery-houston)
 * 3. Update the rating and review count from your dashboard
 * 4. Manually curate featured reviews for display (with proper attribution)
 */

import type { YelpConfig, YelpReviewSchema } from '../types/yelp';

/**
 * Yelp Brand Colors
 * Official Yelp brand colors for consistent styling
 * Source: https://www.yelp.com/brand
 */
export const YELP_COLORS = {
  /** Yelp Red - Primary brand color */
  red: '#FF1A1A',
  /** Yelp Red Dark - For hover states */
  redDark: '#D32323',
  /** Star color for ratings */
  star: '#FF1A1A',
  /** Background for badges */
  background: '#FFFFFF',
} as const;

/**
 * Yelp Business Profile Settings
 * Update these values with your actual Yelp Business Profile data
 */
export const yelpConfig: YelpConfig = {
  // === Business Identification ===
  // Find your Business ID in your Yelp business page URL
  businessId: 'htx-creamery-houston',

  // Business name as displayed on Yelp
  businessName: 'HTX Creamery',

  // === Profile URLs ===
  // Main Yelp business page URL
  profileUrl: 'https://www.yelp.com/biz/htx-creamery-houston',

  // Direct link to write a review
  // Format: https://www.yelp.com/writeareview/biz/BUSINESS_ID
  reviewUrl: 'https://www.yelp.com/writeareview/biz/htx-creamery-houston',

  // === Ratings & Reviews Summary ===
  // Update these values periodically from your Yelp dashboard
  rating: 4.5,
  totalReviews: 287,

  // Price level (1-4 dollar signs)
  priceLevel: 3,

  // Business categories
  categories: ['American (New)', 'Farm to Table', 'Wine Bars'],

  // === Featured Reviews ===
  // Curate 3-4 of your best reviews for display
  // IMPORTANT: Keep reviews verbatim - do not modify content
  featuredReviews: [
    {
      authorName: 'Amanda T.',
      rating: 5,
      text: "This place is an absolute gem! The farm-to-table concept really shines through in every dish. We had the seasonal tasting menu and every course was perfectly executed. The wine pairings suggested by our server were spot-on. Already planning our next visit!",
      relativeTimeDescription: '1 week ago',
      time: '2024-01-19T20:00:00Z',
      reviewUrl: 'https://www.yelp.com/biz/htx-creamery-houston?hrid=review1',
    },
    {
      authorName: 'Robert C.',
      rating: 5,
      text: "Hands down one of the best dining experiences in Houston. The ambiance is upscale but welcoming, and the service was impeccable without being stuffy. The ribeye was cooked exactly to my requested medium-rare, and the truffle mashed potatoes were divine.",
      relativeTimeDescription: '2 weeks ago',
      time: '2024-01-12T19:30:00Z',
      reviewUrl: 'https://www.yelp.com/biz/htx-creamery-houston?hrid=review2',
    },
    {
      authorName: 'Lisa M.',
      rating: 5,
      text: "Celebrated our anniversary here and it was magical from start to finish. They even prepared a special dessert for us! The octopus appetizer was tender and flavorful, and the duck entree was perfectly crispy. Worth every penny.",
      relativeTimeDescription: '3 weeks ago',
      time: '2024-01-05T18:45:00Z',
      reviewUrl: 'https://www.yelp.com/biz/htx-creamery-houston?hrid=review3',
    },
    {
      authorName: 'James H.',
      rating: 4,
      text: "Great food and lovely atmosphere. The brunch is particularly impressive - try the eggs benedict with house-cured salmon. Only thing to note: it can get quite busy on weekends, so definitely make a reservation. Staff is friendly and attentive.",
      relativeTimeDescription: '1 month ago',
      time: '2023-12-28T11:30:00Z',
      reviewUrl: 'https://www.yelp.com/biz/htx-creamery-houston?hrid=review4',
    },
  ],

  // === Review Highlights ===
  // Short, impactful excerpts to feature prominently
  reviewHighlights: [
    {
      excerpt: 'An absolute gem!',
      authorName: 'Amanda T.',
      rating: 5,
      category: 'overall',
    },
    {
      excerpt: 'Best dining experience in Houston',
      authorName: 'Robert C.',
      rating: 5,
      category: 'overall',
    },
    {
      excerpt: 'Magical from start to finish',
      authorName: 'Lisa M.',
      rating: 5,
      category: 'ambiance',
    },
    {
      excerpt: 'Worth every penny',
      authorName: 'Lisa M.',
      rating: 5,
      category: 'value',
    },
    {
      excerpt: 'Staff is friendly and attentive',
      authorName: 'James H.',
      rating: 4,
      category: 'service',
    },
  ],

  // === Last Updated ===
  // Track when this data was last refreshed
  lastUpdated: '2024-01-26',
};

/**
 * Export individual config items for convenience
 */
export const {
  businessId,
  businessName,
  profileUrl,
  reviewUrl,
  rating,
  totalReviews,
  featuredReviews,
  reviewHighlights,
  priceLevel,
  categories,
} = yelpConfig;

/**
 * Generate the review schema for JSON-LD structured data
 * Used for SEO and rich search results
 */
export function generateYelpReviewSchemaItems(): YelpReviewSchema[] {
  return featuredReviews.map((review) => ({
    '@type': 'Review' as const,
    author: {
      '@type': 'Person' as const,
      name: review.authorName,
    },
    reviewRating: {
      '@type': 'Rating' as const,
      ratingValue: review.rating,
      bestRating: 5,
      worstRating: 1,
    },
    reviewBody: review.text,
    datePublished: review.time,
  }));
}

/**
 * Format price level as dollar signs
 */
export function formatPriceLevel(level: number): string {
  return '$'.repeat(level);
}
