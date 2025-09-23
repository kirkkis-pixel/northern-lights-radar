import { Metadata } from 'next';
import Link from 'next/link';
import LuxuryNavigation from '@/components/LuxuryNavigation';
import TonightCard from '@/components/TonightCard';

export const metadata: Metadata = {
  title: 'Best Time to See Northern Lights in Finland - Seasonal Guide',
  description: 'Complete seasonal guide to aurora viewing in Finland. Month-by-month breakdown of weather, darkness, and aurora activity for optimal northern lights hunting.',
  keywords: 'best time northern lights Finland, Finland aurora season, when to see aurora Finland, Finland aurora calendar',
  openGraph: {
    title: 'Best Time to See Northern Lights in Finland - Seasonal Guide',
    description: 'Complete seasonal guide to aurora viewing in Finland with month-by-month breakdowns.',
    type: 'article',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Best Time to See Northern Lights in Finland - Seasonal Guide',
    description: 'Complete seasonal guide to aurora viewing in Finland.',
  },
  alternates: {
    canonical: 'https://northernlightsradar.com/guide/best-time-in-finland',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Best Time to See Northern Lights in Finland - Seasonal Guide',
  description: 'Complete seasonal guide to aurora viewing in Finland. Month-by-month breakdown of weather, darkness, and aurora activity.',
  author: {
    '@type': 'Organization',
    name: 'Northern Lights Radar'
  },
  publisher: {
    '@type': 'Organization',
    name: 'Northern Lights Radar'
  },
  datePublished: '2024-01-01',
  dateModified: '2024-01-01'
};

export default function BestTimePage() {
  const months = [
    {
      month: 'September',
      rating: 'Good',
      ratingColor: 'bg-green-100 text-green-800',
      temperature: '-2°C to 8°C',
      darkness: '8-10 hours',
      aurora: 'Moderate',
      pros: ['Milder temperatures', 'Good aurora activity', 'Less crowded', 'Autumn colors'],
      cons: ['Shorter nights', 'Variable weather', 'Higher prices']
    },
    {
      month: 'October',
      rating: 'Excellent',
      ratingColor: 'bg-blue-100 text-blue-800',
      temperature: '-5°C to 2°C',
      darkness: '10-12 hours',
      aurora: 'High',
      pros: ['Peak aurora season starts', 'Longer nights', 'Good weather', 'Equinox activity'],
      cons: ['Getting colder', 'More tourists', 'Higher accommodation costs']
    },
    {
      month: 'November',
      rating: 'Excellent',
      ratingColor: 'bg-blue-100 text-blue-800',
      temperature: '-10°C to -2°C',
      darkness: '12-16 hours',
      aurora: 'Very High',
      pros: ['Long nights', 'High aurora activity', 'Snow cover', 'Polar night begins'],
      cons: ['Very cold', 'Limited daylight', 'Expensive accommodation']
    },
    {
      month: 'December',
      rating: 'Peak',
      ratingColor: 'bg-purple-100 text-purple-800',
      temperature: '-15°C to -5°C',
      darkness: '16-24 hours',
      aurora: 'Peak',
      pros: ['Polar night', 'Maximum darkness', 'Peak aurora season', 'Christmas atmosphere'],
      cons: ['Extremely cold', 'No daylight', 'Highest prices', 'Crowded']
    },
    {
      month: 'January',
      rating: 'Peak',
      ratingColor: 'bg-purple-100 text-purple-800',
      temperature: '-20°C to -10°C',
      darkness: '16-24 hours',
      aurora: 'Peak',
      pros: ['Polar night continues', 'Peak aurora activity', 'Clear skies', 'Winter wonderland'],
      cons: ['Extremely cold', 'No daylight', 'High prices', 'Limited activities']
    },
    {
      month: 'February',
      rating: 'Excellent',
      ratingColor: 'bg-blue-100 text-blue-800',
      temperature: '-18°C to -8°C',
      darkness: '14-18 hours',
      aurora: 'Very High',
      pros: ['Long nights', 'High aurora activity', 'Sun returns', 'Winter sports'],
      cons: ['Still very cold', 'Variable weather', 'High prices']
    },
    {
      month: 'March',
      rating: 'Excellent',
      ratingColor: 'bg-blue-100 text-blue-800',
      temperature: '-12°C to -2°C',
      darkness: '10-14 hours',
      aurora: 'High',
      pros: ['Equinox activity', 'Milder temperatures', 'Long nights', 'Spring skiing'],
      cons: ['Variable weather', 'Shorter nights', 'Higher prices']
    },
    {
      month: 'April',
      rating: 'Good',
      ratingColor: 'bg-green-100 text-green-800',
      temperature: '-5°C to 5°C',
      darkness: '6-10 hours',
      aurora: 'Moderate',
      pros: ['Milder weather', 'Spring activities', 'Lower prices', 'Longer days'],
      cons: ['Shorter nights', 'Variable aurora', 'Melting snow']
    }
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <div className="min-h-screen bg-black">
        {/* Luxury Navigation */}
        <LuxuryNavigation />
        
        {/* Breadcrumbs */}
        <div className="bg-black/50 py-4">
          <div className="max-w-6xl mx-auto px-12">
            <nav className="text-sm text-white/60">
              <Link href="/" className="hover:text-cyan-300 transition-colors">Home</Link>
              <span className="mx-2">/</span>
              <Link href="/finland/northern-lights" className="hover:text-cyan-300 transition-colors">Finland</Link>
              <span className="mx-2">/</span>
              <span className="text-white/80">Best Time in Finland</span>
            </nav>
          </div>
        </div>

        {/* Hero Section */}
        <div className="relative bg-gradient-to-br from-black via-slate-900 to-gray-900 py-32 pt-24 overflow-hidden">
          {/* Background Elements */}
          <div className="absolute inset-0">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl animate-pulse" />
            <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl animate-pulse delay-1000" />
          </div>
          
          <div className="relative z-10 max-w-6xl mx-auto px-12 text-center pt-24">
            <div className="mb-16">
              <div className="inline-flex items-center px-6 py-2 bg-white/5 backdrop-blur-sm rounded-full border border-white/10 mb-8">
                <div className="w-2 h-2 bg-red-500 rounded-full mr-3 animate-pulse"></div>
                <span className="text-sm font-light text-white/70 tracking-[0.2em] uppercase">Seasonal Guide</span>
              </div>
              <h1 className="text-5xl md:text-6xl font-thin text-white mb-8 tracking-tight leading-tight">
                <span className="text-white">Best Time to See</span>
                <span className="text-cyan-300/80 bg-gradient-to-r from-cyan-300/70 to-blue-400/70 bg-clip-text text-transparent">
                  Northern Lights
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-white/60 font-light max-w-4xl mx-auto leading-relaxed mb-6">
                Complete seasonal guide with month-by-month breakdowns of weather, 
                darkness, and aurora activity for optimal viewing.
              </p>
            </div>
          </div>
        </div>

        {/* Live Conditions Widget */}
        <div className="py-24 bg-gradient-to-b from-black to-slate-900">
          <div className="max-w-6xl mx-auto px-12">
            <div className="text-center mb-16">
              <div className="inline-block px-8 py-3 bg-white/5 backdrop-blur-sm rounded-full border border-white/10 mb-8">
                <span className="text-sm font-light text-white/70 tracking-[0.3em] uppercase">Live Conditions</span>
              </div>
              <h2 className="text-4xl font-thin text-white mb-6">
                Current Aurora Activity
              </h2>
              <p className="text-xl text-white/60 font-light max-w-3xl mx-auto leading-relaxed">
                Check real-time conditions to see if tonight is a good night for aurora hunting
              </p>
            </div>
            
            <div className="max-w-4xl mx-auto">
              <TonightCard 
                latitude={66.5039} 
                longitude={25.7294} 
                cityName="Rovaniemi" 
                description="Current conditions in Lapland's gateway city"
              />
            </div>
          </div>
        </div>

        {/* Quick Summary */}
        <div className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="text-2xl font-bold text-gray-900 text-center mb-12">
              Quick Summary
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600 mb-2">Peak Season</div>
                <div className="text-gray-600">December - January</div>
                <div className="text-sm text-gray-500 mt-2">Polar night, maximum darkness</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">Best Value</div>
                <div className="text-gray-600">October - March</div>
                <div className="text-sm text-gray-500 mt-2">Excellent conditions, good prices</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600 mb-2">Shoulder Season</div>
                <div className="text-gray-600">September, April</div>
                <div className="text-sm text-gray-500 mt-2">Milder weather, lower prices</div>
              </div>
            </div>
          </div>
        </div>

        {/* Monthly Breakdown */}
        <div className="py-16 bg-gray-50">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-2xl font-bold text-gray-900 text-center mb-12">
              Month-by-Month Guide
            </h2>
            
            <div className="space-y-8">
              {months.map((month) => (
                <div key={month.month} className="bg-white rounded-2xl p-8 shadow-sm border border-gray-200">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                    <div className="flex items-center space-x-4 mb-4 md:mb-0">
                      <div className="text-3xl font-bold text-gray-900">
                        {month.month}
                      </div>
                      <div className={`px-4 py-2 rounded-full text-sm font-medium ${month.ratingColor}`}>
                        {month.rating}
                      </div>
                    </div>
                    <div className="flex space-x-6 text-sm text-gray-600">
                      <div>
                        <span className="font-medium">Temperature:</span> {month.temperature}
                      </div>
                      <div>
                        <span className="font-medium">Darkness:</span> {month.darkness}
                      </div>
                      <div>
                        <span className="font-medium">Aurora:</span> {month.aurora}
                      </div>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-green-700 mb-2">✓ Pros</h4>
                      <ul className="text-gray-600 space-y-1">
                        {month.pros.map((pro, i) => (
                          <li key={i}>• {pro}</li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-red-700 mb-2">✗ Cons</h4>
                      <ul className="text-gray-600 space-y-1">
                        {month.cons.map((con, i) => (
                          <li key={i}>• {con}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Seasonal Factors */}
        <div className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="text-2xl font-bold text-gray-900 text-center mb-12">
              Key Seasonal Factors
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Darkness Levels</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Polar Night (Dec-Jan)</span>
                      <span className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm font-medium">
                        24 hours
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Long Nights (Nov-Feb)</span>
                      <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                        12-18 hours
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Moderate Nights (Oct-Mar)</span>
                      <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium">
                        8-12 hours
                      </span>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Aurora Activity</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Equinox Peaks</span>
                      <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                        Sep, Mar
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Winter Peak</span>
                      <span className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm font-medium">
                        Dec-Jan
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Shoulder Season</span>
                      <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium">
                        Oct, Feb
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Weather Patterns</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Clear Skies</span>
                      <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                        Nov-Mar
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Variable Weather</span>
                      <span className="px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full text-sm font-medium">
                        Sep-Oct, Apr
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Cloudy Periods</span>
                      <span className="px-3 py-1 bg-gray-100 text-gray-800 rounded-full text-sm font-medium">
                        All year
                      </span>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Practical Considerations</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Peak Prices</span>
                      <span className="px-3 py-1 bg-red-100 text-red-800 rounded-full text-sm font-medium">
                        Dec-Jan
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Best Value</span>
                      <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium">
                        Oct, Mar
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Crowds</span>
                      <span className="px-3 py-1 bg-orange-100 text-orange-800 rounded-full text-sm font-medium">
                        Dec-Feb
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Recommendations */}
        <div className="py-16 bg-gray-50">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="text-2xl font-bold text-gray-900 text-center mb-12">
              Our Recommendations
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  First-Time Visitors
                </h3>
                <p className="text-gray-600 mb-4">
                  Choose October or March for milder weather and good aurora activity.
                </p>
                <div className="text-sm text-blue-600 font-medium">
                  Recommended: October 15 - March 15
                </div>
              </div>
              
              <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Photography Enthusiasts
                </h3>
                <p className="text-gray-600 mb-4">
                  December and January offer maximum darkness and peak aurora activity.
                </p>
                <div className="text-sm text-blue-600 font-medium">
                  Recommended: December 1 - January 31
                </div>
              </div>
              
              <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Budget Travelers
                </h3>
                <p className="text-gray-600 mb-4">
                  September and April offer good conditions with lower prices and fewer crowds.
                </p>
                <div className="text-sm text-blue-600 font-medium">
                  Recommended: September 1-30, April 1-30
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Related Guides */}
        <div className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="text-2xl font-bold text-gray-900 text-center mb-12">
              Related Guides
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Link
                href="/guide/how-to-see-the-northern-lights"
                className="block bg-white rounded-2xl p-6 shadow-sm border border-gray-200 hover:shadow-md transition-shadow"
              >
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  How to See the Northern Lights
                </h3>
                <p className="text-gray-600">
                  Complete beginner&apos;s guide with step-by-step instructions for aurora hunting.
                </p>
              </Link>
              
              <Link
                href="/guide/camera-settings"
                className="block bg-white rounded-2xl p-6 shadow-sm border border-gray-200 hover:shadow-md transition-shadow"
              >
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Camera Settings
                </h3>
                <p className="text-gray-600">
                  Photography guide with exact camera settings for aurora photography.
                </p>
              </Link>
            </div>
          </div>
        </div>

        {/* Attribution Footer */}
        <div className="py-8 bg-gray-50 border-t border-gray-200">
          <div className="max-w-4xl mx-auto px-6">
            <p className="text-sm text-gray-500 text-center">
              Data from NOAA SWPC (OVATION), Open-Meteo, OpenWeather. Times in local timezone. 
              Scores are indicative and depend on weather & darkness.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
