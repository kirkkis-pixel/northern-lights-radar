import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-slate-900 to-black border-t border-white/10">
      <div className="max-w-7xl mx-auto px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full flex items-center justify-center">
                <div className="w-6 h-6 bg-white rounded-full"></div>
              </div>
              <div>
                <h3 className="text-2xl font-light text-white">Northern Lights</h3>
                <p className="text-sm text-cyan-300/80 font-light">Radar</p>
              </div>
            </div>
            <p className="text-white/60 font-light leading-relaxed mb-6 max-w-md">
              Real-time aurora viewing conditions across Finnish, Swedish, and Norwegian Lapland. 
              Simple, transparent scoring based on NOAA space weather data, cloud cover, and darkness levels.
            </p>
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2 text-sm text-white/50">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span>Live Data</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-white/50">
                <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                <span>Updated Every 5min</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-light text-white mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/why-lapland" className="text-white/60 hover:text-cyan-300 transition-colors duration-300 font-light">
                  Why Lapland
                </Link>
              </li>
              <li>
                <Link href="/finland/northern-lights" className="text-white/60 hover:text-cyan-300 transition-colors duration-300 font-light">
                  Finland
                </Link>
              </li>
              <li>
                <Link href="/sweden/northern-lights" className="text-white/60 hover:text-cyan-300 transition-colors duration-300 font-light">
                  Sweden
                </Link>
              </li>
              <li>
                <Link href="/norway/northern-lights" className="text-white/60 hover:text-cyan-300 transition-colors duration-300 font-light">
                  Norway
                </Link>
              </li>
              <li>
                <Link href="/guide" className="text-white/60 hover:text-cyan-300 transition-colors duration-300 font-light">
                  Complete Guide
                </Link>
              </li>
            </ul>
          </div>

          {/* Guide Links */}
          <div>
            <h4 className="text-lg font-light text-white mb-6">Guide</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/guide/what-to-wear" className="text-white/60 hover:text-cyan-300 transition-colors duration-300 font-light text-sm">
                  What to Wear
                </Link>
              </li>
              <li>
                <Link href="/guide/photography-tips" className="text-white/60 hover:text-cyan-300 transition-colors duration-300 font-light text-sm">
                  Photography Tips
                </Link>
              </li>
              <li>
                <Link href="/guide/where-to-look" className="text-white/60 hover:text-cyan-300 transition-colors duration-300 font-light text-sm">
                  Where to Look
                </Link>
              </li>
              <li>
                <Link href="/guide/ideal-conditions" className="text-white/60 hover:text-cyan-300 transition-colors duration-300 font-light text-sm">
                  Ideal Conditions
                </Link>
              </li>
              <li>
                <Link href="/guide/best-time-to-visit" className="text-white/60 hover:text-cyan-300 transition-colors duration-300 font-light text-sm">
                  Best Time to Visit
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-16 pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-white/40 text-sm font-light">
              © 2024 Northern Lights Radar. All rights reserved.
            </div>
            <div className="flex items-center space-x-6 text-sm text-white/40">
              <span className="font-light">Powered by NOAA, FMI, SMHI & MET Norway</span>
              <div className="flex items-center space-x-2">
                <div className="w-1 h-1 bg-white/20 rounded-full"></div>
                <div className="w-1 h-1 bg-white/20 rounded-full"></div>
                <div className="w-1 h-1 bg-white/20 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
