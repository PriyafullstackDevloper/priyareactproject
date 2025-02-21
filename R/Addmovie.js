import React from "react";
import "./Addmovie.css";


export default class Addmovie extends React.Component {
  render() {
    return (
      <div className="addmovie">
        <button onClick={()=>this.props.openForm()} ><img
          style={{ height: "60px", width: "60px", margin: "20px", color:"white" }}
          src="./amazon.png"
          alt="Amazon Logo"
          
        /></button>
      </div>
    );
  }
}
