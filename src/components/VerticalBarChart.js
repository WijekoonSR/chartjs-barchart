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

    return () => chart.destroy(); // Cleanup chart instance on unmount
  }, [data, options]);

  return <canvas ref={canvasRef} {...rest} />; // Pass through other props
};

export default VerticalBarChart;
