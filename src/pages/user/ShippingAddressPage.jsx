import React, { useState } from 'react';

const ShippingAddressPage = ({ onNext, onBack }) => {
  const [address, setAddress] = useState("");

  const handleSubmit = () => {
    // Submit address (can be extended to include validation, etc.)
    onNext();
  };

  return (
    <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-4xl mx-auto mt-20">
      <h2 className="text-3xl font-semibold mb-6 text-gray-900">ที่อยู่การจัดส่ง</h2>
      <div className="mb-4">
        <label className="block text-gray-700">ที่อยู่</label>
        <textarea
          className="w-full p-2 border border-gray-300 rounded"
          rows="4"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          placeholder="กรอกที่อยู่การจัดส่ง"
        />
      </div>

      <div className="mt-6">
        <button
          onClick={handleSubmit}
          className="w-full bg-yellow-500 text-white py-3 rounded hover:bg-yellow-400"
        >
          ไปที่หน้าชำระเงิน
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

export default ShippingAddressPage;
