# BarChart

A React component for rendering bar charts using Chart.js, with additional features to maintain consistent label widths across multiple charts.

![Horizontal Bar chart with fixed label width](https://drive.google.com/uc?id=15MZSsWU332t4qB15onq8JddHycEaGMec)

## Installation

You can install this package using npm or yarn:

```bash
npm install chartjs-barchart

or

yarn add chartjs-barchart
```

# Features

Chart.js bar charts don't provide a built-in feature to set a fixed label width, which can lead to inconsistent widths and heights when displaying multiple charts. This component addresses these issues by allowing you to set a consistent label width, ensuring uniformity across all your charts.

# Usage

First, import the BarChart component into your React application:

> ### Note
>
> When the type prop is set to "vertical", the labelWidth and labelTextLength props will not be applied, as they are specific to horizontal bar charts.

```bash
import React from 'react';
import BarChart from 'chartjs-barchart';

const App = () => {
  const data = {
    labels: ['Label 1', 'Label 2', 'Label 3'],
    datasets: [
      {
        label: 'Dataset 1',
        data: [10, 20, 30],
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
      },
    ],
  };

  const options = {
    scales: {
      x: {
        beginAtZero: true,
      },
    },
  };

  return (
    <div>
      <h1>Bar Chart</h1>
      <BarChart
        data={data}
        options={options}
        labelWidth={300}
        labelTextLength={10}
        type="horizontal" // Can be "horizontal" or "vertical"
      />
    </div>
  );
};

export default App;

```

# Props

## The BarChart component accepts the following props:

- data (required): The chart data, structured as per Chart.js documentation.
- options (optional): Custom options for the chart, structured as per Chart.js documentation.
- labelWidth (optional): Custom width for the labels on the y-axis. Default is 400.
- labelTextLength (optional): Specify the maximum length allowed for labels. If a label exceeds this length, it will automatically wrap onto the next line..
- type (optional): Specifies the type of bar chart. Can be "horizontal" or "vertical". Default is "vertical".
- rest (optional): Any additional props will be passed to the canvas element.
