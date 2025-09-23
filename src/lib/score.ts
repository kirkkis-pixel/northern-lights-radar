export interface ScoreComponents {
  P: number; // Aurora probability (0-1)
  Visibility: number; // 1 - cloud cover (0-1)
  Dark: number; // Darkness factor (0-1)
  MoonOK: number; // Moon factor (0-1)
}

export interface ScoreResult {
  score: number; // Final score (0-100)
  badge: string; // Badge level
  components: ScoreComponents;
  raw: Record<string, unknown>; // Raw data for debugging
}

export type BadgeLevel = 'Poor' | 'Fair' | 'Good' | 'Great' | 'Excellent';

/**
 * Calculates the viewing conditions score based on the simple formula:
 * Score = round(100 * P * Visibility * Dark * MoonOK)
 */
export function calculateScore(
  auroraProbability: number,
  cloudCover: number,
  darknessFactor: number,
  moonBrightness: number
): ScoreResult {
  // Normalize inputs to 0-1 range
  const P = Math.max(0, Math.min(1, auroraProbability));
  const Cloud = Math.max(0, Math.min(1, cloudCover));
  const Dark = Math.max(0, Math.min(1, darknessFactor));
  const Moon = Math.max(0, Math.min(1, moonBrightness));
  
  // Calculate components
  const Visibility = 1 - Cloud;
  const MoonOK = 1 - 0.6 * Moon; // Full moon reduces conditions by up to 60%
  
  // Calculate final score
  const score = Math.round(100 * P * Visibility * Dark * MoonOK);
  
  // Determine badge level
  const badge = getBadgeLevel(score);
  
  return {
    score,
    badge,
    components: {
      P,
      Visibility,
      Dark,
      MoonOK
    },
    raw: {
      auroraProbability,
      cloudCover,
      darknessFactor,
      moonBrightness
    }
  };
}

/**
 * Gets badge level based on score
 */
export function getBadgeLevel(score: number): BadgeLevel {
  if (score >= 80) return 'Excellent';
  if (score >= 60) return 'Great';
  if (score >= 40) return 'Good';
  if (score >= 20) return 'Fair';
  return 'Poor';
}

/**
 * Gets badge color class for UI
 */
export function getBadgeColorClass(badge: BadgeLevel): string {
  switch (badge) {
    case 'Excellent':
      return 'bg-green-100 text-green-800 border-green-200';
    case 'Great':
      return 'bg-blue-100 text-blue-800 border-blue-200';
    case 'Good':
      return 'bg-yellow-100 text-yellow-800 border-yellow-200';
    case 'Fair':
      return 'bg-orange-100 text-orange-800 border-orange-200';
    case 'Poor':
      return 'bg-red-100 text-red-800 border-red-200';
    default:
      return 'bg-gray-100 text-gray-800 border-gray-200';
  }
}

/**
 * Formats component values for display
 */
export function formatComponentValue(component: keyof ScoreComponents, value: number): string {
  switch (component) {
    case 'P':
      return `${Math.round(value * 100)}%`;
    case 'Visibility':
      return `${Math.round(value * 100)}%`;
    case 'Dark':
      return value > 0.8 ? 'High' : value > 0.5 ? 'Medium' : 'Low';
    case 'MoonOK':
      return `${Math.round(value * 100)}%`;
    default:
      return `${Math.round(value * 100)}%`;
  }
}

/**
 * Gets component description for display
 */
export function getComponentDescription(component: keyof ScoreComponents): string {
  switch (component) {
    case 'P':
      return 'Aurora probability';
    case 'Visibility':
      return 'Sky visibility';
    case 'Dark':
      return 'Darkness level';
    case 'MoonOK':
      return 'Moon conditions';
    default:
      return 'Unknown';
  }
}
