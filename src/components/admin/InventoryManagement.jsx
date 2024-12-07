import React, { useState } from 'react';
import { Upload, Button, message } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import BookTable from './BookTable';
import CategoryManagement from './CategoryManagement'; // Import Component
import FileUpload from './FileUpload'; // Import FileUpload component
import { saveAs } from 'file-saver';
import * as XLSX from 'xlsx';
import jsPDF from 'jspdf';

function InventoryManagement() {
  const [books, setBooks] = useState([]);
  const [categories, setCategories] = useState([
    'นิยาย',
    'วิชาการ',
    'พัฒนาตนเอง',
    'เทคโนโลยี',
  ]);
  const [form, setForm] = useState({
    name: '',
    author: '',
    isbn: '',
    price: '',
    category: '',
    stock: '',
    imageUrl: '', // เพิ่ม field สำหรับเก็บ URL ของรูปภาพ
  });
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize] = useState(10);

  // ฟังก์ชันที่จัดการเมื่อกรอกข้อมูลในฟอร์ม
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  // ฟังก์ชันที่จัดการเมื่ออัปโหลดรูปภาพ
  const handleImageUpload = (info) => {
    if (info.file.status === 'done') {
      message.success(`${info.file.name} file uploaded successfully`);
      setForm({ ...form, imageUrl: info.file.response.url });
    } else if (info.file.status === 'error') {
      message.error(`${info.file.name} file upload failed.`);
    }
  };

  const handleAddBook = () => {
    if (!form.name || !form.author || !form.isbn || !form.price || !form.category || !form.stock) {
      alert('กรุณากรอกข้อมูลให้ครบ');
      return;
    }
    setBooks([...books, { ...form, id: `${Date.now()}` }]);
    setForm({ name: '', author: '', isbn: '', price: '', category: '', stock: '', imageUrl: '' });
  };

  const handleDeleteBook = (id) => {
    setBooks(books.filter((book) => book.id !== id));
  };

  const handleAddCategory = (category) => {
    setCategories([...categories, category]);
  };

  const handleDeleteCategory = (category) => {
    setCategories(categories.filter((cat) => cat !== category));
  };

  const exportToPDF = () => {
    const doc = new jsPDF();
    doc.text('รายการสินค้า', 20, 20);
    let y = 30;

    books.forEach((book, index) => {
      doc.text(`${index + 1}. ${book.name} - ฿${book.price} - ${book.author} - ${book.isbn}`, 20, y);
      y += 10;
    });

    doc.save('inventory.pdf');
  };

  const exportToExcel = () => {
    const ws = XLSX.utils.json_to_sheet(books);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'สินค้า');
    XLSX.writeFile(wb, 'inventory.xlsx');
  };

  // Handle file upload confirmation
  const handleFileUpload = (uploadedBooks) => {
    setBooks([...books, ...uploadedBooks]);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <header className="flex justify-between items-center bg-white p-4 shadow rounded-md mb-6">
        <h1 className="text-2xl font-bold">การจัดการสินค้า</h1>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div className="bg-white p-4 shadow rounded-md">
          <h2 className="text-lg font-semibold mb-4">เพิ่มสินค้าใหม่</h2>
          <form className="space-y-4">
            <input
              type="text"
              name="name"
              placeholder="ชื่อหนังสือ"
              value={form.name}
              onChange={handleInputChange}
              className="block w-full p-2 border rounded"
            />
            <input
              type="text"
              name="author"
              placeholder="ผู้แต่ง"
              value={form.author}
              onChange={handleInputChange}
              className="block w-full p-2 border rounded"
            />
            <input
              type="text"
              name="isbn"
              placeholder="ISBN"
              value={form.isbn}
              onChange={handleInputChange}
              className="block w-full p-2 border rounded"
            />
            <input
              type="number"
              name="price"
              placeholder="ราคา (฿)"
              value={form.price}
              onChange={handleInputChange}
              className="block w-full p-2 border rounded"
            />
            <select
              name="category"
              value={form.category}
              onChange={handleInputChange}
              className="block w-full p-2 border rounded"
            >
              <option value="">เลือกหมวดหมู่</option>
              {categories.map((category, index) => (
                <option key={index} value={category}>
                  {category}
                </option>
              ))}
            </select>
            <input
              type="number"
              name="stock"
              placeholder="จำนวนสต็อก"
              value={form.stock}
              onChange={handleInputChange}
              className="block w-full p-2 border rounded"
            />

            {/* Ant Design Upload for Image */}
            <Upload
              name="image"
              action="/upload" // ตั้งค่า endpoint ที่จะรับไฟล์รูปภาพ
              showUploadList={false}
              onChange={handleImageUpload}
              accept="image/*"
              className="block w-full p-2 border rounded"
            >
              <Button icon={<UploadOutlined />}>อัปโหลดรูปภาพสินค้า</Button>
            </Upload>

            {/* แสดงตัวอย่างรูปที่อัปโหลด */}
            {form.imageUrl && (
              <div className="mt-2">
                <img src={form.imageUrl} alt="Product" className="w-32 h-32 object-cover" />
              </div>
            )}

            <button
              type="button"
              onClick={handleAddBook}
              className="w-full bg-blue-500 text-white p-2 rounded"
            >
              เพิ่มสินค้า
            </button>
          </form>

          {/* FileUpload Component */}
          <FileUpload onFileUpload={handleFileUpload} />

          <h2 className="text-lg font-semibold mt-3 mb-4">Export file (PDF, Excel)</h2>
          <div className="mb-6">
            <button
              onClick={exportToPDF}
              className="bg-blue-500 text-white p-2 rounded mr-4"
            >
              Export to PDF
            </button>
            <button
              onClick={exportToExcel}
              className="bg-green-500 text-white p-2 rounded"
            >
              Export to Excel
            </button>
          </div>
        </div>

        <CategoryManagement
          categories={categories}
          onAddCategory={handleAddCategory}
          onDeleteCategory={handleDeleteCategory}
        />
      </div>

      <div className="bg-white p-4 shadow rounded-md">
        <BookTable
          books={books}
          currentPage={currentPage}
          pageSize={pageSize}
          onPageChange={setCurrentPage}
          onDelete={handleDeleteBook}
        />
      </div>
    </div>
  );
}

export default InventoryManagement;
