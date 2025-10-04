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
      `https://api.open-meteo.com/v1/forecast?latitude=${city.latitude}&longitude=${city.longitude}&current=temperature_2m,relative_humidity_2m,wind_speed_10m,visibility&timezone=auto`,
      { next: { revalidate: 1800 } } // 30 min cache
    );
    
    if (weatherResponse.ok) {
      const weather = await weatherResponse.json();
      weatherData = {
        temperature: Math.round(weather.current?.temperature_2m || 0),
        humidity: Math.round(weather.current?.relative_humidity_2m || 0),
        windSpeed: Math.round(weather.current?.wind_speed_10m || 0),
        visibility: Math.min(Math.round((weather.current?.visibility || 0) / 1000), 50) // Convert meters to km, cap at 50km max
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

  // Calculate viewing conditions
  const viewingConditionsClouds = cloudPct < 30 ? 'Clear' : cloudPct < 70 ? 'Partly Cloudy' : 'Cloudy';
  const viewingConditionsVisibility = (weatherData?.visibility ?? 0) > 30 ? 'Excellent' : (weatherData?.visibility ?? 0) > 15 ? 'Good' : (weatherData?.visibility ?? 0) > 8 ? 'Fair' : 'Poor';
  const isDarkEnough = dark > 0.5;

  return (
    <Link href={`/${city.country.toLowerCase()}/northern-lights/${city.slug}`} passHref>
      <div className="group bg-gray-900/80 backdrop-blur-sm rounded-xl border border-gray-700/50 hover:bg-gray-800/80 hover:border-gray-600/50 transition-all duration-300 overflow-hidden">
        {/* Header */}
        <div className="p-5 pb-3">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-green-400 rounded-full"></div>
              <span className="text-xs text-green-400 font-medium">Live</span>
            </div>
            <div className="bg-blue-900/50 px-3 py-1 rounded-lg flex items-center space-x-1">
              <span className="text-sm">{getCountryFlag(city.country)}</span>
              <span className="text-xs text-white font-medium">{city.country}</span>
            </div>
          </div>
          <h3 className="text-2xl font-bold text-white mb-1">{city.name}</h3>
          <p className="text-gray-400 text-sm mb-2">{city.region}, {city.country}</p>
          <p className="text-gray-500 text-xs leading-relaxed">{city.description}</p>
        </div>

        {/* Content */}
        <div className="px-5 pb-5">
          {error ? (
            <div className="text-center py-8">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-cyan-400 mx-auto mb-3"></div>
              <p className="text-white/50 text-sm">Loading data...</p>
            </div>
          ) : (
            <div className="space-y-4">
              {/* Aurora Probability - Prominent Red Box */}
              <div className="bg-red-900/30 border border-red-800/50 rounded-lg p-4">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-white text-sm font-medium">Aurora Probability</span>
                  <span className="text-white text-sm font-medium">Kp {kp}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-3xl font-bold text-red-400">{prob}%</span>
                  <span className="text-red-400 font-semibold">{getScoreBadge(prob)}</span>
                </div>
              </div>

              {/* Current Conditions Grid */}
              <div className="grid grid-cols-4 gap-3">
                <div className="text-center">
                  <div className={`text-xl font-bold ${getTemperatureColor(weatherData?.temperature || 0)}`}>
                    {weatherData?.temperature || '--'}°
                  </div>
                  <div className="text-gray-400 text-xs">Temp</div>
                </div>
                <div className="text-center">
                  <div className="text-xl font-bold text-white">{cloudPct}%</div>
                  <div className="text-gray-400 text-xs">Clouds</div>
                </div>
                <div className="text-center">
                  <div className="text-xl font-bold text-white">
                    {weatherData?.visibility || '--'}km
                  </div>
                  <div className="text-gray-400 text-xs">Visibility</div>
                </div>
                <div className="text-center">
                  <div className="text-xl font-bold text-white">{Math.round(moon * 100)}%</div>
                  <div className="text-gray-400 text-xs">Moon</div>
                </div>
              </div>

              {/* Viewing Conditions */}
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-white text-sm font-medium">Viewing Conditions</span>
                  <span className={`px-2 py-1 rounded text-xs font-medium ${isDarkEnough ? 'bg-green-900/50 text-green-400' : 'bg-red-900/50 text-red-400'}`}>
                    {isDarkEnough ? 'Dark Enough' : 'Too Bright'}
                  </span>
                </div>
                <div className="space-y-1 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-400">Clouds:</span>
                    <span className={viewingConditionsClouds === 'Clear' ? 'text-green-400' : 'text-red-400'}>
                      {viewingConditionsClouds}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Visibility:</span>
                    <span className={viewingConditionsVisibility === 'Excellent' ? 'text-green-400' : viewingConditionsVisibility === 'Good' ? 'text-yellow-400' : viewingConditionsVisibility === 'Fair' ? 'text-orange-400' : 'text-red-400'}>
                      {viewingConditionsVisibility}
                    </span>
                  </div>
                </div>
              </div>

              {/* Footer */}
              <div className="pt-3 border-t border-gray-700/30">
                <div className="flex items-center justify-between">
                  <span className="text-gray-500 text-xs">Updated {formatTime(updatedAt)}</span>
                  <div className="flex items-center space-x-1 text-white text-sm hover:text-cyan-300 transition-colors">
                    <span>View Full Forecast</span>
                    <div className="w-4 h-4 rounded-full bg-gray-600 flex items-center justify-center">
                      <span className="text-xs">→</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {error && (
          <div className="px-5 pb-5">
            <div className="pt-3 border-t border-red-400/20">
              <p className="text-red-400 text-xs text-center">Data temporarily unavailable</p>
            </div>
          </div>
        )}
      </div>
    </Link>
  );
}