
import React from 'react';

interface LogEntry {
  timestamp: string;
  level: 'INFO' | 'WARN' | 'CRIT';
  message: string;
}

export const TerminalLog: React.FC = () => {
  const logs: LogEntry[] = [
    { timestamp: '12:04:22', level: 'INFO', message: 'METRICS_ENGINE_INITIALIZED' },
    { timestamp: '12:04:23', level: 'INFO', message: 'SYNC_PROTOCOL_STABLE (0.982s)' },
    { timestamp: '12:04:45', level: 'WARN', message: 'LATENCY_SPIKE_DETECTED: REGION_04' },
    { timestamp: '12:05:01', level: 'INFO', message: 'RECALIBRATING_SENSORS...' },
    { timestamp: '12:05:12', level: 'CRIT', message: 'CORE_BUFFER_OVERFLOW_THREAT' },
    { timestamp: '12:05:13', level: 'INFO', message: 'MITIGATION_ACTIVE: LOAD_BALANCING_RETRY' },
  ];

  const getLevelColor = (level: string) => {
    switch (level) {
      case 'CRIT': return 'text-[#FF4B5C] font-black';
      case 'WARN': return 'text-secondary';
      default: return 'text-primary/60';
    }
  };

  return (
    <div className="bg-black/60 border border-white/5 rounded-sm overflow-hidden font-mono flex flex-col h-64 shadow-2xl">
      <div className="flex items-center gap-2 px-4 py-2 border-b border-white/5 bg-void/50">
        <div className="size-2 rounded-full bg-primary animate-pulse"></div>
        <span className="text-[10px] font-bold text-white/40 tracking-[0.2em] uppercase">System_Output_Stream</span>
      </div>
      <div className="p-4 flex-1 overflow-y-auto space-y-1 scrollbar-hide">
        {logs.map((log, i) => (
          <div key={i} className="flex gap-4 text-[11px] leading-tight group hover:bg-white/5 transition-colors px-2 py-0.5">
            <span className="text-white/20 whitespace-nowrap">[{log.timestamp}]</span>
            <span className={`w-12 ${getLevelColor(log.level)}`}>{log.level}</span>
            <span className="text-white/60 tracking-tight">{log.message}</span>
          </div>
        ))}
        <div className="flex gap-2 text-[11px] animate-pulse px-2 py-0.5">
          <span className="text-primary">&gt;</span>
          <span className="w-2 h-4 bg-primary/40"></span>
        </div>
      </div>
    </div>
  );
};
