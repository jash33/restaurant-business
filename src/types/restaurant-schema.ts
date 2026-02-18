/**
 * Restaurant Schema Type Definitions
 * TypeScript interfaces for Restaurant + LocalBusiness combined JSON-LD schema.
 * Based on schema.org vocabulary for Restaurant (inherits from FoodEstablishment and LocalBusiness).
 */

import type {
  PostalAddress,
  GeoCoordinates,
  OpeningHoursSpecification,
  ContactPoint,
  AggregateRating,
  PriceRange,
} from './seo';

/**
 * Restaurant type - schema.org Restaurant vocabulary
 * Restaurant inherits from: FoodEstablishment -> LocalBusiness -> Organization -> Thing
 */
export type RestaurantType = 'Restaurant' | 'FoodEstablishment';

/**
 * Amenity feature for accessibility and services
 */
export interface AmenityFeature {
  /** Name of the amenity */
  name: string;
  /** Whether the amenity is available */
  value: boolean;
}

/**
 * Number of employees range
 */
export interface EmployeeCount {
  minValue: number;
  maxValue: number;
}

/**
 * Combined Restaurant + LocalBusiness Schema
 * This interface represents the complete structured data for a restaurant
 * following schema.org vocabulary and Google's recommendations for rich results.
 */
export interface RestaurantSchema {
  // === Type Definition ===
  /** Schema.org type - should be 'Restaurant' or 'FoodEstablishment' */
  type: RestaurantType;

  // === Business Identity (from LocalBusiness) ===
  /** Official business name */
  name: string;
  /** Legal registered name (if different from name) */
  legalName?: string;
  /** Alternative/common name */
  alternateName?: string;
  /** Business description (recommended 150-300 characters) */
  description?: string;
  /** Business slogan/tagline */
  slogan?: string;

  // === URLs ===
  /** Main website URL */
  url?: string;

  // === Contact Information ===
  /** Primary phone number in E.164 format (+1-XXX-XXX-XXXX) */
  telephone?: string;
  /** Fax number */
  faxNumber?: string;
  /** Primary email address */
  email?: string;
  /** Contact point(s) for different purposes */
  contactPoint?: ContactPoint | ContactPoint[];

  // === Location & Address (from LocalBusiness) ===
  /** Physical address */
  address?: PostalAddress;
  /** GPS coordinates */
  geo?: GeoCoordinates;

  // === Operating Hours (from LocalBusiness) ===
  /** Structured opening hours specification */
  openingHoursSpecification?: OpeningHoursSpecification[];
  /** Simple opening hours string array (e.g., 'Mo-Fr 11:00-22:00') */
  openingHours?: string | string[];

  // === Restaurant-Specific Properties (from FoodEstablishment) ===
  /**
   * Types of cuisine served
   * Can be a single string or array of cuisine types
   * Examples: 'American', 'Italian', 'Mexican', 'Japanese', 'Seafood', 'Steakhouse'
   */
  servesCuisine?: string | string[];

  /**
   * URL to the restaurant's menu
   * This is the primary menu property for Google rich results
   */
  hasMenu?: string;

  /**
   * Alternative menu URL property (some validators prefer this)
   */
  menu?: string;

  /**
   * Whether the restaurant accepts reservations
   * true = accepts reservations
   * false = walk-in only
   */
  acceptsReservations?: boolean | string;

  /**
   * URL for making reservations (OpenTable, Resy, direct booking, etc.)
   */
  reservationsUrl?: string;

  /**
   * Whether smoking is allowed
   */
  smokingAllowed?: boolean;

  // === Price & Payment (from LocalBusiness) ===
  /**
   * Price range indicator
   * Use: '$' (budget), '$$' (moderate), '$$$' (upscale), '$$$$' (fine dining)
   */
  priceRange?: PriceRange;
  /** Accepted currencies (typically 'USD') */
  currenciesAccepted?: string;
  /** Accepted payment methods */
  paymentAccepted?: string | string[];

  // === Reviews & Ratings ===
  /**
   * Aggregate rating from customer reviews
   * Essential for rich snippets in search results
   */
  aggregateRating?: AggregateRating;

  // === Images & Branding ===
  /** Logo URL */
  logo?: string;
  /** Image URL(s) - exterior, interior, food photos */
  image?: string | string[];

  // === Social Media ===
  /** Social media profile URLs (Facebook, Instagram, Twitter, Yelp, TripAdvisor, etc.) */
  sameAs?: string[];

  // === Business Details ===
  /** Date business was founded (ISO 8601 format: YYYY-MM-DD) */
  foundingDate?: string;
  /** Founder name(s) */
  founder?: string | string[];
  /** Number of employees (single number or range) */
  numberOfEmployees?: number | EmployeeCount;

  // === Business Identifiers ===
  /** Tax ID number */
  taxID?: string;
  /** VAT ID number */
  vatID?: string;
  /** DUNS number */
  duns?: string;
  /** NAICS code */
  naics?: string;
  /** ISIC v4 code */
  isicV4?: string;

  // === Services & Features ===
  /** Services offered by the restaurant */
  makesOffer?: string[];
  /** Topics/areas the restaurant is known for */
  knowsAbout?: string[];
  /** Languages spoken by staff */
  knowsLanguage?: string | string[];
  /** Whether drive-through service is available */
  hasDriveThroughService?: boolean;
  /** Amenity features (parking, Wi-Fi, outdoor seating, etc.) */
  amenityFeature?: AmenityFeature[];

  // === Organization Hierarchy ===
  /** Parent organization/company */
  parentOrganization?: {
    name: string;
    url?: string;
  };

  // === Additional Identifiers ===
  /** Custom property identifiers */
  identifier?: {
    type: string;
    value: string;
  }[];
}

/**
 * Type guard to check if a schema is a RestaurantSchema
 */
export function isRestaurantSchema(schema: unknown): schema is RestaurantSchema {
  return (
    typeof schema === 'object' &&
    schema !== null &&
    'type' in schema &&
    (schema.type === 'Restaurant' || schema.type === 'FoodEstablishment')
  );
}
