import NextLink from 'next/link'
import { ComponentProps } from 'react'
import { cn } from '@/app/lib/utils'
type LinkProps = ComponentProps<typeof NextLink>

export const Link = ({ children, className, ...props }: LinkProps) => {
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
