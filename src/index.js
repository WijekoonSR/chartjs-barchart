import React from 'react';
import HorizontalBarChart from './components/HorizontalBarChart';
import VerticalBarChart from './components/VerticalBarChart';

const BarChart = (props) => {
  const { type } = props;

  switch (type) {
    case 'horizontal':
      return <HorizontalBarChart {...props} />;
    case 'vertical':
      <VerticalBarChart {...props} />;
    default:
      return <VerticalBarChart {...props} />;
  }
};

export default BarChart;
