import React from 'react';
import { Form, Input, Button, InputNumber } from 'antd';
import './form.css';

const { TextArea } = Input;

function Form1() {
    const onFinish = (values) => {
        console.log('Form Values:', values);
    };

    return (
        <div className="form-wrapper">
            <div className="form-container">
                <h2 className="form-heading">Get My Free Proposal</h2>
                <Form layout="vertical" onFinish={onFinish}>
                    <div className="form-item-row">
                        <Form.Item
                            label={<span className="form-label">First Name</span>}
                            name="firstName"
                            rules={[{ required: true, message: 'Please enter your first name!' }]}
                        >
                            <Input
                                placeholder="Enter your first name"
                                className="custom-input"
                            />
                        </Form.Item>

                        <Form.Item
                            label={<span className="form-label">Last Name</span>}
                            name="lastName"
                            rules={[{ required: true, message: 'Please enter your last name!' }]}
                        >
                            <Input
                                placeholder="Enter your last name"
                                className="custom-input"
                            />
                        </Form.Item>
                    </div>

                    <div className="form-item-row">
                        <Form.Item
                            label={<span className="form-label">Phone Number</span>}
                            name="phoneNumber"
                            rules={[
                                { required: true, message: 'Please enter your phone number!' },
                                { pattern: /^\d+$/, message: 'Please enter a valid phone number!' }
                            ]}
                        >
                            <Input
                                placeholder="Enter your phone number"
                                className="custom-input"
                            />
                        </Form.Item>

                        <Form.Item
                            label={<span className="form-label">Email Address</span>}
                            name="email"
                            rules={[
                                { required: true, message: 'Please enter your email!' },
                                { type: 'email', message: 'Please enter a valid email!' },
                            ]}
                        >
                            <Input
                                placeholder="Enter your email address"
                                className="custom-input"
                            />
                        </Form.Item>
                    </div>

                    <div className="form-item-row">
                        <Form.Item
                            label={<span className="form-label">Website URL (Optional)</span>}
                            name="website"
                            rules={[{ type: 'url', message: 'Please enter a valid URL!' }]}
                        >
                            <Input
                                placeholder="Enter your website URL"
                                className="custom-input"
                            />
                        </Form.Item>

                        <Form.Item
                            label={<span className="form-label">Projected Monthly Budget</span>}
                            name="budget"
                            rules={[{ required: true, message: 'Please enter your projected monthly budget!' }]}
                        >
                            <InputNumber
                                placeholder="Enter your budget"
                                className="custom-input-number"
                                formatter={value => `$ ${value}`}
                                parser={value => value.replace('$ ', '')}
                            />
                        </Form.Item>
                    </div>

                    <Form.Item
                        label={<span className="form-label">Project Details</span>}
                        name="projectDetails"
                        rules={[{ required: true, message: 'Please describe your project!' }]}
                    >
                        <TextArea
                            placeholder="What goal are you trying to achieve?"
                            rows={4}
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
                <h6 className='h6-form'>
                    In a Hurry? Give us a call at <a href="tel:+1234567890" className="call-link">+123-456-7890</a>
                </h6>
                <hr />
            </div>
        </div>
    );
}

export default Form1;
