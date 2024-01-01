import React from 'react'
import './style.css'
import Navbar from '../../Components/Navbar/Navbar'
import Footer from '../../Components/Footer/Footer'
import MyContact from '../../Components/MyContact/MyContact'
import MySocialMedia from '../../Components/MySocialMedia/MySocialMedia'
import ContactForm from '../../Components/ContactForm/ContactForm'


const Contact = () => {
  return (
    <div id='Contact'>
      <Navbar/>
      <div className='gridMain ContactGrid'>
      <div className='ContactgridItem1'>
      <MyContact/>
      <MySocialMedia/>
      </div>
      <div className='ContactgridItem2'>
      <ContactForm/>
      </div>
      </div>
     
     
      <Footer/>
    </div>
  )
}

export default Contact
