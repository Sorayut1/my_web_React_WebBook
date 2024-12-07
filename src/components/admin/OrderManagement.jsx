import React, { useState } from 'react';
import { Table, Button, Select, Input, Modal, Form } from 'antd';
import { EditOutlined } from '@ant-design/icons';

const { Option } = Select;

function OrderManagement() {
  const [orders, setOrders] = useState([
    {
      id: 1,
      customerName: 'สมชาย ทองสุข',
      address: '123/45 หมู่ 7 ถนนราษฎร์บำรุง กรุงเทพฯ 10100',
      items: [
        { name: 'หนังสือการตลาด', quantity: 2, price: 300 },
        { name: 'คีย์บอร์ด', quantity: 1, price: 500 },
      ],
      status: 'Pending',
    },
    {
      id: 2,
      customerName: 'สุนทร จิตสุข',
      address: '67/89 หมู่ 2 ถนนสุขุมวิท กรุงเทพฯ 10110',
      items: [
        { name: 'คอมพิวเตอร์', quantity: 1, price: 10000 },
        { name: 'หูฟัง', quantity: 2, price: 1500 },
      ],
      status: 'Processing',
    },
  ]);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedOrder, setSelectedOrder] = useState(null);
  const [form] = Form.useForm();

  const handleUpdateStatus = (order) => {
    setSelectedOrder(order);
    setIsModalOpen(true); // Use open instead of visible
    form.setFieldsValue({ status: order.status });
  };

  const handleSaveStatus = () => {
    const updatedOrders = orders.map((order) =>
      order.id === selectedOrder.id
        ? { ...order, status: form.getFieldValue('status') }
        : order
    );
    setOrders(updatedOrders);
    setIsModalOpen(false); // Use open instead of visible
  };

  const columns = [
    {
      title: 'หมายเลขคำสั่งซื้อ',
      dataIndex: 'id',
      key: 'id',
      render: (text) => <span className="font-semibold">{text}</span>,
    },
    {
      title: 'ชื่อลูกค้า',
      dataIndex: 'customerName',
      key: 'customerName',
    },
    {
      title: 'ที่อยู่จัดส่ง',
      dataIndex: 'address',
      key: 'address',
      render: (address) => <span className="truncate max-w-xs">{address}</span>,
    },
    {
      title: 'รายการสินค้า',
      key: 'items',
      render: (text, record) => (
        <div>
          {record.items.map((item, index) => (
            <p key={index}>
              {item.name} - {item.quantity} ชิ้น
            </p>
          ))}
        </div>
      ),
    },
    {
      title: 'สถานะคำสั่งซื้อ',
      dataIndex: 'status',
      key: 'status',
      render: (status) => (
        <span
          className={`${
            status === 'Pending'
              ? 'bg-yellow-500 text-white'
              : status === 'Processing'
              ? 'bg-blue-500 text-white'
              : status === 'Completed'
              ? 'bg-green-500 text-white'
              : 'bg-red-500 text-white'
          } py-1 px-3 rounded-full`}
        >
          {status}
        </span>
      ),
    },
    {
      title: 'การจัดการ',
      key: 'action',
      render: (_, record) => (
        <Button
          icon={<EditOutlined />}
          onClick={() => handleUpdateStatus(record)}
          className="bg-blue-500 text-white"
        >
          อัปเดตสถานะ
        </Button>
      ),
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <header className="flex justify-between items-center bg-white p-4 shadow rounded-md mb-6">
        <h1 className="text-2xl font-bold">การจัดการคำสั่งซื้อ</h1>
      </header>

      {/* รายการคำสั่งซื้อ */}
      <div className="bg-white p-4 shadow rounded-md mb-6">
        <Table
          columns={columns}
          dataSource={orders}
          rowKey="id"
          pagination={{ pageSize: 5 }}
          scroll={{ x: 'max-content' }} // เพิ่ม scroll เพื่อให้สามารถเลื่อนแนวนอนได้เมื่อหน้าจอแคบ
          responsive={true} // ใช้ responsive prop ของ Table เพื่อให้รองรับขนาดหน้าจอที่แตกต่างกัน
        />
      </div>

      {/* Modal อัปเดตสถานะคำสั่งซื้อ */}
      <Modal
        title={`อัปเดตสถานะคำสั่งซื้อ #${selectedOrder?.id}`}
        open={isModalOpen} // Changed 'visible' to 'open'
        onOk={handleSaveStatus}
        onCancel={() => setIsModalOpen(false)} // Changed 'visible' to 'open'
      >
        <Form form={form} layout="vertical">
          <Form.Item label="สถานะคำสั่งซื้อ" name="status">
            <Select>
              <Option value="Pending">Pending</Option>
              <Option value="Processing">Processing</Option>
              <Option value="Completed">Completed</Option>
              <Option value="Canceled">Canceled</Option>
            </Select>
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
}

export default OrderManagement;
