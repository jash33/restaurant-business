/**
 * Instagram Feed Configuration
 *
 * Centralized configuration for the Instagram feed feature.
 * Supports both native Instagram embed and Behold service integration.
 */

import type {
  InstagramEmbedConfig,
  InstagramPost,
  BeholdConfig,
} from '../types/instagram';

/**
 * Main Instagram embed configuration
 * Configure via environment variables in .env file
 */
export const INSTAGRAM_CONFIG: InstagramEmbedConfig = {
  /** Enable/disable the Instagram feed feature */
  enabled: Boolean(import.meta.env.PUBLIC_INSTAGRAM_ENABLED !== 'false'),

  /** Instagram access token (for direct API access - optional) */
  accessToken: import.meta.env.PUBLIC_INSTAGRAM_ACCESS_TOKEN || undefined,

  /** Instagram Business Account ID (for direct API access - optional) */
  accountId: import.meta.env.PUBLIC_INSTAGRAM_ACCOUNT_ID || undefined,

  /** Use Behold service for embedding (recommended for simplicity) */
  useBehold: Boolean(import.meta.env.PUBLIC_INSTAGRAM_USE_BEHOLD === 'true'),

  /** Behold feed ID (get from Behold dashboard) */
  beholdFeedId: import.meta.env.PUBLIC_INSTAGRAM_BEHOLD_FEED_ID || undefined,

  /** Default number of posts to show */
  defaultPostCount: 6,

  /** Cache duration in milliseconds (30 minutes) */
  cacheDuration: 1800000,
};

/**
 * Behold widget configuration
 */
export const BEHOLD_CONFIG: BeholdConfig = {
  feedId: import.meta.env.PUBLIC_INSTAGRAM_BEHOLD_FEED_ID || '',
  theme: 'light',
  postCount: 6,
  layout: 'grid',
};

/**
 * Instagram profile information
 */
export const INSTAGRAM_PROFILE = {
  /** Instagram handle (without @) */
  handle: import.meta.env.PUBLIC_INSTAGRAM_HANDLE || 'restaurant',

  /** Full profile URL */
  profileUrl: import.meta.env.PUBLIC_INSTAGRAM_PROFILE_URL ||
    `https://www.instagram.com/${import.meta.env.PUBLIC_INSTAGRAM_HANDLE || 'restaurant'}/`,
};

/**
 * Fallback posts for when Instagram API is unavailable
 * These placeholder posts are shown when the feed cannot be loaded
 */
export const FALLBACK_INSTAGRAM_POSTS: InstagramPost[] = [
  {
    id: 'fallback-1',
    mediaUrl: '/restaurant-business/images/food/pasta-dish.svg',
    permalink: INSTAGRAM_PROFILE.profileUrl,
    caption: 'Fresh homemade pasta with our signature tomato sauce',
    mediaType: 'IMAGE',
    timestamp: new Date().toISOString(),
    alt: 'Fresh homemade pasta dish',
  },
  {
    id: 'fallback-2',
    mediaUrl: '/restaurant-business/images/food/steak-dinner.svg',
    permalink: INSTAGRAM_PROFILE.profileUrl,
    caption: 'Our perfectly grilled prime ribeye steak',
    mediaType: 'IMAGE',
    timestamp: new Date().toISOString(),
    alt: 'Prime ribeye steak dinner',
  },
  {
    id: 'fallback-3',
    mediaUrl: '/restaurant-business/images/food/dessert-cake.svg',
    permalink: INSTAGRAM_PROFILE.profileUrl,
    caption: 'Decadent chocolate mousse to end your evening',
    mediaType: 'IMAGE',
    timestamp: new Date().toISOString(),
    alt: 'Chocolate mousse dessert',
  },
  {
    id: 'fallback-4',
    mediaUrl: '/restaurant-business/images/food/pasta-dish.svg',
    permalink: INSTAGRAM_PROFILE.profileUrl,
    caption: 'Warm ambiance for your special occasions',
    mediaType: 'IMAGE',
    timestamp: new Date().toISOString(),
    alt: 'Restaurant interior ambiance',
  },
  {
    id: 'fallback-5',
    mediaUrl: '/restaurant-business/images/food/steak-dinner.svg',
    permalink: INSTAGRAM_PROFILE.profileUrl,
    caption: 'Craft cocktails at our beautifully designed bar',
    mediaType: 'IMAGE',
    timestamp: new Date().toISOString(),
    alt: 'Craft cocktails at the bar',
  },
  {
    id: 'fallback-6',
    mediaUrl: '/restaurant-business/images/food/dessert-cake.svg',
    permalink: INSTAGRAM_PROFILE.profileUrl,
    caption: 'Fresh seasonal ingredients, prepared with love',
    mediaType: 'IMAGE',
    timestamp: new Date().toISOString(),
    alt: 'Fresh seasonal dish',
  },
];

/**
 * SEO configuration for Instagram feed section
 */
export const INSTAGRAM_SEO = {
  heading: 'Follow Us on Instagram',
  subheading: 'See our latest food photos and restaurant atmosphere',
  ariaLabel: 'Instagram feed showing recent restaurant posts',
};

/**
 * Error messages for different failure scenarios
 */
export const INSTAGRAM_ERROR_MESSAGES = {
  api_error: 'Unable to load Instagram feed. Please try again later.',
  rate_limit: 'Instagram feed temporarily unavailable. Please check back soon.',
  invalid_token: 'Instagram connection needs to be refreshed.',
  network_error: 'Unable to connect to Instagram. Please check your connection.',
  unknown: 'Something went wrong loading the Instagram feed.',
};

/**
 * Check if Instagram feed is properly configured
 */
export function isInstagramConfigured(): boolean {
  // If using Behold, we need a feed ID
  if (INSTAGRAM_CONFIG.useBehold) {
    return Boolean(INSTAGRAM_CONFIG.beholdFeedId);
  }

  // For native API, we need an access token and account ID
  if (INSTAGRAM_CONFIG.accessToken && INSTAGRAM_CONFIG.accountId) {
    return true;
  }

  // Fall back to showing placeholder posts if nothing is configured
  return true;
}

/**
 * Get the appropriate posts based on configuration
 * @param customPosts - Optional custom posts to use
 */
export function getInstagramPosts(customPosts?: InstagramPost[]): InstagramPost[] {
  if (customPosts && customPosts.length > 0) {
    return customPosts;
  }
  return FALLBACK_INSTAGRAM_POSTS;
}

export default {
  config: INSTAGRAM_CONFIG,
  behold: BEHOLD_CONFIG,
  profile: INSTAGRAM_PROFILE,
  fallbackPosts: FALLBACK_INSTAGRAM_POSTS,
  seo: INSTAGRAM_SEO,
  errorMessages: INSTAGRAM_ERROR_MESSAGES,
  isConfigured: isInstagramConfigured,
  getPosts: getInstagramPosts,
};
