import React, { useState } from 'react';
import { FaPlus, FaMinus } from 'react-icons/fa';
import './faqecommerce.css';

const Faqecommerce1 = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const faqs = [
        {
            question: "How do I start an e-commerce business?",
            answer: "To start an e-commerce business, first, choose a niche and conduct market research. Then, set up an online store using a platform like Shopify, WooCommerce, or Magento. Secure your domain, create a user-friendly website, and set up payment gateways. Finally, launch marketing efforts to attract customer"
        },
        {
            question: "What are the essential features of a successful e-commerce website?",
            answer: "A successful e-commerce website should have an intuitive design, mobile responsiveness, secure payment options, fast loading times, clear product descriptions, high-quality images, and a straightforward checkout process. Effective search and filtering options, customer reviews, and strong security measures are also crucial."
        },
        {
            question: "How can I drive traffic to my e-commerce site?",
            answer: " Drive traffic to your e-commerce site through a combination of SEO, content marketing, social media marketing, email campaigns, and paid advertising (such as Google Ads or Facebook Ads). Leveraging influencer partnerships and affiliate marketing can also boost visibility and attract potential customers."
        },
        {
            question: "What payment methods should I offer on my e-commerce site?",
            answer: " Offer a variety of payment methods to cater to different customer preferences. Common options include credit/debit cards, digital wallets (such as PayPal or Apple Pay), and bank transfers. Consider adding buy now, pay later options to accommodate diverse payment needs."
        },
        {
            question: "How can I ensure the security of my e-commerce site?",
            answer: "Ensure your e-commerce site’s security by implementing SSL certificates for encrypted data transfer, using secure payment gateways, and regularly updating software and plugins. Employ strong passwords, monitor for suspicious activity, and conduct regular security audits to protect customer data and prevent breaches."
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

export default Faqecommerce1;
