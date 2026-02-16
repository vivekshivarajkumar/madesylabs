
import React from 'react';

export const StatusBadge: React.FC<{ type: 'SUCCESS' | 'ERROR' | 'NEUTRAL', text: string }> = ({ type, text }) => {
  const styles = {
    SUCCESS: 'bg-primary/10 text-primary border-primary/20',
    ERROR: 'bg-[#FF4B5C]/10 text-[#FF4B5C] border-[#FF4B5C]/20',
    NEUTRAL: 'bg-white/5 text-white/40 border-white/10',
  };

  return (
    <div className={`px-3 py-1 border rounded-sm text-[9px] font-black uppercase tracking-[0.2em] inline-flex items-center gap-2 ${styles[type]}`}>
      <span className={`size-1.5 rounded-full ${type === 'SUCCESS' ? 'bg-primary animate-pulse' : type === 'ERROR' ? 'bg-[#FF4B5C]' : 'bg-white/20'}`}></span>
      {text}
    </div>
  );
};
