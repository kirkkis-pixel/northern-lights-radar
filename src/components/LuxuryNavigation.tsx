'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function LuxuryNavigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'Lapland', href: '/lapland/northern-lights' },
    { name: 'Cities', href: '/finland/northern-lights' },
    { name: 'Guide', href: '/guide/how-to-see-the-northern-lights' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      isScrolled 
        ? 'bg-black/80 backdrop-blur-xl border-b border-white/10' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-8 py-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="group">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <div className="w-6 h-6 bg-white rounded-full"></div>
              </div>
              <div className="text-white">
                <div className="text-xl font-thin tracking-wider">NORTHERN LIGHTS</div>
                <div className="text-xs font-light text-white/60 tracking-[0.2em]">RADAR</div>
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-12">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="relative group text-white/80 hover:text-white transition-colors duration-300 font-light tracking-wide"
              >
                {item.name}
                <div className="absolute -bottom-1 left-0 w-0 h-px bg-gradient-to-r from-cyan-400 to-blue-500 group-hover:w-full transition-all duration-300"></div>
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Link
              href="/lapland/northern-lights"
              className="group relative px-8 py-3 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-400/30 rounded-full text-white font-light tracking-wide hover:from-cyan-500/30 hover:to-blue-500/30 transition-all duration-300 hover:scale-105"
            >
              <span className="relative z-10">Explore Now</span>
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden text-white/80 hover:text-white transition-colors duration-300"
          >
            <div className="w-6 h-6 flex flex-col justify-center space-y-1">
              <div className={`w-full h-px bg-current transition-all duration-300 ${
                isMobileMenuOpen ? 'rotate-45 translate-y-1.5' : ''
              }`}></div>
              <div className={`w-full h-px bg-current transition-all duration-300 ${
                isMobileMenuOpen ? 'opacity-0' : ''
              }`}></div>
              <div className={`w-full h-px bg-current transition-all duration-300 ${
                isMobileMenuOpen ? '-rotate-45 -translate-y-1.5' : ''
              }`}></div>
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`lg:hidden transition-all duration-300 overflow-hidden ${
          isMobileMenuOpen ? 'max-h-96 opacity-100 mt-6' : 'max-h-0 opacity-0'
        }`}>
          <div className="bg-black/50 backdrop-blur-xl rounded-2xl border border-white/10 p-6">
            <div className="space-y-6">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block text-white/80 hover:text-white transition-colors duration-300 font-light tracking-wide text-lg"
                >
                  {item.name}
                </Link>
              ))}
              <div className="pt-4 border-t border-white/10">
                <Link
                  href="/lapland/northern-lights"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block w-full text-center px-6 py-3 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-400/30 rounded-full text-white font-light tracking-wide"
                >
                  Explore Now
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
