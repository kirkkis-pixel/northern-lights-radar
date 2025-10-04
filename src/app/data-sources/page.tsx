import { Metadata } from 'next';
import RegionalNavigation from '@/components/RegionalNavigation';

export const metadata: Metadata = {
  title: 'Data Sources - Northern Lights Radar',
  description: 'Learn about our trusted data sources including NOAA Space Weather Prediction Center, FMI, SMHI, MET Norway, and Open-Meteo for accurate aurora forecasts.',
  keywords: 'aurora data sources, NOAA space weather, FMI weather data, SMHI Sweden, MET Norway, Open-Meteo',
  openGraph: {
    title: 'Data Sources - Northern Lights Radar',
    description: 'Learn about our trusted data sources for accurate aurora forecasts.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Data Sources - Northern Lights Radar',
    description: 'Learn about our trusted data sources for accurate aurora forecasts.',
  },
  alternates: {
    canonical: 'https://northernlightsradar.com/data-sources',
  },
};

export default function DataSourcesPage() {
  return (
    <div className="min-h-screen bg-black">
      <RegionalNavigation />
      
      {/* Hero Section */}
      <div className="relative py-32 bg-gradient-to-b from-black via-slate-900 to-black">
        <div className="max-w-6xl mx-auto px-12">
          <div className="text-center mb-20">
            <div className="inline-flex items-center px-8 py-3 bg-white/5 backdrop-blur-sm rounded-full border border-white/10 mb-8">
              <svg className="w-4 h-4 text-white/70 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
              <span className="text-sm font-light text-white/70 tracking-[0.3em] uppercase">Data Sources</span>
            </div>
            <h1 className="text-5xl font-thin text-white mb-8">Our Data Sources</h1>
            <p className="text-lg text-white/60 font-light max-w-3xl mx-auto leading-relaxed">
              We aggregate data from multiple trusted meteorological and space weather sources to provide 
              the most comprehensive and accurate aurora forecasts available.
            </p>
          </div>
        </div>
      </div>

      {/* Data Sources Grid */}
      <div className="py-24 bg-gradient-to-b from-black to-slate-900">
        <div className="max-w-7xl mx-auto px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            
            {/* NOAA Space Weather */}
            <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-2xl flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-blue-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-2xl font-light text-white">NOAA Space Weather</h3>
                  <p className="text-white/60 text-sm">Space Weather Prediction Center</p>
                </div>
              </div>
              <p className="text-white/70 font-light leading-relaxed mb-6">
                The National Oceanic and Atmospheric Administration&apos;s Space Weather Prediction Center 
                provides real-time solar wind data, geomagnetic indices (Kp), and aurora probability forecasts.
              </p>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-white/60 text-sm">Update Frequency</span>
                  <span className="text-green-400 text-sm font-light">Typically every 1-5 minutes</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-white/60 text-sm">Data Quality</span>
                  <span className="text-green-400 text-sm font-light">High</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-white/60 text-sm">Coverage</span>
                  <span className="text-white/70 text-sm">Global</span>
                </div>
              </div>
            </div>

            {/* Open-Meteo */}
            <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-green-500/20 to-emerald-500/20 rounded-2xl flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-green-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-2xl font-light text-white">Open-Meteo</h3>
                  <p className="text-white/60 text-sm">Weather Forecast API</p>
                </div>
              </div>
              <p className="text-white/70 font-light leading-relaxed mb-6">
                Open-source weather API providing high-resolution cloud cover, temperature, and visibility 
                data for precise local weather conditions.
              </p>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-white/60 text-sm">Update Frequency</span>
                  <span className="text-green-400 text-sm font-light">Typically every 30 minutes</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-white/60 text-sm">Data Quality</span>
                  <span className="text-green-400 text-sm font-light">High</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-white/60 text-sm">Coverage</span>
                  <span className="text-white/70 text-sm">Global</span>
                </div>
              </div>
            </div>

            {/* Finnish Meteorological Institute */}
            <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-red-500/20 to-pink-500/20 rounded-2xl flex items-center justify-center mr-4">
                  <span className="text-red-300 text-lg font-bold">🇫🇮</span>
                </div>
                <div>
                  <h3 className="text-2xl font-light text-white">FMI</h3>
                  <p className="text-white/60 text-sm">Finnish Meteorological Institute</p>
                </div>
              </div>
              <p className="text-white/70 font-light leading-relaxed mb-6">
                Finland&apos;s national meteorological service providing detailed weather forecasts, 
                cloud cover data, and atmospheric conditions for Finnish Lapland.
              </p>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-white/60 text-sm">Update Frequency</span>
                  <span className="text-green-400 text-sm font-light">Typically every 1-3 hours</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-white/60 text-sm">Data Quality</span>
                  <span className="text-green-400 text-sm font-light">High</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-white/60 text-sm">Coverage</span>
                  <span className="text-white/70 text-sm">Finland</span>
                </div>
              </div>
            </div>

            {/* Swedish Meteorological Institute */}
            <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-yellow-500/20 to-orange-500/20 rounded-2xl flex items-center justify-center mr-4">
                  <span className="text-yellow-300 text-lg font-bold">🇸🇪</span>
                </div>
                <div>
                  <h3 className="text-2xl font-light text-white">SMHI</h3>
                  <p className="text-white/60 text-sm">Swedish Meteorological Institute</p>
                </div>
              </div>
              <p className="text-white/70 font-light leading-relaxed mb-6">
                Sweden&apos;s meteorological service providing weather forecasts, cloud cover data, 
                and atmospheric conditions for Swedish Lapland and northern regions.
              </p>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-white/60 text-sm">Update Frequency</span>
                  <span className="text-green-400 text-sm font-light">Typically every 1-3 hours</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-white/60 text-sm">Data Quality</span>
                  <span className="text-green-400 text-sm font-light">High</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-white/60 text-sm">Coverage</span>
                  <span className="text-white/70 text-sm">Sweden</span>
                </div>
              </div>
            </div>

            {/* MET Norway */}
            <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500/20 to-indigo-500/20 rounded-2xl flex items-center justify-center mr-4">
                  <span className="text-blue-300 text-lg font-bold">🇳🇴</span>
                </div>
                <div>
                  <h3 className="text-2xl font-light text-white">MET Norway</h3>
                  <p className="text-white/60 text-sm">Norwegian Meteorological Institute</p>
                </div>
              </div>
              <p className="text-white/70 font-light leading-relaxed mb-6">
                Norway&apos;s meteorological service providing weather forecasts, cloud cover data, 
                and atmospheric conditions for Norwegian Lapland and Arctic regions.
              </p>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-white/60 text-sm">Update Frequency</span>
                  <span className="text-green-400 text-sm font-light">Typically every 1-3 hours</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-white/60 text-sm">Data Quality</span>
                  <span className="text-green-400 text-sm font-light">High</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-white/60 text-sm">Coverage</span>
                  <span className="text-white/70 text-sm">Norway</span>
                </div>
              </div>
            </div>

            {/* Astronomical Calculations */}
            <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-2xl flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-purple-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-2xl font-light text-white">Astronomical Data</h3>
                  <p className="text-white/60 text-sm">SunCalc & Moon Phases</p>
                </div>
              </div>
              <p className="text-white/70 font-light leading-relaxed mb-6">
                Real-time astronomical calculations including sun position, moon phases, and darkness levels 
                to determine optimal aurora viewing conditions.
              </p>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-white/60 text-sm">Update Frequency</span>
                  <span className="text-green-400 text-sm font-light">Real-time</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-white/60 text-sm">Data Quality</span>
                  <span className="text-green-400 text-sm font-light">High</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-white/60 text-sm">Coverage</span>
                  <span className="text-white/70 text-sm">Global</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Data Processing Section */}
      <div className="py-24 bg-gradient-to-b from-slate-900 to-black">
        <div className="max-w-6xl mx-auto px-12">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-thin text-white mb-8">How We Process Data</h2>
            <p className="text-lg text-white/60 font-light max-w-3xl mx-auto">
              Our data processing pipeline ensures accuracy, reliability, and transparency in every aurora forecast.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <span className="text-cyan-300 text-2xl font-light">1</span>
              </div>
              <h3 className="text-xl font-light text-white mb-4">Data Collection</h3>
              <p className="text-white/70 font-light leading-relaxed">
                We continuously collect data from multiple trusted sources, ensuring redundancy and accuracy.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500/20 to-emerald-500/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <span className="text-green-300 text-2xl font-light">2</span>
              </div>
              <h3 className="text-xl font-light text-white mb-4">Validation & Processing</h3>
              <p className="text-white/70 font-light leading-relaxed">
                Data is validated, cleaned, and processed using transparent algorithms to ensure reliability.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <span className="text-purple-300 text-2xl font-light">3</span>
              </div>
              <h3 className="text-xl font-light text-white mb-4">Score Calculation</h3>
              <p className="text-white/70 font-light leading-relaxed">
                Final aurora scores are calculated using weighted factors for optimal viewing conditions.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Transparency Section */}
      <div className="py-24 bg-gradient-to-b from-black to-slate-900">
        <div className="max-w-4xl mx-auto px-12 text-center">
          <h2 className="text-4xl font-thin text-white mb-8">Transparency & Reliability</h2>
          <p className="text-lg text-white/60 font-light mb-12 leading-relaxed">
            We believe in complete transparency. All our data sources are publicly documented, 
            and our calculation methods are open for verification.
          </p>
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="text-center">
                <div className="text-3xl font-light text-green-400 mb-2">99.9%</div>
                <div className="text-white/70 font-light">Uptime</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-light text-blue-400 mb-2">&lt;5min</div>
                <div className="text-white/70 font-light">Average Update Time</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}