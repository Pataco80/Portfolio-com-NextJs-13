// Imports Next plugins
import Link from 'next/link'
import { usePathname } from 'next/navigation'

// Imports Utils for TailwindCSS
import { cn } from '@/lib/utils'

// Types Props
type NavItemProps = {
	label: string
	href: string
}

// Component
export const NavItem = ({ label, href }: NavItemProps) => {

	// Components Functions and variables
	const path = usePathname()
	const isActive = path === href

	// JSX Component
	return (
		<li className='flex items-center font-mono'>
			<Link
				href={href}
				className={cn(
					'text-pale-sky-300 hover:text-blue-ribbon-400 transition-colors rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-ribbon-300 focus-visible:ring-offset-2 focus-visible:ring-offset-pale-sky-900',
					isActive && 'text-pale-sky-50'
				)}>
				<span className='text-blue-ribbon-400 mr-1'>#</span>
				{label}
			</Link>
		</li>
	)
}
