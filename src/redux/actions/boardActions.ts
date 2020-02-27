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

export const FETCH_BOARD_BEGIN = 'FETCH_BOARD_BEGIN'
export const fetchBoardBegin: ActionCreator<Action> = () => {
	console.log('begin')
	return {
		type: FETCH_BOARD_BEGIN,
	}
}

export const FETCH_BOARD_SUCCESS = 'FETCH_BOARD_SUCCESS'
export const fetchBoardSuccess: ActionCreator<Action> = (json: any) => ({
	type: FETCH_BOARD_SUCCESS,
	payload: { json }
})

export const FETCH_BOARD_ERROR = 'FETCH_BOARD_ERROR'
export const fetchBoardError = (error: any) => ({
	type: FETCH_BOARD_ERROR,
	payload: { error }
})

export function fetchBoard(id: string) {
	return async (dispatch: any) => {
		dispatch(fetchBoardBegin())
		const { data } = await axios.get(`http://localhost:3001/boards/${id}`)
		console.log('data', data)
		return dispatch(fetchBoardSuccess(data))
	}
}
