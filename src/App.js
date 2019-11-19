import React from 'react'
import logo from './logo.svg'
import './App.css'

import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
import MoviesList from './MoviesList'
import MovieDetails from './MovieDetails'

const App = () => {
	return (
		<Router>
			<div className='App'>
				<header className='App-header'>
					<Link to='/'>
						<img src={logo} className='App-logo' alt='logo' />
					</Link>
				</header>
				<Switch>
					<Route path='/' exact component={MoviesList} />
					<Route path='/movie/:id' component={MovieDetails} />
				</Switch>
			</div>
		</Router>
	)
}

export default App
