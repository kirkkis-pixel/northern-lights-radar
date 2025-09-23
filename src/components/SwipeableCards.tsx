'use client';

export default function SwipeableCards() {
  console.log('🔄 SwipeableCards rendering...');
  
  return (
    <div className="relative max-w-4xl mx-auto">
      <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-10 border border-white/10 shadow-2xl">
        {/* Live Indicator */}
        <div className="flex items-center justify-center mb-6">
          <div className="flex items-center px-4 py-2 bg-white/5 rounded-full border border-white/10">
            <div className="w-2 h-2 bg-red-500 rounded-full mr-3 animate-pulse"></div>
            <span className="text-sm font-light text-white/70 tracking-wide">
              Live Data
            </span>
          </div>
        </div>

        {/* Card Header */}
        <div className="text-center mb-10">
          <h3 className="text-2xl font-light text-white mb-3">
            Rovaniemi
          </h3>
          <p className="text-white/60 font-extralight">
            Live Aurora Score
          </p>
        </div>
        
        {/* Score Display */}
        <div className="text-center mb-10">
          <div className="text-6xl font-thin text-white mb-4">
            85
          </div>
          <div className="inline-block px-6 py-2 rounded-full text-sm font-light text-green-400 backdrop-blur-sm border border-white/10">
            Excellent
          </div>
        </div>
        
        {/* Components Grid */}
        <div className="grid grid-cols-2 gap-6 text-center">
          <div className="space-y-2">
            <div className="text-3xl font-thin text-cyan-300/80">
              78%
            </div>
            <div className="text-sm text-white/50 font-extralight uppercase tracking-wider">Aurora Probability</div>
          </div>
          <div className="space-y-2">
            <div className="text-3xl font-thin text-cyan-300/80">
              92%
            </div>
            <div className="text-sm text-white/50 font-extralight uppercase tracking-wider">Sky Visibility</div>
          </div>
          <div className="space-y-2">
            <div className="text-3xl font-thin text-cyan-300/80">
              High
            </div>
            <div className="text-sm text-white/50 font-extralight uppercase tracking-wider">Darkness Level</div>
          </div>
          <div className="space-y-2">
            <div className="text-3xl font-thin text-cyan-300/80">
              40%
            </div>
            <div className="text-sm text-white/50 font-extralight uppercase tracking-wider">Moon Conditions</div>
          </div>
        </div>
        
        {/* Data Status */}
        <div className="mt-10 pt-6 border-t border-white/10">
          <div className="flex items-center justify-center space-x-4 text-sm text-white/40">
            <span className="font-light tracking-wide">Data sources:</span>
            <div className="flex space-x-3">
              <span className="text-green-400">Aurora</span>
              <span className="text-green-400">Weather</span>
              <span className="text-green-400">Moon</span>
              <span className="text-green-400">Solar</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Debug Info */}
      <div className="text-center mt-4">
        <p className="text-white/30 text-sm font-extralight tracking-wide">
          Component rendered at: {new Date().toLocaleTimeString()}
        </p>
      </div>
    </div>
  );
}