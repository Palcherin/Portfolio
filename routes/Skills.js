import React from 'react'
import { Aboutskills } from '../components/Aboutskills'
import { Footer } from '../components/Footer'
import { Heropic } from '../components/Heropic'
import { Navbar } from '../components/Navbar'

export const Skills = () => {
  return (
    <div>
      <Navbar/>
      <Heropic heading="SKILLS" text="I am experienced in several skills including the following"/>
      <Aboutskills/>
      <Footer/>
    </div>
  )
} 
