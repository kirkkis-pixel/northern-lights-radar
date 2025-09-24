'use client';

import { useEffect, useRef, useState } from 'react';
import maplibregl from 'maplibre-gl';
import 'maplibre-gl/dist/maplibre-gl.css';
import citiesData from '@/data/cities.json';
import { getCityWeatherData, CityWeatherData } from '@/services/weatherService';

interface AuroraMapProps {
  className?: string;
}

export default function InteractiveAuroraMap({ className = '' }: AuroraMapProps) {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<maplibregl.Map | null>(null);
  const [mapLoaded, setMapLoaded] = useState(false);
  const [cityData, setCityData] = useState<Map<string, CityWeatherData>>(new Map());
  const [selectedCity, setSelectedCity] = useState<string | null>(null);
  const [hoveredCity, setHoveredCity] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  // Fetch real-time data for all cities
  useEffect(() => {
    const fetchAllCityData = async () => {
      setLoading(true);
      const dataMap = new Map<string, CityWeatherData>();
      
      // Fetch data for first 12 cities to avoid too many API calls
      const citiesToFetch = citiesData.cities.slice(0, 12);
      
      const promises = citiesToFetch.map(async (city) => {
        try {
          const data = await getCityWeatherData(
            city.name,
            city.country,
            city.latitude,
            city.longitude
          );
          dataMap.set(city.slug, data);
        } catch (error) {
          console.error(`Error fetching data for ${city.name}:`, error);
        }
      });
      
      await Promise.all(promises);
      setCityData(dataMap);
      setLoading(false);
    };

    fetchAllCityData();
  }, []);

  useEffect(() => {
    if (map.current || !mapContainer.current) return;

    try {
      map.current = new maplibregl.Map({
        container: mapContainer.current,
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
        zoom: 5,
        maxZoom: 12,
        minZoom: 3
      });
      
      map.current.on('load', () => {
        setMapLoaded(true);
      });

    } catch (error) {
      console.error('Map initialization error:', error);
    }

    return () => {
      if (map.current) {
        map.current.remove();
      }
    };
  }, []);

  // Add markers when map and data are loaded
  useEffect(() => {
    if (!map.current || !mapLoaded || cityData.size === 0) return;

    // Clear existing markers
    const existingMarkers = document.querySelectorAll('.aurora-marker');
    existingMarkers.forEach(marker => marker.remove());

    citiesData.cities.slice(0, 12).forEach((city) => {
      const data = cityData.get(city.slug);
      if (!data) return;

      const { aurora, weather } = data;
      
      // Determine marker color based on aurora probability
      let markerColor = '#6B7280'; // Poor
      let borderColor = '#4B5563';
      
      if (aurora.auroraProbability >= 70) {
        markerColor = '#10B981'; // Excellent - Green
        borderColor = '#059669';
      } else if (aurora.auroraProbability >= 50) {
        markerColor = '#3B82F6'; // Great - Blue
        borderColor = '#2563EB';
      } else if (aurora.auroraProbability >= 30) {
        markerColor = '#F59E0B'; // Good - Yellow
        borderColor = '#D97706';
      } else if (aurora.auroraProbability >= 15) {
        markerColor = '#EF4444'; // Fair - Red
        borderColor = '#DC2626';
      }

      // Create marker element
      const markerElement = document.createElement('div');
      markerElement.className = 'aurora-marker';
      markerElement.innerHTML = `
        <div class="relative group cursor-pointer transition-all duration-300 hover:scale-110">
          <div class="w-10 h-10 rounded-full border-2 shadow-lg flex items-center justify-center text-white text-xs font-bold" 
               style="background-color: ${markerColor}; border-color: ${borderColor};">
            ${aurora.auroraProbability}%
          </div>
          <div class="absolute -top-1 -right-1 w-4 h-4 rounded-full border-2 border-white flex items-center justify-center text-xs" 
               style="background-color: ${weather.cloudCover < 30 ? '#10B981' : '#6B7280'};">
            ${weather.cloudCover < 30 ? '☀' : '☁'}
          </div>
        </div>
      `;
      
      // Add click handler
      markerElement.addEventListener('click', () => {
        setSelectedCity(city.slug);
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
  }, [mapLoaded, cityData]);

  const getAuroraLevel = (probability: number) => {
    if (probability >= 70) return 'Excellent';
    if (probability >= 50) return 'Great';
    if (probability >= 30) return 'Good';
    if (probability >= 15) return 'Fair';
    return 'Poor';
  };

  const getAuroraColor = (probability: number) => {
    if (probability >= 70) return 'text-green-400';
    if (probability >= 50) return 'text-blue-400';
    if (probability >= 30) return 'text-yellow-400';
    if (probability >= 15) return 'text-orange-400';
    return 'text-red-400';
  };

  return (
    <div className={`w-full h-full relative ${className}`}>
      <div ref={mapContainer} className="w-full h-full rounded-2xl" />
      
      {/* Loading State */}
      {loading && (
        <div className="absolute inset-0 flex items-center justify-center bg-black/50 backdrop-blur-sm rounded-2xl">
          <div className="text-center text-white">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-cyan-400 mx-auto mb-4"></div>
            <p className="text-sm">Loading real-time aurora data...</p>
          </div>
        </div>
      )}
      
      {/* Map Controls */}
      <div className="absolute top-4 right-4 space-y-2">
        <button
          onClick={() => {
            map.current?.flyTo({
              center: [25.7294, 66.5039],
              zoom: 5,
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
      {selectedCity && cityData.has(selectedCity) && (
        <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-sm rounded-2xl p-6 shadow-2xl border border-white/20">
          {(() => {
            const city = citiesData.cities.find(c => c.slug === selectedCity);
            const data = cityData.get(selectedCity);
            if (!city || !data) return null;
            
            const { aurora, weather } = data;
            
            return (
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">{city.name}</h3>
                  <p className="text-gray-600 text-sm">{city.region}, {city.country}</p>
                  <div className="flex items-center gap-4 mt-2">
                    <div>
                      <span className="text-2xl font-bold text-gray-900">{aurora.auroraProbability}%</span>
                      <span className={`ml-2 px-3 py-1 rounded-full text-xs font-medium ${getAuroraColor(aurora.auroraProbability)}`}>
                        {getAuroraLevel(aurora.auroraProbability)}
                      </span>
                    </div>
                    <div className="text-sm text-gray-600">
                      <div>Kp: {aurora.kpIndex.toFixed(1)}</div>
                      <div>Clouds: {weather.cloudCover}%</div>
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-sm text-gray-500 mb-1">Current Conditions</p>
                  <p className="text-xs text-gray-600">
                    {weather.temperature}°C • {weather.visibility}km visibility
                  </p>
                  <p className="text-xs text-gray-500">
                    Updated {new Date(data.lastUpdated).toLocaleTimeString()}
                  </p>
                </div>
              </div>
            );
          })()}
        </div>
      )}
      
      {/* Hover Tooltip */}
      {hoveredCity && cityData.has(hoveredCity) && (
        <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm rounded-lg px-4 py-2 shadow-lg border border-white/20">
          {(() => {
            const city = citiesData.cities.find(c => c.slug === hoveredCity);
            const data = cityData.get(hoveredCity);
            if (!city || !data) return null;
            
            return (
              <div className="text-sm">
                <div className="font-semibold text-gray-900">{city.name}</div>
                <div className="text-gray-600">
                  Aurora: {data.aurora.auroraProbability}% • Clouds: {data.weather.cloudCover}%
                </div>
              </div>
            );
          })()}
        </div>
      )}
      
      {/* Map Legend */}
      <div className="absolute bottom-4 right-4 bg-white/95 backdrop-blur-sm rounded-lg p-4 shadow-lg border border-white/20">
        <h4 className="text-sm font-semibold text-gray-900 mb-2">Aurora Probability</h4>
        <div className="space-y-1 text-xs">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
            <span>70-100% (Excellent)</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-blue-500"></div>
            <span>50-69% (Great)</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <span>30-49% (Good)</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-orange-500"></div>
            <span>15-29% (Fair)</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <span>0-14% (Poor)</span>
          </div>
        </div>
        <div className="mt-3 pt-2 border-t border-gray-200">
          <div className="flex items-center gap-2 text-xs">
            <span>☀</span>
            <span>Clear skies</span>
          </div>
          <div className="flex items-center gap-2 text-xs">
            <span>☁</span>
            <span>Cloudy</span>
          </div>
        </div>
      </div>
    </div>
  );
}
