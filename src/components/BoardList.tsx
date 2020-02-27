import React, { useEffect } from 'react'
import { connect, useDispatch } from 'react-redux'
// import { v4 as uuidv4 } from 'uuid'
import { fetchAllBoards } from 'redux/actions/boardActions'
import { Link } from 'react-router-dom'

interface Props {

}

const BoardList: React.FC<Props> = ({ error, isLoading, boards }: any) => {
	const dispatch = useDispatch()

	useEffect(() => {
		dispatch(fetchAllBoards())
	}, [])

	return (
		<>
			{error && <div>Error: {error.message}</div>}
			{isLoading && <div>Loading...</div>}
			{!error && !isLoading && boards &&
				<ul>
					{boards.map((board: any) =>
						<li key={board.id}>
							<Link to={`/board/${board.id}`}>{board.name}</Link>
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


export default connect(
	mapStateToProps,
)(BoardList)
