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

  const fetchTopHotspots = useCallback(async () => {
    // Import cities data to get all available cities
    const citiesData = await import('@/data/cities.json');
    const allCities = citiesData.default.cities;
    
    // Take a sample of cities and fetch their aurora data
    const sampleCities = allCities.slice(0, 12); // Get first 12 cities for performance
    
    try {
      const hotspotPromises = sampleCities.map(async (city) => {
        // Fetch current aurora data
        const auroraResponse = await fetch(`/api/aurora-now?lat=${city.latitude}&lon=${city.longitude}`);
        const auroraData = auroraResponse.ok ? await auroraResponse.json() : null;
        
        // Generate 6-hour forecast (simplified)
        const forecast: AuroraForecast[] = [];
        const now = new Date();
        for (let i = 0; i < 6; i++) {
          const hour = new Date(now.getTime() + i * 60 * 60 * 1000);
          const baseProb = auroraData?.prob || 0;
          const variation = Math.sin(i * 0.5) * 15; // Simulate hourly variation
          forecast.push({
            time: hour.toLocaleTimeString('en-US', { hour: '2-digit', hour12: false }),
            probability: Math.max(0, Math.min(100, baseProb + variation)),
            kp: auroraData?.kp || 0
          });
        }

        return {
          name: city.name,
          country: city.country,
          lat: city.latitude,
          lon: city.longitude,
          currentScore: auroraData?.score || 0,
          forecast
        };
      });

      const hotspotsData = await Promise.all(hotspotPromises);
      // Sort by current score (best first) and take top 3
      hotspotsData.sort((a, b) => b.currentScore - a.currentScore);
      setHotspots(hotspotsData.slice(0, 3));
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
      className="bg-gradient-to-br from-white/90 to-white/70 backdrop-blur-sm rounded-2xl shadow-2xl p-6 border border-white/30 max-w-sm mx-auto relative overflow-hidden"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {/* Animated background elements */}
      <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-cyan-400/20 to-blue-500/20 rounded-full blur-xl"></div>
      <div className="absolute bottom-0 left-0 w-16 h-16 bg-gradient-to-tr from-purple-400/20 to-pink-500/20 rounded-full blur-lg"></div>
      
      <div className="relative z-10">
        {/* Header */}
        <div className="text-center mb-4">
          <div className="inline-flex items-center px-3 py-1 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full border border-cyan-400/30 mb-2">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse mr-2"></div>
            <span className="text-xs font-medium text-gray-700">Live Aurora Hotspots</span>
          </div>
          <div className="flex items-center justify-center space-x-2">
            <h3 className="text-lg font-semibold text-gray-900">
              {currentHotspot ? currentHotspot.name : 'Loading...'}
            </h3>
            {currentHotspot && (
              <span className="text-xs bg-gray-100 px-2 py-1 rounded-full text-gray-600">
                {currentHotspot.country}
              </span>
            )}
          </div>
          {/* Swipe indicators */}
          <div className="flex justify-center space-x-1 mt-2">
            {hotspots.map((_, index) => (
              <div
                key={index}
                className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                  index === currentHotspotIndex ? 'bg-blue-500 scale-125' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>
        
        {/* Main Score */}
        <div className="text-center mb-4">
          <div className="relative inline-block">
            <div className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              {currentHotspot ? currentHotspot.currentScore : '--'}
            </div>
            <div className="absolute -top-1 -right-1 w-3 h-3 bg-gradient-to-r from-green-400 to-blue-500 rounded-full animate-pulse"></div>
          </div>
          <div className={`inline-block px-3 py-1 rounded-full text-xs font-semibold mt-1 ${
            currentHotspot ? getBadgeColorClass(getScoreBadge(currentHotspot.currentScore)) : 'bg-gray-200 text-gray-600'
          }`}>
            {currentHotspot ? getScoreBadge(currentHotspot.currentScore) : 'Loading'}
          </div>
        </div>
        
        {/* Compact Timeline */}
        {currentHotspot && (
          <div className="mb-4">
            <div className="flex justify-between items-end space-x-1 h-12 bg-gray-50/50 rounded-lg p-2">
              {currentHotspot.forecast.map((hour, index) => (
                <div key={index} className="flex flex-col items-center flex-1">
                  <div 
                    className="w-full rounded-sm transition-all duration-300 hover:opacity-80"
                    style={{
                      height: `${Math.max(4, (hour.probability / 100) * 32)}px`,
                      backgroundColor: hour.probability > 70 ? '#10b981' : 
                                     hour.probability > 40 ? '#3b82f6' : 
                                     hour.probability > 20 ? '#f59e0b' : '#ef4444'
                    }}
                  />
                  <div className="text-xs text-gray-500 mt-1 font-medium">{hour.time}</div>
                </div>
              ))}
            </div>
            <div className="text-center mt-2">
              <span className="text-xs text-gray-500">Peak: {Math.max(...currentHotspot.forecast.map(h => h.probability))}% at {currentHotspot.forecast.find(h => h.probability === Math.max(...currentHotspot.forecast.map(h => h.probability)))?.time}</span>
            </div>
          </div>
        )}
        
        {/* Swipe hint */}
        <div className="text-center">
          <div className="inline-flex items-center text-xs text-gray-400">
            <svg className="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16l-4-4m0 0l4-4m-4 4h18" />
            </svg>
            Swipe to explore
            <svg className="w-3 h-3 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}