import Link from 'next/link';
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

const formatDarkness = (dark: number) => {
  if (dark > 0.8) return 'Deep Darkness';
  if (dark > 0.5) return 'Dark';
  if (dark > 0.2) return 'Twilight';
  return 'Daylight';
};

const formatMoon = (moon: number) => {
  if (moon > 0.8) return 'New Moon';
  if (moon > 0.6) return 'Crescent';
  if (moon > 0.4) return 'Half Moon';
  if (moon > 0.2) return 'Gibbous';
  return 'Full Moon';
};

export default async function SSRCityCard({ city }: SSRCityCardProps) {
  let auroraData;
  let error = false;

  try {
    auroraData = await getAuroraNow(city.latitude, city.longitude);
  } catch (e) {
    console.error(`Failed to fetch aurora data for ${city.name}:`, e);
    error = true;
  }

  const score = auroraData?.score ?? 0;
  const kp = auroraData?.kp ?? 0;
  const prob = auroraData?.prob ?? 0;
  const cloudPct = auroraData?.cloudPct ?? 100;
  const dark = auroraData?.dark ?? 0;
  const moon = auroraData?.moon ?? 1;
  const updatedAt = auroraData?.updatedAt ?? new Date().toISOString();

  return (
    <Link href={`/${city.country.toLowerCase()}/northern-lights/${city.slug}`} passHref>
      <div className="group bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-6 hover:bg-white/10 transition-all duration-300 flex flex-col justify-between">
        <div>
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-xl font-semibold text-white group-hover:text-cyan-300 transition-colors">
              {city.name}
            </h3>
            <span className="text-2xl">{getCountryFlag(city.country)}</span>
          </div>
          <p className="text-white/60 text-sm mb-4">{city.description}</p>
          
          {error ? (
            <div className="text-center py-4">
              <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-cyan-400 mx-auto mb-2"></div>
              <p className="text-white/50 text-xs">Loading data...</p>
            </div>
          ) : (
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-white/70 text-sm">Aurora Score</span>
                <span className={`text-lg font-semibold ${getScoreColor(score)}`}>
                  {score}% ({getScoreBadge(score)})
                </span>
              </div>
              
              <div className="grid grid-cols-2 gap-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-white/60">Kp Index:</span>
                  <span className="text-white/80">{kp}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-white/60">Probability:</span>
                  <span className="text-white/80">{prob}%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-white/60">Cloud Cover:</span>
                  <span className="text-white/80">{cloudPct}%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-white/60">Darkness:</span>
                  <span className="text-white/80">{formatDarkness(dark)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-white/60">Moon:</span>
                  <span className="text-white/80">{formatMoon(moon)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-white/60">Updated:</span>
                  <span className="text-white/80 text-xs">
                    {new Date(updatedAt).toLocaleTimeString()}
                  </span>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </Link>
  );
}