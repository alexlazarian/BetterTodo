import React from 'react'
import {_TaskList} from '../styles/_index'

const TaskList = ({tasks, onDeleteTask}) => {
	return (
		<_TaskList>
			{tasks.map((task, index) => (
				<li key={index}>
					<div onClick={() => onDeleteTask(task.id)}></div>
					<main>{task.inputValue}</main>
				</li>
			))}
		</_TaskList>
	)
}

export default TaskList
