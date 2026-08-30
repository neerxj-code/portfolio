import React from 'react'

const Navbar = () => {
  return (
    <div>
      <header className=''>
        <div className='flex justify-between items-center absolute z-30 top-0 left-0 w-100% h-20 px-15 py-20'>
            <a href='/'>Neeraj</a>
            </div>
        
        <div className='relative flex justify-flex-end items-center'>
            <a href=''>Work</a>
            <a href=''>About</a>
            <a href=''>Service</a>
            <a href=''>Contact</a>
            <button>-</button>
        </div>
      </header>
    </div>
  )
}

export default Navbar
