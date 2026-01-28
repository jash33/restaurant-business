/**
 * Award TypeScript Type Definitions
 * Types for awards, press mentions, best-of lists, and certifications
 * section showcasing recognition and building credibility.
 */

/**
 * Type of recognition/award
 */
export type AwardType = 'award' | 'press' | 'best-of' | 'certification';

/**
 * Individual award or recognition item
 */
export interface Award {
  /** Unique identifier for the award */
  id: string;
  /** Title of the award or recognition */
  title: string;
  /** Organization or publication that gave the award */
  source: string;
  /** Optional logo URL for the source/publication */
  logoUrl?: string;
  /** Optional alt text for the logo */
  logoAlt?: string;
  /** Type of recognition */
  type: AwardType;
  /** Year the award was received */
  year?: number;
  /** Optional quote or excerpt from the publication */
  quote?: string;
  /** Optional link to the article or certification */
  articleUrl?: string;
  /** Optional description or context */
  description?: string;
  /** Whether this is a featured/highlighted award */
  featured?: boolean;
  /** Badge/icon color for visual distinction */
  badgeColor?: string;
}

/**
 * Props for the AwardCard component
 */
export interface AwardCardProps extends Award {
  /** Additional CSS class */
  class?: string;
  /** Whether to show the logo */
  showLogo?: boolean;
  /** Whether to show the year */
  showYear?: boolean;
  /** Whether to show the quote */
  showQuote?: boolean;
  /** Test ID for e2e testing */
  testId?: string;
}

/**
 * Layout mode for awards display
 */
export type AwardsLayout = 'grid' | 'carousel' | 'list';

/**
 * Props for the AwardsSection component
 */
export interface AwardsSectionProps {
  /** Section heading */
  heading?: string;
  /** Section subheading/description */
  subheading?: string;
  /** Array of awards to display */
  awards: Award[];
  /** Layout mode: grid, carousel, or list */
  layout?: AwardsLayout;
  /** Maximum number of awards to display */
  maxItems?: number;
  /** Whether to show logos */
  showLogos?: boolean;
  /** Whether to show years */
  showYears?: boolean;
  /** Whether to show quotes */
  showQuotes?: boolean;
  /** Section ID for anchor links */
  id?: string;
  /** Additional CSS class */
  class?: string;
  /** Background variant */
  background?: 'default' | 'subtle' | 'primary';
  /** Test ID for e2e testing */
  testId?: string;
}

/**
 * Configuration for awards section
 */
export interface AwardsConfig {
  /** Default section heading */
  defaultHeading: string;
  /** Default section subheading */
  defaultSubheading?: string;
  /** Default layout mode */
  defaultLayout: AwardsLayout;
  /** Default maximum items to show */
  defaultMaxItems: number;
  /** Whether to show logos by default */
  defaultShowLogos: boolean;
  /** Whether to show years by default */
  defaultShowYears: boolean;
  /** Whether to show quotes by default */
  defaultShowQuotes: boolean;
  /** Array of awards */
  awards: Award[];
}

/**
 * Type labels and styling for different award types
 */
export interface AwardTypeInfo {
  label: string;
  color: string;
  icon: string;
}
