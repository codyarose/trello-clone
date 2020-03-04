import React, { FC } from 'react'
import styled from 'styled-components'

interface Props {
	array: any[]
}

export const Labels: FC<Props> = ({ array }) => {
	return (
		<LabelsContainer>
			{array.map(label => (
				<Label key={label.id} title={label.name} color={label.color} />
			))}
		</LabelsContainer>
	)
}

const LabelsContainer = styled.div`
	grid-area: labels;
	display: grid;
	grid-template-columns: repeat(5, 1fr);
	gap: .5rem;
	margin-bottom: 0.5rem;
`

const Label = styled.div`
	width: 100%;
	height: 0.5rem;
	background-color: ${({ color }) => color};
	border-radius: 4px;
`
