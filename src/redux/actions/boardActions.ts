import axios from 'axios'
import { Action, ActionCreator } from 'redux'

export const FETCH_BOARDS_BEGIN = 'FETCH_BOARDS_BEGIN'
export const fetchBoardsBegin: ActionCreator<Action> = () => ({
	type: FETCH_BOARDS_BEGIN,
})

export const FETCH_BOARDS_SUCCESS = 'FETCH_BOARDS_SUCCESS'
export const fetchBoardsSuccess: ActionCreator<Action> = (json: any) => ({
	type: FETCH_BOARDS_SUCCESS,
	payload: { json }
})

export const FETCH_BOARDS_ERROR = 'FETCH_BOARDS_ERROR'
export const fetchBoardsError = (error: any) => ({
	type: FETCH_BOARDS_ERROR,
	payload: { error }
})

export function fetchBoards() {
	return async (dispatch: any) => {
		dispatch(fetchBoardsBegin())
		const { data } = await axios.get('http://localhost:3001/boards')
		return dispatch(fetchBoardsSuccess(data))
	}
}

export const ADD_BOARD = 'ADD_BOARD'
export function addBoard({ id, name }: any) {
	return (dispatch: any) => {
		return axios.post('http://localhost:3001/boards', { id, name })
			.then(({ data }) => dispatch(addBoardSuccess(data)))
			.catch(error => console.error(error))
	}
}

export const addBoardSuccess = (data: any) => ({
	type: ADD_BOARD,
	payload: {
		id: data.id,
		name: data.name
	}
})
