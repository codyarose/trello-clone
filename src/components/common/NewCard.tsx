import React, { FC } from 'react'
import styled from 'styled-components'

import { Paper } from './Paper'
import { Typography } from './Typography'

interface Props {
	type: 'board' | 'card'
}

export const NewCard: FC<Props> = ({ type }) => {
	return (
		<NewCardContainer type={type}>
			<Typography>
				{type === 'board' && <span>Create new board</span>}
				{type === 'card' && <span>+ Add new card</span>}
			</Typography>
		</NewCardContainer>
	)
}

const NewCardContainer = styled(Paper) <Partial<Props>>`
	display: flex;
	justify-content: center;
	align-items: center;
	height: ${({ type }) => type === 'board' ? '142' : type === 'card' && '158'}px;
	background-color: transparent;
	border: 1px dashed rgba(${({ theme }) => theme.accent}, .2);
`
