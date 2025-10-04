import { Metadata } from 'next';
import RegionalNavigation from '@/components/RegionalNavigation';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'About Us - Northern Lights Radar',
  description: 'Learn about Northern Lights Radar, our mission to provide accurate aurora forecasts, and our commitment to transparency in space weather data.',
  keywords: 'about northern lights radar, aurora forecast team, space weather data, transparency',
  openGraph: {
    title: 'About Us - Northern Lights Radar',
    description: 'Learn about Northern Lights Radar and our mission to provide accurate aurora forecasts.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About Us - Northern Lights Radar',
    description: 'Learn about Northern Lights Radar and our mission to provide accurate aurora forecasts.',
  },
  alternates: {
    canonical: 'https://northernlightsradar.com/about',
  },
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-black">
      <RegionalNavigation />
      
      {/* Hero Section */}
      <div className="relative py-32 bg-gradient-to-b from-black via-slate-900 to-black">
        <div className="max-w-6xl mx-auto px-12">
          <div className="text-center mb-20">
            <div className="inline-flex items-center px-8 py-3 bg-white/5 backdrop-blur-sm rounded-full border border-white/10 mb-8">
              <svg className="w-4 h-4 text-white/70 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="text-sm font-light text-white/70 tracking-[0.3em] uppercase">About Us</span>
            </div>
            <h1 className="text-5xl font-thin text-white mb-8">About Northern Lights Radar</h1>
            <p className="text-lg text-white/60 font-light max-w-3xl mx-auto leading-relaxed">
              We're passionate about making aurora forecasting accessible, accurate, and transparent for everyone.
            </p>
          </div>
        </div>
      </div>

      {/* Mission Section */}
      <div className="py-24 bg-gradient-to-b from-black to-slate-900">
        <div className="max-w-6xl mx-auto px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-thin text-white mb-8">Our Mission</h2>
              <p className="text-lg text-white/70 font-light leading-relaxed mb-6">
                Northern Lights Radar was created to democratize aurora forecasting. We believe that accurate, 
                real-time aurora predictions should be accessible to everyone, from casual observers to professional 
                photographers and tour operators.
              </p>
              <p className="text-lg text-white/70 font-light leading-relaxed mb-6">
                Our platform combines data from multiple trusted sources including NOAA Space Weather Prediction Center, 
                Finnish Meteorological Institute, Swedish Meteorological Institute, and Norwegian Meteorological Institute 
                to provide the most comprehensive aurora forecasts available.
              </p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10">
              <h3 className="text-2xl font-light text-white mb-6">What We Do</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-cyan-500/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-cyan-300 text-sm">1</span>
                  </div>
                  <div>
                    <h4 className="text-lg font-light text-white mb-2">Real-Time Data Integration</h4>
                    <p className="text-white/70 font-light">We aggregate data from multiple meteorological and space weather sources to provide comprehensive aurora predictions.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-cyan-500/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-cyan-300 text-sm">2</span>
                  </div>
                  <div>
                    <h4 className="text-lg font-light text-white mb-2">Transparent Scoring</h4>
                    <p className="text-white/70 font-light">Our aurora scores are calculated using transparent algorithms that you can understand and verify.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-cyan-500/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-cyan-300 text-sm">3</span>
                  </div>
                  <div>
                    <h4 className="text-lg font-light text-white mb-2">User Education</h4>
                    <p className="text-white/70 font-light">We provide comprehensive guides and educational content to help you understand aurora science.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Values Section */}
      <div className="py-24 bg-gradient-to-b from-slate-900 to-black">
        <div className="max-w-6xl mx-auto px-12">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-thin text-white mb-8">Our Values</h2>
            <p className="text-lg text-white/60 font-light max-w-3xl mx-auto">
              These principles guide everything we do at Northern Lights Radar
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-cyan-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-light text-white mb-4">Accuracy</h3>
              <p className="text-white/70 font-light leading-relaxed">
                We prioritize accuracy over speed, using only verified data sources and transparent calculations.
              </p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500/20 to-emerald-500/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-green-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-light text-white mb-4">Transparency</h3>
              <p className="text-white/70 font-light leading-relaxed">
                All our data sources, calculations, and methodologies are openly documented and verifiable.
              </p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-purple-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-xl font-light text-white mb-4">Accessibility</h3>
              <p className="text-white/70 font-light leading-relaxed">
                We make complex aurora science accessible to everyone through clear explanations and intuitive interfaces.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="py-24 bg-gradient-to-b from-black to-slate-900">
        <div className="max-w-4xl mx-auto px-12 text-center">
          <h2 className="text-4xl font-thin text-white mb-8">Get in Touch</h2>
          <p className="text-lg text-white/60 font-light mb-12 leading-relaxed">
            Have questions about our data, suggestions for improvements, or want to collaborate? 
            We'd love to hear from you.
          </p>
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-light text-white mb-4">Data Questions</h3>
                <p className="text-white/70 font-light mb-4">
                  Questions about our data sources, calculations, or methodology?
                </p>
                <Link href="/data-sources" className="inline-flex items-center text-cyan-300 hover:text-cyan-200 transition-colors">
                  <span>View Data Sources</span>
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
              <div>
                <h3 className="text-xl font-light text-white mb-4">Methodology</h3>
                <p className="text-white/70 font-light mb-4">
                  Want to understand how we calculate aurora scores?
                </p>
                <Link href="/methodology" className="inline-flex items-center text-cyan-300 hover:text-cyan-200 transition-colors">
                  <span>View Methodology</span>
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}