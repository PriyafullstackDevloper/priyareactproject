import React from "react";
import "./Navbar.css";
// import Product from "./Product";  

class Navbar extends React.Component {
    render() {
        return (
            <div className="navbar">
                <div className="logo">
                    <h1>Amazon</h1>
                </div>
                <div className="search-bar">
                    <input type="text" placeholder="Search for products..." />
                </div>
                <div className="cart">
                    <img src="./add-to-cart-3046.png" alt="Cart" className="cart-icon" />
                    <span className="cart-count">0</span>
                </div>

                
                {/* <Product /> */}
            </div>
        );
    }
}

export default Navbar;
