import React from 'react'
import HeroSection from '../components/herosection'
import Features from '../components/features'
import Car from '../components/carousel'
import Projecthistory1 from '../components/projecthistory'
 

function Landingpage() {
  return (
    <div>
      <HeroSection/>
      <Features/>
      <Projecthistory1/>
      <Car />
       
    </div>
  )
}

export default Landingpage;