import React from 'react'
import Profile from '../../Components/Profile/Profile'
import Marquee from '../../Components/Marquee/Marquee'
import Credential from '../../Components/Credential/Credential'
import Projects from '../../Components/Projects/Projects'
import Blog from '../../Components/Blog/Blog'
import Pointers from '../../Components/Pointers/Pointers'
import LWT from '../../Components/LWT/LWT'
import StayWithMe from '../../Components/StayWithMe/StayWithMe'
import Footer from '../../Components/Footer/Footer'
import Service from '../../Components/Services_Offering/Service'

import Navbar from '../../Components/Navbar/Navbar'

import WorkCard from '../../Components/WorkCard/WorkCard'
import star from '../../Assets/star-2.png'
import PROJECT1 from '../../Assets/project1.jpeg'
import PROJECT2 from '../../Assets/project2.jpeg'
import './style.css'
const Work = () => {
  return (
    <div id='Work'>
      <Navbar/>
      <div id='Summery' className='WorkSummery'><img src={star} alt='star'></img><h3><span>ALL PROJECTS</span></h3><img src={star} alt='star'></img></div>
      
      <div id='Home'>
      
     
      <div className='gridMain'>

         
        
          <div className='gridMain3 WorkGridMain3'>
          <div className='gridItem'>
          <WorkCard Heading="Amazon Clone" Discription="WEB DESIGNING | REACTJS FIREBASE" ProjectPic={PROJECT1}/>

          </div>
          <div className='gridItem'>
          <WorkCard Heading="Music Player" Discription="WEB DESIGNING | PHP MYSQL" ProjectPic={PROJECT2}/>

          </div>
          
          </div>
      </div>


    </div>
      <Footer/>
    </div>
  )
}

export default Work
