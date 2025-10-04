import { Metadata } from 'next';
import RegionalNavigation from '@/components/RegionalNavigation';
import SpaceWeatherWidget from '@/components/SpaceWeatherWidget';
import TrustedCityCard from '@/components/TrustedCityCard';

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
        {/* Subtle Aurora Particles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-cyan-400/20 rounded-full animate-pulse shadow-lg shadow-cyan-400/30" />
          <div className="absolute top-3/4 right-1/4 w-1 h-1 bg-blue-400/30 rounded-full animate-pulse shadow-lg shadow-blue-400/40" />
          <div className="absolute top-1/2 right-1/3 w-1.5 h-1.5 bg-purple-400/25 rounded-full animate-pulse shadow-lg shadow-purple-400/35" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center">
            <h1 className="text-5xl md:text-7xl font-light text-white mb-6">
              Northern Lights in
              <span className="block bg-gradient-to-r from-red-300 via-red-400 to-red-500 bg-clip-text text-transparent">
                Norway
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-white/70 font-light max-w-4xl mx-auto leading-relaxed mb-12">
              Experience the magic of the aurora borealis in Norwegian Lapland. From the Arctic capital of Tromsø to the remote Svalbard archipelago, discover Norway's premier aurora viewing destinations.
            </p>
            
            {/* Live Aurora Badge */}
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-400/30 rounded-full text-green-300 text-sm font-medium mb-8">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse mr-3"></div>
              Live Aurora Conditions
            </div>
          </div>
        </div>
      </div>

      {/* Welcome Image Section */}
      <div className="relative py-24 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative h-96 md:h-[500px] rounded-3xl overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1494243762909-b498c7e440a9?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Northern Lights over Norwegian Lapland"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
            <div className="absolute bottom-8 left-8 right-8">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Welcome to Norwegian Lapland
              </h2>
              <p className="text-white/90 text-lg max-w-2xl leading-relaxed">
                Norway offers unique advantages that make it one of the world's premier aurora destinations. With over 200 nights of aurora activity per year, Norway's geographical position within the aurora oval provides exceptional viewing opportunities. The country's pristine wilderness, minimal light pollution, and excellent infrastructure make it ideal for aurora enthusiasts.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* When to See Aurora */}
      <div className="py-24 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-light text-white mb-6">
              When to See Aurora
            </h2>
            <p className="text-xl text-white/70 font-light max-w-3xl mx-auto leading-relaxed">
              The best time to see the northern lights in Norway is during the polar night period and dark winter months.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Chart */}
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <div className="space-y-6">
                {[
                  { month: 'Sep', activity: 25, color: 'bg-yellow-500/20' },
                  { month: 'Oct', activity: 45, color: 'bg-orange-500/20' },
                  { month: 'Nov', activity: 70, color: 'bg-red-500/20' },
                  { month: 'Dec', activity: 90, color: 'bg-red-600/20' },
                  { month: 'Jan', activity: 95, color: 'bg-red-700/20' },
                  { month: 'Feb', activity: 85, color: 'bg-red-600/20' },
                  { month: 'Mar', activity: 70, color: 'bg-orange-500/20' },
                  { month: 'Apr', activity: 40, color: 'bg-yellow-500/20' }
                ].map((item, index) => (
                  <div key={index} className="flex items-center space-x-4">
                    <div className="w-12 text-white/80 font-medium">{item.month}</div>
                    <div className="flex-1 bg-white/10 rounded-full h-3 overflow-hidden">
                      <div 
                        className={`h-full ${item.color} rounded-full transition-all duration-1000`}
                        style={{ width: `${item.activity}%` }}
                      ></div>
                    </div>
                    <div className="w-12 text-white/60 text-sm">{item.activity}%</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Peak Times */}
            <div className="space-y-6">
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
                <h3 className="text-xl font-semibold text-white mb-4">Peak Viewing Times</h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-white/80">Best Season</span>
                    <span className="text-yellow-400 font-medium">Dec–Feb</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-white/80">Polar Night</span>
                    <span className="text-red-400 font-medium">Nov 27–Jan 15</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-white/80">Peak Hours</span>
                    <span className="text-green-400 font-medium">22:00–02:00</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-white/80">Clear Skies</span>
                    <span className="text-blue-400 font-medium">Dec–Mar</span>
                  </div>
                </div>
              </div>

              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
                <h3 className="text-xl font-semibold text-white mb-4">Viewing Tips</h3>
                <ul className="space-y-2 text-white/70">
                  <li>• Tromsø offers the best urban aurora viewing</li>
                  <li>• Svalbard has 24-hour darkness in winter</li>
                  <li>• Avoid full moon periods for best visibility</li>
                  <li>• Check aurora forecasts before heading out</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Cities Section */}
      <div className="py-24 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-light text-white mb-6">
              Aurora Viewing Cities
            </h2>
            <p className="text-xl text-white/70 font-light max-w-3xl mx-auto leading-relaxed">
              Real-time aurora data, weather conditions, and viewing information for all major Norwegian Lapland destinations
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {cities.map((city) => (
              <TrustedCityCard key={city.slug} city={city} />
            ))}
          </div>
        </div>
      </div>

      {/* Why Norway */}
      <div className="py-24 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-light text-white mb-6">
              Why Norway?
            </h2>
            <p className="text-xl text-white/70 font-light max-w-3xl mx-auto leading-relaxed">
              Norway offers unique advantages for aurora viewing that make it a top destination for northern lights enthusiasts.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <div className="w-12 h-12 bg-gradient-to-r from-red-500/20 to-orange-500/20 rounded-xl flex items-center justify-center mb-6">
                <span className="text-2xl">🏔️</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Arctic Capital</h3>
              <p className="text-white/70 leading-relaxed">
                Tromsø is the world's northernmost city with over 100,000 inhabitants, offering urban comfort with excellent aurora viewing.
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-xl flex items-center justify-center mb-6">
                <span className="text-2xl">🌌</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Polar Night</h3>
              <p className="text-white/70 leading-relaxed">
                Experience 24-hour darkness in Svalbard during the polar night, providing continuous aurora viewing opportunities.
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <div className="w-12 h-12 bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-xl flex items-center justify-center mb-6">
                <span className="text-2xl">🏨</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Unique Accommodations</h3>
              <p className="text-white/70 leading-relaxed">
                Stay in glass igloos, ice hotels, or traditional Sami lavvu tents for an unforgettable aurora experience.
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-xl flex items-center justify-center mb-6">
                <span className="text-2xl">🎿</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Winter Activities</h3>
              <p className="text-white/70 leading-relaxed">
                Combine aurora viewing with dog sledding, snowmobiling, and whale watching for a complete Arctic adventure.
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <div className="w-12 h-12 bg-gradient-to-r from-yellow-500/20 to-orange-500/20 rounded-xl flex items-center justify-center mb-6">
                <span className="text-2xl">🚂</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Arctic Railway</h3>
              <p className="text-white/70 leading-relaxed">
                Take the scenic train journey from Oslo to Bodø, passing through stunning Arctic landscapes and aurora territory.
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <div className="w-12 h-12 bg-gradient-to-r from-indigo-500/20 to-blue-500/20 rounded-xl flex items-center justify-center mb-6">
                <span className="text-2xl">🌍</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">UNESCO Heritage</h3>
              <p className="text-white/70 leading-relaxed">
                Explore the Vega Archipelago and Røros Mining Town, both UNESCO World Heritage sites, while chasing the aurora.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Space Weather Widget */}
      <div className="py-24 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SpaceWeatherWidget />
        </div>
      </div>

      {/* FAQ Section */}
      <div className="py-24 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-light text-white mb-6">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-white/70 font-light leading-relaxed">
              Everything you need to know about seeing the northern lights in Norway
            </p>
          </div>

          <div className="space-y-6">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <h3 className="text-xl font-semibold text-white mb-4">When is the best time to see the northern lights in Norway?</h3>
              <p className="text-white/70 leading-relaxed">
                The best time is during the polar night period (November 27–January 15) when it's dark 24/7. However, aurora activity is strong from September to April, with peak viewing from December to February.
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <h3 className="text-xl font-semibold text-white mb-4">Is Tromsø really the best place to see the aurora?</h3>
              <p className="text-white/70 leading-relaxed">
                Tromsø is excellent for aurora viewing with its urban amenities and reliable aurora activity. However, Svalbard offers the most unique experience with 24-hour darkness during the polar night.
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <h3 className="text-xl font-semibold text-white mb-4">Do I need a guide to see the northern lights?</h3>
              <p className="text-white/70 leading-relaxed">
                While not necessary, a guide can significantly improve your chances. They know the best viewing spots, can predict weather conditions, and provide warm clothing and hot drinks.
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <h3 className="text-xl font-semibold text-white mb-4">What should I wear for aurora viewing in Norway?</h3>
              <p className="text-white/70 leading-relaxed">
                Dress in multiple layers with thermal base layers, fleece, and a windproof outer shell. Don't forget warm boots, gloves, and a hat. Temperatures can drop to -30°C (-22°F) or lower.
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <h3 className="text-xl font-semibold text-white mb-4">Can I see the aurora from Oslo?</h3>
              <p className="text-white/70 leading-relaxed">
                Very rarely. Oslo is too far south for regular aurora viewing. You need to travel north of the Arctic Circle to places like Tromsø, Alta, or Svalbard for reliable aurora sightings.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
