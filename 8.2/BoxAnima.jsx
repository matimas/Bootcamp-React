import React, { Component } from 'react';
import './BoxAnima.css';
class BoxAnima extends Component {
	constructor(props) {
		super(props);
		this.state = {
			movedX: '-400px',
			show: true,
			opacity: '1',
		};
	}

	componentDidMount() {
		setTimeout(() => {
			let moved = parseInt(this.state.movedX);
			this.setState({
				movedX: moved * -2 + 'px',
			});
		}, 1000);
		setTimeout(() => {
			this.setState({
				opacity: '0',
			});
		}, 4000);
	}
	render() {
		const style = {
			transform: `translateX(${this.state.movedX})`,
			width: this.props.size.width,
			height: this.props.size.height,
			backgroundColor: this.props.bColor.backgroundColor,
			opacity: this.state.opacity,
		};
		return (
			<div>
				<div className={'fly-box'} style={style}></div>
			</div>
		);
	}
}

export default BoxAnima;
