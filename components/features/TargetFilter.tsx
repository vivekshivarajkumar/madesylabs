
import React, { useState } from 'react';

interface CompanySource {
  id: string;
  label: string;
}

export const TargetFilter: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const sources: CompanySource[] = [
    { id: 'google', label: 'GOOGLE' },
    { id: 'meta', label: 'META' },
    { id: 'openai', label: 'OPENAI' },
    { id: 'netflix', label: 'NETFLIX' },
    { id: 'anthropic', label: 'ANTHROPIC' },
  ];

  return (
    <div className="w-full space-y-4 select-none">
      <div className="flex items-center justify-between border-b border-white/5 pb-2">
        <h3 className="text-[10px] font-black text-primary uppercase tracking-[0.4em]">Target Filter</h3>
        <span className="text-[9px] font-mono text-white/20 uppercase tracking-[0.2em]">Select_Company_To_Filter</span>
      </div>

      <div className="flex flex-wrap gap-2">
        <button
          onClick={() => setActiveFilter('all')}
          className={`flex items-center gap-3 px-5 py-2.5 rounded-sm text-[10px] font-black uppercase tracking-widest transition-all border ${
            activeFilter === 'all'
              ? 'bg-primary/10 border-primary text-white'
              : 'bg-white/5 border-white/5 text-white/30 hover:text-white/60'
          }`}
        >
          <span className="material-symbols-outlined text-sm leading-none text-primary">all_inclusive</span>
          All_Sources
        </button>

        {sources.map((source) => (
          <button
            key={source.id}
            onClick={() => setActiveFilter(source.id)}
            className={`flex items-center gap-3 px-5 py-2.5 rounded-sm text-[10px] font-black uppercase tracking-widest transition-all border ${
              activeFilter === source.id
                ? 'bg-primary/10 border-primary text-white'
                : 'bg-white/5 border-white/5 text-white/30 hover:text-white/60'
            }`}
          >
            <div className={`size-3.5 rounded-sm flex items-center justify-center transition-colors ${
              activeFilter === source.id ? 'bg-primary/40' : 'bg-white/10'
            }`}>
              <div className="size-1.5 bg-void/40 rounded-[1px]"></div>
            </div>
            {source.label}
          </button>
        ))}
      </div>
    </div>
  );
};
