import { ReactNode } from "react";

interface Variant {
	variant?: 'xl'
	| 'lg'
	| 'md'
	| 'sm'
}

interface Props {
	children: ReactNode
	component?: any
	className?: string
}

export default interface TypographyTypes extends Variant, Props { }
