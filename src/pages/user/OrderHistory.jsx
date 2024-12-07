import React, { useState } from 'react';
import { Pagination } from 'antd';
import NavbarUser from '../../components/NavbarUser';
const OrderHistory = () => {
  // ข้อมูลการสั่งซื้อที่จำลองขึ้น
  const orders = [
    {
      orderId: 'ORD12345',
      date: '2024-11-10',
      status: 'กำลังจัดส่ง',
      items: [
        { name: 'หนังสือ React', quantity: 2, price: 300 },
        { name: 'หนังสือ JavaScript', quantity: 1, price: 250 },
      ],
      totalPrice: 850,
    },
    {
      orderId: 'ORD12346',
      date: '2024-10-25',
      status: 'จัดส่งสำเร็จ',
      items: [
        { name: 'หนังสือ HTML', quantity: 1, price: 150 },
        { name: 'หนังสือ CSS', quantity: 1, price: 200 },
      ],
      totalPrice: 350,
    },
    {
      orderId: 'ORD12347',
      date: '2024-09-15',
      status: 'ยกเลิก',
      items: [
        { name: 'หนังสือ Node.js', quantity: 1, price: 400 },
      ],
      totalPrice: 400,
    },
    // เพิ่มข้อมูลสั่งซื้ออื่นๆ ตามต้องการ
  ];

  // จำนวนคำสั่งซื้อที่แสดงในแต่ละหน้า
  const itemsPerPage = 5;
  
  // สถานะของการแสดงผลในหน้า Pagination
  const [currentPage, setCurrentPage] = useState(1);

  // ฟังก์ชันที่ใช้ในการเปลี่ยนหน้า
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  // คำนวณข้อมูลที่จะนำมาแสดงในหน้าปัจจุบัน
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentOrders = orders.slice(startIndex, startIndex + itemsPerPage);

  return (
    <>
    <NavbarUser/>
    <div className="container mx-auto py-8 mt-16 px-4">
      <h1 className="text-3xl font-semibold text-center text-gray-900 mb-8">ประวัติการสั่งซื้อ</h1>
      <div className="space-y-6">
        {currentOrders.map((order) => (
          <div key={order.orderId} className="bg-white shadow-md rounded-lg p-6">
            <div className="flex justify-between items-center mb-4">
              <div>
                <p className="text-lg font-medium text-gray-900">คำสั่งซื้อ: {order.orderId}</p>
                <p className="text-sm text-gray-500">วันที่: {order.date}</p>
              </div>
              <span
                className={`px-3 py-1 text-sm font-semibold rounded-full 
                  ${order.status === 'กำลังจัดส่ง' ? 'bg-yellow-300 text-yellow-800' : ''}
                  ${order.status === 'จัดส่งสำเร็จ' ? 'bg-green-300 text-green-800' : ''}
                  ${order.status === 'ยกเลิก' ? 'bg-red-300 text-red-800' : ''}`}
              >
                {order.status}
              </span>
            </div>
            <div className="space-y-2">
              {order.items.map((item, index) => (
                <div key={index} className="flex justify-between items-center text-sm text-gray-700">
                  <span>{item.name}</span>
                  <span>{item.quantity} x ฿{item.price}</span>
                </div>
              ))}
            </div>
            <div className="mt-4 flex justify-between items-center">
              <span className="text-lg font-semibold text-gray-900">รวม: ฿{order.totalPrice}</span>
              <button className="text-blue-500 hover:text-blue-700 text-sm font-medium">
                ดูรายละเอียด
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="mt-6 flex justify-center">
        <Pagination
          current={currentPage}
          pageSize={itemsPerPage}
          total={orders.length}
          onChange={handlePageChange}
          showSizeChanger={false}
          showTotal={(total) => `ทั้งหมด ${total} รายการ`}
        />
      </div>
    </div>
    </>
  );
};

export default OrderHistory;
