'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function RegionalNavigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsScrolled(currentScrollY > 20);
      
      // Mobile-only scroll behavior
      if (window.innerWidth < 1024) { // lg breakpoint
        if (isMobileMenuOpen) {
          // Mobile menu is open - always show nav
          setIsVisible(true);
        } else if (currentScrollY > lastScrollY && currentScrollY > 100) {
          // Scrolling down and past 100px - hide nav
          setIsVisible(false);
        } else {
          // Scrolling up - show nav
          setIsVisible(true);
        }
      } else {
        // Desktop - always visible
        setIsVisible(true);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY, isMobileMenuOpen]);

  // Show navigation when mobile menu is opened
  useEffect(() => {
    if (isMobileMenuOpen) {
      setIsVisible(true);
    }
  }, [isMobileMenuOpen]);

  const isActive = (path: string) => {
    if (path === '/') return pathname === '/';
    return pathname.startsWith(path);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      isScrolled 
        ? 'bg-black/80 backdrop-blur-md border-b border-white/10' 
        : 'bg-transparent'
    } ${
      isVisible 
        ? 'translate-y-0 opacity-100' 
        : 'lg:translate-y-0 lg:opacity-100 -translate-y-full opacity-0'
    }`}>
      <div className="max-w-8xl mx-auto px-16 py-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-4 group">
            <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center group-hover:scale-105 group-hover:bg-white/20 transition-all duration-500 relative">
              {/* Radar circles */}
              <div className="absolute inset-2 rounded-full border border-white/30 group-hover:border-white/50 transition-colors duration-500"></div>
              <div className="absolute inset-4 rounded-full border border-white/20 group-hover:border-white/40 transition-colors duration-500"></div>
              {/* Center dot */}
              <div className="w-1.5 h-1.5 bg-white/80 group-hover:bg-white rounded-full z-10 transition-colors duration-500"></div>
            </div>
            <div className="hidden md:block">
              <h1 className="text-2xl font-bold text-white/90 uppercase tracking-wide group-hover:bg-gradient-to-r group-hover:from-cyan-300 group-hover:via-blue-400 group-hover:to-purple-500 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-500">
                Northern Lights
              </h1>
              <p className="text-sm text-white/60 font-light uppercase tracking-wide group-hover:text-white/80 transition-colors duration-500">Radar</p>
            </div>
          </Link>

          {/* Main Navigation - Centered */}
          <div className="hidden lg:flex items-center justify-center flex-1">
            <div className="flex items-center space-x-16">
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
                <Link 
                  href="/guide"
                  className="flex items-center space-x-1 text-base font-light text-white hover:text-cyan-300 transition-colors duration-300"
                >
                  <span>Guide</span>
                  <svg className="w-4 h-4 transition-transform duration-300 group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 9l-7 7-7-7" />
                  </svg>
                </Link>
                
                {/* Guide Dropdown Menu */}
                <div className="absolute top-full left-0 mt-2 w-80 bg-black/90 backdrop-blur-md rounded-2xl border border-white/10 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                  <div className="p-6">
                    <div className="mb-4">
                      <h3 className="text-sm font-light text-white/70 uppercase tracking-wide mb-3">Guide Sections</h3>
                      <Link 
                        href="/guide" 
                        className={`block p-3 rounded-xl transition-colors duration-300 mb-4 ${
                          isActive('/guide') && pathname === '/guide'
                            ? 'bg-cyan-500/20 text-cyan-300' 
                            : 'hover:bg-white/5 text-white/70 hover:text-white'
                        }`}
                      >
                        <div className="font-light text-sm mb-1">📚 Complete Guide</div>
                        <div className="text-xs text-white/50">View all guides in one place</div>
                      </Link>
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
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={toggleMobileMenu}
            className="lg:hidden relative p-2 text-white/70 hover:text-white transition-all duration-300 hover:scale-105 active:scale-95"
          >
            <div className="relative w-6 h-6">
              <span className={`absolute top-1 left-0 w-6 h-0.5 bg-current transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
              <span className={`absolute top-2.5 left-0 w-6 h-0.5 bg-current transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : ''}`}></span>
              <span className={`absolute top-4 left-0 w-6 h-0.5 bg-current transition-all duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-black/95 backdrop-blur-md border-b border-white/10 animate-in slide-in-from-top-2 duration-300">
          <div className="px-6 py-8 space-y-6">
            <div className="space-y-1">
              <Link 
                href="/why-lapland" 
                className={`group flex items-center px-4 py-3 rounded-xl text-base font-light transition-all duration-300 transform hover:scale-105 active:scale-95 ${
                  isActive('/why-lapland') 
                    ? 'text-cyan-300 bg-cyan-500/10 border border-cyan-400/20' 
                    : 'text-white/80 hover:text-cyan-300 hover:bg-white/5'
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <span className="text-lg mr-3 group-hover:scale-110 transition-transform duration-300">🏔️</span>
                Why Lapland
                {isActive('/why-lapland') && (
                  <div className="ml-auto w-2 h-2 bg-cyan-300 rounded-full animate-pulse"></div>
                )}
              </Link>
              
              <Link 
                href="/finland/northern-lights" 
                className={`group flex items-center px-4 py-3 rounded-xl text-base font-light transition-all duration-300 transform hover:scale-105 active:scale-95 ${
                  isActive('/finland') 
                    ? 'text-cyan-300 bg-cyan-500/10 border border-cyan-400/20' 
                    : 'text-white/80 hover:text-cyan-300 hover:bg-white/5'
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <span className="text-lg mr-3 group-hover:scale-110 transition-transform duration-300">🇫🇮</span>
                Finland
                {isActive('/finland') && (
                  <div className="ml-auto w-2 h-2 bg-cyan-300 rounded-full animate-pulse"></div>
                )}
              </Link>
              
              <Link 
                href="/sweden/northern-lights" 
                className={`group flex items-center px-4 py-3 rounded-xl text-base font-light transition-all duration-300 transform hover:scale-105 active:scale-95 ${
                  isActive('/sweden') 
                    ? 'text-cyan-300 bg-cyan-500/10 border border-cyan-400/20' 
                    : 'text-white/80 hover:text-cyan-300 hover:bg-white/5'
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <span className="text-lg mr-3 group-hover:scale-110 transition-transform duration-300">🇸🇪</span>
                Sweden
                {isActive('/sweden') && (
                  <div className="ml-auto w-2 h-2 bg-cyan-300 rounded-full animate-pulse"></div>
                )}
              </Link>
              
              <Link 
                href="/norway/northern-lights" 
                className={`group flex items-center px-4 py-3 rounded-xl text-base font-light transition-all duration-300 transform hover:scale-105 active:scale-95 ${
                  isActive('/norway') 
                    ? 'text-cyan-300 bg-cyan-500/10 border border-cyan-400/20' 
                    : 'text-white/80 hover:text-cyan-300 hover:bg-white/5'
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <span className="text-lg mr-3 group-hover:scale-110 transition-transform duration-300">🇳🇴</span>
                Norway
                {isActive('/norway') && (
                  <div className="ml-auto w-2 h-2 bg-cyan-300 rounded-full animate-pulse"></div>
                )}
              </Link>

              <Link 
                href="/aurora-lab" 
                className={`group flex items-center px-4 py-3 rounded-xl text-base font-light transition-all duration-300 transform hover:scale-105 active:scale-95 ${
                  isActive('/aurora-lab') 
                    ? 'text-cyan-300 bg-cyan-500/10 border border-cyan-400/20' 
                    : 'text-white/80 hover:text-cyan-300 hover:bg-white/5'
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <span className="text-lg mr-3 group-hover:scale-110 transition-transform duration-300">🔬</span>
                Aurora Lab
                {isActive('/aurora-lab') && (
                  <div className="ml-auto w-2 h-2 bg-cyan-300 rounded-full animate-pulse"></div>
                )}
              </Link>

              <Link 
                href="/guide"
                className={`group flex items-center px-4 py-3 rounded-xl text-base font-light transition-all duration-300 transform hover:scale-105 active:scale-95 ${
                  isActive('/guide') 
                    ? 'text-cyan-300 bg-cyan-500/10 border border-cyan-400/20' 
                    : 'text-white/80 hover:text-cyan-300 hover:bg-white/5'
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <span className="text-lg mr-3 group-hover:scale-110 transition-transform duration-300">📚</span>
                Guide
                {isActive('/guide') && (
                  <div className="ml-auto w-2 h-2 bg-cyan-300 rounded-full animate-pulse"></div>
                )}
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}