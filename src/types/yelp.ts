/**
 * Yelp Integration TypeScript Types
 * Type definitions for Yelp business profile integration components
 *
 * Note: Review content follows Yelp's Terms of Service and brand guidelines.
 * Display requirements: https://www.yelp.com/brand
 */

/**
 * Individual review from Yelp
 * Must include proper attribution per Yelp brand guidelines
 */
export interface YelpReview {
  /** Reviewer's display name */
  authorName: string;
  /** URL to reviewer's profile picture (optional) */
  authorPhotoUrl?: string;
  /** Rating value (1-5 stars) */
  rating: number;
  /** Review text content (may be excerpted per Yelp guidelines) */
  text: string;
  /** Relative time description (e.g., "2 weeks ago") */
  relativeTimeDescription: string;
  /** ISO date string of when the review was posted */
  time?: string;
  /** Link to the full review on Yelp (required for attribution) */
  reviewUrl?: string;
}

/**
 * Highlighted excerpt from a review
 * Short, impactful quotes to feature
 */
export interface YelpReviewHighlight {
  /** The highlighted text excerpt */
  excerpt: string;
  /** Author of the review */
  authorName: string;
  /** Rating associated with this review */
  rating: number;
  /** Optional category for the highlight (food, service, ambiance, etc.) */
  category?: 'food' | 'service' | 'ambiance' | 'value' | 'overall';
}

/**
 * Yelp Business Profile Configuration
 */
export interface YelpConfig {
  /** Yelp Business ID */
  businessId: string;
  /** Business name as shown on Yelp */
  businessName: string;
  /** Direct URL to the Yelp business page */
  profileUrl: string;
  /** URL to leave a review on Yelp */
  reviewUrl: string;
  /** Overall rating (1-5, with 0.5 increments) */
  rating: number;
  /** Total number of reviews */
  totalReviews: number;
  /** Featured reviews to display (curated selection) */
  featuredReviews: YelpReview[];
  /** Short, impactful highlights from reviews */
  reviewHighlights?: YelpReviewHighlight[];
  /** Last updated date for the data */
  lastUpdated?: string;
  /** Price level (1-4 dollar signs) */
  priceLevel?: 1 | 2 | 3 | 4;
  /** Business categories from Yelp */
  categories?: string[];
}

/**
 * Props for the YelpBadge component
 */
export interface YelpBadgeProps {
  /** Badge size variant */
  size?: 'small' | 'medium' | 'large';
  /** Show rating value */
  showRating?: boolean;
  /** Show review count */
  showReviewCount?: boolean;
  /** Additional CSS classes */
  class?: string;
  /** Link to Yelp page on click */
  linkToYelp?: boolean;
  /** Variant style */
  variant?: 'default' | 'compact' | 'inline';
}

/**
 * Props for the YelpReviews component
 */
export interface YelpReviewsProps {
  /** Section ID for anchor links */
  id?: string;
  /** Section heading text */
  heading?: string;
  /** Section subheading/description */
  subheading?: string;
  /** Additional CSS classes */
  class?: string;
  /** Maximum number of reviews to display */
  maxReviews?: number;
  /** Show review highlights section */
  showHighlights?: boolean;
  /** Maximum number of highlights to display */
  maxHighlights?: number;
  /** Show CTA to leave a review */
  showReviewCTA?: boolean;
  /** Show link to full Yelp page */
  showYelpLink?: boolean;
  /** Layout variant */
  variant?: 'default' | 'compact' | 'featured';
}

/**
 * Review schema for JSON-LD structured data
 */
export interface YelpReviewSchema {
  '@type': 'Review';
  author: {
    '@type': 'Person';
    name: string;
  };
  reviewRating: {
    '@type': 'Rating';
    ratingValue: number;
    bestRating: number;
    worstRating: number;
  };
  reviewBody?: string;
  datePublished?: string;
}
