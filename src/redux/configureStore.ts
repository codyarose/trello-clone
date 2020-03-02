import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

import board from './modules/board'
import allBoards from './modules/allBoards'
import user from './modules/user'

const reducer = combineReducers({
	user,
	allBoards,
	board
})

const store = createStore(
	reducer,
	composeWithDevTools(
		applyMiddleware(thunk)
	)
)

export type RootState = ReturnType<typeof reducer>

export default store
