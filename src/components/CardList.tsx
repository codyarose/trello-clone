import React, { FC } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

import { Paper } from './common/Paper'
import { Card } from './common/Card'
import { NewCard } from './common/NewCard'
import { Icon } from './common/Icon'

interface Props {
	id?: string
	name: string
	closed: boolean
	items: any[]
}

export const CardList: FC<Props> = ({ id, name, closed, items }) => {
	return (
		<>
			{!closed &&
				<StyledCardList>
					<CardListContent>
						<StyledHeader>
							<span>{name}</span>
							<button>
								<Icon variant="more" size="lg" />
							</button>
						</StyledHeader>
						<CardsContainer>
							{items && items.map((item: any) =>
								<Card
									type="card"
									title={item.name}
									desc={item.desc}
									members={item.idMembers}
									labels={item.labels}
									badges={item.badges}
								/>
							)}
							<NewCard type="card" />
						</CardsContainer>
					</CardListContent>
				</StyledCardList>
			}
		</>
	)
}

const StyledCardList = styled.div`
	display: inline-block;
	/* flex-direction: column; */
	width: 362px;
	height: 100%;
	margin: 0 5px;
	vertical-align: top;
	/* display: grid;
	grid-template-rows: 51px minmax(auto, 740px);
	gap: 10px; */
`

const CardListContent = styled.div`
	position: relative;
	display: flex;
	flex-direction: column;
	max-height: 100%;
`

const StyledHeader = styled(Paper)`
	display: flex;
	justify-content: space-between;
	padding: 14px 20px 12px;

	button {
		all: unset;
		color: rgba(${({ theme }) => theme.accent}, .2);
		&:hover {
			color: rgba(${({ theme }) => theme.accent}, .4);
		}
	}
`

const CardsContainer = styled.div`
	flex: 1 1 auto;
	overflow-y: auto;
	overflow-x: hidden;
	min-height: 0;
	/* display: grid; */
	/* grid-template-columns: 1fr; */
	/* grid-template-rows: min-content; */
	/* gap: 10px; */
	/* &::-webkit-scrollbar {
		width: 0;
	} */
`
