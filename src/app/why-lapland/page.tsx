import { Metadata } from 'next';
import RegionalNavigation from '@/components/RegionalNavigation';
import SpaceWeatherWidget from '@/components/SpaceWeatherWidget';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Why Lapland? - The Ultimate Northern Lights Destination',
  description: 'Discover why Lapland is the world\'s premier destination for northern lights viewing. Learn about the unique advantages, optimal conditions, and unforgettable experiences that make Lapland the perfect choice for aurora enthusiasts.',
  keywords: 'why Lapland, northern lights destination, aurora viewing, Lapland advantages, Arctic Circle, polar night',
  openGraph: {
    title: 'Why Lapland? - The Ultimate Northern Lights Destination',
    description: 'Discover why Lapland is the world\'s premier destination for northern lights viewing.',
    type: 'website',
    locale: 'en_US',
    url: 'https://northernlightsradar.com/why-lapland',
    siteName: 'Northern Lights Radar',
    images: [
      {
        url: '/og-image.svg',
        width: 1200,
        height: 630,
        alt: 'Why Lapland? - The Ultimate Northern Lights Destination',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Why Lapland? - The Ultimate Northern Lights Destination',
    description: 'Discover why Lapland is the world\'s premier destination for northern lights viewing.',
    images: ['/og-image.svg'],
  },
  alternates: {
    canonical: 'https://northernlightsradar.com/why-lapland',
  },
};

export default function WhyLaplandPage() {
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
              <span className="text-sm font-light text-white/70 tracking-[0.2em] uppercase">The Ultimate Destination</span>
            </div>
            <h1 className="text-6xl md:text-7xl font-bold text-white mb-8 tracking-tight leading-tight">
              <div className="text-white mb-2">Why</div>
              <div className="text-blue-300/90 bg-gradient-to-r from-green-400 via-cyan-300 via-blue-400 to-purple-500 bg-clip-text text-transparent">
                Lapland?
              </div>
            </h1>
            <p className="text-xl md:text-2xl text-white/60 font-light max-w-4xl mx-auto leading-relaxed mb-6">
              Discover why Lapland is the world&apos;s premier destination for northern lights viewing
            </p>
          </div>
        </div>
      </div>

      {/* Welcome to Lapland - Full Width Image */}
      <div className="py-12 bg-gradient-to-b from-slate-900 to-black">
        <div className="max-w-8xl mx-auto px-12">
          <div className="relative overflow-hidden rounded-3xl group">
            <img 
              src="https://images.unsplash.com/photo-1488415032361-b7e238421f1b?q=80&w=2938&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
              alt="Aurora Borealis dancing over Lapland&apos;s pristine winter landscape with snow-covered mountains and frozen lakes"
              className="w-full h-[600px] object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center max-w-2xl px-8">
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 tracking-wide">
                  Welcome to Lapland
                </h2>
                <p className="text-sm md:text-base text-white/70 font-light leading-relaxed">
                  The northernmost region spanning across Finland, Sweden, and Norway, offering some of the world&apos;s most spectacular aurora viewing opportunities.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Introduction */}
      <div className="py-24 bg-gradient-to-b from-black to-slate-900">
        <div className="max-w-6xl mx-auto px-12">
          <div className="text-center mb-16">
            <div className="inline-block px-8 py-3 bg-white/5 backdrop-blur-sm rounded-full border border-white/10 mb-8">
              <span className="text-sm font-light text-white/70 tracking-[0.3em] uppercase">Why Lapland</span>
            </div>
            <h2 className="text-5xl font-thin text-white mb-8">
              The Ultimate Aurora Destination
            </h2>
            <p className="text-xl text-white/60 font-light max-w-4xl mx-auto leading-relaxed">
              Lapland offers unique advantages that make it the world&apos;s premier destination for northern lights viewing. With over 200 nights of aurora activity per year, Lapland&apos;s geographical position within the aurora oval provides exceptional viewing opportunities. The region&apos;s pristine wilderness, minimal light pollution, and excellent infrastructure make it ideal for aurora enthusiasts.
            </p>
          </div>
        </div>
      </div>

      {/* Key Advantages */}
      <div className="py-24 bg-gradient-to-b from-slate-900 to-black">
        <div className="max-w-6xl mx-auto px-12">
          <div className="text-center mb-16">
            <div className="inline-block px-8 py-3 bg-white/5 backdrop-blur-sm rounded-full border border-white/10 mb-8">
              <span className="text-sm font-light text-white/70 tracking-[0.3em] uppercase">Key Advantages</span>
            </div>
            <h2 className="text-5xl font-thin text-white mb-8">
              Why Choose Lapland?
            </h2>
            <p className="text-xl text-white/60 font-light max-w-3xl mx-auto leading-relaxed">
              Lapland offers unique advantages that make it the perfect choice for your northern lights adventure.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <div className="w-12 h-12 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-xl flex items-center justify-center mb-6">
                <span className="text-2xl">🌍</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Optimal Location</h3>
              <p className="text-white/70 leading-relaxed">
                Most Lapland cities/regions are located above the Arctic Circle, providing optimal positioning for aurora viewing. Northern destinations offer the best conditions.
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <div className="w-12 h-12 bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-xl flex items-center justify-center mb-6">
                <span className="text-2xl">🌌</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Minimal Light Pollution</h3>
              <p className="text-white/70 leading-relaxed">
                Vast wilderness areas with minimal artificial lighting create perfect conditions for aurora viewing, ensuring maximum visibility and intensity.
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-xl flex items-center justify-center mb-6">
                <span className="text-2xl">❄️</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Polar Night</h3>
              <p className="text-white/70 leading-relaxed">
                Experience 24-hour darkness during the polar night, providing continuous aurora viewing opportunities without the need to stay up late.
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <div className="w-12 h-12 bg-gradient-to-r from-yellow-500/20 to-orange-500/20 rounded-xl flex items-center justify-center mb-6">
                <span className="text-2xl">🏨</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Unique Accommodations</h3>
              <p className="text-white/70 leading-relaxed">
                Stay in glass igloos, ice hotels, or traditional Sami lavvu tents for an unforgettable aurora experience right from your accommodation.
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <div className="w-12 h-12 bg-gradient-to-r from-red-500/20 to-pink-500/20 rounded-xl flex items-center justify-center mb-6">
                <span className="text-2xl">🎿</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Winter Activities</h3>
              <p className="text-white/70 leading-relaxed">
                Combine aurora viewing with dog sledding, snowmobiling, ice fishing, and Sami cultural experiences for a complete Arctic adventure.
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <div className="w-12 h-12 bg-gradient-to-r from-indigo-500/20 to-blue-500/20 rounded-xl flex items-center justify-center mb-6">
                <span className="text-2xl">🌍</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Three Countries</h3>
              <p className="text-white/70 leading-relaxed">
                Explore Finnish, Swedish, and Norwegian Lapland, each offering unique experiences and cultural perspectives on aurora viewing.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Country Comparison */}
      <div className="py-24 bg-gradient-to-b from-black to-slate-900">
        <div className="max-w-6xl mx-auto px-12">
          <div className="text-center mb-16">
            <div className="inline-block px-8 py-3 bg-white/5 backdrop-blur-sm rounded-full border border-white/10 mb-8">
              <span className="text-sm font-light text-white/70 tracking-[0.3em] uppercase">Lapland Regions</span>
            </div>
            <h2 className="text-5xl font-thin text-white mb-8">
              Lapland by Country
            </h2>
            <p className="text-xl text-white/60 font-light max-w-3xl mx-auto leading-relaxed">
              Each Lapland region offers unique advantages for aurora viewing and Arctic experiences.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Finland */}
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500/20 to-blue-600/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">🇫🇮</span>
                </div>
                <h3 className="text-2xl font-semibold text-white mb-2">Finnish Lapland</h3>
                <p className="text-blue-300 text-sm">Rovaniemi, Ivalo, Kilpisjärvi</p>
              </div>
              <ul className="space-y-3 text-white/70">
                <li>• Home of Santa Claus Village</li>
                <li>• Excellent infrastructure and accessibility</li>
                <li>• Unique glass igloo accommodations</li>
                <li>• Rich Sami cultural heritage</li>
                <li>• World-class aurora viewing spots</li>
              </ul>
              <div className="mt-6">
                <Link 
                  href="/finland/northern-lights"
                  className="block w-full text-center px-4 py-3 bg-gradient-to-r from-blue-500/20 to-blue-600/20 border border-blue-400/30 rounded-lg text-blue-300 hover:from-blue-500/30 hover:to-blue-600/30 transition-all duration-300"
                >
                  Explore Finland
                </Link>
              </div>
            </div>

            {/* Sweden */}
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-yellow-500/20 to-yellow-600/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">🇸🇪</span>
                </div>
                <h3 className="text-2xl font-semibold text-white mb-2">Swedish Lapland</h3>
                <p className="text-yellow-300 text-sm">Kiruna, Abisko, Luleå</p>
              </div>
              <ul className="space-y-3 text-white/70">
                <li>• Aurora Sky Station in Abisko</li>
                <li>• World&apos;s most accessible aurora viewing</li>
                <li>• Famous Icehotel in Jukkasjärvi</li>
                <li>• Clear skies microclimate</li>
                <li>• UNESCO World Heritage sites</li>
              </ul>
              <div className="mt-6">
                <Link 
                  href="/sweden/northern-lights"
                  className="block w-full text-center px-4 py-3 bg-gradient-to-r from-yellow-500/20 to-yellow-600/20 border border-yellow-400/30 rounded-lg text-yellow-300 hover:from-yellow-500/30 hover:to-yellow-600/30 transition-all duration-300"
                >
                  Explore Sweden
                </Link>
              </div>
            </div>

            {/* Norway */}
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-red-500/20 to-red-600/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">🇳🇴</span>
                </div>
                <h3 className="text-2xl font-semibold text-white mb-2">Norwegian Lapland</h3>
                <p className="text-red-300 text-sm">Tromsø, Alta, Svalbard</p>
              </div>
              <ul className="space-y-3 text-white/70">
                <li>• Arctic capital of Tromsø</li>
                <li>• 24-hour darkness in Svalbard</li>
                <li>• World&apos;s first aurora observatory</li>
                <li>• Unique fjord landscapes</li>
                <li>• Rich maritime history</li>
              </ul>
              <div className="mt-6">
                <Link 
                  href="/norway/northern-lights"
                  className="block w-full text-center px-4 py-3 bg-gradient-to-r from-red-500/20 to-red-600/20 border border-red-400/30 rounded-lg text-red-300 hover:from-red-500/30 hover:to-red-600/30 transition-all duration-300"
                >
                  Explore Norway
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Best Time to Visit */}
      <div className="py-24 bg-gradient-to-b from-slate-900 to-black">
        <div className="max-w-6xl mx-auto px-12">
          <div className="text-center mb-16">
            <div className="inline-block px-8 py-3 bg-white/5 backdrop-blur-sm rounded-full border border-white/10 mb-8">
              <span className="text-sm font-light text-white/70 tracking-[0.3em] uppercase">Best Time</span>
            </div>
            <h2 className="text-5xl font-thin text-white mb-8">
              When to Visit Lapland
            </h2>
            <p className="text-xl text-white/60 font-light max-w-3xl mx-auto leading-relaxed">
              Plan your Lapland aurora adventure during the optimal viewing periods for the best chances of seeing the northern lights.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Chart */}
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <h3 className="text-2xl font-semibold text-white mb-6">Aurora Activity by Month</h3>
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
                    <span className="text-red-400 font-medium">Nov–Jan</span>
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
                <h3 className="text-xl font-semibold text-white mb-4">Planning Tips</h3>
                <ul className="space-y-2 text-white/70">
                  <li>• Book accommodations 3-6 months in advance</li>
                  <li>• Avoid full moon periods for best visibility</li>
                  <li>• Check aurora forecasts before traveling</li>
                  <li>• Pack warm clothing for extreme cold</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Space Weather Widget */}
      <div className="py-24 bg-gradient-to-b from-black to-slate-900">
        <div className="max-w-6xl mx-auto px-12">
          <div className="text-center mb-16">
            <div className="inline-block px-8 py-3 bg-white/5 backdrop-blur-sm rounded-full border border-white/10 mb-8">
              <span className="text-sm font-light text-white/70 tracking-[0.3em] uppercase">Space Weather</span>
            </div>
            <h2 className="text-5xl font-thin text-white mb-8">
              Current Space Weather
            </h2>
            <p className="text-xl text-white/60 font-light max-w-3xl mx-auto leading-relaxed">
              Real-time space weather data from NOAA and other sources
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <SpaceWeatherWidget />
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="py-24 bg-gradient-to-b from-slate-900 to-black">
        <div className="max-w-6xl mx-auto px-12 text-center">
          <div className="inline-block px-8 py-3 bg-white/5 backdrop-blur-sm rounded-full border border-white/10 mb-8">
            <span className="text-sm font-light text-white/70 tracking-[0.3em] uppercase">Start Your Journey</span>
          </div>
          <h2 className="text-5xl font-thin text-white mb-8">
            Ready for Your Aurora Adventure?
          </h2>
          <p className="text-xl text-white/60 font-light max-w-3xl mx-auto leading-relaxed mb-12">
            Start planning your Lapland northern lights experience today. Explore our city guides, check live conditions, and discover the perfect destination for your aurora adventure.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link 
              href="/finland/northern-lights" 
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white font-medium rounded-xl transition-all duration-300 hover:scale-105"
            >
              Explore Finland
            </Link>
            <Link 
              href="/sweden/northern-lights" 
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-yellow-600 to-orange-600 hover:from-yellow-700 hover:to-orange-700 text-white font-medium rounded-xl transition-all duration-300 hover:scale-105"
            >
              Explore Sweden
            </Link>
            <Link 
              href="/norway/northern-lights" 
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-red-600 to-pink-600 hover:from-red-700 hover:to-pink-700 text-white font-medium rounded-xl transition-all duration-300 hover:scale-105"
            >
              Explore Norway
            </Link>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-slate-900 py-16">
        <div className="max-w-6xl mx-auto px-12">
          <div className="text-center text-white/40 text-sm font-light">
            <p>Data from NOAA SWPC (OVATION), Open-Meteo. Times in local timezone.</p>
            <p className="mt-2">Real-time aurora forecasts for Lapland destinations.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}





