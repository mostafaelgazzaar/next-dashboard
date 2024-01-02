"use client";
import React from "react";
import { Chart } from "react-google-charts";

export const CircleChart = ({
  data,
  options,
  percentage,
}: {
  data: [string, number | string][];
  options: any;
  percentage: boolean;
}) => {
  if (!percentage) {
    options.pieSliceText = "value";
  }

  return (
    <Chart
      chartType="PieChart"
      width="100%"
      height="400px"
      data={data}
      options={options}
    />
  );
};
