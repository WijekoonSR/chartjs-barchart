import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto'; // Import Chart.js with auto registration
import { getChartText } from '../utils/splitText'; // Import for label truncation (if applicable)

const HorizontalBarChart = ({
  data,
  options,
  labelWidth = 400,
  labelTextLength = null,
  ...rest
}) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const ctx = canvasRef.current.getContext('2d');

    const chartData = {
      labels:
        data && data.labels
          ? data.labels.map((item) => getChartText(item, labelTextLength))
          : [],
      datasets: data?.datasets || [],
    };

    const yOptions = {
      afterFit: (scaleInstance) => {
        scaleInstance.width = labelWidth;
      },
    };

    if (options && options.y) {
      Object.assign(yOptions, options.y);
    }

    const chart = new Chart(ctx, {
      type: 'bar',
      data: chartData,
      options: {
        responsive: true,
        maintainAspectRatio: false,
        y: yOptions,
        ...options,
      },
      ...rest,
    });

    return () => chart.destroy();
  }, [data, options]);

  return <canvas ref={canvasRef} />;
};

export default HorizontalBarChart;
