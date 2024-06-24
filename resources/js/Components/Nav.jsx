import React from 'react'
import './nav.css'
import NavNotice from './NavItems/NavNotice'
import NavMessage from './NavItems/NavMessage'
import NavAvatar from './NavItems/NavAvatar'

function Nav() {
  return (
      <nav className='header-nav ms-auto'>
          <ul className='d-flex align-items-center'>
              <NavNotice />
              <NavMessage />
              <NavAvatar />
          </ul>
    </nav>
  )
}

export default Nav