/**
 * Private Events Page Configuration
 * Contains all content and data for the private events page including
 * venue spaces, packages, sample menus, and FAQs.
 */

import type {
  PrivateEventsConfig,
  VenueSpace,
  EventPackage,
  SampleMenu,
  PrivateEventFAQ,
} from '../types/private-events';

/**
 * Venue spaces available for private events
 */
export const VENUE_SPACES: VenueSpace[] = [
  {
    id: 'main-dining',
    name: 'Main Dining Room',
    description: 'Our elegant main dining space features floor-to-ceiling windows, custom chandeliers, and a sophisticated ambiance perfect for larger celebrations.',
    capacity: {
      min: 40,
      max: 100,
      seated: 100,
      standing: 150,
    },
    squareFeet: 2500,
    amenities: [
      'Private bar',
      'Dance floor',
      'Built-in sound system',
      'Projector & screen',
      'Dedicated entrance',
      'Climate control',
    ],
    imageSrc: undefined, // Placeholder for actual image
    imageAlt: 'Main dining room set up for a private event with elegant table settings',
    canCombine: true,
    idealFor: ['Wedding receptions', 'Corporate galas', 'Large birthday celebrations', 'Holiday parties'],
  },
  {
    id: 'private-room',
    name: 'The Reserve Room',
    description: 'An intimate private dining room with rich wood paneling, ambient lighting, and a dedicated service team for exclusive gatherings.',
    capacity: {
      min: 15,
      max: 40,
      seated: 40,
      standing: 50,
    },
    squareFeet: 800,
    amenities: [
      'Private entrance',
      'Dedicated server',
      'Customizable lighting',
      'Sound system',
      'AV equipment',
      'Fireplace',
    ],
    imageSrc: undefined,
    imageAlt: 'The Reserve Room featuring intimate seating and warm ambient lighting',
    canCombine: true,
    idealFor: ['Rehearsal dinners', 'Business meetings', 'Intimate celebrations', 'Bridal showers'],
  },
  {
    id: 'garden-patio',
    name: 'Garden Patio',
    description: 'Our charming outdoor patio surrounded by lush landscaping and string lights creates a magical setting for al fresco celebrations.',
    capacity: {
      min: 20,
      max: 60,
      seated: 60,
      standing: 80,
    },
    squareFeet: 1200,
    amenities: [
      'String lighting',
      'Heaters (seasonal)',
      'Weather backup plan',
      'Garden views',
      'Outdoor bar',
      'Dedicated sound system',
    ],
    imageSrc: undefined,
    imageAlt: 'Garden patio with string lights and elegant outdoor dining setup',
    canCombine: false,
    idealFor: ['Garden weddings', 'Cocktail parties', 'Summer celebrations', 'Engagement parties'],
  },
  {
    id: 'chef-table',
    name: "Chef's Table Experience",
    description: 'An exclusive culinary journey in our kitchen with front-row seats to watch our chefs create a custom tasting menu.',
    capacity: {
      min: 6,
      max: 12,
      seated: 12,
    },
    squareFeet: 300,
    amenities: [
      'Kitchen views',
      'Chef interaction',
      'Custom tasting menu',
      'Wine pairings available',
      'Dedicated sommelier',
      'Behind-the-scenes experience',
    ],
    imageSrc: undefined,
    imageAlt: "Chef's table with guests enjoying an intimate culinary experience",
    canCombine: false,
    idealFor: ['Special anniversaries', 'Foodie celebrations', 'VIP entertaining', 'Milestone birthdays'],
  },
];

/**
 * Event packages with pricing
 */
export const EVENT_PACKAGES: EventPackage[] = [
  {
    id: 'essentials',
    name: 'Essentials',
    price: '$65',
    priceNote: 'per person',
    description: 'Perfect for casual celebrations and corporate gatherings with quality food and service.',
    includes: [
      'Choice of 3 passed appetizers',
      'Salad course',
      '2 entree options',
      'Seasonal vegetables',
      'Non-alcoholic beverages',
      'Coffee & tea service',
      'Basic linens & tableware',
      '4-hour venue access',
      'Dedicated event coordinator',
    ],
    excludes: [
      'Alcoholic beverages (available as add-on)',
      'Dessert (available as add-on)',
      'Custom decorations',
    ],
    minGuests: 20,
    maxGuests: 100,
  },
  {
    id: 'signature',
    name: 'Signature',
    price: '$95',
    priceNote: 'per person',
    description: 'Our most popular package featuring an elevated dining experience with premium options.',
    includes: [
      'Choice of 5 passed appetizers',
      'Artisan bread service',
      'Salad course',
      '3 entree options',
      'Chef-selected sides',
      'Dessert duo selection',
      'Open bar (beer, wine, signature cocktail)',
      'Premium linens & tableware',
      '5-hour venue access',
      'Dedicated event coordinator',
      'Centerpiece floral arrangements',
    ],
    isPopular: true,
    popularLabel: 'Most Popular',
    minGuests: 25,
    maxGuests: 150,
  },
  {
    id: 'premier',
    name: 'Premier',
    price: '$145',
    priceNote: 'per person',
    description: 'The ultimate celebration package with premium cuisine, top-shelf beverages, and VIP service.',
    includes: [
      'Raw bar & charcuterie display',
      'Choice of 7 passed appetizers',
      'Intermezzo course',
      'Premium entree selection',
      'Chef-crafted sides',
      'Artisan cheese course',
      'Custom dessert display',
      'Full premium open bar',
      'Champagne toast',
      'Luxury linens & charger plates',
      '6-hour venue access',
      'Dedicated event manager',
      'Custom floral design',
      'Valet parking',
      'Coat check service',
    ],
    minGuests: 30,
    maxGuests: 150,
  },
  {
    id: 'custom',
    name: 'Custom Experience',
    price: 'Contact Us',
    priceNote: 'for pricing',
    description: 'Work directly with our culinary team to create a completely bespoke event tailored to your vision.',
    includes: [
      'Personalized menu design',
      'Custom cocktail creation',
      'Flexible package building',
      'Venue customization',
      'Extended hours available',
      'Full coordination services',
      'Vendor recommendations',
      'Day-of management',
    ],
    minGuests: 10,
    maxGuests: 200,
  },
];

/**
 * Sample menus for each package
 */
export const SAMPLE_MENUS: SampleMenu[] = [
  {
    packageId: 'essentials',
    name: 'Essentials Sample Menu',
    description: 'A selection showcasing what your Essentials package might include',
    categories: [
      {
        name: 'Passed Appetizers',
        items: [
          { name: 'Herb-Crusted Crostini', description: 'Whipped ricotta, roasted tomato, basil' },
          { name: 'Chicken Satay', description: 'Thai peanut sauce, sesame' },
          { name: 'Caprese Skewers', description: 'Fresh mozzarella, cherry tomato, basil' },
        ],
      },
      {
        name: 'Salad Course',
        items: [
          { name: 'Garden Salad', description: 'Mixed greens, seasonal vegetables, house vinaigrette' },
        ],
      },
      {
        name: 'Entree Selections',
        items: [
          { name: 'Herb-Roasted Chicken', description: 'Garlic mashed potatoes, seasonal vegetables' },
          { name: 'Pan-Seared Salmon', description: 'Lemon dill butter, rice pilaf, asparagus' },
        ],
      },
    ],
  },
  {
    packageId: 'signature',
    name: 'Signature Sample Menu',
    description: 'Experience our most popular offerings with elevated presentations',
    categories: [
      {
        name: 'Passed Appetizers',
        items: [
          { name: 'Beef Carpaccio Crostini', description: 'Truffle aioli, arugula, parmesan' },
          { name: 'Seared Ahi Tuna', description: 'Sesame crust, wasabi cream, wonton crisp' },
          { name: 'Wild Mushroom Arancini', description: 'Fontina, truffle oil' },
          { name: 'Bacon-Wrapped Dates', description: 'Goat cheese, almonds' },
          { name: 'Shrimp Cocktail Bites', description: 'Classic cocktail sauce, lemon' },
        ],
      },
      {
        name: 'Salad Course',
        items: [
          { name: 'Bistro Salad', description: 'Baby greens, candied pecans, blue cheese, pear, champagne vinaigrette' },
        ],
      },
      {
        name: 'Entree Selections',
        items: [
          { name: 'Filet Mignon', description: 'Red wine reduction, herb butter, roasted fingerlings' },
          { name: 'Chilean Sea Bass', description: 'Miso glaze, bok choy, jasmine rice' },
          { name: 'Stuffed Chicken Roulade', description: 'Spinach, sundried tomato, goat cheese, wild rice' },
        ],
      },
      {
        name: 'Dessert',
        items: [
          { name: 'Chocolate Torte', description: 'Raspberry coulis, fresh berries' },
          { name: 'Vanilla Bean Panna Cotta', description: 'Seasonal fruit compote' },
        ],
      },
    ],
  },
  {
    packageId: 'premier',
    name: 'Premier Sample Menu',
    description: 'An unforgettable culinary journey featuring premium ingredients',
    categories: [
      {
        name: 'Raw Bar & Displays',
        items: [
          { name: 'Oyster Selection', description: 'East & West Coast varieties, mignonette' },
          { name: 'Jumbo Shrimp Display', description: 'Classic cocktail, remoulade' },
          { name: 'Artisan Charcuterie', description: 'Imported meats, aged cheeses, accompaniments' },
        ],
      },
      {
        name: 'Passed Appetizers',
        items: [
          { name: 'Wagyu Beef Tartare', description: 'Quail egg, crostini, capers' },
          { name: 'Lobster Medallions', description: 'Champagne beurre blanc, chive' },
          { name: 'Foie Gras Mousse', description: 'Fig jam, brioche toast' },
          { name: 'Truffle Deviled Eggs', description: 'Black truffle, gold leaf' },
        ],
      },
      {
        name: 'Intermezzo',
        items: [
          { name: 'Champagne Sorbet', description: 'Fresh mint, edible flowers' },
        ],
      },
      {
        name: 'Entree Selections',
        items: [
          { name: 'Prime Ribeye', description: 'Bone marrow butter, truffle fries, béarnaise' },
          { name: 'Whole Roasted Branzino', description: 'Herbs de Provence, barigoule vegetables' },
          { name: 'Rack of Colorado Lamb', description: 'Herb crust, mint gremolata, fondant potato' },
        ],
      },
      {
        name: 'Cheese Course',
        items: [
          { name: 'Artisan Cheese Selection', description: 'Local honey, candied nuts, seasonal preserves' },
        ],
      },
      {
        name: 'Dessert Display',
        items: [
          { name: 'Mini Dessert Assortment', description: 'Pastry chef selection of bite-sized treats' },
          { name: 'Custom Celebration Cake', description: 'Designed to your specifications' },
        ],
      },
    ],
  },
];

/**
 * Frequently asked questions
 */
export const PRIVATE_EVENT_FAQS: PrivateEventFAQ[] = [
  {
    question: 'How far in advance should I book my private event?',
    answer: 'We recommend booking at least 4-6 weeks in advance for most events. For weddings and large celebrations during peak season (May-October and December), we suggest 3-6 months advance notice to ensure availability.',
  },
  {
    question: 'What is the minimum guest count for a private event?',
    answer: 'Our minimum guest count varies by space: The Reserve Room requires 15 guests minimum, the Garden Patio requires 20 guests, and the Main Dining Room requires 40 guests. The Chef\'s Table accommodates 6-12 guests.',
  },
  {
    question: 'Can I bring my own cake or dessert?',
    answer: 'We happily accommodate outside cakes for celebrations! There is a small cake cutting fee of $3 per person to cover service and plating. We can also create custom cakes and desserts through our pastry team.',
  },
  {
    question: 'Do you accommodate dietary restrictions?',
    answer: 'Absolutely! Our culinary team can accommodate vegetarian, vegan, gluten-free, dairy-free, nut-free, kosher-style, and halal dietary requirements. Please inform us of any restrictions when planning your menu.',
  },
  {
    question: 'Is there a room rental fee?',
    answer: 'Room rental fees vary by space and day of the week. In many cases, the room fee can be waived when meeting minimum food and beverage requirements. Contact our events team for specific pricing.',
  },
  {
    question: 'Can I customize the menu beyond the packages?',
    answer: 'Yes! While our packages are designed to offer the best value, we encourage customization. Our events team will work with you to create a menu that perfectly fits your vision and budget.',
  },
  {
    question: 'What is the deposit and payment policy?',
    answer: 'A 25% non-refundable deposit is required to secure your date. The remaining balance is due 7 days before your event. We accept all major credit cards and bank transfers.',
  },
  {
    question: 'Do you provide event coordination services?',
    answer: 'Every package includes a dedicated event coordinator who will help with planning, timeline creation, vendor coordination, and day-of management. Enhanced coordination services are available for larger events.',
  },
  {
    question: 'Can I visit the venue before booking?',
    answer: 'We encourage site visits! Please contact our events team to schedule a tour. We\'ll show you our spaces, discuss your vision, and answer any questions about hosting your event with us.',
  },
  {
    question: 'What happens in case of inclement weather for outdoor events?',
    answer: 'For Garden Patio events, we always have a backup plan in place. We can seamlessly move your event indoors to the Main Dining Room or The Reserve Room. We\'ll discuss backup options during planning.',
  },
];

/**
 * Complete private events page configuration
 */
export const PRIVATE_EVENTS_CONFIG: PrivateEventsConfig = {
  hero: {
    eyebrow: 'Private Events',
    headline: 'Celebrate Your Special Moments',
    subheadline: 'From intimate gatherings to grand celebrations, our versatile venue spaces and dedicated team will create an unforgettable experience tailored to your vision.',
  },
  venueSpaces: VENUE_SPACES,
  packages: EVENT_PACKAGES,
  sampleMenus: SAMPLE_MENUS,
  faqs: PRIVATE_EVENT_FAQS,
};

export default PRIVATE_EVENTS_CONFIG;
