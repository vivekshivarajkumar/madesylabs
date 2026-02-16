
import React, { useState } from 'react';

interface Tab {
  id: string;
  label: string;
  hasNotification?: boolean;
}

export const SegmentControl: React.FC = () => {
  const [activeTab, setActiveTab] = useState('theory');
  
  const tabs: Tab[] = [
    { id: 'theory', label: 'Theory' },
    { id: 'implementation', label: 'Implementation' },
    { id: 'interview', label: 'Interview Qs', hasNotification: true },
  ];

  return (
    <div className="w-full max-w-2xl bg-[#08080c] border border-white/5 px-6 py-4 flex items-center justify-between rounded-sm shadow-xl">
      <div className="flex items-center bg-black/40 p-1 rounded-sm border border-white/5">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`relative flex items-center gap-2 px-6 py-2.5 font-mono text-[13px] tracking-tight transition-all rounded-sm ${
              activeTab === tab.id 
                ? 'bg-[#1a1a24] text-white shadow-lg' 
                : 'text-white/40 hover:text-white'
            }`}
          >
            {tab.label}
            {tab.hasNotification && (
              <span className="w-1.5 h-1.5 bg-[#FF4B5C] rounded-full shadow-[0_0_8px_rgba(255,75,92,0.6)]"></span>
            )}
          </button>
        ))}
      </div>
      
      <button className="text-white/30 hover:text-primary transition-colors pr-2">
        <span className="material-symbols-outlined text-xl">bookmark</span>
      </button>
    </div>
  );
};
