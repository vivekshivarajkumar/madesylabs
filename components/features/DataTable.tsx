
import React from 'react';

export const DataTable: React.FC = () => {
  const data = [
    { id: '0xDE12', module: 'CORE_SYNC', status: 'ACTIVE', latency: '12ms', integrity: '0.992' },
    { id: '0xDE45', module: 'GEO_VECTOR', status: 'STABLE', latency: '45ms', integrity: '0.985' },
    { id: '0xDE90', module: 'NEURAL_LINK', status: 'STANDBY', latency: '120ms', integrity: '0.941' },
    { id: '0xDEFA', module: 'BUFFER_X86', status: 'ALERT', latency: '2s', integrity: '0.420' },
  ];

  return (
    <div className="w-full bg-void border border-white/5 rounded-sm overflow-hidden shadow-2xl">
      <table className="w-full text-left border-collapse">
        <thead>
          <tr className="bg-white/[0.02] border-b border-white/10">
            {['ADDR', 'MODULE_IDENTIFIER', 'STATUS', 'LATENCY', 'INTEGRITY'].map((header) => (
              <th key={header} className="px-6 py-4 text-[10px] font-black text-white/40 uppercase tracking-[0.2em]">{header}</th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-white/5">
          {data.map((row, i) => (
            <tr key={i} className="group hover:bg-primary/[0.02] transition-colors cursor-default">
              <td className="px-6 py-4 font-mono text-[11px] text-primary/60">{row.id}</td>
              <td className="px-6 py-4 font-bold text-[12px] text-white/80">{row.module}</td>
              <td className="px-6 py-4">
                <span className={`text-[10px] font-black px-2 py-0.5 rounded-sm ${
                  row.status === 'ALERT' ? 'bg-[#FF4B5C]/10 text-[#FF4B5C]' : 
                  row.status === 'ACTIVE' ? 'bg-primary/10 text-primary' : 'bg-white/5 text-white/40'
                }`}>
                  {row.status}
                </span>
              </td>
              <td className="px-6 py-4 font-mono text-[11px] text-white/40">{row.latency}</td>
              <td className="px-6 py-4 font-mono text-[11px] text-white/60">{row.integrity}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
