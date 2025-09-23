'use client';

import { useEffect, useRef, useState } from 'react';
import maplibregl from 'maplibre-gl';
import 'maplibre-gl/dist/maplibre-gl.css';
import citiesData from '@/data/cities.json';

interface CityScore {
  slug: string;
  score: number;
  badge: string;
}

export default function HomeMap() {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<maplibregl.Map | null>(null);
  const [, setMapLoaded] = useState(false);
  const [cityScores, setCityScores] = useState<CityScore[]>([]);
  const [selectedCity, setSelectedCity] = useState<string | null>(null);
  const [hoveredCity, setHoveredCity] = useState<string | null>(null);

  useEffect(() => {
    // Fetch city scores for map visualization
    const fetchCityScores = async () => {
      const citySlugs = citiesData.cities.map(city => city.slug);
      const promises = citySlugs.map(async (slug) => {
        try {
          const response = await fetch(`/api/city/${slug}`);
          if (response.ok) {
            const data = await response.json();
            return { slug, score: data.score, badge: data.badge };
          }
          return null;
        } catch {
          return null;
        }
      });
      
      const results = await Promise.all(promises);
      const validResults = results.filter(Boolean) as CityScore[];
      setCityScores(validResults);
    };

    fetchCityScores();
  }, []);

  useEffect(() => {
    if (map.current) return; // Initialize map only once

    map.current = new maplibregl.Map({
      container: mapContainer.current!,
      style: {
        version: 8,
        sources: {
          'raster-tiles': {
            type: 'raster',
            tiles: [
              'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            ],
            tileSize: 256,
            attribution: '© OpenStreetMap contributors'
          }
        },
        layers: [
          {
            id: 'simple-tiles',
            type: 'raster',
            source: 'raster-tiles',
            minzoom: 0,
            maxzoom: 19
          }
        ]
      },
      center: [25.7294, 66.5039], // Rovaniemi coordinates
      zoom: 6,
      maxZoom: 12,
      minZoom: 4
    });

    map.current.on('load', () => {
      setMapLoaded(true);
      
      // Add interactive markers for each city
      citiesData.cities.forEach((city) => {
        const cityScore = cityScores.find(cs => cs.slug === city.slug);
        const score = cityScore?.score || 0;
        
        // Determine marker color based on score
        let markerColor = '#6B7280'; // Poor
        if (score >= 80) markerColor = '#10B981'; // Excellent
        else if (score >= 60) markerColor = '#3B82F6'; // Great
        else if (score >= 40) markerColor = '#F59E0B'; // Good
        else if (score >= 20) markerColor = '#EF4444'; // Fair
        
        // Create custom marker element
        const markerElement = document.createElement('div');
        markerElement.className = 'city-marker';
        markerElement.innerHTML = `
          <div class="relative group">
            <div class="w-8 h-8 rounded-full border-2 border-white shadow-lg flex items-center justify-center text-white text-xs font-bold cursor-pointer transition-all duration-300 hover:scale-110" style="background-color: ${markerColor}">
              ${Math.round(score)}
            </div>
            <div class="absolute -top-2 -right-2 w-3 h-3 rounded-full border border-white" style="background-color: ${markerColor}"></div>
          </div>
        `;
        
        // Add click handler
        markerElement.addEventListener('click', () => {
          setSelectedCity(city.slug);
          // Center map on city
          map.current?.flyTo({
            center: [city.longitude, city.latitude],
            zoom: 8,
            duration: 1000
          });
        });
        
        // Add hover effects
        markerElement.addEventListener('mouseenter', () => {
          setHoveredCity(city.slug);
        });
        
        markerElement.addEventListener('mouseleave', () => {
          setHoveredCity(null);
        });
        
        new maplibregl.Marker(markerElement)
          .setLngLat([city.longitude, city.latitude])
          .addTo(map.current!);
      });
    });

    return () => {
      if (map.current) {
        map.current.remove();
      }
    };
  }, [cityScores]);

  const getBadgeColor = (badge: string) => {
    switch (badge) {
      case 'Excellent': return 'text-green-400';
      case 'Great': return 'text-blue-400';
      case 'Good': return 'text-yellow-400';
      case 'Fair': return 'text-orange-400';
      case 'Poor': return 'text-red-400';
      default: return 'text-gray-400';
    }
  };

  return (
    <div className="w-full h-full relative">
      <div ref={mapContainer} className="w-full h-full rounded-2xl" />
      
      {/* Map Controls */}
      <div className="absolute top-4 right-4 space-y-2">
        <button
          onClick={() => {
            map.current?.flyTo({
              center: [25.7294, 66.5039],
              zoom: 6,
              duration: 1000
            });
            setSelectedCity(null);
          }}
          className="bg-white/90 backdrop-blur-sm hover:bg-white px-4 py-2 rounded-lg shadow-lg text-sm font-medium text-gray-700 transition-all duration-300 hover:scale-105"
        >
          Reset View
        </button>
      </div>
      
      {/* City Info Panel */}
      {selectedCity && (
        <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-sm rounded-2xl p-6 shadow-2xl border border-white/20">
          {(() => {
            const city = citiesData.cities.find(c => c.slug === selectedCity);
            const cityScore = cityScores.find(cs => cs.slug === selectedCity);
            if (!city || !cityScore) return null;
            
            return (
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">{city.name}</h3>
                  <p className="text-gray-600 text-sm">{city.description}</p>
                  <div className="flex items-center gap-2 mt-2">
                    <span className="text-2xl font-bold text-gray-900">{cityScore.score}</span>
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${getBadgeColor(cityScore.badge)}`}>
                      {cityScore.badge}
                    </span>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-sm text-gray-500 mb-1">Viewing Spots</p>
                  <p className="text-xs text-gray-600">{city.viewingSpots.slice(0, 2).join(', ')}</p>
                  {city.viewingSpots.length > 2 && (
                    <p className="text-xs text-gray-500">+{city.viewingSpots.length - 2} more</p>
                  )}
                </div>
              </div>
            );
          })()}
        </div>
      )}
      
      {/* Hover Tooltip */}
      {hoveredCity && (
        <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm rounded-lg px-4 py-2 shadow-lg border border-white/20">
          {(() => {
            const city = citiesData.cities.find(c => c.slug === hoveredCity);
            const cityScore = cityScores.find(cs => cs.slug === hoveredCity);
            if (!city || !cityScore) return null;
            
            return (
              <div className="text-sm">
                <div className="font-semibold text-gray-900">{city.name}</div>
                <div className="text-gray-600">Score: {cityScore.score} - {cityScore.badge}</div>
              </div>
            );
          })()}
        </div>
      )}
      
      {/* Map Legend */}
      <div className="absolute bottom-4 right-4 bg-white/95 backdrop-blur-sm rounded-lg p-4 shadow-lg border border-white/20">
        <h4 className="text-sm font-semibold text-gray-900 mb-2">Aurora Score</h4>
        <div className="space-y-1 text-xs">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
            <span>80-100 (Excellent)</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-blue-500"></div>
            <span>60-79 (Great)</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <span>40-59 (Good)</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-orange-500"></div>
            <span>20-39 (Fair)</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <span>0-19 (Poor)</span>
          </div>
        </div>
      </div>
    </div>
  );
}