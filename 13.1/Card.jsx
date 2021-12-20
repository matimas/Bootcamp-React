import React from 'react';

class Card extends React.Component {
	generateHumansCard = () => {
		return this.props.humans.map((human) => {
			return (
				<div key={human.birthday}>
					<h2>Name: {human.name}</h2>
					<h2>Birthday: {human.birthday}</h2>
					<h2>Favorite Meat:</h2>
					<ul>
						{human.favoriteFoods.meats.map((food, index) => {
							return <li key={index}>{food}</li>;
						})}
					</ul>
					<h2>Favorite Fish:</h2>
					<ul>
						{human.favoriteFoods.fish.map((food, index) => {
							return <li key={index}>{food}</li>;
						})}
					</ul>
				</div>
			);
		});
	};
	render() {
		return <div className='container'>{this.generateHumansCard()}</div>;
	}
}

export default Card;
