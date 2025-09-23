import { Metadata } from 'next';
import Link from 'next/link';
import GuideSection from '@/components/GuideSection';

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

export default function FinlandPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <div className="bg-gradient-to-br from-blue-50 to-indigo-100 py-16">
          <div className="max-w-4xl mx-auto px-6">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Northern Lights in Finland
              </h1>
              <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                Your complete guide to seeing the aurora borealis in Finland. 
                Live conditions, best viewing spots, and expert tips for successful aurora hunting.
              </p>
              
              {/* Live Widget */}
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
                <h3 className="text-xl font-light text-white mb-4">Live Aurora Conditions</h3>
                <p className="text-white/60">Live data will be displayed here</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Quick Stats */}
        <div className="py-12 bg-white">
          <div className="max-w-4xl mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">200+</div>
                <div className="text-gray-600">Aurora Nights per Year</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">66°N</div>
                <div className="text-gray-600">Arctic Circle Location</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">85%</div>
                <div className="text-gray-600">Success Rate in Lapland</div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Best Time Section */}
        <div className="py-16 bg-gray-50">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
              When to See the Aurora in Finland
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white rounded-2xl p-8 shadow-sm">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Best Months
                </h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">September - October</span>
                    <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium">
                      Excellent
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">November - March</span>
                    <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                      Peak Season
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">April - May</span>
                    <span className="px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full text-sm font-medium">
                      Good
                    </span>
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-2xl p-8 shadow-sm">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Best Times
                </h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">10 PM - 2 AM</span>
                    <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                      Peak Hours
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">8 PM - 4 AM</span>
                    <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium">
                      Good Window
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">All Night</span>
                    <span className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm font-medium">
                      Polar Night
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Lapland Cities */}
        <div className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
              Best Cities for Aurora Viewing
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { name: 'Rovaniemi', slug: 'rovaniemi', description: 'Gateway to Lapland' },
                { name: 'Ivalo', slug: 'ivalo', description: 'Northernmost airport' },
                { name: 'Inari', slug: 'inari', description: 'Sámi cultural heart' },
                { name: 'Levi', slug: 'levi', description: 'Mountain views' },
                { name: 'Saariselkä', slug: 'saariselka', description: 'Clear mountain air' },
                { name: 'Ylläs', slug: 'yllas', description: 'Seven fells' },
                { name: 'Kilpisjärvi', slug: 'kilpisjarvi', description: 'Northernmost village' }
              ].map((city) => (
                <Link
                  key={city.slug}
                  href={`/finland/lapland/${city.slug}/aurora`}
                  className="block bg-white rounded-2xl p-6 shadow-sm border border-gray-200 hover:shadow-md transition-shadow"
                >
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {city.name}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {city.description}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </div>
        
        {/* Guide Section */}
        <GuideSection />
        
        {/* Attribution Footer */}
        <div className="py-8 bg-gray-50">
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

