// NavbarUser.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // นำเข้า Link จาก react-router-dom

function NavbarUser() {
  const [menuOpen, setMenuOpen] = useState(false); // State สำหรับควบคุมเมนู
  const [cartCount, setCartCount] = useState(3); // จำนวนสินค้าในตะกร้า

  const toggleMenu = () => {
    setMenuOpen(!menuOpen); // Toggle เปิด/ปิดเมนู
  };

  return (
    <>
      <nav className="bg-gray-50 fixed top-0 left-0 w-full z-50 shadow">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          {/* Logo */}
          <Link to="/homeuser" className="flex items-center space-x-3 rtl:space-x-reverse">
            <span className="self-center text-2xl font-bold tracking-wide">
              Book<span className="text-yellow-300">Store</span>
            </span>
          </Link>

          <button
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
            onClick={toggleMenu}
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
              menuOpen ? 'block' : 'hidden'
            } w-full md:block md:w-auto`}
          >
            <ul className="flex flex-col font-medium mt-4 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-transparent">
              <li>
                <Link
                  to="/user/homeuser"
                  className="block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700"
                >
                  หน้าแรก
                </Link>
              </li>
              <li>
                <Link
                  to="/user/profile"
                  className="block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700"
                >
                  โปรไฟล์
                </Link>
              </li>
              <li className="relative">
                {/* เปลี่ยนปุ่มตะกร้าให้เป็นลิงก์ไปยังหน้าตะกร้า */}
                <Link
                  to="/user/cartpage"
                  className="block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700"
                >
                  ตะกร้า
                </Link>
                {cartCount > 0 && (
                  <span className="absolute -top-3 -right-4 bg-red-600 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                    {cartCount}
                  </span>
                )}
              </li>
              <li>
                <Link
                  to="/user/orderHistory"
                  className="block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700"
                >
                  ประวัติการสั่งซื้อ
                </Link>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700"
                >
                  ออกจากระบบ
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavbarUser;
