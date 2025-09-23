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
              href="/guide/how-to-see-the-northern-lights" 
              className={`text-base font-light transition-colors duration-300 ${
                isActive('/guide') 
                  ? 'text-cyan-300' 
                  : 'text-white hover:text-cyan-300'
              }`}
            >
              Guide
            </Link>
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
