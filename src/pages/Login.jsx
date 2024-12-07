import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'; // นำเข้า Link และ useNavigate จาก react-router-dom


function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); // ใช้ hook สำหรับการนำทาง


  const handleSubmit = async (e) => {
    e.preventDefault();
    navigate('/user/homeuser');
     
  };


  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-sm">
        <h2 className="text-2xl font-bold text-center text-gray-700 mb-6">เข้าสู่ระบบ</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-semibold text-gray-600">อีเมล</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-3 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="กรอกอีเมลของคุณ"
              required
            />
          </div>
          <div className="mb-6">
            <label htmlFor="password" className="block text-sm font-semibold text-gray-600">รหัสผ่าน</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-3 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="กรอกรหัสผ่านของคุณ"
              required
            />
          </div>
          <div className="mb-6">
            <button
              type="submit"
              className="w-full py-3 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition duration-300"
            >
              เข้าสู่ระบบ
            </button>
          </div>
          <p className="text-center text-sm text-gray-600">
            ไม่มีบัญชีใช่ไหม?{' '}
            <Link to="/register" className="text-blue-500 hover:underline">
              สมัครสมาชิกที่นี่
            </Link>
          </p>
        </form>

        {/* ลิงก์ไปกลับหน้าแรก */}
        <div className="mt-4 text-center">
          <p className="text-sm text-gray-600">
            <Link to="/" className="text-blue-500 hover:underline">
              กลับไปที่หน้าแรก
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
