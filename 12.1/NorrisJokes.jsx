import './NorrisJokes.css';
import React, { Component } from 'react';
import NorrisAPI from './API/NorrisAPI';

class NorrisJokes extends Component {
	state = { joke: '', categories: [] };
	componentDidMount() {
		this.getCategories();
	}
	getCategories = async () => {
		const response = await NorrisAPI.get(
			'https://api.chucknorris.io/jokes/categories',
		);
		console.log(response);
		this.setState({ categories: response.data });
	};
	getJokes = async (e = '') => {
		const response = await NorrisAPI.get(
			`https://api.chucknorris.io/jokes/random?${e.target.value}`,
		);
		this.setState({ joke: response.data.value });
	};
	render() {
		const { joke, categories } = this.state;
		return (
			<div className={'jokes-container'}>
				<button onClick={this.getJokes}>new random Joke</button>
				<select
					className={'categoties'}
					name='categoties'
					id='categoty'
					onClick={this.getJokes}
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
}

export default NorrisJokes;
