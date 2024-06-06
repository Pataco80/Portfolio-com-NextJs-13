import React from 'react'
import { cn } from '@/app/lib/utils'
type SectionTitleProps = {
	title: string
	subtitle: string
	className?: string
}

export const SectionTitle = ({
	title,
	subtitle,
	className,
}: SectionTitleProps) => {
	return (
		<div className={cn('flex flex-col gap-4', className)}>
			<span className='font-mono text-sm text-blue-ribbon'>{`.../${subtitle}`}</span>
			<h3 className='text-3xl font-medium text-pale-sky'>{title}</h3>
		</div>
	)
}
