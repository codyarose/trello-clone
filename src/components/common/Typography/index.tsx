import React, { FC } from 'react'
import styled, { css } from 'styled-components'
import Types from './types'

const getComponent = (variant: string) => {
	switch (variant) {
		case 'xl':
			return 'h2'
		case 'lg':
		case 'md':
			return 'h3'
		case 'sm':
			return 'p'
		default:
			return variant
	}
}

export const Typography: FC<Types> = ({
	variant = 'md',
	component,
	children,
	className
}) => {
	return (
		<StyledTypography
			variant={variant}
			as={component ? component : getComponent(variant)}
			className={className}
		>
			{children}
		</StyledTypography>
	)
}

const XLStyles = css`
	font-size: 26px;
	font-weight: 500;
	line-height: 1.2;
`
const LGStyles = css`
	font-size: 20px;;
`
const MDStyles = css`
	font-size: 1rem;
`
const SMStyles = css`
	font-size: 13px;
	font-weight: 300;
	line-height: 1.4;
`

const StyledTypography = styled.div<Types>`
	color: ${({ theme }) => theme.font};
	margin: 0;
	${({ variant }) => variant === 'xl' && XLStyles}
	${({ variant }) => variant === 'lg' && LGStyles}
	${({ variant }) => variant === 'md' && MDStyles}
	${({ variant }) => variant === 'sm' && SMStyles}
`
