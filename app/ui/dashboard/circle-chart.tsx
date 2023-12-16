"use client";
import React from "react";
import { Chart } from "react-google-charts";

export const CircleChart = ({ data, options }) => {
  return (
    <div className="App">
      <Chart
        chartType="PieChart"
        width="100%"
        height="400px"
        data={data}
        options={options}
      />
    </div>
  );
};
