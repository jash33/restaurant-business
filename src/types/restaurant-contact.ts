/**
 * Restaurant Contact Form Type Definitions
 * Type definitions for the restaurant general inquiry form component including
 * form data, validation, and submission states.
 */

/**
 * Inquiry type options for restaurant
 */
export type InquiryType =
  | ''
  | 'general'
  | 'reservation'
  | 'feedback'
  | 'private-dining'
  | 'gift-cards'
  | 'careers'
  | 'other';

/**
 * Restaurant contact form field data
 */
export interface RestaurantContactFormData {
  /** User's full name (required) */
  name: string;
  /** User's email address (required, validated) */
  email: string;
  /** User's phone number (optional) */
  phone: string;
  /** Type of inquiry (required) */
  inquiryType: InquiryType;
  /** Preferred callback time (optional) */
  preferredCallbackTime: string;
  /** Message or inquiry details (required) */
  message: string;
}

/**
 * Validation error messages for each field
 */
export interface RestaurantContactFormErrors {
  name?: string;
  email?: string;
  phone?: string;
  inquiryType?: string;
  preferredCallbackTime?: string;
  message?: string;
  /** General form-level error (spam detection, etc.) */
  form?: string;
}

/**
 * Touched state for each field (for showing validation after interaction)
 */
export interface RestaurantContactFormTouched {
  name: boolean;
  email: boolean;
  phone: boolean;
  inquiryType: boolean;
  preferredCallbackTime: boolean;
  message: boolean;
}

/**
 * Form submission status
 */
export type RestaurantFormStatus = 'idle' | 'submitting' | 'success' | 'error';

/**
 * Inquiry type option for dropdown
 */
export interface InquiryTypeOption {
  value: InquiryType;
  label: string;
}

/**
 * Preferred callback time option
 */
export interface CallbackTimeOption {
  value: string;
  label: string;
}

/**
 * Validation configuration
 */
export interface RestaurantContactValidationConfig {
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
  /** Minimum time to fill form (spam prevention) in milliseconds */
  minSubmitTime: number;
}

/**
 * Default validation configuration
 */
export const DEFAULT_RESTAURANT_CONTACT_VALIDATION_CONFIG: RestaurantContactValidationConfig = {
  minMessageLength: 10,
  maxMessageLength: 1500,
  maxNameLength: 100,
  maxEmailLength: 254,
  maxPhoneLength: 20,
  minSubmitTime: 3000, // 3 seconds
};

/**
 * Inquiry type options
 */
export const INQUIRY_TYPE_OPTIONS: InquiryTypeOption[] = [
  { value: '', label: 'Select inquiry type' },
  { value: 'general', label: 'General Question' },
  { value: 'reservation', label: 'Reservation Inquiry' },
  { value: 'feedback', label: 'Feedback' },
  { value: 'private-dining', label: 'Private Dining' },
  { value: 'gift-cards', label: 'Gift Cards' },
  { value: 'careers', label: 'Career Opportunities' },
  { value: 'other', label: 'Other' },
];

/**
 * Preferred callback time options (aligned with restaurant office hours)
 */
export const CALLBACK_TIME_OPTIONS: CallbackTimeOption[] = [
  { value: '', label: 'Select preferred time' },
  { value: 'morning', label: 'Morning (10 AM - 12 PM)' },
  { value: 'afternoon', label: 'Afternoon (12 PM - 3 PM)' },
  { value: 'evening', label: 'Evening (3 PM - 6 PM)' },
  { value: 'anytime', label: 'Any time works' },
];

/**
 * Initial form data
 */
export const INITIAL_RESTAURANT_CONTACT_FORM_DATA: RestaurantContactFormData = {
  name: '',
  email: '',
  phone: '',
  inquiryType: '',
  preferredCallbackTime: '',
  message: '',
};

/**
 * Initial touched state
 */
export const INITIAL_RESTAURANT_CONTACT_TOUCHED: RestaurantContactFormTouched = {
  name: false,
  email: false,
  phone: false,
  inquiryType: false,
  preferredCallbackTime: false,
  message: false,
};

/**
 * Reservation platform configuration
 */
export interface ReservationPlatform {
  name: string;
  url: string;
  icon: string;
  description: string;
}

/**
 * Default reservation platforms
 */
export const RESERVATION_PLATFORMS: ReservationPlatform[] = [
  {
    name: 'OpenTable',
    url: 'https://www.opentable.com/r/your-restaurant',
    icon: 'opentable',
    description: 'Book a table on OpenTable',
  },
  {
    name: 'Resy',
    url: 'https://resy.com/cities/hou/your-restaurant',
    icon: 'resy',
    description: 'Book a table on Resy',
  },
];

/**
 * Office hours for callbacks
 */
export interface OfficeHours {
  day: string;
  hours: string;
  isOfficeDay: boolean;
}

/**
 * Default office hours for phone callbacks
 */
export const OFFICE_HOURS: OfficeHours[] = [
  { day: 'Monday', hours: '10:00 AM - 6:00 PM', isOfficeDay: true },
  { day: 'Tuesday', hours: '10:00 AM - 6:00 PM', isOfficeDay: true },
  { day: 'Wednesday', hours: '10:00 AM - 6:00 PM', isOfficeDay: true },
  { day: 'Thursday', hours: '10:00 AM - 6:00 PM', isOfficeDay: true },
  { day: 'Friday', hours: '10:00 AM - 6:00 PM', isOfficeDay: true },
  { day: 'Saturday', hours: 'Closed', isOfficeDay: false },
  { day: 'Sunday', hours: 'Closed', isOfficeDay: false },
];
