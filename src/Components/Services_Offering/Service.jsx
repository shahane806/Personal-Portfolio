import React from 'react'
import './style.css'


import { Link } from 'react-router-dom'
import linkLogo from '../../Assets/icon.svg'
import camera from '../../Assets/camera.svg'
import color_filter from '../../Assets/color-filter.svg'
import design_pencil from '../../Assets/design-pencil.svg'
import dev_mode_phone from '../../Assets/dev-mode-phone.png'
const Service = () => {
   
  return (
    <>
    <div className='signature Profile ServiceDiv'>
    <div className='signature Service_icons_div'>
        <img className="Service_icons" src={camera} alt='camera'/>
        <img className="Service_icons" src={color_filter} alt='color_filter'/>
        <img  className="Service_icons" src={design_pencil} alt='design_pencil'/>
        <img  className="Service_icons devModePhone" src={dev_mode_phone} alt='dev_mode_phone'/>
    </div>
    <div className="ProfileLink  Service">
     <div className="ServiceInfo Info signature_info" style={{textDecoration:'none'}}>
       <p>SPECIALIZATION</p>
       <h1>Services Offering</h1>
     </div>
     
     <div className='ServiceNavigate'>
      <Link to={'/About'}><img src={linkLogo} alt='LinkLogo'></img></Link>
        </div>
   </div>
   </div>
    
    </>
  )
}

export default Service
