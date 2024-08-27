import React from 'react'
import HeroSection from '../components/herosection'
import { Carousel } from 'react-bootstrap'
import Features from '../components/features'

function Landingpage() {
  return (
    <div>
      <HeroSection/>
      <Carousel/>
      <Features/>
    </div>
  )
}

export default Landingpage