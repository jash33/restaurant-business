/**
 * Parking & Transit Info Configuration
 * Configuration for parking instructions, public transit directions,
 * bike parking, accessibility features, and first-time visitor tips.
 */

import type {
  ParkingTransitInfoConfig,
  ParkingTransitInfoDisplayConfig,
  ParkingTip,
  TransitTip,
  BikeParkingInfo,
  AccessibilityFeature,
  FirstTimeVisitorTip,
  RideshareInfo,
} from '../types/parking-transit-info';

// ============================================================================
// Parking Tips
// ============================================================================

export const PARKING_TIPS: ParkingTip[] = [
  {
    id: 'parking-street',
    type: 'street',
    title: 'Street Parking',
    description: 'Free street parking available on Main Street and surrounding side streets.',
    tips: [
      'Metered parking on Main Street is free after 6 PM and on weekends',
      'Side streets (Commerce St, Travis St) often have open spots',
      'Look for green curbs which indicate short-term parking',
      'Download the ParkHouston app to pay for metered spots remotely',
    ],
    isFree: true,
    hours: 'Metered: Mon-Sat 7 AM - 6 PM | Free: Evenings & Sundays',
    location: 'Main Street and adjacent side streets',
    notes: 'Street parking fills up quickly during lunch (11:30 AM - 1 PM) and dinner rush (6 PM - 8 PM).',
  },
  {
    id: 'parking-lot',
    type: 'lot',
    title: 'Private Lot Parking',
    description: 'Complimentary parking in our private lot behind the restaurant.',
    tips: [
      'Enter from Commerce Street, one block south of Main Street',
      'Look for the "HTX Creamery Parking" sign',
      'Tell the host your parking spot number for validation',
      'Lot is well-lit and monitored by security cameras',
    ],
    isFree: true,
    hours: 'Available during restaurant hours',
    location: 'Behind building, accessible from Commerce Street',
    notes: 'Limited to 30 spaces. Arrive early on weekends to guarantee a spot.',
  },
  {
    id: 'parking-garage',
    type: 'garage',
    title: 'Downtown Parking Garage',
    description: 'Covered parking available at the Downtown Central Garage.',
    tips: [
      'Located at 1100 Commerce Street, 2-minute walk from restaurant',
      'Show your receipt to your server for a $5 discount on parking',
      'Take the elevator to street level and walk north on Commerce',
      'Garage is climate-controlled and great for hot Houston days',
    ],
    isFree: false,
    pricing: '$8 flat rate with restaurant validation (normally $15)',
    hours: 'Open 24/7',
    location: '1100 Commerce Street',
    notes: 'Best option when our private lot is full or during major downtown events.',
  },
  {
    id: 'parking-valet',
    type: 'valet',
    title: 'Valet Parking',
    description: 'Convenient valet service available Friday and Saturday evenings.',
    tips: [
      'Pull up to the main entrance on Main Street',
      'Valet attendants will greet you and provide a claim ticket',
      'Request your car 10 minutes before you\'re ready to leave',
      'Tip is appreciated but not required ($3-5 suggested)',
    ],
    isFree: false,
    pricing: '$10 per vehicle',
    hours: 'Friday & Saturday: 5 PM - 11 PM',
    location: 'Main entrance, 1234 Main Street',
    notes: 'Valet is complimentary for guests spending $100+ or for accessibility needs.',
  },
];

// ============================================================================
// Transit Tips
// ============================================================================

export const TRANSIT_TIPS: TransitTip[] = [
  {
    id: 'transit-metrorail',
    type: 'light-rail',
    routeName: 'METRORail Red Line',
    nearestStop: 'Main Street Square Station',
    walkingDistance: '3-minute walk (0.2 miles)',
    directions: [
      'Exit at Main Street Square Station',
      'Walk south on Main Street for 2 blocks',
      'Restaurant is on the right side at 1234 Main Street',
      'Look for the green awning and outdoor patio',
    ],
    notes: 'Red Line runs every 6 minutes during peak hours, 12 minutes off-peak.',
    frequency: 'Every 6-12 minutes',
  },
  {
    id: 'transit-bus-82',
    type: 'bus',
    routeName: 'METRO Route 82',
    nearestStop: 'Main Street & Commerce',
    walkingDistance: '2-minute walk (0.1 miles)',
    directions: [
      'Exit at Main Street & Commerce stop',
      'Cross Commerce Street at the crosswalk',
      'Walk north on Main Street for half a block',
      'Restaurant entrance is on your right',
    ],
    notes: 'Route 82 connects Westheimer Transit Center to Downtown.',
    frequency: 'Every 15-20 minutes',
  },
  {
    id: 'transit-bus-40',
    type: 'bus',
    routeName: 'METRO Routes 40/41',
    nearestStop: 'Downtown Transit Center',
    walkingDistance: '5-minute walk (0.3 miles)',
    directions: [
      'Exit at Downtown Transit Center',
      'Head east on Capitol Street',
      'Turn right (south) on Main Street',
      'Continue 2 blocks to 1234 Main Street',
    ],
    notes: 'Routes 40/41 provide connections from multiple Houston neighborhoods.',
    frequency: 'Every 10-15 minutes',
  },
  {
    id: 'transit-rideshare',
    type: 'rideshare',
    routeName: 'Uber / Lyft',
    nearestStop: 'Restaurant entrance',
    walkingDistance: 'Direct drop-off',
    directions: [
      'Set destination to "1234 Main Street, Houston, TX 77002"',
      'Drop-off is at the main entrance',
      'For pickup, wait under the green awning',
      'Surge pricing may apply during peak dining hours',
    ],
    notes: 'Average ride from IAH Airport is $35-50, from Hobby Airport is $25-35.',
  },
];

// ============================================================================
// Bike Parking Information
// ============================================================================

export const BIKE_PARKING_INFO: BikeParkingInfo = {
  available: true,
  description: 'Secure bike parking available for cycling guests.',
  capacity: 8,
  location: 'Dedicated bike corral on the Commerce Street side of the building',
  isCovered: true,
  locksAvailable: false,
  tips: [
    'Bring your own lock - we recommend a U-lock for best security',
    'Bike corral is visible from the restaurant windows',
    'Houston B-cycle station is located 1 block away at Main Street Square',
    'Water is available inside to refill your bottle',
  ],
  notes: 'Let your server know if you need to keep an eye on your bike - we\'ll seat you with a view!',
};

// ============================================================================
// Accessibility Features
// ============================================================================

export const ACCESSIBILITY_FEATURES: AccessibilityFeature[] = [
  {
    id: 'access-wheelchair',
    title: 'Wheelchair Accessible',
    description: 'Full wheelchair accessibility throughout the restaurant including restrooms.',
    icon: 'wheelchair',
    available: true,
  },
  {
    id: 'access-parking',
    title: 'Accessible Parking',
    description: 'Two designated accessible parking spaces near the main entrance.',
    icon: 'parking',
    available: true,
  },
  {
    id: 'access-entrance',
    title: 'Ramp Entrance',
    description: 'Step-free ramp entrance on the Main Street side of the building.',
    icon: 'entrance',
    available: true,
  },
  {
    id: 'access-restroom',
    title: 'Accessible Restrooms',
    description: 'ADA-compliant restrooms with grab bars and adequate space for mobility devices.',
    icon: 'restroom',
    available: true,
  },
  {
    id: 'access-seating',
    title: 'Flexible Seating',
    description: 'Tables with wheelchair-accessible height and removable chairs available.',
    icon: 'seating',
    available: true,
  },
  {
    id: 'access-assistance',
    title: 'Service Animal Friendly',
    description: 'Service animals are always welcome. Water bowls available upon request.',
    icon: 'assistance',
    available: true,
  },
];

// ============================================================================
// First-Time Visitor Tips
// ============================================================================

export const FIRST_TIME_VISITOR_TIPS: FirstTimeVisitorTip[] = [
  {
    id: 'tip-reservation',
    category: 'arrival',
    title: 'Make a Reservation',
    content: 'We recommend reservations for dinner, especially on weekends. Walk-ins are welcome but wait times can exceed 30 minutes during peak hours (6-8 PM).',
    priority: 1,
  },
  {
    id: 'tip-parking-arrive-early',
    category: 'parking',
    title: 'Arrive 10-15 Minutes Early',
    content: 'Give yourself time to find parking and enjoy our outdoor patio area before your meal. Our private lot fills up quickly on weekends.',
    priority: 2,
  },
  {
    id: 'tip-entrance',
    category: 'entrance',
    title: 'Main Entrance Location',
    content: 'Our main entrance is on Main Street, marked by a green awning. Look for our outdoor patio with string lights - you can\'t miss it!',
    priority: 3,
  },
  {
    id: 'tip-seating',
    category: 'seating',
    title: 'Seating Preferences',
    content: 'Let the host know if you have a seating preference - patio, window, or quieter interior tables. We\'ll do our best to accommodate.',
    priority: 4,
  },
  {
    id: 'tip-menu',
    category: 'ordering',
    title: 'Menu Highlights',
    content: 'First timers love our Signature Burger, Grilled Gulf Snapper, and the seasonal Farm Fresh Salad. Don\'t skip the housemade desserts!',
    priority: 5,
  },
  {
    id: 'tip-dietary',
    category: 'ordering',
    title: 'Dietary Accommodations',
    content: 'We happily accommodate allergies and dietary restrictions. Our menu clearly marks vegetarian, vegan, and gluten-free options. Just let your server know!',
    priority: 6,
  },
  {
    id: 'tip-dress-code',
    category: 'general',
    title: 'Casual Dress Code',
    content: 'We\'re a casual neighborhood creamery - come as you are! Smart casual is appreciated for special occasions but jeans are always welcome.',
    priority: 7,
  },
  {
    id: 'tip-happy-hour',
    category: 'general',
    title: 'Happy Hour Special',
    content: 'Join us for happy hour Monday-Friday from 4-6 PM. Enjoy half-price appetizers and $5 house wines and local craft beers.',
    priority: 8,
  },
];

// ============================================================================
// Rideshare Information
// ============================================================================

export const RIDESHARE_INFO: RideshareInfo = {
  available: true,
  description: 'Easy rideshare drop-off and pickup at our main entrance.',
  dropOffLocation: 'Main entrance at 1234 Main Street - look for the green awning',
  tips: [
    'Set your destination to "HTX Creamery, 1234 Main Street, Houston"',
    'Drop-off is directly at the front entrance on Main Street',
    'For pickup, wait under the covered awning outside our entrance',
    'Our address is easy to find - we\'re between Commerce and Preston Streets',
    'Average Uber/Lyft wait time downtown is 3-5 minutes',
  ],
};

// ============================================================================
// Complete Configuration
// ============================================================================

export const PARKING_TRANSIT_INFO_CONFIG: ParkingTransitInfoConfig = {
  parkingTips: PARKING_TIPS,
  transitTips: TRANSIT_TIPS,
  bikeParking: BIKE_PARKING_INFO,
  accessibilityFeatures: ACCESSIBILITY_FEATURES,
  firstTimeVisitorTips: FIRST_TIME_VISITOR_TIPS,
  rideshare: RIDESHARE_INFO,
};

// ============================================================================
// Display Configuration Defaults
// ============================================================================

export const PARKING_TRANSIT_DISPLAY_CONFIG: ParkingTransitInfoDisplayConfig = {
  defaultHeading: 'Getting Here',
  defaultSubheading: 'Everything you need to know about parking, transit, and visiting us for the first time.',
  showParking: true,
  showTransit: true,
  showBikeParking: true,
  showAccessibility: true,
  showVisitorTips: true,
  showRideshare: true,
};
