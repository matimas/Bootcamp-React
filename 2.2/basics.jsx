//Import the React and the React.Dom libraries
import React from 'react';
// import './basics.css';

//Create a react component
const Basics = () => {
	const data = ['hello', 'world'];
	const number1 = 5;
	const number2 = 6;
	const string = 'I love React!';

	const getArayData = (array) => {
		let output = '';
		array.forEach((element) => {
			output += element + ' ';
		});
		return output;
	};
	const add = (a, b) => {
		return a + b;
	};
	const stringLength = (a) => {
		return a.length;
	};

	return (
		<div>
			<div>
				<h1>{getArayData(data)}</h1>
			</div>
			<div>
				<h1>{add(number1, number2)}</h1>
			</div>
			<div>
				<h1>The string’s length is :{stringLength(string)}</h1>
			</div>
		</div>
	);
};

export default Basics;
