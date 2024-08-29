import React, { useState } from 'react';
import { FaPlus, FaMinus } from 'react-icons/fa';
import './faqs.css';

const FAQseo = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const faqs = [
        {
            question: "What is SEO and how does it help my website?",
            answer: "SEO is a term used to describe Search Engine Optimization. It’s the process of enhancing your site to be more prominent in the search payoff for keywords that are relevant to your business. It organically increases site visitors, leads, and customers who could be interested in your company."
        },
        {
            question: "Is SEO expensive?",
            answer: "SEO costs can vary based on your site’s needs and your competition. We can customize plans to meet your budget, plus the ROI (ROI) generated by more leads and traffic makes SEO an investment worth it."
        },
        {
            question: "How long does it take to see results from SEO?",
            answer: "SEO is a long-term strategy. However, you can expect the first improvements within 3-6 months. The desirable payoff requires regular effort. Continuous SEO services assure long-term recognition."
        },
        {
            question: "Can you guarantee results with SEO?",
            answer: "Absolutely! Although SEO payoffs aren’t always guaranteed, we can create an approach to completing the rankings improvements we discuss and agree to work on with you. It ensures that your website reaches maximum organic visibility"
        },
        {
            question: "Why SEO is Important?",
            answer: "SEO is 0essential as it helps make your website more prominent, which results in more traffic and more chances to convert prospects into buyers."
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

export default FAQseo;
