import { useEffect } from "react";
import Chart from "react-google-charts";
import "./PieChart.css";

const PieChart = (props) => {
  const data = [
    ["Stack", "Percentage"],
    ["Java", 20],
    ["Python", 10],
    ["JavaScript", 7],
    ["MySQL", 6],
    ["React", 5],
    ["Ect", 5],
  ];

  const options = {
    title: "My Stack",
  };

  const chartEvents = [
    {
      eventName: "ready",
      callback: ({ chartWrapper, google }) => {
        const chart = chartWrapper.getChart();
        var event = google.visualization.events.addListener(
          chart,
          "click",
          (e) => {
            const clickStack = e.targetID.split("#");
            if (clickStack[0] == "slice" || clickStack[0] == "legendentry") {
              // stack명 추출
              console.log(data[parseInt(clickStack[1]) + 1][0]);
            }
          }
        );
      },
    },
  ];

  useEffect(() => {
    return () => {};
  });

  return (
    <Chart
      chartType="PieChart"
      data={data}
      options={options}
      id="pieChart"
      className="pieChart_wrap"
      chartEvents={chartEvents}
    />
  );
};

export default PieChart;
