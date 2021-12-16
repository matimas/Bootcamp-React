import React from 'react';
import './ParentChild.css';
function Child({ callback, bColor, id }) {
	return (
		<div>
			<button
				className={`btn-layout ${bColor}`}
				id={id}
				onClick={(e) => callback(e)}
				value={bColor}
			></button>
		</div>
	);
}

export default Child;
