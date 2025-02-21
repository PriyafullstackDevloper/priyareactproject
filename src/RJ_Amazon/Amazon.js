import React from "react";
import "./Amazon.css";
import Navbar from "./Navbar";
import Pannel from "./Panel";

export default class Dashboard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            
        };
    }

    render() {
        return (
            <div className="coin-game">
                <h2 className="title">Coin Collector</h2>
                <div className="counter-text">{this.state.total}</div>
                <Navbar onwindowsLoad={this.onwindowsLoad} />
                <Pannel onwindowsLoad={this.onwindowsLoad} />

            </div>
        );
    }
}
