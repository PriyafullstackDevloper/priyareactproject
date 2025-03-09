import React from "react";
import "./Actor.css";

class Actor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedMovies: [], 
    };
  }

  // Function to handle click on an actor's image
  handleActorClick = (movies) => {
    this.setState({ selectedMovies: movies });
  };

  // Button function to display player image and name
  button = (actorImage, actorName, movies) => {
    return (
      <div>
        <div>
          <img
            src={actorImage}
            alt={actorName}
            onClick={() => this.handleActorClick(movies)} 
          />
          <p>{actorName}</p>
        </div>
      </div>
    );
  };

  render() {
    const { selectedMovies } = this.state;

    return (
      <div className="container">
        <h1>Actors List</h1>

        {/* Render actors */}
        {this.button(
           "https://upload.wikimedia.org/wikipedia/commons/thumb/0/07/Aamir_Khan_in_2014_%28cropped%29.jpg/800px-Aamir_Khan_in_2014_%28cropped%29.jpg", 
           "Amir Khan ",
          ["3 Idiots", "Rang De Basanti", "Dangal", "Fanaa", "Talaash"]
        )}
        {this.button(
          "https://images.mid-day.com/images/images/2016/apr/02-Alia-Bhatt.jpg",
          "Alia Bhatt",
          ["Badrinath", "Raazi", "Udta Punjab", "Highway", "Student Of the Year"]
        )}
        {this.button(
          "https://i.pinimg.com/474x/a9/e2/9f/a9e29fbed133d7835cda48df2d924f8b.jpg",
          "Kareena Kapoor",
          ["Jab We Met", "Tanu Weds Manu", "3 Idiots", "Heroine", "Veere Di Wedding"]
        )}
        {this.button(
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHDwbqP4v633G_Ot6FOrlSKslio2cVbdURgQ&s",
          "Salman Khan",
          ["Maine Pyar Kiya", "Hum Aapke Hain Koun!", "Bajrangi Bhaijaan", "Dabangg", "Andaz Apna Apna"]
        )}
         {this.button(
           "https://i.pinimg.com/736x/76/02/2b/76022b6d5d756ad1421765a626966a95.jpg", 
          "Kiara Advani",
          ["Fugly", "MS Dhoni",  "Good Newwz", "Guilty", "Jugjugg Jeeyo"]
        )}

        {this.button(
          "https://st1.bollywoodlife.com/wp-content/uploads/2023/01/3-205.png?impolicy=Medium_Widthonly&w=400&h=711", 
            "Rashmika Mandanna",
          ["Pushpa", "Geetha Govindam", "Kirik Party", "Dear Comrade,", "Anjaniputra"]
        )}

        
      {this.button(
         "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkZzcBq2dQp7UZo7m5W_eT977-6qgXacl5cHoW5JJuwAm82TU_xCGwPDk_Dm0Cr0vyNB0&usqp=CAU", 
          "Rohit Saraf",
          ["Dear Zindagi", " Ludo ", " Kamali from Nadukkaveri", "The Sky Is Pink", " Mismatched"]
        )}

      

        {this.button(
           "https://www.livehindustan.com/lh-img/smart/img/2024/05/24/1200x900/deepika_padukone_1505999816_1716518465843.jpg", 
           "deepika Padukon",
          ["Pathaan", "Goliyon Ki Raasleela Ram-Leela", "Happy New Year", "Bombay Talkies", "Main aurr Mrs. Khanna"]
        )}



        {/* Render selected actor's movies */}
        {selectedMovies.length > 0 && (
          <div className="movies">
            <h2>Top 5 Movies:</h2>
            <ol>
              {selectedMovies.map((movie, index) => (
                <li key={index}>{movie}</li>
              ))}
            </ol>
          </div>
        )}
      </div>
    );
  }
}

export default Actor;