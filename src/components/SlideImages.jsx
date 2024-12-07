import React, { useState, useEffect } from "react";
import slider1 from "../assets/images/slider1.jpg";
import slider2 from "../assets/images/slider2.jpg";
import slider3 from "../assets/images/slider3.jpg";

function SlideImages() {
  const images = [slider1, slider2, slider3];
  const [currentIndex, setCurrentIndex] = useState(0);

  // ฟังก์ชันเลื่อนไปข้างหน้า
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  // ฟังก์ชันเลื่อนไปข้างหลัง
  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex - 1 < 0 ? images.length - 1 : prevIndex - 1
    );
  };

  // ตั้งค่า Auto-Slide ทุกๆ 3 วินาที
  useEffect(() => {
    const interval = setInterval(nextSlide, 3000); // 3000ms = 3 วินาที

    // ล้าง interval เมื่อ Component ถูก unmount หรือ update
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full overflow-hidden" data-carousel="slide">
      {/* Wrapper สำหรับภาพ */}
      <div className="relative h-56 md:h-96">
        <div
          className="relative w-full h-full flex transition-transform duration-700 ease-in-out"
          style={{
            transform: `translateX(-${currentIndex * 100}%)`, // ใช้ translateX เพื่อให้การเลื่อนสมูท
          }}
        >
          {images.map((img, index) => (
            <div
              key={index}
              className="w-full flex-shrink-0"
            >
              <img
                src={img}
                className="w-full h-full object-cover" // ใช้ object-cover เพื่อให้ภาพครอบคลุมพื้นที่
                alt={`Slider ${index + 1}`}
              />
            </div>
          ))}
        </div>
      </div>

      {/* ปุ่ม Previous */}
      <button
        type="button"
        onClick={prevSlide}
        className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        data-carousel-prev
      >
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 group-hover:bg-white/50">
          <svg
            className="w-4 h-4 text-white"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 6 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 1 1 5l4 4"
            />
          </svg>
          <span className="sr-only">Previous</span>
        </span>
      </button>

      {/* ปุ่ม Next */}
      <button
        type="button"
        onClick={nextSlide}
        className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        data-carousel-next
      >
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 group-hover:bg-white/50">
          <svg
            className="w-4 h-4 text-white"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 6 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m1 9 4-4-4-4"
            />
          </svg>
          <span className="sr-only">Next</span>
        </span>
      </button>
    </div>
  );
}

export default SlideImages;
