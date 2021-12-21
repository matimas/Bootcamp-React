import React from 'react';
import './ReactRouter.css';
import { BrowserRouter, Route } from 'react-router-dom';

import Header from './Header';
import HomePage from './HomePage';
import Products from './Products';
import ProductItem from './ProductItem';

const ReactRouter = () => {
	return (
		<div className='r-r-container'>
			<BrowserRouter>
				<Header />
				<div>
					<Route exact path='/' component={HomePage} />
					<Route exact path='/products' component={Products} />
					<Route exact path='/products/:id' component={ProductItem} />
				</div>
			</BrowserRouter>
		</div>
	);
};

export default ReactRouter;
