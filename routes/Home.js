import React from 'react'
import { Footer } from '../components/Footer'

import {Homepic} from '../components/Homepic'
import { Navbar } from '../components/Navbar'
import { Pricing } from '../components/PricingCard'
import { Work } from '../components/Work'


export const Home = () => {
  return (
    <div className='home'>
        <Navbar/>
        <Homepic/>
        <Work/>
        <Footer/>
        
    </div>
  )
}
