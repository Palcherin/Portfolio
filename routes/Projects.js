import React from 'react'
import { Footer } from '../components/Footer'
import { Heropic } from '../components/Heropic'
import { Navbar } from '../components/Navbar'
import { Pricing } from '../components/PricingCard'
import { Work } from '../components/Work'


export const ProjectS = () => {
  return (
    <div>
        <Navbar/>
        <Heropic heading="POJECTS" text="Here are some of my recent works"/>
        <Work/>
        <Pricing/>
        <Footer/>
         
    </div>
  )
}
