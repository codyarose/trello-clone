import React, { FC } from 'react'
import styled from 'styled-components'

import { Paper } from './Paper'
import { Typography } from './Typography'
import { Avatar } from './Avatar'
import { Icon } from './Icon'

interface Props {
	type: string
	title: string
	desc: string
	members: any[]
}

export const Card: FC<Props> = ({ type, title, desc, members }) => {
	const membersToShow = members.slice(0, 4)
	const membersToHide = members.slice(3)

	return (
		<CardContainer>
			<CardTitle variant="md">{title}</CardTitle>
			<CardDesc variant="sm">{desc}</CardDesc>
			{!!members.length &&
				<CardMembers>
					{membersToShow.map((member, i, arr) => {
						if (members.length > 4 && arr.length - 1 === i) {
							return `+${membersToHide.length}`
						}
						return <Avatar url={`https://i.pravatar.cc/30?u=${member.id}`} alt="Avatar" size="md" />
					}
					)}
				</CardMembers>
			}
			<CardIcons>
				{type === 'board' && <Icon variant="arrow" />}
			</CardIcons>
		</CardContainer>
	)
}

const CardContainer = styled(Paper)`
	padding: 20px;
	display: grid;
	grid-template-columns: 1fr 1fr;
	grid-template-rows: auto;
	grid-template-areas:
		'title title'
		'desc desc'
		'members icons';
`

const CardTitle = styled(Typography)`
	grid-area: title;
	font-weight: normal;
	margin-bottom: .25rem;
`

const CardDesc = styled(Typography)`
	grid-area: desc;
	margin-bottom: 1.5rem;
	opacity: .4;
`

const CardMembers = styled.div`
	grid-area: members;
	display: flex;
	& > * {
		margin-right: -.75rem;
	}
`

const CardIcons = styled.div`
	grid-area: icons;
	display: flex;
	align-items: flex-end;
	justify-content: flex-end;
	opacity: .4;
`
