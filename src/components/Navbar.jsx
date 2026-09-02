import React from 'react'

const Navbar = () => {
  return (
    <div>
      <header className='navbar'>

            <a href='/' className='logo'>
            <span>Neeraj</span>
            </a>
           
        
        <div className='nav-right'>
          <nav className='nav-links'>
            <a className='nav-link' href=''>Work</a>
            <a className='nav-link' href=''>About Me</a>
            <a className='nav-link' href=''>Experience</a>
            <a className='nav-link' href=''>Contact</a>

                        <button
            className='menu-button'
            aria-label='Open menu'
            >
              <span className='menu-lines'>
                <span></span>
                <span></span>
                <span></span>
              </span>
            </button>
          </nav>


        </div>
      </header>
    </div>
  )
}

export default Navbar
