/**
 * Testimonial JSON-LD Generator
 * Generates schema.org Review structured data for testimonials
 * to enable rich snippets in Google search results.
 *
 * Based on Google's recommendations for Review rich results:
 * https://developers.google.com/search/docs/appearance/structured-data/review-snippet
 * https://schema.org/Review
 */

import type { Testimonial, TestimonialsAggregateRating } from '../types/testimonial';

/**
 * Clean object by removing undefined/null values
 */
function cleanObject(obj: Record<string, unknown>): object {
  return Object.fromEntries(
    Object.entries(obj).filter(([, value]) => value !== undefined && value !== null)
  );
}

/**
 * Map testimonial source to schema.org publisher type
 */
function getPublisherType(source: string): string {
  switch (source) {
    case 'Google':
    case 'Yelp':
    case 'Facebook':
    case 'TripAdvisor':
    case 'OpenTable':
      return 'Organization';
    default:
      return 'Organization';
  }
}

/**
 * Generate schema.org Review object for a single testimonial
 *
 * @param testimonial - Individual testimonial data
 * @returns Schema.org Review object
 */
export function generateReviewSchema(testimonial: Testimonial): object {
  return cleanObject({
    '@type': 'Review',
    reviewRating: {
      '@type': 'Rating',
      ratingValue: testimonial.rating,
      bestRating: 5,
      worstRating: 1,
    },
    author: cleanObject({
      '@type': 'Person',
      name: testimonial.authorName,
      jobTitle: testimonial.authorTitle,
    }),
    reviewBody: testimonial.quote,
    datePublished: testimonial.datePublished,
    publisher: testimonial.source !== 'Website' && testimonial.source !== 'Other'
      ? {
          '@type': getPublisherType(testimonial.source),
          name: testimonial.source,
        }
      : undefined,
  });
}

/**
 * Generate schema.org AggregateRating object
 *
 * @param aggregateRating - Aggregate rating data
 * @returns Schema.org AggregateRating object
 */
export function generateAggregateRatingSchema(
  aggregateRating: TestimonialsAggregateRating
): object {
  return cleanObject({
    '@type': 'AggregateRating',
    ratingValue: aggregateRating.ratingValue,
    bestRating: aggregateRating.bestRating || 5,
    worstRating: aggregateRating.worstRating || 1,
    ratingCount: aggregateRating.ratingCount,
    reviewCount: aggregateRating.reviewCount,
  });
}

/**
 * Generate complete testimonials schema with multiple reviews
 * This creates a LocalBusiness or Organization with embedded reviews
 *
 * @param testimonials - Array of testimonials
 * @param aggregateRating - Optional aggregate rating data
 * @param itemReviewed - Optional info about what's being reviewed
 * @returns Complete JSON-LD schema object
 */
export function generateTestimonialsSchema(
  testimonials: Testimonial[],
  aggregateRating?: TestimonialsAggregateRating,
  itemReviewed?: {
    type?: string;
    name?: string;
    image?: string;
    url?: string;
  }
): object {
  // If no testimonials, return empty
  if (!testimonials || testimonials.length === 0) {
    return {};
  }

  // Calculate aggregate rating if not provided
  const calculatedAggregate: TestimonialsAggregateRating = aggregateRating || {
    ratingValue: Math.round(
      (testimonials.reduce((sum, t) => sum + t.rating, 0) / testimonials.length) * 10
    ) / 10,
    ratingCount: testimonials.length,
    reviewCount: testimonials.length,
  };

  // Generate reviews array
  const reviews = testimonials.map(generateReviewSchema);

  // Create the main schema
  // Using LocalBusiness as the reviewed item type (restaurant context)
  const schema: Record<string, unknown> = {
    '@context': 'https://schema.org',
    '@type': itemReviewed?.type || 'LocalBusiness',
    name: itemReviewed?.name || 'Restaurant', // Will be overridden by actual restaurant name in SEO component
    image: itemReviewed?.image,
    url: itemReviewed?.url,
    aggregateRating: generateAggregateRatingSchema(calculatedAggregate),
    review: reviews,
  };

  return cleanObject(schema);
}

/**
 * Generate individual Review schema for a single testimonial
 * Useful when you want to add a single review to existing schema
 *
 * @param testimonial - Single testimonial
 * @param itemReviewed - Info about what's being reviewed
 * @returns Complete single review JSON-LD schema
 */
export function generateSingleReviewSchema(
  testimonial: Testimonial,
  itemReviewed?: {
    type?: string;
    name?: string;
    url?: string;
  }
): object {
  return cleanObject({
    '@context': 'https://schema.org',
    '@type': 'Review',
    itemReviewed: itemReviewed
      ? cleanObject({
          '@type': itemReviewed.type || 'LocalBusiness',
          name: itemReviewed.name,
          url: itemReviewed.url,
        })
      : undefined,
    reviewRating: {
      '@type': 'Rating',
      ratingValue: testimonial.rating,
      bestRating: 5,
      worstRating: 1,
    },
    author: cleanObject({
      '@type': 'Person',
      name: testimonial.authorName,
      jobTitle: testimonial.authorTitle,
    }),
    reviewBody: testimonial.quote,
    datePublished: testimonial.datePublished,
    publisher: testimonial.source !== 'Website' && testimonial.source !== 'Other'
      ? {
          '@type': getPublisherType(testimonial.source),
          name: testimonial.source,
        }
      : undefined,
  });
}

/**
 * Validate testimonial data for schema requirements
 * Returns array of validation errors (empty if valid)
 *
 * @param testimonial - Testimonial to validate
 * @returns Array of validation error messages
 */
export function validateTestimonialForSchema(testimonial: Testimonial): string[] {
  const errors: string[] = [];

  if (!testimonial.authorName || testimonial.authorName.trim() === '') {
    errors.push('Author name is required for Review schema');
  }

  if (!testimonial.quote || testimonial.quote.trim() === '') {
    errors.push('Review text (quote) is required for Review schema');
  }

  if (testimonial.rating < 1 || testimonial.rating > 5) {
    errors.push('Rating must be between 1 and 5');
  }

  // Google recommends datePublished for reviews
  if (!testimonial.datePublished) {
    errors.push('datePublished is recommended for Review schema');
  }

  return errors;
}

/**
 * Generate schema.org WebPage with reviews
 * Alternative structure that embeds reviews in a WebPage schema
 *
 * @param testimonials - Array of testimonials
 * @param pageInfo - Page information
 * @returns WebPage schema with reviews
 */
export function generateWebPageWithReviewsSchema(
  testimonials: Testimonial[],
  pageInfo: {
    name: string;
    description?: string;
    url?: string;
  }
): object {
  if (!testimonials || testimonials.length === 0) {
    return {};
  }

  const reviews = testimonials.map(generateReviewSchema);

  return cleanObject({
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: pageInfo.name,
    description: pageInfo.description,
    url: pageInfo.url,
    mainEntity: {
      '@type': 'ItemList',
      itemListElement: reviews.map((review, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        item: review,
      })),
    },
  });
}
