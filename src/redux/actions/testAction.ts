import { FETCH_TEST } from './types'

export const fetchTest = () => dispatch => {
	fetch('...')
		.then(res => res.json())
		.then(test => dispatch({
			type: FETCH_TEST,
			payload: test
		}))
}
