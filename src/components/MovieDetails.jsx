import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const MovieDetails = () => {
  const { movieID } = useParams();
  const [movieDetails, setMovieDetails] = useState(null);
  const [comments, setComments] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);

  const fetchMovieDetails = () => {
    fetch(`http://www.omdbapi.com/?apikey=66505d5c&i=${movieID}`)
      .then((response) => {
        if (response.ok) {
          console.log("Presi dettagli film", response);
          return response.json();
        } else {
          throw new Error("Errore nel recupero dettagli del film");
        }
      })
      .then((detailsOfTheFilm) => {
        setMovieDetails(detailsOfTheFilm);
        console.log(detailsOfTheFilm);
      })
      .catch((error) => {
        console.log("Errore nel catch dei dettagli film", error);
        setError("Impossibile caricare i dettagli del film");
        setIsLoading(false);
      });
  };

  const fetchComments = () => {
    fetch(`https://striveschool-api.herokuapp.com/api/comments/${movieID}`, {
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NmM3MzAzNjQzYTU2ODAwMTU4ZWMzZDciLCJpYXQiOjE3MjQ4NTUwMjUsImV4cCI6MTcyNjA2NDYyNX0.BWJyG6iboYodhQyxRq4Q41hcvKLmq22XIUUxtU3FwUQ",
      },
    })
      .then((response) => {
        if (response.ok) {
          console.log("Presi commenti Film", response);
          return response.json();
        } else {
          throw new Error("Errore nel recupero commenti del film");
        }
      })
      .then((commentsOfTheFilm) => {
        console.log(commentsOfTheFilm);
        setComments(commentsOfTheFilm);
      })
      .catch((err) => {
        console.log("Errore nel catch dei commenti film", err);
      });
  };

  useEffect(() => {
    fetchMovieDetails();
    fetchComments();
  }, [movieID]);

  return (
    <div className="text-light my-5 text-center">
      {movieDetails && (
        <>
          <h1>{movieDetails.Title}</h1>
          <p>{movieDetails.Plot}</p>
          <img src={movieDetails.Poster} alt={movieDetails.Title} />
          <p>Directed by: {movieDetails.Director}</p>
          <p>Released: {movieDetails.Released}</p>
          <p>Genre: {movieDetails.Genre}</p>
        </>
      )}

      <div className=" comments-section">
        <h2>Comments</h2>
        {comments.length > 0 ? (
          <ul>
            {comments.map((comment) => (
              <li key={comment.id}>
                <strong>{comment.author}:</strong> {comment.text}
              </li>
            ))}
          </ul>
        ) : (
          <p>No comments available.</p>
        )}
      </div>
    </div>
  );
};

export default MovieDetails;
