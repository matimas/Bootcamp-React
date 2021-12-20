import React from 'react';

class Names extends React.Component {
	render() {
		return (
			<div>
				{this.props.names.map((name, index) => (
					<h1 key={index}>{name}</h1>
				))}
			</div>
		);
	}
}

export default Names;
