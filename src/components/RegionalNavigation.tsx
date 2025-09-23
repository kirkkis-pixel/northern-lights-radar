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
      <div className="max-w-8xl mx-auto px-12 py-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="w-10 h-10 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-xl flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
              <span className="text-white font-bold text-lg">NLR</span>
            </div>
            <div className="hidden md:block">
              <h1 className="text-xl font-thin text-white group-hover:text-cyan-300 transition-colors">
                Northern Lights Radar
              </h1>
              <p className="text-xs text-white/60 font-light">Lapland Region</p>
            </div>
          </Link>

          {/* Main Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <Link 
              href="/" 
              className={`text-sm font-light transition-colors duration-300 ${
                isActive('/') 
                  ? 'text-cyan-300' 
                  : 'text-white/70 hover:text-white'
              }`}
            >
              Home
            </Link>
            
            <Link 
              href="/finland/northern-lights" 
              className={`text-sm font-light transition-colors duration-300 ${
                isActive('/finland') 
                  ? 'text-cyan-300' 
                  : 'text-white/70 hover:text-white'
              }`}
            >
              Finland
            </Link>
            
            <div className="relative group">
              <button className="flex items-center space-x-1 text-sm font-light text-white/70 hover:text-white transition-colors duration-300">
                <span>Regions</span>
                <svg className="w-4 h-4 transition-transform duration-300 group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              {/* Dropdown Menu */}
              <div className="absolute top-full left-0 mt-2 w-56 bg-black/90 backdrop-blur-md rounded-2xl border border-white/10 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                <div className="p-4 space-y-3">
                  <Link 
                    href="/sweden/northern-lights" 
                    className={`flex items-center space-x-3 p-3 rounded-xl transition-colors duration-300 ${
                      isActive('/sweden') 
                        ? 'bg-cyan-500/20 text-cyan-300' 
                        : 'hover:bg-white/5 text-white/70 hover:text-white'
                    }`}
                  >
                    <div className="w-8 h-8 bg-yellow-500/20 rounded-lg flex items-center justify-center">
                      <span className="text-yellow-300 text-sm font-bold">SE</span>
                    </div>
                    <div>
                      <div className="font-light">Sweden</div>
                      <div className="text-xs text-white/50">3 cities</div>
                    </div>
                  </Link>
                  
                  <Link 
                    href="/norway/northern-lights" 
                    className={`flex items-center space-x-3 p-3 rounded-xl transition-colors duration-300 ${
                      isActive('/norway') 
                        ? 'bg-cyan-500/20 text-cyan-300' 
                        : 'hover:bg-white/5 text-white/70 hover:text-white'
                    }`}
                  >
                    <div className="w-8 h-8 bg-red-500/20 rounded-lg flex items-center justify-center">
                      <span className="text-red-300 text-sm font-bold">NO</span>
                    </div>
                    <div>
                      <div className="font-light">Norway</div>
                      <div className="text-xs text-white/50">4 cities</div>
                    </div>
                  </Link>
                </div>
              </div>
            </div>

            <Link 
              href="/guide/how-to-see-the-northern-lights" 
              className={`text-sm font-light transition-colors duration-300 ${
                isActive('/guide') 
                  ? 'text-cyan-300' 
                  : 'text-white/70 hover:text-white'
              }`}
            >
              Guide
            </Link>
          </div>

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
