import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import { Theme } from 'theme'
import { Home } from 'routes/Home'
import Board from 'routes/Board'
import { Navbar } from 'components/Navbar'

export const App = () => {
	return (
		<Theme mode="light">
			<Router basename="trello-clone">
				<Navbar />
				<Switch>
					<Route path="/" exact component={Home} />
					<Route path="/board/:id" component={Board} />
				</Switch>
			</Router>
		</Theme>
	)
}
