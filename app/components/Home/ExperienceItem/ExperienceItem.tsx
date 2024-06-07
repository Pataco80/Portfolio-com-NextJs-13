import React from 'react'
import Image from 'next/image'
import { TechBadge } from '../../TechBadge'

export const ExperienceItem = () => {
	return (
		<article className='grid grid-cols-[60px,1fr] gap-4 md:gap-10'>
			<div className='flex flex-col items-center gap-4'>
				<div className='rounded-full border border-pale-sky-500 p-0.5'>
					<Image
						src='/images/icons/logo-entreprise.png'
						alt="logo de l'entreprise"
						width={60}
						height={60}
						className='rounded-full'
					/>
				</div>
				<span className='h-full w-[1px] bg-pale-sky-500' />
			</div>
			<div>
				<div className='flex flex-col gap-2 text-sm sm:text-base'>
					<a
						className='text-pale-sky-500 hover:text-blue-ribbon transition-colors'
						href='#'>
						@ entreprise
					</a>
					<h4 className='text-pale-sky-200'>Développeur Frontend</h4>
					<span className='text-pale-sky-500 text-sm'>
						out 2022 • O momento • 1 ano e 8 meses
					</span>
					<div className='text-pale-sky-400'>
						<p>
							Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi
							eveniet quaerat illo accusamus illum nesciunt dolorum dolore, est
							id sapiente.
						</p>
					</div>
				</div>
				<p className='text-gray-400 text-sm mb-3 mt-6 font-semibold'>
					Compétences
				</p>
				<ul className='flex gap-x-2 gap-y-3 flex-wrap lg:max-w-[350px] mb-8'>
					<TechBadge name='Next.js' />
					<TechBadge name='Next.js' />
					<TechBadge name='Next.js' />
					<TechBadge name='Next.js' />
					<TechBadge name='Next.js' />
					<TechBadge name='Next.js' />
				</ul>
			</div>
		</article>
	)
}
