"use client";

import {
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LinearScale,
  LineElement,
  PointElement,
  Title,
  Tooltip,
} from "chart.js";

import { Line } from "react-chartjs-2";
import { numberToName } from "@/app/ui/dashboard/nav-links";
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export function LineChartV2({
  title,
  data,
}: {
  title: string[];
  data: [number, number][];
}) {
  const options = {
    responsive: true,
    width: "100%",
    plugins: {
      legend: {
        position: "top" as const,
      },
      title: {
        display: true,
        text: "مخطط نسبة الموديولات",
      },
    },
  };
  const chartData = {
    labels: [null, ...data.map((item) => numberToName(item[0]))],
    datasets: [
      {
        label: "النقاط",
        data: [null, ...data.map((item) => item[1])],
        borderColor: "rgb(61,49,173)",
        backgroundColor: "rgba(41,49,206,0.5)",
      },
    ],
  };
  return <Line options={options} data={chartData} />;
}
