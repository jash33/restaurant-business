/**
 * Restaurant JSON-LD Generator
 * Generates comprehensive schema.org Restaurant + LocalBusiness structured data
 * for enhanced Google local search results and rich snippets.
 *
 * Based on Google's recommendations for Restaurant rich results:
 * https://developers.google.com/search/docs/appearance/structured-data/local-business
 * https://schema.org/Restaurant
 */

import type { RestaurantSchema, AmenityFeature } from '../types/restaurant-schema';
import type {
  OpeningHoursSpecification,
  ContactPoint,
  AggregateRating,
  PostalAddress,
  GeoCoordinates,
} from '../types/seo';
import { toAbsoluteUrl, escapeHtml } from '../config/seo.config';

/**
 * Generate schema.org PostalAddress object
 */
function generatePostalAddress(address: PostalAddress): object {
  return cleanObject({
    '@type': 'PostalAddress',
    streetAddress: address.streetAddress,
    addressLocality: address.addressLocality,
    addressRegion: address.addressRegion,
    postalCode: address.postalCode,
    addressCountry: address.addressCountry,
  });
}

/**
 * Generate schema.org GeoCoordinates object
 */
function generateGeoCoordinates(geo: GeoCoordinates): object {
  return {
    '@type': 'GeoCoordinates',
    latitude: geo.latitude,
    longitude: geo.longitude,
  };
}

/**
 * Generate schema.org OpeningHoursSpecification array
 */
function generateOpeningHours(specs: OpeningHoursSpecification[]): object[] {
  return specs.map((spec) => cleanObject({
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: Array.isArray(spec.dayOfWeek)
      ? spec.dayOfWeek.map((day) => `https://schema.org/${day}`)
      : `https://schema.org/${spec.dayOfWeek}`,
    opens: spec.opens,
    closes: spec.closes,
    validFrom: spec.validFrom,
    validThrough: spec.validThrough,
  }));
}

/**
 * Generate schema.org ContactPoint object
 */
function generateContactPoint(contact: ContactPoint): object {
  return cleanObject({
    '@type': 'ContactPoint',
    telephone: contact.telephone,
    email: contact.email,
    contactType: contact.contactType || 'customer service',
    availableLanguage: contact.availableLanguage,
    contactOption: contact.contactOption,
    areaServed: contact.areaServed,
  });
}

/**
 * Generate schema.org AggregateRating object
 * This is critical for restaurant rich snippets
 */
function generateAggregateRating(rating: AggregateRating): object {
  return cleanObject({
    '@type': 'AggregateRating',
    ratingValue: rating.ratingValue,
    bestRating: rating.bestRating || 5,
    worstRating: rating.worstRating || 1,
    ratingCount: rating.ratingCount,
    reviewCount: rating.reviewCount,
  });
}

/**
 * Generate schema.org LocationFeatureSpecification for amenities
 */
function generateAmenityFeatures(amenities: AmenityFeature[]): object[] {
  return amenities.map((amenity) => ({
    '@type': 'LocationFeatureSpecification',
    name: amenity.name,
    value: amenity.value,
  }));
}

/**
 * Clean object by removing undefined/null values
 */
function cleanObject(obj: Record<string, unknown>): object {
  return Object.fromEntries(
    Object.entries(obj).filter(([, value]) => value !== undefined && value !== null)
  );
}

/**
 * Generate comprehensive Restaurant JSON-LD schema
 * This follows schema.org Restaurant vocabulary which inherits from:
 * Restaurant -> FoodEstablishment -> LocalBusiness -> Organization -> Thing
 *
 * @param schema - RestaurantSchema configuration
 * @param siteUrl - Base URL of the site
 * @returns Complete JSON-LD object for Restaurant
 */
export function generateRestaurantSchema(
  schema: RestaurantSchema,
  siteUrl: string
): object {
  // Process images - make absolute URLs
  const images = schema.image
    ? Array.isArray(schema.image)
      ? schema.image.map((img) => toAbsoluteUrl(img, siteUrl))
      : [toAbsoluteUrl(schema.image, siteUrl)]
    : undefined;

  // Process contact points
  const contactPoints = schema.contactPoint
    ? Array.isArray(schema.contactPoint)
      ? schema.contactPoint.map(generateContactPoint)
      : generateContactPoint(schema.contactPoint)
    : undefined;

  // Build the JSON-LD object with combined Restaurant + LocalBusiness properties
  const jsonLd: Record<string, unknown> = {
    '@context': 'https://schema.org',
    '@type': schema.type, // 'Restaurant' or 'FoodEstablishment'

    // === Business Identity (LocalBusiness) ===
    name: escapeHtml(schema.name),
    alternateName: schema.alternateName ? escapeHtml(schema.alternateName) : undefined,
    legalName: schema.legalName ? escapeHtml(schema.legalName) : undefined,
    description: schema.description ? escapeHtml(schema.description) : undefined,
    slogan: schema.slogan ? escapeHtml(schema.slogan) : undefined,

    // === Contact Information ===
    url: schema.url || siteUrl,
    telephone: schema.telephone,
    faxNumber: schema.faxNumber,
    email: schema.email,
    contactPoint: contactPoints,

    // === Location & Address ===
    address: schema.address ? generatePostalAddress(schema.address) : undefined,
    geo: schema.geo ? generateGeoCoordinates(schema.geo) : undefined,

    // === Opening Hours ===
    openingHoursSpecification: schema.openingHoursSpecification
      ? generateOpeningHours(schema.openingHoursSpecification)
      : undefined,
    openingHours: schema.openingHours,

    // === RESTAURANT-SPECIFIC PROPERTIES (FoodEstablishment) ===
    // These are the key differentiators from generic LocalBusiness

    /**
     * servesCuisine - Types of cuisine the restaurant serves
     * Critical for Google to understand and categorize the restaurant
     */
    servesCuisine: schema.servesCuisine,

    /**
     * hasMenu - URL to the restaurant's menu
     * Google uses this to potentially show menu items in search results
     */
    hasMenu: schema.hasMenu ? toAbsoluteUrl(schema.hasMenu, siteUrl) : undefined,

    /**
     * menu - Alternative menu property (some validators prefer this)
     */
    menu: schema.menu ? toAbsoluteUrl(schema.menu, siteUrl) : undefined,

    /**
     * acceptsReservations - Whether the restaurant takes reservations
     * Can be boolean or URL to reservation page
     */
    acceptsReservations: typeof schema.acceptsReservations === 'string'
      ? toAbsoluteUrl(schema.acceptsReservations, siteUrl)
      : schema.acceptsReservations,

    /**
     * smokingAllowed - Whether smoking is permitted
     */
    smokingAllowed: schema.smokingAllowed,

    // === Images & Branding ===
    logo: schema.logo ? toAbsoluteUrl(schema.logo, siteUrl) : undefined,
    image: images,

    // === Payment & Pricing ===
    priceRange: schema.priceRange,
    currenciesAccepted: schema.currenciesAccepted,
    paymentAccepted: Array.isArray(schema.paymentAccepted)
      ? schema.paymentAccepted.join(', ')
      : schema.paymentAccepted,

    // === Social Media ===
    sameAs: schema.sameAs?.length ? schema.sameAs : undefined,

    // === Reviews & Ratings ===
    // Critical for rich snippets - shows star ratings in search results
    aggregateRating: schema.aggregateRating
      ? generateAggregateRating(schema.aggregateRating)
      : undefined,

    // === Business Details ===
    foundingDate: schema.foundingDate,
    founder: schema.founder
      ? Array.isArray(schema.founder)
        ? schema.founder.map((name) => ({ '@type': 'Person', name }))
        : { '@type': 'Person', name: schema.founder }
      : undefined,
    numberOfEmployees: schema.numberOfEmployees
      ? typeof schema.numberOfEmployees === 'number'
        ? { '@type': 'QuantitativeValue', value: schema.numberOfEmployees }
        : {
            '@type': 'QuantitativeValue',
            minValue: schema.numberOfEmployees.minValue,
            maxValue: schema.numberOfEmployees.maxValue,
          }
      : undefined,

    // === Business Identifiers ===
    taxID: schema.taxID,
    vatID: schema.vatID,
    duns: schema.duns,
    naics: schema.naics,
    isicV4: schema.isicV4,

    // === Services & Offerings ===
    makesOffer: schema.makesOffer?.length
      ? schema.makesOffer.map((service) => ({
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: service,
          },
        }))
      : undefined,
    knowsAbout: schema.knowsAbout,
    knowsLanguage: schema.knowsLanguage,

    // === Special Features ===
    hasDriveThroughService: schema.hasDriveThroughService,

    // === Amenity Features ===
    amenityFeature: schema.amenityFeature?.length
      ? generateAmenityFeatures(schema.amenityFeature)
      : undefined,

    // === Parent Organization ===
    parentOrganization: schema.parentOrganization
      ? {
          '@type': 'Organization',
          name: schema.parentOrganization.name,
          url: schema.parentOrganization.url,
        }
      : undefined,

    // === Identifiers ===
    identifier: schema.identifier?.length
      ? schema.identifier.map((id) => ({
          '@type': 'PropertyValue',
          propertyID: id.type,
          value: id.value,
        }))
      : undefined,
  };

  // Clean the object by removing undefined values
  return cleanObject(jsonLd);
}

/**
 * Export the restaurant schema from config for easy access
 */
export { restaurantSchema } from '../config/restaurant.config';
