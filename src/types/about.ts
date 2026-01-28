/**
 * About Page Type Definitions
 * Types for the restaurant About page including team members,
 * sourcing philosophy, partnerships, and timeline milestones.
 */

/**
 * Team Member Interface
 * Represents a restaurant staff member or founder for the team bios section
 */
export interface TeamMember {
  /** Unique identifier */
  id: string;
  /** Full name */
  name: string;
  /** Job title or role */
  title: string;
  /** Brief biography (2-3 sentences) */
  bio: string;
  /** Photo URL */
  photoSrc?: string;
  /** Alt text for photo */
  photoAlt?: string;
  /** Whether this person is a founder */
  isFounder?: boolean;
  /** Social media or contact links */
  links?: {
    type: 'linkedin' | 'instagram' | 'twitter' | 'email';
    url: string;
  }[];
  /** Years with the restaurant */
  yearsWithRestaurant?: number;
  /** Personal quote */
  quote?: string;
  /** Order for display (lower numbers first) */
  order?: number;
}

/**
 * Sourcing Principle Interface
 * Represents a core philosophy or value in the restaurant's sourcing approach
 */
export interface SourcingPrinciple {
  /** Unique identifier */
  id: string;
  /** Principle title (e.g., "Local First") */
  title: string;
  /** Description of the principle */
  description: string;
  /** SVG icon string or icon name */
  icon?: string;
  /** Statistics or facts to highlight */
  stats?: {
    value: string;
    label: string;
  };
}

/**
 * Ingredient Partnership Interface
 * Represents a supplier, farm, or producer partnership
 */
export interface IngredientPartnership {
  /** Unique identifier */
  id: string;
  /** Partner/supplier name */
  name: string;
  /** Type of partnership */
  type: 'farm' | 'ranch' | 'fishery' | 'bakery' | 'dairy' | 'winery' | 'distillery' | 'artisan' | 'other';
  /** Description of what they provide */
  description: string;
  /** Location (city, state or region) */
  location: string;
  /** Partner logo URL */
  logoSrc?: string;
  /** Photo of the partner/farm */
  photoSrc?: string;
  /** Photo alt text */
  photoAlt?: string;
  /** Featured products or ingredients */
  featuredProducts?: string[];
  /** Website URL */
  website?: string;
  /** Years of partnership */
  yearsPartnership?: number;
  /** Brief quote from the partner */
  quote?: string;
}

/**
 * Timeline Milestone Interface
 * Represents a significant event in the restaurant's history
 */
export interface TimelineMilestone {
  /** Unique identifier */
  id: string;
  /** Year of the milestone */
  year: string;
  /** Milestone title */
  title: string;
  /** Description of what happened */
  description: string;
  /** Optional photo for this milestone */
  photoSrc?: string;
  /** Photo alt text */
  photoAlt?: string;
  /** Icon name or SVG string */
  icon?: string;
  /** Whether this is a major/highlighted milestone */
  isHighlighted?: boolean;
}

/**
 * Founders Story Interface
 * Contains the full narrative content for the founders story section
 */
export interface FoundersStory {
  /** Main heading */
  heading: string;
  /** Subheading or tagline */
  subheading?: string;
  /** The full story text (supports multiple paragraphs) */
  story: string[];
  /** Featured pull quote */
  pullQuote?: string;
  /** Attribution for the pull quote */
  pullQuoteAttribution?: string;
  /** Founder(s) photo */
  photoSrc?: string;
  /** Photo alt text */
  photoAlt?: string;
  /** Year established */
  establishedYear?: string;
}

/**
 * About Page Config Interface
 * Complete configuration for the About page
 */
export interface AboutPageConfig {
  /** Hero section content */
  hero: {
    eyebrow: string;
    headline: string;
    subheadline: string;
  };
  /** Founders story section */
  foundersStory: FoundersStory;
  /** Team members for bios section */
  team: TeamMember[];
  /** Sourcing philosophy principles */
  sourcingPrinciples: SourcingPrinciple[];
  /** Ingredient partnerships */
  partnerships: IngredientPartnership[];
  /** Restaurant history timeline */
  timeline: TimelineMilestone[];
}

/**
 * Team Bios Component Props
 */
export interface TeamBiosProps {
  /** Array of team members to display */
  members: TeamMember[];
  /** Section heading */
  heading?: string;
  /** Section subheading */
  subheading?: string;
  /** Whether to show founders first */
  foundersFirst?: boolean;
  /** Additional CSS classes */
  class?: string;
}

/**
 * Sourcing Philosophy Component Props
 */
export interface SourcingPhilosophyProps {
  /** Array of sourcing principles */
  principles: SourcingPrinciple[];
  /** Section heading */
  heading?: string;
  /** Section subheading */
  subheading?: string;
  /** Introductory paragraph */
  intro?: string;
  /** Additional CSS classes */
  class?: string;
}

/**
 * Partnership Showcase Component Props
 */
export interface PartnershipShowcaseProps {
  /** Array of partnerships */
  partnerships: IngredientPartnership[];
  /** Section heading */
  heading?: string;
  /** Section subheading */
  subheading?: string;
  /** Additional CSS classes */
  class?: string;
}

/**
 * Restaurant Timeline Component Props
 */
export interface RestaurantTimelineProps {
  /** Array of milestones */
  milestones: TimelineMilestone[];
  /** Section heading */
  heading?: string;
  /** Section subheading */
  subheading?: string;
  /** Additional CSS classes */
  class?: string;
}
