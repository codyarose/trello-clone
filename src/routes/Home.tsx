import React, { FC, useEffect } from 'react'
import { useDispatch } from 'react-redux'

import { useSelector } from 'utils/useReduxSelector'
import { fetchAllBoards } from 'redux/modules/allBoards'
import { BoardList } from 'components/BoardList'

interface Props {

}

export const Home: FC<Props> = () => {
	const dispatch = useDispatch()

	const data = useSelector(({ allBoards }) => allBoards)

	useEffect(() => {
		dispatch(fetchAllBoards())
	}, [dispatch])

	return (
		<BoardList {...data} />
	)
}
