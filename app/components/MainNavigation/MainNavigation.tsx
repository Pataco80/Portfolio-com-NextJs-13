'use client'
import Link from 'next/link'
import Image from 'next/image'
import { NavItems } from './NavItems'
import { navLinks } from '../../constants/navLinks'

export const MainNavigation = () => {
	return (
		<div className='absolute top-0 flex items-center w-full h-16'>
			<div className='container flex items-center justify-between'>
				<Link href='/'>
					<Image src='/images/logo.svg' alt='logo' width={79} height={40} />
				</Link>
				<nav>
					<ul className='flex items-end xs:gap-4 gap-6 sm:gap-10'>
						{navLinks.map((item) => (
							<NavItems {...item} key={item.label} />
						))}
					</ul>
				</nav>
			</div>
		</div>
	)
}
