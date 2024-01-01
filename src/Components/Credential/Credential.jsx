import React from 'react'
import './style.css'


import { Link } from 'react-router-dom'
import linkLogo from '../../Assets/icon.svg'
import signature from '../../Assets/sign.png'
const Credential = () => {
  return (
    <div className='signature Profile '>
       <div className='signature'>
        <img src={signature} alt='signature'></img>
       </div>
       <div className="ProfileLink ">
        <div className=" signature_info" style={{textDecoration:'none'}}>
          <h1>Credentials.</h1>
          <p>More about me.</p>
          <div className="ProfileLink" style={{textDecoration:'none'}}>
          <div id='Navigate' className='CredentialNavigate'>
      <Link to={'/About'}><img src={linkLogo} alt='LinkLogo'></img></Link>
        </div>

        </div>
        </div>
        
       
      </div>
    </div>
  )
}

export default Credential
