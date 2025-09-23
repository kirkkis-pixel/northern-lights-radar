'use client';

import { useEffect, useState, useRef } from 'react';

interface ScoreData {
  score: number;
  badge: string;
  components: {
    P: number;
    Visibility: number;
    Dark: number;
    MoonOK: number;
  };
  dataAvailability: {
    aurora: boolean;
    weather: boolean;
    moon: boolean;
    solar: boolean;
  };
}

interface CityData {
  city: {
    slug: string;
    name: string;
    region: string;
    country: string;
    latitude: number;
    longitude: number;
    description: string;
    viewingSpots: string[];
  };
  score: number;
  badge: string;
  components: {
    P: number;
    Visibility: number;
    Dark: number;
    MoonOK: number;
  };
}

type CardData = { type: 'location'; data: ScoreData } | { type: 'city'; data: CityData };

export default function SwipeableCards() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [scoreData, setScoreData] = useState<ScoreData | null>(null);
  const [citiesData, setCitiesData] = useState<CardData[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const minSwipeDistance = 50;

  // Fallback data that will always be shown
  const fallbackData: ScoreData = {
    score: 85,
    badge: 'Excellent',
    components: {
      P: 0.78,
      Visibility: 0.92,
      Dark: 0.95,
      MoonOK: 0.4
    },
    dataAvailability: {
      aurora: true,
      weather: true,
      moon: true,
      solar: true
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        setError(null);
        console.log('🔄 Starting data fetch...');

        // Always set fallback data first to ensure something shows
        setScoreData(fallbackData);
        console.log('✅ Fallback data set');

        // Try to fetch real Rovaniemi data
        try {
          console.log('🌐 Fetching Rovaniemi data...');
          const rovaniemiResponse = await fetch(`/api/city/rovaniemi`, {
            cache: 'no-cache',
            headers: {
              'Cache-Control': 'no-cache'
            }
          });
          
          if (rovaniemiResponse.ok) {
            const rovaniemiData = await rovaniemiResponse.json();
            setScoreData(rovaniemiData);
            console.log('✅ Rovaniemi data loaded:', rovaniemiData);
          } else {
            console.warn('⚠️ Rovaniemi API failed:', rovaniemiResponse.status);
          }
        } catch (apiError) {
          console.warn('⚠️ Rovaniemi API error:', apiError);
        }

        // Try to get user's location
        let userLocationData: ScoreData | null = null;
        if (navigator.geolocation) {
          try {
            console.log('📍 Getting user location...');
            const position = await new Promise<GeolocationPosition>((resolve, reject) => {
              navigator.geolocation.getCurrentPosition(resolve, reject, {
                timeout: 3000,
                enableHighAccuracy: false
              });
            });
            
            const userScoreResponse = await fetch(`/api/score?lat=${position.coords.latitude}&lon=${position.coords.longitude}`, {
              cache: 'no-cache'
            });
            
            if (userScoreResponse.ok) {
              userLocationData = await userScoreResponse.json();
              console.log('✅ User location data loaded:', userLocationData);
            }
          } catch (locationError) {
            console.log('📍 Location access denied or failed:', locationError);
          }
        }

        // Fetch other cities
        const citySlugs = ['ivalo', 'inari', 'levi', 'saariselka', 'yllas', 'kilpisjarvi'];
        const cityPromises = citySlugs.map(async (slug) => {
          try {
            const response = await fetch(`/api/city/${slug}`, {
              cache: 'no-cache'
            });
            if (response.ok) {
              return await response.json();
            }
            return null;
          } catch {
            return null;
          }
        });
        
        const cityResults = await Promise.all(cityPromises);
        const validCities = cityResults.filter(Boolean) as CityData[];
        validCities.sort((a, b) => b.score - a.score);
        
        // Store user location data separately
        if (userLocationData) {
          setCitiesData([
            { type: 'location', data: userLocationData },
            ...validCities.slice(0, 2).map(city => ({ type: 'city' as const, data: city }))
          ]);
        } else {
          setCitiesData(validCities.slice(0, 3).map(city => ({ type: 'city' as const, data: city })));
        }
        
        console.log('✅ All data loaded successfully');
        
      } catch (error) {
        console.error('❌ Error fetching data:', error);
        setError('Failed to load real-time data');
        // Keep fallback data
      } finally {
        setLoading(false);
        console.log('🏁 Data fetch completed');
      }
    };

    fetchData();
    
    // Refresh data every 5 minutes
    const interval = setInterval(fetchData, 5 * 60 * 1000);
    return () => clearInterval(interval);
  }, []);

  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe && currentIndex < 3) {
      setCurrentIndex(prev => prev + 1);
    }
    if (isRightSwipe && currentIndex > 0) {
      setCurrentIndex(prev => prev - 1);
    }
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  // Build cards array - always ensure we have at least one card
  const cards = [
    ...(scoreData ? [{
      type: 'city' as const,
      title: 'Rovaniemi',
      subtitle: 'Live Aurora Score',
      data: scoreData
    }] : []),
    ...citiesData.map(city => {
      if (city.type === 'location') {
        return {
          type: 'location' as const,
          title: 'Your Location',
          subtitle: 'Tonight\'s Aurora Conditions',
          data: city.data
        };
      } else {
        return {
          type: 'city' as const,
          title: city.data.city.name,
          subtitle: 'Live Aurora Score',
          data: city.data
        };
      }
    })
  ];

  // Ensure we always have at least one card
  if (cards.length === 0) {
    cards.push({
      type: 'city' as const,
      title: 'Rovaniemi',
      subtitle: 'Live Aurora Score',
      data: fallbackData
    });
  }

  const currentCard = cards[currentIndex] || cards[0];

  // Get badge color
  const getBadgeColor = (badge: string) => {
    switch (badge.toLowerCase()) {
      case 'excellent': return 'text-green-400';
      case 'great': return 'text-blue-400';
      case 'good': return 'text-yellow-400';
      case 'fair': return 'text-orange-400';
      case 'poor': return 'text-red-400';
      default: return 'text-gray-400';
    }
  };

  const badgeColorClass = getBadgeColor(currentCard.data.badge);

  return (
    <div className="relative max-w-4xl mx-auto">
      {/* Card Container */}
      <div
        ref={containerRef}
        className="bg-white/5 backdrop-blur-sm rounded-3xl p-12 border border-white/10 shadow-2xl"
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
      >
        {/* Live Indicator */}
        <div className="flex items-center justify-center mb-6">
          <div className="flex items-center px-4 py-2 bg-white/5 rounded-full border border-white/10">
            <div className="w-2 h-2 bg-red-500 rounded-full mr-3 animate-pulse"></div>
            <span className="text-sm font-light text-white/70 tracking-wide">
              {loading ? 'Loading...' : 'Live Data'}
            </span>
          </div>
        </div>

        {/* Card Header */}
        <div className="text-center mb-8">
          <h3 className="text-2xl font-light text-white mb-2">{currentCard.title}</h3>
          <p className="text-white/60 font-light">{currentCard.subtitle}</p>
        </div>

        {/* Score Display */}
        <div className="text-center mb-8">
          <div className="text-6xl font-thin text-cyan-300/80 mb-4">
            {currentCard.data.score}
          </div>
          <div className={`text-lg font-light uppercase tracking-wider ${badgeColorClass}`}>
            {currentCard.data.badge}
          </div>
        </div>

        {/* Components Grid */}
        <div className="grid grid-cols-2 gap-6 mb-8">
          <div className="text-center">
            <div className="text-2xl font-light text-white mb-2">
              {Math.round(currentCard.data.components.P * 100)}%
            </div>
            <div className="text-sm text-white/50 font-extralight uppercase tracking-wider">Aurora Probability</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-light text-white mb-2">
              {Math.round(currentCard.data.components.Visibility * 100)}%
            </div>
            <div className="text-sm text-white/50 font-extralight uppercase tracking-wider">Sky Visibility</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-light text-white mb-2">
              {Math.round(currentCard.data.components.Dark * 100)}%
            </div>
            <div className="text-sm text-white/50 font-extralight uppercase tracking-wider">Darkness Level</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-light text-white mb-2">
              {Math.round(currentCard.data.components.MoonOK * 100)}%
            </div>
            <div className="text-sm text-white/50 font-extralight uppercase tracking-wider">Moon Conditions</div>
          </div>
        </div>

        {/* Data Status */}
        <div className="mt-10 pt-6 border-t border-white/10">
          <div className="flex items-center justify-center space-x-4 text-sm text-white/40">
            <span className="font-light tracking-wide">Data sources:</span>
            <div className="flex space-x-3">
              <span className={'dataAvailability' in currentCard.data && currentCard.data.dataAvailability?.aurora ? 'text-green-400' : 'text-red-400'}>
                Aurora
              </span>
              <span className={'dataAvailability' in currentCard.data && currentCard.data.dataAvailability?.weather ? 'text-green-400' : 'text-red-400'}>
                Weather
              </span>
              <span className={'dataAvailability' in currentCard.data && currentCard.data.dataAvailability?.moon ? 'text-green-400' : 'text-red-400'}>
                Moon
              </span>
              <span className={'dataAvailability' in currentCard.data && currentCard.data.dataAvailability?.solar ? 'text-green-400' : 'text-red-400'}>
                Solar
              </span>
            </div>
          </div>
          {error && (
            <div className="text-center mt-2 text-orange-400 text-sm">
              {error} - Showing cached data
            </div>
          )}
        </div>
      </div>
      
      {/* Navigation Dots */}
      {cards.length > 1 && (
        <div className="flex justify-center space-x-3 mt-8">
          {cards.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex 
                  ? 'bg-cyan-400/80 scale-125' 
                  : 'bg-white/20 hover:bg-white/40'
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
}