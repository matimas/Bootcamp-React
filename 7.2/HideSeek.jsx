import React, { Component } from 'react';
import './HideSeek.css';
class HideSeek extends Component {
	constructor(props) {
		super(props);
		this.state = { hidden: false };
	}
	toggle = () => {
		this.setState({
			hidden: !this.state.hidden,
		});
	};
	render() {
		return (
			<div>
				<button onClick={this.toggle}>show/hide</button>
				<div
					className={
						('box1' && this.state.hidden && 'hidden') || ('show' && 'box1')
					}
				></div>
			</div>
		);
	}
}

export default HideSeek;
