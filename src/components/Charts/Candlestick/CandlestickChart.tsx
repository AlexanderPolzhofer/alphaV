import React from 'react';
import * as d3 from 'd3';

type CandlestickData = {
  date: Date;
  open: number;
  high: number;
  low: number;
  close: number;
};

type Props = {
  data: CandlestickData[];
  width: number;
  height: number;
};

const CandlestickChart: React.FC<Props> = ({ data, width, height }) => {
  const ref = React.useRef<SVGSVGElement>(null);

  React.useEffect(() => {
    const svg = d3.select(ref.current);

    const xScale = d3
      .scaleBand()
      .domain(data.map((d) => d.date.toString()))
      .range([0, width])
      .paddingInner(0.1);

    const yScale = d3
      .scaleLinear()
      .domain([d3.min(data, (d) => d.low)!, d3.max(data, (d) => d.high)!])
      .range([height, 0]);

    const candlesticks = svg
      .selectAll('rect')
      .data(data)
      .enter()
      .append('rect');

    candlesticks
      .attr('x', (d) => xScale(d.date.toString())!)
      .attr('y', (d) => yScale(Math.max(d.open, d.close)))
      .attr('width', xScale.bandwidth())
      .attr('height', (d) => Math.abs(yScale(d.open) - yScale(d.close)))
      .attr('fill', (d) => (d.open > d.close ? 'red' : 'green'));

    const wicks = svg.selectAll('line').data(data).enter().append('line');

    wicks
      .attr('x1', (d) => xScale(d.date.toString())! + xScale.bandwidth() / 2)
      .attr('y1', (d) => yScale(d.high))
      .attr('x2', (d) => xScale(d.date.toString())! + xScale.bandwidth() / 2)
      .attr('y2', (d) => yScale(d.low))
      .attr('stroke', (d) => (d.open > d.close ? 'red' : 'green'));
  }, [data, width, height]);

  return <svg ref={ref} width={width} height={height} />;
};

export default CandlestickChart;
