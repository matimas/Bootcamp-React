import React, { useState } from 'react';
import './SimpleTodo.css';
const arrOfObj = [
	{ name: 'CSS', completed: true },
	{ name: 'JavaScript', completed: true },
	{ name: 'Learn React', completed: false },
	{ name: 'Learn mongoDB', completed: false },
	{ name: 'Learn Node JS', completed: false },
];

export default function SimpleTodo() {
	const RenderTask = () => {
		const [tasks, setTask] = useState(arrOfObj);

		const changeCompleted = (task) => {
			const tempArr = tasks.map((tk) => {
				if (task.name === tk.name) {
					tk.completed = !tk.completed;
				}
				return tk;
			});
			setTask(tempArr);
		};

		return (
			<div>
				{tasks.map((task, index) => {
					return (
						<div
							className={!task.completed ? 'line-through' : ''}
							onClick={() => changeCompleted(task)}
							key={index}
						>
							{task.name}
							{task.completed ? (
								<i className='fas fa-times'></i>
							) : (
								<i className='fas fa-check'></i>
							)}
						</div>
					);
				})}
			</div>
		);
	};

	return (
		<div className='container'>
			<RenderTask />
		</div>
	);
}
