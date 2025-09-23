'use client';

import { useEffect, useRef, useState } from 'react';
import maplibregl from 'maplibre-gl';
import 'maplibre-gl/dist/maplibre-gl.css';

export default function HomeMap() {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<maplibregl.Map | null>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    if (map.current || !mapContainer.current) return;

    // Initialize map
    map.current = new maplibregl.Map({
      container: mapContainer.current,
      style: {
        version: 8,
        sources: {
          'osm': {
            type: 'raster',
            tiles: ['https://tile.openstreetmap.org/{z}/{x}/{y}.png'],
            tileSize: 256,
            attribution: '© OpenStreetMap contributors'
          }
        },
        layers: [
          {
            id: 'osm',
            type: 'raster',
            source: 'osm'
          }
        ]
      },
      center: [25.7294, 66.5039], // Rovaniemi
      zoom: 5,
      maxZoom: 10,
      minZoom: 3
    });

    // Add aurora glow overlay
    map.current.on('load', () => {
      if (!map.current) return;
      
      // Add aurora glow effect
      map.current.addSource('aurora-glow', {
        type: 'geojson',
        data: {
          type: 'FeatureCollection',
          features: [
            {
              type: 'Feature',
              geometry: {
                type: 'Polygon',
                coordinates: [[
                  [10, 60], [40, 60], [40, 75], [10, 75], [10, 60]
                ]]
              },
              properties: {}
            }
          ]
        }
      });

      map.current.addLayer({
        id: 'aurora-glow',
        type: 'fill',
        source: 'aurora-glow',
        paint: {
          'fill-color': '#3B82F6',
          'fill-opacity': 0.1
        }
      });

      // Add city markers
      const cities = [
        { name: 'Rovaniemi', coords: [25.7294, 66.5039] },
        { name: 'Ivalo', coords: [27.5389, 68.6592] },
        { name: 'Inari', coords: [27.0281, 68.9056] },
        { name: 'Levi', coords: [24.8089, 67.8044] },
        { name: 'Saariselkä', coords: [27.4167, 68.4167] },
        { name: 'Ylläs', coords: [24.2333, 67.5667] },
        { name: 'Kilpisjärvi', coords: [20.8000, 69.0500] }
      ];

      cities.forEach(city => {
        new maplibregl.Marker({
                  color: '#3B82F6'
                })
                  .setLngLat([city.coords[0], city.coords[1]] as [number, number])
                  .addTo(map.current!);
      });

      setIsLoaded(true);
    });

    return () => {
      if (map.current) {
        map.current.remove();
        map.current = null;
      }
    };
  }, []);

  return (
    <div className="relative w-full h-full">
      <div ref={mapContainer} className="w-full h-full" />
      
      {/* Loading overlay */}
      {!isLoaded && (
        <div className="absolute inset-0 bg-gray-100 flex items-center justify-center">
          <div className="text-gray-500">Loading map...</div>
        </div>
      )}
    </div>
  );
}
