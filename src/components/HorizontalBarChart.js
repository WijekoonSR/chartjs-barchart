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

    // Prepare chart data (including label truncation if needed)
    const chartData = {
      labels:
        data && data.labels
          ? data.labels.map((item) => getChartText(item, labelTextLength))
          : [],
      datasets: data?.datasets || [], // Handle potential absence of datasets
    };

    // Configure y-axis options
    const yOptions = {
      afterFit: (scaleInstance) => {
        scaleInstance.width = labelWidth;
      },
    };

    if (options && options.y) {
      Object.assign(yOptions, options.y); // Merge custom y-axis options
    }

    // Create and configure the chart
    const chart = new Chart(ctx, {
      type: 'bar',
      data: chartData,
      options: {
        responsive: true,
        maintainAspectRatio: false,
        y: yOptions,
        ...options, // Merge custom options
      },
      ...rest,
    });

    // Cleanup chart instance on unmount to avoid memory leaks
    return () => chart.destroy();
  }, [data, options]);

  return <canvas ref={canvasRef} />; // Return the canvas element
};

export default HorizontalBarChart;
