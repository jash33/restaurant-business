/**
 * Google Business Profile Configuration
 * Configuration for Google Business Profile integration including
 * profile links, featured reviews, photos, and Q&A.
 *
 * To update this data:
 * 1. Visit your Google Business Profile dashboard
 * 2. Copy your Place ID from the URL or use the Place ID Finder
 * 3. Update the rating and review count from your dashboard
 * 4. Manually curate featured reviews for display
 */

import type { GoogleBusinessConfig } from '../types/google-business';

/**
 * Google Business Profile Settings
 * Update these values with your actual Google Business Profile data
 */
export const googleBusinessConfig: GoogleBusinessConfig = {
  // === Profile Identification ===
  // Find your Place ID: https://developers.google.com/maps/documentation/javascript/place-id
  placeId: 'ChIJN1t_tDeuEmsRUsoyG83frY4', // Replace with your actual Place ID

  // === Profile URLs ===
  // Main Google Business Profile URL
  profileUrl: 'https://www.google.com/maps/place/Main+Street+Bistro',

  // Direct link to leave a review
  // Format: https://search.google.com/local/writereview?placeid=YOUR_PLACE_ID
  reviewUrl: 'https://search.google.com/local/writereview?placeid=ChIJN1t_tDeuEmsRUsoyG83frY4',

  // Q&A section URL (usually the main profile URL)
  qnaUrl: 'https://www.google.com/maps/place/Main+Street+Bistro#questions',

  // Photos section URL
  photosUrl: 'https://www.google.com/maps/place/Main+Street+Bistro#photos',

  // === Business Information ===
  businessName: 'HTX Creamery',

  // === Ratings & Reviews Summary ===
  // Update these values periodically from your Google Business dashboard
  rating: 4.7,
  totalReviews: 312,

  // === Featured Reviews ===
  // Curate 3-5 of your best reviews for display
  // Update these periodically to keep content fresh
  featuredReviews: [
    {
      authorName: 'Sarah M.',
      rating: 5,
      text: "Absolutely incredible dining experience! The ribeye steak was cooked to perfection and the craft cocktails were outstanding. The atmosphere is elegant yet comfortable - perfect for a special occasion. Our server was attentive without being intrusive. We'll definitely be back!",
      relativeTimeDescription: '2 weeks ago',
      time: '2024-01-10T19:30:00Z',
    },
    {
      authorName: 'Michael R.',
      rating: 5,
      text: "Best restaurant in Houston, hands down. The farm-to-table approach really shows in the quality of every dish. Had the chef's tasting menu and every course was a revelation. The sommelier's wine pairings were spot-on. This place is a gem.",
      relativeTimeDescription: '1 month ago',
      time: '2023-12-28T20:00:00Z',
    },
    {
      authorName: 'Jennifer L.',
      rating: 5,
      text: 'We celebrated our anniversary here and it was magical. The private dining room was beautifully set up, and the staff went above and beyond to make us feel special. The seafood tower was fresh and generous. Highly recommend for any special celebration!',
      relativeTimeDescription: '3 weeks ago',
      time: '2024-01-05T18:45:00Z',
    },
    {
      authorName: 'David K.',
      rating: 4,
      text: 'Great food and ambiance. The brunch menu is exceptional - try the eggs benedict with house-cured salmon. Only minor note: reservations can be tricky on weekends, so book ahead! Worth the planning though.',
      relativeTimeDescription: '1 month ago',
      time: '2023-12-20T11:30:00Z',
    },
  ],

  // === Featured Photos ===
  // Add photos that represent your restaurant well
  photos: [
    {
      url: '/restaurant-business/images/google-business/restaurant-exterior.jpg',
      alt: 'HTX Creamery exterior with warm evening lighting',
      category: 'exterior',
    },
    {
      url: '/restaurant-business/images/google-business/dining-room.jpg',
      alt: 'Elegant dining room with ambient lighting',
      category: 'interior',
    },
    {
      url: '/restaurant-business/images/google-business/signature-steak.jpg',
      alt: 'Our signature ribeye steak with seasonal vegetables',
      category: 'food',
    },
    {
      url: '/restaurant-business/images/google-business/craft-cocktails.jpg',
      alt: 'Handcrafted cocktails at the bar',
      category: 'food',
    },
  ],

  // === Featured Q&A ===
  // Common questions and answers from your Google Business Profile
  featuredQA: [
    {
      question: 'Do you take reservations?',
      answer: 'Yes! We highly recommend reservations, especially for weekend dining. You can book online through our website or call us directly at (713) 555-0123.',
      datePosted: '2023-11-15',
    },
    {
      question: 'Is there parking available?',
      answer: 'Yes, we offer complimentary valet parking for all dinner guests. Street parking is also available, and there is a public parking garage one block away.',
      datePosted: '2023-10-20',
    },
    {
      question: 'Do you accommodate dietary restrictions?',
      answer: 'Absolutely! Our chef is happy to accommodate vegetarian, vegan, gluten-free, and most allergy requirements. Please let us know when making your reservation.',
      datePosted: '2023-12-01',
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
  placeId,
  profileUrl,
  reviewUrl,
  qnaUrl,
  photosUrl,
  businessName,
  rating,
  totalReviews,
  featuredReviews,
  photos,
  featuredQA,
} = googleBusinessConfig;

/**
 * Generate the review schema for JSON-LD structured data
 */
export function generateReviewSchemaItems() {
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
