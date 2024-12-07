import React from "react";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from "chart.js";

// Register the necessary components for chart.js
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const data = {
  labels: ["ม.ค.", "ก.พ.", "มี.ค.", "เม.ย.", "พ.ค."],
  datasets: [
    {
      label: "ยอดขาย (฿)",
      data: [5000, 8000, 10000, 7000, 9000],
      backgroundColor: "rgba(54, 162, 235, 0.6)",
    },
  ],
};

const options = {
  responsive: true,
  maintainAspectRatio: false,
  scales: {
    y: {
      beginAtZero: true,
      suggestedMax: 12000, // แนะนำค่า max ให้เหมาะสมกับข้อมูล
      ticks: {
        stepSize: 2000,  // ขนาดขั้นตอนของตัวเลขบนแกน Y
      },
    },
  },
};

const StockChart = () => {
  return (
    <div style={{ position: "relative", height: "300px", width: "100%" }}>
      <Bar data={data} options={options} />
    </div>
  );
};

export default StockChart;
