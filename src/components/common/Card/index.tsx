import React, { FC } from 'react'
import styled from 'styled-components'

import { Paper } from '../Paper'
import { Typography } from '../Typography'
import { Icon } from '../Icon'

import { Labels } from './Labels'
import { Members } from './Members'
import { Badges } from './Badges'

interface Props {
	type: 'board' | 'card'
	title: string
	desc: string
	members: any[]
	background?: string
	imgUrl?: string
	labels?: any[]
	badges: any
}

export const Card: FC<Props> = ({ type, title, desc, members, background, imgUrl, labels, badges }) => {

	return (
		<CardContainer background={background} type={type}>
			{type === "card" && imgUrl &&
				<CardImage>
					<img src={imgUrl} alt="" />
				</CardImage>
			}
			{type === "card" && labels && !!labels.length &&
				<Labels array={labels} />
			}
			<CardTitle variant="md">{title}</CardTitle>
			{desc && <CardDesc variant="sm">{desc}</CardDesc>}
			{!!members.length && <Members array={members} />}
			<Badges type={type} data={badges} />
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
		'members badges'`
		: type === 'card' &&
		`'image image'
		'labels labels'
		'title title'
		'desc desc'
		'members badges'`
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
	opacity: .4;
`
