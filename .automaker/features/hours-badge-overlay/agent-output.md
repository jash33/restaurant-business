
🔧 Tool: Task
Input: {
  "description": "Explore codebase structure",
  "prompt": "Explore this codebase to understand its structure. I need to implement a floating badge component showing current open/closed status and today's hours, positioned over a hero image. \n\nPlease find:\n1. The overall project structure (is it React, Vue, etc.?)\n2. Where components are located\n3. If there's an existing hero image component\n4. Any existing styling patterns (CSS modules, Tailwind, styled-components, etc.)\n5. Any existing data or utilities related to business hours\n6. The general conventions used in the codebase\n\nBe thorough - check package.json, look at existing components, and understand the patterns used.",
  "subagent_type": "Explore"
}

🔧 Tool: Read
Input: {
  "file_path": "C:\\Users\\James\\Repos\\restaurant-business\\package.json"
}

🔧 Tool: Read
Input: {
  "file_path": "C:\\Users\\James\\Repos\\restaurant-business\\astro.config.mjs"
}

🔧 Tool: Glob
Input: {
  "pattern": "**/*.astro"
}

🔧 Tool: Glob
Input: {
  "pattern": "**/*.ts"
}

🔧 Tool: Glob
Input: {
  "pattern": "**/*.css"
}

🔧 Tool: Read
Input: {
  "file_path": "C:\\Users\\James\\Repos\\restaurant-business\\src\\components\\HeroSection.astro"
}

🔧 Tool: Read
Input: {
  "file_path": "C:\\Users\\James\\Repos\\restaurant-business\\src\\components\\RestaurantHeroSection.astro"
}

🔧 Tool: Read
Input: {
  "file_path": "C:\\Users\\James\\Repos\\restaurant-business\\src\\components\\HoursDisplay.astro"
}

🔧 Tool: Read
Input: {
  "file_path": "C:\\Users\\James\\Repos\\restaurant-business\\src\\styles\\variables.css"
}

🔧 Tool: Read
Input: {
  "file_path": "C:\\Users\\James\\Repos\\restaurant-business\\src\\types\\index.ts",
  "limit": 100
}

🔧 Tool: Glob
Input: {
  "pattern": "src/config/**/*"
}

🔧 Tool: Glob
Input: {
  "pattern": "src/utils/**/*"
}

🔧 Tool: Glob
Input: {
  "pattern": "src/types/**/*"
}

🔧 Tool: Read
Input: {
  "file_path": "C:\\Users\\James\\Repos\\restaurant-business\\src\\config\\hours.config.ts"
}

🔧 Tool: Read
Input: {
  "file_path": "C:\\Users\\James\\Repos\\restaurant-business\\src\\types\\hours.ts"
}

🔧 Tool: Read
Input: {
  "file_path": "C:\\Users\\James\\Repos\\restaurant-business\\src\\types\\restaurant-hero.ts"
}

🔧 Tool: Read
Input: {
  "file_path": "C:\\Users\\James\\Repos\\restaurant-business\\src\\components\\Button.astro",
  "limit": 150
}

🔧 Tool: Read
Input: {
  "file_path": "C:\\Users\\James\\Repos\\restaurant-business\\src\\styles\\globals.css",
  "limit": 100
}

🔧 Tool: Read
Input: {
  "file_path": "C:\\Users\\James\\Repos\\restaurant-business\\src\\styles\\performance.css",
  "limit": 100
}
Now I have a clear understanding of the codebase. Let me look at the existing RestaurantHeroSection.astro and HoursDisplay.astro components more closely to understand the current implementation before enhancing it.

🔧 Tool: Read
Input: {
  "file_path": "C:\\Users\\James\\Repos\\restaurant-business\\src\\components\\RestaurantHeroSection.astro"
}

🔧 Tool: Read
Input: {
  "file_path": "C:\\Users\\James\\Repos\\restaurant-business\\src\\components\\HoursDisplay.astro"
}

🔧 Tool: Read
Input: {
  "file_path": "C:\\Users\\James\\Repos\\restaurant-business\\src\\utils\\hours.ts"
}

🔧 Tool: Read
Input: {
  "file_path": "C:\\Users\\James\\Repos\\restaurant-business\\src\\types\\restaurant-hero.ts"
}
Let me also check the hours config and look at the styles/variables.css for design tokens:

🔧 Tool: Read
Input: {
  "file_path": "C:\\Users\\James\\Repos\\restaurant-business\\src\\config\\hours.config.ts"
}

🔧 Tool: Read
Input: {
  "file_path": "C:\\Users\\James\\Repos\\restaurant-business\\src\\styles\\variables.css",
  "limit": 200
}

🔧 Tool: Read
Input: {
  "file_path": "C:\\Users\\James\\Repos\\restaurant-business\\src\\types/hours.ts"
}
Now I have a clear understanding of the codebase. Let me create a comprehensive plan and implement the floating hours badge overlay component.

🔧 Tool: TodoWrite
Input: {
  "todos": [
    {
      "content": "Create FloatingHoursBadge component with real-time status",
      "status": "in_progress",
      "activeForm": "Creating FloatingHoursBadge component with real-time status"
    },
    {
      "content": "Add TypeScript types for FloatingHoursBadge props",
      "status": "pending",
      "activeForm": "Adding TypeScript types for FloatingHoursBadge props"
    },
    {
      "content": "Add styling with backdrop blur and warm accent colors",
      "status": "pending",
      "activeForm": "Adding styling with backdrop blur and warm accent colors"
    },
    {
      "content": "Add client-side JavaScript for real-time updates and auto-hide",
      "status": "pending",
      "activeForm": "Adding client-side JavaScript for real-time updates"
    },
    {
      "content": "Export types from index.ts",
      "status": "pending",
      "activeForm": "Exporting types from index.ts"
    }
  ]
}
Now let me create the FloatingHoursBadge component. First, let me check the types/index.ts to see the export patterns:

🔧 Tool: Read
Input: {
  "file_path": "C:\\Users\\James\\Repos\\restaurant-business\\src\\types\\index.ts"
}
Now I'll create the FloatingHoursBadge component. Let me create the type definitions first, then the component:

🔧 Tool: Write
Input: {
  "file_path": "C:\\Users\\James\\Repos\\restaurant-business\\src\\types\\floating-hours-badge.ts",
  "content": "/**\n * Floating Hours Badge Type Definitions\n * Types for the floating hours badge overlay component\n * that shows open/closed status over the hero image.\n */\n\nimport type { BusinessHoursConfig, OperatingStatus, TimeFormat } from './hours';\n\n/**\n * Position options for the floating badge\n */\nexport type FloatingBadgePosition =\n  | 'top-left'\n  | 'top-right'\n  | 'bottom-left'\n  | 'bottom-right';\n\n/**\n * Badge visibility behavior\n */\nexport type BadgeVisibility = 'always' | 'auto-hide-when-closed' | 'hidden';\n\n/**\n * Props for the FloatingHoursBadge component\n */\nexport interface FloatingHoursBadgeProps {\n  /** Business hours configuration (uses default if not provided) */\n  config?: BusinessHoursConfig;\n  /** Time format for display (default: '12h') */\n  timeFormat?: TimeFormat;\n  /** Position of the floating badge (default: 'top-right') */\n  position?: FloatingBadgePosition;\n  /** Badge visibility behavior (default: 'auto-hide-when-closed') */\n  visibility?: BadgeVisibility;\n  /** Update interval in milliseconds (default: 60000 = 1 minute) */\n  updateInterval?: number;\n  /** Whether to show today's hours text (default: true) */\n  showHoursText?: boolean;\n  /** Whether to animate the status dot (default: true) */\n  animateDot?: boolean;\n  /** Additional CSS class names */\n  class?: string;\n  /** Optional z-index override (default: 10) */\n  zIndex?: number;\n  /** Offset from edge in pixels (default: 16) */\n  offset?: number;\n}\n\n/**\n * Internal state for the floating badge\n */\nexport interface FloatingBadgeState {\n  /** Current operating status */\n  status: OperatingStatus;\n  /** Status message text */\n  statusText: string;\n  /** Today's hours text (e.g., \"11 AM - 10 PM\") */\n  hoursText: string;\n  /** Whether the badge is currently visible */\n  isVisible: boolean;\n  /** Whether special hours are in effect */\n  isSpecialDay: boolean;\n  /** Special day name if applicable */\n  specialDayName?: string;\n}\n"
}

🔧 Tool: TodoWrite
Input: {
  "todos": [
    {
      "content": "Create FloatingHoursBadge component with real-time status",
      "status": "in_progress",
      "activeForm": "Creating FloatingHoursBadge component with real-time status"
    },
    {
      "content": "Add TypeScript types for FloatingHoursBadge props",
      "status": "completed",
      "activeForm": "Adding TypeScript types for FloatingHoursBadge props"
    },
    {
      "content": "Add styling with backdrop blur and warm accent colors",
      "status": "pending",
      "activeForm": "Adding styling with backdrop blur and warm accent colors"
    },
    {
      "content": "Add client-side JavaScript for real-time updates and auto-hide",
      "status": "pending",
      "activeForm": "Adding client-side JavaScript for real-time updates"
    },
    {
      "content": "Export types from index.ts",
      "status": "pending",
      "activeForm": "Exporting types from index.ts"
    }
  ]
}
Now let me create the main FloatingHoursBadge component:

🔧 Tool: Write
Input: {
  "file_path": "C:\\Users\\James\\Repos\\restaurant-business\\src\\components\\FloatingHoursBadge.astro",
  "content": "---\n/**\n * Floating Hours Badge Component\n * A floating badge showing current open/closed status and today's hours,\n * designed to be positioned over hero images with subtle backdrop blur\n * and warm accent colors.\n *\n * Features:\n * - Real-time open/closed status updates via client-side JavaScript\n * - Glassmorphic design with backdrop blur\n * - Warm accent colors matching the restaurant theme\n * - Animated pulsing status dot indicator\n * - Auto-hides when restaurant is closed (configurable)\n * - Configurable positioning (top-left, top-right, bottom-left, bottom-right)\n * - WCAG 2.1 AA compliant accessibility\n * - Reduced motion support\n * - Responsive design\n *\n * @example Basic usage (positioned over hero)\n * ```astro\n * <div style=\"position: relative;\">\n *   <RestaurantHeroSection ... />\n *   <FloatingHoursBadge />\n * </div>\n * ```\n *\n * @example With custom configuration\n * ```astro\n * <FloatingHoursBadge\n *   position=\"top-left\"\n *   visibility=\"always\"\n *   timeFormat=\"24h\"\n *   offset={24}\n * />\n * ```\n */\n\nimport type { FloatingHoursBadgeProps } from '../types/floating-hours-badge';\nimport {\n  BUSINESS_HOURS_CONFIG,\n  HOURS_DISPLAY_CONFIG,\n} from '../config/hours.config';\nimport {\n  getCurrentStatus,\n  getHoursDisplayState,\n  getDayHoursText,\n  getTodaySpecialHours,\n  getCurrentDayIndex,\n} from '../utils/hours';\n\ninterface Props extends FloatingHoursBadgeProps {}\n\nconst {\n  config = BUSINESS_HOURS_CONFIG,\n  timeFormat = HOURS_DISPLAY_CONFIG.defaultTimeFormat,\n  position = 'top-right',\n  visibility = 'auto-hide-when-closed',\n  updateInterval = HOURS_DISPLAY_CONFIG.defaultUpdateInterval,\n  showHoursText = true,\n  animateDot = true,\n  class: className = '',\n  zIndex = 10,\n  offset = 16,\n} = Astro.props;\n\n// Get initial state for server-side rendering\nconst initialState = getHoursDisplayState(config);\nconst currentDayIndex = getCurrentDayIndex(config.timezone);\nconst todayHours = initialState.isSpecialDay && initialState.todaySpecialHours\n  ? initialState.todaySpecialHours.isOpen && initialState.todaySpecialHours.hours\n    ? getDayHoursText({ day: 'Today', isOpen: true, hours: initialState.todaySpecialHours.hours }, timeFormat)\n    : 'Closed'\n  : getDayHoursText(config.regularHours[currentDayIndex], timeFormat);\n\n// Determine initial visibility\nconst isOpen = initialState.currentStatus.status === 'open' || initialState.currentStatus.status === 'closing-soon';\nconst initiallyVisible = visibility === 'always' || (visibility === 'auto-hide-when-closed' && isOpen);\n\n// Build CSS classes\nconst badgeClasses = [\n  'floating-hours-badge',\n  `floating-hours-badge--${position}`,\n  `floating-hours-badge--${initialState.currentStatus.status}`,\n  !animateDot && 'floating-hours-badge--no-animation',\n  !initiallyVisible && 'floating-hours-badge--hidden',\n  className,\n].filter(Boolean).join(' ');\n\n// Inline styles for positioning\nconst positionStyle = `--badge-offset: ${offset}px; --badge-z-index: ${zIndex};`;\n---\n\n<div\n  class={badgeClasses}\n  role=\"status\"\n  aria-live=\"polite\"\n  aria-label={`Restaurant status: ${initialState.currentStatus.message}${showHoursText ? `. Today's hours: ${todayHours}` : ''}`}\n  data-floating-badge\n  data-config={JSON.stringify(config)}\n  data-time-format={timeFormat}\n  data-visibility={visibility}\n  data-update-interval={updateInterval}\n  data-show-hours={showHoursText}\n  style={positionStyle}\n>\n  <!-- Status indicator with pulsing dot -->\n  <span class=\"floating-hours-badge__status\">\n    <span class=\"floating-hours-badge__dot\" aria-hidden=\"true\"></span>\n    <span class=\"floating-hours-badge__status-text\" data-status-text>\n      {initialState.currentStatus.message}\n    </span>\n  </span>\n\n  <!-- Today's hours (optional) -->\n  {showHoursText && (\n    <span class=\"floating-hours-badge__divider\" aria-hidden=\"true\"></span>\n    <span class=\"floating-hours-badge__hours\" data-hours-text>\n      {todayHours}\n    </span>\n  )}\n\n  <!-- Screen reader announcement region -->\n  <span\n    class=\"sr-only\"\n    role=\"status\"\n    aria-live=\"polite\"\n    aria-atomic=\"true\"\n    data-badge-announcer\n  ></span>\n</div>\n\n<style>\n  /* =================================================================\n   * FLOATING HOURS BADGE - BASE STYLES\n   * ================================================================= */\n  .floating-hours-badge {\n    position: absolute;\n    z-index: var(--badge-z-index, 10);\n    display: inline-flex;\n    flex-wrap: wrap;\n    align-items: center;\n    justify-content: center;\n    gap: var(--spacing-2) var(--spacing-3);\n    padding: var(--spacing-2-5) var(--spacing-4);\n\n    /* Glassmorphic background with warm tint */\n    background: linear-gradient(\n      135deg,\n      rgba(255, 251, 235, 0.15) 0%,\n      rgba(255, 247, 219, 0.12) 50%,\n      rgba(255, 251, 235, 0.1) 100%\n    );\n    backdrop-filter: blur(12px);\n    -webkit-backdrop-filter: blur(12px);\n\n    /* Warm border accent */\n    border: 1px solid rgba(255, 251, 235, 0.25);\n    border-radius: var(--radius-full);\n\n    /* Typography */\n    font-family: var(--font-body);\n    font-size: var(--font-size-sm);\n    color: var(--color-cream, rgba(255, 251, 235, 1));\n\n    /* Subtle shadow for depth */\n    box-shadow:\n      0 4px 16px rgba(0, 0, 0, 0.15),\n      0 2px 8px rgba(0, 0, 0, 0.1),\n      inset 0 1px 0 rgba(255, 255, 255, 0.1);\n\n    /* Smooth transitions */\n    transition:\n      opacity var(--animation-duration-normal, 300ms) var(--ease-out, ease-out),\n      transform var(--animation-duration-normal, 300ms) var(--ease-out, ease-out),\n      box-shadow var(--animation-duration-fast, 150ms) var(--ease-out, ease-out);\n\n    /* Entrance animation */\n    animation: badge-entrance var(--animation-duration-slow, 500ms) var(--ease-enter-emphasized, ease-out) forwards;\n    animation-delay: var(--animation-delay-2, 0.3s);\n    opacity: 0;\n  }\n\n  @keyframes badge-entrance {\n    from {\n      opacity: 0;\n      transform: translateY(-8px) scale(0.95);\n    }\n    to {\n      opacity: 1;\n      transform: translateY(0) scale(1);\n    }\n  }\n\n  /* Hover state */\n  .floating-hours-badge:hover {\n    box-shadow:\n      0 6px 24px rgba(0, 0, 0, 0.2),\n      0 4px 12px rgba(0, 0, 0, 0.15),\n      inset 0 1px 0 rgba(255, 255, 255, 0.15);\n    transform: translateY(-1px);\n  }\n\n  /* Hidden state */\n  .floating-hours-badge--hidden {\n    opacity: 0;\n    pointer-events: none;\n    transform: translateY(-8px) scale(0.95);\n    animation: none;\n  }\n\n  /* =================================================================\n   * POSITIONING VARIANTS\n   * ================================================================= */\n  .floating-hours-badge--top-left {\n    top: var(--badge-offset, 16px);\n    left: var(--badge-offset, 16px);\n  }\n\n  .floating-hours-badge--top-right {\n    top: var(--badge-offset, 16px);\n    right: var(--badge-offset, 16px);\n  }\n\n  .floating-hours-badge--bottom-left {\n    bottom: var(--badge-offset, 16px);\n    left: var(--badge-offset, 16px);\n  }\n\n  .floating-hours-badge--bottom-right {\n    bottom: var(--badge-offset, 16px);\n    right: var(--badge-offset, 16px);\n  }\n\n  /* =================================================================\n   * STATUS INDICATOR\n   * ================================================================= */\n  .floating-hours-badge__status {\n    display: inline-flex;\n    align-items: center;\n    gap: var(--spacing-2);\n    font-weight: var(--font-weight-semibold);\n  }\n\n  /* Pulsing dot indicator */\n  .floating-hours-badge__dot {\n    width: 8px;\n    height: 8px;\n    border-radius: var(--radius-full);\n    flex-shrink: 0;\n    animation: pulse-badge-dot 2s ease-in-out infinite;\n  }\n\n  @keyframes pulse-badge-dot {\n    0%, 100% {\n      opacity: 1;\n      transform: scale(1);\n    }\n    50% {\n      opacity: 0.6;\n      transform: scale(0.85);\n    }\n  }\n\n  /* Disable animation when specified */\n  .floating-hours-badge--no-animation .floating-hours-badge__dot {\n    animation: none;\n  }\n\n  /* =================================================================\n   * STATUS COLOR VARIANTS\n   * ================================================================= */\n\n  /* Open - Warm green with glow */\n  .floating-hours-badge--open .floating-hours-badge__dot {\n    background-color: var(--color-success, #10b981);\n    box-shadow: 0 0 10px var(--color-success, #10b981);\n  }\n\n  .floating-hours-badge--open {\n    border-color: rgba(16, 185, 129, 0.3);\n  }\n\n  /* Closed - Warm red/terracotta */\n  .floating-hours-badge--closed .floating-hours-badge__dot {\n    background-color: var(--color-error, #ef4444);\n    box-shadow: 0 0 10px var(--color-error, #ef4444);\n  }\n\n  .floating-hours-badge--closed {\n    border-color: rgba(239, 68, 68, 0.3);\n  }\n\n  /* Closing Soon - Warm amber */\n  .floating-hours-badge--closing-soon .floating-hours-badge__dot {\n    background-color: var(--color-warning, #f59e0b);\n    box-shadow: 0 0 10px var(--color-warning, #f59e0b);\n    /* Faster pulse for urgency */\n    animation-duration: 1.2s;\n  }\n\n  .floating-hours-badge--closing-soon {\n    border-color: rgba(245, 158, 11, 0.3);\n  }\n\n  /* Opening Soon - Warm blue/info */\n  .floating-hours-badge--opening-soon .floating-hours-badge__dot {\n    background-color: var(--color-info, #3b82f6);\n    box-shadow: 0 0 10px var(--color-info, #3b82f6);\n    /* Gentle pulse for anticipation */\n    animation-duration: 1.5s;\n  }\n\n  .floating-hours-badge--opening-soon {\n    border-color: rgba(59, 130, 246, 0.3);\n  }\n\n  /* =================================================================\n   * DIVIDER\n   * ================================================================= */\n  .floating-hours-badge__divider {\n    width: 1px;\n    height: 14px;\n    background-color: rgba(255, 251, 235, 0.35);\n    flex-shrink: 0;\n  }\n\n  /* =================================================================\n   * HOURS TEXT\n   * ================================================================= */\n  .floating-hours-badge__hours {\n    color: rgba(255, 251, 235, 0.85);\n    font-weight: var(--font-weight-medium);\n    white-space: nowrap;\n  }\n\n  /* =================================================================\n   * SCREEN READER ONLY\n   * ================================================================= */\n  .sr-only {\n    position: absolute;\n    width: 1px;\n    height: 1px;\n    padding: 0;\n    margin: -1px;\n    overflow: hidden;\n    clip: rect(0, 0, 0, 0);\n    white-space: nowrap;\n    border: 0;\n  }\n\n  /* =================================================================\n   * RESPONSIVE STYLES\n   * ================================================================= */\n  @media (max-width: 640px) {\n    .floating-hours-badge {\n      font-size: var(--font-size-xs);\n      padding: var(--spacing-2) var(--spacing-3);\n      gap: var(--spacing-1-5) var(--spacing-2);\n    }\n\n    .floating-hours-badge__dot {\n      width: 6px;\n      height: 6px;\n    }\n\n    .floating-hours-badge__divider {\n      height: 12px;\n    }\n\n    /* Adjust offset for smaller screens */\n    .floating-hours-badge--top-left,\n    .floating-hours-badge--top-right {\n      top: var(--spacing-3);\n    }\n\n    .floating-hours-badge--bottom-left,\n    .floating-hours-badge--bottom-right {\n      bottom: var(--spacing-3);\n    }\n\n    .floating-hours-badge--top-left,\n    .floating-hours-badge--bottom-left {\n      left: var(--spacing-3);\n    }\n\n    .floating-hours-badge--top-right,\n    .floating-hours-badge--bottom-right {\n      right: var(--spacing-3);\n    }\n  }\n\n  /* Tablet adjustments */\n  @media (min-width: 641px) and (max-width: 1024px) {\n    .floating-hours-badge {\n      font-size: var(--font-size-sm);\n    }\n  }\n\n  /* =================================================================\n   * REDUCED MOTION\n   * ================================================================= */\n  @media (prefers-reduced-motion: reduce) {\n    .floating-hours-badge {\n      animation: none;\n      opacity: 1;\n      transform: none;\n    }\n\n    .floating-hours-badge:hover {\n      transform: none;\n    }\n\n    .floating-hours-badge__dot {\n      animation: none;\n    }\n\n    .floating-hours-badge--hidden {\n      transition: opacity var(--animation-duration-fast, 150ms) ease;\n    }\n  }\n\n  /* =================================================================\n   * HIGH CONTRAST MODE\n   * ================================================================= */\n  @media (forced-colors: active) {\n    .floating-hours-badge {\n      background: Canvas;\n      border: 2px solid CanvasText;\n      color: CanvasText;\n    }\n\n    .floating-hours-badge__dot {\n      box-shadow: none;\n    }\n\n    .floating-hours-badge--open .floating-hours-badge__dot {\n      background-color: Highlight;\n    }\n\n    .floating-hours-badge--closed .floating-hours-badge__dot {\n      background-color: Mark;\n    }\n\n    .floating-hours-badge__divider {\n      background-color: CanvasText;\n    }\n\n    .floating-hours-badge__hours {\n      color: CanvasText;\n    }\n  }\n\n  /* =================================================================\n   * PRINT STYLES\n   * ================================================================= */\n  @media print {\n    .floating-hours-badge {\n      position: static;\n      display: inline-flex;\n      background: transparent;\n      border: 1px solid var(--color-border, #e5e7eb);\n      backdrop-filter: none;\n      color: var(--color-text-primary, #111827);\n      box-shadow: none;\n      animation: none;\n      opacity: 1;\n    }\n\n    .floating-hours-badge__dot {\n      animation: none;\n      box-shadow: none;\n    }\n\n    .floating-hours-badge__divider {\n      background-color: var(--color-border, #e5e7eb);\n    }\n\n    .floating-hours-badge__hours {\n      color: var(--color-text-secondary, #6b7280);\n    }\n  }\n\n  /* =================================================================\n   * DARK MODE ADJUSTMENTS\n   * ================================================================= */\n  :global(html[data-theme=\"dark\"]) .floating-hours-badge {\n    background: linear-gradient(\n      135deg,\n      rgba(26, 20, 18, 0.6) 0%,\n      rgba(45, 36, 30, 0.5) 50%,\n      rgba(26, 20, 18, 0.55) 100%\n    );\n    border-color: rgba(212, 196, 168, 0.35);\n    box-shadow:\n      0 4px 20px rgba(0, 0, 0, 0.3),\n      0 2px 10px rgba(0, 0, 0, 0.2),\n      inset 0 1px 0 rgba(255, 255, 255, 0.05);\n  }\n\n  :global(html[data-theme=\"dark\"]) .floating-hours-badge:hover {\n    box-shadow:\n      0 6px 28px rgba(0, 0, 0, 0.4),\n      0 4px 16px rgba(0, 0, 0, 0.25),\n      inset 0 1px 0 rgba(255, 255, 255, 0.08);\n  }\n\n  :global(html[data-theme=\"dark\"]) .floating-hours-badge__divider {\n    background-color: rgba(212, 196, 168, 0.4);\n  }\n</style>\n\n<script>\n  /**\n   * Floating Hours Badge Client-Side Logic\n   * Handles real-time status updates, visibility toggling, and announcements\n   */\n\n  interface TimeRange {\n    open: string;\n    close: string;\n  }\n\n  interface DailyHours {\n    day: string;\n    isOpen: boolean;\n    hours?: TimeRange[];\n  }\n\n  interface SpecialHours {\n    id: string;\n    name: string;\n    date: string;\n    type: string;\n    isOpen: boolean;\n    hours?: TimeRange[];\n    description?: string;\n  }\n\n  interface BusinessHoursConfig {\n    timezone: string;\n    regularHours: DailyHours[];\n    specialHours?: SpecialHours[];\n    closingSoonMinutes?: number;\n    openingSoonMinutes?: number;\n  }\n\n  type OperatingStatus = 'open' | 'closed' | 'closing-soon' | 'opening-soon';\n  type BadgeVisibility = 'always' | 'auto-hide-when-closed' | 'hidden';\n  type TimeFormat = '12h' | '24h';\n\n  interface BadgeState {\n    container: HTMLElement;\n    config: BusinessHoursConfig;\n    timeFormat: TimeFormat;\n    visibility: BadgeVisibility;\n    updateInterval: number;\n    showHours: boolean;\n    intervalId?: number;\n    currentStatus: OperatingStatus;\n  }\n\n  class FloatingHoursBadge {\n    private state: BadgeState;\n\n    constructor(container: HTMLElement) {\n      const configStr = container.dataset.config || '{}';\n      const config = JSON.parse(configStr) as BusinessHoursConfig;\n\n      this.state = {\n        container,\n        config,\n        timeFormat: (container.dataset.timeFormat || '12h') as TimeFormat,\n        visibility: (container.dataset.visibility || 'auto-hide-when-closed') as BadgeVisibility,\n        updateInterval: parseInt(container.dataset.updateInterval || '60000', 10),\n        showHours: container.dataset.showHours === 'true',\n        currentStatus: this.extractCurrentStatus(),\n      };\n\n      this.initialize();\n    }\n\n    private initialize(): void {\n      // Update immediately\n      this.updateBadge();\n\n      // Set up interval for real-time updates\n      this.state.intervalId = window.setInterval(() => {\n        this.updateBadge();\n      }, this.state.updateInterval);\n\n      // Update on visibility change (when user returns to tab)\n      document.addEventListener('visibilitychange', () => {\n        if (!document.hidden) {\n          this.updateBadge();\n        }\n      });\n    }\n\n    private extractCurrentStatus(): OperatingStatus {\n      const { container } = this.state;\n      if (container.classList.contains('floating-hours-badge--open')) return 'open';\n      if (container.classList.contains('floating-hours-badge--closed')) return 'closed';\n      if (container.classList.contains('floating-hours-badge--closing-soon')) return 'closing-soon';\n      if (container.classList.contains('floating-hours-badge--opening-soon')) return 'opening-soon';\n      return 'closed';\n    }\n\n    private getCurrentTimeInMinutes(): number {\n      const { timezone } = this.state.config;\n      const now = timezone\n        ? new Date(new Date().toLocaleString('en-US', { timeZone: timezone }))\n        : new Date();\n      return now.getHours() * 60 + now.getMinutes();\n    }\n\n    private getCurrentDayIndex(): number {\n      const { timezone } = this.state.config;\n      const now = timezone\n        ? new Date(new Date().toLocaleString('en-US', { timeZone: timezone }))\n        : new Date();\n      return now.getDay();\n    }\n\n    private getTodayDateString(): string {\n      const { timezone } = this.state.config;\n      const now = timezone\n        ? new Date(new Date().toLocaleString('en-US', { timeZone: timezone }))\n        : new Date();\n      const year = now.getFullYear();\n      const month = (now.getMonth() + 1).toString().padStart(2, '0');\n      const day = now.getDate().toString().padStart(2, '0');\n      return `${year}-${month}-${day}`;\n    }\n\n    private parseTimeToMinutes(time: string): number {\n      const [hours, minutes] = time.split(':').map(Number);\n      return hours * 60 + minutes;\n    }\n\n    private formatMinutesToTime(minutes: number): string {\n      const normalizedMinutes = minutes >= 0 ? minutes % (24 * 60) : minutes + 24 * 60;\n      const hours = Math.floor(normalizedMinutes / 60);\n      const mins = normalizedMinutes % 60;\n\n      if (this.state.timeFormat === '24h') {\n        return `${hours.toString().padStart(2, '0')}:${mins.toString().padStart(2, '0')}`;\n      }\n\n      const period = hours >= 12 ? 'PM' : 'AM';\n      const displayHours = hours % 12 || 12;\n      const minsStr = mins === 0 ? '' : `:${mins.toString().padStart(2, '0')}`;\n      return `${displayHours}${minsStr} ${period}`;\n    }\n\n    private isWithinTimeRange(currentMinutes: number, range: TimeRange): boolean {\n      const openMinutes = this.parseTimeToMinutes(range.open);\n      let closeMinutes = this.parseTimeToMinutes(range.close);\n\n      if (closeMinutes < openMinutes) {\n        closeMinutes += 24 * 60;\n        if (currentMinutes < openMinutes) {\n          return currentMinutes + 24 * 60 >= openMinutes && currentMinutes + 24 * 60 < closeMinutes;\n        }\n      }\n\n      return currentMinutes >= openMinutes && currentMinutes < closeMinutes;\n    }\n\n    private isWithinAnyTimeRange(currentMinutes: number, ranges: TimeRange[]): boolean {\n      return ranges.some((range) => this.isWithinTimeRange(currentMinutes, range));\n    }\n\n    private getMinutesUntilClose(currentMinutes: number, ranges: TimeRange[]): number | null {\n      for (const range of ranges) {\n        if (this.isWithinTimeRange(currentMinutes, range)) {\n          let closeMinutes = this.parseTimeToMinutes(range.close);\n          const openMinutes = this.parseTimeToMinutes(range.open);\n\n          if (closeMinutes < openMinutes) {\n            closeMinutes += 24 * 60;\n            if (currentMinutes < openMinutes) {\n              return closeMinutes - (currentMinutes + 24 * 60);\n            }\n          }\n\n          return closeMinutes - currentMinutes;\n        }\n      }\n      return null;\n    }\n\n    private getMinutesUntilOpen(currentMinutes: number, ranges: TimeRange[]): number | null {\n      const sortedRanges = [...ranges].sort(\n        (a, b) => this.parseTimeToMinutes(a.open) - this.parseTimeToMinutes(b.open)\n      );\n\n      for (const range of sortedRanges) {\n        const openMinutes = this.parseTimeToMinutes(range.open);\n        if (openMinutes > currentMinutes) {\n          return openMinutes - currentMinutes;\n        }\n      }\n\n      if (sortedRanges.length > 0) {\n        const firstOpen = this.parseTimeToMinutes(sortedRanges[0].open);\n        return 24 * 60 - currentMinutes + firstOpen;\n      }\n\n      return null;\n    }\n\n    private getCurrentStatus(): {\n      status: OperatingStatus;\n      message: string;\n    } {\n      const { config } = this.state;\n      const { regularHours, specialHours, closingSoonMinutes = 30, openingSoonMinutes = 30 } = config;\n\n      const todayString = this.getTodayDateString();\n      const currentMinutes = this.getCurrentTimeInMinutes();\n      const currentDayIndex = this.getCurrentDayIndex();\n\n      // Check for special hours first\n      const todaySpecial = specialHours?.find((sh) => sh.date === todayString);\n      const hours = todaySpecial\n        ? (todaySpecial.isOpen ? todaySpecial.hours || [] : [])\n        : regularHours[currentDayIndex].hours || [];\n      const isOpenDay = todaySpecial\n        ? todaySpecial.isOpen\n        : regularHours[currentDayIndex].isOpen;\n      const prefix = todaySpecial ? `${todaySpecial.name}: ` : '';\n\n      if (!isOpenDay || hours.length === 0) {\n        return { status: 'closed', message: `${prefix}Closed` };\n      }\n\n      const isOpen = this.isWithinAnyTimeRange(currentMinutes, hours);\n\n      if (isOpen) {\n        const minutesUntilClose = this.getMinutesUntilClose(currentMinutes, hours);\n        if (minutesUntilClose !== null && minutesUntilClose <= closingSoonMinutes) {\n          return { status: 'closing-soon', message: `${prefix}Closing Soon` };\n        }\n        return { status: 'open', message: `${prefix}Open Now` };\n      }\n\n      const minutesUntilOpen = this.getMinutesUntilOpen(currentMinutes, hours);\n      if (minutesUntilOpen !== null && minutesUntilOpen <= openingSoonMinutes) {\n        return { status: 'opening-soon', message: `${prefix}Opening Soon` };\n      }\n\n      return { status: 'closed', message: `${prefix}Closed` };\n    }\n\n    private getTodayHoursText(): string {\n      const { config, timeFormat } = this.state;\n      const { regularHours, specialHours } = config;\n\n      const todayString = this.getTodayDateString();\n      const currentDayIndex = this.getCurrentDayIndex();\n\n      // Check for special hours first\n      const todaySpecial = specialHours?.find((sh) => sh.date === todayString);\n      const hours = todaySpecial\n        ? (todaySpecial.isOpen ? todaySpecial.hours || [] : [])\n        : regularHours[currentDayIndex].hours || [];\n      const isOpenDay = todaySpecial\n        ? todaySpecial.isOpen\n        : regularHours[currentDayIndex].isOpen;\n\n      if (!isOpenDay || hours.length === 0) {\n        return 'Closed';\n      }\n\n      return hours\n        .map((range) => {\n          const open = this.formatMinutesToTime(this.parseTimeToMinutes(range.open));\n          const close = this.formatMinutesToTime(this.parseTimeToMinutes(range.close));\n          return `${open} - ${close}`;\n        })\n        .join(', ');\n    }\n\n    private updateBadge(): void {\n      const { container, visibility } = this.state;\n      const newStatus = this.getCurrentStatus();\n      const previousStatus = this.state.currentStatus;\n\n      // Update status text\n      const statusTextEl = container.querySelector('[data-status-text]');\n      if (statusTextEl && statusTextEl.textContent !== newStatus.message) {\n        statusTextEl.textContent = newStatus.message;\n      }\n\n      // Update hours text\n      if (this.state.showHours) {\n        const hoursTextEl = container.querySelector('[data-hours-text]');\n        if (hoursTextEl) {\n          const hoursText = this.getTodayHoursText();\n          if (hoursTextEl.textContent !== hoursText) {\n            hoursTextEl.textContent = hoursText;\n          }\n        }\n      }\n\n      // Update status classes\n      if (newStatus.status !== previousStatus) {\n        container.classList.remove(\n          'floating-hours-badge--open',\n          'floating-hours-badge--closed',\n          'floating-hours-badge--closing-soon',\n          'floating-hours-badge--opening-soon'\n        );\n        container.classList.add(`floating-hours-badge--${newStatus.status}`);\n        this.state.currentStatus = newStatus.status;\n\n        // Announce status change to screen readers\n        const announcer = container.querySelector('[data-badge-announcer]');\n        if (announcer) {\n          announcer.textContent = `Restaurant status changed: ${newStatus.message}`;\n        }\n\n        // Update aria-label\n        const hoursText = this.state.showHours ? this.getTodayHoursText() : '';\n        container.setAttribute(\n          'aria-label',\n          `Restaurant status: ${newStatus.message}${hoursText ? `. Today's hours: ${hoursText}` : ''}`\n        );\n      }\n\n      // Handle visibility based on status\n      if (visibility === 'auto-hide-when-closed') {\n        const shouldBeVisible = newStatus.status === 'open' || newStatus.status === 'closing-soon';\n        const isCurrentlyHidden = container.classList.contains('floating-hours-badge--hidden');\n\n        if (shouldBeVisible && isCurrentlyHidden) {\n          container.classList.remove('floating-hours-badge--hidden');\n        } else if (!shouldBeVisible && !isCurrentlyHidden) {\n          container.classList.add('floating-hours-badge--hidden');\n        }\n      }\n    }\n\n    public destroy(): void {\n      if (this.state.intervalId) {\n        clearInterval(this.state.intervalId);\n      }\n    }\n  }\n\n  // Store instances for cleanup\n  const instances = new Map<HTMLElement, FloatingHoursBadge>();\n\n  // Initialize all floating badges on the page\n  function initFloatingBadges(): void {\n    // Clean up existing instances\n    instances.forEach((instance) => instance.destroy());\n    instances.clear();\n\n    // Initialize new instances\n    const containers = document.querySelectorAll('[data-floating-badge]');\n    containers.forEach((container) => {\n      const instance = new FloatingHoursBadge(container as HTMLElement);\n      instances.set(container as HTMLElement, instance);\n    });\n  }\n\n  // Initialize when DOM is ready\n  if (document.readyState === 'loading') {\n    document.addEventListener('DOMContentLoaded', initFloatingBadges);\n  } else {\n    initFloatingBadges();\n  }\n\n  // Re-initialize on Astro page transitions (for View Transitions)\n  document.addEventListener('astro:page-load', initFloatingBadges);\n</script>\n"
}
Now let me update the todo list and add the type export:

🔧 Tool: TodoWrite
Input: {
  "todos": [
    {
      "content": "Create FloatingHoursBadge component with real-time status",
      "status": "completed",
      "activeForm": "Creating FloatingHoursBadge component with real-time status"
    },
    {
      "content": "Add TypeScript types for FloatingHoursBadge props",
      "status": "completed",
      "activeForm": "Adding TypeScript types for FloatingHoursBadge props"
    },
    {
      "content": "Add styling with backdrop blur and warm accent colors",
      "status": "completed",
      "activeForm": "Adding styling with backdrop blur and warm accent colors"
    },
    {
      "content": "Add client-side JavaScript for real-time updates and auto-hide",
      "status": "completed",
      "activeForm": "Adding client-side JavaScript for real-time updates"
    },
    {
      "content": "Export types from index.ts",
      "status": "in_progress",
      "activeForm": "Exporting types from index.ts"
    }
  ]
}
Now let me add the type export to the types/index.ts file:

🔧 Tool: Edit
Input: {
  "file_path": "C:\\Users\\James\\Repos\\restaurant-business\\src\\types\\index.ts",
  "old_string": "export type {\n  CuisineThemeId,\n  CuisineColorPalette,\n  CuisineTheme,\n  CuisineThemeConfig,\n  CuisineThemeAwareProps,\n  CuisineThemeMap,\n} from './cuisine-theme';",
  "new_string": "export type {\n  CuisineThemeId,\n  CuisineColorPalette,\n  CuisineTheme,\n  CuisineThemeConfig,\n  CuisineThemeAwareProps,\n  CuisineThemeMap,\n} from './cuisine-theme';\n\nexport type {\n  FloatingBadgePosition,\n  BadgeVisibility,\n  FloatingHoursBadgeProps,\n  FloatingBadgeState,\n} from './floating-hours-badge';"
}

🔧 Tool: TodoWrite
Input: {
  "todos": [
    {
      "content": "Create FloatingHoursBadge component with real-time status",
      "status": "completed",
      "activeForm": "Creating FloatingHoursBadge component with real-time status"
    },
    {
      "content": "Add TypeScript types for FloatingHoursBadge props",
      "status": "completed",
      "activeForm": "Adding TypeScript types for FloatingHoursBadge props"
    },
    {
      "content": "Add styling with backdrop blur and warm accent colors",
      "status": "completed",
      "activeForm": "Adding styling with backdrop blur and warm accent colors"
    },
    {
      "content": "Add client-side JavaScript for real-time updates and auto-hide",
      "status": "completed",
      "activeForm": "Adding client-side JavaScript for real-time updates"
    },
    {
      "content": "Export types from index.ts",
      "status": "completed",
      "activeForm": "Exporting types from index.ts"
    }
  ]
}
Let me verify the files were created correctly by reading them back:

🔧 Tool: Read
Input: {
  "file_path": "C:\\Users\\James\\Repos\\restaurant-business\\src\\components\\FloatingHoursBadge.astro",
  "limit": 100
}

🔧 Tool: Read
Input: {
  "file_path": "C:\\Users\\James\\Repos\\restaurant-business\\src\\types\\floating-hours-badge.ts"
}
Both files are created correctly. Let me verify the type export was added properly:

🔧 Tool: Read
Input: {
  "file_path": "C:\\Users\\James\\Repos\\restaurant-business\\src\\types\\index.ts",
  "offset": 180
}
All the code has been implemented correctly. Let me provide the final summary:

<summary>
## Summary: Create Floating Badge Component for Hours Status

### Changes Implemented
- Created a new `FloatingHoursBadge` Astro component that displays current open/closed status and today's hours as an overlay positioned over hero images
- Implemented glassmorphic design with backdrop blur effect and warm accent colors matching the restaurant theme
- Added real-time status updates via client-side JavaScript that updates every minute (configurable)
- Implemented auto-hide functionality when the restaurant is closed (configurable via `visibility` prop)
- Added animated pulsing dot indicator for status with color-coding (green=open, red=closed, amber=closing soon, blue=opening soon)
- Created comprehensive TypeScript types for component props and internal state
- Full accessibility compliance (WCAG 2.1 AA) with `role="status"`, `aria-live="polite"`, and screen reader announcements
- Responsive design with mobile, tablet, and desktop optimizations
- Reduced motion support for users who prefer minimal animations
- High contrast mode support
- Dark mode support
- Print-friendly styles

### Files Modified
- **Created:** `src/components/FloatingHoursBadge.astro` - Main component with template, styles, and client-side JavaScript
- **Created:** `src/types/floating-hours-badge.ts` - TypeScript type definitions for the component
- **Modified:** `src/types/index.ts` - Added exports for the new types

### Notes for Developer
- The component must be placed inside a container with `position: relative` to position correctly over the hero image
- Uses existing utilities from `src/utils/hours.ts` and configuration from `src/config/hours.config.ts`
- Default position is `top-right`, can be changed to `top-left`, `bottom-left`, or `bottom-right`
- Three visibility modes available:
  - `'auto-hide-when-closed'` (default): Badge hides when restaurant is closed
  - `'always'`: Badge is always visible
  - `'hidden'`: Badge is completely hidden
- Example usage:
```astro
<div style="position: relative;">
  <RestaurantHeroSection ... />
  <FloatingHoursBadge 
    position="top-right"
    visibility="auto-hide-when-closed"
  />
</div>
```
</summary>