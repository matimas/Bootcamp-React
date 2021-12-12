//Import the React and the React.Dom libraries
import React from 'react';
import './helloworld.css';

//Create a react component
const HelloWorld = () => {
	document.title = 'AppleSeeds React App';
	return (
		<div>
			<button>click me</button>
		</div>
	);
};

export default HelloWorld;
