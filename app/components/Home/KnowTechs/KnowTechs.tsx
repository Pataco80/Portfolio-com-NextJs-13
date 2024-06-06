import React from 'react'
import { SectionTitle } from '../../SectionTitle'
import { KnowTechsCard } from './KnowTechsCard'
import { TbBrandHtml5 } from 'react-icons/tb'

export const KnowTechs = () => {
	return (
		<section className='container py-16 gap-16'>
			<SectionTitle title='Technologies' subtitle='connaissances' />
			<div className='grid gap-5 mt-16 grid-cols-[repeat(auto-fit,minmax(260px,1fr))]'>
				{Array.from({ length: 8 }).map((_, index) => (
					<KnowTechsCard
						key={index}
						title='HTML/CSS'
						icon={<TbBrandHtml5 size={32} />}
						startDate='25 mars 2024'
					/>
				))}
			</div>
		</section>
	)
}
