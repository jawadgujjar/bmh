import React from 'react';
import { Card } from 'antd';  // Correct import for the Card component from Ant Design
import './whychosecard.css';   // Import the updated CSS file

const services = [
  {
    title: "Search Engine Optimization (SEO)",
    description: "Through careful keyword research and white hat SEO practices, we can help you achieve higher organic rankings and increased visibility in search results. Our internet marketing company performs extensive keyword research, conducts on-page and off-page optimization and tracks your results with Google Search Console. These practices allow us to attract high-quality leads and traffic and increase your conversions as part of your digital marketing services.",
  },
  {
    title: "Franchise SEO",
    description: "Amplify your market reach and improve your brand reputation with Thrive’s franchise SEO services. Our team creates a franchise marketing plan around your ideal prospects and service location. We claim and optimize your business listings, publish geo-modified service pages and blog posts, ensure brand consistency and garner positive online reviews from your best customers. In this way, we help you manage and promote all your franchisees and secure high local rankings.",
  },
  {
    title: "Local SEO",
    description: "Statistics show that 88 percent of consumers searching for local businesses online will call or visit a store within 24 hours. Attract your ideal customers and generate more leads and sales with Thrive’s internet marketing services. Our internet marketing company ensures your name, address and phone number (NAP) consistency, enhances your location pages and conducts local link building. We also leverage social media platforms to stay top of mind with your audiences.",
  },
  {
    title: "Technical SEO",
    description: "Establish a strong online foundation with on-point technical SEO and internet marketing services. Our technical SEO experts run crawl error reports, check your HTTPS status codes, optimize your site speed, audit redirects and eliminate duplicate content. In doing so, we increase your website’s crawlability and indexability. We also add structured data markup to your website and facilitate site migration, depending on your needs and requirements.",
  },
  {
    title: "Link Building",
    description: "Acquire a steady stream of traffic from high-authority websites and increase your consumer trust. Our internet marketing agency capitalizes on paid advertisements, sponsorships and collaborations to put your page content where influential people will see them. We utilize strategic guest blogging, publish unique, compelling content, distribute data-driven infographics and boost your social media engagement. In this way, we build quality backlinks that drive more sales.",
  },
  {
    title: "Web Design & Development",
    description: "Thrive builds custom, mobile-ready and search engine optimized websites that help you meet your business objectives and support your digital marketing campaigns. We create a visual hierarchy to highlight your important site elements and encourage page visitors to take your desired action. Our web design experts utilize clear calls-to-action (CTAs), avoid carousels and rotating sliders, simplify form fields and create content for your persona.",
  },
];

function Whychosecard3() {
  return (
    <div className='container-digital3'>
      <div className='seo-container3'>
        {services.map((service, index) => (
          <Card 
            key={index}
            title={service.title}
            style={{ margin: '0.5rem', background: 'none', boxShadow: 'none' }} 
          >
            <p>{service.description}</p>
          </Card>
        ))}
      </div>
    </div>
  );
}

export default Whychosecard3;
