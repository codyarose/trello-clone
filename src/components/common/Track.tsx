import React, { FC } from 'react'
import styled from 'styled-components'

interface Props {
	type: 'boards' | 'cards'
}

export const Track: FC<Props> = ({ type, children }) => {
	return (
		<TrackContent type={type}>
			{children}
		</TrackContent>
	)
}

const TrackContent = styled.div<Partial<Props>>`
	${({ type }) => type === 'cards' && 'flex-grow: 1;'}
	/* list-style-type: none; */
	padding-bottom: .5rem;
	margin-bottom: .5rem;
	/* margin: 0; */
	/* display: grid;
	grid-auto-columns: 362px;
	grid-auto-flow: column;
	gap: 30px; */
	overflow-x: auto;
	overflow-y: hidden;
	position: absolute;
	top: 0;
	right: 0;
	bottom: 0;
	left: 0;

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
