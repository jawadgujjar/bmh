import React, { useState } from 'react';
import { FaPlus, FaMinus } from 'react-icons/fa';
import './faqdigitalmarketing.css';

const Faqdigitalmarketing1 = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const faqs = [
        {
            question: "What is digital marketing, and why is it important?",
            answer: " Digital marketing involves using online platforms and tools to promote products or services, reach a broader audience, and drive business growth. It’s important because it offers measurable results, targeted reach, and cost-effective strategies compared to traditional marketing."
        },
        {
            question: "How can I measure the success of my digital marketing campaigns?",
            answer: "Success can be measured using various metrics such as website traffic, conversion rates, click-through rates (CTR), return on investment (ROI), and engagement metrics like likes, shares, and comments. Tools like Google Analytics and social media insights provide valuable data for evaluating performance."
        },
        {
            question: "What is the difference between SEO and PPC?",
            answer: "SEO (Search Engine Optimization) focuses on improving organic search rankings through optimizing website content and structure, while PPC (Pay-Per-Click) involves paid advertisements that appear in search engine results or on social media platforms. SEO aims for long-term results, while PPC provides immediate visibility and traffic."
        },
        {
            question: "How often should I update my digital marketing strategy?",
            answer: "Regular updates are essential to adapt to changes in market trends, consumer behavior, and algorithm updates. It’s advisable to review and adjust your strategy at least quarterly, but staying flexible and responsive to real-time data and industry developments is crucial for ongoing success."
        },
        {
            question: "What are some effective ways to increase my online visibility?",
            answer: "Effective methods include optimizing your website for SEO, running targeted PPC campaigns, engaging in content marketing, leveraging social media platforms, and utilizing email marketing. Building backlinks, improving site speed, and ensuring a mobile-friendly design also contribute to better visibility."
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

export default Faqdigitalmarketing1;
