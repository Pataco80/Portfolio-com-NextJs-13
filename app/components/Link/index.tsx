// Imports React
import { ComponentProps } from 'react'

// Imports Next plugins
import NextLink from 'next/link'

// Imports TailwindCSS utilities
import { cn } from '@/app/lib/utils'

// Types Props
type LinkProps = ComponentProps<typeof NextLink>

// Component
export const Link = ({ children, className, ...props }: LinkProps) => {

	// JSX Component
	return (
		<NextLink
			className={cn(
				'flex items-center gap-2 text-sm text-pale-sky-300 hover:text-blue-ribbon transition-colors',
				className
			)}
			{...props}>
			{children}
		</NextLink>
	)
}
