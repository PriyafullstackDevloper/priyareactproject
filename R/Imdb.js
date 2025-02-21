import React from "react";
import "./Imdb.css"
import Header from "./Headermovie";
import Form from "./Form";
import Panel from "./Panel"
import { render } from "@testing-library/react";


export default class Imdb extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showForm: false,
            // store movies
            movies: []
        };
    }
    openForm = () => {
        console.log("open")
        this.setState({ showForm: true })
    }
    addMovie = (movieData) => {
        console.log(movieData)
        this.setState(() => ({
            showForm: false
        }));

    };

    render() {
        return (<>
            <div className="imdb">

                <Header openForm={this.openForm} /></div>
            <div className="imdb-container">
                {this.state.showForm ? 
                (<Form addMovie={this.addMovie} />)
                : (<Panel movies={this.state.movies} />)}
                    

            </div>

        </>)
    }
}
