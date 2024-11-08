	// Import TailwindCSS utilities
import { cn } from '../lib/utils'

// Types Props
type DividerLineProps = {
	className?: string
}

// Component
export const DividerHorizontal = ({ className }: DividerLineProps) => {

	// JSX Component
	return (
		<div className={cn('w-full h-[2px] my-6 bg-pale-sky-600', className)} />
	)
}
