import React, { FC, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'

import { useSelector } from 'utils/useReduxSelector'
import { fetchBoard } from 'redux/modules/board'
import { fetchCardsByBoard } from 'redux/modules/cardsByBoard'
import { Track } from 'components/common/Track'
import { CardList } from 'components/CardList'

interface Props {

}

export const Board: FC<Props> = () => {
	const dispatch = useDispatch()

	const { id } = useParams()

	const board = useSelector(({ board }) => board)
	const { name, lists } = board.data

	const cards = useSelector(({ cardsByBoard }) => cardsByBoard)

	useEffect(() => {
		id && dispatch(fetchBoard(id))
		id && dispatch(fetchCardsByBoard(id))
	}, [id, dispatch])

	const filterCards = (array: any[], id: string) => {
		return array.filter(item => item.idList === id)
	}

	return (
		<>
			<Track type="cards" title={name}>
				{lists && lists.map((list: any) => (
					<CardList
						key={list.id}
						name={list.name}
						closed={list.closed}
						items={filterCards(cards.items, list.id)}
					/>
				))}
			</Track>
		</>
	)
}
