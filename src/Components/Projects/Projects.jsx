import React from 'react'
import './style.css'
import signature from '../../Assets/my-works.png'
import { Link } from 'react-router-dom'
import linkLogo from '../../Assets/icon.svg'
const Projects = () => {
  return (
    <div className='signature Profile Project'>
    <div className='signature'>
     <img src={signature} alt='signature'></img>
    </div>
    <div className="ProfileLink ">
     <div className="ProjectInfo Info signature_info" style={{textDecoration:'none'}}>
       <p>SHOWCASE</p>
       <h1>Projects</h1>
     </div>
     
     <div className='ProjectNavigate'>
      <Link to={'/About'}><img src={linkLogo} alt='LinkLogo'></img></Link>
        </div>
   </div>
 </div>
  )
}

export default Projects
