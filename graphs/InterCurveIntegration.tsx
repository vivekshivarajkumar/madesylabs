import React, { useMemo } from 'react';
import { Coordinates, Plot, Line, useMovablePoint } from 'mafs';

export const InterCurveIntegration: React.FC = () => {
  const aPoint = useMovablePoint([-1.5, 0], { constrain: "horizontal", color: "#13EC92" });
  const bPoint = useMovablePoint([2.5, 0], { constrain: "horizontal", color: "#A855F7" });

  const f = (x: number) => Math.sin(x) + 2;
  const g = (x: number) => Math.cos(x) + 0.5;

  const a = Math.min(aPoint.x, bPoint.x);
  const b = Math.max(aPoint.x, bPoint.x);

  // Numerical integration for display
  const calculatedArea = useMemo(() => {
    let sum = 0;
    const steps = 100;
    const dx = (b - a) / steps;
    for (let i = 0; i < steps; i++) {
      const x = a + i * dx;
      sum += Math.abs(f(x) - g(x)) * dx;
    }
    return sum;
  }, [a, b]);

  return (
    <>
      <Coordinates.Cartesian subdivisions={2} />
      
      {/* Curves */}
      <Plot.OfX y={f} color="#13EC92" weight={2} />
      <Plot.OfX y={g} color="#A855F7" weight={2} />

      {/* Shaded Area Between Curves */}
      <Plot.Inequality
        y={{
          "<=": (x) => Math.max(f(x), g(x)),
          ">=": (x) => Math.min(f(x), g(x))
        }}
        x={{ ">=": a, "<=": b }}
        color="#13EC92"
      />

      {/* Boundary Lines */}
      {/* Fix: Using Line.Segment instead of Segment because Segment is not a top-level export of mafs */}
      <Line.Segment point1={[a, -5]} point2={[a, 5]} color="#13EC92" opacity={0.3} />
      <Line.Segment point1={[b, -5]} point2={[b, 5]} color="#A855F7" opacity={0.3} />

      {/* HUD Labels */}
      <g style={{ pointerEvents: 'none' }}>
        <rect x={a - 0.4} y={-0.6} width={0.8} height={0.4} fill="#050508" stroke="#13EC92" strokeWidth={0.5} opacity={0.8} />
        <text x={a} y={-0.35} className="fill-[#13EC92] font-mono text-[9px]" textAnchor="middle">a={a.toFixed(2)}</text>
        
        <rect x={b - 0.4} y={-0.6} width={0.8} height={0.4} fill="#050508" stroke="#A855F7" strokeWidth={0.5} opacity={0.8} />
        <text x={b} y={-0.35} className="fill-[#A855F7] font-mono text-[9px]" textAnchor="middle">b={b.toFixed(2)}</text>

        <text x={0} y={3.5} className="fill-white font-mono text-[10px] font-black uppercase tracking-widest" textAnchor="middle">
          INTER_CURVE_AREA: {calculatedArea.toFixed(4)}
        </text>
      </g>

      {aPoint.element}
      {bPoint.element}
    </>
  );
};