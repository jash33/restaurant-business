/**
 * About Page Configuration
 * Contains all content for the ice cream shop About page including
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
  heading: "A Sweet Dream Come True",
  subheading: "From family recipes to Houston's favorite scoop shop",
  story: [
    "HTX Creamery started with a simple belief: Houston deserves better ice cream. Not the mass-produced stuff with ingredients you can't pronounce, but real, handcrafted ice cream made the way our grandparents used to make it — with quality ingredients and a whole lot of love.",
    "In 2019, husband and wife duo Miguel and Ana Rodriguez left their corporate careers to pursue their passion for frozen desserts. What started as weekend batches sold at local farmers markets quickly grew into a loyal following of ice cream enthusiasts who couldn't get enough of their unique flavors.",
    "We opened our first scoop shop in the Energy Corridor in 2020, right in the heart of our Houston community. Despite opening during challenging times, the neighborhood embraced us with open arms (and open mouths). Our commitment to quality and creativity kept customers coming back.",
    "Today, HTX Creamery is proud to be Houston's neighborhood creamery — a place where families make memories, first dates share sundaes, and everyone leaves a little happier than when they arrived."
  ],
  pullQuote: "Every scoop we serve carries a piece of our hearts. We're not just making ice cream — we're making moments that families will remember forever.",
  pullQuoteAttribution: "Miguel & Ana Rodriguez, Founders",
  establishedYear: "Est. 2019",
  photoAlt: "Miguel and Ana Rodriguez, founders of HTX Creamery",
};

/**
 * Team Members
 */
export const TEAM_MEMBERS: TeamMember[] = [
  {
    id: 'miguel-rodriguez',
    name: 'Miguel Rodriguez',
    title: 'Head Ice Cream Maker & Co-Founder',
    bio: "Miguel brings his food science background and childhood memories of making helado with his grandmother to create our signature flavors. He's the mastermind behind fan favorites like Texas Honey Pecan and Mango Chili Lime.",
    isFounder: true,
    quote: "The best ice cream isn't just about ingredients — it's about the joy you put into making it.",
    yearsWithRestaurant: 5,
    order: 1,
    photoAlt: "Miguel Rodriguez making ice cream",
    links: [
      { type: 'instagram', url: 'https://instagram.com/htxcreamery' },
      { type: 'email', url: 'mailto:miguel@htxcreamery.com' },
    ],
  },
  {
    id: 'ana-rodriguez',
    name: 'Ana Rodriguez',
    title: 'Operations Manager & Co-Founder',
    bio: "Ana's warmth and attention to detail ensure every customer feels welcome. Her background in hospitality and her love for the Houston community shine through in every aspect of the HTX Creamery experience.",
    isFounder: true,
    quote: "Ice cream brings people together. That's what makes this work so special.",
    yearsWithRestaurant: 5,
    order: 2,
    photoAlt: "Ana Rodriguez welcoming guests",
    links: [
      { type: 'instagram', url: 'https://instagram.com/htxcreamery' },
      { type: 'email', url: 'mailto:ana@htxcreamery.com' },
    ],
  },
];

/**
 * Sourcing Principles
 */
export const SOURCING_PRINCIPLES: SourcingPrinciple[] = [
  {
    id: 'local-dairy',
    title: 'Texas Dairy',
    description: 'Our cream and milk come from small Texas dairy farms that prioritize animal welfare and sustainable practices.',
    icon: '🥛',
    order: 1,
  },
  {
    id: 'real-ingredients',
    title: 'Real Ingredients',
    description: "No artificial colors, flavors, or preservatives. Just real fruit, real chocolate, real vanilla — the good stuff.",
    icon: '🍓',
    order: 2,
  },
  {
    id: 'small-batch',
    title: 'Small Batch',
    description: 'We make ice cream in small batches every day to ensure maximum freshness and quality in every scoop.',
    icon: '🍨',
    order: 3,
  },
  {
    id: 'local-partnerships',
    title: 'Local Partnerships',
    description: 'We partner with Houston bakeries, coffee roasters, and candy makers to create unique, locally-inspired flavors.',
    icon: '🤝',
    order: 4,
  },
];

/**
 * Ingredient Partnerships
 */
export const INGREDIENT_PARTNERSHIPS: IngredientPartnership[] = [
  {
    id: 'texas-dairy',
    partnerName: 'Happy Cow Creamery',
    partnerType: 'Dairy Farm',
    location: 'Brenham, TX',
    description: "Our cream and milk come from Happy Cow Creamery, a family-owned dairy farm that's been operating for three generations.",
    quote: "Working with HTX Creamery has been wonderful. They truly care about quality and where their ingredients come from.",
    quoteAttribution: "Tom Miller, Happy Cow Creamery",
    ingredients: ['Heavy Cream', 'Whole Milk', 'Buttermilk'],
    yearEstablished: 2019,
    photoAlt: "Happy Cow Creamery farm",
    order: 1,
  },
  {
    id: 'houston-coffee',
    partnerName: 'Third Coast Coffee',
    partnerType: 'Coffee Roaster',
    location: 'Houston, TX',
    description: "The espresso and coffee in our coffee flavors comes from Third Coast Coffee, a Houston-based specialty roaster.",
    ingredients: ['Espresso', 'Cold Brew'],
    yearEstablished: 2020,
    photoAlt: "Third Coast Coffee roasting",
    order: 2,
  },
];

/**
 * Timeline Milestones
 */
export const TIMELINE_MILESTONES: TimelineMilestone[] = [
  {
    id: 'farmers-market',
    year: '2019',
    title: 'Farmers Market Days',
    description: "Miguel and Ana start selling ice cream at the Houston Farmers Market every weekend, quickly building a devoted following.",
    photoAlt: "HTX Creamery farmers market booth",
    order: 1,
  },
  {
    id: 'first-shop',
    year: '2020',
    title: 'Our First Scoop Shop',
    description: "We open our doors in the Energy Corridor. Despite challenging times, the Houston community embraces us with enthusiasm.",
    photoAlt: "HTX Creamery grand opening",
    order: 2,
  },
  {
    id: 'houston-best',
    year: '2022',
    title: "Voted Houston's Best",
    description: "Houston Press names HTX Creamery 'Best Ice Cream Shop' — a testament to our amazing customers and team.",
    photoAlt: "HTX Creamery award",
    order: 3,
  },
  {
    id: 'ice-cream-cakes',
    year: '2023',
    title: 'Ice Cream Cakes Launch',
    description: "We expand to offer custom ice cream cakes, quickly becoming the go-to for Houston birthday celebrations.",
    photoAlt: "HTX Creamery ice cream cakes",
    order: 4,
  },
  {
    id: 'five-years',
    year: '2024',
    title: '5 Years Strong',
    description: "We celebrate five years of serving Houston with a week of special flavors and community events.",
    photoAlt: "HTX Creamery 5 year celebration",
    order: 5,
  },
];

/**
 * Restaurant Timeline (alias for backward compatibility)
 */
export const RESTAURANT_TIMELINE = TIMELINE_MILESTONES;

/**
 * Complete About Page Configuration
 */
export const ABOUT_PAGE_CONFIG = {
  hero: {
    title: 'Our Story',
    subtitle: 'From farmers markets to Houston\'s favorite scoop shop',
  },
  foundersStory: FOUNDERS_STORY,
  teamMembers: TEAM_MEMBERS,
  sourcingPrinciples: SOURCING_PRINCIPLES,
  ingredientPartnerships: INGREDIENT_PARTNERSHIPS,
  timelineMilestones: TIMELINE_MILESTONES,
};

export const ABOUT_CONFIG = ABOUT_PAGE_CONFIG;

export default ABOUT_PAGE_CONFIG;
