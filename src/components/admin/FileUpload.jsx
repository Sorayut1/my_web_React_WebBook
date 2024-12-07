import React, { useState } from 'react';

function FileUpload({ onFileUpload }) {
  const [uploadedBooks, setUploadedBooks] = useState([]);

  const handleUploadFile = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const rows = event.target.result.split('\n');
        const importedBooks = rows.map((row, index) => {
          if (index === 0) return null;
          const [name, author, isbn, price, category, stock] = row.split(',');
          return {
            name: name?.trim(),
            author: author?.trim(),
            isbn: isbn?.trim(),
            price: parseFloat(price?.trim()) || 0,
            category: category?.trim(),
            stock: parseInt(stock?.trim()) || 0,
            id: `${Date.now()}-${index}`,
          };
        }).filter((book) => book);
        setUploadedBooks(importedBooks);
      };
      reader.readAsText(file);
    }
  };

  const handleConfirmUpload = () => {
    onFileUpload(uploadedBooks);
    setUploadedBooks([]);
    alert('ข้อมูลจากไฟล์ CSV ถูกเพิ่มสำเร็จ');
  };

  return (
    <div>
      <h2 className="text-lg font-semibold mt-3 mb-4">อัปโหลดไฟล์สินค้า (CSV)</h2>
      <input
        type="file"
        accept=".csv"
        onChange={handleUploadFile}
        className="block w-full mb-4"
      />
      <button
        type="button"
        onClick={handleConfirmUpload}
        disabled={uploadedBooks.length === 0}
        className={`w-full p-2 rounded ${uploadedBooks.length > 0 ? 'bg-green-500 text-white' : 'bg-gray-400 text-gray-700 cursor-not-allowed'}`}
      >
        ยืนยันการอัปโหลด
      </button>
    </div>
  );
}

export default FileUpload;
