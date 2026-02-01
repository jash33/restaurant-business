/**
 * Special Events Banner Configuration
 *
 * Configure banners for special events, holiday hours, prix fixe menus,
 * and announcements. Banners automatically display/hide based on dates.
 *
 * @example
 * ```ts
 * // Add a new holiday announcement
 * events: [
 *   {
 *     id: 'thanksgiving-2024',
 *     type: 'holiday-hours',
 *     priority: 'high',
 *     title: 'Thanksgiving Hours',
 *     description: 'We will be closed on Thanksgiving Day. Happy Holidays!',
 *     startDate: '2024-11-20',
 *     endDate: '2024-11-28',
 *     dismissible: true,
 *   }
 * ]
 * ```
 */

import type { SpecialEventsBannerConfig, BannerEvent } from '../types/special-events-banner';

/**
 * Default banner events configuration
 *
 * Add your special events, holiday hours, and announcements here.
 * Events will automatically show/hide based on their start and end dates.
 */
export const BANNER_EVENTS: BannerEvent[] = [
  // Active test banner - always visible for testing/demo purposes
  // Update or remove this for production
  {
    id: 'welcome-announcement',
    type: 'announcement',
    priority: 'high',
    title: 'Welcome to Our Restaurant',
    description: 'Experience our award-winning cuisine and exceptional service.',
    linkUrl: '/menu',
    linkText: 'View Menu',
    startDate: '2024-01-01',
    endDate: '2030-12-31',
    dismissible: true,
    icon: '🍽️',
  },
  // Example: Valentine's Day Prix Fixe Menu
  {
    id: 'valentines-2025',
    type: 'prix-fixe',
    priority: 'high',
    title: "Valentine's Day Prix Fixe Menu",
    description: 'Join us for a romantic 4-course dining experience. Reservations recommended.',
    linkUrl: '/menu',
    linkText: 'View Menu',
    startDate: '2025-02-01',
    endDate: '2025-02-14',
    dismissible: true,
    icon: '💕',
  },
  // Example: Holiday Closure
  {
    id: 'new-years-2025',
    type: 'holiday-hours',
    priority: 'high',
    title: "New Year's Day Hours",
    description: 'We will be closed on January 1st. Happy New Year!',
    startDate: '2024-12-28',
    endDate: '2025-01-02',
    dismissible: true,
    icon: '🎉',
  },
  // Example: General Announcement
  {
    id: 'summer-hours-2025',
    type: 'announcement',
    priority: 'medium',
    title: 'Summer Hours Now in Effect',
    description: 'We are now open until 11 PM on Fridays and Saturdays!',
    startDate: '2025-05-01',
    endDate: '2025-09-30',
    dismissible: true,
  },
  // Example: Special Event
  {
    id: 'live-music-fridays',
    type: 'special-event',
    priority: 'medium',
    title: 'Live Jazz Every Friday',
    description: 'Join us for live jazz music from 7-10 PM. No cover charge.',
    linkUrl: '/contact',
    linkText: 'Learn More',
    startDate: '2025-01-01',
    endDate: '2025-12-31',
    dismissible: true,
    icon: '🎷',
  },
  // Example: Temporary Closure
  {
    id: 'renovation-closure',
    type: 'closure',
    priority: 'high',
    title: 'Temporarily Closed for Renovations',
    description: 'We are upgrading our space! Reopening January 20th.',
    startDate: '2025-01-10',
    endDate: '2025-01-19',
    dismissible: false,
  },
  // Example: Promotion
  {
    id: 'happy-hour-promo',
    type: 'promotion',
    priority: 'low',
    title: 'Happy Hour Special',
    description: '50% off appetizers, 4-6 PM daily.',
    startDate: '2025-01-01',
    endDate: '2025-03-31',
    dismissible: true,
    icon: '🍹',
  },
];

/**
 * Main banner configuration
 */
export const SPECIAL_EVENTS_BANNER_CONFIG: SpecialEventsBannerConfig = {
  events: BANNER_EVENTS,
  showCloseButton: true,
  persistDismissals: true,
  storageKeyPrefix: 'restaurant-banner-dismissed',
  maxVisibleBanners: 1, // Only show one banner at a time
};

/**
 * Banner type styling configuration
 * Maps banner types to their default colors and icons
 */
export const BANNER_TYPE_STYLES = {
  announcement: {
    backgroundColor: 'var(--color-info)',
    textColor: 'var(--color-text-inverse)',
    icon: '📢',
  },
  'holiday-hours': {
    backgroundColor: 'var(--color-warning)',
    textColor: 'var(--color-warning-text)',
    icon: '🗓️',
  },
  'prix-fixe': {
    backgroundColor: 'var(--color-accent)',
    textColor: 'var(--color-text-inverse)',
    icon: '🍽️',
  },
  'special-event': {
    backgroundColor: 'var(--color-primary)',
    textColor: 'var(--color-text-inverse)',
    icon: '✨',
  },
  closure: {
    backgroundColor: 'var(--color-error)',
    textColor: 'var(--color-text-inverse)',
    icon: '⚠️',
  },
  promotion: {
    backgroundColor: 'var(--color-success)',
    textColor: 'var(--color-text-inverse)',
    icon: '🎁',
  },
} as const;
