/**
 * Awards & Recognition Configuration
 * Centralized configuration for awards, press mentions, best-of lists,
 * and certifications section including sample data and default settings.
 *
 * Customize this file with your actual awards and recognition.
 */

import type { AwardsConfig, Award, AwardTypeInfo } from '../types/award';

/**
 * Sample awards and recognition data
 * Replace with your actual awards and press mentions
 */
export const awards: Award[] = [
  {
    id: 'award-1',
    title: 'Best Seafood Restaurant',
    source: 'Houston Chronicle',
    type: 'best-of',
    year: 2024,
    quote: 'A standout dining destination that combines fresh Gulf seafood with innovative culinary techniques.',
    articleUrl: '#',
    featured: true,
    badgeColor: '#C9A227',
  },
  {
    id: 'award-2',
    title: 'Top 10 Houston Restaurants',
    source: 'Texas Monthly',
    type: 'press',
    year: 2024,
    quote: 'An essential Houston dining experience that celebrates local flavors and ingredients.',
    articleUrl: '#',
    featured: true,
    badgeColor: '#365395',
  },
  {
    id: 'award-3',
    title: "Readers' Choice Award",
    source: 'Houston Press',
    type: 'award',
    year: 2023,
    description: 'Voted by readers as one of the best dining experiences in the Greater Houston area.',
    articleUrl: '#',
    badgeColor: '#D4AF37',
  },
  {
    id: 'award-4',
    title: 'Certificate of Excellence',
    source: 'TripAdvisor',
    type: 'certification',
    year: 2024,
    description: 'Consistently rated 4.5+ stars with outstanding guest reviews.',
    badgeColor: '#00AA6C',
  },
  {
    id: 'award-5',
    title: 'Best New Restaurant',
    source: 'Eater Houston',
    type: 'best-of',
    year: 2023,
    quote: 'A fresh addition to the Houston food scene that delivers on both ambiance and flavor.',
    articleUrl: '#',
    badgeColor: '#E4002B',
  },
  {
    id: 'award-6',
    title: 'Five-Star Food Safety',
    source: 'City of Houston',
    type: 'certification',
    year: 2024,
    description: 'Achieved the highest food safety rating from the Houston Health Department.',
    badgeColor: '#2E7D32',
  },
];

/**
 * Awards section configuration
 */
export const AWARDS_CONFIG: AwardsConfig = {
  // Default section text
  defaultHeading: 'Awards & Recognition',
  defaultSubheading: 'Honored to be recognized by local and national publications',

  // Default layout settings
  defaultLayout: 'grid',
  defaultMaxItems: 6,

  // Default display settings
  defaultShowLogos: true,
  defaultShowYears: true,
  defaultShowQuotes: true,

  // Awards data
  awards,
};

/**
 * Award type labels, colors, and icons
 */
export const AWARD_TYPE_INFO: Record<string, AwardTypeInfo> = {
  award: {
    label: 'Award',
    color: '#D4AF37',
    icon: 'M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z',
  },
  press: {
    label: 'Press',
    color: '#365395',
    icon: 'M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z',
  },
  'best-of': {
    label: 'Best Of',
    color: '#C9A227',
    icon: 'M19 5h-2V3H7v2H5c-1.1 0-2 .9-2 2v1c0 2.55 1.92 4.63 4.39 4.94.63 1.5 1.98 2.63 3.61 2.96V19H7v2h10v-2h-4v-3.1c1.63-.33 2.98-1.46 3.61-2.96C19.08 12.63 21 10.55 21 8V7c0-1.1-.9-2-2-2zM5 8V7h2v3.82C5.84 10.4 5 9.3 5 8zm14 0c0 1.3-.84 2.4-2 2.82V7h2v1z',
  },
  certification: {
    label: 'Certified',
    color: '#2E7D32',
    icon: 'M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-2 16l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z',
  },
};

/**
 * Get featured awards
 */
export function getFeaturedAwards(): Award[] {
  return awards.filter((a) => a.featured);
}

/**
 * Get awards by type
 */
export function getAwardsByType(type: string): Award[] {
  return awards.filter((a) => a.type === type);
}

/**
 * Get awards by year
 */
export function getAwardsByYear(year: number): Award[] {
  return awards.filter((a) => a.year === year);
}

/**
 * Get most recent awards first
 */
export function getAwardsSortedByYear(): Award[] {
  return [...awards].sort((a, b) => (b.year || 0) - (a.year || 0));
}

export default AWARDS_CONFIG;
