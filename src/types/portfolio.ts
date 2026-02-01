/**
 * Portfolio Types
 * Type definitions for portfolio projects and portfolio-related components.
 */

/**
 * Tag category for filtering showcase items
 */
export type TechnologyCategory =
  | 'cuisine'
  | 'technique'
  | 'ingredient'
  | 'experience'
  | 'service'
  | 'ambiance';

/**
 * Showcase type/category
 */
export type ProjectCategory =
  | 'dishes'
  | 'events'
  | 'interiors'
  | 'seasonal'
  | 'catering'
  | 'bar-lounge';

/**
 * Link configuration for project CTAs
 */
export interface ProjectLink {
  /** Text displayed on the link/button */
  text: string;
  /** URL the link points to */
  href: string;
  /** Whether to open in a new tab */
  openInNewTab?: boolean;
  /** Type of link (affects styling/icon) */
  type?: 'live-site' | 'github' | 'case-study';
}

/**
 * Technology tag for displaying project tech stack
 */
export interface TechnologyTag {
  /** Name of the technology */
  name: string;
  /** Optional category for filtering */
  category?: TechnologyCategory;
}

/**
 * Image configuration with responsive/WebP support
 */
export interface ProjectImage {
  /** Main image source */
  src: string;
  /** WebP format source for modern browsers */
  srcWebP?: string;
  /** Alt text for accessibility */
  alt: string;
  /** Width for aspect ratio and lazy loading */
  width?: number;
  /** Height for aspect ratio and lazy loading */
  height?: number;
  /** Placeholder/blur-up image (base64 or low-res) */
  placeholder?: string;
}

/**
 * Represents a single portfolio project
 */
export interface Project {
  /** Unique identifier for the project */
  id: string;
  /** Project title/name */
  title: string;
  /** Brief project description (2-3 sentences) */
  description: string;
  /** Thumbnail image configuration */
  thumbnail: ProjectImage;
  /** Array of technology tags */
  technologies: TechnologyTag[];
  /** Project category for filtering */
  category: ProjectCategory;
  /** Call-to-action links (live site, GitHub, etc.) */
  links?: ProjectLink[];
  /** Whether this is a featured project */
  featured?: boolean;
  /** Project completion date for sorting */
  completedDate?: string;
}

/**
 * Props for the ProjectCard component
 */
export interface ProjectCardProps extends Project {
  /** Additional CSS class names */
  class?: string;
  /** Whether to show the image loading state */
  showLoadingState?: boolean;
}

/**
 * Filter option for portfolio filtering
 */
export interface FilterOption {
  /** Display label */
  label: string;
  /** Filter value */
  value: string;
  /** Number of projects matching this filter */
  count?: number;
}

/**
 * Props for the PortfolioSection component
 */
export interface PortfolioSectionProps {
  /** Section heading text */
  heading?: string;
  /** Section subheading/description text */
  subheading?: string;
  /** Array of projects to display */
  projects: Project[];
  /** Number of columns to display (3 or 4) */
  columns?: 3 | 4;
  /** Optional section ID for anchor links */
  id?: string;
  /** Additional CSS class names */
  class?: string;
  /** Whether to enable filtering */
  enableFiltering?: boolean;
  /** Initial filter value */
  initialFilter?: string;
  /** Whether to show featured projects first */
  showFeaturedFirst?: boolean;
}

/**
 * Available project categories with labels
 */
export const PROJECT_CATEGORIES: FilterOption[] = [
  { label: 'All Showcases', value: 'all' },
  { label: 'Signature Dishes', value: 'dishes' },
  { label: 'Events', value: 'events' },
  { label: 'Interiors', value: 'interiors' },
  { label: 'Seasonal Specials', value: 'seasonal' },
  { label: 'Catering', value: 'catering' },
  { label: 'Bar & Lounge', value: 'bar-lounge' },
];

/**
 * Available tag categories with labels
 */
export const TECHNOLOGY_CATEGORIES: FilterOption[] = [
  { label: 'All Tags', value: 'all' },
  { label: 'Cuisine', value: 'cuisine' },
  { label: 'Technique', value: 'technique' },
  { label: 'Ingredient', value: 'ingredient' },
  { label: 'Experience', value: 'experience' },
  { label: 'Service', value: 'service' },
  { label: 'Ambiance', value: 'ambiance' },
];
