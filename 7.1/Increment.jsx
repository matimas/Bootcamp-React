import React, { Component } from 'react';
import Button from './Button';

class Increment extends Component {
	constructor(props) {
		super(props);
		this.state = {
			counter: 0,
		};
	}
	increment = () => {
		console.log(this);
		this.setState({
			counter: ++this.state.counter,
		});
	};
	render() {
		return (
			<div style={{ display: 'flex' }}>
				<Button increment={this.increment} />
				<h1 style={{ fontSize: '100px' }}>{this.state.counter}</h1>
			</div>
		);
	}
}

export default Increment;
