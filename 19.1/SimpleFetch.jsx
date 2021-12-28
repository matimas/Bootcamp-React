import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function SimpleFetch() {
	const [movieTitle, setMovieTitle] = useState('');
	const [movieDirector, setMovieDirector] = useState('');

	const getData = async () => {
		const proxy = 'https://intense-mesa-62220.herokuapp.com/';
		const { data } = await axios.get(proxy + 'https://swapi.dev/api/films/1/');
		setMovieTitle(`title: ${data.title}`);
		setMovieDirector(`Director: ${data.director}`);
	};

	useEffect(() => {
		getData();
	});
	return (
		<div
			style={{
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
				flexFlow: 'column',
				fontSize: '30px',
				height: '50vh',
			}}
		>
			<div style={{ margin: '20px' }}>{movieTitle}</div>
			<div> {movieDirector}</div>
		</div>
	);
}
