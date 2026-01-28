/**
 * Catering Contact Form Type Definitions
 * Type definitions for the catering inquiry form component including
 * form data, validation, and submission states.
 */

/**
 * Event type options for catering
 */
export type EventType =
  | ''
  | 'wedding'
  | 'corporate'
  | 'private-party'
  | 'birthday'
  | 'anniversary'
  | 'holiday'
  | 'graduation'
  | 'other';

/**
 * Budget range options for catering
 */
export type CateringBudgetRange =
  | ''
  | 'under-500'
  | '500-1000'
  | '1000-2500'
  | '2500-5000'
  | '5000-10000'
  | '10000-plus'
  | 'not-sure';

/**
 * Menu preference options
 */
export type MenuPreference =
  | 'buffet'
  | 'plated'
  | 'family-style'
  | 'cocktail'
  | 'food-stations';

/**
 * Dietary restriction options
 */
export type DietaryRestriction =
  | 'vegetarian'
  | 'vegan'
  | 'gluten-free'
  | 'dairy-free'
  | 'nut-free'
  | 'halal'
  | 'kosher';

/**
 * Catering contact form field data
 */
export interface CateringFormData {
  /** User's full name (required) */
  name: string;
  /** User's email address (required, validated) */
  email: string;
  /** User's phone number (required for catering) */
  phone: string;
  /** Type of event (required) */
  eventType: EventType;
  /** Event date (required) */
  eventDate: string;
  /** Expected number of guests (required) */
  guestCount: string;
  /** Menu style preferences (optional, multiple select) */
  menuPreferences: MenuPreference[];
  /** Dietary restrictions (optional, multiple select) */
  dietaryRestrictions: DietaryRestriction[];
  /** Budget range for the event (optional) */
  budgetRange: CateringBudgetRange;
  /** Additional details or special requests (required) */
  message: string;
}

/**
 * Validation error messages for each field
 */
export interface CateringFormErrors {
  name?: string;
  email?: string;
  phone?: string;
  eventType?: string;
  eventDate?: string;
  guestCount?: string;
  menuPreferences?: string;
  dietaryRestrictions?: string;
  budgetRange?: string;
  message?: string;
  /** General form-level error (spam detection, etc.) */
  form?: string;
}

/**
 * Touched state for each field (for showing validation after interaction)
 */
export interface CateringFormTouched {
  name: boolean;
  email: boolean;
  phone: boolean;
  eventType: boolean;
  eventDate: boolean;
  guestCount: boolean;
  menuPreferences: boolean;
  dietaryRestrictions: boolean;
  budgetRange: boolean;
  message: boolean;
}

/**
 * Form submission status
 */
export type CateringFormStatus = 'idle' | 'submitting' | 'success' | 'error';

/**
 * Complete form state
 */
export interface CateringFormState {
  /** Form field values */
  data: CateringFormData;
  /** Validation errors */
  errors: CateringFormErrors;
  /** Fields that have been touched */
  touched: CateringFormTouched;
  /** Current form status */
  status: CateringFormStatus;
  /** Error message from server */
  serverError?: string;
}

/**
 * Event type option for dropdown
 */
export interface EventTypeOption {
  value: EventType;
  label: string;
}

/**
 * Budget range option for dropdown
 */
export interface CateringBudgetOption {
  value: CateringBudgetRange;
  label: string;
}

/**
 * Menu preference option for checkboxes
 */
export interface MenuPreferenceOption {
  value: MenuPreference;
  label: string;
  description?: string;
}

/**
 * Dietary restriction option for checkboxes
 */
export interface DietaryRestrictionOption {
  value: DietaryRestriction;
  label: string;
}

/**
 * Validation configuration
 */
export interface CateringValidationConfig {
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
export const DEFAULT_CATERING_VALIDATION_CONFIG: CateringValidationConfig = {
  minMessageLength: 10,
  maxMessageLength: 2000,
  maxNameLength: 100,
  maxEmailLength: 254,
  maxPhoneLength: 20,
  minGuestCount: 10,
  maxGuestCount: 1000,
  minSubmitTime: 3000, // 3 seconds
};

/**
 * Event type options
 */
export const EVENT_TYPE_OPTIONS: EventTypeOption[] = [
  { value: '', label: 'Select event type' },
  { value: 'wedding', label: 'Wedding' },
  { value: 'corporate', label: 'Corporate Event' },
  { value: 'private-party', label: 'Private Party' },
  { value: 'birthday', label: 'Birthday Celebration' },
  { value: 'anniversary', label: 'Anniversary' },
  { value: 'holiday', label: 'Holiday Party' },
  { value: 'graduation', label: 'Graduation' },
  { value: 'other', label: 'Other' },
];

/**
 * Budget range options
 */
export const CATERING_BUDGET_OPTIONS: CateringBudgetOption[] = [
  { value: '', label: 'Select your budget range' },
  { value: 'under-500', label: 'Under $500' },
  { value: '500-1000', label: '$500 - $1,000' },
  { value: '1000-2500', label: '$1,000 - $2,500' },
  { value: '2500-5000', label: '$2,500 - $5,000' },
  { value: '5000-10000', label: '$5,000 - $10,000' },
  { value: '10000-plus', label: '$10,000+' },
  { value: 'not-sure', label: "Not sure yet" },
];

/**
 * Menu preference options
 */
export const MENU_PREFERENCE_OPTIONS: MenuPreferenceOption[] = [
  { value: 'buffet', label: 'Buffet Style', description: 'Self-serve stations with variety' },
  { value: 'plated', label: 'Plated Service', description: 'Individual courses served to guests' },
  { value: 'family-style', label: 'Family Style', description: 'Shared platters at each table' },
  { value: 'cocktail', label: 'Cocktail Reception', description: 'Passed appetizers and small bites' },
  { value: 'food-stations', label: 'Food Stations', description: 'Themed interactive food stations' },
];

/**
 * Dietary restriction options
 */
export const DIETARY_RESTRICTION_OPTIONS: DietaryRestrictionOption[] = [
  { value: 'vegetarian', label: 'Vegetarian' },
  { value: 'vegan', label: 'Vegan' },
  { value: 'gluten-free', label: 'Gluten-Free' },
  { value: 'dairy-free', label: 'Dairy-Free' },
  { value: 'nut-free', label: 'Nut-Free' },
  { value: 'halal', label: 'Halal' },
  { value: 'kosher', label: 'Kosher' },
];

/**
 * Initial form data
 */
export const INITIAL_CATERING_FORM_DATA: CateringFormData = {
  name: '',
  email: '',
  phone: '',
  eventType: '',
  eventDate: '',
  guestCount: '',
  menuPreferences: [],
  dietaryRestrictions: [],
  budgetRange: '',
  message: '',
};

/**
 * Initial touched state
 */
export const INITIAL_CATERING_TOUCHED: CateringFormTouched = {
  name: false,
  email: false,
  phone: false,
  eventType: false,
  eventDate: false,
  guestCount: false,
  menuPreferences: false,
  dietaryRestrictions: false,
  budgetRange: false,
  message: false,
};
