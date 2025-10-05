'use client';

export default function AnimatedRadar() {
  return (
    <div className="py-8 bg-gradient-to-b from-black via-slate-900 to-black relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.02'%3E%3Cpath d='M20 20c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10zm10 0c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10z'/%3E%3C/g%3E%3C/svg%3E")`
      }}></div>
      
      <div className="max-w-6xl mx-auto px-12 text-center relative z-10">
        {/* Animated Radar */}
        <div className="flex justify-center mb-8">
          <div className="relative w-32 h-32 md:w-40 md:h-40">
            {/* Outer Circle */}
            <div className="absolute inset-0 rounded-full border border-white/20"></div>
            
            {/* Middle Circle */}
            <div className="absolute inset-8 rounded-full border border-white/15"></div>
            
            {/* Inner Circle */}
            <div className="absolute inset-16 rounded-full border border-white/10"></div>
            
            {/* Rotating Radar Sweep */}
            <div className="absolute inset-0 rounded-full overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent transform origin-center animate-spin" 
                   style={{ animationDuration: '3s' }}>
                <div className="w-full h-full bg-gradient-to-r from-transparent via-cyan-400/20 to-transparent"></div>
              </div>
            </div>
            
            {/* Secondary Sweep */}
            <div className="absolute inset-0 rounded-full overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-400/20 to-transparent transform origin-center animate-spin" 
                   style={{ animationDuration: '4s', animationDirection: 'reverse' }}>
                <div className="w-full h-full bg-gradient-to-r from-transparent via-blue-400/15 to-transparent"></div>
              </div>
            </div>
            
            {/* Center Dot */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-white/80 rounded-full z-10"></div>
            
            {/* Pulsing Center Ring */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-6 h-6 border border-white/40 rounded-full animate-ping"></div>
            
            {/* Signal Dots */}
            <div className="absolute top-1/4 left-1/3 w-1 h-1 bg-cyan-400 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
            <div className="absolute top-1/3 right-1/4 w-1 h-1 bg-blue-400 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
            <div className="absolute bottom-1/3 left-1/4 w-1 h-1 bg-purple-400 rounded-full animate-pulse" style={{ animationDelay: '1.5s' }}></div>
            <div className="absolute bottom-1/4 right-1/3 w-1 h-1 bg-green-400 rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
            
            {/* Grid Lines */}
            <div className="absolute inset-0">
              {/* Vertical Line */}
              <div className="absolute top-1/4 bottom-1/4 left-1/2 w-px bg-white/10 transform -translate-x-1/2"></div>
              {/* Horizontal Line */}
              <div className="absolute left-1/4 right-1/4 top-1/2 h-px bg-white/10 transform -translate-y-1/2"></div>
              {/* Diagonal Lines */}
              <div className="absolute inset-1/4">
                <div className="absolute top-0 right-0 w-full h-full">
                  <div className="absolute top-0 right-0 w-px h-full bg-white/5 transform rotate-45 origin-top"></div>
                  <div className="absolute top-0 right-0 w-full h-px bg-white/5 transform -rotate-45 origin-right"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Status Indicators */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-2xl mx-auto">
          <div className="flex items-center justify-center space-x-3">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            <span className="text-sm text-white/70 font-light">Space Weather Active</span>
          </div>
          <div className="flex items-center justify-center space-x-3">
            <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
            <span className="text-sm text-white/70 font-light">Aurora Activity Detected</span>
          </div>
          <div className="flex items-center justify-center space-x-3">
            <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
            <span className="text-sm text-white/70 font-light">Real-time Monitoring</span>
          </div>
        </div>
      </div>
    </div>
  );
}
