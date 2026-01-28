/**
 * Reservation Platform Configuration
 *
 * Configuration for restaurant reservation platform links including:
 * - Platform metadata (name, URL, colors)
 * - Brand-compliant styling
 * - Availability API integration settings
 * - Click tracking configuration
 *
 * @example
 * ```ts
 * import { RESERVATION_PLATFORMS, RESERVATIONS_CONFIG } from '../config/reservations.config';
 * ```
 */

export interface ReservationPlatform {
  /** Platform identifier */
  id: 'opentable' | 'resy' | 'yelp';
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

export interface AvailabilityStatus {
  /** Platform identifier */
  platform: 'opentable' | 'resy' | 'yelp';
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
 * Default reservation platform configurations
 * Update URLs with your restaurant's actual platform pages
 */
export const RESERVATION_PLATFORMS: ReservationPlatform[] = [
  {
    id: 'opentable',
    name: 'OpenTable',
    url: import.meta.env.PUBLIC_OPENTABLE_URL || 'https://www.opentable.com/r/your-restaurant',
    description: 'Book instantly',
    primaryColor: '#da3743',
    secondaryColor: '#b02a35',
    enabled: true,
    restaurantId: import.meta.env.PUBLIC_OPENTABLE_RESTAURANT_ID || undefined,
    apiEnabled: Boolean(import.meta.env.PUBLIC_OPENTABLE_API_ENABLED),
  },
  {
    id: 'resy',
    name: 'Resy',
    url: import.meta.env.PUBLIC_RESY_URL || 'https://resy.com/cities/hou/your-restaurant',
    description: 'Reserve your table',
    primaryColor: '#c8102e',
    secondaryColor: '#a00d25',
    enabled: true,
    restaurantId: import.meta.env.PUBLIC_RESY_VENUE_ID || undefined,
    apiEnabled: Boolean(import.meta.env.PUBLIC_RESY_API_ENABLED),
  },
  {
    id: 'yelp',
    name: 'Yelp',
    url: import.meta.env.PUBLIC_YELP_RESERVATIONS_URL || 'https://www.yelp.com/reservations/your-restaurant',
    description: 'Book on Yelp',
    primaryColor: '#d32323',
    secondaryColor: '#af1c1c',
    enabled: true,
    restaurantId: import.meta.env.PUBLIC_YELP_BUSINESS_ID || undefined,
    apiEnabled: Boolean(import.meta.env.PUBLIC_YELP_API_ENABLED),
  },
];

/**
 * Global reservation section configuration
 */
export const RESERVATIONS_CONFIG = {
  /** Section heading */
  heading: 'Make a Reservation',
  /** Section subheading */
  subheading: 'Book your table through your preferred platform',
  /** ID for the section (used for anchor links) */
  sectionId: 'reservations',
  /** Show phone reservation option */
  showPhoneOption: true,
  /** Phone number for reservations */
  phone: import.meta.env.PUBLIC_RESERVATIONS_PHONE || '(713) 555-0123',
  /** Show additional info section */
  showReservationInfo: true,
  /** Show availability status badges */
  showAvailabilityStatus: Boolean(import.meta.env.PUBLIC_SHOW_AVAILABILITY_STATUS),
  /** Cache duration for availability data (in milliseconds) */
  availabilityCacheDuration: 5 * 60 * 1000, // 5 minutes
  /** Enable click tracking */
  enableTracking: true,
  /** Recommendation text for reservations */
  recommendationText: 'Reservations recommended for dinner service',
  /** Large party info text */
  largePartyText: 'Large parties (8+) please call directly',
  /** Special requests info text */
  specialRequestsText: 'Special requests? Let us know when booking',
};

/**
 * Tracking event names for analytics
 */
export const RESERVATION_TRACKING_EVENTS = {
  /** Fired when user views the reservation section */
  sectionView: 'reservation_section_view',
  /** Fired when user clicks a platform link */
  platformClick: 'reservation_platform_click',
  /** Fired when user clicks the phone reservation option */
  phoneClick: 'reservation_phone_click',
  /** Fired when availability data is loaded */
  availabilityLoaded: 'reservation_availability_loaded',
  /** Fired when user hovers over availability badge */
  availabilityHover: 'reservation_availability_hover',
};

/**
 * Helper function to get enabled platforms only
 */
export function getEnabledPlatforms(): ReservationPlatform[] {
  return RESERVATION_PLATFORMS.filter(platform => platform.enabled);
}

/**
 * Helper function to get a specific platform by ID
 */
export function getPlatformById(id: ReservationPlatform['id']): ReservationPlatform | undefined {
  return RESERVATION_PLATFORMS.find(platform => platform.id === id);
}

/**
 * Helper function to check if any platform has API integration enabled
 */
export function hasApiIntegration(): boolean {
  return RESERVATION_PLATFORMS.some(platform => platform.enabled && platform.apiEnabled);
}
