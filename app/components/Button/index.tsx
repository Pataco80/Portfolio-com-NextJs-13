// Imports React
import React, { ButtonHTMLAttributes } from 'react'

// Imports Utils for TailwindCSS
import { cn } from '@/app/lib/utils'

// Types Props
type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>

// Component
export const Button = ({ children, className, ...props }: ButtonProps) => {

	// JSX Component
	return (
		<button
			{...props}
			className={cn(
				'bg-blue-ribbon-800 text-white px-4 py-3 flex items-center gap-3 rounded-lg shadow-button hover:bg-blue-ribbon-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-ribbon-300 focus-visible:ring-offset-2 focus-visible:ring-offset-pale-sky-900 transition-all disabled:opacity-50',
				className
			)}>
			{children}
		</button>
	)
}
