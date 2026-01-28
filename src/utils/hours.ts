/**
 * Hours Utility Functions
 * Helper functions for business hours calculations and formatting.
 */

import type {
  BusinessHoursConfig,
  CurrentStatus,
  DailyHours,
  HoursDisplayState,
  OperatingStatus,
  SpecialHours,
  TimeFormat,
  TimeRange,
} from '../types/hours';
import { BUSINESS_HOURS_CONFIG, DAYS_OF_WEEK } from '../config/hours.config';

// ============================================================================
// Time Parsing & Formatting
// ============================================================================

/**
 * Parse a time string (HH:mm) into minutes since midnight
 */
export function parseTimeToMinutes(time: string): number {
  const [hours, minutes] = time.split(':').map(Number);
  return hours * 60 + minutes;
}

/**
 * Format minutes since midnight to a time string
 */
export function formatMinutesToTime(
  minutes: number,
  format: TimeFormat = '12h'
): string {
  // Handle times that cross midnight
  const normalizedMinutes = minutes >= 0 ? minutes % (24 * 60) : minutes + 24 * 60;
  const hours = Math.floor(normalizedMinutes / 60);
  const mins = normalizedMinutes % 60;

  if (format === '24h') {
    return `${hours.toString().padStart(2, '0')}:${mins.toString().padStart(2, '0')}`;
  }

  // 12-hour format
  const period = hours >= 12 ? 'PM' : 'AM';
  const displayHours = hours % 12 || 12;
  const minsStr = mins === 0 ? '' : `:${mins.toString().padStart(2, '0')}`;
  return `${displayHours}${minsStr} ${period}`;
}

/**
 * Format a time range for display
 */
export function formatTimeRange(
  range: TimeRange,
  format: TimeFormat = '12h'
): string {
  const openTime = formatMinutesToTime(parseTimeToMinutes(range.open), format);
  const closeTime = formatMinutesToTime(parseTimeToMinutes(range.close), format);
  return `${openTime} - ${closeTime}`;
}

/**
 * Format multiple time ranges (for split shifts)
 */
export function formatTimeRanges(
  ranges: TimeRange[],
  format: TimeFormat = '12h'
): string {
  return ranges.map((range) => formatTimeRange(range, format)).join(', ');
}

// ============================================================================
// Date & Day Helpers
// ============================================================================

/**
 * Get the current day index (0 = Sunday, 6 = Saturday)
 */
export function getCurrentDayIndex(timezone?: string): number {
  const now = timezone
    ? new Date(new Date().toLocaleString('en-US', { timeZone: timezone }))
    : new Date();
  return now.getDay();
}

/**
 * Get the current time in minutes since midnight
 */
export function getCurrentTimeInMinutes(timezone?: string): number {
  const now = timezone
    ? new Date(new Date().toLocaleString('en-US', { timeZone: timezone }))
    : new Date();
  return now.getHours() * 60 + now.getMinutes();
}

/**
 * Get today's date in YYYY-MM-DD format
 */
export function getTodayDateString(timezone?: string): string {
  const now = timezone
    ? new Date(new Date().toLocaleString('en-US', { timeZone: timezone }))
    : new Date();
  const year = now.getFullYear();
  const month = (now.getMonth() + 1).toString().padStart(2, '0');
  const day = now.getDate().toString().padStart(2, '0');
  return `${year}-${month}-${day}`;
}

/**
 * Format a date for display
 */
export function formatDate(dateString: string): string {
  const date = new Date(dateString + 'T00:00:00');
  return date.toLocaleDateString('en-US', {
    weekday: 'short',
    month: 'short',
    day: 'numeric',
  });
}

// ============================================================================
// Status Calculation
// ============================================================================

/**
 * Check if currently within a time range
 */
export function isWithinTimeRange(
  currentMinutes: number,
  range: TimeRange
): boolean {
  const openMinutes = parseTimeToMinutes(range.open);
  let closeMinutes = parseTimeToMinutes(range.close);

  // Handle times that cross midnight (e.g., 17:00 - 01:00)
  if (closeMinutes < openMinutes) {
    closeMinutes += 24 * 60;
    // If current time is after midnight but before close, adjust
    if (currentMinutes < openMinutes) {
      return currentMinutes + 24 * 60 >= openMinutes && currentMinutes + 24 * 60 < closeMinutes;
    }
  }

  return currentMinutes >= openMinutes && currentMinutes < closeMinutes;
}

/**
 * Check if currently within any time range
 */
export function isWithinAnyTimeRange(
  currentMinutes: number,
  ranges: TimeRange[]
): boolean {
  return ranges.some((range) => isWithinTimeRange(currentMinutes, range));
}

/**
 * Get minutes until next time range starts
 */
export function getMinutesUntilOpen(
  currentMinutes: number,
  ranges: TimeRange[]
): number | null {
  const sortedRanges = [...ranges].sort(
    (a, b) => parseTimeToMinutes(a.open) - parseTimeToMinutes(b.open)
  );

  for (const range of sortedRanges) {
    const openMinutes = parseTimeToMinutes(range.open);
    if (openMinutes > currentMinutes) {
      return openMinutes - currentMinutes;
    }
  }

  // Check if first opening is tomorrow (wrap around)
  if (sortedRanges.length > 0) {
    const firstOpen = parseTimeToMinutes(sortedRanges[0].open);
    return 24 * 60 - currentMinutes + firstOpen;
  }

  return null;
}

/**
 * Get minutes until closing
 */
export function getMinutesUntilClose(
  currentMinutes: number,
  ranges: TimeRange[]
): number | null {
  for (const range of ranges) {
    if (isWithinTimeRange(currentMinutes, range)) {
      let closeMinutes = parseTimeToMinutes(range.close);
      const openMinutes = parseTimeToMinutes(range.open);

      // Handle times that cross midnight
      if (closeMinutes < openMinutes) {
        closeMinutes += 24 * 60;
        if (currentMinutes < openMinutes) {
          return closeMinutes - (currentMinutes + 24 * 60);
        }
      }

      return closeMinutes - currentMinutes;
    }
  }
  return null;
}

/**
 * Get the current operating status
 */
export function getCurrentStatus(
  config: BusinessHoursConfig = BUSINESS_HOURS_CONFIG
): CurrentStatus {
  const { timezone, regularHours, specialHours, closingSoonMinutes = 30, openingSoonMinutes = 30 } = config;

  const todayString = getTodayDateString(timezone);
  const currentMinutes = getCurrentTimeInMinutes(timezone);
  const currentDayIndex = getCurrentDayIndex(timezone);

  // Check for special hours first
  const todaySpecial = specialHours?.find((sh) => sh.date === todayString);
  if (todaySpecial) {
    return getStatusForDay(
      currentMinutes,
      todaySpecial.isOpen,
      todaySpecial.hours || [],
      closingSoonMinutes,
      openingSoonMinutes,
      todaySpecial.name
    );
  }

  // Use regular hours
  const todayHours = regularHours[currentDayIndex];
  return getStatusForDay(
    currentMinutes,
    todayHours.isOpen,
    todayHours.hours || [],
    closingSoonMinutes,
    openingSoonMinutes
  );
}

/**
 * Get status for a specific day's hours
 */
function getStatusForDay(
  currentMinutes: number,
  isOpenDay: boolean,
  hours: TimeRange[],
  closingSoonMinutes: number,
  openingSoonMinutes: number,
  specialDayName?: string
): CurrentStatus {
  const prefix = specialDayName ? `${specialDayName}: ` : '';

  if (!isOpenDay || hours.length === 0) {
    return {
      status: 'closed',
      message: `${prefix}Closed`,
    };
  }

  const isOpen = isWithinAnyTimeRange(currentMinutes, hours);

  if (isOpen) {
    const minutesUntilClose = getMinutesUntilClose(currentMinutes, hours);

    if (minutesUntilClose !== null && minutesUntilClose <= closingSoonMinutes) {
      return {
        status: 'closing-soon',
        message: `${prefix}Closing Soon`,
        nextChangeMessage: `Closes in ${minutesUntilClose} minutes`,
      };
    }

    return {
      status: 'open',
      message: `${prefix}Open Now`,
      nextChangeMessage: minutesUntilClose
        ? `Open for ${formatDuration(minutesUntilClose)}`
        : undefined,
    };
  }

  // Currently closed
  const minutesUntilOpen = getMinutesUntilOpen(currentMinutes, hours);

  if (minutesUntilOpen !== null && minutesUntilOpen <= openingSoonMinutes) {
    return {
      status: 'opening-soon',
      message: `${prefix}Opening Soon`,
      nextChangeMessage: `Opens in ${minutesUntilOpen} minutes`,
    };
  }

  return {
    status: 'closed',
    message: `${prefix}Closed`,
    nextChangeMessage: minutesUntilOpen
      ? `Opens in ${formatDuration(minutesUntilOpen)}`
      : undefined,
  };
}

/**
 * Format duration in human-readable format
 */
export function formatDuration(minutes: number): string {
  if (minutes < 60) {
    return `${minutes} min`;
  }
  const hours = Math.floor(minutes / 60);
  const mins = minutes % 60;
  if (mins === 0) {
    return `${hours} hr`;
  }
  return `${hours} hr ${mins} min`;
}

// ============================================================================
// Special Hours Helpers
// ============================================================================

/**
 * Get upcoming special hours
 */
export function getUpcomingSpecialHours(
  config: BusinessHoursConfig = BUSINESS_HOURS_CONFIG,
  count: number = 3
): SpecialHours[] {
  const { timezone, specialHours } = config;
  if (!specialHours || specialHours.length === 0) return [];

  const todayString = getTodayDateString(timezone);

  return specialHours
    .filter((sh) => sh.date >= todayString)
    .sort((a, b) => a.date.localeCompare(b.date))
    .slice(0, count);
}

/**
 * Get today's special hours if any
 */
export function getTodaySpecialHours(
  config: BusinessHoursConfig = BUSINESS_HOURS_CONFIG
): SpecialHours | undefined {
  const { timezone, specialHours } = config;
  if (!specialHours) return undefined;

  const todayString = getTodayDateString(timezone);
  return specialHours.find((sh) => sh.date === todayString);
}

// ============================================================================
// Hours Display State
// ============================================================================

/**
 * Get the complete display state for the hours component
 */
export function getHoursDisplayState(
  config: BusinessHoursConfig = BUSINESS_HOURS_CONFIG
): HoursDisplayState {
  const { timezone } = config;
  const currentStatus = getCurrentStatus(config);
  const currentDayIndex = getCurrentDayIndex(timezone);
  const currentMinutes = getCurrentTimeInMinutes(timezone);
  const todaySpecialHours = getTodaySpecialHours(config);

  return {
    currentStatus,
    currentDayIndex,
    currentTime: formatMinutesToTime(currentMinutes),
    todaySpecialHours,
    isSpecialDay: !!todaySpecialHours,
  };
}

// ============================================================================
// Hours Display Helpers
// ============================================================================

/**
 * Get display text for a day's hours
 */
export function getDayHoursText(
  day: DailyHours,
  format: TimeFormat = '12h'
): string {
  if (!day.isOpen || !day.hours || day.hours.length === 0) {
    return 'Closed';
  }
  return formatTimeRanges(day.hours, format);
}

/**
 * Get status color class based on operating status
 */
export function getStatusColorClass(status: OperatingStatus): string {
  switch (status) {
    case 'open':
      return 'status--open';
    case 'closed':
      return 'status--closed';
    case 'closing-soon':
      return 'status--closing-soon';
    case 'opening-soon':
      return 'status--opening-soon';
    default:
      return '';
  }
}

/**
 * Get day abbreviation for compact display
 */
export function getDayAbbreviation(day: string): string {
  return day.substring(0, 3);
}

/**
 * Check if two days have the same hours
 */
export function haveSameHours(day1: DailyHours, day2: DailyHours): boolean {
  if (day1.isOpen !== day2.isOpen) return false;
  if (!day1.hours && !day2.hours) return true;
  if (!day1.hours || !day2.hours) return false;
  if (day1.hours.length !== day2.hours.length) return false;

  return day1.hours.every((range, index) => {
    const otherRange = day2.hours![index];
    return range.open === otherRange.open && range.close === otherRange.close;
  });
}

/**
 * Group consecutive days with same hours for compact display
 */
export function groupDaysByHours(hours: DailyHours[]): Array<{
  days: string;
  hours: string;
  isOpen: boolean;
}> {
  const groups: Array<{ startDay: number; endDay: number; day: DailyHours }> = [];

  hours.forEach((day, index) => {
    const lastGroup = groups[groups.length - 1];

    if (lastGroup && haveSameHours(lastGroup.day, day) && lastGroup.endDay === index - 1) {
      lastGroup.endDay = index;
    } else {
      groups.push({ startDay: index, endDay: index, day });
    }
  });

  return groups.map((group) => {
    const startDayName = DAYS_OF_WEEK[group.startDay];
    const endDayName = DAYS_OF_WEEK[group.endDay];

    let daysText: string;
    if (group.startDay === group.endDay) {
      daysText = startDayName;
    } else if (group.endDay - group.startDay === 1) {
      daysText = `${getDayAbbreviation(startDayName)} & ${getDayAbbreviation(endDayName)}`;
    } else {
      daysText = `${getDayAbbreviation(startDayName)} - ${getDayAbbreviation(endDayName)}`;
    }

    return {
      days: daysText,
      hours: getDayHoursText(group.day),
      isOpen: group.day.isOpen,
    };
  });
}
