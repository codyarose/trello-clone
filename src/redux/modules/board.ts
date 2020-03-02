import axios from 'axios'
import { Action, ActionCreator } from 'redux'
import { ThunkAction } from 'redux-thunk'

const FETCH_BOARD_BEGIN = 'FETCH_BOARD_BEGIN'
const FETCH_BOARD_SUCCESS = 'FETCH_BOARD_SUCCESS'
const FETCH_BOARD_ERROR = 'FETCH_BOARD_ERROR'

export interface RootState {
	data: {}
	isLoading: boolean
	error: null
	json?: any
}

const initialState: RootState = {
	data: {},
	isLoading: false,
	error: null
}

export const fetchBoardBegin: ActionCreator<Action> = () => ({
	type: FETCH_BOARD_BEGIN,
})

export const fetchBoardSuccess: ActionCreator<Action> = (json: any) => ({
	type: FETCH_BOARD_SUCCESS,
	payload: { json }
})

export const fetchBoardError: ActionCreator<Action> = (error: any) => ({
	type: FETCH_BOARD_ERROR,
	payload: { error }
})

export const fetchBoard = (id: string): ThunkAction<void, RootState, unknown, Action<any>> => async dispatch => {
	dispatch(fetchBoardBegin())
	const { data } = await axios.get(`http://localhost:3001/boards/${id}`)
	return dispatch(fetchBoardSuccess(data))
}

interface BoardAction<T> extends Action {
	payload: T
}

export default function reducer(
	state = initialState,
	action: BoardAction<RootState>
) {
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
