import React, { useState } from 'react';
import { Pagination } from 'antd';

function BookTable({ books, currentPage, pageSize, onPageChange, onDelete }) {
  const [imageFiles, setImageFiles] = useState({}); // Store image files for each book

  const currentBooks = books.slice((currentPage - 1) * pageSize, currentPage * pageSize);

  const handleImageChange = (e, bookId) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImageFiles((prevImages) => ({
          ...prevImages,
          [bookId]: reader.result,
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handlePageSizeChange = (current, size) => {
    // เมื่อผู้ใช้เปลี่ยนจำนวนแถวที่แสดงต่อหน้า
    onPageChange(1); // Reset page to 1 when pageSize changes
  };

  return (
    <div>
      <h2 className="text-lg font-semibold mb-4">รายการสินค้า</h2>
      <div className="overflow-x-auto">
        <table className="table-auto w-full mb-4">
          <thead>
            <tr>
              <th className="px-4 py-2">ชื่อ</th>
              <th className="px-4 py-2">ผู้แต่ง</th>
              <th className="px-4 py-2">ISBN</th>
              <th className="px-4 py-2">ราคา</th>
              <th className="px-4 py-2">หมวดหมู่</th>
              <th className="px-4 py-2">สต็อก</th>
              <th className="px-4 py-2">รูปภาพ</th>
              <th className="px-4 py-2">จัดการ</th>
            </tr>
          </thead>
          <tbody>
            {currentBooks.map((book) => (
              <tr key={book.id}>
                <td className="border px-4 py-2">{book.name}</td>
                <td className="border px-4 py-2">{book.author}</td>
                <td className="border px-4 py-2">{book.isbn}</td>
                <td className="border px-4 py-2">฿{book.price}</td>
                <td className="border px-4 py-2">{book.category}</td>
                <td className="border px-4 py-2">{book.stock}</td>
                <td className="border px-4 py-2">
                  {imageFiles[book.id] ? (
                    <img
                      src={imageFiles[book.id]}
                      alt="Book"
                      className="w-20 h-20 object-cover rounded"
                    />
                  ) : (
                    <input
                      type="file"
                      accept="image/*"
                      onChange={(e) => handleImageChange(e, book.id)}
                      className="p-1"
                    />
                  )}
                </td>
                <td className="border px-4 py-2">
                  <button
                    onClick={() => onDelete(book.id)}
                    className="bg-red-500 text-white p-1 rounded"
                  >
                    ลบ
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <Pagination
        className="flex justify-center"
        current={currentPage}
        pageSize={pageSize}
        total={books.length}
        onChange={onPageChange}
        onShowSizeChange={handlePageSizeChange}
        
        showTotal={(total) => `รวม ${total} รายการ`}
      />
    </div>
  );
}

export default BookTable;
