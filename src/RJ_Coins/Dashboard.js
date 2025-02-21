import React from "react";
import "./Dashboard.css";
import PanelOne from "./PanelOne";

export default class Dashboard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            total: 0,
        };
    }

    onCoinClick = (coin) => {
        if (coin.name === "ONE") {
            this.setState({ total: this.state.total + 1 });
        } else if (coin.name === "TWO") {
            this.setState({ total: this.state.total + 2 });
        } else if (coin.name === "FIVE") {
            this.setState({ total: this.state.total + 5 });
        } else if (coin.name === "TEN") {
            this.setState({ total: this.state.total + 10 });
        } else if (coin.name === "TWENTY") {
            this.setState({ total: this.state.total + 20 });
        }
    };

    render() {
        return (
            <div className="coin-game">
                <h2 className="title">Coin Collector</h2>
                <div className="counter-text">{this.state.total}</div>
                <PanelOne onCoinClick={this.onCoinClick} />
            </div>
        );
    }
}
