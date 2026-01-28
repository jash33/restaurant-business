/**
 * Hours Types
 * Type definitions for business hours display and management.
 */

/**
 * Days of the week
 */
export type DayOfWeek =
  | 'Sunday'
  | 'Monday'
  | 'Tuesday'
  | 'Wednesday'
  | 'Thursday'
  | 'Friday'
  | 'Saturday';

/**
 * Operating status for a business
 */
export type OperatingStatus = 'open' | 'closed' | 'closing-soon' | 'opening-soon';

/**
 * Time format for display
 */
export type TimeFormat = '12h' | '24h';

/**
 * Represents a time range with open and close times
 */
export interface TimeRange {
  /** Opening time in HH:mm format (24-hour) */
  open: string;
  /** Closing time in HH:mm format (24-hour) */
  close: string;
}

/**
 * Represents regular hours for a single day
 */
export interface DailyHours {
  /** Day of the week */
  day: DayOfWeek;
  /** Whether the business is open this day */
  isOpen: boolean;
  /** Time ranges (supports split shifts like lunch/dinner) */
  hours?: TimeRange[];
}

/**
 * Type of special hours (holiday, event, etc.)
 */
export type SpecialHoursType = 'holiday' | 'event' | 'seasonal' | 'other';

/**
 * Represents special hours for a specific date
 */
export interface SpecialHours {
  /** Unique identifier for the special hours */
  id: string;
  /** Name of the holiday or event */
  name: string;
  /** Date in YYYY-MM-DD format */
  date: string;
  /** Type of special hours */
  type: SpecialHoursType;
  /** Whether the business is open */
  isOpen: boolean;
  /** Optional modified hours if open */
  hours?: TimeRange[];
  /** Optional description */
  description?: string;
}

/**
 * Business hours configuration
 */
export interface BusinessHoursConfig {
  /** Timezone for the business (IANA timezone) */
  timezone: string;
  /** Regular weekly hours */
  regularHours: DailyHours[];
  /** Special hours (holidays, events, etc.) */
  specialHours?: SpecialHours[];
  /** Minutes before closing to show "closing soon" status */
  closingSoonMinutes?: number;
  /** Minutes before opening to show "opening soon" status */
  openingSoonMinutes?: number;
}

/**
 * Current status information
 */
export interface CurrentStatus {
  /** Current operating status */
  status: OperatingStatus;
  /** Human-readable status message */
  message: string;
  /** Next status change time (ISO string) */
  nextChangeAt?: string;
  /** Human-readable next change message */
  nextChangeMessage?: string;
}

/**
 * Props for the HoursDisplay component
 */
export interface HoursDisplayProps {
  /** Business hours configuration (uses default if not provided) */
  config?: BusinessHoursConfig;
  /** Time format for display (default: '12h') */
  timeFormat?: TimeFormat;
  /** Section heading */
  heading?: string;
  /** Section subheading */
  subheading?: string;
  /** Whether to show the current status indicator (default: true) */
  showStatus?: boolean;
  /** Whether to show special hours section (default: true) */
  showSpecialHours?: boolean;
  /** How many upcoming special hours to show (default: 3) */
  upcomingSpecialHoursCount?: number;
  /** Update interval in milliseconds (default: 60000 = 1 minute) */
  updateInterval?: number;
  /** Optional section ID for anchor links */
  id?: string;
  /** Additional CSS class names */
  class?: string;
}

/**
 * Hours display state for client-side updates
 */
export interface HoursDisplayState {
  /** Current status */
  currentStatus: CurrentStatus;
  /** Current day index (0 = Sunday) */
  currentDayIndex: number;
  /** Current time string */
  currentTime: string;
  /** Active special hours for today (if any) */
  todaySpecialHours?: SpecialHours;
  /** Whether currently within special hours */
  isSpecialDay: boolean;
}
