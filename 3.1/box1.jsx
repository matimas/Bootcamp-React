//Import the React and the React.Dom libraries
import React from 'react';
import Box2 from './box2';
import './box.css';

//Create a react component
const Box1 = () => {
	return (
		<div className='Box1'>
			<Box2 />
		</div>
	);
};

export default Box1;
