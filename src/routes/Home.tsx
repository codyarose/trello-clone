import React, { FC, useEffect } from 'react'
import { useDispatch } from 'react-redux'

import { useSelector } from 'utils/useReduxSelector'
import { fetchAllBoards } from 'redux/modules/allBoards'
import { Track } from 'components/common/Track'
import { BoardList } from 'components/BoardList'

export const Home: FC = () => {
	const dispatch = useDispatch()

	const data = useSelector(({ allBoards }) => allBoards)

	const { error, isLoading, items } = data

	useEffect(() => {
		dispatch(fetchAllBoards())
	}, [dispatch])

	return (
		<>
			{error && <div>Error: {error.message}</div>}
			{isLoading && <div>Loading...</div>}
			{items &&
				<Track type="boards">
					<BoardList items={items} />
				</Track>
			}
		</>
	)
}
