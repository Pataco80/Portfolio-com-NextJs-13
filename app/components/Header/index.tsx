'use client'
import Link from 'next/link'
import Image from 'next/image'
import { NavItem } from './NavItem'
export const Header = () => {
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
	return (
		<header className='absolute top-0 w-full z-10 h-24 flex justify-between items-center'>
			<div className='container flex items-center justify-between'>
				<Link href='/'>
					<Image
						src='/images/logos/logo.svg'
						alt='Logo DWDeveloppement'
						width={50}
						height={50}
					/>
				</Link>
				<nav>
					<ul className='list-none flex gap-6'>
						{NAV_ITEMS.map((item) => (
							<NavItem {...item} key={item.label} />
						))}
					</ul>
				</nav>
			</div>
		</header>
	)
}
