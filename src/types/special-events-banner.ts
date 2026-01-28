/**
 * Special Events Banner Types
 *
 * Type definitions for the dismissible banner component that displays
 * special events, holiday hours, prix fixe menus, and announcements.
 */

/**
 * Banner type determines the visual style and icon
 */
export type BannerType =
  | 'announcement'
  | 'holiday-hours'
  | 'prix-fixe'
  | 'special-event'
  | 'closure'
  | 'promotion';

/**
 * Banner priority determines display order when multiple banners are active
 */
export type BannerPriority = 'high' | 'medium' | 'low';

/**
 * Configuration for a single banner/event
 */
export interface BannerEvent {
  /** Unique identifier for the banner (used for localStorage key) */
  id: string;
  /** Type of banner - affects styling and icon */
  type: BannerType;
  /** Priority level for display ordering */
  priority: BannerPriority;
  /** Main headline text */
  title: string;
  /** Optional description text */
  description?: string;
  /** Optional link URL */
  linkUrl?: string;
  /** Optional link text (defaults to "Learn More") */
  linkText?: string;
  /** Date to start showing the banner (ISO format: YYYY-MM-DD) */
  startDate: string;
  /** Date to stop showing the banner (ISO format: YYYY-MM-DD) */
  endDate: string;
  /** Whether the banner can be dismissed by the user */
  dismissible?: boolean;
  /** Custom background color (overrides type default) */
  backgroundColor?: string;
  /** Custom text color (overrides type default) */
  textColor?: string;
  /** Custom icon (emoji or SVG path) */
  icon?: string;
}

/**
 * Configuration for the Special Events Banner system
 */
export interface SpecialEventsBannerConfig {
  /** Array of banner events to display */
  events: BannerEvent[];
  /** Global setting: whether to show close button on all dismissible banners */
  showCloseButton?: boolean;
  /** Global setting: whether to persist dismissals across sessions */
  persistDismissals?: boolean;
  /** localStorage key prefix for dismissed banners */
  storageKeyPrefix?: string;
  /** Maximum number of banners to show simultaneously */
  maxVisibleBanners?: number;
}

/**
 * Props for the SpecialEventsBanner component
 */
export interface SpecialEventsBannerProps {
  /** Override the default configuration */
  config?: Partial<SpecialEventsBannerConfig>;
  /** Position of the banner */
  position?: 'top' | 'bottom';
  /** Additional CSS classes */
  class?: string;
  /** Whether the banner should be sticky */
  sticky?: boolean;
}

/**
 * State for tracking dismissed banners
 */
export interface DismissedBannerState {
  /** Banner ID */
  id: string;
  /** Timestamp when dismissed */
  dismissedAt: string;
  /** Whether to keep dismissed across sessions */
  persistent: boolean;
}
