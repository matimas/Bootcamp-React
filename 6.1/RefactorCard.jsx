import React from 'react';

class ReafactorCard extends React.Component {
	render() {
		const { url, title, description } = this.props;
		return (
			<div className='card-container'>
				<div className='img'>
					<img src={url} alt={title} />
				</div>
				<h1>{title}</h1>
				<h2>{description}</h2>
			</div>
		);
	}
}

export default ReafactorCard;
