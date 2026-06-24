'use client'

// Imports Next plugins
import Link from 'next/link'
import Image from 'next/image'

// Imports Components
import { NavItem } from '@/components/layouts/nav-item'
import { ThemeToggle } from '@/components/shared/theme-toggle'

export const Header = () => {
	// Components items links
	const NAV_ITEMS = [
		{
			label: 'Home',
			href: '/',
		},
		{
			label: 'Projects',
			href: '/projects',
		},
	]

	// JSX Component
	return (
		<header id='header' className='absolute top-0 w-full z-10 h-24 flex justify-between items-center'>
			<div className='container flex items-center justify-between'>
				<Link href='/' className='inline-flex rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-ribbon-300 focus-visible:ring-offset-2 focus-visible:ring-offset-pale-sky-900'>
					<Image src='/icons/logo.svg' alt='Logo DWDeveloppement' width={50} height={50} />
				</Link>
				<div className='flex items-center gap-6'>
					<nav>
						<ul className='list-none flex gap-6'>
							{NAV_ITEMS.map((item) => (
								<NavItem {...item} key={item.label} />
							))}
						</ul>
					</nav>
					<ThemeToggle />
				</div>
			</div>
		</header>
	)
}
