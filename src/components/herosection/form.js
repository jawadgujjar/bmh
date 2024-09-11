import React from 'react';
import { Form, Input, Button, Select } from 'antd';
import './form.css';

const { TextArea } = Input;
const { Option } = Select;

function Form1() {
    const onFinish = (values) => {
        console.log('Form Values:', values);
    };

    return (
        <div className="form-container">
            <h2 className="form-heading">
            Get My Free Proposal
            </h2>
            <Form layout="vertical" onFinish={onFinish}>
                <Form.Item
                    label={<span className="form-label">Select Service</span>}
                    name="service"
                    rules={[{ message: 'Please select a service!' }]}
                >
                    <Select placeholder="Select a service" className="custom-select">
                        <Option value="seo">SEO</Option>
                        <Option value="ppc">PPC</Option>
                        <Option value="social-media">Social Media Marketing</Option>
                    </Select>
                </Form.Item>

                {/* Email Input */}
                <Form.Item
                    label={<span className="form-label">Email Address</span>}
                    name="email"
                    rules={[
                        { message: 'Please enter your email!' },
                        { type: 'email', message: 'Please enter a valid email!' },
                    ]}
                >
                    <Input
                        placeholder="Enter your email address"
                        className="custom-input"
                    />
                </Form.Item>

                {/* Large Text Input */}
                <Form.Item
                    label={<span className="form-label">Project Details</span>}
                    name="projectDetails"
                    rules={[{ message: 'Please describe your project!' }]}
                >
                    <TextArea
                        placeholder="Describe your project in detail"
                        rows={2}
                        className="custom-textarea"
                    />
                </Form.Item>

                <Form.Item>
                    <Button
                        type="primary"
                        htmlType="submit"
                        block
                        className="submit-button"
                    >
                        Submit
                    </Button>
                </Form.Item>
            </Form>
            <h6 className='h6-form'>In a Hurry? Give us a call us at  <a href="tel:+1234567890" style={{ color: 'orange', textDecoration: 'none' }}>
                +123-456-7890
            </a></h6>
            <hr />

        </div>
    );
}

export default Form1;
