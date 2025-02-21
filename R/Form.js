import React, { Component } from "react";
import "./Form.css";

export default class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movieName: "",
      imagePath: "",
      duration: "",


    };
  }


  render() {
    return (
      <div className="movie-form-container">
        {/* <h2>Add a New Movie</h2> */}
        <form id="movieForm">
          <label htmlFor="movieName">Movie Name:</label>
          <input
            type="text"
            id="movieName"
            name="movieName"
            placeholder="Enter movie name"

          />

          <label htmlFor="imagePath">Image Absolute Path:</label>
          <input
            type="text"
            id="imagePath"
            name="imagePath"
            placeholder="Enter image URL"

          />

          <label htmlFor="duration">Duration:</label>
          <input
            type="text"
            id="duration"
            name="duration"
            placeholder="Enter duration ()"

          />

          <button type="submit" className="submit-btn">Add Movie</button>
        </form>
      </div>
    );
  }
}
