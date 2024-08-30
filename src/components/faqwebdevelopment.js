import React, { useState } from 'react';
import { FaPlus, FaMinus } from 'react-icons/fa';
import './faqwebdevelopment.css';

const Faqwebdevelopment1 = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const faqs = [
        {
            question: "What is the difference between front-end and back-end development?",
            answer: "Front-end Development: Focuses on the visual and interactive aspects of a website that users see and interact with directly. It involves technologies like HTML, CSS, and JavaScript to create layouts, design, and user interfaces  Back end Development: Deals with the server-side functionality of a website, including databases, server logic, and application performance. It involves programming languages like PHP, Python, Ruby, and frameworks like Node.js or Django to manage data and server interactions."
        },
        {
            question: "How long does it take to develop a website?",
            answer: "The timeline for website development varies based on factors such as complexity, design requirements, features, and the development team’s expertise. A basic website might take a few weeks, while a more complex site with custom features could take several months. Planning and clear communication can help in setting realistic timelines."
        },
        {
            question: "What are the key elements of a successful website?",
            answer: "Key elements include User Experience (UX): Intuitive design and easy navigation.Responsive Design: Compatibility across devices and screen sizes.SEO Optimization: Effective use of keywords and meta tags.Performance: Fast loading times and reliable functionality.Security: Measures like HTTPS and data protection."
        },
        {
            question: "How do I choose the right content management system (CMS) for my website?",
            answer: "Choose a CMS based on your specific needs, such as: Ease of Use: For non-technical users, consider user-friendly options like WordPress or Squarespace. Functionality: Ensure the CMS supports the features you need, like e-commerce or blogging. Customization: Check for flexibility in design and plugins. Support and Community: Look for a CMS with good support and an active user community."
        },
        {
            question: "How can I ensure my website is secure?",
            answer: " Ensure website security by: Using HTTPS: Encrypt data transmitted between the server and users. Regular Updates: Keep software, plugins, and frameworks updated. Implementing Security Measures: Use firewalls, secure login protocols, and regular security audits. Backups: Regularly back up your website data to recover from potential breaches or data loss."
        }
        
    ];

    const toggleAnswer = index => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section id="faq">
            <div className="faq-header">
        
                <div className="faq-columns">
                    <div className="faq-heading-col">FAQs
                        <p className="frequently"><span className="span">Frequently</span> Asked Questions</p>
                        <p  className="faq-heading-col1">Discover FAQs, Your Key to Clarity</p>
                    </div>
                    <div className="faq-questions-col">
                        {faqs.map((faq, index) => (
                            <div key={index} className="faq-item">
                                <div className="faq-question" onClick={() => toggleAnswer(index)}>
                                    {faq.question}
                                    <span className="faq-toggle-icon">
                                        {openIndex === index ? <FaMinus /> : <FaPlus />}
                                    </span>
                                </div>
                                {openIndex === index && (
                                    <div className="faq-answer">
                                        {faq.answer}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Faqwebdevelopment1;
