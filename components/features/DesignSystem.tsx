
import React from 'react';
import { HUDCard } from './HUDCard';
import { CodeEditor } from './CodeEditor';
import { SegmentControl } from './SegmentControl';
import { TerminalLog } from './TerminalLog';
import { RadialGauge } from '../ui/RadialGauge';
import { StatusBadge } from '../ui/StatusBadge';
import { TechToggle } from '../ui/TechToggle';
import { MarimoCell } from './MarimoCell';
import { DataTable } from './DataTable';
import { TechnicalInput } from '../ui/TechnicalInput';
import { TargetFilter } from './TargetFilter';
import { FrequencyBar } from '../ui/FrequencyBar';
import { Sparkline } from '../ui/Sparkline';
import { COLORS } from '../../lib/constants';

export const DesignSystem: React.FC = () => {
  return (
    <main className="flex-1 overflow-y-auto p-12 space-y-32 scroll-smooth">
      <section id="hero" className="max-w-4xl space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700 scroll-mt-24">
        <div className="inline-block px-4 py-1.5 border border-primary/30 rounded-full bg-primary/5">
          <p className="text-[10px] text-primary font-bold uppercase tracking-[0.4em]">Core Protocol Engine</p>
        </div>
        <h1 className="text-6xl font-black leading-[1.1] tracking-tighter uppercase">Foundational <span className="text-primary glow-text">First Principles</span></h1>
        <p className="text-primary/60 text-lg leading-relaxed font-light max-w-2xl">High-precision geometric design language.</p>
      </section>

      <section id="typography" className="space-y-16 scroll-mt-24">
        <div className="flex items-center gap-6 border-b border-primary/20 pb-5">
          <h2 className="text-3xl font-black text-white uppercase tracking-tighter">01. Typography</h2>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div className="space-y-12">
            <div>
              <p className="text-[9px] font-bold text-primary/40 uppercase tracking-[0.3em] mb-3">Display Header (H1)</p>
              <h1 className="text-6xl font-bold text-white tracking-tighter leading-none">Geometric Clarity</h1>
            </div>
          </div>
          <MarimoCell cellId="0xUI" code={['class UI_Interface:', '    def __init__(self): self.font = "Space Grotesk"', 'ui = UI_Interface()', 'print(ui.font)']} />
        </div>
      </section>

      <section id="colors" className="space-y-16 scroll-mt-24">
        <div className="flex items-center gap-6 border-b border-primary/20 pb-5">
          <h2 className="text-3xl font-black text-white uppercase tracking-tighter">02. Color Library</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {COLORS.map((color) => (
            <div key={color.name} className="flex flex-col border border-white/10 rounded-sm overflow-hidden group hover:border-primary/40 transition-all">
              <div className={`h-40 ${color.bgClass} flex items-end p-6 relative`}><span className="material-symbols-outlined text-void text-5xl absolute bottom-6 right-6 opacity-30">{color.icon}</span></div>
              <div className="p-6 bg-void/90"><p className={`${color.colorClass} font-black uppercase tracking-[0.1em] text-lg`}>{color.name}</p></div>
            </div>
          ))}
        </div>
      </section>

      <section id="components" className="space-y-16 scroll-mt-24">
        <div className="flex items-center gap-6 border-b border-primary/20 pb-5">
          <h2 className="text-3xl font-black text-white uppercase tracking-tighter">03. UI Components</h2>
        </div>
        <div className="space-y-24">
           <div className="p-8 border border-white/5 bg-white/[0.02] rounded-sm"><TargetFilter /></div>
           <div className="grid grid-cols-1 xl:grid-cols-2 gap-12 items-start">
             <div className="space-y-12"><SegmentControl /><div className="flex flex-wrap gap-12"><FrequencyBar value={92} label="VERY HIGH" /></div></div>
             <TechnicalInput label="Node Destination" placeholder="0x8F-SYNC" />
           </div>
           <div className="grid grid-cols-1 xl:grid-cols-2 gap-12"><CodeEditor /><Sparkline data={[10, 20, 15, 30, 45, 40, 60]} /></div>
           <DataTable />
        </div>
      </section>
    </main>
  );
};
