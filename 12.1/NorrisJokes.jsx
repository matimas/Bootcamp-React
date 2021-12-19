import './NorrisJokes.css';
import React, { Component } from 'react';
import axios from 'axios';

class NorrisJokes extends Component {
	state = { joke: '', categories: [] };
	componentDidMount() {
		this.getCategories();
	}
	getCategories = async () => {
		const response = await axios.get(
			'https://api.chucknorris.io/jokes/categories',
		);
		this.setState({ categories: response.data });
		console.log(this.state.categories);
	};
	getJokes = async (e = '') => {
		const response = await axios.get(
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
