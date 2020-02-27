import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom'

import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'

import rootReducer from 'redux/reducers'

import { App } from './App';
import Board from 'routes/Board'


const store = createStore(
	rootReducer,
	composeWithDevTools(
		applyMiddleware(thunk)
	)
)

ReactDOM.render(
	<Provider store={store}>
		<Router>
			<Switch>
				<Route path="/" exact component={App} />
				<Route path="/board/:id" component={Board} />
			</Switch>
		</Router>
	</Provider>,
	document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
