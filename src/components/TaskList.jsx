/* eslint-disable no-prototype-builtins */
import React, { useContext } from 'react';
import TaskItem from '../components/TaskItem';
import TaskContext from '../context/TaskContext';
import Card from './shared/Card';

function TaskList() {
	const { task } = useContext(TaskContext);

	if (task < 1) {
		return (
			<Card>
				<h1 className='messageText'>No Availabe Tasks</h1>
			</Card>
		);
	} else {
		return (
			<Card>
				{task.map((task) => (
					<TaskItem key={task.id} task={task} />
				))}
			</Card>
		);
	}
}

export default TaskList;
