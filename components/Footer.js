import React from 'react'
import "./Footer.css"
import { FaCopyright, FaFacebook, FaGithub, FaHome, FaLinkedinIn, FaMailBulk, FaPhone, FaTwitter } from 'react-icons/fa'

export const Footer = () => {
  return (
    <div className='footer'>
        <div className='footer-container'>
            <div className='left'>
                <div className='location'>
                    <FaHome size={20} style ={{color:"white", marginRight:"2rem" }} />
                    <div>
                        <p>123 house property.</p>
                        <p>Nairobi</p>
                    </div>
                </div>
                <div className='phone'>
                    <h4><FaPhone size={20} style ={{color:"white", marginRight:"2rem" }}/> 0743666719</h4>
                </div>
                <div className='email'>
                    <h4> <FaMailBulk size={20} style ={{color:"white", marginRight:"2rem" }} /> palcherin17@gmail.com </h4>
                </div>
            </div>
            <div className='right'>
                <h3>About the Company</h3>
                <p>This is Palcherin,CEO OF ZenTech. ZenTech is a tech company dedicated to creatin quality and impressive websites to our clients. Our clients' satsifaction is our responsibility..</p>
                <div className='social'>
                <FaTwitter  size={20} style ={{color:"white", marginRight:"2rem" }}/>
                <FaFacebook  size={20} style ={{color:"white", marginRight:"2rem" }}/>
                <FaLinkedinIn  size={20} style ={{color:"white", marginRight:"2rem" }}/>
                <FaGithub  size={20} style ={{color:"white", marginRight:"2rem" }}/>
                </div>
            </div>
        </div>
        <hr/>
        <h4 className='copyriht'><FaCopyright/> @palcherin 2023 </h4>
    </div>
  )
}
