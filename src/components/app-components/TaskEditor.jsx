import React, {useState, useEffect, useRef} from 'react'
import {database} from '../../firebase'
import {
	__ButtonPrimary,
	__ButtonCancel,
	_TaskEditor,
} from '../styles/_index'
import {useAuth} from '../utility-components/contexts/AuthContext'

const TaskEditor = ({onToggle}) => {
	const {currentUser} = useAuth()

	// Uses hook 'useRef' and 'useEffect' to auto focus on the field every time input changes
	const inputRef = useRef(null)
	useEffect(() => {
		inputRef.current.focus()
	}, [])

	const [inputValue, setInputValue] = useState('')
	const onSubmit = e => {
		e.preventDefault()

		database.todos.add({
			todo: inputValue,
			userId: currentUser.uid,
			createdAt: database.getCurrentTimestamp(),
		})
		setInputValue('')
	}

	const storedPlaceholders = Array(
		'Grab a dinner with Katy near 2pm',
		'Touch base with Ali at noon',
		'Buy plance tickets to Sinea Italy',
		'Book a hotel at San Marino, CA near the Beach',
		'2:00 Meet with Jason ☕'
	)
	const message =
		storedPlaceholders[
			Math.floor(Math.random() * storedPlaceholders.length)
		]

	return (
		<_TaskEditor onSubmit={onSubmit}>
			<input
				placeholder={message}
				type='text'
				onChange={e => setInputValue(e.target.value)}
				value={inputValue}
				ref={inputRef}
			/>
			<div>
				<__ButtonPrimary
					disabled={/^\s*$/.test(inputValue)}
				>
					Add
				</__ButtonPrimary>
				<__ButtonCancel onClick={onToggle}>
					Cancel
				</__ButtonCancel>
			</div>
		</_TaskEditor>
	)
}

export default TaskEditor
