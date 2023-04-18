import React from 'react'
import './Contactpic.css'

export const Contactpic = () => {
  return (
    <div className='contact-container'>
        <div className='contact-mask'>
            <img src='assets\portfolio-photos (3).jpg' alt='contact-pic'/>
        </div>
        <div className='contact-content'>
           <div> <label type="text">Your Name:</label><br/>
            <input type="text" /></div>
           <div> <label type="number">Your Phone:</label><br/>
            <input type="text" /></div>
           <div> <label type="email">Your Email:</label><br/>
            <input type="text" /></div>
            <div>
            <textarea className='text-area' typeof='text' placeholder='send your text'/>
        </div>
        <button type='submit' className='btn'>Send Text</button>
        </div>
        
    </div>
  )
}
