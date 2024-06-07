import React from 'react'
import { SectionTitle } from '../../SectionTitle'
import { ExperienceItem } from '../ExperienceItem/ExperienceItem'

export const WorkExperience = () => {
	return (
		<section className='container flex py-16 gap-10 md:gap-4 lg:gap-8 flex-col md:flex-row'>
			<article className='w-full md:max-w-[250px] lg:max-w-sm'>
				<SectionTitle
					title='Expériences professionnelles'
					subtitle='expériences'
				/>
				<p className='mt-6 text-pale-gray-400'>
					Estou sempre aberto a novos desafios e projetos emocionantes. Vamos
					trabalhar juntos para criar soluções incríveis para sua empresa!
				</p>
			</article>

			<div className='flex flex-col gap-4'>
				<ExperienceItem />
				<ExperienceItem />
			</div>
		</section>
	)
}
