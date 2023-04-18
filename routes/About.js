import React from 'react'
import { AboutContent } from '../components/AboutContent'
import { Footer } from '../components/Footer'
import { Heropic } from '../components/Heropic'
import { Navbar } from '../components/Navbar'


export const About = () => {
  return (
    <div>
      <Navbar/>
      <Heropic heading="ABOUT" text="I am a friendly,competent and time-concious Frond-end Developer"/>
      <AboutContent/>
      <Footer/>
    </div>
  )
}
