import React from "react";
import ".//ProfileImage.css"


export default class ProfileImageBlue extends React.Component{
    render(){
        const default_image = "https://www.pngall.com/wp-content/uploads/5/Profile-Male-PNG.png"
        return(
            <div className="profile-div-gray">
                <img src={default_image} className="profile-image-gray" />
            </div>


        )
    }
};