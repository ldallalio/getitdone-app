/* eslint-disable react/prop-types */
import React, { createContext, useEffect, useState } from 'react';

const TaskContext = createContext();

export const TaskProvider = ({ children }) => {
	//Manually Set State For Testing
	// const testTask = { id: 1, desc: 'test' };
	// localStorage.setItem('task', JSON.stringify(testTask));
	localStorage.setItem('task', null);

	const [task, setTask] = useState([]);
	const taskArr = [];

	useEffect(() => {
		getTask();
	}, []);

	//Get Task From Local Storage
	const getTask = () => {
		const objTask = JSON.parse(localStorage.getItem('task'));
		const arrTaskWithNull = [].concat(objTask);
		const arrTask = arrTaskWithNull.filter((e) => e != null);
		console.log(arrTask);
		setTask(arrTask);
	};

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
