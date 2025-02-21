import React from "react";
import ".//ProfileImage.css"


export default class ProfileImage extends React.Component{
    render(){
        return(
            <div className="profile-div">
                <img src={"https://png.pngtree.com/png-vector/20191119/ourmid/pngtree-beautiful-profile-glyph-vector-icon-png-image_2002807.jpg"} className="profile-image" />
            </div>
        )
    }
}



