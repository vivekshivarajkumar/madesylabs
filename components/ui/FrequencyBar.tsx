
import React from 'react';

interface FrequencyBarProps {
  value: number;
  label: string;
}

export const FrequencyBar: React.FC<FrequencyBarProps> = ({ value, label }) => {
  const getColorClass = (v: number) => {
    if (v >= 80) return 'text-[#FF4B5C]';
    if (v >= 60) return 'text-[#FFB340]';
    return 'text-[#13EC92]';
  };

  const getBgClass = (v: number) => {
    if (v >= 80) return 'bg-[#FF4B5C]';
    if (v >= 60) return 'bg-[#FFB340]';
    return 'bg-[#13EC92]';
  };

  return (
    <div className="flex flex-col gap-1 w-28">
      <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden flex">
        <div 
          className={`h-full ${getBgClass(value)} transition-all duration-1000 ease-out shadow-[0_0_8px_rgba(255,75,92,0.3)]`}
          style={{ width: `${value}%` }}
        />
      </div>
      <span className={`text-[8px] font-black uppercase tracking-widest ${getColorClass(value)}`}>
        {label} ({value})
      </span>
    </div>
  );
};
