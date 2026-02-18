/**
 * Restaurant Showcases Configuration
 *
 * This file contains the configuration for the restaurant showcases displayed
 * on the homepage. These highlight our signature dishes, catering & events,
 * and seasonal menus to give visitors an immediate sense of our culinary offerings.
 *
 * Instructions for updating:
 * 1. To change featured showcases, modify the FEATURED_PROJECTS array below
 * 2. Each showcase should include all required fields (id, title, description, thumbnail, technologies, category)
 * 3. Recommended: Display 2-3 showcases for optimal visual balance
 * 4. Images should be placed in the /public/portfolio/ directory
 * 5. Use WebP format for better performance when available
 */

import type { Project } from '../types/portfolio';

/**
 * Featured restaurant showcases to display on the homepage
 * These highlight our signature dishes, catering services, and seasonal offerings
 */
export const FEATURED_PROJECTS: Project[] = [
  {
    id: 'signature-dishes',
    title: 'Signature Dishes',
    description: 'Discover the culinary creations that define our restaurant. From our slow-braised short ribs to our hand-crafted pasta, each signature dish is prepared with locally sourced ingredients and time-honored techniques passed down through generations.',
    thumbnail: {
      src: '/restaurant-business/portfolio/signature-dishes.svg',
      alt: 'Elegant plating of our signature dishes featuring chef-crafted entrees and appetizers',
      width: 600,
      height: 400,
    },
    technologies: [
      { name: 'Locally Sourced', category: 'ingredient' },
      { name: 'Chef-Crafted', category: 'technique' },
      { name: 'House Specialties', category: 'cuisine' },
      { name: 'Award-Winning', category: 'experience' },
    ],
    category: 'dishes',
    featured: true,
    completedDate: '2025-01-15',
    links: [
      { text: 'View Full Menu', href: '/restaurant-business/menu', type: 'live-site' },
    ],
  },
  {
    id: 'catering-events',
    title: 'Catering & Events',
    description: 'From intimate dinner parties to grand corporate galas, our catering team brings the full restaurant experience to your venue. Custom menus, professional service, and unforgettable presentations for events of 20 to 500 guests.',
    thumbnail: {
      src: '/restaurant-business/portfolio/catering-events.svg',
      alt: 'Beautifully arranged catering spread for a corporate event with elegant table settings and gourmet dishes',
      width: 600,
      height: 400,
    },
    technologies: [
      { name: 'Corporate Events', category: 'service' },
      { name: 'Weddings', category: 'service' },
      { name: 'Private Parties', category: 'experience' },
      { name: 'Custom Menus', category: 'cuisine' },
    ],
    category: 'events',
    featured: true,
    completedDate: '2025-01-10',
    links: [
      { text: 'Plan Your Event', href: '/restaurant-business/catering', type: 'live-site' },
      { text: 'View Gallery', href: '/restaurant-business/gallery', type: 'case-study' },
    ],
  },
  {
    id: 'seasonal-menus',
    title: 'Seasonal Menus',
    description: 'Our menu evolves with the seasons, celebrating the freshest ingredients at their peak. Each quarter, our chef curates a special tasting menu that showcases seasonal produce from local Texas farms and artisan suppliers.',
    thumbnail: {
      src: '/restaurant-business/portfolio/seasonal-menus.svg',
      alt: 'Seasonal menu featuring fresh spring vegetables, summer fruits, autumn harvest, and winter comfort dishes',
      width: 600,
      height: 400,
    },
    technologies: [
      { name: 'Farm-to-Table', category: 'ingredient' },
      { name: 'Seasonal Produce', category: 'ingredient' },
      { name: 'Tasting Menus', category: 'cuisine' },
      { name: 'Local Farms', category: 'ingredient' },
    ],
    category: 'seasonal',
    featured: true,
    completedDate: '2025-01-05',
    links: [
      { text: 'See Current Specials', href: '/restaurant-business/menu#specials', type: 'live-site' },
    ],
  },
];

/**
 * Section configuration for the featured projects preview
 * Customize the heading, subheading, and CTA text/link
 */
export const FEATURED_PROJECTS_CONFIG = {
  /** Main heading for the section */
  heading: 'Signature Experiences',

  /** Subheading/description text */
  subheading: 'Explore our chef-crafted dishes, curated events, and seasonal creations — each one designed to deliver an unforgettable dining experience.',

  /** Text for the "View All" call-to-action button */
  viewAllText: 'Explore Our Menu',

  /** URL for the "View All" call-to-action button */
  viewAllHref: '/restaurant-business/menu',

  /** Section ID for anchor linking */
  id: 'featured-showcases',
};
