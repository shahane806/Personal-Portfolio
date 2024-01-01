import React from 'react'
import './style.css'
const ContactInfo = ({icon,heading,line1,line2}) => {
  return (
    <div className='ContactInfoMain'>
      <div className='ContactIcon'>
        <img src={icon}></img>
      </div>
      <div className='ContactInfo'>
      <p>{heading}</p>
        <h4>{line1}</h4>
        <h4>{line2}</h4>
      </div>
    </div>
  )
}

export default ContactInfo
