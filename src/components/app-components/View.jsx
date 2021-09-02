import React, {useState} from 'react'
import BtnAddTask from './BtnAddTask'
import TaskList from './TaskList'
import TaskEditor from './TaskEditor'
import ViewHead from './ViewHead'
import {_View} from '../styles/_index'

const View = ({tasks, onDeleteTask}) => {
	const [toggleTaskEditor, setToggleTaskEditor] =
		useState(false)
	return (
		<React.Fragment>
			<_View>
				<ViewHead />
				<TaskList
					tasks={tasks}
					onDeleteTask={onDeleteTask}
				/>

				{!toggleTaskEditor && (
					<BtnAddTask
						onToggle={() => {
							setToggleTaskEditor(!toggleTaskEditor)
						}}
					/>
				)}

				{toggleTaskEditor && (
					<TaskEditor
						onToggle={() => {
							setToggleTaskEditor(!toggleTaskEditor)
						}}
					/>
				)}
			</_View>
		</React.Fragment>
	)
}

export default View
