/**
 * Testimonial TypeScript Type Definitions
 * Types for testimonials carousel/grid showcasing customer reviews
 * with star ratings and source attribution.
 */

/**
 * Review source platforms for attribution
 */
export type TestimonialSource = 'Google' | 'Yelp' | 'Facebook' | 'TripAdvisor' | 'OpenTable' | 'Website' | 'Other';

/**
 * Individual testimonial/review
 */
export interface Testimonial {
  /** Unique identifier for the testimonial */
  id: string;
  /** Customer/reviewer name */
  authorName: string;
  /** Optional author title or role (e.g., "Regular Customer", "Food Critic") */
  authorTitle?: string;
  /** Optional author avatar/photo URL */
  authorAvatar?: string;
  /** The review quote/text */
  quote: string;
  /** Star rating (1-5) */
  rating: 1 | 2 | 3 | 4 | 5;
  /** Source platform where the review was posted */
  source: TestimonialSource;
  /** Optional URL to the original review */
  sourceUrl?: string;
  /** Date the review was posted (ISO 8601 format) */
  datePublished?: string;
  /** Whether this is a featured/highlighted testimonial */
  featured?: boolean;
}

/**
 * Props for the TestimonialCard component
 */
export interface TestimonialCardProps extends Testimonial {
  /** Additional CSS class */
  class?: string;
  /** Whether to show the source badge */
  showSource?: boolean;
  /** Whether to show the date */
  showDate?: boolean;
  /** Test ID for e2e testing */
  testId?: string;
}

/**
 * Props for the TestimonialsCarousel component
 */
export interface TestimonialsCarouselProps {
  /** Array of testimonials to display */
  testimonials: Testimonial[];
  /** Show navigation arrows */
  showArrows?: boolean;
  /** Show dot indicators */
  showIndicators?: boolean;
  /** Enable auto-scroll */
  autoScroll?: boolean;
  /** Auto-scroll interval in milliseconds */
  autoScrollInterval?: number;
  /** Additional CSS class */
  class?: string;
  /** Test ID for e2e testing */
  testId?: string;
}

/**
 * Layout mode for testimonials display
 */
export type TestimonialsLayout = 'carousel' | 'grid' | 'auto';

/**
 * Props for the TestimonialsSection component
 */
export interface TestimonialsSectionProps {
  /** Section heading */
  heading?: string;
  /** Section subheading/description */
  subheading?: string;
  /** Array of testimonials to display */
  testimonials: Testimonial[];
  /** Layout mode: carousel, grid, or auto (carousel on mobile, grid on desktop) */
  layout?: TestimonialsLayout;
  /** Show navigation arrows (for carousel) */
  showArrows?: boolean;
  /** Show dot indicators (for carousel) */
  showIndicators?: boolean;
  /** Enable auto-scroll (for carousel) */
  autoScroll?: boolean;
  /** Auto-scroll interval in milliseconds */
  autoScrollInterval?: number;
  /** Whether to include Review schema markup */
  includeSchema?: boolean;
  /** Section ID for anchor links */
  id?: string;
  /** Additional CSS class */
  class?: string;
  /** Background variant */
  background?: 'default' | 'subtle' | 'primary';
  /** Test ID for e2e testing */
  testId?: string;
}

/**
 * Aggregate rating data for schema markup
 */
export interface TestimonialsAggregateRating {
  /** Average rating value */
  ratingValue: number;
  /** Best possible rating (default: 5) */
  bestRating?: number;
  /** Worst possible rating (default: 1) */
  worstRating?: number;
  /** Total number of ratings */
  ratingCount: number;
  /** Total number of reviews */
  reviewCount?: number;
}

/**
 * Configuration for testimonials
 */
export interface TestimonialsConfig {
  /** Default section heading */
  defaultHeading: string;
  /** Default section subheading */
  defaultSubheading?: string;
  /** Default layout mode */
  defaultLayout: TestimonialsLayout;
  /** Default auto-scroll setting */
  defaultAutoScroll: boolean;
  /** Default auto-scroll interval */
  defaultAutoScrollInterval: number;
  /** Whether to include schema by default */
  defaultIncludeSchema: boolean;
  /** Array of testimonials */
  testimonials: Testimonial[];
  /** Aggregate rating for schema markup */
  aggregateRating?: TestimonialsAggregateRating;
}
