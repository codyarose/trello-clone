import axios from 'axios'
import { Action, ActionCreator } from 'redux'
import { ThunkAction } from 'redux-thunk'

export const FETCH_USER_BEGIN = 'FETCH_USER_BEGIN'
export const FETCH_USER_SUCCESS = 'FETCH_USER_SUCCESS'
export const FETCH_USER_ERROR = 'FETCH_USER_ERROR'

export interface RootState {
	data: {}
	isLoading: boolean
	error: null | {
		name: string
		message: string
	}
	json?: any
}

const initialState: RootState = {
	data: {},
	isLoading: false,
	error: null
}

export const fetchUserBegin: ActionCreator<Action> = () => ({
	type: FETCH_USER_BEGIN,
})

export const fetchUserSuccess: ActionCreator<Action> = (json: any) => ({
	type: FETCH_USER_SUCCESS,
	payload: { json }
})

export const fetchUserError: ActionCreator<Action> = (error: any) => ({
	type: FETCH_USER_ERROR,
	payload: { error }
})

export const fetchUser = (): ThunkAction<void, RootState, unknown, Action<any>> => async dispatch => {
	dispatch(fetchUserBegin())
	const { data, err } = await axios.get('http://localhost:3001/user')
	err && dispatch(fetchUserError(err))
	return dispatch(fetchUserSuccess(data))
}

interface BoardAction<T> extends Action {
	payload: T
}

export default function reducer(
	state = initialState,
	action: BoardAction<RootState>
) {
	switch (action.type) {
		case FETCH_USER_BEGIN:
			return {
				...state,
				isLoading: true,
				error: null
			}
		case FETCH_USER_SUCCESS:
			return {
				...state,
				isLoading: false,
				data: action.payload.json
			}
		case FETCH_USER_ERROR:
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
