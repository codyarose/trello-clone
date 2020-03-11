import React, { FC, useEffect } from 'react'
import styled from 'styled-components'
import { useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'

import { useSelector } from 'utils/useReduxSelector'
import { fetchBoard } from 'redux/modules/board'
import { fetchCardsByBoard } from 'redux/modules/cardsByBoard'
import { Track } from 'components/common/Track'
import { CardList } from 'components/CardList'
import { Typography } from 'components/common/Typography'

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
			<BoardHeader variant="xl">{name}</BoardHeader>
			<TrackContainer>
				<Track type="cards">
					{lists && lists.map((list: any) => (
						<CardList
							key={list.id}
							name={list.name}
							closed={list.closed}
							items={filterCards(cards.items, list.id)}
						/>
					))}
				</Track>
			</TrackContainer>
		</>
	)
}

const BoardHeader = styled(Typography)`
	margin-bottom: 1rem;
`

const StyledBoard = styled.div`
	overflow-y: auto;
`

const TrackContainer = styled.div`
	position: relative;
	flex-grow: 1;
`
