import React from "react";

export default class ConditionalJSX extends React.Component{
    render() {
        let gretings = "Hello,world";

        const date = new Date();
        const hours = date.getHours();
        const minutes = date.getMinutes();
        const seconds = date.getSeconds();
    

        if(hours < 12){
            gretings = "Good morning";
        }else if (hours >=12 && hours < 17){
            gretings = "Good afternoon";
        }else if (hours >= 17 && hours < 20){
            gretings = "Good evening";
        }else{
            gretings = "Good night";
        }

        return (
            <div style={{ backgroundColor: "whitesmoke", padding: "20px", color: "black" }}>
                <h1>{gretings}</h1>
                <p>The Current Time is {hours}:{minutes < 10 ? `0${minutes}`: minutes}:{seconds}</p>
            </div>
        )
    }

}