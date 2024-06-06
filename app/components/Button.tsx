import { ButtonHTMLAttributes } from 'react'
import { cn } from '../lib/utils'
type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>

export const Button = ({ className, children, ...props }: ButtonProps) => {
	return (
		<button
			className={cn(
				'bg-blue-ribbon hover:bg-blue-ribbon-800 text-pale-sky-200 text-xl rounded-lg px-6 py-4 transition-all disabled:opacity-20 shadow-button',
				className
			)}
			{...props}>
			{children}
		</button>
	)
}
