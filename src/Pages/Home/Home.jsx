import React from 'react'
import './style.css'
import Navbar from '../../Components/Navbar/Navbar'
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

const Home = () => {
  
  return (
  <>
      <Navbar/>
    <div id='Home'>
      
      <div className='gridMain'>

        <div className='gridItem'>
         <Profile/>
        </div>
        <div className='gridMain2'>
          <div className='gridItem'>
          <Marquee/>
          </div>
          <div className='gridMain3'>
          <div className='gridItem'>
          <Credential/>
          </div>
          <div className='gridItem'>
          <Projects/>
          </div>
          </div>
        </div>
      </div>
      <div className='gridMain'>

         
        
          <div className='gridMain3'>
          <div className='gridItem'>
            <Blog/>
          </div>
          <div className='gridItem'>
          <Service/>
          </div>
          <div className='gridItem'>
          <StayWithMe/>
          </div>
          </div>
      </div>
      <div className='gridMain'>

         
        
          <div className='gridMain3'>
          <div className='gridItem'>
            <Pointers/>
          </div>
          <div className='gridItem'>
          <LWT/>
          </div>
          
          </div>
      </div>


    </div>
      <Footer/>
  </>
  )
}

export default Home
