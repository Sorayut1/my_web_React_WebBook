import React, { useState } from 'react';
import { Pagination } from 'antd';

function CategoryManagement({ categories, onAddCategory, onDeleteCategory }) {
  const [newCategory, setNewCategory] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize] = useState(8);

  const currentCategories = categories.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize
  );

  const handleAddCategory = () => {
    if (newCategory && !categories.includes(newCategory)) {
      onAddCategory(newCategory);
      setNewCategory('');
    } else {
      alert('หมวดหมู่นี้มีอยู่แล้วหรือชื่อว่าง');
    }
  };

  return (
    <div className="bg-white p-4 shadow rounded-md">
      <h2 className="text-lg font-semibold mb-4">จัดการหมวดหมู่</h2>
      <input
        type="text"
        placeholder="เพิ่มหมวดหมู่ใหม่"
        value={newCategory}
        onChange={(e) => setNewCategory(e.target.value)}
        className="block w-full p-2 border rounded mb-2"
      />
      <button
        type="button"
        onClick={handleAddCategory}
        className="w-full bg-green-500 text-white p-2 rounded"
      >
        เพิ่มหมวดหมู่
      </button>

      <h2 className="text-lg font-semibold mt-5 mb-4">หมวดหมู่ทั้งหมด</h2>
      <table className="table-auto w-full mb-4">
        <thead>
          <tr>
            <th className="px-4 py-2">หมวดหมู่</th>
            <th className="px-4 py-2">การจัดการ</th>
          </tr>
        </thead>
        <tbody>
          {currentCategories.map((category, index) => (
            <tr key={index}>
              <td className="border px-4 py-2">{category}</td>
              <td className="border px-4 py-2">
                <button
                  onClick={() => onDeleteCategory(category)}
                  className="bg-red-500 text-white p-1 rounded"
                >
                  ลบ
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Pagination
        className="flex justify-center"
        current={currentPage}
        pageSize={pageSize}
        total={categories.length}
        onChange={(page) => setCurrentPage(page)}
        showSizeChanger={false}
      />
    </div>
  );
}

export default CategoryManagement;
