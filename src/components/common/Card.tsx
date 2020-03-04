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
	background?: string
	imgUrl?: string
}

export const Card: FC<Props> = ({ type, title, desc, members, background, imgUrl }) => {
	const membersToShow = members.slice(0, 4)
	const membersToHide = members.slice(3)

	return (
		<CardContainer background={background} type={type}>
			{type === "card" && imgUrl &&
				<CardImage>
					<img src={imgUrl} alt="" />
				</CardImage>
			}
			<CardTitle variant="md">{title}</CardTitle>
			{desc && <CardDesc variant="sm">{desc}</CardDesc>}
			{!!members.length &&
				<CardMembers>
					{membersToShow.map((member, i, arr) => {
						if (members.length > 4 && arr.length - 1 === i) {
							return `+${membersToHide.length}`
						}
						return <Avatar
							key={member.id}
							url={`https://i.pravatar.cc/30?u=${member.id}`}
							alt="Avatar"
							size="md"
						/>
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

const CardContainer = styled(Paper) <Partial<Props>>`
	display: grid;
	grid-template-columns: 1fr 1fr;
	grid-template-rows: auto;
	grid-template-areas: ${({ type }) => type === 'board' ?
		`'title title'
		'desc desc'
		'members icons'`
		: type === 'card' &&
		`'image image'
		'tags tags'
		'title title'
		'desc desc'
		'members icons'`
	};
	background-color: ${({ background }) => background};
	padding: 20px;
`

const CardImage = styled.div`
	grid-area: image;
	width: 100%;
	height: 170px;
	border-radius: 8px;
	margin-bottom: 1rem;
	overflow: hidden;
	img {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}
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
