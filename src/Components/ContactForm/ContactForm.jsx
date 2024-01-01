import React from 'react'
import './style.css'
const ContactForm = () => {
    const handleSubmitForm = ()=>{
        alert("form submitted successfully");
    }
  return (
    <div id='ContactForm' className='ContactFormClass' style={{minWidth:'80%',display:'flex',flexDirection:'column'}}>
      <div className='ContactHeading'>
        <h1 style={{color:'white', wordWrap:'break-word'}}>
            Lets Work <span style={{color:'skyblue'}}>Together.</span>
        </h1>
      </div>
      <div className='MyContactForm'>
      <form onSubmit={handleSubmitForm} style={{display:'flex',flexDirection:'column',flexWrap:'wrap'}}>
       <input type='text' placeholder='Name*' required></input>
       <input type='email' placeholder='Email*' required></input>
       <input type='text' placeholder='Your Subject*' required></input>
       <input style={{height:'150px'}} type='text' placeholder='Your Message*' required></input>
       <button type='submit'>Send Message</button>
     </form>
      </div>
    </div>
  )
}

export default ContactForm
