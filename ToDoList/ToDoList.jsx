import React, { useState, useEffect } from 'react';
import './App.css';
import ToDoForm from './ToDoForm';
import ToDo from './ToDo';

//Get the data from LS
const getLocalitem = () => {
	let items = localStorage.getItem('todos');
	if (items) {
		return JSON.parse(localStorage.getItem('todos'));
	} else {
		return [];
	}
};

function ToDoList() {
	const [todos, setToDos] = useState(getLocalitem());

	const addToDo = (todo) => {
		if (!todo.text || /^\s*$/.test(todo.text)) {
			return;
		}
		const newToDos = [todo, ...todos];
		setToDos(newToDos);
	};

	const updateToDo = (todoId, newValue) => {
		if (!newValue.text || /^\s*$/.test(newValue.text)) {
			return;
		}

		setToDos((prev) =>
			prev.map((item) => (item.id === todoId ? newValue : item)),
		);
	};

	const removeToDo = (id) => {
		const removeArr = [...todos].filter((todo) => {
			return todo.id !== id;
		});
		setToDos(removeArr);
	};

	const completeToDo = (id) => {
		let upDatedToDos = todos.map((todo) => {
			if (todo.id === id) {
				todo.isComplete = !todo.isComplete;
			}
			return todo;
		});
		setToDos(upDatedToDos);
	};
	//Store in the LS
	useEffect(() => {
		localStorage.setItem('todos', JSON.stringify(todos));
	}, [todos]);
	return (
		<div>
			<h1>My ToDo List?</h1>
			<ToDoForm onSubmit={addToDo} />
			<ToDo
				todos={todos}
				completeToDo={completeToDo}
				updateToDo={updateToDo}
				removeToDo={removeToDo}
			/>
		</div>
	);
}

export default ToDoList;
