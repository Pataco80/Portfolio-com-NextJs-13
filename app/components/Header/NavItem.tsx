// Imports Next plugins
import Link from 'next/link'
import { usePathname } from 'next/navigation'

// Imports Utils for TailwindCSS
import { cn } from '@/app/lib/utils'

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
					'text-pale-sky-400 hover:text-blue-ribbon',
					isActive && 'text-pale-sky-50'
				)}>
				<span className='text-blue-ribbon mr-1'>#</span>
				{label}
			</Link>
		</li>
	)
}
