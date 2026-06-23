// Imports React
import { ComponentProps } from 'react'

// Imports Next plugins
import NextLink from 'next/link'

// Imports TailwindCSS utilities
import { cn } from '@/lib/utils'

// Types Props
type LinkProps = ComponentProps<typeof NextLink>

// Component
export const Link = ({ children, className, ...props }: LinkProps) => {
	// JSX Component
	return (
		<NextLink
			className={cn(
				'flex items-center gap-2 text-sm text-muted-foreground hover:text-accent transition-colors rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background',
				className,
			)}
			{...props}>
			{children}
		</NextLink>
	)
}
