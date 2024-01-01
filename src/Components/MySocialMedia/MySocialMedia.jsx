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
    
    {/* <SocialMedia icon={twitter}/>  */} 
    <a href='https://www.linkedin.com/in/omshahane/' target='_blank'> <SocialMedia icon={dribbble}/></a>
    <a href='https://www.instagram.com/shahane806/' target='_blank'><SocialMedia icon={instagram}/></a>
      </div>
    </div>
  )
}

export default MySocialMedia
