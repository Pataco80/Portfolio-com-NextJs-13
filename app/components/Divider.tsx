import React from 'react'
import { cn } from '../lib/utils'

type DividerProps = {
	direction?: string
	className?: string
}

export const Divider = ({ direction, className }: DividerProps) => {
	if (direction === 'vertical') {
		return (
			<span
				className={cn(
					'flex h-full mx-8 border-l-8 border-l-pale-sky-500',
					className
				)}
			/>
		)
	} else {
		return (
			<span
				className={cn(
					'flex w-full my-8 border-b border-b-pale-sky-500',
					className
				)}
			/>
		)
	}
}
