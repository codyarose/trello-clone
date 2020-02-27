import {
	FETCH_ALL_BOARDS_BEGIN,
	FETCH_ALL_BOARDS_SUCCESS,
	FETCH_ALL_BOARDS_ERROR,
} from '../actions/boardActions'

const initialState = {
	items: [],
	isLoading: false,
	error: null
}

export default function boards(state = initialState, action: any) {
	switch (action.type) {
		case FETCH_ALL_BOARDS_BEGIN:
			return {
				...state,
				isLoading: true,
				error: null
			}
		case FETCH_ALL_BOARDS_SUCCESS:
			return {
				...state,
				isLoading: false,
				items: action.payload.json
			}
		case FETCH_ALL_BOARDS_ERROR:
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
