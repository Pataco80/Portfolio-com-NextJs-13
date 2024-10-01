import { cn } from '@/app/lib/utils'
import React, { ButtonHTMLAttributes } from 'react'

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>
export const Button = ({ children, className, ...props }: ButtonProps) => {
	return (
		<button
			{...props}
			className={cn(
				'bg-blue-ribbon-800 text-pale-sky-300 px-4 py-3 flex items-center gap-3 rounded-lg shadow-button hover:bg-blue-ribbon-500 transition-all disabled:opacity-50',
				className
			)}>
			{children}
		</button>
	)
}
