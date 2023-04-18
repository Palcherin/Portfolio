import React from 'react'
import './index.js'
import './App.css'
import { Routes, Route} from 'react-router-dom'
import {Home} from './routes/Home'
import {About} from './routes/About'
import {ProjectS} from './routes/Projects'
import {Skills} from './routes/Skills'
import {Contact} from './routes/Contact'
import { Navbar } from './components/Navbar.js'


function App() {
  return (
    <>
    
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/projects' element={<ProjectS/>}/>
      <Route path='/skills' element={<Skills/>}/>
      <Route path='/contact' element={<Contact/>}/>
    </Routes>
    
    
    </>  
  )
}

export default App