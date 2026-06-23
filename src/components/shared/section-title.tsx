// Import React
import { ElementType } from 'react'

// Import TailwindCSS utilities
import { cn } from '@/lib/utils'

// Types Props
type SectionTitleProps = {
	title: string
	subtitle: string
	className?: string
	/** Niveau/élément du titre (convention `as`). Défaut : h3. */
	as?: ElementType
}

// Component
export const SectionTitle = ({
	title,
	subtitle,
	className,
	as: Heading = 'h3',
}: SectionTitleProps) => {

	// JSX Component
	return (
		<div className={cn('flex flex-col gap-4', className)}>
			<span className='font-mono text-accent text-base'>{`.../${subtitle}`}</span>
			<Heading className='text-3xl font-medium'>{title}</Heading>
		</div>
	)
}
