import { FETCH_TEST } from 'redux/actions/types'

const initialState = {
	test: ''
}

export default function (state = initialState, { type, payload }: { type: any, payload: any }) {
	switch (type) {
		case FETCH_TEST:
			return {
				...state,
				test: payload
			}
		default:
			return state
	}
}
