import React, {useState} from 'react'
import './Navbarstyles.css'
import { FaBars, FaTimes} from 'react-icons/fa'
import { Link, NavLink } from 'react-router-dom'

export const Navbar = () => {
  const [click,setClick]=useState(false);
  const handleClick=()=>setClick(!click);




  const [color,setColor]=useState(false);
  const chaneColor=()=>{
    if(window.scrollY>=1){
      setColor(true);
    }else{
      setColor(false)
    }
  } 
  return (
    <>
    <div className= "header">
        <Link to="/" className='portfolio'><h1>Portfolio.</h1></Link>
        <ul className={click? "nav-menu active": "nav-menu"}> 
                <li><Link to="/" className='links' >Home</Link></li>
                <li><Link to="/about" className='links'>About</Link></li>
                <li><Link to="/skills" className='links'>Skills</Link></li>
                <li><Link to="/projects" className='links'>Projects</Link></li>
                <li><Link to="/contact" className='links'>Contacts</Link></li>
            
        </ul>
       <div className='hamburger' onClick={handleClick}>
        {click?(  <FaTimes size={20} style={{color:"white"}}/>) :(<FaBars size={20} style={{color:"white" }}/>)
        }
        
       
        </div> 
    </div>
    </>
  )
}
