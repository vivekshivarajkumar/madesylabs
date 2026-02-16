
import React, { useEffect, useRef, useState } from 'react';
import p5 from 'p5';

export const P5Integration: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [n, setN] = useState(8);

  useEffect(() => {
    if (!containerRef.current) return;

    const sketch = (p: p5) => {
      let width = 600;
      let height = 300;
      
      p.setup = () => {
        p.createCanvas(width, height).parent(containerRef.current!);
      };

      p.draw = () => {
        p.clear(0,0,0,0);
        const margin = 50;
        const f = (val: number) => Math.sin(val) + 1.5;
        const xMin = 0;
        const xMax = Math.PI * 2;
        const yMin = 0;
        const yMax = 3;

        const mapX = (val: number) => p.map(val, xMin, xMax, margin, width - margin);
        const mapY = (val: number) => p.map(val, yMin, yMax, height - margin, margin);

        const dx = (xMax - xMin) / n;
        p.noStroke();
        p.fill(168, 85, 247, 80);
        
        for (let i = 0; i < n; i++) {
          const x0 = xMin + i * dx;
          const yVal = f(x0);
          const rx = mapX(x0);
          const ry = mapY(yVal);
          const rw = (width - margin * 2) / n;
          const rh = (height - margin) - ry;
          p.rect(rx, ry, rw, rh);
        }

        p.noFill();
        p.stroke(19, 236, 146);
        p.strokeWeight(2);
        p.beginShape();
        for (let vx = xMin; vx <= xMax; vx += 0.05) {
          p.vertex(mapX(vx), mapY(f(vx)));
        }
        p.endShape();
      };
    };

    const myP5 = new p5(sketch);
    return () => myP5.remove();
  }, [n]);

  return (
    <div className="flex flex-col items-center gap-6 bg-black/20 p-8 rounded-sm">
      <div ref={containerRef} className="border border-white/5 rounded-sm overflow-hidden"></div>
      <input type="range" min="1" max="100" value={n} onChange={(e) => setN(parseInt(e.target.value))} className="w-full accent-primary bg-white/10 h-1 rounded-full appearance-none cursor-pointer" />
    </div>
  );
};
