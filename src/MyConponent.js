import React, { Component } from "react";

class MyComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            counter:0,     
        }
  
        count = ()=>{
            this.setState({
                counter:this.state.counter+1
            })
        }
    }
    render() {
        return(
            <div>
                <h1>{this.state.counter}</h1>
                <button onClick={this.count   }>Click me</button>
            </div>
        )
    }
}
export default MyComponent;