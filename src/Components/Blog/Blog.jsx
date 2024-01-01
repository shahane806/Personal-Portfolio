import React from 'react'
import './style.css'


import { Link } from 'react-router-dom'
import linkLogo from '../../Assets/icon.svg'
import blog from '../../Assets/gfonts.png'
const Blog = () => {
  return (
    <>
    <div className='signature Profile Blog'>
    <div className='signature'>
     <img src={blog} alt='blog'></img>
    </div>
    <div className="ProfileLink ">
     <div className="BlogInfo Info signature_info" style={{textDecoration:'none'}}>
       <p>BLOG</p>
       <h1>GFonts</h1>
     </div>
     
     <div className='BlogNavigate'>
      <Link to={'/About'}><img src={linkLogo} alt='LinkLogo'></img></Link>
        </div>
   </div>
   </div>
    
    </>
  )
}

export default Blog
