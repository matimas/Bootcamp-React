import React from 'react';

const Button = ({ text, bold }) => {
	return (
		<>
			<button style={{ fontWeight: bold }}>{text}</button>
		</>
	);
};

export default Button;
