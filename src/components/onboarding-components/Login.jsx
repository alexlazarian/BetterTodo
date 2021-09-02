import React, {useRef, useState} from 'react'
import {useAuth} from '../utility-components/contexts/AuthContext'
import {Link, useHistory} from 'react-router-dom'
import logo from '../../images/logo.svg'

import {
	_ErrorMessage,
	_InputField,
	_OnboardingSection,
	_Separator,
} from '../styles/_index'

const Login = () => {
	const emailRef = useRef()
	const passwordRef = useRef()
	const {login} = useAuth()
	const [error, setError] = useState('')
	const [loading, setLoading] = useState(false)
	const history = useHistory()

	async function handleSubmit(e) {
		e.preventDefault()

		try {
			setError('')
			setLoading(true)
			await login(
				emailRef.current.value,
				passwordRef.current.value
			)
			history.push('/')
		} catch {
			setError('Wrong email or password.')
		}
		setLoading(false)
	}

	return (
		<_OnboardingSection>
			<main>
				<header>
					<h1>Log in</h1>
					<img src={logo} />
				</header>

				<form onSubmit={handleSubmit}>
					{error && (
						<_ErrorMessage marginTRBL='0 0 20px 0'>
							<li>{error}</li>
						</_ErrorMessage>
					)}

					<_InputField>
						<label htmlFor='email'>Email</label>
						<input type='email' ref={emailRef} />
					</_InputField>
					<_InputField>
						<label htmlFor='password'>Password</label>
						<input type='password' ref={passwordRef} />
					</_InputField>
					<button disabled={loading} type='submit'>
						Log in
					</button>
				</form>
				<_Separator />
				<footer>
					Don't have an account?{' '}
					<Link to='/signup'>Sign Up</Link>
				</footer>
			</main>
		</_OnboardingSection>
	)
}

export default Login
