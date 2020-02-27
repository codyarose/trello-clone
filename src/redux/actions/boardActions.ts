import axios from 'axios'
import { Action, ActionCreator } from 'redux'

export const FETCH_ALL_BOARDS_BEGIN = 'FETCH_ALL_BOARDS_BEGIN'
export const fetchAllBoardsBegin: ActionCreator<Action> = () => ({
	type: FETCH_ALL_BOARDS_BEGIN,
})

export const FETCH_ALL_BOARDS_SUCCESS = 'FETCH_ALL_BOARDS_SUCCESS'
export const fetchAllBoardsSuccess: ActionCreator<Action> = (json: any) => ({
	type: FETCH_ALL_BOARDS_SUCCESS,
	payload: { json }
})

export const FETCH_ALL_BOARDS_ERROR = 'FETCH_ALL_BOARDS_ERROR'
export const fetchAllBoardsError = (error: any) => ({
	type: FETCH_ALL_BOARDS_ERROR,
	payload: { error }
})

export function fetchAllBoards() {
	return async (dispatch: any) => {
		dispatch(fetchAllBoardsBegin())
		const { data } = await axios.get('http://localhost:3001/boards')
		return dispatch(fetchAllBoardsSuccess(data))
	}
}
