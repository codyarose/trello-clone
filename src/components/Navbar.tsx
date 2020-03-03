import React, { FC, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

import { useSelector } from 'utils/useReduxSelector'
import { fetchUser } from 'redux/modules/user'

import { Icon } from 'components/common/Icon'
import { Separator } from 'components/common/Separator'

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
				<StyledNavbar>
					<NavbarSection>
						<StyledTrello variant="trello" />
						<Separator />
						<Link to="/">
							<BoardsIcon variant="trelloIcon" size="m" />
							<span>Boards</span>
						</Link>
						<Separator />
					</NavbarSection>
					<NavbarSection>
						asdf
					</NavbarSection>
				</StyledNavbar>
			}
		</div>
	)
}

const StyledNavbar = styled.nav`
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 9px 30px;
	border-bottom: 1px solid rgba(${({ theme }) => theme.accent}, .1);
`

const NavbarSection = styled.div`
	display: flex;
	align-items: center;
	& > a {
		display: flex;
		text-decoration: none;
		color: inherit;
	}
`

const StyledTrello = styled(Icon)`
	color: ${({ theme }) => theme.font};
`

const BoardsIcon = styled(Icon)`
	margin-right: 5px;
`
