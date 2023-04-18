import './Homepic.css'

import React from 'react'
import { Link } from 'react-router-dom'


export const Homepic = () => {
  return (
    
    <div className='homepic'>
        <div className='mask'>
            <img className='into-pic' src="assets\Introphoto.jpg"/>
        </div>
        <div className='intro-content'>
            <p>HI,IT' ME...</p>
            <h1>PAUL WEKESA<br></br> <span>A React Developer!</span></h1>
        <div >
            <Link to="/about" className='btn'>ABOUT</Link>
            <Link to="/projects" className='btn-lit'>PROJECTS</Link>
        </div>
       </div>
       </div> 
  )
}
