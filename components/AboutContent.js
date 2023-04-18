import "./AboutContentStyles.css"

import React from 'react'
import { Link } from "react-router-dom"
import React1 from "../assets/webphotos.jpeg"
import React2 from "../assets/aboutpic.png"

export const AboutContent = () => {
  return (
    <div className="about">
        <div className="left">
            <h1>Who Am I?</h1>
            <p>I am an experienced Front-end Developer. I am a freelancer...creatin responsive and secure websites for clients</p>
            <Link to="/contact" className="btn">CONTACT</Link>
        </div>
        <div className="right">
            <div className="img-container">
                <div className="img-stack-top">
                    <img src={React1} className="about-pic1"/>
                </div>
                
            </div>
        </div>
    </div>
  )
}
