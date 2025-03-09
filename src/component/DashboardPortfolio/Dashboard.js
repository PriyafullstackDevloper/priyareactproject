import React, { Component } from "react";
import "./Dashboard.css";
import ImdbDashboard from "./Movies/ImdbDashboard";
import Table from "./Table/Table";
import Actor from "./component/Actor/Actor";
import CoinDashboard from "./Coins/CoinDashboard";
import App from "../../App";


export default class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      projects: [
        { name: "ImdbDashboard", component: <ImdbDashboard /> },
        { name: "Table", component: <Table /> },
        { name: "Actor", component: <Actor /> },
        { name: "CoinDashboard", component: <CoinDashboard /> }, // Uncomment if needed
      ],
      selectedProject: null,
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
        <div className="Project-Content">
          {this.state.selectedProject ? this.state.selectedProject : <p>Select a project to display</p>}
        </div>
      </div>
    );
  }

}
export default App;
