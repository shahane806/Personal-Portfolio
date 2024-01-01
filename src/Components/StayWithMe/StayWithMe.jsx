import React from 'react'


import { Link } from 'react-router-dom'
import linkLogo from '../../Assets/icon.svg'
import dribbble from '../../Assets/dribbble.svg'
import twitter from '../../Assets/twitter.svg'
import './style.css'
const StayWithMe = () => {
  return (
    <>
    <div className='signature Profile StayWithMeDiv'>
    <div className='signature Service_icons_div '>
        <div className='Service_icons_div_round'>

        <img className="Service_icons" src={dribbble} alt='dribble'/>
        </div>
        <div className='Service_icons_div_round'>

        <img className="Service_icons" src={twitter} alt='twitter'/>
        </div>
    </div>
    <div className="ProfileLink ">
     <div className="StayWithMeInfo Info signature_info" style={{textDecoration:'none'}}>
       <p>STAY WITH ME</p>
       <h1>Profiles</h1>
     </div>
     
     <div className='StayWithMeNavigate'>
      <Link to={'/About'}><img src={linkLogo} alt='LinkLogo'></img></Link>
        </div>
   </div>
   </div>
    
    </>
  )
}

export default StayWithMe
