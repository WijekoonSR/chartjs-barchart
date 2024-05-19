import { Bar } from 'react-chartjs-2';
import { getChartText } from '../utils/splitText';

export default function HorizontalBarChart(props) {
  const { options, data, labelWidth = 400, labelTextLength = null } = props;

  let yOptions = {
    afterFit: function (scaleInstance) {
      scaleInstance.width = labelWidth; // sets the width to 100px
    },
  };

  if (options && options.y) {
    yOptions = { ...yOptions, ...options.y };
  }

  if (data && data.labels && data.labels.length > 0) {
    data.labels = data.labels.map((item) =>
      getChartText(item, labelTextLength)
    );
  }

  return (
    <Bar
      data
      options={{
        responsive: true,
        maintainAspectRatio: false,
        y: yOptions,
        ...options,
      }}
      {...props}
    />
  );
}
