import React, { useState }  from 'react'
import SlideImages from '../components/SlideImages'
import Footer from '../components/Footer'
import SlideCard from '../components/SliderCard'
import SlidePromotion from '../components/SlidePromotion'
import BookFlashSale from '../components/BookFlashSale'
import Categories from '../components/Categories'
import SearchBar from '../components/SearchBar'
import Books from '../components/Books'

import { Link } from 'react-router-dom'; // นำเข้า Link จาก react-router-dom

function Shared() {
  const [menuOpen, setMenuOpen] = useState(false); // State สำหรับควบคุมเมนู

  const toggleMenu = () => {
    setMenuOpen(!menuOpen); // Toggle เปิด/ปิดเมนู
  };

  return (
    <>
      

      <nav className="bg-gray-50 fixed top-0 left-0 w-full z-50 shadow">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
 {/* Logo */}
 <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
          <span className="self-center text-2xl font-bold tracking-wide">
            Book<span className="text-yellow-300">Store</span>
          </span>
        </a>

        <button
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
          onClick={toggleMenu} // เรียก toggleMenu เมื่อกดปุ่ม
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        <div
          className={`${
            menuOpen ? "block" : "hidden"
          } w-full md:block md:w-auto`} // ควบคุมการแสดงผลเมนู
        >
          <ul className="flex flex-col font-medium mt-4 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-transparent">
          
            <li>
              <Link
                to="/login"
                className="block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700"
              >
                Login
              </Link>
            </li>
            <li>
              <Link
                to="/register"
                className="block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700"
              >
                Register
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>




<SlideImages/>
<SlidePromotion/>
<SearchBar/>
<Categories/>
<SlideCard/>
<BookFlashSale/>
<Books/>
<Footer/>
    </>
  )
}

export default Shared