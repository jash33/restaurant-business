/**
 * Reservation Types
 *
 * Type definitions for reservation platform integration including:
 * - Platform configuration types
 * - Availability status types
 * - Component props types
 * - Tracking event types
 */

/**
 * Platform identifiers for supported reservation services
 */
export type ReservationPlatformId = 'opentable' | 'resy' | 'yelp';

/**
 * Reservation platform configuration
 */
export interface ReservationPlatform {
  /** Platform identifier */
  id: ReservationPlatformId;
  /** Display name */
  name: string;
  /** Restaurant's reservation page URL on the platform */
  url: string;
  /** Short description for the card */
  description: string;
  /** Brand primary color (hex) */
  primaryColor: string;
  /** Brand secondary color for gradients/accents (hex) */
  secondaryColor?: string;
  /** Whether to show this platform */
  enabled: boolean;
  /** Restaurant ID on the platform (for API integration) */
  restaurantId?: string;
  /** Whether API availability check is enabled */
  apiEnabled?: boolean;
}

/**
 * Availability status for a reservation platform
 */
export interface AvailabilityStatus {
  /** Platform identifier */
  platform: ReservationPlatformId;
  /** Whether tables are currently available */
  available: boolean;
  /** Next available time slot (ISO string) */
  nextAvailable?: string;
  /** Number of available slots */
  availableSlots?: number;
  /** When this data was last fetched (timestamp) */
  lastUpdated: number;
  /** Status message to display */
  statusMessage?: string;
  /** Whether data is still loading */
  isLoading?: boolean;
  /** Error message if fetch failed */
  error?: string;
}

/**
 * Props for the ReservationLinks component
 */
export interface ReservationLinksProps {
  /** Custom heading */
  heading?: string;
  /** Custom subheading */
  subheading?: string;
  /** Custom list of platforms (overrides default) */
  platforms?: ReservationPlatform[];
  /** Show phone reservation option */
  showPhoneOption?: boolean;
  /** Phone number for reservations */
  phone?: string;
  /** Show availability status badges */
  showAvailabilityStatus?: boolean;
  /** Pre-loaded availability data */
  availabilityData?: Record<ReservationPlatformId, AvailabilityStatus>;
  /** Show additional info section */
  showReservationInfo?: boolean;
  /** Custom ID for the section */
  id?: string;
  /** Custom class name */
  class?: string;
  /** Enable click tracking */
  enableTracking?: boolean;
}

/**
 * Tracking event payload for reservation platform clicks
 */
export interface ReservationTrackingPayload {
  /** Event name */
  event: string;
  /** Platform identifier */
  platform: ReservationPlatformId | 'phone';
  /** Platform name */
  platformName: string;
  /** Destination URL */
  destination: string;
  /** Section location on page */
  sectionLocation: string;
  /** Availability status at time of click */
  availabilityStatus?: 'available' | 'limited' | 'unavailable' | 'unknown';
  /** Timestamp of the click */
  timestamp: string;
}

/**
 * Availability badge display status
 */
export type AvailabilityBadgeStatus =
  | 'available'      // Green - Tables available
  | 'limited'        // Yellow - Limited availability
  | 'unavailable'    // Red - No availability
  | 'loading'        // Gray animated - Checking availability
  | 'unknown';       // Gray - API not configured

/**
 * Helper type for platform-specific configuration overrides
 */
export interface PlatformOverrides {
  opentable?: Partial<ReservationPlatform>;
  resy?: Partial<ReservationPlatform>;
  yelp?: Partial<ReservationPlatform>;
}
