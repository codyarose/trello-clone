import React, { FC } from 'react'
import styled from 'styled-components'

import { Icon } from '../Icon'

interface Props {
	type: 'board' | 'card'
	data: {
		attachments: number
		checkItems: number
		checkItemsChecked: number
		comments: number
	}
}

interface IBadgeItem {
	count?: number
	variant: string
	checkItems?: number
	checkItemsChecked?: number
}

const BadgeItem = ({ count, variant, checkItems, checkItemsChecked }: IBadgeItem) => {
	return (
		<StyledBadgeItem>
			{variant === 'checkbox'
				? <span>{checkItemsChecked}/{checkItems}</span>
				: <span>{count}</span>}
			<Icon variant={variant} />
		</StyledBadgeItem>
	)
}

export const Badges: FC<Props> = ({ type, data }) => {
	const { attachments, checkItems, checkItemsChecked, comments } = data

	return (
		<BadgesContainer>
			{type === 'board' && <Icon variant="arrow" />}
			{type === 'card' &&
				<>
					{comments > 0 && <BadgeItem count={comments} variant="comment" />}
					{checkItems > 0 &&
						<BadgeItem
							checkItems={checkItems}
							checkItemsChecked={checkItemsChecked}
							variant="checkbox"
						/>
					}
					{attachments > 0 && <BadgeItem count={attachments} variant="attachment" />}
				</>
			}
		</BadgesContainer>
	)
}

const BadgesContainer = styled.div`
	grid-area: badges;
	display: flex;
	align-items: flex-end;
	justify-content: flex-end;
	font-size: 14px;
	font-weight: 300;
	opacity: .2;
`

const StyledBadgeItem = styled.div`
	display: flex;
	align-items: center;
	margin-left: 1.5rem;
	& > span {
		margin-right: 3px;
	}
`
