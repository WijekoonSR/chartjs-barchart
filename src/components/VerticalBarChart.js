import { Bar } from 'react-chartjs-2';

export default function VerticalBarChart(props) {
  const { options } = props;

  let yOptions = {
    afterFit: function (scaleInstance) {
      scaleInstance.width = 400; // sets the width to 100px
    },
  };

  if (options && options.y) {
    yOptions = { ...yOptions, ...options.y };
  }

  return (
    <Bar
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
