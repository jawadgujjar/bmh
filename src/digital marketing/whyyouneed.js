import React from 'react';
import Image from '../assests/image/growth.jpg';
import Image1 from '../assests/image/growth.jpg';
import './whyyouneed.css';  

function Whyyouneed1() {
  return (
    <div>
      <section id="about">
        <p className="digital-why-3">Why Your Business Should Be Using Digital Marketing Services</p>
        <p className="engage-why-3">Engage More Clients and Rank High On Search Results</p>
        <div className="container-3">
          <div className="text-content-3">
            <h3>The online marketing industry is growing at an unprecedented rate. According to eMarketer, businesses in the U.S. spend more than $110 billion on digital advertising. With more companies investing their time and resources in online marketing, relying on your old advertising tactics is not enough to win over customers. Increase your sales volume and build a robust digital foundation with value-driven internet marketing services. Digital marketing helps you:</h3>
          </div>
          <div className="image-content-3">
            <img src={Image} alt="aboutus" />
          </div>
        </div>

        <div className="point-3">
          <div className="image-content2-3">
            <img src={Image1} alt="about us" />
          </div>
          <div className="points-list-3">
            <div className="points-container-3">
              <ul className="points-list-3">
                <li className="points-item-3">Save time, money and resources</li>
                <li className="points-item-3">Acquire huge ROI</li>
                <li className="points-item-3">Track your campaign results</li>
                <li className="points-item-3">Adjust your strategies based on analytics and data</li>
                <li className="points-item-3">Leverage precise audience targeting</li>
              </ul>
            </div>
            <p className="points-text-3">A study presented by BrightTALK shows that 42 percent of marketing professionals find the lack of quality data their biggest barrier to lead generation. With the help of a trusted internet marketing company, you can gain a holistic view of your customer journey and competition. Don’t waste your investment in marketing techniques that do not deliver measurable results. Partner with Thrive Internet Marketing Agency today and establish your market dominance with our targeted digital marketing services.</p>
          </div>

           
        </div>
      </section>
    </div>
  );
}

export default Whyyouneed1;
