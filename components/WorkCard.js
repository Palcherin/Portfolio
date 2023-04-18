import "./WorkCardStyle.css"

import React from 'react'
import { NavLink } from "react-router-dom"

export const WorkCard = (props) => {
  return (
    <div className="project-card">
    <img src={props.imgsrc } alt="project-card" />
    <h2 className="project-title"><span>{props.title}</span></h2>
   <div className="pro-details">
     <p>{props.text}</p>
     <div className="pro-btn">
         <NavLink to={props.view} className="btn">VIEW</NavLink>
         <NavLink to="/e-commerse.com" className="btn">SOURCE</NavLink>
     </div>
   </div>
 </div>
  )
}
