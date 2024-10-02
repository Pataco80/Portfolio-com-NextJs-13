import React from 'react'
import { cn } from '../lib/utils'

type DividerLineProps = {
	className?: string
}

export const DividerHorizontal = ({ className }: DividerLineProps) => {
	return (
		<div className={cn('w-full h-[2px] my-6 bg-pale-sky-600', className)} />
	)
}
