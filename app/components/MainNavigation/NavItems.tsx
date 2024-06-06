import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from '../../lib/utils'
type LinksProps = {
	label: string
	url: string
}

export const NavItems = ({ url, label }: LinksProps) => {
	const pathName = usePathname()
	const isActive = pathName === url
	return (
		<li
			className={cn(
				'text-pale-sky-400 hover:text-pale-sky-100 font-mono xs:text-sm text-lg md:text-2xl',
				isActive && 'text-pale-sky-100'
			)}>
			<Link href={url} className='flex gap-2'>
				<span className='text-blue-ribbon'>#</span>
				{label}
			</Link>
		</li>
	)
}
