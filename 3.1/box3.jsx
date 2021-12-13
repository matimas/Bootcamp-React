//Import the React and the React.Dom libraries
import React from 'react';
import Box4 from './box4';
import './box.css';

//Create a react component
const Box3 = () => {
	return (
		<div className='Box3'>
			<Box4 />
			<Box4 />
		</div>
	);
};

export default Box3;
