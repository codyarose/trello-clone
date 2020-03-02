import React, { FC } from 'react'
import { Link } from 'react-router-dom'
// import { v4 as uuidv4 } from 'uuid'

import { RootState } from 'redux/modules/allBoards'

export const BoardList: FC<RootState> = ({ error, isLoading, items }) => {
	return (
		<>
			{error && <div>Error: {error.message}</div>}
			{isLoading && <div>Loading...</div>}
			{items &&
				<ul>
					{items.map((board: any) =>
						<li key={board.id}>
							<Link to={`/board/${board.id}`}>{board.name}</Link>
						</li>
					)}
				</ul>
			}
		</>
	)
}
