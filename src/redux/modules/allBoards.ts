import axios from 'axios'
import { Action, ActionCreator } from 'redux'
import { ThunkAction } from 'redux-thunk'

export const FETCH_ALL_BOARDS_BEGIN = 'FETCH_ALL_BOARDS_BEGIN'
export const FETCH_ALL_BOARDS_SUCCESS = 'FETCH_ALL_BOARDS_SUCCESS'
export const FETCH_ALL_BOARDS_ERROR = 'FETCH_ALL_BOARDS_ERROR'

export interface RootState {
	items: any[]
	isLoading: boolean
	error: null | {
		name: string
		message: string
	}
	json?: any
}

const initialState: RootState = {
	items: [],
	isLoading: false,
	error: null
}

export const fetchAllBoardsBegin: ActionCreator<Action> = () => ({
	type: FETCH_ALL_BOARDS_BEGIN,
})

export const fetchAllBoardsSuccess: ActionCreator<Action> = (json: any) => ({
	type: FETCH_ALL_BOARDS_SUCCESS,
	payload: { json }
})

export const fetchAllBoardsError: ActionCreator<Action> = (error: any) => ({
	type: FETCH_ALL_BOARDS_ERROR,
	payload: { error }
})

export const fetchAllBoards = (): ThunkAction<void, RootState, unknown, Action<any>> => async dispatch => {
	dispatch(fetchAllBoardsBegin())
	const { data, err } = await axios.get('http://localhost:3001/boards')
	err && dispatch(fetchAllBoardsError(err))
	return dispatch(fetchAllBoardsSuccess(data))
}

interface BoardAction<T> extends Action {
	payload: T
}

export default function reducer(
	state = initialState,
	action: BoardAction<RootState>
) {
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
