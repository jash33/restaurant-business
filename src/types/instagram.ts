/**
 * Instagram Feed Type Definitions
 * Type definitions for the Instagram feed component including
 * post data, feed state, and configuration options.
 */

/**
 * Individual Instagram post data
 */
export interface InstagramPost {
  /** Unique post ID from Instagram */
  id: string;
  /** Post media URL (image or video thumbnail) */
  mediaUrl: string;
  /** Post permalink URL */
  permalink: string;
  /** Post caption text */
  caption?: string;
  /** Media type (IMAGE, VIDEO, CAROUSEL_ALBUM) */
  mediaType: 'IMAGE' | 'VIDEO' | 'CAROUSEL_ALBUM';
  /** Timestamp of when the post was created */
  timestamp: string;
  /** Thumbnail URL for video posts */
  thumbnailUrl?: string;
  /** Alt text for accessibility (generated from caption or default) */
  alt: string;
}

/**
 * Instagram feed state for loading/error handling
 */
export type InstagramFeedStatus = 'idle' | 'loading' | 'success' | 'error';

/**
 * Instagram feed error types
 */
export type InstagramFeedError =
  | 'api_error'
  | 'rate_limit'
  | 'invalid_token'
  | 'network_error'
  | 'unknown';

/**
 * Instagram feed state
 */
export interface InstagramFeedState {
  /** Current feed status */
  status: InstagramFeedStatus;
  /** Array of Instagram posts */
  posts: InstagramPost[];
  /** Error type if status is 'error' */
  errorType?: InstagramFeedError;
  /** Human-readable error message */
  errorMessage?: string;
  /** Last successful fetch timestamp */
  lastFetched?: string;
}

/**
 * Instagram feed display layout options
 */
export type InstagramFeedLayout = 'grid' | 'carousel' | 'masonry';

/**
 * Instagram feed component props
 */
export interface InstagramFeedProps {
  /** Section ID for anchor links */
  id?: string;
  /** Section heading */
  heading?: string;
  /** Section subheading/description */
  subheading?: string;
  /** Number of posts to display (max 12) */
  maxPosts?: number;
  /** Grid columns (2-4) */
  columns?: 2 | 3 | 4;
  /** Display layout */
  layout?: InstagramFeedLayout;
  /** Show post captions on hover */
  showCaptions?: boolean;
  /** Show view on Instagram link */
  showViewOnInstagram?: boolean;
  /** Instagram profile URL for fallback/link */
  profileUrl?: string;
  /** Instagram handle (without @) for display */
  handle?: string;
  /** Use Behold service instead of native embed */
  useBehold?: boolean;
  /** Behold feed ID (if using Behold service) */
  beholdFeedId?: string;
}

/**
 * Instagram embed configuration
 */
export interface InstagramEmbedConfig {
  /** Enable/disable the Instagram feed feature */
  enabled: boolean;
  /** Instagram access token (for API approach) */
  accessToken?: string;
  /** Instagram Business Account ID */
  accountId?: string;
  /** Use Behold service for embedding */
  useBehold: boolean;
  /** Behold feed ID */
  beholdFeedId?: string;
  /** Default number of posts to show */
  defaultPostCount: number;
  /** Cache duration in milliseconds */
  cacheDuration: number;
  /** Fallback posts for when API is unavailable */
  fallbackPosts?: InstagramPost[];
}

/**
 * Behold widget configuration
 */
export interface BeholdConfig {
  /** Behold feed ID */
  feedId: string;
  /** Widget theme (light/dark) */
  theme?: 'light' | 'dark';
  /** Number of posts to show */
  postCount?: number;
  /** Layout style */
  layout?: 'grid' | 'row' | 'highlight';
}

/**
 * Default Instagram feed configuration
 */
export const DEFAULT_INSTAGRAM_CONFIG: InstagramEmbedConfig = {
  enabled: true,
  useBehold: false,
  defaultPostCount: 6,
  cacheDuration: 1800000, // 30 minutes
};

/**
 * Default props for InstagramFeed component
 */
export const DEFAULT_INSTAGRAM_FEED_PROPS: Required<
  Omit<InstagramFeedProps, 'id' | 'profileUrl' | 'handle' | 'beholdFeedId'>
> = {
  heading: 'Follow Us on Instagram',
  subheading: 'See our latest food and atmosphere posts',
  maxPosts: 6,
  columns: 3,
  layout: 'grid',
  showCaptions: true,
  showViewOnInstagram: true,
  useBehold: false,
};

/**
 * Generate alt text from caption
 * @param caption - Post caption
 * @param fallback - Fallback text if caption is empty
 */
export function generateAltText(caption?: string, fallback = 'Instagram post'): string {
  if (!caption) return fallback;
  // Truncate long captions and remove hashtags for cleaner alt text
  const cleanCaption = caption
    .replace(/#\w+/g, '')
    .replace(/\n+/g, ' ')
    .trim();
  return cleanCaption.length > 125
    ? `${cleanCaption.substring(0, 125)}...`
    : cleanCaption || fallback;
}

/**
 * Format timestamp for display
 * @param timestamp - ISO timestamp string
 */
export function formatInstagramDate(timestamp: string): string {
  const date = new Date(timestamp);
  return date.toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  });
}
