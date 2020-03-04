import React, { FC } from 'react'
import styled from 'styled-components'
import { Icon } from './Icon'

interface Props {
	url?: string
	size?: string
	alt?: string
	type?: 'normal' | 'overflow' | 'add'
	overflow?: number
}

const sizes: { [key: string]: string } = {
	sm: "24px",
	md: "30px",
	lg: "40px",
}

export const Avatar: FC<Props> = ({ url, alt, size, type = 'normal', overflow }) => {
	return (
		<StyledAvatar size={size ? sizes[size] : sizes["md"]}>
			{type === 'normal' && <img src={url} alt={alt} />}
			{type === 'add' && <StyledLast><Icon size="xs" variant="plus" /></StyledLast>}
			{type === 'overflow' && <StyledLast>+{overflow}</StyledLast>}
		</StyledAvatar>
	)
}

const StyledAvatar = styled.div<Partial<Props>>`
	width: ${({ size }) => size};
	height: ${({ size }) => size};
	border-radius: 50%;
	overflow: hidden;
	img {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}
`

const StyledLast = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 100%;
	height: 100%;
	background-color: rgb(${({ theme }) => theme.accent});
	color: #fff;
	font-size: 10px;
`
