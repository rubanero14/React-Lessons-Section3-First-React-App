import React from "react";
import "./Chart.css";
import ChartBar from "./ChartBar";

const Chart = (props) => {
  // Creating a list of array with values to pass as arguement to maxValue, to get max value
  const valueArray = props.dataPoints.map((data) => data.value);
  // Spreading the array thus spreading the values needed by .max()
  const maxValue = Math.max(...valueArray); // .max(1, 2, 3) receives a list of numbers to work

  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint) => (
        <ChartBar
          key={dataPoint.label}
          value={dataPoint.value}
          maxValue={maxValue}
          label={dataPoint.label}
        />
      ))}
    </div>
  );
};

export default Chart;
