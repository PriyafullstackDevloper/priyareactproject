
import React, { Component } from "react";
import "./Form.css";

export default class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movieName: "",
      duration: "",
      movieDirector: "",
      moviePoster: "",
    };
  }

  // Handle input changes
  handleInputChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  // Handle form submission
  submitFunction = (event) => {
    event.preventDefault();
    const { movieName, duration, movieDirector, moviePoster } = this.state;

    if (!movieName || !duration || !movieDirector || !moviePoster) {
      alert("All fields are required!");
      return;
    }

    // Call addMovie function passed as prop
    this.props.addMovie({
      movieName,
      duration,
      movieDirector,
      moviePoster,
    });

    // Reset the form after submission
    this.setState({
      movieName: "",
      duration: "",
      movieDirector: "",
      moviePoster: "",
    });
  };

  render() {
    return (
      <div className="form-panel">
        <h2>Add a Movie</h2>
        <form onSubmit={this.submitFunction}>
          <label>Movie Name:</label>
          <input
            type="text"
            name="movieName"
            value={this.state.movieName}
            onChange={this.handleInputChange}
            placeholder="Enter Movie Name"
          />

          <label>Duration (in minutes):</label>
          <input
            type="text"
            name="duration"
            value={this.state.duration}
            onChange={this.handleInputChange}
            placeholder="Enter Movie Duration"
          />

          <label>Director:</label>
          <input
            type="text"
            name="movieDirector"
            value={this.state.movieDirector}
            onChange={this.handleInputChange}
            placeholder="Enter Director Name"
          />

          <label>Movie Poster URL:</label>
          <input
            type="text"
            name="moviePoster"
            value={this.state.moviePoster}
            onChange={this.handleInputChange}
            placeholder="Enter Image URL"
          />

          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}
