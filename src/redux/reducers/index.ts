import { combineReducers } from 'redux'
import boards from './boardsReducer'
import board from './boardReducer'

const rootReducer = combineReducers({
	boards,
	board
})

export default rootReducer
