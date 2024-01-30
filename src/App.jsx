import { useState } from 'react'
import Sidenav from './components/Sidenav'
import Home from './components/Home'
import AboutMe from './components/AboutMe'
import Work from './components/Work'
import Contact from './components/Contact'
import Project from './components/Project'

function App() {

  return (
    <>
      <div className='bg-[#efeee6]'>
        <Sidenav />
        <Home />
        <AboutMe />
        <Work />
        <Project />
        <Contact />
      </div>
    </>
  )
}

export default App
