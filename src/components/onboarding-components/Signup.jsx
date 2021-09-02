import React, {useRef, useState} from 'react'
import {useAuth} from '../utility-components/contexts/AuthContext'
import {Link, useHistory} from 'react-router-dom'
import logo from '../../images/logo.svg'

import {
	_ErrorMessage,
	_GlobalStyle,
	_InputField,
	_OnboardingSection,
	_Separator,
} from '../styles/_index'

const Signup = () => {
	const emailRef = useRef()
	const passwordRef = useRef()
	const {signup} = useAuth()
	const [error, setError] = useState('')
	const [loading, setLoading] = useState(false)
	const history = useHistory()

	async function handleSubmit(e) {
		e.preventDefault()

		const email = emailRef.current.value
		const password = passwordRef.current.value

		if (!/^.*(?=.{8,})(?=.*[a-zA-Z])(?=.*\d)(?=.*[!#$%&? "]).*$/.test(password)) {
			return setError(
				'Your password must be at least 8 characters long. Avoid common words or patterns.'
			)
		}

		try {
			setError('')
			setLoading(true)
			await signup(email, password)
			history.push('/')
		} catch {
			setError(`Your email is already registered with us.`)
		}
		setLoading(false)
	}

	return (
		<_OnboardingSection>
			<main>
				<header>
					<h1>Sign up</h1>
					<img className='logo' src={logo} />
				</header>

				<form onSubmit={handleSubmit}>
					<_InputField>
						<label htmlFor='email'>Email</label>
						<input type='email' ref={emailRef} />
					</_InputField>
					<_InputField>
						<label htmlFor='password'>Password</label>
						<input type='password' ref={passwordRef} />
						{error && <_ErrorMessage marginTRBL='20px 0 0 0'>{error}</_ErrorMessage>}
					</_InputField>
					<button disabled={loading} type='submit'>
						Sign up
					</button>
				</form>
				<_Separator />
				<footer>
					Already signed up? <Link to='/login'>Log In</Link>
				</footer>
			</main>
		</_OnboardingSection>
	)
}

export default Signup
