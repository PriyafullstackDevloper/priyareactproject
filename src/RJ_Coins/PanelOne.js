import React from "react";
import "./PanelOne.css";
import CoinCard from "./CoinCard";

export default class PanelOne extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            coinOneCounter: 0,
            coinTwoCounter: 0,
            coinFiveCounter: 0,
            coinTenCounter: 0,
            coinTwentyCounter: 0,
        };
    }

    incrementCounter = (coin) => {
        if (coin.name === "ONE") {
            this.setState({ coinOneCounter: this.state.coinOneCounter + 1 });
        } else if (coin.name === "TWO") {
            this.setState({ coinTwoCounter: this.state.coinTwoCounter + 1 });
        } else if (coin.name === "FIVE") {
            this.setState({ coinFiveCounter: this.state.coinFiveCounter + 1 });
        } else if (coin.name === "TEN") {
            this.setState({ coinTenCounter: this.state.coinTenCounter + 1 });
        } else if (coin.name === "TWENTY") {
            this.setState({ coinTwentyCounter: this.state.coinTwentyCounter + 1 });
        }

        this.props.onCoinClick(coin);
    };

    render() {
        return (
            <div className="panel-one">
<CoinCard image={"/one.png"} coinText="ONE" coinCounter={this.state.coinOneCounter} onCoinClick={() => this.incrementCounter({ name: "ONE", value: 1 })} />
<CoinCard image={"/two.png"} coinText="TWO" coinCounter={this.state.coinTwoCounter} onCoinClick={() => this.incrementCounter({ name: "TWO", value: 2 })} />
<CoinCard image={"/five.png"} coinText="FIVE" coinCounter={this.state.coinFiveCounter} onCoinClick={() => this.incrementCounter({ name: "FIVE", value: 5 })} />
<CoinCard image={"/ten.png"} coinText="TEN" coinCounter={this.state.coinTenCounter} onCoinClick={() => this.incrementCounter({ name: "TEN", value: 10 })} />
<CoinCard image={"/twenty.png"} coinText="TWENTY" coinCounter={this.state.coinTwentyCounter} onCoinClick={() => this.incrementCounter({ name: "TWENTY", value: 20 })} />

            </div>
        );
    }
}
