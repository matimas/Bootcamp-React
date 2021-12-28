import './NorrisJokes.css';
import React, { useEffect, useState } from 'react';
import NorrisAPI from './API/NorrisAPI';

export default function RefactorNorrisJokes() {
	const [categories, setCategories] = useState([]);
	const [joke, setJoke] = useState('');

	const getCategories = async () => {
		const response = await NorrisAPI.get(
			'https://api.chucknorris.io/jokes/categories',
		);
		setCategories(response.data);
	};
	const getJokes = async (e = '') => {
		const response = await NorrisAPI.get(
			`https://api.chucknorris.io/jokes/random?${e}`,
		);
		setJoke(response.data.value);
	};

	useEffect(() => {
		getCategories();
		getJokes();
	}, []);
	useEffect(() => {}, [joke]);

	return (
		<div className={'jokes-container'}>
			<button onClick={(e) => getJokes()}>new random Joke</button>
			<select
				className={'categories'}
				name='categories'
				id='category'
				onClick={(e) => getJokes(e.target.value)}
			>
				{categories.map((category, index) => {
					return (
						<option value={category} key={index}>
							{category}
						</option>
					);
				})}
			</select>
			<h1>Norris Jokes: {joke}</h1>
		</div>
	);
}
