import { useEffect, useState } from "react";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
function Detail() {
	const { id } = useParams();
	const [movieInfo, setMovieInfo] = useState(null);

	const getMovieDetail = async () => {
		const json = await (
			await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
		).json();
		console.log(json);
		setMovieInfo(json);
	};

	useEffect(() => {
		getMovieDetail();
		console.log("what??");
	}, []);

	if (movieInfo !== null) console.log(movieInfo.data.movie.torrents[0]);

	return movieInfo !== null ? (
		<div>
			<h1>Movie Detail Page</h1>
			<h2>Title: {movieInfo.data.movie.title_long}</h2>
			<img src={movieInfo.data.movie.medium_cover_image} alt="don't know" />
			<h3>Rating: {movieInfo.data.movie.rating}</h3>
			<div style={{ width: 500 }}>
				<span>Description: {movieInfo.data.movie.description_full}</span>
			</div>
			<hr></hr>
			<h3>Here's your download link</h3>
			{movieInfo.data.movie.torrents[0] && (
				<>
					<a
						style={{ marginRight: 10 }}
						href={movieInfo.data.movie.torrents[0].url}
					>
						720p
					</a>
					||{" "}
					{movieInfo.data.movie.torrents[1] && (
						<a
							style={{ marginLeft: 10 }}
							href={movieInfo.data.movie.torrents[1].url}
						>
							1080p
						</a>
					)}
				</>
			)}
		</div>
	) : null;
}

export default Detail;
