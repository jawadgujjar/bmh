import React from 'react'
import Features from '../components/features'
import Car from '../components/carousel'
import Projecthistory1 from '../components/projecthistory';
import Alice from '../components/alicecarousel';
import HeroMain from '../components/herosection/heromain';
import Reviews from '../components/Reviews';
import Reward from '../components/rewards';
import Proposalform from '../components/proposalform/proposalform';


function Landingpage() {
  return (
    <div>
      <HeroMain />
      <Reviews />
      <Alice />
      <Features />
      <Projecthistory1 />
      <Car />
      <Reward />
      <Proposalform />
    </div>
  )
}

export default Landingpage;