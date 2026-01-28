/**
 * SEO Component TypeScript Types
 * Provides type definitions for all SEO-related metadata
 */

/**
 * Standard meta tag configuration
 */
export interface MetaTags {
  /** Page title - will be combined with site name using titleTemplate */
  title: string;
  /** Meta description for search engines (recommended: 150-160 characters) */
  description: string;
  /** Meta keywords (comma-separated, optional as modern SEO relies less on this) */
  keywords?: string;
  /** Robots directive (e.g., 'index, follow', 'noindex, nofollow') */
  robots?: string;
  /** Author of the content */
  author?: string;
}

/**
 * Open Graph metadata for social sharing (Facebook, LinkedIn, etc.)
 */
export interface OpenGraphTags {
  /** og:title - Title for social sharing (defaults to meta title) */
  title?: string;
  /** og:description - Description for social sharing (defaults to meta description) */
  description?: string;
  /** og:image - Image URL for social sharing (must be absolute URL) */
  image?: string;
  /** og:image:alt - Alt text for the og:image */
  imageAlt?: string;
  /** og:image:width - Width of the og:image in pixels */
  imageWidth?: number;
  /** og:image:height - Height of the og:image in pixels */
  imageHeight?: number;
  /** og:url - Canonical URL for the page */
  url?: string;
  /** og:type - Type of content (website, article, product, etc.) */
  type?: 'website' | 'article' | 'product' | 'profile' | 'book' | 'music.song' | 'music.album' | 'video.movie' | 'video.episode';
  /** og:site_name - Name of the website */
  siteName?: string;
  /** og:locale - Locale in format language_TERRITORY (e.g., 'en_US') */
  locale?: string;
  /** og:locale:alternate - Array of alternate locales */
  localeAlternate?: string[];
}

/**
 * Twitter Card metadata
 */
export interface TwitterTags {
  /** twitter:card - Card type (summary, summary_large_image, app, player) */
  card?: 'summary' | 'summary_large_image' | 'app' | 'player';
  /** twitter:site - @username of the website */
  site?: string;
  /** twitter:creator - @username of content creator */
  creator?: string;
  /** twitter:title - Title for Twitter (defaults to og:title or meta title) */
  title?: string;
  /** twitter:description - Description for Twitter (defaults to og:description or meta description) */
  description?: string;
  /** twitter:image - Image URL for Twitter (defaults to og:image) */
  image?: string;
  /** twitter:image:alt - Alt text for the twitter:image */
  imageAlt?: string;
}

/**
 * Language and locale configuration for international SEO
 */
export interface LanguageConfig {
  /** HTML lang attribute (e.g., 'en', 'es', 'fr') */
  lang?: string;
  /** hreflang alternate language versions */
  alternateLanguages?: Array<{
    /** Language code (e.g., 'en', 'es', 'x-default') */
    hreflang: string;
    /** URL of the alternate version */
    href: string;
  }>;
}

/**
 * Article-specific structured data
 */
export interface ArticleSchema {
  type: 'Article' | 'NewsArticle' | 'BlogPosting';
  /** Article headline */
  headline: string;
  /** Article description */
  description?: string;
  /** Author name or array of author names */
  author: string | string[];
  /** Date the article was published (ISO 8601) */
  datePublished: string;
  /** Date the article was last modified (ISO 8601) */
  dateModified?: string;
  /** Featured image URL */
  image?: string | string[];
  /** Publisher information */
  publisher?: {
    name: string;
    logo?: string;
  };
  /** Article section/category */
  articleSection?: string;
  /** Word count */
  wordCount?: number;
}

// ============================================================================
// LocalBusiness Schema Types (Enhanced for Local SEO)
// ============================================================================

/** Opening hours specification for LocalBusiness */
export interface OpeningHoursSpecification {
  dayOfWeek: DayOfWeek | DayOfWeek[];
  opens: string;
  closes: string;
  validFrom?: string;
  validThrough?: string;
}

/** Days of the week for opening hours */
export type DayOfWeek = 'Monday' | 'Tuesday' | 'Wednesday' | 'Thursday' | 'Friday' | 'Saturday' | 'Sunday' | 'PublicHolidays';

/** Geographic coordinates */
export interface GeoCoordinates {
  latitude: number;
  longitude: number;
}

/** Service area definition */
export interface ServiceArea {
  type: 'GeoCircle' | 'PostalCode' | 'City' | 'State' | 'AdministrativeArea';
  geoMidpoint?: GeoCoordinates;
  geoRadius?: number;
  name?: string;
  addressLocality?: string;
  addressRegion?: string;
  postalCode?: string | string[];
  addressCountry?: string;
}

/** Aggregate rating for reviews */
export interface AggregateRating {
  ratingValue: number;
  bestRating?: number;
  worstRating?: number;
  ratingCount?: number;
  reviewCount?: number;
}

/** Price range indicator */
export type PriceRange = '$' | '$$' | '$$$' | '$$$$' | string;

/** LocalBusiness subtypes */
export type LocalBusinessType =
  | 'LocalBusiness' | 'ProfessionalService' | 'Store' | 'Restaurant'
  | 'MedicalBusiness' | 'FinancialService' | 'LegalService' | 'RealEstateAgent'
  | 'TravelAgency' | 'AutoRepair' | 'HealthAndBeautyBusiness'
  | 'HomeAndConstructionBusiness' | 'InternetCafe' | 'SportsActivityLocation'
  | 'EntertainmentBusiness' | 'FoodEstablishment' | 'LodgingBusiness';

/** Complete postal address */
export interface PostalAddress {
  streetAddress?: string;
  addressLocality?: string;
  addressRegion?: string;
  postalCode?: string;
  addressCountry?: string;
}

/** Contact point with extended options */
export interface ContactPoint {
  telephone?: string;
  email?: string;
  contactType?: string;
  availableLanguage?: string | string[];
  contactOption?: string | string[];
  areaServed?: string | string[];
  hoursAvailable?: OpeningHoursSpecification[];
}

/** Special announcement (e.g., COVID-19 updates) */
export interface SpecialAnnouncement {
  name: string;
  text: string;
  datePosted: string;
  expires?: string;
  category?: string;
  url?: string;
}

/** Organization structured data (basic) */
export interface OrganizationSchema {
  type: 'Organization';
  name: string;
  description?: string;
  url?: string;
  logo?: string;
  contactPoint?: ContactPoint;
  sameAs?: string[];
  address?: PostalAddress;
}

/** LocalBusiness structured data (comprehensive for local SEO) */
export interface LocalBusinessSchema {
  type: LocalBusinessType;
  name: string;
  alternateName?: string;
  description?: string;
  url?: string;
  logo?: string;
  image?: string | string[];
  telephone?: string;
  faxNumber?: string;
  email?: string;
  contactPoint?: ContactPoint | ContactPoint[];
  sameAs?: string[];
  address?: PostalAddress;
  geo?: GeoCoordinates;
  areaServed?: ServiceArea | ServiceArea[] | string | string[];
  openingHoursSpecification?: OpeningHoursSpecification[];
  openingHours?: string | string[];
  priceRange?: PriceRange;
  currenciesAccepted?: string;
  paymentAccepted?: string | string[];
  aggregateRating?: AggregateRating;
  foundingDate?: string;
  founder?: string | string[];
  numberOfEmployees?: number | { minValue: number; maxValue: number };
  taxID?: string;
  vatID?: string;
  duns?: string;
  naics?: string;
  isicV4?: string;
  legalName?: string;
  slogan?: string;
  specialAnnouncement?: SpecialAnnouncement;
  hasDriveThroughService?: boolean;
  hasMenu?: string;
  acceptsReservations?: boolean;
  makesOffer?: string[];
  knowsAbout?: string[];
  knowsLanguage?: string | string[];
  parentOrganization?: { name: string; url?: string; };
  identifier?: { type: string; value: string; }[];
}

// ============================================================================
// End of LocalBusiness Schema Types
// ============================================================================

/**
 * Product structured data
 */
export interface ProductSchema {
  type: 'Product';
  /** Product name */
  name: string;
  /** Product description */
  description?: string;
  /** Product image URL(s) */
  image?: string | string[];
  /** Product brand */
  brand?: string;
  /** Product SKU */
  sku?: string;
  /** Price and availability */
  offers?: {
    price: number;
    priceCurrency: string;
    availability?: 'InStock' | 'OutOfStock' | 'PreOrder' | 'Discontinued';
    url?: string;
    validFrom?: string;
    priceValidUntil?: string;
  };
  /** Aggregate rating */
  aggregateRating?: {
    ratingValue: number;
    reviewCount: number;
  };
}

/**
 * Breadcrumb structured data
 */
export interface BreadcrumbSchema {
  type: 'BreadcrumbList';
  /** Array of breadcrumb items in order */
  items: Array<{
    /** Display name of the breadcrumb */
    name: string;
    /** URL of the breadcrumb (optional for last item) */
    url?: string;
  }>;
}

/**
 * WebPage structured data
 */
export interface WebPageSchema {
  type: 'WebPage' | 'AboutPage' | 'ContactPage' | 'FAQPage' | 'CollectionPage';
  /** Page name */
  name: string;
  /** Page description */
  description?: string;
  /** Page URL */
  url?: string;
  /** Last reviewed date */
  lastReviewed?: string;
  /** Primary image */
  primaryImageOfPage?: string;
}

// ============================================================================
// Menu Schema Types (for Rich Snippets)
// ============================================================================

/**
 * Nutrition information for a menu item
 * Based on schema.org NutritionInformation
 */
export interface NutritionInformationSchema {
  /** Calories in the item */
  calories?: string;
  /** Protein content (e.g., "18 g") */
  proteinContent?: string;
  /** Carbohydrate content (e.g., "32 g") */
  carbohydrateContent?: string;
  /** Fat content (e.g., "24 g") */
  fatContent?: string;
  /** Saturated fat content */
  saturatedFatContent?: string;
  /** Fiber content */
  fiberContent?: string;
  /** Sugar content */
  sugarContent?: string;
  /** Sodium content (e.g., "680 mg") */
  sodiumContent?: string;
  /** Serving size description */
  servingSize?: string;
}

/**
 * Offer schema for menu item pricing
 * Based on schema.org Offer
 */
export interface MenuItemOfferSchema {
  /** Price of the item */
  price: number | string;
  /** Currency code (e.g., "USD") */
  priceCurrency: string;
  /** Availability status */
  availability?: 'InStock' | 'OutOfStock' | 'PreOrder';
}

/**
 * Menu item schema for individual dishes
 * Based on schema.org MenuItem
 */
export interface MenuItemSchema {
  /** Unique identifier for the menu item */
  id?: string;
  /** Name of the menu item */
  name: string;
  /** Description of the menu item */
  description?: string;
  /** Image URL(s) for the menu item */
  image?: string | string[];
  /** Pricing information */
  offers?: MenuItemOfferSchema;
  /** Dietary restrictions (e.g., "Vegetarian", "Vegan", "Gluten-Free") */
  suitableForDiet?: string | string[];
  /** Nutrition information */
  nutrition?: NutritionInformationSchema;
  /** URL to the menu item's page */
  url?: string;
  /** The menu section this item belongs to */
  menuAddOn?: string[];
}

/**
 * Menu section schema for grouping menu items
 * Based on schema.org MenuSection
 */
export interface MenuSectionSchema {
  /** Name of the section (e.g., "Appetizers", "Main Courses") */
  name: string;
  /** Description of the section */
  description?: string;
  /** Menu items in this section */
  hasMenuItem?: MenuItemSchema[];
  /** Image for the section */
  image?: string;
  /** URL for the section */
  url?: string;
}

/**
 * Complete menu schema
 * Based on schema.org Menu
 */
export interface MenuSchema {
  type: 'Menu';
  /** Name of the menu (e.g., "Dinner Menu", "Lunch Menu") */
  name: string;
  /** Description of the menu */
  description?: string;
  /** URL of the menu page */
  url?: string;
  /** Main image for the menu */
  image?: string | string[];
  /** Menu sections (categories) */
  hasMenuSection?: MenuSectionSchema[];
  /** Direct menu items (if not using sections) */
  hasMenuItem?: MenuItemSchema[];
  /** Restaurant offering this menu */
  mainEntityOfPage?: string;
  /** When the menu is available */
  availabilityStarts?: string;
  /** When the menu availability ends */
  availabilityEnds?: string;
}

// ============================================================================
// End of Menu Schema Types
// ============================================================================

/**
 * Union type for all supported JSON-LD schema types
 */
export type JsonLdSchema =
  | ArticleSchema
  | OrganizationSchema
  | LocalBusinessSchema
  | ProductSchema
  | BreadcrumbSchema
  | WebPageSchema
  | MenuSchema;

/**
 * Custom meta tag definition
 */
export interface CustomMetaTag {
  /** Meta tag name attribute (mutually exclusive with property and httpEquiv) */
  name?: string;
  /** Meta tag property attribute (for Open Graph) */
  property?: string;
  /** Meta tag http-equiv attribute */
  httpEquiv?: string;
  /** Meta tag content */
  content: string;
}

/**
 * Main SEO component props
 */
export interface SEOProps {
  // === Required Props ===
  /** Page title (required) */
  title: string;
  /** Meta description (required, recommended: 150-160 characters) */
  description: string;

  // === Optional Standard Meta Tags ===
  /** Meta keywords (comma-separated) */
  keywords?: string;
  /** Robots directive */
  robots?: string;
  /** Content author */
  author?: string;

  // === URL Configuration ===
  /** Canonical URL for the page */
  canonicalUrl?: string;
  /** Base URL for the site (used to make image URLs absolute) */
  siteUrl?: string;

  // === Open Graph Configuration ===
  /** Open Graph tags configuration */
  openGraph?: OpenGraphTags;

  // === Twitter Configuration ===
  /** Twitter Card tags configuration */
  twitter?: TwitterTags;

  // === Structured Data ===
  /** JSON-LD structured data schema(s) */
  jsonLd?: JsonLdSchema | JsonLdSchema[];

  // === Language & Locale ===
  /** HTML lang attribute */
  lang?: string;
  /** Alternate language versions for hreflang */
  alternateLanguages?: LanguageConfig['alternateLanguages'];

  // === Title Configuration ===
  /** Title template (use %s as placeholder for title) */
  titleTemplate?: string;
  /** Whether to disable the title template for this page */
  noTitleTemplate?: boolean;

  // === Image Configuration ===
  /** Default/fallback image for social sharing */
  image?: string;
  /** Alt text for the default image */
  imageAlt?: string;

  // === Additional Configuration ===
  /** Custom additional meta tags */
  additionalMetaTags?: CustomMetaTag[];
  /** Additional link tags */
  additionalLinkTags?: Array<{
    rel: string;
    href: string;
    hreflang?: string;
    type?: string;
    sizes?: string;
  }>;

  // === Charset & Viewport (usually use defaults) ===
  /** Charset (default: 'UTF-8') */
  charset?: string;
  /** Viewport content (default: 'width=device-width, initial-scale=1') */
  viewport?: string;

  // === Theme & App Configuration ===
  /** Theme color for browsers */
  themeColor?: string;
  /** Apple mobile web app title */
  appleMobileWebAppTitle?: string;
  /** Application name */
  applicationName?: string;
}

/**
 * Site-wide SEO defaults configuration
 */
export interface SEOConfig {
  /** Site name used in title template and og:site_name */
  siteName: string;
  /** Base URL of the site */
  siteUrl: string;
  /** Default title template */
  titleTemplate: string;
  /** Default meta description */
  defaultDescription: string;
  /** Default language */
  defaultLang: string;
  /** Default locale for Open Graph */
  defaultLocale: string;
  /** Default image for social sharing */
  defaultImage: string;
  /** Default image alt text */
  defaultImageAlt: string;
  /** Twitter @username for the site */
  twitterSite?: string;
  /** Default Twitter card type */
  twitterCardType: TwitterTags['card'];
  /** Default Open Graph type */
  defaultOgType: OpenGraphTags['type'];
  /** Default robots directive */
  defaultRobots: string;
  /** Theme color */
  themeColor?: string;
  /** LocalBusiness information for structured data */
  localBusiness?: LocalBusinessSchema;
  /** Organization information for structured data (legacy, prefer localBusiness) */
  organization?: OrganizationSchema | LocalBusinessSchema;
}
