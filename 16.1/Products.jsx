import React, { Component } from 'react';
import './ReactRouter.css';
import data from './data';
import { Link } from 'react-router-dom';

class Products extends Component {
	constructor(props) {
		super(props);

		this.state = {
			store: [],
		};
	}
	componentDidMount = () => {
		this.setState({
			store: data,
		});
	};

	generateProducts = () => {
		if (this.state.store) {
			return this.state.store.map((prod) => {
				return (
					<Link to={`/products/${prod.id}`} key={prod.id}>
						{prod.title}
					</Link>
				);
			});
		}
	};

	render() {
		return <div className='products'>{this.generateProducts()}</div>;
	}
}

export default Products;
