import React from 'react';
import { message } from 'antd';

const PaymentPage = ({ totalPrice, onBack }) => {
  const handlePayment = () => {
    // แสดงข้อความแจ้งเตือนเมื่อชำระเงินสำเร็จ
    message.success("การชำระเงินสำเร็จ", 2); // 2 คือเวลาที่จะแสดงข้อความ (วินาที)
  };

  return (
    <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-4xl mx-auto mt-20">
      <h2 className="text-3xl font-semibold mb-6 text-gray-900">การชำระเงิน</h2>

      <div className="mb-4">
        <span className="text-xl font-bold">จำนวนเงินที่ต้องชำระ: </span>
        <span className="text-xl text-yellow-500">฿{totalPrice}</span>
      </div>

      {/* Payment form could be expanded here */}
      <div className="mt-6">
        <button
          onClick={handlePayment}
          className="w-full bg-yellow-500 text-white py-3 rounded hover:bg-yellow-400"
        >
          ยืนยันการชำระเงิน
        </button>
      </div>

      <div className="mt-2">
        <button
          onClick={onBack}
          className="w-full bg-gray-500 text-white py-3 rounded hover:bg-gray-600"
        >
          ย้อนกลับ
        </button>
      </div>
    </div>
  );
};

export default PaymentPage;
