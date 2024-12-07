import React from "react";

const books = [
    {
      title: "เดินช้าแต่ถึงเส้นชัย",
      price: "299.00",
      discountPrice: "209.00",
      discount: "30%",
      image: "https://placehold.co/400x400",
      label: "ขายดีเว่อร์",
    },
    {
      title: "ความสุขเริ่มต้นที่ตัวเอง",
      price: "350.00",
      discountPrice: "245.00",
      discount: "30%",
      image: "https://placehold.co/400x400",
      label: "แนะนำ",
    },
    {
      title: "ปลดล็อกชีวิตด้วยความคิดบวก",
      price: "280.00",
      discountPrice: "196.00",
      discount: "30%",
      image: "https://placehold.co/400x400",
      label: "ขายดี",
    },
    {
      title: "เส้นทางเศรษฐีใน 7 วัน",
      price: "320.00",
      discountPrice: "224.00",
      discount: "30%",
      image: "https://placehold.co/400x400",
      label: "ใหม่ล่าสุด",
    },
    {
      title: "เพราะรักคือคำตอบ",
      price: "260.00",
      discountPrice: "182.00",
      discount: "30%",
      image: "https://placehold.co/400x400",
      label: "ขายดี",
    },
    {
      title: "ศิลปะของการไม่สนใจ",
      price: "315.00",
      discountPrice: "220.00",
      discount: "30%",
      image: "https://placehold.co/400x400",
      label: "แนะนำ",
    },
    {
      title: "คิดแบบเศรษฐี คิดแบบสำเร็จ",
      price: "280.00",
      discountPrice: "196.00",
      discount: "30%",
      image: "https://placehold.co/400x400",
      label: "ขายดีเว่อร์",
    },

  ];
  

function BookFlashSale() {
  return (
    <div className=" p-6">
      {/* หัวข้อ Flash Sale และปุ่มดูทั้งหมด */}
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-2xl font-bold text-red-600">Flash Sale</h2>
        <a
          href="/all-products"
          className="text-blue-500 hover:text-blue-600 font-semibold  text-sm"
        >
          ดูทั้งหมด &gt;
        </a>
      </div>

 {/* เลย์เอาต์สินค้าแบบกริด */}
<div className="grid grid-cols-2 md:grid-cols-5 h-full gap-4">
  {books.map((book, index) => (
    <div
      key={index}
      className="bg-white shadow-md rounded-lg overflow-hidden flex flex-col relative"
    >
      {/* ป้ายส่วนลด */}
      <div className="absolute top-2 left-2 bg-red-500 text-white px-2 py-1 text-xs font-bold rounded-lg shadow">
        ลด {book.discount}
      </div>
      {/* รูปภาพหนังสือ */}
      <img
        src={book.image}
        alt={book.title}
        className="w-full h-40 object-cover"
      />
      {/* ข้อมูลหนังสือ */}
      <div className="p-4 flex flex-col flex-grow">
        <h3 className="text-sm font-semibold">{book.title}</h3>
        <div className="flex items-center gap-2 mt-2">
          <span className="text-red-600 font-bold">
            ฿{book.discountPrice}
          </span>
          <span className="line-through text-gray-500 text-sm">
            ฿{book.price}
          </span>
        </div>
        {/* ปุ่ม Add to Cart */}
        <div className="mt-auto">
          <button className="w-full bg-yellow-400 hover:bg-yellow-500 text-white font-semibold py-2 rounded">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  ))}
</div>

    </div>
  );
}

export default BookFlashSale;
