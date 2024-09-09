import React, { useState } from 'react';
import { Modal, Input, Button, Form, notification } from 'antd';

const Modal1 = () => {
  const [form] = Form.useForm();

  const handleFinish = (values) => {
    console.log('Email:', values.email);

    notification.success({
      message: 'Success',
      description: 'Your email has been submitted.',
    });
    form.resetFields();
  };

  const handleFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <> <Button className='submit-button'  onClick={showModal}>
      Get a Free Proposal
    </Button>
      <Modal
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={null} // To customize footer buttons
        style={{
          textAlign: 'center',
          background: "none"
        }}
        // Center align the content
        width={600} // Optional: adjust the width of the modal

      >
        <div style={{ marginBottom: '16px', textAlign: 'center', marginTop: "2rem" }}>
          <h2 style={{ margin: 0 }}>Brand Marketing Hub</h2>
          <p style={{ margin: 0, color: '#888' }}>
            Grow Your Client Base With Data-Driven and Targeted Strategies
          </p>
        </div>
        <Form
          form={form}
          layout="inline"
          onFinish={handleFinish}
          onFinishFailed={handleFinishFailed}
          style={{ justifyContent: 'center', flexDirection: "column" }}
        >
          <Form.Item
            name="email"
            rules={[
              {
                required: true,
                message: 'Please input your email!',
              },
              {
                type: 'email',
                message: 'Please enter a valid email!',
              },
            ]}
            style={{ flex: 1, marginRight: '8px' }} // Margin to separate input and button
          >
            <Input
              type="email"
              placeholder="Enter your email"
              style={{
                width: '100%', // Make input full width of its container
                borderRadius: '4px',
                boxShadow: '0 2px 8px rgba(0,0,0,0.15)',
                padding: "10px"
              }}
            />
          </Form.Item>
          <Form.Item style={{ flex: 'none' }}>
            <Button
              className='submit-button'
              type="primary"
              htmlType="submit"
              style={{
                marginTop: "1rem",
                borderRadius: '4px',
                boxShadow: '0 2px 8px rgba(0,0,0,0.15)',
              }}
            >
              Submit
            </Button>
          </Form.Item>
        </Form>
      </Modal >
    </>
  );
};

export default Modal1;
