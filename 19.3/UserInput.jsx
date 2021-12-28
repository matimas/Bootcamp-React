import React, { useEffect, useRef } from 'react';

export default function UserInput({ userInput, setUserInput, setTerm }) {
	const inputRef = useRef();
	useEffect(() => {
		inputRef.current.focus();
	});
	return (
		<div>
			<form>
				<div>
					<h1>Algolia Search</h1>
				</div>
				<input
					ref={inputRef}
					value={userInput}
					type='text'
					onChange={(e) => setUserInput(e.target.value)}
				/>
			</form>
		</div>
	);
}
