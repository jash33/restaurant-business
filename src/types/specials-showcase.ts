/**
 * Specials Showcase Types
 * Type definitions for the rotating specials showcase component.
 * Supports large photos, limited-time badges, and day-specific offerings.
 * Configured via JSON for easy manual updates.
 */

// ============================================================================
// Badge Types
// ============================================================================

/**
 * Types of badges that can be displayed on specials
 */
export type SpecialBadgeType =
  | 'limited-time'
  | 'daily'
  | 'weekend'
  | 'seasonal'
  | 'new'
  | 'featured'
  | 'chef-special';

/**
 * Days of the week for day-specific specials
 */
export type DayOfWeek =
  | 'Sunday'
  | 'Monday'
  | 'Tuesday'
  | 'Wednesday'
  | 'Thursday'
  | 'Friday'
  | 'Saturday';

// ============================================================================
// Core Interfaces
// ============================================================================

/**
 * Image configuration for special items
 */
export interface SpecialImage {
  /** Image source path */
  src: string;
  /** Alt text for accessibility */
  alt: string;
  /** Image width in pixels */
  width: number;
  /** Image height in pixels */
  height: number;
  /** Optional placeholder for blur-up loading */
  placeholder?: string;
}

/**
 * Badge configuration for special items
 */
export interface SpecialBadge {
  /** Badge display text */
  text: string;
  /** Badge type determines styling */
  type: SpecialBadgeType;
  /** Optional icon name or emoji */
  icon?: string;
}

/**
 * Price information for a special
 */
export interface SpecialPrice {
  /** Original price in cents */
  original?: number;
  /** Discounted/special price in cents */
  current: number;
  /** Currency code (ISO 4217) */
  currency: string;
  /** Formatted display string for current price */
  display: string;
  /** Formatted display string for original price */
  originalDisplay?: string;
  /** Discount percentage to display */
  discountPercent?: number;
}

/**
 * Represents a single special offering
 */
export interface Special {
  /** Unique identifier */
  id: string;
  /** Special title/name */
  title: string;
  /** Short description for card display */
  description: string;
  /** Detailed description for expanded view */
  longDescription?: string;
  /** Large feature photo */
  image: SpecialImage;
  /** Optional badge to display */
  badge?: SpecialBadge;
  /** Days this special is available (empty = all days) */
  daysAvailable?: DayOfWeek[];
  /** Time range available (e.g., "11am - 2pm") */
  timeAvailable?: string;
  /** Start date for limited-time specials (ISO 8601) */
  startDate?: string;
  /** End date for limited-time specials (ISO 8601) */
  endDate?: string;
  /** Price information */
  price?: SpecialPrice;
  /** Whether this special is currently active */
  active: boolean;
  /** Sort order for display */
  sortOrder: number;
  /** Optional link to full menu or details page */
  link?: string;
  /** Link text for CTA button */
  linkText?: string;
  /** Tags for filtering */
  tags?: string[];
  /** Date special was added (ISO 8601) */
  createdAt?: string;
  /** Date special was last updated (ISO 8601) */
  updatedAt?: string;
}

// ============================================================================
// Component Props Interfaces
// ============================================================================

/**
 * Layout options for the showcase
 */
export type SpecialsShowcaseLayout = 'carousel' | 'grid' | 'featured';

/**
 * Configuration options for the SpecialsShowcase component
 */
export interface SpecialsShowcaseConfig {
  /** Component identifier */
  id: string;
  /** Section heading */
  heading: string;
  /** Section subheading/description */
  subheading?: string;
  /** Layout style */
  layout: SpecialsShowcaseLayout;
  /** Auto-rotate interval in milliseconds (0 = disabled) */
  autoRotateInterval: number;
  /** Show navigation arrows */
  showArrows: boolean;
  /** Show dot indicators */
  showIndicators: boolean;
  /** Show badges on cards */
  showBadges: boolean;
  /** Show prices on cards */
  showPrices: boolean;
  /** Filter to show only today's specials */
  filterByToday: boolean;
  /** Maximum number of specials to display (0 = all) */
  maxItems: number;
  /** Enable lightbox for images */
  enableLightbox: boolean;
}

/**
 * Props for SpecialsShowcase component
 */
export interface SpecialsShowcaseProps {
  /** Array of specials to display */
  specials: Special[];
  /** Configuration options */
  config?: Partial<SpecialsShowcaseConfig>;
  /** Additional CSS class names */
  class?: string;
  /** Test ID for e2e testing */
  testId?: string;
}

// ============================================================================
// Badge Display Options
// ============================================================================

/**
 * Badge style configuration
 */
export interface SpecialBadgeStyle {
  type: SpecialBadgeType;
  label: string;
  icon: string;
  backgroundColor: string;
  textColor: string;
  borderColor: string;
}

/**
 * Badge style configurations
 */
export const SPECIAL_BADGE_STYLES: SpecialBadgeStyle[] = [
  {
    type: 'limited-time',
    label: 'Limited Time',
    icon: '⏰',
    backgroundColor: 'var(--color-error-light)',
    textColor: 'var(--color-error-text)',
    borderColor: 'var(--color-error-border)',
  },
  {
    type: 'daily',
    label: 'Daily Special',
    icon: '📅',
    backgroundColor: 'var(--color-primary-100)',
    textColor: 'var(--color-primary-700)',
    borderColor: 'var(--color-primary-200)',
  },
  {
    type: 'weekend',
    label: 'Weekend Only',
    icon: '🎉',
    backgroundColor: 'var(--color-accent-subtle)',
    textColor: 'var(--color-accent-dark)',
    borderColor: 'var(--color-accent)',
  },
  {
    type: 'seasonal',
    label: 'Seasonal',
    icon: '🍂',
    backgroundColor: 'var(--color-warning-light)',
    textColor: 'var(--color-warning-text)',
    borderColor: 'var(--color-warning-border)',
  },
  {
    type: 'new',
    label: 'New',
    icon: '✨',
    backgroundColor: 'var(--color-success-light)',
    textColor: 'var(--color-success-text)',
    borderColor: 'var(--color-success-border)',
  },
  {
    type: 'featured',
    label: 'Featured',
    icon: '⭐',
    backgroundColor: 'var(--color-warning-light)',
    textColor: 'var(--color-warning-text)',
    borderColor: 'var(--color-warning-border)',
  },
  {
    type: 'chef-special',
    label: "Chef's Special",
    icon: '👨‍🍳',
    backgroundColor: 'var(--color-primary-100)',
    textColor: 'var(--color-primary-700)',
    borderColor: 'var(--color-primary-200)',
  },
];

// ============================================================================
// Helper Functions
// ============================================================================

/**
 * Get badge style configuration by type
 */
export function getBadgeStyle(type: SpecialBadgeType): SpecialBadgeStyle | undefined {
  return SPECIAL_BADGE_STYLES.find(style => style.type === type);
}

/**
 * Create a price object
 */
export function createSpecialPrice(
  currentInCents: number,
  originalInCents?: number,
  currency: string = 'USD'
): SpecialPrice {
  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency,
  });

  const price: SpecialPrice = {
    current: currentInCents,
    currency,
    display: formatter.format(currentInCents / 100),
  };

  if (originalInCents && originalInCents > currentInCents) {
    price.original = originalInCents;
    price.originalDisplay = formatter.format(originalInCents / 100);
    price.discountPercent = Math.round(
      ((originalInCents - currentInCents) / originalInCents) * 100
    );
  }

  return price;
}

/**
 * Check if a special is available today
 */
export function isSpecialAvailableToday(special: Special): boolean {
  if (!special.active) return false;

  const today = new Date();
  const dayOfWeek = today.toLocaleDateString('en-US', { weekday: 'long' }) as DayOfWeek;

  // Check day availability
  if (special.daysAvailable && special.daysAvailable.length > 0) {
    if (!special.daysAvailable.includes(dayOfWeek)) {
      return false;
    }
  }

  // Check date range
  if (special.startDate) {
    const startDate = new Date(special.startDate);
    if (today < startDate) return false;
  }

  if (special.endDate) {
    const endDate = new Date(special.endDate);
    endDate.setHours(23, 59, 59, 999); // Include the entire end day
    if (today > endDate) return false;
  }

  return true;
}

/**
 * Get the current day of week
 */
export function getCurrentDayOfWeek(): DayOfWeek {
  return new Date().toLocaleDateString('en-US', { weekday: 'long' }) as DayOfWeek;
}

/**
 * Filter specials to only those available today
 */
export function filterSpecialsByToday(specials: Special[]): Special[] {
  return specials.filter(isSpecialAvailableToday);
}

/**
 * Sort specials by sort order
 */
export function sortSpecials(specials: Special[]): Special[] {
  return [...specials].sort((a, b) => a.sortOrder - b.sortOrder);
}

/**
 * Get active specials sorted by order
 */
export function getActiveSpecials(specials: Special[]): Special[] {
  return sortSpecials(specials.filter(s => s.active));
}
