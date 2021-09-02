import React from 'react'
import ReactDOM from 'react-dom'
import './normalize.css'
import App from './components/app-components/App'
import Signup from './components/onboarding-components/Signup'
import Login from './components/onboarding-components/Login'
import PrivateRoute from './components/utility-components/routes/PrivateRoute'

import {AuthProvider} from './components/utility-components/contexts/AuthContext'
import {
	BrowserRouter as Router,
	Switch,
	Route,
} from 'react-router-dom'
import {_GlobalStyle} from './components/styles/_index'

ReactDOM.render(
	<React.StrictMode>
		<_GlobalStyle />
		<Router>
			<AuthProvider>
				<Switch>
					<PrivateRoute exact path='/' component={App} />
					<Route path='/signup' component={Signup} />
					<Route path='/login' component={Login} />
				</Switch>
			</AuthProvider>
		</Router>
	</React.StrictMode>,
	document.getElementById('root')
)
