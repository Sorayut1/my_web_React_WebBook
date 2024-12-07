import React, { useState } from "react";
import { Drawer, Input, DatePicker, Upload, Button } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import NavbarUser from "../../components/NavbarUser";

function Profile() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const showDrawer = () => setIsDrawerOpen(true);
  const closeDrawer = () => setIsDrawerOpen(false);

  return (
    <>
      <NavbarUser />
      <div className="bg-gray-100 min-h-screen mt-7 py-10">
        <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r bg-yellow-400 p-6 text-white">
            <h1 className="text-2xl font-bold">My Profile</h1>
          </div>

          {/* Profile Section */}
          <div className="p-6">
            <div className="flex items-center gap-6">
              <div className="w-24 h-24 rounded-full bg-yellow-100 border-4 border-yellow-400 flex items-center justify-center text-2xl font-bold text-blue-600">
                U
              </div>
              <div>
                <h2 className="text-xl font-semibold text-gray-800">
                  John Doe
                </h2>
                <p className="text-gray-600">johndoe@example.com</p>
                <button
                  className="mt-2 bg-yellow-400 hover:bg-yellow-600 text-white py-1 px-4 rounded shadow-md"
                  onClick={showDrawer}
                >
                  Edit Profile
                </button>
              </div>
            </div>

            <hr className="my-6 border-gray-200" />

            {/* Order History Section */}
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-4">
                Recent Orders
              </h3>
              <ul className="divide-y divide-gray-200">
                <li className="py-4 flex justify-between items-center">
                  <div>
                    <h4 className="text-gray-700 font-medium">Order #12345</h4>
                    <p className="text-sm text-gray-500">Placed on: 2023-11-01</p>
                  </div>
                  <span className="bg-green-100 text-green-600 text-xs font-medium py-1 px-3 rounded">
                    Delivered
                  </span>
                </li>
                <li className="py-4 flex justify-between items-center">
                  <div>
                    <h4 className="text-gray-700 font-medium">Order #12344</h4>
                    <p className="text-sm text-gray-500">Placed on: 2023-10-28</p>
                  </div>
                  <span className="bg-yellow-100 text-yellow-600 text-xs font-medium py-1 px-3 rounded">
                    Pending
                  </span>
                </li>
              </ul>
              <a href="#" className="text-blue-500 hover:underline text-sm mt-4 block">
                View All Orders
              </a>
            </div>

            <hr className="my-6 border-gray-200" />

            {/* Settings Section */}
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-4">
                Settings
              </h3>
              <ul className="space-y-3">
                <li>
                  <a href="#" className="block text-gray-700 hover:text-blue-500 font-medium">
                    Change Password
                  </a>
                </li>
                <li>
                  <a href="#" className="block text-gray-700 hover:text-blue-500 font-medium">
                    Payment Methods
                  </a>
                </li>
                <li>
                  <a href="#" className="block text-gray-700 hover:text-blue-500 font-medium">
                    Address
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Drawer for Edit Profile */}
      <Drawer
        title="Edit Profile"
        width={400}
        onClose={closeDrawer}
        open={isDrawerOpen}
        bodyStyle={{ paddingBottom: 80 }}
      >
        <form>
          {/* Upload Image */}
          <div className="mb-4">
            <label className="block font-medium text-gray-700">Profile Picture</label>
            <Upload>
              <Button icon={<UploadOutlined />}>Click to Upload</Button>
            </Upload>
          </div>

          {/* Name Input */}
          <div className="mb-4">
            <label className="block font-medium text-gray-700">Name</label>
            <Input placeholder="Enter your name" />
          </div>

          {/* Email Input */}
          <div className="mb-4">
            <label className="block font-medium text-gray-700">Email</label>
            <Input placeholder="Enter your email" />
          </div>

          {/* Date of Birth */}
          <div className="mb-4">
            <label className="block font-medium text-gray-700">Date of Birth</label>
            <DatePicker style={{ width: "100%" }} />
          </div>

          <div className="flex justify-end gap-3">
            <Button onClick={closeDrawer}>Cancel</Button>
            <Button type="primary">Save</Button>
          </div>
        </form>
      </Drawer>
    </>
  );
}

export default Profile;
