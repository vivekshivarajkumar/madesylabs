
import React from 'react';

export const AppFooter: React.FC = () => {
  return (
    <footer className="h-10 bg-void border-t border-white/5 px-10 flex items-center justify-between z-50">
      <div className="flex items-center gap-8">
        <div className="flex items-center gap-2">
          <div className="size-1.5 rounded-full bg-primary animate-pulse"></div>
          <span className="text-[9px] font-black text-primary uppercase tracking-[0.2em]">System Online</span>
        </div>
        <div className="flex items-center gap-6 text-white/20 text-[9px] font-mono uppercase tracking-widest">
          <span>Latency: 12ms</span>
          <span>V 2.5.0</span>
        </div>
      </div>
      <div className="flex items-center gap-8">
        {['Help', 'Docs', 'Security'].map((link) => (
          <button key={link} className="text-[9px] font-black text-white/30 uppercase tracking-[0.2em] hover:text-primary transition-colors">
            {link}
          </button>
        ))}
      </div>
    </footer>
  );
};
