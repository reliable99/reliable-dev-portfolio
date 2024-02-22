import React from 'react'
import "./navbar.css"
import {Link} from "react-scroll"
import menu from "../../assets/menu.png"
const Navbar = () => {
  return (
    <nav className='navbar'>
     <h1 className='logo'>R.</h1>
     <div className='desktopMenu'>
        <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500} className='desktopMenuListItem'>Home</Link>
        <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-50} duration={500}className='desktopMenuListItem'>About</Link>
        <Link activeClass='active' to='works' spy={true} smooth={true} offset={-50} duration={500}className='desktopMenuListItem'>Portfolio</Link>
        <Link activeClass='active' to='clients' spy={true} smooth={true} offset={-50} duration={500}className='desktopMenuListItem'>Clients</Link>
     </div>
     <button className='desktopMenuBtn' onClick={() => {
      document.getElementById('contact').scrollIntoView({behavior: 'smooth'})
     }}>
       Contact Me
     </button>

     <img src={menu} alt='Menu' className='mobMenu' />
     <div className='navMenu'>
        <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500} className='listItem'>Home</Link>
        <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-50} duration={500}className='listItem'>About</Link>
        <Link activeClass='active' to='works' spy={true} smooth={true} offset={-50} duration={500}className='listItem'>Portfolio</Link>
        <Link activeClass='active' to='clients' spy={true} smooth={true} offset={-50} duration={500}className='listItem'>Clients</Link>
        <Link activeClass='active' to='contact' spy={true} smooth={true} offset={-50} duration={500}className='listItem'>Contact</Link>
     </div>
    </nav>
  )
}

export default Navbar