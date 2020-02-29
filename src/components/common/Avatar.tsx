import React, { FC } from 'react'
import styled from 'styled-components'

interface Props {
	url: string
	size?: string
	alt: string
}

const sizes: { [key: string]: string } = {
	sm: "24px",
	md: "30px",
	lg: "40px",
}

export const Avatar: FC<Props> = ({ url, alt, size }) => {
	console.log(size)
	return (
		<StyledAvatar size={size ? sizes[size] : sizes["md"]}>
			<img src={url} alt={alt} />
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
