import React, { Component } from 'react';
import './Copy.css';
class Copy extends Component {
	constructor(props) {
		super(props);
		this.state = { text: '' };
		this.textareaRef = React.createRef();
	}
	ChangeHandler = (e) => {
		console.log(e.target.value);
		this.setState({ text: e.target.value });
	};
	clickHandler = () => {
		const textTocopy = this.textareaRef.current.value;
		navigator.clipboard.writeText(textTocopy);
	};
	render() {
		return (
			<div className='container'>
				<h1>What Ts The Meaning Of Life</h1>
				<textarea
					ref={this.textareaRef}
					value={this.state.text}
					onChange={this.ChangeHandler}
				></textarea>
				<button onClick={this.clickHandler}>copy</button>
			</div>
		);
	}
}

export default Copy;
