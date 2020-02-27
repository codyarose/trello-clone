import { combineReducers } from 'redux'
import {
	FETCH_BOARDS_BEGIN,
	FETCH_BOARDS_SUCCESS,
	FETCH_BOARDS_ERROR,
} from '../actions/boardActions'

const initialState = {
	items: [],
	isLoading: false,
	error: null
}

const boards = (state = initialState, action: any) => {
	switch (action.type) {
		case FETCH_BOARDS_BEGIN:
			return {
				...state,
				isLoading: true,
				error: null
			}
		case FETCH_BOARDS_SUCCESS:
			return {
				...state,
				isLoading: false,
				items: action.payload.json
			}
		case FETCH_BOARDS_ERROR:
			return {
				...state,
				isLoading: false,
				error: action.payload.error,
				items: []
			}
		default:
			return state
	}
}

const rootReducer = combineReducers({
	boards
})

export default rootReducer
