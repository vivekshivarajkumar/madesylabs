
import React, { useState } from 'react';

export const TechToggle: React.FC<{ label: string }> = ({ label }) => {
  const [active, setActive] = useState(true);
  return (
    <div className="flex items-center justify-between p-4 bg-void border border-white/5 rounded-sm hover:border-primary/20 transition-all cursor-pointer group" onClick={() => setActive(!active)}>
      <span className="text-[10px] font-black text-white/40 uppercase tracking-widest group-hover:text-white transition-colors">{label}</span>
      <div className={`w-10 h-5 rounded-sm p-1 transition-all flex items-center ${active ? 'bg-primary' : 'bg-white/10'}`}>
        <div className={`size-3 rounded-sm transition-all ${active ? 'translate-x-5 bg-void' : 'translate-x-0 bg-white/40'}`}></div>
      </div>
    </div>
  );
};
