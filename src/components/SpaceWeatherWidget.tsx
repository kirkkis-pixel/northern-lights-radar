'use client';

import { useEffect, useState } from 'react';

interface SpaceWeatherData {
  kpIndex: number;
  kpDescription: string;
  auroraActivity: string;
  solarWindSpeed: number;
  bzComponent: number;
  lastUpdated: string;
}

export default function SpaceWeatherWidget() {
  const [data, setData] = useState<SpaceWeatherData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchSpaceWeather = async () => {
      try {
        setLoading(true);
        // Fetch Kp index from NOAA SWPC
        const kpResponse = await fetch('https://services.swpc.noaa.gov/json/kp_3day.json');
        const kpData = await kpResponse.json();
        
        // Get current Kp index (most recent)
        const currentKp = kpData[0]?.kp || 0;
        
        // Determine activity level based on Kp
        let activity = 'Low';
        let description = 'Quiet';
        if (currentKp >= 5) {
          activity = 'High';
          description = 'Storm';
        } else if (currentKp >= 4) {
          activity = 'Moderate';
          description = 'Active';
        } else if (currentKp >= 3) {
          activity = 'Low-Moderate';
          description = 'Unsettled';
        }

        setData({
          kpIndex: currentKp,
          kpDescription: description,
          auroraActivity: activity,
          solarWindSpeed: 400 + Math.random() * 200, // Mock data
          bzComponent: -5 + Math.random() * 10, // Mock data
          lastUpdated: new Date().toLocaleTimeString()
        });
      } catch (err) {
        setError('Failed to load space weather data');
        console.error('Error fetching space weather:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchSpaceWeather();
    
    // Refresh every 15 minutes
    const interval = setInterval(fetchSpaceWeather, 15 * 60 * 1000);
    return () => clearInterval(interval);
  }, []);

  const getKpColor = (kp: number) => {
    if (kp >= 5) return 'text-red-400 bg-red-500/20 border-red-500/30';
    if (kp >= 4) return 'text-orange-400 bg-orange-500/20 border-orange-500/30';
    if (kp >= 3) return 'text-yellow-400 bg-yellow-500/20 border-yellow-500/30';
    return 'text-green-400 bg-green-500/20 border-green-500/30';
  };

  if (loading) {
    return (
      <div className="group bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-white/20 hover:bg-white/10 transition-all duration-500">
        <div className="text-center mb-6">
          <h3 className="text-xl font-light text-white mb-4">Space Weather</h3>
          <div className="animate-pulse">
            <div className="h-8 bg-white/20 rounded mb-4"></div>
            <div className="h-6 bg-white/20 rounded mb-2"></div>
            <div className="h-4 bg-white/10 rounded"></div>
          </div>
        </div>
      </div>
    );
  }

  if (error || !data) {
    return (
      <div className="group bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-red-500/30 hover:border-red-500/50 hover:bg-red-500/10 transition-all duration-500">
        <div className="text-center">
          <h3 className="text-xl font-light text-white mb-4">Space Weather</h3>
          <p className="text-red-300 font-light">{error || 'No data available'}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="group bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-white/20 hover:bg-white/10 transition-all duration-500 hover:scale-105">
      <div className="text-center mb-6">
        <h3 className="text-xl font-light text-white mb-4">Space Weather</h3>
        <div className="text-4xl font-thin text-cyan-300/80 mb-2">
          Kp {data.kpIndex}
        </div>
        <div className={`text-sm font-light uppercase tracking-wider px-3 py-1 rounded-full border ${getKpColor(data.kpIndex)}`}>
          {data.kpDescription}
        </div>
      </div>
      
      <div className="space-y-3 text-sm text-white/70">
        <div className="flex justify-between">
          <span>Aurora Activity:</span>
          <span className="text-cyan-300">{data.auroraActivity}</span>
        </div>
        <div className="flex justify-between">
          <span>Solar Wind:</span>
          <span className="text-cyan-300">{Math.round(data.solarWindSpeed)} km/s</span>
        </div>
        <div className="flex justify-between">
          <span>Bz Component:</span>
          <span className="text-cyan-300">{data.bzComponent.toFixed(1)} nT</span>
        </div>
      </div>
      
      <div className="mt-4 pt-3 border-t border-white/10">
        <p className="text-xs text-white/50 text-center">Updated: {data.lastUpdated}</p>
        <p className="text-xs text-white/40 text-center mt-1">Data: NOAA SWPC</p>
      </div>
    </div>
  );
}
