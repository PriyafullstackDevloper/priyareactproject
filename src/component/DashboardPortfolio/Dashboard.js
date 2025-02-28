import React, { Component } from "react";
import "./Dashboard.css";
import CoinDashboard from "./RJ_Coins/CoinDashboard";
import Imdb from './Movies/Imdb';

export default class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      projects: [
        { name: "IMDb Movies", component: <Imdb /> },
        { name: "Coin Game", component: <CoinDashboard /> },
      ],
      selectedProject: null, // Initially no project is selected
    };
  }

  handleProjectClick = (project) => {
    this.setState({ selectedProject: project.component });
  };

  render() {
    return (
      <div className="dashboard-main-container">
        <h1 style={{ color: "black", fontSize: "40px" }}>React Projects</h1>
        <div className="Projects-Container">
          {this.state.projects.map((project, index) => (
            <div
              key={index}
              className="project-box"
              onClick={() => this.handleProjectClick(project)}
              style={{ cursor: "pointer" }}
            >
              {project.name}
            </div>
          ))}
        </div>
        <br />
        {/* Render the selected project below */}
        <div className="Project-Content">
          {this.state.selectedProject ? (
            this.state.selectedProject
          ) : (
            <p style={{ color: "gray", fontSize: "20px" }}>
              Select a project to view its content.
            </p>
          )}
        </div>
      </div>
    );
  }
}