import React from 'react';
import { Coordinates, Plot, Line, useMovablePoint } from 'mafs';

export const GaussianMafs: React.FC = () => {
  const muPoint = useMovablePoint([0, 0], { constrain: "horizontal", color: "#13EC92" });
  const sigmaPoint = useMovablePoint([1, 0.4], {
    constrain: ([x]) => [Math.max(muPoint.x + 0.1, x), 0.4],
    color: "#A855F7"
  });

  const mu = muPoint.x;
  const sigma = Math.max(0.1, sigmaPoint.x - muPoint.x);
  
  const normalFunc = (x: number) => {
    const exponent = -0.5 * Math.pow((x - mu) / sigma, 2);
    const denominator = sigma * Math.sqrt(2 * Math.PI);
    return (1 / denominator) * Math.exp(exponent);
  };

  const s1 = sigma;
  const s2 = sigma * 2;

  return (
    <>
      <Coordinates.Cartesian 
        subdivisions={4} 
        xAxis={{ labels: (n) => (n % 2 === 0 ? n.toString() : "") }}
        yAxis={{ labels: (n) => (n > 0 ? n.toFixed(1) : "") }}
      />
      {/* Fix: Using Line.Segment instead of Segment because Segment is not a top-level export of mafs */}
      <Line.Segment point1={[-10, 0]} point2={[10, 0]} color="#13EC92" opacity={0.3} weight={1} />
      <Line.Segment point1={[0, -10]} point2={[0, 10]} color="#A855F7" opacity={0.3} weight={1} />

      <Plot.Inequality
        y={{ "<=": (x: number) => normalFunc(x), ">=": () => 0 }}
        x={{ ">=": mu - s1, "<=": mu + s1 }}
        color="#13EC92"
      />

      <Plot.Inequality
        y={{ "<=": (x: number) => normalFunc(x), ">=": () => 0 }}
        x={{ ">=": mu - s2, "<=": mu + s2 }}
        color="#A855F7"
      />

      <Plot.OfX y={normalFunc} color="#13EC92" weight={3} />
      {/* Fix: Using Line.Segment instead of Segment because Segment is not a top-level export of mafs */}
      <Line.Segment point1={[mu, 0]} point2={[mu, normalFunc(mu)]} color="#13EC92" opacity={0.4} />
      
      <g style={{ pointerEvents: 'none' }}>
        <text x={mu} y={-0.25} className="fill-[#13EC92] font-mono text-[10px] font-black text-center uppercase tracking-widest">
          MEAN_CENTER: {mu.toFixed(2)}
        </text>
        <text x={mu + sigma/2} y={0.48} className="fill-[#A855F7] font-mono text-[9px] font-bold text-center uppercase">
          SIGMA: {sigma.toFixed(2)}
        </text>
      </g>
      
      {muPoint.element}
      {sigmaPoint.element}
    </>
  );
};