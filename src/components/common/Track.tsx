import React, { FC } from 'react'
import styled from 'styled-components'

import { Typography } from './Typography'

interface Props {
	title: string
}

export const Track: FC<Props> = ({ title, children }) => {
	return (
		<TrackContainer>
			<TrackHeader variant="xl">{title}</TrackHeader>
			<TrackContent>
				{children}
			</TrackContent>
		</TrackContainer>
	)
}

const TrackContainer = styled.div`
	/*  */
`

const TrackHeader = styled(Typography)`
	margin-bottom: 1rem;
`

const TrackContent = styled.ul`
	list-style-type: none;
	padding: 0 0 1.5rem;
	margin: 0;
	display: grid;
	grid-auto-columns: 362px;
	grid-auto-flow: column;
	gap: 30px;
	overflow-x: auto;

	::-webkit-scrollbar {
		height: 12px;
	}
	::-webkit-scrollbar-track {
		background-color: rgba(${({ theme }) => theme.accent}, .06);
		border-radius: 10px;
	}
	::-webkit-scrollbar-thumb {
		background-color: rgba(${({ theme }) => theme.accent}, .3);
		border-radius: 10px;
	}
`
