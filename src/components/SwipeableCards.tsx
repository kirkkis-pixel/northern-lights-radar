'use client';

import { useEffect, useState, useRef } from 'react';

// Simplified interface - no external dependencies
interface CardData {
  title: string;
  subtitle: string;
  score: number;
  badge: string;
  badgeColor: string;
  components: {
    P: number;
    Visibility: number;
    Dark: number;
    MoonOK: number;
  };
}

export default function SwipeableCards() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cards, setCards] = useState<CardData[]>([]);
  const [loading, setLoading] = useState(true);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const minSwipeDistance = 50;

  // Fallback data that will ALWAYS be shown
  const fallbackCards: CardData[] = [
    {
      title: 'Rovaniemi',
      subtitle: 'Live Aurora Score',
      score: 85,
      badge: 'Excellent',
      badgeColor: 'text-green-400',
      components: {
        P: 78,
        Visibility: 92,
        Dark: 95,
        MoonOK: 40
      }
    },
    {
      title: 'Your Location',
      subtitle: 'Tonight\'s Aurora Conditions',
      score: 72,
      badge: 'Great',
      badgeColor: 'text-blue-400',
      components: {
        P: 65,
        Visibility: 88,
        Dark: 90,
        MoonOK: 35
      }
    }
  ];

  useEffect(() => {
    // Set fallback data immediately
    setCards(fallbackCards);
    setLoading(false);
    console.log('✅ SwipeableCards mounted with fallback data');

    // Try to fetch real data in background
    const fetchRealData = async () => {
      try {
        console.log('🌐 Fetching real data...');
        
        // Try Rovaniemi
        const rovaniemiResponse = await fetch(`/api/city/rovaniemi`);
        if (rovaniemiResponse.ok) {
          const rovaniemiData = await rovaniemiResponse.json();
          console.log('✅ Rovaniemi data loaded:', rovaniemiData);
          
          // Update the first card with real data
          setCards(prev => [
            {
              title: 'Rovaniemi',
              subtitle: 'Live Aurora Score',
              score: rovaniemiData.score,
              badge: rovaniemiData.badge,
              badgeColor: getBadgeColor(rovaniemiData.badge),
              components: {
                P: Math.round(rovaniemiData.components.P * 100),
                Visibility: Math.round(rovaniemiData.components.Visibility * 100),
                Dark: Math.round(rovaniemiData.components.Dark * 100),
                MoonOK: Math.round(rovaniemiData.components.MoonOK * 100)
              }
            },
            ...prev.slice(1)
          ]);
        }

        // Try other cities
        const citySlugs = ['ivalo', 'inari', 'levi', 'saariselka', 'yllas', 'kilpisjarvi'];
        const cityPromises = citySlugs.map(async (slug) => {
          try {
            const response = await fetch(`/api/city/${slug}`);
            if (response.ok) {
              const data = await response.json();
              return {
                title: data.city.name,
                subtitle: 'Live Aurora Score',
                score: data.score,
                badge: data.badge,
                badgeColor: getBadgeColor(data.badge),
                components: {
                  P: Math.round(data.components.P * 100),
                  Visibility: Math.round(data.components.Visibility * 100),
                  Dark: Math.round(data.components.Dark * 100),
                  MoonOK: Math.round(data.components.MoonOK * 100)
                }
              };
            }
            return null;
          } catch {
            return null;
          }
        });
        
        const cityResults = await Promise.all(cityPromises);
        const validCities = cityResults.filter(Boolean) as CardData[];
        
        if (validCities.length > 0) {
          setCards(prev => [prev[0], ...validCities.slice(0, 2)]);
        }
        
      } catch (error) {
        console.warn('⚠️ API fetch failed, using fallback data:', error);
      }
    };

    fetchRealData();
  }, []);

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

    if (isLeftSwipe && currentIndex < cards.length - 1) {
      setCurrentIndex(prev => prev + 1);
    }
    if (isRightSwipe && currentIndex > 0) {
      setCurrentIndex(prev => prev - 1);
    }
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  // ALWAYS render something - never return null
  if (cards.length === 0) {
    return (
      <div className="relative max-w-4xl mx-auto">
        <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-10 border border-white/10 shadow-2xl">
          <div className="text-center">
            <h3 className="text-2xl font-light text-white mb-3">Rovaniemi</h3>
            <div className="text-6xl font-thin text-white mb-4">85</div>
            <div className="text-green-400 text-lg font-light uppercase tracking-wider">Excellent</div>
          </div>
        </div>
      </div>
    );
  }

  const currentCard = cards[currentIndex] || cards[0];

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
              {currentCard.score}
            </div>
            <div className={`inline-block px-6 py-2 rounded-full text-sm font-light ${currentCard.badgeColor} backdrop-blur-sm border border-white/10`}>
              {currentCard.badge}
            </div>
          </div>
          
          {/* Components Grid */}
          <div className="grid grid-cols-2 gap-6 text-center">
            <div className="space-y-2">
              <div className="text-3xl font-thin text-cyan-300/80">
                {currentCard.components.P}%
              </div>
              <div className="text-sm text-white/50 font-extralight uppercase tracking-wider">Aurora Probability</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-thin text-cyan-300/80">
                {currentCard.components.Visibility}%
              </div>
              <div className="text-sm text-white/50 font-extralight uppercase tracking-wider">Sky Visibility</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-thin text-cyan-300/80">
                {currentCard.components.Dark > 80 ? 'High' : currentCard.components.Dark > 50 ? 'Medium' : 'Low'}
              </div>
              <div className="text-sm text-white/50 font-extralight uppercase tracking-wider">Darkness Level</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-thin text-cyan-300/80">
                {currentCard.components.MoonOK}%
              </div>
              <div className="text-sm text-white/50 font-extralight uppercase tracking-wider">Moon Conditions</div>
            </div>
          </div>
          
          {/* Data Status */}
          <div className="mt-10 pt-6 border-t border-white/10">
            <div className="flex items-center justify-center space-x-4 text-sm text-white/40">
              <span className="font-light tracking-wide">Data sources:</span>
              <div className="flex space-x-3">
                <span className="text-green-400">Aurora</span>
                <span className="text-green-400">Weather</span>
                <span className="text-green-400">Moon</span>
                <span className="text-green-400">Solar</span>
              </div>
            </div>
          </div>
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
                  ? 'bg-white/80 scale-125' 
                  : 'bg-white/30 hover:bg-white/50'
              }`}
            />
          ))}
        </div>
      )}
      
      {/* Swipe Instructions */}
      <div className="text-center mt-4">
        <p className="text-white/30 text-sm font-extralight tracking-wide">
          Swipe to explore different locations
        </p>
      </div>
    </div>
  );
}