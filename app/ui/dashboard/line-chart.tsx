"use client";
import React from "react";
import { Chart } from "react-google-charts";

export default function LineChart({
  title,
  data,
}: {
  title: string[];
  data: [number, number][];
}) {
  const options = {
    hAxis: {
      title: title[0],
    },
    vAxis: {
      title: title[1],
    },
    series: {
      1: { curveType: "function" },
    },
    interpolateNulls: true,
    animation: {
      startup: true,
      easing: "linear",
      duration: 1500,
    },
    curveType: "function",
  };
  const newDAta = [["x", "Score"], [0, 0], ...data];
  return (
    <Chart
      chartType="LineChart"
      width="100%"
      height="400px"
      data={newDAta}
      options={options}
    />
  );
}
