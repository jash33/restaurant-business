/**
 * Cuisine Theme Types
 * TypeScript definitions for cuisine-specific accent color palettes.
 * These types support the configurable cuisine theme system.
 */

/**
 * Available cuisine theme identifiers.
 * Each identifier maps to a specific color palette defined in variables.css
 */
export type CuisineThemeId =
  | 'default'
  | 'mexican'
  | 'bbq'
  | 'asian'
  | 'italian'
  | 'bakery'
  | 'french'
  | 'japanese'
  | 'mediterranean'
  | 'indian';

/**
 * Color palette definition for a cuisine theme.
 * Each cuisine has a primary, secondary, and accent color.
 */
export interface CuisineColorPalette {
  /** Main brand color for the cuisine theme */
  primary: string;
  /** Secondary/complementary color */
  secondary: string;
  /** Accent color for highlights and CTAs */
  accent: string;
}

/**
 * Complete cuisine theme definition including metadata.
 */
export interface CuisineTheme {
  /** Unique identifier for the theme */
  id: CuisineThemeId;
  /** Display name for the theme */
  name: string;
  /** Brief description of the color palette mood/style */
  description: string;
  /** The color palette for this theme */
  colors: CuisineColorPalette;
  /** CSS variable prefix used for this theme's colors */
  cssPrefix: string;
}

/**
 * Configuration for the site-wide cuisine theme setting.
 */
export interface CuisineThemeConfig {
  /** The currently active cuisine theme */
  activeTheme: CuisineThemeId;
  /** Whether to allow runtime theme switching via UI */
  allowThemeSwitching: boolean;
  /** List of themes available for selection */
  availableThemes: CuisineThemeId[];
  /** Whether to apply theme colors to primary brand colors */
  applyToPrimary: boolean;
  /** Whether to apply theme colors to accent colors */
  applyToAccent: boolean;
}

/**
 * Props for components that need cuisine theme awareness.
 */
export interface CuisineThemeAwareProps {
  /** Override the site-wide cuisine theme for this component */
  cuisineTheme?: CuisineThemeId;
}

/**
 * Map of all available cuisine themes by their ID.
 */
export type CuisineThemeMap = Record<CuisineThemeId, CuisineTheme>;
