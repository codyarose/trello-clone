import React, { FC } from 'react'
import { ThemeProvider, createGlobalStyle } from 'styled-components'
import 'typeface-poppins'

interface Props {
	mode: 'light' | 'dark'
}

const theme = {
	light: {
		base: '#ffffff',
		paper: '#f4f4f4',
		font: '#000000'
	},
	dark: {

	}
}

const GlobalStyle = createGlobalStyle`
	body {
		font-family: Poppins, sans-serif;
		margin: 0;
	}
`

export const Theme: FC<Props> = ({ children, mode }) => {
	return (
		<ThemeProvider theme={theme[mode]}>
			<GlobalStyle />
			{children}
		</ThemeProvider>
	)
}
