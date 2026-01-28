/**
 * Testimonials Configuration
 * Centralized configuration for testimonials section including
 * sample testimonial data and default settings.
 *
 * Customize this file with your actual customer reviews.
 */

import type { TestimonialsConfig, Testimonial } from '../types/testimonial';

/**
 * Sample testimonials data
 * Replace with your actual customer reviews
 */
export const testimonials: Testimonial[] = [
  {
    id: 'testimonial-1',
    authorName: 'Sarah M.',
    authorTitle: 'Regular Customer',
    quote: 'Absolutely the best dining experience in Houston! The seafood is incredibly fresh and the service is impeccable. We come here for every special occasion.',
    rating: 5,
    source: 'Google',
    datePublished: '2024-12-15',
    featured: true,
  },
  {
    id: 'testimonial-2',
    authorName: 'James T.',
    authorTitle: 'Food Enthusiast',
    quote: 'The lobster bisque is to die for! Every dish we tried was cooked to perfection. The ambiance is perfect for a romantic dinner.',
    rating: 5,
    source: 'Yelp',
    datePublished: '2024-11-28',
  },
  {
    id: 'testimonial-3',
    authorName: 'Maria G.',
    authorTitle: 'Local Guide',
    quote: 'Outstanding food and atmosphere. The chef clearly puts love into every dish. The crab cakes were the best I have ever had!',
    rating: 5,
    source: 'Google',
    datePublished: '2024-12-02',
  },
  {
    id: 'testimonial-4',
    authorName: 'Robert K.',
    quote: 'Great place for family celebrations. The staff went above and beyond to make our anniversary special. Highly recommend the tasting menu!',
    rating: 4,
    source: 'Facebook',
    datePublished: '2024-10-20',
  },
  {
    id: 'testimonial-5',
    authorName: 'Emily C.',
    authorTitle: 'First-time Visitor',
    quote: 'Visited based on recommendations and was not disappointed! Fresh ingredients, beautiful presentation, and friendly staff. Will definitely return.',
    rating: 5,
    source: 'TripAdvisor',
    datePublished: '2024-11-10',
  },
  {
    id: 'testimonial-6',
    authorName: 'Michael D.',
    quote: 'The attention to detail here is remarkable. From the appetizers to dessert, every course was memorable. A true gem in the Houston dining scene.',
    rating: 5,
    source: 'Google',
    datePublished: '2024-12-08',
    featured: true,
  },
];

/**
 * Testimonials section configuration
 */
export const TESTIMONIALS_CONFIG: TestimonialsConfig = {
  // Default section text
  defaultHeading: 'What Our Guests Say',
  defaultSubheading: 'Hear from our valued customers about their dining experience',

  // Default layout settings
  defaultLayout: 'auto',
  defaultAutoScroll: true,
  defaultAutoScrollInterval: 6000,

  // Schema markup settings
  defaultIncludeSchema: true,

  // Testimonials data
  testimonials,

  // Aggregate rating for schema markup
  // Update these values based on your actual ratings
  aggregateRating: {
    ratingValue: 4.8,
    bestRating: 5,
    worstRating: 1,
    ratingCount: 342,
    reviewCount: 287,
  },
};

/**
 * Source platform icons/labels
 */
export const SOURCE_LABELS: Record<string, { label: string; color: string }> = {
  Google: { label: 'Google', color: '#4285F4' },
  Yelp: { label: 'Yelp', color: '#D32323' },
  Facebook: { label: 'Facebook', color: '#1877F2' },
  TripAdvisor: { label: 'TripAdvisor', color: '#00AA6C' },
  OpenTable: { label: 'OpenTable', color: '#DA3743' },
  Website: { label: 'Website', color: '#365395' },
  Other: { label: 'Review', color: '#6B7280' },
};

/**
 * Get featured testimonials
 */
export function getFeaturedTestimonials(): Testimonial[] {
  return testimonials.filter((t) => t.featured);
}

/**
 * Get testimonials by source
 */
export function getTestimonialsBySource(source: string): Testimonial[] {
  return testimonials.filter((t) => t.source === source);
}

/**
 * Calculate average rating from testimonials
 */
export function calculateAverageRating(testimonialList: Testimonial[]): number {
  if (testimonialList.length === 0) return 0;
  const sum = testimonialList.reduce((acc, t) => acc + t.rating, 0);
  return Math.round((sum / testimonialList.length) * 10) / 10;
}

export default TESTIMONIALS_CONFIG;
