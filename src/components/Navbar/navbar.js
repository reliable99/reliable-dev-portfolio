import React from 'react'
import "./navbar.css"
import {Link} from "react-scroll"
const Navbar = () => {
  return (
    <nav className='navbar'>
     <h1 className='logo'>Reliable</h1>
     <div className='desktopMenu'>
        <Link className='desktopMenuListItem'>Home</Link>
        <Link className='desktopMenuListItem'>About</Link>
        <Link className='desktopMenuListItem'>Portfolio</Link>
        <Link className='desktopMenuListItem'>Clients</Link>
     </div>
     <button className='desktopMenuBtn'>
       Contact Me
     </button>
    </nav>
  )
}

export default Navbar