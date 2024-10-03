import React from 'react'
import { SectionTitle } from '@/app/components/SectionTitle'
import { WorkExperienceItem } from './WorkExperienceItem'
import data from '@/app/data/works-experiences.json'

export const WorkExperience = () => {
	const worksList = data.works_experiences
	return (
		<section className='container flex flex-col md:flex-row gap-8 lg:gap-10 py-16'>
			<article className='max-w-[450px] md:max-w-[300px] lg:max-w-[450px]'>
				<SectionTitle
					title='Expériences professionnelles'
					subtitle='expériences'
				/>
				<p className='mt-6 text-pale-sky-400'>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque a
					similique temporibus quaerat soluta nulla distinctio assumenda velit.
					Laboriosam, aperiam?
				</p>
			</article>
			<div className='flex flex-col gap-8'>
				{
					worksList.map((item, index) => {
						return <WorkExperienceItem key={index} enterprise={item.entreprise} link={item.link} job={item.job} time={item.time} description={item.description} techs={item.techs} image={item.image} />
					})
				}				
			</div>
		</section>
	)
}
