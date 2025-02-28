import React from "react";
import "./Addmovie.css";


export default class Addmovie extends React.Component {
  render() {
    return (
      <div className="addmovie">
        <button onClick={()=>this.props.openForm()} 
          >Add Movie</button>
      </div>
    );
  }
}
