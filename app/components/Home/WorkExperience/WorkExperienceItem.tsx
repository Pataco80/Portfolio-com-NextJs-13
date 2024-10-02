import Image from 'next/image'
import React from 'react'
import { TechBadge } from '@/app/components/TechBadge'

type WorkExperienceItemProps = {
	enterprise: string,
	job: string,
	image: string,
	link: string,
	time: string,
	description: string,
	techs:string[]
}

export const WorkExperienceItem = ({enterprise,job,image,link,time,description,techs}:WorkExperienceItemProps) => {
	return (
		<article className='grid grid-cols-[40px,1fr] gap-4'>
			<div className='grid grid-col grid-rows-[40px,1fr] justify-items-center gap-4'>
				<div className='rounded-full p-1 border border-pale-sky-600 grid items-center'>
					<Image src={`/images/logos/${image}`} alt={`logo de ${enterprise}`} width={40} height={40} />
				</div>
					<div className='w-[2px] bg-pale-sky-600 h-full'/>
				</div>
			<div className='flex flex-col gap-6'>
				<div className='flex flex-col gap-2 text-sm sm:text-base'>
					<a href={link} target='_blank' rel='noreferrer' className='text-pale-sky-500 hover:text-blue-ribbon transition-colors'>{`@ ${enterprise}`}</a>
					<h4>{job}</h4>
					<p className='text-pale-sky-500'>{time}</p>
					<p className='text-pale-sky-400'>{description}</p>
				</div>
				<div className='flex flex-col gap-3'>
					<h5 className='font-semibold'>Compétences</h5>
					<ul className='flex gap-x-2 gap-y-3 flex-wrap max-w-[350px] list-none'>
					{techs.map((item, index) => {
						return <li key={index}><TechBadge name={item} /></li>
					})}
					</ul>
				</div>
			</div>
		</article>
	)
}
