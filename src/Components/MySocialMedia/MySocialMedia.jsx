import React from 'react'
import SocialMedia from '../../Components/Social_Media/SocialMedia'
import twitter from '../../Assets/twitter.svg'
import dribbble from '../../Assets/dribbble.svg'
import instagram from '../../Assets/instagram.svg'
const MySocialMedia = () => {
  return (
    <div className='MyContact MySocialMedia' style={{display:'flex', flexDirection:'column'}}>
    <h1 >
        Social Media
      </h1>
      <div className='socialMediaIcons' style={{display:'flex',flexDirection:'row'}}> 
      <SocialMedia icon={dribbble}/>
    <SocialMedia icon={twitter}/>
    <SocialMedia icon={instagram}/>
      </div>
    </div>
  )
}

export default MySocialMedia
