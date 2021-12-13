import React from 'react';

const WrapperCard = (props) => {
	console.log(props.children);
	return (
		<div className='ui cards'>
			<div className='card'>
				<div className='content'>{props.children}</div>
				<div className='ui two buttons'>
					<a className='ui basic gold button' href={props.url}>
						Explore
					</a>
					<a className='ui basic gold button' href='https://www.facebook.com'>
						Share
					</a>
				</div>
			</div>
		</div>
	);
};

export default WrapperCard;
