import "./Aboutskills.css"
import React from 'react'
import { FaCss3, FaGit, FaGithub, FaHtml5, FaInstagram, FaJs, FaReact, FaReddit, FaTwitter } from "react-icons/fa"

export const Aboutskills = () => {
  return (
    <div className="skills">
        <div className="skills-container">
            <div className="left">
                <h5>We offer services that requires different skills named below. See more about the skills on the followin platforms.</h5>
                <ul>
                <FaGithub className="icons"/>
                <FaInstagram className="icons"/>
                <FaTwitter className="icons"/>
                <FaReddit className="icons"/>
                </ul>
            </div>
            <div className="right">
                <ul>
                    <li>HTML<FaHtml5/></li> 
                    <li>CSS<FaCss3/></li>
                    <li>JavaScript<FaJs/></li>
                    <li>Git and Githut<FaGit/></li>
                    <li>vs code editor<FaReact/></li>
                    <li>Problem Solving</li>
                    <li>React js<FaReact/></li>
                    <li>Firebase</li>
                    
                </ul>
            </div>
        </div>
    </div>
  )
}
