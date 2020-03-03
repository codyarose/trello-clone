import styled from 'styled-components'

export const Separator = styled.div`
	width: 1px;
	height: 2rem;
	background-color: rgba(${({ theme }) => theme.accent}, .1);
	border-radius: .5px;
	margin: 0 20px;
`
