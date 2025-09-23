'use client';

import { useEffect, useState, useRef } from 'react';
import { getBadgeColorClass } from '@/lib/score';

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

export default function SwipeableCards() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [scoreData, setScoreData] = useState<ScoreData | null>(null);
  const [citiesData, setCitiesData] = useState<CityData[]>([]);
  const [loading, setLoading] = useState(true);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const minSwipeDistance = 50;

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        
        // Always start with Rovaniemi as the default
        const rovaniemiResponse = await fetch(`/api/city/rovaniemi`);
        if (rovaniemiResponse.ok) {
          const rovaniemiData = await rovaniemiResponse.json();
          setScoreData(rovaniemiData);
        }
        
        // Fetch other cities
        const citySlugs = ['ivalo', 'inari', 'levi', 'saariselka', 'yllas', 'kilpisjarvi'];
        const cityPromises = citySlugs.map(async (slug) => {
          try {
            const response = await fetch(`/api/city/${slug}`);
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
        setCitiesData(validCities.slice(0, 3));
        
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
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

  if (loading) {
    return (
      <div className="relative max-w-5xl mx-auto">
        <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-12 border border-white/10 shadow-2xl">
          <div className="animate-pulse">
            <div className="h-8 bg-white/10 rounded w-1/2 mx-auto mb-8"></div>
            <div className="h-20 bg-white/10 rounded w-1/3 mx-auto mb-8"></div>
            <div className="h-4 bg-white/10 rounded w-3/4 mx-auto"></div>
          </div>
        </div>
      </div>
    );
  }

  const cards = [
    scoreData && {
      type: 'city' as const,
      title: 'Rovaniemi',
      subtitle: 'Live Aurora Score',
      data: scoreData
    },
    ...citiesData.map(city => ({
      type: 'city' as const,
      title: city.city.name,
      subtitle: 'Live Aurora Score',
      data: city
    }))
  ].filter(Boolean);

  const currentCard = cards[currentIndex];

  if (!currentCard) return null;

  const badgeColorClass = getBadgeColorClass(currentCard.data.badge as 'Poor' | 'Fair' | 'Good' | 'Great' | 'Excellent');

  return (
    <div className="relative max-w-4xl mx-auto">
      {/* Card Container */}
      <div
        ref={containerRef}
        className="relative overflow-hidden rounded-2xl"
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
      >
        <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-10 border border-white/10 shadow-2xl">
          {/* Card Header */}
          <div className="text-center mb-10">
            <h3 className="text-2xl font-light text-white mb-3">
              {currentCard.title}
            </h3>
            <p className="text-white/60 font-extralight">
              {currentCard.subtitle}
            </p>
          </div>
          
          {/* Score Display */}
          <div className="text-center mb-10">
            <div className="text-6xl font-thin text-white mb-4">
              {currentCard.data.score}
            </div>
            <div className={`inline-block px-6 py-2 rounded-full text-sm font-light ${badgeColorClass} backdrop-blur-sm border border-white/10`}>
              {currentCard.data.badge}
            </div>
          </div>
          
          {/* Components Grid */}
          <div className="grid grid-cols-2 gap-6 text-center">
            <div className="space-y-2">
              <div className="text-3xl font-thin text-cyan-300/80">
                {Math.round(currentCard.data.components.P * 100)}%
              </div>
              <div className="text-sm text-white/50 font-extralight uppercase tracking-wider">Aurora Probability</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-thin text-cyan-300/80">
                {Math.round(currentCard.data.components.Visibility * 100)}%
              </div>
              <div className="text-sm text-white/50 font-extralight uppercase tracking-wider">Sky Visibility</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-thin text-cyan-300/80">
                {currentCard.data.components.Dark > 0.8 ? 'High' : currentCard.data.components.Dark > 0.5 ? 'Medium' : 'Low'}
              </div>
              <div className="text-sm text-white/50 font-extralight uppercase tracking-wider">Darkness Level</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-thin text-cyan-300/80">
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
          </div>
        </div>
      </div>
      
      {/* Navigation Dots */}
      <div className="flex justify-center space-x-3 mt-8">
        {cards.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentIndex 
                ? 'bg-white/80 scale-125' 
                : 'bg-white/30 hover:bg-white/50'
            }`}
          />
        ))}
      </div>
      
      {/* Swipe Instructions */}
      <div className="text-center mt-4">
        <p className="text-white/30 text-sm font-extralight tracking-wide">
          Swipe to explore different locations
        </p>
      </div>
    </div>
  );
}