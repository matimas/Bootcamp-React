import React from 'react';
import data from './data';
import { useHistory } from 'react-router-dom';
import './ReactRouter.css';

const ProductItem = (props) => {
	const prodId = +props.match.params.id;
	const productItem = data.find((item) => {
		return item.id === prodId;
	});
	const history = useHistory();
	return (
		<div className='product-item'>
			<fieldset>
				<legend>{productItem.title}</legend>
				<div>
					<img src={productItem.imageUrl} alt={productItem.title} />
				</div>
				<div>Price :{productItem.price}</div>
				<button onClick={() => history.goBack()}>back</button>
			</fieldset>
		</div>
	);
};

export default ProductItem;
