/**
 * Cuisine Theme Configuration
 * Defines accent color palettes for different cuisine types.
 *
 * This configuration allows the site to be themed according to the
 * restaurant's cuisine style. Colors are defined both here (for reference)
 * and in variables.css (for CSS custom properties).
 *
 * Available Themes:
 * - Mexican: Warm orange/red palette
 * - BBQ: Smoky red/brown palette
 * - Asian: Jade green palette
 * - Italian: Tomato red palette
 * - Bakery: Pastel pink palette
 * - And more...
 */

import type {
  CuisineTheme,
  CuisineThemeConfig,
  CuisineThemeId,
  CuisineThemeMap,
} from '../types/cuisine-theme';

/**
 * All available cuisine themes with their color definitions.
 * These colors map to CSS custom properties in variables.css.
 */
export const CUISINE_THEMES: CuisineThemeMap = {
  default: {
    id: 'default',
    name: 'Default',
    description: 'Classic restaurant burgundy and terracotta palette',
    colors: {
      primary: '#722f37',  // Deep burgundy
      secondary: '#c4a77d', // Soft terracotta
      accent: '#3c2415',   // Espresso brown
    },
    cssPrefix: '--color-primary',
  },

  mexican: {
    id: 'mexican',
    name: 'Mexican',
    description: 'Warm, vibrant orange and red palette inspired by Mexican cuisine',
    colors: {
      primary: '#e07a3a',  // Terracotta orange (warm orange)
      secondary: '#008b8b', // Teal
      accent: '#8b0000',   // Chile red
    },
    cssPrefix: '--color-cuisine-mexican',
  },

  bbq: {
    id: 'bbq',
    name: 'BBQ',
    description: 'Smoky red and brown palette evoking charred meats and wood smoke',
    colors: {
      primary: '#4a3728',  // Smoky brown
      secondary: '#ff6b35', // Ember orange
      accent: '#ffd700',   // Mustard gold
    },
    cssPrefix: '--color-cuisine-bbq',
  },

  asian: {
    id: 'asian',
    name: 'Asian',
    description: 'Jade green palette with crimson and gold accents',
    colors: {
      primary: '#dc143c',  // Crimson
      secondary: '#ffd700', // Gold
      accent: '#228b22',   // Jade green (forest green)
    },
    cssPrefix: '--color-cuisine-asian',
  },

  italian: {
    id: 'italian',
    name: 'Italian',
    description: 'Tomato red palette with olive green and golden pasta accents',
    colors: {
      primary: '#c4402f',  // Tomato red
      secondary: '#6b8e23', // Olive green
      accent: '#f4d03f',   // Golden pasta
    },
    cssPrefix: '--color-cuisine-italian',
  },

  bakery: {
    id: 'bakery',
    name: 'Bakery',
    description: 'Soft pastel pink palette with warm cream and cocoa accents',
    colors: {
      primary: '#e8b4b8',  // Pastel pink (blush)
      secondary: '#f5e6d3', // Warm cream/vanilla
      accent: '#8b4513',   // Cocoa brown (saddle brown)
    },
    cssPrefix: '--color-cuisine-bakery',
  },

  french: {
    id: 'french',
    name: 'French',
    description: 'Elegant navy blue and gold palette',
    colors: {
      primary: '#1e3a5f',  // French navy
      secondary: '#c9a227', // Gold
      accent: '#8b0000',   // Wine red
    },
    cssPrefix: '--color-cuisine-french',
  },

  japanese: {
    id: 'japanese',
    name: 'Japanese',
    description: 'Serene indigo and cherry blossom palette',
    colors: {
      primary: '#3d5a80',  // Indigo blue
      secondary: '#ffb7c5', // Sakura pink
      accent: '#2d5016',   // Matcha green
    },
    cssPrefix: '--color-cuisine-japanese',
  },

  mediterranean: {
    id: 'mediterranean',
    name: 'Mediterranean',
    description: 'Bright azure blue and olive palette',
    colors: {
      primary: '#1e90ff',  // Azure
      secondary: '#808000', // Olive
      accent: '#ff6347',   // Tomato
    },
    cssPrefix: '--color-cuisine-mediterranean',
  },

  indian: {
    id: 'indian',
    name: 'Indian',
    description: 'Rich saffron and curry spice palette',
    colors: {
      primary: '#ff9933',  // Saffron
      secondary: '#138808', // India green
      accent: '#c41e3a',   // Cardinal red
    },
    cssPrefix: '--color-cuisine-indian',
  },
};

/**
 * Site-wide cuisine theme configuration.
 * Modify `activeTheme` to change the restaurant's color scheme.
 *
 * @example
 * // To change to a BBQ theme, set:
 * activeTheme: 'bbq'
 *
 * @example
 * // To change to a Bakery theme, set:
 * activeTheme: 'bakery'
 */
export const CUISINE_THEME_CONFIG: CuisineThemeConfig = {
  /**
   * The currently active cuisine theme.
   * Change this value to switch the site's color palette.
   *
   * Options: 'default' | 'mexican' | 'bbq' | 'asian' | 'italian' | 'bakery' |
   *          'french' | 'japanese' | 'mediterranean' | 'indian'
   */
  activeTheme: 'default',

  /**
   * Whether to show a theme switcher in the UI.
   * Set to true to allow visitors to change themes.
   */
  allowThemeSwitching: false,

  /**
   * Themes available for selection when theme switching is enabled.
   */
  availableThemes: [
    'default',
    'mexican',
    'bbq',
    'asian',
    'italian',
    'bakery',
  ],

  /**
   * Whether cuisine theme colors should override the primary brand colors.
   * When true, --color-primary-* will be mapped from the cuisine theme.
   */
  applyToPrimary: true,

  /**
   * Whether cuisine theme colors should override the accent colors.
   * When true, --color-accent-* will be mapped from the cuisine theme.
   */
  applyToAccent: true,
};

/**
 * Get the currently active cuisine theme configuration.
 * @returns The active CuisineTheme object
 */
export function getActiveCuisineTheme(): CuisineTheme {
  return CUISINE_THEMES[CUISINE_THEME_CONFIG.activeTheme] || CUISINE_THEMES.default;
}

/**
 * Get a cuisine theme by its ID.
 * @param themeId - The cuisine theme identifier
 * @returns The CuisineTheme object or undefined if not found
 */
export function getCuisineTheme(themeId: CuisineThemeId): CuisineTheme | undefined {
  return CUISINE_THEMES[themeId];
}

/**
 * Get all available cuisine themes.
 * @returns Array of all CuisineTheme objects
 */
export function getAllCuisineThemes(): CuisineTheme[] {
  return Object.values(CUISINE_THEMES);
}

/**
 * Get the list of available themes based on configuration.
 * @returns Array of CuisineTheme objects that are enabled for selection
 */
export function getAvailableCuisineThemes(): CuisineTheme[] {
  return CUISINE_THEME_CONFIG.availableThemes
    .map(id => CUISINE_THEMES[id])
    .filter((theme): theme is CuisineTheme => theme !== undefined);
}

/**
 * Check if a given theme ID is valid.
 * @param themeId - The theme ID to validate
 * @returns true if the theme ID is valid
 */
export function isValidCuisineTheme(themeId: string): themeId is CuisineThemeId {
  return themeId in CUISINE_THEMES;
}
