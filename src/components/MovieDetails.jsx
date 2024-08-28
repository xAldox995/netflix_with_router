import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Container, Row, Col, Card, ListGroup, Spinner } from "react-bootstrap";

const MovieDetails = () => {
  const { movieID } = useParams();
  const [movieDetails, setMovieDetails] = useState(null);
  const [comments, setComments] = useState([]);

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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // return (
  //   <div className="text-light my-5 text-center border border-tertiary">
  //     {movieDetails && (
  //       <>
  //         {/* <h1>{movieDetails.Title}</h1>
  //         <p>{movieDetails.Plot}</p>
  //         <img src={movieDetails.Poster} alt={movieDetails.Title} />
  //         <p>Directed by: {movieDetails.Director}</p>
  //         <p>Released: {movieDetails.Released}</p>
  //         <p>Genre: {movieDetails.Genre}</p> */}
  //         <Card bg="dark" className="text-center text-light">
  //           <Card.Img variant="top" src={movieDetails.Poster} />
  //           <Card.Body>
  //             <Card.Title>{movieDetails.Title}</Card.Title>
  //             <Card.Text>
  //             <p>{movieDetails.Plot}</p>
  //             <p>{movieDetails.Genre}</p>
  //             <p>{movieDetails.Released}</p>
  //             </Card.Text>
  //           </Card.Body>
  //         </Card>
  //       </>
  //     )}

  //     <div className=" comments-section">
  //       <h2>Comments</h2>
  //       {comments.length > 0 ? (
  //         <ListGroup>
  //           {comments.map((comment) => (
  //             <ListGroupItem key={comment._id}>
  //               <strong>{comment.author}:</strong> {comment.comment}
  //             </ListGroupItem>
  //           ))}
  //         </ListGroup>
  //       ) : (
  //         <h3>No comments available.</h3>
  //       )}
  //     </div>
  //   </div>
  // );
  return (
    <Container className="text-light my-5 text-center">
      <Row className="justify-content-center">
        <Col xs={12} md={8} lg={6}>
          {movieDetails ? (
            <Card
              bg="dark"
              className="text-center text-light border border-tertiary"
            >
              <Card.Img variant="top" src={movieDetails.Poster} />
              <Card.Body>
                <Card.Title>{movieDetails.Title}</Card.Title>
                <Card.Text>
                  <div>
                    <p>{movieDetails.Plot}</p>
                    <p>{movieDetails.Genre}</p>
                    <p>{movieDetails.Released}</p>
                  </div>
                </Card.Text>
              </Card.Body>
            </Card>
          ) : (
            <div className="text-center">
              <Spinner animation="border" variant="warning" />
            </div>
          )}
          <ListGroup>
            {comments.length > 0 ? (
              comments.map((c) => {
                return (
                  <ListGroup.Item key={c._id} className="bg-dark text-light">
                    <spanp>
                      {c.author} : {c.comment} || {c.rate}
                    </spanp>
                  </ListGroup.Item>
                );
              })
            ) : (
              <ListGroup.Item className="bg-dark text-light">
                Non ci sono recensioni per questo film
              </ListGroup.Item>
            )}
          </ListGroup>
        </Col>
      </Row>
    </Container>
  );
};

export default MovieDetails;
