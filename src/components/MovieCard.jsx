import { Col } from "react-bootstrap";
import { Link } from "react-router-dom";
const MovieCard = (props) => {
  return (
    <Col>
      <Link to={`/movie-details/${props.id}`} className="text-light text-decoration-none">
        <img
          className="img-fluid movie-poster"
          src={props.poster}
          alt={props.title}
        />
        <p className="fs-5">{props.title}</p>
      </Link>
    </Col>
  );
};

export default MovieCard;
