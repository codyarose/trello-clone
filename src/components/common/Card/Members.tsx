import React, { FC } from 'react'
import styled from 'styled-components'

import { Avatar } from '../Avatar'

interface Props {
	array: any[]
}

export const Members: FC<Props> = ({ array }) => {
	const membersToShow = array.slice(0, 4)
	const membersToHide = array.slice(3)

	return (
		<MembersContainer>
			{membersToShow.map((member, i, arr) => {
				if (array.length > 4 && arr.length - 1 === i) {
					return `+${membersToHide.length}`
				}
				return <Avatar
					key={member.id}
					url={`https://i.pravatar.cc/30?u=${member.id}`}
					alt="Avatar"
					size="md"
				/>
			})}
		</MembersContainer>
	)
}

const MembersContainer = styled.div`
	grid-area: members;
	display: flex;
	margin-top: 1.5rem;
	& > * {
		margin-right: -.75rem;
	}
`
