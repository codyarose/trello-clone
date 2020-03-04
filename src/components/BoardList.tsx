import React, { FC } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
// import { v4 as uuidv4 } from 'uuid'

import { RootState } from 'redux/modules/allBoards'
import { Card } from './common/Card'

export const BoardList: FC<RootState> = ({ error, isLoading, items }) => {
	const labels = [
		{
			"id": "5e4d7961af988c41f28160c8",
			"idBoard": "5e4d79614e7f3f847c08b832",
			"name": "Component",
			"color": "blue"
		},
		{
			"id": "5e4d7961af988c41f2lsjdii",
			"idBoard": "5e4d79614e7f3f847c08b832",
			"name": "Util",
			"color": "green"
		}
	]

	const badges = {
		"checkItems": 5,
		"checkItemsChecked": 0,
		"comments": 9,
		"attachments": 4
	}

	return (
		<>
			{error && <div>Error: {error.message}</div>}
			{isLoading && <div>Loading...</div>}
			{items &&
				<StyledTrack>
					{items.map((board: any) =>
						<li key={board.id}>
							<Link to={`/board/${board.id}`}>
								<Card
									type="card"
									title={board.name}
									desc={board.desc}
									members={board.memberships}
									background={board.prefs.background}
									imgUrl="https://images.unsplash.com/photo-1583336490127-4f08ed1e93dd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2134&q=10"
									labels={labels}
									badges={badges}
								/>
							</Link>
						</li>
					)}
				</StyledTrack>
			}
		</>
	)
}

const StyledTrack = styled.ul`
	list-style-type: none;
	margin: 0;
	padding: 20px;
	display: grid;
	grid-template-columns: repeat(auto-fill, 362px);
	gap: 30px;
	li > a {
		text-decoration: none;
		color: inherit;
	}
`
