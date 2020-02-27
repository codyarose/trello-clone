import {
	FETCH_BOARD_BEGIN,
	FETCH_BOARD_SUCCESS,
	FETCH_BOARD_ERROR,
} from '../actions/boardActions'

const initialBoardState = {
	data: {},
	isLoading: false,
	error: null
}

export default function board(state = initialBoardState, action: any) {
	switch (action.type) {
		case FETCH_BOARD_BEGIN:
			return {
				...state,
				isLoading: true,
				error: null
			}
		case FETCH_BOARD_SUCCESS:
			return {
				...state,
				isLoading: false,
				data: action.payload.json
			}
		case FETCH_BOARD_ERROR:
			return {
				...state,
				isLoading: false,
				error: action.payload.error,
				data: {}
			}
		default:
			return state
	}
}
