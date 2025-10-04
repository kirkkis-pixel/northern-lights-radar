export default function Footer() {
  return (
    <footer className="bg-black border-t border-white/10">
      <div className="max-w-8xl mx-auto px-12 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center">
                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <span className="text-white font-light text-lg">Northern Lights Radar</span>
            </div>
            <p className="text-white/60 font-light text-sm leading-relaxed">
              Real-time aurora forecasts for Lapland destinations
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-light text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="/finland/northern-lights" className="text-white/60 hover:text-white transition-colors">Finland</a></li>
              <li><a href="/sweden/northern-lights" className="text-white/60 hover:text-white transition-colors">Sweden</a></li>
              <li><a href="/norway/northern-lights" className="text-white/60 hover:text-white transition-colors">Norway</a></li>
              <li><a href="/aurora-lab" className="text-white/60 hover:text-white transition-colors">Aurora Lab</a></li>
            </ul>
          </div>

          {/* Guides */}
          <div>
            <h3 className="text-white font-light text-lg mb-4">Guides</h3>
            <ul className="space-y-2">
              <li><a href="/guide/how-to-see-the-northern-lights" className="text-white/60 hover:text-white transition-colors">How to See</a></li>
              <li><a href="/guide/photography-tips" className="text-white/60 hover:text-white transition-colors">Photography</a></li>
              <li><a href="/guide/what-to-wear" className="text-white/60 hover:text-white transition-colors">What to Wear</a></li>
              <li><a href="/guide/safety-tips" className="text-white/60 hover:text-white transition-colors">Safety Tips</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-white font-light text-lg mb-4">Company</h3>
            <ul className="space-y-2">
              <li><a href="/about" className="text-white/60 hover:text-white transition-colors">About</a></li>
              <li><a href="/data-sources" className="text-white/60 hover:text-white transition-colors">Data Sources</a></li>
              <li><a href="/methodology" className="text-white/60 hover:text-white transition-colors">Methodology</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-white/40 font-light text-sm">
              © 2024 Northern Lights Radar. All rights reserved.
            </p>
            <p className="text-white/40 font-light text-sm mt-2 md:mt-0">
              Real-time data from NOAA, FMI, SMHI, and MET Norway
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

