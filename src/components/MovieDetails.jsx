import { useState } from "react";
import { useParams } from "react-router-dom";

const MovieDetails = () => {
  const { movieId } = useParams();

  const [movieDetails, setMovieDetails] = useState(null);

  const [comments, setComments] = useState([]);

  const fetchMovieDetails = () => {
    fetch(`https://www.omdbapi.com/?i=tt3896198&apikey=a145b183&s&i=${movieId}`)
      .then((response) => {
        if (response.ok) {
          console.log("TUTT APPOST", response);
          return response.json()
        } else {
            throw new Error('Errore nel recupero dettagli del film')
        }
      })
      .then((detailsOfTheFilm) => setMovieDetails(detailsOfTheFilm))
      .catch((error) => {
        console.log("Errore nel catch dei dettagli film", error);
      });
  };
};

const fetchComments = () => {
    fetch(`https://striveschool-api.herokuapp.com/api/comments/${movieId}`, {
        headers: {
        "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NmM3MzAzNjQzYTU2ODAwMTU4ZWMzZDciLCJpYXQiOjE3MjQ4NTUwMjUsImV4cCI6MTcyNjA2NDYyNX0.BWJyG6iboYodhQyxRq4Q41hcvKLmq22XIUUxtU3FwUQ"
        }
        })
        ,then(())
        .catch((err) => {console.log('Errore nel catch dei commenti film', err)})
}
