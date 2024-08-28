import React, { useState, useEffect } from "react";
import MovieCard from "./MovieCard";
import { Row } from "react-bootstrap";

const MoviesComp = ({ urlForFetch, title }) => {
  const [movies, setMovies] = useState([]);

  const fetchMovies = () => {
    fetch(urlForFetch)
      .then((response) => {
        if (response.ok) {
          console.log("La response è ok");
          return response.json();
        } else {
          throw new Error("Dati non recuperati");
        }
      })
      .then((dataMovies) => {
        setMovies(dataMovies.Search);
      })
      .catch((error) => {
        console.log("Sei nell' error del catch", error);
      });
  };

  useEffect(() => {
    fetchMovies();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [urlForFetch]); // L'effetto viene eseguito ogni volta che urlForFetch cambia

  return (
    <div className="my-5 text-light">
      <h2>{title}</h2>
      <Row xs={2} md={3} lg={6} className="g-3">
        {movies.slice(0, 6).map((movie) => (
          <MovieCard
            key={movie.imdbID}
            id={movie.imdbID}
            poster={movie.Poster}
            title={movie.Title}
          />
        ))}
      </Row>
    </div>
  );
};

export default MoviesComp;
