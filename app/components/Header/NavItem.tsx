import { cn } from '@/app/lib/utils'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
type NavItemProps = {
	label: string
	href: string
}

export const NavItem = ({ label, href }: NavItemProps) => {
	const path = usePathname()

	const isActive = path === href
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
