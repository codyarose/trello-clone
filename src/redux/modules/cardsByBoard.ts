import axios from 'axios'
import { Action, ActionCreator } from 'redux'
import { ThunkAction } from 'redux-thunk'

export const FETCH_CARDS_BEGIN = 'FETCH_CARDS_BEGIN'
export const FETCH_CARDS_SUCCESS = 'FETCH_CARDS_SUCCESS'
export const FETCH_CARDS_ERROR = 'FETCH_CARDS_ERROR'

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

export const fetchCardsBegin: ActionCreator<Action> = () => ({
	type: FETCH_CARDS_BEGIN,
})

export const fetchCardsSuccess: ActionCreator<Action> = (json: any) => ({
	type: FETCH_CARDS_SUCCESS,
	payload: { json }
})

export const fetchCardsError: ActionCreator<Action> = (error: any) => ({
	type: FETCH_CARDS_ERROR,
	payload: { error }
})

export const fetchCardsByBoard = (id: string): ThunkAction<void, RootState, unknown, Action<any>> => async dispatch => {
	dispatch(fetchCardsBegin())
	const { data, err } = await axios.get(`http://localhost:3001/cards?idBoard=${id}`)
	err && dispatch(fetchCardsError(err))
	return dispatch(fetchCardsSuccess(data))
}

interface BoardAction<T> extends Action {
	payload: T
}

export default function reducer(
	state = initialState,
	action: BoardAction<RootState>
) {
	switch (action.type) {
		case FETCH_CARDS_BEGIN:
			return {
				...state,
				isLoading: true,
				error: null
			}
		case FETCH_CARDS_SUCCESS:
			return {
				...state,
				isLoading: false,
				items: action.payload.json
			}
		case FETCH_CARDS_ERROR:
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
