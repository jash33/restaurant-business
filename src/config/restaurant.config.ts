/**
 * Restaurant Configuration
 * Configuration for Restaurant + LocalBusiness JSON-LD schema markup.
 * This file contains all restaurant-specific structured data settings.
 */

import type { RestaurantSchema } from '../types/restaurant-schema';
import { REGULAR_HOURS } from './hours.config';
import { BUSINESS_ADDRESS, COORDINATES, LOCATION_CONFIG } from './location.config';

/**
 * Convert regular hours to OpeningHoursSpecification format
 */
function convertHoursToSchema() {
  return REGULAR_HOURS.filter(day => day.isOpen).map(day => ({
    dayOfWeek: day.day as 'Monday' | 'Tuesday' | 'Wednesday' | 'Thursday' | 'Friday' | 'Saturday' | 'Sunday',
    opens: day.hours?.[0]?.open || '12:00',
    closes: day.hours?.[0]?.close || '21:00',
  }));
}

/**
 * Restaurant Schema Configuration
 * Combines Restaurant and LocalBusiness schema.org vocabulary
 * for enhanced local search visibility and rich snippets.
 */
export const restaurantSchema: RestaurantSchema = {
  // === Business Type (Restaurant inherits from FoodEstablishment and LocalBusiness) ===
  type: 'IceCreamShop',

  // === Business Identity ===
  name: 'HTX Creamery',
  legalName: 'HTX Creamery LLC',
  alternateName: 'HTX Creamery Houston',
  description: 'Houston\'s favorite neighborhood ice cream shop serving handcrafted small-batch ice cream, artisan sundaes, and classic shakes. Made fresh daily with locally-sourced ingredients in the Energy Corridor.',
  slogan: 'Scooped with Love in Houston',

  // === URLs ===
  url: 'https://htxcreamery.com',

  // === Contact Information ===
  telephone: '+1-832-555-CONE',
  email: 'hello@htxcreamery.com',

  // === Location & Address ===
  address: {
    streetAddress: `${BUSINESS_ADDRESS.street}${BUSINESS_ADDRESS.street2 ? ', ' + BUSINESS_ADDRESS.street2 : ''}`,
    addressLocality: BUSINESS_ADDRESS.city,
    addressRegion: BUSINESS_ADDRESS.state,
    postalCode: BUSINESS_ADDRESS.zipCode,
    addressCountry: 'US',
  },
  geo: {
    latitude: COORDINATES.latitude,
    longitude: COORDINATES.longitude,
  },

  // === Operating Hours ===
  openingHoursSpecification: convertHoursToSchema(),
  openingHours: [
    'Su-Th 12:00-21:00',
    'Fr-Sa 12:00-22:00',
  ],

  // === Restaurant-Specific Properties ===
  servesCuisine: [
    'Ice Cream',
    'Desserts',
    'Frozen Treats',
    'American',
  ],

  // === Menu Information ===
  hasMenu: 'https://htxcreamery.com/menu',
  menu: 'https://htxcreamery.com/menu',

  // === Reservations ===
  acceptsReservations: false,
  reservationsUrl: undefined,

  // === Price Range ($ to $$$$) ===
  priceRange: '$$',

  // === Payment Options ===
  currenciesAccepted: 'USD',
  paymentAccepted: [
    'Cash',
    'Credit Card',
    'Debit Card',
    'Apple Pay',
    'Google Pay',
  ],

  // === Aggregate Rating (from reviews) ===
  aggregateRating: {
    ratingValue: 4.9,
    bestRating: 5,
    worstRating: 1,
    ratingCount: 523,
    reviewCount: 189,
  },

  // === Images ===
  logo: '/restaurant-business/images/logo.png',
  image: [
    '/restaurant-business/images/hero-icecream-display.jpg',
    '/restaurant-business/images/icecream-scoops.jpg',
    '/restaurant-business/images/icecream-cone.jpg',
  ],

  // === Social Media Profiles ===
  sameAs: [
    'https://www.facebook.com/htxcreamery',
    'https://www.instagram.com/htxcreamery',
    'https://www.yelp.com/biz/htx-creamery-houston',
  ],

  // === Contact Point ===
  contactPoint: {
    telephone: '+1-832-555-2663',
    email: 'hello@htxcreamery.com',
    contactType: 'customer service',
    availableLanguage: ['English', 'Spanish'],
  },

  // === Business Details ===
  foundingDate: '2019-06-01',
  numberOfEmployees: {
    minValue: 8,
    maxValue: 15,
  },

  // === Additional Features ===
  hasDriveThroughService: false,
  smokingAllowed: false,

  // === Expertise & Knowledge ===
  knowsAbout: [
    'Artisan Ice Cream',
    'Small-Batch Production',
    'Handcrafted Desserts',
    'Local Ingredients',
    'Custom Cakes',
    'Catering',
    'Birthday Parties',
    'Event Hosting',
  ],
  knowsLanguage: ['English', 'Spanish'],

  // === Services Offered ===
  makesOffer: [
    'Ice Cream Scoops',
    'Sundaes',
    'Milkshakes',
    'Ice Cream Cakes',
    'Waffle Cones',
    'Pints To-Go',
    'Catering',
    'Birthday Party Packages',
  ],

  // === Amenities ===
  amenityFeature: [
    { name: 'Indoor Seating', value: true },
    { name: 'Outdoor Patio', value: true },
    { name: 'Kid Friendly', value: true },
    { name: 'Wheelchair Accessible', value: true },
    { name: 'Free Parking', value: true },
    { name: 'Wi-Fi', value: true },
    { name: 'Dog Friendly Patio', value: true },
  ],
};

/**
 * Export helper function to get the complete restaurant schema for JSON-LD
 */
export function getRestaurantSchemaData() {
  return restaurantSchema;
}
