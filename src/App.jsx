import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import React, { useState } from 'react'

import Preloader from './components/Preloader/Preloader';
import Hero from './components/Hero'
import Marquee from './components/Marquee'
import Marquee1 from './components/Marquee/Marquee1';
import About1 from './components/About/About1'
import Stack1 from './components/Stack/Stack1';
import Project from './components/Projects/Project';
import Contact from './components/Contact/Contact';
import SideEmail from './components/Side Email/SideEmail';
import Scroller from './components/Scroll/Scroller'
import Navbar from './components/Navbar';


const App = () => {

  const [loading, setLoading] = useState(true);

  return (
    <div className=' bg-#202020 min-h-screen '>

          <div className='app-page'>
            <div className="stars" aria-hidden="true">
               {Array.from({ length: 84 }).map((_, index) => (
                <span className="star" key={index}></span>
                ))}
          </div>

        {loading && (
          <Preloader
          onComplete={() => setLoading(false)}
          />
        )}  

        <Scroller />
        {/* <SideEmail /> */}
      
        <Hero />
        <Navbar />
        <Marquee />
        <About1 />
        <Stack1 />
        <Project />
        <Contact />
      
        </div>

    </div>
      
  )
}

export default App
