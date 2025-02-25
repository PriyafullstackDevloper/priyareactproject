import React, { Component } from 'react';
import './Homepage.css'; // For styling

class Homepage extends Component {
  render() {
    return (
      <div className="main-container">
     <h1> Welcome to my React Portfolio</h1>
      
        {/* Sidebar */}
        <div className="aside">
          <div className="logo">
            {/* Add logo content here */}
          </div>  
        </div>

        {/* Main Content */}
        <div className="main-content">
          <section className="home section">
            {/* Add home section content here */}
          </section>
        </div>

        {/* Project Section */}
        <div className="project-section">
          <div className="project">
            <a
              href=""
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://www.shutterstock.com/image-vector/game-coins-golden-silver-bronze-260nw-2497564781.jpg"
                alt="Coins Game"
                width="200"
                height="200"
              />
              <button>Coins game</button>
            </a>
          </div>

          <div className="project">
            <a
              href="https://docs.google.com/spreadsheets/d/1dgR2K_0w0LSTO3j34FDARAH3rzyiTbchNRWsYNREZ1I/edit?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://m.media-amazon.com/images/I/51ieGfaDb1L.jpg"
                alt="White Board"
                width="200"
                height="200"
              />
              <button>Add Movies</button>
            </a>
          </div>

          <div className="project">
            <a
              href="https://docs.google.com/spreadsheets/d/1a-Oap0wudvECuHAj9YXqzS3mlEiCiUNupIvFC28m1sU/edit?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://cdn.taggbox.com/v7/tagshop.ai/blog/wp-content/uploads/2024/09/embed-youtube-channel-on-website.png"
                alt="YouTube Page on Web"
                width="200"
                height="200"
              />
              <button>Table</button>
            </a>
          </div>

          <div className="project">
            <a
              href="https://docs.google.com/spreadsheets/d/1YkTEwintkVCKUGKnt1YRO01RdGsN0ftWSy3hoJp-DV0/edit?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="./assets/mobileyoutubepage.jpeg"
                alt="YouTube Page on Mobile"
                width="200"
                height="200"
              />
              <button>YouTube Page On Mobile</button>
            </a>
          </div>

          <div className="project">
            <a
              href="https://docs.google.com/spreadsheets/d/1SK2TxSMWt3UohKSymoAH1iDhhlrsdVy39xVlIrVkaNs/edit?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://www.photoland.in/wp-content/uploads/2022/03/5-Marriage-Registration-900x900-350x350.jpg"
                alt="Marriage Eligibility Test"
                width="200"
                height="200"
              />
              <button>Marriage Eligibility Test</button>
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Homepage;