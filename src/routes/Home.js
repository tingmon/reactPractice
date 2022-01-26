import { useEffect, useState } from "react";
import Movie from "../components/Movie";
import { Link } from "react-router-dom";

function Home() {
	const [loading, setLoading] = useState(true);
	const [movies, setMovies] = useState([]);
	const getMovies = async () => {
		// const response = await fetch(
		// 	`https://yts.mx/api/v2/list_movies.json?minimum_rating=8.7&sort_by=year`
		// );
		// const json = await response.json();
		const json = await (
			await fetch(
				`https://yts.mx/api/v2/list_movies.json?minimum_rating=8.7&sort_by=year`
			)
		).json();

		setMovies(json.data.movies);
		setLoading(false);
	};
	useEffect(() => {
		getMovies();
	}, []);
	console.log(movies);

	return (
		<div>
			{loading ? (
				<h1>Loading...</h1>
			) : (
				<div>
					{movies.map((movie) => (
						<Movie key={movie.id} movie={movie} />
					))}
				</div>
			)}
		</div>
	);
}

export default Home;
