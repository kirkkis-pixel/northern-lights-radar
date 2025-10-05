export default function Footer() {
  return (
    <footer className="bg-black border-t border-white/10">
      <div className="max-w-8xl mx-auto px-12 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center relative">
                {/* Radar circles */}
                <div className="absolute inset-1 rounded-full border border-white/30"></div>
                <div className="absolute inset-2 rounded-full border border-white/20"></div>
                {/* Center dot */}
                <div className="w-1 h-1 bg-white/80 rounded-full z-10"></div>
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
              <li><a href="/guide/best-time-to-visit" className="text-white/60 hover:text-white transition-colors">Best Time to Visit</a></li>
              <li><a href="/guide/ideal-conditions" className="text-white/60 hover:text-white transition-colors">Ideal Conditions</a></li>
              <li><a href="/guide/where-to-look" className="text-white/60 hover:text-white transition-colors">Where to Look</a></li>
              <li><a href="/guide/what-to-wear" className="text-white/60 hover:text-white transition-colors">What to Wear</a></li>
              <li><a href="/guide/equipment-checklist" className="text-white/60 hover:text-white transition-colors">Equipment Checklist</a></li>
              <li><a href="/guide/safety-tips" className="text-white/60 hover:text-white transition-colors">Safety Tips</a></li>
              <li><a href="/guide/perfect-locations" className="text-white/60 hover:text-white transition-colors">Perfect Locations</a></li>
              <li><a href="/guide/photography-tips" className="text-white/60 hover:text-white transition-colors">Photography Tips</a></li>
              <li><a href="/guide/camera-settings" className="text-white/60 hover:text-white transition-colors">Camera Settings</a></li>
              <li><a href="/guide/best-time-in-finland" className="text-white/60 hover:text-white transition-colors">Best Time in Finland</a></li>
              <li><a href="/guide/aurora-myths" className="text-white/60 hover:text-white transition-colors">Aurora Myths</a></li>
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