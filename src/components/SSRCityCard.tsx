import { getAuroraNow } from '@/lib/aurora-now';

interface City {
  slug: string;
  name: string;
  region: string;
  country: string;
  latitude: number;
  longitude: number;
  timezone: string;
  viewingSpots: string[];
  description: string;
}

interface SSRCityCardProps {
  city: City;
}

const getCountryFlag = (country: string) => {
  switch (country) {
    case 'Finland': return '🇫🇮';
    case 'Sweden': return '🇸🇪';
    case 'Norway': return '🇳🇴';
    default: return '';
  }
};

const getScoreColor = (score: number) => {
  if (score >= 80) return 'text-green-400';
  if (score >= 60) return 'text-blue-400';
  if (score >= 40) return 'text-yellow-400';
  if (score >= 20) return 'text-orange-400';
  return 'text-red-400';
};

const getScoreBadge = (score: number) => {
  if (score >= 80) return 'Excellent';
  if (score >= 60) return 'Great';
  if (score >= 40) return 'Good';
  if (score >= 20) return 'Fair';
  return 'Poor';
};

export default function SSRCityCard({ city }: SSRCityCardProps) {
  // For SSR, provide static data that will be updated by client-side hydration
  const auroraData = {
    score: 0,
    kp: 0,
    prob: 0,
    cloudPct: 100,
    dark: 0,
    moon: 1,
    updatedAt: new Date().toISOString(),
    freshness: {}
  };

  const formatTime = (timestamp: string) => {
    return new Date(timestamp).toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
      timeZone: city.timezone
    });
  };

  // Always render the card with data (either real or fallback)

  return (
    <div className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-6 hover:bg-white/10 transition-all duration-300">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-xl font-semibold text-white">{city.name}</h3>
        <span className="text-2xl">{getCountryFlag(city.country)}</span>
      </div>
      
      <p className="text-white/60 text-sm mb-4">{city.description}</p>
      
      {/* Aurora Score */}
      <div className="mb-4">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm text-white/70">Aurora Score</span>
          <span className={`text-2xl font-bold ${getScoreColor(auroraData.score)}`}>
            {auroraData.score}
          </span>
        </div>
        <div className="text-xs text-white/50">
          {getScoreBadge(auroraData.score)} • Updated {formatTime(auroraData.updatedAt)}
        </div>
      </div>

      {/* Data Details */}
      <div className="space-y-2 text-xs text-white/60">
        {auroraData.kp !== undefined && (
          <div className="flex justify-between">
            <span>Kp Index:</span>
            <span>{auroraData.kp}</span>
          </div>
        )}
        {auroraData.prob !== undefined && (
          <div className="flex justify-between">
            <span>Aurora Probability:</span>
            <span>{auroraData.prob}%</span>
          </div>
        )}
        {auroraData.cloudPct !== undefined && (
          <div className="flex justify-between">
            <span>Cloud Cover:</span>
            <span>{auroraData.cloudPct}%</span>
          </div>
        )}
        <div className="flex justify-between">
          <span>Darkness:</span>
          <span>{auroraData.dark >= 0.5 ? 'Dark' : 'Twilight/Day'}</span>
        </div>
        <div className="flex justify-between">
          <span>Moon Conditions:</span>
          <span>{Math.round(auroraData.moon * 100)}%</span>
        </div>
      </div>

      <div className="text-xs text-white/40 mt-4">
        {city.region}, {city.country}
      </div>
    </div>
  );
}
