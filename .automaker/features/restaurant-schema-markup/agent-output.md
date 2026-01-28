
🔧 Tool: Task
Input: {
  "description": "Explore codebase structure",
  "prompt": "Explore this codebase to understand its structure. I need to implement a Restaurant + LocalBusiness JSON-LD schema markup feature. \n\nPlease find:\n1. The overall project structure (what framework is being used - React, Next.js, etc.)\n2. Any existing schema markup or JSON-LD implementations\n3. Where structured data/SEO-related code lives\n4. The main components/pages structure\n5. Any configuration files for SEO or metadata\n\nBe thorough and report back with the findings.",
  "subagent_type": "Explore"
}

🔧 Tool: Read
Input: {
  "file_path": "C:\\Users\\James\\Repos\\restaurant-business\\package.json"
}

🔧 Tool: Read
Input: {
  "file_path": "C:\\Users\\James\\Repos\\restaurant-business\\astro.config.mjs"
}

🔧 Tool: Glob
Input: {
  "pattern": "**/*.json"
}

🔧 Tool: Bash
Input: {
  "command": "ls -la \"C:\\Users\\James\\Repos\\restaurant-business\" | grep -E \"^d|\\.mjs$|\\.ts$|\\.astro$\" | head -20",
  "description": "List project root directories and config files"
}

🔧 Tool: Glob
Input: {
  "pattern": "src/**/*.astro"
}

🔧 Tool: Glob
Input: {
  "pattern": "src/**/*.ts"
}

🔧 Tool: Read
Input: {
  "file_path": "C:\\Users\\James\\Repos\\restaurant-business\\src\\utils\\local-business-jsonld.ts"
}

🔧 Tool: Read
Input: {
  "file_path": "C:\\Users\\James\\Repos\\restaurant-business\\src\\config\\seo.config.ts"
}

🔧 Tool: Read
Input: {
  "file_path": "C:\\Users\\James\\Repos\\restaurant-business\\src\\components\\SEO.astro"
}

🔧 Tool: Read
Input: {
  "file_path": "C:\\Users\\James\\Repos\\restaurant-business\\src\\layouts\\Layout.astro"
}

🔧 Tool: Read
Input: {
  "file_path": "C:\\Users\\James\\Repos\\restaurant-business\\src\\types\\seo.ts",
  "limit": 100
}

🔧 Tool: Read
Input: {
  "file_path": "C:\\Users\\James\\Repos\\restaurant-business\\src\\pages\\index.astro",
  "limit": 60
}

🔧 Tool: Read
Input: {
  "file_path": "C:\\Users\\James\\Repos\\restaurant-business\\src\\config\\menu.config.ts",
  "limit": 50
}

🔧 Tool: Read
Input: {
  "file_path": "C:\\Users\\James\\Repos\\restaurant-business\\src\\types\\seo.ts",
  "offset": 100
}

🔧 Tool: Read
Input: {
  "file_path": "C:\\Users\\James\\Repos\\restaurant-business\\src\\pages\\menu.astro",
  "limit": 50
}

🔧 Tool: Glob
Input: {
  "pattern": "src/pages/**/*.astro"
}

🔧 Tool: Read
Input: {
  "file_path": "C:\\Users\\James\\Repos\\restaurant-business\\src\\config\\location.config.ts"
}

🔧 Tool: Read
Input: {
  "file_path": "C:\\Users\\James\\Repos\\restaurant-business\\src\\config\\hours.config.ts"
}

🔧 Tool: Bash
Input: {
  "command": "find \"C:\\Users\\James\\Repos\\restaurant-business\\src\" -type f -name \"*.astro\" | head -20",
  "description": "Show structure of restaurant-related files"
}

🔧 Tool: Bash
Input: {
  "command": "ls -la \"C:\\Users\\James\\Repos\\restaurant-business\\src\" && echo \"---\" && ls -la \"C:\\Users\\James\\Repos\\restaurant-business\\src\\config\" && echo \"---\" && ls -la \"C:\\Users\\James\\Repos\\restaurant-business\\src\\types\"",
  "description": "Show src directory structure and configs"
}

🔧 Tool: Bash
Input: {
  "command": "ls -la \"C:\\Users\\James\\Repos\\restaurant-business\\src\\schemas\"",
  "description": "List files in schemas directory"
}

🔧 Tool: Glob
Input: {
  "pattern": "src/schemas/**/*"
}

🔧 Tool: Read
Input: {
  "file_path": "C:\\Users\\James\\Repos\\restaurant-business\\src\\schemas\\menu.schema.json",
  "limit": 80
}

🔧 Tool: Read
Input: {
  "file_path": "C:\\Users\\James\\Repos\\restaurant-business\\src\\types\\restaurant-hero.ts"
}

🔧 Tool: Read
Input: {
  "file_path": "C:\\Users\\James\\Repos\\restaurant-business\\src\\types\\restaurant-contact.ts"
}

🔧 Tool: Read
Input: {
  "file_path": "C:\\Users\\James\\Repos\\restaurant-business\\src\\pages\\catering.astro",
  "limit": 80
}

🔧 Tool: Grep
Input: {
  "pattern": "Restaurant|restaurant",
  "path": "C:\\Users\\James\\Repos\\restaurant-business\\src\\config\\seo.config.ts",
  "output_mode": "content"
}
Now I have a comprehensive understanding of the codebase. Let me read the key files to understand the current implementation details before making changes.

🔧 Tool: Read
Input: {
  "file_path": "/Users/James/Repos/restaurant-business/src/config/seo.config.ts"
}

🔧 Tool: Read
Input: {
  "file_path": "/Users/James/Repos/restaurant-business/src/utils/local-business-jsonld.ts"
}

🔧 Tool: Read
Input: {
  "file_path": "/Users/James/Repos/restaurant-business/src/types/seo.ts"
}

🔧 Tool: Read
Input: {
  "file_path": "/Users/James/Repos/restaurant-business/src/components/SEO.astro"
}
Now let me also read the hours config and location config to understand the data structure:

🔧 Tool: Read
Input: {
  "file_path": "/Users/James/Repos/restaurant-business/src/config/hours.config.ts"
}

🔧 Tool: Read
Input: {
  "file_path": "/Users/James/Repos/restaurant-business/src/config/location.config.ts"
}

🔧 Tool: Read
Input: {
  "file_path": "/Users/James/Repos/restaurant-business/src/pages/index.astro"
}
Now I have a comprehensive understanding of the codebase. Let me create a todo list to track this implementation and then proceed with the changes:

🔧 Tool: TodoWrite
Input: {
  "todos": [
    {
      "content": "Create restaurant configuration file with cuisine, price range, menu URL, and ratings",
      "status": "in_progress",
      "activeForm": "Creating restaurant configuration file"
    },
    {
      "content": "Update LocalBusinessSchema type to add Restaurant-specific fields",
      "status": "pending",
      "activeForm": "Updating LocalBusinessSchema type"
    },
    {
      "content": "Enhance local-business-jsonld.ts to generate combined Restaurant + LocalBusiness schema",
      "status": "pending",
      "activeForm": "Enhancing JSON-LD generator for Restaurant schema"
    },
    {
      "content": "Update seo.config.ts to use the new restaurant schema configuration",
      "status": "pending",
      "activeForm": "Updating SEO configuration"
    },
    {
      "content": "Update index.astro to use Restaurant JSON-LD schema",
      "status": "pending",
      "activeForm": "Updating homepage with Restaurant schema"
    },
    {
      "content": "Create and run Playwright verification test",
      "status": "pending",
      "activeForm": "Running Playwright verification test"
    }
  ]
}
Let me start by creating the restaurant configuration file:

🔧 Tool: Write
Input: {
  "file_path": "/Users/James/Repos/restaurant-business/src/config/restaurant.config.ts",
  "content": "/**\n * Restaurant Configuration\n * Configuration for Restaurant + LocalBusiness JSON-LD schema markup.\n * This file contains all restaurant-specific structured data settings.\n */\n\nimport type { RestaurantSchema } from '../types/restaurant-schema';\nimport { REGULAR_HOURS } from './hours.config';\nimport { BUSINESS_ADDRESS, COORDINATES, LOCATION_CONFIG } from './location.config';\n\n/**\n * Convert regular hours to OpeningHoursSpecification format\n */\nfunction convertHoursToSchema() {\n  return REGULAR_HOURS.filter(day => day.isOpen).map(day => ({\n    dayOfWeek: day.day as 'Monday' | 'Tuesday' | 'Wednesday' | 'Thursday' | 'Friday' | 'Saturday' | 'Sunday',\n    opens: day.hours?.[0]?.open || '11:00',\n    closes: day.hours?.[0]?.close || '22:00',\n  }));\n}\n\n/**\n * Restaurant Schema Configuration\n * Combines Restaurant and LocalBusiness schema.org vocabulary\n * for enhanced local search visibility and rich snippets.\n */\nexport const restaurantSchema: RestaurantSchema = {\n  // === Business Type (Restaurant inherits from FoodEstablishment and LocalBusiness) ===\n  type: 'Restaurant',\n\n  // === Business Identity ===\n  name: 'The Main Street Bistro',\n  legalName: 'Main Street Bistro LLC',\n  alternateName: 'Main Street Bistro Houston',\n  description: 'Award-winning American bistro in downtown Houston serving contemporary cuisine with locally-sourced ingredients. Known for our signature steaks, fresh seafood, and craft cocktails in an elegant yet relaxed atmosphere.',\n  slogan: 'Where Houston Comes to Dine',\n\n  // === URLs ===\n  url: 'https://mainstreetbistro.com',\n\n  // === Contact Information ===\n  telephone: '+1-713-555-0123',\n  email: 'info@mainstreetbistro.com',\n\n  // === Location & Address ===\n  address: {\n    streetAddress: `${BUSINESS_ADDRESS.street}${BUSINESS_ADDRESS.street2 ? ', ' + BUSINESS_ADDRESS.street2 : ''}`,\n    addressLocality: BUSINESS_ADDRESS.city,\n    addressRegion: BUSINESS_ADDRESS.state,\n    postalCode: BUSINESS_ADDRESS.zipCode,\n    addressCountry: 'US',\n  },\n  geo: {\n    latitude: COORDINATES.latitude,\n    longitude: COORDINATES.longitude,\n  },\n\n  // === Operating Hours ===\n  openingHoursSpecification: convertHoursToSchema(),\n  openingHours: [\n    'Su 10:00-21:00',\n    'Mo-Th 11:00-22:00',\n    'Fr 11:00-23:00',\n    'Sa 10:00-23:00',\n  ],\n\n  // === Restaurant-Specific Properties ===\n  servesCuisine: [\n    'American',\n    'Contemporary',\n    'Steakhouse',\n    'Seafood',\n  ],\n\n  // === Menu Information ===\n  hasMenu: 'https://mainstreetbistro.com/menu',\n  menu: 'https://mainstreetbistro.com/menu',\n\n  // === Reservations ===\n  acceptsReservations: true,\n  reservationsUrl: 'https://mainstreetbistro.com/reservations',\n\n  // === Price Range ($ to $$$$) ===\n  priceRange: '$$$',\n\n  // === Payment Options ===\n  currenciesAccepted: 'USD',\n  paymentAccepted: [\n    'Cash',\n    'Credit Card',\n    'Debit Card',\n    'Apple Pay',\n    'Google Pay',\n  ],\n\n  // === Aggregate Rating (from reviews) ===\n  aggregateRating: {\n    ratingValue: 4.7,\n    bestRating: 5,\n    worstRating: 1,\n    ratingCount: 847,\n    reviewCount: 312,\n  },\n\n  // === Images ===\n  logo: '/images/logo.png',\n  image: [\n    '/images/restaurant-exterior.jpg',\n    '/images/restaurant-interior.jpg',\n    '/images/signature-dish.jpg',\n  ],\n\n  // === Social Media Profiles ===\n  sameAs: [\n    'https://www.facebook.com/mainstreetbistro',\n    'https://www.instagram.com/mainstreetbistro',\n    'https://www.yelp.com/biz/main-street-bistro-houston',\n    'https://www.tripadvisor.com/Restaurant-Main_Street_Bistro',\n  ],\n\n  // === Service Area ===\n  areaServed: [\n    {\n      type: 'City',\n      name: 'Houston',\n      addressLocality: 'Houston',\n      addressRegion: 'TX',\n      addressCountry: 'US',\n    },\n  ],\n\n  // === Contact Point ===\n  contactPoint: {\n    telephone: '+1-713-555-0123',\n    email: 'reservations@mainstreetbistro.com',\n    contactType: 'reservations',\n    availableLanguage: ['English', 'Spanish'],\n    areaServed: ['Houston', 'Greater Houston Area'],\n  },\n\n  // === Business Details ===\n  foundingDate: '2015-03-15',\n  numberOfEmployees: {\n    minValue: 25,\n    maxValue: 40,\n  },\n\n  // === Additional Features ===\n  hasDriveThroughService: false,\n  smokingAllowed: false,\n\n  // === Expertise & Knowledge ===\n  knowsAbout: [\n    'Fine Dining',\n    'American Cuisine',\n    'Craft Cocktails',\n    'Wine Pairing',\n    'Private Dining',\n    'Catering Services',\n    'Farm-to-Table',\n    'Sustainable Sourcing',\n  ],\n  knowsLanguage: ['English', 'Spanish'],\n\n  // === Services Offered ===\n  makesOffer: [\n    'Lunch Service',\n    'Dinner Service',\n    'Weekend Brunch',\n    'Private Dining',\n    'Catering',\n    'Event Hosting',\n    'Wine Dinners',\n    'Chef\\'s Tasting Menu',\n  ],\n\n  // === Amenities ===\n  amenityFeature: [\n    { name: 'Private Dining Room', value: true },\n    { name: 'Outdoor Patio', value: true },\n    { name: 'Full Bar', value: true },\n    { name: 'Wheelchair Accessible', value: true },\n    { name: 'Free Parking', value: true },\n    { name: 'Valet Parking', value: true },\n    { name: 'Wi-Fi', value: true },\n  ],\n};\n\n/**\n * Export helper function to get the complete restaurant schema for JSON-LD\n */\nexport function getRestaurantSchemaData() {\n  return restaurantSchema;\n}\n"
}

🔧 Tool: TodoWrite
Input: {
  "todos": [
    {
      "content": "Create restaurant configuration file with cuisine, price range, menu URL, and ratings",
      "status": "completed",
      "activeForm": "Creating restaurant configuration file"
    },
    {
      "content": "Create RestaurantSchema type definition",
      "status": "in_progress",
      "activeForm": "Creating RestaurantSchema type definition"
    },
    {
      "content": "Enhance local-business-jsonld.ts to generate combined Restaurant + LocalBusiness schema",
      "status": "pending",
      "activeForm": "Enhancing JSON-LD generator for Restaurant schema"
    },
    {
      "content": "Update seo.config.ts to use the new restaurant schema configuration",
      "status": "pending",
      "activeForm": "Updating SEO configuration"
    },
    {
      "content": "Update index.astro to use Restaurant JSON-LD schema",
      "status": "pending",
      "activeForm": "Updating homepage with Restaurant schema"
    },
    {
      "content": "Create and run Playwright verification test",
      "status": "pending",
      "activeForm": "Running Playwright verification test"
    }
  ]
}
Now let me create the RestaurantSchema type definition:

🔧 Tool: Write
Input: {
  "file_path": "/Users/James/Repos/restaurant-business/src/types/restaurant-schema.ts",
  "content": "/**\n * Restaurant Schema Type Definitions\n * TypeScript interfaces for Restaurant + LocalBusiness combined JSON-LD schema.\n * Based on schema.org vocabulary for Restaurant (inherits from FoodEstablishment and LocalBusiness).\n */\n\nimport type {\n  PostalAddress,\n  GeoCoordinates,\n  OpeningHoursSpecification,\n  ServiceArea,\n  ContactPoint,\n  AggregateRating,\n  PriceRange,\n} from './seo';\n\n/**\n * Restaurant type - schema.org Restaurant vocabulary\n * Restaurant inherits from: FoodEstablishment -> LocalBusiness -> Organization -> Thing\n */\nexport type RestaurantType = 'Restaurant' | 'FoodEstablishment';\n\n/**\n * Amenity feature for accessibility and services\n */\nexport interface AmenityFeature {\n  /** Name of the amenity */\n  name: string;\n  /** Whether the amenity is available */\n  value: boolean;\n}\n\n/**\n * Number of employees range\n */\nexport interface EmployeeCount {\n  minValue: number;\n  maxValue: number;\n}\n\n/**\n * Combined Restaurant + LocalBusiness Schema\n * This interface represents the complete structured data for a restaurant\n * following schema.org vocabulary and Google's recommendations for rich results.\n */\nexport interface RestaurantSchema {\n  // === Type Definition ===\n  /** Schema.org type - should be 'Restaurant' or 'FoodEstablishment' */\n  type: RestaurantType;\n\n  // === Business Identity (from LocalBusiness) ===\n  /** Official business name */\n  name: string;\n  /** Legal registered name (if different from name) */\n  legalName?: string;\n  /** Alternative/common name */\n  alternateName?: string;\n  /** Business description (recommended 150-300 characters) */\n  description?: string;\n  /** Business slogan/tagline */\n  slogan?: string;\n\n  // === URLs ===\n  /** Main website URL */\n  url?: string;\n\n  // === Contact Information ===\n  /** Primary phone number in E.164 format (+1-XXX-XXX-XXXX) */\n  telephone?: string;\n  /** Fax number */\n  faxNumber?: string;\n  /** Primary email address */\n  email?: string;\n  /** Contact point(s) for different purposes */\n  contactPoint?: ContactPoint | ContactPoint[];\n\n  // === Location & Address (from LocalBusiness) ===\n  /** Physical address */\n  address?: PostalAddress;\n  /** GPS coordinates */\n  geo?: GeoCoordinates;\n  /** Geographic area served */\n  areaServed?: ServiceArea | ServiceArea[] | string | string[];\n\n  // === Operating Hours (from LocalBusiness) ===\n  /** Structured opening hours specification */\n  openingHoursSpecification?: OpeningHoursSpecification[];\n  /** Simple opening hours string array (e.g., 'Mo-Fr 11:00-22:00') */\n  openingHours?: string | string[];\n\n  // === Restaurant-Specific Properties (from FoodEstablishment) ===\n  /**\n   * Types of cuisine served\n   * Can be a single string or array of cuisine types\n   * Examples: 'American', 'Italian', 'Mexican', 'Japanese', 'Seafood', 'Steakhouse'\n   */\n  servesCuisine?: string | string[];\n\n  /**\n   * URL to the restaurant's menu\n   * This is the primary menu property for Google rich results\n   */\n  hasMenu?: string;\n\n  /**\n   * Alternative menu URL property (some validators prefer this)\n   */\n  menu?: string;\n\n  /**\n   * Whether the restaurant accepts reservations\n   * true = accepts reservations\n   * false = walk-in only\n   */\n  acceptsReservations?: boolean | string;\n\n  /**\n   * URL for making reservations (OpenTable, Resy, direct booking, etc.)\n   */\n  reservationsUrl?: string;\n\n  /**\n   * Whether smoking is allowed\n   */\n  smokingAllowed?: boolean;\n\n  // === Price & Payment (from LocalBusiness) ===\n  /**\n   * Price range indicator\n   * Use: '$' (budget), '$$' (moderate), '$$$' (upscale), '$$$$' (fine dining)\n   */\n  priceRange?: PriceRange;\n  /** Accepted currencies (typically 'USD') */\n  currenciesAccepted?: string;\n  /** Accepted payment methods */\n  paymentAccepted?: string | string[];\n\n  // === Reviews & Ratings ===\n  /**\n   * Aggregate rating from customer reviews\n   * Essential for rich snippets in search results\n   */\n  aggregateRating?: AggregateRating;\n\n  // === Images & Branding ===\n  /** Logo URL */\n  logo?: string;\n  /** Image URL(s) - exterior, interior, food photos */\n  image?: string | string[];\n\n  // === Social Media ===\n  /** Social media profile URLs (Facebook, Instagram, Twitter, Yelp, TripAdvisor, etc.) */\n  sameAs?: string[];\n\n  // === Business Details ===\n  /** Date business was founded (ISO 8601 format: YYYY-MM-DD) */\n  foundingDate?: string;\n  /** Founder name(s) */\n  founder?: string | string[];\n  /** Number of employees (single number or range) */\n  numberOfEmployees?: number | EmployeeCount;\n\n  // === Business Identifiers ===\n  /** Tax ID number */\n  taxID?: string;\n  /** VAT ID number */\n  vatID?: string;\n  /** DUNS number */\n  duns?: string;\n  /** NAICS code */\n  naics?: string;\n  /** ISIC v4 code */\n  isicV4?: string;\n\n  // === Services & Features ===\n  /** Services offered by the restaurant */\n  makesOffer?: string[];\n  /** Topics/areas the restaurant is known for */\n  knowsAbout?: string[];\n  /** Languages spoken by staff */\n  knowsLanguage?: string | string[];\n  /** Whether drive-through service is available */\n  hasDriveThroughService?: boolean;\n  /** Amenity features (parking, Wi-Fi, outdoor seating, etc.) */\n  amenityFeature?: AmenityFeature[];\n\n  // === Organization Hierarchy ===\n  /** Parent organization/company */\n  parentOrganization?: {\n    name: string;\n    url?: string;\n  };\n\n  // === Additional Identifiers ===\n  /** Custom property identifiers */\n  identifier?: {\n    type: string;\n    value: string;\n  }[];\n}\n\n/**\n * Type guard to check if a schema is a RestaurantSchema\n */\nexport function isRestaurantSchema(schema: unknown): schema is RestaurantSchema {\n  return (\n    typeof schema === 'object' &&\n    schema !== null &&\n    'type' in schema &&\n    (schema.type === 'Restaurant' || schema.type === 'FoodEstablishment')\n  );\n}\n"
}

🔧 Tool: TodoWrite
Input: {
  "todos": [
    {
      "content": "Create restaurant configuration file with cuisine, price range, menu URL, and ratings",
      "status": "completed",
      "activeForm": "Creating restaurant configuration file"
    },
    {
      "content": "Create RestaurantSchema type definition",
      "status": "completed",
      "activeForm": "Creating RestaurantSchema type definition"
    },
    {
      "content": "Create restaurant-jsonld.ts utility for generating combined Restaurant + LocalBusiness schema",
      "status": "in_progress",
      "activeForm": "Creating restaurant JSON-LD generator utility"
    },
    {
      "content": "Update SEO.astro to support Restaurant schema type",
      "status": "pending",
      "activeForm": "Updating SEO component"
    },
    {
      "content": "Update index.astro to use Restaurant JSON-LD schema",
      "status": "pending",
      "activeForm": "Updating homepage with Restaurant schema"
    },
    {
      "content": "Create and run Playwright verification test",
      "status": "pending",
      "activeForm": "Running Playwright verification test"
    }
  ]
}
Now let me create a dedicated restaurant JSON-LD generator utility:

🔧 Tool: Write
Input: {
  "file_path": "/Users/James/Repos/restaurant-business/src/utils/restaurant-jsonld.ts",
  "content": "/**\n * Restaurant JSON-LD Generator\n * Generates comprehensive schema.org Restaurant + LocalBusiness structured data\n * for enhanced Google local search results and rich snippets.\n *\n * Based on Google's recommendations for Restaurant rich results:\n * https://developers.google.com/search/docs/appearance/structured-data/local-business\n * https://schema.org/Restaurant\n */\n\nimport type { RestaurantSchema, AmenityFeature } from '../types/restaurant-schema';\nimport type {\n  OpeningHoursSpecification,\n  ServiceArea,\n  ContactPoint,\n  AggregateRating,\n  PostalAddress,\n  GeoCoordinates,\n} from '../types/seo';\nimport { toAbsoluteUrl, escapeHtml } from '../config/seo.config';\n\n/**\n * Generate schema.org PostalAddress object\n */\nfunction generatePostalAddress(address: PostalAddress): object {\n  return cleanObject({\n    '@type': 'PostalAddress',\n    streetAddress: address.streetAddress,\n    addressLocality: address.addressLocality,\n    addressRegion: address.addressRegion,\n    postalCode: address.postalCode,\n    addressCountry: address.addressCountry,\n  });\n}\n\n/**\n * Generate schema.org GeoCoordinates object\n */\nfunction generateGeoCoordinates(geo: GeoCoordinates): object {\n  return {\n    '@type': 'GeoCoordinates',\n    latitude: geo.latitude,\n    longitude: geo.longitude,\n  };\n}\n\n/**\n * Generate schema.org OpeningHoursSpecification array\n */\nfunction generateOpeningHours(specs: OpeningHoursSpecification[]): object[] {\n  return specs.map((spec) => cleanObject({\n    '@type': 'OpeningHoursSpecification',\n    dayOfWeek: Array.isArray(spec.dayOfWeek)\n      ? spec.dayOfWeek.map((day) => `https://schema.org/${day}`)\n      : `https://schema.org/${spec.dayOfWeek}`,\n    opens: spec.opens,\n    closes: spec.closes,\n    validFrom: spec.validFrom,\n    validThrough: spec.validThrough,\n  }));\n}\n\n/**\n * Generate schema.org ServiceArea/GeoShape objects\n */\nfunction generateAreaServed(\n  areas: ServiceArea | ServiceArea[] | string | string[]\n): object | object[] | string | string[] | undefined {\n  if (typeof areas === 'string') {\n    return areas;\n  }\n  if (Array.isArray(areas)) {\n    if (areas.length === 0) return undefined;\n    if (typeof areas[0] === 'string') {\n      return areas as string[];\n    }\n    return (areas as ServiceArea[]).map((area) => generateSingleAreaServed(area));\n  }\n  return generateSingleAreaServed(areas as ServiceArea);\n}\n\nfunction generateSingleAreaServed(area: ServiceArea): object {\n  switch (area.type) {\n    case 'GeoCircle':\n      return cleanObject({\n        '@type': 'GeoCircle',\n        geoMidpoint: area.geoMidpoint\n          ? {\n              '@type': 'GeoCoordinates',\n              latitude: area.geoMidpoint.latitude,\n              longitude: area.geoMidpoint.longitude,\n            }\n          : undefined,\n        geoRadius: area.geoRadius,\n      });\n    case 'City':\n      return cleanObject({\n        '@type': 'City',\n        name: area.name,\n        address: {\n          '@type': 'PostalAddress',\n          addressLocality: area.addressLocality,\n          addressRegion: area.addressRegion,\n          addressCountry: area.addressCountry,\n        },\n      });\n    case 'State':\n      return cleanObject({\n        '@type': 'State',\n        name: area.name || area.addressRegion,\n        address: {\n          '@type': 'PostalAddress',\n          addressRegion: area.addressRegion,\n          addressCountry: area.addressCountry,\n        },\n      });\n    default:\n      return cleanObject({\n        '@type': 'AdministrativeArea',\n        name: area.name,\n      });\n  }\n}\n\n/**\n * Generate schema.org ContactPoint object\n */\nfunction generateContactPoint(contact: ContactPoint): object {\n  return cleanObject({\n    '@type': 'ContactPoint',\n    telephone: contact.telephone,\n    email: contact.email,\n    contactType: contact.contactType || 'customer service',\n    availableLanguage: contact.availableLanguage,\n    contactOption: contact.contactOption,\n    areaServed: contact.areaServed,\n  });\n}\n\n/**\n * Generate schema.org AggregateRating object\n * This is critical for restaurant rich snippets\n */\nfunction generateAggregateRating(rating: AggregateRating): object {\n  return cleanObject({\n    '@type': 'AggregateRating',\n    ratingValue: rating.ratingValue,\n    bestRating: rating.bestRating || 5,\n    worstRating: rating.worstRating || 1,\n    ratingCount: rating.ratingCount,\n    reviewCount: rating.reviewCount,\n  });\n}\n\n/**\n * Generate schema.org LocationFeatureSpecification for amenities\n */\nfunction generateAmenityFeatures(amenities: AmenityFeature[]): object[] {\n  return amenities.map((amenity) => ({\n    '@type': 'LocationFeatureSpecification',\n    name: amenity.name,\n    value: amenity.value,\n  }));\n}\n\n/**\n * Clean object by removing undefined/null values\n */\nfunction cleanObject(obj: Record<string, unknown>): object {\n  return Object.fromEntries(\n    Object.entries(obj).filter(([, value]) => value !== undefined && value !== null)\n  );\n}\n\n/**\n * Generate comprehensive Restaurant JSON-LD schema\n * This follows schema.org Restaurant vocabulary which inherits from:\n * Restaurant -> FoodEstablishment -> LocalBusiness -> Organization -> Thing\n *\n * @param schema - RestaurantSchema configuration\n * @param siteUrl - Base URL of the site\n * @returns Complete JSON-LD object for Restaurant\n */\nexport function generateRestaurantSchema(\n  schema: RestaurantSchema,\n  siteUrl: string\n): object {\n  // Process images - make absolute URLs\n  const images = schema.image\n    ? Array.isArray(schema.image)\n      ? schema.image.map((img) => toAbsoluteUrl(img, siteUrl))\n      : [toAbsoluteUrl(schema.image, siteUrl)]\n    : undefined;\n\n  // Process contact points\n  const contactPoints = schema.contactPoint\n    ? Array.isArray(schema.contactPoint)\n      ? schema.contactPoint.map(generateContactPoint)\n      : generateContactPoint(schema.contactPoint)\n    : undefined;\n\n  // Build the JSON-LD object with combined Restaurant + LocalBusiness properties\n  const jsonLd: Record<string, unknown> = {\n    '@context': 'https://schema.org',\n    '@type': schema.type, // 'Restaurant' or 'FoodEstablishment'\n\n    // === Business Identity (LocalBusiness) ===\n    name: escapeHtml(schema.name),\n    alternateName: schema.alternateName ? escapeHtml(schema.alternateName) : undefined,\n    legalName: schema.legalName ? escapeHtml(schema.legalName) : undefined,\n    description: schema.description ? escapeHtml(schema.description) : undefined,\n    slogan: schema.slogan ? escapeHtml(schema.slogan) : undefined,\n\n    // === Contact Information ===\n    url: schema.url || siteUrl,\n    telephone: schema.telephone,\n    faxNumber: schema.faxNumber,\n    email: schema.email,\n    contactPoint: contactPoints,\n\n    // === Location & Address ===\n    address: schema.address ? generatePostalAddress(schema.address) : undefined,\n    geo: schema.geo ? generateGeoCoordinates(schema.geo) : undefined,\n    areaServed: schema.areaServed ? generateAreaServed(schema.areaServed) : undefined,\n\n    // === Opening Hours ===\n    openingHoursSpecification: schema.openingHoursSpecification\n      ? generateOpeningHours(schema.openingHoursSpecification)\n      : undefined,\n    openingHours: schema.openingHours,\n\n    // === RESTAURANT-SPECIFIC PROPERTIES (FoodEstablishment) ===\n    // These are the key differentiators from generic LocalBusiness\n\n    /**\n     * servesCuisine - Types of cuisine the restaurant serves\n     * Critical for Google to understand and categorize the restaurant\n     */\n    servesCuisine: schema.servesCuisine,\n\n    /**\n     * hasMenu - URL to the restaurant's menu\n     * Google uses this to potentially show menu items in search results\n     */\n    hasMenu: schema.hasMenu ? toAbsoluteUrl(schema.hasMenu, siteUrl) : undefined,\n\n    /**\n     * menu - Alternative menu property (some validators prefer this)\n     */\n    menu: schema.menu ? toAbsoluteUrl(schema.menu, siteUrl) : undefined,\n\n    /**\n     * acceptsReservations - Whether the restaurant takes reservations\n     * Can be boolean or URL to reservation page\n     */\n    acceptsReservations: typeof schema.acceptsReservations === 'string'\n      ? toAbsoluteUrl(schema.acceptsReservations, siteUrl)\n      : schema.acceptsReservations,\n\n    /**\n     * smokingAllowed - Whether smoking is permitted\n     */\n    smokingAllowed: schema.smokingAllowed,\n\n    // === Images & Branding ===\n    logo: schema.logo ? toAbsoluteUrl(schema.logo, siteUrl) : undefined,\n    image: images,\n\n    // === Payment & Pricing ===\n    priceRange: schema.priceRange,\n    currenciesAccepted: schema.currenciesAccepted,\n    paymentAccepted: Array.isArray(schema.paymentAccepted)\n      ? schema.paymentAccepted.join(', ')\n      : schema.paymentAccepted,\n\n    // === Social Media ===\n    sameAs: schema.sameAs?.length ? schema.sameAs : undefined,\n\n    // === Reviews & Ratings ===\n    // Critical for rich snippets - shows star ratings in search results\n    aggregateRating: schema.aggregateRating\n      ? generateAggregateRating(schema.aggregateRating)\n      : undefined,\n\n    // === Business Details ===\n    foundingDate: schema.foundingDate,\n    founder: schema.founder\n      ? Array.isArray(schema.founder)\n        ? schema.founder.map((name) => ({ '@type': 'Person', name }))\n        : { '@type': 'Person', name: schema.founder }\n      : undefined,\n    numberOfEmployees: schema.numberOfEmployees\n      ? typeof schema.numberOfEmployees === 'number'\n        ? { '@type': 'QuantitativeValue', value: schema.numberOfEmployees }\n        : {\n            '@type': 'QuantitativeValue',\n            minValue: schema.numberOfEmployees.minValue,\n            maxValue: schema.numberOfEmployees.maxValue,\n          }\n      : undefined,\n\n    // === Business Identifiers ===\n    taxID: schema.taxID,\n    vatID: schema.vatID,\n    duns: schema.duns,\n    naics: schema.naics,\n    isicV4: schema.isicV4,\n\n    // === Services & Offerings ===\n    makesOffer: schema.makesOffer?.length\n      ? schema.makesOffer.map((service) => ({\n          '@type': 'Offer',\n          itemOffered: {\n            '@type': 'Service',\n            name: service,\n          },\n        }))\n      : undefined,\n    knowsAbout: schema.knowsAbout,\n    knowsLanguage: schema.knowsLanguage,\n\n    // === Special Features ===\n    hasDriveThroughService: schema.hasDriveThroughService,\n\n    // === Amenity Features ===\n    amenityFeature: schema.amenityFeature?.length\n      ? generateAmenityFeatures(schema.amenityFeature)\n      : undefined,\n\n    // === Parent Organization ===\n    parentOrganization: schema.parentOrganization\n      ? {\n          '@type': 'Organization',\n          name: schema.parentOrganization.name,\n          url: schema.parentOrganization.url,\n        }\n      : undefined,\n\n    // === Identifiers ===\n    identifier: schema.identifier?.length\n      ? schema.identifier.map((id) => ({\n          '@type': 'PropertyValue',\n          propertyID: id.type,\n          value: id.value,\n        }))\n      : undefined,\n  };\n\n  // Clean the object by removing undefined values\n  return cleanObject(jsonLd);\n}\n\n/**\n * Export the restaurant schema from config for easy access\n */\nexport { restaurantSchema } from '../config/restaurant.config';\n"
}

🔧 Tool: TodoWrite
Input: {
  "todos": [
    {
      "content": "Create restaurant configuration file with cuisine, price range, menu URL, and ratings",
      "status": "completed",
      "activeForm": "Creating restaurant configuration file"
    },
    {
      "content": "Create RestaurantSchema type definition",
      "status": "completed",
      "activeForm": "Creating RestaurantSchema type definition"
    },
    {
      "content": "Create restaurant-jsonld.ts utility for generating combined Restaurant + LocalBusiness schema",
      "status": "completed",
      "activeForm": "Creating restaurant JSON-LD generator utility"
    },
    {
      "content": "Update SEO.astro to support Restaurant schema type",
      "status": "in_progress",
      "activeForm": "Updating SEO component"
    },
    {
      "content": "Update index.astro to use Restaurant JSON-LD schema",
      "status": "pending",
      "activeForm": "Updating homepage with Restaurant schema"
    },
    {
      "content": "Create and run Playwright verification test",
      "status": "pending",
      "activeForm": "Running Playwright verification test"
    }
  ]
}
Now let me update the SEO.astro component to support the new Restaurant schema type. First, let me check what changes are needed:

🔧 Tool: Read
Input: {
  "file_path": "/Users/James/Repos/restaurant-business/src/components/SEO.astro",
  "offset": 1,
  "limit": 100
}
I need to update the SEO.astro component to import and use the restaurant schema generator. Let me make the necessary edits:

🔧 Tool: Edit
Input: {
  "file_path": "/Users/James/Repos/restaurant-business/src/components/SEO.astro",
  "old_string": "import { generateLocalBusinessSchema } from '../utils/local-business-jsonld';\nimport type { LocalBusinessSchema, LocalBusinessType } from '../types/seo';",
  "new_string": "import { generateLocalBusinessSchema } from '../utils/local-business-jsonld';\nimport { generateRestaurantSchema } from '../utils/restaurant-jsonld';\nimport type { LocalBusinessSchema, LocalBusinessType } from '../types/seo';\nimport type { RestaurantSchema } from '../types/restaurant-schema';"
}

🔧 Tool: Read
Input: {
  "file_path": "/Users/James/Repos/restaurant-business/src/components/SEO.astro"
}

🔧 Tool: Edit
Input: {
  "file_path": "/Users/James/Repos/restaurant-business/src/components/SEO.astro",
  "old_string": "import { generateLocalBusinessSchema } from '../utils/local-business-jsonld';\nimport type { LocalBusinessSchema, LocalBusinessType } from '../types/seo';",
  "new_string": "import { generateLocalBusinessSchema } from '../utils/local-business-jsonld';\nimport { generateRestaurantSchema } from '../utils/restaurant-jsonld';\nimport type { LocalBusinessSchema, LocalBusinessType } from '../types/seo';\nimport type { RestaurantSchema } from '../types/restaurant-schema';\nimport { isRestaurantSchema } from '../types/restaurant-schema';"
}

🔧 Tool: Read
Input: {
  "file_path": "/Users/James/Repos/restaurant-business/src/components/SEO.astro"
}

🔧 Tool: Edit
Input: {
  "file_path": "/Users/James/Repos/restaurant-business/src/components/SEO.astro",
  "old_string": "import { generateLocalBusinessSchema } from '../utils/local-business-jsonld';\nimport type { LocalBusinessSchema, LocalBusinessType } from '../types/seo';\n// Define props interface using Astro's Props pattern",
  "new_string": "import { generateLocalBusinessSchema } from '../utils/local-business-jsonld';\nimport { generateRestaurantSchema } from '../utils/restaurant-jsonld';\nimport type { LocalBusinessSchema, LocalBusinessType } from '../types/seo';\nimport type { RestaurantSchema } from '../types/restaurant-schema';\nimport { isRestaurantSchema } from '../types/restaurant-schema';\n// Define props interface using Astro's Props pattern"
}

🔧 Tool: Bash
Input: {
  "command": "cat \"/Users/James/Repos/restaurant-business/src/components/SEO.astro\" | head -70",
  "description": "Read SEO.astro file header"
}
Let me check the actual file path:

🔧 Tool: Glob
Input: {
  "pattern": "**/SEO.astro"
}
I see - the file paths are Windows paths. Let me read the file again with the correct Windows path:

🔧 Tool: Read
Input: {
  "file_path": "C:\\Users\\James\\Repos\\restaurant-business\\src\\components\\SEO.astro"
}

🔧 Tool: Edit
Input: {
  "file_path": "C:\\Users\\James\\Repos\\restaurant-business\\src\\components\\SEO.astro",
  "old_string": "import { generateLocalBusinessSchema } from '../utils/local-business-jsonld';\nimport type { LocalBusinessSchema, LocalBusinessType } from '../types/seo';\n// Define props interface using Astro's Props pattern",
  "new_string": "import { generateLocalBusinessSchema } from '../utils/local-business-jsonld';\nimport { generateRestaurantSchema } from '../utils/restaurant-jsonld';\nimport type { LocalBusinessSchema, LocalBusinessType } from '../types/seo';\nimport type { RestaurantSchema } from '../types/restaurant-schema';\nimport { isRestaurantSchema } from '../types/restaurant-schema';\n// Define props interface using Astro's Props pattern"
}
Now let me update the `generateJsonLd` function to use the new restaurant schema generator for Restaurant and FoodEstablishment types:

🔧 Tool: Edit
Input: {
  "file_path": "C:\\Users\\James\\Repos\\restaurant-business\\src\\components\\SEO.astro",
  "old_string": "    case 'ProfessionalService':\n    case 'LocalBusiness':\n    case 'Store':\n    case 'Restaurant':\n    case 'MedicalBusiness':\n    case 'FinancialService':\n    case 'LegalService':\n    case 'RealEstateAgent':\n    case 'AutoRepair':\n    case 'HealthAndBeautyBusiness':\n    case 'HomeAndConstructionBusiness':\n    case 'EntertainmentBusiness':\n    case 'FoodEstablishment':\n    case 'LodgingBusiness':\n      // Use the comprehensive LocalBusiness generator for all LocalBusiness subtypes\n      return generateLocalBusinessSchema(schema as LocalBusinessSchema, siteUrl);",
  "new_string": "    case 'Restaurant':\n    case 'FoodEstablishment':\n      // Use the comprehensive Restaurant generator for restaurant-related types\n      // This handles servesCuisine, hasMenu, acceptsReservations, etc.\n      return generateRestaurantSchema(schema as RestaurantSchema, siteUrl);\n    case 'ProfessionalService':\n    case 'LocalBusiness':\n    case 'Store':\n    case 'MedicalBusiness':\n    case 'FinancialService':\n    case 'LegalService':\n    case 'RealEstateAgent':\n    case 'AutoRepair':\n    case 'HealthAndBeautyBusiness':\n    case 'HomeAndConstructionBusiness':\n    case 'EntertainmentBusiness':\n    case 'LodgingBusiness':\n      // Use the comprehensive LocalBusiness generator for non-restaurant LocalBusiness subtypes\n      return generateLocalBusinessSchema(schema as LocalBusinessSchema, siteUrl);"
}

🔧 Tool: TodoWrite
Input: {
  "todos": [
    {
      "content": "Create restaurant configuration file with cuisine, price range, menu URL, and ratings",
      "status": "completed",
      "activeForm": "Creating restaurant configuration file"
    },
    {
      "content": "Create RestaurantSchema type definition",
      "status": "completed",
      "activeForm": "Creating RestaurantSchema type definition"
    },
    {
      "content": "Create restaurant-jsonld.ts utility for generating combined Restaurant + LocalBusiness schema",
      "status": "completed",
      "activeForm": "Creating restaurant JSON-LD generator utility"
    },
    {
      "content": "Update SEO.astro to support Restaurant schema type",
      "status": "completed",
      "activeForm": "Updating SEO component"
    },
    {
      "content": "Update index.astro to use Restaurant JSON-LD schema",
      "status": "in_progress",
      "activeForm": "Updating homepage with Restaurant schema"
    },
    {
      "content": "Create and run Playwright verification test",
      "status": "pending",
      "activeForm": "Running Playwright verification test"
    }
  ]
}
Now let me update the index.astro file to use the new restaurant schema:

🔧 Tool: Read
Input: {
  "file_path": "C:\\Users\\James\\Repos\\restaurant-business\\src\\pages\\index.astro"
}

🔧 Tool: Edit
Input: {
  "file_path": "C:\\Users\\James\\Repos\\restaurant-business\\src\\pages\\index.astro",
  "old_string": "import { localBusinessSchema } from '../config/seo.config';",
  "new_string": "import { restaurantSchema } from '../config/restaurant.config';"
}

🔧 Tool: Edit
Input: {
  "file_path": "C:\\Users\\James\\Repos\\restaurant-business\\src\\pages\\index.astro",
  "old_string": "\tjsonLd={localBusinessSchema}",
  "new_string": "\tjsonLd={restaurantSchema}"
}

🔧 Tool: TodoWrite
Input: {
  "todos": [
    {
      "content": "Create restaurant configuration file with cuisine, price range, menu URL, and ratings",
      "status": "completed",
      "activeForm": "Creating restaurant configuration file"
    },
    {
      "content": "Create RestaurantSchema type definition",
      "status": "completed",
      "activeForm": "Creating RestaurantSchema type definition"
    },
    {
      "content": "Create restaurant-jsonld.ts utility for generating combined Restaurant + LocalBusiness schema",
      "status": "completed",
      "activeForm": "Creating restaurant JSON-LD generator utility"
    },
    {
      "content": "Update SEO.astro to support Restaurant schema type",
      "status": "completed",
      "activeForm": "Updating SEO component"
    },
    {
      "content": "Update index.astro to use Restaurant JSON-LD schema",
      "status": "completed",
      "activeForm": "Updating homepage with Restaurant schema"
    },
    {
      "content": "Create and run Playwright verification test",
      "status": "in_progress",
      "activeForm": "Running Playwright verification test"
    }
  ]
}
Now let's check if there's a Playwright config and create a verification test. First, let me check the project setup:

🔧 Tool: Glob
Input: {
  "pattern": "**/playwright.config.*"
}

🔧 Tool: Read
Input: {
  "file_path": "C:\\Users\\James\\Repos\\restaurant-business\\playwright.config.ts"
}
Let me also check the package.json to understand the project structure:

🔧 Tool: Read
Input: {
  "file_path": "C:\\Users\\James\\Repos\\restaurant-business\\package.json"
}
Now let me create the Playwright verification test:

🔧 Tool: Write
Input: {
  "file_path": "C:\\Users\\James\\Repos\\restaurant-business\\restaurant-schema-verification.spec.ts",
  "content": "/**\n * Restaurant Schema Markup Verification Test\n *\n * This test verifies that the combined Restaurant + LocalBusiness JSON-LD schema\n * is correctly implemented on the homepage.\n *\n * Feature: restaurant-schema-markup\n */\n\nimport { test, expect } from '@playwright/test';\n\ntest.describe('Restaurant Schema Markup', () => {\n  test('homepage should contain valid Restaurant JSON-LD schema', async ({ page }) => {\n    // Navigate to the homepage\n    await page.goto('/');\n\n    // Wait for the page to fully load\n    await page.waitForLoadState('domcontentloaded');\n\n    // Get all JSON-LD script tags\n    const jsonLdScripts = await page.locator('script[type=\"application/ld+json\"]').all();\n\n    // Ensure at least one JSON-LD script exists\n    expect(jsonLdScripts.length).toBeGreaterThan(0);\n\n    // Find and verify the Restaurant schema\n    let restaurantSchema: Record<string, unknown> | null = null;\n\n    for (const script of jsonLdScripts) {\n      const content = await script.textContent();\n      if (content) {\n        try {\n          const parsed = JSON.parse(content);\n          if (parsed['@type'] === 'Restaurant' || parsed['@type'] === 'FoodEstablishment') {\n            restaurantSchema = parsed;\n            break;\n          }\n        } catch {\n          // Skip invalid JSON\n        }\n      }\n    }\n\n    // Ensure Restaurant schema was found\n    expect(restaurantSchema).not.toBeNull();\n    expect(restaurantSchema!['@context']).toBe('https://schema.org');\n    expect(restaurantSchema!['@type']).toBe('Restaurant');\n\n    // Verify required LocalBusiness properties\n    expect(restaurantSchema!['name']).toBeTruthy();\n    expect(restaurantSchema!['address']).toBeTruthy();\n    expect(restaurantSchema!['telephone']).toBeTruthy();\n\n    // Verify address structure\n    const address = restaurantSchema!['address'] as Record<string, unknown>;\n    expect(address['@type']).toBe('PostalAddress');\n    expect(address['streetAddress']).toBeTruthy();\n    expect(address['addressLocality']).toBeTruthy();\n    expect(address['addressRegion']).toBeTruthy();\n    expect(address['postalCode']).toBeTruthy();\n\n    // Verify geo coordinates\n    const geo = restaurantSchema!['geo'] as Record<string, unknown>;\n    expect(geo).toBeTruthy();\n    expect(geo['@type']).toBe('GeoCoordinates');\n    expect(typeof geo['latitude']).toBe('number');\n    expect(typeof geo['longitude']).toBe('number');\n\n    // Verify opening hours exist\n    expect(restaurantSchema!['openingHoursSpecification']).toBeTruthy();\n    expect(Array.isArray(restaurantSchema!['openingHoursSpecification'])).toBe(true);\n\n    // Log success details\n    console.log('Restaurant schema found and validated:');\n    console.log('  - Name:', restaurantSchema!['name']);\n    console.log('  - Type:', restaurantSchema!['@type']);\n  });\n\n  test('Restaurant schema should contain cuisine type', async ({ page }) => {\n    await page.goto('/');\n    await page.waitForLoadState('domcontentloaded');\n\n    const jsonLdScripts = await page.locator('script[type=\"application/ld+json\"]').all();\n\n    for (const script of jsonLdScripts) {\n      const content = await script.textContent();\n      if (content) {\n        try {\n          const parsed = JSON.parse(content);\n          if (parsed['@type'] === 'Restaurant') {\n            // Verify servesCuisine property\n            expect(parsed['servesCuisine']).toBeTruthy();\n\n            // Should be an array or string\n            if (Array.isArray(parsed['servesCuisine'])) {\n              expect(parsed['servesCuisine'].length).toBeGreaterThan(0);\n              console.log('Cuisine types:', parsed['servesCuisine'].join(', '));\n            } else {\n              expect(typeof parsed['servesCuisine']).toBe('string');\n              console.log('Cuisine type:', parsed['servesCuisine']);\n            }\n            return;\n          }\n        } catch {\n          // Skip invalid JSON\n        }\n      }\n    }\n\n    throw new Error('Restaurant schema with servesCuisine not found');\n  });\n\n  test('Restaurant schema should contain price range', async ({ page }) => {\n    await page.goto('/');\n    await page.waitForLoadState('domcontentloaded');\n\n    const jsonLdScripts = await page.locator('script[type=\"application/ld+json\"]').all();\n\n    for (const script of jsonLdScripts) {\n      const content = await script.textContent();\n      if (content) {\n        try {\n          const parsed = JSON.parse(content);\n          if (parsed['@type'] === 'Restaurant') {\n            // Verify priceRange property\n            expect(parsed['priceRange']).toBeTruthy();\n            expect(['$', '$$', '$$$', '$$$$']).toContain(parsed['priceRange']);\n            console.log('Price range:', parsed['priceRange']);\n            return;\n          }\n        } catch {\n          // Skip invalid JSON\n        }\n      }\n    }\n\n    throw new Error('Restaurant schema with priceRange not found');\n  });\n\n  test('Restaurant schema should contain menu URL', async ({ page }) => {\n    await page.goto('/');\n    await page.waitForLoadState('domcontentloaded');\n\n    const jsonLdScripts = await page.locator('script[type=\"application/ld+json\"]').all();\n\n    for (const script of jsonLdScripts) {\n      const content = await script.textContent();\n      if (content) {\n        try {\n          const parsed = JSON.parse(content);\n          if (parsed['@type'] === 'Restaurant') {\n            // Verify hasMenu or menu property\n            const menuUrl = parsed['hasMenu'] || parsed['menu'];\n            expect(menuUrl).toBeTruthy();\n            expect(typeof menuUrl).toBe('string');\n            expect(menuUrl).toContain('menu');\n            console.log('Menu URL:', menuUrl);\n            return;\n          }\n        } catch {\n          // Skip invalid JSON\n        }\n      }\n    }\n\n    throw new Error('Restaurant schema with menu URL not found');\n  });\n\n  test('Restaurant schema should contain acceptsReservations', async ({ page }) => {\n    await page.goto('/');\n    await page.waitForLoadState('domcontentloaded');\n\n    const jsonLdScripts = await page.locator('script[type=\"application/ld+json\"]').all();\n\n    for (const script of jsonLdScripts) {\n      const content = await script.textContent();\n      if (content) {\n        try {\n          const parsed = JSON.parse(content);\n          if (parsed['@type'] === 'Restaurant') {\n            // Verify acceptsReservations property\n            expect(parsed['acceptsReservations']).toBeDefined();\n            console.log('Accepts reservations:', parsed['acceptsReservations']);\n            return;\n          }\n        } catch {\n          // Skip invalid JSON\n        }\n      }\n    }\n\n    throw new Error('Restaurant schema with acceptsReservations not found');\n  });\n\n  test('Restaurant schema should contain aggregate rating', async ({ page }) => {\n    await page.goto('/');\n    await page.waitForLoadState('domcontentloaded');\n\n    const jsonLdScripts = await page.locator('script[type=\"application/ld+json\"]').all();\n\n    for (const script of jsonLdScripts) {\n      const content = await script.textContent();\n      if (content) {\n        try {\n          const parsed = JSON.parse(content);\n          if (parsed['@type'] === 'Restaurant') {\n            // Verify aggregateRating property\n            const rating = parsed['aggregateRating'] as Record<string, unknown>;\n            expect(rating).toBeTruthy();\n            expect(rating['@type']).toBe('AggregateRating');\n            expect(typeof rating['ratingValue']).toBe('number');\n            expect(rating['ratingValue']).toBeGreaterThanOrEqual(1);\n            expect(rating['ratingValue']).toBeLessThanOrEqual(5);\n\n            // Should have either ratingCount or reviewCount\n            const hasCount = rating['ratingCount'] || rating['reviewCount'];\n            expect(hasCount).toBeTruthy();\n\n            console.log('Rating:', rating['ratingValue'], '/ 5');\n            console.log('Rating count:', rating['ratingCount']);\n            console.log('Review count:', rating['reviewCount']);\n            return;\n          }\n        } catch {\n          // Skip invalid JSON\n        }\n      }\n    }\n\n    throw new Error('Restaurant schema with aggregateRating not found');\n  });\n\n  test('Restaurant schema should contain complete opening hours', async ({ page }) => {\n    await page.goto('/');\n    await page.waitForLoadState('domcontentloaded');\n\n    const jsonLdScripts = await page.locator('script[type=\"application/ld+json\"]').all();\n\n    for (const script of jsonLdScripts) {\n      const content = await script.textContent();\n      if (content) {\n        try {\n          const parsed = JSON.parse(content);\n          if (parsed['@type'] === 'Restaurant') {\n            // Verify openingHoursSpecification\n            const hours = parsed['openingHoursSpecification'] as Array<Record<string, unknown>>;\n            expect(hours).toBeTruthy();\n            expect(Array.isArray(hours)).toBe(true);\n            expect(hours.length).toBeGreaterThan(0);\n\n            // Each entry should have required fields\n            for (const entry of hours) {\n              expect(entry['@type']).toBe('OpeningHoursSpecification');\n              expect(entry['dayOfWeek']).toBeTruthy();\n              expect(entry['opens']).toBeTruthy();\n              expect(entry['closes']).toBeTruthy();\n            }\n\n            console.log('Opening hours entries:', hours.length);\n            return;\n          }\n        } catch {\n          // Skip invalid JSON\n        }\n      }\n    }\n\n    throw new Error('Restaurant schema with openingHoursSpecification not found');\n  });\n});\n"
}
Now let's run the Playwright test to verify the implementation:

🔧 Tool: Bash
Input: {
  "command": "cd C:/Users/James/Repos/restaurant-business && npx playwright test restaurant-schema-verification.spec.ts --reporter=list 2>&1",
  "description": "Run Playwright verification test",
  "timeout": 300000
}
All 7 tests passed. Let me delete the verification test file as instructed:

🔧 Tool: Bash
Input: {
  "command": "rm C:/Users/James/Repos/restaurant-business/restaurant-schema-verification.spec.ts",
  "description": "Delete verification test file"
}

🔧 Tool: TodoWrite
Input: {
  "todos": [
    {
      "content": "Create restaurant configuration file with cuisine, price range, menu URL, and ratings",
      "status": "completed",
      "activeForm": "Creating restaurant configuration file"
    },
    {
      "content": "Create RestaurantSchema type definition",
      "status": "completed",
      "activeForm": "Creating RestaurantSchema type definition"
    },
    {
      "content": "Create restaurant-jsonld.ts utility for generating combined Restaurant + LocalBusiness schema",
      "status": "completed",
      "activeForm": "Creating restaurant JSON-LD generator utility"
    },
    {
      "content": "Update SEO.astro to support Restaurant schema type",
      "status": "completed",
      "activeForm": "Updating SEO component"
    },
    {
      "content": "Update index.astro to use Restaurant JSON-LD schema",
      "status": "completed",
      "activeForm": "Updating homepage with Restaurant schema"
    },
    {
      "content": "Create and run Playwright verification test",
      "status": "completed",
      "activeForm": "Running Playwright verification test"
    }
  ]
}
<summary>
## Summary: Implement combined Restaurant + LocalBusiness JSON-LD Schema Markup

### Changes Implemented
- Created a comprehensive `RestaurantSchema` TypeScript type definition that extends LocalBusiness with restaurant-specific properties (servesCuisine, hasMenu, acceptsReservations, aggregateRating, amenityFeature, etc.)
- Created a `restaurant.config.ts` configuration file with all restaurant data including:
  - Business identity (name, description, slogan)
  - Contact information (phone, email)
  - Physical address and GPS coordinates (integrated with existing location config)
  - Operating hours (integrated with existing hours config)
  - Cuisine types: American, Contemporary, Steakhouse, Seafood
  - Menu URL
  - Reservation acceptance and URL
  - Price range ($$$)
  - Aggregate rating (4.7/5 with 847 ratings and 312 reviews)
  - Social media profiles
  - Payment methods
  - Amenity features (private dining, outdoor patio, full bar, etc.)
- Created a `restaurant-jsonld.ts` utility that generates valid schema.org Restaurant JSON-LD markup following Google's structured data guidelines
- Updated the `SEO.astro` component to use the new restaurant schema generator for Restaurant and FoodEstablishment types
- Updated the homepage (`index.astro`) to use the new restaurant schema instead of the generic LocalBusiness schema

### Files Modified
- `src/config/restaurant.config.ts` (NEW) - Restaurant configuration with all structured data
- `src/types/restaurant-schema.ts` (NEW) - TypeScript type definitions for RestaurantSchema
- `src/utils/restaurant-jsonld.ts` (NEW) - JSON-LD generator for Restaurant schema
- `src/components/SEO.astro` - Added imports and routing for Restaurant schema generation
- `src/pages/index.astro` - Updated to use restaurantSchema instead of localBusinessSchema

### Notes for Developer
- The restaurant schema configuration in `src/config/restaurant.config.ts` should be updated with actual business data (name, phone, address, etc.)
- The schema includes placeholder social media URLs that should be replaced with real profiles
- The aggregateRating values should be updated to reflect actual review data from Google, Yelp, or other review platforms
- The opening hours are automatically derived from the existing `hours.config.ts` 
- The schema follows Google's structured data guidelines for Restaurant rich results: https://developers.google.com/search/docs/appearance/structured-data/local-business
- The implementation generates all required and recommended properties for local search visibility:
  - `@type: Restaurant` (inherits from FoodEstablishment and LocalBusiness)
  - `servesCuisine` - Types of cuisine served
  - `hasMenu` / `menu` - URL to menu page
  - `acceptsReservations` - Whether reservations are accepted
  - `priceRange` - Price indicator ($ to $$$$)
  - `aggregateRating` - Review ratings for rich snippets
  - `openingHoursSpecification` - Structured operating hours
  - `address` / `geo` - Physical location with coordinates
  - `telephone` / `email` - Contact information

### Verification Status
- All 7 Playwright tests passed verifying:
  1. Valid Restaurant JSON-LD schema is present on homepage
  2. servesCuisine property with cuisine types (American, Contemporary, Steakhouse, Seafood)
  3. priceRange property ($$$)
  4. Menu URL (https://mainstreetbistro.com/menu)
  5. acceptsReservations (true)
  6. aggregateRating (4.7/5, 847 ratings, 312 reviews)
  7. Complete openingHoursSpecification (7 entries for all days)
- Verification test file was created, executed successfully, and deleted as required
</summary>