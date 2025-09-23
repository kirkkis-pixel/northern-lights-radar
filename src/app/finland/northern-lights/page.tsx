import { Metadata } from 'next';
import Link from 'next/link';
import LuxuryNavigation from '@/components/LuxuryNavigation';
import CityScoreCard from '@/components/CityScoreCard';
import MultiCityWidget from '@/components/MultiCityWidget';

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
  { slug: 'rovaniemi', name: 'Rovaniemi', description: 'Capital of Lapland' },
  { slug: 'ivalo', name: 'Ivalo', description: 'Northernmost airport' },
  { slug: 'inari', name: 'Inari', description: 'Sámi cultural heart' },
  { slug: 'levi', name: 'Levi', description: 'Mountain resort' },
  { slug: 'saariselka', name: 'Saariselkä', description: 'Mountain village' },
  { slug: 'yllas', name: 'Ylläs', description: 'Seven fells' },
  { slug: 'kilpisjarvi', name: 'Kilpisjärvi', description: 'Northernmost village' },
  { slug: 'kemi', name: 'Kemi', description: 'Coastal gateway' }
];

export default function FinlandPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <div className="min-h-screen bg-black">
        {/* Luxury Navigation */}
        <LuxuryNavigation />
        
        {/* Hero Section */}
        <div className="relative bg-gradient-to-br from-black via-slate-900 to-gray-900 py-32 pt-40 overflow-hidden">
          {/* Background Elements */}
          <div className="absolute inset-0">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl animate-pulse" />
            <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl animate-pulse delay-1000" />
            <div className="absolute top-1/2 right-1/3 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl animate-pulse delay-2000" />
          </div>
          
          <div className="relative z-10 max-w-8xl mx-auto px-12 text-center">
            <div className="mb-20">
              <div className="inline-flex items-center px-6 py-2 bg-white/5 backdrop-blur-sm rounded-full border border-white/10 mb-8">
                <div className="w-2 h-2 bg-red-500 rounded-full mr-3 animate-pulse"></div>
                <span className="text-sm font-light text-white/70 tracking-[0.2em] uppercase">Live Aurora Forecast</span>
              </div>
              <h1 className="text-5xl md:text-6xl font-thin text-white mb-8 tracking-tight leading-tight">
                <span className="text-white">Northern Lights</span>
                <span className="text-cyan-300/80 bg-gradient-to-r from-cyan-300/70 to-blue-400/70 bg-clip-text text-transparent">
                  in Finland
                </span>
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
          title="Live Aurora Conditions Across Lapland"
          description="Real-time aurora scores and conditions for all major Lapland destinations"
        />
        
        {/* CTA Section */}
        <div className="py-24 bg-gradient-to-b from-black to-slate-900">
          <div className="max-w-6xl mx-auto px-12 text-center">
            <Link
              href="/guide/how-to-see-the-northern-lights"
              className="group inline-flex items-center gap-4 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-400/30 text-white px-12 py-5 rounded-full font-light tracking-wide hover:from-cyan-500/30 hover:to-blue-500/30 transition-all duration-500 text-xl shadow-2xl shadow-cyan-500/10 hover:shadow-cyan-500/20 hover:scale-105"
            >
              <span>Start Your Aurora Journey</span>
              <div className="w-2 h-2 bg-white/60 rounded-full group-hover:translate-x-1 transition-transform duration-300"></div>
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

