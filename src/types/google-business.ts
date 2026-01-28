/**
 * Google Business Profile TypeScript Types
 * Type definitions for Google Business integration components
 */

/**
 * Individual review from Google Business Profile
 */
export interface GoogleReview {
  /** Reviewer's display name */
  authorName: string;
  /** URL to reviewer's profile picture (optional) */
  authorPhotoUrl?: string;
  /** Rating value (1-5 stars) */
  rating: number;
  /** Review text content */
  text: string;
  /** Relative time description (e.g., "2 weeks ago") */
  relativeTimeDescription: string;
  /** ISO date string of when the review was posted */
  time?: string;
}

/**
 * Photo from Google Business Profile
 */
export interface GoogleBusinessPhoto {
  /** URL to the photo */
  url: string;
  /** Alt text for accessibility */
  alt: string;
  /** Photo attribution (photographer name) */
  attribution?: string;
  /** Photo category (food, interior, exterior, etc.) */
  category?: 'food' | 'interior' | 'exterior' | 'ambiance' | 'team' | 'other';
}

/**
 * FAQ/Q&A item from Google Business Profile
 */
export interface GoogleBusinessQA {
  /** The question asked */
  question: string;
  /** The answer provided */
  answer: string;
  /** Date the Q&A was posted */
  datePosted?: string;
}

/**
 * Google Business Profile Configuration
 */
export interface GoogleBusinessConfig {
  /** Google Business Profile Place ID */
  placeId: string;
  /** Direct URL to the Google Business Profile */
  profileUrl: string;
  /** URL to leave a review */
  reviewUrl: string;
  /** URL to the Q&A section */
  qnaUrl?: string;
  /** URL to view photos on Google */
  photosUrl?: string;
  /** Overall rating (1-5) */
  rating: number;
  /** Total number of reviews */
  totalReviews: number;
  /** Featured reviews to display */
  featuredReviews: GoogleReview[];
  /** Featured photos from the profile */
  photos?: GoogleBusinessPhoto[];
  /** Featured Q&A items */
  featuredQA?: GoogleBusinessQA[];
  /** Business name as shown on Google */
  businessName: string;
  /** Last updated date for the data */
  lastUpdated?: string;
}

/**
 * Props for the GoogleBusinessProfile component
 */
export interface GoogleBusinessProfileProps {
  /** Section ID for anchor links */
  id?: string;
  /** Section heading text */
  heading?: string;
  /** Section subheading/description */
  subheading?: string;
  /** Additional CSS classes */
  class?: string;
  /** Whether to show the photos section */
  showPhotos?: boolean;
  /** Whether to show the Q&A section */
  showQA?: boolean;
  /** Whether to show the review CTA */
  showReviewCTA?: boolean;
  /** Maximum number of reviews to display */
  maxReviews?: number;
  /** Maximum number of photos to display */
  maxPhotos?: number;
  /** Layout variant */
  variant?: 'default' | 'compact' | 'featured';
}

/**
 * Props for the ReviewCTA component
 */
export interface ReviewCTAProps {
  /** CTA heading text */
  heading?: string;
  /** CTA description text */
  description?: string;
  /** Button text */
  buttonText?: string;
  /** URL to leave a review */
  reviewUrl: string;
  /** Visual variant */
  variant?: 'default' | 'inline' | 'card';
  /** Additional CSS classes */
  class?: string;
}

/**
 * Review schema for JSON-LD structured data
 */
export interface ReviewSchema {
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
