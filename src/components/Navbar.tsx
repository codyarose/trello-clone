import React, { FC, useEffect } from 'react'
import { useSelector } from 'utils/useReduxSelector'
import { useDispatch } from 'react-redux'
import { fetchUser } from 'redux/modules/user'

interface Props {

}

export const Navbar: FC<Props> = () => {
	const dispatch = useDispatch()
	const { data, isLoading, error } = useSelector(({ user }) => user)

	useEffect(() => {
		dispatch(fetchUser())
	}, [])
	console.log(data)

	return (
		<div>
			{isLoading && <div>Loading...</div>}
			{error && <div>Error: {error.message}</div>}
			{!error && data &&
				<div>{data.fullName}</div>
			}
		</div>
	)
}
