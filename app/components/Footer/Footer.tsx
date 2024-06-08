import React from 'react'
import { HiHeart } from 'react-icons/hi'

export const Footer = () => {
	return (
		<footer className='py-6 bg-pale-sky-950 flex items-center justify-center gap-2 text-base md:text-lg'>
			Made with <HiHeart size={16} className='text-blue-ribbon' />
			<strong className='font-normal'>Ricardo Do Vale</strong>
		</footer>
	)
}
