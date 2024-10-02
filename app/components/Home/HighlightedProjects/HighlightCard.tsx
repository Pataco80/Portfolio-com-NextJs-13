import React from 'react'
import Image from 'next/image'
import { TechBadge } from '@/app/components/TechBadge'
import { Link } from '@/app/components/Link'
import { HiArrowNarrowRight } from 'react-icons/hi'

type HighlightCardProps = {
	name: string
	image: string
	altImage: string
	description: string
	url: string
	techs: string[]
}

export const HighlightCard = ({
	name,
	image,
	altImage,
	description,
	url,
	techs,
}: HighlightCardProps) => {
	return (
		<article className='flex flex-col lg:flex-row gap-6 lg:gap-12'>
			<div className='w-full h-full'>
				<Image
					src={`/images/projects/${image}`}
					alt={altImage}
					width={400}
					height={300}
					className='w-full h-[200px] sm:h-[300px] lg:w-[420px] lg:min-h-full object-cover rounded-lg'
				/>
			</div>
			<div>
				<h3 className='flex items-center gap-3 font-medium text-lg text-pale-sky-50'>
					<Image
						src='/images/icons/project-title-icon.svg'
						alt=''
						width={20}
						height={20}
					/>
					{name}
				</h3>
				<p className='text-pale-sky-400 my-6'>{description}</p>
				<ul className='flex flex-wrap gap-x-2 gap-y-3 mb-8 lg:max-w-[350px]'>
					{techs.map((item, index) => {
						return <li key={index}><TechBadge name={item} /></li>
					})}
				</ul>
				<Link href={url}>
					Voir le projet
					<HiArrowNarrowRight />
				</Link>
			</div>
		</article>
	)
}
