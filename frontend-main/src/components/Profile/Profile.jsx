import React from "react";
import "./Profile.css";
import { useDispatch } from "react-redux";
import { userLogout } from "../redux/action/user";

function Profile({userdata,userpost}) {
    const createdate=new Date(userdata.CreateAt);

   
   
  
  return (
    <>
      
          <div className="profile-card__cnt js-profile-cnt">
            <div className="profile-card__name">{userdata.name}</div>
            <div className="profile-card__txt">{userdata.email}</div>
            <div className="profile-card__txt">{createdate.getDate()}/{createdate.getMonth()}/{createdate.getFullYear()}</div>
            <div className="profile-card__txt">No. of Posts : {userpost.length}</div>


           
           
          </div>
        
    </>
  );
}

export default Profile;
