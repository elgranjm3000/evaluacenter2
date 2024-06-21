import React, { useState, useEffect, useRef } from 'react';
import * as d3 from 'd3';

const InteractiveEllipse = () => {
  const [selectedValue, setSelectedValue] = useState(0);
  const svgRef = useRef(null);

  useEffect(() => {
    const svg = d3.select(svgRef.current);
    const width = 400;
    const height = 400;
    const radius = 150;
    const centerX = width / 2;
    const centerY = height / 2;
    const values = d3.range(0.5, 10.5, 0.5);

    svg.attr('width', width).attr('height', height);

    // Draw ellipse
    svg
      .append('ellipse')
      .attr('cx', centerX)
      .attr('cy', centerY)
      .attr('rx', radius)
      .attr('ry', radius / 1.5)
      .attr('fill', '#3e98c7');

    // Draw text for each value
    svg
      .selectAll('text')
      .data(values)
      .enter()
      .append('text')
      .attr('x', (d) => centerX + radius * Math.cos((d / 10) * 2 * Math.PI - Math.PI / 2))
      .attr('y', (d) => centerY + (radius / 1.5) * Math.sin((d / 10) * 2 * Math.PI - Math.PI / 2))
      .attr('text-anchor', 'middle')
      .attr('alignment-baseline', 'middle')
      .attr('font-size', '12px')
      .attr('fill', 'black')
      .text((d) => d);

    // Handle mouse click
    const handleMouseClick = (event) => {

      const [x, y] = d3.pointer(event);
  const textElement = svg
    .selectAll('text')
    .nodes()
    .find((textNode) => {
      const bbox = textNode.getBBox();
      return x >= bbox.x && x <= bbox.x + bbox.width && y >= bbox.y && y <= bbox.y + bbox.height;
    });

  if (textElement) {
    setSelectedValue(textElement.textContent);
  }
    };

    svg.on('click', handleMouseClick);

    return () => {
      svg.selectAll('*').remove(); // Cleanup
    };
  }, []);

  return (
    <div>
      <svg ref={svgRef}></svg>
      <div>Selected Value: {selectedValue}</div>
    </div>
  );
};

const Index = () => {
  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100vh' }}>
      <InteractiveEllipse />
    </div>
  );
};

export default Index;
