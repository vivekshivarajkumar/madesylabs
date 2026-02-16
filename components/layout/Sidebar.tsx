
import React from 'react';
import { NAV_ITEMS } from '../../lib/constants';

interface SidebarProps {
  onNavigate: (viewId: string) => void;
  activeView: string;
}

export const Sidebar: React.FC<SidebarProps> = ({ onNavigate, activeView }) => {
  const scrollToId = (id: string) => {
    if (activeView !== 'DESIGN SYSTEM') {
      onNavigate('DESIGN SYSTEM');
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) element.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      const element = document.getElementById(id);
      if (element) element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <aside className="w-64 border-r border-white/10 hidden lg:flex flex-col p-6 gap-8 bg-void/40 h-full">
      <div className="flex flex-col gap-6">
        <div>
          <p className="text-[10px] uppercase font-black text-primary/40 tracking-[0.2em] mb-4">Core Identity</p>
          <div className="flex flex-col gap-1">
            {NAV_ITEMS.filter(item => item.category === 'Identity').map((item) => (
              <button key={item.id} onClick={() => scrollToId(item.id)} className={`flex items-center gap-3 px-3 py-2 rounded-sm transition-all group w-full text-left ${activeView === 'DESIGN SYSTEM' ? 'text-white/60 hover:text-primary hover:bg-primary/5' : 'text-white/30'}`}>
                <span className="material-symbols-outlined text-lg">{item.icon}</span>
                <p className="text-sm font-bold uppercase tracking-tight">{item.label}</p>
              </button>
            ))}
          </div>
        </div>
        <div>
          <p className="text-[10px] uppercase font-black text-primary/40 tracking-[0.2em] mb-4">Interface</p>
          <div className="flex flex-col gap-1">
            {NAV_ITEMS.filter(item => item.category === 'Interface').map((item) => (
              <button key={item.id} onClick={() => scrollToId(item.id)} className="flex items-center gap-3 px-3 py-2 text-white/60 hover:text-primary hover:bg-primary/5 transition-all rounded-sm w-full text-left">
                <span className="material-symbols-outlined text-lg">{item.icon}</span>
                <p className="text-sm font-bold uppercase tracking-tight">{item.label}</p>
              </button>
            ))}
          </div>
        </div>
      </div>
      <div className="mt-auto pt-6 border-t border-white/10">
        <div className="bg-primary/5 p-4 rounded-sm border border-primary/20">
          <p className="text-[10px] text-primary font-bold mb-1">CORE LOAD</p>
          <div className="w-full bg-void h-1 rounded-full overflow-hidden">
            <div className="bg-primary h-full w-[88%] animate-pulse"></div>
          </div>
          <p className="text-[10px] text-primary/60 mt-2 text-right tracking-widest uppercase">88% Optimal</p>
        </div>
      </div>
    </aside>
  );
};
