
🔧 Tool: Task
Input: {
  "description": "Explore codebase structure",
  "prompt": "Explore this codebase to understand its structure. I need to implement a dismissible banner component for special events, holiday hours, prix fixe menus, and announcements with date-based auto-display/hide logic and persistent dismissal via localStorage.\n\nPlease find:\n1. The overall project structure (what framework is being used - React, Vue, etc.)\n2. How components are organized\n3. Existing component patterns and conventions\n4. How styling is done (CSS modules, styled-components, Tailwind, etc.)\n5. Any existing banner or notification components that could serve as reference\n6. The main layout/app structure where a banner would be added\n\nBe thorough and report back what you find.",
  "subagent_type": "Explore"
}

🔧 Tool: Read
Input: {
  "file_path": "C:\\Users\\James\\Repos\\restaurant-business"
}

🔧 Tool: Read
Input: {
  "file_path": "C:\\Users\\James\\Repos\\restaurant-business\\package.json"
}

🔧 Tool: Glob
Input: {
  "pattern": "**/*.{astro,tsx,jsx,vue}",
  "path": "C:\\Users\\James\\Repos\\restaurant-business"
}

🔧 Tool: Read
Input: {
  "file_path": "C:\\Users\\James\\Repos\\restaurant-business\\astro.config.mjs"
}

🔧 Tool: Read
Input: {
  "file_path": "C:\\Users\\James\\Repos\\restaurant-business\\src\\layouts\\Layout.astro"
}

🔧 Tool: Read
Input: {
  "file_path": "C:\\Users\\James\\Repos\\restaurant-business\\src\\pages\\index.astro"
}

🔧 Tool: Glob
Input: {
  "pattern": "src/**/*",
  "path": "C:\\Users\\James\\Repos\\restaurant-business"
}

🔧 Tool: Read
Input: {
  "file_path": "C:\\Users\\James\\Repos\\restaurant-business\\src\\components\\CookieConsent.astro"
}

🔧 Tool: Read
Input: {
  "file_path": "C:\\Users\\James\\Repos\\restaurant-business\\src\\components\\Header.astro"
}

🔧 Tool: Read
Input: {
  "file_path": "C:\\Users\\James\\Repos\\restaurant-business\\src\\styles\\globals.css"
}

🔧 Tool: Read
Input: {
  "file_path": "C:\\Users\\James\\Repos\\restaurant-business\\src\\styles\\variables.css"
}

🔧 Tool: Read
Input: {
  "file_path": "C:\\Users\\James\\Repos\\restaurant-business\\src\\components\\FloatingHoursBadge.astro"
}

🔧 Tool: Glob
Input: {
  "pattern": "src/components/*.astro",
  "path": "C:\\Users\\James\\Repos\\restaurant-business"
}

🔧 Tool: Read
Input: {
  "file_path": "C:\\Users\\James\\Repos\\restaurant-business\\src\\config\\restaurant.config.ts"
}
Now I have a comprehensive understanding of the codebase. Let me plan and implement the dismissible banner component. Let me start by reading the key reference components and then implementing the feature.

🔧 Tool: Read
Input: {
  "file_path": "/home/user/repos/restaurant-template/src/components/CookieConsent.astro"
}

🔧 Tool: Read
Input: {
  "file_path": "/home/user/repos/restaurant-template/src/layouts/Layout.astro"
}

🔧 Tool: Read
Input: {
  "file_path": "/home/user/repos/restaurant-template/src/styles/variables.css"
}
Let me find the actual location of the project files:

🔧 Tool: Bash
Input: {
  "command": "find /home -type f -name \"*.astro\" 2>/dev/null | head -20",
  "description": "Find Astro files in project"
}

🔧 Tool: Bash
Input: {
  "command": "pwd && ls -la",
  "description": "Check current directory"
}

🔧 Tool: Glob
Input: {
  "pattern": "src/**/*.astro"
}

🔧 Tool: Glob
Input: {
  "pattern": "src/config/**/*.ts"
}

🔧 Tool: Glob
Input: {
  "pattern": "src/styles/**/*.css"
}

🔧 Tool: TodoWrite
Input: {
  "todos": [
    {
      "content": "Read and understand existing components (CookieConsent, Layout, FloatingHoursBadge)",
      "status": "in_progress",
      "activeForm": "Reading existing components for reference patterns"
    },
    {
      "content": "Create banner configuration file",
      "status": "pending",
      "activeForm": "Creating banner configuration file"
    },
    {
      "content": "Create SpecialEventsBanner component",
      "status": "pending",
      "activeForm": "Creating SpecialEventsBanner component"
    },
    {
      "content": "Integrate banner into Layout.astro",
      "status": "pending",
      "activeForm": "Integrating banner into Layout.astro"
    },
    {
      "content": "Create Playwright verification test",
      "status": "pending",
      "activeForm": "Creating Playwright verification test"
    },
    {
      "content": "Run verification test and fix any issues",
      "status": "pending",
      "activeForm": "Running verification test"
    }
  ]
}

🔧 Tool: Read
Input: {
  "file_path": "C:\\Users\\James\\Repos\\restaurant-business\\src\\components\\CookieConsent.astro"
}

🔧 Tool: Read
Input: {
  "file_path": "C:\\Users\\James\\Repos\\restaurant-business\\src\\layouts\\Layout.astro"
}

🔧 Tool: Read
Input: {
  "file_path": "C:\\Users\\James\\Repos\\restaurant-business\\src\\components\\FloatingHoursBadge.astro"
}

🔧 Tool: TodoWrite
Input: {
  "todos": [
    {
      "content": "Read and understand existing components (CookieConsent, Layout, FloatingHoursBadge)",
      "status": "completed",
      "activeForm": "Reading existing components for reference patterns"
    },
    {
      "content": "Create banner configuration file",
      "status": "in_progress",
      "activeForm": "Creating banner configuration file"
    },
    {
      "content": "Create SpecialEventsBanner component",
      "status": "pending",
      "activeForm": "Creating SpecialEventsBanner component"
    },
    {
      "content": "Integrate banner into Layout.astro",
      "status": "pending",
      "activeForm": "Integrating banner into Layout.astro"
    },
    {
      "content": "Create Playwright verification test",
      "status": "pending",
      "activeForm": "Creating Playwright verification test"
    },
    {
      "content": "Run verification test and fix any issues",
      "status": "pending",
      "activeForm": "Running verification test"
    }
  ]
}
Now let me read the styles/variables.css to understand the design system and check for any existing types:

🔧 Tool: Read
Input: {
  "file_path": "C:\\Users\\James\\Repos\\restaurant-business\\src\\styles\\variables.css"
}

🔧 Tool: Glob
Input: {
  "pattern": "src/types/**/*.ts"
}
Excellent! Now I have a complete understanding of the codebase. Let me create the banner configuration file and TypeScript types:

🔧 Tool: Write
Input: {
  "file_path": "C:\\Users\\James\\Repos\\restaurant-business\\src\\types\\special-events-banner.ts",
  "content": "/**\n * Special Events Banner Types\n *\n * Type definitions for the dismissible banner component that displays\n * special events, holiday hours, prix fixe menus, and announcements.\n */\n\n/**\n * Banner type determines the visual style and icon\n */\nexport type BannerType =\n  | 'announcement'\n  | 'holiday-hours'\n  | 'prix-fixe'\n  | 'special-event'\n  | 'closure'\n  | 'promotion';\n\n/**\n * Banner priority determines display order when multiple banners are active\n */\nexport type BannerPriority = 'high' | 'medium' | 'low';\n\n/**\n * Configuration for a single banner/event\n */\nexport interface BannerEvent {\n  /** Unique identifier for the banner (used for localStorage key) */\n  id: string;\n  /** Type of banner - affects styling and icon */\n  type: BannerType;\n  /** Priority level for display ordering */\n  priority: BannerPriority;\n  /** Main headline text */\n  title: string;\n  /** Optional description text */\n  description?: string;\n  /** Optional link URL */\n  linkUrl?: string;\n  /** Optional link text (defaults to \"Learn More\") */\n  linkText?: string;\n  /** Date to start showing the banner (ISO format: YYYY-MM-DD) */\n  startDate: string;\n  /** Date to stop showing the banner (ISO format: YYYY-MM-DD) */\n  endDate: string;\n  /** Whether the banner can be dismissed by the user */\n  dismissible?: boolean;\n  /** Custom background color (overrides type default) */\n  backgroundColor?: string;\n  /** Custom text color (overrides type default) */\n  textColor?: string;\n  /** Custom icon (emoji or SVG path) */\n  icon?: string;\n}\n\n/**\n * Configuration for the Special Events Banner system\n */\nexport interface SpecialEventsBannerConfig {\n  /** Array of banner events to display */\n  events: BannerEvent[];\n  /** Global setting: whether to show close button on all dismissible banners */\n  showCloseButton?: boolean;\n  /** Global setting: whether to persist dismissals across sessions */\n  persistDismissals?: boolean;\n  /** localStorage key prefix for dismissed banners */\n  storageKeyPrefix?: string;\n  /** Maximum number of banners to show simultaneously */\n  maxVisibleBanners?: number;\n}\n\n/**\n * Props for the SpecialEventsBanner component\n */\nexport interface SpecialEventsBannerProps {\n  /** Override the default configuration */\n  config?: Partial<SpecialEventsBannerConfig>;\n  /** Position of the banner */\n  position?: 'top' | 'bottom';\n  /** Additional CSS classes */\n  class?: string;\n  /** Whether the banner should be sticky */\n  sticky?: boolean;\n}\n\n/**\n * State for tracking dismissed banners\n */\nexport interface DismissedBannerState {\n  /** Banner ID */\n  id: string;\n  /** Timestamp when dismissed */\n  dismissedAt: string;\n  /** Whether to keep dismissed across sessions */\n  persistent: boolean;\n}\n"
}

🔧 Tool: Write
Input: {
  "file_path": "C:\\Users\\James\\Repos\\restaurant-business\\src\\config\\special-events-banner.config.ts",
  "content": "/**\n * Special Events Banner Configuration\n *\n * Configure banners for special events, holiday hours, prix fixe menus,\n * and announcements. Banners automatically display/hide based on dates.\n *\n * @example\n * ```ts\n * // Add a new holiday announcement\n * events: [\n *   {\n *     id: 'thanksgiving-2024',\n *     type: 'holiday-hours',\n *     priority: 'high',\n *     title: 'Thanksgiving Hours',\n *     description: 'We will be closed on Thanksgiving Day. Happy Holidays!',\n *     startDate: '2024-11-20',\n *     endDate: '2024-11-28',\n *     dismissible: true,\n *   }\n * ]\n * ```\n */\n\nimport type { SpecialEventsBannerConfig, BannerEvent } from '../types/special-events-banner';\n\n/**\n * Default banner events configuration\n *\n * Add your special events, holiday hours, and announcements here.\n * Events will automatically show/hide based on their start and end dates.\n */\nexport const BANNER_EVENTS: BannerEvent[] = [\n  // Example: Valentine's Day Prix Fixe Menu\n  {\n    id: 'valentines-2025',\n    type: 'prix-fixe',\n    priority: 'high',\n    title: \"Valentine's Day Prix Fixe Menu\",\n    description: 'Join us for a romantic 4-course dining experience. Reservations recommended.',\n    linkUrl: '/menu',\n    linkText: 'View Menu',\n    startDate: '2025-02-01',\n    endDate: '2025-02-14',\n    dismissible: true,\n    icon: '💕',\n  },\n  // Example: Holiday Closure\n  {\n    id: 'new-years-2025',\n    type: 'holiday-hours',\n    priority: 'high',\n    title: \"New Year's Day Hours\",\n    description: 'We will be closed on January 1st. Happy New Year!',\n    startDate: '2024-12-28',\n    endDate: '2025-01-02',\n    dismissible: true,\n    icon: '🎉',\n  },\n  // Example: General Announcement\n  {\n    id: 'summer-hours-2025',\n    type: 'announcement',\n    priority: 'medium',\n    title: 'Summer Hours Now in Effect',\n    description: 'We are now open until 11 PM on Fridays and Saturdays!',\n    startDate: '2025-05-01',\n    endDate: '2025-09-30',\n    dismissible: true,\n  },\n  // Example: Special Event\n  {\n    id: 'live-music-fridays',\n    type: 'special-event',\n    priority: 'medium',\n    title: 'Live Jazz Every Friday',\n    description: 'Join us for live jazz music from 7-10 PM. No cover charge.',\n    linkUrl: '/private-events',\n    linkText: 'Learn More',\n    startDate: '2025-01-01',\n    endDate: '2025-12-31',\n    dismissible: true,\n    icon: '🎷',\n  },\n  // Example: Temporary Closure\n  {\n    id: 'renovation-closure',\n    type: 'closure',\n    priority: 'high',\n    title: 'Temporarily Closed for Renovations',\n    description: 'We are upgrading our space! Reopening January 20th.',\n    startDate: '2025-01-10',\n    endDate: '2025-01-19',\n    dismissible: false,\n  },\n  // Example: Promotion\n  {\n    id: 'happy-hour-promo',\n    type: 'promotion',\n    priority: 'low',\n    title: 'Happy Hour Special',\n    description: '50% off appetizers, 4-6 PM daily.',\n    startDate: '2025-01-01',\n    endDate: '2025-03-31',\n    dismissible: true,\n    icon: '🍹',\n  },\n];\n\n/**\n * Main banner configuration\n */\nexport const SPECIAL_EVENTS_BANNER_CONFIG: SpecialEventsBannerConfig = {\n  events: BANNER_EVENTS,\n  showCloseButton: true,\n  persistDismissals: true,\n  storageKeyPrefix: 'restaurant-banner-dismissed',\n  maxVisibleBanners: 1, // Only show one banner at a time\n};\n\n/**\n * Banner type styling configuration\n * Maps banner types to their default colors and icons\n */\nexport const BANNER_TYPE_STYLES = {\n  announcement: {\n    backgroundColor: 'var(--color-info)',\n    textColor: 'var(--color-text-inverse)',\n    icon: '📢',\n  },\n  'holiday-hours': {\n    backgroundColor: 'var(--color-warning)',\n    textColor: 'var(--color-warning-text)',\n    icon: '🗓️',\n  },\n  'prix-fixe': {\n    backgroundColor: 'var(--color-accent)',\n    textColor: 'var(--color-text-inverse)',\n    icon: '🍽️',\n  },\n  'special-event': {\n    backgroundColor: 'var(--color-primary)',\n    textColor: 'var(--color-text-inverse)',\n    icon: '✨',\n  },\n  closure: {\n    backgroundColor: 'var(--color-error)',\n    textColor: 'var(--color-text-inverse)',\n    icon: '⚠️',\n  },\n  promotion: {\n    backgroundColor: 'var(--color-success)',\n    textColor: 'var(--color-text-inverse)',\n    icon: '🎁',\n  },\n} as const;\n"
}

🔧 Tool: TodoWrite
Input: {
  "todos": [
    {
      "content": "Read and understand existing components (CookieConsent, Layout, FloatingHoursBadge)",
      "status": "completed",
      "activeForm": "Reading existing components for reference patterns"
    },
    {
      "content": "Create banner configuration file and types",
      "status": "completed",
      "activeForm": "Creating banner configuration file"
    },
    {
      "content": "Create SpecialEventsBanner component",
      "status": "in_progress",
      "activeForm": "Creating SpecialEventsBanner component"
    },
    {
      "content": "Integrate banner into Layout.astro",
      "status": "pending",
      "activeForm": "Integrating banner into Layout.astro"
    },
    {
      "content": "Create Playwright verification test",
      "status": "pending",
      "activeForm": "Creating Playwright verification test"
    },
    {
      "content": "Run verification test and fix any issues",
      "status": "pending",
      "activeForm": "Running verification test"
    }
  ]
}
Now let me create the main SpecialEventsBanner component:

🔧 Tool: Write
Input: {
  "file_path": "C:\\Users\\James\\Repos\\restaurant-business\\src\\components\\SpecialEventsBanner.astro",
  "content": "---\n/**\n * Special Events Banner Component\n *\n * A dismissible banner component for displaying special events, holiday hours,\n * prix fixe menus, and announcements with date-based auto-display/hide logic\n * and persistent dismissal via localStorage.\n *\n * Features:\n * - Date-based automatic display/hide\n * - Persistent dismissal state via localStorage\n * - Multiple banner types with distinct styling\n * - Priority-based display ordering\n * - Fully accessible (ARIA, keyboard navigation)\n * - Responsive design\n * - Dark mode support\n * - Reduced motion support\n * - Astro View Transitions compatible\n *\n * @example Basic usage\n * ```astro\n * <SpecialEventsBanner />\n * ```\n *\n * @example With custom configuration\n * ```astro\n * <SpecialEventsBanner\n *   position=\"top\"\n *   sticky={true}\n * />\n * ```\n */\n\nimport type {\n  SpecialEventsBannerProps,\n  BannerEvent,\n  BannerType,\n} from '../types/special-events-banner';\nimport {\n  SPECIAL_EVENTS_BANNER_CONFIG,\n  BANNER_TYPE_STYLES,\n} from '../config/special-events-banner.config';\n\ninterface Props extends SpecialEventsBannerProps {}\n\nconst {\n  config: customConfig = {},\n  position = 'top',\n  class: className = '',\n  sticky = false,\n} = Astro.props;\n\n// Merge custom config with defaults\nconst config = {\n  ...SPECIAL_EVENTS_BANNER_CONFIG,\n  ...customConfig,\n  events: customConfig.events || SPECIAL_EVENTS_BANNER_CONFIG.events,\n};\n\n/**\n * Get today's date in YYYY-MM-DD format\n */\nfunction getTodayString(): string {\n  const now = new Date();\n  const year = now.getFullYear();\n  const month = (now.getMonth() + 1).toString().padStart(2, '0');\n  const day = now.getDate().toString().padStart(2, '0');\n  return `${year}-${month}-${day}`;\n}\n\n/**\n * Check if a date string is within the display range\n */\nfunction isDateInRange(startDate: string, endDate: string): boolean {\n  const today = getTodayString();\n  return today >= startDate && today <= endDate;\n}\n\n/**\n * Get active banners sorted by priority\n */\nfunction getActiveBanners(events: BannerEvent[]): BannerEvent[] {\n  const priorityOrder = { high: 0, medium: 1, low: 2 };\n\n  return events\n    .filter((event) => isDateInRange(event.startDate, event.endDate))\n    .sort((a, b) => priorityOrder[a.priority] - priorityOrder[b.priority])\n    .slice(0, config.maxVisibleBanners || 1);\n}\n\n/**\n * Get style configuration for a banner type\n */\nfunction getBannerStyles(event: BannerEvent) {\n  const typeStyles = BANNER_TYPE_STYLES[event.type];\n  return {\n    backgroundColor: event.backgroundColor || typeStyles.backgroundColor,\n    textColor: event.textColor || typeStyles.textColor,\n    icon: event.icon || typeStyles.icon,\n  };\n}\n\n// Get active banners for server-side rendering\nconst activeBanners = getActiveBanners(config.events);\n\n// Build CSS classes\nconst containerClasses = [\n  'special-events-banner',\n  `special-events-banner--${position}`,\n  sticky && 'special-events-banner--sticky',\n  className,\n].filter(Boolean).join(' ');\n---\n\n{activeBanners.length > 0 && (\n  <div\n    class={containerClasses}\n    role=\"region\"\n    aria-label=\"Special announcements\"\n    data-special-events-banner\n    data-config={JSON.stringify(config)}\n    data-storage-prefix={config.storageKeyPrefix}\n  >\n    {activeBanners.map((event) => {\n      const styles = getBannerStyles(event);\n      const isDismissible = event.dismissible !== false && config.showCloseButton !== false;\n\n      return (\n        <div\n          class={`special-events-banner__item special-events-banner__item--${event.type}`}\n          data-banner-id={event.id}\n          data-dismissible={isDismissible}\n          role=\"alert\"\n          aria-live=\"polite\"\n          style={`--banner-bg: ${styles.backgroundColor}; --banner-text: ${styles.textColor};`}\n        >\n          <div class=\"special-events-banner__container\">\n            {/* Icon */}\n            <span class=\"special-events-banner__icon\" aria-hidden=\"true\">\n              {styles.icon}\n            </span>\n\n            {/* Content */}\n            <div class=\"special-events-banner__content\">\n              <span class=\"special-events-banner__title\">\n                {event.title}\n              </span>\n\n              {event.description && (\n                <span class=\"special-events-banner__description\">\n                  {event.description}\n                </span>\n              )}\n\n              {event.linkUrl && (\n                <a\n                  href={event.linkUrl}\n                  class=\"special-events-banner__link\"\n                >\n                  {event.linkText || 'Learn More'}\n                  <svg\n                    class=\"special-events-banner__link-icon\"\n                    xmlns=\"http://www.w3.org/2000/svg\"\n                    viewBox=\"0 0 20 20\"\n                    fill=\"currentColor\"\n                    aria-hidden=\"true\"\n                  >\n                    <path\n                      fill-rule=\"evenodd\"\n                      d=\"M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z\"\n                      clip-rule=\"evenodd\"\n                    />\n                  </svg>\n                </a>\n              )}\n            </div>\n\n            {/* Close Button */}\n            {isDismissible && (\n              <button\n                type=\"button\"\n                class=\"special-events-banner__close\"\n                aria-label={`Dismiss ${event.title} announcement`}\n                data-dismiss-banner={event.id}\n              >\n                <svg\n                  xmlns=\"http://www.w3.org/2000/svg\"\n                  viewBox=\"0 0 20 20\"\n                  fill=\"currentColor\"\n                  aria-hidden=\"true\"\n                >\n                  <path d=\"M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z\" />\n                </svg>\n              </button>\n            )}\n          </div>\n        </div>\n      );\n    })}\n  </div>\n)}\n\n<style>\n  /* =================================================================\n   * SPECIAL EVENTS BANNER - BASE STYLES\n   * ================================================================= */\n  .special-events-banner {\n    width: 100%;\n    z-index: var(--z-toast, 800);\n  }\n\n  .special-events-banner--top {\n    /* Positioned above content */\n  }\n\n  .special-events-banner--bottom {\n    /* Bottom positioning handled by container */\n  }\n\n  .special-events-banner--sticky {\n    position: sticky;\n    top: 0;\n  }\n\n  /* =================================================================\n   * BANNER ITEM\n   * ================================================================= */\n  .special-events-banner__item {\n    background-color: var(--banner-bg, var(--color-primary));\n    color: var(--banner-text, var(--color-text-inverse));\n    padding: var(--spacing-3) var(--spacing-4);\n    position: relative;\n    overflow: hidden;\n\n    /* Animation */\n    animation: banner-slide-in var(--animation-duration-normal, 300ms) var(--ease-out, ease-out) forwards;\n  }\n\n  @keyframes banner-slide-in {\n    from {\n      opacity: 0;\n      transform: translateY(-100%);\n    }\n    to {\n      opacity: 1;\n      transform: translateY(0);\n    }\n  }\n\n  .special-events-banner--bottom .special-events-banner__item {\n    animation-name: banner-slide-in-bottom;\n  }\n\n  @keyframes banner-slide-in-bottom {\n    from {\n      opacity: 0;\n      transform: translateY(100%);\n    }\n    to {\n      opacity: 1;\n      transform: translateY(0);\n    }\n  }\n\n  /* Hidden state for dismissed banners */\n  .special-events-banner__item[data-dismissed=\"true\"] {\n    display: none;\n  }\n\n  /* =================================================================\n   * BANNER CONTAINER (Inner layout)\n   * ================================================================= */\n  .special-events-banner__container {\n    max-width: var(--container-7xl, 80rem);\n    margin: 0 auto;\n    display: flex;\n    align-items: center;\n    gap: var(--spacing-3);\n    flex-wrap: wrap;\n  }\n\n  @media (min-width: 768px) {\n    .special-events-banner__container {\n      flex-wrap: nowrap;\n      gap: var(--spacing-4);\n    }\n  }\n\n  /* =================================================================\n   * ICON\n   * ================================================================= */\n  .special-events-banner__icon {\n    font-size: var(--font-size-xl, 1.5rem);\n    flex-shrink: 0;\n    line-height: 1;\n  }\n\n  /* =================================================================\n   * CONTENT\n   * ================================================================= */\n  .special-events-banner__content {\n    flex: 1;\n    display: flex;\n    flex-wrap: wrap;\n    align-items: center;\n    gap: var(--spacing-1) var(--spacing-3);\n    min-width: 0; /* Allow text truncation */\n  }\n\n  .special-events-banner__title {\n    font-weight: var(--font-weight-semibold, 600);\n    font-size: var(--font-size-sm, 0.875rem);\n    white-space: nowrap;\n  }\n\n  .special-events-banner__description {\n    font-size: var(--font-size-sm, 0.875rem);\n    opacity: 0.9;\n    /* Allow text to wrap on mobile, truncate on desktop */\n  }\n\n  @media (min-width: 768px) {\n    .special-events-banner__description {\n      white-space: nowrap;\n      overflow: hidden;\n      text-overflow: ellipsis;\n    }\n  }\n\n  /* =================================================================\n   * LINK\n   * ================================================================= */\n  .special-events-banner__link {\n    display: inline-flex;\n    align-items: center;\n    gap: var(--spacing-1);\n    font-size: var(--font-size-sm, 0.875rem);\n    font-weight: var(--font-weight-medium, 500);\n    color: inherit;\n    text-decoration: none;\n    white-space: nowrap;\n    padding: var(--spacing-1) var(--spacing-2);\n    margin-left: auto;\n    background: rgba(255, 255, 255, 0.15);\n    border-radius: var(--radius-md, 0.375rem);\n    transition: background-color var(--duration-150, 150ms) var(--ease-in-out, ease-in-out);\n  }\n\n  .special-events-banner__link:hover {\n    background: rgba(255, 255, 255, 0.25);\n  }\n\n  .special-events-banner__link:focus-visible {\n    outline: 2px solid currentColor;\n    outline-offset: 2px;\n  }\n\n  .special-events-banner__link-icon {\n    width: 16px;\n    height: 16px;\n    flex-shrink: 0;\n  }\n\n  /* =================================================================\n   * CLOSE BUTTON\n   * ================================================================= */\n  .special-events-banner__close {\n    flex-shrink: 0;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    width: 28px;\n    height: 28px;\n    padding: 0;\n    background: rgba(255, 255, 255, 0.15);\n    border: none;\n    border-radius: var(--radius-md, 0.375rem);\n    color: inherit;\n    cursor: pointer;\n    transition: background-color var(--duration-150, 150ms) var(--ease-in-out, ease-in-out);\n  }\n\n  .special-events-banner__close:hover {\n    background: rgba(255, 255, 255, 0.25);\n  }\n\n  .special-events-banner__close:focus-visible {\n    outline: 2px solid currentColor;\n    outline-offset: 2px;\n  }\n\n  .special-events-banner__close svg {\n    width: 16px;\n    height: 16px;\n  }\n\n  /* =================================================================\n   * BANNER TYPE VARIANTS\n   * ================================================================= */\n\n  /* Announcement - Info blue */\n  .special-events-banner__item--announcement {\n    background: linear-gradient(135deg, var(--color-info, #3b82f6) 0%, var(--color-info-dark, #2563eb) 100%);\n  }\n\n  /* Holiday Hours - Warning amber */\n  .special-events-banner__item--holiday-hours {\n    background: linear-gradient(135deg, var(--color-warning, #f59e0b) 0%, var(--color-warning-dark, #d97706) 100%);\n    color: var(--color-warning-text, #92400e);\n  }\n\n  .special-events-banner__item--holiday-hours .special-events-banner__link,\n  .special-events-banner__item--holiday-hours .special-events-banner__close {\n    background: rgba(0, 0, 0, 0.1);\n  }\n\n  .special-events-banner__item--holiday-hours .special-events-banner__link:hover,\n  .special-events-banner__item--holiday-hours .special-events-banner__close:hover {\n    background: rgba(0, 0, 0, 0.15);\n  }\n\n  /* Prix Fixe - Accent purple */\n  .special-events-banner__item--prix-fixe {\n    background: linear-gradient(135deg, var(--color-accent, #8b5cf6) 0%, var(--color-accent-dark, #7c3aed) 100%);\n  }\n\n  /* Special Event - Primary brand */\n  .special-events-banner__item--special-event {\n    background: linear-gradient(135deg, var(--color-primary-500, #365395) 0%, var(--color-primary-700, #284182) 100%);\n  }\n\n  /* Closure - Error red */\n  .special-events-banner__item--closure {\n    background: linear-gradient(135deg, var(--color-error, #ef4444) 0%, var(--color-error-dark, #dc2626) 100%);\n  }\n\n  /* Promotion - Success green */\n  .special-events-banner__item--promotion {\n    background: linear-gradient(135deg, var(--color-success, #10b981) 0%, var(--color-success-dark, #059669) 100%);\n  }\n\n  /* =================================================================\n   * RESPONSIVE STYLES\n   * ================================================================= */\n  @media (max-width: 640px) {\n    .special-events-banner__item {\n      padding: var(--spacing-2-5) var(--spacing-3);\n    }\n\n    .special-events-banner__icon {\n      font-size: var(--font-size-lg, 1.25rem);\n    }\n\n    .special-events-banner__title {\n      font-size: var(--font-size-xs, 0.75rem);\n    }\n\n    .special-events-banner__description {\n      font-size: var(--font-size-xs, 0.75rem);\n      width: 100%;\n      white-space: normal;\n    }\n\n    .special-events-banner__link {\n      font-size: var(--font-size-xs, 0.75rem);\n      margin-left: 0;\n      margin-top: var(--spacing-1);\n    }\n\n    .special-events-banner__content {\n      flex-direction: column;\n      align-items: flex-start;\n    }\n  }\n\n  /* =================================================================\n   * REDUCED MOTION\n   * ================================================================= */\n  @media (prefers-reduced-motion: reduce) {\n    .special-events-banner__item {\n      animation: none;\n      opacity: 1;\n      transform: none;\n    }\n\n    .special-events-banner__link,\n    .special-events-banner__close {\n      transition: none;\n    }\n  }\n\n  /* =================================================================\n   * DARK MODE\n   * ================================================================= */\n  :global(html[data-theme=\"dark\"]) .special-events-banner__item--holiday-hours {\n    color: var(--color-text-primary, #f8fafc);\n  }\n\n  :global(html[data-theme=\"dark\"]) .special-events-banner__item--holiday-hours .special-events-banner__link,\n  :global(html[data-theme=\"dark\"]) .special-events-banner__item--holiday-hours .special-events-banner__close {\n    background: rgba(255, 255, 255, 0.15);\n  }\n\n  :global(html[data-theme=\"dark\"]) .special-events-banner__item--holiday-hours .special-events-banner__link:hover,\n  :global(html[data-theme=\"dark\"]) .special-events-banner__item--holiday-hours .special-events-banner__close:hover {\n    background: rgba(255, 255, 255, 0.25);\n  }\n\n  /* =================================================================\n   * HIGH CONTRAST MODE\n   * ================================================================= */\n  @media (forced-colors: active) {\n    .special-events-banner__item {\n      background: Canvas;\n      border: 2px solid CanvasText;\n      color: CanvasText;\n    }\n\n    .special-events-banner__link,\n    .special-events-banner__close {\n      background: transparent;\n      border: 1px solid CanvasText;\n    }\n  }\n\n  /* =================================================================\n   * PRINT STYLES\n   * ================================================================= */\n  @media print {\n    .special-events-banner {\n      display: none;\n    }\n  }\n</style>\n\n<script>\n  /**\n   * Special Events Banner Client-Side Logic\n   * Handles dismissal, localStorage persistence, and date-based visibility\n   */\n\n  interface BannerConfig {\n    storageKeyPrefix: string;\n    persistDismissals: boolean;\n  }\n\n  interface DismissedState {\n    id: string;\n    dismissedAt: string;\n  }\n\n  class SpecialEventsBannerController {\n    private container: HTMLElement;\n    private config: BannerConfig;\n\n    constructor(container: HTMLElement) {\n      const configStr = container.dataset.config || '{}';\n      const parsedConfig = JSON.parse(configStr);\n\n      this.container = container;\n      this.config = {\n        storageKeyPrefix: container.dataset.storagePrefix || 'restaurant-banner-dismissed',\n        persistDismissals: parsedConfig.persistDismissals !== false,\n      };\n\n      this.initialize();\n    }\n\n    private initialize(): void {\n      // Check for previously dismissed banners\n      this.restoreDismissedState();\n\n      // Attach event listeners\n      this.attachEventListeners();\n    }\n\n    /**\n     * Get the localStorage key for a banner\n     */\n    private getStorageKey(bannerId: string): string {\n      return `${this.config.storageKeyPrefix}-${bannerId}`;\n    }\n\n    /**\n     * Check if a banner was previously dismissed\n     */\n    private isDismissed(bannerId: string): boolean {\n      if (!this.config.persistDismissals) {\n        return false;\n      }\n\n      try {\n        const stored = localStorage.getItem(this.getStorageKey(bannerId));\n        if (!stored) return false;\n\n        const state: DismissedState = JSON.parse(stored);\n        return state.id === bannerId;\n      } catch {\n        return false;\n      }\n    }\n\n    /**\n     * Mark a banner as dismissed\n     */\n    private dismissBanner(bannerId: string): void {\n      const bannerItem = this.container.querySelector(\n        `[data-banner-id=\"${bannerId}\"]`\n      ) as HTMLElement | null;\n\n      if (!bannerItem) return;\n\n      // Animate out\n      bannerItem.style.transition = 'opacity 200ms ease-out, transform 200ms ease-out';\n      bannerItem.style.opacity = '0';\n      bannerItem.style.transform = 'translateY(-100%)';\n\n      // After animation, hide and persist\n      setTimeout(() => {\n        bannerItem.setAttribute('data-dismissed', 'true');\n\n        // Persist to localStorage\n        if (this.config.persistDismissals) {\n          try {\n            const state: DismissedState = {\n              id: bannerId,\n              dismissedAt: new Date().toISOString(),\n            };\n            localStorage.setItem(this.getStorageKey(bannerId), JSON.stringify(state));\n          } catch {\n            // localStorage might be unavailable\n          }\n        }\n\n        // Announce to screen readers\n        this.announceToScreenReader(`${bannerId} announcement dismissed`);\n\n        // Check if all banners are dismissed\n        this.checkAllDismissed();\n      }, 200);\n    }\n\n    /**\n     * Restore dismissed state from localStorage\n     */\n    private restoreDismissedState(): void {\n      const bannerItems = this.container.querySelectorAll('[data-banner-id]');\n\n      bannerItems.forEach((item) => {\n        const bannerId = (item as HTMLElement).dataset.bannerId;\n        if (bannerId && this.isDismissed(bannerId)) {\n          (item as HTMLElement).setAttribute('data-dismissed', 'true');\n        }\n      });\n\n      this.checkAllDismissed();\n    }\n\n    /**\n     * Check if all banners are dismissed and hide container\n     */\n    private checkAllDismissed(): void {\n      const visibleBanners = this.container.querySelectorAll(\n        '[data-banner-id]:not([data-dismissed=\"true\"])'\n      );\n\n      if (visibleBanners.length === 0) {\n        this.container.style.display = 'none';\n      }\n    }\n\n    /**\n     * Attach event listeners for dismiss buttons\n     */\n    private attachEventListeners(): void {\n      // Dismiss button clicks\n      this.container.addEventListener('click', (event) => {\n        const target = event.target as HTMLElement;\n        const dismissButton = target.closest('[data-dismiss-banner]');\n\n        if (dismissButton) {\n          const bannerId = (dismissButton as HTMLElement).dataset.dismissBanner;\n          if (bannerId) {\n            this.dismissBanner(bannerId);\n          }\n        }\n      });\n\n      // Keyboard handling\n      this.container.addEventListener('keydown', (event) => {\n        const target = event.target as HTMLElement;\n\n        // Close on Escape when focused on dismiss button\n        if (event.key === 'Escape' && target.dataset.dismissBanner) {\n          const bannerId = target.dataset.dismissBanner;\n          if (bannerId) {\n            this.dismissBanner(bannerId);\n          }\n        }\n      });\n    }\n\n    /**\n     * Announce to screen readers\n     */\n    private announceToScreenReader(message: string): void {\n      const announcer = document.createElement('div');\n      announcer.setAttribute('role', 'status');\n      announcer.setAttribute('aria-live', 'polite');\n      announcer.setAttribute('aria-atomic', 'true');\n      announcer.className = 'sr-only';\n      announcer.textContent = message;\n\n      document.body.appendChild(announcer);\n\n      setTimeout(() => {\n        document.body.removeChild(announcer);\n      }, 1000);\n    }\n  }\n\n  // Store instances for cleanup\n  const instances = new Map<HTMLElement, SpecialEventsBannerController>();\n\n  // Initialize all banner containers\n  function initBanners(): void {\n    // Clean up existing instances\n    instances.clear();\n\n    // Initialize new instances\n    const containers = document.querySelectorAll('[data-special-events-banner]');\n    containers.forEach((container) => {\n      const instance = new SpecialEventsBannerController(container as HTMLElement);\n      instances.set(container as HTMLElement, instance);\n    });\n  }\n\n  // Initialize when DOM is ready\n  if (document.readyState === 'loading') {\n    document.addEventListener('DOMContentLoaded', initBanners);\n  } else {\n    initBanners();\n  }\n\n  // Re-initialize on Astro page transitions\n  document.addEventListener('astro:page-load', initBanners);\n</script>\n"
}

🔧 Tool: TodoWrite
Input: {
  "todos": [
    {
      "content": "Read and understand existing components (CookieConsent, Layout, FloatingHoursBadge)",
      "status": "completed",
      "activeForm": "Reading existing components for reference patterns"
    },
    {
      "content": "Create banner configuration file and types",
      "status": "completed",
      "activeForm": "Creating banner configuration file"
    },
    {
      "content": "Create SpecialEventsBanner component",
      "status": "completed",
      "activeForm": "Creating SpecialEventsBanner component"
    },
    {
      "content": "Integrate banner into Layout.astro",
      "status": "in_progress",
      "activeForm": "Integrating banner into Layout.astro"
    },
    {
      "content": "Create Playwright verification test",
      "status": "pending",
      "activeForm": "Creating Playwright verification test"
    },
    {
      "content": "Run verification test and fix any issues",
      "status": "pending",
      "activeForm": "Running verification test"
    }
  ]
}
Now let me integrate the banner into the Layout.astro:

🔧 Tool: Read
Input: {
  "file_path": "C:\\Users\\James\\Repos\\restaurant-business\\src\\layouts\\Layout.astro"
}

🔧 Tool: Edit
Input: {
  "file_path": "C:\\Users\\James\\Repos\\restaurant-business\\src\\layouts\\Layout.astro",
  "old_string": "import SEO from '../components/SEO.astro';\nimport Header from '../components/Header.astro';\nimport Footer from '../components/Footer.astro';\nimport GoogleAnalytics from '../components/GoogleAnalytics.astro';\nimport CookieConsent from '../components/CookieConsent.astro';\nimport PerformanceMonitor from '../components/PerformanceMonitor.astro';\nimport type { SEOProps } from '../types/seo';\nimport { seoConfig } from '../config/seo.config';\nimport { CUISINE_THEME_CONFIG } from '../config/cuisine-theme.config';",
  "new_string": "import SEO from '../components/SEO.astro';\nimport Header from '../components/Header.astro';\nimport Footer from '../components/Footer.astro';\nimport GoogleAnalytics from '../components/GoogleAnalytics.astro';\nimport CookieConsent from '../components/CookieConsent.astro';\nimport PerformanceMonitor from '../components/PerformanceMonitor.astro';\nimport SpecialEventsBanner from '../components/SpecialEventsBanner.astro';\nimport type { SEOProps } from '../types/seo';\nimport { seoConfig } from '../config/seo.config';\nimport { CUISINE_THEME_CONFIG } from '../config/cuisine-theme.config';"
}

🔧 Tool: Edit
Input: {
  "file_path": "C:\\Users\\James\\Repos\\restaurant-business\\src\\layouts\\Layout.astro",
  "old_string": "\t<body class={bodyClass}>\n\t\t<a href=\"#main-content\" class=\"skip-link\">Skip to main content</a>\n\t\t<Header currentPath={Astro.url.pathname} />\n\t\t<div id=\"main-content\">",
  "new_string": "\t<body class={bodyClass}>\n\t\t<a href=\"#main-content\" class=\"skip-link\">Skip to main content</a>\n\t\t<!-- Special Events Banner (holiday hours, announcements, etc.) -->\n\t\t<SpecialEventsBanner position=\"top\" />\n\t\t<Header currentPath={Astro.url.pathname} />\n\t\t<div id=\"main-content\">"
}

🔧 Tool: TodoWrite
Input: {
  "todos": [
    {
      "content": "Read and understand existing components (CookieConsent, Layout, FloatingHoursBadge)",
      "status": "completed",
      "activeForm": "Reading existing components for reference patterns"
    },
    {
      "content": "Create banner configuration file and types",
      "status": "completed",
      "activeForm": "Creating banner configuration file"
    },
    {
      "content": "Create SpecialEventsBanner component",
      "status": "completed",
      "activeForm": "Creating SpecialEventsBanner component"
    },
    {
      "content": "Integrate banner into Layout.astro",
      "status": "completed",
      "activeForm": "Integrating banner into Layout.astro"
    },
    {
      "content": "Create Playwright verification test",
      "status": "in_progress",
      "activeForm": "Creating Playwright verification test"
    },
    {
      "content": "Run verification test and fix any issues",
      "status": "pending",
      "activeForm": "Running verification test"
    }
  ]
}
Now let me check the Playwright configuration and create a verification test:

🔧 Tool: Read
Input: {
  "file_path": "C:\\Users\\James\\Repos\\restaurant-business\\playwright.config.ts"
}

🔧 Tool: Glob
Input: {
  "pattern": "tests/**/*.spec.ts"
}

🔧 Tool: Read
Input: {
  "file_path": "C:\\Users\\James\\Repos\\restaurant-business\\tests\\menu-category-section-verification.spec.ts"
}
Now I'll create a verification test for the Special Events Banner. First, let me update the config to have an active banner for testing:

🔧 Tool: Read
Input: {
  "file_path": "C:\\Users\\James\\Repos\\restaurant-business\\src\\config\\special-events-banner.config.ts"
}
The config has events but the dates may not be current. Let me update the config to add a test-specific event that will always show, and create the verification test:

🔧 Tool: Edit
Input: {
  "file_path": "C:\\Users\\James\\Repos\\restaurant-business\\src\\config\\special-events-banner.config.ts",
  "old_string": "export const BANNER_EVENTS: BannerEvent[] = [\n  // Example: Valentine's Day Prix Fixe Menu\n  {\n    id: 'valentines-2025',\n    type: 'prix-fixe',\n    priority: 'high',\n    title: \"Valentine's Day Prix Fixe Menu\",\n    description: 'Join us for a romantic 4-course dining experience. Reservations recommended.',\n    linkUrl: '/menu',\n    linkText: 'View Menu',\n    startDate: '2025-02-01',\n    endDate: '2025-02-14',\n    dismissible: true,\n    icon: '💕',\n  },\n  // Example: Holiday Closure\n  {\n    id: 'new-years-2025',\n    type: 'holiday-hours',\n    priority: 'high',\n    title: \"New Year's Day Hours\",\n    description: 'We will be closed on January 1st. Happy New Year!',\n    startDate: '2024-12-28',\n    endDate: '2025-01-02',\n    dismissible: true,\n    icon: '🎉',\n  },",
  "new_string": "export const BANNER_EVENTS: BannerEvent[] = [\n  // Active test banner - always visible for testing/demo purposes\n  // Update or remove this for production\n  {\n    id: 'welcome-announcement',\n    type: 'announcement',\n    priority: 'high',\n    title: 'Welcome to Our Restaurant',\n    description: 'Experience our award-winning cuisine and exceptional service.',\n    linkUrl: '/menu',\n    linkText: 'View Menu',\n    startDate: '2024-01-01',\n    endDate: '2030-12-31',\n    dismissible: true,\n    icon: '🍽️',\n  },\n  // Example: Valentine's Day Prix Fixe Menu\n  {\n    id: 'valentines-2025',\n    type: 'prix-fixe',\n    priority: 'high',\n    title: \"Valentine's Day Prix Fixe Menu\",\n    description: 'Join us for a romantic 4-course dining experience. Reservations recommended.',\n    linkUrl: '/menu',\n    linkText: 'View Menu',\n    startDate: '2025-02-01',\n    endDate: '2025-02-14',\n    dismissible: true,\n    icon: '💕',\n  },\n  // Example: Holiday Closure\n  {\n    id: 'new-years-2025',\n    type: 'holiday-hours',\n    priority: 'high',\n    title: \"New Year's Day Hours\",\n    description: 'We will be closed on January 1st. Happy New Year!',\n    startDate: '2024-12-28',\n    endDate: '2025-01-02',\n    dismissible: true,\n    icon: '🎉',\n  },"
}
Now let me create the Playwright verification test:

🔧 Tool: Write
Input: {
  "file_path": "C:\\Users\\James\\Repos\\restaurant-business\\tests\\special-events-banner-verification.spec.ts",
  "content": "/**\n * Special Events Banner Verification Test\n * Temporary test file to verify the SpecialEventsBanner feature works correctly.\n * This file should be deleted after verification.\n */\n\nimport { test, expect } from '@playwright/test';\n\ntest.describe('SpecialEventsBanner Feature Verification', () => {\n  test.beforeEach(async ({ page, context }) => {\n    // Clear localStorage before each test to ensure fresh state\n    await context.clearCookies();\n    await page.goto('/');\n    await page.evaluate(() => {\n      // Clear all banner dismissal keys\n      Object.keys(localStorage).forEach((key) => {\n        if (key.startsWith('restaurant-banner-dismissed')) {\n          localStorage.removeItem(key);\n        }\n      });\n    });\n    // Reload to apply cleared state\n    await page.reload();\n  });\n\n  test('should render the banner on the homepage', async ({ page }) => {\n    // Check that the banner container exists\n    const bannerContainer = page.locator('[data-special-events-banner]');\n    await expect(bannerContainer).toBeVisible();\n\n    // Check that at least one banner item is visible\n    const bannerItem = page.locator('.special-events-banner__item');\n    await expect(bannerItem.first()).toBeVisible();\n  });\n\n  test('should display banner with correct content', async ({ page }) => {\n    const bannerItem = page.locator('.special-events-banner__item').first();\n\n    // Check for title\n    const title = bannerItem.locator('.special-events-banner__title');\n    await expect(title).toBeVisible();\n    const titleText = await title.textContent();\n    expect(titleText?.length).toBeGreaterThan(0);\n\n    // Check for icon\n    const icon = bannerItem.locator('.special-events-banner__icon');\n    await expect(icon).toBeVisible();\n  });\n\n  test('should display banner description when provided', async ({ page }) => {\n    const bannerItem = page.locator('.special-events-banner__item').first();\n\n    // Check for description (optional but should be present for test banner)\n    const description = bannerItem.locator('.special-events-banner__description');\n    const descriptionCount = await description.count();\n\n    if (descriptionCount > 0) {\n      await expect(description).toBeVisible();\n    }\n  });\n\n  test('should display link when provided', async ({ page }) => {\n    const bannerItem = page.locator('.special-events-banner__item').first();\n\n    // Check for link (optional but should be present for test banner)\n    const link = bannerItem.locator('.special-events-banner__link');\n    const linkCount = await link.count();\n\n    if (linkCount > 0) {\n      await expect(link).toBeVisible();\n      await expect(link).toHaveAttribute('href');\n    }\n  });\n\n  test('should have a close button for dismissible banners', async ({ page }) => {\n    const bannerItem = page.locator('.special-events-banner__item[data-dismissible=\"true\"]').first();\n    const bannerCount = await bannerItem.count();\n\n    if (bannerCount > 0) {\n      const closeButton = bannerItem.locator('.special-events-banner__close');\n      await expect(closeButton).toBeVisible();\n      await expect(closeButton).toHaveAttribute('aria-label');\n    }\n  });\n\n  test('should dismiss banner when close button is clicked', async ({ page }) => {\n    // Find a dismissible banner\n    const bannerItem = page.locator('.special-events-banner__item[data-dismissible=\"true\"]').first();\n    const bannerCount = await bannerItem.count();\n\n    if (bannerCount > 0) {\n      const closeButton = bannerItem.locator('.special-events-banner__close');\n\n      // Click the close button\n      await closeButton.click();\n\n      // Wait for dismiss animation\n      await page.waitForTimeout(300);\n\n      // Banner should be hidden\n      await expect(bannerItem).toHaveAttribute('data-dismissed', 'true');\n    }\n  });\n\n  test('should persist dismissal in localStorage', async ({ page }) => {\n    // Find a dismissible banner\n    const bannerItem = page.locator('.special-events-banner__item[data-dismissible=\"true\"]').first();\n    const bannerCount = await bannerItem.count();\n\n    if (bannerCount > 0) {\n      // Get the banner ID\n      const bannerId = await bannerItem.getAttribute('data-banner-id');\n      expect(bannerId).toBeTruthy();\n\n      const closeButton = bannerItem.locator('.special-events-banner__close');\n\n      // Click the close button\n      await closeButton.click();\n\n      // Wait for dismiss animation\n      await page.waitForTimeout(300);\n\n      // Check localStorage\n      const storageValue = await page.evaluate((id) => {\n        return localStorage.getItem(`restaurant-banner-dismissed-${id}`);\n      }, bannerId);\n\n      expect(storageValue).toBeTruthy();\n      const parsed = JSON.parse(storageValue as string);\n      expect(parsed.id).toBe(bannerId);\n    }\n  });\n\n  test('should stay dismissed after page reload', async ({ page }) => {\n    // Find a dismissible banner\n    const bannerItem = page.locator('.special-events-banner__item[data-dismissible=\"true\"]').first();\n    const bannerCount = await bannerItem.count();\n\n    if (bannerCount > 0) {\n      // Get the banner ID\n      const bannerId = await bannerItem.getAttribute('data-banner-id');\n\n      const closeButton = bannerItem.locator('.special-events-banner__close');\n\n      // Click the close button\n      await closeButton.click();\n\n      // Wait for dismiss animation\n      await page.waitForTimeout(300);\n\n      // Reload the page\n      await page.reload();\n\n      // Banner should still be dismissed\n      const reloadedBanner = page.locator(`[data-banner-id=\"${bannerId}\"]`);\n      const reloadedCount = await reloadedBanner.count();\n\n      if (reloadedCount > 0) {\n        await expect(reloadedBanner).toHaveAttribute('data-dismissed', 'true');\n      }\n    }\n  });\n\n  test('should be accessible with proper ARIA attributes', async ({ page }) => {\n    // Check banner container\n    const bannerContainer = page.locator('[data-special-events-banner]');\n    await expect(bannerContainer).toHaveAttribute('role', 'region');\n    await expect(bannerContainer).toHaveAttribute('aria-label', 'Special announcements');\n\n    // Check banner item\n    const bannerItem = page.locator('.special-events-banner__item').first();\n    await expect(bannerItem).toHaveAttribute('role', 'alert');\n    await expect(bannerItem).toHaveAttribute('aria-live', 'polite');\n  });\n\n  test('should have keyboard accessible close button', async ({ page }) => {\n    // Find a dismissible banner\n    const bannerItem = page.locator('.special-events-banner__item[data-dismissible=\"true\"]').first();\n    const bannerCount = await bannerItem.count();\n\n    if (bannerCount > 0) {\n      const closeButton = bannerItem.locator('.special-events-banner__close');\n\n      // Focus the close button\n      await closeButton.focus();\n\n      // Check it's focusable\n      await expect(closeButton).toBeFocused();\n\n      // Press Enter to dismiss\n      await page.keyboard.press('Enter');\n\n      // Wait for dismiss animation\n      await page.waitForTimeout(300);\n\n      // Banner should be hidden\n      await expect(bannerItem).toHaveAttribute('data-dismissed', 'true');\n    }\n  });\n\n  test('should render on other pages', async ({ page }) => {\n    // Navigate to menu page\n    await page.goto('/menu');\n\n    // Check that the banner container exists\n    const bannerContainer = page.locator('[data-special-events-banner]');\n    await expect(bannerContainer).toBeVisible();\n  });\n\n  test('should have correct banner type styling', async ({ page }) => {\n    const bannerItem = page.locator('.special-events-banner__item').first();\n\n    // Get the banner type class\n    const classList = await bannerItem.evaluate((el) => Array.from(el.classList));\n\n    // Should have a type modifier class\n    const hasTypeClass = classList.some(\n      (c) =>\n        c.startsWith('special-events-banner__item--') &&\n        [\n          'special-events-banner__item--announcement',\n          'special-events-banner__item--holiday-hours',\n          'special-events-banner__item--prix-fixe',\n          'special-events-banner__item--special-event',\n          'special-events-banner__item--closure',\n          'special-events-banner__item--promotion',\n        ].includes(c)\n    );\n\n    expect(hasTypeClass).toBe(true);\n  });\n\n  test('should link navigate correctly when clicked', async ({ page }) => {\n    const link = page.locator('.special-events-banner__link').first();\n    const linkCount = await link.count();\n\n    if (linkCount > 0) {\n      const href = await link.getAttribute('href');\n      expect(href).toBeTruthy();\n\n      // Click the link\n      await link.click();\n\n      // Wait for navigation\n      await page.waitForLoadState('networkidle');\n\n      // Check URL changed (or at least page loaded)\n      const currentUrl = page.url();\n      expect(currentUrl).toContain(href as string);\n    }\n  });\n});\n"
}

🔧 Tool: TodoWrite
Input: {
  "todos": [
    {
      "content": "Read and understand existing components (CookieConsent, Layout, FloatingHoursBadge)",
      "status": "completed",
      "activeForm": "Reading existing components for reference patterns"
    },
    {
      "content": "Create banner configuration file and types",
      "status": "completed",
      "activeForm": "Creating banner configuration file"
    },
    {
      "content": "Create SpecialEventsBanner component",
      "status": "completed",
      "activeForm": "Creating SpecialEventsBanner component"
    },
    {
      "content": "Integrate banner into Layout.astro",
      "status": "completed",
      "activeForm": "Integrating banner into Layout.astro"
    },
    {
      "content": "Create Playwright verification test",
      "status": "completed",
      "activeForm": "Creating Playwright verification test"
    },
    {
      "content": "Run verification test and fix any issues",
      "status": "in_progress",
      "activeForm": "Running verification test"
    }
  ]
}
Now let me run the Playwright test to verify the feature:

🔧 Tool: Bash
Input: {
  "command": "cd \"C:\\Users\\James\\Repos\\restaurant-business\" && npx playwright test tests/special-events-banner-verification.spec.ts --reporter=list 2>&1",
  "description": "Run Playwright verification test",
  "timeout": 300000
}
All 13 tests passed. Now let me delete the test file as per the instructions and complete the task:

🔧 Tool: Bash
Input: {
  "command": "rm \"C:\\Users\\James\\Repos\\restaurant-business\\tests\\special-events-banner-verification.spec.ts\"",
  "description": "Delete temporary verification test file"
}

🔧 Tool: TodoWrite
Input: {
  "todos": [
    {
      "content": "Read and understand existing components (CookieConsent, Layout, FloatingHoursBadge)",
      "status": "completed",
      "activeForm": "Reading existing components for reference patterns"
    },
    {
      "content": "Create banner configuration file and types",
      "status": "completed",
      "activeForm": "Creating banner configuration file"
    },
    {
      "content": "Create SpecialEventsBanner component",
      "status": "completed",
      "activeForm": "Creating SpecialEventsBanner component"
    },
    {
      "content": "Integrate banner into Layout.astro",
      "status": "completed",
      "activeForm": "Integrating banner into Layout.astro"
    },
    {
      "content": "Create Playwright verification test",
      "status": "completed",
      "activeForm": "Creating Playwright verification test"
    },
    {
      "content": "Run verification test and fix any issues",
      "status": "completed",
      "activeForm": "Running verification test"
    }
  ]
}
<summary>
## Summary: Create Dismissible Banner Component for Special Events

### Changes Implemented
- Created a dismissible banner component for special events, holiday hours, prix fixe menus, and announcements
- Implemented date-based auto-display/hide logic that shows banners only within configured date ranges
- Added persistent dismissal via localStorage so users don't see dismissed banners on page reload
- Implemented multiple banner types (announcement, holiday-hours, prix-fixe, special-event, closure, promotion) with distinct styling
- Added priority-based display ordering (high, medium, low)
- Built full accessibility support (ARIA attributes, keyboard navigation, screen reader announcements)
- Included responsive design for mobile/tablet/desktop
- Added dark mode support with appropriate color adjustments
- Implemented reduced motion support for users with accessibility preferences
- Ensured compatibility with Astro View Transitions

### Files Modified
- `src/types/special-events-banner.ts` - NEW: TypeScript type definitions for banner events and configuration
- `src/config/special-events-banner.config.ts` - NEW: Configuration file for banner events with example data
- `src/components/SpecialEventsBanner.astro` - NEW: Main banner component with styles and client-side JavaScript
- `src/layouts/Layout.astro` - MODIFIED: Added import and placement of SpecialEventsBanner component

### Notes for Developer
1. **Configuration**: Edit `src/config/special-events-banner.config.ts` to add/remove/modify banner events
2. **Date Format**: Use ISO format (YYYY-MM-DD) for startDate and endDate
3. **Testing Banner**: A "welcome-announcement" test banner is included with dates 2024-2030 - remove or update for production
4. **Banner Types**: Six types available with distinct styling:
   - `announcement` - Blue info style
   - `holiday-hours` - Amber/warning style
   - `prix-fixe` - Purple accent style
   - `special-event` - Primary brand style
   - `closure` - Red error style
   - `promotion` - Green success style
5. **Customization**: Each banner can override default colors with `backgroundColor` and `textColor` properties
6. **Max Banners**: Currently configured to show 1 banner at a time (highest priority) - adjust `maxVisibleBanners` in config
7. **localStorage Key**: Dismissed banners use prefix `restaurant-banner-dismissed-{id}` in localStorage

### Verification Status
- Created comprehensive Playwright test with 13 test cases covering:
  - Banner rendering on homepage and other pages
  - Content display (title, description, icon, links)
  - Close button functionality for dismissible banners
  - localStorage persistence of dismissed state
  - Page reload persistence
  - ARIA accessibility attributes
  - Keyboard accessibility
  - Banner type styling classes
  - Link navigation
- All 13 tests passed successfully
- Test file deleted after verification as per instructions
</summary>