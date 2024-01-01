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
      <ContactInfo icon={MailIcon} heading={'MAIL US'} line1={'om.p.shahane@gmail.com'} line2={''}/>
      <ContactInfo icon={PhoneIcon} heading={'CONTACT US'} line1={'+91 788-794-1005'} line2={''}/>
      <ContactInfo icon={LocationPoint} heading={'LOCATION'} line1={'Wamanbhau Nagar Pathardi \n Ahmednagar'} line2={'Maharashtra'}/>
      
      </div>
  )
}

export default MyContact
