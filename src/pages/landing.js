import React from 'react'
import HeroSection from '../components/herosection'
import Features from '../components/features'
import Car from '../components/carousel'
import Projecthistory1 from '../components/projecthistory';
import Alice from '../components/alicecarousel';
import HeroMain from '../components/herosection/heromain';
import Reviews from '../components/Reviews';
import Reward from '../components/rewards';


function Landingpage() {
  return (
    <div>
      {/* <HeroSection/> */}
      <HeroMain />
      <Reviews />
      <Alice />
      <Features />
      <Projecthistory1 />
      <Car />
      <Reward />


    </div>
  )
}

export default Landingpage;