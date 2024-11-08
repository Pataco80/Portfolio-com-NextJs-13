	// Import TailwindCSS utilities
import { cn } from '@/app/lib/utils'

// Types Props
type SectionTitleProps = {
	title: string
	subtitle: string
	className?: string
}

// Component
export const SectionTitle = ({
	title,
	subtitle,
	className,
}: SectionTitleProps) => {

	// JSX Component
	return (
		<div className={cn('flex flex-col gap-4', className)}>
			<span className='font-mono text-blue-ribbon text-sm'>{`.../${subtitle}`}</span>
			<h3 className='text-3xl font-medium'>{title}</h3>
		</div>
	)
}
