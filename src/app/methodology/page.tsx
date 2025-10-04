import { Metadata } from 'next';
import RegionalNavigation from '@/components/RegionalNavigation';

export const metadata: Metadata = {
  title: 'Methodology - Northern Lights Radar',
  description: 'Learn about our aurora forecasting methodology, data processing algorithms, and scoring system for accurate northern lights predictions.',
  keywords: 'aurora methodology, aurora forecasting algorithm, aurora score calculation, space weather prediction',
  openGraph: {
    title: 'Methodology - Northern Lights Radar',
    description: 'Learn about our aurora forecasting methodology and scoring system.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Methodology - Northern Lights Radar',
    description: 'Learn about our aurora forecasting methodology and scoring system.',
  },
  alternates: {
    canonical: 'https://northernlightsradar.com/methodology',
  },
};

export default function MethodologyPage() {
  return (
    <div className="min-h-screen bg-black">
      <RegionalNavigation />
      
      {/* Hero Section */}
      <div className="relative py-32 bg-gradient-to-b from-black via-slate-900 to-black">
        <div className="max-w-6xl mx-auto px-12">
          <div className="text-center mb-20">
            <div className="inline-flex items-center px-8 py-3 bg-white/5 backdrop-blur-sm rounded-full border border-white/10 mb-8">
              <svg className="w-4 h-4 text-white/70 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
              <span className="text-sm font-light text-white/70 tracking-[0.3em] uppercase">Methodology</span>
            </div>
            <h1 className="text-5xl font-thin text-white mb-8">Our Methodology</h1>
            <p className="text-lg text-white/60 font-light max-w-3xl mx-auto leading-relaxed">
              Our aurora forecasting system combines multiple data sources and transparent algorithms 
              to provide accurate and reliable aurora predictions.
            </p>
          </div>
        </div>
      </div>

      {/* Experimental System Notice */}
      <div className="py-8 bg-gradient-to-b from-black to-slate-900">
        <div className="max-w-4xl mx-auto px-12">
          <div className="bg-gradient-to-r from-yellow-500/10 to-orange-500/10 border border-yellow-400/20 rounded-2xl p-6 text-center">
            <div className="inline-flex items-center px-4 py-2 bg-yellow-500/20 rounded-full mb-4">
              <svg className="w-4 h-4 text-yellow-300 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
              </svg>
              <span className="text-yellow-300 text-sm font-medium uppercase tracking-wide">Experimental System</span>
            </div>
            <h2 className="text-xl font-light text-white mb-2">For Guidance Only</h2>
            <p className="text-white/70 font-light">
              This system is experimental and provided for guidance purposes. Always check multiple sources 
              and local conditions before making aurora viewing plans.
            </p>
          </div>
        </div>
      </div>

      {/* Scoring System Section */}
      <div className="py-24 bg-gradient-to-b from-slate-900 to-black">
        <div className="max-w-6xl mx-auto px-12">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-thin text-white mb-8">Aurora Scoring System</h2>
            <p className="text-lg text-white/60 font-light max-w-3xl mx-auto">
              Our aurora score (0-100) is calculated using multiple factors that influence aurora visibility.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
                <h3 className="text-xl font-light text-white mb-4">Aurora Probability (40%)</h3>
                <p className="text-white/70 font-light leading-relaxed mb-4">
                  Based on NOAA&apos;s OVATION Prime model, this represents the likelihood of aurora activity 
                  in the atmosphere above the location.
                </p>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-white/60">Excellent (80-100%)</span>
                    <span className="text-green-400">Score: 40</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-white/60">Good (60-79%)</span>
                    <span className="text-blue-400">Score: 30</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-white/60">Fair (40-59%)</span>
                    <span className="text-yellow-400">Score: 20</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-white/60">Poor (0-39%)</span>
                    <span className="text-red-400">Score: 10</span>
                  </div>
                </div>
              </div>

              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
                <h3 className="text-xl font-light text-white mb-4">Cloud Cover (30%)</h3>
                <p className="text-white/70 font-light leading-relaxed mb-4">
                  Clear skies are essential for aurora visibility. We use cloud cover data from multiple 
                  meteorological sources.
                </p>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-white/60">Clear (0-20%)</span>
                    <span className="text-green-400">Score: 30</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-white/60">Partly Cloudy (21-50%)</span>
                    <span className="text-blue-400">Score: 20</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-white/60">Mostly Cloudy (51-80%)</span>
                    <span className="text-yellow-400">Score: 10</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-white/60">Overcast (81-100%)</span>
                    <span className="text-red-400">Score: 0</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-8">
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
                <h3 className="text-xl font-light text-white mb-4">Darkness Level (20%)</h3>
                <p className="text-white/70 font-light leading-relaxed mb-4">
                  Calculated using astronomical data to determine if conditions are dark enough 
                  for aurora visibility.
                </p>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-white/60">Deep Darkness</span>
                    <span className="text-green-400">Score: 20</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-white/60">Dark</span>
                    <span className="text-blue-400">Score: 15</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-white/60">Twilight</span>
                    <span className="text-yellow-400">Score: 8</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-white/60">Daylight</span>
                    <span className="text-red-400">Score: 0</span>
                  </div>
                </div>
              </div>

              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
                <h3 className="text-xl font-light text-white mb-4">Moon Phase (10%)</h3>
                <p className="text-white/70 font-light leading-relaxed mb-4">
                  Moon brightness affects aurora visibility. New moon provides the darkest skies, 
                  while full moon can wash out faint auroras.
                </p>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-white/60">New Moon</span>
                    <span className="text-green-400">Score: 10</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-white/60">Crescent</span>
                    <span className="text-blue-400">Score: 8</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-white/60">Half Moon</span>
                    <span className="text-yellow-400">Score: 5</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-white/60">Full Moon</span>
                    <span className="text-red-400">Score: 2</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Data Processing Pipeline */}
      <div className="py-24 bg-gradient-to-b from-black to-slate-900">
        <div className="max-w-6xl mx-auto px-12">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-thin text-white mb-8">Data Processing Pipeline</h2>
            <p className="text-lg text-white/60 font-light max-w-3xl mx-auto">
              Our system processes data through multiple stages to ensure accuracy and reliability.
            </p>
          </div>
          
          <div className="space-y-8">
            <div className="flex items-start space-x-6">
              <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-2xl flex items-center justify-center">
                <span className="text-cyan-300 text-lg font-light">1</span>
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-light text-white mb-3">Data Collection</h3>
                <p className="text-white/70 font-light leading-relaxed">
                  We continuously collect data from NOAA Space Weather Prediction Center, Open-Meteo, 
                  and national meteorological institutes (FMI, SMHI, MET Norway) with automatic 
                  fallback mechanisms to ensure data availability.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-6">
              <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-green-500/20 to-emerald-500/20 rounded-2xl flex items-center justify-center">
                <span className="text-green-300 text-lg font-light">2</span>
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-light text-white mb-3">Data Validation</h3>
                <p className="text-white/70 font-light leading-relaxed">
                  All incoming data is validated for accuracy, completeness, and consistency. 
                  Outliers are flagged and cross-referenced with multiple sources before processing.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-6">
              <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-2xl flex items-center justify-center">
                <span className="text-purple-300 text-lg font-light">3</span>
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-light text-white mb-3">Score Calculation</h3>
                <p className="text-white/70 font-light leading-relaxed">
                  Using our transparent algorithm, we calculate weighted scores for each factor 
                  and combine them into a final aurora score (0-100) with clear explanations 
                  for each component.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-6">
              <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-yellow-500/20 to-orange-500/20 rounded-2xl flex items-center justify-center">
                <span className="text-yellow-300 text-lg font-light">4</span>
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-light text-white mb-3">Quality Assurance</h3>
                <p className="text-white/70 font-light leading-relaxed">
                  Final scores are reviewed for consistency and accuracy. We maintain detailed 
                  logs of all calculations and data sources for full transparency and debugging.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Limitations Section */}
      <div className="py-24 bg-gradient-to-b from-slate-900 to-black">
        <div className="max-w-4xl mx-auto px-12">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-thin text-white mb-8">Limitations & Considerations</h2>
            <p className="text-lg text-white/60 font-light max-w-3xl mx-auto">
              Understanding the limitations of aurora forecasting helps set realistic expectations.
            </p>
          </div>
          
          <div className="space-y-6">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
              <h3 className="text-xl font-light text-white mb-3">Weather Variability</h3>
              <p className="text-white/70 font-light leading-relaxed">
                Local weather conditions can change rapidly, especially in Arctic regions. 
                Our forecasts are based on the best available data but may not reflect 
                sudden weather changes.
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
              <h3 className="text-xl font-light text-white mb-3">Solar Activity</h3>
              <p className="text-white/70 font-light leading-relaxed">
                Solar storms and geomagnetic activity can be unpredictable. While we use 
                real-time data, solar events can develop and intensify quickly.
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
              <h3 className="text-xl font-light text-white mb-3">Local Conditions</h3>
              <p className="text-white/70 font-light leading-relaxed">
                Light pollution, local topography, and microclimates can significantly 
                affect aurora visibility beyond what our regional forecasts can account for.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Transparency Section */}
      <div className="py-24 bg-gradient-to-b from-black to-slate-900">
        <div className="max-w-4xl mx-auto px-12 text-center">
          <h2 className="text-4xl font-thin text-white mb-8">Full Transparency</h2>
          <p className="text-lg text-white/60 font-light mb-12 leading-relaxed">
            We believe in complete transparency. All our data sources, calculation methods, 
            and algorithms are documented and open for verification.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <h3 className="text-xl font-light text-white mb-4">Open Source</h3>
              <p className="text-white/70 font-light mb-4">
                Our calculation methods and algorithms are publicly documented and verifiable.
              </p>
              <div className="text-cyan-300 text-sm font-light">View on GitHub</div>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <h3 className="text-xl font-light text-white mb-4">Data Sources</h3>
              <p className="text-white/70 font-light mb-4">
                All data sources are clearly documented with update frequencies and quality ratings.
              </p>
              <div className="text-cyan-300 text-sm font-light">View Data Sources</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}