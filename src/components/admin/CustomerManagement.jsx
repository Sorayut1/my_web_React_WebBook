import React, { useState } from 'react';
import { Table, Button, Modal, Form, Input, Select, message } from 'antd';
import { EditOutlined, MessageOutlined } from '@ant-design/icons';

const { Option } = Select;

function CustomerManagement() {
  const [customers, setCustomers] = useState([
    {
      id: 1,
      name: 'สมชาย ทองสุข',
      email: 'somchai@example.com',
      phone: '0801234567',
      orderHistory: [
        { orderId: 1, status: 'Completed', items: ['หนังสือการตลาด', 'คีย์บอร์ด'] },
        { orderId: 2, status: 'Pending', items: ['คอมพิวเตอร์', 'หูฟัง'] },
      ],
      membershipStatus: 'Silver',
    },
    {
      id: 2,
      name: 'สุนทร จิตสุข',
      email: 'suntorn@example.com',
      phone: '0807654321',
      orderHistory: [
        { orderId: 3, status: 'Completed', items: ['สมาร์ทโฟน', 'หูฟัง'] },
        { orderId: 4, status: 'Processing', items: ['แท็บเล็ต'] },
      ],
      membershipStatus: 'Gold',
    },
  ]);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCustomer, setSelectedCustomer] = useState(null);
  const [form] = Form.useForm();

  const handleUpdateCustomer = (customer) => {
    setSelectedCustomer(customer);
    setIsModalOpen(true);
    form.setFieldsValue({
      name: customer.name,
      email: customer.email,
      phone: customer.phone,
      membershipStatus: customer.membershipStatus,
    });
  };

  const handleSaveCustomer = () => {
    const updatedCustomers = customers.map((customer) =>
      customer.id === selectedCustomer.id
        ? { ...customer, ...form.getFieldsValue() }
        : customer
    );
    setCustomers(updatedCustomers);
    setIsModalOpen(false);
    message.success('ข้อมูลลูกค้าถูกอัปเดตแล้ว');
  };

  const handleSendMessage = (customer) => {
    message.info(`ข้อความถูกส่งไปยังลูกค้า ${customer.name}`);
  };

  const columns = [
    {
      title: 'ชื่อ',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'อีเมล',
      dataIndex: 'email',
      key: 'email',
    },
    {
      title: 'เบอร์โทรศัพท์',
      dataIndex: 'phone',
      key: 'phone',
    },
    {
      title: 'สถานะสมาชิก',
      dataIndex: 'membershipStatus',
      key: 'membershipStatus',
      render: (membershipStatus) => (
        <span
          className={`${
            membershipStatus === 'Silver'
              ? 'bg-gray-400 text-white'
              : membershipStatus === 'Gold'
              ? 'bg-yellow-500 text-white'
              : 'bg-green-500 text-white'
          } py-1 px-3 rounded-full`}
        >
          {membershipStatus}
        </span>
      ),
    },
    {
      title: 'การจัดการ',
      key: 'action',
      render: (_, record) => (
        <div className="flex space-x-2">
          <Button
            icon={<EditOutlined />}
            onClick={() => handleUpdateCustomer(record)}
            className="bg-blue-500 text-white"
          >
            แก้ไข
          </Button>
          <Button
            icon={<MessageOutlined />}
            onClick={() => handleSendMessage(record)}
            className="bg-green-500 text-white"
          >
            ส่งข้อความ
          </Button>
        </div>
      ),
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <header className="flex justify-between items-center bg-white p-4 shadow rounded-md mb-6">
        <h1 className="text-2xl font-bold">การจัดการลูกค้า</h1>
      </header>

      {/* รายชื่อลูกค้า */}
      <div className="bg-white p-4 shadow rounded-md mb-6 overflow-x-auto">
        <Table
          columns={columns}
          dataSource={customers}
          rowKey="id"
          pagination={{ pageSize: 5 }}
          scroll={{ x: 'max-content' }} // ทำให้ตารางสามารถเลื่อนในแนวนอนได้
        />
      </div>

      {/* Modal แก้ไขข้อมูลลูกค้า */}
      <Modal
        title={`แก้ไขข้อมูลลูกค้า #${selectedCustomer?.id}`}
        open={isModalOpen}
        onOk={handleSaveCustomer}
        onCancel={() => setIsModalOpen(false)}
      >
        <Form form={form} layout="vertical">
          <Form.Item label="ชื่อ" name="name" rules={[{ required: true, message: 'กรุณากรอกชื่อ' }]}>
            <Input />
          </Form.Item>
          <Form.Item label="อีเมล" name="email" rules={[{ required: true, message: 'กรุณากรอกอีเมล' }]}>
            <Input />
          </Form.Item>
          <Form.Item label="เบอร์โทรศัพท์" name="phone" rules={[{ required: true, message: 'กรุณากรอกเบอร์โทรศัพท์' }]}>
            <Input />
          </Form.Item>
          <Form.Item label="สถานะสมาชิก" name="membershipStatus">
            <Select>
              <Option value="Silver">Silver</Option>
              <Option value="Gold">Gold</Option>
              <Option value="Platinum">Platinum</Option>
            </Select>
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
}

export default CustomerManagement;
