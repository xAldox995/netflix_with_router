import { Col } from "react-bootstrap"
const MovieCard = (props) => {
    return (
        <Col>
            <img className="img-fluid movie-poster" src={props.poster} alt={props.title} />
            <p className="fs-5">{props.title}</p>
          </Col>
    )
}

export default MovieCard