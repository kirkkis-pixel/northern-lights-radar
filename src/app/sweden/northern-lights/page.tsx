import { Metadata } from 'next';
import RegionalNavigation from '@/components/RegionalNavigation';
import SpaceWeatherWidget from '@/components/SpaceWeatherWidget';
import TrustedCityCard from '@/components/TrustedCityCard';

export const metadata: Metadata = {
  title: 'Northern Lights in Sweden - Swedish Lapland Aurora Guide',
  description: 'Discover the best places to see the northern lights in Swedish Lapland. Live conditions, viewing spots, and expert tips for Kiruna, Abisko, and Luleå.',
  keywords: 'northern lights Sweden, Swedish Lapland aurora, Kiruna northern lights, Abisko aurora, Luleå northern lights',
  openGraph: {
    title: 'Northern Lights in Sweden - Swedish Lapland Aurora Guide',
    description: 'Discover the best places to see the northern lights in Swedish Lapland. Live conditions and expert tips.',
    type: 'website',
    locale: 'en_US',
    url: 'https://northernlightsradar.com/sweden/northern-lights',
    siteName: 'Northern Lights Radar',
    images: [
      {
        url: '/og-image.svg',
        width: 1200,
        height: 630,
        alt: 'Northern Lights in Sweden - Swedish Lapland Aurora Guide',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Northern Lights in Sweden - Swedish Lapland Aurora Guide',
    description: 'Discover the best places to see the northern lights in Swedish Lapland.',
    images: ['/og-image.svg'],
  },
  alternates: {
    canonical: 'https://northernlightsradar.com/sweden/northern-lights',
  },
};

const cities = [
  {
    slug: 'kiruna',
    name: 'Kiruna',
    region: 'Lapland',
    country: 'Sweden',
    latitude: 67.8558,
    longitude: 20.2253,
    timezone: 'Europe/Stockholm',
    viewingSpots: ['Aurora Sky Station', 'Jukkasjärvi', 'Luossavaara'],
    description: 'Sweden\'s northernmost city, offering exceptional aurora viewing with minimal light pollution and the famous Icehotel.'
  },
  {
    slug: 'abisko',
    name: 'Abisko',
    region: 'Lapland',
    country: 'Sweden',
    latitude: 68.3497,
    longitude: 18.8317,
    timezone: 'Europe/Stockholm',
    viewingSpots: ['Aurora Sky Station', 'Lake Torneträsk', 'Abisko National Park'],
    description: 'World-renowned for its clear skies and aurora viewing. The Aurora Sky Station offers the best chances to see the northern lights.'
  },
  {
    slug: 'lulea',
    name: 'Luleå',
    region: 'Norrbotten',
    country: 'Sweden',
    latitude: 65.5842,
    longitude: 22.1547,
    timezone: 'Europe/Stockholm',
    viewingSpots: ['Gammelstad', 'Rödkallen', 'Luleå Archipelago'],
    description: 'Coastal city with unique aurora viewing opportunities over the Bothnian Bay and surrounding archipelago.'
  },
  {
    slug: 'jokkmokk',
    name: 'Jokkmokk',
    region: 'Lapland',
    country: 'Sweden',
    latitude: 66.6067,
    longitude: 19.8233,
    timezone: 'Europe/Stockholm',
    viewingSpots: ['Ájtte Museum', 'Sarek National Park', 'Kvikkjokk'],
    description: 'Gateway to Sarek National Park, offering pristine wilderness and excellent aurora viewing conditions.'
  },
  {
    slug: 'gallivare',
    name: 'Gällivare',
    region: 'Lapland',
    country: 'Sweden',
    latitude: 67.1333,
    longitude: 20.6500,
    timezone: 'Europe/Stockholm',
    viewingSpots: ['Dundret', 'Malmberget', 'Gällivare Forest'],
    description: 'Mining town with excellent aurora viewing from Dundret mountain and surrounding wilderness areas.'
  },
  {
    slug: 'pajala',
    name: 'Pajala',
    region: 'Lapland',
    country: 'Sweden',
    latitude: 67.2167,
    longitude: 23.3667,
    timezone: 'Europe/Stockholm',
    viewingSpots: ['Tornio River', 'Pajala Church', 'Kangos'],
    description: 'Border town with Finland, offering unique cross-border aurora experiences and traditional Sami culture.'
  },
  {
    slug: 'arvidsjaur',
    name: 'Arvidsjaur',
    region: 'Lapland',
    country: 'Sweden',
    latitude: 65.5833,
    longitude: 19.1667,
    timezone: 'Europe/Stockholm',
    viewingSpots: ['Silvermuseet', 'Arvidsjaur Lake', 'Pite River'],
    description: 'Historic silver mining town with excellent aurora viewing over lakes and forests.'
  },
  {
    slug: 'boden',
    name: 'Boden',
    region: 'Norrbotten',
    country: 'Sweden',
    latitude: 65.8333,
    longitude: 21.7000,
    timezone: 'Europe/Stockholm',
    viewingSpots: ['Boden Fortress', 'Lule River', 'Boden Forest'],
    description: 'Military town with surprisingly good aurora viewing opportunities and historical significance.'
  }
];

export default function SwedenNorthernLightsPage() {
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
              <span className="block bg-gradient-to-r from-yellow-300 via-yellow-400 to-yellow-500 bg-clip-text text-transparent">
                Sweden
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-white/70 font-light max-w-4xl mx-auto leading-relaxed mb-12">
              Experience the magic of the aurora borealis in Swedish Lapland. From the world-famous Aurora Sky Station in Abisko to the historic mining towns of Kiruna and Gällivare, discover Sweden's premier aurora viewing destinations.
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
              src="https://images.unsplash.com/photo-1526644253653-a411eaafdfe6?q=80&w=1752&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Northern Lights over Swedish Lapland"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
            <div className="absolute bottom-8 left-8 right-8">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Welcome to Swedish Lapland
              </h2>
              <p className="text-white/90 text-lg max-w-2xl leading-relaxed">
                Sweden offers unique advantages that make it one of the world's premier aurora destinations. With over 200 nights of aurora activity per year, Sweden's geographical position within the aurora oval provides exceptional viewing opportunities. The country's pristine wilderness, minimal light pollution, and excellent infrastructure make it ideal for aurora enthusiasts.
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
              The best time to see the northern lights in Sweden is during the polar night period and dark winter months.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Chart */}
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <div className="space-y-6">
                {[
                  { month: 'Sep', activity: 20, color: 'bg-yellow-500/20' },
                  { month: 'Oct', activity: 40, color: 'bg-orange-500/20' },
                  { month: 'Nov', activity: 60, color: 'bg-red-500/20' },
                  { month: 'Dec', activity: 80, color: 'bg-red-600/20' },
                  { month: 'Jan', activity: 85, color: 'bg-red-700/20' },
                  { month: 'Feb', activity: 75, color: 'bg-red-600/20' },
                  { month: 'Mar', activity: 65, color: 'bg-orange-500/20' },
                  { month: 'Apr', activity: 35, color: 'bg-yellow-500/20' }
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
                    <span className="text-red-400 font-medium">Dec 2–Jan 11</span>
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
                  <li>• Abisko has the clearest skies in Sweden</li>
                  <li>• Aurora Sky Station offers guided tours</li>
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
              Real-time aurora data, weather conditions, and viewing information for all major Swedish Lapland destinations
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {cities.map((city) => (
              <TrustedCityCard key={city.slug} city={city} />
            ))}
          </div>
        </div>
      </div>

      {/* Why Sweden */}
      <div className="py-24 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-light text-white mb-6">
              Why Sweden?
            </h2>
            <p className="text-xl text-white/70 font-light max-w-3xl mx-auto leading-relaxed">
              Sweden offers unique advantages for aurora viewing that make it a top destination for northern lights enthusiasts.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <div className="w-12 h-12 bg-gradient-to-r from-yellow-500/20 to-orange-500/20 rounded-xl flex items-center justify-center mb-6">
                <span className="text-2xl">🏔️</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Aurora Sky Station</h3>
              <p className="text-white/70 leading-relaxed">
                The world's most accessible aurora viewing station, offering guided tours and the highest success rate for seeing the northern lights.
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-xl flex items-center justify-center mb-6">
                <span className="text-2xl">🌌</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Clear Skies</h3>
              <p className="text-white/70 leading-relaxed">
                Abisko's unique microclimate creates clear skies even when surrounding areas are cloudy, dramatically increasing aurora visibility.
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <div className="w-12 h-12 bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-xl flex items-center justify-center mb-6">
                <span className="text-2xl">🏨</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Unique Accommodations</h3>
              <p className="text-white/70 leading-relaxed">
                Stay in the famous Icehotel in Jukkasjärvi or the Aurora Sky Station for an unforgettable aurora experience.
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-xl flex items-center justify-center mb-6">
                <span className="text-2xl">🎿</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Winter Activities</h3>
              <p className="text-white/70 leading-relaxed">
                Combine aurora viewing with dog sledding, ice fishing, and Sami cultural experiences for a complete Lapland adventure.
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <div className="w-12 h-12 bg-gradient-to-r from-red-500/20 to-orange-500/20 rounded-xl flex items-center justify-center mb-6">
                <span className="text-2xl">🚂</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Arctic Circle Express</h3>
              <p className="text-white/70 leading-relaxed">
                Take the scenic train journey from Stockholm to Kiruna, passing through stunning Arctic landscapes and aurora territory.
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <div className="w-12 h-12 bg-gradient-to-r from-indigo-500/20 to-blue-500/20 rounded-xl flex items-center justify-center mb-6">
                <span className="text-2xl">🌍</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">UNESCO Heritage</h3>
              <p className="text-white/70 leading-relaxed">
                Explore Laponia, a UNESCO World Heritage site, combining aurora viewing with pristine wilderness and Sami culture.
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
              Everything you need to know about seeing the northern lights in Sweden
            </p>
          </div>

          <div className="space-y-6">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <h3 className="text-xl font-semibold text-white mb-4">When is the best time to see the northern lights in Sweden?</h3>
              <p className="text-white/70 leading-relaxed">
                The best time is during the polar night period (December 2–January 11) when it's dark 24/7. However, aurora activity is strong from September to April, with peak viewing from December to February.
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <h3 className="text-xl font-semibold text-white mb-4">Is Abisko really the best place to see the aurora?</h3>
              <p className="text-white/70 leading-relaxed">
                Yes! Abisko's unique microclimate creates clear skies even when surrounding areas are cloudy. The Aurora Sky Station has a 90% success rate for seeing the northern lights during the season.
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <h3 className="text-xl font-semibold text-white mb-4">Do I need a guide to see the northern lights?</h3>
              <p className="text-white/70 leading-relaxed">
                While not necessary, a guide can significantly improve your chances. They know the best viewing spots, can predict weather conditions, and provide warm clothing and hot drinks.
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <h3 className="text-xl font-semibold text-white mb-4">What should I wear for aurora viewing in Sweden?</h3>
              <p className="text-white/70 leading-relaxed">
                Dress in multiple layers with thermal base layers, fleece, and a windproof outer shell. Don't forget warm boots, gloves, and a hat. Temperatures can drop to -30°C (-22°F) or lower.
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <h3 className="text-xl font-semibold text-white mb-4">Can I see the aurora from Stockholm?</h3>
              <p className="text-white/70 leading-relaxed">
                Very rarely. Stockholm is too far south for regular aurora viewing. You need to travel north of the Arctic Circle to places like Kiruna, Abisko, or Luleå for reliable aurora sightings.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
