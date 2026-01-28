/**
 * Parking & Transit Info Types
 * Type definitions for the dedicated parking, transit, bike parking,
 * and accessibility section with first-time visitor tips.
 */

/**
 * Parking type options
 */
export type ParkingType = 'street' | 'lot' | 'garage' | 'valet';

/**
 * Transit type options
 */
export type TransitType = 'bus' | 'metro' | 'train' | 'light-rail' | 'ferry' | 'rideshare' | 'other';

/**
 * Detailed parking tip for a specific type
 */
export interface ParkingTip {
  /** Unique identifier */
  id: string;
  /** Type of parking */
  type: ParkingType;
  /** Title for display */
  title: string;
  /** Brief description */
  description: string;
  /** Detailed instructions or tips */
  tips: string[];
  /** Whether this parking option is free */
  isFree?: boolean;
  /** Pricing information if applicable */
  pricing?: string;
  /** Hours of availability */
  hours?: string;
  /** Location or address details */
  location?: string;
  /** Additional notes */
  notes?: string;
}

/**
 * Public transit tip/direction
 */
export interface TransitTip {
  /** Unique identifier */
  id: string;
  /** Type of transit */
  type: TransitType;
  /** Route/line name */
  routeName: string;
  /** Nearest stop or station */
  nearestStop: string;
  /** Walking distance/time from stop */
  walkingDistance?: string;
  /** Step-by-step directions from the stop */
  directions?: string[];
  /** Any relevant notes */
  notes?: string;
  /** Frequency/schedule info */
  frequency?: string;
}

/**
 * Bike parking information
 */
export interface BikeParkingInfo {
  /** Whether bike parking is available */
  available: boolean;
  /** Description of bike parking */
  description: string;
  /** Number of bike racks/spaces */
  capacity?: number;
  /** Location of bike parking */
  location?: string;
  /** Whether the area is covered/sheltered */
  isCovered?: boolean;
  /** Whether bike locks are available/required */
  locksAvailable?: boolean;
  /** Tips for cyclists */
  tips?: string[];
  /** Additional notes */
  notes?: string;
}

/**
 * Accessibility feature detail
 */
export interface AccessibilityFeature {
  /** Unique identifier */
  id: string;
  /** Feature title */
  title: string;
  /** Feature description */
  description: string;
  /** Icon name for display */
  icon?: 'wheelchair' | 'parking' | 'entrance' | 'restroom' | 'seating' | 'assistance' | 'hearing' | 'visual';
  /** Whether this feature is available */
  available: boolean;
}

/**
 * First-time visitor tip
 */
export interface FirstTimeVisitorTip {
  /** Unique identifier */
  id: string;
  /** Category of the tip */
  category: 'arrival' | 'parking' | 'entrance' | 'seating' | 'ordering' | 'general';
  /** Tip title */
  title: string;
  /** Tip content */
  content: string;
  /** Icon for display */
  icon?: string;
  /** Priority order (lower = higher priority) */
  priority?: number;
}

/**
 * Rideshare drop-off information
 */
export interface RideshareInfo {
  /** Whether rideshare drop-off is available */
  available: boolean;
  /** Description of drop-off location */
  description: string;
  /** Specific drop-off address or location */
  dropOffLocation?: string;
  /** Tips for rideshare users */
  tips?: string[];
}

/**
 * Complete parking and transit info configuration
 */
export interface ParkingTransitInfoConfig {
  /** Parking tips by type */
  parkingTips: ParkingTip[];
  /** Public transit tips */
  transitTips: TransitTip[];
  /** Bike parking information */
  bikeParking: BikeParkingInfo;
  /** Accessibility features */
  accessibilityFeatures: AccessibilityFeature[];
  /** First-time visitor tips */
  firstTimeVisitorTips: FirstTimeVisitorTip[];
  /** Rideshare information */
  rideshare: RideshareInfo;
}

/**
 * Props for the ParkingTransitInfoSection component
 */
export interface ParkingTransitInfoSectionProps {
  /** Configuration data */
  config?: ParkingTransitInfoConfig;
  /** Section heading */
  heading?: string;
  /** Section subheading */
  subheading?: string;
  /** Whether to show parking tips section */
  showParking?: boolean;
  /** Whether to show transit section */
  showTransit?: boolean;
  /** Whether to show bike parking section */
  showBikeParking?: boolean;
  /** Whether to show accessibility section */
  showAccessibility?: boolean;
  /** Whether to show first-time visitor tips */
  showVisitorTips?: boolean;
  /** Whether to show rideshare information */
  showRideshare?: boolean;
  /** Optional section ID for anchor links */
  id?: string;
  /** Additional CSS class names */
  class?: string;
}

/**
 * Display configuration defaults
 */
export interface ParkingTransitInfoDisplayConfig {
  /** Default heading text */
  defaultHeading: string;
  /** Default subheading text */
  defaultSubheading: string;
  /** Show parking by default */
  showParking: boolean;
  /** Show transit by default */
  showTransit: boolean;
  /** Show bike parking by default */
  showBikeParking: boolean;
  /** Show accessibility by default */
  showAccessibility: boolean;
  /** Show visitor tips by default */
  showVisitorTips: boolean;
  /** Show rideshare by default */
  showRideshare: boolean;
}
