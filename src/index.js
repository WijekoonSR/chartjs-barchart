import React from 'react';

const BarChart = ({ label, onClick }) => {
  return (<button onClick={onClick}>{label}</button>);
};

export default BarChart;
