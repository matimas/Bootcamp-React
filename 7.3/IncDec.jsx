import React, { Component } from 'react';
import './IncDec.css';
class IncDec extends Component {
	constructor() {
		super();
		this.state = { counter: 0 };
	}
	increment = () => {
		this.setState((prevState) => {
			return { counter: prevState.counter + 1 };
		});
	};
	decrement = () => {
		this.setState((prevState) => {
			return { counter: prevState.counter - 1 };
		});
	};
	getCurrenClass = () => {
		if (this.state.counter > 0) return 'green';
		if (this.state.counter < 0) return 'red';
		return 'black';
	};
	render() {
		return (
			<div>
				<button onClick={this.state.counter < 10 && this.increment}>+</button>
				<div className={this.getCurrenClass()}>{this.state.counter}</div>
				<button onClick={this.state.counter > -10 && this.decrement}>-</button>
			</div>
		);
	}
}

export default IncDec;
