import React, { useEffect } from 'react'
import { connect, useDispatch } from 'react-redux'
// import { v4 as uuidv4 } from 'uuid'
import { fetchBoards } from 'redux/actions/boardActions'
import { Link } from 'react-router-dom'

interface Props {

}

const BoardList: React.FC<Props> = ({ error, isLoading, boards }: any) => {
	const dispatch = useDispatch()

	useEffect(() => {
		fetchBoards()
	}, [dispatch])

	return (
		<>
			{error && <div>Error: {error.message}</div>}
			{isLoading && <div>Loading...</div>}
			{!error && !isLoading && boards &&
				<ul>
					{boards.map((board: any) =>
						<li key={board.shortLink}>
							<Link to={`/board/${board.shortLink}`}>{board.name}</Link>
						</li>
					)}
				</ul>
			}
		</>
	)
}

const mapStateToProps = (state: any) => ({
	boards: state.boards.items,
	isLoading: state.boards.isLoading,
	error: state.boards.error
})

const mapDispatchToProps = {
	fetchBoards
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(BoardList)
