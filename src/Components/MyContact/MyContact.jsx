import React from 'react'
import ContactInfo from '../../Components/ContactInfo/ContactInfo'
import MailIcon from '../../Assets/mail.svg'
import PhoneIcon from '../../Assets/phone-thin.svg'
import LocationPoint from '../../Assets/pin-alt.svg'
import './style.css'
const MyContact = () => {
  return (
    <div className='MyContact'>
        <h1 >
          Contact Information
        </h1>
      <ContactInfo icon={MailIcon} heading={'MAIL US'} line1={'info@bluebase.com'} line2={'info@bluebase2.com'}/>
      <ContactInfo icon={PhoneIcon} heading={'CONTACT US'} line1={'+1 504-899-8221'} line2={'+1 504-749-5456'}/>
      <ContactInfo icon={LocationPoint} heading={'LOCATION'} line1={'22 Baker Street, Texas \n United States'} line2={'W1U 3BW'}/>
      
      </div>
  )
}

export default MyContact
