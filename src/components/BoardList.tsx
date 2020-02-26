import React, { useEffect } from 'react'
import { connect, useDispatch } from 'react-redux'
import { v4 as uuidv4 } from 'uuid'
import { fetchBoards } from 'redux/actions/boardActions'

interface Props {

}

const BoardList: React.FC<Props> = ({ error, isFetching, boards }: any) => {
	const dispatch = useDispatch()

	useEffect(() => {
		fetchBoards()
	}, [dispatch])

	if (error) {
		return <div>Error: {error.message}</div>
	}
	if (isFetching) {
		return <div>Fetching...</div>
	}

	return (
		<>
			<ul>
				{boards.map((board: any) =>
					<li key={board.id}>{board.name}</li>
				)}
			</ul>
		</>
	)
}

const mapStateToProps = (state: any) => ({
	boards: state.boards.items,
	isFetching: state.boards.isFetching,
	error: state.boards.error
})

const mapDispatchToProps = {
	fetchBoards
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(BoardList)
