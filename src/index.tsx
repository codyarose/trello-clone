import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom'

import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'

import { ThemeProvider, createGlobalStyle } from 'styled-components'
import 'typeface-poppins'

import rootReducer from 'redux/reducers'

import { App } from './App';
import Board from 'routes/Board'


const store = createStore(
	rootReducer,
	composeWithDevTools(
		applyMiddleware(thunk)
	)
)

const theme = {
	base: '#ffffff',
	paper: '#f4f4f4',
	font: '#000000'
}

const GlobalStyle = createGlobalStyle`
	body {
		font-family: Poppins, sans-serif;
	}
`

ReactDOM.render(
	<Provider store={store}>
		<ThemeProvider theme={theme}>
			<GlobalStyle />
			<Router>
				<Switch>
					<Route path="/" exact component={App} />
					<Route path="/board/:id" component={Board} />
				</Switch>
			</Router>
		</ThemeProvider>
	</Provider>,
	document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
