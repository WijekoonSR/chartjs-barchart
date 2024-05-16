import { Bar } from 'react-chartjs-2';

export default function HorizontalBarChart(props) {
  const { options, data } = props;
  return (
    <Bar
      options={{
        responsive: true,
        maintainAspectRatio: false,
        y: {
          afterFit: function (scaleInstance) {
            console.log(
              '🚀 ~ HorizontalBarChart ~ scaleInstance:',
              scaleInstance
            );
            scaleInstance.width = 400; // sets the width to 100px
          },
          ...options.y,
        },
        ...options,
      }}
      {...props}
    />
  );
}
