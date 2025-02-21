import React from "react";
import "./Actors.css";

class Actors extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedActor: null,
      actors: [
        {
          id: 1,
          src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPy3KBvRLHUIf9HAXICzlZLdzh6MWKJMoqKA&s",
          name: "Actor 1",
        },
        {
          id: 2,
          src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStDqoJ8SKFnKMVqyPdGfOKWU_n5JM0oK1WRw&s",
          name: "Actor 2",
        },
        {
          id: 3,
          src: "https://igimage.indiaglitz.com/tamil/gallery/actor/vijay/vijayposter1.jpg",
          name: "Actor 3",
        },
        {
          id: 4,
          src: "https://www.koimoi.com/wp-content/new-galleries/2022/04/alia-bhatt-the-only-indian-asian-in-the-list-of-top-5-cinema-actors-actresses-influencers-on-instagram-001.jpg",
          name: "Actor 4",
        },
        {
          id: 5,
          src: "https://i.pinimg.com/236x/32/48/6d/32486de79d035979e3bf8c83bbadb0bb.jpg",
          name: "Actor 5",
        },
        {
          id: 6,
          src: "https://i.pinimg.com/236x/27/d7/9b/27d79b35cab419e95a0c05f990f13d9f.jpg",
          name: "Actor 6",
        },
        {
          id: 7,
          src: "https://images.saymedia-content.com/.image/t_share/MTc2MjcyNjkzMjM3NzIwMjM3/the-most-handsome-actors-in-indian-film-bollywood-industry.jpg",
          name: "Actor 7",
        },
        {
          id: 8,
          src: "https://images.javatpoint.com/top10-technologies/images/top-10-bollywood-actors2.jpg",
          name: "Actor 8",
        },
        {
          id: 9,
          src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeaDpqrnsgbOUIWZnVtcSIlgM4FgVkk_Xx9A&s",
          name: "Actor 9",
        },
        {
          id: 10,
          src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCCeZdQuOju3fbLoDGr-wkIwFJTSnR6aDVdQ&s",
          name: "Actor 10",
        },
      ],
    };
  }

  handleActorClick = (id) => {
    console.log("Actor clicked:", id);
    this.setState({ selectedActor: id });
  };

  renderActors = () => {
    return this.state.actors.map((actor) => (
      <img
        key={actor.id}
        src={actor.src}
        alt={actor.name}
        className="actor-image"
        onClick={() => this.handleActorClick(actor.id)}
      />
    ));
  };

  render() {
    return (
      <div className="actors-container">
        <h2>Actors List</h2>
        <div className="actors-row">{this.renderActors()}</div>
        {this.state.selectedActor && (
          <div className="actor-details">
            Selected Actor ID: {this.state.selectedActor}
          </div>
        )}
      </div>
    );
  }
}

export default Actors;
