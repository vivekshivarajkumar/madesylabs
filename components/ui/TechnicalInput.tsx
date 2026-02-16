
import React from 'react';

export const TechnicalInput: React.FC<{ label: string, placeholder?: string }> = ({ label, placeholder }) => {
  return (
    <div className="flex flex-col gap-2 w-full max-w-sm">
      <label className="text-[10px] font-black text-white/30 uppercase tracking-[0.3em]">{label}</label>
      <div className="relative group">
        <div className="absolute left-4 top-1/2 -translate-y-1/2 text-primary/40 font-mono text-xs select-none">&gt;</div>
        <input 
          type="text" 
          placeholder={placeholder}
          className="w-full bg-white/[0.03] border border-white/10 rounded-sm py-3 pl-10 pr-4 text-sm font-mono text-white placeholder:text-white/10 focus:outline-none focus:border-primary/40 focus:bg-primary/[0.02] transition-all"
        />
        <div className="absolute bottom-0 left-0 w-0 h-[1px] bg-primary group-focus-within:w-full transition-all duration-500"></div>
      </div>
    </div>
  );
};
