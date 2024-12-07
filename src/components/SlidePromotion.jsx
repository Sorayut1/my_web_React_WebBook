import React, { useState, useEffect } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";

// ตัวอย่างข้อมูลหนังสือ
const books = [
  { image: "https://placehold.co/600x400/png" },
  { image: "https://placehold.co/600x400/png" },
  { image: "https://placehold.co/600x400/png" },
  { image: "https://placehold.co/600x400/png" },
  { image: "https://placehold.co/600x400/png" },
  { image: "https://placehold.co/600x400/png" },
];

function SlidePromotion() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCards, setVisibleCards] = useState(3); // จำนวนการ์ดที่แสดง

  // อัปเดตจำนวนการ์ดที่แสดงตามขนาดหน้าจอ
  useEffect(() => {
    const updateVisibleCards = () => {
      if (window.innerWidth < 640) {
        setVisibleCards(1); // สำหรับหน้าจอเล็ก
      } else if (window.innerWidth < 1024) {
        setVisibleCards(2); // สำหรับหน้าจอกลาง
      } else {
        setVisibleCards(3); // สำหรับหน้าจอใหญ่
      }
    };
    updateVisibleCards(); // เรียกครั้งแรกเมื่อโหลดหน้า
    window.addEventListener("resize", updateVisibleCards); // ฟังค์ชันทำงานเมื่อหน้าจอเปลี่ยนขนาด
    return () => window.removeEventListener("resize", updateVisibleCards);
  }, []);

  // ฟังก์ชันถัดไป
  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + visibleCards < books.length ? prevIndex + 1 : 0
    );
  };

  // ฟังก์ชันย้อนกลับ
  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex - 1 >= 0 ? prevIndex - 1 : books.length - visibleCards
    );
  };

  // Auto Slide
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000); // สไลด์ทุก 3 วินาที
    return () => clearInterval(interval); // ลบ interval เมื่อ component ถูกทำลาย
  }, [visibleCards]);

  return (
    <div className="relative w-full mt-5">
      {/* Carousel Wrapper */}
      <div className="flex overflow-hidden">
        <div
          className="flex transition-transform duration-500"
          style={{
            transform: `translateX(-${
              (currentIndex * 100) / visibleCards
            }%)`,
          }}
        >
          {books.map((book, index) => (
            <div
              key={index}
              className="flex-shrink-0 px-2"
              style={{ width: `${100 / visibleCards}%` }} // ขนาดการ์ดตามจำนวนที่แสดง
            >
              <div className="bg-white shadow-lg rounded-lg overflow-hidden">
                <img
                  src={book.image}
                  alt={`Slide ${index}`}
                  className="w-full h-72 object-cover rounded-lg"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ปุ่ม Previous */}
      <button
        type="button"
        onClick={prevSlide}
        className="absolute top-1/2 left-0 transform -translate-y-1/2 z-30 px-2 flex items-center justify-center"
      >
        <ChevronLeftIcon className="w-8 h-8 text-gray-700 bg-white rounded-full shadow-md" />
      </button>

      {/* ปุ่ม Next */}
      <button
        type="button"
        onClick={nextSlide}
        className="absolute top-1/2 right-0 transform -translate-y-1/2 z-30 px-2 flex items-center justify-center"
      >
        <ChevronRightIcon className="w-8 h-8 text-gray-700 bg-white rounded-full shadow-md" />
      </button>
    </div>
  );
}

export default SlidePromotion;
