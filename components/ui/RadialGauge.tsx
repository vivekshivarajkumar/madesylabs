
import React from 'react';

interface RadialGaugeProps {
  value: number;
  label: string;
  color?: string;
}

export const RadialGauge: React.FC<RadialGaugeProps> = ({ value, label, color = '#13EC92' }) => {
  const radius = 45;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (value / 100) * circumference;

  return (
    <div className="flex flex-col items-center gap-4 group">
      <div className="relative size-32 flex items-center justify-center">
        <svg className="absolute inset-0 size-full -rotate-90">
          <circle cx="64" cy="64" r={radius} stroke="currentColor" strokeWidth="2" fill="transparent" className="text-white/5" />
          <circle cx="64" cy="64" r={radius} stroke={color} strokeWidth="4" fill="transparent" strokeDasharray={circumference} strokeDashoffset={offset} strokeLinecap="square" className="transition-all duration-1000 ease-out" style={{ filter: `drop-shadow(0 0 6px ${color}44)` }} />
        </svg>
        <div className="flex flex-col items-center">
          <span className="text-2xl font-black text-white tracking-tighter">{value}%</span>
        </div>
      </div>
      <span className="text-[10px] font-mono font-bold text-white/30 uppercase tracking-[0.2em] group-hover:text-primary transition-colors">
        {label}
      </span>
    </div>
  );
};
