import React, { FC, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

import { useSelector } from 'utils/useReduxSelector'
import { fetchUser } from 'redux/modules/user'

import { Icon } from './common/Icon'
import { Separator } from './common/Separator'
import { Input } from './common/Input'
import { Avatar } from './common/Avatar'

interface Props {

}

export const Navbar: FC = () => {
	const dispatch = useDispatch()

	const { data, isLoading, error } = useSelector(({ user }) => user)

	const { avatarUrl } = data

	useEffect(() => {
		dispatch(fetchUser())
	}, [dispatch])
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
						<StyledSearch type="search" />
					</NavbarSection>

					<NavbarSection>
						<IconGroup>
							<a href="#0">
								<Icon variant="plusCircle" />
							</a>
							<a href="#0">
								<Icon variant="info" />
							</a>
							<a href="#0">
								<Icon variant="bell" />
							</a>
						</IconGroup>
						<Avatar url={avatarUrl} alt="Avatar" size="lg" />
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
	a {
		display: flex;
		text-decoration: none;
		color: inherit;
	}
`

const NavbarSection = styled.div`
	display: flex;
	align-items: center;
	&:nth-child(1) {
		flex-grow: 1;
	}
`

const StyledTrello = styled(Icon)`
	color: ${({ theme }) => theme.font};
`

const BoardsIcon = styled(Icon)`
	margin-right: 5px;
`

const StyledSearch = styled(Input)`
	width: 100%;
	max-width: 512px;
`

const IconGroup = styled.div`
	display: flex;
	align-items: center;
	a {
		display: flex;
		color: rgba(${({ theme }) => theme.accent}, .2);
		margin-right: 2rem;
	}
`
