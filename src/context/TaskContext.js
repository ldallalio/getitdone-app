/* eslint-disable react/prop-types */
import React, { createContext, useEffect, useState } from 'react';

const TaskContext = createContext();

export const TaskProvider = ({ children }) => {
	//Manually Set State For Testing
	// const testTask = { id: 1, desc: 'test' };
	// localStorage.setItem('task', JSON.stringify(testTask));

	const [task, setTask] = useState([]);
	const taskArr = [];

	const getTask = () => {
		const objTask = JSON.parse(localStorage.getItem('task'));
		const arrTask = [].concat(objTask);
		taskArr.push(arrTask);
		setTask(...taskArr);
	};

	useEffect(() => {
		getTask();
	}, []);
	//Add Task To Local Storage
	const addTask = (newTask) => {
		const objTask = JSON.parse(localStorage.getItem('task'));
		const arrTask = [].concat(objTask);
		arrTask.push(newTask);
		localStorage.setItem('task', JSON.stringify(arrTask));
		setTask(...taskArr);
		getTask();
	};
	//Delete Task
	const deleteTask = (id) => {
		const objTask = JSON.parse(localStorage.getItem('task'));
		const arrTask = [].concat(objTask);
		const newTask = arrTask.filter((task) => task.id !== id);
		localStorage.setItem('task', JSON.stringify(newTask));
		setTask(...taskArr);
		getTask();
	};
	//Update Task
	const updateTask = (id, newTask) => {
		const objTask = JSON.parse(localStorage.getItem('task'));
		const arrTask = [].concat(objTask);
		const index = arrTask.findIndex((task) => task.id === id);
		arrTask[index] = newTask;
		localStorage.setItem('task', JSON.stringify(arrTask));
		setTask(...taskArr);
		getTask();
	};
	return (
		<TaskContext.Provider
			value={{
				//Add the propes we are using
				task,
				addTask,
				setTask,
				deleteTask,
				updateTask,
			}}>
			{children}
		</TaskContext.Provider>
	);
};

export default TaskContext;
