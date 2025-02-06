import React from 'react'
import '../App.css'
import Logo from './Logo.png'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <div>
      <nav className='navbar'>
        <img src={Logo} alt="" className='nav-logo' />
        <div className="nav-links">

            <Link to ='./blogs'> View blogs</Link>
        </div>
        <Link to ='./newpost'> <button>Add Post</button></Link>
      </nav>
    </div>
  )
}

export default NavBar
