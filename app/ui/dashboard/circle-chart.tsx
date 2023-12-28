"use client";
import React from "react";
import { Chart } from "react-google-charts";

export const CircleChart = ({
  data,
  options,
}: {
  data: [string, number | string][];
  options: object;
}) => {
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
