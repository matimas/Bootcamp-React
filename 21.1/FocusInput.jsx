import React, { useState, useEffect, useRef } from 'react';
import './Focus.css';
export default function FocusInput() {
	const [btnState, setbtnState] = useState(false);
	const inputRef = useRef();
	useEffect(() => {
		if (btnState) {
			inputRef.current.style.display = 'block';
			inputRef.current.focus();
		} else {
			inputRef.current.style.display = 'none';
		}
	}, [btnState]);

	return (
		<div className='container'>
			<input ref={inputRef} type='text' />
			<button onClick={(e) => setbtnState(!btnState)}>
				{btnState ? 'Save' : 'Edit'}
			</button>
		</div>
	);
}
