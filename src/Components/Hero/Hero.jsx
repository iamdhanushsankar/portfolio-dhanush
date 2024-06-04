import React from 'react'
import './Hero.css'
import profile_img from '../../assets/profile_img.png'
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Hero = () =>  {
  return (
    <div id='hero' className='hero'>
        <img src={profile_img} alt="" />
        <h1>Hi, I'm <span>Dhanush Sankar</span>, <br/>A Full Stack Python Web Developer</h1>
             <div className='hero-action'>
                <div className='hero-connect'><AnchorLink className='anchor-links' offset={50} href='#contact'>Connect With Me</AnchorLink></div>
                <div className='hero-resume'><AnchorLink className='anchor-link' offset={50} href='#work'>My Resume</AnchorLink></div>
             </div>
    </div> 
  )
}
export default Hero