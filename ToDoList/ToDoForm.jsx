import React, { useState, useEffect, useRef } from 'react';
import './App.css';

function ToDoForm(props) {
	const [input, setInput] = useState(props.edit ? props.edit.value : '');

	const inputRef = useRef(null);

	useEffect(() => {
		inputRef.current.focus();
	});

	const handleChange = (e) => {
		setInput(e.target.value);
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		props.onSubmit({
			id: Math.floor(Math.random() * 10000),
			text: input,
		});
		setInput('');
	};

	return (
		<div>
			<form className='todo-form' onSubmit={handleSubmit}>
				{props.edit ? (
					<>
						<input
							ref={inputRef}
							type='text'
							placeholder='Update a todo'
							value={input}
							name='text'
							className='todo-input edit'
							onChange={handleChange}
						/>
						<button className='todo-button edit'>Update</button>
					</>
				) : (
					<>
						<input
							ref={inputRef}
							type='text'
							placeholder='Add a todo'
							value={input}
							name='text'
							className='todo-input'
							onChange={handleChange}
						/>
						<button className='todo-button'>Add todo</button>
					</>
				)}
			</form>
		</div>
	);
}

export default ToDoForm;
