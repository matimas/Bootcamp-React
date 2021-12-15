import './Spinner.css';
import React, { Component } from 'react';
class Spinner extends Component {
	constructor(props) {
		super(props);
		this.state = {
			colors: [
				'green',
				'red',
				'black',
				'yellow',
				'perpule',
				'brown',
				'aqua',
				'blue',
				'white',
			],
			color: 'red',
			radius: '50%',
			counter: 1,
			flag: true,
		};
	}
	componentDidMount() {
		setInterval(() => {
			let index = Math.floor(Math.random() * this.state.colors.length);
			const picColor = this.state.colors[index];
			if (this.state.counter % 2 === 1) {
				this.setState((prevState) => {
					return {
						color: picColor,
						radius: '0',
						counter: (prevState.counter += 1),
					};
				});
			} else {
				this.setState((prevState) => {
					return {
						color: picColor,
						counter: (prevState.counter += 1),
						radius: '50%',
					};
				});
			}
			if (this.state.counter === 10) {
				this.setState((prevState) => {
					return {
						flag: false,
					};
				});
			}
		}, 500);
	}
	render() {
		const style = {
			backgroundColor: this.state.color,
			borderRadius: this.state.radius,
		};
		return (
			<div>
				{this.state.flag && (
					<div
						className={`change-color ${this.state.color}`}
						style={style}
					></div>
				)}
			</div>
		);
	}
}

export default Spinner;
