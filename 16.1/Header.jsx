import React from 'react';
import { Link } from 'react-router-dom';

import './ReactRouter.css';
const Header = () => {
	return (
		<div className='header'>
			<Link to='/'>Home</Link>
			<Link to='/Products'>Products</Link>
		</div>
	);
};

export default Header;
