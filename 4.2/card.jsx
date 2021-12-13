import React from 'react';

const Card = ({ title, description, url }) => {
	return (
		<div className='card-container'>
			<div className='img'>
				<img src={url} alt={title} />
			</div>
			<h1>{title}</h1>
			<h2>{description}</h2>
		</div>
	);
};

export default Card;
