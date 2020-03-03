import React, { FC, SVGProps } from 'react'
import { ReactComponent as message } from './message.svg'
import { ReactComponent as heart } from './heart.svg'
import { ReactComponent as attachment } from './attachment.svg'
import { ReactComponent as plus } from './plus.svg'
import { ReactComponent as plusCircle } from './plus-circle.svg'
import { ReactComponent as bell } from './bell.svg'
import { ReactComponent as info } from './info.svg'
import { ReactComponent as lock } from './lock.svg'
import { ReactComponent as globe } from './globe.svg'
import { ReactComponent as more } from './more.svg'
import { ReactComponent as search } from './search.svg'
import { ReactComponent as arrow } from './arrow.svg'
import { ReactComponent as trello } from './trello.svg'
import { ReactComponent as trelloIcon } from './trello-icon.svg'

const icons: { [key: string]: FC<SVGProps<SVGSVGElement>> } = {
	message,
	heart,
	attachment,
	plus,
	plusCircle,
	bell,
	info,
	lock,
	globe,
	more,
	search,
	arrow,
	trello,
	trelloIcon
}

const sizes: { [key: string]: string } = {
	s: "16px",
	m: "20px",
	lg: "24px",
	xl: "76px"
}

interface Props {
	variant?: string
	size?: string
	className?: string
}

export const Icon = ({ variant = "info", size = sizes["s"], className }: Props) => {
	const Svg = icons[variant] || icons["message"]

	const _size = variant === 'trello' ? sizes["xl"] : sizes[size] || sizes["s"]

	return (
		<div style={{ minWidth: _size, maxWidth: _size, display: 'flex' }}>
			<Svg width="100%" className={className} />
		</div>
	)
}
