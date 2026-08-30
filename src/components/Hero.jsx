import React from 'react'
import Navbar from './Navbar'

const Hero = () => {
  return (
    <div>
      <div className='h-screen bg-orange-500 '>
        <div className='h-[98%] w-2/4 bg-white rounded-4xl absolute top-2 right-2 bottom-2'></div>
        <Navbar />
      </div>
    </div>
  )
}

export default Hero
