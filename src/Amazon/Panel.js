import React from "react";
import "./Pannel.css"; 
import Cards from "./cards"; 

export default class Pannel extends React.Component {
  render() {
    return (
      <div className="pannel">
        <Cards products={this.props.data} addToCart={this.props.addToCart} />
      </div>
    );
  }
}