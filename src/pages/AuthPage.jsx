import React, { useState } from "react";
import LoginForm from "./Login";
import RegisterForm from "./Register";

function AuthPage() {
  const [isLogin, setIsLogin] = useState(true); // State เพื่อสลับหน้าระหว่าง Login / Register

  const handleLogin = (data) => {
    console.log("Login Data:", data);
    alert("เข้าสู่ระบบสำเร็จ!");
  };

  const handleRegister = (data) => {
    console.log("Register Data:", data);
    alert("สมัครสมาชิกสำเร็จ!");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      {isLogin ? (
        <LoginForm onLogin={handleLogin} />
      ) : (
        <RegisterForm onRegister={handleRegister} />
      )}
      <button
        onClick={() => setIsLogin(!isLogin)} // สลับหน้าระหว่าง Login/Register
        className="absolute top-4 right-4 text-blue-500 hover:underline"
      >
        {isLogin ? "ยังไม่มีบัญชี? สมัครสมาชิก" : "มีบัญชีอยู่แล้ว? เข้าสู่ระบบ"}
      </button>
    </div>
  );
}

export default AuthPage;
