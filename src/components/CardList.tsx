import React, { FC } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

import { Paper } from './common/Paper'
import { Card } from './common/Card'
import { NewCard } from './common/NewCard'

interface Props {
	id: string
	name: string
	closed: boolean
}

export const CardList: FC<Props> = ({ id, name, closed }) => {
	return (
		<>
			{!closed &&
				<StyledCardList>
					<StyledHeader>{name}</StyledHeader>
					{/* <Card type="card" title={name} desc={desc} members={[]} /> */}
				</StyledCardList>
			}
		</>
	)
}

const StyledCardList = styled.div`
	/*  */
`

const StyledHeader = styled(Paper)`
	padding: 14px 20px 12px;
`
