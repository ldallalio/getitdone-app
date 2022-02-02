import { useState, useContext } from 'react';
import Card from './shared/Card';
import TaskContext from '../context/TaskContext';

import React from 'react';

function NewForm() {
	const [desc, setDesc] = useState('');
	const { addTask, task } = useContext(TaskContext);

	const handleTextChange = (event) => {
		setDesc(event.target.value);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		const newTask = {
			id: `${task.length + 1}`,
			// id: parseInt(`${task.length + 1}`),
			desc,
		};

		addTask(newTask);
		setDesc('');
	};

	return (
		<Card>
			<form onSubmit={handleSubmit} className='new-form'>
				<h2 className='form-title'>Create a New Task</h2>
				<input type='text' onChange={handleTextChange} value={desc} />
				<button className='form-btn' type='submit'>
					Add Task
				</button>
			</form>
		</Card>
	);
}

export default NewForm;
