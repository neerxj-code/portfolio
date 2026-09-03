import './App.css';

import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Marquee from './components/Marquee'
import About from './components/About'


import appBg from './assets/bg.png';
import Marquee1 from './components/Marquee/Marquee1'
import About1 from './components/About/About1'
import Stack1 from './components/Stack/Stack1';
// import Test from './components/Test'

const App = () => {
  return (
    <div className=' bg-black min-h-screen '>
      <div className='app-page'>
              <div className="stars" aria-hidden="true">
        {Array.from({ length: 42 }).map((_, index) => (
          <span className="star" key={index}></span>
        ))}
         </div>

      <Hero />
      <Marquee />
      <About1 />
      <Stack1 />


      {/* <Test /> */}
    </div>
    <About />
      </div>
      
  )
}

export default App
