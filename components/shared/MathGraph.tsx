
import React from 'react';

export const MathGraph: React.FC<{ title: string; subtitle: string; children: React.ReactNode }> = ({ title, subtitle, children }) => (
  <div className="bg-[#0a0a0f] border border-white/5 rounded-sm p-8 flex flex-col gap-6 group hover:border-primary/20 transition-all">
    <div className="flex justify-between items-start border-b border-white/5 pb-4">
      <div>
        <h3 className="text-white font-bold text-lg tracking-tighter uppercase">{title}</h3>
        <p className="text-[10px] font-mono text-white/20 uppercase tracking-widest">{subtitle}</p>
      </div>
      <div className="size-8 flex items-center justify-center border border-white/10 rounded-sm text-primary/40 group-hover:text-primary transition-colors">
        <span className="material-symbols-outlined text-lg">insights</span>
      </div>
    </div>
    <div className="relative flex-1 min-h-[300px] w-full bg-black/40 rounded-sm overflow-hidden border border-white/5">
      <div className="absolute inset-0 opacity-5 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle, #13EC92 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
      <div className="relative z-10 size-full flex items-center justify-center">{children}</div>
    </div>
  </div>
);
