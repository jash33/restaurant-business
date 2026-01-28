/**
 * Hours Configuration
 * Business hours configuration for the restaurant.
 * This file contains regular operating hours and special hours (holidays, events).
 */

import type {
  BusinessHoursConfig,
  DailyHours,
  SpecialHours,
  DayOfWeek,
} from '../types/hours';

// ============================================================================
// Days of Week (in order starting from Sunday)
// ============================================================================

export const DAYS_OF_WEEK: DayOfWeek[] = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
];

// ============================================================================
// Regular Weekly Hours
// ============================================================================

/**
 * Regular operating hours for each day of the week
 */
export const REGULAR_HOURS: DailyHours[] = [
  {
    day: 'Sunday',
    isOpen: true,
    hours: [
      { open: '10:00', close: '21:00' }, // Brunch through dinner
    ],
  },
  {
    day: 'Monday',
    isOpen: true,
    hours: [
      { open: '11:00', close: '22:00' },
    ],
  },
  {
    day: 'Tuesday',
    isOpen: true,
    hours: [
      { open: '11:00', close: '22:00' },
    ],
  },
  {
    day: 'Wednesday',
    isOpen: true,
    hours: [
      { open: '11:00', close: '22:00' },
    ],
  },
  {
    day: 'Thursday',
    isOpen: true,
    hours: [
      { open: '11:00', close: '22:00' },
    ],
  },
  {
    day: 'Friday',
    isOpen: true,
    hours: [
      { open: '11:00', close: '23:00' }, // Extended hours
    ],
  },
  {
    day: 'Saturday',
    isOpen: true,
    hours: [
      { open: '10:00', close: '23:00' }, // Brunch through late dinner
    ],
  },
];

// ============================================================================
// Special Hours (Holidays & Events)
// ============================================================================

/**
 * Special hours for holidays and events
 * Update these annually or as needed
 */
export const SPECIAL_HOURS: SpecialHours[] = [
  // 2026 Holidays
  {
    id: 'valentines-day-2026',
    name: "Valentine's Day",
    date: '2026-02-14',
    type: 'event',
    isOpen: true,
    hours: [{ open: '11:00', close: '23:00' }],
    description: 'Special dinner service with extended hours',
  },
  {
    id: 'easter-2026',
    name: 'Easter Sunday',
    date: '2026-04-05',
    type: 'holiday',
    isOpen: true,
    hours: [{ open: '10:00', close: '15:00' }],
    description: 'Easter brunch only',
  },
  {
    id: 'memorial-day-2026',
    name: 'Memorial Day',
    date: '2026-05-25',
    type: 'holiday',
    isOpen: true,
    hours: [{ open: '11:00', close: '21:00' }],
    description: 'Holiday hours',
  },
  {
    id: 'independence-day-2026',
    name: 'Independence Day',
    date: '2026-07-04',
    type: 'holiday',
    isOpen: true,
    hours: [{ open: '11:00', close: '21:00' }],
    description: 'Holiday hours',
  },
  {
    id: 'labor-day-2026',
    name: 'Labor Day',
    date: '2026-09-07',
    type: 'holiday',
    isOpen: true,
    hours: [{ open: '11:00', close: '21:00' }],
    description: 'Holiday hours',
  },
  {
    id: 'thanksgiving-2026',
    name: 'Thanksgiving',
    date: '2026-11-26',
    type: 'holiday',
    isOpen: false,
    description: 'Closed for Thanksgiving',
  },
  {
    id: 'christmas-eve-2026',
    name: 'Christmas Eve',
    date: '2026-12-24',
    type: 'holiday',
    isOpen: true,
    hours: [{ open: '11:00', close: '18:00' }],
    description: 'Early close for Christmas Eve',
  },
  {
    id: 'christmas-day-2026',
    name: 'Christmas Day',
    date: '2026-12-25',
    type: 'holiday',
    isOpen: false,
    description: 'Closed for Christmas Day',
  },
  {
    id: 'new-years-eve-2026',
    name: "New Year's Eve",
    date: '2026-12-31',
    type: 'event',
    isOpen: true,
    hours: [{ open: '17:00', close: '01:00' }],
    description: 'Special New Year\'s Eve celebration',
  },
];

// ============================================================================
// Business Hours Configuration
// ============================================================================

/**
 * Complete business hours configuration
 */
export const BUSINESS_HOURS_CONFIG: BusinessHoursConfig = {
  timezone: 'America/Chicago', // Houston timezone
  regularHours: REGULAR_HOURS,
  specialHours: SPECIAL_HOURS,
  closingSoonMinutes: 30, // Show "closing soon" 30 minutes before close
  openingSoonMinutes: 30, // Show "opening soon" 30 minutes before open
};

// ============================================================================
// Display Configuration
// ============================================================================

/**
 * Default display settings for the hours component
 */
export const HOURS_DISPLAY_CONFIG = {
  /** Default time format */
  defaultTimeFormat: '12h' as const,
  /** Default heading text */
  defaultHeading: 'Hours of Operation',
  /** Default subheading text */
  defaultSubheading: 'We look forward to serving you!',
  /** Default number of upcoming special hours to show */
  defaultUpcomingSpecialHoursCount: 3,
  /** Default update interval (1 minute) */
  defaultUpdateInterval: 60000,
  /** Status messages */
  statusMessages: {
    open: 'Open Now',
    closed: 'Closed',
    closingSoon: 'Closing Soon',
    openingSoon: 'Opening Soon',
  },
};
