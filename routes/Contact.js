import React from 'react'
import { Contactpic } from '../components/Contactpic'
import { Footer } from '../components/Footer'
import { Form } from '../components/Form'
import { Heropic } from '../components/Heropic'
import { Navbar } from '../components/Navbar'

export const Contact = () => {
  return (
    <div>
      <Navbar/>
      <Heropic heading="CONTACT" text="Chat me here..I'd appreciate that."/>
      <Form/>
      <Footer/>
    </div>
  )
}
