import React, { useState } from "react";
import "./ChartBar.css";

const ChartBar = (props) => {
  let progressHeight = "0%";

  if (props.max > 0) {
    progressHeight = Math.round((props.value / props.maxValues) * 100) + "%";
  }

  return (
    <div className="chart-bar">
      <div className="chart-bar__inner">
        <div
          className="chart-bar__fill"
          style={{ height: progressHeight }}
        ></div>
      </div>
      <div className="chart-bar__label">{props.label}</div>
    </div>
  );
};

export default ChartBar;
