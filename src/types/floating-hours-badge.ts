/**
 * Floating Hours Badge Type Definitions
 * Types for the floating hours badge overlay component
 * that shows open/closed status over the hero image.
 */

import type { BusinessHoursConfig, OperatingStatus, TimeFormat } from './hours';

/**
 * Position options for the floating badge
 */
export type FloatingBadgePosition =
  | 'top-left'
  | 'top-right'
  | 'bottom-left'
  | 'bottom-right';

/**
 * Badge visibility behavior
 */
export type BadgeVisibility = 'always' | 'auto-hide-when-closed' | 'hidden';

/**
 * Props for the FloatingHoursBadge component
 */
export interface FloatingHoursBadgeProps {
  /** Business hours configuration (uses default if not provided) */
  config?: BusinessHoursConfig;
  /** Time format for display (default: '12h') */
  timeFormat?: TimeFormat;
  /** Position of the floating badge (default: 'top-right') */
  position?: FloatingBadgePosition;
  /** Badge visibility behavior (default: 'auto-hide-when-closed') */
  visibility?: BadgeVisibility;
  /** Update interval in milliseconds (default: 60000 = 1 minute) */
  updateInterval?: number;
  /** Whether to show today's hours text (default: true) */
  showHoursText?: boolean;
  /** Whether to animate the status dot (default: true) */
  animateDot?: boolean;
  /** Additional CSS class names */
  class?: string;
  /** Optional z-index override (default: 10) */
  zIndex?: number;
  /** Offset from edge in pixels (default: 16) */
  offset?: number;
}

/**
 * Internal state for the floating badge
 */
export interface FloatingBadgeState {
  /** Current operating status */
  status: OperatingStatus;
  /** Status message text */
  statusText: string;
  /** Today's hours text (e.g., "11 AM - 10 PM") */
  hoursText: string;
  /** Whether the badge is currently visible */
  isVisible: boolean;
  /** Whether special hours are in effect */
  isSpecialDay: boolean;
  /** Special day name if applicable */
  specialDayName?: string;
}
