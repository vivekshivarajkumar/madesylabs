
import React from 'react';
import { Mafs } from 'mafs';
import { HUDCard } from './HUDCard';
import { MarimoCell } from './MarimoCell';
import { StatusBadge } from '../ui/StatusBadge';
import { D3Distribution } from '../shared/D3Distribution';
import { P5Integration } from '../shared/P5Integration';
import { MathGraph } from '../shared/MathGraph';
import { InterCurveIntegration } from '../../graphs/InterCurveIntegration';
import { GaussianMafs } from '../../graphs/GaussianMafs';
import { LinearAlgebra } from '../../graphs/LinearAlgebra';
import { SineSlopeProtocol } from '../../graphs/SineSlopeProtocol';

export const ML55: React.FC = () => {
  return (
    <main className="flex-1 overflow-y-auto p-12 space-y-24 scroll-smooth bg-void">
      <section className="max-w-4xl space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
        <div className="inline-block px-4 py-1.5 border border-secondary/30 rounded-full bg-secondary/5">
          <p className="text-[10px] text-secondary font-bold uppercase tracking-[0.4em]">Mathematical Foundations</p>
        </div>
        <h1 className="text-6xl font-black leading-[1.1] tracking-tighter uppercase">ML <span className="text-secondary glow-text">55</span></h1>
        <p className="text-primary/60 text-lg leading-relaxed font-light max-w-2xl">Visual protocol for distributions, calculus, and linear geometry.</p>
      </section>

      <section className="space-y-12">
        <div className="flex items-center gap-6 border-b border-primary/20 pb-5">
          <h2 className="text-3xl font-black text-white uppercase tracking-tighter">01. Statistics Engine</h2>
          <StatusBadge type="SUCCESS" text="Dual Engines Active" />
        </div>
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-12">
          <MathGraph title="Gaussian PDF (D3)" subtitle="Industrial-Grade Axis Scaling"><D3Distribution /></MathGraph>
          <MathGraph title="Gaussian PDF (Mafs)" subtitle="Interactive Inflection Points"><Mafs height={300} viewBox={{ x: [-5, 5], y: [-0.4, 1.4] }}><GaussianMafs /></Mafs></MathGraph>
        </div>
      </section>

      <section className="space-y-12">
        <div className="flex items-center gap-6 border-b border-primary/20 pb-5">
          <h2 className="text-3xl font-black text-white uppercase tracking-tighter">02. Calculus & Area</h2>
          <StatusBadge type="NEUTRAL" text="Simulating Riemann Sum" />
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <MathGraph title="Area Under Curve" subtitle="P5.js Riemann Integration Logic"><P5Integration /></MathGraph>
          <MathGraph title="Area Between Curves" subtitle="Mafs Integration Protocol"><Mafs height={300} viewBox={{ x: [-4, 4], y: [-0.5, 4] }}><InterCurveIntegration /></Mafs></MathGraph>
          <div className="col-span-full"><HUDCard /></div>
        </div>
      </section>

      <section className="space-y-12">
        <div className="flex items-center gap-6 border-b border-primary/20 pb-5">
          <h2 className="text-3xl font-black text-white uppercase tracking-tighter">03. Geometry & Differentials</h2>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <MathGraph title="Vector Transformations" subtitle="Mafs Geometry Engine"><Mafs height={300} viewBox={{ x: [-2, 2], y: [-2, 2] }}><LinearAlgebra /></Mafs></MathGraph>
          <MathGraph title="Sine Slope Protocol" subtitle="Tangent Vector Simulation">
            <Mafs height={300} viewBox={{ x: [-Math.PI, Math.PI], y: [-2, 2] }}>
              <SineSlopeProtocol />
            </Mafs>
          </MathGraph>
          <div className="col-span-full bg-[#0a0a0f] border border-white/5 rounded-sm p-8 flex flex-col justify-between">
            <h4 className="text-[10px] font-black text-white/30 uppercase tracking-[0.4em] mb-4">Tensor Registry</h4>
            <MarimoCell cellId="0xLINALG" code={['import torch', 'A = torch.tensor([[1.0, 0.2], [0.2, 1.0]])', 'evals, evecs = torch.linalg.eig(A)', 'print(f"PCA_RESULTS: {evals.real}")']} />
          </div>
        </div>
      </section>
    </main>
  );
};
