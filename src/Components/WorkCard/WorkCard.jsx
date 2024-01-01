import React from 'react'


import { Link } from 'react-router-dom'
import linkLogo from '../../Assets/icon.svg'
import './style.css'

const WorkCard = ({Heading,Discription,ProjectPic}) => {
  return (
   <>
    <div className="WorkCard Profile" >
      <div className="AboutWorkProfilePic">
        <img   style={{width:'300px'}} src={ProjectPic} alt="ProfilePic"></img>
      </div>
     
       <div id='NavigateInfo'>
       <div className="Info" style={{textDecoration:'none'}}>
          <h1>{Heading}</h1>
          <p>{Discription}</p>
        </div>
        <div id='WorkCardNavigate'>
        <div id='Navigate'>
      {
        Heading=='Amazon Clone'? 
        <a href='https://amazon-clone-smoky-pi.vercel.app/' target='_blank'><img src={linkLogo} alt='LinkLogo'></img></a> : <a href='https://gamingbeastsmusics.000webhostapp.com/' target='_blank'><img src={linkLogo} alt='LinkLogo'></img></a>
      }
        </div>
        </div>
        
       </div>
      
        
    </div>
   </>
  )
}

export default WorkCard
