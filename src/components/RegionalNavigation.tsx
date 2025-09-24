'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function RegionalNavigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (path: string) => {
    if (path === '/') return pathname === '/';
    return pathname.startsWith(path);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-black/80 backdrop-blur-md border-b border-white/10' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-8xl mx-auto px-16 py-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-4 group">
            <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
              <div className="w-7 h-7 bg-white rounded-full"></div>
            </div>
            <div className="hidden md:block">
              <h1 className="text-2xl font-bold text-white uppercase tracking-wide group-hover:text-cyan-300 transition-colors">
                Northern Lights
              </h1>
              <p className="text-sm text-gray-400 font-light uppercase tracking-wide">Radar</p>
            </div>
          </Link>

          {/* Main Navigation */}
          <div className="hidden lg:flex items-center space-x-12">
            <Link 
              href="/why-lapland" 
              className={`text-base font-light transition-colors duration-300 ${
                isActive('/why-lapland') 
                  ? 'text-cyan-300' 
                  : 'text-white hover:text-cyan-300'
              }`}
            >
              Why Lapland
            </Link>
            
            <Link 
              href="/finland/northern-lights" 
              className={`text-base font-light transition-colors duration-300 ${
                isActive('/finland') 
                  ? 'text-cyan-300' 
                  : 'text-white hover:text-cyan-300'
              }`}
            >
              Finland
            </Link>
            
            <Link 
              href="/sweden/northern-lights" 
              className={`text-base font-light transition-colors duration-300 ${
                isActive('/sweden') 
                  ? 'text-cyan-300' 
                  : 'text-white hover:text-cyan-300'
              }`}
            >
              Sweden
            </Link>
            
            <Link 
              href="/norway/northern-lights" 
              className={`text-base font-light transition-colors duration-300 ${
                isActive('/norway') 
                  ? 'text-cyan-300' 
                  : 'text-white hover:text-cyan-300'
              }`}
            >
              Norway
            </Link>

            <Link 
              href="/guide" 
              className={`text-base font-light transition-colors duration-300 ${
                isActive('/guide') 
                  ? 'text-cyan-300' 
                  : 'text-white hover:text-cyan-300'
              }`}
            >
              Guide
            </Link>

            <Link 
              href="/aurora-lab" 
              className={`text-base font-light transition-colors duration-300 ${
                isActive('/aurora-lab') 
                  ? 'text-cyan-300' 
                  : 'text-white hover:text-cyan-300'
              }`}
            >
              Aurora Lab
            </Link>

            <div className="relative group">
              <button className="flex items-center space-x-1 text-base font-light text-white hover:text-cyan-300 transition-colors duration-300">
                <span>More</span>
                <svg className="w-4 h-4 transition-transform duration-300 group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              {/* More Dropdown Menu */}
              <div className="absolute top-full left-0 mt-2 w-80 bg-black/90 backdrop-blur-md rounded-2xl border border-white/10 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                <div className="p-6">
                  <div className="mb-4">
                    <h3 className="text-sm font-light text-white/70 uppercase tracking-wide mb-3">Guide Sections</h3>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <Link 
                      href="/guide/how-to-see-the-northern-lights" 
                      className={`p-4 rounded-xl transition-colors duration-300 ${
                        isActive('/guide/how-to-see-the-northern-lights') 
                          ? 'bg-cyan-500/20 text-cyan-300' 
                          : 'hover:bg-white/5 text-white/70 hover:text-white'
                      }`}
                    >
                      <div className="font-light text-sm mb-1">How to See</div>
                      <div className="text-xs text-white/50">Complete beginner&apos;s guide</div>
                    </Link>
                    
                    <Link 
                      href="/guide/what-to-wear" 
                      className={`p-4 rounded-xl transition-colors duration-300 ${
                        isActive('/guide/what-to-wear') 
                          ? 'bg-cyan-500/20 text-cyan-300' 
                          : 'hover:bg-white/5 text-white/70 hover:text-white'
                      }`}
                    >
                      <div className="font-light text-sm mb-1">What to Wear</div>
                      <div className="text-xs text-white/50">Essential clothing guide</div>
                    </Link>
                    
                    <Link 
                      href="/guide/photography-tips" 
                      className={`p-4 rounded-xl transition-colors duration-300 ${
                        isActive('/guide/photography-tips') 
                          ? 'bg-cyan-500/20 text-cyan-300' 
                          : 'hover:bg-white/5 text-white/70 hover:text-white'
                      }`}
                    >
                      <div className="font-light text-sm mb-1">Photography Tips</div>
                      <div className="text-xs text-white/50">Camera settings & techniques</div>
                    </Link>
                    
                    <Link 
                      href="/guide/where-to-look" 
                      className={`p-4 rounded-xl transition-colors duration-300 ${
                        isActive('/guide/where-to-look') 
                          ? 'bg-cyan-500/20 text-cyan-300' 
                          : 'hover:bg-white/5 text-white/70 hover:text-white'
                      }`}
                    >
                      <div className="font-light text-sm mb-1">Where to Look</div>
                      <div className="text-xs text-white/50">Best viewing locations</div>
                    </Link>
                    
                    <Link 
                      href="/guide/ideal-conditions" 
                      className={`p-4 rounded-xl transition-colors duration-300 ${
                        isActive('/guide/ideal-conditions') 
                          ? 'bg-cyan-500/20 text-cyan-300' 
                          : 'hover:bg-white/5 text-white/70 hover:text-white'
                      }`}
                    >
                      <div className="font-light text-sm mb-1">Ideal Conditions</div>
                      <div className="text-xs text-white/50">Perfect weather & timing</div>
                    </Link>
                    
                    <Link 
                      href="/guide/perfect-locations" 
                      className={`p-4 rounded-xl transition-colors duration-300 ${
                        isActive('/guide/perfect-locations') 
                          ? 'bg-cyan-500/20 text-cyan-300' 
                          : 'hover:bg-white/5 text-white/70 hover:text-white'
                      }`}
                    >
                      <div className="font-light text-sm mb-1">Perfect Locations</div>
                      <div className="text-xs text-white/50">Top spots in Lapland</div>
                    </Link>
                    
                    <Link 
                      href="/guide/best-time-to-visit" 
                      className={`p-4 rounded-xl transition-colors duration-300 ${
                        isActive('/guide/best-time-to-visit') 
                          ? 'bg-cyan-500/20 text-cyan-300' 
                          : 'hover:bg-white/5 text-white/70 hover:text-white'
                      }`}
                    >
                      <div className="font-light text-sm mb-1">Best Time to Visit</div>
                      <div className="text-xs text-white/50">Seasonal timing guide</div>
                    </Link>
                    
                    <Link 
                      href="/guide/equipment-checklist" 
                      className={`p-4 rounded-xl transition-colors duration-300 ${
                        isActive('/guide/equipment-checklist') 
                          ? 'bg-cyan-500/20 text-cyan-300' 
                          : 'hover:bg-white/5 text-white/70 hover:text-white'
                      }`}
                    >
                      <div className="font-light text-sm mb-1">Equipment Checklist</div>
                      <div className="text-xs text-white/50">Essential gear list</div>
                    </Link>
                    
                    <Link 
                      href="/guide/safety-tips" 
                      className={`p-4 rounded-xl transition-colors duration-300 ${
                        isActive('/guide/safety-tips') 
                          ? 'bg-cyan-500/20 text-cyan-300' 
                          : 'hover:bg-white/5 text-white/70 hover:text-white'
                      }`}
                    >
                      <div className="font-light text-sm mb-1">Safety Tips</div>
                      <div className="text-xs text-white/50">Stay safe in the Arctic</div>
                    </Link>
                    
                    <Link 
                      href="/guide/aurora-myths" 
                      className={`p-4 rounded-xl transition-colors duration-300 ${
                        isActive('/guide/aurora-myths') 
                          ? 'bg-cyan-500/20 text-cyan-300' 
                          : 'hover:bg-white/5 text-white/70 hover:text-white'
                      }`}
                    >
                      <div className="font-light text-sm mb-1">Aurora Myths</div>
                      <div className="text-xs text-white/50">Debunking common myths</div>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Button */}
          <Link
            href="/finland/northern-lights"
            className="px-8 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg text-white font-medium text-base transition-colors duration-300"
          >
            Explore
          </Link>

          {/* Mobile Menu Button */}
          <button className="lg:hidden text-white/70 hover:text-white transition-colors duration-300">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
}
