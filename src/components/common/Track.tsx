import React, { FC } from 'react'
import styled from 'styled-components'

import { Typography } from './Typography'

interface Props {

}

export const Track: FC<Props> = ({ children }) => {
	return (
		<TrackContainer>
			<TrackHeader>Header</TrackHeader>
			<TrackContents>
				{children}
			</TrackContents>
		</TrackContainer>
	)
}

const TrackContainer = styled.div`
	/*  */
`

const TrackHeader = styled(Typography)`
	/*  */
`

const TrackContents = styled.div`
	/*  */
`
