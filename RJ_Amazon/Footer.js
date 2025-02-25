import React, { Component } from "react";
import "./Footer.css"; // Import the CSS file

class Footer extends Component {
    render() {
        return (
            <footer className="footer">
                <div className="footer-top">
                    <p><a href="#">Back to top</a></p>
                </div>
                
                <div className="footer-middle">
                    <div className="footer-column">
                        <h5>Get to Know Us</h5>
                        <ul>
                            <li><a href="#">About Us</a></li>
                            <li><a href="#">Careers</a></li>
                            <li><a href="#">Press Releases</a></li>
                            <li><a href="#">Amazon Science</a></li>
                        </ul>
                    </div>

                    <div className="footer-column">
                        <h5>Make Money with Us</h5>
                        <ul>
                            <li><a href="#">Sell on Amazon</a></li>
                            <li><a href="#">Advertise Your Products</a></li>
                            <li><a href="#">Amazon Pay on Merchants</a></li>
                        </ul>
                    </div>

                    <div className="footer-column">
                        <h5>Amazon Payment Products</h5>
                        <ul>
                            <li><a href="#">Amazon Pay</a></li>
                            <li><a href="#">Gift Cards</a></li>
                            <li><a href="#">Amazon Pay Later</a></li>
                        </ul>
                    </div>

                    <div className="footer-column">
                        <h5>Let Us Help You</h5>
                        <ul>
                            <li><a href="#">Your Account</a></li>
                            <li><a href="#">Returns Center</a></li>
                            <li><a href="#">Help</a></li>
                        </ul>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>&copy; 2025 Amazon Clone. All rights reserved.</p>
                </div>
            </footer>
        );
    }
}

export default Footer;
