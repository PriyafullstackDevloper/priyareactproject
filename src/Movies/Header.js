
import React from "react";
import "./Header.css";
import AddMovie from "../Movies/Addmovie"


class Header extends React.Component {
    render() {
        return (
            <header className="Header">
                <img className="imdb-logo" src="./imdblogo.png"  />
                <div className="search-container">
                    <button className="search-btn">Search</button>
                </div>
                <div>

                </div>

                <AddMovie openForm={this.props.openForm}/>
              


            </header>
        );
    }
}
export default Header;
