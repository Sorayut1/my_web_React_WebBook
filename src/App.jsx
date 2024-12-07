import { useState, useEffect } from 'react';
import './App.css';
import HomeUser from './pages/user/HomeUser';

import Shared from './pages/Shared';
import Login from './pages/Login';
import Register from './pages/Register';
import Profile from './pages/user/ProfileUser';
import OrderHistory from './pages/user/OrderHistory';
import CartPage from './pages/user/CartPage';
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';

//page User

//page Admin
import HomeAdmin from './pages/admin/HomeAdmin';
import Inventory from './pages/admin/Inventory';
import Order from './pages/admin/Order';
import Customer from './pages/admin/Customer';

// Routes
import AdminRoute from './routes/AdminRoute';
import UserRoute from './routes/UserRoute';

// PrivateRoute Component สำหรับจัดการการเข้าถึง
function PrivateRoute({ element, roleRequired }) {
  const navigate = useNavigate();
  
  const [isAuthenticated, setIsAuthenticated] = useState(false);


 

  
}

function App() {
  const [role, setRole] = useState(localStorage.getItem('role') || ''); // เก็บ role ของผู้ใช้ (สามารถขยายหากต้องการใช้งานในอนาคต)

  return (
    <BrowserRouter>
      <Routes>
        {/* หน้าเว็บที่สามารถเข้าถึงได้จากทุกคน */}
        <Route path="/" element={<Shared />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* หน้าเว็บของผู้ใช้ */}
        <Route path="/user/homeuser"  
        element={
        <UserRoute>
          <HomeUser />
        </UserRoute>
        }  />
        <Route path="/user/profile" 
        element={
        <UserRoute>
          <Profile />
        </UserRoute>
        }  /> 
        <Route path="/user/cartpage"  
        element={
        <UserRoute>
          <CartPage />
        </UserRoute>
        }  />
        <Route path="/user/orderHistory" 
        element={
        <UserRoute>
        <OrderHistory />
        </UserRoute>
        } />

        {/* หน้าเว็บของแอดมิน */}
        <Route path="/admin/homeadmin"  
        element={
        <AdminRoute>
        <HomeAdmin />
        </AdminRoute>
        }  />
        <Route path="/admin/inventory"  
        element={
        <AdminRoute>
        <Inventory />
        </AdminRoute>
        }  />
        <Route path="/admin/order"  
        element={
        <AdminRoute>
        <Order />
        </AdminRoute>
        }  />
        <Route path="/admin/customer"  
        element={
        <AdminRoute>
        <Customer />
        </AdminRoute>
        }  />


        {/* หน้า fallback ถ้าไม่มีการจับเส้นทาง */}
        <Route path="*" element={<div>404 - หน้าไม่พบ</div>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
