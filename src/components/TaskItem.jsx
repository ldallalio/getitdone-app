/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useContext } from 'react';
import { FaTimes, FaMapMarkerAlt } from 'react-icons/fa';
import '../index.css';
import '../input.css';
import TaskContext from '../context/TaskContext';

function TaskItem({ task, item }) {
	const { deleteTask } = useContext(TaskContext);
	return (
		<div className='task-desc'>
			<h2 className='task-id'>
				<FaMapMarkerAlt color='white' />
			</h2>
			<p>{task.desc}</p>
			<button
				onClick={() => {
					{
						deleteTask(task.id);
					}
				}}>
				<FaTimes color='purple' />
			</button>
		</div>
	);
}

export default TaskItem;
