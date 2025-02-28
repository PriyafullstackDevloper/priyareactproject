import React from "react";
import "./Panel.css"; 

export default class Panel extends React.Component {
  render() {
    const { movieArray, openForm } = this.props;

    return (
      <div className="panel-container">
        <h2>Movie List</h2>
        <button className="add-movie-btn" onClick={openForm}>
          Add Movie
        </button>

        {movieArray.length === 0 ? (
          <p className="empty-message">No movies added yet. Click "Add Movie" to start!</p>
        ) : (
          <ul className="movie-list">
            {movieArray.map((movie, index) => (
              <li key={index} className="movie-item">
                <img src={movie.moviePoster} alt={movie.movieName} className="movie-poster" />
                <div className="movie-info">
                  <strong>{movie.movieName}</strong> - <strong>{movie.duration} min</strong> <br />
                  Directed by <strong>{movie.movieDirector}</strong>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    );
  }
}
