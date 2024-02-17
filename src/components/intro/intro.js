import React from 'react'
import "./intro.css"
import { Link } from 'react-scroll'
import bg from "../../assets/bg.jpeg"
const Intro = () => {
  return (
    <section id='intro'>
        <div className='introContent'>
            <span className='hello'>Hello</span>
            <span className='introText'>I am <span className='introName'>Abdulmuhmin</span> <br/> Software Developer</span>
            <p className='introPara'> I am a skilled software engineer with experience in creating visual appealing, friendly websites and mobile applications. </p>
            <Link><button className='btn'> Hire me </button></Link>
        </div>
        {/* <img src={bg} alt='' className='bg'/> */}
    </section>
  )
}

export default Intro