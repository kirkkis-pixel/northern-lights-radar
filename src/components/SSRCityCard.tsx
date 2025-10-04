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

const getTemperatureColor = (temp: number) => {
  if (temp <= -20) return 'text-blue-300';
  if (temp <= -10) return 'text-cyan-300';
  if (temp <= 0) return 'text-blue-200';
  if (temp <= 10) return 'text-gray-300';
  return 'text-yellow-300';
};

const formatTime = (timestamp: string) => {
  try {
    const date = new Date(timestamp);
    return date.toLocaleTimeString('en-US', { 
      hour: '2-digit', 
      minute: '2-digit',
      hour12: true 
    });
  } catch {
    return '--';
  }
};

export default async function SSRCityCard({ city }: SSRCityCardProps) {
  let auroraData;
  let weatherData;
  let error = false;

  try {
    // Fetch aurora data
    auroraData = await getAuroraNow(city.latitude, city.longitude);
    
    // Fetch weather data from Open-Meteo
    const weatherResponse = await fetch(
      `https://api.open-meteo.com/v1/forecast?latitude=${city.latitude}&longitude=${city.longitude}&current=temperature_2m,relative_humidity_2m,wind_speed_10m&timezone=auto`,
      { next: { revalidate: 1800 } } // 30 min cache
    );
    
    if (weatherResponse.ok) {
      const weather = await weatherResponse.json();
      weatherData = {
        temperature: Math.round(weather.current?.temperature_2m || 0),
        humidity: Math.round(weather.current?.relative_humidity_2m || 0),
        windSpeed: Math.round(weather.current?.wind_speed_10m || 0)
      };
    }
  } catch (e) {
    console.error(`Failed to fetch data for ${city.name}:`, e);
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
      <div className="group bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-500 overflow-hidden">
        {/* Header */}
        <div className="p-6 pb-4">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-xl font-light text-white group-hover:text-cyan-300 transition-colors">
              {city.name}
            </h3>
            <span className="text-2xl opacity-80">{getCountryFlag(city.country)}</span>
          </div>
          
          <p className="text-white/60 text-sm leading-relaxed mb-6">{city.description}</p>
        </div>

        {/* Content */}
        <div className="px-6 pb-6">
          {error ? (
            <div className="text-center py-12">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-cyan-400 mx-auto mb-4"></div>
              <p className="text-white/50 text-sm">Loading data...</p>
            </div>
          ) : (
            <div className="space-y-6">
              {/* Aurora Score - Prominent Display */}
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-white/10 to-white/5 border border-white/20 mb-3">
                  <span className={`text-2xl font-light ${getScoreColor(score)}`}>
                    {score}%
                  </span>
                </div>
                <p className="text-white/70 text-sm font-light">{getScoreBadge(score)} Aurora Conditions</p>
              </div>
              
              {/* Aurora Data - Clean Grid */}
              <div className="space-y-3">
                <div className="flex justify-between items-center py-2">
                  <span className="text-white/60 text-sm">Kp Index</span>
                  <span className="text-white/90 font-medium">{kp}</span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="text-white/60 text-sm">Probability</span>
                  <span className="text-white/90 font-medium">{prob}%</span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="text-white/60 text-sm">Cloud Cover</span>
                  <span className="text-white/90 font-medium">{cloudPct}%</span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="text-white/60 text-sm">Darkness</span>
                  <span className="text-white/90 font-medium text-xs">{formatDarkness(dark)}</span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="text-white/60 text-sm">Moon Phase</span>
                  <span className="text-white/90 font-medium text-xs">{formatMoon(moon)}</span>
                </div>
              </div>

              {/* Weather Data - Elegant Section */}
              {weatherData && (
                <div className="pt-4 border-t border-white/10">
                  <div className="grid grid-cols-3 gap-4">
                    <div className="text-center">
                      <div className={`text-xl font-light ${getTemperatureColor(weatherData.temperature)} mb-1`}>
                        {weatherData.temperature}°
                      </div>
                      <div className="text-white/50 text-xs font-light">Temperature</div>
                    </div>
                    <div className="text-center">
                      <div className="text-white/90 text-xl font-light mb-1">
                        {weatherData.humidity}%
                      </div>
                      <div className="text-white/50 text-xs font-light">Humidity</div>
                    </div>
                    <div className="text-center">
                      <div className="text-white/90 text-xl font-light mb-1">
                        {weatherData.windSpeed}
                      </div>
                      <div className="text-white/50 text-xs font-light">Wind km/h</div>
                    </div>
                  </div>
                </div>
              )}

              {/* Last Updated */}
              <div className="pt-3 border-t border-white/5">
                <p className="text-white/40 text-xs text-center font-light">
                  Updated {formatTime(updatedAt)}
                </p>
              </div>
            </div>
          )}
        </div>

        {/* Error State */}
        {error && (
          <div className="px-6 pb-6">
            <div className="pt-4 border-t border-red-400/20">
              <p className="text-red-400 text-xs text-center font-light">Data temporarily unavailable</p>
            </div>
          </div>
        )}
      </div>
    </Link>
  );
}