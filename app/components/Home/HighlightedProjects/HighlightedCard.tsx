import React from 'react'
import Image from 'next/image'
import { Link } from '../../Link'
import { HiArrowNarrowRight } from 'react-icons/hi'
import { TechBadge } from '../../TechBadge'

export const HighlightedCard = () => {
	return (
		<article className='flex gap-6 lg:gap-12 flex-col lg:flex-row'>
			<div className='w-full h-full flex items-center justify-center'>
				<Image
					src='https://media.graphassets.com/FRhUdgUQTHmLmwf9u0BA'
					alt='BookWise'
					width={420}
					height={304}
					className='sm:w-full w-[70%] h-[250px] sm:h-[350px] lg:w-[480px] lg:min-h-full object-cover rounded-lg'
				/>
			</div>
			<div>
				<h3 className='flex items-center gap-3 font-medium text-lg text-pale-sky-50'>
					<Image
						src='images/icons/project-title-icon.svg'
						alt='logo projects'
						width={20}
						height={20}
					/>
					BookWise
				</h3>
				<p className='text-pale-sky-50 my-6'>
					BookWise é uma plataforma de avaliação de livros que foi desenvolvida
					durante o bootcamp Ignite da Rocketseat. Com apenas um Figma
					precisávamos desenvolver essa aplicação completa Full Stack com
				</p>
				<ul className='flex flex-wrap gap-x-2 gap-y-3 mb-8 lg:max-w-[350px]'>
					{Array.from({ length: 5 }).map((_, index) => (
						<TechBadge name='Next.js' key={index} />
					))}
				</ul>
				<Link href='project/bookwise'>
					voir le projet <HiArrowNarrowRight size={32} />
				</Link>
			</div>
		</article>
	)
}
