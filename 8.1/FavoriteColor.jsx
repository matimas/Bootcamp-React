import React, { Component } from 'react';

class FavoriteColor extends Component {
	constructor(props) {
		super(props);

		this.state = {
			favoriteColor: 'black',
		};
	}
	componentDidMount() {
		console.log('im here in didmount');
		setTimeout(() => {
			this.setState((prevState) => {
				return { favoriteColor: 'green' };
			});
		}, 1000);
	}
	componentDidUpdate() {
		const empty = document.getElementById(this.state.favoriteColor);
		console.log('im here in update');
		empty.textContent = `The updated favorite color is ${this.state.favoriteColor}`;
	}
	render() {
		return (
			<div>
				<h1>{this.state.favoriteColor}</h1>
				<div id={this.state.favoriteColor}></div>
			</div>
		);
	}
}

export default FavoriteColor;
