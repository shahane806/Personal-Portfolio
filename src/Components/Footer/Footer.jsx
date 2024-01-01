import React from 'react'
import logo from '../../Assets/logo.svg'
import { Link } from 'react-router-dom'
import './style.css'
const Footer = () => {
  return (
    <div id='Footer'>
      <div id='Footer_Logo'>
      <ul>
        <li>
        <Link className='Footer_Navigation_Links' to='/'> <img className='footerLogo' src={logo} alt='Logo'></img></Link>
         
        </li>
        
        
      </ul>
      </div>
      <div className='Footer_Navigation_Links_Div'>
        <ul>
        <li><Link className='Navigation_Links' to='/'>Home</Link></li>
        <li><Link className='Navigation_Links' to='/About'>About</Link></li>
        <li><Link className='Navigation_Links' to='/Work'>Work</Link></li>
        <li><Link className='Navigation_Links' to='/Contact'>Contact</Link></li>
        </ul>
      </div>
      <p style={{color:'rgb(75,75,75)'}}>
        &copy; All rights reserved by <span style={{color:'skyblue'}}>Om Shahane</span>.
      </p>
    </div>
  )
}

export default Footer
