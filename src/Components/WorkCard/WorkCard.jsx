import React from 'react'


import { Link } from 'react-router-dom'
import linkLogo from '../../Assets/icon.svg'
import './style.css'

const WorkCard = ({Heading,Discription,ProjectPic}) => {
  return (
   <>
    <div className="WorkCard Profile">
      <div className="AboutProfilePic AboutWorkProfilePic">
        <img src={ProjectPic} alt="ProfilePic"></img>
      </div>
     
       <div id='NavigateInfo'>
       <div className="Info" style={{textDecoration:'none'}}>
          <h1>{Heading}</h1>
          <p>{Discription}</p>
        </div>
        <div id='WorkCardNavigate'>
        <div id='Navigate'>
      <Link to={'/About'}><img src={linkLogo} alt='LinkLogo'></img></Link>
        </div>
        </div>
        
       </div>
      
        
    </div>
   </>
  )
}

export default WorkCard
