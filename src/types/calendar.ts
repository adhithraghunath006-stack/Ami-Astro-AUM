export type CelestialCategory =
  | 'moon-phase'
  | 'meteor-shower'
  | 'eclipse'
  | 'planetary'
  | 'solstice-equinox';

export type EquipmentRecommendation =
  | 'Naked Eye'
  | 'Binoculars'
  | 'Telescope'
  | 'Naked Eye or Binoculars'
  | 'Binoculars or Telescope'
  | 'Naked Eye, Binoculars or Telescope'
  | 'Telescope or Binoculars'
  | 'Binoculars or Naked Eye'
  | 'Solar Filter / Eclipse Glasses'
  | 'Solar Filter / Eclipse Glasses (Naked eye strictly during totality)'
  | 'Telescope with Solar Filter or Solar Eclipse Glasses';

export type TimeZoneMode = 'IST' | 'UTC' | 'LOCAL';

export type EventStatusFilter = 'all' | 'upcoming' | 'past';

export interface CelestialEvent {
  id: string;
  title: string;
  category: CelestialCategory;
  categoryLabel: string;
  // Primary UTC date & time
  startDate: string; // 'YYYY-MM-DD'
  endDate?: string;   // 'YYYY-MM-DD' (for multi-day showers)
  utcTime?: string;   // 'HH:mm'
  utcIso?: string;    // 'YYYY-MM-DDTHH:mm:ssZ'
  
  // Educational & Astronomical Content
  shortDescription: string;
  detailedOverview: string;
  scientificContext?: string;
  
  // Observational Guidance
  viewingTip: string;
  optimalTime: string;
  skyDirection?: string;
  equipment: EquipmentRecommendation;
  equipmentNotes?: string;
  visibilityRegion?: string;
  
  // Specific Celestial Data
  moonInterference?: 'None' | 'Low' | 'Moderate' | 'High' | string;
  radiantConstellation?: string;
  parentBody?: string;
  peakRatePerHour?: string;
  magnitude?: string;
  isSupermoon?: boolean;
  isBlueMoon?: boolean;
  
  // Sources & Verification
  sourceName: string;
  sourceUrl: string;
}

export interface MonthData {
  monthIndex: number; // 0 = Jan, 11 = Dec
  monthName: string;
  year: number;
  eventsCount: number;
}
