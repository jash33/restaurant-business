/**
 * Location Types
 * Type definitions for location section display and configuration.
 */

/**
 * Represents the business address
 */
export interface Address {
  /** Street address line 1 */
  street: string;
  /** Street address line 2 (suite, building, etc.) */
  street2?: string;
  /** City name */
  city: string;
  /** State/Province abbreviation */
  state: string;
  /** ZIP/Postal code */
  zipCode: string;
  /** Country (defaults to 'USA') */
  country?: string;
}

/**
 * Geographical coordinates for map deep linking
 */
export interface Coordinates {
  /** Latitude */
  latitude: number;
  /** Longitude */
  longitude: number;
}

/**
 * Parking information options
 */
export interface ParkingInfo {
  /** Whether parking is available */
  available: boolean;
  /** Type of parking (e.g., 'lot', 'street', 'garage', 'valet') */
  type: 'lot' | 'street' | 'garage' | 'valet' | 'mixed';
  /** Description of parking options */
  description: string;
  /** Whether parking is free */
  isFree?: boolean;
  /** Additional parking notes */
  notes?: string;
}

/**
 * Public transit option
 */
export interface TransitOption {
  /** Type of transit (bus, metro, train, etc.) */
  type: 'bus' | 'metro' | 'train' | 'light-rail' | 'ferry' | 'other';
  /** Line/route name or number */
  line: string;
  /** Nearest stop or station name */
  stop: string;
  /** Walking distance/time from stop */
  walkingInfo?: string;
  /** Additional notes */
  notes?: string;
}

/**
 * Public transit information
 */
export interface TransitInfo {
  /** Whether public transit is accessible */
  available: boolean;
  /** Description of transit accessibility */
  description?: string;
  /** List of transit options */
  options: TransitOption[];
}

/**
 * Accessibility features
 */
export interface AccessibilityInfo {
  /** Whether wheelchair accessible */
  wheelchairAccessible: boolean;
  /** Description of accessibility features */
  description?: string;
  /** Additional accessibility notes */
  notes?: string;
}

/**
 * Get Directions CTA configuration
 */
export interface DirectionsCTA {
  /** Text for the button */
  text: string;
  /** Google Maps URL */
  googleMapsUrl: string;
  /** Apple Maps URL */
  appleMapsUrl: string;
  /** Generic maps URL fallback */
  genericUrl?: string;
}

/**
 * Complete location configuration
 */
export interface LocationConfig {
  /** Business name */
  businessName: string;
  /** Physical address */
  address: Address;
  /** GPS coordinates */
  coordinates: Coordinates;
  /** Phone number */
  phone?: string;
  /** Parking information */
  parking: ParkingInfo;
  /** Public transit information */
  transit: TransitInfo;
  /** Accessibility information */
  accessibility?: AccessibilityInfo;
  /** Get Directions CTA config */
  directionsCTA: DirectionsCTA;
  /** Additional location notes */
  additionalNotes?: string[];
}

/**
 * Props for the LocationSection component
 */
export interface LocationSectionProps {
  /** Location configuration */
  config?: LocationConfig;
  /** Section heading */
  heading?: string;
  /** Section subheading */
  subheading?: string;
  /** Whether to show the address card */
  showAddress?: boolean;
  /** Whether to show parking info */
  showParking?: boolean;
  /** Whether to show transit info */
  showTransit?: boolean;
  /** Whether to show the Get Directions CTA */
  showDirections?: boolean;
  /** Optional section ID for anchor links */
  id?: string;
  /** Additional CSS class names */
  class?: string;
}
