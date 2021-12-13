//Import the React and the React.Dom libraries
import React from 'react';
import Box3 from './box3';
import './box.css';

//Create a react component
const Box2 = () => {
	return (
		<div className='Box2'>
			<Box3 />
		</div>
	);
};

export default Box2;
