import React from 'react'
import HeroSection from '../components/herosection'
import Features from '../components/features'
import Car from '../components/carousel'
import Projecthistory1 from '../components/projecthistory';
import Alice from '../components/alicecarousel';
 

function Landingpage() {
  return (
    <div>
      <HeroSection/>
      <Alice/>
      <Features/>
      <Projecthistory1/>
      <Car />
      
       
    </div>
  )
}

export default Landingpage;