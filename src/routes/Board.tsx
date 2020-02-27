import React, { useEffect } from 'react'
import { connect, useDispatch } from 'react-redux'
import { fetchBoard } from 'redux/actions/boardActions'
import { useParams } from 'react-router-dom'

interface Props {

}

const Board: React.FC<Props> = ({ error, isLoading, board }: any) => {
	const dispatch = useDispatch()

	const { id } = useParams()

	useEffect(() => {
		id && dispatch(fetchBoard(id))
	}, [id])

	return (
		<>
			{error && <div>Error: {error.message}</div>}
			{isLoading && <div>Loading...</div>}
			{!error && !isLoading && board &&
				<div>
					Board: {board && board.name}
				</div>
			}
		</>
	)
}

const mapStateToProps = (state: any) => ({
	board: state.board.data,
	isLoading: state.board.isLoading,
	error: state.board.error
})

const mapDispatchToProps = {
	fetchBoard
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Board)
