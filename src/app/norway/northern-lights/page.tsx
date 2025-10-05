import { Metadata } from 'next';
import RegionalNavigation from '@/components/RegionalNavigation';
import SpaceWeatherWidget from '@/components/SpaceWeatherWidget';
import SSRCityCard from '@/components/SSRCityCard';

export const metadata: Metadata = {
  title: 'Northern Lights in Norway - Norwegian Lapland Aurora Guide',
  description: 'Discover the best places to see the northern lights in Norwegian Lapland. Live conditions, viewing spots, and expert tips for Tromsø, Alta, and Svalbard.',
  keywords: 'northern lights Norway, Norwegian Lapland aurora, Tromsø northern lights, Alta aurora, Svalbard northern lights',
  openGraph: {
    title: 'Northern Lights in Norway - Norwegian Lapland Aurora Guide',
    description: 'Discover the best places to see the northern lights in Norwegian Lapland. Live conditions and expert tips.',
    type: 'website',
    locale: 'en_US',
    url: 'https://northernlightsradar.com/norway/northern-lights',
    siteName: 'Northern Lights Radar',
    images: [
      {
        url: '/og-image.svg',
        width: 1200,
        height: 630,
        alt: 'Northern Lights in Norway - Norwegian Lapland Aurora Guide',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Northern Lights in Norway - Norwegian Lapland Aurora Guide',
    description: 'Discover the best places to see the northern lights in Norwegian Lapland.',
    images: ['/og-image.svg'],
  },
  alternates: {
    canonical: 'https://northernlightsradar.com/norway/northern-lights',
  },
};

const cities = [
  {
    slug: 'tromso',
    name: 'Tromsø',
    region: 'Troms og Finnmark',
    country: 'Norway',
    latitude: 69.6492,
    longitude: 18.9553,
    timezone: 'Europe/Oslo',
    viewingSpots: ['Fjellheisen', 'Tromsø Bridge', 'Prestvannet'],
    description: 'The "Gateway to the Arctic" and Norway\'s northern lights capital, offering excellent aurora viewing with a vibrant city atmosphere.'
  },
  {
    slug: 'alta',
    name: 'Alta',
    region: 'Troms og Finnmark',
    country: 'Norway',
    latitude: 69.9689,
    longitude: 23.2717,
    timezone: 'Europe/Oslo',
    viewingSpots: ['Alta Canyon', 'Haldde Observatory', 'Alta River'],
    description: 'Home to the world\'s first northern lights observatory and some of the most reliable aurora viewing conditions in Norway.'
  },
  {
    slug: 'svalbard',
    name: 'Svalbard',
    region: 'Svalbard',
    country: 'Norway',
    latitude: 78.2208,
    longitude: 15.6400,
    timezone: 'Europe/Oslo',
    viewingSpots: ['Longyearbyen', 'Barentsburg', 'Pyramiden'],
    description: 'The world\'s northernmost inhabited place, offering unique aurora viewing during the polar night with 24-hour darkness.'
  },
  {
    slug: 'narvik',
    name: 'Narvik',
    region: 'Nordland',
    country: 'Norway',
    latitude: 68.4381,
    longitude: 17.4278,
    timezone: 'Europe/Oslo',
    viewingSpots: ['Narvikfjellet', 'Ofotfjord', 'Narvik War Museum'],
    description: 'Historic port city with excellent aurora viewing from the surrounding mountains and fjord landscapes.'
  },
  {
    slug: 'bodo',
    name: 'Bodø',
    region: 'Nordland',
    country: 'Norway',
    latitude: 67.2804,
    longitude: 14.4049,
    timezone: 'Europe/Oslo',
    viewingSpots: ['Saltstraumen', 'Bodø Cathedral', 'Rønvikfjellet'],
    description: 'Gateway to the Lofoten Islands with good aurora viewing opportunities and access to the world\'s strongest tidal current.'
  },
  {
    slug: 'harstad',
    name: 'Harstad',
    region: 'Troms og Finnmark',
    country: 'Norway',
    latitude: 68.7986,
    longitude: 16.5456,
    timezone: 'Europe/Oslo',
    viewingSpots: ['Trondenes Church', 'Harstad Harbor', 'Gratangen'],
    description: 'Historic town with excellent aurora viewing from the surrounding hills and coastal areas.'
  },
  {
    slug: 'hammerfest',
    name: 'Hammerfest',
    region: 'Troms og Finnmark',
    country: 'Norway',
    latitude: 70.6631,
    longitude: 23.6828,
    timezone: 'Europe/Oslo',
    viewingSpots: ['Salen', 'Hammerfest Harbor', 'Fuglenes'],
    description: 'One of the world\'s northernmost towns, offering excellent aurora viewing with minimal light pollution.'
  },
  {
    slug: 'kirkenes',
    name: 'Kirkenes',
    region: 'Troms og Finnmark',
    country: 'Norway',
    latitude: 69.7275,
    longitude: 30.0456,
    timezone: 'Europe/Oslo',
    viewingSpots: ['Grense Jakobselv', 'Kirkenes Harbor', 'Svanvik'],
    description: 'Border town with Russia, offering unique aurora viewing experiences and access to the Barents Sea.'
  }
];

export default function NorwayNorthernLightsPage() {
  return (
    <div className="min-h-screen bg-black">
      {/* Regional Navigation */}
      <RegionalNavigation />
      
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-black via-slate-900 to-gray-900 py-32 pt-20 md:pt-40 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-cyan-500/5 rounded-full blur-3xl animate-pulse delay-1000" />
          <div className="absolute top-1/2 right-1/3 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl animate-pulse delay-2000" />
        </div>
        
        <div className="relative z-10 max-w-6xl mx-auto px-12 text-center pt-16">
          <div className="mb-12">
            <div className="inline-flex items-center px-6 py-2 bg-white/5 backdrop-blur-sm rounded-full border border-white/10 mb-8">
              <span className="text-sm font-light text-white/70 tracking-[0.2em] uppercase">Norwegian Lapland</span>
            </div>
            <h1 className="text-6xl md:text-7xl font-bold text-white mb-8 tracking-tight leading-tight">
              <div className="text-white mb-2">Northern Lights in</div>
              <div className="text-red-300/90 bg-gradient-to-r from-red-400 via-red-300 to-red-500 bg-clip-text text-transparent">
                Norway
              </div>
            </h1>
            <p className="text-xl md:text-2xl text-white/60 font-light max-w-4xl mx-auto leading-relaxed mb-6">
              Experience the magic of Norwegian Lapland with world-class aurora viewing destinations
            </p>
          </div>
        </div>
      </div>

      {/* Welcome to Norwegian Lapland - Full Width Image */}
      <div className="py-12 bg-gradient-to-b from-slate-900 to-black">
        <div className="max-w-8xl mx-auto px-12">
          <div className="relative overflow-hidden rounded-3xl group">
            <img 
              src="https://images.unsplash.com/photo-1494243762909-b498c7e440a9?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
              alt="Aurora Borealis dancing over Norwegian Lapland&apos;s pristine winter landscape with snow-covered mountains and fjords"
              className="w-full h-[600px] object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center max-w-2xl px-8">
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 tracking-wide">
                  Welcome to Norwegian Lapland
                </h2>
                <p className="text-sm md:text-base text-white/70 font-light leading-relaxed">
                  The northernmost region of Norway, spanning across the Arctic Circle and offering some of the world&apos;s most spectacular aurora viewing opportunities.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* When to See Aurora */}
      <div className="py-32 bg-gradient-to-b from-black to-slate-900">
        <div className="max-w-6xl mx-auto px-12">
          <div className="text-center mb-6">
            <div className="inline-block px-8 py-3 bg-white/5 backdrop-blur-sm rounded-full border border-white/10 mb-8">
              <span className="text-sm font-light text-white/70 tracking-[0.3em] uppercase">Seasonal Guide</span>
            </div>
            <h2 className="text-5xl font-thin text-white mb-8">
              When to See the Aurora
            </h2>
            <p className="text-xl text-white/60 font-light max-w-4xl mx-auto leading-relaxed">
              Complete seasonal breakdown of the best times to visit Norwegian Lapland for aurora viewing
            </p>
          </div>
          
          {/* Monthly Visibility Chart */}
          <div className="mb-16 max-w-2xl mx-auto">
            {/* Chart Container */}
            <div className="relative h-80 mb-6">
              {/* Chart Bars */}
              <div className="h-full flex items-end justify-between gap-1">
                {/* January */}
                <div className="flex flex-col items-center">
                  <div className="w-6 bg-gradient-to-t from-cyan-600 to-cyan-400 rounded-t h-32 mb-2"></div>
                  <span className="text-xs text-white/70">Jan</span>
                </div>
                
                {/* February */}
                <div className="flex flex-col items-center">
                  <div className="w-6 bg-gradient-to-t from-cyan-600 to-cyan-400 rounded-t h-36 mb-2"></div>
                  <span className="text-xs text-white/70">Feb</span>
                </div>
                
                {/* March - Peak */}
                <div className="flex flex-col items-center">
                  <div className="w-6 bg-gradient-to-t from-green-600 to-green-400 rounded-t h-48 mb-2"></div>
                  <span className="text-xs text-white/70">Mar</span>
                </div>
                
                {/* April */}
                <div className="flex flex-col items-center">
                  <div className="w-6 bg-gradient-to-t from-cyan-600 to-cyan-400 rounded-t h-44 mb-2"></div>
                  <span className="text-xs text-white/70">Apr</span>
                </div>
                
                {/* May - Not Visible */}
                <div className="flex flex-col items-center">
                  <div className="w-6 bg-gray-600 rounded-t h-12 mb-2"></div>
                  <span className="text-xs text-white/70">May</span>
                </div>
                
                {/* June - Not Visible */}
                <div className="flex flex-col items-center">
                  <div className="w-6 bg-gray-600 rounded-t h-8 mb-2"></div>
                  <span className="text-xs text-white/70">Jun</span>
                </div>
                
                {/* July - Not Visible */}
                <div className="flex flex-col items-center">
                  <div className="w-6 bg-gray-600 rounded-t h-8 mb-2"></div>
                  <span className="text-xs text-white/70">Jul</span>
                </div>
                
                {/* August - Not Visible */}
                <div className="flex flex-col items-center">
                  <div className="w-6 bg-gray-600 rounded-t h-10 mb-2"></div>
                  <span className="text-xs text-white/70">Aug</span>
                </div>
                
                {/* September - Peak */}
                <div className="flex flex-col items-center">
                  <div className="w-6 bg-gradient-to-t from-green-600 to-green-400 rounded-t h-48 mb-2"></div>
                  <span className="text-xs text-white/70">Sep</span>
                </div>
                
                {/* October - Peak */}
                <div className="flex flex-col items-center">
                  <div className="w-6 bg-gradient-to-t from-green-600 to-green-400 rounded-t h-48 mb-2"></div>
                  <span className="text-xs text-white/70">Oct</span>
                </div>
                
                {/* November */}
                <div className="flex flex-col items-center">
                  <div className="w-6 bg-gradient-to-t from-cyan-600 to-cyan-400 rounded-t h-32 mb-2"></div>
                  <span className="text-xs text-white/70">Nov</span>
                </div>
                
                {/* December */}
                <div className="flex flex-col items-center">
                  <div className="w-6 bg-gradient-to-t from-cyan-600 to-cyan-400 rounded-t h-32 mb-2"></div>
                  <span className="text-xs text-white/70">Dec</span>
                </div>
              </div>
            </div>
            
            {/* Legend */}
            <div className="flex justify-center gap-8">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-gradient-to-t from-green-600 to-green-400 rounded"></div>
                <span className="text-sm text-white/70">Peak</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-gradient-to-t from-cyan-600 to-cyan-400 rounded"></div>
                <span className="text-sm text-white/70">Good</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-gray-600 rounded"></div>
                <span className="text-sm text-white/70">Not Visible</span>
              </div>
            </div>
          </div>
          
          {/* Peak Times - Compact */}
          <div className="text-center">
            <div className="inline-flex items-center gap-8 text-sm text-white/60">
              <span><span className="text-cyan-300 font-medium">Peak Hours:</span> 10 PM - 2 AM</span>
              <span><span className="text-green-300 font-medium">Good Window:</span> 8 PM - 4 AM</span>
              <span><span className="text-purple-300 font-medium">Polar Night:</span> Nov 27 - Jan 15</span>
            </div>
          </div>
        </div>
      </div>

      {/* City Cards */}
      <div className="py-24 bg-gradient-to-b from-slate-900 to-black">
        <div className="max-w-8xl mx-auto px-12">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-8 py-3 bg-white/5 backdrop-blur-sm rounded-full border border-white/10 mb-8">
              <svg className="w-4 h-4 text-white/70 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
              <span className="text-sm font-light text-white/70 tracking-[0.3em] uppercase">Norwegian Cities</span>
            </div>
            <h2 className="text-5xl font-thin text-white mb-6">
              Live Aurora Conditions in Norwegian Cities
            </h2>
            <p className="text-lg text-white/60 font-light max-w-3xl mx-auto leading-relaxed">
              Real-time aurora data, weather conditions, and viewing information for all major Norwegian Lapland destinations
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {cities.map((city) => (
              <SSRCityCard key={city.slug} city={city} />
            ))}
          </div>
        </div>
      </div>

      {/* Why Norway */}
      <div className="py-32 bg-gradient-to-b from-black to-slate-900">
        <div className="max-w-6xl mx-auto px-12">
          <div className="text-center mb-20">
            <div className="inline-block px-8 py-3 bg-white/5 backdrop-blur-sm rounded-full border border-white/10 mb-8">
              <span className="text-sm font-light text-white/70 tracking-[0.3em] uppercase">Why Norway</span>
            </div>
            <h2 className="text-5xl font-thin text-white mb-8">
              Why Norwegian Lapland is Perfect for Aurora Viewing
            </h2>
            <p className="text-xl text-white/60 font-light max-w-4xl mx-auto leading-relaxed">
              Norway offers unique advantages that make it one of the world&apos;s premier aurora destinations
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="group bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-white/20 hover:bg-white/10 transition-all duration-500">
              <div className="w-16 h-16 bg-red-500/20 rounded-2xl flex items-center justify-center mb-6 border border-red-400/30">
                <span className="text-red-300 text-2xl">🏔️</span>
              </div>
              <h3 className="text-xl font-light text-white mb-4">Arctic Capital</h3>
              <p className="text-white/70 font-light leading-relaxed">
                Tromsø is the world&apos;s northernmost city with over 100,000 inhabitants, offering urban comfort with excellent aurora viewing.
              </p>
            </div>
            
            <div className="group bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-white/20 hover:bg-white/10 transition-all duration-500">
              <div className="w-16 h-16 bg-red-500/20 rounded-2xl flex items-center justify-center mb-6 border border-red-400/30">
                <span className="text-red-300 text-2xl">🌌</span>
              </div>
              <h3 className="text-xl font-light text-white mb-4">Polar Night</h3>
              <p className="text-white/70 font-light leading-relaxed">
                Experience 24-hour darkness in Svalbard during the polar night, providing continuous aurora viewing opportunities.
              </p>
            </div>
            
            <div className="group bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-white/20 hover:bg-white/10 transition-all duration-500">
              <div className="w-16 h-16 bg-red-500/20 rounded-2xl flex items-center justify-center mb-6 border border-red-400/30">
                <span className="text-red-300 text-2xl">🏨</span>
              </div>
              <h3 className="text-xl font-light text-white mb-4">Unique Accommodations</h3>
              <p className="text-white/70 font-light leading-relaxed">
                Stay in glass igloos, ice hotels, or traditional Sami lavvu tents for an unforgettable aurora experience.
              </p>
            </div>
            
            <div className="group bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-white/20 hover:bg-white/10 transition-all duration-500">
              <div className="w-16 h-16 bg-red-500/20 rounded-2xl flex items-center justify-center mb-6 border border-red-400/30">
                <span className="text-red-300 text-2xl">🎿</span>
              </div>
              <h3 className="text-xl font-light text-white mb-4">Winter Activities</h3>
              <p className="text-white/70 font-light leading-relaxed">
                Combine aurora viewing with dog sledding, snowmobiling, and whale watching for a complete Arctic adventure.
              </p>
            </div>
            
            <div className="group bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-white/20 hover:bg-white/10 transition-all duration-500">
              <div className="w-16 h-16 bg-red-500/20 rounded-2xl flex items-center justify-center mb-6 border border-red-400/30">
                <span className="text-red-300 text-2xl">🚂</span>
              </div>
              <h3 className="text-xl font-light text-white mb-4">Arctic Railway</h3>
              <p className="text-white/70 font-light leading-relaxed">
                Take the scenic train journey from Oslo to Bodø, passing through stunning Arctic landscapes and aurora territory.
              </p>
            </div>
            
            <div className="group bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-white/20 hover:bg-white/10 transition-all duration-500">
              <div className="w-16 h-16 bg-red-500/20 rounded-2xl flex items-center justify-center mb-6 border border-red-400/30">
                <span className="text-red-300 text-2xl">🌍</span>
              </div>
              <h3 className="text-xl font-light text-white mb-4">UNESCO Heritage</h3>
              <p className="text-white/70 font-light leading-relaxed">
                Explore the Vega Archipelago and Røros Mining Town, both UNESCO World Heritage sites, while chasing the aurora.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Current Space Weather */}
      <div className="py-24 bg-gradient-to-b from-slate-900 to-black">
        <div className="max-w-6xl mx-auto px-12">
          <div className="text-center mb-16">
            <div className="inline-block px-8 py-3 bg-white/5 backdrop-blur-sm rounded-full border border-white/10 mb-8">
              <span className="text-sm font-light text-white/70 tracking-[0.3em] uppercase">Space Weather</span>
            </div>
            <h2 className="text-4xl font-thin text-white mb-6">
              Current Space Weather in Norwegian Lapland
            </h2>
            <p className="text-xl text-white/60 font-light max-w-3xl mx-auto leading-relaxed">
              Monitor real-time space weather data that affects aurora visibility across Norwegian Lapland
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <SpaceWeatherWidget />
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="py-24 bg-gradient-to-b from-black to-slate-900">
        <div className="max-w-6xl mx-auto px-12">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-8 py-3 bg-white/5 backdrop-blur-sm rounded-full border border-white/10 mb-8">
              <svg className="w-4 h-4 text-white/70 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="text-sm font-light text-white/70 tracking-[0.3em] uppercase">Frequently Asked Questions</span>
            </div>
            <h2 className="text-5xl font-thin text-white mb-6">
              Norway Northern Lights FAQ
            </h2>
            <p className="text-lg text-white/60 font-light max-w-3xl mx-auto leading-relaxed">
              Everything you need to know about seeing the aurora borealis in Norwegian Lapland
            </p>
          </div>

          <div className="space-y-6">
            {/* FAQ 1 */}
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-white/20 transition-all duration-300">
              <h3 className="text-xl font-light text-white mb-4">
                When is the best time to see the northern lights in Norway?
              </h3>
              <p className="text-white/70 font-light leading-relaxed">
                The optimal time for aurora viewing in Norway is from late September to early April, 
                with peak season from December to March. Norwegian Lapland offers some of the world&apos;s 
                best aurora viewing conditions, particularly in Tromsø and Alta. The best viewing 
                hours are typically between 9 PM and 1 AM, when the sky is darkest and aurora activity 
                is most likely to occur.
              </p>
            </div>

            {/* FAQ 2 */}
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-white/20 transition-all duration-300">
              <h3 className="text-xl font-light text-white mb-4">
                Why is Norwegian Lapland considered one of the best places for aurora viewing?
              </h3>
              <p className="text-white/70 font-light leading-relaxed">
                Norwegian Lapland is renowned for its pristine wilderness with minimal light pollution, 
                stable continental climate that provides clearer skies, and optimal latitude positioning 
                within the auroral oval. The region&apos;s unique fjord landscapes provide dramatic backdrops 
                for aurora photography. Additionally, Norway offers world-class aurora tourism 
                infrastructure including glass igloos and specialized viewing platforms.
              </p>
            </div>

            {/* FAQ 3 */}
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-white/20 transition-all duration-300">
              <h3 className="text-xl font-light text-white mb-4">
                What makes Norwegian Lapland special for aurora photography?
              </h3>
              <p className="text-white/70 font-light leading-relaxed">
                Norwegian Lapland offers diverse landscapes perfect for aurora photography, including 
                frozen fjords, snow-covered mountains, and dramatic coastal backdrops. The region&apos;s 
                minimal light pollution and clear atmospheric conditions create ideal conditions for 
                capturing vibrant aurora colors. Popular photography locations include Tromsø's fjords, 
                the mountains around Alta, and the wilderness areas around Svalbard. The long winter 
                nights provide extended shooting opportunities.
              </p>
            </div>

            {/* FAQ 4 */}
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-white/20 transition-all duration-300">
              <h3 className="text-xl font-light text-white mb-4">
                How do I get to the best aurora viewing locations in Norway?
              </h3>
              <p className="text-white/70 font-light leading-relaxed">
                Most aurora viewing locations in Norwegian Lapland are accessible by car or organized tours. 
                Oslo serves as the main gateway with international connections. From Oslo, you can 
                take domestic flights to Tromsø, Alta, or Bodø. Many hotels offer aurora packages 
                with transportation to prime viewing spots. For remote locations like Svalbard, 
                guided tours are recommended, especially during winter months when conditions can be challenging.
              </p>
            </div>

            {/* FAQ 5 */}
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-white/20 transition-all duration-300">
              <h3 className="text-xl font-light text-white mb-4">
                What should I pack for aurora viewing in Norwegian Lapland?
              </h3>
              <p className="text-white/70 font-light leading-relaxed">
                Essential items for Norwegian Lapland aurora viewing include: 1) Thermal base layers and 
                insulated outerwear for temperatures as low as -30°C (-22°F), 2) Warm, waterproof boots 
                with good traction for icy conditions, 3) Hand and foot warmers for extended outdoor stays, 
                4) A headlamp with red light mode to preserve night vision, 5) Camera equipment with 
                extra batteries (they drain faster in cold), 6) A thermos with hot drinks, and 7) 
                A portable chair or mat for comfortable waiting. Many tour operators provide warm 
                overalls and boots for rent.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-slate-900 py-16">
        <div className="max-w-6xl mx-auto px-12">
          <div className="text-center text-white/40 text-sm font-light">
            <p>Data from NOAA SWPC (OVATION), MET Norway, Open-Meteo. Times in local timezone.</p>
            <p className="mt-2">Scores are indicative and depend on weather & darkness.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
