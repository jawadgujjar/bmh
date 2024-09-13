import React from 'react';
import { Card,Button} from 'antd';  // Correct import for the Card component from Ant Design
import './digitalservices.css';   // Import your CSS file for styling

const services = [
  {
    title: "Search Engine Optimization (SEO)",
    description: "Through careful keyword research and white hat SEO practices, we can help you achieve higher organic rankings and increased visibility in search results. Our internet marketing company performs extensive keyword research, conducts on-page and off-page optimization and tracks your results with Google Search Console. These practices allow us to attract high-quality leads and traffic and increase your conversions as part of your digital marketing services.",
    link: "https://example.com/seo" // Add a link for SEO service
  },
  {
    title: "Franchise SEO",
    description: "Amplify your market reach and improve your brand reputation with Thrive’s franchise SEO services. Our team creates a franchise marketing plan around your ideal prospects and service location. We claim and optimize your business listings, publish geo-modified service pages and blog posts, ensure brand consistency and garner positive online reviews from your best customers. In this way, we help you manage and promote all your franchisees and secure high local rankings.",
    link: "https://example.com/franchise-seo" // Add a link for Franchise SEO service
  },
  {
    title: "Local SEO",
    description: "Statistics show that 88 percent of consumers searching for local businesses online will call or visit a store within 24 hours. Attract your ideal customers and generate more leads and sales with Thrive’s internet marketing services. Our internet marketing company ensures your name, address and phone number (NAP) consistency, enhances your location pages and conducts local link building. We also leverage social media platforms to stay top of mind with your audiences.",
    link: "https://example.com/local-seo" // Add a link for Local SEO service
  },
  {
    title: "Technical SEO",
    description: "Establish a strong online foundation with on-point technical SEO and internet marketing services. Our technical SEO experts run crawl error reports, check your HTTPS status codes, optimize your site speed, audit redirects and eliminate duplicate content. In doing so, we increase your website’s crawlability and indexability. We also add structured data markup to your website and facilitate site migration, depending on your needs and requirements.",
    link: "https://example.com/technical-seo" // Add a link for Technical SEO service
  },
  {
    title: "Link Building",
    description: "Acquire a steady stream of traffic from high-authority websites and increase your consumer trust. Our internet marketing agency capitalizes on paid advertisements, sponsorships and collaborations to put your page content where influential people will see them. We utilize strategic guest blogging, publish unique, compelling content, distribute data-driven infographics and boost your social media engagement. In this way, we build quality backlinks that drive more sales.",
    link: "https://example.com/link-building" // Add a link for Link Building service
  },
  {
    title: "Web Design & Development",
    description: "Thrive builds custom, mobile-ready and search engine optimized websites that help you meet your business objectives and support your digital marketing campaigns. We create a visual hierarchy to highlight your important site elements and encourage page visitors to take your desired action. Our web design experts utilize clear calls-to-action (CTAs), avoid carousels and rotating sliders, simplify form fields and create content for your persona.",
    link: "https://example.com/web-design-development" // Add a link for Web Design & Development service
  },
  {
    title: "Social Media Marketing",
    description: "Ready to expand and market to your audiences on social media? We build social media campaigns to help your business grow and engage your followers. Our digital marketing agency identifies your goals, performs competitor benchmarking and evaluates your customers' online behavior. Using data and analytics, we develop custom social media brand management and paid advertising strategies tailored to your business.",
    link: "https://example.com/social-media-marketing" // Add a link for Social Media Marketing service
  },
  {
    title: "Pay Per Click (PPC) Management",
    description: "Reach your customers quickly and with precision with a data-driven PPC campaign. Our PPC Specialists are AdWords certified, so you can rest easy knowing your campaign is in the hands of professionals. Our team creates targeted ad copies, optimizes your bidding strategies and device targeting tactics and monitors your ROI for each keyword. We also take advantage of seasonal trends to promote your products and drive high-volume leads and traffic.",
    link: "https://example.com/ppc-management" // Add a link for PPC Management service
  },
  {
    title: "Content Writing",
    description: "Your website's content is crucial: it's the foundation of your SEO and the reason many people visit your site. Entrust your content creation with Thrive, and we'll write it with precision. Our content specialists stay abreast of the latest news and market trends to ensure we adhere to Google standards when developing content. We write headlines that pack a punch, utilize high-performing keywords, incorporate imagery and structure your posts to promote easy reading.",
    link: "https://example.com/content-writing" // Add a link for Content Writing service
  },
];

function Digitalservices1() {
  return (
    <div className='container-digital'>
      <p className='text1-digital'>Brand's Digital Marketing Services</p>
      <p className='text2-digital'>Build Brand Recognition as an Industry Leader and Increase Profitability</p>
      <div className='seo-container'>
        {services.map((service, index) => (
          <Card 
            key={index}
            title={
              <a href={service.link} className='card-title-link' target='_blank' rel='noopener noreferrer'>
                {service.title}
              </a>
            }
            style={{ margin: '0.5rem', background: 'none', boxShadow: 'none' }} 
          >
            <p>{service.description}</p>
          </Card>
        ))}
       
      </div>
      <div className='digital-button'>         
                   <Button className='proposal-button1'>GET STARTED NOW</Button>
            </div>
    </div>
  );
}

export default Digitalservices1;
