import React, { Component } from 'react';
import Box from './Box';
const data = [
	{
		isChecked: false,
		text: 'I read the term of the app',
		id: 1,
	},
	{
		isChecked: false,
		text: 'I accept the term of the app',
		id: 2,
	},
	{
		isChecked: true,
		text: 'I want to get the weekly news letter',
		id: 3,
	},
	{
		isChecked: true,
		text: 'I want to go get sales and offers',
		id: 4,
	},
];
class CheckBox extends Component {
	constructor(props) {
		super(props);

		this.state = {
			isChecked: false,
		};
	}
	changeStatus = (e) => {
		console.log(e);
		this.setState({ isChecked: e.target.value });
	};

	render() {
		return (
			<form>
				{data.map((checkbox) => {
					return (
						<Box
							key={checkbox.id}
							text={checkbox.text}
							checked={checkbox.isChecked}
						/>
					);
				})}
			</form>
		);
	}
}

export default CheckBox;
