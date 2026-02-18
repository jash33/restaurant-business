/**
 * LocalBusiness JSON-LD Generator
 * Generates comprehensive schema.org LocalBusiness structured data
 * for enhanced Google local search results and rich snippets
 */

import type {
  LocalBusinessSchema,
  OpeningHoursSpecification,
  ContactPoint,
  GeoCoordinates,
  AggregateRating,
  PostalAddress,
} from '../types/seo';
import { toAbsoluteUrl, escapeHtml } from '../config/seo.config';

/**
 * Generate schema.org PostalAddress object
 */
function generatePostalAddress(address: PostalAddress): object {
  return {
    '@type': 'PostalAddress',
    streetAddress: address.streetAddress,
    addressLocality: address.addressLocality,
    addressRegion: address.addressRegion,
    postalCode: address.postalCode,
    addressCountry: address.addressCountry,
  };
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
  return specs.map((spec) => ({
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
  return {
    '@type': 'ContactPoint',
    telephone: contact.telephone,
    email: contact.email,
    contactType: contact.contactType || 'customer service',
    availableLanguage: contact.availableLanguage,
    contactOption: contact.contactOption,
    areaServed: contact.areaServed,
  };
}

/**
 * Generate schema.org AggregateRating object
 */
function generateAggregateRating(rating: AggregateRating): object {
  return {
    '@type': 'AggregateRating',
    ratingValue: rating.ratingValue,
    bestRating: rating.bestRating || 5,
    worstRating: rating.worstRating || 1,
    ratingCount: rating.ratingCount,
    reviewCount: rating.reviewCount,
  };
}

/**
 * Generate comprehensive LocalBusiness JSON-LD schema
 * This follows schema.org LocalBusiness vocabulary
 *
 * @param schema - LocalBusinessSchema configuration
 * @param siteUrl - Base URL of the site
 * @returns Complete JSON-LD object for LocalBusiness
 */
export function generateLocalBusinessSchema(
  schema: LocalBusinessSchema,
  siteUrl: string
): object {
  // Process images
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

  // Build the JSON-LD object
  const jsonLd: Record<string, unknown> = {
    '@context': 'https://schema.org',
    '@type': schema.type,

    // === Business Identity ===
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

    // === Special Features (for specific business types) ===
    hasDriveThroughService: schema.hasDriveThroughService,
    hasMenu: schema.hasMenu,
    acceptsReservations: schema.acceptsReservations,
  };

  return jsonLd;
}

/**
 * Export localBusiness schema from config for easy access
 */
export { localBusinessSchema } from '../config/seo.config';
