
import React from 'react';

export const HUDCard: React.FC = () => {
  return (
    <div className="hud-clip bg-primary/5 p-8 relative overflow-hidden group border border-primary/20 glow-border">
      <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
        <span className="material-symbols-outlined text-9xl text-primary">analytics</span>
      </div>
      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
        <div className="space-y-2">
          <h3 className="text-white text-xl font-bold uppercase tracking-tighter">Module HUD Card</h3>
          <p className="text-primary/60 text-xs leading-relaxed max-w-xs">High-precision container for telemetry data.</p>
        </div>
        <div className="flex items-center gap-6 border-l border-primary/20 pl-8">
          <div className="text-5xl font-black text-primary glow-text">0.98</div>
          <div className="text-[9px] font-mono leading-tight text-white/40 uppercase tracking-widest">STABILITY_INDEX<br />CALCULATED_V2</div>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex-1 bg-primary/10 h-11 flex items-center px-4 rounded-sm border border-primary/30 relative overflow-hidden">
             <div className="absolute top-0 left-0 h-full w-1 bg-primary/40 animate-pulse"></div>
            <span className="text-[10px] font-mono text-primary tracking-widest">PATH_FINDER_INIT</span>
          </div>
          <button className="bg-primary size-11 flex items-center justify-center rounded-sm hover:brightness-110 transition-all">
            <span className="material-symbols-outlined text-void font-black">play_arrow</span>
          </button>
        </div>
      </div>
    </div>
  );
};
