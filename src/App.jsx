import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Marquee from './components/Marquee'
import About from './components/About'
import Stack from './components/Stack'

import appBg from './assets/bg.png';
// import Test from './components/Test'

const App = () => {
  return (
    <div className=' min-h-screen '>
      <Hero />
      <Marquee />
      <About />
      <Stack />

      {/* <Test /> */}
    </div>
  )
}

export default App
