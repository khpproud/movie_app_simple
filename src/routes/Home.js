import React, { useState, useEffect } from 'react';
import axios from 'axios';

import Movie from '../components/Movie';
import './Home.css';

// const LIST_MOVIES = 'https://yts-proxy.now.sh/list_movies.json';
const LIST_MOVIES = 'https://yts.mx/api/v2/list_movies.json';
const SORT_BY_RATING = 'sort_by=rating';

const concatUrl = (base, ...sub) => {
	const result = `${base}?${sub.join('&')}`;
	console.log(result);
	return result;
};

const Home = () => {
	const [ isLoading, setIsLoading ] = useState(true);
	const [ movies, setMovies ] = useState([]);

	const getMovies = async () => {
		const { data: { data: { movies } } } = await axios.get(concatUrl(LIST_MOVIES, SORT_BY_RATING));
		setMovies(movies);
		setIsLoading(false);
	};

	useEffect(() => {
		getMovies();
	}, []);

	return (
		<section className="container">
			{isLoading ? (
				<div className="loader">
					<span className="loader__text">Loading...</span>
				</div>
			) : (
				<div className="movies">
					{movies.map((movie) => (
						<Movie
							key={movie.id}
							year={movie.year}
							title={movie.title}
							summary={movie.summary}
							poster={movie.medium_cover_image}
							genres={movie.genres}
						/>
					))}
				</div>
			)}
		</section>
	);
};

export default Home;
