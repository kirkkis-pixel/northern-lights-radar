import { Metadata } from 'next';
import Link from 'next/link';
import RegionalNavigation from '@/components/RegionalNavigation';
import MultiCityWidget from '@/components/MultiCityWidget';
import SpaceWeatherWidget from '@/components/SpaceWeatherWidget';

export const metadata: Metadata = {
  title: 'Best Time to See the Northern Lights in Finland (Updated Daily)',
  description: 'Complete guide to seeing the aurora borealis in Finland. Live conditions, best viewing spots, and expert tips for Lapland aurora hunting.',
  keywords: 'northern lights Finland, aurora borealis Finland, best time northern lights, Finland aurora guide',
  openGraph: {
    title: 'Best Time to See the Northern Lights in Finland (Updated Daily)',
    description: 'Complete guide to seeing the aurora borealis in Finland. Live conditions and expert tips.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Best Time to See the Northern Lights in Finland (Updated Daily)',
    description: 'Complete guide to seeing the aurora borealis in Finland.',
  },
  alternates: {
    canonical: 'https://northernlightsradar.com/finland/northern-lights',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'When is the best time to see the northern lights in Finland?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The best time to see the northern lights in Finland is from September to March, with peak activity typically occurring between 10 PM and 2 AM local time. The aurora is most active during the equinoxes (September and March) and around the winter solstice in December.'
      }
    },
    {
      '@type': 'Question',
      name: 'Can I see the northern lights in Helsinki?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'While it\'s possible to see the northern lights in Helsinki during strong geomagnetic storms, the best viewing is in Lapland, particularly above the Arctic Circle. Cities like Rovaniemi, Ivalo, and Kilpisjärvi offer much better chances due to their northern location and darker skies.'
      }
    },
    {
      '@type': 'Question',
      name: 'What is the Kp index and how does it affect aurora viewing?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The Kp index measures geomagnetic activity on a scale of 0-9. Higher Kp values (6-9) indicate stronger aurora activity that can be seen further south. For Finland, Kp values of 3-4 are often sufficient for good aurora viewing in Lapland.'
      }
    },
    {
      '@type': 'Question',
      name: 'Do I need special equipment to photograph the northern lights?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'While not strictly necessary, a camera with manual settings, a tripod, and a wide-angle lens will significantly improve your aurora photography. Most modern smartphones can capture aurora with the right settings and a stable mount.'
      }
    }
  ]
};

const cities = [
  { 
    slug: 'rovaniemi', 
    name: 'Rovaniemi', 
    description: 'Capital of Lapland',
    viewingSpots: ['Arktikum Science Centre', 'Santa Claus Village', 'Ounasvaara Hill', 'Rovaniemi City Center']
  },
  { 
    slug: 'ivalo', 
    name: 'Ivalo', 
    description: 'Northernmost airport',
    viewingSpots: ['Ivalo Airport area', 'Lake Inari shores', 'Saariselkä village', 'Urho Kekkonen National Park']
  },
  { 
    slug: 'inari', 
    name: 'Inari', 
    description: 'Sámi cultural heart',
    viewingSpots: ['Lake Inari shores', 'Siida Museum area', 'Inari village center', 'Pielpajärvi Wilderness Church']
  },
  { 
    slug: 'levi', 
    name: 'Levi', 
    description: 'Mountain resort',
    viewingSpots: ['Levi Fell summit', 'Levi Ski Resort', 'Kittilä village', 'Pallas-Yllästunturi National Park']
  },
  { 
    slug: 'saariselka', 
    name: 'Saariselkä', 
    description: 'Mountain village',
    viewingSpots: ['Saariselkä village', 'Kaunispää fell', 'Iisakkipää fell', 'Urho Kekkonen National Park']
  },
  { 
    slug: 'yllas', 
    name: 'Ylläs', 
    description: 'Seven fells',
    viewingSpots: ['Ylläs fell', 'Äkäslompolo village', 'Pallas-Yllästunturi National Park', 'Kittilä area']
  },
  { 
    slug: 'kilpisjarvi', 
    name: 'Kilpisjärvi', 
    description: 'Northernmost village',
    viewingSpots: ['Kilpisjärvi village', 'Saana fell', 'Malla Strict Nature Reserve', 'Three-country border area']
  },
  { 
    slug: 'kemi', 
    name: 'Kemi', 
    description: 'Coastal gateway',
    viewingSpots: ['Kemi city center', 'Bothnian Bay shoreline', 'Kemi SnowCastle area', 'Kemi railway station']
  }
];

export default function FinlandPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <div className="min-h-screen bg-black">
        {/* Regional Navigation */}
        <RegionalNavigation />
        
        {/* Hero Section */}
        <div className="relative bg-gradient-to-br from-black via-slate-900 to-gray-900 py-32 pt-40 overflow-hidden">
          {/* Background Elements */}
          <div className="absolute inset-0">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl animate-pulse" />
            <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl animate-pulse delay-1000" />
            <div className="absolute top-1/2 right-1/3 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl animate-pulse delay-2000" />
          </div>
          
          <div className="relative z-10 max-w-6xl mx-auto px-12 text-center pt-16">
            <div className="mb-12">
              <div className="inline-flex items-center px-6 py-2 bg-white/5 backdrop-blur-sm rounded-full border border-white/10 mb-8">
                <span className="text-sm font-light text-white/70 tracking-[0.2em] uppercase">Live Aurora Forecast</span>
              </div>
              <h1 className="text-6xl md:text-7xl font-bold text-white mb-8 tracking-tight leading-tight">
                <div className="text-white mb-2">Northern Lights</div>
                <div className="text-blue-300/90 bg-gradient-to-r from-green-400 via-cyan-300 via-blue-400 to-purple-500 bg-clip-text text-transparent">
                  in Finland
                </div>
              </h1>
              <p className="text-xl md:text-2xl text-white/60 font-light max-w-4xl mx-auto leading-relaxed mb-6">
                Your complete guide to seeing the aurora borealis in Finland. Live conditions, best viewing spots, and expert tips for successful aurora hunting.
              </p>
            </div>
          </div>
        </div>
        
        {/* Quick Stats */}
        <div className="py-24 bg-gradient-to-b from-slate-900 to-black">
          <div className="max-w-6xl mx-auto px-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              <div className="text-center group bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-white/20 hover:bg-white/10 transition-all duration-500 hover:scale-105">
                <div className="text-4xl font-thin text-cyan-300/80 mb-4">200+</div>
                <div className="text-white/70 font-light">Aurora Nights per Year</div>
                <div className="text-sm text-white/50 mt-2">In Lapland region</div>
              </div>
              <div className="text-center group bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-white/20 hover:bg-white/10 transition-all duration-500 hover:scale-105">
                <div className="text-4xl font-thin text-cyan-300/80 mb-4">66°N</div>
                <div className="text-white/70 font-light">Arctic Circle Location</div>
                <div className="text-sm text-white/50 mt-2">Optimal positioning</div>
              </div>
              <div className="text-center group bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-white/20 hover:bg-white/10 transition-all duration-500 hover:scale-105">
                <div className="text-4xl font-thin text-cyan-300/80 mb-4">85%</div>
                <div className="text-white/70 font-light">Success Rate</div>
                <div className="text-sm text-white/50 mt-2">In Lapland cities</div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Best Time Section */}
        <div className="py-32 bg-gradient-to-b from-black to-slate-900">
          <div className="max-w-6xl mx-auto px-12">
            <div className="text-center mb-20">
              <div className="inline-block px-8 py-3 bg-white/5 backdrop-blur-sm rounded-full border border-white/10 mb-8">
                <span className="text-sm font-light text-white/70 tracking-[0.3em] uppercase">Seasonal Guide</span>
              </div>
              <h2 className="text-5xl font-thin text-white mb-8">
                When to See the Aurora
              </h2>
              <p className="text-xl text-white/60 font-light max-w-4xl mx-auto leading-relaxed">
                Complete seasonal breakdown of the best times to visit Finland for aurora viewing
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="group bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-white/20 hover:bg-white/10 transition-all duration-500 hover:scale-105">
                <h3 className="text-2xl font-light text-white mb-6">
                  Best Months
                </h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-white/70 font-light">September - October</span>
                    <span className="px-4 py-2 bg-green-500/20 text-green-300 rounded-full text-sm font-medium border border-green-500/30">
                      Excellent
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-white/70 font-light">November - March</span>
                    <span className="px-4 py-2 bg-blue-500/20 text-blue-300 rounded-full text-sm font-medium border border-blue-500/30">
                      Peak Season
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-white/70 font-light">April - May</span>
                    <span className="px-4 py-2 bg-yellow-500/20 text-yellow-300 rounded-full text-sm font-medium border border-yellow-500/30">
                      Good
                    </span>
                  </div>
                </div>
              </div>
              
              <div className="group bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-white/20 hover:bg-white/10 transition-all duration-500 hover:scale-105">
                <h3 className="text-2xl font-light text-white mb-6">
                  Best Times
                </h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-white/70 font-light">10 PM - 2 AM</span>
                    <span className="px-4 py-2 bg-blue-500/20 text-blue-300 rounded-full text-sm font-medium border border-blue-500/30">
                      Peak Hours
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-white/70 font-light">8 PM - 4 AM</span>
                    <span className="px-4 py-2 bg-green-500/20 text-green-300 rounded-full text-sm font-medium border border-green-500/30">
                      Good Window
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-white/70 font-light">All Night</span>
                    <span className="px-4 py-2 bg-purple-500/20 text-purple-300 rounded-full text-sm font-medium border border-purple-500/30">
                      Polar Night
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Live Multi-City Widget */}
        <MultiCityWidget 
          cities={cities.map(city => ({
            slug: city.slug,
            name: city.name,
            latitude: 66.5039, // Default to Rovaniemi, will be overridden by API
            longitude: 25.7294
          }))}
          title="Live Aurora Conditions Across Finnish Lapland"
          description="Real-time aurora scores and conditions for all major Finnish Lapland destinations"
        />

        {/* Finnish Cities Section */}
        <div className="py-24 bg-gradient-to-b from-black to-slate-900">
          <div className="max-w-7xl mx-auto px-12">
            <div className="text-center mb-16">
              <div className="inline-flex items-center px-8 py-3 bg-white/5 backdrop-blur-sm rounded-full border border-white/10 mb-8">
                <svg className="w-4 h-4 text-white/70 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
                <span className="text-sm font-light text-white/70 tracking-[0.3em] uppercase">Finnish Cities</span>
              </div>
              <h2 className="text-5xl font-thin text-white mb-6">
                Explore Finnish Lapland Cities
              </h2>
              <p className="text-lg text-white/60 font-light max-w-3xl mx-auto leading-relaxed">
                Discover the best aurora viewing destinations across Finnish Lapland
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {cities.map((city, index) => (
                <Link
                  key={city.slug}
                  href={`/finland/lapland/${city.slug}/aurora`}
                  className="group bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-white/20 hover:bg-white/10 transition-all duration-500 hover:scale-105 hover:-translate-y-2"
                  style={{
                    animationDelay: `${index * 100}ms`
                  }}
                >
                  <div className="text-center">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                      <span className="text-blue-300 text-xl">🏔️</span>
                    </div>
                    <h3 className="text-lg font-light text-white mb-2 group-hover:text-cyan-300 transition-colors">
                      {city.name}
                    </h3>
                    <p className="text-white/70 text-sm font-light leading-relaxed mb-4">
                      {city.description}
                    </p>
                    <div className="flex flex-wrap gap-1 justify-center">
                      {city.viewingSpots.slice(0, 2).map((spot, spotIndex) => (
                        <span
                          key={spotIndex}
                          className="px-2 py-1 bg-white/10 text-white/60 text-xs rounded-full"
                        >
                          {spot}
                        </span>
                      ))}
                      {city.viewingSpots.length > 2 && (
                        <span className="px-2 py-1 bg-white/10 text-white/60 text-xs rounded-full">
                          +{city.viewingSpots.length - 2} more
                        </span>
                      )}
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Why Finnish Lapland */}
        <div className="py-32 bg-gradient-to-b from-slate-900 to-black">
          <div className="max-w-6xl mx-auto px-12">
            <div className="text-center mb-20">
              <div className="inline-block px-8 py-3 bg-white/5 backdrop-blur-sm rounded-full border border-white/10 mb-8">
                <span className="text-sm font-light text-white/70 tracking-[0.3em] uppercase">Why Finland</span>
              </div>
              <h2 className="text-5xl font-thin text-white mb-8">
                Why Finnish Lapland is Perfect for Aurora Viewing
              </h2>
              <p className="text-xl text-white/60 font-light max-w-4xl mx-auto leading-relaxed">
                Finland offers unique advantages that make it one of the world&apos;s premier aurora destinations
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="group bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-white/20 hover:bg-white/10 transition-all duration-500">
                <div className="w-16 h-16 bg-blue-500/20 rounded-2xl flex items-center justify-center mb-6 border border-blue-400/30">
                  <span className="text-blue-300 text-2xl">🌲</span>
                </div>
                <h3 className="text-xl font-light text-white mb-4">Pristine Wilderness</h3>
                <p className="text-white/70 font-light leading-relaxed">
                  Finnish Lapland is home to vast wilderness areas with minimal light pollution, offering some of the darkest skies in Europe for optimal aurora viewing.
                </p>
              </div>
              
              <div className="group bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-white/20 hover:bg-white/10 transition-all duration-500">
                <div className="w-16 h-16 bg-blue-500/20 rounded-2xl flex items-center justify-center mb-6 border border-blue-400/30">
                  <span className="text-blue-300 text-2xl">🏔️</span>
                </div>
                <h3 className="text-xl font-light text-white mb-4">Fell Landscapes</h3>
                <p className="text-white/70 font-light leading-relaxed">
                  The unique fell landscapes of Finnish Lapland provide elevated viewing points and dramatic backdrops for aurora photography, with clear sightlines to the northern horizon.
                </p>
              </div>
              
              <div className="group bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-white/20 hover:bg-white/10 transition-all duration-500">
                <div className="w-16 h-16 bg-blue-500/20 rounded-2xl flex items-center justify-center mb-6 border border-blue-400/30">
                  <span className="text-blue-300 text-2xl">🌡️</span>
                </div>
                <h3 className="text-xl font-light text-white mb-4">Stable Climate</h3>
                <p className="text-white/70 font-light leading-relaxed">
                  Finland&apos;s continental climate provides more stable weather patterns compared to coastal areas, resulting in clearer skies and better aurora viewing conditions.
                </p>
              </div>
              
              <div className="group bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-white/20 hover:bg-white/10 transition-all duration-500">
                <div className="w-16 h-16 bg-blue-500/20 rounded-2xl flex items-center justify-center mb-6 border border-blue-400/30">
                  <span className="text-blue-300 text-2xl">🏨</span>
                </div>
                <h3 className="text-xl font-light text-white mb-4">Aurora Infrastructure</h3>
                <p className="text-white/70 font-light leading-relaxed">
                  World-class aurora tourism infrastructure including glass igloos, aurora hotels, and specialized viewing platforms designed specifically for northern lights enthusiasts.
                </p>
              </div>
              
              <div className="group bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-white/20 hover:bg-white/10 transition-all duration-500">
                <div className="w-16 h-16 bg-blue-500/20 rounded-2xl flex items-center justify-center mb-6 border border-blue-400/30">
                  <span className="text-blue-300 text-2xl">🎯</span>
                </div>
                <h3 className="text-xl font-light text-white mb-4">Optimal Latitude</h3>
                <p className="text-white/70 font-light leading-relaxed">
                  Finnish Lapland cities are positioned at the ideal latitude (66-69°N) within the auroral oval, providing the highest probability of seeing the northern lights.
                </p>
              </div>
              
              <div className="group bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-white/20 hover:bg-white/10 transition-all duration-500">
                <div className="w-16 h-16 bg-blue-500/20 rounded-2xl flex items-center justify-center mb-6 border border-blue-400/30">
                  <span className="text-blue-300 text-2xl">🌙</span>
                </div>
                <h3 className="text-xl font-light text-white mb-4">Polar Night</h3>
                <p className="text-white/70 font-light leading-relaxed">
                  During winter months, Finnish Lapland experiences polar night with up to 24 hours of darkness, maximizing aurora viewing opportunities when the sun doesn&apos;t rise.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Space Weather */}
        <div className="py-24 bg-gradient-to-b from-black to-slate-900">
          <div className="max-w-6xl mx-auto px-12">
            <div className="text-center mb-16">
              <div className="inline-block px-8 py-3 bg-white/5 backdrop-blur-sm rounded-full border border-white/10 mb-8">
                <span className="text-sm font-light text-white/70 tracking-[0.3em] uppercase">Space Weather</span>
              </div>
              <h2 className="text-4xl font-thin text-white mb-6">
                Current Space Weather Conditions
              </h2>
              <p className="text-xl text-white/60 font-light max-w-3xl mx-auto leading-relaxed">
                Monitor real-time space weather data that affects aurora visibility across Finnish Lapland
              </p>
            </div>
            
            <div className="max-w-4xl mx-auto">
              <SpaceWeatherWidget />
            </div>
          </div>
        </div>
        
        {/* CTA Section */}
        <div className="py-24 bg-gradient-to-b from-black to-slate-900">
          <div className="max-w-6xl mx-auto px-12 text-center">
            <Link
              href="/guide/how-to-see-the-northern-lights"
              className="inline-flex items-center px-12 py-4 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-400/30 rounded-2xl text-white font-light text-lg hover:from-cyan-500/30 hover:to-blue-500/30 hover:border-cyan-400/50 transition-all duration-500 hover:scale-105"
            >
              Start Your Aurora Journey
              <svg className="w-5 h-5 ml-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
        
        {/* Attribution Footer */}
        <div className="py-12 bg-black">
          <div className="max-w-6xl mx-auto px-12">
            <p className="text-sm text-white/40 text-center font-light">
              Data from NOAA SWPC (OVATION), FMI, Open-Meteo. Times in local timezone. 
              Scores are indicative and depend on weather & darkness.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

