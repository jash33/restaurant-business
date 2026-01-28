/**
 * Image Optimization Configuration for Food Photography
 *
 * Aggressive optimization settings targeting Lighthouse 90+ scores
 * despite image-heavy content. Optimized for food photography with
 * vibrant colors and high detail preservation.
 */

/**
 * Supported image formats in order of preference
 * AVIF offers best compression, WebP is widely supported fallback
 */
export const IMAGE_FORMATS = ['avif', 'webp'] as const;
export type ImageFormat = typeof IMAGE_FORMATS[number];

/**
 * Quality settings optimized for food photography
 * Higher quality to preserve food texture and colors
 */
export const QUALITY_SETTINGS = {
  /** AVIF quality - excellent compression with good quality */
  avif: 80,
  /** WebP quality - balanced for wide browser support */
  webp: 82,
  /** JPEG quality for fallback (legacy browsers) */
  jpeg: 85,
  /** PNG quality for images requiring transparency */
  png: 90,
} as const;

/**
 * Responsive breakpoints for srcset generation
 * Optimized for common device widths and retina displays
 */
export const RESPONSIVE_WIDTHS = [
  320,   // Mobile small
  480,   // Mobile medium
  640,   // Mobile large / tablet small
  768,   // Tablet portrait
  1024,  // Tablet landscape / desktop small
  1280,  // Desktop medium
  1536,  // Desktop large
  1920,  // Full HD
  2560,  // 2K displays (hero images only)
] as const;

/**
 * Image density descriptors for retina support
 */
export const DENSITY_DESCRIPTORS = [1, 1.5, 2, 3] as const;

/**
 * Predefined image presets for common use cases
 */
export const IMAGE_PRESETS = {
  /** Hero images - full width, high quality */
  hero: {
    widths: [768, 1024, 1280, 1536, 1920, 2560],
    sizes: '100vw',
    quality: { avif: 85, webp: 87 },
    loading: 'eager' as const,
    fetchPriority: 'high' as const,
  },

  /** Food photography - high detail, vibrant colors */
  foodPhoto: {
    widths: [480, 640, 768, 1024, 1280, 1536],
    sizes: '(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw',
    quality: { avif: 82, webp: 85 },
    loading: 'lazy' as const,
    fetchPriority: 'auto' as const,
  },

  /** Gallery thumbnails - smaller, optimized for grids */
  thumbnail: {
    widths: [320, 480, 640],
    sizes: '(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw',
    quality: { avif: 75, webp: 78 },
    loading: 'lazy' as const,
    fetchPriority: 'low' as const,
  },

  /** Menu item images - medium size, good detail */
  menuItem: {
    widths: [320, 480, 640, 768],
    sizes: '(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 400px',
    quality: { avif: 80, webp: 82 },
    loading: 'lazy' as const,
    fetchPriority: 'auto' as const,
  },

  /** Chef/team portraits - focused on faces */
  portrait: {
    widths: [320, 480, 640, 768],
    sizes: '(max-width: 640px) 100vw, 300px',
    quality: { avif: 80, webp: 82 },
    loading: 'lazy' as const,
    fetchPriority: 'auto' as const,
  },

  /** Background images - can be more compressed */
  background: {
    widths: [768, 1024, 1280, 1920],
    sizes: '100vw',
    quality: { avif: 70, webp: 72 },
    loading: 'lazy' as const,
    fetchPriority: 'low' as const,
  },
} as const;

export type ImagePreset = keyof typeof IMAGE_PRESETS;

/**
 * Blur-up placeholder configuration
 */
export const PLACEHOLDER_CONFIG = {
  /** Width of the low-quality placeholder image */
  width: 20,
  /** Height maintains aspect ratio automatically */
  quality: 20,
  /** Blur amount in pixels for CSS blur filter */
  blurAmount: 20,
  /** Background color while loading */
  backgroundColor: '#f3f4f6',
} as const;

/**
 * Lazy loading configuration
 */
export const LAZY_LOADING_CONFIG = {
  /** Root margin for Intersection Observer (load before visible) */
  rootMargin: '200px 0px',
  /** Threshold for triggering load (0 = edge of viewport) */
  threshold: 0,
  /** Native lazy loading attribute */
  nativeLazy: true,
} as const;

/**
 * Astro Image service configuration
 * Used in astro.config.mjs
 */
export const ASTRO_IMAGE_CONFIG = {
  /** Use Sharp for image processing (best quality) */
  service: 'sharp',

  /** Default format for generated images */
  defaultFormat: 'webp' as const,

  /** Domains allowed for remote image optimization */
  domains: [],

  /** Remote patterns for external images */
  remotePatterns: [
    {
      protocol: 'https' as const,
      hostname: '**.unsplash.com',
    },
    {
      protocol: 'https' as const,
      hostname: '**.cloudinary.com',
    },
  ],
} as const;

/**
 * Sharp processing options for optimal food photography
 */
export const SHARP_OPTIONS = {
  /** Preserve color accuracy for food images */
  withMetadata: false,

  /** AVIF encoding options */
  avif: {
    quality: QUALITY_SETTINGS.avif,
    effort: 6, // Higher effort = better compression (0-9)
    chromaSubsampling: '4:4:4', // Full color for food photography
  },

  /** WebP encoding options */
  webp: {
    quality: QUALITY_SETTINGS.webp,
    effort: 6,
    smartSubsample: true,
    nearLossless: false,
  },

  /** JPEG fallback options */
  jpeg: {
    quality: QUALITY_SETTINGS.jpeg,
    progressive: true,
    mozjpeg: true, // Use mozjpeg for better compression
    trellisQuantisation: true,
    overshootDeringing: true,
    optimizeScans: true,
  },

  /** PNG options (for images with transparency) */
  png: {
    quality: QUALITY_SETTINGS.png,
    compressionLevel: 9,
    progressive: true,
  },

  /** General resize options */
  resize: {
    fit: 'cover' as const,
    position: 'attention', // Smart crop focusing on interesting areas
    withoutEnlargement: true, // Never upscale
    kernel: 'lanczos3', // High quality resampling
  },
} as const;

/**
 * Get preset configuration by name
 */
export function getPreset(name: ImagePreset) {
  return IMAGE_PRESETS[name];
}

/**
 * Generate sizes attribute from widths array
 */
export function generateSizesAttribute(widths: readonly number[]): string {
  const sorted = [...widths].sort((a, b) => a - b);
  const breakpoints = sorted.slice(0, -1).map((width, index) => {
    return `(max-width: ${width}px) ${sorted[index]}px`;
  });
  breakpoints.push(`${sorted[sorted.length - 1]}px`);
  return breakpoints.join(', ');
}

/**
 * Calculate optimal image dimensions maintaining aspect ratio
 */
export function calculateDimensions(
  originalWidth: number,
  originalHeight: number,
  targetWidth: number
): { width: number; height: number } {
  const aspectRatio = originalWidth / originalHeight;
  return {
    width: targetWidth,
    height: Math.round(targetWidth / aspectRatio),
  };
}

/**
 * Default export for convenience
 */
export default {
  formats: IMAGE_FORMATS,
  quality: QUALITY_SETTINGS,
  widths: RESPONSIVE_WIDTHS,
  presets: IMAGE_PRESETS,
  placeholder: PLACEHOLDER_CONFIG,
  lazyLoading: LAZY_LOADING_CONFIG,
  astroConfig: ASTRO_IMAGE_CONFIG,
  sharpOptions: SHARP_OPTIONS,
};
