import React, { FC, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'

import { useSelector } from 'utils/useReduxSelector'
import { fetchBoard } from 'redux/modules/board'
import { Track } from 'components/common/Track'
import { CardList } from 'components/CardList'

interface Props {

}

export const Board: FC<Props> = () => {
	const dispatch = useDispatch()

	const { id } = useParams()

	const data = useSelector(({ board }) => board)

	const { name, lists } = data.data
	console.log(lists)

	useEffect(() => {
		id && dispatch(fetchBoard(id))
	}, [id, dispatch])

	return (
		<>
			<Track title={name}>
				{lists && lists.map((list: any) => (
					<CardList {...list} />
				))}
			</Track>
		</>
	)
}
