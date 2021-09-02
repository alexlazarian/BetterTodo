import React, {useState, useEffect} from 'react'
import View from './View'
import {useAuth} from '../utility-components/contexts/AuthContext'
import {useHistory} from 'react-router-dom'
import {database} from '../../firebase'
import {
	_Button,
	__ButtonLogout,
	_ErrorMessage,
	_Nav,
	_GlobalStyle,
} from '../styles/_index'

const App = () => {
	const {currentUser, logout} = useAuth()
	const [error, setError] = useState('')
	const history = useHistory()

	async function handleLogout() {
		setError('')

		try {
			await logout()
			history.push('/login')
		} catch {
			setError('Failed to log out')
		}
	}

	const [tasks, setTasks] = useState([])

	useEffect(() => {
		database.todos
			.where('userId', '==', currentUser.uid)
			.orderBy('createdAt', 'asc')
			.onSnapshot(snapshot => {
				setTasks(
					snapshot.docs.map(doc => ({
						id: doc.id,
						inputValue: doc.data().todo,
					}))
				)
			})
	}, [currentUser])

	const onDeleteTask = id => {
		database.todos.doc(id).delete()
	}

	return (
		<React.Fragment>
			<_GlobalStyle />
			<_Nav>
				<main>
					<div>Welcome, {currentUser.email}</div>
					<__ButtonLogout onClick={handleLogout}>
						Log out
					</__ButtonLogout>
				</main>
			</_Nav>

			<View tasks={tasks} onDeleteTask={onDeleteTask} />

			{error && <_ErrorMessage>{error}</_ErrorMessage>}
		</React.Fragment>
	)
}

export default App
