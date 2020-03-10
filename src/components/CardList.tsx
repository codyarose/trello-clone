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
					<StyledHeader>
						<span>{name}</span>
						<button>
							<Icon variant="more" size="lg" />
						</button>
					</StyledHeader>
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
				</StyledCardList>
			}
		</>
	)
}

const StyledCardList = styled.div`
	display: grid;
	grid-template-columns: 1fr;
	grid-template-rows: auto;
	gap: 10px;
	align-content: flex-start;
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
