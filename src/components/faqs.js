import React, { useState } from 'react';
import { FaPlus, FaMinus } from 'react-icons/fa';
import './faqs.css';

const FAQ1 = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const faqs = [
        {
            question: "What is brand marketing, and why is it important?",
            answer: "Brand marketing focuses on building a strong brand identity and fostering customer loyalty. It’s crucial for differentiating your business, increasing visibility, and driving long-term customer relationships."
        },
        {
            question: "How can brand marketing benefit my business?",
            answer: "Effective brand marketing can enhance brand recognition, increase customer loyalty, and drive higher engagement and conversions, ultimately strengthening your market position."
        },
        {
            question: "What strategies do you use for brand marketing?",
            answer: "We employ strategies such as content creation, social media management, targeted advertising, and brand identity development to build and maintain a strong brand presence."
        },
        {
            question: "What browsers are supported?",
            answer: "Our website is compatible with the latest versions of Chrome, Firefox, Safari, and Edge."
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

export default FAQ1;
