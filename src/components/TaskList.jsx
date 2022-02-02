/* eslint-disable no-prototype-builtins */
import React, { useContext } from 'react';
import TaskItem from '../components/TaskItem';
import TaskContext from '../context/TaskContext';
import Card from './shared/Card';

function TaskList() {
	const { task } = useContext(TaskContext);

	// SORTS ID IN ASCENDING ORDER

	function compareValues(key, order = 'asc') {
		return function innerSort(a, b) {
			if (!a.hasOwnProperty(key) || !b.hasOwnProperty(key)) return 0;
			const comparison = a[key].localeCompare(b[key]);

			return order === 'desc' ? comparison * -1 : comparison;
		};
	}

	task.sort(compareValues('id'));
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
