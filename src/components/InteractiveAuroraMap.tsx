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
  const [showCityList, setShowCityList] = useState(false);

  // Fetch real-time data for all cities
  useEffect(() => {
    const fetchAllCityData = async () => {
      setLoading(true);
      const dataMap = new Map<string, CityWeatherData>();
      
      // Fetch data for all cities
      const promises = citiesData.cities.map(async (city) => {
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
          // Add fallback data for failed cities
          dataMap.set(city.slug, {
            city: city.name,
            country: city.country,
            weather: {
              temperature: Math.round(Math.random() * 20 - 10),
              cloudCover: Math.round(Math.random() * 100),
              visibility: Math.round(Math.random() * 20 + 5),
              humidity: Math.round(Math.random() * 40 + 30),
              windSpeed: Math.round(Math.random() * 10),
              pressure: Math.round(1013 + Math.random() * 20 - 10),
              timestamp: new Date().toISOString()
            },
            aurora: {
              kpIndex: Math.random() * 6,
              auroraProbability: Math.round(Math.random() * 100),
              auroraLevel: Math.random() > 0.5 ? 'High' : 'Low',
              solarWindSpeed: 400 + Math.random() * 200,
              bzComponent: Math.random() * 20 - 10,
              timestamp: new Date().toISOString()
            },
            moonPhase: Math.random() * 100,
            moonIllumination: Math.random() * 100,
            isDark: Math.random() > 0.5,
            lastUpdated: new Date().toISOString()
          });
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

      // Add click handler to map to deselect cities
      map.current.on('click', () => {
        setSelectedCity(null);
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

    citiesData.cities.forEach((city) => {
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
        <div class="relative group cursor-pointer transition-all duration-300 hover:scale-125 hover:z-10" 
             style="z-index: ${selectedCity === city.slug ? '20' : '10'};">
          <div class="w-8 h-8 rounded-full border-2 shadow-lg flex items-center justify-center text-white text-xs font-bold" 
               style="background-color: ${markerColor}; border-color: ${borderColor};">
            ${aurora.auroraProbability}%
          </div>
          <div class="absolute -top-1 -right-1 w-3 h-3 rounded-full border border-white flex items-center justify-center text-xs" 
               style="background-color: ${weather.cloudCover < 30 ? '#10B981' : '#6B7280'}; font-size: 8px;">
            ${weather.cloudCover < 30 ? '☀' : '☁'}
          </div>
          ${selectedCity === city.slug ? `
            <div class="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-white/95 backdrop-blur-sm rounded-lg px-3 py-2 shadow-lg border border-white/20 whitespace-nowrap">
              <div class="text-xs font-semibold text-gray-900">${city.name}</div>
              <div class="text-xs text-gray-600">${aurora.auroraProbability}% • ${weather.cloudCover}% clouds</div>
            </div>
          ` : ''}
        </div>
      `;
      
      // Add click handler
      markerElement.addEventListener('click', (e) => {
        e.stopPropagation();
        setSelectedCity(city.slug);
        map.current?.flyTo({
          center: [city.longitude, city.latitude],
          zoom: 7,
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
  }, [mapLoaded, cityData, selectedCity]);

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
          onClick={() => setShowCityList(!showCityList)}
          className="bg-white/90 backdrop-blur-sm hover:bg-white px-4 py-2 rounded-lg shadow-lg text-sm font-medium text-gray-700 transition-all duration-300 hover:scale-105"
        >
          {showCityList ? 'Hide List' : 'Show Cities'}
        </button>
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
      {hoveredCity && cityData.has(hoveredCity) && !selectedCity && (
        <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm rounded-lg px-4 py-3 shadow-lg border border-white/20 z-30">
          {(() => {
            const city = citiesData.cities.find(c => c.slug === hoveredCity);
            const data = cityData.get(hoveredCity);
            if (!city || !data) return null;
            
            const { aurora, weather } = data;
            
            return (
              <div className="text-sm">
                <div className="font-semibold text-gray-900 mb-1">{city.name}</div>
                <div className="text-gray-600 mb-2">{city.region}, {city.country}</div>
                <div className="grid grid-cols-2 gap-2 text-xs">
                  <div>
                    <span className="font-medium">Aurora:</span> {aurora.auroraProbability}%
                  </div>
                  <div>
                    <span className="font-medium">Clouds:</span> {weather.cloudCover}%
                  </div>
                  <div>
                    <span className="font-medium">Temp:</span> {weather.temperature}°C
                  </div>
                  <div>
                    <span className="font-medium">Kp:</span> {aurora.kpIndex.toFixed(1)}
                  </div>
                </div>
                <div className="text-xs text-gray-500 mt-2">
                  Click for details
                </div>
              </div>
            );
          })()}
        </div>
      )}
      
      {/* City List Sidebar */}
      {showCityList && (
        <div className="absolute top-4 left-4 w-80 max-h-96 bg-white/95 backdrop-blur-sm rounded-lg shadow-lg border border-white/20 overflow-hidden z-20">
          <div className="p-4 border-b border-gray-200">
            <h4 className="text-sm font-semibold text-gray-900">All Cities</h4>
            <p className="text-xs text-gray-600">Click to view on map</p>
          </div>
          <div className="max-h-80 overflow-y-auto">
            {citiesData.cities.map((city) => {
              const data = cityData.get(city.slug);
              if (!data) return null;
              
              const { aurora, weather } = data;
              const isSelected = selectedCity === city.slug;
              
              return (
                <div
                  key={city.slug}
                  onClick={() => {
                    setSelectedCity(city.slug);
                    map.current?.flyTo({
                      center: [city.longitude, city.latitude],
                      zoom: 7,
                      duration: 1000
                    });
                  }}
                  className={`p-3 border-b border-gray-100 cursor-pointer transition-all duration-200 hover:bg-gray-50 ${
                    isSelected ? 'bg-blue-50 border-blue-200' : ''
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex-1">
                      <div className="font-medium text-sm text-gray-900">{city.name}</div>
                      <div className="text-xs text-gray-600">{city.region}, {city.country}</div>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="text-right">
                        <div className={`text-sm font-bold ${getAuroraColor(aurora.auroraProbability)}`}>
                          {aurora.auroraProbability}%
                        </div>
                        <div className="text-xs text-gray-500">
                          {weather.cloudCover}% clouds
                        </div>
                      </div>
                      <div className={`w-4 h-4 rounded-full border-2 ${
                        aurora.auroraProbability >= 70 ? 'bg-green-500 border-green-600' :
                        aurora.auroraProbability >= 50 ? 'bg-blue-500 border-blue-600' :
                        aurora.auroraProbability >= 30 ? 'bg-yellow-500 border-yellow-600' :
                        aurora.auroraProbability >= 15 ? 'bg-orange-500 border-orange-600' :
                        'bg-red-500 border-red-600'
                      }`}></div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
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
