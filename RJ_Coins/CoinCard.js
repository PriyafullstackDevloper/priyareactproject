import React from "react";
import "./CoinCard.css";

export default class CoinCard extends React.Component {
    render() {
        return (
            <div className="coin-card"
                onClick={() => {
                    this.props.onCoinClick({ name: this.props.coinText, value: parseInt(this.props.coinText) });
                }}>
                <img className="coin-image" src={this.props.image}  />
                <text className="coin-text">{this.props.coinText}</text>
                {this.props.coinCounter ? (
                    <text className="coin-badge">{this.props.coinCounter}</text>
                ) : null}
            </div>
        );
    }
}
