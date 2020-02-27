import { combineReducers } from 'redux'
import {
	FETCH_BOARDS_BEGIN,
	FETCH_BOARDS_SUCCESS,
	FETCH_BOARDS_ERROR,
	ADD_BOARD
} from '../actions/boardActions'

const initialState = {
	items: [],
	isFetching: false,
	error: null
}

const boards = (state = initialState, action: any) => {
	switch (action.type) {
		case FETCH_BOARDS_BEGIN:
			return {
				...state,
				isFetching: true,
				error: null
			}
		case FETCH_BOARDS_SUCCESS:
			return {
				...state,
				isFetching: false,
				items: action.payload.json
			}
		case FETCH_BOARDS_ERROR:
			return {
				...state,
				isFetching: false,
				error: action.payload.error,
				items: []
			}
		case ADD_BOARD:
			return {
				...state,
				items: action.payload.data
			}
		default:
			return state
	}
}

const rootReducer = combineReducers({
	boards
})

export default rootReducer
