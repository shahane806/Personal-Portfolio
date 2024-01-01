import React from 'react'


import { Link } from 'react-router-dom'
import linkLogo from '../../Assets/icon.svg'
import Icon2 from '../../Assets/icon2.png'
import './style.css'
const LWT = () => {
  return (
    <>
    <div className='signature Profile LWTDiv' >
    <div className='signature Service_icons_div LWT'>
    <div className='Logo' >
        <img  src={Icon2} alt='Icon2'></img>
    </div>
    <div className="ProfileLink " >
     <div className="LWTInfo Info signature_info" >
       <h3 className='letsWorkTogether' >lets Work <span style={{ color:"skyblue"}}>Together</span></h3>
     </div>
     <div className='LWTNavigate'>
      <Link to={'/About'}><img src={linkLogo} alt='LinkLogo'></img></Link>
        </div>
   </div>
    </div>
    
    
   </div>
    
    </>
  )
}

export default LWT
