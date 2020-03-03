import React, { FC } from 'react'
import styled from 'styled-components'

import { Paper } from './Paper'
import { Icon } from './Icon'

interface Props {
	type?: 'search'
	className?: string
}

export const Input: FC<Props> = ({ type, className }) => {
	return (
		<StyledInput className={className}>
			<form onSubmit={(e: any) => {
				e.preventDefault()
				console.log('ran')
			}}>
				<input type="text" />
				{type === 'search' &&
					<button>
						<Icon variant="search" />
					</button>
				}
			</form>
		</StyledInput>
	)
}

const StyledInput = styled(Paper)`
	padding: 5px 1rem;
	border-radius: 25px;
	font-size: 1rem;
	form {
		display: flex;
		align-items: center;
	}
	input {
		width: 100%;
		background-color: transparent;
		box-shadow: none;
		border: none;
		outline: none;
		font-size: inherit;
	}
	button {
		all: unset;
		display: flex;
		cursor: pointer;
		margin-left: .5rem;
	}
`
