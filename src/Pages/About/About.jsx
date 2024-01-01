import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import AboutPic from '../../Components/AboutPic/AboutPic'
import AboutInfo from '../../Components/About_Info/AboutInfo'
import Pointers from '../../Components/Pointers/Pointers'
import LWT from '../../Components/LWT/LWT'
import Footer from '../../Components/Footer/Footer'
import Experience from '../../Components/Experience/Experience'
import Education from '../../Components/Education/Education'
import star from '../../Assets/star-2.png'
import './style.css'
const About = () => {
  return (
    <>
     <Navbar/>
     
     <div id='Home'>
      
      <div className='gridMain'>

        <div className='gridItem'>
        <AboutPic/>

        </div>
        <div className='gridMain2'>
          <div className='gridMain3'>
          <div id='Summery' className='AboutSummery'><img src={star} alt='star'></img><h3><span>SELF SUMMERY</span></h3><img src={star} alt='star'></img></div>
      
          <div className='gridItem'>
      <AboutInfo/>
          </div>
         
          </div>
        </div>
      </div>
      <div className='gridMain'>

         
        
          <div className='gridMain3'>
          <div className='gridItem'>
          <Education/>

          </div>
          <div className='gridItem'>
          <Experience/>

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

export default About
