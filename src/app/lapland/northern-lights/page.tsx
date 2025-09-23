import { Metadata } from 'next';
import Link from 'next/link';
import CityScoreCard from '@/components/CityScoreCard';

export const metadata: Metadata = {
  title: 'Northern Lights in Lapland - Live Aurora Conditions',
  description: 'Real-time aurora viewing conditions for Lapland cities. Rovaniemi, Ivalo, Inari, Levi, and more with live scoring and viewing tips.',
  keywords: 'northern lights Lapland, aurora Lapland, Rovaniemi aurora, Ivalo aurora, Lapland aurora forecast',
  openGraph: {
    title: 'Northern Lights in Lapland - Live Aurora Conditions',
    description: 'Real-time aurora viewing conditions for Lapland cities with live scoring.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Northern Lights in Lapland - Live Aurora Conditions',
    description: 'Real-time aurora viewing conditions for Lapland cities.',
  },
  alternates: {
    canonical: 'https://northernlightsradar.com/lapland/northern-lights',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Which Lapland city is best for seeing the northern lights?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'All Lapland cities offer excellent aurora viewing opportunities. Kilpisjärvi is the northernmost and closest to the auroral oval, while Rovaniemi offers the best infrastructure and accessibility. Ivalo and Inari provide pristine wilderness settings with minimal light pollution.'
      }
    },
    {
      '@type': 'Question',
      name: 'Can I see the northern lights in Rovaniemi?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, Rovaniemi offers excellent aurora viewing opportunities. As the capital of Lapland and located on the Arctic Circle, it provides good infrastructure while still being far enough north for reliable aurora sightings during the winter months.'
      }
    },
    {
      '@type': 'Question',
      name: 'What makes Lapland special for aurora viewing?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Lapland\'s location above the Arctic Circle, minimal light pollution, and long winter nights create ideal conditions for aurora viewing. The region experiences polar night in winter, providing extended darkness for aurora observation.'
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
  { slug: 'kilpisjarvi', name: 'Kilpisjärvi', description: 'Northernmost village' }
];

export default function LaplandPage() {
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
                Northern Lights in Lapland
              </h1>
              <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                Live aurora conditions for Lapland cities. Real-time scoring based on 
                space weather, cloud cover, and darkness levels.
              </p>
            </div>
          </div>
        </div>
        
        {/* Live City Scores */}
        <div className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
              Live Aurora Conditions
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {cities.map((city) => (
                <CityScoreCard
                  key={city.slug}
                  citySlug={city.slug}
                  cityName={city.name}
                  description={city.description}
                />
              ))}
            </div>
          </div>
        </div>
        
        {/* Lapland Facts */}
        <div className="py-16 bg-gray-50">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
              Why Lapland is Perfect for Aurora Viewing
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                    <span className="text-blue-600 font-bold">1</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      Arctic Circle Location
                    </h3>
                    <p className="text-gray-600">
                      All Lapland cities are located above the Arctic Circle, 
                      providing optimal positioning for aurora viewing.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                    <span className="text-blue-600 font-bold">2</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      Minimal Light Pollution
                    </h3>
                    <p className="text-gray-600">
                      Sparse population and wilderness areas provide dark skies 
                      essential for clear aurora observation.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                    <span className="text-blue-600 font-bold">3</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      Long Winter Nights
                    </h3>
                    <p className="text-gray-600">
                      Polar night provides extended darkness from November to January, 
                      maximizing aurora viewing opportunities.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                    <span className="text-blue-600 font-bold">4</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      Clear Mountain Air
                    </h3>
                    <p className="text-gray-600">
                      High altitude locations like Levi and Saariselkä offer 
                      clearer skies and better visibility.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                    <span className="text-blue-600 font-bold">5</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      Aurora Infrastructure
                    </h3>
                    <p className="text-gray-600">
                      Well-developed tourism infrastructure with aurora tours, 
                      photography workshops, and viewing platforms.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                    <span className="text-blue-600 font-bold">6</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      Cultural Experience
                    </h3>
                    <p className="text-gray-600">
                      Combine aurora viewing with Sámi culture, reindeer experiences, 
                      and authentic Arctic lifestyle.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Quick Links */}
        <div className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
              Explore Lapland Cities
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {cities.map((city) => (
                <Link
                  key={city.slug}
                  href={`/finland/lapland/${city.slug}/aurora`}
                  className="block bg-white rounded-2xl p-6 shadow-sm border border-gray-200 hover:shadow-md transition-shadow"
                >
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {city.name}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {city.description}
                  </p>
                  <div className="text-blue-600 font-medium">
                    View live conditions →
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
        
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

