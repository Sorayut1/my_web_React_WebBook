import React from 'react';
import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  LinearScale,
  CategoryScale,
  Title as ChartTitle,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import { Typography } from 'antd';

const { Title, Text } = Typography;

// Register chart components
ChartJS.register(
  LineElement,
  PointElement,
  LinearScale,
  CategoryScale,
  ChartTitle,
  Tooltip,
  Legend
);

function LineChartPage() {
  // ข้อมูลกราฟ
  const data = {
    labels: ['ม.ค.', 'ก.พ.', 'มี.ค.', 'เม.ย.', 'พ.ค.', 'มิ.ย.'],
    datasets: [
      {
        label: 'ยอดขาย (฿)',
        data: [815000, 820000, 830000, 835000, 837000, 840000],
        fill: true,
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
        tension: 0.4,
        pointBorderColor: 'rgba(75, 192, 192, 1)',
        pointBackgroundColor: '#fff',
        pointRadius: 5,
      },
    ],
  };

  // ตัวเลือกการตั้งค่ากราฟ
  const options = {
    responsive: true,
    maintainAspectRatio: false, // ให้กราฟขยายตาม container
    plugins: {
      legend: {
        display: true,
        position: 'top',
      },
      tooltip: {
        enabled: true,
        callbacks: {
          label: function (tooltipItem) {
            return `ยอดขาย: ฿${tooltipItem.raw.toLocaleString()}`;
          },
        },
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: 'เดือน',
          color: '#333',
        },
      },
      y: {
        title: {
          display: true,
          
          color: '#333',
        },
        ticks: {
          callback: function (value) {
            return `฿${value.toLocaleString()}`;
          },
        },
      },
    },
  };

  return (
    <div className="flex justify-center items-center bg-gray-50 ">
      <div className="w-full max-w-4xl bg-white rounded-lg shadow-lg p-4">
        <Title level={4} className=" mb-4">
          กราฟแสดงยอดขายรายเดือน
        </Title>
        <div className="h-96">
          <Line data={data} options={options} />
        </div>
        <Text type="secondary" className="block text-center mt-4">
          * ข้อมูลแสดงยอดขายในหน่วยบาท (฿) จากเดือนมกราคมถึงมิถุนายน
        </Text>
      </div>
    </div>
  );
}

export default LineChartPage;
