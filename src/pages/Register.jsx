import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { notification } from 'antd';


function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      notification.error({
        message: 'Password Mismatch',
        description: 'Your passwords do not match. Please try again.',
      });
      return;
    }

    try {
      setLoading(true);
    

      if (response.status === 201) {
        setName('');
        setEmail('');
        setPassword('');
        setConfirmPassword('');
        
        notification.success({
          message: 'Registration Successful',
          description: 'Your account has been created successfully. Please log in.',
        });

        navigate('/login');
      } else {
        notification.error({
          message: 'Registration Failed',
          description: response.data || 'Something went wrong. Please try again later.',
        });
      }
    } catch (err) {
        // ล้างข้อมูล input เมื่อเกิดข้อผิดพลาด
        setName('');
        setEmail('');
        setPassword('');
        setConfirmPassword('');
        
      if (err.response?.data === 'User Already Exists!!!') {
        notification.error({
          message: 'Email Already Exists',
          description: 'This email is already registered. Please use a different email.',
        });
      } else {
        notification.error({
          message: 'Registration Failed',
          description: err.response?.data || 'Registration failed. Please try again.',
        });
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-sm">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Create an Account</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Full Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter your full name"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address</label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter your email"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter your password"
              required
            />
          </div>
          <div className="mb-6">
            <label htmlFor="confirm-password" className="block text-sm font-medium text-gray-700">Confirm Password</label>
            <input
              type="password"
              id="confirm-password"
              name="confirmPassword"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              placeholder="Confirm your password"
              required
            />
          </div>
          <div className="mb-6">
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-blue-600 text-white px-4 py-2 rounded-md shadow hover:bg-blue-700 transition duration-300"
            >
              {loading ? 'Registering...' : 'Register'}
            </button>
          </div>
          <p className="text-center text-sm text-gray-600">
            Already have an account?{' '}
            <Link to="/login" className="text-blue-500 hover:underline">Login here</Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Register;
