import React from 'react';
import './alicecarousel.css'; 
import { useSpring, animated } from '@react-spring/web';

// Import your logos here
import logo1 from '../assests/image/google.png';
import logo2 from '../assests/image/gucci.png';
import logo3 from '../assests/image/insta.png';
import logo4 from '../assests/image/nike.png';
import logo5 from '../assests/image/pintrest.png';
import logo6 from '../assests/image/twitter.png';

const Alice = () => {
  const props = useSpring({
    from: { transform: 'translateX(100%)' },
    to: { transform: 'translateX(-100%)' },
    config: { duration: 20000 }, // Duration in milliseconds
    reset: true,
    loop: true, // Makes the animation loop indefinitely
  });

  return (
    <div className="trusted"> 
      <h2 className="trustedtext"><span className="span" >Trusted </span> by companies like</h2>
    <div className="scrolling-text">
      <animated.div className="scroll-animation" style={props}>
        <img src={logo1} alt="Brand Logo 1" className="logo" />
        <img src={logo2} alt="Brand Logo 2" className="logo" />
        <img src={logo3} alt="Brand Logo 3" className="logo" />
        <img src={logo4} alt="Brand Logo 4" className="logo" />
        <img src={logo5} alt="Brand Logo 5" className="logo" />
        <img src={logo6} alt="Brand Logo 6" className="logo" />
        <img src={logo1} alt="Brand Logo 1" className="logo" />
        <img src={logo2} alt="Brand Logo 2" className="logo" />
        <img src={logo3} alt="Brand Logo 3" className="logo" />
        <img src={logo4} alt="Brand Logo 4" className="logo" />
        <img src={logo5} alt="Brand Logo 5" className="logo" />
        <img src={logo6} alt="Brand Logo 6" className="logo" />
      </animated.div>
    </div>
    </div>
  );
};

export default Alice;
