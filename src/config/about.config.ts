/**
 * About Page Configuration
 * Contains all content for the restaurant About page including
 * founders story, team bios, sourcing philosophy, partnerships, and timeline.
 */

import type {
  AboutPageConfig,
  TeamMember,
  SourcingPrinciple,
  IngredientPartnership,
  TimelineMilestone,
  FoundersStory,
} from '../types/about';

/**
 * Founders Story Content
 */
export const FOUNDERS_STORY: FoundersStory = {
  heading: "A Family's Culinary Journey",
  subheading: "From humble beginnings to Houston's table",
  story: [
    "Our story begins in 2015, when Chef Marcus and Sarah Chen decided to pursue their dream of creating a gathering place where Houston's diverse community could experience the joy of honest, thoughtfully-prepared food. What started as late-night recipe experiments in their home kitchen quickly evolved into something much bigger.",
    "Marcus, a classically trained chef with over 15 years of experience in fine dining kitchens across the country, had grown tired of the pretense that often accompanied upscale restaurants. Sarah, with her background in hospitality management and deep roots in Houston's business community, knew there was an appetite for something different — a restaurant that combined exceptional culinary craft with genuine warmth and accessibility.",
    "The Main Street Bistro opened its doors on a warm March evening in 2015. That first night, with only twelve tables and a skeleton crew, we served 47 guests. Many of them still dine with us today, and their loyalty reminds us daily of why we started this journey.",
    "Today, our restaurant has grown into a beloved Houston institution, but our core mission remains unchanged: to create memorable dining experiences through exceptional food, genuine hospitality, and a deep commitment to our community and the farmers and artisans who supply our kitchen."
  ],
  pullQuote: "Every dish we create is a love letter to Houston — celebrating our city's incredible diversity and the farmers, ranchers, and artisans who make our vision possible.",
  pullQuoteAttribution: "Marcus & Sarah Chen, Founders",
  establishedYear: "Est. 2015",
  photoAlt: "Marcus and Sarah Chen, founders of The Main Street Bistro",
};

/**
 * Team Members
 */
export const TEAM_MEMBERS: TeamMember[] = [
  {
    id: 'marcus-chen',
    name: 'Marcus Chen',
    title: 'Executive Chef & Co-Founder',
    bio: "With over 20 years of culinary experience, Chef Marcus brings a classical foundation and innovative spirit to every dish. His commitment to seasonal, locally-sourced ingredients defines our menu's ever-evolving character.",
    isFounder: true,
    quote: "The best dishes tell a story — of the land, the seasons, and the hands that nurtured each ingredient.",
    yearsWithRestaurant: 9,
    order: 1,
    photoAlt: "Chef Marcus Chen in the kitchen",
    links: [
      { type: 'instagram', url: 'https://instagram.com/chefmarcuschen' },
      { type: 'linkedin', url: 'https://linkedin.com/in/marcuschen' },
      { type: 'email', url: 'mailto:marcus@mainstreetbistro.com' },
    ],
  },
  {
    id: 'sarah-chen',
    name: 'Sarah Chen',
    title: 'General Manager & Co-Founder',
    bio: "Sarah's warmth and attention to detail shape every aspect of the guest experience. Her Houston roots and hospitality expertise ensure every visitor feels like family from the moment they walk through our doors.",
    isFounder: true,
    quote: "Hospitality isn't just what we do — it's who we are. Every guest deserves to feel genuinely welcome.",
    yearsWithRestaurant: 9,
    order: 2,
    photoAlt: "Sarah Chen welcoming guests",
    links: [
      { type: 'linkedin', url: 'https://linkedin.com/in/sarahchen' },
      { type: 'twitter', url: 'https://twitter.com/sarahchen_msb' },
      { type: 'email', url: 'mailto:sarah@mainstreetbistro.com' },
    ],
  },
  {
    id: 'james-rivera',
    name: 'James Rivera',
    title: 'Sous Chef',
    bio: "A Houston native and graduate of the Culinary Institute of America, James brings precision and creativity to our kitchen. His expertise in sauce work and attention to plating elevates every dish that leaves our pass.",
    yearsWithRestaurant: 6,
    order: 3,
    photoAlt: "Sous Chef James Rivera",
    links: [
      { type: 'instagram', url: 'https://instagram.com/chefjamesrivera' },
    ],
  },
  {
    id: 'emily-watson',
    name: 'Emily Watson',
    title: 'Pastry Chef',
    bio: "Emily's desserts are legendary among our regulars. Trained in French patisserie techniques, she brings artistry and whimsy to our dessert program while honoring classic flavors that bring comfort.",
    yearsWithRestaurant: 4,
    order: 4,
    photoAlt: "Pastry Chef Emily Watson",
    links: [
      { type: 'instagram', url: 'https://instagram.com/emilybakes' },
      { type: 'twitter', url: 'https://twitter.com/emilypastry' },
    ],
  },
  {
    id: 'david-thompson',
    name: 'David Thompson',
    title: 'Bar Manager & Head Mixologist',
    bio: "David curates our award-winning cocktail and wine program with an emphasis on craft spirits and local producers. His seasonal cocktail menus have become a destination unto themselves.",
    yearsWithRestaurant: 5,
    order: 5,
    photoAlt: "Bar Manager David Thompson",
    links: [
      { type: 'instagram', url: 'https://instagram.com/davidmixes' },
      { type: 'linkedin', url: 'https://linkedin.com/in/davidthompson' },
    ],
  },
  {
    id: 'maria-santos',
    name: 'Maria Santos',
    title: 'Front of House Manager',
    bio: "Maria ensures every service runs smoothly while maintaining the personal touches that make our guests feel at home. Her encyclopedic knowledge of our menu helps guide diners to their perfect meal.",
    yearsWithRestaurant: 7,
    order: 6,
    photoAlt: "Front of House Manager Maria Santos",
    links: [
      { type: 'linkedin', url: 'https://linkedin.com/in/mariasantos' },
      { type: 'email', url: 'mailto:maria@mainstreetbistro.com' },
    ],
  },
];

/**
 * Sourcing Philosophy Principles
 */
export const SOURCING_PRINCIPLES: SourcingPrinciple[] = [
  {
    id: 'local-first',
    title: 'Local First',
    description: "We prioritize partnerships with Texas farms, ranches, and producers within 150 miles of Houston. Supporting our local food economy strengthens our community and ensures the freshest possible ingredients reach your plate.",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" /><path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" /></svg>`,
    stats: {
      value: '85%',
      label: 'of produce sourced locally',
    },
  },
  {
    id: 'seasonal-menus',
    title: 'Seasonal Menus',
    description: "Our menu changes with the seasons, celebrating what's at peak ripeness and flavor. This approach not only delivers superior taste but supports sustainable farming practices and reduces our environmental footprint.",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" /></svg>`,
    stats: {
      value: '4x',
      label: 'menu updates per year',
    },
  },
  {
    id: 'sustainable-practices',
    title: 'Sustainable Practices',
    description: "We partner exclusively with farms and ranches that share our commitment to sustainable, humane, and environmentally responsible practices. Every protein is pasture-raised, and our seafood meets strict sustainability standards.",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M12.75 3.03v.568c0 .334.148.65.405.864l1.068.89c.442.369.535 1.01.216 1.49l-.51.766a2.25 2.25 0 01-1.161.886l-.143.048a1.107 1.107 0 00-.57 1.664c.369.555.169 1.307-.427 1.605L9 13.125l.423 1.059a.956.956 0 01-1.652.928l-.679-.906a1.125 1.125 0 00-1.906.172L4.5 15.75l-.612.153M12.75 3.031a9 9 0 00-8.862 12.872M12.75 3.031a9 9 0 016.69 14.036m0 0l-.177-.529A2.25 2.25 0 0017.128 15H16.5l-.324-.324a1.453 1.453 0 00-2.328.377l-.036.073a1.586 1.586 0 01-.982.816l-.99.282c-.55.157-.894.702-.8 1.267l.073.438c.08.474.49.821.97.821.846 0 1.598.542 1.865 1.345l.215.643m5.276-3.67a9.012 9.012 0 01-5.276 3.67m0 0a9 9 0 01-10.275-4.835M15.75 9c0 .896-.393 1.7-1.016 2.25" /></svg>`,
    stats: {
      value: '100%',
      label: 'sustainable seafood',
    },
  },
  {
    id: 'artisan-relationships',
    title: 'Artisan Relationships',
    description: "We build long-term relationships with craftspeople who share our passion for quality — from our baker who delivers fresh bread daily to the cheesemaker whose family has perfected their craft over generations.",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" /></svg>`,
    stats: {
      value: '15+',
      label: 'local artisan partners',
    },
  },
];

/**
 * Ingredient Partnerships
 */
export const INGREDIENT_PARTNERSHIPS: IngredientPartnership[] = [
  {
    id: 'blackwood-farms',
    name: 'Blackwood Family Farms',
    type: 'farm',
    description: "Third-generation organic farm providing our heirloom tomatoes, seasonal greens, and specialty vegetables. The Blackwood family has been farming the same land in Waller County for over 60 years.",
    location: 'Waller, TX',
    featuredProducts: ['Heirloom Tomatoes', 'Mixed Greens', 'Squash', 'Peppers'],
    yearsPartnership: 8,
    quote: "Working with Main Street Bistro has allowed us to grow varieties that prioritize flavor over shelf life. It's farming the way it should be.",
    photoAlt: "Blackwood Family Farms produce fields",
  },
  {
    id: 'lone-star-ranch',
    name: 'Lone Star Heritage Ranch',
    type: 'ranch',
    description: "Pasture-raised, grass-finished beef from a family ranch that practices regenerative agriculture. Their commitment to animal welfare and land stewardship produces beef of exceptional quality.",
    location: 'Brenham, TX',
    featuredProducts: ['Grass-Fed Beef', 'Heritage Pork'],
    yearsPartnership: 7,
    quote: "We raise our cattle the old-fashioned way — plenty of space, fresh grass, and zero shortcuts.",
    photoAlt: "Cattle grazing at Lone Star Heritage Ranch",
  },
  {
    id: 'gulf-sustainable',
    name: 'Gulf Coast Sustainable Seafood',
    type: 'fishery',
    description: "Our seafood partner works directly with Gulf fishermen who practice sustainable harvesting methods. Every catch is traceable from dock to plate, ensuring freshness and environmental responsibility.",
    location: 'Galveston, TX',
    featuredProducts: ['Gulf Shrimp', 'Red Snapper', 'Oysters', 'Blue Crab'],
    yearsPartnership: 6,
    quote: "Sustainable fishing isn't just about today's catch — it's about ensuring the Gulf remains abundant for generations.",
    photoAlt: "Fresh Gulf seafood",
  },
  {
    id: 'hill-country-creamery',
    name: 'Hill Country Artisan Creamery',
    type: 'dairy',
    description: "Small-batch cheeses and dairy products from a family creamery in the Texas Hill Country. Their award-winning aged cheddar and fresh ricotta are menu staples.",
    location: 'Fredericksburg, TX',
    featuredProducts: ['Aged Cheddar', 'Fresh Ricotta', 'Cultured Butter', 'Crème Fraîche'],
    yearsPartnership: 5,
    quote: "Cheesemaking is an art passed down through our family. Every wheel tells a story.",
    photoAlt: "Artisan cheese aging at Hill Country Creamery",
  },
  {
    id: 'houston-bread-co',
    name: 'Houston Bread Company',
    type: 'bakery',
    description: "Artisan breads and pastry delivered fresh each morning. Their sourdough, made with a 20-year-old starter, forms the foundation of our bread service.",
    location: 'Houston, TX',
    featuredProducts: ['Sourdough Loaves', 'Brioche', 'Focaccia', 'Croissants'],
    yearsPartnership: 9,
    quote: "The best bread takes time. There are no shortcuts when you're fermenting tradition.",
    photoAlt: "Fresh artisan bread from Houston Bread Company",
  },
  {
    id: 'texas-olive-ranch',
    name: 'Texas Olive Ranch',
    type: 'artisan',
    description: "Award-winning extra virgin olive oil pressed from Texas-grown olives. Their single-estate oils bring distinctive character to our dishes and housemade dressings.",
    location: 'Carrizo Springs, TX',
    featuredProducts: ['Extra Virgin Olive Oil', 'Infused Oils', 'Olive Tapenade'],
    yearsPartnership: 4,
    quote: "Texas terroir creates olive oils with a character you can't find anywhere else.",
    photoAlt: "Olive groves at Texas Olive Ranch",
  },
];

/**
 * Restaurant History Timeline
 */
export const RESTAURANT_TIMELINE: TimelineMilestone[] = [
  {
    id: 'founding',
    year: '2015',
    title: 'The Beginning',
    description: "Marcus and Sarah Chen open The Main Street Bistro in a modest 50-seat space in downtown Houston. The restaurant quickly gains a following for its fresh approach to American cuisine.",
    isHighlighted: true,
    icon: 'star',
    photoAlt: "Original Main Street Bistro location",
  },
  {
    id: 'first-review',
    year: '2016',
    title: 'Critical Acclaim',
    description: "Houston Chronicle names us one of the city's 'Best New Restaurants.' Our commitment to local sourcing begins to attract attention from food enthusiasts across Texas.",
    icon: 'award',
    photoAlt: "Houston Chronicle review feature",
  },
  {
    id: 'expansion',
    year: '2017',
    title: 'Growing Our Space',
    description: "We expand into the adjacent storefront, doubling our capacity and adding a private dining room. The expansion allows us to host special events and wine dinners.",
    icon: 'building',
    photoAlt: "Restaurant expansion construction",
  },
  {
    id: 'farm-program',
    year: '2018',
    title: 'Farm Partnership Program',
    description: "Launch of our formal farm partnership program, guaranteeing purchase commitments to local farmers in exchange for exclusive access to specialty crops grown just for our kitchen.",
    isHighlighted: true,
    icon: 'leaf',
    photoAlt: "Chef Marcus visiting partner farm",
  },
  {
    id: 'james-beard',
    year: '2019',
    title: 'National Recognition',
    description: "Chef Marcus receives a James Beard Award nomination for Best Chef: Texas. The recognition brings national attention to Houston's vibrant culinary scene.",
    icon: 'trophy',
    photoAlt: "James Beard Award nomination announcement",
  },
  {
    id: 'pandemic-pivot',
    year: '2020',
    title: 'Community First',
    description: "During the pandemic, we pivot to meal kits and family-style takeout while providing over 5,000 meals to healthcare workers and first responders.",
    icon: 'heart',
    photoAlt: "Meal donation to healthcare workers",
  },
  {
    id: 'outdoor-patio',
    year: '2021',
    title: 'Patio & Garden',
    description: "We open our expanded outdoor patio featuring a chef's herb and vegetable garden. The garden supplies fresh herbs and microgreens directly to our kitchen.",
    icon: 'sun',
    photoAlt: "New outdoor patio and garden",
  },
  {
    id: 'bar-program',
    year: '2022',
    title: 'Award-Winning Bar',
    description: "Our cocktail program, led by David Thompson, wins 'Best Bar Program' at the Houston Culinary Awards. We expand our spirits collection to over 200 selections.",
    icon: 'glass',
    photoAlt: "Award-winning cocktail program",
  },
  {
    id: 'anniversary',
    year: '2023',
    title: 'A Decade of Dreams',
    description: "We celebrate our 8th anniversary with a special tasting menu featuring dishes from every year of our history. The celebration raises $50,000 for the Houston Food Bank.",
    icon: 'cake',
    photoAlt: "8th anniversary celebration",
  },
  {
    id: 'today',
    year: '2024',
    title: 'Looking Forward',
    description: "As we approach our 10th anniversary, we remain committed to the values that started this journey: exceptional food, genuine hospitality, and deep roots in our Houston community.",
    isHighlighted: true,
    icon: 'rocket',
    photoAlt: "Main Street Bistro today",
  },
];

/**
 * Complete About Page Configuration
 */
export const ABOUT_PAGE_CONFIG: AboutPageConfig = {
  hero: {
    eyebrow: 'Our Story',
    headline: "Where Houston Comes to Dine",
    subheadline: "Since 2015, we've been crafting memorable dining experiences through exceptional cuisine, genuine hospitality, and deep connections with the farmers and artisans who share our passion for quality.",
  },
  foundersStory: FOUNDERS_STORY,
  team: TEAM_MEMBERS,
  sourcingPrinciples: SOURCING_PRINCIPLES,
  partnerships: INGREDIENT_PARTNERSHIPS,
  timeline: RESTAURANT_TIMELINE,
};

export default ABOUT_PAGE_CONFIG;
