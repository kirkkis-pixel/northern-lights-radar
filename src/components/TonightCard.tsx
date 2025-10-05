'use client';

import { useEffect, useState, useCallback } from 'react';
import { AuroraNow } from '@/lib/aurora-now';

interface WeatherData {
  temperature: number;
  humidity: number;
  windSpeed: number;
  visibility: number;
}

interface AuroraForecast {
  time: string;
  probability: number;
  kp: number;
}

interface HotspotLocation {
  name: string;
  country: string;
  lat: number;
  lon: number;
  currentScore: number;
  forecast: AuroraForecast[];
}

interface TonightCardProps {
  latitude?: number;
  longitude?: number;
  cityName?: string;
  description?: string;
}

export default function TonightCard({ 
  latitude = 66.5039, 
  longitude = 25.7294, 
  cityName = 'Rovaniemi'
}: TonightCardProps) {
  const [auroraData, setAuroraData] = useState<AuroraNow | null>(null);
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [userLocation, setUserLocation] = useState<{lat: number, lon: number, city: string} | null>(null);
  const [locationPermission, setLocationPermission] = useState<'granted' | 'denied' | 'prompting' | 'unknown'>('unknown');
  const [hotspots, setHotspots] = useState<HotspotLocation[]>([]);
  const [currentHotspotIndex, setCurrentHotspotIndex] = useState(0);
  const [touchStartX, setTouchStartX] = useState(0);
  const [touchEndX, setTouchEndX] = useState(0);

  }, []);

  const fetchTopHotspots = useCallback(async () => {
    // Top aurora viewing locations in Lapland
    const topLocations = [
      { name: 'Tromsø', country: 'Norway', lat: 69.6492, lon: 18.9553 },
      { name: 'Rovaniemi', country: 'Finland', lat: 66.5039, lon: 25.7294 },
      { name: 'Abisko', country: 'Sweden', lat: 68.3498, lon: 18.8314 },
      { name: 'Kiruna', country: 'Sweden', lat: 67.8558, lon: 20.2253 },
      { name: 'Ivalo', country: 'Finland', lat: 68.6593, lon: 27.5389 },
      { name: 'Alta', country: 'Norway', lat: 69.9689, lon: 23.2717 }
    ];

    try {
      const hotspotPromises = topLocations.map(async (location) => {
        // Fetch current aurora data
        const auroraResponse = await fetch(`/api/aurora-now?lat=${location.lat}&lon=${location.lon}`);
        const auroraData = auroraResponse.ok ? await auroraResponse.json() : null;
        
        // Generate 6-hour forecast (simplified - in real app would fetch from forecast API)
        const forecast: AuroraForecast[] = [];
        const now = new Date();
        for (let i = 0; i < 6; i++) {
          const hour = new Date(now.getTime() + i * 60 * 60 * 1000);
          // Simulate forecast data (would be real forecast API)
          const baseProb = auroraData?.prob || 0;
          const variation = Math.sin(i * 0.5) * 20; // Simulate hourly variation
          forecast.push({
            time: hour.toLocaleTimeString('en-US', { hour: '2-digit', hour12: false }),
            probability: Math.max(0, Math.min(100, baseProb + variation)),
            kp: auroraData?.kp || 0
          });
        }

        return {
          name: location.name,
          country: location.country,
          lat: location.lat,
          lon: location.lon,
          currentScore: auroraData?.score || 0,
          forecast
        };
      });

      const hotspotsData = await Promise.all(hotspotPromises);
      // Sort by current score (best first)
      hotspotsData.sort((a, b) => b.currentScore - a.currentScore);
      setHotspots(hotspotsData);
    } catch (error) {
      console.error('Failed to fetch hotspots:', error);
    }
  }, []);

  const getCurrentLocation = useCallback(async () => {
    if (!navigator.geolocation) {
      setLocationPermission('denied');
      return null;
    }

    setLocationPermission('prompting');
    
    return new Promise<{lat: number, lon: number, city: string} | null>((resolve) => {
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          const { latitude: lat, longitude: lon } = position.coords;
          setLocationPermission('granted');
          
          // Try to get city name from reverse geocoding
          try {
            const response = await fetch(
              `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current=temperature_2m&timezone=auto`
            );
            if (response.ok) {
              const data = await response.json();
              const cityName = data.timezone?.split('/')[1]?.replace('_', ' ') || 'Your Location';
              resolve({ lat, lon, city: cityName });
            } else {
              resolve({ lat, lon, city: 'Your Location' });
            }
          } catch {
            resolve({ lat, lon, city: 'Your Location' });
          }
        },
        (error) => {
          console.log('Geolocation error:', error);
          setLocationPermission('denied');
          resolve(null);
        },
        {
          enableHighAccuracy: true,
          timeout: 10000,
          maximumAge: 300000 // 5 minutes
        }
      );
    });
  }, []);

  const fetchAuroraData = useCallback(async (lat?: number, lon?: number, city?: string) => {
    try {
      setLoading(true);
      setError(null);
      
      const targetLat = lat || latitude;
      const targetLon = lon || longitude;
      const targetCity = city || cityName;
      
      // Fetch aurora data
      const auroraResponse = await fetch(`/api/aurora-now?lat=${targetLat}&lon=${targetLon}`);
      if (!auroraResponse.ok) throw new Error('Failed to fetch aurora data');
      const aurora = await auroraResponse.json();
      setAuroraData(aurora);
      
      // Fetch weather data
      const weatherResponse = await fetch(
        `https://api.open-meteo.com/v1/forecast?latitude=${targetLat}&longitude=${targetLon}&current=temperature_2m,relative_humidity_2m,wind_speed_10m,visibility&timezone=auto`
      );
      if (weatherResponse.ok) {
        const weather = await weatherResponse.json();
        setWeatherData({
          temperature: Math.round(weather.current?.temperature_2m || 0),
          humidity: Math.round(weather.current?.relative_humidity_2m || 0),
          windSpeed: Math.round(weather.current?.wind_speed_10m || 0),
          visibility: Math.round((weather.current?.visibility || 0) / 1000)
        });
      }
    } catch (err) {
      console.error('Failed to fetch data:', err);
      setError('Unable to load aurora data');
    } finally {
      setLoading(false);
    }
  }, [latitude, longitude, cityName]);

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStartX(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEndX(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStartX || !touchEndX) return;
    
    const distance = touchStartX - touchEndX;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe && currentHotspotIndex < hotspots.length - 1) {
      setCurrentHotspotIndex(currentHotspotIndex + 1);
    }
    if (isRightSwipe && currentHotspotIndex > 0) {
      setCurrentHotspotIndex(currentHotspotIndex - 1);
    }
  };

  useEffect(() => {
    // Initialize hotspots and user location
    const initializeData = async () => {
      await fetchTopHotspots();
      
      const location = await getCurrentLocation();
      if (location) {
        setUserLocation(location);
        await fetchAuroraData(location.lat, location.lon, location.city);
      } else {
        // Fallback to default location
        await fetchAuroraData();
      }
    };
    
    initializeData();
  }, [getCurrentLocation, fetchAuroraData, fetchTopHotspots]);

  const getScoreBadge = (score: number) => {
    if (score >= 80) return 'Excellent';
    if (score >= 60) return 'Great';
    if (score >= 40) return 'Good';
    if (score >= 20) return 'Fair';
    return 'Poor';
  };

  const getBadgeColorClass = (badge: string) => {
    switch (badge) {
      case 'Excellent': return 'bg-green-500 text-white';
      case 'Great': return 'bg-blue-500 text-white';
      case 'Good': return 'bg-yellow-500 text-white';
      case 'Fair': return 'bg-orange-500 text-white';
      case 'Poor': return 'bg-red-500 text-white';
      default: return 'bg-gray-500 text-white';
    }
  };

  const getDarknessLevel = (dark: number) => {
    if (dark > 0.8) return 'Deep Darkness';
    if (dark > 0.5) return 'Dark';
    if (dark > 0.2) return 'Twilight';
    return 'Daylight';
  };

  const getMoonPhase = (moon: number) => {
    if (moon > 0.8) return 'New Moon';
    if (moon > 0.6) return 'Crescent';
    if (moon > 0.4) return 'Half Moon';
    if (moon > 0.2) return 'Gibbous';
    return 'Full Moon';
  };

  if (loading) {
    return (
      <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl p-8 border border-white/20 max-w-md mx-auto">
        <div className="animate-pulse text-center">
          <div className="h-6 bg-gray-200 rounded w-1/2 mx-auto mb-6"></div>
          <div className="h-16 bg-gray-200 rounded w-1/3 mx-auto mb-6"></div>
          <div className="h-4 bg-gray-200 rounded w-3/4 mx-auto"></div>
          {locationPermission === 'prompting' && (
            <p className="text-xs text-gray-500 mt-4">Detecting your location...</p>
          )}
        </div>
      </div>
    );
  }

  if (error || !auroraData) {
    return (
      <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl p-8 border border-white/20 max-w-md mx-auto text-center">
        <h3 className="text-xl font-light text-gray-900 mb-4">
          Tonight&apos;s Aurora Conditions
        </h3>
        <p className="text-gray-500 font-light">Unable to load aurora data</p>
      </div>
    );
  }

  const score = auroraData.score;
  const badge = getScoreBadge(score);
  const badgeColorClass = getBadgeColorClass(badge);

  const currentHotspot = hotspots[currentHotspotIndex];

  return (
    <div 
      className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl p-8 border border-white/20 max-w-md mx-auto"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <div className="text-center mb-6">
        <h3 className="text-xl font-light text-gray-900 mb-2">
          Top Aurora Hotspots
        </h3>
        <div className="flex items-center justify-center space-x-2 mb-2">
          <p className="text-sm text-gray-500 font-light">
            {currentHotspot ? `${currentHotspot.name}, ${currentHotspot.country}` : 'Loading...'}
          </p>
          <div className="flex space-x-1">
            {hotspots.map((_, index) => (
              <div
                key={index}
                className={`w-2 h-2 rounded-full transition-colors ${
                  index === currentHotspotIndex ? 'bg-blue-500' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>
        {locationPermission === 'denied' && (
          <button
            onClick={async () => {
              const location = await getCurrentLocation();
              if (location) {
                setUserLocation(location);
                await fetchAuroraData(location.lat, location.lon, location.city);
              }
            }}
            className="text-xs text-blue-600 hover:text-blue-800 underline"
          >
            Use my location
          </button>
        )}
      </div>
      
      <div className="text-center mb-6">
        <div className="text-5xl font-extralight text-gray-900 mb-2">
          {currentHotspot ? currentHotspot.currentScore : score}
        </div>
        <div className={`inline-block px-4 py-1 rounded-full text-sm font-medium ${badgeColorClass}`}>
          {currentHotspot ? getScoreBadge(currentHotspot.currentScore) : badge}
        </div>
      </div>
      
      {/* 6-Hour Aurora Timeline */}
      {currentHotspot && (
        <div className="mb-6">
          <h4 className="text-sm font-medium text-gray-700 mb-3 text-center">6-Hour Forecast</h4>
          <div className="flex justify-between items-end space-x-1 h-16">
            {currentHotspot.forecast.map((hour, index) => (
              <div key={index} className="flex flex-col items-center flex-1">
                <div 
                  className="w-full rounded-t transition-all duration-300 hover:opacity-80"
                  style={{
                    height: `${Math.max(8, (hour.probability / 100) * 48)}px`,
                    backgroundColor: hour.probability > 70 ? '#10b981' : 
                                   hour.probability > 40 ? '#3b82f6' : 
                                   hour.probability > 20 ? '#f59e0b' : '#ef4444'
                  }}
                />
                <div className="text-xs text-gray-500 mt-1">{hour.time}</div>
                <div className="text-xs font-medium text-gray-700">{hour.probability}%</div>
              </div>
            ))}
          </div>
        </div>
      )}
      
      <div className="text-center text-xs text-gray-500 mb-4">
        Swipe to explore other hotspots
      </div>
      
      <div className="grid grid-cols-2 gap-6 text-center">
        <div className="space-y-2">
          <div className="text-2xl font-light text-blue-600">
            {auroraData.prob || 0}%
          </div>
          <div className="text-xs text-gray-500 font-light uppercase tracking-wide">Aurora Probability</div>
        </div>
        <div className="space-y-2">
          <div className="text-2xl font-light text-blue-600">
            {100 - (auroraData.cloudPct || 100)}%
          </div>
          <div className="text-xs text-gray-500 font-light uppercase tracking-wide">Sky Visibility</div>
        </div>
        <div className="space-y-2">
          <div className="text-2xl font-light text-blue-600">
            {getDarknessLevel(auroraData.dark)}
          </div>
          <div className="text-xs text-gray-500 font-light uppercase tracking-wide">Darkness Level</div>
        </div>
        <div className="space-y-2">
          <div className="text-2xl font-light text-blue-600">
            {getMoonPhase(auroraData.moon)}
          </div>
          <div className="text-xs text-gray-500 font-light uppercase tracking-wide">Moon Phase</div>
        </div>
      </div>
      
      {weatherData && (
        <div className="mt-6 pt-6 border-t border-gray-200">
          <div className="grid grid-cols-2 gap-4 text-center">
            <div className="space-y-1">
              <div className="text-lg font-light text-gray-700">
                {weatherData.temperature}°C
              </div>
              <div className="text-xs text-gray-500 font-light uppercase tracking-wide">Temperature</div>
            </div>
            <div className="space-y-1">
              <div className="text-lg font-light text-gray-700">
                {weatherData.visibility}km
              </div>
              <div className="text-xs text-gray-500 font-light uppercase tracking-wide">Visibility</div>
            </div>
          </div>
        </div>
      )}
      
      <div className="mt-8 pt-6 border-t border-gray-200">
        <p className="text-xs text-gray-400 text-center font-light">
          Data updates every 5 minutes • Last updated: {new Date().toLocaleTimeString('fi-FI', { 
            hour: '2-digit', 
            minute: '2-digit' 
          })}
        </p>
      </div>
    </div>
  );
}