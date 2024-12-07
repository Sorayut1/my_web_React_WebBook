import React, { useState } from 'react';
import NavbarUser from '../../components/NavbarUser';
import { TrashIcon } from '@heroicons/react/24/solid'; // นำเข้าไอคอนขยะ
import { Steps } from 'antd'; // Import Steps from Ant Design
import ShippingAddressPage from './ShippingAddressPage';
import PaymentPage from './PaymentPage';

const { Step } = Steps;

const CartPage = () => {
  const [cartItems, setCartItems] = useState([
    { id: 1, name: 'หนังสือ 1', price: 350, quantity: 1 },
    { id: 2, name: 'หนังสือ 2', price: 500, quantity: 1 },
    { id: 3, name: 'หนังสือ 3', price: 450, quantity: 1 },
  ]);
  const [currentStep, setCurrentStep] = useState(0); // Step state for the stepper
  const [totalPrice, setTotalPrice] = useState(
    cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0)
  );

  const increaseQuantity = (id) => {
    setCartItems(cartItems.map(item =>
      item.id === id ? { ...item, quantity: item.quantity + 1 } : item
    ));
  };

  const decreaseQuantity = (id) => {
    setCartItems(cartItems.map(item =>
      item.id === id && item.quantity > 1 
        ? { ...item, quantity: item.quantity - 1 } : item
    ).filter(item => item.quantity > 0));
  };

  const removeItem = (id) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  const nextStep = () => {
    if (currentStep < 2) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  return (
    <>
      <NavbarUser />
      <div className="min-h-screen">
        <div className="w-full max-w-4xl mx-auto mt-20">
          <Steps current={currentStep} className="mb-8">
            <Step title="ตะกร้าสินค้า" />
            <Step title="ที่อยู่" />
            <Step title="ชำระเงิน" />
          </Steps>

          {currentStep === 0 && (
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h2 className="text-3xl font-semibold mb-6 text-gray-900">ตะกร้าสินค้าของคุณ</h2>

              {cartItems.length > 0 ? (
                <ul>
                  {cartItems.map((item) => (
                    <li key={item.id} className="flex justify-between items-center py-4 border-b">
                      <div>
                        <span className="font-semibold text-gray-900">{item.name}</span>
                        <div className="text-sm text-gray-500">จำนวน: {item.quantity} เล่ม</div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <button
                          onClick={() => decreaseQuantity(item.id)}
                          className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300"
                        >
                          -
                        </button>
                        <span className="text-gray-700">{item.quantity}</span>
                        <button
                          onClick={() => increaseQuantity(item.id)}
                          className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300"
                        >
                          +
                        </button>
                        <span className="text-gray-700">฿{item.price * item.quantity}</span>

                        <button
                          onClick={() => removeItem(item.id)}
                          className="text-red-600 hover:text-red-800 ml-4"
                        >
                          <TrashIcon className="w-5 h-5" />
                        </button>
                      </div>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-gray-500 text-center">ตะกร้าของคุณว่างเปล่า</p>
              )}

              <div className="mt-4 flex justify-between items-center">
                <span className="text-xl font-bold">รวมทั้งหมด: </span>
                <span className="text-xl text-yellow-500">฿{totalPrice}</span>
              </div>

              <div className="mt-6">
                <button
                  onClick={nextStep}
                  className="w-full bg-yellow-500 text-white py-3 rounded hover:bg-yellow-400"
                >
                  ไปที่หน้าที่อยู่
                </button>
              </div>
            </div>
          )}

          {currentStep === 1 && (
            <ShippingAddressPage onNext={nextStep} onBack={prevStep} />
          )}

          {currentStep === 2 && (
            <PaymentPage totalPrice={totalPrice} onBack={prevStep} />
          )}
        </div>
      </div>
    </>
  );
};

export default CartPage;
