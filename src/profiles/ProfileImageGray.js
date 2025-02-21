import React from "react";
import ".//ProfileImage.css"

export default class ProfileImageGray extends React.Component{
    render(){
        const default_image = "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
        return(
            <div className="profile-div-green">
                <img src={default_image} className="profile-image-green" />
            </div>
        )
    }
};