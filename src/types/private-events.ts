/**
 * Private Events Type Definitions
 * Type definitions for the private events page including venue spaces,
 * event packages, sample menus, and form data.
 */

/**
 * Event type options for private events
 */
export type PrivateEventType =
  | ''
  | 'wedding-reception'
  | 'wedding-rehearsal'
  | 'corporate-meeting'
  | 'corporate-party'
  | 'birthday-party'
  | 'anniversary'
  | 'holiday-party'
  | 'graduation'
  | 'baby-shower'
  | 'bridal-shower'
  | 'retirement'
  | 'memorial'
  | 'other';

/**
 * Venue space for private events
 */
export interface VenueSpace {
  /** Unique identifier */
  id: string;
  /** Space name */
  name: string;
  /** Brief description */
  description: string;
  /** Guest capacity range */
  capacity: {
    min: number;
    max: number;
    seated?: number;
    standing?: number;
  };
  /** Square footage */
  squareFeet: number;
  /** List of amenities */
  amenities: string[];
  /** Image source URL */
  imageSrc?: string;
  /** Image alt text */
  imageAlt?: string;
  /** Whether this space can be combined with others */
  canCombine?: boolean;
  /** Ideal event types for this space */
  idealFor: string[];
}

/**
 * Event package/tier
 */
export interface EventPackage {
  /** Unique identifier */
  id: string;
  /** Package name */
  name: string;
  /** Price display (e.g., "Starting at $1,500") */
  price: string;
  /** Price note (e.g., "per person", "minimum 20 guests") */
  priceNote?: string;
  /** Brief description */
  description: string;
  /** What's included */
  includes: string[];
  /** What's not included (optional) */
  excludes?: string[];
  /** Whether this is the most popular/recommended */
  isPopular?: boolean;
  /** Custom label for popular badge */
  popularLabel?: string;
  /** Minimum guest count for this package */
  minGuests?: number;
  /** Maximum guest count for this package */
  maxGuests?: number;
}

/**
 * Sample menu item
 */
export interface SampleMenuItem {
  /** Item name */
  name: string;
  /** Item description */
  description?: string;
}

/**
 * Sample menu category
 */
export interface SampleMenuCategory {
  /** Category name (e.g., "Appetizers", "Main Courses") */
  name: string;
  /** Items in this category */
  items: SampleMenuItem[];
}

/**
 * Sample menu for an event package
 */
export interface SampleMenu {
  /** Menu ID matching package ID */
  packageId: string;
  /** Menu name */
  name: string;
  /** Menu description */
  description?: string;
  /** Categories and items */
  categories: SampleMenuCategory[];
}

/**
 * FAQ item for private events
 */
export interface PrivateEventFAQ {
  /** Question */
  question: string;
  /** Answer */
  answer: string;
}

/**
 * Hero section content
 */
export interface PrivateEventsHero {
  /** Eyebrow text above headline */
  eyebrow: string;
  /** Main headline */
  headline: string;
  /** Supporting subheadline */
  subheadline: string;
}

/**
 * Complete private events page configuration
 */
export interface PrivateEventsConfig {
  /** Hero section content */
  hero: PrivateEventsHero;
  /** Venue spaces */
  venueSpaces: VenueSpace[];
  /** Event packages */
  packages: EventPackage[];
  /** Sample menus */
  sampleMenus: SampleMenu[];
  /** FAQ items */
  faqs: PrivateEventFAQ[];
}

/**
 * Private event inquiry form data
 */
export interface PrivateEventInquiryData {
  /** User's full name (required) */
  name: string;
  /** User's email address (required) */
  email: string;
  /** User's phone number (required) */
  phone: string;
  /** Type of event (required) */
  eventType: PrivateEventType;
  /** Preferred event date (required) */
  eventDate: string;
  /** Alternative event date (optional) */
  alternateDate?: string;
  /** Expected number of guests (required) */
  guestCount: string;
  /** Preferred venue space ID (optional) */
  preferredSpace?: string;
  /** Selected package ID (optional) */
  selectedPackage?: string;
  /** Special requests or additional details (required) */
  message: string;
}

/**
 * Event type option for dropdown
 */
export interface PrivateEventTypeOption {
  value: PrivateEventType;
  label: string;
}

/**
 * Private event type options
 */
export const PRIVATE_EVENT_TYPE_OPTIONS: PrivateEventTypeOption[] = [
  { value: '', label: 'Select event type' },
  { value: 'wedding-reception', label: 'Wedding Reception' },
  { value: 'wedding-rehearsal', label: 'Rehearsal Dinner' },
  { value: 'corporate-meeting', label: 'Corporate Meeting' },
  { value: 'corporate-party', label: 'Corporate Party/Celebration' },
  { value: 'birthday-party', label: 'Birthday Party' },
  { value: 'anniversary', label: 'Anniversary Celebration' },
  { value: 'holiday-party', label: 'Holiday Party' },
  { value: 'graduation', label: 'Graduation Celebration' },
  { value: 'baby-shower', label: 'Baby Shower' },
  { value: 'bridal-shower', label: 'Bridal Shower' },
  { value: 'retirement', label: 'Retirement Party' },
  { value: 'memorial', label: 'Memorial/Celebration of Life' },
  { value: 'other', label: 'Other' },
];

/**
 * Validation configuration for private event form
 */
export interface PrivateEventValidationConfig {
  /** Minimum message length */
  minMessageLength: number;
  /** Maximum message length */
  maxMessageLength: number;
  /** Maximum name length */
  maxNameLength: number;
  /** Maximum email length */
  maxEmailLength: number;
  /** Maximum phone length */
  maxPhoneLength: number;
  /** Minimum guest count */
  minGuestCount: number;
  /** Maximum guest count */
  maxGuestCount: number;
  /** Minimum time to fill form (spam prevention) in milliseconds */
  minSubmitTime: number;
}

/**
 * Default validation configuration
 */
export const DEFAULT_PRIVATE_EVENT_VALIDATION_CONFIG: PrivateEventValidationConfig = {
  minMessageLength: 10,
  maxMessageLength: 2000,
  maxNameLength: 100,
  maxEmailLength: 254,
  maxPhoneLength: 20,
  minGuestCount: 10,
  maxGuestCount: 200,
  minSubmitTime: 3000, // 3 seconds
};
