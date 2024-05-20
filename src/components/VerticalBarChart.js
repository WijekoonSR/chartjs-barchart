import Chart from 'chart.js/auto';
import React, { useEffect, useRef } from 'react';

const VerticalBarChart = ({ data, options, ...rest }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const ctx = canvasRef.current.getContext('2d');
    const chart = new Chart(ctx, {
      type: 'bar',
      data,
      options,
      ...rest,
    });

    return () => chart.destroy();
  }, [data, options]);

  return <canvas ref={canvasRef} {...rest} />;
};

export default VerticalBarChart;
