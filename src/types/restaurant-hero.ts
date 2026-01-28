/**
 * Restaurant Hero Section Type Definitions
 * Types for the restaurant-specific hero section component
 * featuring full-viewport food photography with overlays.
 */

import type { HeroCTA } from './hero';

/**
 * Hours badge configuration for the hero section
 */
export interface HoursBadgeConfig {
  /** Whether to show the hours badge */
  show: boolean;
  /** Current status text (e.g., "Open Now", "Closed") */
  statusText?: string;
  /** Today's hours text (e.g., "11am - 10pm") */
  hoursText?: string;
  /** Whether the restaurant is currently open */
  isOpen?: boolean;
}

/**
 * Background image configuration
 */
export interface HeroBackgroundImage {
  /** Image source URL */
  src: string;
  /** Alt text for accessibility */
  alt: string;
  /** Optional position (default: center) */
  position?: string;
}

/**
 * Props for the RestaurantHeroSection component
 */
export interface RestaurantHeroSectionProps {
  /** Restaurant name - displayed as the main h1 */
  restaurantName: string;
  /** Tagline - supporting text below the restaurant name */
  tagline?: string;
  /** Background image configuration */
  backgroundImage: HeroBackgroundImage;
  /** Primary CTA button (e.g., "View Menu") */
  primaryCTA?: HeroCTA;
  /** Secondary CTA button (e.g., "Find Us") */
  secondaryCTA?: HeroCTA;
  /** Optional hours badge configuration */
  hoursBadge?: HoursBadgeConfig;
  /** Section ID for anchoring */
  id?: string;
  /** Additional CSS classes */
  class?: string;
  /** Enable warm gradient overlay (default: true) */
  warmGradient?: boolean;
  /** Overlay darkness level (0-1, default: 0.5) */
  overlayOpacity?: number;
  /** Enable moody lighting effect (default: true) */
  moodyLighting?: boolean;
  /** Minimum height (default: 100vh) */
  minHeight?: string;
}
