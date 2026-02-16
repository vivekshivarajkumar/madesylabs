import React from 'react';
import { Coordinates, Plot, Vector, useMovablePoint, Line } from 'mafs';

export const SineSlopeProtocol: React.FC = () => {
  // Movable point constrained to the x-axis for easier sliding
  const point = useMovablePoint([0, 0], {
    constrain: ([x]) => [x, Math.sin(x)],
    color: "#13EC92"
  });

  const x = point.x;
  const y = Math.sin(x);
  const slope = Math.cos(x);

  // Tangent vector components
  // We show a normalized-ish vector for visual clarity of direction
  const vectorLength = 1.5;
  const angle = Math.atan(slope);
  const dx = Math.cos(angle) * vectorLength;
  const dy = Math.sin(angle) * vectorLength;

  return (
    <>
      <Coordinates.Cartesian subdivisions={2} />
      
      {/* The Sine Wave */}
      <Plot.OfX y={(x) => Math.sin(x)} color="#13EC92" opacity={0.4} weight={2} />

      {/* Tangent Line (Optional background guide) */}
      <Plot.OfX 
        y={(t) => y + slope * (t - x)} 
        color="#A855F7" 
        opacity={0.2} 
        weight={1} 
        style="dashed"
      />

      {/* Slope Vector */}
      <Vector 
        tail={[x, y]} 
        tip={[x + dx, y + dy]} 
        color="#A855F7" 
        weight={3}
      />

      {/* Origin Connector */}
      {/* Fix: Using Line.Segment instead of Segment because Segment is not a top-level export of mafs */}
      <Line.Segment point1={[x, 0]} point2={[x, y]} color="white" opacity={0.1} style="dashed" />

      {/* HUD Labeling */}
      <g style={{ pointerEvents: 'none' }}>
        <rect x={x - 0.7} y={y + 0.5} width={1.4} height={0.6} fill="#050508" stroke="#13EC92" strokeWidth={0.5} opacity={0.8} rx={0.1} />
        <text x={x} y={y + 0.8} className="fill-[#13EC92] font-mono text-[8px] font-black uppercase tracking-tighter" textAnchor="middle">
          SLOPE: {slope.toFixed(3)}
        </text>
        <text x={x} y={y + 0.95} className="fill-white/40 font-mono text-[6px] uppercase tracking-[0.2em]" textAnchor="middle">
          f'(x) = cos(x)
        </text>
      </g>

      {point.element}
    </>
  );
};