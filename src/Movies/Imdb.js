import React, { Component } from "react";
import "./Imdb.css";
import Header from "./Headermovie";
import Form from "./Form";
import Panel from "./Panel";

export default class Imdb extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showForm: false,
            movieArray: []
        };
    }

    openForm = () => {
        console.log("open");
        this.setState({ showForm: true });
    };

    addMovie = (movie) => {
        console.log("Added movie:", movie);
        this.setState((prevState) => ({
            movieArray: [movie, ...prevState.movieArray],
            showForm: false
        }));
    };

    render() {
        return (
            <>
                <div className="imdb">
                    <Header openForm={this.openForm} />
                </div>
                <div className="imdb-container">
                    {this.state.showForm ? 
                        (<Form addMovie={this.addMovie} />) // Pass addMovie to Form
                        : (<Panel movieArray={this.state.movieArray} openForm={this.openForm} />)
                    }
                </div>
            </>
        );
    }
}
