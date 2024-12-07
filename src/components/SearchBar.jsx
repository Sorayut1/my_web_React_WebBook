import React, { useState } from "react";

function SearchBar({ onSearch }) {
  const [searchTerm, setSearchTerm] = useState(""); // State สำหรับเก็บค่าที่ป้อน

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value); // อัปเดตค่าจาก input
  };

  const handleSearch = () => {
    if (onSearch) {
      onSearch(searchTerm); // เรียกฟังก์ชันค้นหาที่ส่งมาจาก props
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSearch(); // ค้นหาทันทีเมื่อกด Enter
    }
  };

  return (
    <div className="flex items-center space-x-2 mt-5 px-20">
      <input
        type="text"
        placeholder="ค้นหาข้อมูล..."
        className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
        value={searchTerm}
        onChange={handleInputChange} // เรียกเมื่อพิมพ์ข้อความ
        onKeyPress={handleKeyPress} // เรียกเมื่อกดปุ่มบนคีย์บอร์ด
      />
      <button
        onClick={handleSearch} // เรียกฟังก์ชันค้นหาเมื่อกดปุ่ม
        className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg"
      >
        ค้นหา
      </button>
    </div>
  );
}

export default SearchBar;
