import React from "react";
import "./Headermovie.css";
import Addmovie from "./Addmovie";

export default class Header extends React.Component {
    render() {
        return (
            <header className="header">
                <div className="logo">
                    <h1 className="c">IMDB</h1>
                </div>

                <div className="search-bar">
                    <input type="text" placeholder="Search movies..." />
                    <button className="search-button">Search</button>
                </div>

                <Addmovie openForm={this.props.openForm} />
            </header>
        );
    }
}
