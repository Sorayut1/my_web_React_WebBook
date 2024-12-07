import React from "react";

const categories = [
    { name: "วรรณกรรมไทย", color: "bg-yellow-400" },
    { name: "นวนิยายรัก", color: "bg-yellow-400" },
    { name: "นวนิยายสืบสวน", color: "bg-yellow-400" },
    { name: "หนังสือพัฒนาตนเอง", color: "bg-yellow-400" },
    { name: "ประวัติศาสตร์", color: "bg-yellow-400" },
    { name: "คู่มือเตรียมสอบ", color: "bg-yellow-400" },
    { name: "การ์ตูนมังงะ", color: "bg-yellow-400" },
    { name: "หนังสือเด็กและครอบครัว", color: "bg-yellow-400" },
    { name: "ไลฟ์สไตล์และสุขภาพ", color: "bg-yellow-400" },
  ];

function Categories() {
  return (
    <div className="p-6 flex flex-col items-center">
      <h2 className="text-xl font-semibold mb-4 text-center">หมวดหมู่หนังสือ</h2>
      <div className="flex flex-wrap justify-center gap-3">
        {categories.map((category, index) => (
          <button
            key={index}
            className={` font-medium px-4 py-2 rounded-lg shadow-md hover:shadow-lg ${category.color}`}
          >
            {category.name}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Categories;
