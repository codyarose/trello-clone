import React, { FC } from 'react'
import { ThemeProvider, createGlobalStyle } from 'styled-components'
import 'typeface-poppins'

interface Props {
	mode: 'light' | 'dark'
}

interface ITheme {
	[key: string]: {
		base: string
		paper: string
		font: string
		accent: string
	}
}

const theme: ITheme = {
	light: {
		base: '#ffffff',
		paper: '#f4f4f4',
		font: '#000000',
		accent: '0,0,0'
	},
	dark: {
		base: '#000000',
		paper: 'gray',
		font: '#ffffff',
		accent: '255,255,255',
	}
}

export const Theme: FC<Props> = ({ children, mode }) => {
	const GlobalStyle = createGlobalStyle`
		body {
			font-family: Poppins, sans-serif;
			margin: 0;
			background-color: ${theme[mode].base};
			color: ${theme[mode].font}
		}
	`

	return (
		<ThemeProvider theme={theme[mode]}>
			<GlobalStyle />
			{children}
		</ThemeProvider>
	)
}
