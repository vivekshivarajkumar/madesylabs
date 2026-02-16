
import React from 'react';

const FlowerLogo = () => (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="size-6 text-primary drop-shadow-[0_0_8px_rgba(19,236,146,0.6)]">
    <circle cx="12" cy="7" r="4" stroke="currentColor" strokeWidth="1.5" className="opacity-80" />
    <circle cx="12" cy="17" r="4" stroke="currentColor" strokeWidth="1.5" className="opacity-80" />
    <circle cx="7" cy="12" r="4" stroke="currentColor" strokeWidth="1.5" className="opacity-80" />
    <circle cx="17" cy="12" r="4" stroke="currentColor" strokeWidth="1.5" className="opacity-80" />
    <circle cx="12" cy="12" r="2.5" fill="currentColor" />
  </svg>
);

interface HeaderProps {
  activeView: string;
  onNavigate: (view: string) => void;
}

export const AppHeader: React.FC<HeaderProps> = ({ activeView, onNavigate }) => {
  const navItems = [
    { label: 'ML55', view: 'ML55' },
    { label: 'CONCEPT LAB', view: 'DESIGN SYSTEM' }
  ];

  return (
    <header className="flex items-center justify-between border-b border-white/10 px-10 h-20 bg-void/90 backdrop-blur-xl sticky top-0 z-50">
      <div className="flex items-center gap-14 h-full">
        <div onClick={() => onNavigate('DESIGN SYSTEM')} className="flex items-center gap-4 text-primary group cursor-pointer select-none">
          <div className="size-9 flex items-center justify-center border border-primary/40 rounded-sm group-hover:border-primary transition-colors">
            <FlowerLogo />
          </div>
          <h2 className="text-white text-xl font-bold leading-tight tracking-[-0.03em] glow-text uppercase">First Principles</h2>
        </div>
        <nav className="hidden xl:flex items-center gap-10 h-full">
          {navItems.map((item) => (
            <button key={item.label} onClick={() => onNavigate(item.view)} className={`text-[11px] font-black uppercase tracking-[0.2em] transition-all h-full flex items-center px-1 relative ${activeView === item.view ? 'text-primary glow-text border-b-2 border-primary' : 'text-white/30 hover:text-white/60'}`}>
              {item.label}
            </button>
          ))}
        </nav>
      </div>
      <div className="flex items-center gap-8">
        <div className="relative group hidden lg:block">
          <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-primary/40 text-lg group-focus-within:text-primary transition-colors">search</span>
          <input type="text" placeholder="SEARCH_DATABASE..." className="bg-white/5 border border-white/10 rounded-sm py-2.5 pl-12 pr-6 text-[10px] font-mono tracking-widest focus:outline-none focus:border-primary/40 focus:bg-white/[0.08] transition-all w-[320px] placeholder:text-white/10" />
        </div>
        <div className="relative size-10 cursor-pointer group">
          <div className="h-full w-full bg-cover bg-center rounded-full overflow-hidden border border-white/10 ring-1 ring-primary/20 group-hover:ring-primary/50 transition-all">
             <img src="https://picsum.photos/seed/user-first/100/100" alt="Profile" className="w-full h-full object-cover grayscale opacity-80" />
          </div>
          <div className="absolute -bottom-0.5 -right-0.5 size-3 bg-primary rounded-full border-2 border-void shadow-[0_0_8px_rgba(19,236,146,0.6)]"></div>
        </div>
      </div>
    </header>
  );
};
