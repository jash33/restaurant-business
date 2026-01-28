/**
 * Location Configuration
 * Business location configuration for the restaurant.
 * This file contains address, parking, transit, and directions information.
 */

import type {
  LocationConfig,
  Address,
  Coordinates,
  ParkingInfo,
  TransitInfo,
  DirectionsCTA,
  AccessibilityInfo,
} from '../types/location';

// ============================================================================
// Business Address
// ============================================================================

export const BUSINESS_ADDRESS: Address = {
  street: '1234 Main Street',
  street2: 'Suite 100',
  city: 'Houston',
  state: 'TX',
  zipCode: '77002',
  country: 'USA',
};

// ============================================================================
// GPS Coordinates
// ============================================================================

export const COORDINATES: Coordinates = {
  latitude: 29.7604,
  longitude: -95.3698,
};

// ============================================================================
// Parking Information
// ============================================================================

export const PARKING_INFO: ParkingInfo = {
  available: true,
  type: 'mixed',
  description: 'Complimentary parking available for all guests',
  isFree: true,
  notes: 'Private lot behind building with 30+ spaces. Additional street parking available on Main Street and side streets. Valet parking available Friday-Saturday evenings.',
};

// ============================================================================
// Public Transit Information
// ============================================================================

export const TRANSIT_INFO: TransitInfo = {
  available: true,
  description: 'Easily accessible via METRORail and multiple bus routes',
  options: [
    {
      type: 'light-rail',
      line: 'METRORail Red Line',
      stop: 'Main Street Square Station',
      walkingInfo: '3-minute walk',
      notes: 'Exit at Main Street Square, walk south on Main Street',
    },
    {
      type: 'bus',
      line: 'Route 82',
      stop: 'Main Street & Commerce',
      walkingInfo: '2-minute walk',
    },
    {
      type: 'bus',
      line: 'Route 40/41',
      stop: 'Downtown Transit Center',
      walkingInfo: '5-minute walk',
      notes: 'Transfer point for multiple routes',
    },
  ],
};

// ============================================================================
// Accessibility Information
// ============================================================================

export const ACCESSIBILITY_INFO: AccessibilityInfo = {
  wheelchairAccessible: true,
  description: 'Fully wheelchair accessible with ramp entrance and accessible restrooms',
  notes: 'Designated accessible parking spaces available near main entrance',
};

// ============================================================================
// Get Directions CTA
// ============================================================================

/**
 * Generate map URLs based on coordinates and address
 */
const generateMapUrls = (coords: Coordinates, address: Address): DirectionsCTA => {
  const formattedAddress = encodeURIComponent(
    `${address.street}, ${address.city}, ${address.state} ${address.zipCode}`
  );

  return {
    text: 'Get Directions',
    googleMapsUrl: `https://www.google.com/maps/dir/?api=1&destination=${coords.latitude},${coords.longitude}&destination_place_id=`,
    appleMapsUrl: `https://maps.apple.com/?daddr=${coords.latitude},${coords.longitude}&dirflg=d`,
    genericUrl: `https://www.google.com/maps/search/?api=1&query=${formattedAddress}`,
  };
};

export const DIRECTIONS_CTA: DirectionsCTA = generateMapUrls(COORDINATES, BUSINESS_ADDRESS);

// ============================================================================
// Complete Location Configuration
// ============================================================================

export const LOCATION_CONFIG: LocationConfig = {
  businessName: 'Houston Web Services',
  address: BUSINESS_ADDRESS,
  coordinates: COORDINATES,
  phone: '(713) 555-0123',
  parking: PARKING_INFO,
  transit: TRANSIT_INFO,
  accessibility: ACCESSIBILITY_INFO,
  directionsCTA: DIRECTIONS_CTA,
  additionalNotes: [
    'Located in the heart of Downtown Houston',
    'Easy access from I-45 and I-10',
    'Rideshare drop-off available at main entrance',
  ],
};

// ============================================================================
// Display Configuration
// ============================================================================

/**
 * Default display settings for the location component
 */
export const LOCATION_DISPLAY_CONFIG = {
  /** Default heading text */
  defaultHeading: 'Find Us',
  /** Default subheading text */
  defaultSubheading: 'We\'re conveniently located in Downtown Houston',
  /** Whether to show address by default */
  showAddress: true,
  /** Whether to show parking info by default */
  showParking: true,
  /** Whether to show transit info by default */
  showTransit: true,
  /** Whether to show directions CTA by default */
  showDirections: true,
};
