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
    opens: day.hours?.[0]?.open || '11:00',
    closes: day.hours?.[0]?.close || '22:00',
  }));
}

/**
 * Restaurant Schema Configuration
 * Combines Restaurant and LocalBusiness schema.org vocabulary
 * for enhanced local search visibility and rich snippets.
 */
export const restaurantSchema: RestaurantSchema = {
  // === Business Type (Restaurant inherits from FoodEstablishment and LocalBusiness) ===
  type: 'Restaurant',

  // === Business Identity ===
  name: 'The Main Street Bistro',
  legalName: 'Main Street Bistro LLC',
  alternateName: 'Main Street Bistro Houston',
  description: 'Award-winning American bistro in downtown Houston serving contemporary cuisine with locally-sourced ingredients. Known for our signature steaks, fresh seafood, and craft cocktails in an elegant yet relaxed atmosphere.',
  slogan: 'Where Houston Comes to Dine',

  // === URLs ===
  url: 'https://mainstreetbistro.com',

  // === Contact Information ===
  telephone: '+1-713-555-0123',
  email: 'info@mainstreetbistro.com',

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
    'Su 10:00-21:00',
    'Mo-Th 11:00-22:00',
    'Fr 11:00-23:00',
    'Sa 10:00-23:00',
  ],

  // === Restaurant-Specific Properties ===
  servesCuisine: [
    'American',
    'Contemporary',
    'Steakhouse',
    'Seafood',
  ],

  // === Menu Information ===
  hasMenu: 'https://mainstreetbistro.com/menu',
  menu: 'https://mainstreetbistro.com/menu',

  // === Reservations ===
  acceptsReservations: true,
  reservationsUrl: 'https://mainstreetbistro.com/reservations',

  // === Price Range ($ to $$$$) ===
  priceRange: '$$$',

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
    ratingValue: 4.7,
    bestRating: 5,
    worstRating: 1,
    ratingCount: 847,
    reviewCount: 312,
  },

  // === Images ===
  logo: '/images/logo.png',
  image: [
    '/images/restaurant-exterior.jpg',
    '/images/restaurant-interior.jpg',
    '/images/signature-dish.jpg',
  ],

  // === Social Media Profiles ===
  sameAs: [
    'https://www.facebook.com/mainstreetbistro',
    'https://www.instagram.com/mainstreetbistro',
    'https://www.yelp.com/biz/main-street-bistro-houston',
    'https://www.tripadvisor.com/Restaurant-Main_Street_Bistro',
  ],

  // === Service Area ===
  areaServed: [
    {
      type: 'City',
      name: 'Houston',
      addressLocality: 'Houston',
      addressRegion: 'TX',
      addressCountry: 'US',
    },
  ],

  // === Contact Point ===
  contactPoint: {
    telephone: '+1-713-555-0123',
    email: 'reservations@mainstreetbistro.com',
    contactType: 'reservations',
    availableLanguage: ['English', 'Spanish'],
    areaServed: ['Houston', 'Greater Houston Area'],
  },

  // === Business Details ===
  foundingDate: '2015-03-15',
  numberOfEmployees: {
    minValue: 25,
    maxValue: 40,
  },

  // === Additional Features ===
  hasDriveThroughService: false,
  smokingAllowed: false,

  // === Expertise & Knowledge ===
  knowsAbout: [
    'Fine Dining',
    'American Cuisine',
    'Craft Cocktails',
    'Wine Pairing',
    'Private Dining',
    'Catering Services',
    'Farm-to-Table',
    'Sustainable Sourcing',
  ],
  knowsLanguage: ['English', 'Spanish'],

  // === Services Offered ===
  makesOffer: [
    'Lunch Service',
    'Dinner Service',
    'Weekend Brunch',
    'Private Dining',
    'Catering',
    'Event Hosting',
    'Wine Dinners',
    'Chef\'s Tasting Menu',
  ],

  // === Amenities ===
  amenityFeature: [
    { name: 'Private Dining Room', value: true },
    { name: 'Outdoor Patio', value: true },
    { name: 'Full Bar', value: true },
    { name: 'Wheelchair Accessible', value: true },
    { name: 'Free Parking', value: true },
    { name: 'Valet Parking', value: true },
    { name: 'Wi-Fi', value: true },
  ],
};

/**
 * Export helper function to get the complete restaurant schema for JSON-LD
 */
export function getRestaurantSchemaData() {
  return restaurantSchema;
}
