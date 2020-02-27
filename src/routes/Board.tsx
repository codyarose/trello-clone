import React from 'react'
import { useParams } from 'react-router-dom'

interface Props {

}

const Board: React.FC<Props> = () => {
	const { id } = useParams()

	return (
		<div>
			Board: {id}
		</div>
	)
}

export default Board
