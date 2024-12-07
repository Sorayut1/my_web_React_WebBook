import React from 'react'
// import { useNavigate } from 'react-router-dom';
import StockChart from './StockChart';
import { LightBulbIcon } from '@heroicons/react/24/solid';
import LineChartPage from './LineChartPage';


function DashboardSummary() {
//   const navigate = useNavigate(); // ใช้เพื่อเปลี่ยนเส้นทาง

//   // ฟังก์ชันที่ใช้เมื่อคลิกที่การ์ด
//   const handleCardClick = (path) => {
//     navigate(path); // นำทางไปยัง path ที่กำหนด
//   }

  return (
    <>
      <div className="min-h-screen bg-gray-100 p-6">
        {/* <!-- Header --> */}
        <header className="flex justify-between items-center bg-white p-4 shadow rounded-md mb-6">
          <h1 className="text-2xl font-bold mt-2">Overview Dashboard</h1>
        </header>

        {/* <!-- Summary Cards --> */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
          {/* <!-- Card 1: ยอดขายรายเดือน --> */}
          <div 
            className="bg-white p-4 shadow rounded-md cursor-pointer transform transition-transform duration-300 hover:scale-105 hover:shadow-lg hover:bg-green-50"
            // onClick={() => handleCardClick('/sales')}
          >
            <h2 className="text-lg font-semibold">ยอดขายรายเดือน</h2>
            <p className="text-2xl font-bold text-green-500">฿50,000</p>
          </div>

          {/* <!-- Card 2: จำนวนในสต็อก --> */}
          <div 
            className="bg-white p-4 shadow rounded-md cursor-pointer transform transition-transform duration-300 hover:scale-105 hover:shadow-lg hover:bg-blue-50"
            onClick={() => handleCardClick('/stock')}
          >
            <h2 className="text-lg font-semibold">จำนวนในสต็อก</h2>
            <p className="text-2xl font-bold text-blue-500">1,500 เล่ม</p>
          </div>

          {/* <!-- Card 3: คำสั่งซื้อรอดำเนินการ --> */}
          <div 
            className="bg-white p-4 shadow rounded-md cursor-pointer transform transition-transform duration-300 hover:scale-105 hover:shadow-lg hover:bg-orange-50"
            // onClick={() => handleCardClick('/pending-orders')}
          >
            <h2 className="text-lg font-semibold">คำสั่งซื้อรอดำเนินการ</h2>
            <p className="text-2xl font-bold text-orange-500">8 รายการ</p>
          </div>

          {/* <!-- Card 4: ลูกค้าใหม่ --> */}
          <div 
            className="bg-white p-4 shadow rounded-md cursor-pointer transform transition-transform duration-300 hover:scale-105 hover:shadow-lg hover:bg-purple-50"
            // onClick={() => handleCardClick('/new-customers')}
          >
            <h2 className="text-lg font-semibold">ลูกค้าใหม่</h2>
            <p className="text-2xl font-bold text-purple-500">20 คน</p>
          </div>
        </div>

        {/* <!-- Graph and Table Section --> */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* <!-- Sales Graph --> */}
          <div className="bg-white p-4 shadow rounded-md">
            <h2 className="text-lg font-semibold">กราฟแสดงรายได้</h2>
            <div id="chart" className=""></div> 
            {/* <!-- ใช้ chart library ที่นี่ --> */}
            <StockChart/>
          </div>

{/* 1112222 */}
         {/* <!-- Low Stock Alert --> */}
            {/* <!-- Top Selling Books --> */}
            <div className="bg-white p-4 shadow rounded-md">
                <h2 className="text-lg font-semibold">หนังสือขายดี</h2>
                <ul className="mt-4 space-y-2">
                <li className="flex justify-between">
                    <span>1984</span>
                    <span>50 เล่ม</span>
                </li>
                <li className="flex justify-between">
                    <span>คิดแบบยิว ทำแบบญี่ปุ่น</span>
                    <span>30 เล่ม</span>
                </li>
                <li className="flex justify-between">
                    <span>Harry Potter</span>
                    <span>25 เล่ม</span>
                </li>
                <li className="flex justify-between">
                    <span>คิดแบบยิว ทำแบบญี่ปุ่น</span>
                    <span>30 เล่ม</span>
                </li>
                <li className="flex justify-between">
                    <span>Harry Potter</span>
                    <span>25 เล่ม</span>
                </li>
                <li className="flex justify-between">
                    <span>คิดแบบยิว ทำแบบญี่ปุ่น</span>
                    <span>30 เล่ม</span>
                </li>
                <li className="flex justify-between">
                    <span>Harry Potter</span>
                    <span>25 เล่ม</span>
                </li>
                <li className="flex justify-between">
                    <span>คิดแบบยิว ทำแบบญี่ปุ่น</span>
                    <span>30 เล่ม</span>
                </li>
                <li className="flex justify-between">
                    <span>Harry Potter</span>
                    <span>25 เล่ม</span>
                </li>
                </ul>
            </div>
        </div>

        {/* <!-- Pending Orders & Low Stock --> */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          {/* <!-- Pending Orders --> */}
{/* <!-- Top Selling Books --> */}
<div className="bg-white  shadow rounded-md">
           <LineChartPage/>
          </div>

          {/* <!-- Low Stock Alert --> */}
          <div className="bg-white p-4 shadow rounded-md">
            <h2 className="text-lg font-semibold">สินค้าใกล้หมด</h2>
            <ul className="mt-4 space-y-2">
              <li>คิดแบบยิว ทำแบบญี่ปุ่น - 5 เล่ม</li>
              <li>การเดินทางของปลากระป๋อง - 3 เล่ม</li>
              <li>คิดแบบยิว ทำแบบญี่ปุ่น - 5 เล่ม</li>
              <li>การเดินทางของปลากระป๋อง - 3 เล่ม</li>
              <li>คิดแบบยิว ทำแบบญี่ปุ่น - 5 เล่ม</li>
              <li>การเดินทางของปลากระป๋อง - 3 เล่ม</li>
              <li>คิดแบบยิว ทำแบบญี่ปุ่น - 5 เล่ม</li>
              <li>การเดินทางของปลากระป๋อง - 3 เล่ม</li>
              <li>คิดแบบยิว ทำแบบญี่ปุ่น - 5 เล่ม</li>
              <li>การเดินทางของปลากระป๋อง - 3 เล่ม</li>
              <li>คิดแบบยิว ทำแบบญี่ปุ่น - 5 เล่ม</li>
              <li>การเดินทางของปลากระป๋อง - 3 เล่ม</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}

export default DashboardSummary
