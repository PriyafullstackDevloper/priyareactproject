import React from "react";
import "./Panel.css";
import List from "./List";


export default class Panel extends React.Component{
    constructor(props){
        super(props);
        this.state = {

        }
    }

    render(){
        return(
            <div className="panel">
                <List />

            </div>
        )
    }
}