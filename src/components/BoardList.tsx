import React, { FC } from 'react'
import { Link } from 'react-router-dom'
// import { v4 as uuidv4 } from 'uuid'

import { Card } from './common/Card'
import { NewCard } from './common/NewCard'

interface Props {
	items: any[]
}

export const BoardList: FC<Props> = ({ items }) => {
	return (
		<>
			{items && items.map((board: any) =>
				<li key={board.id}>
					<Link to={`/board/${board.id}`}>
						<Card
							type="board"
							title={board.name}
							desc={board.desc}
							members={board.memberships}
							background={board.prefs.background}
						/>
					</Link>
				</li>
			)}
			<li>
				<NewCard type="board" />
			</li>
		</>
	)
}
