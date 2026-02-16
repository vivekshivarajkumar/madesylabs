
import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';

export const D3Distribution: React.FC = () => {
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    if (!svgRef.current) return;

    const margin = { top: 20, right: 30, bottom: 40, left: 50 };
    const width = 600 - margin.left - margin.right;
    const height = 300 - margin.top - margin.bottom;

    const svg = d3.select(svgRef.current)
      .attr('width', width + margin.left + margin.right)
      .attr('height', height + margin.top + margin.bottom)
      .html('')
      .append('g')
      .attr('transform', `translate(${margin.left},${margin.top})`);

    const data = d3.range(-4, 4.1, 0.1).map(x => ({
      x: x,
      y: (1 / Math.sqrt(2 * Math.PI)) * Math.exp(-0.5 * x * x)
    }));

    const x = d3.scaleLinear().domain([-4, 4]).range([0, width]);
    const y = d3.scaleLinear().domain([0, 0.5]).range([height, 0]);

    const xAxis = d3.axisBottom(x).ticks(8).tickSize(-height).tickPadding(10);
    const yAxis = d3.axisLeft(y).ticks(5).tickSize(-width).tickPadding(10);

    const gx = svg.append('g').attr('transform', `translate(0,${height})`).call(xAxis);
    const gy = svg.append('g').call(yAxis);

    [gx, gy].forEach(g => {
      g.selectAll('.tick line').attr('stroke', 'rgba(255,255,255,0.05)');
      g.selectAll('.tick text').attr('fill', 'rgba(255,255,255,0.4)').attr('font-size', '10px');
      g.select('.domain').attr('stroke', 'rgba(19, 236, 146, 0.3)');
    });

    const line = d3.line<{x: number, y: number}>().x(d => x(d.x)).y(d => y(d.y)).curve(d3.curveBasis);

    svg.append('path').datum(data).attr('fill', 'none').attr('stroke', '#13EC92').attr('stroke-width', 2.5).attr('d', line);
  }, []);

  return (
    <div className="w-full flex justify-center bg-black/20 p-4 rounded-sm">
      <svg ref={svgRef}></svg>
    </div>
  );
};
