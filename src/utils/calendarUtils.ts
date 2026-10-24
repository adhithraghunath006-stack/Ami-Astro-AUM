import { CelestialEvent, TimeZoneMode } from '@/types/calendar';

export const CURRENT_DATE_STRING = '2026-10-24T23:00:00+05:30';

/**
 * Returns current Date object. In runtime, if system time is ahead/behind,
 * defaults to 2026-10-24 if needed, or parses the reference date.
 */
export function getReferenceDate(): Date {
  // Respect system date or fall back to verified reference date for 2026
  const sysDate = new Date();
  if (sysDate.getFullYear() === 2026) {
    return sysDate;
  }
  return new Date(CURRENT_DATE_STRING);
}

/**
 * Formats a celestial event's date and time based on the active timezone mode.
 */
export function formatEventDateTime(
  event: CelestialEvent,
  mode: TimeZoneMode = 'IST'
): {
  displayDate: string;
  displayTime: string;
  hasTime: boolean;
  dateRolledOver: boolean;
  timeZoneLabel: string;
} {
  const timeZone =
    mode === 'IST'
      ? 'Asia/Kolkata'
      : mode === 'UTC'
      ? 'UTC'
      : undefined; // Local browser

  const timeZoneLabel =
    mode === 'IST' ? 'IST (UTC+5:30)' : mode === 'UTC' ? 'UTC' : 'Local';

  // If there's an exact UTC ISO timestamp
  if (event.utcIso) {
    const d = new Date(event.utcIso);

    // Format date in target time zone
    const dateFormatter = new Intl.DateTimeFormat('en-US', {
      timeZone,
      month: 'short',
      day: 'numeric',
      year: 'numeric',
    });
    const displayDate = dateFormatter.format(d);

    // Format time in target time zone
    const timeFormatter = new Intl.DateTimeFormat('en-US', {
      timeZone,
      hour: 'numeric',
      minute: '2-digit',
      hour12: true,
    });
    const displayTime = timeFormatter.format(d);

    // Check if the date rolled over compared to UTC start date
    const utcDateOnly = event.startDate;
    const targetDateIso = new Intl.DateTimeFormat('en-CA', {
      timeZone,
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
    }).format(d);

    const dateRolledOver = mode !== 'UTC' && targetDateIso !== utcDateOnly;

    return {
      displayDate,
      displayTime,
      hasTime: true,
      dateRolledOver,
      timeZoneLabel,
    };
  }

  // Multi-day event or date without exact timestamp
  if (event.endDate && event.endDate !== event.startDate) {
    const startParts = event.startDate.split('-').map(Number);
    const endParts = event.endDate.split('-').map(Number);
    const startDate = new Date(Date.UTC(startParts[0], startParts[1] - 1, startParts[2]));
    const endDate = new Date(Date.UTC(endParts[0], endParts[1] - 1, endParts[2]));

    const monthStr = startDate.toLocaleDateString('en-US', { month: 'short', timeZone: 'UTC' });
    const startDay = startDate.getUTCDate();
    const endDay = endDate.getUTCDate();
    const year = startDate.getUTCFullYear();

    return {
      displayDate: `${monthStr} ${startDay}–${endDay}, ${year}`,
      displayTime: 'All-night observation',
      hasTime: false,
      dateRolledOver: false,
      timeZoneLabel,
    };
  }

  // Single date without specific time
  const [y, m, d] = event.startDate.split('-').map(Number);
  const dateObj = new Date(Date.UTC(y, m - 1, d));
  const displayDate = dateObj.toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
    timeZone: 'UTC',
  });

  return {
    displayDate,
    displayTime: 'Optimal after sunset / predawn',
    hasTime: false,
    dateRolledOver: false,
    timeZoneLabel,
  };
}

/**
 * Checks if an event is in the past, today, or upcoming relative to reference date.
 */
export function getEventStatus(
  event: CelestialEvent,
  refDate: Date = getReferenceDate()
): 'past' | 'today' | 'upcoming' {
  // If the event has an exact timestamp
  if (event.utcIso) {
    const eventTime = new Date(event.utcIso).getTime();
    const nowTime = refDate.getTime();
    const diffHours = (eventTime - nowTime) / (1000 * 60 * 60);

    // Within same 24-hour window
    if (Math.abs(diffHours) <= 12) {
      return 'today';
    }
    return eventTime < nowTime ? 'past' : 'upcoming';
  }

  // For multi-day or single-day events
  const targetEndStr = event.endDate || event.startDate;
  const [endY, endM, endD] = targetEndStr.split('-').map(Number);
  const endOfDay = new Date(endY, endM - 1, endD, 23, 59, 59).getTime();

  const [startY, startM, startD] = event.startDate.split('-').map(Number);
  const startOfDay = new Date(startY, startM - 1, startD, 0, 0, 0).getTime();

  const now = refDate.getTime();

  if (now >= startOfDay && now <= endOfDay) {
    return 'today';
  }
  if (now > endOfDay) {
    return 'past';
  }
  return 'upcoming';
}

/**
 * Generates an .ics file data URL for adding the event to calendar.
 */
export function generateIcsUrl(event: CelestialEvent): string {
  let dtStart = '';
  let dtEnd = '';

  if (event.utcIso) {
    const start = new Date(event.utcIso);
    const end = new Date(start.getTime() + 2 * 60 * 60 * 1000); // 2 hours duration default
    dtStart = start.toISOString().replace(/[-:]/g, '').split('.')[0] + 'Z';
    dtEnd = end.toISOString().replace(/[-:]/g, '').split('.')[0] + 'Z';
  } else {
    // Whole day event
    const startClean = event.startDate.replace(/-/g, '');
    dtStart = `${startClean}T180000Z`;
    dtEnd = `${startClean}T230000Z`;
  }

  const icsData = [
    'BEGIN:VCALENDAR',
    'VERSION:2.0',
    'PRODID:-//AMI-ASTRO//Astronomy Calendar 2026//EN',
    'CALSCALE:GREGORIAN',
    'BEGIN:VEVENT',
    `UID:ami-astro-${event.id}@amity.edu`,
    `DTSTAMP:${new Date().toISOString().replace(/[-:]/g, '').split('.')[0]}Z`,
    `DTSTART:${dtStart}`,
    `DTEND:${dtEnd}`,
    `SUMMARY:🔭 ${event.title} - AMI-ASTRO`,
    `DESCRIPTION:${event.shortDescription.replace(/\n/g, ' ')}\\n\\nViewing Tip: ${event.viewingTip}\\nEquipment: ${event.equipment}\\nSource: ${event.sourceName}`,
    `LOCATION:Night Sky (${event.visibilityRegion})`,
    'STATUS:CONFIRMED',
    'END:VEVENT',
    'END:VCALENDAR',
  ].join('\r\n');

  return `data:text/calendar;charset=utf-8,${encodeURIComponent(icsData)}`;
}

/**
 * Generates a Google Calendar event link.
 */
export function getGoogleCalendarLink(event: CelestialEvent): string {
  let dates = '';
  if (event.utcIso) {
    const start = new Date(event.utcIso);
    const end = new Date(start.getTime() + 2 * 60 * 60 * 1000);
    const s = start.toISOString().replace(/[-:]/g, '').split('.')[0] + 'Z';
    const e = end.toISOString().replace(/[-:]/g, '').split('.')[0] + 'Z';
    dates = `${s}/${e}`;
  } else {
    const s = event.startDate.replace(/-/g, '') + 'T180000Z';
    const e = event.startDate.replace(/-/g, '') + 'T230000Z';
    dates = `${s}/${e}`;
  }

  const url = new URL('https://calendar.google.com/calendar/render');
  url.searchParams.set('action', 'TEMPLATE');
  url.searchParams.set('text', `🔭 ${event.title} • AMI-ASTRO Celestial Event`);
  url.searchParams.set(
    'details',
    `${event.shortDescription}\n\nViewing Tip: ${event.viewingTip}\nEquipment: ${event.equipment}\nOptimal Time: ${event.optimalTime}\n\nPresented by AMI-ASTRO Astronomy Club, Amity University Mumbai.`
  );
  url.searchParams.set('location', `Night Sky (${event.visibilityRegion})`);
  url.searchParams.set('dates', dates);

  return url.toString();
}

/**
 * Month names lookup.
 */
export const MONTH_NAMES = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];
