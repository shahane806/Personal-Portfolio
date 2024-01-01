import React from "react";

import { Link } from 'react-router-dom'
import profilePic from "../../Assets/me.png";
import linkLogo from '../../Assets/icon.svg'
import "./style.css";
const Profile = () => {
  return (
    <div className="Profile">
      <div className="ProfilePic">
        <img src={profilePic} alt="ProfilePic"></img>
      </div>

      <div className="ProfileLink">
        <div className="Info" style={{textDecoration:'none'}}>
          <h5>A WEB DESIGNER </h5>
          <h1>Om Shahane</h1>
          <p>I am a Web Designer based in Pathardi, Ahmednagar.</p>
        </div>
        
        <div style={{textDecoration:'none'}}>
        <div  className="ProfileNavigate">
      <Link to={'/About'}><img src={linkLogo} alt='LinkLogo'></img></Link>
        </div>
        </div>
        
      </div>
    </div>
  );
};

export default Profile;
