import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Provider } from 'react-redux'

import { Theme } from 'theme'
import store from 'redux/configureStore'
import { Home } from 'routes/Home'
import Board from 'routes/Board'

export const App = () => {
	return (
		<Provider store={store}>
			<Theme mode="light">
				<Router basename="trello-clone">
					<Switch>
						<Route path="/" exact component={Home} />
						<Route path="/board/:id" component={Board} />
					</Switch>
				</Router>
			</Theme>
		</Provider>
	)
}
