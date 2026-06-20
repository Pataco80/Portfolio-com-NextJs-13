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
		<div className={cn('w-full h-[2px] my-6 bg-gradient-to-r from-pale-sky-700 via-blue-ribbon-500/60 to-pale-sky-700', className)} />
	)
}
