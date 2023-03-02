import React from 'react'

import Nav from './Components/Nav'
import Hero from './Components/Hero'
import About from './Components/About'
import Projects from './Components/Projects'
import Contact from './Components/Contact'
import Footer from './Components/Footer'
import Certificate from './Components/Certificate'
import Header from './Components/Header'


function App() {
  return (
    <div className="bg-site overflow-hidden">
      <Header/>
      <Nav/>
      <Hero/>
      <About/>
      <Projects/>
      <Certificate/>
      <Contact/>
      <Footer/>
      <div className='h-[4000px]'></div>
    </div>
  
  )
}

export default App