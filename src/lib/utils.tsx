// Import Plugins for merging classNames
import { ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

// TailwindCSS function for adding classNames
export const cn = (...inputs: ClassValue[]) => {
	return twMerge(clsx(...inputs))
}
