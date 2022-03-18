import propTypes from "prop-types";
import { Link } from "react-router-dom";

function Movie({ movie }) {
	return (
		<div>
			<Link to={`/movie/${movie.id}`}>
				<img src={movie.medium_cover_image} alt="whatever" />
				<h2>Title: {movie.title}</h2>
			</Link>
			<h3>Year: {movie.year} </h3>
			<p>
				{movie.summary.length > 235
					? `${movie.summary.slice(0, 235)} ...`
					: movie.summary}
			</p>
			<ul>
				{movie.genres && movie.genres.map((item) => <li key={item}>{item}</li>)}
			</ul>
		</div>
	);
}

Movie.propTypes = {
	movie: propTypes.object.isRequired,
	//genres: propTypes.arrayOf(propTypes.string).isRequired,
};

export default Movie;
